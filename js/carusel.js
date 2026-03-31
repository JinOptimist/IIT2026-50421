$(document).ready(function () {
    const images = [];
    let currentIndex = 0;

    $('.block-4').click(function () {
        $('.carusel').addClass('move-next');
        currentIndex = goodIndex(currentIndex - 1);

        setTimeout(() => {
            $('.carusel').removeClass('move-next');
            updateImages();
        }, 2 * 1000)
    });

    $('.block-2').click(function () {
        $('.carusel').addClass('move-prev');
        currentIndex = goodIndex(currentIndex + 1);
        setTimeout(() => {
            $('.carusel').removeClass('move-prev');
            updateImages();
        }, 2 * 1000)
    });

    function updateImages() {
        $('.block-1 img').attr('src', images[goodIndex(currentIndex)]);
        $('.block-2 img').attr('src', images[goodIndex(currentIndex + 1)]);
        $('.block-3 img').attr('src', images[goodIndex(currentIndex + 2)]);
        $('.block-4 img').attr('src', images[goodIndex(currentIndex + 3)]);
        $('.block-5 img').attr('src', images[goodIndex(currentIndex + 4)]);
    }

    for (let i = 0; i < 8; i++) {
        images.push(`img/wedding/wedding-girl-0${i + 1}.jpg`);
    }

    function goodIndex(index) {
        if (index < 0) {
            index += images.length;
        }
        if (index >= images.length) {
            index -= images.length;
        }
        return index;
    }
});