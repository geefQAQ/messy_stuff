/**
 *按照343格式化手机号
 * @param {String} phoneNumber 如"15266668888"
 * @returns {String} 如"152 6666 8888"
 */
function phoneSeparated(phoneNumber) {
  let tel = phoneNumber;
  if (tel) {
    tel = `${tel.substring(0, 3)} ${tel.substring(3, 7)} ${tel.substring(7, 11)}`;
  }
  return tel;
}

/**
 *保留两位小数添加百分号返回
 * @param {String} param 如"0.0236""
 * @returns {String} 如"2.36%"
 *
 */
function formatRecentData(param) {
  let value;
  const rate = Number(param) * 100;
  if (!Number.isInteger(rate)) {
    value = parseFloat(rate).toFixed(3);
    value = value.substring(0, value.lastIndexOf('.') + 3);
    value = parseFloat(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  } else {
    value = rate;
  }
  return `${value}%`;
}

/**
 * 数字保留几位小数（四舍五入）
 * @param {*} obj value需要格式化的数字，num保留几位小数，keepZero是否保留多余的0(默认不保留)
 */
function toFixed(obj) {
  if (!(obj || obj.value)) {
    return '';
  }
  if (!obj.num) {
    return obj.value;
  }
  const value = parseFloat(obj.value.toString());
  const num = parseFloat(obj.num.toString());
  if (obj.keepZero === true) {
    return (Math.round(value * Math.pow(10, num)) / Math.pow(10, num)).toFixed(num);
  }
  return `${parseFloat((Math.round(value * Math.pow(10, num)) / Math.pow(10, num)).toFixed(num))}`;
}

/**
 * keepPoint==1的时候，不保留小数  当keepPoint ===2 ,保留2位小数，但是不四舍五入;其他保留2位四舍五入。
 * @param {Number} param 需要格式化的值
 * @param {Number} keepPoint 格式化枚举值
 */
function formatMoney(param, keepPoint) {
  let value;
  const money = parseFloat(param);
  if (money === '' || Number.isNaN(money)) {
    return null;
  }
  // keepPoint==1的时候，不保留小数  当keepPoint ===2 ,保留2位小数，但是不四舍五入;其他的话，保留2位就是四舍五入。
  if (keepPoint === 1) {
    value = parseFloat(money)
      .toFixed(0)
      .replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  } else if (keepPoint === 2) {
    value = money.toString();
    value =
      value.indexOf('.') > 0 ?
        value.replace(/\.\d*/i, decimal => (decimal.length === 2 ? `${decimal}0` : decimal.slice(0, 3))) :
        `${money}.00`;
    value = value.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  } else {
    value = cgbToFixed({ value: money, num: 2, keepZero: true }).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  }
  return value;
}

/**
 * 去掉逗号和.00
 * @param {String} val 格式化后的金额
 */
function cancelFormat(val) {
  return val.replace(/,|\s|-|(\.00)\b/g, '');
}

/**
 * 校验密码的强度
 * @param {String} password 待校验的密码
 * @param {Object} options
 *    @param {Number} options.type 校验的强度类型 [0,1,2,3,4]   0:纯数字 1：纯字母 2：字母+数字 3：大小写字母+数字 4：大小写字母+数字+符号
 *    @param {Number} options.minLength 密码的最少位数 默认为8
 *    @param {Number} options.maxLength 密码的最大位数 默认为12
 * @todo 常用密码的强度校验还包括：是否超过指定位数的连续重复字符、是否出现超过指定位数的顺子
 */
function passwordFormat(password, options = {}) {
  const defOpt = { type: 3, minLength: 8, maxLength: 12 };
  const { type, minLength, maxLength } = {
    ...defOpt,
    ...options,
  };
  if (minLength < 0 || maxLength < 0 || maxLength < minLength) {
    console.error('密码的最少位数多于最大位数');
    return false;
  }
  // 校验密码长度
  if (password.length < minLength || password.length > maxLength) {
    console.error('密码长度有误');
    return false;
  }

  // 匹配类型
  const [PureDigital, PureLetter, LetterWithDigital, CaptialAndLowerWithDigital, AllType] = [0, 1, 2, 3, 4];
  // 正则表达式列表
  const range = `${minLength},${maxLength}`;
  const RegArray = {};
  RegArray[PureDigital] = `^[0-9]{}{${range}}`; // 0 纯数字
  RegArray[PureLetter] = `^[a-zA-Z]{${range}}$`; // 1 纯字母
  RegArray[LetterWithDigital] = `^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]{${range}}$`; // 2 数字+字母
  RegArray[CaptialAndLowerWithDigital] = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])[A-Za-z0-9]{${range}}$`; // 3 数字+大小写字母
  RegArray[AllType] = `^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@!%#?&]).{${range}}$`; // 4 数字+大小写字母+特殊符号

  const regExp = new RegExp(RegArray[type]);

  return regExp.test(password);
}