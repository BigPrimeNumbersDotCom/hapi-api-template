const Handlers = require('../handlers');

exports.register = function(server,options,next){
  const routes = [
    {
      method: 'GET',
      path: '/',
      handler: Handlers.hello
    }
  ];

  server.route(routes);

  next();
};

exports.register.attributes =  {
  name: 'routes',
  multiple: false,
  version: '0.1.0'
};
