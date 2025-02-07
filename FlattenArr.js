//Flatten a Nested Array
function FlatenArr(arr){
    return arr.flat(Infinity);
}

const arr=[1,2,3,[4,5],[5,6,7,[8]]];
console.log(FlatenArr(arr));

// [
//     1, 2, 3, 4, 5,
//     5, 6, 7, 8
//   ]