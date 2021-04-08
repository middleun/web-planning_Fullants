$(function(){

   const slideBox = $(".slide-box");
   const slideItem = $(".slide-item");
   const btnNext = $(".slide-btn button.next");
   const btnPrev = $(".slide-btn button.prev");

   let slideLength=0; // 초기화 필수
   let slideWidth=0;
   let slideSpeed = 200;
   currentIdx=0;

    // slideBox, slideItem의 width 설정
    slideLength = slideItem.length; // slide갯수
    $(slideBox).width($(slideItem).outerWidth() * (slideLength+2)); // slide-box의 넓이
    slideWidth=$(slideBox).outerWidth() / (slideLength+2);// slide의 넓이 ( +2 : 앞뒤로 clone붙인 만큼 갯수+)
    $(slideItem).outerWidth(slideWidth);
    // console.log($(slideBox).width());

    var firstSlide=$(".slide-item.first");
    var firstClone = $(firstSlide).clone().addClass("clone");
   //  var secondSlide =$(slideBox).children().eq(1);
   //  var secondClone=$(secondSlide).clone().addClass("clone");
    $(slideBox).append(firstClone);
   //  $(firstSlide).remove();
    

   // console.log(firstSlide);
   // console.log(firstClone);

    function slideMove(){
      var currentIdx=0;
      
      setInterval(function(){
         $(slideBox).animate({left:-slideWidth*(currentIdx+1)+"px"}, slideSpeed);

         currentIdx++;

         if(currentIdx === (slideLength-3)){
            setTimeout(function(){
               $(slideBox).animate({left:-slideWidth*(currentIdx+1)+"px"},0);
               
               $(slideBox).animate({left:0},0)
            }, slideSpeed+1)
            currentIdx=0;
            $(btnNext).click(function(){
               slideMove(currentIdx+1);
            }); 

         }
      },4000);     

     
   } 
    
      
     
   

    
   slideMove();




});