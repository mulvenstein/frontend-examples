<?php
	$postdata = file_get_contents("php://input");
	$request = json_decode($postdata);
	$username = $request->user;
	$password = $request->pass;
	if ($username=="derrick" && $password=="hello123") {
		echo "ok";
	} else {
		echo "not okay";
	}
?>
