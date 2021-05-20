const fs= require('fs');

// fs.writeFile('./doc/doc3.txt','holllaaa',(err,data)=>{
//     if(err){
//         console.log(err);
//     }
//     console.log('done');
// });

//thora thora data nikal ke stream krte hai as youtube does chunk chunk nikal kar stream krenge
// const readsrm= fs.ReadStream('./doc/doc3.txt');

//  readsrm.on('data',(chun)=>{
//      console.log('_________________________________');
//     console.log(chun.toString());
//  });

//utf 8 to write without using to String data me
const readsrm= fs.ReadStream('./doc/doc3.txt',{encoding:'utf8'});
const  wrtstrm = fs.WriteStream('./doc/doc7,txt');

//  readsrm.on('data',(chun)=>{
//      console.log('_________________________________');
//      wrtstrm.write('_________________________________');
//      wrtstrm.write('_________________________________');
//      wrtstrm.write('_________________________________');
//      wrtstrm.write('\nNEW DSATA');
//      wrtstrm.write(chun);
//    // console.log(chun);
//  });


//direct pipe
readsrm.pipe(wrtstrm);