import config from "./config";
import Sequelize from "sequelize"

const sequelize = new Sequelize(config.db);

const options = {};
if (process.env.DATABASE_FORCE === 'true') {
    options.force = true;
    console.log("Force DATABASE FORCE ACTIVE");
}

sequelize.sync(options)
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });

export {sequelize, Sequelize}
