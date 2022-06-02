$(document).ready(function () {
    const owl_slider = $('.owl-carousel-slider').owlCarousel({
        loop: true,
        margin: 15,
        dots: false,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1.5
            }
        }
    });

    $('.customNextBtnSlider').click(function () {
        owl_slider.trigger('next.owl.carousel');
    })

    $('.customPrevBtnSlider').click(function () {
        owl_slider.trigger('prev.owl.carousel');
    })

    const owl_review = $('.owl-carousel-review').owlCarousel({
        loop: true,
        margin: 15,
        dots: true,
        responsive: {
            0: {
                items: 1
            }
        }
    });

    $('.customNextBtnReview').click(function () {
        owl_review.trigger('next.owl.carousel');
    })

    $('.customPrevBtnReview').click(function () {
        owl_review.trigger('prev.owl.carousel');
    })


});
