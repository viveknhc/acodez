
var swiper = new Swiper(".articleSwiper", {
    slidesPerView: 3,
    spaceBetween: 10,
    grabCursor: true,
    loop: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    breakpoints: {

        200: {
            slidesPerView: 1,
            spaceBetween: 20
        },


        // When window width is >= 640px
        640: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        // When window width is >= 768px
        767: {
            slidesPerView: 1,
            spaceBetween: 30
        },

        999: {
            slidesPerView: 2,
            spaceBetween: 10
        },
        // When window width is >= 1024px
        1024: {
            slidesPerView: 3,
            spaceBetween: 10
        }
    }
});