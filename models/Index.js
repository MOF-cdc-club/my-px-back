'use strict';

import fs from 'fs';
import path from 'path';
import Sequelize from 'sequelize';
const __dirname = path.resolve();
//const basename = path.basename(__filename);
const env = process.env.NODE_ENV || 'development';

import config1 from '../config/config.json';
const config = config1[env];

import User from './User.js'
import Product from './Product.js'
import Sale from './Sale.js'
import Post from './Post.js'
import Order from './Order.js'

const db = {};


const sequelize =  new Sequelize(config.database, config.username, config.password, config);
/*
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}


fs
  .readdirSync(__dirname)
  .filter(file => {
    return (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js');
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    db[model.name] = model;
  });
*/
//db 객체에 테이블들을 추가
db.User = User(sequelize,Sequelize);
db.Product = Product(sequelize,Sequelize);
db.Sale = Sale(sequelize,Sequelize);
db.Post = Post(sequelize,Sequelize);
db.Order = Order(sequelize,Sequelize);

console.log(db);

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
