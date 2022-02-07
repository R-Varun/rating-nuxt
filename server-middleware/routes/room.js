var router = require("express").Router();
var {
  addRoom,
  getRooms,
  getRoom,
  addUserToRoom,
  addUser,
  getUser,
} = require("../database.js");
var _ = require("lodash");

router.param("roomName", function(req, res, next, roomName) {
  const room = getRoom(roomName);
  return next();
});

router.get("/me", function(req, res, next) {
  res.json({ userName: req.session.userName });
});

router.get("/:roomName/get", function(req, res, next) {
  const roomName = req.params.roomName;
  res.json(getRoom(roomName));
});

router.get("/:roomName/join", function(req, res, next) {
  const roomName = req.params.roomName;
  const userName = req.query.userName;

  if (!getUser(userName)) {
    // User doesn't already exist- must create them.
    addUser(userName);
    req.session.userName = userName;
  }

  if (!roomExists(roomName)) {
    res.json({ error: "Cannot join room that does not/ no longer exists." });
    return;
  }

  const success = addUserToRoom(roomName, userName);

  if (!success) {
    res.json({ error: "Cannot join room for unknown reason." });
  }
  res.json(getRoom(roomName));
});

router.get("/get", function(req, res, next) {
  res.json(getRooms());
});

router.get("/create", function(req, res) {
  const roomName = req.query.roomName;
  const ownerName = req.query.userName;

  if (_.isNull(roomName)) {
    res.json({ error: "Cannot create null room" });
    return;
  }

  if (_.isNull(ownerName)) {
    res.json({ error: "Cannot create room with null owner" });
    return;
  }

  if (roomExists(roomName)) {
    res.json({ error: "Cannot create pre-existing room" });
    return;
  }

  const success = addRoom(roomName, ownerName);

  if (!success) {
    res.json({
      error:
        "Error creating room. Try a different Room name, or try again later.",
    });
    return;
  }

  req.session.userName = ownerName;

  res.json(getRoom(roomName));
});

function roomExists(roomName) {
  try {
    const room = getRoom(roomName);
    return !_.isNull(room);
  } catch (error) {
    return false;
  }
}

module.exports = router;
