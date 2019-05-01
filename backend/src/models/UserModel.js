import {sequelize, Sequelize} from "../database"
import {hash} from "../utils";

/**
 * Represents a user in the DB
 * @type {Model}
 */
const User = sequelize.define('user', {
    firstName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastName: {
        type: Sequelize.STRING,
        allowNull: false
    },
    email: {
        type: Sequelize.STRING,
        unique :true,
        allowNull: false,
        validate:{
            isEmail : true
        }
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    role: {
        type: Sequelize.ENUM,
        values: ["user", "admin"],
        allowNull: false,
        defaultValue: "user" // TODO: Remove this from register requests!!! Holy shit...
    }
}, {
    defaultScope: {
        attributes: { exclude: ['password'] }
    }, scopes: {
        auth: {
            attributes: { include: ['password'] }
        }
    }
});

// Add hashed password
User.beforeCreate((user, options) => {
    return hash.generate(user.password)
        .then(hash => {
            user.password = hash;
            delete user.role; // For safety reasons
        })
        .catch(error => {
            throw error;
        });
});

export default User;
export {User};
