AOS.init();

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--shiftY', `${this.scrollY}px`)
})



