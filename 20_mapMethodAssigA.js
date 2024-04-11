console.log(`----------Given Array----------`);
const arrayNumbers = [20,11,40,25,23,11,9,31,60,2,19];
console.log(arrayNumbers);

console.log(`1----------1.Add 10 into each element----------`);
let arrayTransform = []
arrayNumbers.forEach(element => {
    arrayTransform.push(element+10);
});
console.log(arrayTransform);

console.log(`---------2.Cube of each array element--------`);
 let arrayTransform2 = []
 arrayNumbers.forEach(element => {
     arrayTransform2.push(element*element*element);
 });
 console.log(arrayTransform2);

 console.log(`------3.Adding the index value into its corresponding each array element-----`);
const arrayNew = arrayNumbers.map(( CurrentValue , index) => {
return CurrentValue+index;
});
console.log(arrayNew);