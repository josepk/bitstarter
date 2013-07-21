function requestAJAX(query, elid)
	{ 
	var req = null; 
	document.getElementById(elid).innerHTML = "Started...";
	if (window.XMLHttpRequest)
		{
		req = new XMLHttpRequest();
/*		if (req.overrideMimeType) 
			{
			req.overrideMimeType('text/xml');
			}*/
		} 
	else if (window.ActiveXObject) 
		{
		try {
			req = new ActiveXObject("Msxml2.XMLHTTP");
			}
		catch (e)
			{
			try {
				req = new ActiveXObject("Microsoft.XMLHTTP");
				}
			catch (e) {}
			}
	      	}
	req.onreadystatechange = function()
		{ 
		if (document.getElementById(elid).style.display == 'none')
		{
			document.getElementById(elid).style.display = '';
		}
		document.getElementById(elid).innerHTML = '<br>&nbsp;<img src="//www.dreamstime.com/img/loading_small.gif">';
		if(req.readyState == 4)
			{
			if(req.status == 200)
				{
				document.getElementById(elid).innerHTML = req.responseText;	
				}	
/*			else	
				{
				document.getElementById(elid).innerHTML = "Error: returned status code " + req.status + " " + req.statusText;
				}	*/
			} 
		}; 
	req.open("GET", query, true); 
	req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); 
	req.send(null); 
	} 
