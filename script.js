AOS.init();


$('.tool-tip').popup();

function bg_change(color) {
    $(".ui.button.full-width.items").removeClass("bg-e");
    document.getElementById(color).classList.add("bg-e");
    // document.getElementById(color).style.backgroundColor = "#FFB81C !important";
    document.getElementById("item-name").textContent=color;
    document.getElementById("item-name2").textContent=color;  
}

var mySwiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  })