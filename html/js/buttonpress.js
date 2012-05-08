$(document).ready(function() {
	$("#videofeed").hide();

	$('#showvideo').click(function() {
		$('div.showhide,#videofeed').toggle();
	});
});