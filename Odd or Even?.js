function oddOrEven(array) {
    let sum = 0;
    for(let i=0; i<array.length; i++){
        sum+=array[i];
    }return sum%2===0 ? 'even':'odd';
}
//https://www.codewars.com/kata/5949481f86420f59480000e7