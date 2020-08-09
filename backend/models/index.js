'use strict';

const Sequelize = require('sequelize');
const env = process.env.NODE_ENV || 'development';
const config = require("../config/config.json")[env];
const db = {};

const sequelize = new Sequelize(config.database, config.username, config.password, config);

db.Comment = requre('./comment.js')(sequelize, Sequelize);
db.Hashtag = requre('./hashtag.js')(sequelize, Sequelize);
db.Image = requre('./image.js')(sequelize, Sequelize);
db.Post = requre('./post.js')(sequelize, Sequelize);
db.User = requre('./user.js')(sequelize, Sequelize);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
