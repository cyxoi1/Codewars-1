function positiveSum(arr) {
    let sum = 0;
    for(let el of arr){
        if(el>0){
            sum=sum+el;
        }
    }return sum;
}


//second solution
function positiveSum(arr) {
    let sum = 0;
    for(let i = 0; i<=arr.length;i++){
        if(arr[i]>0){
            sum+=arr[i];
        }
    }
    return sum;
}