const a = Number(process.argv[2]);
const b = Number(process.argv[2]);
const c = Number(process.argv[2]);

const ans1 = a+b*c;
const ans2 = c+a/b;
const ans3 = a%b+c;
const ans4 = a*b+c;

console.log(Math.min(ans1,ans2,ans3,ans4));
console.log(Math.max(ans1,ans2,ans3,ans4));