import Lottie from 'lottie-web';
import anime from 'animejs';
import LocomotiveScroll from 'locomotive-scroll';
import { threeRunner } from './hero';

threeRunner();  
const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const soundBox = document.querySelector('.sound');
let animationIcon = Lottie.loadAnimation({
    container: soundBox,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    path: './assets/soundicon.json',
});

soundBox.addEventListener('mouseenter', () => {
    animationIcon.play();
});

soundBox.addEventListener('mouseleave', () => {
    animationIcon.pause();
});

const introbox = document.querySelectorAll('.intro-text h1');

let tl = anime.timeline({
    easing: 'easeInOutQuart',
    loop: false
})
tl.add({
    targets: introbox,
    translateY: [150, 0],
    skewY: [-10,0],
    opacity: [0, 1],
    delay: anime.stagger(100),
    duration: 1200,
})
.add({
    targets: '#logo',
    translateY: [-15, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutQuad'
},'-=1000')
.add({
    targets: '#nav img',
    translateY: [-15, 0],
    opacity: [0, 1],
    duration: 800,
    easing: 'easeInOutQuad'
}, '-=800')

const introcontent = document.querySelector('.intro-text');
let scrollY = 0;


window.addEventListener('wheel', function(e){
    scrollY += e.deltaY;
    if( scrollY < 1000){
        
    }
    else if(scrollY > 1000) {

    }

    console.log(scrollY);
})
