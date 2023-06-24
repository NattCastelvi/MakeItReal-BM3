/*function checkEquals(arr1, arr2) {

    if (arr1 === arr2) {
        return true
    } else {
        return false
    }
}*/

function checkEquals(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }

    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }

    return true;
}

console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 6, 7]));

/*
function checkEquals(arr1, arr2) {
    return JSON.stringify(arr1) === JSON.stringify(arr2);
}

console.log(checkEquals([1, 2], [1, 3]));
console.log(checkEquals([1, 2], [1, 2]));
console.log(checkEquals([4, 5, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 5, 6]));
console.log(checkEquals([4, 7, 6], [4, 6, 7]));  
*/