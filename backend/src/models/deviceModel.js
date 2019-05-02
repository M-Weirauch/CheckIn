import {sequelize, Sequelize} from "../database"
import {hash} from "../utils";

/**
 * Represents a Device in the DB
 * @type {Model}
 */
const Device = sequelize.define('device', {
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
