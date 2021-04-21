$(function(){
   
$('.gnb li a').mouseenter(function(){
    $('.depth2_wrap').slideDown(300)
    $('.depth2').slideDown(300)
   
});

$('#header').mouseleave(function(){
    $('.depth2_wrap').slideUp(300)
    $('.depth2').slideUp(300)
  
})
    

$('.main_slide').slick({
    autoplay:true,
    dots:false,
    arrows:false,
    slidesToShow:1,
    slidesToScroll:1,
    infinite: false,
    fade:true
});
 
$('#main .modal_box ul li').mouseenter(function(){
    var num =$(this).index();
    
    $(this).addClass('on').siblings().removeClass('on')

});
    $('#main .modal_box ul li').mouseleave(function(){
        var num =$(this).index();
        
        $(this).removeClass('on')
    

//모달 팝업 

var arrVideo =['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/U7GoYtXvGvA','https://www.youtube.com/embed/Dhk2zl4FUEw']
$('.modal_list li').click(function(){
    var num2  = $(this).index()
        console.log(num2)
        $('.cover').show()
        $('.modal_con').eq(num2).show().find('iframe').attr('src',arrVideo[num2])
        $('.modal_wrap').show()
    
})
    
    
$('.btn_close').click(function(){
    $('.cover').hide();
    $('.modal_con').hide();
    $('.modal_wrap iframe').attr('src','about:blank');
});
    
})

$('.btn_menu').click(function(){
    $('.all_menu').show();
})

$('.menu_close').click(function(){
    $('.all_menu').hide();
})

$('.all_inner_slide').slick({
    autoplay:true,
    dots:true,
    arrows:false,
    
})


var sw = 1
$('.stop_icon').click(function(){
    if(sw==1){
        $('.stop_icon').addClass('on');
        $('.all_inner_slide').slick('slickPause');
        sw=0
    }else{
        $('.stop_icon').removeClass('on');
        $('.all_inner_slide').slick('slickPlay');
        sw=1
    }
    
});

// 푸터 패밀리 사이트





$('.btn').click(function(){
    $('.family').toggle();
    $('.btn').toggleClass('on');
});


$('.close_btn').click(function(){
    $('.family').hide()
    $('.btn').removeClass('on')
    
    
    

});


});