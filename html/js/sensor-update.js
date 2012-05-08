$("document").ready(function() {
	var sense=self.setInterval("getSensorStates()", 1000);
	var digsense=self.setInterval("getDigSensorStates()", 1000);
	$('#ridedirty').bind('click', runSimpleProgram);
});

function getSensorStates() {
	$("#analogdata").load("/cgi-bin/getSensorStates.cgi");
}

function getDigSensorStates() {
	$("#digitaldata").load("/cgi-bin/getDigSensorStates.cgi");
}

function runSimpleProgram() {
	$.ajax({
  		type: "GET",
  		url: "/cgi-bin/ridin.cgi"
	});
}
