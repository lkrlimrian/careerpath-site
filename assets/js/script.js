$('.role').click(function(){
    $(this).addClass('active');
    $(this).parent().next().removeClass('disabled');



    if($(":selected", this)){
        console.log($(this).attr('id'))
    }
})

$('.reset').click(function(){
    $('.level-group').addClass('disabled');
    $('.level-0, .level-1').removeClass('disabled');
    $(':checked').prop("checked", false);
})