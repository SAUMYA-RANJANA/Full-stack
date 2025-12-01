class parent{
  hello(){
    console.log("hello");
  }
}
class child extends parent{}

let obj = new child();

class person{
  eat(){
    console.log("eat");
  }
  sleep(){
    console.log("sleep");
  }
}
class engineer extends person{
  work(){
    console.log("work");
  }
}
let somobj=new engineer();