const { MOVEMENTS, MESSAGES } = require('./constants');
/**
 * Setup User Interface
 * Specifically, so that we can handle user input via stdin
 */

const stdin = process.stdin;
let connection;

const setupInput = function(conn) {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  return stdin;
};


const handleUserInput = function(key) {

  if (key === '\u0003') {
    process.exit();
  }
  if (MOVEMENTS[key]) {
    connection.write(MOVEMENTS[key]);
  }
  if (MESSAGES[key]) {
    connection.write(MESSAGES[key]);
  }
};


module.exports = { setupInput: setupInput };