$(document).ready(function(){
	$("#hide").click(function() {
		$("#p1").hide();
	});
	$("#show").click(function() {
		$("#p1").show();
	});
	$("#toggle").click(function() {
		$("#p2").toggle();
	});
	$("#fade").click(function() {
		$("#p3").fadeToggle(2000);
	});
	$("#slide").click(function() {
		$("#p4").slideToggle(2000);
	});
});
