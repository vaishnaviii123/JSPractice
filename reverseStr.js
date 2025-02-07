//Write a JavaScript program to reverse a given string. 

function reverseStr(str){
    return str.split('').reverse().join('');
}
const str='vaishnavi';
console.log(reverseStr(str));