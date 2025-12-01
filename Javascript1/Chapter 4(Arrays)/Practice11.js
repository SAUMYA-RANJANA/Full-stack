/*Creat an array to store companies->"Bloomberg","Microsoft","uber","Google","IBM","netflix"
a.Remove the first company from the array
b.Remove Uber & Add ola in its place
c.Add amazon at the end*/

let companies=["Bloomberg","Microsoft","Uber","Google","IBM","Netflix"];
companies.shift();
console.log(companies);
companies.push("Amazon");
console.log(companies);
companies.splice(1,1,"ola");
console.log(companies);
