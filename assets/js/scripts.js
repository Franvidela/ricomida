// JAVASCRIPT

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})


// JQUERY


$(document).ready(function () {
    $('#enviarCorreo').click(function () {
        alert('El coreo fue enviado correctamente...');
    })
})

$(document).ready(function () {
    $('#ingredientes').dblclick(function () {
        $(this).css({'color': '#e70c0c'});
    })
})

$(document).ready(function () {
    $('#preparacion').dblclick(function () {
        $(this).css({'color': '#e70c0c'});
    })
})
