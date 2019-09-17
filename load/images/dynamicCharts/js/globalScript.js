//Global Declarations
var ie = (document.all) ? true : false;

function toggleClass(objClass){
//  This function will toggle obj visibility of an Element
//  based on Element's Class
//  Works with IE and Mozilla based browsers

  if (getElementByClass(objClass).style.display=="none"){
    showClass(objClass)
  }else{
    hideClass(objClass)
  }
}

function hideClass(objClass){
//  This function will hide Elements by object Class
//  Works with IE and Mozilla based browsers

var elements = (ie) ? document.all : document.getElementsByTagName('*');
  for (i=0; i<elements.length; i++){
    if (elements[i].className==objClass){
      elements[i].style.display="none"
    }
  }
}

function showClass(objClass){
//  This function will show Elements by object Class
//  Works with IE and Mozilla based browsers
var elements = (ie) ? document.all : document.getElementsByTagName('*');
  for (i=0; i<elements.length; i++){
    if (elements[i].className==objClass){
      elements[i].style.display="block"
    }
  }
}

function toggleID(objID){
//  This function will toggle obj visibility of an Element
//  based on Element's ID
//  Works with IE and Mozilla based browsers
var element = (ie) ? document.all(objID) : document.getElementById(objID);
  if (element.style.display=="none"){
    showID(objID)
  }else{
    hideID(objID)
  }
}

function hideID(objID){
//  This function will hide Elements by object ID
//  Works with IE and Mozilla based browsers
var element = (ie) ? document.all(objID) : document.getElementById(objID);
  element.style.display="none"
}

function showID(objID){
//  This function will show Elements by object ID
//  Works with IE and Mozilla based browsers
var element = (ie) ? document.all(objID) : document.getElementById(objID);
  element.style.display="block"
}

function getElementByClass(objClass){
//  This function is similar to 'getElementByID' since there
//  is no inherent function to get an element by it's class
//  Works with IE and Mozilla based browsers
var elements = (ie) ? document.all : document.getElementsByTagName('*');
  for (i=0; i<elements.length; i++){
    //alert(elements[i].className)
    //alert(objClass)
    if (elements[i].className==objClass){
    return elements[i]
    }
  }
}
function HideAll(){ //hides all of the content blocks
hideClass('CourseContent');
hideID('page1'); 
hideID('page2');
hideID('page3');
hideID('page4');
hideID('page5');
hideID('page6');
hideID('page7');
hideID('page8');
hideID('page9');
hideID('page10');
hideClass('ChapterBreak');
showClass('miniNav');
showClass('pageNav');
}

function ShowAll(){ //hides all of the content blocks
showID('page1'); 
showID('page2');
showID('page3');
showID('page4');
showID('page5');
showID('page6');
showID('page7');
showID('page8');
showID('page9');
showID('page10');
hideClass('miniNav');
hideClass('pageNav');
showClass('ChapterBreak');
showClass('CourseContent');
}

function OpenPopup (c) {
window.open(c,
'window',
'width=750,height=500,scrollbars=yes,resizable=yes,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=0');
}

function PPTPopup (c) {
window.open(c,
'window',
'width=500,height=350,scrollbars=yes,resizable=yes,toolbar=yes,directories=no,location=no,menubar=yes,status=no,left=50,top=0');
}

function cyuPopup (c) {
window.open(c,
'window',
'width=750,height=500,scrollbars=no,resizable=yes,toolbar=no,directories=no,location=no,menubar=no,status=no,left=50,top=0');
}

function FileInfo($link) {
  $size = filesize($link);
  $sizes = Array(' B', ' KB', ' MB', ' GB', ' TB', ' PB', ' EB');
  $ext = $sizes[0];
  for ($i=1; (($i < count($sizes)) && ($size >= 1024)); $i++) {
   $size = $size / 1024;
   $ext  = $sizes[$i];
}

	$file_ext = array_pop(explode(".",$link));
	//	return '<img src="../images/icon_' . $file_ext . '.gif"/>';
	if ($file_ext == 'pdf') {
          return '<img src="images/icon_pdf.gif" alt="PDF Document"/> (PDF)';
		}
	if ($file_ext == 'doc') {
    	return '<img src="images/icon_word.gif" alt="Word Document"/>';
		}
	if ($file_ext == 'mp3') {
    	return '<img src="../abc123_1/images/icon_sound.gif" alt="Music File"/> ';
		}
}

