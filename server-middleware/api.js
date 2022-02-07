const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const app = require("express")();
const socket = require("socket.io");

const roomRouter = require("./routes/room.js");
const setupRouter = require("./routes/setup.js");
const gameRouter = require("./routes/game.js");

// Socket routine is very simple: clients can subscribe to a room, and when the
// room has an update, sends a message to the server. Server, in turn,
// dispatches a message to all clients in the room telling them to update.
let server = null;
let lazy_io = { io: null };

app.all("/init", (req, res) => {
  if (!server) {
    server = res.socket.server;
    console.log(server);
    io = socket(server);
    lazy_io.io = io;

    io.on("connection", function(socket) {
      console.log("Made socket connection");

      socket.on("subscribe", (req) => {
        console.log("SUBSCRIBE EVENT RECEIVED!");
        console.log(req);

        if (req) {
          const roomName = req.roomName;
          socket.join(roomName);
        }
      });

      socket.on("notifyUpdate", (req) => {
        console.log("DISPATCHING UPDATE");
        if (!req.roomName) {
          return;
        }
        io.to(req.roomName).emit("dispatchUpdate");
      });

      socket.on("update", (req) => {});

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

module.exports = { app: app, lazy_io: lazy_io };
