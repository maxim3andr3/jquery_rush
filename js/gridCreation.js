(function($) {
    $.fn.gridCreation = function() {
        for (var rows = 0; rows < 4; rows++) {
            for (var columns = 0; columns < 4; columns++) {
                $('#container').append('<div class="grid" id="' + rows + columns + '"></div>');
            };
        };
        $('.grid').width(500/rows).height(500/rows);
    };
    
    $.fn.startedCells = function() {
        var x = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        var y = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
        var isEmpty = false;

        while (isEmpty == false) {
            if ($('#' + x + y).text() == '') {
                isEmpty = true;
            } else {
                x = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
                y = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
            }
        }
        $('#' + x + y).html(Math.random() < 0.9 ? 2 : 4);
    };
}(jQuery));