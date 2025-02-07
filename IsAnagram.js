//Check for Anagrams
function IsAnagram(str1,str2){
    return str1.split('').sort().join('')===str2.split('').sort().join('')
}

console.log(IsAnagram('listen','silent')); //true
console.log(IsAnagram('listen','dsa'));//false