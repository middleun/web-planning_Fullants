
// top-navigation click event
const topNav = document.querySelectorAll(".top-nav ul li");
// const topIcon = document.querySelector(".top-icon ul li");
const activeClass = "active";
const subNav = document.querySelector(".sub-nav");
// console.log(topNav);

function activeToggle(event){
    event.prventDefault;
    const topNavTarget = event.target;
    const topNavLi = topNavTarget.parentNode;
    topNavLi.classList.remove(activeClass);
    topNavTarget.classList.add(activeClass);
}
// function subNavSlide(){
//     subNav.style.height = "100px";
// }

for (let i = 0; i < topNav.length; i++){    
    topNav[i].addEventListener("click", activeToggle);
    // topNav[0].addEventListener("click", subNavSlide);
}



// let subNav = $(".sub-nav");
    // let clickNav = $(".top-nav ul li.click-nav");
    
    // $(subNav).hide();
    // // console.log(clickNav);

    // $(clickNav).click(function(e){
    //     e.stopPropagation();
    //     $(subNav).slideToggle();
    // });
    
    // $(document).click(function(){
    //     $(subNav).slideUp();
    // });


$(function(){

    // top-navigation click event
    // const topNav = document.querySelector(".top-nav ul li");
    // const topIcon = document.querySelector(".top-icon ul li");
    // const topNav = $(".top-nav ul");
    // const topIcon = $(".top-icon ul li");
    // console.log(topNav);

    
    // $(topNav).on("click",function(){
    //     $(this).toggleClass("click");
    //     $(topNav).removeClass("active");
    //     $(this).addClass("active");
    // });

    // $(topIcon).on("click",function(){
    //     $(this).toggleClass("click");
    //     $(topIcon).removeClass("active");
    //     $(this).addClass("active");
    // });


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
    // let subNav = $(".sub-nav");
    // let clickNav = $(".top-nav ul li.click-nav");
    
    // $(subNav).hide();
    // // console.log(clickNav);

    // $(clickNav).click(function(e){
    //     e.stopPropagation();
    //     $(subNav).slideToggle();
    // });
    
    // $(document).click(function(){
    //     $(subNav).slideUp();
    // });

    
    
});