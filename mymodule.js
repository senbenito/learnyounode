const fs = require('fs');
const path = require('path');


module.exports = function module(dir, ext, callback){
  fs.readdir(dir, function (err, list){
      if (err) {
        return callback(err)
      }
    var results = [];
    for (let i=0; i<list.length; i++){
      if (path.extname(list[i]) === `.${ext}`){
        results.push(list[i]);
      }
    }
    return callback(null, results);
  });
}
