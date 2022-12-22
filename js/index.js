$(document).ready(function(){
    $(window).scroll(function(){
        $('.sec1div3, .sec2div2').each(function(){
            var bottom_of_element=$(this).offset().top+$(this).outerHeight()/3;
            var bottom_of_window=$(window).scrollTop()+$(window).height();

            if(bottom_of_window>bottom_of_element){
                $(this).animate({'opacity':'1'},700);
            }
        });
    });
});

