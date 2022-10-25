var express = require('express');
var app = express();

app.listen(3000, function(){
	console.log("server start on port 3000");
})

app.use( '/_krxuser',express.static(__dirname+'/_krxuser'));
app.use( '/html',express.static(__dirname+'/html'));

// 메뉴구조도
app.get('/', function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// 메인
app.get('/main', function(req, res) {
    res.sendFile(__dirname + "/html/index.html");
});

// 통합검색
app.get('/search', function(req, res) {
    res.sendFile(__dirname + "/html/search.html");
});

// 자본시장강의실 > 동영상강의 > 어린이 교실
app.get('/child', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/video/child.html");
});

// 자본시장강의실 > 동영상강의 > 청소년 교실
app.get('/youth', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/video/youth.html");
});

// 자본시장강의실 > 동영상강의 > 초보투자자 교실
app.get('/beginner', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/video/beginner.html");
});
