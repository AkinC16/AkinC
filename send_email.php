<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $to_email = "akin.c7274@gmail.com";
    $from_email = $_POST["email"];
    $message = $_POST["message"];

    $subject = "Website Contact Form Submission";
    $headers = "From: $from_email\r\n";
    $headers .= "Reply-To: $from_email\r\n";
    $headers .= "Content-Type: text/html; charset=UTF-8\r\n";

    if (mail($to_email, $subject, $message, $headers)) {
        echo "success";
    } else {
        echo "error";
    }
}
?>
