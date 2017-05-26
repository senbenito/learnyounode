
const fs = require('fs');
const path = require('path');

//HELLO WORLD
// console.log('HELLO WORLD');

//BABY STEPS
// var results = 0;
// for (let i=2; i<process.argv.length; i++){
//   results += +process.argv[i];
// }
// console.log(results);

//MY FIRST I/O!
// var fs = require('fs');
// var buf = fs.readFileSync(process.argv[2]);
// var str = buf.toString();
// console.log((str.split('\n').length)-1);

//MY FIRST ASYNC I/O!
// var fs = require('fs');
// var buf = fs.readFile(process.argv[2], function callback(err, data){
//   var str = data.toString();
//   console.log((str.split('\n').length)-1);
// });

//FILTERED LS
// var fs = require('fs');
// var path = require('path');
// fs.readdir(process.argv[2], function callback(err, list){
//     if (err) return console.error(err)
//   for (let i=0; i<list.length; i++){
//     if (list[i].includes(`.${process.argv[3]}`))
//     console.log(list[i]);
//   }
// });

//MAKE IT MODULAR
// const mymodule = require('./mymodule.js');
// var dir = process.argv[2];
// var ext = process.argv[3];
// var callback = function (err, list){
//   if (err) {
//     return console.log(err);
//   }
//   for (let i=0; i<list.length; i++){
//     console.log(list[i]);
//   }
// };
// mymodule(dir, ext, callback);

//HTTP CLIENT
