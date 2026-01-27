$(document).ready(function () {
    $('.minus-five-coin').click(function () {
        let currentNumber = $('.the-number').text() - 0;
        currentNumber -= 5;
        $('.the-number').text(currentNumber);
        flyNumber();
    });

    $('.add-five-coin').click(function () {
        let currentNumber = $('.the-number').text() - 0;
        currentNumber += 5;
        $('.the-number').text(currentNumber);
    });

    function flyNumber(number){
        $('.fly-number').css('top', -200);
    }
});