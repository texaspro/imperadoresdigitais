// change navbar styles on scroll

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window-scroll', window.scrollY > 700)
})

// show/hide Modules

const modulos = document.querySelectorAll('.modulo');
const bonus = document.querySelectorAll('.modulo__bonus .btn');

modulos.forEach(modulo => {
    modulo.addEventListener('click', () => {
        modulo.classList.toggle('open')

        //change icon
        const icon = modulo.querySelector('.modulo__icon i')
        if (icon.className == 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})

// show/hide faq answer

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open')

        //change icon
        const icon = faq.querySelector('.faq__icon i')
        if (icon.className == 'uil uil-plus') {
            icon.className = "uil uil-minus"
        } else {
            icon.className = "uil uil-plus"
        }
    })
})


//show hide nav menu
const menu = document.querySelector('.nav__menu')
const menuBtn = document.querySelector('#open-menu-btn')
const closeBtn = document.querySelector('#close-menu-btn')

menuBtn.addEventListener('click', () => {
    menu.style.display = 'flex'
    closeBtn.style.display = 'inline-block'
    menuBtn.style.display = 'none'
})

// close nav menu

closeBtn.addEventListener('click', () => {
    menu.style.display = 'none'
    closeBtn.style.display = 'none'
    menuBtn.style.display = 'inline-block'
})

