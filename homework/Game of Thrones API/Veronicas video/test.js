let a = [4, 5, 6, 7, 8];
let b = [6, 2, 5, 99, 100];

let c = [...a, ...b] //the spread operator copies all of a and b and puts it into c. These are unique copies and not references
//updating c won't change a or b

console.log(c);

// c.push(20)
// console.log(c);
c[0] = 1111;
console.log(c);
console.log(a);