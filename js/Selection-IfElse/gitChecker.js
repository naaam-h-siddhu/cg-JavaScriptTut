const day = Number(process.argv[2]);
const month = Number(process.argv[3])

if((month === 3 && day >= 20) || (month >3 && month < 6) || (month === 6 && day <= 20)){
  console.log(true)
}else{
  console.log(false)
}