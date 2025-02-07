function secondSmallest(arr){
    arr.sort((a,b)=>(a-b));
    return arr[1];
}

let arr=[50,40,30,20,10,5];
console.log(secondSmallest(arr));

//op: 10