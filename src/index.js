const Mebo = require('mebo');

// this example uses es6/es7 spec to make things easier to play with.
// In a production environment please consider transpiling beforehand
require('babel-register');

require('./ResizeImage');

// command-line support:
// node . --cli resizeImage --help
// node . --cli resizeImage --width=50 --height=50 data/logo.png > /tmp/logoTarget.png
if (process.argv.includes('--cli')) {

  const actionName = process.argv[process.argv.indexOf('--cli')];

  // creating a command-line handler which is used to load the command-line
  // arguments to the action and to output the result back to the command-line
  Mebo.Handler.get('cli').init(actionName);
}

