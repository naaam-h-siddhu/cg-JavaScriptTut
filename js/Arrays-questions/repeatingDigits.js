const N = 100
let arr = []
for(let i = 10;i<N;i++){
  let s = i.toString();
  if(s.charAt(0) === s.charAt(s.length-1)){
    arr.push(Number(s));
  }
}
console.log("Number with repeated digits = ",arr.toString());