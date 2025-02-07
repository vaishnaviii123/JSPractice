function Findduplicates(arr){
    let temp=[];
    for(let i=0;i,arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
            if(arr[i]===arr[j] && !temp.includes(arr[i])){
                temp.push(arr[i]);
            }
        }
    }
    return temp;
}

const arr=[10,20,30,40,40,30,30,50,60,50];
console.log(Findduplicates(arr));

//op: 30 40 50