const N = Number(process.argv[2]);
function isPrime(num){
  // let i = 1;
  let factors = 0;
  for(let i = 2; i < num;i++)  {
    if(num % i === 0)
      return false;

  }
  return true;

}

function isPalindrome(num){
  let s = num.toString();
  for(let i = 0;i<s.length;i++){
    if(s.charAt(i) != s.charAt(s.length-1-i))
      return false;
  }
  return true;
}

function isPalindromeAndPrime(num){
  return isPalindrome(num)&&isPrime(num);
}

if(isPalindrome(N)){
  console.log("Number is palindrome");
}
if(isPrime(N)){
  console.log("Number is prime");
}
if(isPalindromeAndPrime(N)){
  console.log("Number is prime as well as Palindrome");
}
