module.exports = {
  ops: {
    interval: 1000
  },
  reporters: {
    ConsoleReporter: [
      {
        module: 'good-squeeze',
        name: 'Squeeze',
        args: [
          {
            log: '*',
            response: '*'
          }
        ]
      }, {
        module: 'good-console'
      },
      'stdout'
    ]
  }
}