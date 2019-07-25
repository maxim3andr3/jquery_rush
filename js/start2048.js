(function($) {
    $.fn.start2048 = function() {
        function gridCreation() {
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    $('#container').append('<div class="grid" id="' + rows + columns + '"></div>');
                };
            };
        };
        
        function randomCells(number) {
            for (var i = 0; i < number; i++) {
                var rows = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
                var columns = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
                var isEmpty = false;

                while (isEmpty == false) {
                    if ($('#' + rows + columns).text() == '') {
                        isEmpty = true;
                    } else {
                        rows = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
                        columns = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
                    };
                };
                $('#' + rows + columns).html(Math.random() < 0.9 ? 2 : 4);
            };
        };
        gridCreation();
        randomCells(2);

        document.addEventListener('keydown', function(key) {
            var keyPressed;
            var code = key.keyCode;

            if (code === 37 || code === 38 || code === 39 || code ===40) {
                keyPressed = key;
            };

            switch (keyPressed) {
                case 37:
                    movement(left);
                    break;
                case 38:
                    movement(top);
                    break;
                case 39:
                    movement(right);
                    break;
                case 40:
                    movement(down);
                    break;
            };
        });

        function movement(move) {

        };
    };
}(jQuery));