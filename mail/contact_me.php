<?php
// Check for empty fields
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['message'])   ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   echo "No arguments Provided!";
   return false;
   }
   
$name = strip_tags(htmlspecialchars($_POST['name']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$message = strip_tags(htmlspecialchars($_POST['message']));
   
// Create the email and send the message
$to = 'aneicconcepciondeluruguay@gmail.com'; 
$email_subject = "Correo automático - JOREIC 2017:  $name";
$email_body = "Usted recibió un nuevo correo proveniente de su Sitio Web, JOREIC 2017.\n\n"."A continuación encontrará los detalles:\n\nName: $name\n\nEmail: $email_address\n\n\nMessage:\n$message";
$headers = "From: noresponder@joreic.com\n"; 
$headers .= "Reply-To: $email_address";   
mail($to,$email_subject,$email_body,$headers);
return true;         
?>
