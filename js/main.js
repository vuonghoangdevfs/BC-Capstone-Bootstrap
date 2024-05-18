$('.counter').counterUp({
    delay: 10,
    time: 3000
});

$('.main-slider').owlCarousel({
    loop: true,
    margin: 30,
    nav: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
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
