function spacify(str) {
    let newStr = '';
    for (let i = 0; i<str.length;i++){
        if(i===str.length-1){
            newStr=newStr+str[i];
            break;
        }
        newStr+=str[i]+' ';
    }
    return newStr;
}

function spacify2(str) {
    let newStr = '';
    for(let i = 0; i<str.length-1; i++){
        newStr += str[i]+' ';
    }
    return newStr+str[str.length-1];
}