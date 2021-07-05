$(function(){
    $('.mo_gnb > ul >li > a').click(function() {
                $('.mo_sub').stop().slideUp();
                $('.mo_gnb > ul > li').removeClass('on');
                $(this).parent().find('.mo_sub').stop().slideToggle(function() {
                    if ($(this).parent().find('.mo_sub').is(':hidden')) {
                        $(this).parent().removeClass('on');
                    
                       
                    } else {
                        $(this).parent().addClass('on');
                       
                        
                    }
                });
            });
            $('.open').click(function() {
                $('html,body').addClass('yon');
                
                 $('.mo_gnb').css({position:'fixed'});
                $('.mo_gnb').stop().animate({
                    left: '0',
                    opacity: 'show'
                }, 1000);
            });

            $('.close').click(function() {
                 $('.mo_gnb').css({position:'absolute'});
                $('html,body').removeClass('yon');
                $('.mo_sub').stop().slideUp();
                $('.mo_gnb > ul > li').removeClass('on');
                $('.mo_gnb').stop().animate({
                    left: '-100%'
                }, 1000);
            });
        });