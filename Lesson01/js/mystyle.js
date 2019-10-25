$(function () {
    $('.ndmotkhoi').slideUp();

    $('.motkhoi h3').click(function (event) {
        console.log('Đã click');
        $('.ndmotkhoi').slideDown();
    });
});