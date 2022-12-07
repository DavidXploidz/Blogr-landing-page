// Selectores globales
const menuHam = document.querySelector('#icon-ham')
const closeMenu = document.querySelector('#icon-close')
const menuOculto = document.querySelector('.menu__mobile')

menuHam.addEventListener('click', () => {
    menuHam.classList.add('d-none')
    closeMenu.classList.remove('d-none')
    menuOculto.classList.add('menu__mobile--activo')
    document.body.style.overflow = 'hidden'
})

closeMenu.addEventListener('click', () => {
    closeMenu.classList.add('d-none')
    menuHam.classList.remove('d-none')
    menuOculto.classList.remove('menu__mobile--activo')
    document.body.style.overflow = 'scroll'
})