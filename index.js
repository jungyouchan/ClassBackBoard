const express = require('express');
const mysql = require('mysql2');
const app = express();
const http = require('http');
server = http.createServer(app);
app.use(express.json());
app.use(express.static('static'));
app.use(express.urlencoded({ extended: false }));


const classMemberName = [
    { number: 10302, name: "김예진", date: "" },
    { number: 10303, name: "김지수", date: "" },
    { number: 10304, name: "박서현", date: "" },
    { number: 10305, name: "박유담", date: "" },
    { number: 10306, name: "변지후", date: "" },
    { number: 10307, name: "성지윤", date: "" },
    { number: 10308, name: "송시현", date: "" },
    { number: 10309, name: "이연우", date: "" },
    { number: 10310, name: "정예서", date: "" },
    { number: 10311, name: "정지우", date: "" },
    { number: 10312, name: "채다나", date: "" },
    { number: 10313, name: "최수연", date: "" },
    { number: 10314, name: "김성재", date: "" },
    { number: 10315, name: "김시형", date: "" },
    { number: 10316, name: "김이삭", date: "" },
    { number: 10317, name: "박민준", date: "" },
    { number: 10318, name: "박서준", date: "" },
    { number: 10319, name: "박제경", date: "" },
    { number: 10320, name: "설영석", date: "" },
    { number: 10321, name: "이경민", date: "" },
    { number: 10322, name: "이은성", date: "" },
    { number: 10323, name: "임강언", date: "" },
    { number: 10324, name: "장주헌", date: "" },
    { number: 10325, name: "정유찬", date: "" },
    { number: 10326, name: "주명준", date: "" },
    { number: 10327, name: "최인우", date: "" },
    { number: 10328, name: "황성민", date: "" }
];

function checkTime() {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;

    return dateString;
}

const connection = mysql.createConnection({
    host: "svc.sel5.cloudtype.app",
    port: "30199",
    user: "root",
    password: "3edcCDE#",
    database: "classblackboard",
    multipleStatements: true
});

connection.connect();


app.get('/', function (req, res) {
    connection.query("SELECT * from classblackboard.cleaningRecords", (error, row) => {
        if (error) throw error;
        var nowDate = new Date();
        var lastDate = row.at(-1).date;
        var yearBool = nowDate.getFullYear() == lastDate.getFullYear();
        var monthBool = nowDate.getMonth() == lastDate.getMonth();
        var dateBool = nowDate.getDate() == lastDate.getDate();
        console.log(row);
        var nowApplication = !row || !yearBool || !monthBool || !dateBool ? false : row.at(-1).name;
        res.send(`
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link href="/css/mainBlackBoard.css" rel="stylesheet" />
            <script src="/js/mainBlackBoard.js"></script>
            <title>1-3 BlackBoard</title>
        </head>
        <body>
            <header>
                <div id="logIn">
                    <a href="/html/log-in.html" id="logInText">로그인</a>
                </div>
            </header>
    
            <div id="jubun">
                <p id="jubunTitle">주번</p>
                <p id="firstNumber">로딩 중</p>
                <p id="firstName">로딩 중</p>
                <p id="secondNumber">로딩 중</p>
                <p id="secondName">로딩 중</p>
            </div>
            <div id="showName">
                <p>청소 신청한 사람</p>
                <p id="name">${nowApplication ? nowApplication : "없음"}</p>
            </div>
            <div id="cleanInstead">    
                <form id="cleaningApplicationForm" action="/submit" method="post">
                    <label id="cleaningApplicationLable" for="cleaningApplication">청소 신청</label>
                    <br>
                    <select id="cleaningApplication" name="select" ${nowApplication ? "disabled" : ""}></select>
                    <input type="submit" value="신청" id="submitCleaningApplication" name="submit"  ${nowApplication ? "disabled" : ""}>
                </form>
            </div>
        </body>
    </html>
    `)
    })
});


app.post('/submit', function (req, res) {
    var Time = checkTime();
    let id = req.body;
    console.log(id);
    let sql = `INSERT INTO classblackboard.cleaningRecords (name, number, date) VALUES ('${id.select}', ${classMemberName[classMemberName.findIndex(obj => obj.name == id.select)].number}, '${Time}');`;
    connection.query(sql, (err) => {
        if (err) throw err;
    });
    connection.query(` SELECT * FROM classblackboard.cleaningRecords ORDER BY date ASC;`, (err) => {
        if (err) throw err;
    })
    console.log(sql);
    res.redirect('/');
});



app.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("this server is listening on port 3000");
})