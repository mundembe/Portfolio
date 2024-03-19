(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();


    // Initiate the wowjs
    new WOW().init();


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');

            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1500, 'easeInOutExpo');
        return false;
    });


    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }


    // Modal Video
    var $videoSrc;
    $('.btn-play').click(function () {
        $videoSrc = $(this).data("src");
    });
    console.log($videoSrc);
    $('#videoModal').on('shown.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
    })
    $('#videoModal').on('hide.bs.modal', function (e) {
        $("#video").attr('src', $videoSrc);
    })


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, { offset: '80%' });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({ filter: $(this).data('filter') });
    });

    // Custom portfolio slideshow
    let slideIndex = 0;

    document.addEventListener('DOMContentLoaded', function () {
        const links = document.querySelectorAll('.slideshow-link');

        links.forEach(function (link) {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const slideshowId = this.getAttribute('data-slideshow-id');
                showSlides(slideshowId, slideIndex);
            });
        });

        const closeBtns = document.querySelectorAll('.close-btn');

        closeBtns.forEach(function (btn) {
            btn.addEventListener('click', function () {
                const slideshow = this.parentElement;
                slideshow.style.display = 'none';
            });
        });

        const prevButtons = document.querySelectorAll('.prev');
        prevButtons.forEach(function (prevButton) {
            prevButton.addEventListener('click', function () {
                const slideshowId = this.parentElement.id;
                changeSlide(slideshowId, -1);
            });
        });

        const nextButtons = document.querySelectorAll('.next');
        nextButtons.forEach(function (nextButton) {
            nextButton.addEventListener('click', function () {
                const slideshowId = this.parentElement.id;
                changeSlide(slideshowId, 1);
            });
        });
    });

    function showSlides(slideshowId, n) {
        const slideshows = document.querySelectorAll('.slideshow');
        slideshows.forEach(function (slideshow) {
            if (slideshow.id === slideshowId) {
                slideshow.style.display = 'block';
                const slides = slideshow.getElementsByClassName("slide");
                if (n >= slides.length) { slideIndex = 0 }
                if (n < 0) { slideIndex = slides.length - 1 }
                for (let i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                }
                slides[slideIndex].style.display = "block";
            } else {
                slideshow.style.display = 'none';
            }
        });
    }

    function changeSlide(slideshowId, n) {
        const slideshows = document.querySelectorAll('.slideshow');
        slideshows.forEach(function (slideshow) {
            if (slideshow.id === slideshowId) {
                slideIndex += n;
                showSlides(slideshowId, slideIndex);
            }
        });
    }




    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });


})(jQuery);

