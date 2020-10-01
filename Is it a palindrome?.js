function isPalindrome(x) {
    // your code here
    let str = '';
    x=x.toLowerCase();
    for(let i=0; i<x.length; i++){
        str=x[i]+str;//putting charachters in opposite order
    }
    return str.toLowerCase()===x.toLowerCase();
}