const mongoose = require('mongoose');
const connection = require('./connection')

const TeamSchema = mongoose.Schema({
  logo: String,
  venue: String,
  cnName: String,
  coach: String,
  city: String,
  teamId: String,
});

const TeamModel = connection.model('Team', TeamSchema)
// 映射的表会自动改成 teams，

module.exports = TeamModel;