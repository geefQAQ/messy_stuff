function formatRecentData(param) {
  let value;
  const rate = Number(param) * 100;
  if (!Number.isInteger(rate)) {
    value = parseFloat(rate).toFixed(3);
    value = value.substring(0, value.lastIndexOf('.') + 3);
    value = parseFloat(value).toFixed(2)
    value = value.replace(/(\d)(?=(\d{3})+\.)/g, '$1,');
  } else {
    value = rate.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1,');
  }
  return `${value}%`;
}

// let reg = /(\d)(?=(\d{3})+\.)/g
// let str = '123456789.123'
// let res = str.replace(reg, '$1,')
let res = formatRecentData(123456789)
console.log('res', res)