(function($) {
    $(function(){

    	// nav hovering
    	$('#nav li, #login li').hover(function(){
    		$(this).addClass('hover');
    	},function(){
    		$(this).removeClass('hover')
    	});

    	// header search
    	$('header form .query').each(function(){
    	   var placeholder = $(this).attr('placeholder');
    	   if($(this).val() == '') $(this).val(placeholder);
    	   $(this).blur(function(){
    	     if($(this).val() == '') $(this).val(placeholder);
    	   }).focus(function(){
    	     if($(this).val() == placeholder) $(this).val('');
    	   });
    	});
    	
    	$('.slide').bind('open', function(){
    	    if(! $(this).hasClass('active') ){
        	    var index = $(this).index();
        	    $(this).siblings().removeClass('current');
    		    $(this).prev().trigger('open');
        	    if(! $(this).hasClass('active') || ! $(this).hasClass('first') ){
        			if(! $(this).hasClass('first'))
        			    $(this).animate({left: "-=650px"});
        		}
        		$(this).addClass('active');
        		$(this).next().trigger('close');
    		}
    		else
    			$(this).next().trigger('close');
    	})
    	.bind('close', function(){
    	    if($(this).hasClass('active') ){
    	        $(this).next().trigger('close');
    	        $(this).removeClass('active');
    	        if(! $(this).hasClass('first') || (! $(this).hasClass('current') || ! $(this).hasClass('last')) )
			        $(this).animate({left: "+=650px"});   
    		}
    	});
        
        $("#tabs-vertical, #tabs-horizontal, #sidebar-tabs").tabs();
                
        /* Triggering from the buttons */
        $('.slidebutton').click(function(){
        	$(this).not('.open').parent().trigger('open').addClass('current');
        });
    	
    	//ie6 clear
    	$('<div>&nbsp;</div>').css({clear: 'both', height: '1px', overflow: 'hidden'}).appendTo('#container');

    });
})(jQuery);