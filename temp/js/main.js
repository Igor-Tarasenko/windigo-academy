$(document).ready(function () {
    $(function($){
        $("#phone, #phone2").mask("+38(999)-99-99-999");
    });
    $(".activity-block").mCustomScrollbar({
        /*axis:"x" // horizontal scrollbar*/
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