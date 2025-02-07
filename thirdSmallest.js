function ThirdSmallest(arr){
    if(arr.length<3) return 'should be atleast 3 elements in the array';
    let sortedArr=[...new Set(arr)].sort((a,b)=>(a-b));
    return sortedArr[2];
}

let arr=[60,80,30,35,40,20,50,60];
console.log(ThirdSmallest(arr));

//35