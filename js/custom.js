$(function(){

    // top-navigation click event

    const topNav=$(".top-nav ul li")
    const topIcon=$(".top-icon ul li")

    $(topNav, topIcon).on("click",function(){
        $(this).toggleClass("click");
        $(topNav, topIcon).removeClass("active");
        $(this).addClass("active");

    });
       
        
    
    // const topIcon=$(".top-icon ul li")
    // $(topIcon).click(function(){
    //     $(this).toggleClass("click");
    //     $(topIcon).removeClass("active");
    //     $(this).addClass("active");
        
    // });


});