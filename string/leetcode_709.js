/**
 * @param {string} str
 * @return {string}
 */
var toLowerCase = function(str) {
  for (let i = 0; i < str.length; i++) {
    let code = str.charCodeAt(i);
    if (code >= 65 && code <= 90) {
      str = str.slice(0, i) + String.fromCharCode(code + 32) + str.slice(i + 1);
    }
  }
  return str;
};
