(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',B=' ',gc=', Size: ',tb='-',jb='0',xb='0px',Bb='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',pb='DIV',y='DOMMouseScroll',l='INPUT',fc='Index: ',mc='Object;',lc='[Ljava.lang.',x='blur',C='button',kb='cellPadding',ib='cellSpacing',cb='change',A='className',nb='click',kc='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',eb='div',v='error',dc='focus',D='gwt-Button',gb='gwt-HTML',lb='gwt-Image',fb='gwt-Label',ob='gwt-ListBox',sb='gwt-MenuBar',cc='gwt-PasswordTextBox',Db='gwt-TextArea',ac='gwt-TextBox',zb='hideFocus',vb='horizontal',ec='images/daisy.gif',mb='img',nc='keydown',oc='keypress',pc='keyup',n='load',o='losecapture',rb='menubar',ic='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',jc='onModuleLoadStart',wb='outline',bc='password',qb='role',u='scroll',m='select',Eb='someTest',hc='startup',F='submit',bb='table',db='tbody',Fb='text',Cb='textarea',hb='tr',Ab='true',ab='type',ub='vertical';var _;function xk(){}
_=xk.prototype={};_.tM=hm;_.tI=1;function wc(){wc=hm}
function Fc(){Fc=hm;Bc();new zc()}
function bd(c){var a=$doc.createElement(l);a.type=c;return a}
function cd(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function yc(){}
_=yc.prototype=new xk();_.tI=0;function Dc(){Dc=hm;Fc()}
function Cc(){}
_=Cc.prototype=new yc();_.tI=0;function Bc(){Bc=hm;Dc()}
function zc(){}
_=zc.prototype=new Cc();_.tI=0;function Bd(){}
_=Bd.prototype=new xk();_.tI=0;function Ed(){}
_=Ed.prototype=new xk();_.tI=0;function be(){}
_=be.prototype=new xk();_.tI=0;function le(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function me(a,f,c,b,e){var d;d=le(e,b);ne(a,f,c,d);return d}
function ne(b,d,c,a){if(!oe){oe=new he()}pe(a,oe);a.tI=d;return a}
function pe(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function he(){}
_=he.prototype=new xk();_.tI=0;var oe=null;function se(b,a){return b&&!!Ce[b][a]}
function Be(a){if(a!=null){throw new fk()}return a}
var Ce=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{2:1},{6:1}];function rf(b,a,c){var d;if(a==vf){if(jg(b)==8192){vf=null}}d=qf;qf=b;try{c.h(b)}finally{qf=d}}
function xf(a,b){lg();a.__eventBits=b;a.onclick=b&1?fg:null;a.ondblclick=b&2?fg:null;a.onmousedown=b&4?fg:null;a.onmouseup=b&8?fg:null;a.onmouseover=b&16?fg:null;a.onmouseout=b&32?fg:null;a.onmousemove=b&64?fg:null;a.onkeydown=b&128?fg:null;a.onkeypress=b&256?fg:null;a.onkeyup=b&512?fg:null;a.onchange=b&1024?fg:null;a.onfocus=b&2048?fg:null;a.onblur=b&4096?fg:null;a.onlosecapture=b&8192?fg:null;a.onscroll=b&16384?fg:null;a.onload=b&32768?fg:null;a.onerror=b&65536?fg:null;a.onmousewheel=b&131072?fg:null;a.oncontextmenu=b&262144?fg:null}
var qf=null,vf=null;function jg(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case nc:return 128;case oc:return 256;case pc:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function lg(){if(!ng){bg();ng=true}}
function og(a){return a!=null&&se(a.tI,3)&&!(a!=null&&(a.tM!=hm&&a.tI!=2))}
var ng=false;function bg(){eg=function(b){if(dg(b)){var a=cg;if(a&&a.__listener){if(og(a.__listener)){rf(b,a,a.__listener);b.stopPropagation()}}}};dg=function(a){return true};fg=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(og(c)){rf(b,a,c)}}};$wnd.addEventListener(nb,eg,true);$wnd.addEventListener(yb,eg,true);$wnd.addEventListener(p,eg,true);$wnd.addEventListener(t,eg,true);$wnd.addEventListener(q,eg,true);$wnd.addEventListener(s,eg,true);$wnd.addEventListener(r,eg,true);$wnd.addEventListener(w,eg,true);$wnd.addEventListener(nc,dg,true);$wnd.addEventListener(pc,dg,true);$wnd.addEventListener(oc,dg,true)}
var cg=null,dg=null,eg=null,fg=null;function fj(b,a){lj(b.e,a,true)}
function hj(b,a){if(b.e){ij(b.e,a)}b.e=a}
function ij(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function kj(a){var b,c;b=a[A]==null?null:String(a[A]);c=b.indexOf(gl(32));if(c>=0){return b.substr(0,c-0)}return b}
function lj(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new zk()}j=el(j);if(j.length==0){throw new qk()}i=c[A]==null?null:String(c[A]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=B}c[A]=i+j}}else{if(e!=-1){b=el(i.substr(0,e-0));d=el(cl(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+B+d}c[A]=h}}}
function ej(){}
_=ej.prototype=new xk();_.tI=0;_.e=null;function rj(b,a){if(b.d){b.e.__listener=null}hj(b,a);if(b.d){b.e.__listener=b}}
function sj(a){}
function pj(){}
_=pj.prototype=new ej();_.h=sj;_.tI=7;_.d=false;function Dg(b,a){b.e=a;b.e.tabIndex=0;return b}
function Fg(a){jg(a)==1}
function Cg(){}
_=Cg.prototype=new pj();_.h=Fg;_.tI=8;function rg(b,a){b.e=a;b.e.tabIndex=0;return b}
function qg(){}
_=qg.prototype=new Cg();_.tI=9;function tg(a){rg(a,$doc.createElement((Fc(),C)));wg(a.e);a.e[A]=D;return a}
function ug(b,a){tg(b);b.e.innerHTML=a||E;return b}
function wg(b){if(b.type==F){try{b.setAttribute(ab,C)}catch(a){}}}
function pg(){}
_=pg.prototype=new qg();_.tI=10;function oi(){}
_=oi.prototype=new pj();_.tI=11;function Ag(){}
_=Ag.prototype=new oi();_.tI=12;function yg(a){a.c=$doc.createElement((Fc(),bb));a.b=$doc.createElement(db);a.c.appendChild(a.b);a.e=a.c;return a}
function xg(){}
_=xg.prototype=new Ag();_.tI=13;_.b=null;_.c=null;function Ch(a){a.e=$doc.createElement((Fc(),eb));a.e[A]=fb;return a}
function Eh(a){jg(a)}
function Bh(){}
_=Bh.prototype=new pj();_.h=Eh;_.tI=14;function bh(a){a.e=$doc.createElement((Fc(),eb));a.e[A]=gb;return a}
function ah(){}
_=ah.prototype=new Bh();_.tI=15;function oh(a){yg(a);a.a=$doc.createElement((Fc(),hb));a.b.appendChild(a.a);a.c[ib]=jb;a.c[kb]=jb;return a}
function nh(){}
_=nh.prototype=new xg();_.tI=16;_.a=null;function yh(){yh=hm;ml(new Fl())}
function xh(a,b){yh();uh(new th(),a,b);a.e[A]=lb;return a}
function zh(a){jg(a)}
function qh(){}
_=qh.prototype=new pj();_.h=zh;_.tI=17;function rh(){}
_=rh.prototype=new xk();_.tI=0;function uh(b,a,c){rj(a,$doc.createElement((Fc(),mb)));xf(a.e,229501|(a.e.__eventBits||0));a.e.src=c;return b}
function th(){}
_=th.prototype=new rh();_.tI=0;function ai(b,a){Dg(b,cd((Fc(),a)));b.e[A]=ob;return b}
function ci(a){if(jg(a)==1024){}else{jg(a)==1}}
function Fh(){}
_=Fh.prototype=new Cg();_.h=ci;_.tI=18;function gi(a,b){Al(new zl());a.b=Al(new zl());ji(a,b,(mi(),new ki()));return a}
function ii(d,a){var b,c;for(c=rl(new pl(),d.b);c.a<c.b.b;){b=Be(tl(c));if((Fc(),null.j()).contains(a)){return b}}return null}
function ji(d,f){var b,c,e,a;c=$doc.createElement((Fc(),bb));d.a=$doc.createElement(db);c.appendChild(d.a);if(!f){e=$doc.createElement(hb);d.a.appendChild(e)}b=(a=$doc.createElement(pb),a.tabIndex=0,a);b.appendChild(c);d.e=b;d.e.setAttribute(qb,rb);xf(d.e,2225|(d.e.__eventBits||0));d.e[A]=sb;if(f){fj(d,kj(d.e)+tb+ub)}else{fj(d,kj(d.e)+tb+vb)}d.e.style[wb]=xb;d.e.setAttribute(zb,Ab)}
function ni(a){var b;ii(this,a.target);switch(jg(a)){case 1:{this.e.focus();break}{break}case 2048:{Be(Cl(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Be(Cl(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Be(Cl(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Be(Cl(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Be(Cl(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Be(Cl(this.b,0))}}break}}}
function di(){}
_=di.prototype=new pj();_.h=ni;_.tI=19;_.a=null;function mi(){mi=hm;(wc(),$moduleBase)+Bb}
function ki(){}
_=ki.prototype=new xk();_.tI=0;function Fi(b,a){b.e=a;b.e.tabIndex=0;return b}
function bj(a){var b;b=jg(a);if((b&896)!=0){jg(a)==1}else if(b==1024){}else{jg(a)==1}}
function Ei(){}
_=Ei.prototype=new Cg();_.h=bj;_.tI=20;function cj(c,a,b){c.e=a;c.e.tabIndex=0;if(b!=null){c.e[A]=b}return c}
function Di(){}
_=Di.prototype=new Ei();_.tI=21;function qi(){}
_=qi.prototype=new Di();_.tI=22;function Bi(a){Fi(a,$doc.createElement((Fc(),Cb)));a.e[A]=Db;return a}
function Ai(){}
_=Ai.prototype=new Ei();_.tI=23;function nj(a){yg(a);a.c[ib]=jb;a.c[kb]=jb;return a}
function mj(){}
_=mj.prototype=new xg();_.tI=24;function Fj(a){}
function ak(a){}
function yj(){}
_=yj.prototype=new Ed();_.f=Fj;_.g=ak;_.tI=0;function Aj(b){var a;nj(new mj());oh(new nh());nj(new mj());ai(new Fh(),false);Bi(new Ai());gi(new di(),false);ug(new pg(),Eb);Ch(new Bh());bh(new ah());nj(new mj());cj(new Di(),bd((Fc(),Fb)),ac);cj(new qi(),(a=$doc.createElement(l),a.type=bc,a),cc);tg(new pg());xh(new qh(),(wc(),$moduleBase)+ec);b.f(new Bd());b.g(new be());return b}
function zj(){}
_=zj.prototype=new yj();_.tI=0;function ik(c,a){var b;b=new ek();return b}
function ek(){}
_=ek.prototype=new xk();_.tI=0;function hl(){}
_=hl.prototype=new xk();_.tI=3;function ok(){}
_=ok.prototype=new hl();_.tI=4;function zk(){}
_=zk.prototype=new ok();_.tI=5;function fk(){}
_=fk.prototype=new zk();_.tI=29;function qk(){}
_=qk.prototype=new zk();_.tI=30;function uk(b,a){return b}
function tk(){}
_=tk.prototype=new zk();_.tI=31;function cl(b,a){return b.substr(a,b.length-a)}
function el(c){if(c.length==0||c[0]>B&&c[c.length-1]>B){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function gl(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
_=String.prototype;_.tI=2;function jl(){}
_=jl.prototype=new xk();_.tI=0;function xl(){}
_=xl.prototype=new xk();_.tI=0;function ml(a){}
function ll(){}
_=ll.prototype=new xl();_.tI=0;function vl(a,b){if(a<0||a>=b){wl(a,b)}}
function wl(a,b){throw uk(new tk(),fc+a+gc+b)}
function ol(){}
_=ol.prototype=new jl();_.tI=0;function rl(b,a){b.b=a;return b}
function tl(a){if(a.a>=a.b.b){throw new em()}return Cl(a.b,a.a++)}
function pl(){}
_=pl.prototype=new xk();_.tI=0;_.a=0;_.b=null;function Al(a){a.a=me(Fe,0,0,0,0);a.b=0;return a}
function Cl(b,a){vl(a,b.b);return b.a[a]}
function zl(){}
_=zl.prototype=new ol();_.tI=0;_.a=null;_.b=0;function Fl(){}
_=Fl.prototype=new ll();_.tI=36;function em(){}
_=em.prototype=new zk();_.tI=37;function bk(){!!$stats&&$stats({moduleName:$moduleName,subSystem:hc,evtGroup:ic,millis:(new Date()).getTime(),type:jc,className:kc});Aj(new zj())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{bk()}catch(a){b(d)}else{bk()}}
function hm(){}
var Fe=ik(lc,mc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();