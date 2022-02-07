const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = require("express")();
const socket = require("socket.io");

const roomRouter = require("./routes/room.js");
const setupRouter = require("./routes/setup.js");
const gameRouter = require("./routes/game.js");

// Web socket workaround for nuxt
let server = null;
let io = null;
app.all("/init", (req, res) => {
  if (!server) {
    server = res.socket.server;
    console.log(server);
    io = socket(server);

    io.on("connection", function(socket) {
      console.log("Made socket connection");
      console.log(socket);

      socket.on("msg", (msg) => {
        console.log("Received: " + msg);

        setTimeout(() => {
          socket.emit("msg", `Response to: ${msg}`);
        }, 1000);
      });

      socket.on("test", (msg) => {
        console.log(msg);
      });

      socket.on("disconnect", () => console.log("disconnected"));
    });
  }

  res.json({ msg: "server is set" });
});

// Additional API routes
app.use(bodyParser.json());
app.use("/room", roomRouter);
app.use("/setup", setupRouter);
app.use("/game", gameRouter);

module.exports = app;
