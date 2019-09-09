/**
编写一个函数来查找字符串数组中的最长公共前缀。

如果不存在公共前缀，返回空字符串 ""。

示例 1:

输入: ["flower","flow","flight"]
输出: "fl"
示例 2:

输入: ["dog","racecar","car"]
输出: ""
解释: 输入不存在公共前缀。(注意审题，我最开始以为是公共子串)

 * @param {string[]} strs
 * @return {string}
 */

export default strs => {
  if(!strs.length) return '';
  if(strs.length === 1) return strs[0];
  let result = '',firstItem = strs[0];
  for (let i = 0; i < firstItem.length; i++) {
    for (let j = 1; j < strs.length; j++) {
      if(firstItem[i]!== strs[j][i]){
        return result
      }
    }
    result += firstItem[i]
  }
  // 这一步是为了防止第一个元素就是最大的公共子串，也要返回出去
  return result
};
