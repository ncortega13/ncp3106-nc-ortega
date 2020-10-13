<?php
$lastname = $_POST['lname'];
$firstname = $_POST['fname'];
$middlename = $_POST['midname'];
$studentnum = $_POST['studnum'];
$yearlev = $_POST['year'];
$mobilenum = $_POST['mobnum'];
$birth = $_POST['bday'];
$username = $_POST['user'];
$emailAdd = $_POST['email'];
$passwordOrig = $_POST['pass'];
$passwordRepeat = $_POST['conpass'];

if ($passwordOrig == $passwordRepeat) {
	
 require 'openDB.php';

	$db = mysqli_connect("localhost","root","","registrants");

		$sql_u = "SELECT username FROM user WHERE username = '$username'";
		$res_u = mysqli_query($db, $sql_u) or die (mysqli_error($db));

		if (mysqli_num_rows($res_u) > 0) {
			echo '<script>
  				alert("The username has been taken. Try another one.");
					</script>';
				echo '<script>
				window.history.go(-1);
					</script>';
				}
		else{
			$sql = "INSERT INTO user (last_name, first_name, middle_initial, student_number, year_level, mobile_number, birth_date, ue_email, username, password) VALUES (?,?,?,?,?,?,?,?,?,?)";
			$conn->prepare($sql)->execute([$lastname,$firstname,$middlename,$studentnum,$yearlev,$mobilenum,$birth,$emailAdd,$username,$passwordOrig]);
    		echo '<script>
            	alert("Congratulations, you are now registered!");
                	</script>';
                echo '<script>
				window.history.go(-1);
					</script>';
			exit();
		}
}
	else {
		echo '<script>
  				alert("Passwrod Mismatch!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}
?>