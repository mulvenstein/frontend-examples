$(document).ready(function() {
	$("a#home").click(function() {
		$(".active").toggleClass("active");
		$("#home").toggleClass("active");
		$("div.content").html(
			"<h1>This is the home page</h1>"+
			"<p>To see other content, click on the links at the top</p>"
		);
	});
	$("a#hardware").click(function() {
		$(".active").toggleClass("active");
		$("#hardware").toggleClass("active");
		$("div.content").html(
			"<h1>This is the hardware page</h1>"+
			"<p>We sell computers and stuff</p>"+
			"<p>We like Raspberry Pis</p>"
		);
	});
	$("a#software").click(function() {
		$(".active").toggleClass("active");
		$("#software").toggleClass("active");
		$("div.content").html(
			"<h1>This is the software page</h1>"+
			"<p>We have deals on Microsoft Office</p>"+
			"<p>We don't like Windows 10</p>"
		);
	});
	$("a#contact").click(function() {
		$(".active").toggleClass("active");
		$("#contact").toggleClass("active");
		$("div.content").html(
			"<h1>Contact Us</h1>"+
			"<p>(555) 555-5555</p>"+
			"<p>store@example.com</p>"
		);
	});
});
