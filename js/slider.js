$(function(){
    let current=0;
    let timer;
    const imgs=$(".review-img img");
    // let indicators;
    console.log(imgs);

    // 슬라이드 실행 함수
    function slider(eq){
        $(".review-img").animate({left:-100*eq+"%"}, 200);
        current=eq;
        
    }
    // console.log(slider(0));

    
    
    // 자동실행 함수
    function autoPlay(){
        timer=setInterval(function(){
            let slideIdx=(current+1)%imgs.length;
            slider(slideIdx);
        },3000);
    }
    


    // slide move when click arrow
    $(".review-arrow button").click(function(){
        if($(this).hasClass("prev")){
            if(current==0){
                return false;
            }else{
                slider(current-1);
            }
        }else{
            if(current>=imgs.length-1){
                return false;
            }else{
                slider(current+1);
            }
        }
    });

    autoPlay();
   

});