function squaresNeeded(grains){
    let sum = 0;
    let grainsInSqr = 1;
    let count = 0;
    while(sum<grains){
        sum = sum + grainsInSqr;
        grainsInSqr *= 2;
        count++;
    }
    return  count;

}//https://www.codewars.com/kata/5b0d67c1cb35dfa10b0022c7