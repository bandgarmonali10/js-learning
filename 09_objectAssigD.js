
let professor =  {
    name : "Stew",
    age : 30,
   college : "COEP",
   degree : "B.Tech",
  salary : "12 LPA",
}
console.log(professor);

console.log(`******************Includes nested object degrees*****************`);
const professorDegree = {
  engineering : "CSC",
PHD : "Adv Computing",
Doctorate : "M.B.B.S",
Officer : "Bsc Agriculture",
}
console.log(professorDegree);

console.log(`*********************Certificates*************************`);
const arrayCertificates = ["Hacker Rank Participation","Certificate in IFE course","Certificate in Adv Programming"]
console.log(arrayCertificates);

console.log(`*******************Adding new property**********************`);
professor.totalExperience = "14 years",
console.table(professor);

console.log(`*******************Modifying any existing property**********************`);
professor.degree = "BCS"
console.log(professor);

console.log(`********************Adding one new certificate*******************`);
 const index = 2;
 const newArray = [
       ...arrayCertificates.slice(0,index),
       "Oracle Certified",
       ...arrayCertificates.slice(index)
 ];
 console.log(newArray);
 
 console.log(`********************Last element of the  array*******************`);
 const array = arrayCertificates.splice(2,2);
 console.log(array);
 

 console.log(`********************Complete object*******************`);
 console.log(professor);


 console.log(`********************Traversing array certificates*******************`);
 const arrays = ['Hacker Rank Participation', 'Certificate in IFE course', 'Oracle Certified', 'Certificate in Adv Programming'];
for (const certificates of arrays) {
  console.log(certificates);
}
