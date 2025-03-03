let money = 100
const goal = 200
let bets = 0
let wins = 0
while(money > 0 && money < goal) {
  bets++
  if(Math.random() < 0.5) {
    money++;
    wins++;
  }else{
    money--;
  }
}
console.log("Total bets made: ",bets)
console.log("Total wins ",wins)
console.log("Final amount: Rs: ",money)
if(money === goal) {
  console.log("Gambler reached the goal !")

}
else{
  console.log("Gambler went broke !")
}
