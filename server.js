// GET call - what ever we do in browser like localhost:3000
const HTTP = require("http");//inbuilt module

//the server runs only when the request is obtained
//Returns a new instance of Server.
//if no response the browser will keep on rolling
let server = HTTP.createServer(function(request, response){
    response.write("Varshini's first server created on July 4th");
    response.end();
    console.log("server created");
    console.log(request.url);//after the / content 
})

let port = 3001;
server.listen(port, function(){
    //listening to port and callback after successful connection 
    console.log("Server listening on port ", port);
})