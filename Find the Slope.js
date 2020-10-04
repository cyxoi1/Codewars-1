function slope(points)
{let slp =(points[3]-points[1])/(points[2]-points[0]);
    if ((points[2]-points[0])===0){
        return 'undefined';
    }
    return slp.toFixed(0);
} //https://www.codewars.com/kata/55a75e2d0803fea18f00009d