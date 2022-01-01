window.onscroll = () =>{
    if(window.scrollY > 100){
        document.querySelector('header').classList.add('active');
       
    }
    else{
        document.querySelector('header').classList.remove('active');
    }
}


let navbar = document.querySelector('.navbar');

document.querySelector('#menu-bar').onclick =() =>{
    navbar.classList.toggle('active');
}
document.querySelector('#close').onclick = () =>{
    navbar.classList.remove('active');
}

let themToggler = document.querySelector('#theme-toggler');

themToggler.onclick = () =>{
themToggler.classList.toggle('fa-sun');
    if(themToggler.classList.contains('fa-sun')){
        document.querySelector('body').classList.add('active');
    }
    else{
        document.querySelector('body').classList.remove('active');
    }
}

let countDate = new Date("Jan 5, 2022 15:37:25").getTime ();

function countDown (){
    let now = new Date().getTime();
     gap = countDate-now;

    let seconds = 1000;
    let minutes = seconds * 60;
    let hours = minutes * 60;
    let day = hours * 24;

    let d = Math.floor(gap /(day));
    let h = Math.floor((gap % (day) / (hours)));
    let m = Math.floor((gap % (hours)) / (minutes));
    let s = Math.floor((gap % (minutes)) / (seconds));

    document.getElementById('day').innerText = d;
    document.getElementById('hours').innerText = h;
    document.getElementById('minutes').innerText = m;
    document.getElementById('seconds').innerText = s;
  
}

setInterval (function (){
    countDown()
},1000);















var imageclick = document.querySelectorAll('.small-image-1');
imageclick.forEach( images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-1').src = images.getAttribute ('src');
    }
} )
var imageclick = document.querySelectorAll('.small-image-2');
imageclick.forEach( images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-2').src = images.getAttribute ('src');
    }
} )
var imageclick = document.querySelectorAll('.small-image-3');
imageclick.forEach( images =>{
    images.onclick = () =>{
        document.querySelector('.big-image-3').src = images.getAttribute ('src');
    }
} )

















var swiper = new Swiper(".product-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        550: {
            slidesPerView:2,
        },
        800: {
            slidesPerView:3,
        },
        1000: {
            slidesPerView:3,
        },
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  
var swiper = new Swiper(".review-slider", {
    slidesPerView: 3,
    loop:true,
    spaceBetween: 10,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    breakpoints: {
        0: {
            slidesPerView:1,
        },
        550: {
            slidesPerView:2,
        },
        800: {
            slidesPerView:3,
        },
        1000: {
            slidesPerView:3,
        },
    },
    keyboard: {
      enabled: true,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });