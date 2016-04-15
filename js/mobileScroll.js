var name = ".switcher";
var menuYloc = null;

$(document).ready(function () {
    menuYloc = parseInt($(name).css("top").substring(0, $(name).css("top").indexOf("px")));
    $(window).scroll(function () {
        var offset = menuYloc + $(document).scrollTop() + "px";
        $(name).animate({ top: offset }, { duration: 0, queue: false });
    });
   /** $(".switcher").click(function () {
        setTimeout(function() {
        $(document.body).scrollTop(0);
    }, 400);

    });
    **/
});