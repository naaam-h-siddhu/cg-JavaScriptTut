const n = Number(process.argv[2]);
for(let i = 1; i <= n;i++){
  const temp = 2**i;
  console.log("2 to power "+i+" = ", temp);
}