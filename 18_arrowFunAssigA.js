console.log(`===========step 1. Arrow function with no argument and no return value==========`);
let show = () => {

    console.log(`Good Morning,Today is Monday`);
}
show();

console.log(`===========step 2. Arrow function with 3 arguments and no return value===========`);

let multiply = (n1,n2,n3=1) => {

console.log(`Multiplication is : ${n1*n2*n3}`);
}
console.log(`a. values to be passed => 5,5,2`);
multiply(5,5,2);
console.log(`b. values to be passed => 10,4,default value to 3rd arg as 1`);
multiply(10,4);


console.log(` ===========step 3. Arrow function with arguments and return value=========`);

let add = (n1,n2,n3,n4,n5) => {
let result = n1+n2+n3+n4+n5;
return result;
}
console.log(`a. values to be passed => 100,100,200,349,756`);
let addResult = add(100,100,200,349,756);
console.log(`Addition is : ${addResult}`);
console.log(`c. values to be passed =>"I am","learning","ES6","features","in depth" `);
let addResult1 = add("I am","learning","ES6","features","in depth");
console.log(`Addition is : ${addResult1}`);