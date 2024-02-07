let nextDom = document.getElementById('next');
let prevDom = document.getElementById('prev');
let containerDom = document.querySelector('.big-image-container');
let containsDom = document.querySelector('.big-image');
let smallImageDom = document.querySelector('.small-image-container');


nextDom.onclick = function (){
    sliderShow('next');
}
prevDom.onclick = function (){
    sliderShow('prev');
}

function sliderShow(type){
    let moveBigImage = document.querySelectorAll('.slide');
    let moveSmallImage = document.querySelectorAll('.small-image');

    if (type === 'next'){
        containsDom.appendChild(moveBigImage[0]);
        smallImageDom.appendChild(moveSmallImage[0]);
        containerDom.classList.add('next');
    }
    else{
        let backImage = moveBigImage.length-1;
        containsDom.prepend(moveBigImage[backImage]);
        smallImageDom.prepend(moveSmallImage[backImage]);
        containerDom.classList.add('prev');
    }
}