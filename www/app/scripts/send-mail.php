<?php
    header("Location: /");

    $to  = "andrei-parfenkov@mail.ru";

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
    $headers .= "From: p-f.by <notifications@p-f.by> \r\n";

    mail($to, $subject, $message, $headers);