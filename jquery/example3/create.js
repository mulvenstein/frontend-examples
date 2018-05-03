$(document).ready(function() {
	$("#add1").click(function() {
		$(".original").before("<p>I was prepended</p>");
	});
	$("#add2").click(function() {
		$(".original").after("<p>I was appended</p>");
	});
	$("#remove").click(function() {
		$(".content").empty();
		$(".content").html(
			"<p class=\"original\">I am the original paragraph</p>"
		);
	});
});
