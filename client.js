const net = require('net');
const { IP, PORT } = require('./constants');
/**
 * Establishes connection with the game server
 */

console.log(IP);
console.log(PORT);
const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
  // interpret incoming data as text
  conn.setEncoding('utf8');
  conn.on('data', (data) => {
    console.log('Server says: ', data);
  });

  conn.on('connect', () => {
    console.log('Successfully connected to game server');
    conn.write('Name: CRR');
    // conn.write('Move: up'); Hard coded move up
  });
  // conn.on('error', error => { connect()})
  return conn;
};

module.exports = {connect : connect};
