function converter (mpg) {
    let kmL = mpg*1.609344/4.54609188;
    return +kmL.toFixed(2);//code to convert miles per imperial gallon to kilometers per liter
}//https://www.codewars.com/kata/557b5e0bddf29d861400005d/train/javascript