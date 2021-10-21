/*global $, jQuery */

$(document).ready(function () {
    
    "use strict";
    
    $('.carousel').carousel(
        {
		 
		    interval: 150000
        }
    );
    
    $('.cog-check').click(function () {
        
        $('.color-option').toggle();
         
    });
     
    var coloLi = $('.color-option ul li');
    
    coloLi
        .eq(0).css("backgroundColor", "#c1c127").end()
        .eq(1).css("backgroundColor", "#f10693").end()
        .eq(2).css("backgroundColor", "#0b96cc").end()
        .eq(3).css("backgroundColor", "#d8870e").end()
        .eq(4).css("backgroundColor", "#503232");
    
    coloLi.click(function () {
        $("link[href*='theme']").attr("href", $(this).attr("data-value"));
    });
    

    
});


/*start loading*/
$(window).load(function () {
    
    "use strict";
    $('body').css("overflow", "auto");
    $('.loading').fadeOut(1000);

});


$(window).scroll(function () {
   
    "use strict";
       
    if ($(this).scrollTop() >= 500) {
            
        $("#scroll-top").show();
    
    } else {
        $("#scroll-top").hide();
    }
        
});
$("#scroll-top").click(function () {
   
    "use strict";
   
    $("html,body").animate({scrollTop: 0}, 600);
    
});