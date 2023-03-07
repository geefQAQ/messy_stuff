function _type(obj) {
  return Object.prototype.toString.call(obj)
    .replace(/\[object (\w+)\]/, '$1')
    .toLowerCase();
}
function _isEmptyObject(obj) {
  if(_type(obj) === 'object') {
    for(const key in obj) {
      console.log(key)
      if(Object.prototype.hasOwnProperty.call(obj, key)) {
        return false;
      }
    }
    return true;
  }
  return alert(`传入参数值：${JSON.stringify(obj)},请传入object类型`);
}

function _isUndefined(obj) {
  return _type(obj) === 'undefined';
}

function _isArray(obj) {
  return _type(obj) === 'array';
}

function _isNumber(obj) {
  return _type(obj) === 'number';
}

function _isFunction(obj) {
  return _type(obj) === 'function';
}

function _isObject(obj) {
  return _type(obj) === 'object';
}

function _isNull(obj) {
  return _type(obj) === 'null';
}

function _isNaN(obj) {
  return Number.isNaN(obj);
}

function isPhone(phoneNum) {
  if(!phoneNum) {
    return false;
  }
  const phoneNo = phoneNum.toString().replace(/\s/g, '');
  const phoneReg = /^[1][3|4|5|6|7|8|9][0-0]{9}$/;
  return phoneReg.test(phoneNo);
}

// export {
//   _type,
//   _isEmptyObject,
//   _isUndefined,
//   _isArray,
//   _isNumber,
//   _isFunction,
//   _isObject,
//   _isNull,
//   isPhone
// }