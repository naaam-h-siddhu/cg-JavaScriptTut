const N = Number(process.argv[2]);
let i = 1;
while(2**i <=256 && i<=N){
  console.log(2**i);
  i++;
}