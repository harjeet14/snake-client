
const net = require('net');
const { IP, PORT } = require('./constants');

const connect = function () {
  const name = 'Name: SCG';

  const conn = net.createConnection({  //create connection with IP and Port
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');
  conn.on('connect', (data) => {
    console.log('Connected Successfully to Game');
    conn.write(`${name}`);
  });

  conn.on('data', (data) => {
    console.log('server says:', data);
  });

  conn.on('end', (data) => {
    console.log("disconnected to server ")
  });

  return conn;
};

module.exports = { connect };
