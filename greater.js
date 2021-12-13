// const array = [123,22,345,10,56]
  
// let maximum  = array[0]
    // 
    const SquareofArrayElement = (array)=>{
        let SquareofArrayElement = [];
        for (let i=0;i<array.length;i++){
            SquareofArrayElement[i]= array[i]*array[i];
        }
        return SquareofArrayElement;
    }
    const findSquare = [1,2,3,4,5]
    console.log(SquareofArrayElement(findSquare));  