// uso de express para aplicaciones Web
// soporte de vistas
// soporta middleware
// crear aplicaciones con react, angular
const fs = require('fs');
const path = require('path');
const express  = require('express');


const app = express();
const port = 3000; //el puerto se puede modificar

// se establece la ruta para recursos estáticos de la aplicación
app.use(express.static(path.join(__dirname,'../public')));
app.use(express.urlencoded({extended: false}));

/* definición de rutas */
// ruta raiz del proyecto, en este caso /localhost:3000
app.get('/', (req, res)=>{
   // res.redirect('/html/index.html');
let urlFile= path.join(__dirname, '../public/html/index.html');
    
    fs.readFile(urlFile,(err, data)=>{
       if (err){
          console.log(err.code);
       }
       res.write(data);
       res.end();
    })    
});

// ruta que muestra los usuarios registrados
app.get('/users',(req, res)=>{
     
    const urlFile = path.join(__dirname,'../data/usuario.json');
    fs.readFile(urlFile,(err, data)=>{
       if (err){
          console.log(err.code);
       }
       res.write(data);
       res.end();
    })    
    res.send('Mostrando todos los usuarios');
});

app.post('/iniciarSesion',(req, res)=>{
   let userl = req.body.user;
   let passwdl = req.body.passwd;
   let val1 = 0;
   let val2 = 0;
   const urlFile = path.join(__dirname,'../data/usuarios.json');

   fs.readFile(urlFile, "UTF-8", (err, data)=>{
      if(err){
         console.log("No se leyeron datos");
         console.log(err.code);
      }
      else{
         console.log("Se leyeron datos");
         console.log(data);
         data = JSON.parse(data);

         // Se recorre el arreglo y si conciden los valores se ponen en 1 las validaciones
         for(const user of data){
            console.log(user.name);
            if(user.name === userl){ 
               val1 = 1;
            }
            if(user.passwd === passwdl){ 
               val2 = 1;
            }
         }
         // Se comprueba el valor de las validaciones, si ambas son correctas se deja ingresar al usuario 
         // en caso de que la contraseña sea incorrecta se informara así como de no encontrar al usuario
         if(val1 === 1 && val2 === 1){
            res.write("Bienvenido " + userl);
         }else if(val1 === 1 && val2 === 0 ){
            res.write("Contraseña invalida " + userl);
         }else{
            res.write("Usuario no encontrado");
           
         }
         
         res.end();
      }
   })

});



// Se ejecuta el servidor en el puerto establecido desde localhost
// Para ver la ejecución abra en el navegador la URL 
// localhost:3000
app.listen(port, ()=>{
   console.log (`Aplicación ejecutándose en el puerto ${port}`); 
})