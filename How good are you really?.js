function betterThanAverage(classPoints, yourPoints) {
    let sum = 0;
    let quantity = classPoints.length;
    for (let i = 0; i<classPoints.length; i++){
        sum+=classPoints[i];
    }
    return (sum/quantity)>yourPoints?false:true;
}//https://www.codewars.com/kata/5601409514fc93442500010b