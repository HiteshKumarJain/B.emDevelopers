<?php
$name = $_post['name'];
$visitor_email = $_post['email'];
$number = $_post['number'];
$message = $_post['message'];

$email_form = 'hiteshbhandarihb98@gmail.com';

$email_subject = 'New form submission';

$email_body = "User Name: $name.\n ";
                "User Email: $visitor_email.\n";
                "number: $number.\n";
                "User message: $message.\n";

// $to = 'bemdev5@gmail.com';
$to = 'hiteshkumarjainhkj@gmail.com';

$headers = "from: $email_form \r\n";

$headers .="Reply-To: $visitor_email \r\n";

mail($to,$email_subject,$email_body,$headers)

header("location: contact.html")
?>