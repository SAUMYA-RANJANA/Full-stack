const employee={
    calcTax(){
      console.log("tax rate is 10%");
    },
};
const arjun={
  salary:50000,
};
const brjun={
  salary:50000,
};
const crjun={
  salary:50000,
  calcTax(){
      console.log("tax rate is 30%");
    },
};
arjun._proto_=employee;
brjun._proto_=employee;
crjun._proto_=employee;
