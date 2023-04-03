const bank = {};

function addUser(id) {
  bank[id] = 50;
}

function addTokens(id, amount) {
  bank[id] += amount;
}

function removeTokens(id, amount) {
  bank[id] -= amount;
}

function getTokens(id) {
  return bank[id];
}

function getBank() {
  return bank;
}

module.exports = {
  addUser,
  addTokens,
  removeTokens,
  getTokens,
  getBank,
};
