jQuery(document).ready(function($) {
    $('.youtube-video').mediaelementplayer();


    $('.youtube-video').on('mouseenter', function(){
        $(this).find("button").each( function( i, el ) {
            var elem = $( el );
            if(elem.attr("title") == 'Play'){
                elem.click();
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
        $(this).on("mouseover", function() { hoverVideo(i); });
        $(this).on("mouseout", function() { hideVideo(i); });
    });

});

function hoverVideo(i) {  
        $('.html-video')[i].play(); 
}

function hideVideo(i) {
        $('.html-video')[i].pause(); 
}