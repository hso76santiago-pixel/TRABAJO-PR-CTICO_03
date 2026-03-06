//impotamos Espress (frame work parra crear el servidor)//
import express from  "express";
//impotamos el modulo fs (file systen) para leeer archivos//
import fs from  "fs";
//creamos la aplicacion de express//
const app=express();
//definimos el puerto en el que se ejecutara el servidor//
const PORT= 3000;

//APPI es un acronimo de aplication programming(interfaz de programacion de aplicaciones)//
//sirve para poder compartir datos. archivos, consulta de bases de datos creando un link/ruta/enpont//
//***************************//
//QUE LEE UN ARCHIVO JSON//
//***************************// 

//Definimos una ruta get en la appi json//
// cuando alguuien estre a la URL se ejecuta esta función//
//get recive dos parametro req que es la solicitud del cliente y res que es la respuesta que enviamos//
app.get("/api/json", (req, resp) => {
try{
    //leemos el archido data.json 
    const data=fs.readFileSync("data.json",'utf-8');
    //convertimos el el texto leido en un objeto json//
    const jsonData=json.parse(data);
    //enviamos el objeto como una respuesta en formata json//
    resp.json(jsonData);
}catch(error){
    //si ocurre algún error ( archivo no existe, error en parseo, etc)//
    // enviamos un estado 500  (erro interno en el servidor) 
    resp.status(500).json({error:"leyendo json"});
    }
});
//********************************//
//API QUE LEE UN ARCHIVO TEXT//
//*******************************// 
// definimos una ruta GET en /api/texto/
// get recive dos parametros res que es la solicitud del cliente y res que es la respuesta que enviamos//
app.get("/api/texto",(req,resp)=>{
    try
{
    // leemos el archivo mensaje.txt como texto de froma sincronica//
    const data=fs.readFileSync("mensaje.txt",'utf8');
    //enviamos el contenido tal cual (texto plano)//
    resp.send(data);
} catch(error){
    //si hay error, enviamos un mensaje en estado 500//
    resp.status(500).json("error leyendo TXT");
}
});
//*************************//
//INICIAMOS EL SERVIDOS// 
//*************************//
// listen es una funcion que arranca el servidor y acepta una funciion callback//
// le indicamos a espress que escuche en el puerto definido//
app.listen(PORT,()=>{
    // este mensaje aparece en consola cuando el servidor arranca correctamente//
 console.log(`servidor corriendo en http://localhost:${PORT}`);});









