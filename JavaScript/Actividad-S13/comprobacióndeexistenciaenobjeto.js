/* function myFunction(a, b) {
    return
} */

function myFunction(a, b) {
    if (a[b] !== undefined) {
        return true;
    } else {
        return false;
    }
}

console.log(myFunction({ a: 1, b: 2, c: 3 }, 'b'));
console.log(myFunction({ x: 'a', y: 'b', z: 'c' }, 'a'));
console.log(myFunction({ x: 'a', y: 'b', z: undefined }, 'z'));