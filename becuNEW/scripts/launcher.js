var openedWin = null;
var wpercent = 100;

function launch(){
	var args = launch.arguments
	var url = args[0]
	var width = args[1]
	var height = args[2]
	
	if (!url || !width || !height) {
		alert("Error");
	} else {
		var scr_w = screen.availWidth
		var scr_h = screen.availHeight
		var target_w = 0
		var target_h = 0
		wpercent = 100

		if(width >= scr_w || height >= scr_h){
		    /*
		    if((width+8) >= (height+27)){
				target_w = scr_w - 8	//target width is screen width - 8
				wpercent = Math.floor((target_w * 100)/width) //get percentage scaled down
				target_h = Math.floor((height * wpercent)/100) - 27 //scale height to  percentage then subtract standard title bar height
				wpercent = Math.floor((target_h * 100)/height)	//re-adjust percentage
				target_w = Math.floor((width * wpercent)/100)	//scale width to new percentage
				width = target_w
				height = target_h
			}else if((height+27) > (width+8)){
				target_h = scr_h - 27
				wpercent = Math.floor((target_h * 100)/height)
				target_w = Math.floor((width * wpercent)/100) - 8
				wpercent = Math.floor((target_w * 100)/width)
				target_h = Math.floor((height * wpercent)/100)
				width = target_w
				height = target_h
			}
			*/
		    p = 100;
		    if (height >= scr_h)
		    {
		        p = (scr_h * .9) / height;
		    }
		    else
		    {
		        p = (scr_w * .9) / width;
		    }
		    
		    width = Math.round(p * width);
		    height = Math.round(p * height);
		    wpercent = Math.round(p * 100);
		}
		_launch(url, width, height, args[3], args[4], args[5], args[6], args[7], args[8], args[9]);
	}
}

function _launch(){
	closeChild()
	
	var args = _launch.arguments
	var url = args[0]
	var width = args[1]
	var height = args[2]
	var resizable = args[3] ? "yes" : "no"
	var scrollbars = args[4] ? "yes" : "no"
	var toolbar = args[5] ? "yes" : "no"
	var menubar = args[6] ? "yes" : "no"
	var status = args[7] ? "yes" : "no"
	var address = args[8] ? "yes" : "no"
	var directories = args[9] ? "yes" : "no"
	
	var NewX = Math.max(0, Math.floor((screen.availWidth-(width+8))/2));
	var NewY = Math.max(0, Math.floor((screen.availHeight-(height+27))/2));
	
	var params = ''
	
	params += "width="+width // 1
	params += ",height="+height // 2
	params += ",screenx="+NewX
	params += ",screeny="+NewY
	params += ",left="+NewX
	params += ",top="+NewY
	params += ",resizable="+resizable // 3
	params += ",scrollbars="+scrollbars // 4
	params += ",toolbar="+toolbar // 5
	params += ",menubar="+menubar // 6
	params += ",status="+status // 7
	params += ",location="+address // 8
	params += ",directories="+directories // 9
	
	openedWin = window.open(url, "demodashboard", params);
}

function closeChild () {
	if (openedWin != null) {
		if (!openedWin.closed) {
			openedWin.close();
		}
	}
}
onunload = closeChild;