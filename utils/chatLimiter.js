const roomLimiters = {};

const MESSAGE_LIMIT = 5;
const TIME_WINDOW = 60*1000;

function canSendMessage(roomId ,limit = MESSAGE_LIMIT , timeWindow = TIME_WINDOW) {
  const now = Date.now();

  if (!roomLimiters[roomId]) {
    roomLimiters[roomId] = { count: 1, lastReset: now };
    return true;
  }

  const roomData = roomLimiters[roomId];

  if (now - roomData.lastReset > TIME_WINDOW) {
    roomData.count = 1;
    roomData.lastReset = now;
    return true;
  }

  if (roomData.count < MESSAGE_LIMIT) {
    roomData.count += 1;
    return true;
  }

  return false;
}

function deleteRoom(roomId) {
  if (roomLimiters[roomId]) {
    delete roomLimiters[roomId];
  }
}

export { canSendMessage, deleteRoom };