(function ($) {
    "use strict";
    $(document).ready(function () {
        // Sticky Nav
        jQuery(window).on('scroll', function () {
            'use strict';
            if (jQuery(window).scrollTop() > 90) {
                jQuery('header').addClass('animated fadeInDown fixed-top-menu');
            } else {
                jQuery('header').removeClass('animated fadeInDown fixed-top-menu');
            }
        });

        // Sticky Bio-Nav
        jQuery(window).on('scroll', function () {
            'use strict';
            if (jQuery(window).scrollTop() > 250) {
                jQuery('.biography-page').addClass('bio-open');
            } else {
                jQuery('.biography-page').removeClass('bio-open');
            }
        });



        $('.mobile-menu-toggle').on('click', function () {
            $(".control-area").toggleClass("open-mobile-menu");
        });

        $('#countdown').countdown({
            date: '12/31/2024 17:00:00',
            offset: +2,
            day: 'Day',
            days: 'Days'
        });


        var swiper = new Swiper('.client-slider-container', {
            pagination: '.swiper-pagination',
            slidesPerView: 'auto',
            paginationClickable: true,
            spaceBetween: 30
        });



        // statement slider 
        var swiper = new Swiper('.banner-slider', {
            paginationClickable: true,
            nextButton: '.banner-nav-left',
            prevButton: '.banner-nav-right',
            loop: true,
        });

        // statement slider 
        var swiper = new Swiper('.ourstatement-container', {
            paginationClickable: true,
            nextButton: '.swiper-controller-button-left',
            prevButton: '.swiper-controller-button-right',
            spaceBetween: 10,
            slidesPerView: 3,
            breakpoints: {
                768: {
                    slidesPerView: 2
                },
                500: {
                    slidesPerView: 1
                }
            }
        });



        // counter up
        $('.number').counterUp({
            delay: 10,
            time: 2000
        });




        $(document).ready(function () {
            $('.control-area, .documentation-main-area')
                .theiaStickySidebar({
                    additionalMarginBottom: 30
                });
        });



        // external js: isotope.pkgd.js
        // product list page 
        jQuery(window).on('load', function () {
            var $campaign_schedule = $('.campaign-schedule-list').isotope({
                itemSelector: '.campaign-schedule-list-item',
                layoutMode: 'fitRows',
            });
            // filter functions
            var filterFns = {};
            // bind filter button click
            $('#filters').on('click', 'button', function () {
                var filterValue = $(this).attr('data-filter');
                // use filterFn if matches value
                filterValue = filterFns[filterValue] || filterValue;
                $campaign_schedule.isotope({ filter: filterValue });
            });
            // change is-checked class on buttons
            $('.button-group').each(function (i, buttonGroup) {
                var $buttonGroup = $(buttonGroup);
                $buttonGroup.on('click', 'button', function () {
                    $buttonGroup.find('.is-checked').removeClass('is-checked');
                    $(this).addClass('is-checked');
                });
            });
        });



        jQuery(window).on('load', function () {
            $('.gallery-grid').isotope({
                itemSelector: '.gallery-grid-item',
                percentPosition: true,
                masonry: {
                    columnWidth: '.gallery-grid-item-sizer'
                }
            });

        });


        // Payment Method Select Ammount Js
        $('.donation').each(function (i, liList) {
            var $ammount = $(liList);
            $ammount.on('click', 'label', function () {
                $ammount.find('.select-amount').removeClass('select-amount');
                $(this).addClass('select-amount');
            });
        });




        // Payment Method Select Ammount Js
        $('.donate-amount').each(function (i, liList) {
            var $ammount = $(liList);
            $ammount.on('click', 'label', function () {
                $ammount.find('.select-amount').removeClass('select-amount');
                $(this).addClass('select-amount');
            });
        });


        //  testimonial style one
        var galleryTop = new Swiper('.gallery-top', {
            spaceBetween: 90,
            direction: 'vertical',
            loop: true,
            slidesPerView: 1
        });
        var galleryThumbs = new Swiper('.gallery-thumbs', {
            centeredSlides: true,
            slidesPerView: '3',
            touchRatio: 1,
            loop: true,
            slideToClickedSlide: true
        });
        galleryTop.params.control = galleryThumbs;
        galleryThumbs.params.control = galleryTop;



        //  testimonial style two
        var swiper = new Swiper('.testimonial-container', {
            paginationClickable: true,
            nextButton: '.tcleft',
            prevButton: '.tcright',
            spaceBetween: 30
        });



        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.skicky-nav-menu').each(function (i, liList) {
            var $liList = $(liList);
            $liList.on('click', 'li a', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });



        jQuery(document).ready(function () {
            jQuery('.bio-sidebar').theiaStickySidebar({
                // Settings
                additionalMarginTop: 30
            });
        });



        $('a[data-rel^=lightcase]').lightcase();



        // preloader
        $(window).load(function () {
            $("#loading").delay(2000).fadeOut(500);
            $("#loading-center").on('click', function () {
                $("#loading").fadeOut(500);
            })
        })



        // onepage nav js
        //jQuery for page scrolling feature - requires jQuery Easing plugin
        $('.onepage-nav').each(function (i, liList) {
            var $liList = $(liList);
            $liList.on('click', 'li a', function (event) {
                var $anchor = $(this);
                $('html, body').stop().animate({
                    scrollTop: $($anchor.attr('href')).offset().top
                }, 1500, 'easeInOutExpo');
                event.preventDefault();
            });
        });




        //mobile drodown menu display
        $('.header ul li a').on('click', function (e) {
            var element = $(this).parent('li');
            if (element.hasClass('open')) {
                element.removeClass('open');
                element.find('li').removeClass('open');
                element.find('ul').slideUp(1000, "swing");
            }
            else {
                element.addClass('open');
                element.children('ul').slideDown(1000, "swing");
                element.siblings('li').children('ul').slideUp(500, "swing");
                element.siblings('li').removeClass('open');
                element.siblings('li').find('li').removeClass('open');
                element.siblings('li').find('ul').slideUp(500, "swing");
            }
        });


        $('.biography-page ul').on('click', 'li', function (e) {
            e.preventDefault();
            $('.biography-page ul li').removeClass('active');
            $(this).addClass('active');
        });


        // shop cart + - start here
        var CartPlusMinus = $('.cart-plus-minus');
        CartPlusMinus.prepend('<div class="dec qtybutton">-</div>');
        CartPlusMinus.append('<div class="inc qtybutton">+</div>');
        $(".qtybutton").on("click", function () {
            var $button = $(this);
            var oldValue = $button.parent().find("input").val();
            if ($button.text() === "+") {
                var newVal = parseFloat(oldValue) + 1;
            } else {
                if (oldValue > 0) {
                    var newVal = parseFloat(oldValue) - 1;
                } else {
                    newVal = 1;
                }
            }
            $button.parent().find("input").val(newVal);
        });
    });
}(jQuery));