let arr = [true, true, false];
let arr2 = [true, true, true];
let arr3 = [5, 4, 3, 2, 1, 0];

let check = arr => arr.every(v => v === true);
console.log(check(arr));
console.log(check(arr2));
console.log(check(arr3));