
//const { Server } = require('http');
const net = require('net');

const connect = function () {
  const name = 'Name: SCG';
  const up = 'Move: up';
  const left = 'Move: left';
  const down = 'Move: down';
  const right = 'Move: right';
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });

  conn.setEncoding('utf8');
  conn.on('connect', () => {
    console.log('Connected Successfully to Game');
    conn.write(`${name}`);
  });

  setTimeout(() => { conn.write(`${up}`); }, 500);
  setTimeout(() => { conn.write(`${down}`) }, 500);
  setTimeout(() => { conn.write(`${left}`) }, 500);
  setTimeout(() => { conn.write(`${right}`) }, 500);

  conn.on('data', (data) => {
    console.log('server says:', data);
  });

  return conn;
};

module.exports = { connect };
