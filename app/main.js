/**
 * Ejemplo de export e import de modulos en NodeJS
*/
// Módulo que implementa operaciones aritméticas básicas
const operaciones = require('./modules/aritmethic.js');
// Módulo que ejemplifica lectura de archivo y uso de JSON
const manageUsers = require('./modules/manageUsers.js');

let users, user;

users = []; // arreglo de objetos

// nuevo usuario a añadir al archivo usuarios.json de la carpeta
// resources.
user = {
    "id":4,
    "name":"Usuario4",
    "passwd":"##12345##"  
}

/**
 * Función que implementa la actualización del archivo
 */
function ejecutarUpdate(){
    let list;
    
    list = JSON.parse(users);
    list.push(user);    

    manageUsers.updateUsers(JSON.stringify(list)).then((data)=>{
        console.log(data);  
    }); 
}

// Función que obtiene todos los usuarios del archivo usuarios.json
manageUsers.getUsers().then((data)=>{  
  users = JSON.parse(data);
  console.log(`Se imprime desde la promesa ... ${users}`);    
}).catch(() =>{
   console.log(`Error ...`); 
});

console.log(`Se imprime fuera la promesa ... ${users}`);    

// Se ejecuta la actualización del archivo después de un retardo de
// 10 segundos, dado que las funciones del módulo FS se ejecutan de
// forma asincrona y el retardo es para que termine primero la función
// getUsers.
//setTimeout(ejecutarUpdate,10000);


