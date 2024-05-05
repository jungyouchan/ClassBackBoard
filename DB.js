var express = require('express');
var mysql = require('mysql2');
var app = express();
app.use(express.json());
app.use(express.urlencoded());


var classMemberName = [
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

const connection = mysql.createConnection({
    host: "svc.sel5.cloudtype.app",
    port: "32001",
    user: "root",
    password: "3edcCDE#",
    database: "classBlackBoard",
    multipleStatements: true
});

connection.connect();

app.get('/', function (req, res) {
    res.sendFile(__dirname + "index.html");
});

app.post('/submit', function (req, res) {
    var today = new Date();
    var year = today.getFullYear();
    var month = ('0' + (today.getMonth() + 1)).slice(-2);
    var day = ('0' + today.getDate()).slice(-2);
    var dateString = year + '-' + month + '-' + day;

    let id = req.body;
    let sql = `INSERT INTO classBlackBoard.cleaningRecords (name, number, date) VALUES (${id.select}, ${classMemberName[classMemberName.findIndex(obj => obj.name == id.select)].number}, ${dateString});`;
    connection.query(sql, (err) => {
        if (err) console.log(err);
    });
    console.log(sql);
    res.redirect('/');
});

app.listen(3000, (err) => {
    if (err) return console.log(err);
    console.log("this server is listening on port 3000");
})