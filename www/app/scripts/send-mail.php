<?php
    header("Location: /");

    $to  = "andrei-parfenkov@yandex.ru";

    $subject = "p-f.by | Новая заявка на заказ!";

    $message = '<html>
            <head>
                <title>Новая заявка на заказ!</title>
            </head>
            <body>
                <p>Номер телефона: '. $_POST['phone'] .'</p>
                <p>Описание: '. $_POST['deals'] .'</p>
            </body>
        </html>';

    $headers  = "Content-type: text/html; charset=utf-8 \r\n";
    $headers .= "From: parfenkov-fermer.by <notifications@parfenkov-fermer.by> \r\n";

    mail($to, $subject, $message, $headers);