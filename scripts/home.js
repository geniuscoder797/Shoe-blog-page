let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let containerDom = document.querySelector('.men');
let containsDom = document.querySelector('.image');


nextDom.onclick = function (){
    sliderShow('next');
}
prevDom.onclick = function (){
    sliderShow('prev');
}

function sliderShow(type){
    let slideImage = document.querySelectorAll('.slider');

    if (type === 'next'){
        containsDom.appendChild(slideImage[0]);
        containerDom.classList.add('next');
    }
    else{
        let backImage = slideImage.length-1;
        containsDom.prepend(slideImage[backImage]);
        containerDom.classList.add('prev');
    }
}
