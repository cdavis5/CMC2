<?php
//define variables
$hostname = "localhost";
$username = "root";
$password = "";
$dbname = "prisoners";

//making the connection to mysql
$dbc = mysqli_connect($hostname, $username, $password, $dbname) OR die("could not connect to database, ERROR: ".mysqli_connect_error());

echo "You are connected to ".$dbname." Database";
?>
