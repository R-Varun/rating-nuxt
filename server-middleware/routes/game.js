var router = require("express").Router();
var {
  updateRoomWithImage,
  updateRoomWithVote,
  getRoom,
} = require("../database.js");
var _ = require("lodash");

const validVotes = ["up", "down"];

router.get("/:roomName/update", function(req, res, next) {
  const voteConv = { L: "down", R: "up" };

  const roomName = req.params.roomName;
  const userName = req.session.userName;
  const actualDir = req.query.dir;

  if (req.query.img_url) {
    updateRoomWithImage(roomName, userName);
  }

  if (actualDir) {
    const actualVote = voteConv[actualDir];
    updateRoomWithResult(roomName, actualVote);
  }

  return res.json({ room: getRoom(roomName) });
});

router.get("/:roomName/poll", function(req, res, next) {
  const roomName = req.params.roomName;
  res.json(getRoom(roomName));
});

router.get("/:roomName/vote", function(req, res, next) {
  const roomName = req.params.roomName;
  const vote = req.query.dir;

  res.json(getRoom(roomName));
});

router.get("/:roomName/fetch", function(req, res, next) {
  const roomName = req.params.roomName;
  res.json(getRoom(roomName));
});

module.exports = router;
