const mongoose = require('mongoose');
const connection = require('./connection')

const PlayerSchema = mongoose.Schema({
  cnName: String,
  cnAlias: String,
  enName: String,
  height: String,
  weight: String,
  years: String,
  logo: String,
  position: String,
  jerseyNum: String,
  teamId: String,
  playerId: String,
  pics: Array,
});

const PlayerModel = connection.model('Player', PlayerSchema)

module.exports = PlayerModel
