console.log("*************************Step 1***************************");
 function greaterNumber(num1,num2){
    var result = num1 >= num2;
 console.log(`Greatest no.amongst two number: ${result}`);
}
greaterNumber(10,-10);
greaterNumber(800,899)

console.log("*************************Step 2***************************");
function isEvenOrOddNum(num){
  var result = num%2==0 ? "Ture" : "False";
  console.log(`Given number is EVEN or ODD: ${result}`);
   
}
isEvenOrOddNum(29);
 isEvenOrOddNum(44);
 isEvenOrOddNum(0);
 isEvenOrOddNum(101);

 console.log("*************************Step 3***************************");
 function wordLength(word){
var result = word.length%2==0 ? "EVEN":"ODD";
console.log(`Given word ${word} is with ${result} length` );
 }
 wordLength("JavaScript");
 wordLength("developer");
 wordLength("Google");