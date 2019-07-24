(function($) {
    $.fn.gridCreation = function() {
        for (var rows = 0; rows < 4; rows++) {
            for (var columns = 0; columns < 4; columns++) {
                $('#container').append('<div class="grid" id="x' + rows + 'y' + columns + '"></div>');
            };
        };
        $('.grid').width(500/rows).height(500/rows);
    };
}(jQuery));