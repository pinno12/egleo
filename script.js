
AOS.init();

$('.tool-tip').popup();

function bg_change(color) {
    $(".ui.button.full-width.items").removeClass("bg-e");
    document.getElementById(color).classList.add("bg-e");
    // document.getElementById(color).style.backgroundColor = "#FFB81C !important";
    document.getElementById("item-name").textContent=color;
    document.getElementById("item-name2").textContent=color;  
}
$('.ui.checkbox')
  .checkbox()
;