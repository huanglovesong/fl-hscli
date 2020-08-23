import React from 'react';
import { Select } from 'antd';
const Option = Select.Option;

function cutWord(len, text, record, index) {
  text = text || '';
  return <span title={text}>
    {text.length > len ? text.slice(0, len) + '...' : text}
  </span>
}

function cutWordByWidth(width, text, record, index) {
  width -= 17;
  width = width < 20 ? 20 : width;

  text = text || '';
  return <div className='ellipsis' title={text} style={{ width }}>
    {text}
  </div>
}

function convertEnum(enumObj, text, record, index) {
  text = text;
  if (enumObj && enumObj[text + '']) {
    text = enumObj[text + '']
  }

  return <span title={text}>
    {text}
  </span>
}

//zhouwen
function convertEnum1(text, obj) {
  return <span title={text}>
    {obj[text + ''] || '--'}
  </span>
}

function convertImg(text, record, index) {
  return <img src={text} />
}

function timeshow(text, record, index) {
  if (text === '0001-01-01 00:00:00') {
    return <span></span>
  } else {
    return <span>{text}</span>
  }
}

function enumRenderWithSelect(enumObj) {
  var xopts = [];

  if (!enumObj) return;

  for (var key in enumObj) {
    xopts.push(
      <Option key={key} title={enumObj[key]} value={key}>{enumObj[key]}</Option>
    )
  }

  return xopts;
}

function getScrollHeight() {
  var h = document.body.clientHeight - 220;

  return h < 100 ? 100 : h;
}

function getScrollWidth(columns, defaultWidth) {
  // 设置自适应宽度列的宽度（通常为最后一列）
  defaultWidth = defaultWidth || 150;
  if (defaultWidth < 150) {
    defaultWidth = 150;
  }
  const wArr = columns.map(each => parseInt(each.width)); //eslint-disable-line
  let scrollWidth = 0;
  wArr.forEach(each => {
    scrollWidth += each || defaultWidth;
  });

  return scrollWidth;
}

function getScrollWidthx(columns) {
  var wArr = columns.map(each => parseInt(each.width));
  var scrollWidth = 0;
  wArr.forEach(each => {
    scrollWidth += each || 150;
  })

  return scrollWidth;
}

function getQueryString(name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var reg_rewrite = new RegExp("(^|/)" + name + "/([^/]*)(/|$)", "i");
  var r = window.location.search.substr(1).match(reg);
  var q = window.location.pathname.substr(1).match(reg_rewrite);
  if (r != null) {
    return unescape(r[2]);
  } else if (q != null) {
    return unescape(q[2]);
  } else {
    return null;
  }
}
function secondToDate(second_time) {
  var time = parseInt(second_time) > 9 ? parseInt(second_time) + "秒" : '0' + parseInt(second_time) + "秒";
  if (parseInt(second_time) > 60) {
    var second = parseInt(second_time) % 60;
    var min = parseInt(second_time / 60);
    time = '00:' + (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second) + "";

    if (min > 60) {
      min = parseInt(second_time / 60) % 60;
      var hour = parseInt(parseInt(second_time / 60) / 60);
      time = (hour > 9 ? hour : '0' + hour) + ":" + (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second) + "";
      if (hour > 24) {
        hour = parseInt(parseInt(second_time / 60) / 60) % 24;
        var day = parseInt(parseInt(parseInt(second_time / 60) / 60) / 24);
        time = day + "天 " + (hour > 9 ? hour : '0' + hour) + ":" + (min > 9 ? min : '0' + min) + ":" + (second > 9 ? second : '0' + second) + "";
      }
    }
  }
  return time;
}
export {
  cutWord,
  cutWordByWidth,
  convertEnum,
  enumRenderWithSelect,
  getScrollHeight,
  getScrollWidth,
  timeshow,
  convertImg,
  convertEnum1,
  getQueryString,
  secondToDate
};
