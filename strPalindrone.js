//Write a JavaScript function to check if a given string is a palindrome (reads the same forwards and backwards). 

function isPalindrome(str){
  return str===str.split('').reverse().join('');

}
const str='kanak';
console.log(isPalindrome(str));