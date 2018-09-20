$(document).ready(function(){
   var wd = parseInt($("#vs").width());
    var sw = true;
    var intv = setInterval(function() { fAni(); }, 3000);
    
    //메인 첫번째 슬라이드
    function fAni(){
        $("#vs .imgBox").not(":animated").animate({"margin-left" : -wd+"px"}, 800, function(){
           $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .imgBox").css("margin-left", "0px");
            $("#vs .btn_list .btn").removeClass("on");
            $("#vs .btn_list .btn").eq(0).appendTo($("#vs .btn_list"));
            $("#vs .btn_list .btn").eq(0).addClass("on");
        });
    }
    //버튼박스
    $("#vs .btn_list .btn").click(function(){
       clearInterval(intv);
        var idx = $(this).index();
        for(var i = 0; i<idx-2;i++){
            $("#vs .imgBox li").eq(0).appendTo($("#vs .imgBox"));
            $("#vs .btn_list .btn").eq(0).appendTo($("#vs .btn_list"));
        }
        fAni();
        intv = setInterval(function(){ fAni(); }, 3000);
    });
    
    //메인 두번째 슬라이드
    var Swd = parseInt($("#idea_vs .ideaBox li").width());
    var cnt = $("#idea_vs .ideaBox li").length;
    var Sintv = setInterval(function() { secAni(); }, 4000);
    
    function secAni() {
        $("#idea_vs .ideaBox").not(":animated").animate({"margin-left":-Swd+"px"}, 900, function(){
            $("#idea_vs .ideaBox li").eq(0).appendTo($("#idea_vs .ideaBox"));
            $("#idea_vs .ideaBox").css("margin-left", "0px");
        });
    }
    function secPAni() {
        $("#idea_vs .ideaBox li").eq(cnt-1).prependTo($("#idea_vs .ideaBox"));
        $("#idea_vs .ideaBox").css("margin-left", -Swd+"px");
        $("#idea_vs .ideaBox").not(":animated").animate({"margin-left":"0px"},900);
    };
    
    // 버튼 박스 - 이전
    $("#home_idea .bt_box #prev").click(function(){
       clearInterval(Sintv);
        secPAni();
        Sintv = setInterval(function() { secAni(); }, 4000);
    });
    // 버튼 박스 - 다음
    $("#home_idea .bt_box #next").click(function(){
       clearInterval(Sintv);
        secAni();
        Sintv = setInterval(function() { secAni(); }, 4000);
    });
});