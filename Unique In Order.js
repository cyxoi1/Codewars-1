var uniqueInOrder=function(iterable){
    //your code here - remember iterable can be a string or an array
    let arr=[];
    for(let i=0; i<iterable.length; i++){
        if (iterable[i+1]!==iterable[i]){
            arr.push(iterable[i]);
        }
//     console.log(arr);
    }
    return arr;
}