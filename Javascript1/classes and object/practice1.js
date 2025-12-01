let DATA="hari omm";
class user{
  constructor (name,email){
    this.name=name;
    this.email=email;
  }
  viewData(){
    console.log("data=",DATA);
  }

}
class admin extends user{
  constructor(name,email){
    super(name,email)
  }
  editData(){
    DATA="Radhe Radhe";
  }
}
let employee1=new user("som","ddrff@gm.com");
let admin1=new admin("admin","htfd@jk.com");