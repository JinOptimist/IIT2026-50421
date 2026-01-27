$(document).ready(function () {
    $('.minus-five-coin').click(function () {
        let currentNumber = $('.the-number').text() - 0;
        currentNumber -= 5;
        $('.the-number').text(currentNumber);
        flyNumber(-5);
    });

    $('.add-five-coin').click(function () {
        let currentNumber = $('.the-number').text() - 0;
        currentNumber += 5;
        $('.the-number').text(currentNumber);
        flyNumber(5);
    });

    function flyNumber(number) {
        // create elemtn which will fly
        const span = $('<span>');
        span.addClass('fly-number');
        if (number > 0) {
            span.addClass('positive');
        } else {
            span.addClass('negative');
        }
        span.text(number);
        $('.coins').append(span);

        // Change property to move element
        setTimeout(() => {
            const leftPosition = number > 0
                ? 300
                : -100;
            span.css('top', -250);
            span.css('left', leftPosition);
            span.css('opacity', 0);
        }, 100)
    }
});