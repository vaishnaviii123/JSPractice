//  Find First Non-Repeating Character
function NonRepeatedChar(str){
    for(let i=0;i<str.length;i++){
        if(str.indexOf(str[i])===str.lastIndexOf(str[i])){
            return str[i];
        }
    }
    return null;
}
const str='vaishnavi';
console.log(NonRepeatedChar(str));  //s