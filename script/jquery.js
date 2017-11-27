$('#menuHandle > .line-box').on('click', function(){
    $('#menuHandle').toggleClass('active');
    $('#globalFader').toggleClass('active');
});
$('#globalFader').on('click', function(){
    $('#menuHandle').toggleClass('active');
    $('#globalFader').toggleClass('active');
});
