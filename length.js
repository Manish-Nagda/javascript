var array = [4,5,6,7,9.15,30];
const largestno = (values)=>{
    let max = 0;
    for(let i=0; i<array.length;i++){
        if(values[i]>max){
            max = values[i];
        }
    }
    return max;
}
console.log(largestno(array));