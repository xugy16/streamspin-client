(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var ab='',D=' ',ic=', Size: ',vb='-',lb='0',Ab='0px',Db='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',rb='DIV',y='DOMMouseScroll',l='INPUT',hc='Index: ',B='MouseEvents',pc='Object;',nc='[Ljava.lang.',x='blur',E='button',mb='cellPadding',kb='cellSpacing',cb='change',C='className',nb='click',mc='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',gb='div',v='error',dc='focus',F='gwt-Button',ib='gwt-HTML',ob='gwt-Image',hb='gwt-Label',qb='gwt-ListBox',ub='gwt-MenuBar',fc='gwt-PasswordTextBox',Fb='gwt-TextArea',cc='gwt-TextBox',Bb='hideFocus',xb='horizontal',A='html',gc='images/daisy.gif',pb='img',oc='keydown',qc='keypress',rc='keyup',n='load',o='losecapture',tb='menubar',kc='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',lc='onModuleLoadStart',zb='outline',ec='password',sb='role',u='scroll',m='select',ac='someTest',jc='startup',bb='submit',eb='table',fb='tbody',bc='text',Eb='textarea',jb='tr',Cb='true',db='type',wb='vertical';var _;function Bk(){}
_=Bk.prototype={};_.tM=lm;_.tI=1;function yc(){yc=lm}
function bd(){bd=lm;Dc();new Bc()}
function dd(c){var a=$doc.createElement(l);a.type=c;return a}
function ed(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function Ac(){}
_=Ac.prototype=new Bk();_.tI=0;function ad(){ad=lm;bd()}
function Fc(){}
_=Fc.prototype=new Ac();_.tI=0;function Dc(){Dc=lm;ad()}
function Ec(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Bc(){}
_=Bc.prototype=new Fc();_.tI=0;function Dd(){}
_=Dd.prototype=new Bk();_.tI=0;function ae(){}
_=ae.prototype=new Bk();_.tI=0;function de(){}
_=de.prototype=new Bk();_.tI=0;function ne(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function oe(a,f,c,b,e){var d;d=ne(e,b);pe(a,f,c,d);return d}
function pe(b,d,c,a){if(!qe){qe=new je()}re(a,qe);a.tI=d;return a}
function re(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function je(){}
_=je.prototype=new Bk();_.tI=0;var qe=null;function ue(b,a){return b&&!!Ee[b][a]}
function De(a){if(a!=null){throw new jk()}return a}
var Ee=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{2:1},{6:1}];function tf(b,a,c){var d;if(a==xf){if(ng(b)==8192){xf=null}}d=sf;sf=b;try{c.h(b)}finally{sf=d}}
var sf=null,xf=null;function ng(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case oc:return 128;case qc:return 256;case rc:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function pg(){if(!rg){eg();Df();rg=true}}
function sg(a){return a!=null&&ue(a.tI,3)&&!(a!=null&&(a.tM!=lm&&a.tI!=2))}
var rg=false;function eg(){ig=function(b){if(hg(b)){var a=gg;if(a&&a.__listener){if(sg(a.__listener)){tf(b,a,a.__listener);b.stopPropagation()}}}};hg=function(a){return true};jg=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(sg(c)){tf(b,a,c)}}};$wnd.addEventListener(nb,ig,true);$wnd.addEventListener(yb,ig,true);$wnd.addEventListener(p,ig,true);$wnd.addEventListener(t,ig,true);$wnd.addEventListener(q,ig,true);$wnd.addEventListener(s,ig,true);$wnd.addEventListener(r,ig,true);$wnd.addEventListener(w,ig,true);$wnd.addEventListener(oc,hg,true);$wnd.addEventListener(rc,hg,true);$wnd.addEventListener(qc,hg,true)}
function fg(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?jg:null;if(b&2)c.ondblclick=a&2?jg:null;if(b&4)c.onmousedown=a&4?jg:null;if(b&8)c.onmouseup=a&8?jg:null;if(b&16)c.onmouseover=a&16?jg:null;if(b&32)c.onmouseout=a&32?jg:null;if(b&64)c.onmousemove=a&64?jg:null;if(b&128)c.onkeydown=a&128?jg:null;if(b&256)c.onkeypress=a&256?jg:null;if(b&512)c.onkeyup=a&512?jg:null;if(b&1024)c.onchange=a&1024?jg:null;if(b&2048)c.onfocus=a&2048?jg:null;if(b&4096)c.onblur=a&4096?jg:null;if(b&8192)c.onlosecapture=a&8192?jg:null;if(b&16384)c.onscroll=a&16384?jg:null;if(b&32768)c.onload=a&32768?jg:null;if(b&65536)c.onerror=a&65536?jg:null;if(b&131072)c.onmousewheel=a&131072?jg:null;if(b&262144)c.oncontextmenu=a&262144?jg:null}
var gg=null,hg=null,ig=null,jg=null;function Df(){$wnd.addEventListener(r,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(A==b.target.tagName.toLowerCase()){var c=$doc.createEvent(B);c.initMouseEvent(t,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(y,ig,true)}
function Ff(b,a){pg();fg(b,a);Ef(b,a)}
function Ef(b,a){if(a&131072){b.addEventListener(y,jg,false)}}
function jj(b,a){pj(b.e,a,true)}
function lj(b,a){if(b.e){mj(b.e,a)}b.e=a}
function mj(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function oj(a){var b,c;b=a[C]==null?null:String(a[C]);c=b.indexOf(kl(32));if(c>=0){return b.substr(0,c-0)}return b}
function pj(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new Dk()}j=il(j);if(j.length==0){throw new uk()}i=c[C]==null?null:String(c[C]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=D}c[C]=i+j}}else{if(e!=-1){b=il(i.substr(0,e-0));d=il(gl(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+D+d}c[C]=h}}}
function ij(){}
_=ij.prototype=new Bk();_.tI=0;_.e=null;function vj(b,a){if(b.d){b.e.__listener=null}lj(b,a);if(b.d){b.e.__listener=b}}
function wj(a){}
function tj(){}
_=tj.prototype=new ij();_.h=wj;_.tI=7;_.d=false;function bh(b,a){b.e=a;b.e.tabIndex=0;return b}
function dh(a){ng(a)==1}
function ah(){}
_=ah.prototype=new tj();_.h=dh;_.tI=8;function vg(b,a){b.e=a;b.e.tabIndex=0;return b}
function ug(){}
_=ug.prototype=new ah();_.tI=9;function xg(a){vg(a,$doc.createElement((bd(),E)));Ag(a.e);a.e[C]=F;return a}
function yg(b,a){xg(b);b.e.innerHTML=a||ab;return b}
function Ag(b){if(b.type==bb){try{b.setAttribute(db,E)}catch(a){}}}
function tg(){}
_=tg.prototype=new ug();_.tI=10;function si(){}
_=si.prototype=new tj();_.tI=11;function Eg(){}
_=Eg.prototype=new si();_.tI=12;function Cg(a){a.c=$doc.createElement((bd(),eb));a.b=$doc.createElement(fb);a.c.appendChild(a.b);a.e=a.c;return a}
function Bg(){}
_=Bg.prototype=new Eg();_.tI=13;_.b=null;_.c=null;function ai(a){a.e=$doc.createElement((bd(),gb));a.e[C]=hb;return a}
function ci(a){ng(a)}
function Fh(){}
_=Fh.prototype=new tj();_.h=ci;_.tI=14;function fh(a){a.e=$doc.createElement((bd(),gb));a.e[C]=ib;return a}
function eh(){}
_=eh.prototype=new Fh();_.tI=15;function sh(a){Cg(a);a.a=$doc.createElement((bd(),jb));a.b.appendChild(a.a);a.c[kb]=lb;a.c[mb]=lb;return a}
function rh(){}
_=rh.prototype=new Bg();_.tI=16;_.a=null;function Ch(){Ch=lm;ql(new dm())}
function Bh(a,b){Ch();yh(new xh(),a,b);a.e[C]=ob;return a}
function Dh(a){ng(a)}
function uh(){}
_=uh.prototype=new tj();_.h=Dh;_.tI=17;function vh(){}
_=vh.prototype=new Bk();_.tI=0;function yh(b,a,c){vj(a,$doc.createElement((bd(),pb)));Ff(a.e,229501|(a.e.__eventBits||0));a.e.src=c;return b}
function xh(){}
_=xh.prototype=new vh();_.tI=0;function ei(b,a){bh(b,ed((bd(),a)));b.e[C]=qb;return b}
function gi(a){if(ng(a)==1024){}else{ng(a)==1}}
function di(){}
_=di.prototype=new ah();_.h=gi;_.tI=18;function ki(a,b){El(new Dl());a.b=El(new Dl());ni(a,b,(qi(),new oi()));return a}
function mi(d,a){var b,c;for(c=vl(new tl(),d.b);c.a<c.b.b;){b=De(xl(c));if(Ec((bd(),null.j()),a)){return b}}return null}
function ni(d,f){var b,c,e,a;c=$doc.createElement((bd(),eb));d.a=$doc.createElement(fb);c.appendChild(d.a);if(!f){e=$doc.createElement(jb);d.a.appendChild(e)}b=(a=$doc.createElement(rb),a.tabIndex=0,a);b.appendChild(c);d.e=b;d.e.setAttribute(sb,tb);Ff(d.e,2225|(d.e.__eventBits||0));d.e[C]=ub;if(f){jj(d,oj(d.e)+vb+wb)}else{jj(d,oj(d.e)+vb+xb)}d.e.style[zb]=Ab;d.e.setAttribute(Bb,Cb)}
function ri(a){var b;mi(this,a.target);switch(ng(a)){case 1:{this.e.focus();break}{break}case 2048:{De(am(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{De(am(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{De(am(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:De(am(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:De(am(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{De(am(this.b,0))}}break}}}
function hi(){}
_=hi.prototype=new tj();_.h=ri;_.tI=19;_.a=null;function qi(){qi=lm;(yc(),$moduleBase)+Db}
function oi(){}
_=oi.prototype=new Bk();_.tI=0;function dj(b,a){b.e=a;b.e.tabIndex=0;return b}
function fj(a){var b;b=ng(a);if((b&896)!=0){ng(a)==1}else if(b==1024){}else{ng(a)==1}}
function cj(){}
_=cj.prototype=new ah();_.h=fj;_.tI=20;function gj(c,a,b){c.e=a;c.e.tabIndex=0;if(b!=null){c.e[C]=b}return c}
function bj(){}
_=bj.prototype=new cj();_.tI=21;function ui(){}
_=ui.prototype=new bj();_.tI=22;function Fi(a){dj(a,$doc.createElement((bd(),Eb)));a.e[C]=Fb;return a}
function Ei(){}
_=Ei.prototype=new cj();_.tI=23;function rj(a){Cg(a);a.c[kb]=lb;a.c[mb]=lb;return a}
function qj(){}
_=qj.prototype=new Bg();_.tI=24;function dk(a){}
function ek(a){}
function Cj(){}
_=Cj.prototype=new ae();_.f=dk;_.g=ek;_.tI=0;function Ej(b){var a;rj(new qj());sh(new rh());rj(new qj());ei(new di(),false);Fi(new Ei());ki(new hi(),false);yg(new tg(),ac);ai(new Fh());fh(new eh());rj(new qj());gj(new bj(),dd((bd(),bc)),cc);gj(new ui(),(a=$doc.createElement(l),a.type=ec,a),fc);xg(new tg());Bh(new uh(),(yc(),$moduleBase)+gc);b.f(new Dd());b.g(new de());return b}
function Dj(){}
_=Dj.prototype=new Cj();_.tI=0;function mk(c,a){var b;b=new ik();return b}
function ik(){}
_=ik.prototype=new Bk();_.tI=0;function ll(){}
_=ll.prototype=new Bk();_.tI=3;function sk(){}
_=sk.prototype=new ll();_.tI=4;function Dk(){}
_=Dk.prototype=new sk();_.tI=5;function jk(){}
_=jk.prototype=new Dk();_.tI=29;function uk(){}
_=uk.prototype=new Dk();_.tI=30;function yk(b,a){return b}
function xk(){}
_=xk.prototype=new Dk();_.tI=31;function gl(b,a){return b.substr(a,b.length-a)}
function il(c){if(c.length==0||c[0]>D&&c[c.length-1]>D){return c}var a=c.replace(/^(\s*)/,ab);var b=a.replace(/\s*$/,ab);return b}
function kl(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
_=String.prototype;_.tI=2;function nl(){}
_=nl.prototype=new Bk();_.tI=0;function Bl(){}
_=Bl.prototype=new Bk();_.tI=0;function ql(a){}
function pl(){}
_=pl.prototype=new Bl();_.tI=0;function zl(a,b){if(a<0||a>=b){Al(a,b)}}
function Al(a,b){throw yk(new xk(),hc+a+ic+b)}
function sl(){}
_=sl.prototype=new nl();_.tI=0;function vl(b,a){b.b=a;return b}
function xl(a){if(a.a>=a.b.b){throw new im()}return am(a.b,a.a++)}
function tl(){}
_=tl.prototype=new Bk();_.tI=0;_.a=0;_.b=null;function El(a){a.a=oe(bf,0,0,0,0);a.b=0;return a}
function am(b,a){zl(a,b.b);return b.a[a]}
function Dl(){}
_=Dl.prototype=new sl();_.tI=0;_.a=null;_.b=0;function dm(){}
_=dm.prototype=new pl();_.tI=36;function im(){}
_=im.prototype=new Dk();_.tI=37;function fk(){!!$stats&&$stats({moduleName:$moduleName,subSystem:jc,evtGroup:kc,millis:(new Date()).getTime(),type:lc,className:mc});Ej(new Dj())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{fk()}catch(a){b(d)}else{fk()}}
function lm(){}
var bf=mk(nc,pc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();