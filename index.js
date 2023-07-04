// console.log("Sample Calculator");
// function calculate(){
//     let a = +process.argv[2];
//     let operation = process.argv[3];
//     let b = +process.argv[4];

//     // if(operation == 'add'){
//     //     console.log('The addition is ')
//     //     return a+b;
//     // }
//     // else if(operation == 'mul'){
//     //     console.log('The multiplication is ')
//     //     return a*b;
//     // }
//     // else if(operation == 'div'){
//     //     console.log('The division is ')
//     //     return a/b;
//     // }
//     // else if(operation == 'sub'){
//     //     console.log('The subtraction is ')
//     //     return a-b;
//     // }

//     switch(operation){
//         case 'add':
//             console.log('The addition is ')
//             return a+b;
//             break;
//         case 'sub':
//             console.log('The subtraction is ')
//             return a-b;
//             break;
//         case 'mul':
//             console.log('The multiplication is ')
//             return a*b;
//         case 'div':
//             console.log('The division is ')
//             return a/b;
//             break;
//         default:
//             console.log("Calculation requires valid operator");
//     }
// }
// let res = calculate()
// console.log(res)

const fs = require('fs')

let sampleFile=""

//Dependent nodejs so write executes before the execution of read
// fs.readFile("./sample.txt", function(err, data){
//     sampleFile = data;
//     console.log(sampleFile.toString());
// });
// fs.writeFile("./write.txt",sampleFile , function(err){
//     console.log(err);
// });


//to make the data written in write file we use the func/- inside the read file
// fs.readFile("./sample.txt", function(err, data){
//     sampleFile = data;
//     fs.writeFile("./write.txt", "This write file is written by inbuilt function" , function(err){
//         console.log(err);
//     });
//     console.log(sampleFile.toString());
// });

// fs.readFile("./sample.txt", function(err, data){
//     sampleFile = data;
//     fs.writeFile("./write.txt", "This write file is written by inbuilt function" , function(err){
//         console.log(err);
//     });
//     console.log(sampleFile.toString());
// });


//.then tells the value is inserted (resolve)
// new Promise(function(resolve, reject) {
//     setTimeout (function() {
//         resolve("Data")
//     }, 2000)
// }).then(function (val){
//     console.log(val);
// })

//modern way of handling function
// using async and await keywords instead then method with callback functions
//async tells that this function takes some time to complete the job

// async function test(){
//     let fun = await fetch("");
//     console.log(fun) 
// } 
// test();

// setTimeout(function() {
//     console.log("varshini");
// }, 2000);

// setInterval(function(){
//     console.log("udhaya");
// }, 1000);

//to stop the setInterval

var a = 10;
setTimeout(function() {
    if(a>1000)
    clearInterval(interval);
}, 4000);

let interval = setInterval(function(){
    a = a*10;
    console.log(a);
}, 1000);