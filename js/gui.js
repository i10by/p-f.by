/**
 * Created by a.l.parf on 13.02.2015.
 */
function main() {
    load('pages/About-Us.html');
}

function select(item) {
    $(".menu-item").removeClass("sel");
    $("#" + item).addClass("sel");
}
