var array1 = [1,2,3,44,55]
const reverse=(array1)=>{
    var newarray=[0];
    for(var i =array1.length-1;i>=0;i--){
        newarray[array1.length-1-i]= array1[i]
    }
    return newarray;
}
console.log(reverse(array1));

// Test case 2 

let  array2 = [22,33,0,1]
const reverse=(array2)=>{
    let newarray=[0];
    for(var i = array2.length-1;i>=0;i--){
        newarray[array2.length-1-i]=array2[i]
       }  return newarray;
}
console.log(reverse(array2));