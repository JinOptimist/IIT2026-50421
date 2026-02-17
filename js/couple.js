$(document).ready(function () {
    let openId = undefined;
    const imageUrls = [];
    init();

    $('.card').click(function () {
        if (openId == undefined) {
            // Если все карточки были закрыты когда мы кликали
            $(this).addClass('open');
            openId = $(this).attr("data-card-number");
            return;
        } else { // Если уже была открыта одна карнтинка
            const card1Id = openId;
            const card2Id = $(this).attr("data-card-number");
            $(this).addClass('open');

            setTimeout(() => {
                if (card1Id == card2Id) {
                    // Две картинки. Картинки одинаковые
                    $(`[data-card-number=${card1Id}]`)
                        .addClass('finded');
                } else {
                    // Две картинки .Картинки разные
                    $(`[data-card-number=${card1Id}]`)
                        .removeClass('open');
                    $(`[data-card-number=${card2Id}]`)
                        .removeClass('open');
                }
            }, 2300);
            openId = undefined;
        }
    })

    function init() {
        fillImageUrls();
        shuffle();
        drawImages();
    }

    function drawImages() {
        // На основе массива с уралми создаём новые тэги card
        for (let i = 0; i < imageUrls.length; i++) {
            createOneCard(i);
        }
    }

    function createOneCard(i) {
        const url = imageUrls[i];

        const newCard = $('.card.template').clone();
        newCard.removeClass('template');
        newCard
            .find('.face img')
            .attr('src', url);
        //url == 'img/wedding/wedding-girl-03.jpg'
        const indexImageNumber = url.indexOf('.jpg') - 1; // 26
        const imageNumber = url[indexImageNumber]; // 3
        newCard.attr('data-card-number', imageNumber);

        $('.desc').append(newCard);
    }

    function fillImageUrls() {
        // Заполняем массив урлами на наши картинки
        for (let i = 0; i < 5; i++) {
            const index = i + 1;
            imageUrls.push(`img/wedding/wedding-girl-0${index}.jpg`);
            imageUrls.push(`img/wedding/wedding-girl-0${index}.jpg`);
        }
    }

    // if max == 100 then we return number between [0 .. 99]
    function getRandomNumber(max) {
        return Math.floor(Math.random() * max);
    }

    function shuffle() {
        for (let i = 0; i < 1000; i++) {
            const randomIndexFrist = getRandomNumber(imageUrls.length);
            const randomIndexSecond = getRandomNumber(imageUrls.length);

            const temp = imageUrls[randomIndexFrist];
            imageUrls[randomIndexFrist] = imageUrls[randomIndexSecond];
            imageUrls[randomIndexSecond] = temp;
        }
    }
});