
console.log("===============Original Array=================");
const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango",  "Water Melon"];
console.log(fruits_seasonal);
deleteElements = fruits_seasonal.splice(1,3);
console.log(`==================1st Step=====================`);
console.log(`===================First & Last Elements==================`);
// console.log(`deleteElements: ${deleteElements}`);
console.log(fruits_seasonal);

console.log(`====================2nd Step====================`);
const fruits_arr = ["Banana", "Orange", "Apple", "Mango",  "Water Melon"];
console.log(`======================Add element Papaya before the element Banana=====================`);
console.log(`====  Add or insertion an element in the 0th index ===== `);
console.log(fruits_arr);
fruits_arr.unshift("Papaya");
console.log(fruits_arr);


console.log(`====================3rd Step====================`);
const fruits_arr2 = ["Banana", "Orange", "Apple", "Mango",  "Water Melon"];
console.log(`====================Remove Mango from array=================`);
console.log(`====  Delete or remove middle element ===== `);
deleteElement = fruits_arr2.splice(3,1);
console.log(deleteElement);
console.log(fruits_arr2 );


console.log(`====================4th Step====================`);
const fruits_arr3 = ["Banana", "Orange", "Apple", "Mango",  "Water Melon"];
console.log(`====================Add or insert an element Pineapple at last position==================`);
console.log(`==== Add or insert element at last position ===== `);
addElements = fruits_arr3.push("Pineapple");
console.log(fruits_arr3);

console.log(`====================5th Step====================`);
const fruits_arr4 = ["Banana", "Orange", "Apple", "Mango",  "Water Melon", "Pineapple"];
console.log(`==================Insert an element Dragon Fruit befor Water Melon ==============`);
addElement = fruits_arr4.splice(4,0,"Dragon Fruit");
console.log(addElement);
console.log(fruits_arr4);

console.log(`====================6th Step====================`);
const fruits_arr5 = ["Banana", "Orange", "Apple", "Mango", "Dragon Fruit" ,"Water Melon", "Pineapple"];
console.log(`====================Replace an element orange with kiwi====================`);
deleteElement = fruits_arr5.splice(1,1,"Kiwi");
console.log(deleteElement);
console.log(fruits_arr5);

console.log(`====================7th Step====================`);
const fruits_arr6 = ["Banana", "Kiwi", "Apple", "Mango", "Dragon Fruit" ,"Water Melon", "Pineapple"];
console.log(`=================Elements starting from index 1 to 4:===============`);
deleteElement = fruits_arr6.splice(5,6);
deleteElement = fruits_arr6.shift();
console.log(deleteElement);
console.log(fruits_arr6);

console.log(`====================8th Step====================`);
console.log(`====================Last Three Elements====================`);
const fruits_arr7 = [ "Kiwi", "Apple", "Mango", "Dragon Fruit"];
Element = fruits_arr7.shift();
console.log(Element);
console.log(fruits_arr7);
