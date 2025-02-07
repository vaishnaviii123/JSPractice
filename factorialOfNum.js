// Write a JavaScript program to calculate the factorial of a given number. 

function factorialOfNum(num){
    if(num===0 || num===1){
        return 1;
    }
    else{
        return num*factorialOfNum(num-1)
    }
}

// Way 2:
// ————
// const num=5;
// console.log(factorialOfNum(num));

// function factorialOfNum(num){
//     let res=1;
//     for(let i=2;i<=num;i++){
//         res=res*i;
//     }
//     return res;
// }

// const num=5;
// console.log(factorialOfNum(num))