var fs = require('fs');
// var path = require('path');
var dir = process.argv[2];
var ext = process.argv[3];
var callback = process.argv[4];

module.exports = function module(dir, ext, callback){
  fs.readdir(process.argv[2], function callback(err, list){
      if (err) return console.error(err)
    for (let i=0; i<list.length; i++){
      if (list[i].includes(`.${process.argv[3]}`))
      console.log(list[i]);
    }
  });
}
