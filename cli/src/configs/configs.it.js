// 发布（it）环境
var configs = {
  name: 'Steward.Web',
  version: '1.0.0-beta.0',
  productName: '福禄管家-系统总管',
  productVersion: 'X1',
  clientId: '10000063', //通行证使用的appid(一般与appid保持一致，目前只有erp的与appid不一样)
  authorId: '10000063', //当前应用对应的appid
  id: '',//商户id(临时))
  accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6IjE3OEJBNEJGMDZGQzkzMDY1QUEyNTgyRjU1QzcyMkE2IiwiY2xpZW50X2lkIjoiMTAwMDAwMDMiLCJuYW1lIjoiODAwMSIsIm5pY2tuYW1lIjoi56ym54aZIiwicGhvbmVfbnVtYmVyIjoiMTg2MjcxMTU2NTciLCJlbWFpbCI6Ijc3NTE0NTU0QHFxLmNvbSIsInJvbGUiOiJVc2VyIiwiaXNzIjoiaHR0cDovL2xvY2FsaG9zdDoxNTMxIiwiYXVkIjoiYXBpIiwiZXhwIjoxNTIxNzcyNDYxLCJuYmYiOjE1MTY1ODg0NjF9.cfYs3h1KmMdExHPNevec1s2CLOSEcAuN1aIXiTiouhc',
  host: {
    passport: {
      'getUserInfo': 'https://it-api-passport.suuyuu.cn', //获取用户信息，判断用户是否登录
      'authCode': 'https://it-console-mall-api-admin.suuyuu.cn',
      'auth': 'https://it-passport.suuyuu.cn' // 通行证登录页 登录成功后会带上code跳转到回调地址
    },
    userCenter: 'https://it-cas.suuyuu.cn',
    test:'https://it-console-mall-api-admin.suuyuu.cn',
    menage: 'https://it-manage-mall-api-admin.suuyuu.cn',
    common: 'https://it-console-api-admin.suuyuu.cn',
    log: 'https://it-api-log.suuyuu.cn', //日志管理 接口
    webapi: 'https://it-openplateform.suuyuu.cn', //开发平台  新接口的地址
    main: 'https://it-console.suuyuu.cn',//商户中心 
  }
};