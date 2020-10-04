function countPositivesSumNegatives(input) {
    if (input === null|| input.length === 0) return [];
    let countPositive = 0;
    let sumOfNegatives = 0;
    for (let i = 0; i<input.length; i++){
        if(input[i] > 0){
            countPositive++;
        } else {
            sumOfNegatives+=input[i];
        }
    }
    return [countPositive, sumOfNegatives];
}//https://www.codewars.com/kata/576bb71bbbcf0951d5000044