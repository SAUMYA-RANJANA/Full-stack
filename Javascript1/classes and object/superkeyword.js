class personn{
  constructor(branch){
    this.species="homo sapiens";
    this.branch=branch;
  }

  eat(){
    console.log("eat");
  }
  sleep(){
    console.log("sleep");
  }
}
class enginner extends personn{
  constructor(branch){
    super(branch);
    
  }
  work(){
    super.eat();
    console.log("work");
  }
}
let rajobj=new enginner("mca");