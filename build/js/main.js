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
        $("#phone, #phone2, #phone3").mask("+38(999)-99-99-999");
    });
    $('.collapse-btn').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true,
        prevArrow: '<button type="button" class="slick-prev"></button>',
        nextArrow: '<button type="button" class="slick-next"></button>'
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
    });
    $('.contain-title').click(function () {
       $(this).next().slideToggle();
    });
});
function windowSize(){
    if ($(window).width() <= '991'){
        $(window).scroll(function(){
            if ( $(this).scrollTop() > 115 && $('.navbar').hasClass("default") ){
                $('.navbar').fadeOut('fast',function(){
                    $(this).removeClass("default")
                        .addClass("fixed")
                        .fadeIn('fast');
                });
            } else if($(this).scrollTop() <= 115 && $('.navbar').hasClass("fixed")) {
                $('.navbar').fadeOut('fast',function(){
                    $(this).removeClass("fixed")
                        .addClass("default")
                        .fadeIn('fast');
                });
            }
        });
        $(document).mouseup(function (e) {
            var div = $(".help-for-search");
            if (!div.is(e.target) && div.has(e.target).length === 0) {
                $('.navbar-collapse').removeClass('show');
                $('.navbar-toggler').addClass('collapsed')
            }
        });
    } else {
        return false;
    }
}
$(window).on('load resize',windowSize);