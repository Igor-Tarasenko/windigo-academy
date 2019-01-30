$(document).ready(function () {
    $("a.topLink").click(function() {
        $("html, body").animate({
            scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
            duration: 500,
            easing: "swing"
        });
        return false;
    });
    $(function($){
        $("#phone, #phone2").mask("+38(999)-99-99-999");
    });
    $(".activity-block").mCustomScrollbar({
        setLeft: "0",
        axis:"x"
    });
    $('.games-js').click(function () {
        $('.games-js').removeClass('active');
        $(this).addClass('active');
    });
    $(".more-js").click(function () {
        $(this).parent().parent().find(".hidden-games-text").slideToggle();
    });
    $(".roadmap-js").click(function () {
        $(".roadmap-js").removeClass('active');
        $(this).addClass('active');
    })
});