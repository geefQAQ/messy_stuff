const express = require("express");
const router = express.Router();
const Player = require('../models/player');
// const Team = require('../models/team');

// Team.aggregate([
//   {
//     $lookup: {
//       from: "players",
//       localField: "teamId",
//       foreignField: "teamId"
//     }
//   }
// ], (err, docs) => {
//   if(err) {
//     console.log('err', err);
//     return
//   }
// })

router.get('/players/:id', (req, res) => {
  const { id } = req.params;
  Player.find({
    teamId: id,
    // testtest: 'asdf',
    // position: '前锋',
    // cnAlias: '库里',
    // new: 'asdf'
    // jerseyNum: "30",
    // playerId: '1234',
  }).then(players => {
    res.json(players)
  }).catch(err => {
    console.log(err)
  })
});

router.get('/player/:id', (req, res) => {
  const { id } = req.params;
  Player.findOne({
    _id: id
  },
  {
    _id: 0,
    pics: 1
  }
  ).then(player => {
    res.json(player);
  }).catch(err => {
    console.log(err)
  })
})


module.exports = router;