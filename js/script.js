$(document).ready(function () {
    init();

    $('.image').click(function () {
        $(this).addClass('hide-girl');
    });

    $('.show').click(function () {
        $('.image.hide-girl').addClass('show-girl');
        
        setTimeout(() => {
            $('.image').removeClass('show-girl');
            $('.image').removeClass('hide-girl');
        }, 1000);

    });

    function init() {
        for (let i = 0; i < 6; i++) {
            createGirl(i + 1);
        }
    }

    function createGirl(index) {
        // const div = document.createElement('div')
        const div = $('<div>');
        div.addClass('image');

        const img = $('<img>');
        img.attr('src', `img/girl${index}.jpg`);

        div.append(img);
        $('.images').append(div);
    }

});
