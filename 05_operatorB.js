console.log("*************************Step 1***************************");
 function greaterNumber(n1,n2){
var result = n1>n2 ? n1:n2;
console.log(`Greatest no.amongst ${n1} & ${n2} is: ${result}`);

}
greaterNumber(10,-10);
greaterNumber(800,889);


console.log("*************************Step 2***************************");
function isEvenOrOddNum(num){
  var result = num%2==0 ? "True" : "False";
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

 