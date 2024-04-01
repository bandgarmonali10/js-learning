console.log(`**************Object 01**************`);
const bankSbi = {
    bankName :" State Bank of India",
    accountNo : 123456,
    branch : "Mangalwedha",
    IFSCCode : 678900,

}
console.log(bankSbi);

console.log(`**************Object 02**************`);
const bankLocation = {
     street : "Solapur road" ,
     city : "Mangalwedha",
     pin : 413305,
}
console.log(bankLocation);

console.log(`**************Cloning Two Objects**************`);
console.log(`=========== Object 01=========`);
 const objectClone = Object.assign({},bankSbi)
console.log(objectClone);

 console.log(`=========== Object 02=========`);
 const objectClone2 = Object.assign({},bankLocation)
 console.log(objectClone2);

 
console.log(`**************Creating Object**************`);
 const rateOfInterest = {
    homeLoanInterest :" 10.5 % ",
    personalLoanInterest : "8.6 %" ,
    duelInterest :"7.4 %" ,
 }
 console.log(rateOfInterest);

console.log(`**************Merging Three Objects**************`);
const bankSbi1 = {
    bankName :" State Bank of India",
    accountNo : 123456,
    branch : "Mangalwedha",
    IFSCCode : 678900,

}

const bankLocation2 = {
    street : "Solapur road" ,
    city : "Mangalwedha",
    pin : 413305,
}

const rateOfInterest3 = {
    homeLoanInterest :" 10.5 % ",
    personalLoanInterest : "8.6 %" ,
    duelInterest :"7.4 %" ,
 }
const mergedObject = Object.assign({}, bankSbi, bankLocation,rateOfInterest);
console.table(mergedObject);

console.log(`*****************Traversing Objects******************`);
 const sbiDetails = {
        bankName :" State Bank of India",
        accountNo : 123456,
        branch : "Mangalwedha",
        IFSCCode : 678900,
    
        street : "Solapur road" ,
        city : "Mangalwedha",
        pin : 413305,

        homeLoanInterest :" 10.5 % ",
        personalLoanInterest : "8.6 %" ,
        duelInterest :"7.4 %" ,
 }
 for (const key in sbiDetails) {
   console.log(`${key} => ${sbiDetails[key]}`);
    
 }

