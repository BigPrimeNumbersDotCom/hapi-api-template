const app = require('./lib/app');

app.start((server)=>{
  if(server.info.port!==0)
    console.log(`listening on ${server.info.port}`);
})
