$(function() {
    $(".chGit").on("mouseover", function() {
        $(".chGit").attr("src", "./../images/orangeGithub.png");
    })
    $(".chGit").on("mouseout", function() {
        $(".chGit").attr("src", "./../images/whiteGithub.png");
    })
})