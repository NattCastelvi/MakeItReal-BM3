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

/*
function myFunction(a, b) {
    let res;
    if(a.b === undefined) {
        res = false;
    } else {
        res = a.hasOwnPropety(b)
    }
    return res;
}
--------------------------------------------------
function myFunction ( arr1 , b ) {
    
    let llaves = Object.keys (arr1);
    console.log ( llaves );
    
    for ( let i = 0; i < llaves.length ; i++ ) {
        if ( llaves[i] === b ){
            return true;
        } 
    }
    return false;
}
*/