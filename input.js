/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const stdin = process.stdin;
let connection;

const setupInput = function (conn) {
  connection = conn;

  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.on('data', handleUserInput);
  return stdin;
}


const handleUserInput = function (key) {
 
    if (key === '\u0003') {
      process.exit();
    }
    if (key === 'w') {
      connection.write('Move: up');
    }
    if (key === 's') {
      connection.write('Move: down');
    }
    if (key === 'd') {
      connection.write('Move: right');
    }
    if (key === 'a') {
      connection.write('Move: left');
    }
    if (key === 'e') {
      connection.write('Say: Hellooo');
    }
    if (key === 'r') {
      connection.write('Say: Blah');
    }
}


module.exports = { setupInput: setupInput };