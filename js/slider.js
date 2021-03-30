$(function(){
    let currentIdx=0;

    let winWidth=$(window).width();
    let itemLength=0;
    let itemWidth=0;
    let viewSlide=0;
    // let firstItem=$(".slide-item:first-child");
   
    // let cloneFirst=$(firstItem).clone();
    
    // console.log(firstItem);
// 클론하고 지우고 뒤에 붙이고
    
    itemLength=$(".slide-item").length;
    $(".slide-box").width($(".slide-item").outerWidth()*itemLength);
    itemWidth=$(".slide-box").outerWidth() / itemLength;
    $(".slide-item").outerWidth(itemWidth);

    // console.log(itemWidth);
    let firstItem=$(".slide-item:nth-child(1)");
    // console.log(firstItem);
    let cloneFirst=$(firstItem).clone();
    let lastItem=$(".slide-item").last();
    let cloneLast=$(lastItem).clone();
    
    // $(firstItem).remove();
    

    // slide start 
    function slideStart(eq){
        $(".slide-box").animate({left:-itemWidth * eq + 'px'},  200);
        currentIdx=eq;      
        
        // $(".slide-box").append(cloneFirst);
        // $(firstItem).remove();            
        // console.log(firstItem);    
    }

    // $(firstItem).remove();
    // $(".slide-box").append(cloneFirst);
    
    // prev, next button click
    $(".slide-btn button").click(function(){
        // next버튼 클릭했을 때
        if($(this).hasClass("next")){
            if(currentIdx === itemLength-1){
                slideStart(currentIdx+1);     
                currentIdx=-1;
                // $(firstItem).remove();
                // $(".slide-box").append(cloneFirst);                 
                // $(".slide-box").css("left","0");
                
                
            }else{
                slideStart(currentIdx +1);       
                         

            }
            // $(firstItem).remove();
            // $(".slide-box").append(cloneFirst);


            //prev 버튼 클릭했을 때 
        }else{
            if(currentIdx === 0){
                return false;   
                // $(".slide-box").append(cloneLast);
                


            }else{
                slideStart(currentIdx -1);
            }
        }        
    });


    slideStart(currentIdx);
    
   

});