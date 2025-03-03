const year = Number(process.argv[2]);

if(year >= 1000){
  if(year % 100 === 0 ){
    if(year % 400 === 0){
      console.log("Its a Leap Year");
    }
    else{
      console.log("Its not a Leap Year");
    }
  }
  else if(year % 4 === 0){
    console.log("Its a Leap Year")
  }
  else {
    console.log("Its not a Leap Year")
  }

}
else{
  console.log("Its not a Leap Year")
}