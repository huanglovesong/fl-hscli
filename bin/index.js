#! /usr/bin/env node
const commander = require("commander");
const chalk = require("chalk");
const fs = require('fs-extra');
const os = require('os');
// const figlet = require("figlet");
// const shell = require("shelljs");
const { version } = require("../package.json");
const path = require("path");
const makeDir = require("make-dir");
const cpx = require("cpx");
const slash = require("slash");
const ora = require("ora");
const execSync = require("child_process").execSync;

const exec = (command, extraEnv) =>
  execSync(command, {
    stdio: "inherit",
    env: Object.assign({}, process.env, extraEnv)
  });

// console.log(
//   chalk.green(
//     figlet.textSync("React Template", {
//       font: "Cybermedium"
//     })
//   )
// );
// console.log(chalk.black.bgWhite(`v${version}`));

commander
  .version(version)
  .arguments("<project-directory>")
  .action(name => {
    const root = path.resolve(name);
    const appName = path.basename(root); // 返回path的最后一部分

    fs.ensureDirSync(name); // 确保目录存在，如果不存在就创建该目录

    console.log(`create a new project in ${chalk.green(root)}`);

    initProjectTemplate(root, appName);
  });

/**
 * @desc 初始化项目模板
 */
function initProjectTemplate(appPath, appName) {
  const templatePath = path.resolve(__dirname, '..', 'cli');
  if (fs.existsSync(templatePath)) {
    fs.copySync(templatePath, appPath);

    // const appPackage = require(path.join(appPath, 'package.json'));
    // appPackage.name = appName;

    // // 修改package.json文件
    // fs.writeFileSync(
    //   path.join(appPath, 'package.json'),
    //   JSON.stringify(appPackage, null, 2) + os.EOL
    // );
  } else {
    console.error(
      `Could not locate supplied template: ${chalk.green(templatePath)}`
    );
    removeProject(appPath, appName);
  }
}
/**
 * @desc 删除项目
 */
function removeProject(appPath, appName) {
  console.log(
    `Deleting ${chalk.cyan(`${appName}`)} from ${chalk.cyan(
      path.resolve(appPath, '..')
    )}`
  );
  process.chdir(path.resolve(appPath, '..')); // 返回上一级目录
  fs.removeSync(path.join(appPath)); // 删除整个项目目录
  console.log('Done.');
  process.exit(1);
}
commander.parse(process.argv);