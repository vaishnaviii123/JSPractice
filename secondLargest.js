function secondLargest(arr){
    arr.sort((a,b)=>(b-a));
    return arr[1];
}

let arr=[50,51,40,45,1,4,47,49];
console.log(secondLargest(arr));