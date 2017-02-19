const Glue = require('glue');
const manifest = require('./manifest');

const options = {
    relativeTo: __dirname
};

exports.start = function (callback){
  Glue.compose(manifest.get(), options, (err,server)=>{
    if (err) throw err;
    server.start(callback.call(null, server));
  })
}