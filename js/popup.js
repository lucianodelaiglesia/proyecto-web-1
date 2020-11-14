$(document).ready(function () {
    $("#hosp1").click(function () {
        if ($(".popup2").is(":visible")) {
            $(".popup2").hide();
        }
        if ($(".popup3").is(":visible")) {
            $(".popup3").hide();
        }
        $(".popup1").fadeIn();
        $("#oscurecido").addClass("oscurecer");
        $("header").addClass("oscurecer");
        $("footer").addClass("oscurecer");
    });
    $("#hosp2").click(function () {
        if ($(".popup1").is(":visible")) {
            $(".popup1").hide();
        }
        if ($(".popup3").is(":visible")) {
            $(".popup3").hide();
        }
        $(".popup2").fadeIn();
        $("#oscurecido").addClass("oscurecer");
        $("header").addClass("oscurecer");
        $("footer").addClass("oscurecer");
    });
    $("#hosp3").click(function () {
        if ($(".popup1").is(":visible")) {
            $(".popup1").hide();
        }
        if ($(".popup2").is(":visible")) {
            $(".popup2").hide();
        }
        $(".popup3").fadeIn();
        $("#oscurecido").addClass("oscurecer");
        $("header").addClass("oscurecer");
        $("footer").addClass("oscurecer");
    });
    $(".cerrar").click(function () {
        if ($(".popup1").is(":visible")) {
            $(".popup1").fadeOut();
        }
        if ($(".popup2").is(":visible")) {
            $(".popup2").fadeOut();
        }
        if ($(".popup3").is(":visible")) {
            $(".popup3").fadeOut();
        }
        $("#oscurecido").removeClass("oscurecer");
        $("header").removeClass("oscurecer");
        $("footer").removeClass("oscurecer");
    });
});