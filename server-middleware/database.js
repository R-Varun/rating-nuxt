const store = { Rooms: {}, Users: {} };
const validVotes = ["up", "down"];

var _ = require("lodash");

function addRoom(roomName, owner) {
  if (!(owner in store.Users)) {
    addUser(owner);
  }

  if (roomName in store.Rooms) {
    return false;
  }

  store.Rooms[roomName] = {
    name: roomName,
    owner: owner,
    users: [],
    votes: {},
    scores: {},
    rounds: 0,
    curImg:
      "https://upload.wikimedia.org/wikipedia/commons/b/bc/Unknown_person.jpg",
  };

  store.Users[owner].room = roomName;

  return true;
}

function updateRoomWithImage(roomName, imgUrl) {
  const room = store.Rooms[roomName];
  console.log("REPLACING IMAGE");
  console.log(imgUrl);

  room["curImg"] = imgUrl;

  return true;
}

function updateRoomWithResult(roomName, result) {
  const room = store.Rooms[roomName];
  const votes = room["votes"];
  console.log("votes " + votes);

  console.log("votesKeys " + Object.keys(votes));
  Object.keys(votes).forEach((user) => {
    const vote = votes[user];
    console.log(vote + ", " + user);
    console.log(_.isEquals(vote, result));

    if (_.isEquals(vote, result)) {
      room["scores"][user] += 1;
    }
  });

  // clear votes for round
  room["votes"] = {};
  return true;
}

function updateRoomWithVote(roomName, userName, vote) {
  const room = store.Rooms[roomName];

  console.log("CUR ROOM");
  console.log(JSON.stringify(room));
  room["votes"][userName] = vote;
  return true;
}

function addUser(user) {
  if (user in store.Users) {
    return false;
  }

  store.Users[user] = {
    active: true,
  };
}

function addUserToRoom(roomName, user) {
  if (!(user in store.Users)) {
    return false;
  }

  if (!(roomName in store.Rooms)) {
    return false;
  }

  if (_.isNull(getUser(user))) {
    return false;
  }

  if (_.isEqual(store.Users[user].room, roomName)) {
    // Already in this room
    return false;
  }

  store.Users[user].active = true;
  store.Users[user].room = roomName;
  store.Rooms[roomName].users.push(user);
  store.Rooms[roomName]["scores"][user] = 0;
  return true;
}

function getUser(userName) {
  if (!(userName in store.Users)) {
    return null;
  }

  return _.cloneDeep(store.Users.userName);
}

function getRoom(roomName) {
  if (!(roomName in store.Rooms)) {
    return null;
  }

  return _.cloneDeep(store.Rooms[roomName]);
}

function getRooms() {
  return _.cloneDeep(store.Rooms);
}

export {
  addRoom,
  addUserToRoom,
  getRooms,
  getRoom,
  getUser,
  addUser,
  updateRoomWithImage,
  updateRoomWithVote,
  updateRoomWithResult,
};
