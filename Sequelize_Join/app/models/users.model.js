module.exports = (sequelize, Sequelize) => {
    const Users = sequelize.define("users", {
        name: {
            type: sequelize.STRING
        }
    });

    return Users;
}