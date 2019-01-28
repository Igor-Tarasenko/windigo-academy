$(document).ready(function () {
    $(function($){
        $("#phone").mask("+38(999)-99-99-999");
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