const express = require("express");
const router = express.Router();
const Team = require('../models/team');
// 查询全部
router.get('/teams', (req, res) => {
  Team.find().then(teams => {
      res.json(teams);
    }).catch(err => {
      console.log('api/teams---err', err);
      res.json(err);
    })
})

// 创建
router.post('/team/create', async (req, res) => {
  const { data } = req.body;
  for(let key of Object.keys(data)) {
    console.log('key', key)
    if(!data[key]) {
      res.json({
        code: '200001',
        message: `校验不通过,${key}不能为空`,
      })
      return;
    }
  }
  const createTeam = {
    logo: data.logo,
    venue: data.venue,
    cnName: data.cnName,
    coach: data.coach,
    city: data.city,
  }
  // const count = await Team.countDocuments() ?? 0;
  // createTeam.teamId = count + 1;
  Team.create(createTeam, (err, team) => {
    if (err) {
      res.json(err);
    } else {
      res.json({
        code: '000000',
        message: '创建成功'
      });
    }
  })
})

router.delete('/team/delete/:id', (req, res) => {
  Team.findOneAndRemove({
    _id: req.params.id
  }).then(team => {
    res.json({
      code: '000000',
      message: `${team.cnName}删除成功`
    })
  }).catch(err => {
    console.log('err------>', err);
    res.json(err);
  })
})

// 更新一条
router.post('/team/update', (req, res) => {
  const { id, data } = req.body
  Team.findOneAndUpdate(
    { _id: id },
    {
      $set: {
        logo: data.logo,
        venue: data.venue,
        cnName: data.cnName,
        coach: data.coach,
        city: data.city,
      }
    },
    {
      new: true
    }
  )
    .then(team => {
      console.log('res.json(team)', team)
      res.json(team)
    })
    .catch(err => res.json(err));
})

module.exports = router;