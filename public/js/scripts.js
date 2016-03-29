jQuery(document).ready(function($) {
    $('video').mediaelementplayer();


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
});