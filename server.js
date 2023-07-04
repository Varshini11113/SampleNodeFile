// GET call - what ever we do in browser like localhost:3000
const HTTP = require("http");//inbuilt module

//the server runs only when the request is obtained
//Returns a new instance of Server.
//if no response the browser will keep on rolling
// var students = {
//     name: "varsh",
//     id : 101,
//     rollno :256794
// }
let server = HTTP.createServer(function(request, response){
    response.write(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1 style="color: red">Varshini</h1>
    </body>
    </html>`);
    response.write("Hello")
    // response.write(students);
    // response.write([1,2,3]);
    // response.writable(100)s
    response.end();
    console.log("server created");
    console.log(request.url);//after the / content 
})

let port = 3001;
server.listen(port, function(){
    //listening to port and callback after successful connection 
    console.log("Server listening on port ", port);
})



