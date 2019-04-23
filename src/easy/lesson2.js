/**
 * 
给出一个 32 位的有符号整数，你需要将这个整数中每位上的数字进行反转。

示例 3:
输入: 120
输出: 21
注意:
假设我们的环境只能存储得下 32 位的有符号整数，则其数值范围为 [−231,  231 − 1]。请根据这个假设，如果反转后整数溢出那么就返回 0。
 */

 // 知识点主要是巧妙的反转数组
 export default (x) => {
  let isGreater = x > 0 ? true : false;let sum = 0;
  x = Math.abs(x)
  // 反转数组
  while(x){
    sum = sum * 10 + x % 10; 
    x = parseInt(x/10) // 每次退一位
  }
  if(!isGreater) sum = -sum;
  console.log(sum)
  return (sum > Math.pow(2,31) -1 || sum < Math.pow(-2,31)) ? 0: sum;
};