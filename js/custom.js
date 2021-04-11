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
        let winWidth = $(window).outerWidth();
        // console.log(scrollTop);
        if( winWidth > 790 ){
            if(sloTop <= scrollTop){
                $(header).css({"height":"80px","box-shadow":"1px 1px rgba(0, 0, 0, 0.109)"});
            }else{
                $(header).css({"height":"100px", "box-sadow":"none"});
    
            }
        }else{
            $(header).css({"height":"80px","box-shadow":"1px 1px rgba(0, 0, 0, 0.109)"});
            
        }

        
    });

    // sub navigation show
    let subNav = $(".sub-nav");
    let clickNav = $(".top-nav ul li.click-nav");
    $(subNav).hide();
    // console.log(clickNav);

    $(clickNav).on("click",function(){
        // $(this).toggleClass("click")
        if ($(this).hasClass("click")){
            $(subNav).slideDown();

        }else{
            $(subNav).slideUp();

        }
        
    });
    
    
});