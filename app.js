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

// 박물관(부산)
// 박물관 관람안내
app.get('/busan-guide', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/busan-guide.html");
});

// 박물관 상설증권교실 > 프로그램안내/신청
app.get('busan-per-apply', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/permanent-class/busan-per-apply.html");
});

// 박물관 상설증권교실 > 신청 달력
app.get('/busan-per-reservation', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/permanent-class/busan-per-reservation.html");
});

// 박물관 상설증권교실 > 신청서 작성
app.get('/busan-per-application', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/permanent-class/busan-per-application.html");
});

// 박물관 상설증권교실 > 신청내역 조회
app.get('/busan-per-inquiry', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/permanent-class/busan-per-inquiry.html");
});

// 박물관 테마증권교실 > 프로그램안내/신청
app.get('/busan-them-apply', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/thema-class/busan-them-apply.html");
});

// 박물관 테마증권교실 > 신청달력
app.get('/busan-them-reservation', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/thema-class/busan-them-reservation.html");
});

// 박물관 테마증권교실 > 신청서 작성
app.get('/busan-them-application', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/thema-class/busan-them-application.html");
});

// 박물관 테마증권교실 > 신청내역 조회
app.get('/busan-them-inquiry', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/busan/thema-class/busan-them-inquiry.html");
});

// 홍보관(서울)
// 홍보관 관람안내
app.get('/seoul-guide', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/seoul-guide.html");
});

// 홍보관 상설증권교실 > 프로그램안내/신청
app.get('/seoul-per-apply', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/permanent-class/seoul-per-apply.html");
});

// 홍보관 상설증권교실 > 신청달력
app.get('/seoul-per-reservation', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/permanent-class/seoul-per-reservation.html");
});

// 홍보관 상설증권교실 > 신청서 작성
app.get('/seoul-per-application', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/permanent-class/seoul-per-application.html");
});

// 홍보관 상설증권교실 > 신청내역 조회
app.get('/seoul-per-inquiry', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/permanent-class/seoul-per-inquiry.html");
});

// 홍보관 테마증권교실 > 프로그램안내/신청
app.get('/seoul-them-apply', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/thema-class/seoul-them-apply.html");
});

// 홍보관 테마증권교실 > 신청달력
app.get('/seoul-them-reservation', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/thema-class/seoul-them-reservation.html");
});


// 홍보관 테마증권교실 > 신청서 작성
app.get('/seoul-them-application', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/thema-class/seoul-them-application.html");
});

// 홍보관 테마증권교실 > 신청내역 조회
app.get('/seoul-them-inquiry', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/thema-class/seoul-them-inquiry.html");
});

// 찾아가는 자본시장 교육 > 프로그램안내/신청
app.get('/seoul-visit-apply', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/visit-edu/seoul-visit-apply.html");
});

// 찾아가는 자본시장 교육 > 신청서 작성
app.get('/seoul-visit-application', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/visit-edu/seoul-visit-application.html");
});

// 찾아가는 자본시장 교육 > 신청달력
app.get('/seoul-visit-reservation', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/visit-edu/seoul-visit-reservation.html");
});

// 찾아가는 자본시장 교육 > 신청내역 조회
app.get('/seoul-visit-inquiry', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/seoul/visit-edu/seoul-visit-inquiry.html");
});

//현장강의
// ETF/ETN 동영상강의
app.get('/lec-etf-etn', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/lecture/lec-etf-etn.html");
});

// ELW 동영상강의
app.get('/lec-elw', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/lecture/lec-elw.html");
});

// KOBA워런트 동영상강의
app.get('/lec-koba', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/lecture/lec-koba.html");
});

// 환리스크 관리 > 통화선물을 이용한 환리스크 관리
app.get('/lec-risk-cur', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/lecture/lec-risk/lec-risk-cur.html");
});

// 환리스크 관리 > 중소기업 환리스크 관리가이드(심화과정)
app.get('/lec-risk-corp', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/lecture/lec-risk/lec-risk-corp.html");
});

//커뮤니티
//공지사항 > 공지사항 리스트
app.get('/notice-list', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/community/notice/notice-list.html");
});

//공지사항 > 공지사항 글보기
app.get('/notice-open', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/community/notice/notice-open.html");
});

//Q&A > 글쓰기
app.get('/qna-write', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/community/qna/qna-write.html");
});

//Q&A > 내 Q&A 목록
app.get('/qna-list', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/community/qna/qna-list.html");
});

//Q&A > 답변 글 보기
app.get('/qna-answer', function(req, res) {
    res.sendFile(__dirname + "/html/finance-edu/community/qna/qna-answer.html");
});

//마이페이지
//강의예약확인
app.get('/mypage', function(req, res) {
    res.sendFile(__dirname + "/html/mypage.html");
});

//본인인증
app.get('/verify', function(req, res) {
    res.sendFile(__dirname + "/html/verify.html");
});

//에러페이지
app.get('/error', function(req, res) {
    res.sendFile(__dirname + "/html/error.html");
});