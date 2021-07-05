$(function() {
    $(".gnb > ul > li").mouseover(function(){
        $(".gnb > ul > li > ul").show();
    });
    $(".gnb > ul > li").mouseleave(function(){
        $(".gnb > ul > li > ul").hide();
    });
});