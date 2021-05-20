const http= require('http');
const fs = require('fs');
const server=http.createServer((req,res)=>{
// console.log(req.url);

res.setHeader('Content-Type', 'text/html');
// res.write('<h1>heiiioooc created</h1>');
// res.write('<h4>heiiioooc  inki maa kaaaaaaaaaaaaa created</h4>');
let path = './views/';
 
switch(req.url){
    case'/':
       path +='index.html';
       break;
    case '/about':
        path +='about.html';
        break;
    case '/about-meranaam':
    res.statusCode=301;
     res.setHeader('Location','/about');
     res.end();
        break;
    default:
        path+='err.html'  
        break; 
}
fs.readFile(path,(err,data)=>{
    if(err){
        console.log(err);
        res.end();
    }
    else{
        res.write(data);
        res.end();
    }

});
// res.end();
});
server.listen(3000,'localhost',()=>{
    console.log('serveer is listening at ');
});