var imgpath = 'assets/img/';


$('.role').on('click', function(){
    $(this).addClass('active');
    $(this).parent().next().removeClass('disabled');

    if( $(this).parent().hasClass('level-1')){
        $('button.reset').css('opacity', '1');
        $('.ttstart').css({
            'opacity': 0,
            'z-index': -9999
        })
    }

    if($(":selected", this)){
        console.log($(this).attr('id'))
        $(this).find('img').attr('src', imgpath + $(this).attr('id') + '1.png');
    }
    else{
        $(this).find('img').attr('src', imgpath + $(this).attr('id') + '.png');
    }
})

$('.role').on('change', function(){
    
})

$('.reset').click(function(){
    $('.level-group').addClass('disabled');
    $('.level-0, .level-1').removeClass('disabled');
    $(':checked').prop("checked", false);

    $('button.reset').css('opacity', '0');
    $('.ttstart').css({
        'opacity': '1 !important',
        'z-index': 9999
    })
    
    // RESET IMAGES
    $('.role').each(function(){
        $(this).find('img').attr('src', imgpath + $(this).attr('id') + '.png');
    });
})
