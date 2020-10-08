function isVeryEvenNumber(n) {

    while(n>9){
        let nmb = n +'';
        let sum = 0;
        for(let i = 0; i<nmb.length; i++){
            sum += +nmb[i];
        } n=sum;
    }
    return n%2===0;
}//https://www.codewars.com/kata/58c9322bedb4235468000019
