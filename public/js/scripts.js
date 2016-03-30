jQuery(document).ready(function($) {
    $('.youtube-video').mediaelementplayer();


    $('.youtube-video').on('mouseenter', function(){

    	var mute = $(this).hasClass('muted');

        $(this).find("button").each( function( i, el) {
            var elem = $( el );
            if(elem.attr("title") == 'Play'){
                elem.click();
            }

            console.log(mute);

            if(mute){
	            if(elem.attr("title") == 'Mute'){
	                elem.click();
	            }
            }
        })
    }).on('mouseleave', function(){
        $(this).find("button").each( function( i, el ) {
            var elem = $( el );
            if(elem.attr("title") == 'Pause'){
                elem.click();
            }
        })
    });

    $('.html-video').each(function(i, obj) {
        $(this).on("mouseover", function() {  
        	if($(this).hasClass('muted')){
        		this.muted = true;
        	}
        	this.play();
        });
        $(this).on("mouseout", function() { 
        	this.muted = false;
        	this.pause();
        });
    });

});