AOS.init();

// Parallax

window.addEventListener('scroll', e => {
    document.documentElement.style.setProperty('--shiftY', `${this.scrollY}px`)
})

// Back to home page

// document.querySelectorAll('.home-link').forEach(button => {
//     button.addEventListener('click', (e)=> {
//         e.preventDefault();
//         history.back();
//     })
// })

// On - Off Map

// const mapImg = document.querySelector('.map__main__right');
// const map = document.querySelector('.google-map');
// const mapButton = document.querySelector('.map__button');
//
// mapButton.addEventListener('click', (e) => {
//     e.preventDefault();
//     if(map.style.display === 'none') {
//         mapImg.style.display = 'none';
//         map.style.display = 'block';
//     }else {
//         mapImg.style.display = 'block';
//         map.style.display = 'none';
//     }
// })



