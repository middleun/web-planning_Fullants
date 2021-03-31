$(function(){
    let slideCon=$(".slide-con");
    let slideBox=$(".slide-box");
    let slide=$(".slide-box .slide-item");
    // let slideWidth=513.75;
    let newSlides;

    let currentIdx=0;
    let winWidth=$(window).width();
    
    let itemLength=0;
    let itemWidth=0;
    let viewSlide=3;
    // let firstItem=$(".slide-item:first-child");
   
    // let cloneFirst=$(firstItem).clone();
    
    // console.log(firstItem);
// 클론하고 지우고 뒤에 붙이고
    
    itemLength=$(slide).length;
    $(slideBox).width($(slide).outerWidth()*(itemLength + 2));
    itemWidth=$(slideBox).outerWidth() / (itemLength+2);
    $(slide).outerWidth(itemWidth);

   
    
    // 복사본 생성
    let firstItem=$(slideBox).find(".slide-item:nth-child(1)");
    let cloneFirst=firstItem.clone().addClass("clone");
    let lastItem=$(slideBox).find(".slide-item:nth-child(6)");
    let cloneLast=lastItem.clone().addClass("clone");
    // let cloneSlide=slide.clone().addClass("clone");
    // console.log(cloneFirst);
    // slideBox.append(firstItem.clone().addClass("clone"));
    // slideBox.prepend(lastItem.clone().addClass("clone"));
    cloneFirst.insertAfter(lastItem);
    cloneLast.insertBefore(firstItem);

    // 슬라이드 가로배열
    function slideLayout(sw){
        newSlides=$(".slide-con .slide-item");
        newSlides.each(function(idx){
            $(this).css({left:itemWidth*idx+"px" , width:sw + "px"})
        });

    }
    slideLayout(itemWidth);

    // 슬라이드 중앙 배치
    function setSlideCen(){
        slideMove = - itemWidth * (itemLength+2) +"px"
        slideBox.animate({left:slideMove}, 200);
    }
    setSlideCen();

    // slide start 
    function slideStart(n){
        $(slideBox).animate({left:-itemWidth * n + 'px'},  200);
        currentIdx=n;      
        // if(currentIdx > 0){
        //     $(firstItem).remove();
        //     $(".slide-box").append(cloneFirst);
        //         $(".slide-box").css("left","0");               

    };     

    $(".slide-btn button").click(function(){
        if($(this).hasClass("prev")){
            
            slideStart(currentIdx -1);
        }else{
            
            slideStart(currentIdx +1);
        }
    });
    

    // $(firstItem).remove();
    // $(".slide-box").append(cloneFirst);
    
    // prev, next button click
    // $(".slide-btn button").click(function(){
    //     // next버튼 클릭했을 때
    //     if($(this).hasClass("next")){
    //         if(currentIdx === -itemLength + viewSlide){
    //             return false;                         
                       
                                               
    //         }else{
    //             slideStart(currentIdx -1);                               

    //         }$(firstItem).remove();
    //         // $(".slide-box").css("left","0");
            
    //         $(".slide-box").append(cloneFirst);
    //         //prev 버튼 클릭했을 때 
    //     }else{
    //         if(currentIdx === 0){
    //             return false;   
    //             // $(".slide-box").append(cloneLast);      


    //         }else{
    //             slideStart(currentIdx +1);
    //         }
    //     }        
    // });

    

    // function loopSlide(){
    //     let firstItem=$(slide).first();
    //     let cloneFirst=$(firstItem).clone();
    //     let lastItem=$(".slide-item").last();
    //     let cloneLast=$(lastItem).clone(); 
    //     // currentIdx =0; 처음 item
    //     if(currentIdx == 0){
    //         $(".slide-box").prepend(CloneLast);
    //     }
    //     if(currentIdx == itemLength-1){
    //         $(firstItem).remove();
    //         $(".slide-box").append(CloneFirst);
    //     }

    // }


    slideStart(currentIdx);
    
   

});