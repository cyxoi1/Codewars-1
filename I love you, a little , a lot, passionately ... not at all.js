function howMuchILoveYou(nbPetals) {
    let arr = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
    let i = (nbPetals-1)%6;
    return arr[i];
}//https://www.codewars.com/kata/57f24e6a18e9fad8eb000296