// require('dotenv').config();
// const Sequelize = require('sequelize');

// const sequelize = new Sequelize(`${process.env.DATABASE_URL}`);

// module.exports = sequelize;

const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
    dialect: "postgres",
    dialectOptions: {
        ssl: {
            require: true,
            rejectUnauthorized: false,
            },
        },
});

module.exports = sequelize;

// local server for npm start
// const sequelize = new Sequelize(`postgres://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`);