const openSocket = require("socket.io-client");

const socket = openSocket("http://localhost:6600/");

socket.on("muneeb", (agr) => {
  console.log(agr);
});

socket.on("check", (test) => {
  console.log(test);
});

socket.emit("clientdata", "are u getting my msg server");
