// play.js
const { connect } = require('./client');
console.log('Connecting ...');
/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */
const setupInput = function () {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  handleUserInput();
  return stdin;
}

const handleUserInput = function () {
  stdin.on('data', (key) => {
    if (key === '\u0003') {
      process.exit();
    }
  });
}
connect();

