

var IsEvenOrOdd = function(number){
if (number%2==0) {
console.log(`Number is Even : ${number}`);
} else {
    console.log(` Number is Odd: ${number}`);
}
return number;
}
IsEvenOrOdd(45);
IsEvenOrOdd(70);
IsEvenOrOdd(67);
IsEvenOrOdd(98);

var IsEligibleForVote = function(age){
if (age>=18) {
    console.log(`Eligible for vote :${age}`);
} else {
   console.log(`Not eligible for vote :${age}`); 
}
}
IsEligibleForVote(18);
IsEligibleForVote(20);
IsEligibleForVote(17);
IsEligibleForVote(40);

var IsMoreThan10Char = function(string){
if (string>10) {
    console.log(`string can contains more than 10 chars :${string}`);
} else {
    console.log(`string can not cantain more than 10 chars : ${string}`);
}
}
IsMoreThan10Char("JavaScript - ES6");