// Selectores globales
const menuHam = document.querySelector('#icon-ham')
const closeMenu = document.querySelector('#icon-close')
const menuOculto = document.querySelector('.menu__mobile')
const enlaces = document.querySelectorAll('.nav__desktop--li')

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

enlaces.forEach(enlace => {
    enlace.addEventListener('click',(e) => {
        const seleccionada = e.target.children[1]
        const arrow = e.target.children[0]
        seleccionada.classList.toggle('sub__menu--activo')
        arrow.classList.toggle('arrow--up')
    })
})