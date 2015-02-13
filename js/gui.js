/**
 * Created by a.l.parf on 13.02.2015.
 */
function main() {
    resizeWin();
    load('pages/About.html');
    $(window).resize( function() {
        resizeWin();
    });
}

function select(item) {
    $(".menu-item").removeClass("sel");
    $("#" + item).addClass("sel");
}

function resizeWin() {
    var winWidth = window.innerWidth;
    var logoWidth = 298;
    if (!(winWidth < 600)) {
        var logoWidth = winWidth - 302;
    }
    $("div.logo").css('width', logoWidth);
}
