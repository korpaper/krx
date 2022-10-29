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

// ETF 강의실 > 애니메이션으로 보는 ETF
app.get('/ani-etf', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/ani-etf.html");
});

// ETF 강의실 > 애니메이션으로 보는 투자사례
app.get('/ani-invest', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/ani-invest.html");
});

// ETF 강의실 > ETF의 이해 > ETF 상품이해
app.get('/about-etf-video', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/about-etf/about-etf-video.html");
});

// ETF 강의실 > ETF의 이해 > ETF의 제도
app.get('/etf-system', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/about-etf/etf-system.html");
});

// ETF 강의실 > ETF의 이해 > 시장참가자 및 역할
app.get('/etf-market', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/about-etf/etf-market.html");
});

// ETF 강의실 > ETF의 이해 > 투자지표와 투자위험
app.get('/etf-risk', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/about-etf/etf-risk.html");
});

// ETF 강의실 > ETF의 이해 > 실전투자
app.get('/etf-actual', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/about-etf/etf-actual.html");
});

// ETF 강의실 > ETF 퀴즈
app.get('/etf-quiz', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/etf-quiz.html");
});

// ETF 강의실 > 책으로 배우는 ETF
app.get('/etf-book', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etf/etf-book.html");
});

// ETN 강의실 > 책으로 배우는 ETN
app.get('/etn-book', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/etn/etn-book.html");
});

// ETN 강의실 > 동영상으로 배우는 ETN
app.get('/etn-video', function(req, res) {
    res.sendFile(__dirname + "/html/finance-enpmdu/krx-academy/etn/etn-video.html");
});

// ELW 강의실 > 동영상으로 배우는 ETN
app.get('/elw-guide', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/elw-guide.html");
});

// ELW 강의실 > ELW의 이해 > 상품이해
app.get('/about-elw-video', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/about-elw/about-elw-video.html");
});

// ELW 강의실 > ELW의 이해 > 제도
app.get('/elw-system', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/about-elw/elw-system.html");
});

// ELW 강의실 > ELW의 이해 > 유동성공급자제도
app.get('/elw-liquidity', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/about-elw/elw-liquidity.html");
});

// ELW 강의실 > ELW의 이해 > 투자위험
app.get('/elw-risk', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/about-elw/elw-risk.html");
});

// ELW 강의실 > ELW의 이해 > 실전투자
app.get('/elw-actual', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/about-elw/elw-actual.html");
});

// ELW 강의실 > 애니메이션으로 보는 투자사례
app.get('/elw-ani', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/elw-ani.html");
});

// ELW 강의실 > ELW 퀴즈
app.get('/elw-quiz', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/elw/elw-quiz.html");
});

// KOBA워런트 강의실 > 강의안내
app.get('/koba-guide', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/koba-guide.html");
});

// KOBA워런트 강의실 > KOBA워런트의 이해 > 상품이해
app.get('/about-koba-video', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/about-koba/about-koba-video.html");
});

// KOBA워런트 강의실 > KOBA워런트의 이해 > 제도의 이해
app.get('/koba-system', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/about-koba/koba-system.html");
});

// KOBA워런트 강의실 > KOBA워런트의 이해 > 가격구조와 투자지표
app.get('/koba-price', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/about-koba/koba-price.html");
});

// KOBA워런트 강의실 > KOBA워런트의 이해 > 투자위험
app.get('/koba-risk', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/about-koba/koba-risk.html");
});

// KOBA워런트 강의실 > KOBA워런트의 이해 > 투자전략
app.get('/koba-stra', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/about-koba/koba-stra.html");
});

// KOBA워런트 강의실 > KOBA워런트 투자사례
app.get('/koba-invest', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/koba/koba-invest.html");
});

// ESG 강의실
app.get('/esg', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/krx-academy/esg.html");
});
