// Makes Ascertain_ animate itself
function toggleAscertain() {
    $('#toggleFaderAscertain').fadeToggle(400, 'swing', function() {
        toggleAscertain();
    });
}
function mainPageLoaded() {
    toggleAscertain();
    console.log($('#menuBoxDivideLine').position().top);
}

// Defines the Sticky NavBar
function pageScroll() {
    if (window.pageYOffset >= 375) {

        $('#blankSpacer').css('height', '424');
        $('#menuBoxDiv').css('position', 'fixed');
        $('#menuBoxDiv').css('top', '0px');
        $('#menuBoxDivideLine').css('position', 'fixed');
        $('#menuBoxDivideLine').css('top', '49px');
        $('#menuBoxDivideLine').css('opacity', '1.0');

        $('#about').css('position', 'static');
        $('#projects').css('position', 'static');
        $('#social').css('position', 'static');

        if (window.pageYOffset >= $('#projects').position().top) {

            if (window.pageYOffset >= $('#projects').position().bottom) {


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

                if ($.browser.chrome) {
                    $('#menuBoxDiv').css('background', 'rgba(38,181,191,.85)');
                }
                else if ($.browser.webkit) {
                    $('#menuBoxDiv').css('background', 'rgba(38,181,191,.33)');
                }
                else {
                    $('#menuBoxDiv').css('background', 'rgba(38,181,191,.85)');
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

        $('#blankSpacer').css('height', '375');
        $('#menuBoxDiv').css('position', 'static');
        $('#menuBoxDiv').css('top', '375px');
        $('#menuBoxDiv').css('background', 'rgba(38,181,191,.7)');
        //$('#menuBoxDiv').css('background', '#26B5BF');

        $('#menuBoxDivideLine').css('position', 'static');
        $('#menuBoxDivideLine').css('opacity', '0.0');

        $('#about').css('position', 'relative');
        $('#about').css('top', '-1px;');
        $('#projects').css('position', 'relative');
        $('#projects').css('top', '-1px;');
        $('#social').css('position', 'relative');
        $('#social').css('top', '-1px;');

        $('.navBullet').css('color', '#F5F5F5');

        $('.navButton').hover(function() {
            $(this).css('color', '#F5F5F5');
        });
        $('.navButton').mouseout(function() {
            $(this).css('color', '#080808');
        });

    }

}