// Write a JavaScript program to convert a string to title case
//  (capitalize the first letter of each word). 

function FirstLatterCapitilize(str){
    return str.toLowerCase().replace(/\b[a-z]/g,char=>char.toUpperCase());
}

let str='I am a react native developer';
console.log(FirstLatterCapitilize(str));