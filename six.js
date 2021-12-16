input: "student"
output: "tneduts"

input: "Manish"
output: " edfdce"
let str = "Manish";
console.log(str.charAt(0));
console.log(str.charAt(1));
console.log(str.charAt(2));
console.log(str.charAt(3));
console.log(str.charAt(4));
console.log(str.charAt(5));
console.log('str.StR')
revereString = (str)=>{
    let reverseStringToReturn = ''
    for (let i = str.length-1;i>=0;i--){
        reverseStringToReturn+=str.charAt(i);
    }
    return reverseStringToReturn;
}