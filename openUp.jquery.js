// $.fn.openUp = function () {
//     var trgt = $(this) //.character
//     trgt.on('click', 'h3', function () {
//         // trgt.find(".fold").css({ display: 'none' })
//         var text = trgt.find(".fold")
//         if (text.css({ display: 'none' })) {
//             text.css({ display: 'inherit' })
//         } else {
//             text.css({ display: 'none' })
//         }
//     })
// }

// $.fn.openUp = function () {
//     var trgt = $(this)
//     trgt.on('click', 'h3', function () {
//         // trgt.find(".fold").css('display', 'none')
//         var text = trgt.find(".fold")
//         if (text.css('display') === 'none') {
//             text.css({ display: 'block' })
//         } else {
//             text.css({ display: 'none' })
//         }
//     })
// }

// $.fn.openUp = function () {
//     var trgt = $(this)
//     trgt.on('click', 'h3', function () {
//         // trgt.find(".fold").css({ height: 0 })
//         var text = trgt.siblings(".fold")
//         if (text.css({ maxHeight: 0 })) {
//             text.css({ maxHeight: 250 })
//         } else {
//             text.css({ maxHeight: 0 })
//         }

//     })
// }

$.fn.openUp = function () {
    var trgt = $(this)
    trgt.on('click', 'h3', function () {
        var text = $(this).siblings('.fold')
        trgt.find('.fold').removeClass('open')
        if (text.hasClass('open')) {
            text.removeClass('open')
        } else {
            text.addClass('open')
        }
    })
}