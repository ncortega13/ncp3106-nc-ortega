<?php
$servername = "localhost";
$db_username = "root";
$db_password = "";

try {
  $conn = new PDO("mysql:host=$servername;dbname=registrants", $db_username, $db_password);
  // set the PDO error mode to exception
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
  echo "Connected successfully";
} catch(PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

?>