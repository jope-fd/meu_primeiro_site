$(document).ready(function() {
    $('.navigation_trigger, .navigation a').click(function() {
        $('body').toggleClass('sidebar_is_active');
    });
});
$(function() {
    $('a[href*=\\#]:not([href=\\#])').click(function() {
        if(location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.lenght) {
                var targety = target.offset().top;
                var realtargety = targety - 32;
                $('html,body').animate({
                    scrolltop: realtargety,
                    }, 500, 'swing');
                return false;
            };
        };
    })
});
