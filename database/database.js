const Sequelize = require("sequelize");

const connection = new Sequelize('guiapress','root','06061993',{
    host: 'localhost',
    dialect: 'mysql'
});

module.exports = connection;