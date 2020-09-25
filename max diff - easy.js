//https://www.codewars.com/kata/588a3c3ef0fbc9c8e1000095

function maxDiff(list) {
    let diff = Math.max(...list) - Math.min(...list);
    return list.length === 0 ? 0 : diff;
};