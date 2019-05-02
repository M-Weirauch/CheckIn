import {sequelize, Sequelize} from "../database"

/**
 * Represents a Device in the DB
 * @type {Model}
 */
const Device = sequelize.define('device', {
    deviceid: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mac: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
});

export default Device;
export {Device};
