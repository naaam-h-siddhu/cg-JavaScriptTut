function celsiusToFahrenheit(deg){
  return Math.round(((deg * (9/5))+32)*100)/100;
}

function fahrenheitToCelsius(deg){
  const ans = (deg - 32) * (5/9)
  return Math.round(ans*100)/100;
}
const temp = Number(process.argv[2]);
const unit = String(process.argv[3]);

if(unit === "c") {
  if(temp < 0 && temp > 100){
    console.log("Enter valid temperature value");
  }
  else{
    console.log("degC = "+temp+"\ndegF = "+celsiusToFahrenheit(temp));

  }

}
else if(unit === "f") {
  if(tempz < 32 && temp > 212){
    console.log("Enter valid temperature value");
  }
  else{
    console.log("degF = "+temp+"\ndegC = "+fahrenheitToCelsius(temp));
  }
}
else{
  console.log("Enter valid unit of temperature")
}
