$.fn.showPics = function () {
    var trgt = $(this)
    trgt.on('click', '.slide', function () {
        var pics = $(this).siblings('.slide')
        trgt.find('.slide').addClass('hide')
        if (pics.hasClass('hide')) {
            pics.removeClass('hide')
        } else {
            pics.addClass('hide')
        }
    })
}
