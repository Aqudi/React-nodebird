module.exports = (sequelize, DataTypes) => {
    const Hashtag = sequelize.define("Hashtag", {
        // id는 자동생성
        name: {},
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
    });
    Hashtag.associate = (db) => {};
    return Hashtag;
}