/**
给定一个字符串，你需要反转字符串中每个单词的字符顺序，同时仍保留空格和单词的初始顺序。

示例 1:
输入: "Let's take LeetCode contest"
输出: "s'teL ekat edoCteeL tsetnoc" 
注意：在字符串中，每个单词由单个空格分隔，并且字符串中不会有任何额外的空格。
 */

export default str => {
     return str.split(' ').map(item=>{
         return item.split('').reverse().join('')
     }).join(' ')
};
{
    // 方法二 -- 证明你知道split中可以写正则
    var fun2 = (str)=>{
        return str.split(/\s/).map(item=>{
            return item.split('').reverse().join('')
        }).join(' ')
    }

    // 方法三 -- 证明你知道match,并且会用正则
    var fun3 = (str)=>{
        return str.match(/[\w']+/g).map(item=>{
            return item.split('').reverse().join('')
        }).join(' ')
    }

}
