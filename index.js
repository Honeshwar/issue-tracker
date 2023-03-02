const express = require("express");//framework require
const app = express();// feature of framework just call function,  it create new express app,that having all functionality that express framework give us it  help us to build application a/c to our need in more faster wa( not using nodejs library)
/*put new express application inside app variable(reference store, help fuc use), app all func that an application(server side app) can have*/

//express func called,  it create new express app ,that having all functionality that express framework give//put new express application inside app variable// call to run the express server,instance entire framework
const port = 8000;//address of server of particular application/services, help in identify different services provides by same machine
app.listen(port , (error)=>{
    if(error){
        console.log("error while running express server",error);
        return;
    }
    console.log("express server is running fine on port: ",port);
});
