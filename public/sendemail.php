<?php
// the message
$name = htmlspecialchars($_GET["name"]);
$msg = htmlspecialchars($_GET["content"]);
$email = htmlspecialchars($_GET["email"]);

// use wordwrap() if lines are longer than 70 characters
$msg = wordwrap($msg,70);
echo $name;
echo $msg;
echo $email;
// send email
mail("adirdayan@gmail.com","Contact From Website", $email . ' ' . $name . '<br> ' . $msg);
?>
