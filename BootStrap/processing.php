<?php
include('connection.php');
if ($_SERVER['REQUEST_METHOD'] == 'POST'){
$fname = $_POST['fname'];
$lname = $_POST['lname'];
$uname = $_POST['uname'];
$csection = $_POST['csection'];
$email = $_POST['email'];
$password = $_POST['password'];
//if values are not empty, proceed to store them in the database
if(!empty($fname) && !empty($lname) && !empty($uname) && !empty($csection) && !empty($email) && !empty($password)){
		mysqli_query($dbc, "INSERT INTO users(first_name, last_name, user_name, class_section, email, pw) 
		VALUES ('$fname', '$lname', '$uname', '$csection', '$email', '$password')");
		echo " row inserted, everything worked fine!";	
		}else{		
			echo "ERROR: you left some values blank!";	
		}
	}else{
	echo "<strong>Please complete the form...</strong>";
}
?>
