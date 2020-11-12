function squareOrSquareRoot(array) {
    let newArray = [];
    for (let i=0; i<array.length; i++){
        if((array[i]**0.5)%1!==0){
            newArray.push(array[i]**2);
        }else{
            newArray.push(array[i]**0.5);
        }
    }
    return newArray;
}//https://www.codewars.com/kata/57f6ad55cca6e045d2000627