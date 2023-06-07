const button = document.querySelector('.header__mobile__button');
const mobileMenu = document.querySelector('.mobile__menu');
const menuItems = document.querySelectorAll('.mobile__menu__link');
const spans = document.querySelectorAll('.header__mobile__span');

if(button && mobileMenu) {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        mobileMenu.classList.toggle('active');
        if(mobileMenu.classList.contains('active')) {
            document.body.style.overflowY = 'hidden';
            spans.forEach(e => {
                e.classList.toggle('active');
            })
        } else {
            document.body.style.overflowY = 'auto';
            spans.forEach(e => {
                e.classList.toggle('active');
            })
        }
    })
}

if(menuItems) {
    menuItems.forEach(element => {
        element.addEventListener('click', (e) => {
            e.preventDefault();
            mobileMenu.classList.toggle('active');
            document.body.style.overflowY = 'auto';
            spans.forEach(e => {
                e.classList.toggle('active');
            })
        })
    })
}