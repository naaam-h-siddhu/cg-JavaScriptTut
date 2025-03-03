const num = Number(process.argv[2]);

let ans =1;
for(let i = 1;i <= num;i++) {
  ans *= i;

}
console.log(ans);