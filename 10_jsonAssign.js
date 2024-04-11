
const jsonStr =`{
    "name" : "Aleix Melon",
    "id" : "E00245",
    "role" :["Dev", "DBA"],
    "age" : 23,
    "doj" : "11-12-2019",
    "married" : false,
    "address" : {
        "street" : "32, Laham St.",
        "city" : "Innsbruck",
        "country" : "Austria"
    },
    "referred-by" : "E0012"

}`
console.log(`======== Convert JSON to Object ===========`);
const obj = JSON.parse(jsonStr);
console.log(obj);

const array = ["Dev","DBA"];
const result = array[0];
console.log(`role => ${result}`);

const arr = ["Aleix","Melon"];
const result1 = arr[1];
console.log(`Last name => ${result1}`);

const arr1 = [11,12,2019];
const result2 = arr1[2];
console.log(`Joining year of employee => ${result2}`);