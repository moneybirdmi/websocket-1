const app = require("express")();
const http = require("http").Server(app);
const io = require("socket.io")(http);
const port = 6600;
io.on("connection", function (socket) {
  console.log("Muneeb you are connected");
  socket.emit("muneeb", "Peter");
  socket.emit("check", "i am ready for u");
  socket.on("clientdata", (data) => {
    console.log(data);
  });
});

http.listen(port, function () {
  console.log(`Please listen on :${port}`);
});
