// // // console.log("Sample Calculator");
// // // function calculate(){
// // //     let a = +process.argv[2];
// // //     let operation = process.argv[3];
// // //     let b = +process.argv[4];

// // //     // if(operation == 'add'){
// // //     //     console.log('The addition is ')
// // //     //     return a+b;
// // //     // }
// // // varshini is a bake going to make cake
// // // oorla irrukum lake ku ava aga mata shake uh 
// // // vandi la irrukum brake uh everything is for god sake uh
// // //     // else if(operation == 'mul'){
// // //     //     console.log('The multiplication is ')
// //     //     return a*b;
// //     // }
// //     // else if(operation == 'div'){
// //     //     console.log('The division is ')
// //     //     return a/b;
// //     // }
// //     // else if(operation == 'sub'){
// //     //     console.log('The subtraction is ')
// //     //     return a-b;
// //     // }

// //     switch(operation){
// //         case 'add':
// //             console.log('The addition is ')
// //             return a+b;
// //             break;
// //         case 'sub':
// //             console.log('The subtraction is ')
// //             return a-b;
// //             break;
// //         case 'mul':
// //             console.log('The multiplication is ')
// //             return a*b;
// //         case 'div':
// //             console.log('The division is ')
// //             return a/b;
// //             break;
// //         default:
// //             console.log("Calculation requires valid operator");
// //     }
// // }
// // let res = calculate()
// // console.log(res)

// // const fs = require('fs')

// // let sampleFile=""

// //Dependent nodejs so write executes before the execution of read
// // fs.readFile("./sample.txt", function(err, data){
// //     sampleFile = data;
// //     console.log(sampleFile.toString());
// // });
// // fs.writeFile("./write.txt",sampleFile , function(err){
// //     console.log(err);
// // });


// //to make the data written in write file we use the func/- inside the read file
// // fs.readFile("./sample.txt", function(err, data){
// //     sampleFile = data;
// //     fs.writeFile("./write.txt", "This write file is written by inbuilt function" , function(err){
// //         console.log(err);
// //     });
// //     console.log(sampleFile.toString());
// // });

// // fs.readFile("./sample.txt", function(err, data){
// //     sampleFile = data;
// //     fs.writeFile("./write.txt", "This write file is written by inbuilt function" , function(err){
// //         console.log(err);
// //     });
// //     console.log(sampleFile.toString());
// // });


// //.then tells the value is inserted (resolve)
// // new Promise(function(resolve, reject) {
// //     setTimeout (function() {
// //         resolve("Data")
// //     }, 2000)
// // }).then(function (val){
// //     console.log(val);
// // })

// //modern way of handling function
// // using async and await keywords instead then method with callback functions
// //async tells that this function takes some time to complete the job

// // async function test(){
// //     let fun = await fetch("");
// //     console.log(fun) 
// // } 
// // test();

// // setTimeout(function() {
// //     console.log("varshini");
// // }, 2000);

// // setInterval(function(){
// //     console.log("udhaya");
// // }, 1000);

// //to stop the setInterval









// // var a = 10;
// // setTimeout(function() {
// //     if(a>1000)
// //     clearInterval(interval);
// // }, 4000);

// // let interval = setInterval(function(){
// //     a = a*10;
// //     console.log(a);
// // }, 1000);

// // // console.log(global);

// // var shini = "udhaya"
// // console.log("varshini value" , shini);

// // let [a,b,...c]= require("./modules.js");
// // console.log(c);

// // console.log(a);

// // let {John, Jane}= require("./modules.js");
// // console.log(John, Jane);

// // console.log(a);

// const fs=require('fs');

// fs.readFile("./sample.txt", function(err,data){
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(data.toString());
// })

// console.log("after read file")

// fs.writeFile("./write.txt", )

const fs = require('fs');
// fs.mkdir("./folder", function(err){
//     console.log(err);
// })

// //to remove the directory without files
// fs.rmdir("./folder", function(err){
//     console.log(err);
// })

// //to remove a directory with files
// fs.rmdir("./folder", {recursive:true}, function(err){
//     console.log(err);
// })

fs.unlink("./write.txt", function(err){
    console.log(err);
})





























