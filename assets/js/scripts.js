let burger = document.querySelector('.navbar-burger')
let menu = document.querySelector('.navbar-menu')
let navStart = document.querySelector('.navbar-start')


burger.addEventListener('click', (e)=>{
    menu.classList.toggle('is-active')
    // navStart.classList.toggle('padding-left')
})