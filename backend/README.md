# Nodebird - Backend

## Sequelize
+ Node ORM 패키지  
  
    init 명령어로 설정파일 생성
    ```shell
    npm install -g sequelize-cli
    sequelize init
    ```

    json 으로 생성된 설정파일을 js로 변경  
    dotenv로 비밀번호 대체
    ```js
    const dotenv = require('dotenv');

    dotenv.config();

    module.exports = {
        "development": {
            "username": "root",
            "password": process.env.DB_PASSWORD,
            "database": "react-nodebird",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "test": {
            "username": "root",
            "password": process.env.DB_PASSWORD,
            "database": "react-nodebird",
            "host": "127.0.0.1",
            "dialect": "mysql"
        },
        "production": {
            "username": "root",
            "password": process.env.DB_PASSWORD,
            "database": "react-nodebird",
            "host": "127.0.0.1",
            "dialect": "mysql"
        }
    }
    ```

    .env 파일
    ```shell
    COOKIE_SECRET=taejungnodebirdservice
    DB_PASSWORD=xowjd145wjd!
    ```
## Passport - Node.js 인증 미들웨어
+ 필요한 패키지 설치
    ```shell
    # 로그인 구현을 도와주는 미들웨어
    npm install passport 

    # 직접 로그인을 구현하는 전략
    # facebook, google 등 다양하게 존재
    npm install passport-local 

    # 로그인 정보를 세션에 저장하게 도와주는 미들웨어
    npm install express-session

    # 쿠키 정보를 파싱하도록 도와주는 미들웨어 
    npm install cookie-parser
    ```
+ express 미들웨어 설정
    ```js
    app.use(cookieParser(process.env.COOKIE_SECRET));
    app.use(session({
        saveUninitialized: false,
        resave: false,
        secret: process.env.COOKIE_SECRET,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    ```
+ 로그인 전략 프로세스  
  + 로그인 전략 예시
    1. 로그인 시도 발생 시 기존 유저 체크
    2. 비밀번호 비교
    3. 에러 발생시 에러메시지 반환
  + Serializer
    + 세션에 저장할 정보 (PK와 같은 Unique한 정보)
  + Deserializer  
    + 세션에 저장된 정보를 바탕으로 얻어낼 수 있는 기타 정보들
  