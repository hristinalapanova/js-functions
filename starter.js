/* ============ BEFORE YOU GET STARTED ============ */

/* here is a very short function that pops up an alert window that says 'Hello!' */
function hello() {
  alert('Hello!');
}

/* Here's the steps to test it:

- Open index.html in chrome.
- Type the keyboard shortcut `cmd + option + j`. Dev tools should open to the console.
- You should see the message saying 'starter.js is connected!'
- Underneath that, next to the blue arrow, type `hello()` to call the `hello` function
- You should get an alert window that says HELLO!

*/

/* ================= AS YOU COMPLETE EACH STEP ============= */

/* After each step, perform the following commands in the terminal:
1. git add .
2. git commit -m "add completed part PART-NUMBER-HERE"
This will help us track your progress and it will give you practice writing good commit messages!!
*/

/*REMINDER - ANY QUESTION THAT DOES NOT SPECIFICALLY TELL YOU TO ALERT OR PROMPT SHOULD BE LOGGED TO THE CONSOLE*/

/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */
/* ======================= WRITE YOUR ANSWERS HERE!!!!! =============== */
/* ++++====+++==++++==+++++======++++===++++++=====+++==++++++++++===== */

// PART 0: Just DO it!!

function justDoIt(str) {
  return (str+ "just do it!")
}

justDoIt("Zach")

// PART 1: Big or Small String?

function bigOrSmallStirng(str){
if( str.length > 10 ){
  return ("This word is so long!")
}
else {
  return ('This word is short')
}
}

bigOrSmallStirng("cat")
// PART 2: Odd or Even String Length?

function oddOrEvenString(str){
  if((str.length)%2==1){
    return ("This sting lenght is odd")
  }
  else{
    return ("This sting length is even")
  }
}
oddOrEvenString("mouse")

// PART 3: Median

function medianOfArray(arr){
arr= arr.sort()
let middleIndex= Math.floor(arr.length/2)
return arr[middleIndex]
}

// PART 4: Sum Array

function sumArray(arr){
  let sum=0
  for(let i=0; i<arr.length; i++){
  sum= sum+arr[i]
  }
  return sum
}


// PART 5: Vowel Count

function vowelCount(str){
let arr=str.split("")
for (let k=0; k<arr.lenght; k++){
  let count=0
  if(str[k]=="a"|| str[k]=="o" || str[k]=="u" || str[k]=="e" || str[k]=="i"){
  count ++
  }
  return count 
}
}

// PART 6: Initials

function initials(str){
  let arr=str.split(" ")
  let strNew=""
  for(let i=0; i<arr.length; i++){
    strNew+= arr[i][0]
  }
return strNew
}


// BONUS: Days of the week

switch(dayOfTheWeek) {
  case Monday:
    alert("Energize!")
    break;
  case Tuesday:
    alert("Just getting started!")
    break;
  case Wednesday:
    alert("Half way through")
    break;
  case Thursday:
    alert("Almost there!")
    break;
  case Friday, Satuday, Sunday:
  alert("Weee!")
  break;
  default:
    alert("Huh? Sorry, didnt get that.")
  break;
    
}

// BONUS: Let's take the Subway



// BONUS: Truth - y & False -y Checker
var arr = [null, 15, 'unicorn', undefined, 7 && false, null || 'hello, world', false && true, 0 || null];




// BONUS: Double X Counter





/* connection checker console log */
console.log('starter.js is connected! Let\'s get to work! 💪');
