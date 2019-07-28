(function($) {
    $.fn.start2048 = function() {
        var moveOk; // global variable to determine if there was movement
        var mergeOk; // global variable to determine if there was merge
        var score = 0; // global variable to get the score of the player

        // function to create the grid
        function gridCreation() {
            $('#container').before('<div class="score">Score : ' + '<span id="newScore">' + score + '</span>' + '</div>');
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    $('#container').append('<div class="grid" id="' + rows + columns + '"></div>');
                };
            };
        };
        gridCreation();

        // function to add random number(s) into the grid
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
            var code = key.keyCode;

            if (code === 37 || code === 38 || code === 39 || code === 40) {
                switch (code) {
                    case 37:
                        mergeLeft();
                        moveLeft();
                        if (moveOk === true || mergeOk === true) {
                            randomCells(1);
                        };
                        if (gameOver === true) {
                            alert('Game Over');
                        };
                        break;
                    case 38:
                        mergeTop();
                        moveTop();
                        if (moveOk === true || mergeOk === true) {
                            randomCells(1);
                        };
                        if (gameOver === true) {
                            alert('Game Over');
                        };
                        break;
                    case 39:
                        mergeRight();
                        moveRight();
                        if (moveOk === true || mergeOk === true) {
                            randomCells(1);
                        };
                        if (gameOver === true) {
                            alert('Game Over');
                        };
                        break;
                    case 40:
                        mergeDown();
                        moveDown();
                        if (moveOk === true || mergeOk === true) {
                            randomCells(1);
                        };
                        if (gameOver() === true) {
                            alert('Game Over');
                        };
                        break;
                };
            };
        });

        function moveLeft() {
            moveOk = false;
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    var temp = columns - 1;
                    while (temp >= 0 && $('#' + rows + temp).text() == '') {
                        temp--;
                    }
                    temp++;
                    if ($('#' + rows + columns).text() !== '' && $('#' + rows + temp).text() === '' && temp >= 0) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + rows + temp).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                        moveOk = true;
                    };
                };
            };
        };

        function moveTop() {
            moveOk = false;
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 0; columns < 4; columns++) {
                    var temp = rows - 1;
                    while (temp >= 0 && $('#' + temp + columns).text() == '') {
                        temp--;
                    }
                    temp++;
                    if ($('#' + rows + columns).text() !== '' && $('#' + temp + columns).text() === '' && temp >= 0) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + temp + columns).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                        moveOk = true;
                    };
                };
            };
        };

        function moveRight() {
            moveOk = false;
            for (var rows = 0; rows < 4; rows++) {
                for (var columns = 3; columns >= 0; columns--) {
                    var temp = columns + 1;
                    while (temp < 4 && $('#' + rows + temp).text() == '') {
                        temp++;
                    }
                    temp--;
                    if ($('#' + rows + columns).text() !== '' && $('#' + rows + temp).text() === '' && temp < 4) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + rows + temp).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                        moveOk = true;
                    };
                };
            };
        };

        function moveDown() {
            moveOk = false;
            for (var rows = 3; rows >= 0; rows--) {
                for (var columns = 0; columns < 4; columns++) {
                    var temp = rows + 1;
                    while (temp < 4 && $('#' + temp + columns).text() == '') {
                        temp++;
                    }
                    temp--;
                    while ($('#' + rows + columns).text() !== '' && $('#' + temp + columns).text() === '' && temp < 4) {
                        var actualPos = $('#' + rows + columns).text();
                        var newPos = $('#' + temp + columns).text(actualPos);
                        actualPos = $('#' + rows + columns).text('');
                        moveOk = true;
                    };
                };
            };
        };

        function mergeLeft() {
            mergeOk = false;
            for (var rows = 0; rows < 4; rows++) {
                for (var col = 0; col < 4; col++) {
                    var columns = col;
                    while ($('#' + rows + columns).text() == '' && columns < 4) {
                        columns++;
                    }

                    var nextColumns = columns + 1;
                    
                    while ($('#' + rows + nextColumns).text() == '' && nextColumns < 4) {
                        nextColumns++;
                    }
                    
                    var val1 = $('#' + rows + columns).text();
                    var val2 = $('#' + rows + nextColumns).text();

                    if (val1 && val1 === val2) {
                        var newValue = val1 * 2;
                        $('#' + rows + columns).text(newValue);
                        $('#' + rows + nextColumns).text('');
                        mergeOk = true;
                        score += newValue;
                        $('#newScore').text(score);
                    };
                };
            };
        };

        function mergeTop() {
            mergeOk = false;
            for (var columns = 0; columns < 4; columns++) {
                for (var row = 0; row < 4; row++) {
                    var rows = row;
                    while ($('#' + rows + columns).text() == '' && rows < 4) {
                        rows++;
                    }

                    var nextRows = rows + 1;

                    while ($('#' + nextRows + columns).text() == '' && nextRows < 4) {
                        nextRows++;
                    }

                    var val1 = $('#' + rows + columns).text();
                    var val2 = $('#' + nextRows + columns).text();

                    if (val1 && val1 === val2) {
                        var newValue = val1 * 2;
                        $('#' + rows + columns).text(newValue);
                        $('#' + nextRows + columns).text('');
                        mergeOk = true;
                        score += newValue;
                        $('#newScore').text(score);
                    };
                };
            };
        };

        function mergeRight() {
            mergeOk = false;
            for (var rows = 0; rows < 4; rows++) {
                for (var column = 3; column >= 0; column--) {
                    var columns = column;
                    while ($('#' + rows + columns).text() == '' && columns >= 0) {
                        columns--;
                    }

                    var nextColumns = columns - 1;

                    while ($('#' + rows + nextColumns).text() == '' && nextColumns >= 0) {
                        nextColumns--;
                    }

                    var val1 = $('#' + rows + columns).text();
                    var val2 = $('#' + rows + nextColumns).text();

                    if (val1 && val1 === val2) {
                        var newValue = val1 * 2;
                        $('#' + rows + columns).text(newValue);
                        $('#' + rows + nextColumns).text('');
                        mergeOk = true;
                        score += newValue;
                        $('#newScore').text(score);
                    };
                };
            };
        };

        function mergeDown() {
            mergeOk = false;
            for (var columns = 0; columns < 4; columns++) {
                for (var row = 3; row >= 0; row--) {
                    var rows = row;
                    while ($('#' + rows + columns).text() == '' && rows >= 0) {
                        rows--;
                    }

                    var nextRows = rows - 1;

                    while ($('#' + nextRows + columns).text() == '' && nextRows >= 0) {
                        nextRows--;
                    }

                    var val1 = $('#' + rows + columns).text();
                    var val2 = $('#' + nextRows + columns).text();

                    if (val1 && val1 === val2) {
                        var newValue = val1 * 2;
                        $('#' + rows + columns).text(newValue);
                        $('#' + nextRows + columns).text('');
                        mergeOk = true;
                        score += newValue;
                        $('#newScore').text(score);
                    };
                };
            };
        };

        function gameOver() {
            var endGame = false;
            for (var rows = 0; rows < 4; rows++) {
                for (columns = 0; columns < 4; columns++) {
                    var pos = $('#' + rows + columns).text();

                    if ((columns - 1) < 0) {
                        var left = $('#' + rows + (columns - 1)).text('1');
                    } else {
                        var left = $('#' + rows + (columns - 1)).text();
                    }
                    if ((rows - 1) < 0) {
                        var top = $('#' + (rows - 1) + columns).text('1');
                    } else {
                        var top = $('#' + (rows - 1) + columns).text();
                    }
                    if ((columns + 1) > 3) {
                        var right = $('#' + rows + (columns + 1)).text('1');
                    } else {
                        var right = $('#' + rows + (columns + 1)).text();
                    }
                    if ((rows + 1) > 3) {
                        var down = $('#' + (rows + 1) + columns).text('1');
                    } else {
                        var down = $('#' + (rows + 1) + columns).text();
                    }

                    if (pos != '' && left != '' && top != '' && right != '' && down != '') {
                        if (pos != left && pos != top && pos != right && pos != down) {
                            endGame = true;
                        } else {
                            return false;
                        }
                    } else {
                        return false;
                    }
                }
            }
            return endGame;
        }
    };
}(jQuery));