var router = require("express").Router();
var {
  updateRoomWithResult,
  updateRoomWithImage,
  updateRoomWithVote,
  getRoom,
} = require("../database.js");
var _ = require("lodash");
const { lazy_io } = require("../lazy-io.js");

const validVotes = ["up", "down"];

router.get("/:roomName/update", function(req, res, next) {
  const voteConv = { L: "down", R: "up" };

  const roomName = req.params.roomName;
  const imgUrl = req.query.img_url;
  const actualDir = req.query.dir;

  if (imgUrl) {
    updateRoomWithImage(roomName, imgUrl);
  }

  if (actualDir) {
    const actualVote = voteConv[actualDir];
    updateRoomWithResult(roomName, actualVote);
  }

  tryDispatchUpdate(roomName);
  return res.json({ room: getRoom(roomName) });
});

router.get("/:roomName/poll", function(req, res, next) {
  const roomName = req.params.roomName;
  res.json(getRoom(roomName));
});

router.get("/:roomName/vote", function(req, res, next) {
  const roomName = req.params.roomName;
  const userName = req.session.userName;
  const vote = req.query.dir;

  updateRoomWithVote(roomName, userName, vote);

  res.json(getRoom(roomName));
});

router.get("/:roomName/fetch", function(req, res, next) {
  const roomName = req.params.roomName;
  res.json(getRoom(roomName));
});

function tryDispatchUpdate(roomName) {
  if (!lazy_io.io) {
    return;
  }

  lazy_io.io.to(roomName).emit("dispatchUpdate");
}

module.exports = router;
