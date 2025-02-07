//  Find the Factorial of a Number
function FactOfNum(n){
    return n==0?1:(n)*FactOfNum(n-1);
}
console.log(FactOfNum(5));