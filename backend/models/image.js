module.exports = (sequelize, DataTypes) => {
    const Image = sequelize.define("Image", {
        // id는 자동생성
        src: {},
    }, {
        charset: "utf8",
        collate: "utf8_general_ci",
    });
    Image.associate = (db) => {};
    return Image;
}