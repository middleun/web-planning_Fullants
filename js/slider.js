const slideCon = slideBox.querySelector(".slide-contents");
const slideItem = slideCon.querySelectorAll(".slide-item");
const btnPrev = document.querySelector(".prev");
const btnNext = document.querySelector(".next");
// console.dir(slideItem);

const slideLen = slideItem.length;
let slideWid = 0;  // 초기화  
let currentIdx =0;
let timer;

console.log(slideCon.offsetWidth);

// bind slideContents' width
for(let i=0; i<slideLen; i++){
    slideCon.style.width = (slideItem[0].offsetWidth) * (slideLen+2) +"px";
    slideWid = (slideCon.offsetWidth) / (slideLen+2);    
    // console.log(slideWid);
    slideItem[i].style.width = slideWid + "px";
}

// run slide function
function moveSlide(eq){
    slideCon.style.left = -(slideWid)*eq +"px";
    slideCon.classList.add("animate");
    // slideCon.style.transition = 300 + "ms"
    // animate({"left":-(slideWid)},2000);
    currentIdx = eq;
    // console.log(currentIdx);
}

// when click NEXT button
btnNext.addEventListener("click",function(){
    if(currentIdx < slideLen-3){
        moveSlide(currentIdx+1);
        // console.log(currentIdx);
    }else{
        moveSlide(0);
        slideCon.classList.remove("animate");
        appendClone();
    }
});

// when click PREV button
btnPrev.addEventListener("click", function(){
    if(currentIdx > 0){
        moveSlide(currentIdx-1);
    }else{
        moveSlide(slideLen-3);
        slideCon.classList.remove("animate");
        // slideCon.style.transition = 500 +"ms"
    }
});


// clone slideItem
// function appendClone(){
//     let cloneFirst = slideItem[0].cloneNode(true);
//     // console.log(clone);
//     cloneFirst.classList.add("clone");
//     slideCon.appendChild(cloneFirst);

//     let cloneLast = slideItem[slideLen-1].cloneNode(true);
//     cloneLast.classList.add("clone");
//     slideCon.prepend(cloneLast);
// }


// auto play function
function playAuto(){    
    timer = setInterval(function(){
        if(currentIdx < slideLen-3){
            moveSlide(currentIdx+1);
            // console.log(currentIdx);
        }else{
            moveSlide(0);
        }  
    }, 3000);
}
playAuto();