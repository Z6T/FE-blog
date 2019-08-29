/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
  const nlen = needle.length;
  if (needle === "") return 0;
  for (var i = 0; i < haystack.length; i++) {
    if (haystack.substr(i, nlen) === needle) {
      return i;
    }
  }
  return -1;
};
