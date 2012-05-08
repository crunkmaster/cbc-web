
$(document).keydown(function (e) {
  var keyCode = e.keyCode || e.which,
  arrow = {left: 37, up: 38, right: 39, down: 40 }, $status = $('#status');

	switch (keyCode) {
	case arrow.left:
		$status.html('left!');
		$status.css({"color": "#5cc00e"});
		$.ajax({
	  		type: "GET",
	  		url: "/cgi-bin/left.cgi"
		});
	break;
	case arrow.up:
		$status.html('up!');
		$status.css({"color": "#FE57A1"});
		$.ajax({
	  		type: "GET",
	  		url: "/cgi-bin/up.cgi"
		});
	break;
	case arrow.right:
		$status.html('right!');
		$status.css({"color": "#0099b5"});
		$.ajax({
	  		type: "GET",
	  		url: "/cgi-bin/right.cgi"
		});
	break;
	case arrow.down:
		$status.html('down!');
		$status.css({"color": "#e9651b"});
		$.ajax({
	  		type: "GET",
	  		url: "/cgi-bin/down.cgi"
		});
	break;
	case 80: //the 'p' key
		$status.html('staying fly')
		$status.css({"color": "#fcee2a"})
		$.ajax({
			type: "GET",
			url: "/cgi-bin/park.cgi"
		});
	break;
	case 89: //the 'y' key
		$status.html('trying to catch me')
		$status.css({"color": "#b21efc"})
		$.ajax({
			type: "GET",
			url: "/cgi-bin/ridin.cgi"
		});
	break;
	}
});