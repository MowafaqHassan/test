$(function() {
    /* navbar scroll  */
    $(".navbar-nav .nav-item .nav-link").click(function() {
        $("html , body").animate({
                scrollTop: $("#" + $(this).data("value")).offset().top,
            },
            1000
        );
    });

    /* portfolio filter */
    $(".list").click(function() {
        const value = $(this).attr("data-filter");
        console.log(value);
        if (value == "All") {
            $(".project-imgs").show("1000");
        } else {
            $(".project-imgs")
                .not("." + value)
                .hide("1000");

            $(".project-imgs")
                .filter("." + value)
                .show("1000");
        }
    });
    $("a").click(function($e) {
        $e.preventDefault();
    });
    /*contact massage*/
    $(".Send-Message").click(function($e) {
        $e.preventDefault();
        if ($("#name").val() == "") {
            $(".validate-name").html("this field is required");
        }
    });
});