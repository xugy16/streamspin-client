(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',B=' ',jc=', Size: ',sb='-',jb='0',wb='0px',ec='1px',Ab='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',y='DOMMouseScroll',l='INPUT',ic='Index: ',qc='Object;',pc='[Ljava.lang.',cc='absolute',x='blur',C='button',kb='cellPadding',ib='cellSpacing',cb='change',A='className',nb='click',nc='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',eb='div',v='error',dc='focus',D='gwt-Button',gb='gwt-HTML',lb='gwt-Image',fb='gwt-Label',ob='gwt-ListBox',rb='gwt-MenuBar',Eb='gwt-PasswordTextBox',ac='gwt-TextArea',Cb='gwt-TextBox',fc='hidden',xb='hideFocus',ub='horizontal',hc='images/daisy.gif',mb='img',bc='input',oc='keydown',rc='keypress',sc='keyup',n='load',o='losecapture',qb='menubar',lc='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',mc='onModuleLoadStart',vb='outline',Db='password',pb='role',u='scroll',m='select',gc='someTest',kc='startup',F='submit',bb='table',db='tbody',Bb='text',Fb='textarea',hb='tr',zb='true',ab='type',tb='vertical';var _;function ql(){}
_=ql.prototype={};_.tM=an;_.tI=1;function zc(){zc=an}
function cd(){cd=an;Ec();new Cc()}
function ed(c){var a=$doc.createElement(l);a.type=c;return a}
function fd(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function Bc(){}
_=Bc.prototype=new ql();_.tI=0;function bd(){bd=an;cd()}
function ad(){}
_=ad.prototype=new Bc();_.tI=0;function Ec(){Ec=an;bd()}
function Fc(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function Cc(){}
_=Cc.prototype=new ad();_.tI=0;function Ed(){}
_=Ed.prototype=new ql();_.tI=0;function be(){}
_=be.prototype=new ql();_.tI=0;function ee(){}
_=ee.prototype=new ql();_.tI=0;function oe(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function pe(a,f,c,b,e){var d;d=oe(e,b);qe(a,f,c,d);return d}
function qe(b,d,c,a){if(!re){re=new ke()}se(a,re);a.tI=d;return a}
function se(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function ke(){}
_=ke.prototype=new ql();_.tI=0;var re=null;function ve(b,a){return b&&!!Fe[b][a]}
function Ee(a){if(a!=null){throw new Ek()}return a}
var Fe=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{2:1},{6:1}];function uf(b,a,c){var d;if(a==yf){if(kg(b)==8192){yf=null}}d=tf;tf=b;try{c.i(b)}finally{tf=d}}
function Af(a,b){mg();cg(a,b)}
var tf=null,yf=null;function kg(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case oc:return 128;case rc:return 256;case sc:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function mg(){if(!og){bg();og=true}}
function pg(a){return a!=null&&ve(a.tI,3)&&!(a!=null&&(a.tM!=an&&a.tI!=2))}
var og=false;function bg(){fg=function(b){if(eg(b)){var a=dg;if(a&&a.__listener){if(pg(a.__listener)){uf(b,a,a.__listener);b.stopPropagation()}}}};eg=function(a){return true};gg=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(pg(c)){uf(b,a,c)}}};$wnd.addEventListener(nb,fg,true);$wnd.addEventListener(yb,fg,true);$wnd.addEventListener(p,fg,true);$wnd.addEventListener(t,fg,true);$wnd.addEventListener(q,fg,true);$wnd.addEventListener(s,fg,true);$wnd.addEventListener(r,fg,true);$wnd.addEventListener(w,fg,true);$wnd.addEventListener(oc,eg,true);$wnd.addEventListener(sc,eg,true);$wnd.addEventListener(rc,eg,true)}
function cg(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?gg:null;if(b&2)c.ondblclick=a&2?gg:null;if(b&4)c.onmousedown=a&4?gg:null;if(b&8)c.onmouseup=a&8?gg:null;if(b&16)c.onmouseover=a&16?gg:null;if(b&32)c.onmouseout=a&32?gg:null;if(b&64)c.onmousemove=a&64?gg:null;if(b&128)c.onkeydown=a&128?gg:null;if(b&256)c.onkeypress=a&256?gg:null;if(b&512)c.onkeyup=a&512?gg:null;if(b&1024)c.onchange=a&1024?gg:null;if(b&2048)c.onfocus=a&2048?gg:null;if(b&4096)c.onblur=a&4096?gg:null;if(b&8192)c.onlosecapture=a&8192?gg:null;if(b&16384)c.onscroll=a&16384?gg:null;if(b&32768)c.onload=a&32768?gg:null;if(b&65536)c.onerror=a&65536?gg:null;if(b&131072)c.onmousewheel=a&131072?gg:null;if(b&262144)c.oncontextmenu=a&262144?gg:null}
var dg=null,eg=null,fg=null,gg=null;function oj(b,a){uj(b.e,a,true)}
function qj(b,a){if(b.e){rj(b.e,a)}b.e=a}
function rj(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function tj(a){var b,c;b=a[A]==null?null:String(a[A]);c=b.indexOf(Fl(32));if(c>=0){return b.substr(0,c-0)}return b}
function uj(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new sl()}j=Dl(j);if(j.length==0){throw new jl()}i=c[A]==null?null:String(c[A]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=B}c[A]=i+j}}else{if(e!=-1){b=Dl(i.substr(0,e-0));d=Dl(Bl(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+B+d}c[A]=h}}}
function nj(){}
_=nj.prototype=new ql();_.tI=0;_.e=null;function Aj(b,a){if(b.d){b.e.__listener=null}qj(b,a);if(b.d){b.e.__listener=b}}
function Bj(a){}
function yj(){}
_=yj.prototype=new nj();_.i=Bj;_.tI=7;_.d=false;function ch(){ch=an;dh=(nk(),pk)}
function bh(b,a){ch();b.e=a;dh.j(b.e,0);return b}
function eh(a){kg(a)==1}
function ah(){}
_=ah.prototype=new yj();_.i=eh;_.tI=8;var dh;function tg(){tg=an;ch()}
function sg(b,a){tg();b.e=a;dh.j(b.e,0);return b}
function rg(){}
_=rg.prototype=new ah();_.tI=9;function wg(){wg=an;tg()}
function ug(a){wg();sg(a,$doc.createElement((cd(),C)));xg(a.e);a.e[A]=D;return a}
function vg(b,a){wg();ug(b);b.e.innerHTML=a||E;return b}
function xg(b){if(b.type==F){try{b.setAttribute(ab,C)}catch(a){}}}
function qg(){}
_=qg.prototype=new rg();_.tI=10;function ti(){}
_=ti.prototype=new yj();_.tI=11;function Bg(){}
_=Bg.prototype=new ti();_.tI=12;function zg(a){a.c=$doc.createElement((cd(),bb));a.b=$doc.createElement(db);a.c.appendChild(a.b);a.e=a.c;return a}
function yg(){}
_=yg.prototype=new Bg();_.tI=13;_.b=null;_.c=null;function Eg(){Eg=an;Fg=(nk(),ok)}
var Fg;function bi(a){a.e=$doc.createElement((cd(),eb));a.e[A]=fb;return a}
function di(a){kg(a)}
function ai(){}
_=ai.prototype=new yj();_.i=di;_.tI=14;function gh(a){a.e=$doc.createElement((cd(),eb));a.e[A]=gb;return a}
function fh(){}
_=fh.prototype=new ai();_.tI=15;function th(a){zg(a);a.a=$doc.createElement((cd(),hb));a.b.appendChild(a.a);a.c[ib]=jb;a.c[kb]=jb;return a}
function sh(){}
_=sh.prototype=new yg();_.tI=16;_.a=null;function Dh(){Dh=an;fm(new ym())}
function Ch(a,b){Dh();zh(new yh(),a,b);a.e[A]=lb;return a}
function Eh(a){kg(a)}
function vh(){}
_=vh.prototype=new yj();_.i=Eh;_.tI=17;function wh(){}
_=wh.prototype=new ql();_.tI=0;function zh(b,a,c){Aj(a,$doc.createElement((cd(),mb)));Af(a.e,229501|(a.e.__eventBits||0));a.e.src=c;return b}
function yh(){}
_=yh.prototype=new wh();_.tI=0;function gi(){gi=an;ch()}
function fi(b,a){gi();bh(b,fd((cd(),a)));b.e[A]=ob;return b}
function hi(a){if(kg(a)==1024){}else{kg(a)==1}}
function ei(){}
_=ei.prototype=new ah();_.i=hi;_.tI=18;function li(a,b){tm(new sm());a.b=tm(new sm());oi(a,b,(ri(),new pi()));return a}
function ni(d,a){var b,c;for(c=km(new im(),d.b);c.a<c.b.b;){b=Ee(mm(c));if(Fc((cd(),null.l()),a)){return b}}return null}
function oi(c,e){var a,b,d;b=$doc.createElement((cd(),bb));c.a=$doc.createElement(db);b.appendChild(c.a);if(!e){d=$doc.createElement(hb);c.a.appendChild(d)}a=dk((Eg(),Fg));a.appendChild(b);c.e=a;c.e.setAttribute(pb,qb);Af(c.e,2225|(c.e.__eventBits||0));c.e[A]=rb;if(e){oj(c,tj(c.e)+sb+tb)}else{oj(c,tj(c.e)+sb+ub)}c.e.style[vb]=wb;c.e.setAttribute(xb,zb)}
function si(a){var b;ni(this,a.target);switch(kg(a)){case 1:{kk((Eg(),this.e));break}{break}case 2048:{Ee(vm(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Ee(vm(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Ee(vm(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Ee(vm(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Ee(vm(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Ee(vm(this.b,0))}}break}}}
function ii(){}
_=ii.prototype=new yj();_.i=si;_.tI=19;_.a=null;function ri(){ri=an;(zc(),$moduleBase)+Ab}
function pi(){}
_=pi.prototype=new ql();_.tI=0;function ij(){ij=an;ch()}
function hj(b,a){ij();b.e=a;dh.j(b.e,0);return b}
function jj(a){var b;b=kg(a);if((b&896)!=0){kg(a)==1}else if(b==1024){}else{kg(a)==1}}
function gj(){}
_=gj.prototype=new ah();_.i=jj;_.tI=20;function mj(){mj=an;ij()}
function kj(a){mj();lj(a,ed((cd(),Bb)),Cb);return a}
function lj(c,a,b){mj();c.e=a;dh.j(c.e,0);if(b!=null){c.e[A]=b}return c}
function fj(){}
_=fj.prototype=new gj();_.tI=21;function xi(){xi=an;mj()}
function wi(a){xi();lj(a,ed((cd(),Db)),Eb);return a}
function vi(){}
_=vi.prototype=new fj();_.tI=22;function ej(){ej=an;ij()}
function dj(a){ej();hj(a,$doc.createElement((cd(),Fb)));a.e[A]=ac;return a}
function cj(){}
_=cj.prototype=new gj();_.tI=23;function wj(a){zg(a);a.c[ib]=jb;a.c[kb]=jb;return a}
function vj(){}
_=vj.prototype=new yg();_.tI=24;function nk(){nk=an;ok=hk(new gk());pk=ok?(nk(),new Cj()):ok}
function qk(a,b){a.tabIndex=b}
function Cj(){}
_=Cj.prototype=new ql();_.j=qk;_.tI=0;var ok,pk;function ak(){ak=an;nk()}
function bk(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function ck(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function dk(c){var a=$doc.createElement(eb);var b=c.f();b.addEventListener(x,c.a,false);b.addEventListener(dc,c.b,false);a.addEventListener(p,c.c,false);a.appendChild(b);return a}
function ek(){var a=$doc.createElement(bc);a.type=Bb;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=cc;return a}
function fk(a,b){a.firstChild.tabIndex=b}
function Dj(){}
_=Dj.prototype=new Cj();_.f=ek;_.j=fk;_.tI=0;function ik(){ik=an;ak()}
function hk(a){ik();a.a=bk();a.b=ck();a.c=jk();return a}
function jk(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function kk(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function lk(){var a=$doc.createElement(bc);a.type=Bb;a.style.opacity=0;a.style.zIndex=-1;a.style.height=ec;a.style.width=ec;a.style.overflow=fc;a.style.position=cc;return a}
function gk(){}
_=gk.prototype=new Dj();_.f=lk;_.tI=0;function yk(a){}
function zk(a){}
function rk(){}
_=rk.prototype=new be();_.g=yk;_.h=zk;_.tI=0;function tk(a){wj(new vj());th(new sh());wj(new vj());fi(new ei(),false);dj(new cj());li(new ii(),false);vg(new qg(),gc);bi(new ai());gh(new fh());wj(new vj());kj(new fj());wi(new vi());ug(new qg());Ch(new vh(),(zc(),$moduleBase)+hc);a.g(new Ed());a.h(new ee());return a}
function sk(){}
_=sk.prototype=new rk();_.tI=0;function bl(c,a){var b;b=new Dk();return b}
function Dk(){}
_=Dk.prototype=new ql();_.tI=0;function am(){}
_=am.prototype=new ql();_.tI=3;function hl(){}
_=hl.prototype=new am();_.tI=4;function sl(){}
_=sl.prototype=new hl();_.tI=5;function Ek(){}
_=Ek.prototype=new sl();_.tI=29;function jl(){}
_=jl.prototype=new sl();_.tI=30;function nl(b,a){return b}
function ml(){}
_=ml.prototype=new sl();_.tI=31;function Bl(b,a){return b.substr(a,b.length-a)}
function Dl(c){if(c.length==0||c[0]>B&&c[c.length-1]>B){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function Fl(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
_=String.prototype;_.tI=2;function cm(){}
_=cm.prototype=new ql();_.tI=0;function qm(){}
_=qm.prototype=new ql();_.tI=0;function fm(a){}
function em(){}
_=em.prototype=new qm();_.tI=0;function om(a,b){if(a<0||a>=b){pm(a,b)}}
function pm(a,b){throw nl(new ml(),ic+a+jc+b)}
function hm(){}
_=hm.prototype=new cm();_.tI=0;function km(b,a){b.b=a;return b}
function mm(a){if(a.a>=a.b.b){throw new Dm()}return vm(a.b,a.a++)}
function im(){}
_=im.prototype=new ql();_.tI=0;_.a=0;_.b=null;function tm(a){a.a=pe(cf,0,0,0,0);a.b=0;return a}
function vm(b,a){om(a,b.b);return b.a[a]}
function sm(){}
_=sm.prototype=new hm();_.tI=0;_.a=null;_.b=0;function ym(){}
_=ym.prototype=new em();_.tI=36;function Dm(){}
_=Dm.prototype=new sl();_.tI=37;function Ak(){!!$stats&&$stats({moduleName:$moduleName,subSystem:kc,evtGroup:lc,millis:(new Date()).getTime(),type:mc,className:nc});tk(new sk())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Ak()}catch(a){b(d)}else{Ak()}}
function an(){}
var cf=bl(pc,qc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();