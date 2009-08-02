(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',C=' ',vc=', Size: ',Eb='-',sb='0',cc='0px',mc='100%',rc='100px',tc=':',Ab='DIV',w='DOMMouseScroll',uc='Index: ',jc='Item one',kc='Item two',A='MouseEvents',Ec='Object;',pc='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',Cc='Widget;',Bc='[Lcom.google.gwt.user.client.ui.',Dc='[Ljava.lang.',vb='align',m='blur',ob='bottom',bb='button',tb='cellPadding',rb='cellSpacing',lb='center',x='change',B='className',cb='click',Ac='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',ib='div',u='error',yb='focus',db='gwt-Button',kb='gwt-HTML',jb='gwt-Label',xb='gwt-ListBox',Db='gwt-MenuBar',hc='gwt-TextArea',qc='height',ec='hideFocus',ac='horizontal',z='html',dc='keydown',oc='keypress',zc='keyup',D='left',Fc='load',n='losecapture',Cb='menubar',pb='middle',xc='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',yc='onModuleLoadStart',sc='online staus',zb='option',bc='outline',ab='position',mb='right',Bb='role',t='scroll',l='select',wc='startup',eb='submit',gb='table',hb='tbody',ub='td',gc='textarea',ic='title of Main Window',F='top',qb='tr',fc='true',fb='type',nc='value',Fb='vertical',wb='verticalAlign',lc='width';var _;function no(a){return this===(a==null?null:a)}
function oo(){return this.$H||(this.$H=++qd)}
function lo(){}
_=lo.prototype={};_.eQ=no;_.hC=oo;_.tM=rt;_.tI=1;function hd(b,a){return b.tM==rt||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function jd(a){return a.tM==rt||a.tI==2?a.hC():a.$H||(a.$H=++qd)}
var qd=0;function yd(){yd=rt;ud();new sd()}
function Ad(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function Bd(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Fd(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function rd(){}
_=rd.prototype=new lo();_.tI=0;function xd(){xd=rt;yd()}
function wd(){}
_=wd.prototype=new rd();_.tI=0;function ud(){ud=rt;xd()}
function vd(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function sd(){}
_=sd.prototype=new wd();_.tI=0;function De(){}
_=De.prototype=new lo();_.tI=0;function ef(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ff(a,f,c,b,e){var d;d=ef(e,b);gf(a,f,c,d);return d}
function gf(b,d,c,a){if(!hf){hf=new af()}lf(a,hf);a.tI=d;a.qI=c;return a}
function jf(a,b,c){if(c!=null){if(a.qI>0&&!of(c.tI,a.qI)){throw new rn()}if(a.qI<0&&(c.tM==rt||c.tI==2)){throw new rn()}}return a[b]=c}
function lf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function af(){}
_=af.prototype=new lo();_.tI=0;_.length=0;_.qI=0;var hf=null;function pf(b,a){return b&&!!Df[b][a]}
function of(b,a){return b&&Df[b][a]}
function qf(b,a){if(b!=null&&!of(b.tI,a)){throw new vn()}return b}
function Cf(a){if(a!=null){throw new vn()}return a}
var Df=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function sg(b,a,c){var d;if(a==xg){if(yh(b)==8192){xg=null}}d=rg;rg=b;try{c.t(b)}finally{rg=d}}
var rg=null,xg=null;function Dg(a){ch();if(!Eg){Eg=hs(new gs())}js(Eg,a)}
function Fg(){var a;if(Eg){for(a=Fq(new Dq(),Eg);a.a<a.b.b;){qf(cr(a),3);cl()}}}
function ah(){var a,b;b=null;if(Eg){for(a=Fq(new Dq(),Eg);a.a<a.b.b;){qf(cr(a),3);b=null}}return b}
function ch(){if(!bh){bh=true;ai()}}
var Eg=null,bh=false;function yh(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case Fc:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function Ah(){if(!Ch){ph();ih();Ch=true}}
function Dh(a){return a!=null&&pf(a.tI,4)&&!(a!=null&&(a.tM!=rt&&a.tI!=2))}
var Ch=false;function ph(){th=function(b){if(sh(b)){var a=rh;if(a&&a.__listener){if(Dh(a.__listener)){sg(b,a,a.__listener);b.stopPropagation()}}}};sh=function(a){return true};uh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Dh(c)){sg(b,a,c)}}};$wnd.addEventListener(cb,th,true);$wnd.addEventListener(nb,th,true);$wnd.addEventListener(o,th,true);$wnd.addEventListener(s,th,true);$wnd.addEventListener(p,th,true);$wnd.addEventListener(r,th,true);$wnd.addEventListener(q,th,true);$wnd.addEventListener(v,th,true);$wnd.addEventListener(dc,sh,true);$wnd.addEventListener(zc,sh,true);$wnd.addEventListener(oc,sh,true)}
function qh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?uh:null;if(b&2)c.ondblclick=a&2?uh:null;if(b&4)c.onmousedown=a&4?uh:null;if(b&8)c.onmouseup=a&8?uh:null;if(b&16)c.onmouseover=a&16?uh:null;if(b&32)c.onmouseout=a&32?uh:null;if(b&64)c.onmousemove=a&64?uh:null;if(b&128)c.onkeydown=a&128?uh:null;if(b&256)c.onkeypress=a&256?uh:null;if(b&512)c.onkeyup=a&512?uh:null;if(b&1024)c.onchange=a&1024?uh:null;if(b&2048)c.onfocus=a&2048?uh:null;if(b&4096)c.onblur=a&4096?uh:null;if(b&8192)c.onlosecapture=a&8192?uh:null;if(b&16384)c.onscroll=a&16384?uh:null;if(b&32768)c.onload=a&32768?uh:null;if(b&65536)c.onerror=a&65536?uh:null;if(b&131072)c.onmousewheel=a&131072?uh:null;if(b&262144)c.oncontextmenu=a&262144?uh:null}
var rh=null,sh=null,th=null,uh=null;function ih(){$wnd.addEventListener(q,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(z==b.target.tagName.toLowerCase()){var c=$doc.createEvent(A);c.initMouseEvent(s,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(w,th,true)}
function kh(b,a){Ah();qh(b,a);jh(b,a)}
function jh(b,a){if(a&131072){b.addEventListener(w,uh,false)}}
function ai(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ah()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{Fg()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function wl(b,a){Cl(b.i,a,true)}
function Bl(a){var b,c;b=a[B]==null?null:String(a[B]);c=b.indexOf(hp(32));if(c>=0){return b.substr(0,c-0)}return b}
function Cl(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new po()}j=dp(j);if(j.length==0){throw new ao()}i=c[B]==null?null:String(c[B]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=C}c[B]=i+j}}else{if(e!=-1){b=dp(i.substr(0,e-0));d=dp(bp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+C+d}c[B]=h}}}
function vl(){}
_=vl.prototype=new lo();_.tI=7;_.i=null;function vm(a){if(a.g){throw new eo()}a.g=true;a.i.__listener=a;a.l();a.v()}
function wm(a){if(!a.g){throw new eo()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function xm(a){if(a.h){a.h.x(a)}else if(a.h){throw new eo()}}
function ym(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new eo()}c.h=b;if(b.g){vm(c)}}}
function zm(){}
function Am(){}
function Bm(a){}
function Cm(){wm(this)}
function Dm(){}
function Em(){}
function em(){}
_=em.prototype=new vl();_.l=zm;_.m=Am;_.t=Bm;_.u=Cm;_.v=Dm;_.w=Em;_.tI=8;_.g=false;_.h=null;function vk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=km(b);vm(a)}}
function wk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=km(b);a.u()}}
function xk(){}
function yk(){}
function tk(){}
_=tk.prototype=new em();_.l=vk;_.m=wk;_.v=xk;_.w=yk;_.tI=9;function ti(c,a,b){xm(a);om(c.f,a);b.appendChild(a.i);ym(a,c)}
function vi(b,c){var a;if(c.h!=b){return false}ym(c,null);a=c.i;Bd((yd(),a)).removeChild(a);tm(b.f,c);return true}
function wi(){return im(new gm(),this.f)}
function xi(a){return vi(this,a)}
function ri(){}
_=ri.prototype=new tk();_.r=wi;_.x=xi;_.tI=10;function ci(a,b){ti(a,b,a.i)}
function ei(b,c){var a;a=vi(b,c);if(a){fi(c.i)}return a}
function fi(a){a.style[D]=E;a.style[F]=E;a.style[ab]=E}
function gi(a){return ei(this,a)}
function bi(){}
_=bi.prototype=new ri();_.x=gi;_.tI=11;function zi(b,a){b.i=a;b.i.tabIndex=0;return b}
function Bi(a){yh(a)}
function yi(){}
_=yi.prototype=new em();_.t=Bi;_.tI=12;function ji(b,a){b.i=a;b.i.tabIndex=0;return b}
function ii(){}
_=ii.prototype=new yi();_.tI=13;function li(a){ji(a,$doc.createElement((yd(),bb)));ni(a.i);a.i[B]=db;return a}
function ni(b){if(b.type==eb){try{b.setAttribute(fb,bb)}catch(a){}}}
function hi(){}
_=hi.prototype=new ii();_.tI=14;function pi(a){a.f=nm(new fm());a.e=$doc.createElement((yd(),gb));a.d=$doc.createElement(hb);a.e.appendChild(a.d);a.i=a.e;return a}
function oi(){}
_=oi.prototype=new ri();_.tI=15;_.d=null;_.e=null;function Cj(a){a.i=$doc.createElement((yd(),ib));a.i[B]=jb;return a}
function Fj(a){yh(a)}
function Bj(){}
_=Bj.prototype=new em();_.t=Fj;_.tI=16;function Di(a){a.i=$doc.createElement((yd(),ib));a.i[B]=kb;return a}
function Ci(){}
_=Ci.prototype=new Bj();_.tI=17;function gj(){gj=rt;ej(new dj(),lb);ij=ej(new dj(),D);ej(new dj(),mb);hj=ij}
var hj,ij;function ej(b,a){b.a=a;return b}
function dj(){}
_=dj.prototype=new lo();_.tI=0;_.a=null;function oj(){oj=rt;mj(new lj(),ob);mj(new lj(),pb);pj=mj(new lj(),F)}
var pj;function mj(a,b){a.a=b;return a}
function lj(){}
_=lj.prototype=new lo();_.tI=0;_.a=null;function uj(a){pi(a);a.a=(gj(),hj);a.c=(oj(),pj);a.b=$doc.createElement((yd(),qb));a.d.appendChild(a.b);a.e[rb]=sb;a.e[tb]=sb;return a}
function vj(c,d){var b,a;b=(a=$doc.createElement((yd(),ub)),(a[vb]=c.a.a,undefined),(a.style[wb]=c.c.a,undefined),a);c.b.appendChild(b);xm(d);om(c.f,d);b.appendChild(d.i);ym(d,c)}
function yj(c){var a,b;b=Bd((yd(),c.i));a=vi(this,c);if(a){this.b.removeChild(b)}return a}
function sj(){}
_=sj.prototype=new oi();_.x=yj;_.tI=18;_.b=null;function bk(a){zi(a,Ad((yd(),false)));a.i[B]=xb;return a}
function ek(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((yd(),zb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function gk(a){if(yh(a)==1024){}else{yh(a)}}
function ak(){}
_=ak.prototype=new yi();_.t=gk;_.tI=19;function kk(a){hs(new gs());a.b=hs(new gs());nk(a,false,(qk(),new ok()));return a}
function mk(d,a){var b,c;for(c=Fq(new Dq(),d.b);c.a<c.b.b;){b=Cf(cr(c));if(vd((yd(),null.B()),a)){return b}}return null}
function nk(d,f){var b,c,e,a;c=$doc.createElement((yd(),gb));d.a=$doc.createElement(hb);c.appendChild(d.a);if(!f){e=$doc.createElement(qb);d.a.appendChild(e)}b=(a=$doc.createElement(Ab),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Bb,Cb);kh(d.i,2225|(d.i.__eventBits||0));d.i[B]=Db;if(f){wl(d,Bl(d.i)+Eb+Fb)}else{wl(d,Bl(d.i)+Eb+ac)}d.i.style[bc]=cc;d.i.setAttribute(ec,fc)}
function rk(a){var b;mk(this,a.target);switch(yh(a)){case 1:{this.i.focus();break}{break}case 2048:{Cf(ls(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Cf(ls(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Cf(ls(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Cf(ls(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Cf(ls(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Cf(ls(this.b,0))}}break}}}
function sk(){wm(this)}
function hk(){}
_=hk.prototype=new em();_.t=rk;_.u=sk;_.tI=20;_.a=null;function qk(){qk=rt}
function ok(){}
_=ok.prototype=new lo();_.tI=0;function bl(){bl=rt;fl=us(new ts());gl=ys(new xs())}
function al(b,a){bl();b.f=nm(new fm());b.i=a;vm(b);return b}
function cl(){var b,a;bl();var c,d;for(d=(b=wp(new vp(),Fr(gl.a).b.a),pr(new or(),b));br(d.a.a);){c=qf((a=qf(cr(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function el(a){bl();var b;b=qf(uq(fl,a),5);if(b){return b}if(fl.d==0){Dg(new Bk())}b=Ek(new Dk());Aq(fl,a,b);zs(gl,b);return b}
function Ak(){}
_=Ak.prototype=new bi();_.tI=21;var fl,gl;function Bk(){}
_=Bk.prototype=new lo();_.tI=22;function Fk(){Fk=rt;bl()}
function Ek(a){Fk();al(a,$doc.body);return a}
function Dk(){}
_=Dk.prototype=new Ak();_.tI=23;function rl(b,a){b.i=a;b.i.tabIndex=0;return b}
function ul(a){var b;b=yh(a);if((b&896)!=0){yh(a)}else if(b==1024){}else{yh(a)}}
function ql(){}
_=ql.prototype=new yi();_.t=ul;_.tI=24;function ol(a){rl(a,$doc.createElement((yd(),gc)));a.i[B]=hc;return a}
function nl(){}
_=nl.prototype=new ql();_.tI=25;function Fl(a){pi(a);a.a=(gj(),hj);a.b=(oj(),pj);a.e[rb]=sb;a.e[tb]=sb;return a}
function am(c,e){var b,d,a;d=$doc.createElement((yd(),qb));b=(a=$doc.createElement(ub),(a[vb]=c.a.a,undefined),(a.style[wb]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);xm(e);om(c.f,e);b.appendChild(e.i);ym(e,c)}
function dm(c){var a,b;b=Bd((yd(),c.i));a=vi(this,c);if(a){this.d.removeChild(Bd(b))}return a}
function Dl(){}
_=Dl.prototype=new oi();_.x=dm;_.tI=26;function nm(a){a.a=ff(ag,0,6,4,0);return a}
function om(a,b){rm(a,b,a.b)}
function qm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function rm(d,e,a){var b,c;if(a<0||a>d.b){throw new ho()}if(d.b==d.a.length){c=ff(ag,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){jf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){jf(d.a,b,d.a[b-1])}jf(d.a,a,e)}
function sm(c,b){var a;if(b<0||b>=c.b){throw new ho()}--c.b;for(a=b;a<c.b;++a){jf(c.a,a,c.a[a+1])}jf(c.a,c.b,null)}
function tm(b,c){var a;a=qm(b,c);if(a==-1){throw new kt()}sm(b,a)}
function fm(){}
_=fm.prototype=new lo();_.tI=0;_.a=null;_.b=0;function im(b,a){b.b=a;return b}
function km(a){if(a.a>=a.b.b){throw new kt()}return a.b.a[++a.a]}
function lm(){return this.a<this.b.b-1}
function mm(){return km(this)}
function gm(){}
_=gm.prototype=new lo();_.q=lm;_.s=mm;_.tI=0;_.a=-1;_.b=null;function en(){}
_=en.prototype=new De();_.tI=0;function gn(a){a.d=Fl(new Dl());a.c=uj(new sj());a.h=Fl(new Dl());a.g=bk(new ak());a.a=ol(new nl());a.e=kk(new hk());a.b=li(new hi());a.f=Cj(new Bj());a.i=Di(new Ci());Fd((yd(),a.i.i),ic);ek(a.g,jc,jc,-1);ek(a.g,kc,kc,-1);a.g.i.size=6;a.g.i.style[lc]=mc;a.a.i[nc]=pc!=null?pc:E;a.a.i.style[lc]=mc;am(a.h,a.g);am(a.h,a.a);a.h.i.style[qc]=rc;Fd(a.f.i,sc);vj(a.c,a.b);vj(a.c,a.e);a.c.i.style[qc]=mc;am(a.d,a.i);am(a.d,a.h);am(a.d,a.f);am(a.d,a.c);a.d.i.style[qc]=mc;a.d.i.style[lc]=mc;ci((bl(),el(null)),a.d);return a}
function fn(){}
_=fn.prototype=new en();_.tI=0;function jp(){}
_=jp.prototype=new lo();_.tI=3;function En(){}
_=En.prototype=new jp();_.tI=4;function po(){}
_=po.prototype=new En();_.tI=5;function rn(){}
_=rn.prototype=new po();_.tI=28;function yn(c,a){var b;b=new un();return b}
function un(){}
_=un.prototype=new lo();_.tI=0;function vn(){}
_=vn.prototype=new po();_.tI=31;function ao(){}
_=ao.prototype=new po();_.tI=32;function eo(){}
_=eo.prototype=new po();_.tI=33;function io(b,a){return b}
function ho(){}
_=ho.prototype=new po();_.tI=34;function Do(b,a){if(!(a!=null&&pf(a.tI,1))){return false}return String(b)==a}
function bp(b,a){return b.substr(a,b.length-a)}
function dp(c){if(c.length==0||c[0]>C&&c[c.length-1]>C){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function fp(a){return Do(this,a)}
function hp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ip(){return zo(this)}
_=String.prototype;_.eQ=fp;_.hC=ip;_.tI=2;function uo(){uo=rt;vo={};yo={}}
function wo(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function zo(c){uo();var a=tc+c;var b=yo[a];if(b!=null){return b}b=vo[a];if(b==null){b=wo(c)}Ao();return yo[a]=b}
function Ao(){if(xo==256){vo=yo;yo={};xo=0}++xo}
var vo,xo=0,yo;function lp(){}
_=lp.prototype=new po();_.tI=35;function pp(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:hd(b,c)){return a}}return null}
function rp(a){throw new lp()}
function sp(b){var a;a=pp(this.r(),b);return !!a}
function op(){}
_=op.prototype=new lo();_.j=rp;_.k=sp;_.tI=0;function Fr(b){var a;a=Ap(new up(),b);return ur(new nr(),b,a)}
function as(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&pf(c.tI,11))){return false}e=qf(c,11);if(qf(this,11).d!=e.d){return false}for(b=wp(new vp(),Ap(new up(),e).a);br(b.a);){a=qf(cr(b.a),9);d=a.o();f=a.p();if(!(d==null?qf(this,11).c:d!=null&&pf(d.tI,1)?wq(qf(this,11),qf(d,1)):vq(qf(this,11),d,~~jd(d)))){return false}if(!qt(f,d==null?qf(this,11).b:d!=null&&pf(d.tI,1)?qf(this,11).e[tc+qf(d,1)]:sq(qf(this,11),d,~~jd(d)))){return false}}return true}
function bs(){var a,b,c;c=0;for(b=wp(new vp(),Ap(new up(),qf(this,11)).a);br(b.a);){a=qf(cr(b.a),9);c+=a.hC();c=~~c}return c}
function mr(){}
_=mr.prototype=new lo();_.eQ=as;_.hC=bs;_.tI=0;function nq(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function oq(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=lq(e,c.substring(1));a.j(b)}}}
function rq(b,a){return a==null?b.c:a!=null&&pf(a.tI,1)?wq(b,qf(a,1)):vq(b,a,~~jd(a))}
function uq(b,a){return a==null?b.b:a!=null&&pf(a.tI,1)?b.e[tc+qf(a,1)]:sq(b,a,~~jd(a))}
function sq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function vq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function wq(b,a){return tc+a in b.e}
function Aq(b,a,c){return a==null?yq(b,c):a!=null&&pf(a.tI,1)?zq(b,qf(a,1),c):xq(b,a,c,~~jd(a))}
function xq(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=dt(new ct(),g,j);a.push(c);++i.d;return null}
function yq(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function zq(d,a,e){var b,c=d.e;a=tc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Bq(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function tp(){}
_=tp.prototype=new mr();_.n=Bq;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function es(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&pf(b.tI,12))){return false}c=qf(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function fs(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=jd(c);a=~~a}}return a}
function cs(){}
_=cs.prototype=new op();_.eQ=es;_.hC=fs;_.tI=36;function Ap(b,a){b.a=a;return b}
function Cp(d,c){var a,b,e;if(c!=null&&pf(c.tI,9)){a=qf(c,9);b=a.o();if(rq(d.a,b)){e=uq(d.a,b);return ws(a.p(),e)}}return false}
function Dp(a){return Cp(this,a)}
function Ep(){return wp(new vp(),this.a)}
function Fp(){return this.a.d}
function up(){}
_=up.prototype=new cs();_.k=Dp;_.r=Ep;_.z=Fp;_.tI=37;_.a=null;function wp(c,b){var a;c.b=b;a=hs(new gs());if(c.b.c){js(a,bq(new aq(),c.b))}oq(c.b,a);nq(c.b,a);c.a=Fq(new Dq(),a);return c}
function yp(){return br(this.a)}
function zp(){return qf(cr(this.a),9)}
function vp(){}
_=vp.prototype=new lo();_.q=yp;_.s=zp;_.tI=0;_.a=null;_.b=null;function Cr(b){var a;if(b!=null&&pf(b.tI,9)){a=qf(b,9);if(qt(this.o(),a.o())&&qt(this.p(),a.p())){return true}}return false}
function Dr(){var a,b;a=0;b=0;if(this.o()!=null){a=jd(this.o())}if(this.p()!=null){b=jd(this.p())}return a^b}
function Ar(){}
_=Ar.prototype=new lo();_.eQ=Cr;_.hC=Dr;_.tI=38;function bq(b,a){b.a=a;return b}
function dq(){return null}
function eq(){return this.a.b}
function fq(a){return yq(this.a,a)}
function aq(){}
_=aq.prototype=new Ar();_.o=dq;_.p=eq;_.y=fq;_.tI=39;_.a=null;function hq(c,a,b){c.b=b;c.a=a;return c}
function jq(){return this.a}
function kq(){return this.b.e[tc+this.a]}
function lq(b,a){return hq(new gq(),a,b)}
function mq(a){return zq(this.b,this.a,a)}
function gq(){}
_=gq.prototype=new Ar();_.o=jq;_.p=kq;_.y=mq;_.tI=40;_.a=null;_.b=null;function gr(a){is(this,this.z(),a);return true}
function hr(a,b){if(a<0||a>=b){kr(a,b)}}
function ir(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&pf(e.tI,10))){return false}f=qf(e,10);if(this.z()!=f.b){return false}c=Fq(new Dq(),this);d=Fq(new Dq(),f);while(c.a<c.b.b){a=cr(c);b=cr(d);if(!(a==null?b==null:hd(a,b))){return false}}return true}
function jr(){var a,b,c;b=1;a=Fq(new Dq(),this);while(a.a<a.b.b){c=cr(a);b=31*b+(c==null?0:jd(c));b=~~b}return b}
function kr(a,b){throw io(new ho(),uc+a+vc+b)}
function lr(){return Fq(new Dq(),this)}
function Cq(){}
_=Cq.prototype=new op();_.j=gr;_.eQ=ir;_.hC=jr;_.r=lr;_.tI=0;function Fq(b,a){b.b=a;return b}
function br(a){return a.a<a.b.b}
function cr(a){if(a.a>=a.b.b){throw new kt()}return ls(a.b,a.a++)}
function dr(){return this.a<this.b.b}
function er(){return cr(this)}
function Dq(){}
_=Dq.prototype=new lo();_.q=dr;_.s=er;_.tI=0;_.a=0;_.b=null;function ur(b,a,c){b.a=a;b.b=c;return b}
function xr(a){return rq(this.a,a)}
function yr(){var a;return a=wp(new vp(),this.b.a),pr(new or(),a)}
function zr(){return this.b.a.d}
function nr(){}
_=nr.prototype=new cs();_.k=xr;_.r=yr;_.z=zr;_.tI=41;_.a=null;_.b=null;function pr(a,b){a.a=b;return a}
function sr(){return br(this.a.a)}
function tr(){var a;return a=qf(cr(this.a.a),9),a.o()}
function or(){}
_=or.prototype=new lo();_.q=sr;_.s=tr;_.tI=0;_.a=null;function hs(a){a.a=ff(bg,0,0,0,0);a.b=0;return a}
function js(b,a){jf(b.a,b.b++,a);return true}
function is(c,a,b){if(a<0||a>c.b){kr(a,c.b)}c.a.splice(a,0,b);++c.b}
function ls(b,a){hr(a,b.b);return b.a[a]}
function ms(c,b,a){for(;a<c.b;++a){if(qt(b,c.a[a])){return a}}return -1}
function ns(a){return jf(this.a,this.b++,a),true}
function os(a){return ms(this,a,0)!=-1}
function ps(){return this.b}
function gs(){}
_=gs.prototype=new Cq();_.j=ns;_.k=os;_.z=ps;_.tI=42;_.a=null;_.b=0;function us(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function ws(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function ts(){}
_=ts.prototype=new tp();_.tI=43;function ys(a){a.a=us(new ts());return a}
function zs(c,a){var b;b=Aq(c.a,a,c);return b==null}
function Bs(b){var a;return a=Aq(this.a,b,this),a==null}
function Cs(a){return rq(this.a,a)}
function Ds(){var a;return a=wp(new vp(),Fr(this.a).b.a),pr(new or(),a)}
function Es(){return this.a.d}
function xs(){}
_=xs.prototype=new cs();_.j=Bs;_.k=Cs;_.r=Ds;_.z=Es;_.tI=44;_.a=null;function dt(b,a,c){b.a=a;b.b=c;return b}
function ft(){return this.a}
function gt(){return this.b}
function it(b){var a;a=this.b;this.b=b;return a}
function ct(){}
_=ct.prototype=new Ar();_.o=ft;_.p=gt;_.y=it;_.tI=45;_.a=null;_.b=null;function kt(){}
_=kt.prototype=new po();_.tI=46;function qt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function pn(){!!$stats&&$stats({moduleName:$moduleName,subSystem:wc,evtGroup:xc,millis:(new Date()).getTime(),type:yc,className:Ac});gn(new fn())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{pn()}catch(a){b(d)}else{pn()}}
function rt(){}
var ag=yn(Bc,Cc),bg=yn(Dc,Ec);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();