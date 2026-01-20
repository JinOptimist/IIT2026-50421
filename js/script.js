$(document).ready(function () {
    init();

    $('.image').click(function () {
        $(this).addClass('hide-girl');
    });

    function init(){
        for (let i = 0; i < 6; i++) {
            createGirl(i + 1);
        }
    }

    function createGirl(index){
        // const div = document.createElement('div')
        const div = $('<div>');
        div.addClass('image');

        const img = $('<img>');
        img.attr('src', `img/girl${index}.jpg`);

        div.append(img);
        $('.images').append(div);
    }

});
