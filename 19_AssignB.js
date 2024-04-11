class Employee{
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
this.emp_id = emp_id;
this.emp_name = emp_name;
this.emp_dept = emp_dept;
this.emp_salary = emp_salary;
this.emp_company = emp_company;
    }
  
}
const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

 const arrayEmployee = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
 console.log(`---------Step 1---------`);
arrayEmployee.forEach(element => {
    if (element.emp_company == "TCS") {
        console.log(` Emp Name : ${element.emp_name}, Emp Company :${element.emp_company}`);
    }
});
console.log(`---------Step 2---------`);
arrayEmployee.forEach(element => {
    if (element.emp_dept == "Finance") {
       console.log(` Emp Name : ${element.emp_name},Employee Dept : ${element.emp_dept}`);
       
    }
});
 console.log(`---------Step 3---------`);
 arrayEmployee.forEach(element => {
     if (element.emp_name . startsWith ("R")) {
         console.log(`Emp Id :${element.emp_id}, Emp Name : ${element.emp_name},Emp Dept :${element.emp_dept}, Emp Salary :${element.emp_salary}, Emp Company :${element.emp_company}`);
     }
     });

    console.log(`---------Step 4---------`);
    arrayEmployee.forEach(element => {
        if (element.emp_salary > 75000) {
            console.log(`Emp Name : ${element.emp_name}, Emp Company : ${element.emp_company}, Emp Salary : ${element.emp_salary}`);
        }
    });
    console.log(`---------Step 5---------`);
    arrayEmployee.forEach(element => {
        if (element.emp_salary >= 50000 && element.emp_dept == "IT") {
            console.log(`Employee Details=>Emp Id:${element.emp_id},Emp Name:${element.emp_name},Emp Dept:${element.emp_dept} Emp Salary:${element.emp_salary},Emp Company:${element.emp_company}`);
        }
    });
    console.log(`---------Step 6---------`);
    arrayEmployee.forEach(element => {
        if (element.emp_company == "Infy") {
            console.log(`Employee Details=>Emp Id:${element.emp_id},Emp Name:${element.emp_name},Emp Dept:${element.emp_dept} Emp Salary:${element.emp_salary},Emp Company:${element.emp_company}`);
        }
    });