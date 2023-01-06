// 헤더 슬라이드 다운,업
$(document).on('mouseenter','.big',function(){
    $(".submenu").stop().slideDown(200);
    $(".big").css({"border-bottom":"1px solid grey"});
    $("header").css({"background":"rgba(255,255,255,1)"});
}).on('mouseleave','.big',function(){
    $('.submenu').stop().slideUp(200);
    $(".big").css({"border-bottom":"none"});
    $("header").css({"background":"rgba(255,255,255,0.9)"});
});

// 메뉴호버
$(function(){
    $(".submenu:eq(0) li").mouseenter(function(){
        $(this).addClass("hoverR");
    });
    $(".submenu:eq(1) li").mouseenter(function(){
        $(this).addClass("hoverY");
    });
    $(".submenu:eq(2) li").mouseenter(function(){
        $(this).addClass("hoverG");
    });
    $(".submenu:eq(3) li").mouseenter(function(){
        $(this).addClass("hoverB");
    });
    $(".submenu:eq(4) li").mouseenter(function(){
        $(this).addClass("hoverP");
    });
});

// TOP버튼
$(function() {
    $("#arrow").click(function() {
        $('html, body').animate({
            scrollTop : 0
        }, 400);
        return false;
    });
});

// 슬라이드 셋 인터벌
$(function(){
    setInterval(time,7000);
    function time(){
        $(".slider1").toggleClass("opacity0");
        $(".slider2").toggleClass("opacity");
    }
});

// 스크롤이벤트
$(function(){
    $(window).scroll(function(){
        var ws=$(this).scrollTop();

        if(ws>500){
            $(".sec1div3:first").css("transform","translateX(0px)").css("opacity","1");
        }
        if(ws>1000){
            $(".sec2div2:first").css("transform","translateX(0px)").css("opacity","1");
        }
        if(ws>1500){
            $(".sec3div2").css("transform","translateX(0px)").css("opacity","1");
        }
        if(ws>2500){
            $(".sec4div2").css("transform","translateX(0px)").css("opacity","1");
        }
        if(ws>4200){
            $(".sec6div2").css("transform","translateX(0px)").css("opacity","1");
        }
        if(ws>4800){
            $(".swiper").css("transform","translateX(0px)").css("opacity","1");
        }
    });
});

// 상품페이지 호버, 이동
$(function(){
    $("#shop1").css({opacity:"0",zIndex:"5"});
    $("#btnGL").click(function(){
        $("#shop1").css({opacity:"1",zIndex:"5"});
        $("#shop2").css({opacity:"0",zIndex:"1"});
    });
    $("#btnGR").click(function(){
        $("#shop1").css({opacity:"0",zIndex:"1"});
        $("#shop2").css({opacity:"1",zIndex:"5"});
    });
    $("#shop3").css({opacity:"0",zIndex:"5"});
    $("#btnWL").click(function(){
        $("#shop3").css({opacity:"1",zIndex:"5"});
        $("#shop4").css({opacity:"0",zIndex:"1"});
    });
    $("#btnWR").click(function(){
        $("#shop3").css({opacity:"0",zIndex:"1"});
        $("#shop4").css({opacity:"1",zIndex:"5"});
    });

    $(".sec1div3 figcaption").hover(function(){
        $(this).css("opacity","1");
    },function(){
        $(this).css("opacity","0");
    });
    $(".sec2div2 figcaption").hover(function(){
        $(this).css("opacity","1");
    },function(){
        $(this).css("opacity","0");
    });
});

function inputNumberOnly(el){
    el.value=el.value. repalce(/[^0-9]/g, '');
}

// 뉴스호버
$(function(){
    $(".sec6div2>div",this).mouseenter(function(){
        $(".newswrap",this).addClass("flip-horizontal-top");
    });
    $(".sec6div2>div",this).mouseleave(function(){
        $(".newswrap",this).removeClass("flip-horizontal-top");
    });
});