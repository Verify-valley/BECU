/**********************************************************
 *                                                        *
 *  Copyright ©2005  Corillian Corporation                *
 *                                                        *
 *  All rights reserved.                                  *
 *                                                        *
 *  Highly Confidential.                                  *
 *                                                        *
 *  No portion of this code may be reproduced,            *
 *  transmitted or distributed without the express        *
 *  written permission of Corillian Corporation.          *
 *                                                        *
 **********************************************************/
 
//funcion to open the popup window.
function popupWindow(url, winOptions)
{	
	var winOpen = window.open(url,'_new',winOptions,false);
}
//funcion to open the popup window.
function popupWindow(url, winOptions, delay)
{	
	var winOpen = setTimeout('window.open("' + url + '","_new","' + winOptions +'",false)',delay);
}
//Function to Print the whole page.
function PrintPage(){
	window.print();
}
//Function to Print the  <Div> Content to the Printer.
function printField(divname) {
				var dctl =	document.getElementById(divname);	
				if (dctl == null)
					return false;
				pWin = window.open('Golden1Print','pWin','location=false, menubar=yes, height = 500, width=500,  toolbar=yes, scrollbars=yes'); 
				if (pWin == null)
					return false;
				pWin.document.open(); 
				pWin.document.write('<html><head></head><body>'); 
				pWin.document.write(dctl.innerHTML); 
				pWin.document.write('</body></html>'); 
				pWin.print(); 
				pWin.document.close(); 
				pWin.close(); 
				return false;
}


//Will be used popup window to assign the Parent Window URL
var strParentWindowURL = "";
//  Check Whether the Parent window is closed.If parent window closed or pointing to different URL  //
//  Close this child window. //
function CloseifParentWindowIsClosed()
{
  try
    {
      if (window.opener.closed == true)
         {self.close();}
      else
         {
           var strNovo = "";
           strNovo = window.opener.location.href;
           if (strNovo != strParentWindowURL)
              {
              //User might exit the site And moved to new one.
               self.close(); 
              } 
         }
     }
   catch (e)
    {
      /// "User exit site. might moved to new window.           
      self.close()
    }
}

function SetParentTimeOut()
{
	try
	{
		if (window.opener != null)
			window.opener.timeout_sessionLife = timeout_sessionLife;
			window.opener.document.getElementById('timeoutWarning').style.display = 'none';
			window.opener.timeout_warningDisplayed = 0;
			window.opener.timeout_stopTimeoutCountdown()
			window.opener.timeout_initializeTimeoutCountdown();
	}
	catch(err)
	{
		//Eat errors
	}
}


function adjustAskBECUCommon()
{
	var leftPos = (document.body.offsetWidth - 770)/2;
	leftPos = leftPos + 590;
	oTarget = document.getElementById('askBECUCommon');
	if(leftPos > 592){
		oTarget.style.left = leftPos + 'px';
	}else{
		oTarget.style.left = '590px';
	}	
}

function openUnconfiguredWindow(sURL){
	var unconfiguredWin = window.open(sURL, 'somename', '');
}


function insertJS(pathToJS) {

    //alert(pathToJS);

    var oHead = document.getElementsByTagName("head")[0];
    var scriptElement = document.createElement('script');
    scriptElement.type = 'text/javascript';
    scriptElement.setAttribute("src", pathToJS);
    scriptElement.setAttribute("language", "javascript");
    oHead.appendChild(scriptElement);

}

