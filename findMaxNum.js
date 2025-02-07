// Write a JavaScript program to find the maximum number in an array. 

function findMax(arr){
    return Math.max(...arr);
}

let arr=[10,20,50,30,40];
console.log(findMax(arr));

//Write a JavaScript program to find the largest element in a nested array. 

// function Largest(arr){
//     return Math.max(...arr.flat(Infinity))
// }

// let arr=[10,600,[[500,30],40]];
// console.log(Largest(arr));