module.exports = (sequelize, DataTypes) => {
    const Comment = sequelize.define("Comment", {
        // id는 자동생성
        content: {
            type: DataTypes.TEXT,
            allowNull: false,
        },

        // UserId: 1 관계 필드가 생성됨
        // PostId: 3 
    }, {
        charset: "utf8mb4",
        collate: "utf8mb4_general_ci",
    });
    Comment.associate = (db) => {
        db.Comment.belongsTo(db.User);
        db.Comment.belongsTo(db.Post);
    };
    return Comment;
}