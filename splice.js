let companies=["Bloomberg",  "Microsoft", "Uber", "Google","IBM", "Netflix"];

//1. Remove the first company from the array

// companies.splice(0,1);
// console.log(companies);
//  or
companies.shift();
console.log(companies);

//2. Remove Uber and add Ola in its place
companies.splice(2,1,"Ola");
console.log(companies);

//3. Add Amazon and Apple at the end of the array
companies.push("Amazon", "Apple");
console.log(companies);

//or
// companies.splice(companies.length, 0,  "Amazon", "Apple");
// console.log(companies);