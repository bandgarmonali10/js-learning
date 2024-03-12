console.log("==========step 1==========");
function name(){

    console.log("Monali Bandgar");
}
name();

function degree(){
    console.log("BCS");
}
degree();
console.log("****************************************");
console.log("============Step 2===========");
function personalDetails(firstName,lastName,collegeName){
console.log("First Name:", firstName);
console.log("Last Name:",lastName);
console.log("College Name:",collegeName);
   
}
personalDetails("Monali","Bandgar","Sangola college sangola");

console.log("===========Step 3==========");
function swapValues(Virat,Anushka){

    var name1=Virat;
    var name2=Anushka;
   
   
    console.log("==========Before Swap==========");
    console.log("Virat:",name1, "Anushka:",name2);
   
    console.log("===========After Swap==========");
    var temp=name1;
    name1=name2;
    name2=name1;
    name2=temp;

     
    console.log("Virat:",name1, "Anushka:",name2);
    

   }
swapValues("Virat","Anushka");
 console.log("********************************************");
 function swapValues2(){
    var num1=1000;
      var num2=2000;
      console.log("===========Before Swap============");
      console.log("1000:",num1, "2000:",num2);
 
      console.log("============After Swap=============");
      var temp=num1;
      num1=num2;
      num2=num1;
     num2=temp;
     console.log("1000:",num1, "2000:",num2);

}
swapValues2(1000,2000)

console.log("************************************");
console.log("==============Step 4================");
function addThreeValues(){
    num1=10.23;
    num2=600;
    num3=40;
    var result=num1+num2+num3;
    console.log("Arguments:",num1,num2,num3);
    console.log("Addition is:",result);
}
addThreeValues(10.23,600,40)

function addThreeValues2(){
    num1="Hello";
    num2="Good";
    num3="Morning";
    var result=num1+ num2 +num3;
    console.log("Arguments:",num1,num2,num3);
    console.log("Addition is:",result);
}
addThreeValues2("Hello","Good","Morning")




      



    
 
 
