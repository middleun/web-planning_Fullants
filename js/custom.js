$(function(){

    // top-navigation click event

    const topNav=$(".top-nav ul li")
    const topIcon=$(".top-icon ul li")

    $(topNav, topIcon).on("click",function(){
        $(this).toggleClass("click");
        $(topNav, topIcon).removeClass("active");
        $(this).addClass("active");

    });


    // header smaller when scroll event
    const header = $("#header");
    const sloTop=$("#sloganSec").offset().top;
    // console.log(sloTop);
    $(window).scroll(function(){
        let scrollTop = $(window).scrollTop();
        // console.log(scrollTop);
        if(sloTop <= scrollTop){
            $(header).css({"height":"80px"});
        }else{
            $(header).css({"height":"100px"});

        }
    });
    
    
});