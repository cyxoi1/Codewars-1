function rowWeights(array){
    let sum1 = 0;
    let sum2 = 0;
    for(let i = 0; i< array.length; i++){
        if(i%2===0){
            sum1+=array[i];
        }else{
            sum2+=array[i];
        }
    }return [sum1, sum2];
}//https://www.codewars.com/kata/5abd66a5ccfd1130b30000a9