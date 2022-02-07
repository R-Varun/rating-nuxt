const lazy_io = { io: null };

function setIO(io) {
  lazy_io = io;
}

function getIO() {
  return lazy_io.io;
}

module.exports = { setIO, getIO };
