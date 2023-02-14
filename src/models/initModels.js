const Users = require('./users.models');
const Conversations = require('./conversations.models');
const Messages = require('./messages.models');
const Participants = require('./participants.models');

const initModels = () => {
  
  Users.hasMany(Participants)
  Participants.belongsTo(Users);

  Participants.belongsTo(Conversations);
  Conversations.hasMany(Participants);

  Participants.belongsTo(Users);
  Users.hasMany(Participants);

  Conversations.belongsTo(Users);
  Users.hasMany(Conversations);
};

module.exports = initModels;
