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

// KRX 아카데미
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

// 자본시장강의실 > 책으로보는 > 자본시장 이해하기 시리즈
app.get('/book1', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/book/book1.html");
});

// 자본시장강의실 > 책으로보는 > 알고싶어요 시리즈
app.get('/book2', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/book/book2.html");
});

// 자본시장강의실 > 신나는 경제게임
app.get('/game', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/game.html");
});

// 자본시장강의실 > 재미있는 증권 애니메이션 > 황비와 웅비의 증권 테마파크
app.get('/ani1', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/ani/thema-park.html");
});

// 자본시장강의실 > 재미있는 증권 애니메이션 > 흰수염 할아버지의 장난감 가게
app.get('/ani2', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/ani/toy-store.html");
});

// 자본시장강의실 > 재미있는 증권 애니메이션 > 신나는 증권 선물교실
app.get('/ani3', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/capital/ani/fun-class.html");
});

// 파생상품강의실 > 강의안내
app.get('/det-guide', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/derivative/det-guide.html");
});

// 파생상품강의실 > 파생상품의 이해
app.get('/about-det', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/derivative/about-det.html");
});

// 파생상품강의실 > 파생상품거래제도의 이해
app.get('/about-deal', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/derivative/about-deal.html");
});

// 파생상품강의실 > 파생상품거래의 위험성
app.get('/det-risk', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/derivative/det-risk.html");
});

// 파생상품강의실 > 알기쉬운 파생상품
app.get('/easytoknow', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/derivative/easytoknow.html");
});

// 환리스크관리 강의실 > 환리스크 관리의 기본개념
app.get('/basic', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/basic.html");
});

// 환리스크관리 강의실 > 환리스크 관리의 기본개념
app.get('/work-level', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/work-level.html");
});

// 환리스크관리 강의실 > 환리스크 관리 우수기업사례
app.get('/good-corp', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/good-corp.html");
});

// 환리스크관리 강의실 > 통화선물 상품안내
app.get('/currency', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/currency.html");
});

// 환리스크관리 강의실 > 카툰마당 > 선물옵션이야기
app.get('/ct-op', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/cartoons/ct-op.html");
});

// 환리스크관리 강의실 > 카툰마당 > 통화선물이야기
app.get('/ct-cur', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/cartoons/ct-cur.html");
});

// 환리스크관리 강의실 > 카툰마당 > 채권선물이야기
app.get('/ct-bond', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/cartoons/ct-bond.html");
});

// 환리스크관리 강의실 > 카툰마당 > 금선물이야기
app.get('/ct-gold', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/cartoons/ct-gold.html");
});

// 환리스크관리 강의실 > 카툰마당 > 통화옵션이야기
app.get('/ct-curop', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/risk/cartoons/ct-curop.html");
});

// ETF 강의실 > ETF, ETN 정확하게 이해하기
app.get('/etf-etn', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/etf-etn.html");
});




