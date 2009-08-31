(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var cb='',lb=' ',l='#',Dc=', Size: ',fc='-',x='/',zb='0',jc='0px',mc='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',Db='<SELECT MULTIPLE>',Eb='<SELECT>',m='?',nb='BackgroundImageCache',ac='DIV',B='DOMMouseScroll',vc='INPUT',Cc='Index: ',dd='Object;',cd='[Ljava.lang.',yb='blur',mb='button',Ab='cellPadding',xb='cellSpacing',dc='change',kb='className',tc='clear.cache.gif',oc='click',bd='com.streamspin.client.StreamSpinClient',C='contextmenu',zc='dblclick',tb='div',z='error',ed='focus',ob='gwt-Button',vb='gwt-HTML',Bb='gwt-Image',ub='gwt-Label',Fb='gwt-ListBox',ec='gwt-MenuBar',Ac='gwt-PasswordTextBox',pc='gwt-TextArea',xc='gwt-TextBox',kc='hideFocus',hc='horizontal',sc='http://',qc='https',rc='https://',Bc='images/daisy.gif',Cb='img',n='keydown',o='keypress',p='keyup',q='load',r='losecapture',cc='menubar',Fc='moduleStartup',s='mousedown',t='mousemove',u='mouseout',v='mouseover',w='mouseup',A='mousewheel',ad='onModuleLoadStart',hb='onblur',D='onclick',jb='oncontextmenu',ib='ondblclick',gb='onfocus',db='onkeydown',eb='onkeypress',fb='onkeyup',E='onmousedown',ab='onmousemove',F='onmouseup',bb='onmousewheel',ic='outline',yc='password',bc='role',y='scroll',uc='someTest',Ec='startup',pb='submit',rb='table',sb='tbody',wc='text',nc='textarea',wb='tr',lc='true',qb='type',gc='vertical';var _;function zl(){}
_=zl.prototype={};_.tM=mn;_.tI=1;function od(){od=mn}
function pd(){od();var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(x);if(a!=-1)b=b.substring(0,a);return b.length>0?b+x:cb}
function vd(b,a){return b===a||b.contains(a)}
function ee(){ee=mn;he()}
function ge(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function he(){try{$doc.execCommand(nb,false,true)}catch(a){}}
function le(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function me(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;ge(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function ne(a,c){ee();var b,d;if(bm(a.__pendingSrc||a.src,c)){return}if(!oe){oe={}}b=a.__pendingSrc;if(b!=null){d=oe[b];if(d==a){me(oe,d)}else{le(d,a)}}d=oe[c];if(!d){ge(oe,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var oe=null;function ve(){}
_=ve.prototype=new zl();_.tI=0;function ye(){}
_=ye.prototype=new zl();_.tI=0;function Be(){}
_=Be.prototype=new zl();_.tI=0;function ff(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function gf(a,f,c,b,e){var d;d=ff(e,b);hf(a,f,c,d);return d}
function hf(b,d,c,a){if(!jf){jf=new bf()}kf(a,jf);a.tI=d;return a}
function kf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function bf(){}
_=bf.prototype=new zl();_.tI=0;var jf=null;function nf(b,a){return b&&!!xf[b][a]}
function wf(a){if(a!=null){throw new hl()}return a}
var xf=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{2:1},{6:1}];function lg(b,a,c){var d;if(a==og){if(ah(b)==8192){og=null}}d=kg;kg=b;try{c.h(b)}finally{kg=d}}
function ng(a){return true}
function rg(a,b){ch();zg(a,b)}
var kg=null,og=null;function ah(a){switch(a.type){case yb:return 4096;case dc:return 1024;case oc:return 1;case zc:return 2;case ed:return 2048;case n:return 128;case o:return 256;case p:return 512;case q:return 32768;case r:return 8192;case s:return 4;case t:return 64;case u:return 32;case v:return 16;case w:return 8;case y:return 16384;case z:return 65536;case A:return 131072;case B:return 131072;case C:return 262144;}}
function ch(){if(!eh){yg();eh=true}}
var eh=false;function yg(){Cg=function(){var c=Ag;Ag=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!ng($wnd.event)){Ag=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&nf(b.tI,3)&&!(b!=null&&(b.tM!=mn&&b.tI!=2))){lg($wnd.event,a,b)}}Ag=c};Bg=function(){var a=$doc.createEventObject();this.fireEvent(D,a);if(this.__eventBits&2){Cg.call(this)}};var e=function(){Cg.call($doc.body)};var d=function(){Bg.call($doc.body)};$doc.body.attachEvent(D,e);$doc.body.attachEvent(E,e);$doc.body.attachEvent(F,e);$doc.body.attachEvent(ab,e);$doc.body.attachEvent(bb,e);$doc.body.attachEvent(db,e);$doc.body.attachEvent(eb,e);$doc.body.attachEvent(fb,e);$doc.body.attachEvent(gb,e);$doc.body.attachEvent(hb,e);$doc.body.attachEvent(ib,d);$doc.body.attachEvent(jb,e)}
function zg(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Cg:null;if(b&3)c.ondblclick=a&3?Bg:null;if(b&4)c.onmousedown=a&4?Cg:null;if(b&8)c.onmouseup=a&8?Cg:null;if(b&16)c.onmouseover=a&16?Cg:null;if(b&32)c.onmouseout=a&32?Cg:null;if(b&64)c.onmousemove=a&64?Cg:null;if(b&128)c.onkeydown=a&128?Cg:null;if(b&256)c.onkeypress=a&256?Cg:null;if(b&512)c.onkeyup=a&512?Cg:null;if(b&1024)c.onchange=a&1024?Cg:null;if(b&2048)c.onfocus=a&2048?Cg:null;if(b&4096)c.onblur=a&4096?Cg:null;if(b&8192)c.onlosecapture=a&8192?Cg:null;if(b&16384)c.onscroll=a&16384?Cg:null;if(b&32768)c.onload=a&32768?Cg:null;if(b&65536)c.onerror=a&65536?Cg:null;if(b&131072)c.onmousewheel=a&131072?Cg:null;if(b&262144)c.oncontextmenu=a&262144?Cg:null}
var Ag=null,Bg=null,Cg=null;function Ej(b,a){ek(b.e,a,true)}
function ak(b,a){if(b.e){bk(b.e,a)}b.e=a}
function bk(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function dk(a){var b,c;b=a[kb]==null?null:String(a[kb]);c=b.indexOf(km(32));if(c>=0){return b.substr(0,c-0)}return b}
function ek(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new Bl()}j=hm(j);if(j.length==0){throw new sl()}i=c[kb]==null?null:String(c[kb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=lb}c[kb]=i+j}}else{if(e!=-1){b=hm(i.substr(0,e-0));d=hm(fm(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+lb+d}c[kb]=h}}}
function Dj(){}
_=Dj.prototype=new zl();_.tI=0;_.e=null;function kk(b,a){if(b.d){b.e.__listener=null}ak(b,a);if(b.d){b.e.__listener=b}}
function lk(a){}
function ik(){}
_=ik.prototype=new Dj();_.h=lk;_.tI=7;_.d=false;function wh(b,a){b.e=a;b.e.tabIndex=0;return b}
function yh(a){ah(a)==1}
function vh(){}
_=vh.prototype=new ik();_.h=yh;_.tI=8;function kh(b,a){b.e=a;b.e.tabIndex=0;return b}
function jh(){}
_=jh.prototype=new vh();_.tI=9;function mh(a){kh(a,$doc.createElement(mb));ph(a.e);a.e[kb]=ob;return a}
function nh(b,a){mh(b);b.e.innerHTML=a||cb;return b}
function ph(b){if(b.type==pb){try{b.setAttribute(qb,mb)}catch(a){}}}
function ih(){}
_=ih.prototype=new jh();_.tI=10;function hj(){}
_=hj.prototype=new ik();_.tI=11;function th(){}
_=th.prototype=new hj();_.tI=12;function rh(a){a.c=$doc.createElement(rb);a.b=$doc.createElement(sb);a.c.appendChild(a.b);a.e=a.c;return a}
function qh(){}
_=qh.prototype=new th();_.tI=13;_.b=null;_.c=null;function vi(a){a.e=$doc.createElement(tb);a.e[kb]=ub;return a}
function xi(a){ah(a)}
function ui(){}
_=ui.prototype=new ik();_.h=xi;_.tI=14;function Ah(a){a.e=$doc.createElement(tb);a.e[kb]=vb;return a}
function zh(){}
_=zh.prototype=new ui();_.tI=15;function hi(a){rh(a);a.a=$doc.createElement(wb);a.b.appendChild(a.a);a.c[xb]=zb;a.c[Ab]=zb;return a}
function gi(){}
_=gi.prototype=new qh();_.tI=16;_.a=null;function ri(){ri=mn;qm(new dn())}
function qi(a,b){ri();ni(new mi(),a,b);a.e[kb]=Bb;return a}
function si(a){ah(a)}
function ji(){}
_=ji.prototype=new ik();_.h=si;_.tI=17;function ki(){}
_=ki.prototype=new zl();_.tI=0;function ni(b,a,c){kk(a,$doc.createElement(Cb));rg(a.e,229501|(a.e.__eventBits||0));ne(a.e,c);return b}
function mi(){}
_=mi.prototype=new ki();_.tI=0;function zi(c,b){var a;wh(c,(a=b?Db:Eb,$doc.createElement(a)));c.e[kb]=Fb;return c}
function Bi(a){if(ah(a)==1024){}else{ah(a)==1}}
function yi(){}
_=yi.prototype=new vh();_.h=Bi;_.tI=18;function Fi(a,b){Em(new Dm());a.b=Em(new Dm());cj(a,b,(fj(),new dj()));return a}
function bj(d,a){var b,c;for(c=vm(new tm(),d.b);c.a<c.b.b;){b=wf(xm(c));if(vd(null.j(),a)){return b}}return null}
function cj(d,f){var b,c,e,a;c=$doc.createElement(rb);d.a=$doc.createElement(sb);c.appendChild(d.a);if(!f){e=$doc.createElement(wb);d.a.appendChild(e)}b=(a=$doc.createElement(ac),a.tabIndex=0,a);b.appendChild(c);d.e=b;d.e.setAttribute(bc,cc);rg(d.e,2225|(d.e.__eventBits||0));d.e[kb]=ec;if(f){Ej(d,dk(d.e)+fc+gc)}else{Ej(d,dk(d.e)+fc+hc)}d.e.style[ic]=jc;d.e.setAttribute(kc,lc)}
function gj(a){var b;bj(this,a.srcElement);switch(ah(a)){case 1:{wk(this.e);break}{break}case 2048:{wf(an(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{wf(an(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{wf(an(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:wf(an(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:wf(an(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{wf(an(this.b,0))}}break}}}
function Ci(){}
_=Ci.prototype=new ik();_.h=gj;_.tI=19;_.a=null;function fj(){fj=mn;(od(),$moduleBase)+mc;sk()}
function dj(){}
_=dj.prototype=new zl();_.tI=0;function yj(b,a){b.e=a;b.e.tabIndex=0;return b}
function Aj(a){var b;b=ah(a);if((b&896)!=0){ah(a)==1}else if(b==1024){}else{ah(a)==1}}
function xj(){}
_=xj.prototype=new vh();_.h=Aj;_.tI=20;function Bj(c,a,b){c.e=a;c.e.tabIndex=0;if(b!=null){c.e[kb]=b}return c}
function wj(){}
_=wj.prototype=new xj();_.tI=21;function jj(){}
_=jj.prototype=new wj();_.tI=22;function uj(a){yj(a,$doc.createElement(nc));a.e[kb]=pc;return a}
function tj(){}
_=tj.prototype=new xj();_.tI=23;function gk(a){rh(a);a.c[xb]=zb;a.c[Ab]=zb;return a}
function fk(){}
_=fk.prototype=new qh();_.tI=24;function ok(){ok=mn;pd().indexOf(qc)==0?rc:sc}
function pk(){ok();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;ne(a,(od(),$moduleBase)+tc)}}
function sk(){sk=mn;ok();pk()}
function wk(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function bl(a){}
function cl(a){}
function Ak(){}
_=Ak.prototype=new ye();_.f=bl;_.g=cl;_.tI=0;function Ck(c){var a,b;gk(new fk());hi(new gi());gk(new fk());zi(new yi(),false);uj(new tj());Fi(new Ci(),false);nh(new ih(),uc);vi(new ui());Ah(new zh());gk(new fk());Bj(new wj(),(a=$doc.createElement(vc),a.type=wc,a),xc);Bj(new jj(),(b=$doc.createElement(vc),b.type=yc,b),Ac);mh(new ih());qi(new ji(),(od(),$moduleBase)+Bc);c.f(new ve());c.g(new Be());return c}
function Bk(){}
_=Bk.prototype=new Ak();_.tI=0;function kl(c,a){var b;b=new gl();return b}
function gl(){}
_=gl.prototype=new zl();_.tI=0;function lm(){}
_=lm.prototype=new zl();_.tI=3;function ql(){}
_=ql.prototype=new lm();_.tI=4;function Bl(){}
_=Bl.prototype=new ql();_.tI=5;function hl(){}
_=hl.prototype=new Bl();_.tI=29;function sl(){}
_=sl.prototype=new Bl();_.tI=30;function wl(b,a){return b}
function vl(){}
_=vl.prototype=new Bl();_.tI=31;function bm(b,a){if(a==null){return false}return String(b)==a}
function fm(b,a){return b.substr(a,b.length-a)}
function hm(c){if(c.length==0||c[0]>lb&&c[c.length-1]>lb){return c}var a=c.replace(/^(\s*)/,cb);var b=a.replace(/\s*$/,cb);return b}
function km(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
_=String.prototype;_.tI=2;function nm(){}
_=nm.prototype=new zl();_.tI=0;function Bm(){}
_=Bm.prototype=new zl();_.tI=0;function qm(a){}
function pm(){}
_=pm.prototype=new Bm();_.tI=0;function zm(a,b){if(a<0||a>=b){Am(a,b)}}
function Am(a,b){throw wl(new vl(),Cc+a+Dc+b)}
function sm(){}
_=sm.prototype=new nm();_.tI=0;function vm(b,a){b.b=a;return b}
function xm(a){if(a.a>=a.b.b){throw new jn()}return an(a.b,a.a++)}
function tm(){}
_=tm.prototype=new zl();_.tI=0;_.a=0;_.b=null;function Em(a){a.a=gf(Af,0,0,0,0);a.b=0;return a}
function an(b,a){zm(a,b.b);return b.a[a]}
function Dm(){}
_=Dm.prototype=new sm();_.tI=0;_.a=null;_.b=0;function dn(){}
_=dn.prototype=new pm();_.tI=36;function jn(){}
_=jn.prototype=new Bl();_.tI=37;function dl(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Ec,evtGroup:Fc,millis:(new Date()).getTime(),type:ad,className:bd});Ck(new Bk())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{dl()}catch(a){b(d)}else{dl()}}
function mn(){}
var Af=kl(cd,dd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();