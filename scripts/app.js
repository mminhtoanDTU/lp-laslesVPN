$('.customer-list').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: true,
    prevArrow: `<button type="button" class="slick-prev"><img src="./images/arrow-left.svg"/></button>`,
    nextArrow: `<button type="button" class="slick-next"><img src="./images/arrow-right.svg"/></button>`,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                arrows: false
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false
            }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
    ]
});

const toggle = document.querySelector('.menu-toggle');
const menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.add('active')
})

window.addEventListener('click', (e) => {
    if (!menu.contains(e.target) & !e.target.matches('.menu-toggle')) {
        menu.classList.remove('active')
    }
})