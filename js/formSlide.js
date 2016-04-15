$(document).ready(function () {
    $("#first").hide();
    $("#second").hide();

    $("#logme").click(function () {
        $("#second").slideUp(0, function () {
            $("#first").toggle();
        });
    });

    $("#register").click(function () {
        $("#first").slideUp(0, function () {
            $("#second").slideDown(500);
        });
    });

    $("#cancel").click(function () {
        $("#second").slideUp(0, function () {
            $("#first").slideDown(500);
        });
    });

    $('.slider-revolution').click(function () {
        $("#first").fadeOut(300);
        $("#second").fadeOut(300);
    });
    $('.page-header-bottom').click(function () {
        $("#first").fadeOut(300);
        $("#second").fadeOut(300);
    });
});

