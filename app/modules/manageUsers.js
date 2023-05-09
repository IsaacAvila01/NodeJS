const path =  require('path');


const fs=require("fs");

function getUsers(){
   return new Promise((resolve, reject)=>{      
      fs.readFile(path.join(__dirname, '../resources/usuarios.json'), "utf-8",(error, data)=>{
         if (error!=null){
             reject(error);            
            return;
         }      
         resolve(JSON.stringify(data));
      });   
   });   
}

function updateUsers(users){
   return new Promise((resolve, reject)=>{
      console.log(path.relative());
      fs.writeFile(path.join(__dirname, '../resources/usuarios.json'), users,(error)=>{
         if (error != null){
            console.log(error);
            reject(error);
            return;
         }      
         resolve("se ejecuto la actualizción");
      });   
   });    
}


module.exports={
  getUsers:getUsers,
  updateUsers:updateUsers 
}