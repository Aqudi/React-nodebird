const expressd = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hello express");
});

app.listen(3065, () => {
    console.log("서버 실행 중");
})