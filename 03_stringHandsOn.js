

function stringHandsOn(){
    var greet = "   Hey you are doing good, keep it up   ";
   console.log("=====Step 1=====");
   console.log("******************************************************");
   console.log(` ${greet}`);
   console.log("======Step 2======");
   console.log("******************************************************");
   var length=greet.length;
   console.log(`Length is: ${greet.length}`);
   console.log("******************************************************");
   console.log("======Step 3========");
   var lengthBeforeTrim = greet.length;
   var greetAfterTrim = greet.trim();
var lengthAfterTrim = greetAfterTrim.length;
console.log(`${ greetAfterTrim} and it's length is: ${lengthAfterTrim}`);
console.log("******************************************************");
console.log("=====Step 4======");
   console.log(`Total spaces removed is: ${lengthBeforeTrim-lengthAfterTrim}`);
   console.log("******************************************************");
   console.log("======Step 5======");
   var greet="Hey you are doing good, keep it up";
   var totalChars=greet.length;
   var lastChar = greet.charAt(totalChars-1);
   var charAt0 = greet.charAt(0);
   console.log(`First char after trim is: ${greet.charAt(0)} Last char after trim is: ${greet.charAt(totalChars-1)}`);
   console.log("******************************************************");
   console.log("=====Step 6======");

var resultValue = greet.split(" ")
console.log(resultValue);
console.log(`Total words available in the string are: ${resultValue.length}`);
console.log("******************************************************");

 console.log("========Step 7=======");
var result = greet.search("good");
console.log(`'good' is available at ${result}`);
console.log("******************************************************");
console.log("======Step 8=====");

var result=greet.substring(22);
console.log(`substring starting from index 22 is: ${greet.substring(22)}`);
console.log("******************************************************");
console.log("=======Step 9======");
var greet = "Hey you are doing good, keep it up";
var result=greet.includes("");
console.log(`Is string ends with word "up": ${result}`);
console.log("******************************************************");
console.log("======Step 10======");

var result = greet.includes("");
console.log(`Is string starts with word "Hey": ${result}`);
}
stringHandsOn();
