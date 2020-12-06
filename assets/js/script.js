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
        $(this).find('.role-img').attr('src', imgpath + $(this).attr('id') + '1.png');
    }
    else{
        $(this).find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
    }

    $(this).parent('.level-group').find('.active').removeClass('active');
    $(this).addClass('active');
})

$('.opspath').click(function(){
    $('.qapath').each(function(){
        $(this).find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
        $(this).removeClass('active')
    })
    $(this).parent('.level-group').prevAll('.level-group').find('.opspath').click();
})

$('.qapath').click(function(){
    $('.opspath').each(function(){
        $(this).find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
        $(this).removeClass('active')
    })
    $(this).parent('.level-group').prevAll('.level-group').find('.qapath').click();
})

$('#csr').click(function(){
    $('#tsr').removeClass('active');
    $('#tsr').find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
})

$('#tsr').click(function(){
    $('#csr').removeClass('active');
    $('#csr').find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
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
        $(this).find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
    });

    // REMOVE ALL ACTIVE PATHS
    $('.active').removeClass('active');
})
