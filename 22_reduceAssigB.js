
class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
this.emp_id = emp_id;
this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;
    }
    detail(){

        console.log(`Employee Details => ID: ${this.emp_id}, Name: ${this.emp_name}, Dept: ${this.emp_dept}, Salary: ${this.emp_salary}, Company: ${this.emp_company}`);

    }
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 const arrayEmps = [emp_anil,emp_radha,emp_rishi,emp_sonali,emp_monika,emp_viny,emp_mahi]

console.log(`-------Emps from Wipro Company------`);
const arrayNew =arrayEmps.filter( (currentValue)=>{

    return currentValue.emp_company=="Wipro";

} );

arrayNew.forEach( (element)=>{

    element.detail();

} );
console.log(`-------Emps from IT or HR dept------`);
 const arrayNew2 = arrayEmps.filter((currentValue)=>{
return currentValue.emp_dept=="IT"  || currentValue.emp_dept=="HR" 
 });

 arrayNew2.forEach( (element)=>{
    element.detail();
} );

console.log(`-------Emps whose Emp Id's greater than 50------`);
const arrayNew3 = arrayEmps.filter((currentValue)=>{
    return currentValue.emp_id>50
});
arrayNew3.forEach( (element)=>{
    element.detail();
} );

console.log(`-------Emps whose names start with letter 'A' or 'V' or 'M'------`);
const arrayNew4 = arrayEmps.filter((currentValue)=>{
    return currentValue.emp_name. startsWith("A") || currentValue.emp_name.startsWith("V") || currentValue.emp_name.startsWith("M")
})
arrayNew4.forEach( (element)=>{
    element.detail();
} );

console.log(`-------Average salary of employee for all dept------`);

arrayNew5 = arrayEmps.filter((currentValue)=>{
    return currentValue.emp_dept == "IT","HR","Finance";
});
const sumSalary = arrayNew5.reduce( (runningTotal, currentValue)=>{

    return runningTotal+currentValue.emp_salary;

}, 0 );
// console.log(sumSalary);

console.log(`Average salary of employee from All department is: ${sumSalary/arrayNew5.length}`);

console.log(`-----Average salary of employee for IT dept-----`);
 arrayNew6 = arrayEmps.filter(( currentValue)=>{
    return currentValue.emp_dept=="IT"
})
 const sumSalary2 = arrayNew6.reduce((runningTotal , currentValue)=>{
    return runningTotal+currentValue.emp_salary;
 },0 );
// console.log(sumSalary2);
 console.log(`Average salary of employee from IT department is: ${sumSalary2/arrayNew6.length}`);