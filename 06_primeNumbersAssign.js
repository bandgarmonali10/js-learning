

const array = [3,9,7,6,19,29,53]
 function isPrime(num){
    for (let index = 2; index < num; index++) {
      if (num%index==0) {
       return false;
       } 
     }
     return true;
    }

   
    const result = isPrime(3);
    console.log(`Is 3 Prime Number : ${result}`);
   
    const result1 = isPrime(9);
    console.log(`Is 9 Prime Number : ${result1}`);

   const result2 = isPrime(7);
   console.log(`Is 7 Prime Number : ${result2}`);
   
    const result3 = isPrime(6);
    console.log(`Is 6 Prime Number : ${result3}`);

    const result4 = isPrime(19);
    console.log(`Is 19 Prime Number : ${result4}`);
   
    const result5 = isPrime(29);
    console.log(`Is 29 Prime Number : ${result5}`);

   const result6 = isPrime(53);
    console.log(`Is 53 Prime Number : ${result6}`);



   function countNumber(arr){
let count = 0;
 let primeArray = [];
 arr.forEach(element => {
  if (isPrime(element)) {
     count++;
    primeArray.push(element);
  }
 });
// console.log(`Prime Numbers : ${primeArray}`);

console.log(`Count of prime numbers : ${count}`);
   }
countNumber(array)

   console.log(`============Step 02===========`);
   function spaceCount(str) {
  
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
        if (str[i] === ' ') {
            count++;
        }
    }
  
    return count;
  }
  
  
  const string1 = "Revision is the mother of success";
  const spaces1 = spaceCount(string1);
  console.log("Total number of spaces in string1 =>", spaces1);
  
  const string2 = "java script is language of internate world";
  const spaces2 = spaceCount(string2);
  console.log("Total number of spaces in string2 =>", spaces2);