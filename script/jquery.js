function menuToggle(){
    $('#menuHandle').toggleClass('active');
    $('#globalFader').toggleClass('active');
    $('#parentContainer').toggleClass('back-blur');
    $('#navbar').toggleClass('back-blur');
    $('#footer').toggleClass('back-blur');
}
$('#menuHandle > .line-box').on('click', function(){
    menuToggle()
});
$('#globalFader').on('click', function(){
    menuToggle()
});
