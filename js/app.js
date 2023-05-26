AOS.init();

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--shiftY', `${this.scrollY}px`)
})

// document.querySelectorAll('.home-link').forEach(button => {
//     button.addEventListener('click', (e)=> {
//         e.preventDefault();
//         history.back();
//     })
// })



