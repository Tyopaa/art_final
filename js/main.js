let header_burger = document.querySelector('.header_burger');
let header_menu = document.querySelector('.header_menu');
let header_list = document.querySelector('.header_list');

header_burger.onclick = function(){
    header_burger.classList.toggle('active');
    header_menu.classList.toggle('active');
}
header_list.onclick = function () {
    header_list.classList.remove('active');
}