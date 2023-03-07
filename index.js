const express = require("express"); //framework require
const app = express(); //require mongodb
const port = 8000;
require("./config/mongodb");

//set up express ejs layout
const layout = require("express-ejs-layouts");
console.log(layout); //mw func layout
//tell express to use ejs layout
app.use(layout); //me func call each time when render function call,firstly view engine compile layout file than as need in layout an body compile that file pass in render function
//whenever body any style/script having extract in styles/script key/variable
app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
//set up of ejs to use in this project
app.set("view engine", "ejs"); //predefine key =exact same write like in documentation
app.set("views", "./views"); //key = path ,where view engine find all file render/compile-html

//any url start with '/' must use this router MW
app.use("/", require("./routers/index.js"));
app.listen(port, (error) => {
  if (error) {
    console.log("error while running express server", error);
    return;
  }
  console.log("express server is running fine on port: ", port);
});

// const express = require("express"); //framework require
// const app = express(); // feature of framework just call function,  it create new express app,that having all functionality that express framework give us it  help us to build application a/c to our need in more faster wa( not using nodejs library)
// /*put new express application inside app variable(reference store, help fuc use), app all func that an application(server side app) can have*/
// //require mongobd
// require("./config/mongodb");
// //express func called,  it create new express app ,that having all functionality that express framework give//put new express application inside app variable// call to run the express server,instance entire framework
// const port = 8000; //address of server of particular application/services, help in identify different services provides by same machine
// app.listen(port, (error) => {
//   //an address set to this particular express application server
//   if (error) {
//     console.log("error while running express server", error);
//     return;
//   }
//   console.log("express server is running fine on port: ", port);
// });
