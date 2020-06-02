 $(document).ready(function () {
    
    $(".scrollpanel").scrollpanel();

    $(".scrollpanel").scrollpanel({
       prefix: 'sp-'
    });

    $(function () {
       $("#my-accordion").accordion();
    });

    $('.langrage__box-ru').click(function (event) {
       $('.slide__descr-ru').addClass('slide__descr-active');
       $('.slide__descr-eu, .slide__descr-na').removeClass('slide__descr-active');
       $('.langrage__box-ru').addClass('langrage__box-active');
       $('.langrage__box-na, .langrage__box-eu').removeClass('langrage__box-active');
    });
    $('.langrage__box-eu').click(function (event) {
       $('.slide__descr-eu').addClass('slide__descr-active');
       $('.slide__descr-ru, .slide__descr-na').removeClass('slide__descr-active');
       $('.langrage__box-eu').addClass('langrage__box-active');
       $('.langrage__box-na, .langrage__box-ru').removeClass('langrage__box-active');
    });
    $('.langrage__box-na').click(function (event) {
       $('.slide__descr-na').addClass('slide__descr-active');
       $('.slide__descr-ru, .slide__descr-eu').removeClass('slide__descr-active');
       $('.langrage__box-na').addClass('langrage__box-active');
       $('.langrage__box-ru, .langrage__box-eu').removeClass('langrage__box-active');
    });

 })