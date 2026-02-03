$(document).ready(function () {
    let couterForGirl = 0;
    const girlCount = 3;
    init();

    $('.envelop-bottom,.envelop-up').click(function () {
        const parent = $(this)
            .closest('.envelop-container');
        const envelopUp = parent
            .find('.envelop-up');
        const envelopContent = parent
            .find('.envelop-content');

        parent
            .toggleClass('open');

        setTimeout(() => {
            parent.css('overflow', 'visible');
            envelopUp.css('transition', 'none')
            envelopUp.css('z-index', 3);
            scrollContent();
        }, 2200)
    });

    $('.envelop-content').click(scrollContent);

    function scrollContent() {
        const newTop = calcTopForContent();
        $('.envelop-content').css('top', newTop);
        couterForGirl++;
        if (couterForGirl < girlCount) {
            setTimeout(scrollContent, 1900);
        }
    }

    function calcTopForContent() {
        let top = (-1) * 300; // initial value -300px
        for (let i = 0; i < couterForGirl; i++) {
            top -= $(`[girl-id=${i}]`).height();
        }

        return top;
    }

    function init() {
        for (let i = 0; i < girlCount; i++) {
            const girlImg = $('<img>');
            const indexStr = i >= 9
                ? '' + (i + 1)
                : '0' + (i + 1);
            girlImg.attr('src', `img/wedding/wedding-girl-${indexStr}.jpg`)
            girlImg.addClass('girl')
            girlImg.attr('girl-id', i);
            $('.envelop-content').append(girlImg);
        }
    }
});
