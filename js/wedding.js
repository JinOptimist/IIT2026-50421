$(document).ready(function () {
    $('.envelop').click(function () {
        
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
            envelopContent.addClass('opened');
        }, 2200)
    });


});
