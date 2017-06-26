$(document).ready(function() {
    var span = $("span");
    var gonder = $(".gonder");
    gonder.hide();
    var error = $(".register-body h3");
    var counter = 0;
    error.css('opacity', 0);
    span.css('opacity', 0);
    var button = $("button");
    var input = $("input");
    input.click(function() {
        span.animate({
            opacity: 1,
            left: 20,
        });
    });
    span.click(function() {
        if(input.val() == "") {
            error.css('opacity', 1);
            error.addClass("flash animated");
            error.removeClass();
        } else {
            if(counter == 0) {
                $("body").animate({
                    backgroundColor: "#2D89CB",
                });
                $(".register-header").animate({
                    backgroundColor: "#2681C2",
                });
                $(".register-header h1").animate({
                    color: "#18647F",
                });
                $(".register-header h2").animate({
                    color: "#1C6193",
                });
                input.animate({
                    backgroundColor: "#287BB6",
                    borderBottomColor: "#2B82C1",
                });
                button.animate({
                    backgroundColor: "#287BB6",
                    borderBottomColor: "#2B82C1",
                });
                $(".register-body h2").animate({
                    color: "#194D72",
                });
                span.animate({
                    color: "#143D5B",
                });
                $(".register-body h2").addClass("bounceInDown animated");
                $(".register-body h2").text("E-Posta Adresi");
                $(".register-header h2").addClass("flash animated");
                $(".register-header h2").text("Asama 2/4");
                setTimeout(EfektKaldir, 1000);
                error.css('opacity', 0);
                error.removeClass();
                input.attr('name', 'email');
                input.attr('type', 'email');
                input.val("");
                counter++;
            } else if(counter == 1) {
                $("body").animate({
                    backgroundColor: "#CB892D",
                });
                $(".register-header").animate({
                    backgroundColor: "#C28126",
                });
                $(".register-header h1").animate({
                    color: "#7F6418",
                });
                $(".register-header h2").animate({
                    color: "#93611C",
                });
                input.animate({
                    backgroundColor: "#B67B28",
                    borderBottomColor: "#C1822B",
                });
                button.animate({
                    backgroundColor: "#B67B28",
                    borderBottomColor: "#C1822B",
                });
                $(".register-body h2").animate({
                    color: "#724D19",
                });
                span.animate({
                    color: "#5B3D14",
                });
                $(".register-body h2").addClass("bounceInDown animated");
                $(".register-body h2").text("Şifre");
                $(".register-header h2").addClass("flash animated");
                $(".register-header h2").text("Asama 3/4");
                setTimeout(EfektKaldir, 1000);
                error.css('opacity', 0);
                error.removeClass();
                input.attr('name', 'password');
                input.attr('type', 'password');
                input.val("");
                counter++;
            } else if(counter == 2) {
                $("body").animate({
                    backgroundColor: "#D81B60",
                });
                $(".register-header").animate({
                    backgroundColor: "#C2185B",
                });
                $(".register-header h1").animate({
                    color: "#880E4F",
                });
                $(".register-header h2").animate({
                    color: "#880E4F",
                });
                input.animate({
                    backgroundColor: "#C2185B",
                    borderBottomColor: "#EC407A",
                });
                button.animate({
                    backgroundColor: "#C2185B",
                    borderBottomColor: "#EC407A",
                });
                $(".register-body h2").animate({
                    color: "#880E4F",
                });
                span.animate({
                    color: "#F48FB1",
                });
                $(".register-body h2").addClass("bounceInDown animated");
                $(".register-body h2").text("Tekrar Şifre");
                $(".register-header h2").addClass("flash animated");
                $(".register-header h2").text("Asama 4/4");
                setTimeout(EfektKaldir, 1000);
                error.css('opacity', 0);
                error.removeClass();
                input.attr('name', 'tpassword');
                input.attr('type', 'password');
                input.val("");
                counter++;
            } else {
                $("body").animate({
                    backgroundColor: "#D81B60",
                });
                $(".register-header").animate({
                    backgroundColor: "#C2185B",
                });
                $(".register-header h1").animate({
                    color: "#880E4F",
                });
                $(".register-header h2").animate({
                    color: "#880E4F",
                });
                input.hide();
                error.hide();
                button.hide();
                span.hide();
                gonder.show();
                gonder.attr('type', 'submit');
                gonder.val("Gönder");
                gonder.addClass("flash animated");
                $(".register-body h2").hide();
                $(".register-header h2").addClass("flash animated");
                $(".register-header h2").text("Formu Bitir!");
                setTimeout(EfektKaldir, 1000);
                error.css('opacity', 0);
                error.removeClass();
            }
        }
    });
    span.blur(function() {
        $("body").animate({
            backgroundColor: "#28B67B",
        });
    });
    function EfektKaldir() {
        $(".register-header h2").removeClass();
        $(".register-body h2").removeClass();
    }
});