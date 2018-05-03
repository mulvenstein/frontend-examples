$(document).ready(function() {
	// On click to the button with id="btnSubmit"
	$("#btnSubmit").click(function() {
		var uname = $("#username").val(); // get username from username box
		var pwd = $("#password").val(); // get password from password box
		authenticate(uname, pwd); // validate the credentials
	});

	// Performs the post request
	function authenticate(uname, pwd) {
		// jQuery post takes 3 parameters
		// 1. The server-side function you want to handle the POST
		// 2. The data you want to send via the POST request
		// 3. The callback function that runs after completion of request
		$.post("validate.php",
		{
			user: "hello",
			pass: "hi"
		},
		function(data, status) {
			if (data=="success") {
				window.location.replace("success.html");
			} else {
				$("#message").html("Incorrect email or password");
				$("#password").val("");
			}
		});
	} 
});
