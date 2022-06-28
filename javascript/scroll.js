$(document).ready(function () {
    var scrollElement = function(){
        var scroll = $(document).scrollTop();

        $('#left').css({
            transform: `translateX(-${scroll / 10}%)`
        });

        $('#right').css({
            transform: `translateX(${scroll / 10}%)`
        });

        $('.scale').css({
            transform: `scale(${100 - scroll / 30}%)`
        });
    };

    $(document).scroll(scrollElement);
});