var imgpath = 'assets/img/';
var cont = [];
$.get('content.json', function(data){
    cont.push(data);
});


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
    $('#tsr').find('.role-img').attr('src', imgpath + 'tsr.png');
})

$('#tsr').click(function(){
    $('#csr').removeClass('active');
    $('#csr').find('.role-img').attr('src', imgpath + 'csr.png');
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

    $('.role-title').text("Select your desired career path")
    $('.role-duration').text('')
    $('.role-description').text('')
    
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
    var thisid = $(this).attr('id');

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
        $(this).find('.role-img').attr('src', imgpath + thisid + '1.png');
    }
    else{
        $(this).find('.role-img').attr('src', imgpath + thisid + '.png');
    }

    $(this).parent('.level-group').find('.active').removeClass('active');
    $(this).addClass('active');

    $.each(cont[0], function(key, val){
        if(val.id == thisid){
            $('.role-title').text(val.role);
            $('.role-duration').text(val.duration)
            $('.role-description').text(val.description)
        }
    })


});