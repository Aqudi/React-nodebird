module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        // id는 자동생성
        content: {},
    }, {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    });
    Comment.associate = (db) => {};
    return Comment;
}