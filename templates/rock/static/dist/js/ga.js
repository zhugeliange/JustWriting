!function(){function t(t,e){return t.onload=e}function e(t,e){return t.onerror=e}function n(t,e){return t.name=e}function i(t,e){switch(e){case 0:return""+t;case 1:return 1*t;case 2:return!!t;case 3:return 1e3*t}return t}function r(t){return"function"==typeof t}function a(t){return t!=K&&-1<(t.constructor+"")[tt]("String")}function s(t,e){return K==t||"-"==t&&!e||""==t}function o(t){if(!t||""==t)return"";for(;t&&-1<" \n\r\t"[tt](t[J](0));)t=t[bt](1);for(;t&&-1<" \n\r\t"[tt](t[J](t[ct]-1));)t=t[bt](0,t[ct]-1);return t}function u(){return $.round(2147483647*$[_t]())}function c(){}function f(t,e){return R instanceof Function?e?encodeURI(t):R(t):(I(68),escape(t))}function h(t){if(t=t[gt]("+")[Ct](" "),F instanceof Function)try{return F(t)}catch(t){I(17)}else I(68);return unescape(t)}function g(t,e){if(t){var n=Jn[it]("script");n.type="text/javascript",n.async=V,n.src=t,n.id=e;var i=Jn.getElementsByTagName("script")[0];return i.parentNode.insertBefore(n,i),n}}function d(t){return t&&0<t[ct]?t[0]:""}function m(t){var e=t?t[ct]:0;return 0<e?t[e-1]:""}function v(){return"https:"==Jn[vt][pt]}function l(t){return 0==t[tt]("www.")&&(t=t[bt](4)),t[St]()}function _(t,e){var n,i={url:t,protocol:"http",host:"",path:"",d:new Et,anchor:""};return t?(0<=(n=t[tt]("://"))&&(i.protocol=t[bt](0,n),t=t[bt](n+3)),0<=(n=t[lt]("/|\\?|#"))?(i.host=t[bt](0,n)[St](),t=t[bt](n),0<=(n=t[tt]("#"))&&(i.anchor=t[bt](n+1),t=t[bt](0,n)),0<=(n=t[tt]("?"))&&(w(i.d,t[bt](n+1)),t=t[bt](0,n)),i.anchor&&e&&w(i.d,i.anchor),t&&"/"==t[J](0)&&(t=t[bt](1)),i.path=t,i):(i.host=t[St](),i)):i}function p(t,e){function n(t){var e=(t.hostname||"")[gt](":")[0][St](),n=(t[pt]||"")[St](),n=1*t[nt]||("http:"==n?80:"https:"==n?443:"");return 0==(t=t.pathname||"")[tt]("/")||(t="/"+t),[e,""+n,t]}var i=e||Jn[it]("a");i.href=Jn[vt][yt];var r=(i[pt]||"")[St](),a=n(i),s=i[lt]||"",o=r+"//"+a[0]+(a[1]?":"+a[1]:"");return 0==t[tt]("//")?t=r+t:0==t[tt]("/")?t=o+t:t&&0!=t[tt]("?")?0>t[gt]("/")[0][tt](":")&&(t=o+a[2][bt](0,a[2].lastIndexOf("/"))+"/"+t):t=o+a[2]+(t||s),i.href=t,r=n(i),{protocol:(i[pt]||"")[St](),host:r[0],port:r[1],path:r[2],Oa:i[lt]||"",url:t||""}}function w(t,e){function n(e,n){t.contains(e)||t.set(e,[]),t.get(e)[B](n)}for(var i=o(e)[gt]("&"),r=0;r<i[ct];r++)if(i[r]){var a=i[r][tt]("=");0>a?n(i[r],"1"):n(i[r][bt](0,a),i[r][bt](a+1))}}function y(t,e){if(s(t)||"["==t[J](0)&&"]"==t[J](t[ct]-1))return"-";var n=Jn.domain;return t[tt](n+(e&&"/"!=e?e:""))==(0==t[tt]("http://")?7:0==t[tt]("https://")?8:0)?"0":t}function b(t,e,n){!(1<=At)&&!(1<=100*$[_t]())&&(t=["utmt=error","utmerr="+t,"utmwv=5.4.1","utmn="+u(),"utmsp=1"],e&&t[B]("api="+e),n&&t[B]("msg="+f(n[bt](0,100))),Er.w&&t[B]("aip=1"),kr(t[Ct]("&")),At++)}function k(t){return q("x"+It++,t)}function q(t,e){return Lt[t]=!!e,t}function C(t){var e=this.plugins_;if(e)return e.get(t)}function S(t,e){e=e||[];for(var n=0;n<e[ct];n++){var i=e[n];if(""+t==i||0==i[tt](t+"."))return i}return"-"}function x(t){100!=t.get(re)&&t.get(Te)%1e4>=100*t.get(re)&&t[dt]()}function T(t){Qn(t.get(Pt))&&t[dt]()}function E(t){"file:"==Jn[vt][pt]&&t[dt]()}function A(t){t.get(_e)||t.set(_e,Jn.title,V),t.get(le)||t.set(le,Jn[vt].pathname+Jn[vt][lt],V)}function I(t){Yn.set(t)}function L(t){return"string"==typeof t}function P(t){return("number"==typeof t||K!=Number&&t instanceof Number)&&$.round(t)==t&&!z(t)&&t!=G?V:N}function j(){function n(n,a){var s="p="+n+"&id="+i,o=new Image(1,1);o.src=(v()||Er.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/u/"+r[a]+".gif?"+s,t(o,function(){t(o,X),e(o,X)}),e(o,function(){t(o,X),e(o,X)})}if(!rr){rr=V;var i=[u(),u(),u()][Ct]("."),r=["a","b","c"],a=[[0,1],[1,0],[0,2],[2,0]],s=$[Z]($[_t]()*a[ct]);n(s,a[s][0]),n(s,a[s][1])}}function O(t){var e,n=1,i=0;if(t)for(n=0,e=t[ct]-1;0<=e;e--)i=t.charCodeAt(e),n=(n<<6&268435455)+i+(i<<14),i=266338304&n,n=0!=i?n^i>>21:n;return n}var D,K=void 0,V=!0,X=null,N=!1,R=encodeURIComponent,G=1/0,M=setTimeout,z=isNaN,$=Math,F=decodeURIComponent,B="push",H="test",U="slice",W="replace",Y="load",Z="floor",J="charAt",Q="value",tt="indexOf",et="match",nt="port",it="createElement",rt="path",at="name",st="getTime",ot="host",ut="toString",ct="length",ft="prototype",ht="clientWidth",gt="split",dt="stopPropagation",mt="scope",vt="location",lt="search",_t="random",pt="protocol",wt="clientHeight",yt="href",bt="substring",kt="apply",qt="navigator",Ct="join",St="toLowerCase",xt=function(t,e,n,i){t.addEventListener?t.addEventListener(e,n,!!i):t.attachEvent&&t.attachEvent("on"+e,n)},Tt=function(t,e,n,i){t.removeEventListener?t.removeEventListener(e,n,!!i):t.detachEvent&&t.detachEvent("on"+e,n)},Et=function(){this.prefix="ga.",this.R={}};Et[ft].set=function(t,e){this.R[this.prefix+t]=e},Et[ft].get=function(t){return this.R[this.prefix+t]},Et[ft].contains=function(t){return this.get(t)!==K};var At=0,It=0,Lt={},Pt=k(),jt=q("anonymizeIp"),Ot=k(),Dt=k(),Kt=k(),Vt=k(),Xt=k(),Nt=k(),Rt=k(),Gt=k(),Mt=k(),zt=k(),$t=k(),Ft=k(),Bt=k(),Ht=k(),Ut=k(),Wt=k(),Yt=k(),Zt=k(),Jt=k(),Qt=k(),te=k(),ee=k(),ne=k(),ie=k(),re=k(),ae=k(),se=k(),oe=k(),ue=k(),ce=k(),fe=k(),he=k(),ge=k(),de=k(),me=k(V),ve=q("currencyCode"),le=q("page"),_e=q("title"),pe=k(),we=k(),ye=k(),be=k(),ke=k(),qe=k(),Ce=k(),Se=k(),xe=k(),Te=k(V),Ee=k(V),Ae=k(V),Ie=k(V),Le=k(V),Pe=k(V),je=k(V),Oe=k(V),De=k(V),Ke=k(V),Ve=k(V),Xe=k(V),Ne=k(V),Re=k(V),Ge=k(V),Me=k(V),ze=k(V),$e=k(V),Fe=k(V),Be=k(V),He=k(V),Ue=k(V),We=k(V),Ye=k(V),Ze=k(V),Je=k(V),Qe=k(V),tn=q("campaignParams"),en=k(),nn=q("hitCallback"),rn=k();k();var an=k(),sn=k(),on=k(),un=k(),cn=k(),fn=k(),hn=k(),gn=k(),dn=k(),mn=k(),vn=k(),ln=k(),_n=k(),pn=k();k();var wn=k(),yn=k(),bn=k(),kn=q("uaName"),qn=q("uaDomain"),Cn=q("uaPath"),Sn=function(){function t(t,e,n){Tn(xr[ft],t,e,n)}t("_createTracker",xr[ft].r,55),t("_getTracker",xr[ft].oa,0),t("_getTrackerByName",xr[ft].u,51),t("_getTrackers",xr[ft].pa,130),t("_anonymizeIp",xr[ft].aa,16),t("_forceSSL",xr[ft].la,125),t("_getPlugin",C,120)},xn=function(){function t(t,e,n){Tn(ir[ft],t,e,n)}En("_getName",Dt,58),En("_getAccount",Pt,64),En("_visitCode",Te,54),En("_getClientInfo",Bt,53,1),En("_getDetectTitle",Wt,56,1),En("_getDetectFlash",Ht,65,1),En("_getLocalGifPath",ae,57),En("_getServiceMode",se,59),An("_setClientInfo",Bt,66,2),An("_setAccount",Pt,3),An("_setNamespace",Ot,48),An("_setAllowLinker",zt,11,2),An("_setDetectFlash",Ht,61,2),An("_setDetectTitle",Wt,62,2),An("_setLocalGifPath",ae,46,0),An("_setLocalServerMode",se,92,K,0),An("_setRemoteServerMode",se,63,K,1),An("_setLocalRemoteServerMode",se,47,K,2),An("_setSampleRate",re,45,1),An("_setCampaignTrack",Ut,36,2),An("_setAllowAnchor",$t,7,2),An("_setCampNameKey",Zt,41),An("_setCampContentKey",ne,38),An("_setCampIdKey",Yt,39),An("_setCampMediumKey",te,40),An("_setCampNOKey",ie,42),An("_setCampSourceKey",Qt,43),An("_setCampTermKey",ee,44),An("_setCampCIdKey",Jt,37),An("_setCookiePath",Nt,9,0),An("_setMaxCustomVariables",oe,0,1),An("_setVisitorCookieTimeout",Rt,28,1),An("_setSessionCookieTimeout",Gt,26,1),An("_setCampaignCookieTimeout",Mt,29,1),An("_setReferrerOverride",pe,49),An("_setSiteSpeedSampleRate",dn,132),t("_trackPageview",ir[ft].Fa,1),t("_trackEvent",ir[ft].F,4),t("_trackPageLoadTime",ir[ft].Ea,100),t("_trackSocial",ir[ft].Ga,104),t("_trackTrans",ir[ft].Ia,18),t("_sendXEvent",ir[ft].t,78),t("_createEventTracker",ir[ft].ia,74),t("_getVersion",ir[ft].qa,60),t("_setDomainName",ir[ft].B,6),t("_setAllowHash",ir[ft].va,8),t("_getLinkerUrl",ir[ft].na,52),t("_link",ir[ft].link,101),t("_linkByPost",ir[ft].ua,102),t("_setTrans",ir[ft].za,20),t("_addTrans",ir[ft].$,21),t("_addItem",ir[ft].Y,19),t("_clearTrans",ir[ft].ea,105),t("_setTransactionDelim",ir[ft].Aa,82),t("_setCustomVar",ir[ft].wa,10),t("_deleteCustomVar",ir[ft].ka,35),t("_getVisitorCustomVar",ir[ft].ra,50),t("_setXKey",ir[ft].Ca,83),t("_setXValue",ir[ft].Da,84),t("_getXKey",ir[ft].sa,76),t("_getXValue",ir[ft].ta,77),t("_clearXKey",ir[ft].fa,72),t("_clearXValue",ir[ft].ga,73),t("_createXObj",ir[ft].ja,75),t("_addIgnoredOrganic",ir[ft].W,15),t("_clearIgnoredOrganic",ir[ft].ba,97),t("_addIgnoredRef",ir[ft].X,31),t("_clearIgnoredRef",ir[ft].ca,32),t("_addOrganic",ir[ft].Z,14),t("_clearOrganic",ir[ft].da,70),t("_cookiePathCopy",ir[ft].ha,30),t("_get",ir[ft].ma,106),t("_set",ir[ft].xa,107),t("_addEventListener",ir[ft].addEventListener,108),t("_removeEventListener",ir[ft].removeEventListener,109),t("_addDevId",ir[ft].V),t("_getPlugin",C,122),t("_setPageGroup",ir[ft].ya,126),t("_trackTiming",ir[ft].Ha,124),t("_initData",ir[ft].v,2),t("_setVar",ir[ft].Ba,22),An("_setSessionTimeout",Gt,27,3),An("_setCookieTimeout",Mt,25,3),An("_setCookiePersistence",Rt,24,1),t("_setAutoTrackOutbound",c,79),t("_setTrackOutboundSubdomains",c,81),t("_setHrefExamineLimit",c,80)},Tn=function(t,e,n,i){t[e]=function(){try{return i!=K&&I(i),n[kt](this,arguments)}catch(t){throw b("exc",e,t&&t[at]),t}}},En=function(t,e,n,r){ir[ft][t]=function(){try{return I(n),i(this.a.get(e),r)}catch(e){throw b("exc",t,e&&e[at]),e}}},An=function(t,e,n,r,a){ir[ft][t]=function(s){try{I(n),a==K?this.a.set(e,i(s,r)):this.a.set(e,a)}catch(e){throw b("exc",t,e&&e[at]),e}}},In=function(t,e){return{type:e,target:t,stopPropagation:function(){throw"aborted"}}},Ln=RegExp(/(^|\.)doubleclick\.net$/i),Pn=function(t,e){return Ln[H](Jn[vt].hostname)?V:"/"!==e?N:0!=t[tt]("www.google.")&&0!=t[tt](".google.")&&0!=t[tt]("google.")||-1<t[tt]("google.org")?N:V},jn=function(t){var e=t.get(Vt),n=t.c(Nt,"/");Pn(e,n)&&t[dt]()},On=function(){var t={},e={},n=new Hn;this.g=function(t,e){n.add(t,e)};var i=new Hn;this.e=function(t,e){i.add(t,e)};var r=N,a=N,s=V;this.T=function(){r=V},this.j=function(t){this[Y](),this.set(en,t,V),t=new Dn(this),r=N,i.execute(this),r=V,e={},this.n(),t.Ja()},this.load=function(){r&&(r=N,this.Ka(),pi(this),a||(a=V,n.execute(this),_i(this),pi(this)),r=V)},this.n=function(){r&&(a?(r=N,_i(this),r=V):this[Y]())},this.get=function(n){return Lt[n]&&this[Y](),e[n]!==K?e[n]:t[n]},this.set=function(n,i,r){Lt[n]&&this[Y](),r?e[n]=i:t[n]=i,Lt[n]&&this.n()},this.Za=function(e){t[e]=this.b(e,0)+1},this.b=function(t,e){var n=this.get(t);return n==K||""===n?e:1*n},this.c=function(t,e){var n=this.get(t);return n==K?e:n+""},this.Ka=function(){if(s){var e=this.c(Vt,""),n=this.c(Nt,"/");Pn(e,n)||(t[Xt]=t[Ft]&&""!=e?O(e):1,s=N)}}};On[ft].stopPropagation=function(){throw"aborted"};var Dn=function(t){var e=this;this.q=0;var n=t.get(nn);this.Ua=function(){0<e.q&&n&&(e.q--,e.q||n())},this.Ja=function(){!e.q&&n&&M(n,10)},t.set(rn,e,V)},Kn=function(t,e,n){if(n=n?"":t.c(Xt,"1"),6!==(e=e[gt]("."))[ct]||Bn(e[0],n))return N;n=1*e[1];var i=1*e[2],r=1*e[3],a=1*e[4];return e=1*e[5],0<=n&&0<i&&0<r&&0<a&&0<=e?(t.set(Te,n),t.set(Le,i),t.set(Pe,r),t.set(je,a),t.set(Oe,e),V):N},Vn=function(t){var e=t.get(Te),n=t.get(Le),i=t.get(Pe),r=t.get(je),a=t.b(Oe,1);return[t.b(Xt,1),e!=K?e:"-",n||"-",i||"-",r||"-",a][Ct](".")},Xn=function(t){return[t.b(Xt,1),t.b(Ve,0),t.b(Xe,1),t.b(Ne,0)][Ct](".")},Nn=function(t,e,n){n=n?"":t.c(Xt,"1");var i=e[gt](".");return(4!==i[ct]||Bn(i[0],n))&&(i=X),t.set(Ve,i?1*i[1]:0),t.set(Xe,i?1*i[2]:10),t.set(Ne,i?1*i[3]:t.get(Kt)),i!=X||!Bn(e,n)},Rn=function(t,e){var n=f(t.c(Ae,"")),i=[],r=t.get(me);if(!e&&r){for(var a=0;a<r[ct];a++){var s=r[a];s&&1==s[mt]&&i[B](a+"="+f(s[at])+"="+f(s[Q])+"=1")}0<i[ct]&&(n+="|"+i[Ct]("^"))}return n?t.b(Xt,1)+"."+n:X},Gn=function(t,e,i){if(i=i?"":t.c(Xt,"1"),2>(e=e[gt]("."))[ct]||Bn(e[0],i))return N;if(0<(e=e[U](1)[Ct](".")[gt]("|"))[ct]&&t.set(Ae,h(e[0])),1>=e[ct])return V;for(e=e[1][gt](-1==e[1][tt](",")?"^":","),i=0;i<e[ct];i++){var r=e[i][gt]("=");if(4==r[ct]){var a={};n(a,h(r[1])),a.value=h(r[2]),a.scope=1,t.get(me)[r[0]]=a}}return V},Mn=function(t,e){var n=zn(t,e);return n?[t.b(Xt,1),t.b(Re,0),t.b(Ge,1),t.b(Me,1),n][Ct]("."):""},zn=function(t){function e(e,i){if(!s(t.get(e))){var r=(r=(r=t.c(e,""))[gt](" ")[Ct]("%20"))[gt]("+")[Ct]("%20");n[B](i+"="+r)}}var n=[];return e($e,"utmcid"),e(Ye,"utmcsr"),e(Be,"utmgclid"),e(He,"utmgclsrc"),e(Ue,"utmdclid"),e(We,"utmdsid"),e(Fe,"utmccn"),e(Ze,"utmcmd"),e(Je,"utmctr"),e(Qe,"utmcct"),n[Ct]("|")},$n=function(t,e,n){return n=n?"":t.c(Xt,"1"),5>(e=e[gt]("."))[ct]||Bn(e[0],n)?(t.set(Re,K),t.set(Ge,K),t.set(Me,K),t.set($e,K),t.set(Fe,K),t.set(Ye,K),t.set(Ze,K),t.set(Je,K),t.set(Qe,K),t.set(Be,K),t.set(He,K),t.set(Ue,K),t.set(We,K),N):(t.set(Re,1*e[1]),t.set(Ge,1*e[2]),t.set(Me,1*e[3]),Fn(t,e[U](4)[Ct](".")),V)},Fn=function(t,e){function n(t){return(t=e[et](t+"=(.*?)(?:\\|utm|$)"))&&2==t[ct]?t[1]:K}function i(e,n){n?(n=r?h(n):n[gt]("%20")[Ct](" "),t.set(e,n)):t.set(e,K)}-1==e[tt]("=")&&(e=h(e));var r="2"==n("utmcvr");i($e,n("utmcid")),i(Fe,n("utmccn")),i(Ye,n("utmcsr")),i(Ze,n("utmcmd")),i(Je,n("utmctr")),i(Qe,n("utmcct")),i(Be,n("utmgclid")),i(He,n("utmgclsrc")),i(Ue,n("utmdclid")),i(We,n("utmdsid"))},Bn=function(t,e){return e?t!=e:!/^\d+$/[H](t)},Hn=function(){this.filters=[]};Hn[ft].add=function(t,e){this.filters[B]({name:t,s:e})},Hn[ft].execute=function(t){try{for(var e=0;e<this.filters[ct];e++)this.filters[e].s.call(Zn,t)}catch(t){}};var Un,Wn,Yn=new function(){var t=[];this.set=function(e){t[e]=V},this.Xa=function(){for(var e=[],n=0;n<t[ct];n++)t[n]&&(e[$[Z](n/6)]=e[$[Z](n/6)]^1<<n%6);for(n=0;n<e[ct];n++)e[n]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_"[J](e[n]||0);return e[Ct]("")+"~"}},Zn=window,Jn=document,Qn=function(t){var e=Zn._gaUserPrefs;return e&&e.ioo&&e.ioo()||!!t&&Zn["ga-disable-"+t]===V},ti=function(t,e){M(t,e)},ei=function(t){var e=[],n=Jn.cookie[gt](";");t=RegExp("^\\s*"+t+"=\\s*(.*?)\\s*$");for(var i=0;i<n[ct];i++){var r=n[i][et](t);r&&e[B](r[1])}return e},ni=function(t,e,n,i,r,a){if(r=Qn(r)?N:Pn(i,n)?N:V){if(e&&0<=Zn[qt].userAgent[tt]("Firefox")){r=0;for(var s=(e=e[W](/\n|\r/g," "))[ct];r<s;++r){var o=255&e.charCodeAt(r);10!=o&&13!=o||(e=e[bt](0,r)+"?"+e[bt](r+1))}}e&&2e3<e[ct]&&(e=e[bt](0,2e3),I(69)),t=t+"="+e+"; path="+n+"; ",a&&(t+="expires="+new Date((new Date)[st]()+a).toGMTString()+"; "),i&&(t+="domain="+i+";"),Jn.cookie=t}},ii=function(){if(!Un){var t={},e=Zn[qt],n=Zn.screen;t.Q=n?n.width+"x"+n.height:"-",t.P=n?n.colorDepth+"-bit":"-",t.language=(e&&(e.language||e.browserLanguage)||"-")[St](),t.javaEnabled=e&&e.javaEnabled()?1:0,t.characterSet=Jn.characterSet||Jn.charset||"-";try{var i,r=Jn.documentElement,a=Jn.body,s=a&&a[ht]&&a[wt],e=[];r&&r[ht]&&r[wt]&&("CSS1Compat"===Jn.compatMode||!s)?e=[r[ht],r[wt]]:s&&(e=[a[ht],a[wt]]),i=0>=e[0]||0>=e[1]?"":e[Ct]("x"),t.Wa=i}catch(t){I(135)}Un=t}},ri=function(){ii();for(var t=Un,e=(t=(e=Zn[qt]).appName+e.version+t.language+e.platform+e.userAgent+t.javaEnabled+t.Q+t.P+(Jn.cookie?Jn.cookie:"")+(Jn.referrer?Jn.referrer:""))[ct],n=Zn.history[ct];0<n;)t+=n--^e++;return O(t)},ai=function(t){ii();var e=Un;if(t.set(ye,e.Q),t.set(be,e.P),t.set(Ce,e.language),t.set(Se,e.characterSet),t.set(ke,e.javaEnabled),t.set(xe,e.Wa),t.get(Bt)&&t.get(Ht)){if(!(e=Wn)){var n,i,r;if(i="ShockwaveFlash",(e=(e=Zn[qt])?e.plugins:K)&&0<e[ct])for(n=0;n<e[ct]&&!r;n++)-1<(i=e[n])[at][tt]("Shockwave Flash")&&(r=i.description[gt]("Shockwave Flash ")[1]);else{i=i+"."+i;try{r=(n=new ActiveXObject(i+".7")).GetVariable("$version")}catch(t){}if(!r)try{r="WIN 6,0,21,0",(n=new ActiveXObject(i+".6")).AllowScriptAccess="always",r=n.GetVariable("$version")}catch(t){}if(!r)try{r=(n=new ActiveXObject(i)).GetVariable("$version")}catch(t){}r&&(r=r[gt](" ")[1][gt](","),r=r[0]+"."+r[1]+" r"+r[2])}e=r||"-"}Wn=e,t.set(qe,Wn)}else t.set(qe,"-")},si=function(t){if(r(t))this.s=t;else{var e=t[0],n=e.lastIndexOf(":"),i=e.lastIndexOf(".");this.h=this.i=this.l="",-1==n&&-1==i?this.h=e:-1==n&&-1!=i?(this.i=e[bt](0,i),this.h=e[bt](i+1)):-1!=n&&-1==i?(this.l=e[bt](0,n),this.h=e[bt](n+1)):n>i?(this.i=e[bt](0,i),this.l=e[bt](i+1,n),this.h=e[bt](n+1)):(this.i=e[bt](0,i),this.h=e[bt](i+1)),this.k=t[U](1),this.Ma=!this.l&&"_require"==this.h,this.J=!this.i&&!this.l&&"_provide"==this.h}},oi=function(){Tn(oi[ft],"push",oi[ft][B],5),Tn(oi[ft],"_getPlugin",C,121),Tn(oi[ft],"_createAsyncTracker",oi[ft].Sa,33),Tn(oi[ft],"_getAsyncTracker",oi[ft].Ta,34),this.I=new Et,this.p=[]};(D=oi[ft]).Na=function(t,e,n){var i=this.I.get(t);return r(i)?(e.plugins_=e.plugins_||new Et,e.plugins_.set(t,new i(e,n||{})),V):N},D.push=function(t){var e=Ir.Va[kt](this,arguments),e=Ir.p.concat(e);for(Ir.p=[];0<e[ct]&&!Ir.O(e[0])&&(e.shift(),!(0<Ir.p[ct])););return Ir.p=Ir.p.concat(e),0},D.Va=function(t){for(var e=[],n=0;n<arguments[ct];n++)try{var i=new si(arguments[n]);i.J?this.O(i):e[B](i)}catch(t){}return e},D.O=function(t){try{if(t.s)t.s[kt](Zn);else if(t.J)this.I.set(t.k[0],t.k[1]);else{c="_gat"==t.i?Er:"_gaq"==t.i?Ir:Er.u(t.i);if(t.Ma){if(!this.Na(t.k[0],c,t.k[2])){if(!t.Pa){var e,n=p(""+t.k[1]),i=n[pt],r=Jn[vt][pt];if(e="https:"==i||i==r?V:"http:"!=i?N:"http:"==r){var a;t:{var s=p(Jn[vt][yt]);if(!(n.Oa||0<=n.url[tt]("?")||0<=n[rt][tt]("://")||n[ot]==s[ot]&&n[nt]==s[nt]))for(var o="http:"==n[pt]?80:443,u=Er.S,c=0;c<u[ct];c++)if(n[ot]==u[c][0]&&(n[nt]||o)==(u[c][1]||o)&&0==n[rt][tt](u[c][2])){a=V;break t}a=N}e=a&&!Qn()}e&&(t.Pa=g(n.url))}return V}}else t.l&&(c=c.plugins_.get(t.l)),c[t.h][kt](c,t.k)}}catch(t){}},D.Sa=function(t,e){return Er.r(t,e||"")},D.Ta=function(t){return Er.u(t)};var ui,ci,fi,hi,gi=function(){function t(t,e,n,i){K==a[t]&&(a[t]={}),K==a[t][e]&&(a[t][e]=[]),a[t][e][n]=i}function e(t,e,n){if(K!=a[t]&&K!=a[t][e])return a[t][e][n]}function n(t,e){if(K!=a[t]&&K!=a[t][e]){a[t][e]=K;var n,i=V;for(n=0;n<s[ct];n++)if(K!=a[t][s[n]]){i=N;break}i&&(a[t]=K)}}function i(t){var e,n,i="",r=N;for(e=0;e<s[ct];e++)if(n=t[s[e]],K!=n){r&&(i+=s[e]);for(var r=[],a=K,d=K,d=0;d<n[ct];d++)if(K!=n[d]){a="",d!=g&&K==n[d-1]&&(a+=d[ut]()+f);for(var m=n[d],v="",l=K,_=K,p=K,l=0;l<m[ct];l++)_=m[J](l),p=h[_],v+=K!=p?p:_;a+=v,r[B](a)}i+=o+r[Ct](c)+u,r=N}else r=V;return i}var r=this,a=[],s=["k","v"],o="(",u=")",c="*",f="!",h={"'":"'0"};h[u]="'1",h[c]="'2",h[f]="'3";var g=1;r.Ra=function(t){return K!=a[t]},r.A=function(){for(var t="",e=0;e<a[ct];e++)K!=a[e]&&(t+=e[ut]()+i(a[e]));return t},r.Qa=function(t){if(t==K)return r.A();for(var e=t.A(),n=0;n<a[ct];n++)K!=a[n]&&!t.Ra(n)&&(e+=n[ut]()+i(a[n]));return e},r.f=function(e,n,i){return L(i)?(t(e,"k",n,i),V):N},r.o=function(e,n,i){return P(i)?(t(e,"v",n,i[ut]()),V):N},r.getKey=function(t,n){return e(t,"k",n)},r.N=function(t,n){return e(t,"v",n)},r.L=function(t){n(t,"k")},r.M=function(t){n(t,"v")},Tn(r,"_setKey",r.f,89),Tn(r,"_setValue",r.o,90),Tn(r,"_getKey",r.getKey,87),Tn(r,"_getValue",r.N,88),Tn(r,"_clearKey",r.L,85),Tn(r,"_clearValue",r.M,86)},di=function(t){var e=Zn.gaGlobal;return t&&!e&&(Zn.gaGlobal=e={}),e},mi=function(){var t=di(V).hid;return t==X&&(t=u(),di(V).hid=t),t},vi=function(t){t.set(we,mi());var e=di();if(e&&e.dh==t.get(Xt)){var n=e.sid;n&&("0"==n&&I(112),t.set(je,n),t.get(Ee)&&t.set(Pe,n)),e=e.vid,t.get(Ee)&&e&&(1*(e=e[gt]("."))[1]||I(112),t.set(Te,1*e[0]),t.set(Le,1*e[1]))}},li=function(t,e,n,i){var r=t.c(Vt,""),a=t.c(Nt,"/");i=i!=K?i:t.b(Rt,0),t=t.c(Pt,""),ni(e,n,a,r,t,i)},_i=function(t){var e=t.c(Vt,"");t.b(Xt,1);var n=t.c(Nt,"/"),i=t.c(Pt,"");ni("__utma",Vn(t),n,e,i,t.get(Rt)),ni("__utmb",Xn(t),n,e,i,t.get(Gt)),ni("__utmc",""+t.b(Xt,1),n,e,i);var r=Mn(t,V);r?ni("__utmz",r,n,e,i,t.get(Mt)):ni("__utmz","",n,e,"",-1),(r=Rn(t,N))?ni("__utmv",r,n,e,i,t.get(Rt)):ni("__utmv","",n,e,"",-1)},pi=function(t){var e=t.b(Xt,1);if(!Kn(t,S(e,ei("__utma"))))return t.set(Ie,V),N;var n=!Nn(t,S(e,ei("__utmb")));return t.set(Ke,n),$n(t,S(e,ei("__utmz"))),Gn(t,S(e,ei("__utmv"))),ui=!n,V},wi=function(t){!ui&&!(0<ei("__utmb")[ct])&&(ni("__utmd","1",t.c(Nt,"/"),t.c(Vt,""),t.c(Pt,""),1e4),0==ei("__utmd")[ct]&&t[dt]())},yi=function(t){t.get(Te)==K?ki(t):t.get(Ie)&&!t.get(wn)?ki(t):t.get(Ke)&&qi(t)},bi=function(t){t.get(ze)&&!t.get(De)&&(qi(t),t.set(Ge,t.get(Oe)))},ki=function(t){var e=t.get(Kt);t.set(Ee,V),t.set(Te,u()^2147483647&ri()),t.set(Ae,""),t.set(Le,e),t.set(Pe,e),t.set(je,e),t.set(Oe,1),t.set(De,V),t.set(Ve,0),t.set(Xe,10),t.set(Ne,e),t.set(me,[]),t.set(Ie,N),t.set(Ke,N)},qi=function(t){t.set(Pe,t.get(je)),t.set(je,t.get(Kt)),t.Za(Oe),t.set(De,V),t.set(Ve,0),t.set(Xe,10),t.set(Ne,t.get(Kt)),t.set(Ke,N)},Ci="daum:q eniro:search_word naver:query pchome:q images.google:q google:q yahoo:p yahoo:q msn:q bing:q aol:query aol:q lycos:q lycos:query ask:q netscape:query cnn:query about:terms mamma:q voila:rdata virgilio:qs live:q baidu:wd alice:qs yandex:text najdi:q seznam:q rakuten:qt biglobe:q goo.ne:MT wp:szukaj onet:qt yam:k kvasir:q ozu:q terra:query rambler:query conduit:q babylon:q search-results:q avg:q comcast:q incredimail:q startsiden:q go.mail.ru:q search.centrum.cz:q 360.cn:q".split(" "),Si=function(t){if(t.get(Ut)&&!t.get(wn)){for(var e=!(s(t.get($e))&&s(t.get(Ye))&&s(t.get(Be))&&s(t.get(Ue))),n={},i=0;i<Ii[ct];i++){var r=Ii[i];n[r]=t.get(r)}(i=t.get(tn))?(I(149),r=new Et,w(r,i),i=r):i=_(Jn[vt][yt],t.get($t)).d,("1"!=m(i.get(t.get(ie)))||!e)&&(!(i=xi(t,i)||Ti(t))&&!e&&t.get(De)&&(Ai(t,K,"(direct)",K,K,K,"(direct)","(none)",K,K),i=V),i&&(t.set(ze,Li(t,n)),e="(direct)"==t.get(Ye)&&"(direct)"==t.get(Fe)&&"(none)"==t.get(Ze),t.get(ze)||t.get(De)&&!e))&&(t.set(Re,t.get(Kt)),t.set(Ge,t.get(Oe)),t.Za(Me))}},xi=function(t,e){function n(n,i){i=i||"-";var r=m(e.get(t.get(n)));return r&&"-"!=r?h(r):i}var i=m(e.get(t.get(Yt)))||"-",r=m(e.get(t.get(Qt)))||"-",a=m(e.get(t.get(Jt)))||"-",o=m(e.get("gclsrc"))||"-",u=m(e.get("dclid"))||"-",c=n(Zt,"(not set)"),f=n(te,"(not set)"),g=n(ee),d=n(ne);if(s(i)&&s(a)&&s(u)&&s(r))return N;var v=!s(a)&&!s(o),v=s(r)&&(!s(u)||v),l=s(g);if(v||l){var p=_(p=ji(t),V);(p=Ei(t,p))&&!s(p[1]&&!p[2])&&(v&&(r=p[0]),l&&(g=p[1]))}return Ai(t,i,r,a,o,u,c,f,g,d),V},Ti=function(t){var e=_(n=ji(t),V);if(!(n!=K&&n!=X&&""!=n&&"0"!=n&&"-"!=n&&0<=n[tt]("://"))||e&&-1<e[ot][tt]("google")&&e.d.contains("q")&&"cse"==e[rt])return N;if((n=Ei(t,e))&&!n[2])return Ai(t,K,n[0],K,K,K,"(organic)","organic",n[1],K),V;if(n||!t.get(De))return N;t:{for(var n=t.get(fe),i=l(e[ot]),r=0;r<n[ct];++r)if(-1<i[tt](n[r])){t=N;break t}Ai(t,K,i,K,K,K,"(referral)","referral",K,"/"+e[rt]),t=V}return t},Ei=function(t,e){for(var n=t.get(ue),i=0;i<n[ct];++i){var r=n[i][gt](":");if(-1<e[ot][tt](r[0][St]())){var a=e.d.get(r[1]);if(a&&(!(a=d(a))&&-1<e[ot][tt]("google.")&&(a="(not provided)"),!r[3]||-1<e.url[tt](r[3]))){t:{for(var n=a,i=t.get(ce),n=h(n)[St](),s=0;s<i[ct];++s)if(n==i[s]){n=V;break t}n=N}return[r[2]||r[0],a,n]}}}return X},Ai=function(t,e,n,i,r,a,s,o,u,c){t.set($e,e),t.set(Ye,n),t.set(Be,i),t.set(He,r),t.set(Ue,a),t.set(Fe,s),t.set(Ze,o),t.set(Je,u),t.set(Qe,c)},Ii=[Fe,$e,Be,Ue,Ye,Ze,Je,Qe],Li=function(t,e){function n(t){return t=(""+t)[gt]("+")[Ct]("%20"),t=t[gt](" ")[Ct]("%20")}function i(n){var i=""+(t.get(n)||"");return n=""+(e[n]||""),0<i[ct]&&i==n}if(i(Be)||i(Ue))return I(131),N;for(var r=0;r<Ii[ct];r++){var a=Ii[r],s=e[a]||"-",a=t.get(a)||"-";if(n(s)!=n(a))return V}return N},Pi=RegExp(/^https:\/\/(www\.)?google(\.com?)?(\.[a-z]{2}t?)?\/?$/i),ji=function(t){t=y(t.get(pe),t.get(Nt));try{if(Pi[H](t))return I(136),t+"?q="}catch(t){I(145)}return t},Oi=function(t){ci=t.c(Be,""),fi=t.c(He,"")},Di=function(t){var e=t.c(Be,""),n=t.c(He,"");e!=ci&&(-1<n[tt]("ds")?t.set(We,K):!s(ci)&&-1<fi[tt]("ds")&&t.set(We,ci))},Ki=function(t){Vi(t,Jn[vt][yt])?(t.set(wn,V),I(12)):t.set(wn,N)},Vi=function(t,e){if(!t.get(zt))return N;var n=d((u=_(e,t.get($t))).d.get("__utma")),i=d(u.d.get("__utmb")),r=d(u.d.get("__utmc")),a=d(u.d.get("__utmx")),s=d(u.d.get("__utmz")),o=d(u.d.get("__utmv")),u=d(u.d.get("__utmk"));if(O(""+n+i+r+a+s+o)!=u){if(n=h(n),i=h(i),r=h(r),a=h(a),!(r=Ni(n+i+r+a,s,o,u)))return N;s=r[0],o=r[1]}return Kn(t,n,V)?(Nn(t,i,V),$n(t,s,V),Gn(t,o,V),Fi(t,a,V),V):N},Xi=function(t,e,n){var i;i=Vn(t)||"-";var r=Xn(t)||"-",a=""+t.b(Xt,1)||"-",s=Bi(t)||"-",o=Mn(t,N)||"-",u=O(""+i+r+a+s+o+(t=Rn(t,N)||"-")),c=[];return c[B]("__utma="+i),c[B]("__utmb="+r),c[B]("__utmc="+a),c[B]("__utmx="+s),c[B]("__utmz="+o),c[B]("__utmv="+t),c[B]("__utmk="+u),(i=c[Ct]("&"))?(r=e[tt]("#"),n?0>r?e+"#"+i:e+"&"+i:(n="",a=e[tt]("?"),0<r&&(n=e[bt](r),e=e[bt](0,r)),0>a?e+"?"+i+n:e+"&"+i+n)):e},Ni=function(t,e,n,i){for(var r=0;3>r;r++){for(var a=0;3>a;a++){if(i==O(t+e+n))return I(127),[e,n];var s=e[W](/ /g,"%20"),o=n[W](/ /g,"%20");if(i==O(t+s+o))return I(128),[s,o];if(s=s[W](/\+/g,"%20"),o=o[W](/\+/g,"%20"),i==O(t+s+o))return I(129),[s,o];try{var u=e[et]("utmctr=(.*?)(?:\\|utm|$)");if(u&&2==u[ct]&&(s=e[W](u[1],f(h(u[1]))),i==O(t+s+n)))return I(139),[s,n]}catch(t){}e=h(e)}n=h(n)}},Ri="|",Gi=function(t,e,n,i,r,a,s,o,u){var c=zi(t,e);return c||(c={},t.get(he)[B](c)),c.id_=e,c.affiliation_=n,c.total_=i,c.tax_=r,c.shipping_=a,c.city_=s,c.state_=o,c.country_=u,c.items_=c.items_||[],c},Mi=function(t,e,n,i,r,a,s){var o;t:{if((t=zi(t,e)||Gi(t,e,"",0,0,0,"","",""))&&t.items_){o=t.items_;for(var u=0;u<o[ct];u++)if(o[u].sku_==n){o=o[u];break t}}o=X}return u=o||{},u.transId_=e,u.sku_=n,u.name_=i,u.category_=r,u.price_=a,u.quantity_=s,o||t.items_[B](u),u},zi=function(t,e){for(var n=t.get(he),i=0;i<n[ct];i++)if(n[i].id_==e)return n[i];return X},$i=function(t){if(!hi){var e;e=Jn[vt].hash;var n=Zn[at],i=/^#?gaso=([^&]*)/;(n=(e=(e=e&&e[et](i)||n&&n[et](i))?e[1]:d(ei("GASO")))&&e[et](/^(?:!([-0-9a-z.]{1,40})!)?([-.\w]{10,1200})$/i))&&(li(t,"GASO",""+e,0),Er._gasoDomain=t.get(Vt),Er._gasoCPath=t.get(Nt),t=n[1],g("https://www.google.com/analytics/web/inpage/pub/inpage.js?"+(t?"prefix="+t+"&":"")+u(),"_gasojs")),hi=V}},Fi=function(t,e,n){n&&(e=h(e)),n=t.b(Xt,1),!(2>(e=e[gt]("."))[ct])&&/^\d+$/[H](e[0])&&(e[0]=""+n,li(t,"__utmx",e[Ct]("."),K))},Bi=function(t,e){var n=S(t.get(Xt),ei("__utmx"));return"-"==n&&(n=""),e?f(n):n},Hi=function(t){try{var e=_(Jn[vt][yt],N),n=F(m(e.d.get("utm_referrer")))||"";n&&t.set(pe,n);var i=Zn.gaData&&Zn.gaData.expId;i||(i=F(d(e.d.get("utm_expid")))||""),i&&t.set(bn,""+i)}catch(t){I(146)}},Ui=function(t,e){var n=$.min(t.b(dn,0),100);if(t.b(Te,0)%100>=n)return N;if((n=Qi()||tr())==K)return N;var i=n[0];return i==K||i==G||z(i)?N:(0<i?e(Yi(n)?Ji(n):Ji(n[U](0,1))):xt(Zn,"load",function(){Ui(t,e)},N),V)},Wi=function(t,e,n,i){var r=new gi;return r.f(14,90,e[bt](0,500)),r.f(14,91,t[bt](0,150)),r.f(14,92,""+Zi(n)),i!=K&&r.f(14,93,i[bt](0,500)),r.o(14,90,n),r},Yi=function(t){for(var e=1;e<t[ct];e++)if(z(t[e])||t[e]==G||0>t[e])return N;return V},Zi=function(t){return z(t)||0>t?0:5e3>t?10*$[Z](t/10):5e4>t?100*$[Z](t/100):41e5>t?1e3*$[Z](t/1e3):41e5},Ji=function(t){for(var e=new gi,n=0;n<t[ct];n++)e.f(14,n+1,""+Zi(t[n])),e.o(14,n+1,t[n]);return e},Qi=function(){var t=Zn.performance||Zn.webkitPerformance;if(t=t&&t.timing){var e=t.navigationStart;if(0!=e)return[t.loadEventStart-e,t.domainLookupEnd-t.domainLookupStart,t.connectEnd-t.connectStart,t.responseStart-t.requestStart,t.responseEnd-t.responseStart,t.fetchStart-e,t.domInteractive-e,t.domContentLoadedEventStart-e];I(133)}},tr=function(){if(Zn.top==Zn){var t=Zn.external,e=t&&t.onloadT;return t&&!t.isValidLoadTime&&(e=K),2147483648<e&&(e=K),0<e&&t.setPageReadyTime(),e==K?K:[e]}},er=function(t){if(t.get(Ee))try{var e;t:{var n=ei(t.get(kn)||"_ga");if(n&&!(1>n[ct])){for(var i=[],r=0;r<n[ct];r++){var a,s=n[r][gt]("."),o=s.shift();if(("GA1"==o||"1"==o)&&1<s[ct]){var u=s.shift()[gt]("-");1==u[ct]&&(u[1]="1"),u[0]*=1,u[1]*=1,a={Ya:u,$a:s[Ct](".")}}else a=K;a&&i[B](a)}if(1==i[ct]){e=i[0].$a;break t}if(0!=i[ct]){var c=t.get(qn)||t.get(Vt);if(1==(i=nr(i,(0==c[tt](".")?c.substr(1):c)[gt](".")[ct],0))[ct]){e=i[0].$a;break t}var f=t.get(Cn)||t.get(Nt);(n=f)?(1<n[ct]&&"/"==n[J](n[ct]-1)&&(n=n.substr(0,n[ct]-1)),0!=n[tt]("/")&&(n="/"+n),f=n):f="/",e=(i=nr(i,"/"==f?1:f[gt]("/")[ct],1))[0].$a;break t}}e=K}if(e){var h=(""+e)[gt](".");2==h[ct]&&/[0-9.]/[H](h)&&(I(114),t.set(Te,h[0]),t.set(Le,h[1]),t.set(Ee,N))}}catch(t){I(115)}},nr=function(t,e,n){for(var i=[],r=[],a=128,s=0;s<t[ct];s++){var o=t[s];o.Ya[n]==e?i[B](o):o.Ya[n]==a?r[B](o):o.Ya[n]<a&&(r=[o],a=o.Ya[n])}return 0<i[ct]?i:r},ir=function(t,e,n){function i(t){return function(e){if((e=e.get(yn)[t])&&e[ct])for(var n=In(r,t),i=0;i<e[ct];i++)e[i].call(r,n)}}var r=this;this.a=new On,this.get=function(t){return this.a.get(t)},this.set=function(t,e,n){this.a.set(t,e,n)},this.set(Pt,e||"UA-XXXXX-X"),this.set(Dt,t||""),this.set(Ot,n||""),this.set(Kt,$.round((new Date)[st]()/1e3)),this.set(Nt,"/"),this.set(Rt,63072e6),this.set(Mt,15768e6),this.set(Gt,18e5),this.set(zt,N),this.set(oe,50),this.set($t,N),this.set(Ft,V),this.set(Bt,V),this.set(Ht,V),this.set(Ut,V),this.set(Wt,V),this.set(Zt,"utm_campaign"),this.set(Yt,"utm_id"),this.set(Jt,"gclid"),this.set(Qt,"utm_source"),this.set(te,"utm_medium"),this.set(ee,"utm_term"),this.set(ne,"utm_content"),this.set(ie,"utm_nooverride"),this.set(re,100),this.set(dn,1),this.set(mn,N),this.set(ae,"/__utm.gif"),this.set(se,1),this.set(he,[]),this.set(me,[]),this.set(ue,Ci[U](0)),this.set(ce,[]),this.set(fe,[]),this.B("auto"),this.set(pe,Jn.referrer),Hi(this.a),this.set(yn,{hit:[],load:[]}),this.a.g("0",Ki),this.a.g("1",Oi),this.a.g("2",yi),this.a.g("3",er),this.a.g("4",Si),this.a.g("5",Di),this.a.g("6",bi),this.a.g("7",i("load")),this.a.g("8",$i),this.a.e("A",T),this.a.e("B",E),this.a.e("C",yi),this.a.e("D",x),this.a.e("E",jn),this.a.e("F",ar),this.a.e("G",wi),this.a.e("H",A),this.a.e("I",ai),this.a.e("J",vi),this.a.e("K",i("hit")),this.a.e("L",wr),this.a.e("M",sr),0===this.get(Kt)&&I(111),this.a.T(),this.H=K};(D=ir[ft]).m=function(){var t=this.get(ge);return t||(t=new gi,this.set(ge,t)),t},D.La=function(t){for(var e in t){var n=t[e];t.hasOwnProperty(e)&&this.set(e,n,V)}},D.K=function(t){if(this.get(mn))return N;var e=this,n=Ui(this.a,function(n){e.set(le,t,V),e.t(n)});return this.set(mn,n),n},D.Fa=function(t){t&&a(t)?(I(13),this.set(le,t,V)):"object"==typeof t&&t!==X&&this.La(t),this.H=t=this.get(le),this.a.j("page"),this.K(t),42==$[Z](1e4*$[_t]())&&j()},D.F=function(t,e,n,i,r){return""==t||!L(t)||""==e||!L(e)||n!=K&&!L(n)||i!=K&&!P(i)?N:(this.set(sn,t,V),this.set(on,e,V),this.set(un,n,V),this.set(cn,i,V),this.set(an,!!r,V),this.a.j("event"),V)},D.Ha=function(t,e,n,i,r){var a=this.a.b(dn,0);return 1*r===r&&(a=r),this.a.b(Te,0)%100>=a?N:(n=1*(""+n),""==t||!L(t)||""==e||!L(e)||!P(n)||z(n)||0>n||0>a||100<a||i!=K&&(""==i||!L(i))?N:(this.t(Wi(t,e,n,i)),V))},D.Ga=function(t,e,n,i){return t&&e?(this.set(fn,t,V),this.set(hn,e,V),this.set(gn,n||Jn[vt][yt],V),i&&this.set(le,i,V),this.a.j("social"),V):N},D.Ea=function(){this.set(dn,10),this.K(this.H)},D.Ia=function(){this.a.j("trans")},D.t=function(t){this.set(de,t,V),this.a.j("event")},D.ia=function(t){this.v();var e=this;return{_trackEvent:function(n,i,r){I(91),e.F(t,n,i,r)}}},D.ma=function(t){return this.get(t)},D.xa=function(t,e){if(t)if(a(t))this.set(t,e);else if("object"==typeof t)for(var n in t)t.hasOwnProperty(n)&&this.set(n,t[n])},D.addEventListener=function(t,e){var n=this.get(yn)[t];n&&n[B](e)},D.removeEventListener=function(t,e){for(var n=this.get(yn)[t],i=0;n&&i<n[ct];i++)if(n[i]==e){n.splice(i,1);break}},D.qa=function(){return"5.4.1"},D.B=function(t){this.get(Ft),t="auto"==t?l(Jn.domain):t&&"-"!=t&&"none"!=t?t[St]():"",this.set(Vt,t)},D.va=function(t){this.set(Ft,!!t)},D.na=function(t,e){return Xi(this.a,t,e)},D.link=function(t,e){if(this.a.get(zt)&&t){var n=Xi(this.a,t,e);Jn[vt].href=n}},D.ua=function(t,e){this.a.get(zt)&&t&&t.action&&(t.action=Xi(this.a,t.action,e))},D.za=function(){this.v();var t=this.a;if((e=Jn.getElementById?Jn.getElementById("utmtrans"):Jn.utmform&&Jn.utmform.utmtrans?Jn.utmform.utmtrans:X)&&e[Q]){t.set(he,[]);for(var e=e[Q][gt]("UTM:"),n=0;n<e[ct];n++){e[n]=o(e[n]);for(var i=e[n][gt](Ri),r=0;r<i[ct];r++)i[r]=o(i[r]);"T"==i[0]?Gi(t,i[1],i[2],i[3],i[4],i[5],i[6],i[7],i[8]):"I"==i[0]&&Mi(t,i[1],i[2],i[3],i[4],i[5],i[6])}}},D.$=function(t,e,n,i,r,a,s,o){return Gi(this.a,t,e,n,i,r,a,s,o)},D.Y=function(t,e,n,i,r,a){return Mi(this.a,t,e,n,i,r,a)},D.Aa=function(t){Ri=t||"|"},D.ea=function(){this.set(he,[])},D.wa=function(t,e,i,r){var a=this.a;if(0>=t||t>a.get(oe))t=N;else if(!e||!i||128<e[ct]+i[ct])t=N;else{1!=r&&2!=r&&(r=3);var s={};n(s,e),s.value=i,s.scope=r,a.get(me)[t]=s,t=V}return t&&this.a.n(),t},D.ka=function(t){this.a.get(me)[t]=K,this.a.n()},D.ra=function(t){return(t=this.a.get(me)[t])&&1==t[mt]?t[Q]:K},D.Ca=function(t,e,n){this.m().f(t,e,n)},D.Da=function(t,e,n){this.m().o(t,e,n)},D.sa=function(t,e){return this.m().getKey(t,e)},D.ta=function(t,e){return this.m().N(t,e)},D.fa=function(t){this.m().L(t)},D.ga=function(t){this.m().M(t)},D.ja=function(){return new gi},D.W=function(t){t&&this.get(ce)[B](t[St]())},D.ba=function(){this.set(ce,[])},D.X=function(t){t&&this.get(fe)[B](t[St]())},D.ca=function(){this.set(fe,[])},D.Z=function(t,e,n,i,r){t&&e&&(t=[t,e[St]()][Ct](":"),(i||r)&&(t=[t,i,r][Ct](":")),(i=this.get(ue)).splice(n?0:i[ct],0,t))},D.da=function(){this.set(ue,[])},D.ha=function(t){this.a[Y]();var e=this.get(Nt),n=Bi(this.a);this.set(Nt,t),this.a.n(),Fi(this.a,n),this.set(Nt,e)},D.ya=function(t,e){if(0<t&&5>=t&&a(e)&&""!=e){var n=this.get(vn)||[];n[t]=e,this.set(vn,n)}},D.V=function(t){if((t=""+t)[et](/^[A-Za-z0-9]{1,5}$/)){var e=this.get(pn)||[];e[B](t),this.set(pn,e)}},D.v=function(){this.a[Y]()},D.Ba=function(t){t&&""!=t&&(this.set(Ae,t),this.a.j("var"))};var rr=N,ar=function(t){if("trans"!==t.get(en)&&500<=t.b(Ve,0)&&t[dt](),"event"===t.get(en)){var e=(new Date)[st](),n=t.b(Ne,0),i=t.b(je,0);0<(n=$[Z]((e-(n!=i?n:1e3*n))/1e3*1))&&(t.set(Ne,e),t.set(Xe,$.min(10,t.b(Xe,0)+n))),0>=t.b(Xe,0)&&t[dt]()}},sr=function(t){"event"===t.get(en)&&t.set(Xe,$.max(0,t.b(Xe,10)-1))},or=function(){var t=[];this.add=function(e,n,i){i&&(n=f(""+n)),t[B](e+"="+n)},this.toString=function(){return t[Ct]("&")}},ur=function(t,e){(e||2!=t.get(se))&&t.Za(Ve)},cr=function(t,e){e.add("utmwv","5.4.1"),e.add("utms",t.get(Ve)),e.add("utmn",u());var n=Jn[vt].hostname;s(n)||e.add("utmhn",n,V),100!=(n=t.get(re))&&e.add("utmsp",n,V)},fr=function(t,e){e.add("utmht",(new Date)[st]()),e.add("utmac",o(t.get(Pt))),t.get(bn)&&e.add("utmxkey",t.get(bn),V),t.get(an)&&e.add("utmni",1);var n=t.get(pn);n&&0<n[ct]&&e.add("utmdid",n[Ct](".")),gr(t,e),t.get(jt)!==N&&(t.get(jt)||Er.w)&&e.add("aip",1),e.add("utmu",Yn.Xa())},hr=function(t,e){for(var n=t.get(vn)||[],i=[],r=1;r<n[ct];r++)n[r]&&i[B](r+":"+f(n[r][W](/%/g,"%25")[W](/:/g,"%3A")[W](/,/g,"%2C")));i[ct]&&e.add("utmpg",i[Ct](","))},gr=function(t,e){function n(t,e){e&&i[B](t+"="+e+";")}var i=[];n("__utma",Vn(t)),n("__utmz",Mn(t,N)),n("__utmv",Rn(t,V)),n("__utmx",Bi(t)),e.add("utmcc",i[Ct]("+"),V)},dr=function(t,e){t.get(Bt)&&(e.add("utmcs",t.get(Se),V),e.add("utmsr",t.get(ye)),t.get(xe)&&e.add("utmvp",t.get(xe)),e.add("utmsc",t.get(be)),e.add("utmul",t.get(Ce)),e.add("utmje",t.get(ke)),e.add("utmfl",t.get(qe),V))},mr=function(t,e){t.get(Wt)&&t.get(_e)&&e.add("utmdt",t.get(_e),V),e.add("utmhid",t.get(we)),e.add("utmr",y(t.get(pe),t.get(Nt)),V),e.add("utmp",f(t.get(le),V),V)},vr=function(t,e){for(var n=t.get(ge),i=t.get(de),r=t.get(me)||[],a=0;a<r[ct];a++){var o=r[a];o&&(n||(n=new gi),n.f(8,a,o[at]),n.f(9,a,o[Q]),3!=o[mt]&&n.f(11,a,""+o[mt]))}!s(t.get(sn))&&!s(t.get(on),V)&&(n||(n=new gi),n.f(5,1,t.get(sn)),n.f(5,2,t.get(on)),(r=t.get(un))!=K&&n.f(5,3,r),(r=t.get(cn))!=K&&n.o(5,1,r)),n?e.add("utme",n.Qa(i),V):i&&e.add("utme",i.A(),V)},lr=function(t,e,n){var i=new or;return ur(t,n),cr(t,i),i.add("utmt","tran"),i.add("utmtid",e.id_,V),i.add("utmtst",e.affiliation_,V),i.add("utmtto",e.total_,V),i.add("utmttx",e.tax_,V),i.add("utmtsp",e.shipping_,V),i.add("utmtci",e.city_,V),i.add("utmtrg",e.state_,V),i.add("utmtco",e.country_,V),vr(t,i),dr(t,i),mr(t,i),(e=t.get(ve))&&i.add("utmcu",e,V),n||(hr(t,i),fr(t,i)),i[ut]()},_r=function(t,e,n){var i=new or;return ur(t,n),cr(t,i),i.add("utmt","item"),i.add("utmtid",e.transId_,V),i.add("utmipc",e.sku_,V),i.add("utmipn",e.name_,V),i.add("utmiva",e.category_,V),i.add("utmipr",e.price_,V),i.add("utmiqt",e.quantity_,V),vr(t,i),dr(t,i),mr(t,i),(e=t.get(ve))&&i.add("utmcu",e,V),n||(hr(t,i),fr(t,i)),i[ut]()},pr=function(t,e){if("page"==(n=t.get(en)))n=new or,ur(t,e),cr(t,n),vr(t,n),dr(t,n),mr(t,n),e||(hr(t,n),fr(t,n)),n=[n[ut]()];else if("event"==n)n=new or,ur(t,e),cr(t,n),n.add("utmt","event"),vr(t,n),dr(t,n),mr(t,n),e||(hr(t,n),fr(t,n)),n=[n[ut]()];else if("var"==n)n=new or,ur(t,e),cr(t,n),n.add("utmt","var"),!e&&fr(t,n),n=[n[ut]()];else if("trans"==n)for(var n=[],i=t.get(he),r=0;r<i[ct];++r){n[B](lr(t,i[r],e));for(var a=i[r].items_,s=0;s<a[ct];++s)n[B](_r(t,a[s],e))}else"social"==n?e?n=[]:(n=new or,ur(t,e),cr(t,n),n.add("utmt","social"),n.add("utmsn",t.get(fn),V),n.add("utmsa",t.get(hn),V),n.add("utmsid",t.get(gn),V),vr(t,n),dr(t,n),mr(t,n),hr(t,n),fr(t,n),n=[n[ut]()]):"feedback"==n?e?n=[]:(n=new or,ur(t,e),cr(t,n),n.add("utmt","feedback"),n.add("utmfbid",t.get(ln),V),n.add("utmfbpr",t.get(_n),V),vr(t,n),dr(t,n),mr(t,n),hr(t,n),fr(t,n),n=[n[ut]()]):n=[];return n},wr=function(t){var e,n=t.get(se),i=t.get(rn),r=i&&i.Ua,a=0;if(0==n||2==n)for(var s=t.get(ae)+"?",o=0,u=(e=pr(t,V))[ct];o<u;o++)kr(e[o],r,s,V),a++;if(1==n||2==n)for(o=0,u=(e=pr(t))[ct];o<u;o++)try{kr(e[o],r),a++}catch(t){t&&b(t[at],K,t.message)}i&&(i.q=a)},yr=function(t){n(this,"len"),this.message=t+"-8192"},br=function(t){n(this,"ff2post"),this.message=t+"-2036"},kr=function(t,e,n,i){if(e=e||c,i||2036>=t[ct])qr(t,e,n);else{if(!(8192>=t[ct]))throw new yr(t[ct]);if(0<=Zn[qt].userAgent[tt]("Firefox")&&![].reduce)throw new br(t[ct]);Cr(t,e)||Sr(t,e)}},qr=function(n,i,r){r=r||(v()||Er.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/__utm.gif?";var a=new Image(1,1);a.src=r+n,t(a,function(){t(a,X),e(a,X),i()}),e(a,function(){t(a,X),e(a,X),i()})},Cr=function(t,e){var n,i=(v()||Er.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/p/__utm.gif",r=Zn.XDomainRequest;if(r?(n=new r).open("POST",i):(r=Zn.XMLHttpRequest)&&"withCredentials"in(r=new r)&&((n=r).open("POST",i,V),n.setRequestHeader("Content-Type","text/plain")),n)return n.onreadystatechange=function(){4==n.readyState&&(e(),n=X)},n.send(t),V},Sr=function(t,e){if(Jn.body){t=R(t);try{var i=Jn[it]('<iframe name="'+t+'"></iframe>')}catch(e){n(i=Jn[it]("iframe"),t)}i.height="0",i.width="0",i.style.display="none",i.style.visibility="hidden";var r=Jn[vt],r=(v()||Er.G?"https://ssl.google-analytics.com":"http://www.google-analytics.com")+"/u/post_iframe.html#"+R(r[pt]+"//"+r[ot]+"/favicon.ico"),a=function(){i.src="",i.parentNode&&i.parentNode.removeChild(i)};xt(Zn,"beforeunload",a);var s=N,o=0,u=function(){if(!s){try{if(9<o||i.contentWindow[vt][ot]==Jn[vt][ot])return s=V,a(),Tt(Zn,"beforeunload",a),void e()}catch(t){}o++,M(u,200)}};xt(i,"load",u),Jn.body.appendChild(i),i.src=r}else ti(function(){Sr(t,e)},100)},xr=function(){this.G=this.w=N,this.C={},this.D=[],this.U=0,this.S=[["www.google-analytics.com","","/plugins/"]],this._gasoCPath=this._gasoDomain=K,Sn(),xn()};(D=xr[ft]).oa=function(t,e){return this.r(t,K,e)},D.r=function(t,e,n){return e&&I(23),n&&I(67),e==K&&(e="~"+Er.U++),t=new ir(e,t,n),Er.C[e]=t,Er.D[B](t),t},D.u=function(t){return t=t||"",Er.C[t]||Er.r(K,t)},D.pa=function(){return Er.D[U](0)},D.aa=function(){this.w=V},D.la=function(){this.G=V};var Tr=function(t){return"prerender"==Jn.webkitVisibilityState?N:(t(),V)},Er=new xr,Ar=Zn._gat;Ar&&r(Ar._getTracker)?Er=Ar:Zn._gat=Er;var Ir=new oi;!function(t){if(!Tr(t)){I(123);var e=N,n=function(){!e&&Tr(t)&&(e=V,Tt(Jn,"webkitvisibilitychange",n))};xt(Jn,"webkitvisibilitychange",n)}}(function(){var t=Zn._gaq,e=N;t&&r(t[B])&&!(e="[object Array]"==Object[ft][ut].call(Object(t)))?Ir=t:(Zn._gaq=Ir,e&&Ir[B][kt](Ir,t))})}();