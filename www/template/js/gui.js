$('#send-mail').on("submit", function() {
    $.post(
        "/app/scripts/send-mail.php",
        {
            phone: $("#bid-phone").val(),
            deals: $("#bid-deals").val()
        },
        send_mail_end
    );

    return false;
});

function send_mail_end(res) {
    $('#send-mail-success').fadeIn(50);
    $('#send-mail-content').fadeOut(50);
}

$("#zak-ag").on("click", function() {
    $('#send-mail-success').fadeOut(50);
    $('#send-mail-content').fadeIn(50);

    $("#bid-phone").val("");
    $("#bid-deals").val("");

    $('#bid-phone').focus();
});