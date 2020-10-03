function breakChocolate(n,m) {
    let breaks;
    if (n>0&&m>0){
        breaks = (n-1)+(m-1)*n;
    } else {
        return 0;
    }
    return breaks;
}//https://www.codewars.com/kata/534ea96ebb17181947000ada/train/javascript