const Mebo = require('mebo');

// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

require('./ResizeImage');
require('./Hello');

// command-line support:
// # listing actions:
// node . --help
//
// # executing actions:
// node . resizeImage --help
// node . resizeImage --width=50 --height=50 data/logo.png > /tmp/logoTarget.png
// node . hello --help
// node . hello
// node . hello "Ola mundo!"
const cli = Mebo.Handler.get('cli');
if (cli.isSupported()){
  // in case you just want to provide a single action through cli
  // take a look at the documentation: https://mebohq.github.io/docs/class/src/Handlers/Cli.js~Cli.html
  cli.init();
}
