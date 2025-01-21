let openBtn = document.querySelector('#open-menu-btn')
let closeBtn = document.querySelector('#close-menu-btn')
let navMenu = document.querySelector('.nav__menu')


openBtn.addEventListener('click', ()=>{

    navMenu.style.display = 'flex'
    openBtn.style.display = 'none'
    closeBtn.style.display = 'inline-block'
   
})
closeBtn.addEventListener('click', ()=>{

    navMenu.style.display = 'none'
    openBtn.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
   
})