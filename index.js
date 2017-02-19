const app = require('./lib/app');

app.start((server)=>{
  console.log(`listening on ${server.info.port}`);
})
