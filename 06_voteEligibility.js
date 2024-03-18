function voteEligible(age){
  if (age<=0 || age>130 ) {
    console.log(`Invalid data. Age - ${age}`);
  } else {
    if (age<18) {
      console.log(`Not eligible for voting. Age- ${age}`);
    } else {
      if (age>=18) {
        console.log(`Eligible for voting. Age- ${age}`);
      } else {
        
      }
    }
   
  }
 
}
voteEligible(40);
voteEligible(17);
voteEligible(8);
voteEligible(20);
voteEligible(-10);
voteEligible(200);

voteEligible(0);
voteEligible(null);