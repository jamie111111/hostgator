$('.menu-toggle').click(function(e){
    $('.main').toggleClass('main--down');

    $(this).toggleClass('open');
    e.preventDefault();
});