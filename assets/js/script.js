var imgpath = 'assets/img/';

$('.opspath').click(function(){
    $('.qapath').each(function(){
        $(this).find('.role-img').attr('src', imgpath + $(this).attr('id') + '.png');
        $(this).removeClass('active')
    })
    $(this).parent('.level-group').prevAll('.level-group').find('.opspath').click();
});

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
});

// PREV ROLE AND DISABLE NEXT
$('.level-group').click(function(){
    $(this).nextAll('.level-group').addClass('disabled');
    $(this).next('.level-group').removeClass('disabled');
    $(this).nextAll('.level-group').find(':checked').prop("checked", false);
    $(this).nextAll('.level-group').find('.role').each(function(){
        var r = $(this);
        r.find('.role-img').attr('src', imgpath + r.attr('id') + '.png');
        r.removeClass('active');
    });
});

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
});