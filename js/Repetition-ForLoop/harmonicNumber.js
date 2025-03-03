const n = Number(process.argv[2]);

let answer = 1;
for(let i = 1; i <= n;i++){
  answer = answer + (1/i);
}
console.log("Harmonic number = ",Math.round((answer)*100)/100);