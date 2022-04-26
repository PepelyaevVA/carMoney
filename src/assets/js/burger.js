
let btn= document.getElementById('burger-menu');
let contentMenu=document.querySelector('.header-content');
btn.addEventListener('click', function(){
  btn.classList.toggle('active');
  contentMenu.classList.toggle('header-content_active');
})
