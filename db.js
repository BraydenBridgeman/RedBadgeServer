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