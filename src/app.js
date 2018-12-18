$('.menu-toggle').click(function(e){
    $('.site-nav').toggleClass('site-nav--open');

    $(this).toggleClass('open');
    console.log('click')
    e.preventDefault();
});