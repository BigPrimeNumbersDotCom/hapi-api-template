'use strict';

module.exports = {
  server: {

  },
  connections: [
    {
      port: process.env.PORT,
      labels: ['api']
    }
  ],
  registrations: [
    {
      plugin: {
        register: 'good',
        options: require('./plugins/good')
      },
    },{
      plugin: 'blipp'
    },{
      plugin: {
        register: './routes'
      }
    }
  ]
};