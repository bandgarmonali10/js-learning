console.log(`=====================Step 01===================`);
class Vehicle{
    constructor(company,color,model,type,price){
 this.company=company;
 this.color=color;
 this.model=model;
 this.type=type;
 this.price=price;

    }
    detail(){
        console.log(`Vehicle Details => Company:${this.company},Color:${this.color},Model:${this.model},Type:${this.type},Price:${this.price}`);
    }
   
}
const vehicle1 =new Vehicle("Mahindra", "Black", "Thar", "Car", "11.25 Lakhs");
vehicle1.detail();

const vehicle2 =new Vehicle("Honda", "Red", "Shine", "Bike", " 1 Lakh");
vehicle2.detail();

const vehicle3 =new Vehicle("Royal Enfield", "Black", "Bullet", "Bike", " 2 Lakhs");
vehicle3.detail();

const vehicle4 =new Vehicle("Shrinath Travels", "Green", "Single Deck", "Bus", " 47 Lakhs");
vehicle4.detail();

const vehicle5 =new Vehicle("Uber", "White", "Tata Tiago", "Taxi", " 1 Lakh");
vehicle5.detail();

console.log(`=========== Traversing array object =============`);

const array = [vehicle1, vehicle2, vehicle3,vehicle4,vehicle5];

for (const element of array) {

   element.detail(); 

}

console.log(`=====================Step 02===================`);
class College{
constructor(name,university,location,branches,){
this.name=name;
this.university=university;
this.location=location;
this.branches=branches;
}
detail(){
   console.log(`College Details => Name : ${this.name},University : ${this.university},Location : ${this.location},Branches : ${this.branches}`);  
}

}
const college1 = new College("SMS","Solapur University", " Sangola", "5");
college1.detail();

const college2 = new College("COEP"," SPPU", " Pune", "11");
college2.detail();

const college3 = new College("SCOE"," Pune University", "Pune", "10");
college3.detail();

const college4 = new College("SVERI","Solapur University", "Pandharpur", "7");
college4.detail();