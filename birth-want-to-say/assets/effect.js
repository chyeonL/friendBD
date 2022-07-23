$(window).load(function () {
    $('.loading').fadeOut('fast');
    $('.container').fadeIn('fast');
});

$('document').ready(function () {
    var vw;
    $(window).resize(function () {
        vw = $(window).width() / 2;
        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b11').animate({ top: 240, left: vw - 350 }, 300);
        $('#b22').animate({ top: 240, left: vw - 250 }, 300);
        $('#b33').animate({ top: 240, left: vw - 150 }, 300);
        $('#b44').animate({ top: 240, left: vw - 50 }, 300);
        $('#b55').animate({ top: 240, left: vw + 50 }, 300);
        $('#b66').animate({ top: 240, left: vw + 150 }, 300);
        $('#b77').animate({ top: 240, left: vw + 250 }, 300);
    });

    
    $('#turn_on').click(function () {
        $('#bulb_yellow').addClass('bulb-glow-yellow');
        $('#bulb_red').addClass('bulb-glow-red');
        $('#bulb_blue').addClass('bulb-glow-blue');
        $('#bulb_green').addClass('bulb-glow-green');
        $('#bulb_pink').addClass('bulb-glow-pink');
        $('#bulb_orange').addClass('bulb-glow-orange');
        $('body').addClass('peach');
        $('body').addClass('t')
        $(this).fadeOut('fast')
        // $('#turnON').addClass('turnON')
        // $('#turnON').css('opacity','0.3')
        $(this).delay(1000)
            // $('#turnON').css('opacity','0.6')
            $(this)
                .promise()
                .done(function () {
                    // $('#turnON').css('opacity','1')
                    $('#play').fadeIn('fast');
                });
    });

    
    $('#play').click(function () {
        var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
        $('#bulb_red').addClass('bulb-glow-red-after');
        $('#bulb_blue').addClass('bulb-glow-blue-after');
        $('#bulb_green').addClass('bulb-glow-green-after');
        $('#bulb_pink').addClass('bulb-glow-pink-after');
        $('#bulb_orange').addClass('bulb-glow-orange-after');
        $('body').css('backgroud-color', '#FFF');
        $('body').addClass('peach-after');
        $('.lyrics').css('display','block')
        $('.lyrics').addClass('ll')
        $(this).fadeOut('fast')
        $(this)
        .delay(9000)
        .promise()
        .done(function () {
            $('#bannar_coming').fadeIn('fast');
        });
    });

    $('#bannar_coming').click(function () {
        $('.bannar').addClass('bannar-come');
        $(this)
            .fadeOut('fast')
            .delay(5000)
            .promise()
            .done(function () {
                $('#balloons_flying').fadeIn('fast');
            });
    });

    // 7个气球
    function loopOne() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b1').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopOne();
            }
        );
    }
    function loopTwo() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b2').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopTwo();
            }
        );
    }
    function loopThree() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b3').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopThree();
            }
        );
    }
    function loopFour() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b4').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopFour();
            }
        );
    }
    function loopFive() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b5').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopFive();
            }
        );
    }

    function loopSix() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b6').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopSix();
            }
        );
    }
    function loopSeven() {
        var randleft = 1000 * Math.random();
        var randtop = 500 * Math.random();
        $('#b7').animate(
            { left: randleft, bottom: randtop },
            10000,
            function () {
                loopSeven();
            }
        );
    }

    $('#balloons_flying').click(function () {
        $('.balloon-border').animate({ top: -500 }, 8000);
        $('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
        $('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
        loopOne();
        loopTwo();
        loopThree();
        loopFour();
        loopFive();
        loopSix();
        loopSeven();
        $(this)
            .fadeOut('fast')
            .delay(6000)
            .promise()
            .done(function () {
                $('#cake_fadein').fadeIn('fast');
            });
    });

    $('#cake_fadein').click(function () {
        $('body').removeClass('t')
        $('.lyrics').css('display','none')
        $('.cake').fadeIn('fast');
        $(this)
            .fadeOut('fast')
            .delay(3000)
            .promise()
            .done(function () {
                $('#light_candle').fadeIn('fast');
            });
    });

    $('#light_candle').click(function () {
        $('.fuego').fadeIn('fast');
        $(this)
            .fadeOut('fast')
            .promise()
            .done(function () {
                $('#wish_message').fadeIn(5000);
            });
    });

    $('#wish_message').click(function () {
        vw = $(window).width() / 2;

        $('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
        $('#b1').attr('id', 'b11');
        $('#b2').attr('id', 'b22');
        $('#b3').attr('id', 'b33');
        $('#b4').attr('id', 'b44');
        $('#b5').attr('id', 'b55');
        $('#b6').attr('id', 'b66');
        $('#b7').attr('id', 'b77');
        $('#b11').animate({ top: 240, left: vw - 350 }, 500);
        $('#b22').animate({ top: 240, left: vw - 250 }, 500);
        $('#b33').animate({ top: 240, left: vw - 150 }, 500);
        $('#b44').animate({ top: 240, left: vw - 50 }, 500);
        $('#b55').animate({ top: 240, left: vw + 50 }, 500);
        $('#b66').animate({ top: 240, left: vw + 150 }, 500);
        $('#b77').animate({ top: 240, left: vw + 250 }, 500);
        $('.balloons').css('opacity', '0.9');
        $('.balloons h2').fadeIn(2000);
        $(this)
            .fadeOut('fast')
            .delay(2000)
            .promise()
            .done(function () {
                $('#story').fadeIn('fast');
            });
    });

    $('#story').click(function () {
        $(this).fadeOut('fast');
        $('.cake')
            .fadeOut('fast')
            .promise()
            .done(function () {
                $('.message').fadeIn('fast');
            });

        let i;

        function msgLoop(i) {
            $('p:nth-child(' + i + ')')
                .fadeOut('slow')
                .delay(3000)
                .promise()
                .done(function () {
                    i = i + 1;
                    $('p:nth-child(' + i + ')')
                        .fadeIn('slow')
                        .delay(3000);
                    if (i == 50) {
                        $('p:nth-child(49)')
                            .fadeOut('fast')
                            .promise()
                            .done(function () {
                                $('.cake').fadeIn('fast');
								$('.love_text').css('display', 'block');
                            });
                    } else {
                        msgLoop(i);
                    }
                });
            // body...
        }

        msgLoop(0);
    });
});

//alert('hello');
