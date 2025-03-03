const N = Number(process.argv[2]);

if(N <= 1 ){
  console.log("No prime factors");
} else{
  console.log("Prime factors of", N, ":");
  let num = N;

  while(num % 2 === 0){
    console.log(2);
    num /= 2;
  }
  for(let i = 3;i*i <= num;i+=2){
    while(num % i === 0){
      console.log(i);
      num /= i;
    }
  }
  if(num > 1){
    console.log(num);
  }
}