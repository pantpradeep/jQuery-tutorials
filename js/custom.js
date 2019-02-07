/* custom js scripts are here */

$(document).ready(function(){
    $('.form-control').focusin(function(){
        //$(this).css('background','#80bdff');
    });
    $('.form-control').blur(function(){
       // $(this).css('background', 'yellow');
    });
    $('#file').change(function(){
        $('.submit').removeAttr('disabled');
    });

    $('#file').change(function(){
        $(this).next().removeAttr('disabled');
    }).next().attr('disabled', 'disabled'); 

    $('#hide_msg').click(function(){
        $(this).next('.msg').fadeToggle();
        var p= $('#hide_msg').val();
        if(p === 'Hide'){
            $('#hide_msg').val('Show');
        }
        else{
            $('#hide_msg').val('Hide');
        }
    });
    
    /* 2- keydown and blur */
    $('.emailField').keydown(function(){
        //console.log("test");
        var g = $(this).val();
        $('.extend').html(g).show().css('color','green');
    });
    $('.emailField').blur(function(){
        $('.extend').hide();
    });

    $('.emailField').keyup(function(){
        console.log("test up");
    });

     /* 2- keydown and blur */
    

     /* 3- change function */
    $('#list').change(function(){
        //console.log("test");
        var list_data = $(this).val();
        $('.append_data').html("<strong>Selected option : </strong>" + list_data).css('color','green');
    });

     /* 4- Submit function */
     $('#submit_area').change(function(){
        //console.log("test");
        var submit_data = $(this).val();
        $('.submit_data').html("<strong>Submit option : </strong>" + submit_data).css('color','green');
    });

     /* 5- Submit function */
     $('.link').mouseenter(function(){
        //console.log("test");
        $(this).addClass('bold');
    }).mouseleave(function(){
        //console.log("test");
        $(this).removeClass('bold');
    });;

    

    $('.link_hover').hover(function(){
        //console.log("test");
        $(this).toggleClass('bold');
    });

    
});

$('.submit').click(function(){
    $(this).val('please wait...');
});

