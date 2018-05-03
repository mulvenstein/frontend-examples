<?php
	$user = $_POST["user"];
	$pass = $_POST["pass"];
	if ($user=="derrick" && $pass=="hello123") {
		echo "success";
	} else {
		echo "failed";
	}
?>
