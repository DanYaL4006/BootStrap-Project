$(document).ready(function() {
    $(document).scroll(function() {
        scrollBody = $(document).scrollTop();
        if (scrollBody > 50) {
            $(".org-navbar").addClass("nav-fix");
        } else {
            $(".org-navbar").removeClass("nav-fix");
        }
    });
    $(document).scroll(function() {
        scrollBody = $(document).scrollTop();
        if (scrollBody > 50) {
            $(".responsive-navbar").addClass("nav-fix");
        } else {
            $(".responsive-navbar").removeClass("nav-fix");
        }
    });
    // fixed navbar on scroll
    $(".all").click(function () {
        $(".all").css({
            backgroundColor: "#5cb874",
            color: "#fff"
        });
        $(".web").css({
            backgroundColor: "",
            color: ""
        });
        $(".cardd").css({
            backgroundColor: "",
            color: ""
        });
        $(".app").css({
            backgroundColor: "",
            color: ""
        });
        $(".img-port1").attr("src" , "assets/Images/portfolio-1.jpg");
        $(".img-port2").attr("src" , "assets/Images/portfolio-2.jpg");
        $(".img-port3").attr("src" , "assets/Images/portfolio-3.jpg");
        $(".img-port4").show(500)
        $(".img-port5").show(500)
        $(".img-port6").show(500)
        $(".img-port7").show(500)
        $(".img-port8").show(500)
        $(".img-port9").show(500)
    });
    $(".app").click(function () {
        $(".app").css({
            backgroundColor: "#5cb874",
            color: "#fff"
        });
        $(".all").css({
            backgroundColor: "#fff",
            color: "#444444"
        });
        $(".web").css({
            backgroundColor: "",
            color: ""
        });
        $(".cardd").css({
            backgroundColor: "",
            color: ""
        });
        $(".img-port2").attr("src" , "assets/Images/portfolio-3.jpg");
        $(".img-port3").attr("src" , "assets/Images/portfolio-6.jpg");
        $(".img-port4").hide(500)
        $(".img-port5").hide(500)
        $(".img-port6").hide(500)
        $(".img-port7").hide(500)
        $(".img-port8").hide(500)
        $(".img-port9").hide(500)
    });
    $(".cardd").click(function () {
        $(".cardd").css({
            backgroundColor: "#5cb874",
            color: "#fff"
        });
        $(".all").css({
            backgroundColor: "#fff",
            color: "#444444"
        });
        $(".web").css({
            backgroundColor: "",
            color: ""
        });
        $(".app").css({
            backgroundColor: "",
            color: ""
        });
        $(".img-port1").attr("src" , "assets/Images/portfolio-4.jpg");
        $(".img-port2").attr("src" , "assets/Images/portfolio-7.jpg");
        $(".img-port3").attr("src" , "assets/Images/portfolio-8.jpg");
        $(".img-port4").hide(500)
        $(".img-port5").hide(500)
        $(".img-port6").hide(500)
        $(".img-port7").hide(500)
        $(".img-port8").hide(500)
        $(".img-port9").hide(500)
    });
    $(".web").click(function () {
        $(".web").css({
            backgroundColor: "#5cb874",
            color: "#fff"
        });
        $(".all").css({
            backgroundColor: "#fff",
            color: "#444444"
        });
        $(".cardd").css({
            backgroundColor: "",
            color: ""
        });
        $(".app").css({
            backgroundColor: "",
            color: ""
        });
        $(".img-port1").attr("src" , "assets/Images/portfolio-2.jpg");
        $(".img-port2").attr("src" , "assets/Images/portfolio-5.jpg");
        $(".img-port3").attr("src" , "assets/Images/portfolio-9.jpg");
        $(".img-port4").hide(500)
        $(".img-port5").hide(500)
        $(".img-port6").hide(500)
        $(".img-port7").hide(500)
        $(".img-port8").hide(500)
        $(".img-port9").hide(500)
    });
});