$(function(){

    const topNav=$(".top-nav ul li")

    $(topNav).click(function(){
        $(this).toggleClass("click");
        if($(this).hasClass("click")){
            $(this).find("a").addClass("active");
        }else{
            $(this).find("a").removeClass("active");

        }

        
    });

});