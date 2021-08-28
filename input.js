const { messages, movements } = require('./constants');

let connection;

const setupInput = (conn) => {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', handleUserInput);
  return stdin;
};

const handleUserInput = function (input) {
  if (input === '\u0003') {
    stdout.write("Exited snek game. Bye bye.\n");
    process.exit();
  }

  if (movements[input]) connection.write(movements[input]);
  if (messages[input]) connection.write(messages[input]);
};

module.exports = { setupInput };