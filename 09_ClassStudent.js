
class Student {

    constructor(name,rollNumber,division){

        this.name=name;
        this.rollNumber=rollNumber;
        this.division=division;
    }
    getDetail(){
        console.log(`Student Details => Name: ${this.name}, Roll Number: ${this.rollNumber}, Division: ${this.division}`);
    }
}
const student1 = new Student("Kiran", 40, "A");

student1.getDetail();

const student2 = new Student("Gouri", 42, "B");

student2.getDetail();

const student3 = new Student("Supriya", 45, "C");

student3.getDetail();
