/**
 * Setup User Interface 
 * Specifically, so that we can handle user input via stdin
 */

const stdin = process.stdin;
const setupInput = function () {
  
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
      console.log('up');
    }
    if (key === 's') {
      console.log('down');
    }
    if (key === 'd') {
      console.log('right');
    }
    if (key === 'a') {
      console.log('left');
    }
}


module.exports = { setupInput: setupInput };