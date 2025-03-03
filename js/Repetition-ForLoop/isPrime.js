const num = Number(process.argv[2]);

// let factors = 0;
// for(let i = 2;i<num;i++){
//   if(num%i == 0)
//     factors++;
// }
// if(factors == 0){
//   console.log("Yes its a Prime number");
// }
// else{
//   console.log("No its not a prime number");
// }

for(let i = 1; i <=num;i++) {

  let factors = 0;
  for(let j = 2;j<i;j++){
  if(i%j == 0)
    factors++;
  }
  if(factors == 0)
    console.log(i);

}