
let a = Math.floor(100 + Math.random() * 900);
let b = Math.floor(100 + Math.random() * 900);
let c = Math.floor(100 + Math.random() * 900);
let d = Math.floor(100 + Math.random() * 900);
let e = Math.floor(100 + Math.random() * 900);

console.log("Generated value ",a,b,c,d,e);
let minimum = Math.min(a,b,c,d,e);
let maximum = Math.max(a,b,c,d,e);
console.log("Minimum number = ",minimum);
console.log("Maximum number = ",maximum);