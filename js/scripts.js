$(document).ready(function() {
	$("#form").submit(function(event) {
		event.preventDefault();

		var email = $("#email").val();

		alert(email + " " + "your subscription has been received.");

	});
});