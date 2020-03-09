/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function(s, k) {
  let i = 0,
    n = s.length,
    arr = Array.from(s);
  while (n > 0) {
    let end = n >= k ? i + k - 1 : i + n - 1;
    reverse(arr, i, end);
    i += 2 * k;
    n -= 2 * k;
  }
  return arr.join("");
};

var reverse = function(arr, start, end) {
  while (start < end) {
    [arr[start], arr[end]] = [arr[end], arr[start]];
    start++;
    end--;
  }
};

reverseStr(
  "krmyfshbspcgtesxnnljhfursyissjnsocgdhgfxubewllxzqhpasguvlrxtkgatzfybprfmmfithphckksnvjkcvnsqgsgosfxc",
  20
);
