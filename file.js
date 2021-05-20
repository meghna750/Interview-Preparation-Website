 const fs= require('fs');

// //asynchronous hai tll data is not returning its goiin to run the code below
// fs.readFile('./doc/doc.txt',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })
// console.log('lastttt');

// //writing in particular file
// fs.writeFile('./doc/doc.txt','heee hoooooooo',()=>{
//     console.log('the file is written');
// });

//creting a folder
fs.mkdir('./newone',(err,data)=>{
if(err){
    //console.log('galti hua beta');
    console.log(err);

}
else
console.log('folder created');
})