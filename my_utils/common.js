/**
 * html解码
 * @param {*} str
 */
function htmlDecode(str) {
  const div = document.createElement('div');
  div.innerHTML = str;
  return div.innerText || div.textContent;
}
/**
 * html编码
 * @param {*} html
 */
function htmlEncode(html) {
  // 1.首先动态创建一个容器标签元素，如DIV
  const temp = document.createElement('div');
  // 2.然后将要转换的字符串设置为这个元素的innerText(ie支持)或者textContent(旧版火狐，google支持)
  // typeof temp.textContent !== 'undefined' ? (temp.textContent = html) : (temp.innerText = html);
  if (typeof temp.textContent !== 'undefined') {
    temp.textContent = html;
  } else {
    temp.innerText = html;
  }
  // 3.最后返回这个元素的innerHTML，即得到经过HTML编码转换的字符串了
  return temp.innerHTML;
}