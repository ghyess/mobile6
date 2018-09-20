$(document).ready(function(){
    // 헤더 전환 이벤트
    $(window).scroll(function(){
        var scl = $(window).scrollTop();
        if(scl>=150){
            $(".pagewrap").addClass("active");
        } else {
             $(".pagewrap").removeClass("active");
        }
    });


    //메뉴 활성화 버튼 이벤트
   $("#hd #menu_bt").click(function(){
      $("#gnb").addClass("on"); 
       $("#gnb_bg").addClass("on").fadeIn(500);
   });
    $("#gnb #close").click(function(){
       $("#gnb").removeClass("on"); 
        $("#gnb_bg").removeClass("on").fadeOut(500);
    });

    //서브메뉴 활성화 이벤트
    $("#gnb .menu>li>a").removeAttr("href");

    $("#gnb .menu>li").click(function(){
        $(this).addClass("act");
       $(this).find(".sub").stop().slideDown(600); 
        $(this).siblings().find(".sub").stop().slideUp(500);
        $(this).siblings().removeClass("act");
    });
});