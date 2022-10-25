$('.begin-tab-nav > li').on('click keyup',function(e){

    let tabNum=$(this).index();

    console.log($(this).parent().attr('class').split(/\s+/))
    const classList = $(this).parent().attr('class').split(/\s+/);

    if (classList.includes('begin')) {
        $(this).addClass('active2').siblings().removeClass('active2');
        const boxCon=$('.begin-tab-list > li');
        boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');
    }

    // if (classList.includes('notice')) {
    //     $(this).addClass('active2').siblings().removeClass('active2');
    //     const boxCon=$('.tab-list.notice > li');
    //     boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');
    // }
});

// $('.begin-tab-nav li').on('click keyup',function(e){
//     $(this).addClass('on').siblings().removeClass('on');

//     let tabNum=$(this).index();
//     const boxCon=$('.begin-list>li');

//     boxCon.eq(tabNum).show().addClass('on').siblings().hide().removeClass('on');

//     if($('.begin-tab-nav').length > 0){
//         $('.begin-tab-nav>li:first-child').addClass('active2').siblings().removeClass('active2');
//     }
// });