function getData(dataID,getNextData){
  setTimeout(()=>{
    console.log("data",dataID);
    if (getNextData){
         getNextData();
    }
   
  },2000);
  }
 

 getData(1,()=>{
  console.log("raj ")
  getData(2,()=>{
  getData(3,()=>{
  getData(4,()=>{
  getData(5,()=>{
  getData(6,()=>{

  })
 })
 })
 })
 })
 });