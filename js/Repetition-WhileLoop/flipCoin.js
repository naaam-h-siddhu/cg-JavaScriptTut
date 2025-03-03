let tails =  0;
let heads = 0;

while(tails < 11 && heads < 11){
  const toss = Math.random();
  if(toss < 0.5){
    tails++;
  }
  else{
    heads++;
  }

}
console.log("Tails: "+tails+" "+" Heads: "+heads);