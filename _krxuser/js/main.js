$('.tab-nav li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('best')) {
        $(this).addClass('active').siblings().removeClass('active');
        const boxCon=$('.tab-list.best > li');
        boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');
    }

    if (classList.includes('notice')) {
        $(this).addClass('active').siblings().removeClass('active');
        const boxCon=$('.tab-list.notice > li');
        boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');
    }
});

//스와이퍼
$(function(){
    //main visual slide
    var mainSlide = new Swiper('.swiper-container', {
        autoplay: {
            delay: 3000 // 자동으로 화면 전환
        },
        slidesPerView: 1,	// 화면에 보여주는 이미지 개수
        loop: true,	// 무한 루프 적용
        pagination: {	// 하단에 점 표시 적용
            el: '.swiper-pagination',
            type: 'fraction',
            clickable: 'true',
        },
        navigation: {	// 좌우 화살표 적용
            nextEl: '.next',
            prevEl: '.prev',
        },
        speed: 1000
    });

});

// 다시보지않기
var $layerPopup = document.querySelector('.main-modal');
var $btnLayerPopupClose = document.querySelector('.close-modal-btn');
var $btnLayerPopupTodayHide = document.querySelector('.nolook-btn');

if(!$.cookie('modalCookie')){
	layerPopupShow();
}

//닫기
$btnLayerPopupClose.addEventListener('click', function(){
    layerPopupHide(0);
});

//오늘 하루 보지 않기
$btnLayerPopupTodayHide.addEventListener('click', function(){
    layerPopupHide(1);
});

function layerPopupShow(){
    $layerPopup.style.display = 'block'
}
function layerPopupHide(state){
    $layerPopup.style.display = 'none'

    //오늘하루보지않기 버튼을 누른 경우
    if(state === 1){
        if($.cookie('modalCookie') == undefined){
            $.cookie('modalCookie', 'Y', { expires: 1, path: '/' });
        }        
    }
}


// 스와이퍼 모달팝업
$('.swiper-slide').click(function(){
    $('.slide-modal').css('display', 'block');
});

$('.close-slide-btn').click(function(){
    $('.slide-modal').css('display', 'none');
});
