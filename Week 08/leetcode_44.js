/**
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
var isMatch = function(s, p) {
  if (!p) return !s;
  let p1 = "";
  for (let i = 0; i < p.length; i++) {
    if (p[i] !== "*" || p[i + 1] !== "*") {
      p1 = p1.concat(p[i]);
    }
  }
  let dp = Array.from(Array(s.length + 1), () =>
    Array(p.length + 1).fill(false)
  );
  dp[s.length][p.length] = true;
  for (let i = s.length; i >= 0; i--) {
    for (let j = p.length - 1; j >= 0; j--) {
      let firstMatch = i < s.length && (p[j] === "?" || p[j] === s[i]);
      if (p[j] === "*") {
        dp[i][j] = (i < s.length && dp[i + 1][j]) || dp[i][j + 1];
      } else {
        dp[i][j] = firstMatch && dp[i + 1][j + 1];
      }
    }
  }
  return dp[0][0]
};

console.log(
  isMatch(
    "abbabaaabbabbaababbabbbbbabbbabbbabaaaaababababbbabababaabbababaabbbbbbaaaabababbbaabbbbaabbbbababababbaabbaababaabbbababababbbbaaabbbbbabaaaabbababbbbaababaabbababbbbbababbbabaaaaaaaabbbbbaabaaababaaaabb",
    "**aa*****ba*a*bb**aa*ab****a*aaaaaa***a*aaaa**bbabb*b*b**aaaaaaaaa*a********ba*bbb***a*ba*bb*bb**a*b*bb"
  )
);