/* SWFObject v2.1 <http://code.google.com/p/swfobject/>
	Copyright (c) 2007-2008 Geoff Stearns, Michael Williams, and Bobby van der Sluis
	This software is released under the MIT License <http://www.opensource.org/licenses/mit-license.php>
*/
if(typeof deconcept=="undefined"){var deconcept=new Object();}if(typeof deconcept.util=="undefined"){deconcept.util=new Object();}if(typeof deconcept.SWFObjectUtil=="undefined"){deconcept.SWFObjectUtil=new Object();}deconcept.SWFObject=function(_1,id,w,h,_5,c,_7,_8,_9,_a){if(!document.getElementById){return;}this.DETECT_KEY=_a?_a:"detectflash";this.skipDetect=deconcept.util.getRequestParameter(this.DETECT_KEY);this.params=new Object();this.variables=new Object();this.attributes=new Array();if(_1){this.setAttribute("swf",_1);}if(id){this.setAttribute("id",id);}if(w){this.setAttribute("width",w);}if(h){this.setAttribute("height",h);}if(_5){this.setAttribute("version",new deconcept.PlayerVersion(_5.toString().split(".")));}this.installedVer=deconcept.SWFObjectUtil.getPlayerVersion();if(!window.opera&&document.all&&this.installedVer.major>7){deconcept.SWFObject.doPrepUnload=true;}if(c){this.addParam("bgcolor",c);}var q=_7?_7:"high";this.addParam("quality",q);this.setAttribute("useExpressInstall",false);this.setAttribute("doExpressInstall",false);var _c=(_8)?_8:window.location;this.setAttribute("xiRedirectUrl",_c);this.setAttribute("redirectUrl","");if(_9){this.setAttribute("redirectUrl",_9);}};deconcept.SWFObject.prototype={useExpressInstall:function(_d){this.xiSWFPath=!_d?"expressinstall.swf":_d;this.setAttribute("useExpressInstall",true);},setAttribute:function(_e,_f){this.attributes[_e]=_f;},getAttribute:function(_10){return this.attributes[_10];},addParam:function(_11,_12){this.params[_11]=_12;},getParams:function(){return this.params;},addVariable:function(_13,_14){this.variables[_13]=_14;},getVariable:function(_15){return this.variables[_15];},getVariables:function(){return this.variables;},getVariablePairs:function(){var _16=new Array();var key;var _18=this.getVariables();for(key in _18){_16[_16.length]=key+"="+_18[key];}return _16;},getSWFHTML:function(){var _19="";if(navigator.plugins&&navigator.mimeTypes&&navigator.mimeTypes.length){if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","PlugIn");this.setAttribute("swf",this.xiSWFPath);}_19="<embed type=\"application/x-shockwave-flash\" src=\""+this.getAttribute("swf")+"\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\"";_19+=" id=\""+this.getAttribute("id")+"\" name=\""+this.getAttribute("id")+"\" ";var _1a=this.getParams();for(var key in _1a){_19+=[key]+"=\""+_1a[key]+"\" ";}var _1c=this.getVariablePairs().join("&");if(_1c.length>0){_19+="flashvars=\""+_1c+"\"";}_19+="/>";}else{if(this.getAttribute("doExpressInstall")){this.addVariable("MMplayerType","ActiveX");this.setAttribute("swf",this.xiSWFPath);}_19="<object id=\""+this.getAttribute("id")+"\" classid=\"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000\" width=\""+this.getAttribute("width")+"\" height=\""+this.getAttribute("height")+"\" style=\""+this.getAttribute("style")+"\">";_19+="<param name=\"movie\" value=\""+this.getAttribute("swf")+"\" />";var _1d=this.getParams();for(var key in _1d){_19+="<param name=\""+key+"\" value=\""+_1d[key]+"\" />";}var _1f=this.getVariablePairs().join("&");if(_1f.length>0){_19+="<param name=\"flashvars\" value=\""+_1f+"\" />";}_19+="</object>";}return _19;},write:function(_20){if(this.getAttribute("useExpressInstall")){var _21=new deconcept.PlayerVersion([6,0,65]);if(this.installedVer.versionIsValid(_21)&&!this.installedVer.versionIsValid(this.getAttribute("version"))){this.setAttribute("doExpressInstall",true);this.addVariable("MMredirectURL",escape(this.getAttribute("xiRedirectUrl")));document.title=document.title.slice(0,47)+" - Flash Player Installation";this.addVariable("MMdoctitle",document.title);}}if(this.skipDetect||this.getAttribute("doExpressInstall")||this.installedVer.versionIsValid(this.getAttribute("version"))){var n=(typeof _20=="string")?document.getElementById(_20):_20;n.innerHTML=this.getSWFHTML();return true;}else{if(this.getAttribute("redirectUrl")!=""){document.location.replace(this.getAttribute("redirectUrl"));}}return false;}};deconcept.SWFObjectUtil.getPlayerVersion=function(){var _23=new deconcept.PlayerVersion([0,0,0]);if(navigator.plugins&&navigator.mimeTypes.length){var x=navigator.plugins["Shockwave Flash"];if(x&&x.description){_23=new deconcept.PlayerVersion(x.description.replace(/([a-zA-Z]|\s)+/,"").replace(/(\s+r|\s+b[0-9]+)/,".").split("."));}}else{if(navigator.userAgent&&navigator.userAgent.indexOf("Windows CE")>=0){var axo=1;var _26=3;while(axo){try{_26++;axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash."+_26);_23=new deconcept.PlayerVersion([_26,0,0]);}catch(e){axo=null;}}}else{try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");}catch(e){try{var axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6");_23=new deconcept.PlayerVersion([6,0,21]);axo.AllowScriptAccess="always";}catch(e){if(_23.major==6){return _23;}}try{axo=new ActiveXObject("ShockwaveFlash.ShockwaveFlash");}catch(e){}}if(axo!=null){_23=new deconcept.PlayerVersion(axo.GetVariable("$version").split(" ")[1].split(","));}}}return _23;};deconcept.PlayerVersion=function(_29){this.major=_29[0]!=null?parseInt(_29[0]):0;this.minor=_29[1]!=null?parseInt(_29[1]):0;this.rev=_29[2]!=null?parseInt(_29[2]):0;};deconcept.PlayerVersion.prototype.versionIsValid=function(fv){if(this.major<fv.major){return false;}if(this.major>fv.major){return true;}if(this.minor<fv.minor){return false;}if(this.minor>fv.minor){return true;}if(this.rev<fv.rev){return false;}return true;};deconcept.util={getRequestParameter:function(_2b){var q=document.location.search||document.location.hash;if(_2b==null){return q;}if(q){var _2d=q.substring(1).split("&");for(var i=0;i<_2d.length;i++){if(_2d[i].substring(0,_2d[i].indexOf("="))==_2b){return _2d[i].substring((_2d[i].indexOf("=")+1));}}}return "";}};deconcept.SWFObjectUtil.cleanupSWFs=function(){var _2f=document.getElementsByTagName("OBJECT");for(var i=_2f.length-1;i>=0;i--){_2f[i].style.display="none";for(var x in _2f[i]){if(typeof _2f[i][x]=="function"){_2f[i][x]=function(){};}}}};if(deconcept.SWFObject.doPrepUnload){if(!deconcept.unloadSet){deconcept.SWFObjectUtil.prepUnload=function(){__flash_unloadHandler=function(){};__flash_savedUnloadHandler=function(){};window.attachEvent("onunload",deconcept.SWFObjectUtil.cleanupSWFs);};window.attachEvent("onbeforeunload",deconcept.SWFObjectUtil.prepUnload);deconcept.unloadSet=true;}}if(!document.getElementById&&document.all){document.getElementById=function(id){return document.all[id];};}var getQueryParamValue=deconcept.util.getRequestParameter;var FlashObject=deconcept.SWFObject;var SWFObject=deconcept.SWFObject;

///////////////////////////////////////////////////////////////////////////////
//
//  Silverlight.js   			version 2.0.30523.6
//
//  This file is provided by Microsoft as a helper file for websites that
//  incorporate Silverlight Objects. This file is provided under the Microsoft
//  Public License available at 
//  http://code.msdn.microsoft.com/silverlightjs/Project/License.aspx.  
//  You may not use or distribute this file or the code in this file except as 
//  expressly permitted under that license.
// 
//  Copyright (c) Microsoft Corporation. All rights reserved.
//
///////////////////////////////////////////////////////////////////////////////

if (!window.Silverlight)
{
    window.Silverlight = { };
}

//////////////////////////////////////////////////////////////////
//
// _silverlightCount:
//
// Counter of globalized event handlers
//
//////////////////////////////////////////////////////////////////
Silverlight._silverlightCount = 0;

//////////////////////////////////////////////////////////////////
//
// fwlinkRoot:
//
// Prefix for fwlink URL's
//
//////////////////////////////////////////////////////////////////
Silverlight.fwlinkRoot='http://go2.microsoft.com/fwlink/?LinkID=';

//////////////////////////////////////////////////////////////////
//  
// onGetSilverlight:
//
// Called by Silverlight.GetSilverlight to notify the page that a user
// has requested the Silverlight installer
//
//////////////////////////////////////////////////////////////////
Silverlight.onGetSilverlight = null;

//////////////////////////////////////////////////////////////////
//
// onSilverlightInstalled:
//
// Called by Silverlight.WaitForInstallCompletion when the page detects
// that Silverlight has been installed. The event handler is not called
// in upgrade scenarios.
//
//////////////////////////////////////////////////////////////////
Silverlight.onSilverlightInstalled = function () {window.location.reload(false);};

//////////////////////////////////////////////////////////////////
//
// isInstalled:
//
// Checks to see if the correct version is installed
//
//////////////////////////////////////////////////////////////////
Silverlight.isInstalled = function(version)
{
    var isVersionSupported=false;
    var container = null;
    
    try 
    {
        var control = null;
        
        try
        {
            control = new ActiveXObject('AgControl.AgControl');
            if ( version == null )
            {
                isVersionSupported = true;
            }
            else if ( control.IsVersionSupported(version) )
            {
                isVersionSupported = true;
            }
            control = null;
        }
        catch (e)
        {
            var plugin = navigator.plugins["Silverlight Plug-In"] ;
            if ( plugin )
            {
                if ( version === null )
                {
                    isVersionSupported = true;
                }
                else
                {
                    var actualVer = plugin.description;
                    if ( actualVer === "1.0.30226.2")
                        actualVer = "2.0.30226.2";
                    var actualVerArray =actualVer.split(".");
                    while ( actualVerArray.length > 3)
                    {
                        actualVerArray.pop();
                    }
                    while ( actualVerArray.length < 4)
                    {
                        actualVerArray.push(0);
                    }
                    var reqVerArray = version.split(".");
                    while ( reqVerArray.length > 4)
                    {
                        reqVerArray.pop();
                    }
                    
                    var requiredVersionPart ;
                    var actualVersionPart
                    var index = 0;
                    
                    
                    do
                    {
                        requiredVersionPart = parseInt(reqVerArray[index]);
                        actualVersionPart = parseInt(actualVerArray[index]);
                        index++;
                    }
                    while (index < reqVerArray.length && requiredVersionPart === actualVersionPart);
                    
                    if ( requiredVersionPart <= actualVersionPart && !isNaN(requiredVersionPart) )
                    {
                        isVersionSupported = true;
                    }
                }
            }
        }
    }
    catch (e) 
    {
        isVersionSupported = false;
    }
    if (container) 
    {
        document.body.removeChild(container);
    }
    
    return isVersionSupported;
}
//////////////////////////////////////////////////////////////////
//
// WaitForInstallCompletion:
//
// Occasionally checks for Silverlight installation status. If it
// detects that Silverlight has been installed then it calls
// Silverlight.onSilverlightInstalled();. This is only supported
// if Silverlight was not previously installed on this computer.
//
//////////////////////////////////////////////////////////////////
Silverlight.WaitForInstallCompletion = function()
{
    if ( ! Silverlight.isBrowserRestartRequired && Silverlight.onSilverlightInstalled )
    {
        try
        {
            navigator.plugins.refresh();
        }
        catch(e)
        {
        }
        if ( Silverlight.isInstalled(null) )
        {
            Silverlight.onSilverlightInstalled();
        }
        else
        {
              setTimeout(Silverlight.WaitForInstallCompletion, 3000);
        }    
    }
}
//////////////////////////////////////////////////////////////////
//
// __startup:
//
// Performs startup tasks
//////////////////////////////////////////////////////////////////
Silverlight.__startup = function()
{
    Silverlight.isBrowserRestartRequired = Silverlight.isInstalled(null);
    if ( !Silverlight.isBrowserRestartRequired)
    {
        Silverlight.WaitForInstallCompletion();
    }
    if (window.removeEventListener) { 
       window.removeEventListener('load', Silverlight.__startup , false);
    }
    else { 
        window.detachEvent('onload', Silverlight.__startup );
    }
}

if (window.addEventListener) 
{
    window.addEventListener('load', Silverlight.__startup , false);
}
else 
{
    window.attachEvent('onload', Silverlight.__startup );
}

///////////////////////////////////////////////////////////////////////////////
// createObject:
//
// Inserts a Silverlight <object> tag or installation experience into the HTML
// DOM based on the current installed state of Silverlight. 
//
/////////////////////////////////////////////////////////////////////////////////

Silverlight.createObject = function(source, parentElement, id, properties, events, initParams, userContext)
{
    var slPluginHelper = new Object();
    var slProperties = properties;
    var slEvents = events;
    
    slPluginHelper.version = slProperties.version;
    slProperties.source = source;    
    slPluginHelper.alt = slProperties.alt;
    
    //rename properties to their tag property names. For bacwards compatibility
    //with Silverlight.js version 1.0
    if ( initParams )
        slProperties.initParams = initParams;
    if ( slProperties.isWindowless && !slProperties.windowless)
        slProperties.windowless = slProperties.isWindowless;
    if ( slProperties.framerate && !slProperties.maxFramerate)
        slProperties.maxFramerate = slProperties.framerate;
    if ( id && !slProperties.id)
        slProperties.id = id;
    
    // remove elements which are not to be added to the instantiation tag
    delete slProperties.ignoreBrowserVer;
    delete slProperties.inplaceInstallPrompt;
    delete slProperties.version;
    delete slProperties.isWindowless;
    delete slProperties.framerate;
    delete slProperties.data;
    delete slProperties.src;
    delete slProperties.alt;


    // detect that the correct version of Silverlight is installed, else display install

    if (Silverlight.isInstalled(slPluginHelper.version))
    {
        //move unknown events to the slProperties array
        for (var name in slEvents)
        {
            if ( slEvents[name])
            {
                if ( name == "onLoad" && typeof slEvents[name] == "function" && slEvents[name].length != 1 )
                {
                    var onLoadHandler = slEvents[name];
                    slEvents[name]=function (sender){ return onLoadHandler(document.getElementById(id), userContext, sender)};
                }
                var handlerName = Silverlight.__getHandlerName(slEvents[name]);
                if ( handlerName != null )
                {
                    slProperties[name] = handlerName;
                    slEvents[name] = null;
                }
                else
                {
                    throw "typeof events."+name+" must be 'function' or 'string'";
                }
            }
        }
        slPluginHTML = Silverlight.buildHTML(slProperties);
    }
    //The control could not be instantiated. Show the installation prompt
    else 
    {
        slPluginHTML = Silverlight.buildPromptHTML(slPluginHelper);
    }

    // insert or return the HTML
    if(parentElement)
    {
        parentElement.innerHTML = slPluginHTML;
    }
    else
    {
        return slPluginHTML;
    }

}

///////////////////////////////////////////////////////////////////////////////
//
//  buildHTML:
//
//  create HTML that instantiates the control
//
///////////////////////////////////////////////////////////////////////////////
Silverlight.buildHTML = function( slProperties)
{
    var htmlBuilder = [];

    htmlBuilder.push('<object type=\"application/x-silverlight\" data="data:application/x-silverlight,"');
    if ( slProperties.id != null )
    {
        htmlBuilder.push(' id="' + slProperties.id + '"');
    }
    if ( slProperties.width != null )
    {
        htmlBuilder.push(' width="' + slProperties.width+ '"');
    }
    if ( slProperties.height != null )
    {
        htmlBuilder.push(' height="' + slProperties.height + '"');
    }
    htmlBuilder.push(' >');
    
    delete slProperties.id;
    delete slProperties.width;
    delete slProperties.height;
    
    for (var name in slProperties)
    {
        if (slProperties[name])
        {
            htmlBuilder.push('<param name="'+Silverlight.HtmlAttributeEncode(name)+'" value="'+Silverlight.HtmlAttributeEncode(slProperties[name])+'" />');
        }
    }
    htmlBuilder.push('<\/object>');
    return htmlBuilder.join('');
}



//////////////////////////////////////////////////////////////////
//
// createObjectEx:
//
// takes a single parameter of all createObject 
// parameters enclosed in {}
//
//////////////////////////////////////////////////////////////////

Silverlight.createObjectEx = function(params)
{
    var parameters = params;
    var html = Silverlight.createObject(parameters.source, parameters.parentElement, parameters.id, parameters.properties, parameters.events, parameters.initParams, parameters.context);
    if (parameters.parentElement == null)
    {
        return html;
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// buildPromptHTML
//
// Builds the HTML to prompt the user to download and install Silverlight
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.buildPromptHTML = function(slPluginHelper)
{
    var slPluginHTML = "";
    var urlRoot = Silverlight.fwlinkRoot;
    var shortVer = slPluginHelper.version ;
    if ( slPluginHelper.alt )
    {
        slPluginHTML = slPluginHelper.alt;
    }
    else
    {
        if (! shortVer )
        {
            shortVer="";
        }
        slPluginHTML = "<a href='javascript:Silverlight.getSilverlight(\"{1}\");' style='text-decoration: none;'><img src='{2}' alt='Get Microsoft Silverlight' style='border-style: none'/></a>";
        slPluginHTML = slPluginHTML.replace('{1}', shortVer );
        slPluginHTML = slPluginHTML.replace('{2}', urlRoot + '108181');
    }
    
    return slPluginHTML;
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// getSilverlight:
//
// Navigates the browser to the appropriate Silverlight installer
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.getSilverlight = function(version)
{
    if (Silverlight.onGetSilverlight )
    {
        Silverlight.onGetSilverlight();
    }
    
    var shortVer = "";
    var reqVerArray = String(version).split(".");
    if (reqVerArray.length > 1)
    {
        var majorNum = parseInt(reqVerArray[0] );
        if ( isNaN(majorNum) || majorNum < 2 )
        {
            shortVer = "1.0";
        }
        else
        {
            shortVer = reqVerArray[0]+'.'+reqVerArray[1];
        }
    }
    
    var verArg = "";
    
    if (shortVer.match(/^\d+\056\d+$/) )
    {
        verArg = "&v="+shortVer;
    }
    
    Silverlight.followFWLink("114576" + verArg);
}


///////////////////////////////////////////////////////////////////////////////////////////////
//
// followFWLink:
//
// Navigates to a url based on fwlinkid
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.followFWLink = function(linkid)
{
    top.location=Silverlight.fwlinkRoot+String(linkid);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// HtmlAttributeEncode:
//
// Encodes special characters in input strings as charcodes
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.HtmlAttributeEncode = function( strInput )
{
      var c;
      var retVal = '';

    if(strInput == null)
      {
          return null;
    }
      
      for(var cnt = 0; cnt < strInput.length; cnt++)
      {
            c = strInput.charCodeAt(cnt);

            if (( ( c > 96 ) && ( c < 123 ) ) ||
                  ( ( c > 64 ) && ( c < 91 ) ) ||
                  ( ( c > 43 ) && ( c < 58 ) && (c!=47)) ||
                  ( c == 95 ))
            {
                  retVal = retVal + String.fromCharCode(c);
            }
            else
            {
                  retVal = retVal + '&#' + c + ';';
            }
      }
      
      return retVal;
}
///////////////////////////////////////////////////////////////////////////////
//
//  default_error_handler:
//
//  Default error handling function 
//
///////////////////////////////////////////////////////////////////////////////

Silverlight.default_error_handler = function (sender, args)
{
    var iErrorCode;
    var errorType = args.ErrorType;

    iErrorCode = args.ErrorCode;

    var errMsg = "\nSilverlight error message     \n" ;

    errMsg += "ErrorCode: "+ iErrorCode + "\n";


    errMsg += "ErrorType: " + errorType + "       \n";
    errMsg += "Message: " + args.ErrorMessage + "     \n";

    if (errorType == "ParserError")
    {
        errMsg += "XamlFile: " + args.xamlFile + "     \n";
        errMsg += "Line: " + args.lineNumber + "     \n";
        errMsg += "Position: " + args.charPosition + "     \n";
    }
    else if (errorType == "RuntimeError")
    {
        if (args.lineNumber != 0)
        {
            errMsg += "Line: " + args.lineNumber + "     \n";
            errMsg += "Position: " +  args.charPosition + "     \n";
        }
        errMsg += "MethodName: " + args.methodName + "     \n";
    }
    alert (errMsg);
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// __cleanup:
//
// Releases event handler resources when the page is unloaded
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.__cleanup = function ()
{
    for (var i = Silverlight._silverlightCount - 1; i >= 0; i--) {
        window['__slEvent' + i] = null;
    }
    Silverlight._silverlightCount = 0;
    if (window.removeEventListener) { 
       window.removeEventListener('unload', Silverlight.__cleanup , false);
    }
    else { 
        window.detachEvent('onunload', Silverlight.__cleanup );
    }
}

///////////////////////////////////////////////////////////////////////////////////////////////
//
// __getHandlerName:
//
// Generates named event handlers for delegates.
//
///////////////////////////////////////////////////////////////////////////////////////////////
Silverlight.__getHandlerName = function (handler)
{
    var handlerName = "";
    if ( typeof handler == "string")
    {
        handlerName = handler;
    }
    else if ( typeof handler == "function" )
    {
        if (Silverlight._silverlightCount == 0)
        {
            if (window.addEventListener) 
            {
                window.addEventListener('onunload', Silverlight.__cleanup , false);
            }
            else 
            {
                window.attachEvent('onunload', Silverlight.__cleanup );
            }
        }
        var count = Silverlight._silverlightCount++;
        handlerName = "__slEvent"+count;
        
        window[handlerName]=handler;
    }
    else
    {
        handlerName = null;
    }
    return handlerName;
}

/****************************************************************************
* JW WMV Player version 1.1, created with M$ Silverlight 1.0
*
* This file contains all logic for the JW WMV Player. For a functional setup,
* the following two files are also needed:
* - silverlight.js (for instantiating the silverlight plugin)
* - wmvplayer.xaml (or another XAML skin describing the player graphics)
*
* More info: http://www.jeroenwijering.com/?item=JW_WMV_Player
****************************************************************************/
if(typeof jeroenwijering == "undefined") {
	var jeroenwijering = new Object();
	jeroenwijering.utils = new Object();
}










/****************************************************************************
* The player wrapper; loads config variables and starts MVC cycle.
****************************************************************************/
jeroenwijering.Player = function(cnt,src,cfg) {
	this.controller;
	this.model;
	this.view;
	this.configuration = {
		backgroundcolor:'FFFFFF',
		windowless:'false',
		file:'',
		height:'260',
		image:'',
		backcolor:'FFFFFF',
		frontcolor:'000000',
		lightcolor:'000000',
		screencolor:'000000',
		width:'320',
		logo:'',
		overstretch:'false',
		shownavigation:'true',
		showstop:'false',
		showdigits:'true',
		usefullscreen:'true',
		usemute:'false',
		autostart:'false',
		bufferlength:'3',
		duration:'0',
		repeat:'false',
		sender:'',
		start:'0',
		volume:'90',
		link:'',
		linkfromdisplay:'false',
		linktarget:'_self'
	};
	for(itm in this.configuration) {
		if(cfg[itm] != undefined) {
			if (itm.indexOf('color') > 0) { 
				this.configuration[itm] = cfg[itm].substr(cfg[itm].length-6);
			} else {
				this.configuration[itm] = cfg[itm];
			}
		}
	}
	Silverlight.createObjectEx({
		source:src,
		parentElement:cnt,
		properties:{
			width:this.configuration['width'],
			height:this.configuration['height'],
			version:'1.0',
			inplaceInstallPrompt:true,
			isWindowless:this.configuration['windowless'],
			background:'#'+this.configuration['backgroundcolor']
		},
		events:{
			onLoad:this.onLoadHandler,
			onError:null
		},
		context:this
	});
}

jeroenwijering.Player.prototype = {
	addListener: function(typ,fcn) {
		this.view.listeners.push({type:typ,func:fcn});
	},

	getConfig: function() { 
		return this.configuration;
	},

	onLoadHandler: function(pid,tgt,sdr) {
		tgt.configuration['sender'] = sdr;
		tgt.controller = new jeroenwijering.Controller(tgt.configuration);
		tgt.view = new jeroenwijering.View(tgt.configuration,tgt.controller);
		tgt.model = new jeroenwijering.Model(tgt.configuration,tgt.controller,tgt.view);
		tgt.controller.startMVC(tgt.view,tgt.model);
	},

	sendEvent: function(typ,prm) {
		switch(typ.toUpperCase()) {
			case 'LINK':
				this.controller.setLink();
				break;
			case 'LOAD':
				this.controller.setLoad(prm);
				break;
			case 'MUTE':
				this.controller.setMute();
				break;
			case 'PLAY':
				this.controller.setPlay();
				break;
			case 'SCRUB':
				this.controller.setScrub(prm);
				break;
			case 'STOP':
				this.controller.setStop();
				break;
			case 'VOLUME':
				this.controller.setVolume(prm);
				break;
			case 'FULLSCREEN':
				this.controller.setFullscreen();
				break;
		}
	}
}










/****************************************************************************
* The controller of the player MVC triad, which processes all user input.
****************************************************************************/
jeroenwijering.Controller = function(cfg) {
	this.configuration = cfg;
}

jeroenwijering.Controller.prototype = {
	startMVC: function(vie,mdl) {
		this.view = vie;
		this.model = mdl;
		if(this.configuration['usemute'] == 'true') {
			this.view.onVolume(0);
			this.view.onMute(true);
			this.model.goVolume(0);
		} else {
			this.view.onVolume(this.configuration['volume']);
			this.model.goVolume(this.configuration['volume']);
		}
		if(this.configuration['autostart'] == 'true') {
			this.model.goStart();
		} else { 
			this.model.goPause();
		}
	},

	setState: function(old,stt) {
		this.state = stt;
		var pos = this.configuration['start'];
		if(old == 'Closed' && pos > 0) {
			setTimeout(jeroenwijering.utils.delegate(this,this.setScrub),200,pos);
		} 
	},

	setLink: function() {
		if (this.configuration['linktarget'].indexOf('javascript:') == 0) {
			return Function(this.configuration['linktarget']).apply();
		} else if (this.configuration['linktarget'] == '_blank') {
			window.open(this.configuration['link']);
		} else if (this.configuration['linktarget'] != '') {
			window.location = this.configuration['link'];
		}
	},

	setLoad: function(fil) {
		if(this.model.state != "Closed") {
			this.model.goStop(); 
		}
		this.configuration['file'] = fil;
		if(this.configuration['autostart'] == 'true') {
			setTimeout(jeroenwijering.utils.delegate(this.model,this.model.goStart),100);
		}
	},

	setMute: function() {
		if(this.configuration['usemute'] == 'true') {
			this.configuration['usemute'] = 'false';
			this.model.goVolume(this.configuration['volume']);
			this.view.onMute(false);
		} else {
			this.configuration['usemute'] = 'true';
			this.model.goVolume(0);
			this.view.onMute(true);
		}
	},

	setPlay: function() {
		if(this.state == 'Buffering' || this.state == 'Playing') {
			if(this.configuration['duration'] == 0) { 
				this.model.goStop();
			} else { 
				this.model.goPause();
			}
		} else {
			this.model.goStart();
		}
	},

	setScrub: function(sec) {
		if(sec < 2) {
			sec = 0;
		} else if (sec > this.configuration['duration']-4) {
			sec = this.configuration['duration']-4;
		}
		if(this.state == 'Buffering' || this.state == 'Playing') {
			this.model.goStart(sec);
		} else {
			this.model.goPause(sec);
		}
	},

	setStop: function() {
		this.model.goStop();
	},

	setVolume: function(pct) {
		if(pct < 0) { pct = 0; } else if(pct > 100) { pct = 100; }
		this.configuration['volume'] = Math.round(pct);
		this.model.goVolume(pct);
		this.view.onVolume(pct);
		if(this.configuration['usemute'] == 'true') {
			this.configuration['usemute'] = 'false';
			this.view.onMute(false);
		} 
	},

	setFullscreen: function() {
		var fss = !this.configuration['sender'].getHost().content.FullScreen;
		this.configuration['sender'].getHost().content.FullScreen = fss;
		jeroenwijering.utils.delegate(this.view,this.view.onFullscreen);
	}
}










/****************************************************************************
* The view of the player MVC triad, which manages the graphics.
****************************************************************************/
jeroenwijering.View = function(cfg,ctr) {
	this.configuration = cfg;
	this.listeners = Array();
	this.controller = ctr;
	this.fstimeout;
	this.fslistener;
	this.display = this.configuration['sender'].findName("PlayerDisplay");
	this.controlbar = this.configuration['sender'].findName("PlayerControls");
	this.configuration['sender'].getHost().content.onResize = 
		jeroenwijering.utils.delegate(this,this.resizePlayer);
	this.configuration['sender'].getHost().content.onFullScreenChange = 
		jeroenwijering.utils.delegate(this,this.onFullscreen);
	this.assignColorsClicks();
	this.resizePlayer();
}

jeroenwijering.View.prototype = {
	onBuffer: function(pct) {
		var snd = this.configuration['sender'];
		if(pct == 0) { 
			snd.findName("BufferText").Text = null;
		} else { 
			pct < 10 ? pct = "0"+pct: pct = ""+pct;
			snd.findName("BufferText").Text = pct;
		}
		this.delegate('BUFFER',Array(pct));
	},

	onFullscreen: function(fss) {
		var snd = this.configuration['sender'];
		var fst = snd.getHost().content.FullScreen;
		if(fst) { 
			this.fstimeout = setTimeout(jeroenwijering.utils.delegate(this,
				this.hideFSControls),2000);
			this.fslistener = this.display.addEventListener('MouseMove',
				jeroenwijering.utils.delegate(this,this.showFSControls));
			snd.findName("FullscreenSymbol").Visibility = "Collapsed";
			snd.findName("FullscreenOffSymbol").Visibility = "Visible";
		} else {
			clearTimeout(this.fstimeout);
			this.display.removeEventListener("MouseMove",this.fslistener);
			this.controlbar.Visibility = "Visible";
			this.display.Cursor = "Hand";
			snd.findName("FullscreenSymbol").Visibility = "Visible";
			snd.findName("FullscreenOffSymbol").Visibility = "Collapsed";
		}
		this.resizePlayer();
		this.delegate('FULLSCREEN');
	},

	showFSControls: function(sdr,arg) {
		var vbt = sdr.findName('PlayerControls');
		var yps = arg.GetPosition(vbt).Y;
		clearTimeout(this.fstimeout);
		this.controlbar.Visibility = "Visible";
		this.display.Cursor = "Hand";
		if(yps < 0) { 
			this.fstimeout = setTimeout(jeroenwijering.utils.delegate(this,
				this.hideFSControls),2000);
		}
	},

	hideFSControls: function() {
		this.controlbar.Visibility = "Collapsed";
		this.display.Cursor = "None";
	},

	onLoad: function(pct) {
		var snd = this.configuration['sender'];
		var max = snd.findName("TimeSlider").Width;
		snd.findName("DownloadProgress").Width = Math.round(max*pct/100);
		this.delegate('LOAD',Array(pct));
	},

	onMute: function(mut) {
		var snd = this.configuration['sender'];
		this.configuration['usemute'] = ''+mut;
		if(mut) {
			snd.findName("VolumeHighlight").Visibility = "Collapsed";
			snd.findName("MuteSymbol").Visibility = "Visible";
			snd.findName("MuteOffSymbol").Visibility = "Collapsed";
			if(this.state == 'Playing') {
				snd.findName("MuteIcon").Visibility = "Visible";
			}
		} else {
			snd.findName("VolumeHighlight").Visibility = "Visible";
			snd.findName("MuteSymbol").Visibility = "Collapsed";
			snd.findName("MuteOffSymbol").Visibility = "Visible";
			snd.findName("MuteIcon").Visibility = "Collapsed";
		}
		this.delegate('MUTE');
	},

	onState: function(old,stt) {
		var snd = this.configuration['sender'];
		this.state = stt;
		if(stt == 'Buffering' || stt == 'Playing' || stt == 'Opening') {
			snd.findName("PlayIcon").Visibility = "Collapsed";
			snd.findName("PlaySymbol").Visibility = "Collapsed";
			snd.findName("PlayOffSymbol").Visibility = "Visible";
			if (stt=='Playing') {
				snd.findName("BufferIcon").Visibility = "Collapsed";
				snd.findName("BufferText").Visibility = "Collapsed";
				if(this.configuration['usemute'] == 'true') {
					snd.findName("MuteIcon").Visibility = "Visible";
				}
			} else{
				snd.findName("BufferIcon").Visibility = "Visible";
				snd.findName("BufferText").Visibility = "Visible";
			}
		} else { 
			snd.findName("MuteIcon").Visibility = "Collapsed";
			snd.findName("BufferIcon").Visibility = "Collapsed";
			snd.findName("BufferText").Visibility = "Collapsed";
			snd.findName("PlayOffSymbol").Visibility = "Collapsed";
			snd.findName("PlaySymbol").Visibility = "Visible";
			if(this.configuration['linkfromdisplay'] == 'true') {
				snd.findName("PlayIcon").Visibility = "Collapsed";
			} else { 
				snd.findName("PlayIcon").Visibility = "Visible";
			}
		}
		try {
			if(!(old == 'Completed' && stt == 'Buffering') &&
				!(old == 'Buffering' && stt == 'Paused')) {
				playerStatusChange(old.toUpperCase(),stt.toUpperCase());
			}
		} catch (err) {}
		this.delegate('STATE',Array(old,stt));
	},

	onTime: function(elp,dur) {
		var snd = this.configuration['sender'];
		var snd = this.configuration['sender'];
		var max = snd.findName("TimeSlider").Width;
		if(dur > 0) {
			var pos = Math.round(max*elp/dur);
			this.configuration['duration'] = dur;
			snd.findName("ElapsedText").Text = jeroenwijering.utils.timestring(elp);
			snd.findName("RemainingText").Text = jeroenwijering.utils.timestring(dur-elp);
			snd.findName("TimeSymbol").Visibility = "Visible";
			snd.findName("TimeSymbol")['Canvas.Left'] = pos+4;
			snd.findName("TimeHighlight").Width = pos-2;
		} else  { 
			snd.findName("TimeSymbol").Visibility = "Collapsed";
		}
		this.delegate('TIME',Array(elp,dur));
	},

	onVolume: function(pct) {
		var snd = this.configuration['sender'];
		snd.findName("VolumeHighlight").Width = Math.round(pct/5);
		this.delegate('VOLUME',Array(pct));
	},

	assignColorsClicks: function() {
		this.display.Cursor = "Hand";
		this.display.Background = "#FF"+this.configuration['screencolor'];
		if(this.configuration['linkfromdisplay'] == 'false') { 
			this.display.addEventListener('MouseLeftButtonUp',
				jeroenwijering.utils.delegate(this.controller,
				this.controller.setPlay));
		} else { 
			this.display.addEventListener('MouseLeftButtonUp',
				jeroenwijering.utils.delegate(this.controller,
				this.controller.setLink));
			this.display.findName("PlayIcon").Visibility = "Collapsed";
		}
		if(this.configuration['logo'] != '') {
			this.display.findName('OverlayCanvas').Visibility = "Visible";
			this.display.findName('OverlayLogo').ImageSource = 
				this.configuration['logo'];
		}
		this.controlbar.findName("ControlbarBack").Fill = 
			"#FF"+this.configuration['backcolor'];
		this.assignButton('Play',this.controller.setPlay);
		this.assignButton('Stop',this.controller.setStop);
		this.configuration['sender'].findName('ElapsedText').Foreground = 
			"#FF"+this.configuration['frontcolor'];
		this.assignSlider('Time',this.changeTime);
		this.configuration['sender'].findName('DownloadProgress').Fill = 
			"#FF"+this.configuration['frontcolor'];
		this.configuration['sender'].findName('RemainingText').Foreground = 
			"#FF"+this.configuration['frontcolor'];
		this.assignButton('Link',this.controller.setLink);
		this.assignButton('Fullscreen',this.controller.setFullscreen);
		this.assignButton('Mute',this.controller.setMute);
		this.assignSlider('Volume',this.changeVolume);
	},

	assignButton: function(btn,act) {
		var el1 = this.configuration['sender'].findName(btn+'Button');
		el1.Cursor = "Hand";
		el1.addEventListener('MouseLeftButtonUp',
			jeroenwijering.utils.delegate(this.controller,act));
		el1.addEventListener('MouseEnter',
			jeroenwijering.utils.delegate(this,this.rollOver));
		el1.addEventListener('MouseLeave',
			jeroenwijering.utils.delegate(this,this.rollOut));
		this.configuration['sender'].findName(btn+'Symbol').Fill = 
			"#FF"+this.configuration['frontcolor'];
		try {
			this.configuration['sender'].findName(btn+'OffSymbol').Fill = 
				"#FF"+this.configuration['frontcolor'];
		} catch(e) {}
	},

	assignSlider: function(sld,act) {
		var el1 = this.configuration['sender'].findName(sld+'Button');
		el1.Cursor = "Hand";
		el1.addEventListener('MouseLeftButtonUp',
			jeroenwijering.utils.delegate(this,act));
		el1.addEventListener('MouseEnter',
			jeroenwijering.utils.delegate(this,this.rollOver));
		el1.addEventListener('MouseLeave',
			jeroenwijering.utils.delegate(this,this.rollOut));
		this.configuration['sender'].findName(sld+'Slider').Fill = 
			"#FF"+this.configuration['frontcolor'];
		this.configuration['sender'].findName(sld+'Highlight').Fill = 
			"#FF"+this.configuration['frontcolor'];
		this.configuration['sender'].findName(sld+'Symbol').Fill = 
			"#FF"+this.configuration['frontcolor'];
	},

	delegate: function(typ,arg) {
		for(var i=0; i<this.listeners.length; i++) {
			if(this.listeners[i]['type'].toUpperCase() == typ) {
				this.listeners[i]['func'].apply(null,arg);
			}
		}
	},

	rollOver: function(sdr) {
		var str = sdr.Name.substr(0,sdr.Name.length-6);
		this.configuration['sender'].findName(str+'Symbol').Fill = 
			"#FF"+this.configuration['lightcolor'];
		try {
			this.configuration['sender'].findName(str+'OffSymbol').Fill = 
				"#FF"+this.configuration['lightcolor'];
		} catch(e) {}
	},

	rollOut: function(sdr) {
		var str = sdr.Name.substr(0,sdr.Name.length-6);
		this.configuration['sender'].findName(str+'Symbol').Fill = 
			"#FF"+this.configuration['frontcolor'];
		try {
			this.configuration['sender'].findName(str+'OffSymbol').Fill = 
				"#FF"+this.configuration['frontcolor'];
		} catch(e) {}
	},

	changeTime: function(sdr,arg) {
		var tbt = sdr.findName('TimeSlider');
		var xps = arg.GetPosition(tbt).X;
		var sec = Math.floor(xps/tbt.Width*this.configuration['duration']);
		this.controller.setScrub(sec);
	},

	changeVolume: function(sdr,arg) {
		var vbt = sdr.findName('VolumeButton');
		var xps = arg.GetPosition(vbt).X;
		this.controller.setVolume(xps*5);
	},

	resizePlayer: function() {
		var wid = this.configuration['sender'].getHost().content.actualWidth;
		var hei = this.configuration['sender'].getHost().content.actualHeight;
		var fss = this.configuration['sender'].getHost().content.FullScreen;
		if(this.configuration['shownavigation'] == 'true') {
			if(fss == true) {
				this.resizeDisplay(wid,hei);
				this.controlbar['Canvas.Left'] = Math.round(wid/2-250);
				this.resizeControlbar(500,hei-this.controlbar.Height-16);
				this.controlbar.findName('ControlbarBack')['Opacity'] = 0.5;
			} else { 
				this.resizeDisplay(wid,hei-20);
				this.controlbar['Canvas.Left'] = 0;
				this.resizeControlbar(wid,hei-this.controlbar.Height);
				this.controlbar.findName('ControlbarBack')['Opacity'] = 1;
			}
		} else {
			this.resizeDisplay(wid,hei);
		}
	},

	resizeDisplay: function(wid,hei) {
		this.stretchElement('PlayerDisplay',wid,hei);
		this.stretchElement('VideoWindow',wid,hei);
		this.stretchElement('PlaceholderImage',wid,hei);
		this.centerElement('PlayIcon',wid,hei);
		this.centerElement('MuteIcon',wid,hei);
		this.centerElement('BufferIcon',wid,hei);
		this.centerElement('BufferText',wid,hei);
		this.display.findName('OverlayCanvas')['Canvas.Left'] = wid -
			this.display.findName('OverlayCanvas').Width - 10;
		this.display.Visibility = "Visible";
	},

	resizeControlbar: function(wid,yps,alp) {
		this.controlbar['Canvas.Top'] = yps;
		this.stretchElement('PlayerControls',wid);
		this.stretchElement('ControlbarBack',wid);
		this.placeElement('PlayButton',0);
		var lft = 17;
		this.placeElement('VolumeButton',wid-24);
		this.placeElement('MuteButton',wid-37);
		var rgt = 37;
		if(this.configuration['showstop'] == 'true') {
			this.placeElement('StopButton',lft);
			lft += 17;
		} else {
			this.controlbar.findName('StopButton').Visibility="Collapsed";
		}
		if(this.configuration['usefullscreen'] == 'true') {
			rgt += 18;
			this.placeElement('FullscreenButton',wid-rgt);
		} else {
			this.controlbar.findName('FullscreenButton').Visibility = 
				"Collapsed";
		}
		if(this.configuration['link'] != '') {
			rgt += 18;
			this.placeElement('LinkButton',wid-rgt);
		} else {
			this.controlbar.findName('LinkButton').Visibility="Collapsed";
		}
		if(this.configuration['showdigits'] == 'true' && wid-rgt-lft> 160) {
			rgt += 35;
			this.controlbar.findName('RemainingButton').Visibility="Visible";
			this.controlbar.findName('ElapsedButton').Visibility="Visible";
			this.placeElement('RemainingButton',wid-rgt);
			this.placeElement('ElapsedButton',lft);
			lft +=35;
		} else {
			this.controlbar.findName('RemainingButton').Visibility = 
				"Collapsed";
			this.controlbar.findName('ElapsedButton').Visibility="Collapsed";
		}
		this.placeElement('TimeButton',lft);
		this.stretchElement('TimeButton',wid-lft-rgt);
		this.stretchElement('TimeShadow',wid-lft-rgt);
		this.stretchElement('TimeStroke',wid-lft-rgt);
		this.stretchElement('TimeFill',wid-lft-rgt);
		this.stretchElement('TimeSlider',wid-lft-rgt-10);
		this.stretchElement('DownloadProgress',wid-lft-rgt-10);
		var tsb = this.configuration['sender'].findName('TimeSymbol');
		this.stretchElement('TimeHighlight',tsb['Canvas.Left']-5);
		this.controlbar.Visibility = "Visible";
	},

	centerElement: function(nam,wid,hei) {
		var elm = this.configuration['sender'].findName(nam);
		elm['Canvas.Left'] = Math.round(wid/2 - elm.Width/2);
		elm['Canvas.Top'] = Math.round(hei/2 - elm.Height/2);
	},

	stretchElement: function(nam,wid,hei) {
		var elm = this.configuration['sender'].findName(nam);
		elm.Width = wid;
		if (hei != undefined) { elm.Height = hei; }
	},

	placeElement: function(nam,xps,yps) {
		var elm = this.configuration['sender'].findName(nam);
		elm['Canvas.Left'] = xps;
		if(yps) { elm['Canvas.Top'] = yps; }
	}
}










/****************************************************************************
* The model of the player MVC triad, which stores all playback logic.
****************************************************************************/
jeroenwijering.Model = function(cfg,ctr,vie) {
	this.configuration = cfg;
	this.controller = ctr;
	this.view = vie;
	this.video = this.configuration['sender'].findName("VideoWindow");
	this.preview = this.configuration['sender'].findName("PlaceholderImage");
	var str = {
		'true':'UniformToFill',
		'false':'Uniform',
		'fit':'Fill',
		'none':'None'
	}
	this.state = this.video.CurrentState;
	this.timeint;
	this.video.Stretch = str[this.configuration['overstretch']];
	this.preview.Stretch = str[this.configuration['overstretch']];
	this.video.BufferingTime = 
		jeroenwijering.utils.spanstring(this.configuration['bufferlength']);
	this.video.AutoPlay = true;
	this.video.AddEventListener("CurrentStateChanged",
		jeroenwijering.utils.delegate(this,this.stateChanged));
	this.video.AddEventListener("MediaEnded",
		jeroenwijering.utils.delegate(this,this.mediaEnded));
	this.video.AddEventListener("BufferingProgressChanged",
		jeroenwijering.utils.delegate(this,this.bufferChanged));
	this.video.AddEventListener("DownloadProgressChanged",
		jeroenwijering.utils.delegate(this,this.downloadChanged));
	if(this.configuration['image'] != '') {
		this.preview.Source = this.configuration['image'];
	}
}

jeroenwijering.Model.prototype = {
	goPause: function(sec) {
		this.video.pause();
		if(!isNaN(sec)) {
			this.video.Position = jeroenwijering.utils.spanstring(sec);
		}
		this.timeChanged();
	},

	goStart: function(sec) {
		this.video.Visibility = 'Visible';
		this.preview.Visibility = 'Collapsed';
		if(this.state == "Closed") {
			this.video.Source = this.configuration['file'];
		} else {
			this.video.play();
		}
		if(!isNaN(sec)) {
			this.video.Position = jeroenwijering.utils.spanstring(sec);
		}
	},

	goStop: function() {
		this.video.Visibility = 'Collapsed';
		this.preview.Visibility = 'Visible';
		this.goPause(0);
		this.video.Source = 'null';
		this.view.onBuffer(0);
		clearInterval(this.timeint);
	},

	goVolume: function(pct) {
		this.video.Volume = pct/100;
	},

	stateChanged: function() {
		var stt = this.video.CurrentState;
		if(stt != this.state) {
			this.controller.setState(this.state,stt);
			this.view.onState(this.state,stt);
			this.state = stt;
			this.configuration['duration'] = 
				Math.round(this.video.NaturalDuration.Seconds*10)/10;
			if(stt != "Playing" && stt != "Buffering" && stt != "Opening") {
				clearInterval(this.timeint);
			} else {
				this.timeint = setInterval(jeroenwijering.utils.delegate(
					this,this.timeChanged),100);
			}
		}
	},

	mediaEnded: function() {
		if(this.configuration['repeat'] == 'true') {
			this.goStart(0);
		} else {
			this.state = 'Completed';
			this.view.onState(this.state,'Completed');
			this.video.Visibility = 'Collapsed';
			this.preview.Visibility = 'Visible';
			this.goPause(0);
		}
	},

	bufferChanged: function() {
		var bfr = Math.round(this.video.BufferingProgress*100);
		this.view.onBuffer(bfr);
	},

	downloadChanged: function() {
		var dld = Math.round(this.video.DownloadProgress*100);
		this.view.onLoad(dld);
	},

	timeChanged: function() {
		var pos = Math.round(this.video.Position.Seconds*10)/10;
		this.view.onTime(pos,this.configuration['duration']);
	}
}










/****************************************************************************
* Some utility functions.
****************************************************************************/
jeroenwijering.utils.delegate = function(obj,fcn) {
	return function() {
		return fcn.apply(obj,arguments);
	}
}
jeroenwijering.utils.timestring = function(stp) {
	var hrs = Math.floor(stp/3600);
	var min = Math.floor(stp%3600/60);
	var sec = Math.round(stp%60);
	var str = "";
	sec > 9 ? str += sec: str +='0'+sec;
	min > 9 ? str = min+":"+str: str='0'+min+":"+str;
	hrs > 0 ? str = hrs+":"+str: null;
	return str;
}
jeroenwijering.utils.spanstring = function(stp) {
	var hrs = Math.floor(stp/3600);
	var min = Math.floor(stp%3600/60);
	var sec = Math.round(stp%60*10)/10;
	var str = hrs+':'+min+':'+sec;
	return str;
}
