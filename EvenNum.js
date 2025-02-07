//Write a JavaScript function that takes an array of numbers and 
// returns a new array with only the even numbers. 
function evenNum(arr){
    return arr.filter(num=>num%2===0);
}

let arr=[15,20,25,30,35,40];
console.log(evenNum(arr));

// way2:
// -----

// function Even(arr){
//     let res=[];
//     for(let i=0;i<arr.length;i++){
//         if(arr[i]%2==0){
//           res.push(arr[i]);
//         }
//     }
//     return res;
// }

// let arr=[11,12,13,14,15];
// console.log(Even(arr));