this.MSA=this.MSA||{},this.MSA.MeControl=this.MSA.MeControl||{},this.MSA.MeControl.WebCore=function(e,F,W,q){"use strict";q=q&&q.hasOwnProperty("default")?q.default:q;var t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",a=63,i=16,o=function(){return t[Math.floor(Math.random()*t.length)]};function n(e){var t=0,n=e||null;if(!n){n="";for(var r=0;r<i;r++)n+=o()}return{getValue:function(){var e=n+"."+t;return e.length>a&&(e=e.substring(0,a)+"!"),e},extend:function(){n=this.getValue(),t=0},increment:function(){t++}}}function r(e){return(e=e||new Date).toISOString?e.toISOString():(n=function(e,t){return void 0===t&&(t=1),("000"+e).slice(-(t+1))},[(t=e).getUTCFullYear(),"-",n(t.getUTCMonth()+1),"-",n(t.getUTCDate()),"T",n(t.getUTCHours()),":",n(t.getUTCMinutes()),":",n(t.getUTCSeconds()),".",n(t.getUTCMilliseconds(),2),"Z"].join(""));var t,n}function s(e){e=e||"";for(var t={names:["WindowsPhone","Windows","Linux","Android","iOS","MacOS"],regexes:[/windows.+phone/gi,/win/gi,/linux/gi,/android/gi,/ipad|ipod|iphone/gi,/mac/gi]},n="Unknown",r=0;r<t.names.length;r++)if(t.regexes[r].test(e)){n=t.names[r];break}return n}function c(e,t){var n=new RegExp("("+(t?t.join("|"):"[^?&]*")+")=([^&#]*)","g");return e&&e.replace(n,"$1=**")}function u(e,t,n){void 0===t&&(t=["*"]);var r={};for(var a in e)if(e.hasOwnProperty(a)){var i=e[a],o=!t.indexOf||-1===t.indexOf("!"+a)&&(n||-1!==t.indexOf("*")||-1!==t.indexOf(a)),s=typeof i;switch(s){case"object":r[a]=null!==i?u(i,t,o):"*null*";break;case"function":o=!0;default:r[a]=o?"*"+s+"*":i}}return r}function d(e,t){void 0===t&&(t="");var a="&";function i(e,t,n){return""+n+e+"="+("string"==typeof t?"%27"+encodeURIComponent(t)+"%27":t.toString())}return m(e,function e(t,n,r){return m(n,e,i,a,""+r+t+"-")},i,a,t)}function l(e,t){var a=",";function i(e,t,n){return'"'+e+'":'+("string"==typeof t?'"'+t.replace(/['"]/g,'\\"')+'"':t.toString())}return m(e,function e(t,n,r){return'"'+t+'":{'+m(n,e,i,a,"")+"}"},i,a,"")}function m(e,t,n,r,a){var i=[];for(var o in e)if(e.hasOwnProperty(o)){var s=e[o];switch(typeof s){case"object":null!=s&&i.push(t(o,s,a));break;case"function":case"undefined":break;case"string":default:i.push(n(o,s,a))}}return i.join(r)}var p,f="https://web.vortex.data.microsoft.com/collect/v1",g=/PageView|PageAction/,v=150,h=[],_=((p={})[0]=function(){},p[1]=function(e){if(!F.ME.Config.isUT)for(var t=function(e){var t=[d(e.partA),e.partB&&d(e.partB,"-"),d(e.partC,"*")].join("&").replace(/&&/g,"&"),n=document.createElement("img");n.src="https://web.vortex.data.microsoft.com/collect/v1/t.gif?"+t;var r=function(){setTimeout(function(){document.body.removeChild(n)},0)};n.addEventListener("load",r),n.addEventListener("error",r),document.body.appendChild(n)},n=0,r=e;n<r.length;n++){var a=r[n];t(a)}},p[2]=function(e){if(!F.ME.Config.isUT){for(var t=[],n=0,r=e;n<r.length;n++){var a=r[n];t.push(b(a))}var i=window.XDomainRequest?new window.XDomainRequest:window.XMLHttpRequest?new window.XMLHttpRequest:null;i&&(i.withCredentials&&(i.withCredentials=!0),i.open("POST",f),i.send(t.join("\n")))}},p[3]=function(e){if(!F.ME.Config.isUT){for(var t=[],n=0,r=e;n<r.length;n++){var a=r[n];t.push(b(a))}navigator.sendBeacon(f,t.join("\n"))||_[2](e)}},p),I=navigator&&navigator.sendBeacon?3:2;function w(e){if(e){var t=e.partA.name.split(".").pop();F.ME.Config.telEvs&&-1!==F.ME.Config.telEvs.indexOf(t)&&(h.push(e),g.test(t)&&setTimeout(U,v))}}function U(){var e=h.length;return 0<e&&(_[I](h),h=[]),e}function b(e){var t={ext:e.partA.ext};e.partA.ext=void 0;var n={data:e.partC};n.data.baseData=e.partB;var r=[];return r.push(l(e.partA)),r.push(l(n)),r.push(l(t)),"{"+r.join(",")+"}"}window.addEventListener("unload",U);var C="MeControl",y=F.perfNow(),A=n(),D=F.guid(),S="None",T={};function M(e){A=n(e)}function E(){return A}function O(){return D}function N(){return S}function x(){return F.perfNow()-y}function P(){var e=F.getOptions(),t=e&&e.userData,n=t&&t.idp,r=c(F.getPageUrl()),a={metaTags:{authtype:n||void 0,pgpart:F.ME.Config.ptn},config:F.ME.Config,url:r};return JSON.stringify(a)}function k(e){return{ver:"2.1",name:e,time:r(),appId:"JS:"+C,appVer:"Web:"+F.ME.Config.ver,cV:A.getValue(),os:s(window.navigator.userAgent),ext:{javascript:{ver:"1.1",libVer:"4.2.3",domain:window.location.hostname,userConsent:!1},app:{env:F.ME.Config.int?"Test":"Prod"}}}}function R(e,t){T[e]=t}function L(e,t){return"PageView"===e&&(S=t.pageName),T[e]&&T[e](t)||null}function Q(e,t){w(L(e,t))}var V=["*","!idp","!authenticatedState"],B=/https?:\/\/.*/i;R("ClientError",function(e){return{partA:k("Ms.Webi.ClientError"),partB:void 0,partC:{baseType:void 0,errorName:e.name,errorMessage:e.details,errorType:e.type,errorInfo:P(),wasDisplayed:e.displayed,pageName:N(),impressionGuid:O(),market:F.ME.Config.mkt}}}),R("OutgoingRequest",function(e){return E().increment(),{partA:k("Ms.Webi.OutgoingRequest"),partB:{operationName:e.currentOperation,dependencyOperationName:e.serviceOperation,dependencyName:e.service,latencyMs:e.duration,succeeded:e.success,targetUri:c(e.url)},partC:{baseType:"Ms.Qos.OutgoingServiceRequest",message:e.message,pageName:N(),impressionGuid:O(),market:F.ME.Config.mkt,customData:P()}}}),R("PageAction",function(e){E().increment();var t=k("Ms.Webi.PageAction"),n=e.content,r=n&&W.getContentBlob(n.id,n.area,n.type,n.slot)||"{}";return{partA:t,partB:{ver:"1.1",pageName:N(),impressionGuid:O(),destUri:e.targetUrl,market:F.ME.Config.mkt,pageTags:P(),contentVer:"2.0",content:"["+r+"]"},partC:{baseType:"Ms.Content.PageAction",timeToAction:x(),cookieEnabled:!0===navigator.cookieEnabled,isJs:!0,isLoggedIn:e.hasActiveUser||!1,isManual:!0}}}),R("PageView",function(e){return E().extend(),{partA:k("Ms.Webi.PageView"),partB:{ver:"1.1",pageName:e.pageName,impressionGuid:O(),market:F.ME.Config.mkt,pageTags:P(),resHeight:F.w.screen&&F.w.screen.height||0,resWidth:F.w.screen&&F.w.screen.width||0},partC:{baseType:"Ms.Content.PageView",cookieEnabled:!0===navigator.cookieEnabled,isJs:!0,isLoggedIn:e.hasActiveUser||!1,isManual:!0}}}),R("PartnerApiCall",function(e){var t=k("Ms.Webi.MeControl.PartnerApiCall"),n=u(e.params,V);return function e(t){for(var n in t){var r=t[n];switch(typeof r){case"object":null!=r&&e(r);break;case"string":B.test(r)&&(t[n]=c(r))}}}(n),{partA:t,partB:void 0,partC:{baseType:void 0,partner:F.ME.Config.ptn,controlVersion:F.ME.Config.ver,methodName:e.method,parameters:JSON.stringify(n)}}});var H={fireEvent:Q,setCv:M},j='<div class="msame_Drop_active_pic"><div class="msame_Drop_active_piccont"><div class="msame_Drop_active_picframe">{0}</div></div></div><div class="msame_Drop_active_right">{1}</div>',G='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div><div class="msame_TxtTrunc msame_Drop_active_email">{2}</div><div class="msame_TxtTrunc msame_Drop_active_email">{3}</div>',J='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div><div class="msame_TxtTrunc msame_Drop_active_email">{2}</div>',X='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div>',Y='<div class="msame_TxtTrunc msame_Drop_active_name">{0}</div><div class="msame_TxtTrunc msame_Drop_active_email">{1}</div>',z='<a href="#" aria-label="{1}" {2}>{0}</a>',Z='<img role="presentation" src="{0}" alt="">',$='<div class="msame_Drop_active_picborder" aria-hidden="true">{0}</div>',K='<a href="#" title="{1}" {2}>{0}</a>';function ee(a){var t,e,n,r,i,o=!1,s=!1,c=a;return{render:function(){var e=W.isImgCached(c.tileUrl)?c.tileUrl:"",t="",n=$;"msa"!==a.idp||c.nickName?t=c.roleName&&(c.orgName||c.nickName)?W.format(G,W.encodeHtml(c.displayName),W.encodeHtml(c.roleName),W.encodeHtml(c.orgName||c.nickName),W.encodeHtml(c.memberName)):W.format(J,W.encodeHtml(c.displayName),W.encodeHtml(c.roleName||c.orgName||c.nickName),W.encodeHtml(c.memberName)):(t=c.displayName?W.format(X,W.encodeHtml(c.displayName),W.encodeHtml(c.memberName)):W.format(Y,W.encodeHtml(c.memberName),W.format(z,W.getString("addyourname"),W.getString("addyournamelabel"),W.buildBiAttrib("addName","Active Account","Link"))),n=a.isCustomTileUrl?$:K);var r=W.format(n,W.format(Z,W.encodeHtml(e)),W.encodeHtml(W.getString("updatephoto")),W.buildBiAttrib("changePicture","Active Account","Button"));return W.format(j,r,t)},activate:function(){if(!o&&!s){o=!0,e=q(".msame_Drop_active"),n=q(".msame_Drop_active_piccont img",e),r=q(".msame_Drop_active_piccont a",e),i=q(".msame_Drop_active_email a",e);t=W.createPictureLoader(n,c.tileUrl,c.errorImgUrl,function(){return e=c.errorImgUrl,t=W.getString("addphoto"),void((n=document.querySelector(".msame_Drop_active_picframe img"))&&n.getAttribute("src")===e&&(r=t,(a=document.querySelector(".msame_Drop_active_picframe a"))&&a.setAttribute("title",r)));var e,t,n,r,a}),setTimeout(t.activate,0)}},deactivate:function(){o&&!s&&(o=!1,t&&t.deactivate())},dispose:function(){s||(this.deactivate(),t&&(t.dispose(),t=null),c=a=null,n=e=null,s=!0)},setUserPicture:function(e){t&&t.reset(e)},updateLinks:function(){!s&&o&&(r&&r.attr("href",c.getEditPictureUrl()),i&&i.attr("href",c.getEditNameUrl()))}}}var te='<div id="{0}" class="msame_Drop_SI" {4}><a href="{2}" target="{3}" class="msame_TxtTrunc">{1}</a></div>',ne=/\d+$/,re=0;function ae(e,t,r){var n=!1,a=!1,i=e,o="msame_si"+re++,s=r,c=ne.exec(t),u=c?parseInt(c[0],10):void 0,d=null,l=null;return i.label=i.label||i.string||"",{focus:function(){l&&l.focus()},render:function(){return W.format(te,o,W.encodeHtml(i.label),W.encodeHtml(i.url||"#"),i.openInNewTab?"_blank":"_self",W.buildBiAttrib(t,"Me Control Dropdown","Link",u))},activate:function(){n||a||(n=!0,d=q("#"+o),(l=q("a",d)).on("click",m))},deactivate:function(){n&&!a&&(n=!1,l&&l.off())},dispose:function(){a||(this.deactivate(),d=l=i=null,a=!0)}};function m(e){var t;if(i.id&&F.logEvent(i.id+"Clicked"),!0===r.derivedFromV2ConfigObject){var n={currentAccount:s&&s.userData?F.remapV1UserToV2Account(s.userData):void 0,commandId:i.id?i.id:""};t=i.onClick&&i.onClick(n)}else t=i.onClick&&i.onClick();t&&(e.preventDefault(),e.stopPropagation())}}var ie='<div id="{0}" class="msame_Drop_AI switch" tabIndex="0" {7}><div class="msame_Drop_AI_pic"><div class="msame_Drop_AI_piccont"><div class="msame_Drop_AI_picframe"><img role="presentation" src="{1}" alt=""></div></div></div><div class="msame_Drop_AI_right"><div class="msame_TxtTrunc msame_Drop_AI_name">{2}</div><div class="msame_TxtTrunc msame_Drop_AI_email">{3}</div><div class="msame_TxtTrunc msame_Drop_AI_status">{4}</div></div><div class="msame_Drop_AI_remove" tabIndex="0" {8}><img alt="{5}" src="{6}" /></div><div class="msame_Drop_AI_prog" style="display:none;"></div></div>',oe=0;function se(t){var e,n,r,a,i,o,s,c,u=!1,d=!1,l=t,m=oe,p="msame_ai"+oe++,f=l.authenticatedState;s=1==f||2==f,c=!f;var g={render:function(){var e=W.isImgCached(l.tileUrl)?l.tileUrl:"";return W.format(ie,p,e,W.encodeHtml(l.displayName),W.encodeHtml(l.memberName),W.encodeHtml(function(){if(c)return"";var e;e=l.enabled?s?"statussignedin":"statussignedout":"statusunavailable";return W.getString(e)}()),W.getString(2==l.authenticatedState?"signoutremovetip":"removetip",!0),l.removeImgUrl,W.buildBiAttrib("switchAccount","Account List","Account",m),W.buildBiAttrib("removeAccount","Account List","Button",m))},activate:function(){u||d||(u=!0,n=q("#"+p),i=q(".msame_Drop_AI_remove",n),a=q(".msame_Drop_AI_prog",n),r=q(".msame_Drop_AI_piccont img",n),o=q(".msame_Drop_AI_status",n),n.toggleClass("disabled",!l.enabled),n.toggleClass("switch",l.enabled),e=W.createPictureLoader(r,l.tileUrl,l.errorImgUrl),setTimeout(e.activate,0),n.on("click",v),n.on("keydown",function(e){_(e,v)}),i.on("click",h),i.on("keydown",function(e){_(e,h)}))},deactivate:function(){u&&!d&&(u=!1,e&&e.deactivate(),i.off())},dispose:function(){d||(this.deactivate(),e&&e.dispose(),n.remove(),l=t=e=null,n=i=r=a=o=null,d=!0)}};return g;function v(e){e.preventDefault(),e.stopPropagation(),l.enabled&&t.onSwitchUser&&t.onSwitchUser()}function h(e){e.preventDefault(),e.stopPropagation(),i.hide(),a.show(),o.text(W.getString(s?"statussigningout":"statusremoving")),l.onSignOutUser&&l.onSignOutUser(function(){q(g).trigger("remove")},function(){i.show(),a.hide(),o.text(W.getString(s?"statussignoutfailed":"statusremovingfailed"))})}function _(e,t){t&&e&&13===e.which&&t(e)}}var ce='<div class="msame_Drop_AL"><div class="msame_Drop_ALItems">{0}</div></div>';function ue(n,e){var r,a=!1,i=!1,o=n||{},t=o.userList,s=[];if(t)for(var c=0,u=t;c<u.length;c++){var d=u[c];s.push(se(e.getAccountItemData(d)))}var l={render:function(){for(var e="",t=0,n=s;t<n.length;t++){e+=n[t].render()}return W.format(ce,e)},activate:function(){if(!a&&!i){a=!0,r=q(".msame_Drop_AL");for(var e=0,t=s;e<t.length;e++){var n=t[e];n.activate(),q(n).on("remove",function(e){return function(){return m(e)}}(n))}}},deactivate:function(){if(a&&!i){a=!1;for(var e=0,t=s;e<t.length;e++){var n=t[e];n.deactivate(),q(n).off("remove")}}},dispose:function(){if(!i){this.deactivate();for(var e=0,t=s;e<t.length;e++){t[e].dispose()}r&&r.remove(),o=n=s=null,i=!(r=null)}}};return l;function m(e){var t=s.indexOf(e);e.dispose(),s.splice(t,1),q(e).off("remove"),0===s.length&&q(l).trigger("empty")}}var de=document.documentElement,le="visible",me=".msame",pe=".meCtrlDropdown",fe="undefined";q.extend(q.easing,{easeOutQuintPartial:function(e){return e+=.2*(1-e),Math.pow(e-1,5)+1}});var ge=3e4,ve=!0,he=0,_e={};function Ie(){ve&&(he=0,ve=!(_e={}),q(F.w).on("message",Ce))}function we(e){var t=document.createElement("a");t.href=e;var n=t.protocol+"//"+t.hostname;return null!==t.port&&""!==t.port&&"443"!==t.port&&"80"!==t.port&&"0"!==t.port&&(n+=":"+t.port),n}function Ue(e,t,n,r,a){a&&(e=W.appendQueryParams(e,a)),function(e,t,n,r){if(!ve&&e){var a=F.perfNow(),i="mecontrol_iframe_index_"+he++,o=q('<iframe style="display:none"></iframe>').attr("id",i).attr("src",e);if(o.appendTo("body"),t){var s=we(e);_e[s]||(_e[s]={});var c=setTimeout(function(){ye(s,i)},ge);_e[s][i]={url:e,operation:n,callback:t,iframe:o[0],start:a,timeoutId:c,timeoutCallback:r}}}}(e,t,n,r)}function be(){if(!ve){for(var e in q(F.w).off("message",Ce),_e)for(var t in _e[e]){var n=_e[e][t];clearTimeout(n.timeoutId),q(n.iframe).remove()}ve=!(_e=null)}}function Ce(e){var n=e.originalEvent;n&&_e[n.origin]&&q.each(_e[n.origin],function(e,t){n.source==t.iframe.contentWindow&&(F.logQos("IFrameCtrl",!0,F.perfNow()-t.start,"",{src:t.iframe.src}),t.callback(n)?(clearTimeout(t.timeoutId),Ae(t,!0),q(t.iframe).remove(),delete _e[n.origin][e]):(clearTimeout(t.timeoutId),t.timeoutId=setTimeout(function(){ye(n.origin,e)},ge)))})}function ye(e,t){if(!ve&&_e&&_e[e]){var n=_e[e][t];n&&(Ae(n,!1),n.timeoutCallback&&n.timeoutCallback(),q(n.iframe).remove(),delete _e[e][t])}}function Ae(e,t){if(e.operation){var n=e.operation,r=F.perfNow()-e.start;F.logTelemetryEvent("OutgoingRequest",{currentOperation:n.name,serviceOperation:n.operation,service:n.service,url:e.url,success:t,duration:r})}}q(F.w).on("unload.msame",be),Ie();var De="https://login.microsoftonline.com",Se="redirect_uri",Te=["ru","lru"],Me=function(e){return{name:"GetRememberedAccounts",operation:"GetState",service:e.toUpperCase()}};var Ee={name:"GetRewards",operation:"GetState",service:"Rewards"};return F.setEventGenerator(H),e.createMeDropdownControl=function(o,e){var s,a,n,r,i,c,u,d,l,m,p,f,g,v,h,_=!1,I=!1,w=!1,U=o.hasActiveUser(),b=!1,C=2===o.mobileState(),y=[],A=o.authStateModel(),D=q(document),S=e&&e.anchor,T=e&&e.focusTraps,M={setMobileState:function(e){C=2===e,E()},setUserPicture:function(e){s&&s.setUserPicture(e)},updateExtensibleLinks:function(){m.hide(),p.html("");var e=o.extensibleLinks();if(e&&0<e.length){O(),u=[],m.show();for(var t=0,n=0,r=e;n<r.length;n++){var a=ae(r[n],"extensibleLink"+t++,o.options);p.append(a.render()),a.activate(),u.push(a)}}},render:function(){return W.format('<div id="meControlDropdown" class="msame_Drop_root" style="display: none;" aria-expanded="false"><div tabindex="0" class="msame_focus_trap" aria-hidden="true" /><div class="msame_Drop_topb"></div><div class="msame_Drop_content" role="dialog" tabindex="-1" aria-label="{4}"><div class="msame_Drop_active">{0}</div><div class="msame_Drop_rewards" style="display: none;"></div><div class="msame_Drop_account">{1}</div><div class="msame_Drop_links" style="display: none;"><div class="msame_Drop_links_list"></div></div><div class="msame_Drop_signIn">{2}</div><div class="msame_Drop_signOut">{3}</div><div class="msame_Drop_accts" style="display: none;"><div class="msame_Drop_sep"></div><div class="msame_Drop_accts_list"></div></div></div><div tabindex="0" class="msame_focus_trap" aria-hidden="true" /></div>',s?s.render():"",n?n.render():"",i?i.render():"",r?r.render():"",W.getString("headerlabel"))},activate:function(){if(!_&&!I){var e=q("#meControlDropdown");if(0<e.length){_=!0,m=q(".msame_Drop_links",d=e),p=q(".msame_Drop_links_list",d),f=q(".msame_Drop_topb",d),l=q(".msame_Drop_rewards",d),h=q(".msame_focus_trap",d),W.isIE8&&d.addClass("msaie8"),c&&(l.html(c.render()),l.show());for(var t=0,n=y;t<n.length;t++)n[t].activate();!function(){if(!b&&(b=!0,!A&&o.isReady()&&(A=o.authStateModel()),A)){var r=F.perfNow();A.getUserState(function(e){if(!I){if(e&&0<e.length){a=ue({userList:e},o),q(a).on("empty",N),S&&S.attr&&S.attr("aria-expanded",w?"true":"false")&&S.attr("aria-haspopup","true"),y.push(a);var t=q(".msame_Drop_accts_list",d);t.html(a.render()),a.activate();var n=q(".msame_Drop_accts",d);n.show(),A.canSignInOtherAccount()||q(".msame_Drop_signIn").hide()}F.logEvent("AccountListReady",{duration:F.perfNow()-r,count:e&&e.length})}},function(){})}}()}E(),this.updateExtensibleLinks()}},deactivate:function(){if(_&&!I){_=!1,a&&q(a).off("empty");for(var e=0,t=y;e<t.length;e++)t[e].deactivate()}},toggle:function(e){var t;_&&(t=e,d.toggleClass("msame_ClickStart",!t),w?this.hide():this.show(),d.attr("aria-expanded",w.toString()))},show:function(){if(_&&!w){if(w=!0,F.logEvent("DropdownOpen"),F.logTelemetryEvent("PageView",{pageName:"Expanded",hasActiveUser:o.hasActiveUser()}),S){var e=(n=(t=S)[0],r=typeof F.w.pageXOffset===fe?de.scrollLeft:F.w.pageXOffset,a=typeof F.w.pageYOffset===fe?de.scrollTop:F.w.pageYOffset,i=n.getBoundingClientRect(),{top:a+i.top,left:r+i.left,right:r+i.right,bottom:a+i.bottom,width:t.width(),height:t.height()});d.css({top:e.top+e.height,left:F.ME.Loc.rtl?e.left:e.right-d.width()-2}),f.css("width",d.width()-S.outerWidth()+2+"px"),S.attr("aria-expanded","true")}s&&s.updateLinks(),function(e){if(!I){var t=d.height();d.css({top:"-=60",height:t/2,opacity:"0",display:""}),d.animate({top:"+=60",height:t+"px"},{duration:833,easing:"easeOutQuintPartial",queue:!1,complete:function(){I||(d.css("height",""),e&&e())}}),d.animate({opacity:"1"},{duration:100,queue:!1,easing:"linear"})}}(function(){var e=C?(d[0].clientWidth-64-8-36).toString():"";q(".msame_Drop_AI_right",d).css("width",e),(g=q("a, [tabindex='0']:not(.msame_focus_trap)",d)).on("click"+pe,R),q("[tabindex='0']",g).on("keydown"+pe,L),q(".msame_Drop_content",d).focus(),S&&h.on("focus"+me,Q),T&&(T.show(),T.first().on("focus"+me,B),T.last().on("focus"+me,V)),(v=g.not(".msame_Drop_AI_remove")).on("click"+pe,k),D.on("click"+me,P),D.on("mousedown"+me,P),D.on("touchend"+me,P),D.on("mousewheel"+me,P),D.on("keydown"+me,H),q(F.w).on("resize"+me,P)}),q(M).trigger(le,{visible:w})}var t,n,r,a,i},hide:function(e){_&&w&&(w=!1,d.fadeOut(100,function(){e&&S&&S.focus(),g.off(pe),v.off(pe),D.off(me),q(F.w).off(me),h.off(me),T&&(T.off(me),T.hide()),q(M).trigger(le,{visible:w}),S&&S.attr("aria-expanded","false"),F.logTelemetryEvent("PageView",{pageName:"Collapsed",hasActiveUser:o.hasActiveUser()})}))},isVisible:function(){return w},dispose:function(){if(!I){this.deactivate(),O();for(var e=0,t=y;e<t.length;e++)t[e].dispose();d.remove(),o=A=y=null,d=S=D=l=null,I=!0}}};return function(){if(U){s=ee(o.activeAccountData()),y.push(s);var e=o.authStateModel().getIdpInfo().accountSettingsUrl;if(e){var t=F.ME.Config.msTxt?"microsoftaccount":"viewaccount";n=ae({label:W.getString(t),onClick:function(){return F.logEvent("ViewAccount",{idp:o.userData().idp}),!1},url:e,openInNewTab:o.options.openLinksInNewTab},"microsoftAccount",o.options),y.push(n)}r=ae({label:W.getString("signout"),onClick:function(){return o.signOut(),!0}},"signOut",o.options),y.push(r)}!o.isReady()||!o.authStateModel().canSignInOtherAccount()||o.options.events&&o.options.events.onSignIn||(i=ae({label:W.getString("signinotheraccount"),onClick:function(){return o.signIn(),!0}},"signIn",o.options),y.push(i)),o.rewardsStateModel().getRewardsItemData(function(e){!I&&e&&e.enabled&&(e.onClick=function(){return F.logEvent("Rewards",{url:e.url}),!1},e.openInNewTab=o.options.openLinksInNewTab,c=ae(e,"rewards",o.options),y.push(c),_&&(l.html(c.render()),l.show(),c.activate()))})}(),M;function E(){_&&!I&&d.toggleClass("msame_Mobile",C)}function O(){if(u){for(var e=0,t=u;e<t.length;e++)t[e].dispose();u=null}}function N(){if(a){q(".msame_Drop_accts",d).slideUp("fast"),a.dispose();var e=y.indexOf(a);y.splice(e,1),q(a).off("empty"),a=null}}function x(e,t){try{for(var n=t;n&&n!==e&&n!==D[0];)n=n.parentNode;return n===e}catch(e){return!1}}function P(e){var t=e.target;if(!I&&w&&S&&"mousewheel"!==e.type&&e.target!==S[0]&&!x(S[0],t)&&!x(d[0],t))return e.preventDefault(),e.stopPropagation(),j(),void M.hide()}function k(e){!I&&w&&M.hide()}function R(e){var t=e.originalEvent&&e.originalEvent.target,n=W.getBiParams(t);n.hasActiveUser=o.hasActiveUser(),F.logTelemetryEvent("PageAction",n)}function L(e){e&&13===e.which&&R(e)}function Q(){S&&S.focus()}function V(){g.get(0).focus()}function B(){g.get(-1).focus()}function H(e){w&&27===e.which&&(e.preventDefault(),j(),M.hide(!0))}function j(){F.logTelemetryEvent("PageAction",{content:{id:"dismissAction",area:"Outside Me Control",type:"Other"},hasActiveUser:o.hasActiveUser()})}},e.initIFrame=Ie,e.getDomainFromUrl=we,e.openIFrame=Ue,e.disposeIFrame=be,e.createAuthStateModel=function(e,r,a,t,n){var l,i,o,g=e,s={inProgress:!1,expectedMessagesCount:0,startTime:0,callbacks:[],userList:[]},v=n,c={dispose:function(){},setActiveUser:function(e){l=e,d()},currentState:function(){return i||[]},getUserState:function(t,e){if(i)t(i);else{var n=function(e){i||(i=e||[],d()),t(i)};i=void 0,F.ME.TestData?n(F.ME.TestData):u(n,e)}},getIdpInfo:function(e){var t;switch(e=e||l&&l.idp){case"msa":t=g.msaInfo;break;case"aad":t=g.aadInfo}return t||{}},isIdpEnabled:function(e){if(!e)return!1;var t=this.getIdpInfo(e);return!(!t||!(t.meUrl||"aad"==e&&t.appId))},getSignInUrl:function(e,t){var n,r,a,i,o,s,c,u="aad"===(e=e||_()&&l&&l.idp||("aad"===g.preferredIdp?"aad":"msa")||"msa")||"msaFed"===e,d=u?g.aadInfo:g.msaInfo;return d.signInUrl,v&&v.derivedFromV2ConfigObject?I(d):u?(c=(o=d).signInUrl,o.generateSignInReturnUrl&&(s=o.generateSignInReturnUrl(),c=W.setQueryParam(c,Se,encodeURIComponent(s))),!o.allowNonAadUrls&&o.state&&(c=W.setQueryParam(c,"state",encodeURIComponent(o.state))),_()&&C()&&(c=W.setQueryParam(c,"prompt","select_account")),c):(r=t,i=(n=d).signInUrl,n.generateSignInReturnUrl&&(a=n.generateSignInReturnUrl(),i=W.setQueryParam(i,"wreply",encodeURIComponent(a))),i=W.setQueryParam(i,"pcexp",r?"false":"true"),_()&&b()&&l&&"msa"===l.idp&&(i=U(n.signOutUrl,encodeURIComponent(i),Te)),i)},canSignInOtherAccount:function(){return C()||b()},getSwitchToUrl:function(e){if("msa"===e.idp){var t=this.getSignInUrl(e.idp);return r=g.msaInfo,c.isIdpEnabled("msa")&&0<=(r.signInUrl?r.signInUrl.indexOf("login.srf"):-1)?W.appendQueryParams(t,{username:e.memberName}):t}if("aad"===e.idp||"msaFed"===e.idp){var n=this.getSignInUrl(e.idp);return W.hasQueryParam(n,"prompt")&&(n=W.setQueryParam(n,"prompt","")),g.aadInfo.allowNonAadUrls||(n=W.setQueryParam(n,"nonce",encodeURIComponent(y()))),W.setQueryParam(n,"login_hint",encodeURIComponent(e.memberName))}var r;return""},getSignOutUrl:function(e){var t,n,r,a,i,o,s,c,u,d,l=e?e.idp:("aad"===g.preferredIdp?"aad":"msa")||"msa",m="aad"===l||"msaFed"===l,p=m?g.aadInfo:g.msaInfo,f=p.signOutUrl;return v&&v.derivedFromV2ConfigObject?f=m?(r=p,a=v&&v.userData?v.userData:void 0,w(r,a)):(t=p,n=v&&v.userData?v.userData:void 0,w(t,n)):(f=m?(d=(c=p).signOutUrl,c.generateSignOutReturnUrl&&(u=c.generateSignOutReturnUrl(),d=W.setQueryParam(d,"wreply",encodeURIComponent(u))),d):(s=(i=p).signOutUrl,i.generateSignOutReturnUrl&&(o=i.generateSignOutReturnUrl(),s=U(s,encodeURIComponent(o),Te)),s),W.appendContextParam(f))},signOutUser:function(a,i,o){if("aad"===a.idp||"msaFed"===a.idp){var r,e=a,t=g.aadInfo,n=void 0;this.isIdpEnabled("aad")?(r=W.format("{0}/uxlogout?appid={1}&sessionId={2}&wreply={3}&shouldForgetUser=true&isIframe=true&slice=TestSlice",De,encodeURIComponent(t.appId),encodeURIComponent(e.sessionId||""),encodeURIComponent(t.siteUrl)),n="aad"):(r=W.format("{0}/logout.srf?aadsession={1}&idpflag=proxy&ru={2}","https://login.live.com",encodeURIComponent(e.sessionId||""),encodeURIComponent(we(F.getPageUrl()))),n="msa");var s=F.perfNow();Ue(r,function(e){var t,n=we(r);if(e.origin!==n)return!1;try{t=q.parseJSON(e.data)}catch(e){}return t&&t.signoutStatus&&"true"===t.signoutStatus.toString()?setTimeout(function(){u(function(e){for(var t=!1,n=0,r=e;n<r.length;n++)if(m(r[n],a)){t=!0;break}F.logQos("SignOutUser",!t,F.perfNow()-s),t?o():i()},o)},0):(F.logQos("SignOutUser",!1,F.perfNow()-s,t&&t.error||""),o()),!0},{name:"SignOutUser",operation:"SignOut",service:n.toUpperCase()},function(){o(),F.logQos("SignOutUser",!1,F.perfNow()-s,"Timeout")})}else"msa"===a.idp&&this.isIdpEnabled("msa")?F.w.location.href=this.getSignOutUrl(a):o&&o()}};return(o=g.aadInfo)&&o.signInUrl&&(o.appId=o.appId||W.getQueryParam(o.signInUrl,"client_id")||"",o.nonce=o.nonce||W.getQueryParam(o.signInUrl,"nonce")||"",o.siteUrl=o.siteUrl||decodeURIComponent(W.getQueryParam(o.signInUrl,Se)||"")),c.isIdpEnabled("aad")&&(o.meUrl||(o.meUrl=W.format("{0}/savedusers?appid={1}&wreply={2}",De,encodeURIComponent(o.appId),encodeURIComponent(o.siteUrl))),o.signInUrl||(o.signInUrl=W.format("{0}/common/oauth2/authorize?response_type=id_token&client_id={1}&scope=openid&nonce={2}&response_mode=form_post&redirect_uri={3}",De,encodeURIComponent(o.appId),encodeURIComponent(y()),encodeURIComponent(o.siteUrl))),o.blockMsaFed&&(o.signInUrl=W.appendQueryParams(o.signInUrl,{msafed:"0"}))),c;function u(e,t){if(s.callbacks.push({success:e,failure:t}),F.ME.Config.remAcc){if(!s.inProgress){if(s.startTime=F.perfNow(),!F.w.postMessage)return void f(!1,"PostMessageNotSupported");if("https:"!==location.protocol)return void f(!1,"HttpNotSupported");s.inProgress=!0,s.expectedMessagesCount=r?2:1;var n={uaid:F.id,partnerId:F.ME.Config.ptn};g&&g.msaInfo&&g.aadInfo?c.isIdpEnabled("msa")?(g.msaInfo.meTrustedOrigin=we(g.msaInfo.meUrl),c.isIdpEnabled("aad")?(g.aadInfo.meTrustedOrigin=we(g.aadInfo.meUrl),Ue(g.msaInfo.meUrl,p,Me("msa"),h,n),r&&(n.appId=g.aadInfo.appId,Ue(g.aadInfo.meUrl,p,Me("aad"),h,n))):(a&&(n.idpflag="proxy"),Ue(g.msaInfo.meUrl,p,Me("msa"),h,n))):c.isIdpEnabled("aad")&&r&&(g.aadInfo.meTrustedOrigin=we(g.aadInfo.meUrl),a&&(n.idpflag="proxy"),n.appId=g.aadInfo.appId,Ue(g.aadInfo.meUrl,p,Me("aad"),h,n)):f(!1,"InvalidRpData")}}else f(!1,"RememberedAccountsDisabled")}function d(){if(i&&l){for(var e=[],t=0,n=i;t<n.length;t++){var r=n[t],a=!0;m(l,r)&&(a=!1,"aad"!==l.idp&&"msaFed"!==l.idp||(l.sessionId=r.sessionId)),"orgId"===r.idp&&(a=!1),a&&e.push(r)}i=e}}function m(e,t){return!!(e&&t&&e.idp===t.idp&&("msa"===e.idp?e.cid===t.cid:e.memberName&&t.memberName&&e.memberName.toLowerCase()===t.memberName.toLowerCase()))}function p(e){if(s.inProgress){var t=g.msaInfo.meTrustedOrigin&&e.origin===g.msaInfo.meTrustedOrigin,n=g.aadInfo.meTrustedOrigin&&e.origin===g.aadInfo.meTrustedOrigin;if((t||n)&&"string"==typeof e.data){s.expectedMessagesCount--;var r={currentIdp:t?"msa":"aad",messagesMissing:s.expectedMessagesCount},a=void 0;try{a=q.parseJSON(e.data)}catch(e){}if(a&&a.userList&&0<a.userList.length)s.userList.push.apply(s.userList,a.userList);else{var i="InvalidIdpData";a&&a.error&&(r.IDPError=a.error,i="IDPError"),F.logQos("UserStatePartial",!1,F.perfNow()-s.startTime,i,r)}if(0===s.expectedMessagesCount)return s.userList&&0<s.userList.length?f(!0):f(!1,"NoIdpData",r),!0}}return!1}function f(e,t,n){(n=n||{}).userCount=s.userList.length,F.logQos("UserState",e,F.perfNow()-s.startTime,t,n);for(var r=0,a=s.callbacks;r<a.length;r++){var i=a[r];e?i.success(s.userList):i.failure&&i.failure()}s={inProgress:!1,expectedMessagesCount:0,startTime:0,callbacks:[],userList:[]}}function h(){s.inProgress&&(s.expectedMessagesCount-=1,0===s.expectedMessagesCount&&(s.userList&&0<s.userList.length?f(!0,"",{timeout:!0,messagesMissing:s.expectedMessagesCount}):f(!1,"Timeout")))}function _(){return!!l&&1==l.authenticatedState}function I(e){return e.signInUrlAsV2Callback?e.signInUrlAsV2Callback():e.signInUrl}function w(e,t){return e?e.signOutUrlAsV2Callback?e.signOutUrlAsV2Callback({currentAccount:t?F.remapV1UserToV2Account(t):void 0}):e.signOutUrl:""}function U(e,t,n){for(var r=0,a=n;r<a.length;r++){var i=a[r];W.hasQueryParam(e,i)&&(e=W.setQueryParam(e,i,t))}return e}function b(){var e=g.msaInfo;return c.isIdpEnabled("msa")&&(!_()&&!function(){for(var e=0,t=c.currentState();e<t.length;e++)if("msa"===t[e].idp)return!0;return!1}()||W.hasQueryParam(e.signOutUrl,"ru")&&W.hasQueryParam(e.signInUrl,"wreply"))}function C(){var e=g.aadInfo;return c.isIdpEnabled("aad")&&(e.allowNonAadUrls||W.hasQueryParam(e.signInUrl,"client_id")&&W.hasQueryParam(e.signInUrl,"redirect_uri"))}function y(){return g.aadInfo.nonce||F.id}},e.createRewardsStateModel=function(e,t,n){var r,a,i,o,s=[];return o=F.perfNow(),i=!n,n&&Ue(W.format("{0}/msrewards/api/v1/getuserinfo?pid=mecontrol&channel=membercenter&client=web&sso=true","https://www.bing.com"),function(e){var t=F.perfNow()-o;if(!r&&!i){if(e&&"string"==typeof e.data)try{var n=q.parseJSON(e.data);n&&n.MessageType?(a=n,F.logQos("RewardsApi",!a.Error,t,a.ErrorDetail?a.ErrorDetail.ErrorCode+":"+a.ErrorDetail.Message:a.Error)):F.logQos("RewardsApi",!1,t,"InvalidJson")}catch(e){F.logQos("RewardsApi",!1,t,"JsonParsingError: "+(e&&e.toString()))}else F.logQos("RewardsApi",!1,t,"BadResponse");u()}return!0},Ee,function(){r||i||(u(),F.logQos("RewardsApi",!1,F.perfNow()-o,"Timeout"))},{partnerId:e,language:t}),{getRewardsItemData:function(e){i?e(c()):s.push(e)},dispose:function(){r||(r=!0)},setState:function(e){a=e,u()}};function c(){var e=a||{MessageType:"None"};return"None"===e.MessageType?{enabled:!1,label:"",url:""}:{enabled:!0,label:"Upsell"===e.MessageType?W.getString("rewardsupsell"):W.format(W.getString("rewardsbalance"),e.Balance+""),url:"https://account.microsoft.com"+e.Url}}function u(){i=!0;for(var e=function(e){setTimeout(function(){return e(c())},0)},t=0,n=s;t<n.length;t++)e(n[t])}},e.createAccountItemControl=se,e.createAccountsListControl=ue,e.createCV=n,e.setCv=M,e.getCv=E,e.getImpressionGuid=O,e.getPageName=N,e.getTimeSinceStart=x,e.getPageTags=P,e.createPartA=k,e.setEventCreator=R,e.createEvent=L,e.fireEvent=Q,e._sendMethods=_,e.writeEvent=w,e.flushEvents=U,e.setMethod=function(e){I=e},e.getUtcIsoDate=r,e.getOs=s,e.filterQueryString=c,e.filterObject=u,e.toQueryString=d,e.toPropString=l,e}({},MSA.MeControl.WebInline,MSA.MeControl.WebBoot,window.MejQuery);;(function(){var ME=window.MSA.MeControl;ME.Loc={rtl:false,lf:false};ME.Strings.addStrings({
"statusremovingfailed":"Removal failed",
"signinwithaadaccount":"Sign in with a work or school account",
"rewardsbalance":"Rewards \u0028\u007b0\u007d\u0029",
"updatephoto":"Change picture",
"statussigningout":"Signing out",
"addyourname":"Add your name",
"signoutandforget":"Sign out and forget",
"editdone":"Done",
"signinotheraccount":"Sign in with another account",
"switchaccount":"Switch to account",
"rememberedaccountaction":"Sign out options",
"signinwithdifferentaccount":"Sign in with a different account",
"addphoto":"Add a picture",
"rewardsupsell":"Join Microsoft Rewards",
"chooseanaccount":"Choose an account",
"microsoftaccount":"Microsoft account",
"viewaccount":"View Microsoft account",
"microsoft":"Microsoft",
"statussignoutfailed":"Sign-out failed",
"statusunavailable":"Not available",
"removetip":"Remove from list",
"addyournamelabel":"Add your name to your account",
"editlist":"Edit list",
"morecustomlinks":"More links",
"signoutremovetip":"Sign out and remove from list",
"viewaccountaad":"View account",
"account":"Account",
"signinwithmsaaccount":"Sign in with a personal account",
"statusremoving":"Removing from list",
"statussignedout":"Signed out",
"statussignedin":"Signed in"});ME.CssmeCore='.msame_open .msame_Header\x7bborder-color\x3a\x23e6e6e6\x3bbackground-color\x3a\x23fff\x7d.msame_open .msame_Header.msame_Mobile\x7bborder-color\x3atransparent\x3bbackground-color\x3atransparent\x7d.msame_ClickStart.msame_Drop_root .msame_Drop_AI\x3afocus,.msame_ClickStart.msame_Drop_root .msame_Drop_AI_remove\x3afocus,.msame_ClickStart.msame_Drop_root a\x3afocus\x7boutline-style\x3anone\x7d.msame_Drop_root a,.msame_Drop_root a\x3aactive,.msame_Drop_root a\x3afocus,.msame_Drop_root a\x3ahover,.msame_Drop_root a\x3avisited\x7btext-decoration\x3anone\x7d.msame_Drop_topb\x7bborder-top-color\x3a\x23e6e6e6\x3bborder-top-style\x3asolid\x3bborder-top-width\x3a1px\x7d.msame_Mobile .msame_Drop_topb\x7bwidth\x3a100\x25\x21important\x7d.msame_Drop_active\x7bpadding-bottom\x3a8px\x7d.msame_Drop_AI_picframe\x7bwidth\x3a44px\x3bheight\x3a44px\x3bborder-radius\x3a50\x25\x3boverflow\x3ahidden\x7d.msame_Drop_AI_piccont img\x7bwidth\x3a44px\x3bheight\x3a44px\x7d.msame_Drop_root\x7bborder-width\x3a1px\x3bborder-color\x3a\x23e6e6e6\x3bborder-style\x3asolid\x3bborder-top-style\x3anone\x3bposition\x3aabsolute\x3bwidth\x3a360px\x3bz-index\x3a3000000\x3bbackground-color\x3a\x23fff\x3bfont-size\x3a14px\x7d.msame_Drop_sep\x7bborder-top-width\x3a1px\x3bborder-top-color\x3a\x23e6e6e6\x3bborder-top-style\x3asolid\x3bwidth\x3a100\x25\x3bheight\x3a0\x3bdisplay\x3ablock\x7d.msame_Mobile.msame_Drop_root\x7bleft\x3a0\x21important\x3bright\x3a0\x3bbottom\x3a0\x3bwidth\x3a100\x25\x3bborder-right-width\x3a0\x3bborder-left-width\x3a0\x7d.msame_Mobile .msame_Drop_content\x7boverflow-y\x3aauto\x3bposition\x3aabsolute\x3bleft\x3a0\x3bright\x3a0\x3bbottom\x3a0\x3btop\x3a0\x7d.msame_Drop_root a\x7btext-decoration\x3anone\x7d.msame_Drop_content\x7boverflow\x3ahidden\x7d.msame_Mobile .msame_Drop_active\x7bdisplay\x3anone\x7d.msame_Drop_AI\x7bcursor\x3apointer\x7d.disabled .msame_Drop_AI_pic,.disabled .msame_Drop_AI_right\x7bopacity\x3a.4\x3bcursor\x3adefault\x7d.disabled .msame_Drop_AI_email,.disabled .msame_Drop_AI_name,.disabled .msame_Drop_AI_status\x7bcolor\x3a\x23000\x7d.msame_Drop_active_piccont\x7bpadding\x3a5px\x7d.msame_Drop_AI_piccont\x7bpadding\x3a10px\x7d.msame_Drop_active_picframe\x7bwidth\x3a74px\x3bheight\x3a74px\x3bborder-radius\x3a50\x25\x3boverflow\x3ahidden\x7d.msame_Drop_active_picborder,.msame_Drop_active_piccont a\x7bdisplay\x3ablock\x3bpadding\x3a5px\x3bborder-radius\x3a50\x25\x7d.msame_Drop_active_piccont a\x3afocus\x7bpadding\x3a4px\x3bborder\x3a1px dashed \x23000\x7d.msame_Drop_active_piccont img\x7bwidth\x3a64px\x3bheight\x3a64px\x3bborder-radius\x3a50\x25\x7d.msame_Drop_active_name\x7bdisplay\x3ablock\x3bline-height\x3a1.3\x3bfont-size\x3a150\x25\x3bcolor\x3a\x23000\x3bfont-family\x3a\x22Segoe UI Light\x22,\x22Segoe UI Web Light\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI\x22,\x22Segoe UI Symbol\x22,HelveticaNeue-Light,\x22Helvetica Neue\x22,Arial,sans-serif\x7d.msame_Drop_active_email\x7bdisplay\x3ablock\x3bline-height\x3a1.42857\x3bfont-size\x3a100\x25\x3bcolor\x3argba\x280,0,0,.54\x29\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bpadding\x3a1px\x7d.msame_Drop_active_right\x7bdisplay\x3ainline-block\x3bwidth\x3a216px\x3bvertical-align\x3atop\x3bpadding-top\x3a12px\x3bpadding-right\x3a12px\x3bpadding-left\x3a12px\x7d.msame_Drop_active_right a\x7bcolor\x3argba\x280,0,0,.54\x29\x7d.msame_Drop_SI a\x7bline-height\x3a2\x3bfont-size\x3a114\x25\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bpadding-left\x3a12px\x3bpadding-right\x3a12px\x3bdisplay\x3ablock\x3bcolor\x3a\x23000\x7d.msame_Mobile .msame_Drop_SI a\x7bline-height\x3a2.75\x7d.msame_Drop_AI.switch\x3ahover,.msame_Drop_AI_remove\x3ahover,.msame_Drop_SI a\x3ahover\x7bcolor\x3a\x23000\x3bbackground-color\x3argba\x280,0,0,.12\x29\x7d.msame_Drop_AI.switch\x3aactive,.msame_Drop_AI.switch\x3aactive div,.msame_Drop_AI_remove\x3aactive,.msame_Drop_SI a\x3aactive\x7bcolor\x3a\x23fff\x21important\x3bbackground-color\x3a\x23000\x7d.msame_Drop_SI a\x3alink,.msame_Drop_SI a\x3avisited\x7bcolor\x3a\x23000\x7d.msame_Drop_active_link a,.msame_Drop_active_link a\x3aactive,.msame_Drop_active_link a\x3ahover,.msame_Drop_active_link a\x3alink,.msame_Drop_active_link a\x3avisited\x7bline-height\x3a1.333333\x3bfont-size\x3a86\x25\x3bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bcolor\x3a\x230078d7\x7d.msame_Drop_AL\x7bpadding-bottom\x3a24px\x7d.msame_Drop_AI_right\x7bdisplay\x3ainline-block\x3bwidth\x3a252px\x3bvertical-align\x3atop\x3bpadding-left\x3a8px\x3bpadding-top\x3a5px\x7d.msame_Mobile .msame_Drop_AI_right\x7bwidth\x3a100px\x7d.msame_Drop_AI_name\x7bfont-family\x3a\x22Segoe UI\x22,\x22Segoe UI Web Regular\x22,\x22Segoe UI Symbol\x22,\x22Helvetica Neue\x22,\x22BBAlpha Sans\x22,\x22S60 Sans\x22,Arial,sans-serif\x3bfont-size\x3a114\x25\x3bcolor\x3a\x23000\x3bline-height\x3a1.25\x7d.msame_Drop_AI_remove\x7bfloat\x3aright\x3bmargin-top\x3a6px\x3bpadding-top\x3a12px\x3bpadding-bottom\x3a12px\x3bpadding-left\x3a12px\x3bpadding-right\x3a12px\x3btext-align\x3acenter\x3bcursor\x3apointer\x7d.msame_Drop_AI_remove img\x7bdisplay\x3ablock\x7d.msame_auto_frame\x7bdisplay\x3anone\x3bposition\x3aabsolute\x3btop\x3a0\x3bleft\x3a-4000px\x3bwidth\x3a0\x7d';ME.Loader.scriptLoaded('meCore');})();