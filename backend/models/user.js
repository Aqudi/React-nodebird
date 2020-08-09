module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        // id는 자동생성
        email: {
            type: DataTypes.STRING(30),
            allowNull: false,
            unique: true,
        },
        nickanem: {
            type: DataTypes.STRING(30),
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING(100), // 비밀번호는 암호화하기 때문에 넉넉한 길이 할당
            allowNull: false,
        },
    }, {
        charset: "utf8mb4", // 이모티콘 허용
        collate: "utf8mb4_general_ci",
    });
    return User;
}

