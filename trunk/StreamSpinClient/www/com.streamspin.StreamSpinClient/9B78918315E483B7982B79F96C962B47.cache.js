(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var ab='',D=' ',jc=', Size: ',ub='-',lb='0',zb='0px',Cb='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',y='DOMMouseScroll',l='INPUT',ic='Index: ',B='MouseEvents',qc='Object;',pc='[Ljava.lang.',fc='absolute',x='blur',E='button',mb='cellPadding',kb='cellSpacing',cb='change',C='className',nb='click',nc='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',gb='div',v='error',dc='focus',F='gwt-Button',ib='gwt-HTML',ob='gwt-Image',hb='gwt-Label',qb='gwt-ListBox',tb='gwt-MenuBar',ac='gwt-PasswordTextBox',cc='gwt-TextArea',Eb='gwt-TextBox',Ab='hideFocus',wb='horizontal',A='html',hc='images/daisy.gif',pb='img',ec='input',oc='keydown',rc='keypress',sc='keyup',n='load',o='losecapture',sb='menubar',lc='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',mc='onModuleLoadStart',xb='outline',Fb='password',rb='role',u='scroll',m='select',gc='someTest',kc='startup',bb='submit',eb='table',fb='tbody',Db='text',bc='textarea',jb='tr',Bb='true',db='type',vb='vertical';var _;function tl(){}
_=tl.prototype={};_.tM=dn;_.tI=1;function zc(){zc=dn}
function fd(){fd=dn;Fc();new Dc()}
function hd(c){var a=$doc.createElement(l);a.type=c;return a}
function id(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function Bc(){}
_=Bc.prototype=new tl();_.tI=0;function ed(){ed=dn;fd()}
function dd(){}
_=dd.prototype=new Bc();_.tI=0;function bd(){bd=dn;ed()}
function cd(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Cc(){}
_=Cc.prototype=new dd();_.tI=0;function Fc(){Fc=dn;bd()}
function Dc(){}
_=Dc.prototype=new Cc();_.tI=0;function be(){}
_=be.prototype=new tl();_.tI=0;function ee(){}
_=ee.prototype=new tl();_.tI=0;function he(){}
_=he.prototype=new tl();_.tI=0;function re(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function se(a,f,c,b,e){var d;d=re(e,b);te(a,f,c,d);return d}
function te(b,d,c,a){if(!ue){ue=new ne()}ve(a,ue);a.tI=d;return a}
function ve(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function ne(){}
_=ne.prototype=new tl();_.tI=0;var ue=null;function ye(b,a){return b&&!!cf[b][a]}
function bf(a){if(a!=null){throw new bl()}return a}
var cf=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{2:1},{6:1}];function xf(b,a,c){var d;if(a==Bf){if(rg(b)==8192){Bf=null}}d=wf;wf=b;try{c.i(b)}finally{wf=d}}
var wf=null,Bf=null;function rg(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case oc:return 128;case rc:return 256;case sc:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function tg(){if(!vg){ig();bg();vg=true}}
function wg(a){return a!=null&&ye(a.tI,3)&&!(a!=null&&(a.tM!=dn&&a.tI!=2))}
var vg=false;function ig(){mg=function(b){if(lg(b)){var a=kg;if(a&&a.__listener){if(wg(a.__listener)){xf(b,a,a.__listener);b.stopPropagation()}}}};lg=function(a){return true};ng=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(wg(c)){xf(b,a,c)}}};$wnd.addEventListener(nb,mg,true);$wnd.addEventListener(yb,mg,true);$wnd.addEventListener(p,mg,true);$wnd.addEventListener(t,mg,true);$wnd.addEventListener(q,mg,true);$wnd.addEventListener(s,mg,true);$wnd.addEventListener(r,mg,true);$wnd.addEventListener(w,mg,true);$wnd.addEventListener(oc,lg,true);$wnd.addEventListener(sc,lg,true);$wnd.addEventListener(rc,lg,true)}
function jg(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?ng:null;if(b&2)c.ondblclick=a&2?ng:null;if(b&4)c.onmousedown=a&4?ng:null;if(b&8)c.onmouseup=a&8?ng:null;if(b&16)c.onmouseover=a&16?ng:null;if(b&32)c.onmouseout=a&32?ng:null;if(b&64)c.onmousemove=a&64?ng:null;if(b&128)c.onkeydown=a&128?ng:null;if(b&256)c.onkeypress=a&256?ng:null;if(b&512)c.onkeyup=a&512?ng:null;if(b&1024)c.onchange=a&1024?ng:null;if(b&2048)c.onfocus=a&2048?ng:null;if(b&4096)c.onblur=a&4096?ng:null;if(b&8192)c.onlosecapture=a&8192?ng:null;if(b&16384)c.onscroll=a&16384?ng:null;if(b&32768)c.onload=a&32768?ng:null;if(b&65536)c.onerror=a&65536?ng:null;if(b&131072)c.onmousewheel=a&131072?ng:null;if(b&262144)c.oncontextmenu=a&262144?ng:null}
var kg=null,lg=null,mg=null,ng=null;function bg(){$wnd.addEventListener(r,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(A==b.target.tagName.toLowerCase()){var c=$doc.createEvent(B);c.initMouseEvent(t,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(y,mg,true)}
function dg(b,a){tg();jg(b,a);cg(b,a)}
function cg(b,a){if(a&131072){b.addEventListener(y,ng,false)}}
function vj(b,a){Bj(b.e,a,true)}
function xj(b,a){if(b.e){yj(b.e,a)}b.e=a}
function yj(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function Aj(a){var b,c;b=a[C]==null?null:String(a[C]);c=b.indexOf(cm(32));if(c>=0){return b.substr(0,c-0)}return b}
function Bj(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new vl()}j=am(j);if(j.length==0){throw new ml()}i=c[C]==null?null:String(c[C]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=D}c[C]=i+j}}else{if(e!=-1){b=am(i.substr(0,e-0));d=am(El(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+D+d}c[C]=h}}}
function uj(){}
_=uj.prototype=new tl();_.tI=0;_.e=null;function bk(b,a){if(b.d){b.e.__listener=null}xj(b,a);if(b.d){b.e.__listener=b}}
function ck(a){}
function Fj(){}
_=Fj.prototype=new uj();_.i=ck;_.tI=7;_.d=false;function jh(){jh=dn;kh=(qk(),sk)}
function ih(b,a){jh();b.e=a;kh.j(b.e,0);return b}
function lh(a){rg(a)==1}
function hh(){}
_=hh.prototype=new Fj();_.i=lh;_.tI=8;var kh;function Ag(){Ag=dn;jh()}
function zg(b,a){Ag();b.e=a;kh.j(b.e,0);return b}
function yg(){}
_=yg.prototype=new hh();_.tI=9;function Dg(){Dg=dn;Ag()}
function Bg(a){Dg();zg(a,$doc.createElement((fd(),E)));Eg(a.e);a.e[C]=F;return a}
function Cg(b,a){Dg();Bg(b);b.e.innerHTML=a||ab;return b}
function Eg(b){if(b.type==bb){try{b.setAttribute(db,E)}catch(a){}}}
function xg(){}
_=xg.prototype=new yg();_.tI=10;function Ai(){}
_=Ai.prototype=new Fj();_.tI=11;function ch(){}
_=ch.prototype=new Ai();_.tI=12;function ah(a){a.c=$doc.createElement((fd(),eb));a.b=$doc.createElement(fb);a.c.appendChild(a.b);a.e=a.c;return a}
function Fg(){}
_=Fg.prototype=new ch();_.tI=13;_.b=null;_.c=null;function fh(){fh=dn;gh=(qk(),rk)}
var gh;function ii(a){a.e=$doc.createElement((fd(),gb));a.e[C]=hb;return a}
function ki(a){rg(a)}
function hi(){}
_=hi.prototype=new Fj();_.i=ki;_.tI=14;function nh(a){a.e=$doc.createElement((fd(),gb));a.e[C]=ib;return a}
function mh(){}
_=mh.prototype=new hi();_.tI=15;function Ah(a){ah(a);a.a=$doc.createElement((fd(),jb));a.b.appendChild(a.a);a.c[kb]=lb;a.c[mb]=lb;return a}
function zh(){}
_=zh.prototype=new Fg();_.tI=16;_.a=null;function ei(){ei=dn;im(new Bm())}
function di(a,b){ei();ai(new Fh(),a,b);a.e[C]=ob;return a}
function fi(a){rg(a)}
function Ch(){}
_=Ch.prototype=new Fj();_.i=fi;_.tI=17;function Dh(){}
_=Dh.prototype=new tl();_.tI=0;function ai(b,a,c){bk(a,$doc.createElement((fd(),pb)));dg(a.e,229501|(a.e.__eventBits||0));a.e.src=c;return b}
function Fh(){}
_=Fh.prototype=new Dh();_.tI=0;function ni(){ni=dn;jh()}
function mi(b,a){ni();ih(b,id((fd(),a)));b.e[C]=qb;return b}
function oi(a){if(rg(a)==1024){}else{rg(a)==1}}
function li(){}
_=li.prototype=new hh();_.i=oi;_.tI=18;function si(a,b){wm(new vm());a.b=wm(new vm());vi(a,b,(yi(),new wi()));return a}
function ui(d,a){var b,c;for(c=nm(new lm(),d.b);c.a<c.b.b;){b=bf(pm(c));if(cd((fd(),null.l()),a)){return b}}return null}
function vi(c,e){var a,b,d;b=$doc.createElement((fd(),eb));c.a=$doc.createElement(fb);b.appendChild(c.a);if(!e){d=$doc.createElement(jb);c.a.appendChild(d)}a=kk((fh(),gh));a.appendChild(b);c.e=a;c.e.setAttribute(rb,sb);dg(c.e,2225|(c.e.__eventBits||0));c.e[C]=tb;if(e){vj(c,Aj(c.e)+ub+vb)}else{vj(c,Aj(c.e)+ub+wb)}c.e.style[xb]=zb;c.e.setAttribute(Ab,Bb)}
function zi(a){var b;ui(this,a.target);switch(rg(a)){case 1:{(fh(),this.e).firstChild.focus();break}{break}case 2048:{bf(ym(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{bf(ym(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{bf(ym(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:bf(ym(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:bf(ym(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{bf(ym(this.b,0))}}break}}}
function pi(){}
_=pi.prototype=new Fj();_.i=zi;_.tI=19;_.a=null;function yi(){yi=dn;(zc(),$moduleBase)+Cb}
function wi(){}
_=wi.prototype=new tl();_.tI=0;function pj(){pj=dn;jh()}
function oj(b,a){pj();b.e=a;kh.j(b.e,0);return b}
function qj(a){var b;b=rg(a);if((b&896)!=0){rg(a)==1}else if(b==1024){}else{rg(a)==1}}
function nj(){}
_=nj.prototype=new hh();_.i=qj;_.tI=20;function tj(){tj=dn;pj()}
function rj(a){tj();sj(a,hd((fd(),Db)),Eb);return a}
function sj(c,a,b){tj();c.e=a;kh.j(c.e,0);if(b!=null){c.e[C]=b}return c}
function mj(){}
_=mj.prototype=new nj();_.tI=21;function Ei(){Ei=dn;tj()}
function Di(a){Ei();sj(a,hd((fd(),Fb)),ac);return a}
function Ci(){}
_=Ci.prototype=new mj();_.tI=22;function lj(){lj=dn;pj()}
function kj(a){lj();oj(a,$doc.createElement((fd(),bc)));a.e[C]=cc;return a}
function jj(){}
_=jj.prototype=new nj();_.tI=23;function Dj(a){ah(a);a.c[kb]=lb;a.c[mb]=lb;return a}
function Cj(){}
_=Cj.prototype=new Fg();_.tI=24;function qk(){qk=dn;rk=gk(new ek());sk=rk?(qk(),new dk()):rk}
function tk(a,b){a.tabIndex=b}
function dk(){}
_=dk.prototype=new tl();_.j=tk;_.tI=0;var rk,sk;function hk(){hk=dn;qk()}
function gk(a){hk();a.a=ik();a.b=jk();a.c=lk();return a}
function ik(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function jk(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function kk(c){var a=$doc.createElement(gb);var b=c.f();b.addEventListener(x,c.a,false);b.addEventListener(dc,c.b,false);a.addEventListener(p,c.c,false);a.appendChild(b);return a}
function lk(){return function(){this.firstChild.focus()}}
function nk(){var a=$doc.createElement(ec);a.type=Db;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=fc;return a}
function ok(a,b){a.firstChild.tabIndex=b}
function ek(){}
_=ek.prototype=new dk();_.f=nk;_.j=ok;_.tI=0;function Bk(a){}
function Ck(a){}
function uk(){}
_=uk.prototype=new ee();_.g=Bk;_.h=Ck;_.tI=0;function wk(a){Dj(new Cj());Ah(new zh());Dj(new Cj());mi(new li(),false);kj(new jj());si(new pi(),false);Cg(new xg(),gc);ii(new hi());nh(new mh());Dj(new Cj());rj(new mj());Di(new Ci());Bg(new xg());di(new Ch(),(zc(),$moduleBase)+hc);a.g(new be());a.h(new he());return a}
function vk(){}
_=vk.prototype=new uk();_.tI=0;function el(c,a){var b;b=new al();return b}
function al(){}
_=al.prototype=new tl();_.tI=0;function dm(){}
_=dm.prototype=new tl();_.tI=3;function kl(){}
_=kl.prototype=new dm();_.tI=4;function vl(){}
_=vl.prototype=new kl();_.tI=5;function bl(){}
_=bl.prototype=new vl();_.tI=29;function ml(){}
_=ml.prototype=new vl();_.tI=30;function ql(b,a){return b}
function pl(){}
_=pl.prototype=new vl();_.tI=31;function El(b,a){return b.substr(a,b.length-a)}
function am(c){if(c.length==0||c[0]>D&&c[c.length-1]>D){return c}var a=c.replace(/^(\s*)/,ab);var b=a.replace(/\s*$/,ab);return b}
function cm(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
_=String.prototype;_.tI=2;function fm(){}
_=fm.prototype=new tl();_.tI=0;function tm(){}
_=tm.prototype=new tl();_.tI=0;function im(a){}
function hm(){}
_=hm.prototype=new tm();_.tI=0;function rm(a,b){if(a<0||a>=b){sm(a,b)}}
function sm(a,b){throw ql(new pl(),ic+a+jc+b)}
function km(){}
_=km.prototype=new fm();_.tI=0;function nm(b,a){b.b=a;return b}
function pm(a){if(a.a>=a.b.b){throw new an()}return ym(a.b,a.a++)}
function lm(){}
_=lm.prototype=new tl();_.tI=0;_.a=0;_.b=null;function wm(a){a.a=se(ff,0,0,0,0);a.b=0;return a}
function ym(b,a){rm(a,b.b);return b.a[a]}
function vm(){}
_=vm.prototype=new km();_.tI=0;_.a=null;_.b=0;function Bm(){}
_=Bm.prototype=new hm();_.tI=36;function an(){}
_=an.prototype=new vl();_.tI=37;function Dk(){!!$stats&&$stats({moduleName:$moduleName,subSystem:kc,evtGroup:lc,millis:(new Date()).getTime(),type:mc,className:nc});wk(new vk())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Dk()}catch(a){b(d)}else{Dk()}}
function dn(){}
var ff=el(pc,qc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();