let promise= new Promise((resolve,reject)=> {
  console.log("raj");
  resolve("som");
  
});
function getData(dataID,getNextData){
  return new promise((resolve,reject)=>{
    setTimeout(()=>{
    //console.log("data",dataID);
    //resolve("sucess");
    reject("error");
    if (getNextData){
         getNextData();
    }
   
  },2000);
  }
);
  }
  