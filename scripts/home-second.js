let nextDomBtn = document.getElementById('next-btn');
let prevDomBtn = document.getElementById('prev-btn');
let containerDomSecond = document.querySelector('.women');
let containsDomSecond = document.querySelector('.image-2');


nextDomBtn.onclick = function (){
    sliderSecond('next');
}
prevDomBtn.onclick = function (){
    sliderSecond('prev');
}

function sliderSecond(type){
    let slideSecond = document.querySelectorAll('.slider-2');

    if (type === 'next'){
        containsDomSecond.appendChild(slideSecond[0]);
        containerDomSecond.classList.add('next');
    }
    else{
        let backImageSecond = slideSecond.length-1;
        containsDomSecond.prepend(slideSecond[backImageSecond]);
        containerDomSecond.classList.add('prev');
    }
}
