(function($) {
    $.fn.start2048 = function() {
        function gridCreation() {
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    $('#container').append('<div class="grid" id="' + rows + columns + '"></div>');
                };
            };
        };
        gridCreation();

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
        randomCells(2);

        document.addEventListener('keydown', function(key) {
            var keyPressed;
            var code = key.keyCode;

            if (code === 37 || code === 38 || code === 39 || code ===40) {
                switch (code) {
                    case 37:
                        movementLeft();
                        break;
                    case 38:
                        movementTop();
                        break;
                    case 39:
                        movementRight();
                        break;
                    case 40:
                        movementDown();
                        break;
                };
            };
        });

        function movementLeft() {
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 4; columns > 0; columns--) {
                    while ($('#' + rows + columns).text() !== '' && $('#' + rows + (columns - 1)).text() === '' && (columns - 1) >= 0) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + rows + (columns - 1)).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                    };
                };
            };
        };

        function movementTop() {
            for (var rows = 4; rows > 0; rows--) {
                for (var columns = 0; columns < 4; columns++) {
                    while ($('#' + rows + columns).text() !== '' && $('#' + (rows - 1) + columns).text() === '' && (rows - 1) >= 0) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + (rows - 1) + columns).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                    };
                };
            };
        };

        function movementRight() {
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    while ($('#' + rows + columns).text() !== '' && $('#' + rows + (columns + 1)).text() === '' && (columns + 1) < 4) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + rows + (columns + 1)).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                    };
                };
            };
        };

        function movementDown() {
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    while ($('#' + rows + columns).text() !== '' && $('#' + (rows + 1) + columns).text() === '' && (rows + 1) < 4) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + (rows + 1) + columns).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                    };
                };
            };
        };
    };
}(jQuery));