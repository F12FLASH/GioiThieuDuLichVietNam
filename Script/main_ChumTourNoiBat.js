(function ($) {
    $('.navbar .dropdown').hover(function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideDown(250);
    }, function () {
        $(this).find('.dropdown-menu').first().stop(true, true).slideUp(100)
    });

    // sidebar menu

    $('.sidebar_menu > li > ul > li.menu-item-has-children > a').append('<i class="fa fa-plus-circle"></i>');
    $('.sidebar_menu li a i').click(function (e) {
        e.preventDefault();
        var sub_menu = $(this).closest('li').children('ul');
        if (sub_menu.css('display') === 'none') {
            $(this).removeClass('fa-plus-circle').addClass('fa-minus-circle');
            sub_menu.slideDown();
        } else {
            $(this).removeClass('fa-minus-circle').addClass('fa-plus-circle');
            sub_menu.slideUp();
        }
    });

    // main menu
    $(window).resize(function () {
        if (window.matchMedia('(min-width: 768px)').matches) {
            $('#topmenu li.dropdown').mouseenter(function () {
                $(this).addClass('open');
            });
            $('#topmenu li.dropdown').mouseleave(function () {
                $(this).removeClass('open');
            });

            $('#topmenu li.dropdown a').click(function () {
                var url = $(this).attr('href');
                window.location.href = url;
            });
        }
    }).resize();

    // fade modal

    $(document).ready(function () {
        setTimeout(function () {
            $('#myModal').modal('show');
        }, 5000);
    });

    var wheight = screen.height;
    $(window).scroll(function () {
        var scTop = $(window).scrollTop();
        if (scTop > (wheight / 2)) {
            $('#to_top').fadeIn(200);
        } else {
            $('#to_top').fadeOut(200);
        }
    });

    $('#to_top').click(function (e) {
        e.preventDefault();
        $('body, html').animate({ scrollTop: 0 }, 1000);
    });

})(jQuery);

1