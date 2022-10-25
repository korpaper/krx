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
            delay: 3000,	// 자동으로 화면 전환 2초
            disableOnInteraction: 'false'	// 손님이 넘길 때는 오토플레이 정지
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
