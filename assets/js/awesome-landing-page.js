/*!

 =========================================================
 * Awesome Landing Page - v1.2.2
 =========================================================
 
 * Product Page: https://www.creative-tim.com/product/awesome-landing-page
 * Copyright 2017 Creative Tim (http://www.creative-tim.com)
 * Licensed under MIT (https://github.com/creativetimofficial/awesome-landing-page/blob/master/LICENSE.md)
 
 =========================================================
 
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 */

        var big_image;
        $().ready(function() {
            $('.selector').click(function() {
                SelectColor(this);
            });
            var selectCol = 0;
            if (selectCol == 0) {
                if ($('body').hasClass('landing-page1')) {

                }
            }

        });

        $(window).on('scroll', function() {
            responsive = $(window).width();
            if (responsive >= 768) {
                parallax();
            }
        });

        // function SelectColor(btn) {
        //     oldColor = $('.filter-gradient').attr('data-color');
        //     newColor = $(btn).attr('data-color');

        //     oldButton = $('a[id^="Demo"]').attr('data-button');
        //     newButton = $(btn).attr('data-button');

        //     $('.filter-gradient').removeClass(oldColor).addClass(newColor).attr('data-color', newColor);

        //     $('a[id^="Demo"]').removeClass("btn-" + oldButton).addClass("btn-" + newButton).attr('data-button', newButton);

        //     $('.carousel-indicators').removeClass("carousel-indicators-" + oldColor).addClass("carousel-indicators-" + newColor);

        //     $('.card').removeClass("card-" + oldColor).addClass("card-" + newColor);

        //     $('.selector').removeClass('active');
        //     $(btn).addClass('active');
        // }

        $('.switch').each(function() {
            var selector = $(this).parent('li')
            $(this).click(function() {
                if (selector.siblings().hasClass('active')) {
                    selector.addClass('active');
                    selector.siblings().removeClass('active');
                    var slide = $(this).attr('data-slide')
                    var lastClass = $('body').attr('class').split(' ').pop();
                    $('body').removeClass(lastClass);
                    $('body').addClass('landing-page' + slide);
                }
            });
        });

        // var parallax = debounce(function() {
        //     no_of_elements = 0;
        //     $('.parallax').each(function() {
        //         var $elem = $(this);

        //         if (isElementInViewport($elem)) {
        //             var parent_top = $elem.offset().top;
        //             var window_bottom = $(window).scrollTop();
        //             var $image = $elem.find('.parallax-background-image')
        //             var $oVal = ((window_bottom - parent_top) / 1);
        //             $image.css('margin-top', $oVal + 'px');
        //         }
        //     });
        // }, 6)

        function debounce(func, wait, immediate) {
            var timeout;
            return function() {
                var context = this,
                    args = arguments;
                clearTimeout(timeout);
                timeout = setTimeout(function() {
                    timeout = null;
                    if (!immediate) func.apply(context, args);
                }, wait);
                if (immediate && !timeout) func.apply(context, args);
            };
        };


        function isElementInViewport(elem) {
            var $elem = $(elem);

            // Get the scroll position of the page.
            var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
            var viewportTop = $(scrollElem).scrollTop();
            var viewportBottom = viewportTop + $(window).height();

            // Get the position of the element on the page.
            var elemTop = Math.round($elem.offset().top);
            var elemBottom = elemTop + $elem.height();

            return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
        }

        // Script criado por @Denilson_fa
        window.onscroll = function() {
            scrollFunction1();
            scrollFunction2();
        };
        
        function scrollFunction1() {
            if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
                document.getElementById("fixbar").style.position = "fixed";
                document.getElementById("fixbar").style.opacity = "1";
                document.getElementById("fixbar").style.backgroundColor = "1";
            } else if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) { 
                document.getElementById("fixbar").style.opacity = "0";
            } else {
                document.getElementById("fixbar").style.position = "absolute";
                document.getElementById("fixbar").style.opacity = "1";
            }
        }
        // Barra de Progresso
        scrollFunction2 = () => {
            const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            const scrolled = (winScroll / height) * 100;
            document.getElementById("js-barraDeLeitura").style.width = `${scrolled}%`;
        }

        // Animação de entrada
        var wow = new WOW(
          {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            callback:     function(box) {
              // the callback is fired every time an animation is started
              // the argument that is passed in is the DOM node being animated
            },
            scrollContainer: null // optional scroll container selector, otherwise use window
          }
        );
        wow.init();

        // slide
        var slideIndex = 0;
        carousel();

        function carousel() {
          var i;
          var x = document.getElementsByClassName("mySlides");
          for (i = 0; i < x.length; i++) {
            x[i].style.opacity = "0";
          }
          slideIndex++;
          if (slideIndex > x.length) {slideIndex = 1}
          x[slideIndex-1].style.opacity = "1";
          setTimeout(carousel, 5000);
        }
