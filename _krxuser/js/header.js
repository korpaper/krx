$(document).ready(function(){

    $(document).on('mouseover','header .header-bottom',function(){
        $('header nav .sub-bg, header nav .sub').stop().slideDown();
    });
    
    $(document).on('mouseout', 'header .header-bottom',function(){
        $('header nav .sub-bg, header nav .sub').stop().slideUp();
    });
    
    $(document).on('mouseover','nav>ul>li',function(){
        $(this).children('.sub').css({'background': '#00a8cd', 'color': '#fff'});
    });
    
    $(document).on('mouseout','nav>ul>li',function(){
        $(this).children('.sub').css({'background':'none', 'color':'#000'});
    });
    //헤더
    var hjh1 ="";
    var hjh2 ="";
    //스크롤 움직이면 뭔가 함
    $(window).scroll(function() {
        //0.01초 뒤에 scrollTop 값을 1번 변수에 넣겠다
        setTimeout(function(){
            hjh1 = $(window).scrollTop();
        }, 10);
        //0.02초 뒤에 scrollTop 값을 2번 변수에 넣겠다
        setTimeout(function(){
            hjh2 = $(window).scrollTop();
        }, 20);

        setTimeout(function(){
        //1이 더 크면 보여주겠다(스크롤 올리는 상태)
            if(hjh1 > hjh2){
                $(".pc-header").css('top', 0);
            }
        //2가 더 크면 숨기겠다(스크롤 내리는 상태)
            if(hjh1 < hjh2){
                $(".pc-header").css('top', '-140px');
            }
        }, 20);
    });
})