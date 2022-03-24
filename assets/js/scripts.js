let burger = document.querySelector('.burger')
let menu = document.querySelector('.navbar-menu')
let closeButton = document.querySelector('.close')

burger.addEventListener('click', (e)=>{
    menu.classList.toggle('is-active')
    // console.log(menu.classList)

    if(menu.classList == 'navbar-menu is-active'){
        burger.classList.toggle('is-hidden')
        closeButton.classList.toggle('is-hidden')
    }   
})

closeButton.addEventListener('click', (e)=>{
    menu.classList.toggle('is-active')
    // console.log(closeButton.classList)

    if(menu.classList == 'navbar-menu'){
        burger.classList.toggle('is-hidden')
        closeButton.classList.toggle('is-hidden')
    }   
})