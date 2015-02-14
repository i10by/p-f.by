/**
 * Created by a.l.parf on 13.02.2015.
 */
function load(page) {
    var ABOUT = "pages/About-Us.html";
    var PRICE = "pages/Price.html";
    var FEED_BACK = "pages/Feed-Back.html";
    switch (page) {
        case ABOUT : {
            loadPage(page);
            break;
        }
        case PRICE : {
            loadPage(page);
            break;
        }
        case FEED_BACK : {
            loadPage(page);
            break;
        }
        default :{
            alert("ERROR")
        }
    }
}

function loadPage(page) {
    $.post( page , function ( data ) {
        $("#body").html(data);
    });
}
