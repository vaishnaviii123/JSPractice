function FindMissingNum(arr){
    for(let i=1;i<arr.length+1;i++){
        if(!arr.includes(i)){
            return i;
        }
    }
    }
    
    const arr=[1,2,3,4,5,6,8,9];
    console.log(FindMissingNum(arr));

    //op :7