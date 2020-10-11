<?php

$lastname = $_POST['lname'];
$firstname = $_POST['fname'];
$middlename = $_POST['MI'];
$studentnum = $_POST['studnum'];
$yearlev = $_POST['year'];
$mobilenum = $_POST['mobnum'];
$birth = $_POST['bday'];
$username = $_POST['user'];
$emailAdd = $_POST['email'];
$passwordOrig = $_POST['pass'];
$passwordRepeat = $_POST['conpass'];


if ($passwordOrig == $passwordRepeat ) {
	
		insertRecord($lastname,$firstname,$middlename,$studentnum,$yearlev,$mobilenum,$birth,$username,$emailAdd,$passwordOrig);   
	}
	else {
		echo '<script>
  				alert("Passwrod Mismatch!");
					</script>';

		echo '<script>
				window.history.go(-1);
					</script>';
		}






function insertRecord($lastname,$firstname,$middlename,$studentnum,$yearlev,$mobilenum,$birth,$username,$emailAdd,$passwordOrig) {
 try {
 require 'openDB.php';
     
  $sql = "INSERT INTO user (last_name,first_name,middle_initial,student_number,year_level,mobile_number,birth_date,ue_email,username,password) VALUES (?,?,?,?,?,?,?,?,?,?)";
     
  // use exec() because no results are returned 
     $conn->prepare($sql)->execute ([$lastname,$firstname,$middlename,$studentnum,$yearlev,$mobilenum,$birth,$username,$emailAdd,$passwordOrig]);


  echo '<script>

  				alert("Congratulations, you are now registered!");
				  			header("Location:NCP3106-NC-ORTEGA/myBionote.html");
					</script>';
} catch(PDOException $e) {
  echo $sql . "<br>" . $e->getMessage();
}

$conn = null;
}

?>