// Testcase : 01
// input : [12,13,45,67]
// output: [67,45,13,12]

// Testcase:02
// input : [34,56,1,2]
// output: [2,1,56,34 ]
// // dry Run
// let arr = [12,13,45,67]
// // for (i=0; i<arr.length;i++){
// //     console.log(arr[i]); 
// // }
// console.log(arr.length,'ARR Length')
// for (i=arr.length;i>=0;i--){
//     console.log(arr[i]);
// }
// let a = [23,45,67,89]
// a.sort()
// console.log(a);
reverse = (array)=>{
    let reverseArrayToReturn = []
    for (let i = array.length-1;i>=0;i--){
        console.log(i,'I');
        reverseArrayToReturn[array.length-1-i] = array[i];
    }
    return reverseArrayToReturn; 
}
let inputArray = [12,13,45,67]; 
console.log(reverse(inputArray));