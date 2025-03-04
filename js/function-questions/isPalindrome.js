const a = Number(process.argv[2]);
const b = Number(process.argv[3])

function isPalindrome(num){
  s = num.toString();
  for (let i = 0;i<s.length/2;i++){
    if(s.charCodeAt(i) != s.charCodeAt(s.length-1-i)){
      return false;
    }
  }
  return true;

}
if(isPalindrome(a) && isPalindrome(b)){
  console.log("Yes both the numbers are palindrome");

}
else if (isPalindrome(a) || isPalindrome(b)){
  console.log("Only one number is palindrome");
}
else {
  console.log("No number is palindrome");
}