//Arithmetic Operators
let a=5;
let b=2;

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a%b=",a%b);
console.log("a**b=",a**b);

/*increment 
decrement*/
a=a+1;
console.log("a=",a);
b--;
console.log("b=",b);

//unary operator
console.log("a++=",a++);//6
console.log("a=",a);//7
console.log("a--",a--);//7
console.log("a=",a);//6
console.log("++a",++a);

//Asignment Operators
let c=12;
let d=13;
c+=4;//c=c+4
console.log("c=",c);
d+=2;//d=d+2
console.log("d=",d);
c**=2;
console.log("c=",c);

//Comparison Operator
let e=12;
let f=13;
console.log("12==13",e==f);
console.log("12!=13",e!=f);
console.log("13>=12",f>=e);

//Logical Operator
console.log("e<f && f==e",e<f && f==e);
console.log("e<12 || f==13",e<12 || f==13);
console.log("!(e<f)=",!(e<f));

//Conditional Statement
let age="25";
if(age>18)
{
    console.log("YOU CAN VOTE");
}
else
{
    console.log("YOU CANNOT VOTE");
}
age>=18?
console.log("adult"):console.log("not adult");

//theme color
let mode="dark";
let color;
if ("mode==dark")
{
    color="black";
}
if("mode==light")
{
    color="white";
}
console.log(color);