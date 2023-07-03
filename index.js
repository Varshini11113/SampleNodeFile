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
fs.readFile("./sample.txt", function(err, data){
    sampleFile = data;
    fs.writeFile("./write.txt", "This write file is written by inbuilt function" , function(err){
        console.log(err);
    });
    console.log(sampleFile.toString());
});