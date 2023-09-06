const acc = document.querySelectorAll(".forum__block__button");

acc.forEach(el => {
    el.addEventListener("click", function() {
        this.parentNode.classList.toggle("active");
        let panel = this.parentNode.nextSibling.nextSibling;
        if (panel.classList.contains('active')) {
            panel.classList.remove('active');
        } else {
            panel.classList.add('active');
        }
    });
})

// Slider

let init = false;
let swiper;
function swiperCard() {
    if (window.innerWidth <= 992) {
        if (!init) {
            init = true;
            swiper = new Swiper(".expert-carousel", {
                items: 1,
                slidesPerView: "auto",
                spaceBetween: 20,
            });
        }
    } else if (init) {
        swiper.destroy();
        init = false;
    }
}
swiperCard();
window.addEventListener("resize", swiperCard);