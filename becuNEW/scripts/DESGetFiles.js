// Peter's Data Entry Suite Release 4.0.7.5000
// Copyright 2002 - 2008 Peter L. Blum, All Rights Reserved, www.PeterBlum.com
var gDES_InCallback=false;var gDES_BI={UA:navigator.userAgent.toLowerCase(),onkeypress:1,innerHTML:(document.body!=null)&&(document.body.innerHTML!=null),setInterval:window.setInterval!=null};if(DES_ChkBrws('konqueror')){gDES_BI.Name="Konqueror";gDES_BI.OS="Linux";gDES_BI.Konqueror=1;}else if(DES_ChkBrws('safari',1)||DES_ChkBrws('applewebkit',1)){gDES_BI.Name="Safari";gDES_BI.Safari=1;}else if(DES_ChkBrws('omniweb',1))gDES_BI.Name="OmniWeb";else if(DES_ChkBrws('opera',1)){gDES_BI.Name="Opera";gDES_BI.Opera1=1;}else if(DES_ChkBrws('webtv',1))gDES_BI.Name="WebTV";else if(DES_ChkBrws('msie',1)){gDES_BI.Name="Internet Explorer";gDES_BI.IEWin=1;}else if((gDES_BI.UA.indexOf('trident')>-1)&&DES_ChkBrws('rv',1)){gDES_BI.Name="Internet Explorer";gDES_BI.IEWin=1;}else if(DES_ChkBrws('netscape',1)){gDES_BI.Name="Netscape Mozilla";gDES_BI.Gecko=1;}else if(DES_ChkBrws('gecko',1)){gDES_BI.Name="Gecko";gDES_BI.Gecko=1;}else if(!DES_ChkBrws('compatible',1)){gDES_BI.Name="Netscape Navigator";gDES_BI.Ver=gDES_BI.UA.charAt(8);gDES_BI.Netscape=1;}else gDES_BI.Name="unknown";if(!gDES_BI.OS){if(DES_ChkBrws('linux',0))gDES_BI.OS="Linux";else if(DES_ChkBrws('x11',0))gDES_BI.OS="Unix";else if(DES_ChkBrws('mac',0))gDES_BI.OS="Mac";else if(DES_ChkBrws('win',0))gDES_BI.OS="Windows";else gDES_BI.OS="unknown";}if(gDES_BI.IEWin&&(gDES_BI.OS=="Mac")){gDES_BI.IEWin=0;gDES_BI.IEMac=1;if(gDES_BI.Ver>=5.2)gDES_BI.IEMacOSX=1;else if(gDES_BI.Ver>=5.1)gDES_BI.IEMac51=1;}else if(gDES_BI.IEWin){if(gDES_BI.Ver>=5.5){gDES_BI.IEWin55=1;if(gDES_BI.Ver>=7)gDES_BI.IEWin7=1;if(gDES_BI.Ver>=8)gDES_BI.IEWin8=1;}}else if(gDES_BI.Opera1){var vV=parseInt(gDES_BI.Ver);if(vV>=7){gDES_BI.Opera7=1;gDES_BI.Opera1=0;if(vV>=9)gDES_BI.Opera9=1;}}else if(gDES_BI.Gecko){if(DES_ChkBrws('firefox',1)){gDES_BI.FireFox=1;gDES_BI.Name="FireFox";var vFFV=parseFloat(gDES_BI.Ver);if(vFFV>=1.5)gDES_BI.FireFox15=1;if(vFFV>=2)gDES_BI.FireFox2=1;if(vFFV>=3)gDES_BI.FireFox3=1;}}else if(gDES_BI.Safari){if(gDES_BI.Ver>=520)gDES_BI.Safari3=1;}gDES_BI.onkeypress=!gDES_BI.Opera1&&!gDES_BI.Konqueror;gDES_BI.focusontable=gDES_BI.IEWin||gDES_BI.FireFox15;gDES_BI.MultilineTT=gDES_BI.IEWin||gDES_BI.IEMac51;function DES_ChkBrws(pID,pSetVer){var vPos=gDES_BI.UA.indexOf(pID)+1;if(pSetVer&&vPos){gDES_BI.Ver=parseFloat(gDES_BI.UA.substring(vPos+pID.length));if(isNaN(gDES_BI.Ver))gDES_BI.Ver=gDES_BI.UA.charAt(vPos+pID.length);}return vPos;}function DES_GetById(pId){function Fix(pF){if(pF&&window.RadAjaxNamespace){if(pF.innerHTML=="RADAJAX_HIDDENCONTROL")return null;if((pF.tagName=="DIV")&&(pF.style.display=="none")&&(pF.innerHTML=="")&&(pF.className=="")&&(pF.style.visibility==""))return null;}return pF;}if(typeof(pId)!="string")return pId;if(document.getElementById)return Fix(document.getElementById(pId));else if(document.all)return Fix(document.all[pId]);else if(document.layers){var vElement="";eval("if (document."+pId+") vElement = document."+pId+"; else vElement =document."+gDES_FormName+"."+pId);return Fix(vElement);}else return null;}function DES_GetByIdEx(pId,pExt,pMode){return DES_GetById(DES_PrepIdEx(pId,pExt,pMode));}function DES_PrepIdEx(pId,pExt,pMode){if(pMode==1)return pId+pExt;if(!gGBIRE)gGBIRE=new RegExp("_\\d+$");var vM=gGBIRE.exec(pId);if(vM!=null){pId=pId.substr(0,pId.length-vM[0].length)+pExt;if(!pMode)pId=pId+vM[0];}else pId=pId+pExt;return pId;}var gGBIRE;function DES_GetAtt(pE,pAName,pDefVal){if(pE.getAttribute){var vR=pE.getAttribute(pAName,0);if(vR==null){vR=eval("pE."+pAName);if(vR==null)vR=pDefVal;}else if((vR=="")&&(!document.all))vR=pDefVal;return vR;}else return pDefVal;}function DES_SetAtt(pE,pN,pV){if(gDES_BI.Opera7){eval("pE."+pN+"=pV");}else if(pE.setAttribute)pE.setAttribute(pN,pV,0);else{var vN=pE.name+"_"+pN;eval("vN = pV.toString();");}}function DES_Target(pE){if(!pE){pE=window.event;if(!pE)return null;}var vT=pE.target?pE.target:pE.srcElement;if(vT.nodeType==3)vT=vT.parentNode;return vT;}function DES_ParentNode(pE){if(pE.parentElement!=null)return pE.parentElement;else if(pE.parentNode!=null)return pE.parentNode;else return null;}function DES_GetChildNodes(pParent,pNodeName,pIndex){var vFoundCount=0;var vChildren=null;if(pParent.childNodes){vChildren=pParent.childNodes;}else if(pParent.children){vChildren=pParent.children;}else if(pParent.getElementsByTagName){vChildren=pParent.getElementsByTagName(pNodeName);}else{return null;}var vLength=vChildren.length;for(var vCount=0;vCount<vLength;vCount++)if(vChildren[vCount].nodeName==pNodeName){vFoundCount++;if(vFoundCount==pIndex)return vChildren[vCount];}return null;}function DES_SetInnerHTML(pFld,pV){if(gDES_BI.IEMac51||gDES_BI.IEMacOSX){pFld.innerHTML="";var vNE=document.createElement("span");vNE.innerHTML=pV;pFld.appendChild(vNE);}else pFld.innerHTML=pV;}function DES_SetFocus(pFldId){var vFld=DES_GetById(pFldId);if(!vFld)return;if(window.gDES_VG&&gDES_VG.FocF&&!eval(gDES_VG.FocF+'(vFld)'))return;if(vFld.gocDE)vFld=vFld.gocDE[0];if((vFld.focus!=null)&&((vFld.type==null)||(vFld.type!="hidden"))&&((vFld.disabled==null)||!vFld.disabled)&&((vFld.style==null)||DES_IsVisible(vFld))){try{vFld.focus();if(vFld.select)vFld.select();}catch(e){}}}function DES_HideFocus(pID,pV){var vF=DES_GetById(pID);if(vF.hideFocus!=null)vF.hideFocus=pV;}function DES_SetBkColor(pE,pC){if(gDES_BI.Opera1){if(pC=="")pC="white";pE.style.background=pC;}else{pE.style.backgroundColor=pC;if(!pC&&pE.background)pE.background="";}}function DES_IsVisible(pFld){var vV=true;while(vV&&(pFld!=null)&&(pFld!=document.body)){vV=!((pFld.style.visibility=="hidden")||(pFld.style.display=="none"));pFld=pFld.parentNode;}return vV;}function DES_UnselectPage(){if(gDES_BI.IEWin55&&document.execCommand)document.execCommand("Unselect",false,null);}function DES_Alert(pMsg,pDelay){if(!window.gDES_Alert){if(pDelay){var vCode="DES_AlertBody('"+pMsg+"');";setTimeout(vCode,10);}else DES_AlertBody(pMsg);}}var gDES_Alert=0;function DES_AlertBody(pMsg){if(window.gDES_Alert)return;window.gDES_Alert=1;try{alert(pMsg);}catch(e){}window.gDES_Alert=0;}function DES_ParseInt(pVal){var vR=0;var vNeg=false;for(var vI=0;vI<pVal.length;vI++){var vC=pVal.charAt(vI);if((vC>='0')&&(vC<='9'))vR=(vR*10)+parseInt(vC);else if(((vC=="-")||(vC=="("))&&(vI==0))vNeg=true;else if(vC!=")")return NaN;}if(vNeg)vR=-vR;return vR;}function DES_Round(pVal,pMd,pDP){if(pDP==-1)return pVal;var vTxt=pVal.toString();var vP=vTxt.indexOf(".");if(vP<0)return pVal;if(vTxt.length-(vP+1)<=pDP)return pVal;var vSF=Math.pow(10.0,pDP);var vSV=pVal*vSF;switch(pMd){case 0:vSV=Math.floor(Math.abs(vSV));if(pVal<0)vSV=-vSV;return vSV/vSF;case 1:var vNV=Math.floor(vSV);if((vSV!=vNV)&&(vNV%2==1)){vNV=Math.round(vSV);}return vNV/vSF;case 2:return parseFloat(new Number(pVal+'').toFixed(parseInt(pDP)));case 3:vSV=Math.ceil(vSV);return vSV/vSF;case 4:vSV=Math.ceil(Math.abs(vSV));if(pVal<0)vSV=-vSV;return vSV/vSF;}return 0;}function DES_Trunc(pDecimal){var vStr=pDecimal.toString();var vPos=vStr.indexOf(".");if(vPos==-1)return parseInt(vStr);else return parseInt(vStr.substr(0,vPos));}function DES_DecToStr(pV){var vR=pV.toString();if((vR.indexOf('e-')>-1)&&pV.toFixed){var vM=vR.match(/^.e\-(\d*)$/);var vSz=parseInt(vM[1]);vR=pV.toFixed(vSz);}return vR;}function DES_StripTags(pHTML){return gDES_BI.IEMac||(gDES_BI.IEWin&&!gDES_BI.IEWin55)?pHTML:DES_RERpl(pHTML,"<(.|\n)+?>","");}function DES_RERpl(pText,pFind,pReplace){var vRx=new RegExp(pFind,"ig");return pText.replace(vRx,pReplace);}var gDES_NLTkn=new Array("","<br />","\n","\r"," ");function DES_NLTkn(pText,pUse,pType){if(pType&&pUse){if((pType==3)&&!gDES_BI.MultilineTT)pType=4;return DES_RERpl(pText,"{NEWLINE}",gDES_NLTkn[pType]);}else return pText;}function DES_Trim(s){var m=s.match(/^\s*(\S+(\s+\S+)*)\s*$/);return(m==null)?"":m[1];}function DES_AttachEvent(pFld,pEvtName,pCode,pFst){if(typeof(pFld)=="string")pFld=DES_GetById(pFld);var vEv=eval("pFld."+pEvtName+";");if(typeof(vEv)=="function"){vEv=vEv.toString();vEv=vEv.substring(vEv.indexOf("{")+1,vEv.lastIndexOf("}"));if(vEv.charAt(vEv.length-1)!=";")vEv=vEv+";";if(vEv.indexOf(pCode)>-1)return;}else vEv="";if(pFst)vEv=pCode+vEv;else vEv=vEv+pCode;eval("pFld."+pEvtName+"= function(pE){var event = window.event; try {if (!event) event=pE;}catch(ex){}"+vEv+"}");DES_TrackEvent(pFld,pEvtName);}function DES_TrackEvent(pFld,pEvtName){if(window.attachEvent){if(!gDES_Events){gDES_Events=new Array;window.attachEvent("onunload",DES_DetachEvents);}gDES_Events[gDES_Events.length]={fld:pFld,evt:pEvtName};}}var gDES_Events=null;function DES_DetachEvents(){if(gDES_Events){for(var vI=0;vI<gDES_Events.length;vI++){var vO=gDES_Events[vI];eval("vO.fld."+vO.evt+" = null;vO.fld=null;");}}gDES_Events=null;}function DES_FireEvent(pFld,pEN,pDOMET){if(typeof(pFld)=="string")pFld=DES_GetById(pFld);if(pFld.fireEvent!=null)pFld.fireEvent('on'+pEN);else if((document.createEvent!=null)&&!gDES_BI.Opera7&&(!gDES_BI.Safari||gDES_BI.Safari3)){var vEv=document.createEvent(pDOMET);switch(pDOMET){case"UIEvents":vEv.initUIEvent(pEN,true,true,window,0);break;case"MouseEvents":vEv.initMouseEvent(pEN,true,true,window,0,0,0,0,0,false,false,false,false,0,null);break;default:vEv.initEvent(pEN,true,false);break;}pFld.dispatchEvent(vEv);}else{var vEv="";if(gDES_BI.Opera7||gDES_BI.Safari)vEv=eval("pFld.on"+pEN);else vEv=pFld.getAttribute('on'+pEN);vEv=vEv.toString();if(vEv.indexOf("javascript:")==0)vEv=vEv.slice(11);vEv=vEv.substring(vEv.indexOf("{")+1,vEv.lastIndexOf("}"));eval(vEv+';');}}function DES_StopEvent(pE){if(!pE)if(window.event)pE=window.event;else return;if(pE.cancelBubble!=null)pE.cancelBubble=true;if(pE.stopPropagation)pE.stopPropagation();if(pE.preventDefault)pE.preventDefault();pE.returnValue=false;if(pE.cancel!=null)pE.cancel=true;}function DES_EventStopped(pE){if(!pE)if(window.event)pE=window.event;else return false;if(gDES_BI.Opera7)return false;return pE.returnValue==false;}function DES_GetKeyCode(pE){var vKC=null;if(pE.keyCode)vKC=pE.keyCode;else if(pE.which)vKC=pE.which;return vKC;}function DES_IsCtrl(pE){var vCK=false;if(pE.ctrlKey!=null)vCK=pE.ctrlKey;else if(pE.modifiers!=null)vCK=(pE.modifiers|2)!=0;return vCK;}function DES_IsShift(pE){var vSK=false;if(pE.shiftKey!=null)vSK=pE.shiftKey;else if(pE.modifiers!=null)vSK=(pE.modifiers|4)!=0;return vSK;}function DES_ApplyCssPlus(pFld,pCss){pFld.className=DES_MergeCss(pFld.className,pCss);}function DES_MergeCss(pOCss,pPCss){if(!pPCss||(pOCss.indexOf(pPCss)>-1))return pOCss;if(pOCss=="")return pPCss;if(pPCss.charAt(0)==" ")return pOCss+pPCss;if(pPCss.charAt(pPCss.length-1)==" ")return pPCss+pOCss;return pPCss;}function DES_Reanimate(){if(gDES_BI.IEWin)window.setTimeout("DES_ReanBody();",50);}function DES_ReanBody(){for(var vI=0;vI<document.images.length;vI++){var vImg=document.images[vI];var vName=vImg.src.toUpperCase();if(vName.substring(vName.length-3,vName.length)=="GIF")vImg.src=vImg.src;}}function DES_WaitMsg(){var vMsg=window.gDES_PgLd?gDES_PgLd:"Page is loading. Please wait.";alert(vMsg);}function DES_OnReset(pIsPostBack){if(this.DES_VALReset)DES_VALReset(pIsPostBack);if(this.DES_RunAllFSC){gDES_Init=true;try{DES_RunAllFSC();}finally{gDES_Init=false;}}if(window.DES_CalcAll)DES_CalcAll();if(this.DES_CMonReset)DES_CMonReset();if(this.DES_VWBRefresh)DES_VWBRefresh();DES_RefreshPage(true);var vF=DES_GetById("DES_JSE");if(vF)vF.value=1;}function DES_EvtType(pF){var vEvt=0;switch(pF.tagName){case"SELECT":case"TEXTAREA":vEvt=1;break;case"INPUT":if((pF.type=="text")||(pF.type=="password")||(pF.type=="file"))vEvt=1;break;}return vEvt;}var gDES_Refresh=null;function DES_RefreshPage(pVal){if(window.gDES_VG&&pVal&&gDES_VG.VUpdF)eval(gDES_VG.VUpdF);DES_Refresh();if(this.TMTB_Resize)TMTB_Resize();if(this.gDES_PV)DES_PVRefresh();if(this.DES_UpdateRFM&&window.gDES_VG&&window.gDES_VG.AHRFM)DES_UpdateRFM();}function DES_AddRefresh(pFld,pFnc){if(!gDES_Refresh)gDES_Refresh=new Array();gDES_Refresh[gDES_Refresh.length]={fld:pFld,fnc:pFnc};}function DES_Refresh(pFld){if(gDES_Refresh)for(var vI=0;vI<gDES_Refresh.length;vI++){var vR=gDES_Refresh[vI];if(!pFld||(pFld==vR.fld))vR.fnc(vR.fld);}}function DES_FixRefresh(){if(gDES_Refresh){var vT=new Array;for(var vI=0;vI<gDES_Refresh.length;vI++){var vF=gDES_Refresh[vI].fld;var vFld=DES_GetById(vF.id);if(vFld)vT[vT.length]=gDES_Refresh[vI];else{vF.style.display="none";vF.style.visibility="hidden";vF.disabled=false;gDES_Refresh[vI].fnc(vF);}}gDES_Refresh=vT.length>0?vT:null;}}function DES_RefreshOne(pSrc,pDst,pDsp){if(pDst){pDst.style.visibility=pSrc.style.visibility=="hidden"?"hidden":"";if(!pDsp){pDsp="inline";if(pDst.tagName=="TABLE"){if(gDES_BI.Opera9)pDsp="inline-table";else if(gDES_BI.Safari3||gDES_BI.FireFox3)pDsp="inline-block";}}pDst.style.display=pSrc.style.display=="none"?"none":pDsp;if(pSrc.disabled!=null){pDst.disabled=pSrc.disabled;DES_DisableImg(pDst);}}}var gDES_DisableFilter="progid:DXImageTransform.Microsoft.BasicImage(opacity = 0.50)";function DES_DisableImg(pImg,pAny){function DsbCss(){if(pImg.DsbCss!=null){if(pImg.SvDsbCss==null)pImg.SvDsbCss=pImg.className;pImg.className=pImg.disabled?pImg.DsbCss:pImg.SvDsbCss;return true;}return false;}if((pImg.disabled!=null)&&(pAny||(pImg.tagName=="IMG")||((pImg.tagName=="INPUT")&&(pImg.type=="image")))){if(pImg.DsbImg!=null){if(pImg.SvDsbImg==null)pImg.SvDsbImg=pImg.src;pImg.src=pImg.disabled?pImg.DsbImg:pImg.SvDsbImg;}if(DsbCss())return;if(gDES_BI.IEWin55)pImg.style.filter=pImg.disabled?gDES_DisableFilter:"";else if(pImg.style.opacity!=null){pImg.style.opacity=pImg.disabled?0.5:1.0;}}else if(pImg.disabled!=null)if(pImg.tagName!="SELECT")if(!DsbCss())for(var vI=0;vI<pImg.childNodes.length;vI++){var vC=pImg.childNodes[vI];if(vC.nodeType==1){vC.DsbCss=pImg.DsbCss;var vSv=vC.disabled;vC.disabled=pImg.disabled;DES_DisableImg(vC,pAny);vC.disabled=vSv;}}}function DES_WindowStatus(pMsg){if(window.status)window.status=pMsg;}function DES_CanEditParent(pFId){var vPos=pFId.lastIndexOf("_");if(vPos>-1){var vEF=DES_GetById(pFId.substr(0,vPos));if(vEF&&(vEF.readonly||vEF.disabled))return false;}return true;}function DES_FixCI(pCI){return pCI?pCI:gDES_CultureInfo;}function DES_GetCmdId(pKMap,pKC,pCK,pSK,pOKD){function GetIt(pPos,pTkn){var vEP=pKMap.indexOf("}",pPos+pTkn.length+1);return(vEP>-1)?parseInt(pKMap.substring(pPos+pTkn.length+1,vEP)):0;}if(gDES_BI.IEWin&&(pKC==17))return 0;var vMK=(pCK?"C":"")+(pSK?"S":"");var vTkn="{#"+pKC+vMK;var vPos=pKMap.indexOf(vTkn);if(vPos>-1){return GetIt(vPos,vTkn);}else if(!pOKD||(pKC<33)||(pKC>47)){var vKCS=String.fromCharCode(pKC);var vU=vKCS.toUpperCase();if((vU==vKCS)&&((pKC<65)||(pKC>90)))vMK=(pCK?"C":"");vKCS=vU;vTkn="{"+vKCS+vMK;vPos=pKMap.indexOf(vTkn+"|");if(vPos>-1){return GetIt(vPos,vTkn);}}return 0;}function DES_Debug(pMsg){var vF=DES_GetById("DES_Debug");if(!vF){var vF=document.createElement("span");document.body.appendChild(vF);}vF.innerHTML=vF.innerHTML+pMsg+"<br />";}function DES_Preload(pUrl){if(pUrl&&document.images){var vImg=new Image();vImg.src=pUrl;}}function DES_MatchGroup(pGRq,pGSp){if((pGRq=="*")||(pGSp=="*"))return true;if(pGSp=="")return pGRq=="";var vRp=/\$/g;pGSp=pGSp.replace(vRp,"\\$$");var vRx=new RegExp("^("+pGSp+")$","i");return vRx.test(pGRq);}function DES_DisplayStyle(pF){if(gDES_DStlRE.test(pF.tagName))return"block";else return"inline";}var gDES_DStlRE=/^((P)|(DIV)|(TABLE)|(TD)|(TH)|(TR)|(BLOCKQUOTE)|(PRE)|(HR)|(CENTER))$/;function DES_TxtLen(pFld){var vIsS=typeof(pFld)=="string";var vTxt=vIsS?pFld:pFld.value;var vL=vTxt.length;if(!vIsS&&(pFld.tagName!="TEXTAREA"))return vL;var vM;var vRE=/([^\r](?=\n))|(\r$)/g;while((vM=vRE.exec(vTxt))!=null){vL++;}return vL;}//!dc-end 4.0.4
var gDES_SIOs=null;var gDES_SIORE=/(__doPostBack)|(WebForm_DoPostBackWithOptions)/;function DES_InitSIOs(pL){for(var vI=0;vI<pL.length;vI++)DES_InitSIO(pL[vI]);}function DES_InitSIO(pSIO){var vF=DES_GetById(pSIO.id);if(!vF||vF.SIO)return;vF.SIO=pSIO;if(!gDES_SIOs)gDES_SIOs=new Array();gDES_SIOs[gDES_SIOs.length]=vF;pSIO.Msg=pSIO.Msg?DES_NLTkn(pSIO.Msg,true,2):"";var vOC="";if(vF.tagName=="A"){var vHR=vF.href.replace('javascript:','');if(vHR){vHR="try{"+vHR+"}catch(e){if (window.DES_DSBody)DES_DSBody(false);}";vF.href="javascript: if (DES_BtnClick('"+vF.id+"')){"+vHR+"}";pSIO.ValOnPB=1;}vOC="if (this.disabled) return false;";var vT=vF.title?vF.title:(vF.HO&&(vF.HO.H!=null)?DES_StripTags(DES_NLTkn(vF.HO.H,1,4)):'');vT=DES_RERpl(vT,"\r","");vT=DES_RERpl(vT,"\n","");vT="window.status='"+DES_RERpl(vT,"'","\\'")+"';return true;";DES_AttachEvent(vF,"onmouseover",vT,false);DES_AttachEvent(vF,"onmouseout","window.status='';",false);}else{vOC="if (!DES_BtnClick('"+pSIO.id+"')) return false;";if(vF.onclick&&!gDES_SIORE.test(vF.onclick.toString()))pSIO.ValOnPB=1;}DES_AttachEvent(vF,"onclick",vOC,true);if(pSIO.MMv){var vP=pSIO.Grp!=null?"'"+pSIO.Grp+"'":"null";DES_AttachEvent(vF,"onmousedown","DES_BtnMouseDown('"+vF.id+"', "+vP+");",false);}if(pSIO.DsbImg){vF.DsbImg=pSIO.DsbImg;DES_Preload(vF.DsbImg);}if(pSIO.DsbCss)vF.DsbCss=pSIO.DsbCss;if(pSIO.CMD&&window.DES_CMonUpdateBtn)DES_CMonUpdateBtn(vF);else if(vF.disabled==true)DES_DisableImg(vF,false);}function DES_BtnClick(pFID){var vF=DES_GetById(pFID);if(!vF||!vF.SIO)return true;var vSIO=vF.SIO;var vSkp=null;if(vSIO.CMM){var vChg=window.DES_CMonIsChanged&&DES_CMonIsChanged(DES_CMonBtnGrp(vF));vSkp=((vSIO.CMM==1)&&!vChg)||((vSIO.CMM==2)&&vChg);}if((vSIO.Grp!=null)&&window.DES_ValOnClick){DES_ValOnClick(vSIO.Grp,vSIO.Msg);if(vSkp)gDES_AltCfmMsg=null;if(vSIO.ValOnPB){if(!DES_ValOnSubmit())return false;if(this.Page_ClientValidate!=null)if(!Page_ClientValidate())return false;gDES_CauseVal=false;}}else{gDES_CauseVal=false;DES_Reanimate();if(vSIO.Msg){if(vSkp)return true;if(!confirm(vSIO.Msg))return false;}}if(window.DES_DPNCB&&(vSIO.Grp!=null)&&vSIO.Tgt)if(!DES_DPNCB(vSIO.Grp,vSIO.Tgt,""))return false;return true;}
function DES_BtnMouseDown(pBtnId,pGrp){var vBtn=DES_GetById(pBtnId);if((vBtn.disabled==null)||!vBtn.disabled){var vX=DES_GetOffsetX(vBtn,vBtn.offsetLeft,1);var vY=DES_GetOffsetY(vBtn,vBtn.offsetTop,1);var vDly=pGrp==null;if(!vDly&&window.DES_ValidateGroup&&DES_ValidateGroup(pGrp,true))vDly=((vX!=DES_GetOffsetX(vBtn,vBtn.offsetLeft,1))||(vY!=DES_GetOffsetY(vBtn,vBtn.offsetTop,1)));if(vDly)window.setTimeout("DES_GetById('"+pBtnId+"').click();",250);}}function DES_DisableSubmit(){if(this.gDES_SIOs!=null){var vCode="javascript:DES_DSTO();";gDES_DSTO=setTimeout(vCode,20);}return true;}var gDES_DSTO=0;function DES_DSTO(){if(gDES_DSTO){gDES_DSTO=0;DES_DSBody(true);}}function DES_DSBody(pDisable){if(gDES_DSTO){clearTimeout(gDES_DSTO);gDES_DSTO=0;}for(var vI=0;vI<gDES_SIOs.length;vI++){var vF=gDES_SIOs[vI];if(vF&&vF.SIO.Dsb&&((vF.disabled!=null)||vF.DsbCss)){if(pDisable)vF.WasDisabled=vF.disabled;else if(vF.WasDisabled)continue;else if((vF.WasDisabled==null)&&vF.disabled&&(window.gDES_InCallback==true))continue;vF.disabled=pDisable;DES_DisableImg(vF);}}}function DES_InitMenuControl(pFldID,pGrp,pAll,pLoc){var vFld=DES_GetById(pFldID);if(vFld&&!vFld.DESsubmit){DES_IMCUpdate(vFld,pGrp,pAll,pLoc);DES_IMCChildren(vFld,pGrp,pAll,pLoc);vFld.DESsubmit=1;}}function DES_IMCChildren(pFld,pGrp,pAll,pLoc){var vC=pFld.childNodes!=null?pFld.childNodes:pFld.children;if(vC!=null)for(var vI=0;vI<vC.length;vI++){if(vC[vI]!=null){DES_IMCUpdate(vC[vI],pGrp,pAll,pLoc);DES_IMCChildren(vC[vI],pGrp,pAll,pLoc);}}}function DES_IMCUpdate(pFld,pGrp,pAll,pLoc){if(pFld.onclick!=null){var vEv=(pLoc==0)?pFld.onclick:((pLoc==1)?pFld.onmouseup:pFld.onmousedown);if(typeof(vEv)=="function"){vEv=vEv.toString();vEv=vEv.substring(vEv.indexOf("{")+1,vEv.lastIndexOf("}"));var vPos=vEv.indexOf("__doPostBack");if(vPos>-1)vEv=vEv.replace("__doPostBack","if (DES_ValOnSubWGrp('"+pGrp+"')) __doPostBack");else if(!pAll)return false;else vEv="if (DES_ValOnSubWGrp('"+pGrp+"')) { "+vEv+" }";var vFnc=new Function(vEv);if(pLoc==0)pFld.onclick=vFnc;else if(pLoc==1)pFld.onmouseup=vFnc;else pFld.onmousedown=vFnc;return true;}}return false;}function DES_InitLinkMenuControl(pFldID,pGrp,pMsg){var vFld=DES_GetById(pFldID);if(vFld&&!vFld.DESsubmit){DES_ILMChildren(vFld,pGrp,pMsg);vFld.DESsubmit=1;}}function DES_ILMChildren(pFld,pGrp,pMsg){var vC=pFld.childNodes!=null?pFld.childNodes:pFld.children;if(vC!=null)for(var vI=0;vI<vC.length;vI++){var vF=vC[vI];if(vF){if(vF.tagName=="A"){if(!vF.id){vF.id="_DES_LB_"+gDES_IDCnt++;}DES_InitSIO({id:vF.id,Grp:pGrp,Msg:pMsg});continue;}DES_ILMChildren(vF,pGrp,pMsg);}}}var gDES_IDCnt=0;function DES_DPNCB(pGrp,pTgt,pArg){if(window.gDES_FileUpload&&window.theForm){for(var vI=0;vI<gDES_FileUpload.length;vI++){var vFU=gDES_FileUpload[vI];if((vFU.Grp==null)||DES_MatchGroup(vFU.Grp,pGrp))if(DES_GetById(vFU.ID).value){if(!theForm.onsubmit||(theForm.onsubmit()!=false)){theForm.__EVENTTARGET.value=pTgt;theForm.__EVENTARGUMENT.value=pArg;theForm.submit();}return false;}}}return true;}//!dc-end 4.0.4
var gDES_ISDV=false;function DES_GetDTTBValue(pTBId){var vR=null;var vAO=DES_DTTBGetAO(DES_GetById(pTBId));if(vAO){if(DES_EvalCondition(vAO.Cond)==1)vR=vAO.Cond.Val;}return vR;}function DES_SetDTTBValue(pTBId,pValue,pAfter){var vFld=DES_GetById(pTBId);var vAO=DES_DTTBGetAO(vFld);if(!vAO)return false;if(pAfter==null)pAfter=4;var vOnCE=pAfter>1;var vOnCF=(pAfter==1)||(pAfter==4)||(pAfter==10&&vAO.CmdOC);gDES_ISDV=true;if(pValue==null){vFld.value="";if(vFld.VWB!=null)DES_VWBSet(vFld);if(vOnCE)DES_SOCCheck(pTBId);DES_CallOnCF(vFld,pValue,false,vOnCF);gDES_ISDV=false;return false;}var vR=false;var vText=DES_FormatDTTBValue(pTBId,pValue);if(vText!=null){vFld.value=vText;if(vFld.orval==null)vFld.orval="";if(vOnCE)DES_SOCCheck(pTBId);vR=true;}if(pAfter!=0)DES_CallOnCF(vFld,pValue,vText==null,vOnCF);gDES_ISDV=false;return vR;}function DES_FormatDTTBValue(pTBId,pValue){var vR=null;var vAO=DES_DTTBGetAO(DES_GetById(pTBId));if(vAO!=null){vR=vAO.ToStrFnc(vAO,pValue);}return vR;}function DES_DTTBInit(pAO){pAO.CID=pAO.Cond.IDToEval;var vFld=DES_GetById(pAO.CID);vFld.DTTB=1;if(vFld==null){pAO.Enabled=false;return;}else{vFld.AO=pAO;if(pAO.CPFN)pAO.Cond.CstParse=eval("new Function('pFld','pVal','pLastVal','return "+pAO.CPFN+"(pFld,pVal,pLastVal)');");if(pAO.OCFN)pAO.CstOnChg=eval("new Function('pFldID','pVal','pErr','return "+pAO.OCFN+"(pFldID, pVal, pErr)');");}DES_InitSOC(vFld.id,pAO.DAC);}function DES_DTTBAction(pAO,pEvalRes){var vFld=DES_GetById(pAO.Cond.IDToEval);if(pEvalRes==1){var vText=pAO.ToStrFnc(pAO,pAO.Cond.Val);if(vText!=null){vFld.value=vText;}}if(!gDES_ISDV)DES_CallOnCF(vFld,pAO.Cond.Val,pEvalRes==0,true);}function DES_CallOnCF(pFld,pVal,pErr,pUOC){var vAO=pFld.AO;if(vAO.OnChg){var vR=vAO.OnChg(pFld,pVal,pErr);if(vR==false)return;if(vR==null)pErr=true;}if(vAO.CstOnChg&&pUOC){if((pVal==null)||pErr)if(vAO.OCFA!=1)return;vAO.CstOnChg(pFld.id,pVal,pErr);}}function DES_DTTBFixCO(pCO){if(pCO.Action&&(pCO.Action.VT=="DTTB"))return pCO;var vAO=DES_DTTBGetAO(DES_GetById(pCO.IDToEval));return vAO?vAO.Cond:pCO;}function DES_DTTBGetAO(pFld){if(!pFld.DTTB&&!gDES_Init)return null;if(pFld.AO)return pFld.AO;for(var vI=0;vI<gDES_Actions.length;vI++){var vAO=gDES_Actions[vI];if((vAO.VT=="DTTB")&&(vAO.Cond.IDToEval==pFld.id)){DES_InitOneAction(vI);return vAO;}}return null;}var gDES_PassThruKey=false;var gDES_KFVal=null;function DES_InitKey(pKO){var vFld=DES_GetById(pKO.CID);if(vFld)vFld.KO=pKO;DES_AttachEvent(vFld,"onkeydown","if (!DES_OnKeyDown(this, event)) return false;",true);DES_AttachEvent(vFld,"onkeypress","if (!DES_KeyPress(this, event)) return false;",true);if(pKO.MxTab){DES_AttachEvent(vFld,"onkeyup","if (!DES_TabAtMax(this)) return false;",true);DES_AttachEvent(vFld,"onfocus","gDES_KFVal = null;",true);}if(pKO.Cse&&!gDES_BI.IEWin&&vFld.addEventListener)vFld.addEventListener("change",DES_FixCase,false);if(!pKO.Exc)pKO.Exc=0;if(!pKO.Fltr)pKO.Fltr="";}function DES_KeyPress(pFld,pE){if(gDES_PassThruKey){gDES_KFVal=null;return true;}if(DES_EventStopped(pE))return false;var vR=false;if(pFld.disabled||pFld.readOnly)return false;if(DES_IsCtrl(pE))return true;var vKO=pFld.KO;if(!vKO){return false;}if(gDES_KFVal&&vKO.MxTab){DES_TabAtMax(pFld);if(!gDES_KFVal){DES_StopEvent(pE);return false;}}var vKC=DES_GetKeyCode(pE);if((vKC==null)||(vKC==0)||(vKC==57401)||(gDES_BI.Safari&&(vKC>=63232)&&(vKC<=63276)))return true;if(vKO.CstmKP&&!vKO.CstmKP(pFld,pE,vKC)){DES_StopEvent(pE);return false;}if(!DES_KeyCmd(pFld,pE,vKC,0)){DES_StopEvent(pE);return false;}var vKCS=String.fromCharCode(vKC);if(vKC==13){if(vKO.EBtn){DES_ClickBtn(vKO.EBtn,true);}else if(vKO.ETab)DES_SetFocus(vKO.NxtId);else{vR=vKO.Ent?!vKO.Exc:false;if(vR&&(pFld.tagName=="TEXTAREA")){if(pE.cancelBubble!=null)pE.cancelBubble=true;if(pE.stopPropagation)pE.stopPropagation();}else if(!vR&&(pFld.tagName=="INPUT")){return true;}}}else if(vKC<30)vR=true;else{if(vKO.CTab&&(vKO.CTab.indexOf(vKCS)>-1)&&(pFld.value!=""))DES_SetFocus(vKO.NxtId);else{if(vKO.Cse&&gDES_BI.IEWin){vKCS=(vKO.Cse==1)?vKCS.toUpperCase():vKCS.toLowerCase();var vNew=vKCS.charCodeAt(0);if(vNew!=pE.keyCode)try{pE.keyCode=vNew;}catch(pV){}}if(vKO.Fltr=="")vR=true;else if(vKO.Fltr.indexOf(vKCS)>-1)vR=!vKO.Exc;else vR=vKO.Exc;}}if(vR){if((vKC>=30)&&(pFld.maxLength))gDES_KFVal=pFld.value;}else DES_StopEvent(pE);return vR;}function DES_OnKeyDown(pFld,pE){function ChgFcs(pNewId,pMd){gDES_KFVal=null;var vF=DES_GetById(pNewId);if(vF.focus){vF.focus();if((vF.tagName=="INPUT")&&((vF.type=="text")||(vF.type=="password"))){DES_Select(vF,pMd);}DES_StopEvent(pE);return true;}return false;}var vKO=pFld.KO;if(!vKO){DES_WaitMsg();DES_StopEvent(pE);return false;}gDES_PassThruKey=false;if(DES_EventStopped(pE))return false;var vKC=DES_GetKeyCode(pE);if(vKO.CstmKD&&!vKO.CstmKD(pFld,pE,vKC)){DES_StopEvent(pE);return false;}if(gDES_BI.Safari)return true;if(((vKC>=33)&&(vKC<=47))||DES_IsCtrl(pE))if(!DES_KeyCmd(pFld,pE,vKC,1)){DES_StopEvent(pE);gDES_PassThruKey=true;return false;}if(vKC==8){if(vKO.BTab&&vKO.PrvId&&(pFld.value=="")){if(ChgFcs(vKO.PrvId,2))return false;}}if(vKO.ATab){if((vKC==37)&&vKO.PrvId&&DES_IsSelMd(pFld,1)){if(ChgFcs(vKO.PrvId,2))return false;}if((vKC==39)&&vKO.NxtId&&DES_IsSelMd(pFld,2)){if(ChgFcs(vKO.NxtId,1))return false;}}if((vKC>=33)&&(vKC<=47)&&!pE.altKey)gDES_PassThruKey=true;return true;}function DES_KeyCmd(pFld,pE,pKC,pOKD){var vKO=pFld.KO;if(vKO.KMap&&vKO.KCmd){var vCId=DES_GetCmdId(vKO.KMap,pKC,DES_IsCtrl(pE),DES_IsShift(pE),pOKD);return vCId?vKO.KCmd(pFld,vCId):true;}else return true;}function DES_TabAtMax(pFld){if(gDES_KFVal!=null){if((pFld.value.length==pFld.maxLength)&&(pFld.value.length>gDES_KFVal.length)&&(pFld.value.substr(0,gDES_KFVal.length)==gDES_KFVal)){DES_SetFocus(pFld.KO.NxtId);gDES_KFVal=null;}}return true;}function DES_ClickBtn(pBId,pFcs){var vB=DES_GetById(pBId);if(vB)if((vB.disabled==null)||!vB.disabled)if(vB.href){if(pFcs&&vB.focus)vB.focus();window.location.href=vB.href;return true;}else if(vB.click){if(pFcs&&vB.focus)vB.focus();vB.click();return true;}return false;}function DES_KeyToBtn(pE,pKC,pBId,pFcs){var vKC=DES_GetKeyCode(pE);if(vKC==pKC){if(DES_ClickBtn(pBId,pFcs)){DES_StopEvent(pE);return false;}}return true;}function DES_InitKTB(pCId,pKC,pBId,pFcs){var vFld=DES_GetById(pCId);if(!vFld)vFld=document;var vKP=1;if((pKC>=33)&&(pKC<=47))vKP=0;else if((pKC>=112)&&(pKC<=123))vKP=0;else if(gDES_BI.Safari&&(pKC>=63232)&&(pKC<=63276))vKP=0;var vCd="if (!DES_KeyToBtn(event,"+pKC+",'"+pBId+"',"+pFcs.toString()+")) return false;";DES_AttachEvent(vFld,vKP?"onkeypress":"onkeydown",vCd,true);}function DES_DTTBKCmd(pFld,pCId){var vR=false;var vAO=DES_DTTBGetAO(pFld);if(!vAO)return false;var vID=pFld.id;switch(pCId){case 60:DES_DTTBAdd(vID,-vAO.Inc);break;case 61:DES_DTTBAdd(vID,vAO.Inc);break;default:vR=true;break;}return vR;}function DES_FixCase(pE){var vF=DES_Target(pE);if(!vF||!vF.KO)return;var vNV=(vF.KO.Cse==1)?vF.value.toUpperCase():vF.value.toLowerCase();if(vNV!=vF.value)vF.value=vNV;}function DES_Select(pF,pMd){var vX=0;var vY=pF.value.length;if(pMd==1)vY=vX;else if(pMd==2)vX=vY;if(pF.setSelectionRange)pF.setSelectionRange(vX,vY);else if(pF.createTextRange){var vR=pF.createTextRange();vR.collapse(true);vR.moveEnd('character',vX);vR.moveStart('character',vY);vR.select();}}function DES_IsSelMd(pF,pMd){if((pMd!=0)&&(pF.value.length==0))return true;if(pF.setSelectionRange){var vX=pF.selectionStart;var vY=pF.selectionEnd;if(vY==0)return pMd==1;if(vX==pF.value.length)return pMd==2;return pMd==0;}else if(pF.createTextRange){var vR=document.selection.createRange();var vD=pF.createTextRange().duplicate();vD.collapse();vD.moveStart('character',0);vD.moveEnd('character',0);if(vR.isEqual(vD))return pMd==1;var vL=pF.value.length;vD.moveStart('character',vL);vD.moveEnd('character',vL);if(vR.isEqual(vD))return pMd==2;return pMd==0;}else return false;}function DES_CanEdit(pFId){var vF=DES_GetById(pFId);return!(vF.disabled||vF.readOnly);}function DES_CmdCanEdit(pFId){var vFld=DES_GetById(pFId);return!(vFld.disabled||(vFld.readOnly&&!vFld.AO.ROED));}function DES_NoPaste(pTBId){var vF=DES_GetById(pTBId);if(vF)vF.onpaste=new Function("if (window.event)event.returnValue=false;return false;");}var gDES_SOC=null;function DES_InitSOC(pFId,pDAC){var vFld=DES_GetById(pFId);if(!vFld)return;if(vFld.DESSOC)return;vFld.DESSOC=1;if(vFld.value!=null){if(vFld.disabled||(vFld.readOnly&&(!vFld.AO||!vFld.AO.ROED)))return;if(!gDES_SOC){gDES_SOC=new Array;if(window.attachEvent)window.attachEvent("onunload",DES_DisposeSOC);}gDES_SOC[gDES_SOC.length]=vFld;DES_AttachEvent(vFld,"onblur","DES_SOCCheck('"+pFId+"');");DES_AttachEvent(vFld,"onchange","DES_SOCSet('"+pFId+"','C');");DES_AttachEvent(vFld,"onfocus","DES_SOCSet('"+pFId+"','F');");if(pDAC){vFld.autocomplete="off";if(gDES_BI.FireFox15)vFld.setAttribute("autocomplete","off",0);}}}function DES_DisposeSOC(){gDES_SOC=null;}function DES_SOCCheck(pTBId){var vFld=DES_GetById(pTBId);var vChg=null;var vVal=DES_TBIsBlank(vFld)?"":vFld.value;if((vFld.orval!=null)&&(vFld.orval!=vVal)){vFld.orval=vVal;DES_FireEvent(vFld,"change","HTMLEvents");vChg=true;}if(window.DES_GOCSet)DES_GOCSet(vFld,false,vChg);}function DES_SOCSet(pTBId,pEvt){var vFld=DES_GetById(pTBId);if(DES_TBIsBlank(vFld))vFld.orval="";else vFld.orval=vFld.value;if(window.DES_GOCSet)if(pEvt=='F')DES_GOCSet(vFld,true,null);else if(pEvt=='C')DES_GOCSet(vFld,false,true);}function DES_TBIsBlank(pF,pTxt){if(pTxt==null)pTxt=pF.value;if(pTxt=="")return true;else if(pF.VWB==null)return false;return pTxt.toUpperCase()==pF.VWBUC;}function DES_RangeError(pFld){if(pFld.ActionIDs)for(var vI=0;vI<pFld.ActionIDs.length;vI++){var vAO=gDES_Actions[pFld.ActionIDs[vI]];if(!vAO)continue;if((vAO.VT=="VAL")&&(vAO.Cond.EvalFnc.toString()=="DES_EvalRangeCond")){DES_DoAction(vAO);if(window.DES_PostValidateFld&&window.gDES_VG){var vSF=gDES_VG.FOC;gDES_VG.FOC=0;var vSA=gDES_VG.AOC;gDES_VG.AOC=0;DES_PostValidateFld(pFld);gDES_VG.FOC=vSF;;gDES_VG.AOC=vSA;}}}}function DES_DTTBAdd(pTBId,pAdd){if(!DES_CmdCanEdit(pTBId))return false;var vTBFld=DES_GetById(pTBId);var vAO=DES_DTTBGetAO(vTBFld);if(!vAO)return false;var vVal=DES_GetDTTBValue(pTBId);var vOrig=vVal;if((vVal==null)&&DES_TBIsBlank(vTBFld)){var vN=0;if((vAO.Max!=null)&&(pAdd<0))vN=vAO.Max;else if((vAO.Min!=null)&&(pAdd>0))vN=vAO.Min;DES_SetDTTBValue(pTBId,vN);if(vTBFld.focus&&DES_IsVisible(vTBFld)){vTBFld.focus();if(vTBFld.select)vTBFld.select();}return true;}if(vVal!=null){vVal=vVal+pAdd;if(vAO.Digs==null){vAO.Round=0;var vDigs=null;if(vAO.Cond.mxdec!=null)vDigs=vAO.Cond.mxdec;else if(vAO.FLZ==null)vDigs=vAO.Cond.CDDig?vAO.Cond.CDDig:gDES_CultureInfo.CDDig;if(vDigs!=null){vAO.Round=1;if((vDigs<0)||(vDigs>5))vDigs=5;vAO.Digs=vDigs;}else vAO.Digs=0;}if(vAO.Round)if(vAO.Digs==0)vVal=Math.round(vVal);else{var vSF=Math.pow(10.0,vAO.Digs);var vSV=vVal*vSF;vSV=Math.round(vSV);vVal=vSV/vSF;}if((vAO.Max!=null)&&(pAdd>0)&&(vAO.Max<vVal))vVal=vAO.Max;else if((vAO.Min!=null)&&(pAdd<0)&&(vAO.Min>vVal))vVal=vAO.Min;if(vVal!=vOrig){DES_SetDTTBValue(pTBId,vVal,0);if(vTBFld.focus&&DES_IsVisible(vTBFld)){vTBFld.focus();if(vTBFld.select)vTBFld.select();}}return vVal!=vOrig;}return false;}function DES_DTTBSetMinMax(pTBId,pMin,pMax){var vAO=DES_DTTBGetAO(DES_GetById(pTBId));if(vAO){if(pMin!=null)vAO.Min=pMin;if(pMax!=null)vAO.Max=pMax;}}function DES_BDATInit(pAO){DES_DTTBInit(pAO);var vID=pAO.CID;if(pAO.PUID){switch(pAO.TBType){case 1:case 2:pAO.ToPU=DES_DTBToCal;pAO.FromPU=DES_DTBFromCal;break;case 5:pAO.ToPU=DES_DTBToMYP;pAO.FromPU=DES_DTBFromMYP;break;case 10:case 20:pAO.ToPU=DES_TMTBToTP;pAO.FromPU=DES_TMTBFromTP;break;}if(pAO.APUF)DES_APUInit(pAO);}if(DES_GetById(vID+"_PU")||DES_GetByIdEx(vID,"_Help"))DES_AddRefresh(DES_GetById(vID),DES_BDATRefresh);}function DES_BDATRefresh(pFld){DES_RefreshOne(pFld,DES_GetById(pFld.id+"_CONT"));DES_RefreshOne(pFld,DES_GetByIdEx(pFld.id,"_Help"));DES_RefreshOne(pFld,DES_GetByIdEx(pFld.id,"_PU"));if(pFld.disabled!=null){var vT=DES_GetByIdEx(pFld.id,"_PU_TG");if(vT){vT.disabled=pFld.disabled;DES_DisableImg(vT);}}}var gDES_DTBRE=0;function DES_BDATPopup(pTBId){if(gDES_DTBRE||!DES_CmdCanEdit(pTBId))return false;var vTBFld=DES_GetById(pTBId);var vAO=vTBFld.AO;vAO.APUOn=0;var vPUID=vAO.PUID;var vPUF=DES_GetById(vPUID);if(!DES_CtlInited(vPUF))return false;if(vPUF.style&&(vPUF.style.visibility=='hidden')){vPUF.MO.TBId=pTBId;if(vAO.ToPU(pTBId,vPUID)){DES_OpenPopup(DES_PrepIdEx(pTBId,"_PU_TG"),vPUID,false,"");return true;}}return false;}function DES_BDATFromPopup(pTBId,pVal,pAfter){gDES_DTBRE=1;DES_SetDTTBValue(pTBId,pVal,pAfter);gDES_DTBRE=0;var vF=DES_GetById(pTBId);if(vF.KO&&vF.KO.NxtId)DES_SetFocus(vF.KO.NxtId);else if(vF.focus&&vF.select&&DES_IsVisible(vF)){if(vF.AO.APUF)vF.AO.APUOn=1;vF.focus();vF.select();}}
function VAM_FieldChanged(pFldId){DES_FieldChanged(pFldId);}function VAM_FindAOById(pID){return DES_FindAOById(pID);}function VAM_SetEnabled(pAO,pEnabled){DES_SetEnabled(pAO,pEnabled);}function VAM_CalcOne(pID){DES_CalcOne(pID);}function VAM_CalcAll(){DES_CalcAll();}function VAM_GetById(pId){return DES_GetById(pId);}function VAM_SetInnerHTML(pFld,pValue){DES_SetInnerHTML(pFld,pValue);}function VAM_ParseInt(pVal){return DES_ParseInt(pVal);}function VAM_AttachEvent(pFld,pEvtName,pCode,pFst){DES_AttachEvent(pFld,pEvtName,pCode,pFst);}function VAM_FireEvent(pFld,pEN,pDOMET){DES_FireEvent(pFld,pEN,pDOMET);}function VAM_IsVisible(pFld){return DES_IsVisible(pFld);}function VAM_SetFocus(pFldId){DES_SetFocus(pFldId);}function VAM_Trim(pS){return DES_Trim(pS);}function VAM_RefreshPage(pVal){DES_RefreshPage(pVal);}function VAM_InitCond(pCO,pAO){DES_InitCond(pCO,pAO);}function VAM_InitOneFldCond(pCO,pAO){DES_InitOneFldCond(pCO,pAO);}function VAM_InitTwoFldCond(pCO,pAO){}function VAM_EvalRegexCond(pCO){return DES_EvalRegexCond(pCO);}function VAM_HookupControl(pFld,pAO,pCO,pAltEvent,pHUCtrlFnc){return DES_HookupControl(pFld,pAO,pCO,pAltEvent,pHUCtrlFnc);}function VAM_GetTextValue(pId,pTrim,pGetTextFnc){return DES_GetTextValue(pId,pTrim,pGetTextFnc);}function VAM_GetSelIdx(pId,pGetFnc){return DES_GetSelIdx(pId,pGetFnc);}function VAM_RunAllFSC(pAll){DES_RunAllFSC(pAll);}function VAM_ChgHint(pFId,pHint){DES_ChgHint(pFId,pHint);}function VAM_GetTextMSDE(pId){return DES_GetTextMSDE(pId);}function VAM_ClearMSDE(pId){DES_ClearMSDE(pId);}function VAM_SaveMSDE(pId){DES_SaveMSDE(pId);}function VAM_RestoreMSDE(pId){DES_RestoreMSDE(pId);}function VAM_UpdateSpinners(){DES_RefreshPage(false);}function VAM_DisableSubmit(){DES_DisableSubmit();}function VAM_GetDTTBValue(pTBId){return DES_GetDTTBValue(pTBId);}function VAM_SetDTTBValue(pTBId,pValue){return DES_SetDTTBValue(pTBId,pValue);}function VAM_FormatDTTBValue(pTBId,pValue){return DES_FormatDTTBValue(pTBId,pValue);}function VAM_ClickBtn(pBId,pFcs){DES_ClickBtn(pBId,pFcs);}function VAM_GetKeyCode(pE){return DES_GetKeyCode(pE);}function VAM_StopEvent(pE){DES_StopEvent(pE);}function VAM_CanEdit(pFId){return DES_CanEdit(pFId);}function VAM_TBIsBlank(pF){return DES_TBIsBlank(pF);}function VAM_ValidateGroup(pGrp,pReal){return DES_ValidateGroup(pGrp,pReal);}function VAM_ValOnSubWGrp(pGrp){return DES_ValOnSubWGrp(pGrp);}function VAM_ValOnSubmit(){return DES_ValOnSubmit();}function VAM_PostValidate(pGrp,pAll){DES_PostValidate(pGrp,pAll);}function VAM_OnReset(pIsPostBack){DES_VALReset(pIsPostBack);}function VAM_IsValid(pFld){return DES_IsValid(pFld);}function VAM_OneFldReplToken(pAO,pText){return DES_OneFldReplToken(pAO,pText);}function VAM_TwoFldReplToken(pAO,pText){return DES_TwoFldReplToken(pAO,pText);}function VAM_SPReplToken(pText,pCnt,pTName){return DES_SPReplToken(pText,pCnt,pTName);}function VAM_GetAttrCondVal(pCO){return DES_GetAttrCondVal(pCO);}function VAM_UpdateSummaries(pGrp,pAutoUpd){DES_UpdateSummaries(pGrp,pAutoUpd);}//---ValidationSummary2.js:NO MAPPED FUNCTIONS