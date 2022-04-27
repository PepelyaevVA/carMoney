
let btn= document.getElementById('burger-menu');
let contentMenu=document.querySelector('.header__menu');
let bg=document.querySelector(".header-bg-pink")
btn.addEventListener('click', function(){
  btn.classList.toggle('active');
  contentMenu.classList.toggle('header-menu_active');
  bg.classList.toggle('header-bg-pink_active');
})
