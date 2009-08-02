(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',xc=', Size: ',Bb='-',qb='0',Fb='0px',pc='100%',tc='100px',ic='1px',vc=':',w='DOMMouseScroll',wc='Index: ',lc='Item one',mc='Item two',ad='Object;',rc='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',Ec='Widget;',Dc='[Lcom.google.gwt.user.client.ui.',Fc='[Ljava.lang.',hc='absolute',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',Cc='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',hb='gwt-Label',vb='gwt-ListBox',Ab='gwt-MenuBar',ec='gwt-TextArea',sc='height',jc='hidden',ac='hideFocus',Db='horizontal',fc='input',dc='keydown',oc='keypress',zc='keyup',B='left',bd='load',n='losecapture',zb='menubar',mb='middle',Ac='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',Bc='onModuleLoadStart',uc='online staus',wb='option',Eb='outline',E='position',kb='right',xb='role',t='scroll',l='select',yc='startup',bb='submit',eb='table',fb='tbody',sb='td',gc='text',cc='textarea',kc='title of Main Window',D='top',ob='tr',bc='true',db='type',qc='value',Cb='vertical',ub='verticalAlign',nc='width';var _;function cp(a){return this===(a==null?null:a)}
function dp(){return this.$H||(this.$H=++sd)}
function ap(){}
_=ap.prototype={};_.eQ=cp;_.hC=dp;_.tM=gu;_.tI=1;function jd(b,a){return b.tM==gu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ld(a){return a.tM==gu||a.tI==2?a.hC():a.$H||(a.$H=++sd)}
var sd=0;function Cd(){Cd=gu;wd();new ud()}
function Ed(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function Fd(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function be(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function td(){}
_=td.prototype=new ap();_.tI=0;function Bd(){Bd=gu;Cd()}
function Ad(){}
_=Ad.prototype=new td();_.tI=0;function wd(){wd=gu;Bd()}
function xd(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function ud(){}
_=ud.prototype=new Ad();_.tI=0;function Fe(){}
_=Fe.prototype=new ap();_.tI=0;function gf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function hf(a,f,c,b,e){var d;d=gf(e,b);jf(a,f,c,d);return d}
function jf(b,d,c,a){if(!kf){kf=new cf()}nf(a,kf);a.tI=d;a.qI=c;return a}
function lf(a,b,c){if(c!=null){if(a.qI>0&&!qf(c.tI,a.qI)){throw new ho()}if(a.qI<0&&(c.tM==gu||c.tI==2)){throw new ho()}}return a[b]=c}
function nf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function cf(){}
_=cf.prototype=new ap();_.tI=0;_.length=0;_.qI=0;var kf=null;function rf(b,a){return b&&!!Ff[b][a]}
function qf(b,a){return b&&Ff[b][a]}
function sf(b,a){if(b!=null&&!qf(b.tI,a)){throw new lo()}return b}
function Ef(a){if(a!=null){throw new lo()}return a}
var Ff=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function ug(b,a,c){var d;if(a==zg){if(wh(b)==8192){zg=null}}d=tg;tg=b;try{c.u(b)}finally{tg=d}}
function Bg(a,b){yh();oh(a,b)}
var tg=null,zg=null;function ah(a){fh();if(!bh){bh=Cs(new Bs())}Es(bh,a)}
function ch(){var a;if(bh){for(a=ur(new sr(),bh);a.a<a.b.b;){sf(xr(a),3);fl()}}}
function dh(){var a,b;b=null;if(bh){for(a=ur(new sr(),bh);a.a<a.b.b;){sf(xr(a),3);b=null}}return b}
function fh(){if(!eh){eh=true;Eh()}}
var bh=null,eh=false;function wh(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case bd:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function yh(){if(!Ah){nh();Ah=true}}
function Bh(a){return a!=null&&rf(a.tI,4)&&!(a!=null&&(a.tM!=gu&&a.tI!=2))}
var Ah=false;function nh(){rh=function(b){if(qh(b)){var a=ph;if(a&&a.__listener){if(Bh(a.__listener)){ug(b,a,a.__listener);b.stopPropagation()}}}};qh=function(a){return true};sh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Bh(c)){ug(b,a,c)}}};$wnd.addEventListener(cb,rh,true);$wnd.addEventListener(nb,rh,true);$wnd.addEventListener(o,rh,true);$wnd.addEventListener(s,rh,true);$wnd.addEventListener(p,rh,true);$wnd.addEventListener(r,rh,true);$wnd.addEventListener(q,rh,true);$wnd.addEventListener(v,rh,true);$wnd.addEventListener(dc,qh,true);$wnd.addEventListener(zc,qh,true);$wnd.addEventListener(oc,qh,true)}
function oh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?sh:null;if(b&2)c.ondblclick=a&2?sh:null;if(b&4)c.onmousedown=a&4?sh:null;if(b&8)c.onmouseup=a&8?sh:null;if(b&16)c.onmouseover=a&16?sh:null;if(b&32)c.onmouseout=a&32?sh:null;if(b&64)c.onmousemove=a&64?sh:null;if(b&128)c.onkeydown=a&128?sh:null;if(b&256)c.onkeypress=a&256?sh:null;if(b&512)c.onkeyup=a&512?sh:null;if(b&1024)c.onchange=a&1024?sh:null;if(b&2048)c.onfocus=a&2048?sh:null;if(b&4096)c.onblur=a&4096?sh:null;if(b&8192)c.onlosecapture=a&8192?sh:null;if(b&16384)c.onscroll=a&16384?sh:null;if(b&32768)c.onload=a&32768?sh:null;if(b&65536)c.onerror=a&65536?sh:null;if(b&131072)c.onmousewheel=a&131072?sh:null;if(b&262144)c.oncontextmenu=a&262144?sh:null}
var ph=null,qh=null,rh=null,sh=null;function Eh(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=dh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ch()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Bl(b,a){bm(b.i,a,true)}
function am(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(Cp(32));if(c>=0){return b.substr(0,c-0)}return b}
function bm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new ep()}j=yp(j);if(j.length==0){throw new wo()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=yp(i.substr(0,e-0));d=yp(wp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function Al(){}
_=Al.prototype=new ap();_.tI=7;_.i=null;function Am(a){if(a.g){throw new zo()}a.g=true;a.i.__listener=a;a.m();a.w()}
function Bm(a){if(!a.g){throw new zo()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function Cm(a){if(a.h){a.h.y(a)}else if(a.h){throw new zo()}}
function Dm(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new zo()}c.h=b;if(b.g){Am(c)}}}
function Em(){}
function Fm(){}
function an(a){}
function bn(){Bm(this)}
function cn(){}
function dn(){}
function jm(){}
_=jm.prototype=new Al();_.m=Em;_.n=Fm;_.u=an;_.v=bn;_.w=cn;_.x=dn;_.tI=8;_.g=false;_.h=null;function yk(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=pm(b);Am(a)}}
function zk(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=pm(b);a.v()}}
function Ak(){}
function Bk(){}
function wk(){}
_=wk.prototype=new jm();_.m=yk;_.n=zk;_.w=Ak;_.x=Bk;_.tI=9;function ri(c,a,b){Cm(a);tm(c.f,a);b.appendChild(a.i);Dm(a,c)}
function ti(b,c){var a;if(c.h!=b){return false}Dm(c,null);a=c.i;Fd((Cd(),a)).removeChild(a);ym(b.f,c);return true}
function ui(){return nm(new lm(),this.f)}
function vi(a){return ti(this,a)}
function pi(){}
_=pi.prototype=new wk();_.s=ui;_.y=vi;_.tI=10;function ai(a,b){ri(a,b,a.i)}
function ci(b,c){var a;a=ti(b,c);if(a){di(c.i)}return a}
function di(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function ei(a){return ci(this,a)}
function Fh(){}
_=Fh.prototype=new pi();_.y=ei;_.tI=11;function Bi(){Bi=gu;Ci=(wn(),yn)}
function Ai(b,a){Bi();b.i=a;Ci.z(b.i,0);return b}
function Di(a){wh(a)}
function zi(){}
_=zi.prototype=new jm();_.u=Di;_.tI=12;var Ci;function ii(){ii=gu;Bi()}
function hi(b,a){ii();b.i=a;Ci.z(b.i,0);return b}
function gi(){}
_=gi.prototype=new zi();_.tI=13;function ki(){ki=gu;ii()}
function ji(a){ki();hi(a,$doc.createElement((Cd(),F)));li(a.i);a.i[z]=ab;return a}
function li(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function fi(){}
_=fi.prototype=new gi();_.tI=14;function ni(a){a.f=sm(new km());a.e=$doc.createElement((Cd(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function mi(){}
_=mi.prototype=new pi();_.tI=15;_.d=null;_.e=null;function xi(){xi=gu;yi=(wn(),xn)}
var yi;function Ej(a){a.i=$doc.createElement((Cd(),gb));a.i[z]=hb;return a}
function bk(a){wh(a)}
function Dj(){}
_=Dj.prototype=new jm();_.u=bk;_.tI=16;function Fi(a){a.i=$doc.createElement((Cd(),gb));a.i[z]=ib;return a}
function Ei(){}
_=Ei.prototype=new Dj();_.tI=17;function ij(){ij=gu;gj(new fj(),jb);kj=gj(new fj(),B);gj(new fj(),kb);jj=kj}
var jj,kj;function gj(b,a){b.a=a;return b}
function fj(){}
_=fj.prototype=new ap();_.tI=0;_.a=null;function qj(){qj=gu;oj(new nj(),lb);oj(new nj(),mb);rj=oj(new nj(),D)}
var rj;function oj(a,b){a.a=b;return a}
function nj(){}
_=nj.prototype=new ap();_.tI=0;_.a=null;function wj(a){ni(a);a.a=(ij(),jj);a.c=(qj(),rj);a.b=$doc.createElement((Cd(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function xj(c,d){var b,a;b=(a=$doc.createElement((Cd(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);Cm(d);tm(c.f,d);b.appendChild(d.i);Dm(d,c)}
function Aj(c){var a,b;b=Fd((Cd(),c.i));a=ti(this,c);if(a){this.b.removeChild(b)}return a}
function uj(){}
_=uj.prototype=new mi();_.y=Aj;_.tI=18;_.b=null;function gk(){gk=gu;Bi()}
function dk(a){gk();Ai(a,Ed((Cd(),false)));a.i[z]=vb;return a}
function hk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((Cd(),wb));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function jk(a){if(wh(a)==1024){}else{wh(a)}}
function ck(){}
_=ck.prototype=new zi();_.u=jk;_.tI=19;function nk(a){Cs(new Bs());a.b=Cs(new Bs());qk(a,false,(tk(),new rk()));return a}
function pk(d,a){var b,c;for(c=ur(new sr(),d.b);c.a<c.b.b;){b=Ef(xr(c));if(xd((Cd(),null.D()),a)){return b}}return null}
function qk(c,e){var a,b,d;b=$doc.createElement((Cd(),eb));c.a=$doc.createElement(fb);b.appendChild(c.a);if(!e){d=$doc.createElement(ob);c.a.appendChild(d)}a=mn((xi(),yi));a.appendChild(b);c.i=a;c.i.setAttribute(xb,zb);Bg(c.i,2225|(c.i.__eventBits||0));c.i[z]=Ab;if(e){Bl(c,am(c.i)+Bb+Cb)}else{Bl(c,am(c.i)+Bb+Db)}c.i.style[Eb]=Fb;c.i.setAttribute(ac,bc)}
function uk(a){var b;pk(this,a.target);switch(wh(a)){case 1:{tn((xi(),this.i));break}{break}case 2048:{Ef(at(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Ef(at(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Ef(at(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Ef(at(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Ef(at(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Ef(at(this.b,0))}}break}}}
function vk(){Bm(this)}
function kk(){}
_=kk.prototype=new jm();_.u=uk;_.v=vk;_.tI=20;_.a=null;function tk(){tk=gu}
function rk(){}
_=rk.prototype=new ap();_.tI=0;function el(){el=gu;il=jt(new it());jl=nt(new mt())}
function dl(b,a){el();b.f=sm(new km());b.i=a;Am(b);return b}
function fl(){var b,a;el();var c,d;for(d=(b=lq(new kq(),us(jl.a).b.a),es(new ds(),b));wr(d.a.a);){c=sf((a=sf(xr(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function hl(a){el();var b;b=sf(jr(il,a),5);if(b){return b}if(il.d==0){ah(new Ek())}b=bl(new al());pr(il,a,b);ot(jl,b);return b}
function Dk(){}
_=Dk.prototype=new Fh();_.tI=21;var il,jl;function Ek(){}
_=Ek.prototype=new ap();_.tI=22;function cl(){cl=gu;el()}
function bl(a){cl();dl(a,$doc.body);return a}
function al(){}
_=al.prototype=new Dk();_.tI=23;function xl(){xl=gu;Bi()}
function wl(b,a){xl();b.i=a;Ci.z(b.i,0);return b}
function zl(a){var b;b=wh(a);if((b&896)!=0){wh(a)}else if(b==1024){}else{wh(a)}}
function vl(){}
_=vl.prototype=new zi();_.u=zl;_.tI=24;function ul(){ul=gu;xl()}
function tl(a){ul();wl(a,$doc.createElement((Cd(),cc)));a.i[z]=ec;return a}
function sl(){}
_=sl.prototype=new vl();_.tI=25;function em(a){ni(a);a.a=(ij(),jj);a.b=(qj(),rj);a.e[pb]=qb;a.e[rb]=qb;return a}
function fm(c,e){var b,d,a;d=$doc.createElement((Cd(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);Cm(e);tm(c.f,e);b.appendChild(e.i);Dm(e,c)}
function im(c){var a,b;b=Fd((Cd(),c.i));a=ti(this,c);if(a){this.d.removeChild(Fd(b))}return a}
function cm(){}
_=cm.prototype=new mi();_.y=im;_.tI=26;function sm(a){a.a=hf(cg,0,6,4,0);return a}
function tm(a,b){wm(a,b,a.b)}
function vm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function wm(d,e,a){var b,c;if(a<0||a>d.b){throw new Co()}if(d.b==d.a.length){c=hf(cg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){lf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){lf(d.a,b,d.a[b-1])}lf(d.a,a,e)}
function xm(c,b){var a;if(b<0||b>=c.b){throw new Co()}--c.b;for(a=b;a<c.b;++a){lf(c.a,a,c.a[a+1])}lf(c.a,c.b,null)}
function ym(b,c){var a;a=vm(b,c);if(a==-1){throw new Ft()}xm(b,a)}
function km(){}
_=km.prototype=new ap();_.tI=0;_.a=null;_.b=0;function nm(b,a){b.b=a;return b}
function pm(a){if(a.a>=a.b.b){throw new Ft()}return a.b.a[++a.a]}
function qm(){return this.a<this.b.b-1}
function rm(){return pm(this)}
function lm(){}
_=lm.prototype=new ap();_.r=qm;_.t=rm;_.tI=0;_.a=-1;_.b=null;function wn(){wn=gu;xn=qn(new pn());yn=xn?(wn(),new en()):xn}
function zn(a,b){a.tabIndex=b}
function en(){}
_=en.prototype=new ap();_.z=zn;_.tI=0;var xn,yn;function jn(){jn=gu;wn()}
function kn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function ln(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function mn(c){var a=$doc.createElement(gb);var b=c.l();b.addEventListener(m,c.a,false);b.addEventListener(yb,c.b,false);a.addEventListener(o,c.c,false);a.appendChild(b);return a}
function nn(){var a=$doc.createElement(fc);a.type=gc;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=hc;return a}
function on(a,b){a.firstChild.tabIndex=b}
function fn(){}
_=fn.prototype=new en();_.l=nn;_.z=on;_.tI=0;function rn(){rn=gu;jn()}
function qn(a){rn();a.a=kn();a.b=ln();a.c=sn();return a}
function sn(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function tn(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function un(){var a=$doc.createElement(fc);a.type=gc;a.style.opacity=0;a.style.zIndex=-1;a.style.height=ic;a.style.width=ic;a.style.overflow=jc;a.style.position=hc;return a}
function pn(){}
_=pn.prototype=new fn();_.l=un;_.tI=0;function An(){}
_=An.prototype=new Fe();_.tI=0;function Cn(a){a.d=em(new cm());a.c=wj(new uj());a.h=em(new cm());a.g=dk(new ck());a.a=tl(new sl());a.e=nk(new kk());a.b=ji(new fi());a.f=Ej(new Dj());a.i=Fi(new Ei());be((Cd(),a.i.i),kc);hk(a.g,lc,lc,-1);hk(a.g,mc,mc,-1);a.g.i.size=6;a.g.i.style[nc]=pc;a.a.i[qc]=rc!=null?rc:C;a.a.i.style[nc]=pc;fm(a.h,a.g);fm(a.h,a.a);a.h.i.style[sc]=tc;be(a.f.i,uc);xj(a.c,a.b);xj(a.c,a.e);a.c.i.style[sc]=pc;fm(a.d,a.i);fm(a.d,a.h);fm(a.d,a.f);fm(a.d,a.c);a.d.i.style[sc]=pc;a.d.i.style[nc]=pc;ai((el(),hl(null)),a.d);return a}
function Bn(){}
_=Bn.prototype=new An();_.tI=0;function Ep(){}
_=Ep.prototype=new ap();_.tI=3;function uo(){}
_=uo.prototype=new Ep();_.tI=4;function ep(){}
_=ep.prototype=new uo();_.tI=5;function ho(){}
_=ho.prototype=new ep();_.tI=28;function oo(c,a){var b;b=new ko();return b}
function ko(){}
_=ko.prototype=new ap();_.tI=0;function lo(){}
_=lo.prototype=new ep();_.tI=31;function wo(){}
_=wo.prototype=new ep();_.tI=32;function zo(){}
_=zo.prototype=new ep();_.tI=33;function Do(b,a){return b}
function Co(){}
_=Co.prototype=new ep();_.tI=34;function sp(b,a){if(!(a!=null&&rf(a.tI,1))){return false}return String(b)==a}
function wp(b,a){return b.substr(a,b.length-a)}
function yp(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function Ap(a){return sp(this,a)}
function Cp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Dp(){return op(this)}
_=String.prototype;_.eQ=Ap;_.hC=Dp;_.tI=2;function jp(){jp=gu;kp={};np={}}
function lp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function op(c){jp();var a=vc+c;var b=np[a];if(b!=null){return b}b=kp[a];if(b==null){b=lp(c)}pp();return np[a]=b}
function pp(){if(mp==256){kp=np;np={};mp=0}++mp}
var kp,mp=0,np;function aq(){}
_=aq.prototype=new ep();_.tI=35;function eq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:jd(b,c)){return a}}return null}
function gq(a){throw new aq()}
function hq(b){var a;a=eq(this.s(),b);return !!a}
function dq(){}
_=dq.prototype=new ap();_.j=gq;_.k=hq;_.tI=0;function us(b){var a;a=pq(new jq(),b);return js(new cs(),b,a)}
function vs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&rf(c.tI,11))){return false}e=sf(c,11);if(sf(this,11).d!=e.d){return false}for(b=lq(new kq(),pq(new jq(),e).a);wr(b.a);){a=sf(xr(b.a),9);d=a.p();f=a.q();if(!(d==null?sf(this,11).c:d!=null&&rf(d.tI,1)?lr(sf(this,11),sf(d,1)):kr(sf(this,11),d,~~ld(d)))){return false}if(!fu(f,d==null?sf(this,11).b:d!=null&&rf(d.tI,1)?sf(this,11).e[vc+sf(d,1)]:hr(sf(this,11),d,~~ld(d)))){return false}}return true}
function ws(){var a,b,c;c=0;for(b=lq(new kq(),pq(new jq(),sf(this,11)).a);wr(b.a);){a=sf(xr(b.a),9);c+=a.hC();c=~~c}return c}
function bs(){}
_=bs.prototype=new ap();_.eQ=vs;_.hC=ws;_.tI=0;function cr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function dr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=ar(e,c.substring(1));a.j(b)}}}
function gr(b,a){return a==null?b.c:a!=null&&rf(a.tI,1)?lr(b,sf(a,1)):kr(b,a,~~ld(a))}
function jr(b,a){return a==null?b.b:a!=null&&rf(a.tI,1)?b.e[vc+sf(a,1)]:hr(b,a,~~ld(a))}
function hr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function kr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function lr(b,a){return vc+a in b.e}
function pr(b,a,c){return a==null?nr(b,c):a!=null&&rf(a.tI,1)?or(b,sf(a,1),c):mr(b,a,c,~~ld(a))}
function mr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.A(j);return h}}}else{a=i.a[e]=[]}var c=yt(new xt(),g,j);a.push(c);++i.d;return null}
function nr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function or(d,a,e){var b,c=d.e;a=vc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function qr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&jd(a,b)}
function iq(){}
_=iq.prototype=new bs();_.o=qr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function zs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&rf(b.tI,12))){return false}c=sf(b,12);if(c.B()!=this.B()){return false}for(a=c.s();a.r();){d=a.t();if(!this.k(d)){return false}}return true}
function As(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=ld(c);a=~~a}}return a}
function xs(){}
_=xs.prototype=new dq();_.eQ=zs;_.hC=As;_.tI=36;function pq(b,a){b.a=a;return b}
function rq(d,c){var a,b,e;if(c!=null&&rf(c.tI,9)){a=sf(c,9);b=a.p();if(gr(d.a,b)){e=jr(d.a,b);return lt(a.q(),e)}}return false}
function sq(a){return rq(this,a)}
function tq(){return lq(new kq(),this.a)}
function uq(){return this.a.d}
function jq(){}
_=jq.prototype=new xs();_.k=sq;_.s=tq;_.B=uq;_.tI=37;_.a=null;function lq(c,b){var a;c.b=b;a=Cs(new Bs());if(c.b.c){Es(a,wq(new vq(),c.b))}dr(c.b,a);cr(c.b,a);c.a=ur(new sr(),a);return c}
function nq(){return wr(this.a)}
function oq(){return sf(xr(this.a),9)}
function kq(){}
_=kq.prototype=new ap();_.r=nq;_.t=oq;_.tI=0;_.a=null;_.b=null;function rs(b){var a;if(b!=null&&rf(b.tI,9)){a=sf(b,9);if(fu(this.p(),a.p())&&fu(this.q(),a.q())){return true}}return false}
function ss(){var a,b;a=0;b=0;if(this.p()!=null){a=ld(this.p())}if(this.q()!=null){b=ld(this.q())}return a^b}
function ps(){}
_=ps.prototype=new ap();_.eQ=rs;_.hC=ss;_.tI=38;function wq(b,a){b.a=a;return b}
function yq(){return null}
function zq(){return this.a.b}
function Aq(a){return nr(this.a,a)}
function vq(){}
_=vq.prototype=new ps();_.p=yq;_.q=zq;_.A=Aq;_.tI=39;_.a=null;function Cq(c,a,b){c.b=b;c.a=a;return c}
function Eq(){return this.a}
function Fq(){return this.b.e[vc+this.a]}
function ar(b,a){return Cq(new Bq(),a,b)}
function br(a){return or(this.b,this.a,a)}
function Bq(){}
_=Bq.prototype=new ps();_.p=Eq;_.q=Fq;_.A=br;_.tI=40;_.a=null;_.b=null;function Br(a){Ds(this,this.B(),a);return true}
function Cr(a,b){if(a<0||a>=b){Fr(a,b)}}
function Dr(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&rf(e.tI,10))){return false}f=sf(e,10);if(this.B()!=f.b){return false}c=ur(new sr(),this);d=ur(new sr(),f);while(c.a<c.b.b){a=xr(c);b=xr(d);if(!(a==null?b==null:jd(a,b))){return false}}return true}
function Er(){var a,b,c;b=1;a=ur(new sr(),this);while(a.a<a.b.b){c=xr(a);b=31*b+(c==null?0:ld(c));b=~~b}return b}
function Fr(a,b){throw Do(new Co(),wc+a+xc+b)}
function as(){return ur(new sr(),this)}
function rr(){}
_=rr.prototype=new dq();_.j=Br;_.eQ=Dr;_.hC=Er;_.s=as;_.tI=0;function ur(b,a){b.b=a;return b}
function wr(a){return a.a<a.b.b}
function xr(a){if(a.a>=a.b.b){throw new Ft()}return at(a.b,a.a++)}
function yr(){return this.a<this.b.b}
function zr(){return xr(this)}
function sr(){}
_=sr.prototype=new ap();_.r=yr;_.t=zr;_.tI=0;_.a=0;_.b=null;function js(b,a,c){b.a=a;b.b=c;return b}
function ms(a){return gr(this.a,a)}
function ns(){var a;return a=lq(new kq(),this.b.a),es(new ds(),a)}
function os(){return this.b.a.d}
function cs(){}
_=cs.prototype=new xs();_.k=ms;_.s=ns;_.B=os;_.tI=41;_.a=null;_.b=null;function es(a,b){a.a=b;return a}
function hs(){return wr(this.a.a)}
function is(){var a;return a=sf(xr(this.a.a),9),a.p()}
function ds(){}
_=ds.prototype=new ap();_.r=hs;_.t=is;_.tI=0;_.a=null;function Cs(a){a.a=hf(dg,0,0,0,0);a.b=0;return a}
function Es(b,a){lf(b.a,b.b++,a);return true}
function Ds(c,a,b){if(a<0||a>c.b){Fr(a,c.b)}c.a.splice(a,0,b);++c.b}
function at(b,a){Cr(a,b.b);return b.a[a]}
function bt(c,b,a){for(;a<c.b;++a){if(fu(b,c.a[a])){return a}}return -1}
function ct(a){return lf(this.a,this.b++,a),true}
function dt(a){return bt(this,a,0)!=-1}
function et(){return this.b}
function Bs(){}
_=Bs.prototype=new rr();_.j=ct;_.k=dt;_.B=et;_.tI=42;_.a=null;_.b=0;function jt(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function lt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&jd(a,b)}
function it(){}
_=it.prototype=new iq();_.tI=43;function nt(a){a.a=jt(new it());return a}
function ot(c,a){var b;b=pr(c.a,a,c);return b==null}
function qt(b){var a;return a=pr(this.a,b,this),a==null}
function rt(a){return gr(this.a,a)}
function st(){var a;return a=lq(new kq(),us(this.a).b.a),es(new ds(),a)}
function tt(){return this.a.d}
function mt(){}
_=mt.prototype=new xs();_.j=qt;_.k=rt;_.s=st;_.B=tt;_.tI=44;_.a=null;function yt(b,a,c){b.a=a;b.b=c;return b}
function At(){return this.a}
function Bt(){return this.b}
function Dt(b){var a;a=this.b;this.b=b;return a}
function xt(){}
_=xt.prototype=new ps();_.p=At;_.q=Bt;_.A=Dt;_.tI=45;_.a=null;_.b=null;function Ft(){}
_=Ft.prototype=new ep();_.tI=46;function fu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&jd(a,b)}
function fo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:yc,evtGroup:Ac,millis:(new Date()).getTime(),type:Bc,className:Cc});Cn(new Bn())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{fo()}catch(a){b(d)}else{fo()}}
function gu(){}
var cg=oo(Dc,Ec),dg=oo(Fc,ad);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();