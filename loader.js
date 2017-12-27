$(document).ready(function () {
    setTimeout(lazy, 1000);
});
function lazy() {
    $('body').addClass('loaded');
    $('#loader-wrapper .load_title').remove();    
}