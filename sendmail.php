<?php
// Check if form is submitted
if(isset($_POST['submit'])) {

  // Get form data
  $name = $_POST['name'];
  $email = $_POST['email'];
  $subject = $_POST['subject'];
  $message = $_POST['message'];

  // Email content preparation
  $to = "nandaaritra@gmail.com"; // Replace with your email address
  $body = "Name: $name \nEmail: $email \nSubject: $subject \nMessage: $message";
  $headers = "From: $email";

  // Send email using PHP mail function
  if (mail($to, $subject, $body, $headers)) {
    echo "Email sent successfully!";
  } else {
    echo "Error sending email.";
  }
}
?>
