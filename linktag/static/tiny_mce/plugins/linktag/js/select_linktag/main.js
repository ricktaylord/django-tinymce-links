define(["jquery", "jquery-ui/autocomplete"], function($) {
    $(function() {
        var cache = {};
        $( "#biblio_select" ).autocomplete({
            minLength: 2,
            source: function( request, response ) {
                var term = request.term;
                if ( term in cache ) {
                    response( cache[ term ] );
                    return;
                }
         
                $.getJSON( "/endnote/search/"+request.term+"/", function( data, status, xhr ) {
                    cache[ term ] = data;
                    response( data );
                });
            },
            select: function( event, ui ) {
                $( "#biblio_citekey" ).val(ui.item.id);
                return false;
            }
        });
    });
});