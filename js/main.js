// Number
$('.counter').counterUp({
    delay: 10,
    time: 3000
});

// Video
$('.popup-video').magnificPopup({
    type: 'inline',

    fixedContentPos: false,
    fixedBgPos: true,

    overflowY: 'auto',

    closeBtnInside: true,
    preloader: false,

    midClick: true,
    removalDelay: 300,
    mainClass: 'my-mfp-zoom-in'
  });

// testimonial
$('#testimonial-slider').owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1,
            nav: false
        },
        736: {
            items: 1,
            nav: false
        },
        1000: {
            items: 2,
            nav: false,
            loop: false
        }
    }
})

new WOW().init();
// Chỉnh màu nền sáng tối
document.getElementById("switchButton").onclick=function(){
 document.querySelector("body").classList.toggle("dark");
};
//Chỉnh navbar toggler dấu x
let navbarTogglerIcon = document.querySelector('.navbar-toggler-icon');
function changeIcon() {
  let iconBars = document.getElementById('icon-bars');
  let iconXmark = document.getElementById('icon-xmark');

  iconBars.classList.toggle('d-none');
  iconXmark.classList.toggle('d-none');
}
