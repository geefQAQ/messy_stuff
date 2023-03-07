/**
 * @param {Function} func
 * @param {number} wait
 * @param {boolean} immediate
 * @return {*}
 */
export function badDebounce(func, wait, immediate) {
  let timeout, args, context, timestamp, result

  const later = function() {
    // 据上一次触发时间间隔
    const last = +new Date() - timestamp

    // 上次被包装函数被调用时间间隔 last 小于设定时间间隔 wait
    if (last < wait && last > 0) {
      timeout = setTimeout(later, wait - last)
    } else {
      timeout = null
      // 如果设定为immediate===true，因为开始边界已经调用过了此处无需调用
      if (!immediate) {
        result = func.apply(context, args)
        if (!timeout) context = args = null
      }
    }
  }

  return function(...args) {
    context = this
    timestamp = +new Date()
    const callNow = immediate && !timeout
    // 如果延时不存在，重新设定延时
    if (!timeout) timeout = setTimeout(later, wait)
    if (callNow) {
      result = func.apply(context, args)
      context = args = null
    }

    return result
  }
}


/**
 * @description 常用于变化频率高的场景，如键盘输入、鼠标移动
 * @param {function} fn
 * @param {String|Number} ms
 * @returns {function}
 */
function simpleDebounce(fn, ms) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn.apply(this, args), ms)
  }
}

/**
 * @description 传统debounce 输入a --> 输入b ---> 输入c -----> 执行函数 (-----> 为时间间隔，如1000ms)
 *              优化为       输入a --> 输入b ---> 执行函数
 *                          输入a --> 输入b --> 输入c ---> 执行函数
 * @param {function} fn
 * @param {number} wait
 */
function debounce(fn, wait) {
  let timeout, eventTime, context, args;
  const later = function() {
    const invokeTime = +new Date();
    // 上一次的输入到执行函数的时间间隔
    const lastInterval = invokeTime - eventTime;
    if (lastInterval < wait && lastInterval > 0) {
      timeout = setTimeout(later, wait - lastInterval);
    } else {
      timeout = null;
      fn.apply(context, args);
      args = context = null;
    }
  }
  return function(...originArgs) {
    args = originArgs;
    context = this;
    // 触发事件的时间戳(输入a时的时间戳)
    eventTime = +new Date();
    if(!timeout) {
      timeout = setTimeout(later, wait);
    }
  }
}

function throttle(fn, ms) {
  let isThrottled = false, savedContext, savedArgs;
  function wrapper(...args) {
    if(isThrottled) {
      savedContext = this;
      savedArgs = args;
      return;
    }
    isThrottled = true;
    fn.apply(this, args); // 第一次执行
    setTimeout(() => { // 在执行期间重复执行
      isThrottled = false;
      if(savedContext) { // 在执行期间有重复执行的动作
        wrapper(savedContext, savedArgs);
        savedContext = savedArgs = null; // 记得清除上下文，否则死循环
      }
    }, ms)
  }
  return wrapper
}

function throttle(fn, ms) {
  let isThrottled, savedContext, savedArgs;
  function wrapper(...args) {
    if(isThrottled) {
      savedContext = this;
      savedArgs = args;
      return;
    }
    isThrottled = true;
    fn.apply(this, args);
    setTimeout(() => {
      isThrottled = false;
      if(savedContext) {
        wrapper(savedContext, savedArgs);
        savedContext = savedArgs = null;
      }
    }, ms)
  }
  return wrapper;
}