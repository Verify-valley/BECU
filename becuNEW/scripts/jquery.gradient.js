(function($){$.fn.gradient=function(options){options=$.extend({from:"000000",to:"ffffff",direction:"horizontal",position:"top",length:null,isSizeFixed:true,bgcolor:"ffffff"},options||{});var createColorPath=function(startColor,endColor,distance){var colorPath=[],colorPercent=1,distance;do{colorPath[colorPath.length]=setColorHue(longHexToDec(startColor),colorPercent,longHexToDec(endColor));colorPercent-=100/distance*.01}while(colorPercent>0);return colorPath},setColorHue=function(originColor,opacityPercent,maskRGB){for(var returnColor=[],i=0;i<originColor.length;i++)returnColor[i]=Math.round(originColor[i]*opacityPercent)+Math.round(maskRGB[i]*(1-opacityPercent));return returnColor},longHexToDec=function(longHex){return [toDec(longHex.substring(0,2)),toDec(longHex.substring(2,4)),toDec(longHex.substring(4,6))]},toDec=function(hex){return parseInt(hex,16)};return this.each(function(){var $this=$(this),width=$this.innerWidth(),height=$this.innerHeight(),x=0,y=0,w=1,h=1,html=[],length=options.length||(options.direction=="vertical"?width:height),isTableElement=$this[0].tagName.toLowerCase()=="td"||$this[0].tagName.toLowerCase()=="th"||$this[0].tagName.toLowerCase()=="table",divPosition=options.isSizeFixed==false?"100%":length+"px",position=(options.position=="bottom"?"bottom:0;":"top:0;")+(options.position=="right"?"right:0;":"left:0;"),colorArray=createColorPath(options.from,options.to,length);if(options.direction=="horizontal"){h=Math.round(length/colorArray.length)||1;w=width}else{w=Math.round(length/colorArray.length)||1;h=height}if(!$.browser.msie&&isTableElement){var webkitstyle="";if(options.direction=="horizontal")webkitstyle=String.format("linear, left top, left bottom, from(#{0}), color-stop(0.40, #{1}), color-stop(0.50,#{2})",options.from,options.to,options.bgcolor);else webkitstyle=String.format("linear, left right, from(#{0}), color-stop(0.40, #{1}), color-stop(0.50,#{2})",options.from,options.to,options.bgcolor);$this.css("background","-webkit-gradient("+webkitstyle+")");var style=String.format("0% 3% 270deg,#{0},#{1},#{2} 100%",options.from,options.to,options.bgcolor);$this.css("background","-moz-linear-gradient("+style+")");return}html.push('<div class="gradient" style="position: absolute; '+position+" width: "+(options.direction=="vertical"?divPosition:"100%")+"; height: "+(options.direction=="vertical"?"100%":divPosition)+"; overflow: hidden; z-index: 0; background-color: #"+(options.position.indexOf("bottom")!=-1?options.from:options.to)+'">');for(var i=0;i<colorArray.length;i++){html.push('<div style="position:absolute;z-index:1;top:'+y+"px;left:"+x+"px;height:"+(options.direction=="vertical"?"100%":h+"px")+";width:"+(options.direction=="vertical"?w+"px":"100%")+";background-color:rgb("+colorArray[i][0]+","+colorArray[i][1]+","+colorArray[i][2]+');"></div>');options.direction=="vertical"?(x+=w):(y+=h);if(y>=height||x>=width)break}html.push("</div>");$this.css("position")=="static"&&$this.css("position","relative");for(var datePickerDiv=$this.find(".basicdatepicker"),scriptTags=[],index=0;index<datePickerDiv.length;index++)scriptTags.push(datePickerDiv[index].innerHTML);$this.wrapInner('<div style="display:'+$this.css("display")+(options.isSizeFixed==false?";zoom:1;":";z-index: 2;")+';position: relative;"></div>').prepend(html.join(""));if(datePickerDiv.length>0){var index=0;$this.find(".basicdatepicker").each(function(){$(this).empty().append(scriptTags[index++])})}})}})(jQuery)