$(function(){
    let currentIdx=0;

    let winWidth=$(window).width();
    let itemLength=0;
    let itemWidth=0;
    let viewSlide=0;
    let firstItem=$(".slide-item:first-child");
    let lastItem=$(".slide-item:last-child");
    let cloneFirst=$(firstItem).clone();
    let cloneLast=$(lastItem).clone();
    // console.log(firstItem);

    
    itemLength=$(".slide-item").length;
    $(".slide-box").width($(".slide-item").outerWidth()*itemLength);
    itemWidth=$(".slide-box").outerWidth() / itemLength;
    $(".slide-item").outerWidth(itemWidth);

    // console.log(itemWidth);

    // slide start 
    function slideStart(eq){
        $(".slide-box").animate({left:itemWidth * eq + 'px'},  200);
        currentIdx=eq;
    };
    // console.log(currentIdx);

    // prev, next button click
    $(".slide-btn button").click(function(){
        if($(this).hasClass("next")){
            if(currentIdx === itemLength-1){
                // return false;
                $(".slide-box").append(cloneFirst);
            }else{
                slideStart(currentIdx -1);
            }

        }else{
            if(currentIdx === 0){
                // return false;                

            }else{
                slideStart(currentIdx +1);
            }
        }        
    });










    slideStart(currentIdx);
    
   

});