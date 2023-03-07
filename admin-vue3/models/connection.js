const mongoose = require('mongoose');

const connection = mongoose.createConnection(
  // localhost不行
  'mongodb://127.0.0.1:27017/NBA_DB',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
)
// connection.on('open', () => {
// 	console.log('打开 mongodb 连接');
// })
connection.on('connected', () => {
	console.log('数据库连接成功');
})
connection.on('err', (err) => {
	console.log('err:' + err);
})
module.exports = connection; //commonJs 语法，导出connection模块。