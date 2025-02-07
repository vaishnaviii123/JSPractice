//Prime numbers are natural numbers that are divisible by only 1 and the number
//  itself
function IsPrime(num){
    if(num<2)
    return false;
    let i=2;
    while(i*i<=num){
        if(num%i==0){
            return false;
        }
        i++;
    }
    return true;
}


let num =16;
console.log(IsPrime(num))
