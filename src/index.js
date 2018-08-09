const Mebo = require('mebo');

// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

require('./ResizeImage');
require('./Hello');

// command-line support:
// # listing actions:
// node . --cli
//
// # executing actions:
// node . --cli resizeImage --help
// node . --cli resizeImage --width=50 --height=50 data/logo.png > /tmp/logoTarget.png
// node . --cli hello --help
// node . --cli hello "Ola mundo!"
if (require.main === module && process.argv.includes('--cli')) {

  // in case you just want to provide a single action through cli
  // take a look at the documentation: https://mebohq.github.io/docs/class/src/Handlers/Cli.js~Cli.html
  const actionName = process.argv[process.argv.indexOf('--cli')];

  // creating a command-line handler which is used to load the command-line
  // arguments to the action and to output the result back to the command-line
  Mebo.Handler.get('cli').init(actionName);
}

