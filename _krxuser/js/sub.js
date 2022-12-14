// 초보 투자자 탭
$('.begin-tab-nav > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('begin')) {
        $(this).addClass('active2').siblings().removeClass('active2');
        const boxCon=$('.begin-tab-list > li');
        boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');
    }
});
// 알기쉬운 전체 탭
$('.etk-navi.etk-tab > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('etk-tab')) {
        $(this).addClass('active5').siblings().removeClass('active5');
        // const boxCon=$('.etk-tab-list.etk > li');
        // boxCon.eq(tabNum).show().addClass('on5').siblings().hide().removeClass('on5');
    }
});
// 옵션 가격결정 탭
$('.begin-tab-nav.op > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('op')) {
        $(this).addClass('active3').siblings().removeClass('active3');
        const boxCon=$('.begin-tab-list.op-deal > li');
        boxCon.eq(tabNum).show().addClass('on3').siblings().hide().removeClass('on3');
    }
});
// 다양한 옵션투자 탭
$('.begin-tab-nav.op-va > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('op-va')) {
        $(this).addClass('active4').siblings().removeClass('active4');
        const boxCon=$('.begin-tab-list.op-vari > li');
        boxCon.eq(tabNum).show().addClass('on4').siblings().hide().removeClass('on4');
    }
});

// 알기쉬운 파생상품 아코디언
$(".etk-inner-cont").hide();
    $(".etk-title").click(function() {
        $(this).next(".etk-inner-cont").stop().slideToggle(300);
        $(this).next(".etk-inner-cont").siblings(".etk-inner-cont").slideUp(300); // 1개씩 펼치기
    });

//qna 글자 수 제한
$("#qna-title").keyup(function(e) {
    var content = $(this).val();
    $("#qna-title").text("(" + content.length + " / 최대 45자)");
    if (content.length > 45) {
        alert("최대 45자까지 입력 가능합니다.");
        $(this).val(content.substring(0, 45));
        $('#qna-title').text("(45 / 최대 45자)");
    }
});
// 영상 모달팝업
$('.open-md').click(function(){
    $('.modal-wrap').css('display', 'block');
});

$('.close-btn').click(function(){
    $('.modal-wrap').css('display', 'none');
});

// 공지사항 인덱스 클릭
const nonClick = document.querySelectorAll(".notice-btn ul li a");

function handleClick(event) {
    nonClick.forEach((e) => {
    e.classList.remove("clicked-notice");
    });
    event.target.classList.add("clicked-notice");
}

nonClick.forEach((e) => {
    e.addEventListener("click", handleClick);
});
