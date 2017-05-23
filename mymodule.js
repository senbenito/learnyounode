var fs = require('fs');
function module(dir, ext, callback){
  var result = fs.readdir(dir, callback){
    if (err)
    return callback(err);
    callback(null, list);
    for (let i=0; i<list.length; i++){
      if (list[i].includes(`.${ext}`))
      console.log(list[i]);
    }
}



module.exports = module
