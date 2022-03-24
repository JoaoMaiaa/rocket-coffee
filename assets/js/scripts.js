let burger = document.querySelector('.burger')
let menu = document.querySelector('.navbar-menu')

burger.addEventListener('click', (e)=>{
    menu.classList.toggle('is-active')
})