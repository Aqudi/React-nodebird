module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        // id는 자동생성
        email: {},
        nickanem: {},
        password: {},
    }, {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    });
    return User;
}

