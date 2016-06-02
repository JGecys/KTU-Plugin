$(function(){
	
	var map = {
		"P175B602": "2015P6140721",//databases
		"P170B400": "2015P6140451",//algorithms
		"P175B304": "2015P6140671",//operating systems
		"P175B314": "2015P6140691" //software engineering
		}
	
	$(".icon-info-sign.icon-red").removeClass("icon-red").addClass("icon-black");
	
	var userid = getUrlParameter('p_stud_id');
	var rows = $("tbody tr");
	console.log(rows);
	for(var i = 0; i < rows.length; i++){
		var innerText = rows[i].cells[0].innerText;
		if(map[innerText] != null){
			console.log("found match for module ", innerText);
			//rows[i].cells[5].children[0].removeClass("icon-red");
			//rows[i].cells[5].children[0].addClass("icon-black");
			rows[i].cells[5].children[0].setAttribute("onclick", "infivert("+userid+",'"+map[innerText]+"');");
		}else {
			console.log("did not found match for module ", innerText);
		}
	}
	
	
	function getUrlParameter(sParam) {
		var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
});