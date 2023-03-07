/**
 * 遍历数组，回调函数返回false可中止遍历
 * @param {Array} arr - 要操作的数组
 * @param {Function} fn - 每个元素执行的函数，返回false可中止遍历。参数：item-元素、index-下标、arr-原数组
 * @param {Boolean} [reversed=false] - 是否从后往前遍历
 * @return {Boolean} 遍历是否正常结束（回调没有返回false）
 */
function each (arr, fn, reversed) {
  let len = arr.length;
  if (reversed !== true) {
    for (let i = 0; i < len; i++) {
      if (fn.call(this, arr[i], i, arr) === false) {
        return false;
      }
    }
  } else {
    for (let i = len - 1; i >= 0; i--) {
      if (fn.call(this, arr[i], i, arr) === false) {
        return false;
      }
    }
  }
  return true;
}

/**
 * 删除指定元素
 * @param {*Array} arr - 要操作的数组
 * @param {*} item - 需要删除的变量
 * @return {Number} 元素下标，如果不存在则-1
 */
function removeOf(arr, item) {
  let i = -1;
  each(
    arr,
    (_item, _i) => {
      if (_item === item) {
        arr.splice(_i, 1);
        i = _i;
      }
    },
    true
  );
  return i;
}

let arr = [{ a: 1 }];
removeOf(arr, { a: 1 });
console.log("arr", arr);

for (let obj of arr) {
  if (obj.k === "xxx") {
    obj = Object.assign(obj, newObj);
    break;
  }
}
/**
 * @param {Array} arr
 * @returns {Array}
 */
export function uniqueArr(arr) {
  return Array.from(new Set(arr));
}
