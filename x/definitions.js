// Makes Ascertain_ animate itself
function toggleAscertain() {
    $('#toggleFaderAscertain').fadeToggle(400, 'swing', function() {
        toggleAscertain();
    });
}
function mainPageLoaded() {
    toggleAscertain();
}

// Defines the Sticky NavBar
function pageScroll() {
    if (window.pageYOffset >= 375) {

        $('#menuBoxDiv').css('position', 'fixed');
        $('#menuBoxDiv').css('top', '0px');

        if (window.pageYOffset >= 1600) {

            if (window.pageYOffset >= 2350) {

                $('#menuBoxDivideLine').css('left', '0px');
                $('#menuBoxDivideLine').css('width', '100%');

                if ($.browser.chrome) {
                    $('#menuBoxDiv').css('background', 'rgba(245,245,245,.85)');
                }
                else if ($.browser.webkit) {
                    $('#menuBoxDiv').css('background', 'rgba(245,245,245,.33)');
                }
                else {
                    $('#menuBoxDiv').css('background', 'rgba(245,245,245,.85)');
                }

                $('.navBullet').css('color', '#080808');

                $('.navButton').hover(function() {
                    $(this).css('color', '#008B8B');
                });
                $('.navButton').mouseout(function() {
                    $(this).css('color', '#080808');
                });

            }

            else {

                $('#menuBoxDivideLine').css('left', '0px');
                $('#menuBoxDivideLine').css('width', '100%');

                if ($.browser.chrome) {
                    $('#menuBoxDiv').css('background', 'rgba(0,140,140,.85)');
                }
                else if ($.browser.webkit) {
                    $('#menuBoxDiv').css('background', 'rgba(0,140,140,.33)');
                }
                else {
                    $('#menuBoxDiv').css('background', 'rgba(0,140,140,.85)');
                }

                $('.navBullet').css('color', '#F5F5F5');

                $('.navButton').hover(function() {
                    $(this).css('color', '#F5F5F5');
                });
                $('.navButton').mouseout(function() {
                    $(this).css('color', '#080808');
                });

            }

        }

        else {

            $('#menuBoxDivideLine').css('left', '0px');
            $('#menuBoxDivideLine').css('width', '100%');

            if ($.browser.chrome) {
                $('#menuBoxDiv').css('background', 'rgba(245,245,245,.85)');
            }
            else if ($.browser.webkit) {
                $('#menuBoxDiv').css('background', 'rgba(245,245,245,.33)');
            }
            else {
                $('#menuBoxDiv').css('background', 'rgba(245,245,245,.85)');
            }

            $('.navBullet').css('color', '#080808');

            $('.navButton').hover(function() {
                $(this).css('color', '#008B8B');
            });
            $('.navButton').mouseout(function() {
                $(this).css('color', '#080808');
            });

        }

    }
    else {

        $('#menuBoxDiv').css('position', 'absolute');
        $('#menuBoxDiv').css('top', '375px');
        $('#menuBoxDiv').css('background', 'rgba(85,133,171,.8)');
        //$('#menuBoxDiv').css('background', '#008B8B');

        $('#menuBoxDivideLine').css('left', '50%');
        $('#menuBoxDivideLine').css('width', '0px');

        $('.navBullet').css('color', '#F5F5F5');

        $('.navButton').hover(function() {
            $(this).css('color', '#F5F5F5');
        });
        $('.navButton').mouseout(function() {
            $(this).css('color', '#080808');
        });

    }

}