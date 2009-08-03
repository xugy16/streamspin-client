(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var F='',D=' ',vc=', Size: ',Cb='-',tb='0',ac='0px',tc=':',y='DOMMouseScroll',l='INPUT',uc='Index: ',sc='Login Screen',B='MouseEvents',Ec='Object;',Cc='Widget;',Bc='[Lcom.google.gwt.user.client.ui.',Dc='[Ljava.lang.',pc='absolute',lc='align',x='blur',pb='bottom',db='button',ub='cellPadding',sb='cellSpacing',mb='center',cb='change',C='className',nb='click',Ac='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',jb='div',v='error',dc='focus',eb='gwt-Button',lb='gwt-HTML',vb='gwt-Image',kb='gwt-Label',xb='gwt-ListBox',Bb='gwt-MenuBar',hc='gwt-PasswordTextBox',jc='gwt-TextArea',fc='gwt-TextBox',bc='hideFocus',Eb='horizontal',A='html',rc='images/daisy.gif',wb='img',nc='input',oc='keydown',zc='keypress',Fc='keyup',E='left',n='load',o='losecapture',Ab='menubar',qb='middle',xc='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',yc='onModuleLoadStart',Fb='outline',gc='password',bb='position',ob='right',zb='role',u='scroll',m='select',qc='someTest',wc='startup',fb='submit',hb='table',ib='tbody',kc='td',ec='text',ic='textarea',ab='top',rb='tr',cc='true',gb='type',Db='vertical',mc='verticalAlign';var _;function ip(a){return this===(a==null?null:a)}
function jp(){return this.$H||(this.$H=++qd)}
function gp(){}
_=gp.prototype={};_.eQ=ip;_.hC=jp;_.tM=mu;_.tI=1;function hd(b,a){return b.tM==mu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function jd(a){return a.tM==mu||a.tI==2?a.hC():a.$H||(a.$H=++qd)}
var qd=0;function Bd(){Bd=mu;vd();new td()}
function Dd(c){var a=$doc.createElement(l);a.type=c;return a}
function Ed(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function Fd(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function be(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function rd(){}
_=rd.prototype=new gp();_.tI=0;function Ad(){Ad=mu;Bd()}
function zd(){}
_=zd.prototype=new rd();_.tI=0;function xd(){xd=mu;Ad()}
function yd(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function sd(){}
_=sd.prototype=new zd();_.tI=0;function vd(){vd=mu;xd()}
function td(){}
_=td.prototype=new sd();_.tI=0;function Be(){}
_=Be.prototype=new gp();_.tI=0;function cf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function df(a,f,c,b,e){var d;d=cf(e,b);ef(a,f,c,d);return d}
function ef(b,d,c,a){if(!ff){ff=new Ee()}jf(a,ff);a.tI=d;a.qI=c;return a}
function gf(a,b,c){if(c!=null){if(a.qI>0&&!mf(c.tI,a.qI)){throw new no()}if(a.qI<0&&(c.tM==mu||c.tI==2)){throw new no()}}return a[b]=c}
function jf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Ee(){}
_=Ee.prototype=new gp();_.tI=0;_.length=0;_.qI=0;var ff=null;function nf(b,a){return b&&!!Bf[b][a]}
function mf(b,a){return b&&Bf[b][a]}
function of(b,a){if(b!=null&&!mf(b.tI,a)){throw new ro()}return b}
function Af(a){if(a!=null){throw new ro()}return a}
var Bf=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function qg(b,a,c){var d;if(a==vg){if(wh(b)==8192){vg=null}}d=pg;pg=b;try{c.t(b)}finally{pg=d}}
var pg=null,vg=null;function Bg(a){ah();if(!Cg){Cg=ct(new bt())}et(Cg,a)}
function Dg(){var a;if(Cg){for(a=Ar(new yr(),Cg);a.a<a.b.b;){of(Dr(a),3);ml()}}}
function Eg(){var a,b;b=null;if(Cg){for(a=Ar(new yr(),Cg);a.a<a.b.b;){of(Dr(a),3);b=null}}return b}
function ah(){if(!Fg){Fg=true;Eh()}}
var Cg=null,Fg=false;function wh(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case oc:return 128;case zc:return 256;case Fc:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function yh(){if(!Ah){nh();gh();Ah=true}}
function Bh(a){return a!=null&&nf(a.tI,4)&&!(a!=null&&(a.tM!=mu&&a.tI!=2))}
var Ah=false;function nh(){rh=function(b){if(qh(b)){var a=ph;if(a&&a.__listener){if(Bh(a.__listener)){qg(b,a,a.__listener);b.stopPropagation()}}}};qh=function(a){return true};sh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Bh(c)){qg(b,a,c)}}};$wnd.addEventListener(nb,rh,true);$wnd.addEventListener(yb,rh,true);$wnd.addEventListener(p,rh,true);$wnd.addEventListener(t,rh,true);$wnd.addEventListener(q,rh,true);$wnd.addEventListener(s,rh,true);$wnd.addEventListener(r,rh,true);$wnd.addEventListener(w,rh,true);$wnd.addEventListener(oc,qh,true);$wnd.addEventListener(Fc,qh,true);$wnd.addEventListener(zc,qh,true)}
function oh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?sh:null;if(b&2)c.ondblclick=a&2?sh:null;if(b&4)c.onmousedown=a&4?sh:null;if(b&8)c.onmouseup=a&8?sh:null;if(b&16)c.onmouseover=a&16?sh:null;if(b&32)c.onmouseout=a&32?sh:null;if(b&64)c.onmousemove=a&64?sh:null;if(b&128)c.onkeydown=a&128?sh:null;if(b&256)c.onkeypress=a&256?sh:null;if(b&512)c.onkeyup=a&512?sh:null;if(b&1024)c.onchange=a&1024?sh:null;if(b&2048)c.onfocus=a&2048?sh:null;if(b&4096)c.onblur=a&4096?sh:null;if(b&8192)c.onlosecapture=a&8192?sh:null;if(b&16384)c.onscroll=a&16384?sh:null;if(b&32768)c.onload=a&32768?sh:null;if(b&65536)c.onerror=a&65536?sh:null;if(b&131072)c.onmousewheel=a&131072?sh:null;if(b&262144)c.oncontextmenu=a&262144?sh:null}
var ph=null,qh=null,rh=null,sh=null;function gh(){$wnd.addEventListener(r,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(A==b.target.tagName.toLowerCase()){var c=$doc.createEvent(B);c.initMouseEvent(t,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(y,rh,true)}
function ih(b,a){yh();oh(b,a);hh(b,a)}
function hh(b,a){if(a&131072){b.addEventListener(y,sh,false)}}
function Eh(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=Eg()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{Dg()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function gm(b,a){mm(b.h,a,true)}
function im(b,a){if(b.h){jm(b.h,a)}b.h=a}
function jm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function lm(a){var b,c;b=a[C]==null?null:String(a[C]);c=b.indexOf(cq(32));if(c>=0){return b.substr(0,c-0)}return b}
function mm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new kp()}j=Ep(j);if(j.length==0){throw new Co()}i=c[C]==null?null:String(c[C]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=D}c[C]=i+j}}else{if(e!=-1){b=Ep(i.substr(0,e-0));d=Ep(Cp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+D+d}c[C]=h}}}
function fm(){}
_=fm.prototype=new gp();_.tI=7;_.h=null;function fn(a){if(a.f){throw new Fo()}a.f=true;a.h.__listener=a;a.l();a.v()}
function gn(a){if(!a.f){throw new Fo()}try{a.w()}finally{a.m();a.h.__listener=null;a.f=false}}
function hn(a){if(a.g){a.g.x(a)}else if(a.g){throw new Fo()}}
function jn(b,a){if(b.f){b.h.__listener=null}im(b,a);if(b.f){b.h.__listener=b}}
function kn(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.u()}c.g=null}else{if(a){throw new Fo()}c.g=b;if(b.f){fn(c)}}}
function ln(){}
function mn(){}
function nn(a){}
function on(){gn(this)}
function pn(){}
function qn(){}
function um(){}
_=um.prototype=new fm();_.l=ln;_.m=mn;_.t=nn;_.u=on;_.v=pn;_.w=qn;_.tI=8;_.f=false;_.g=null;function Ck(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=Am(b);fn(a)}}
function Dk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=Am(b);a.u()}}
function Ek(){}
function Fk(){}
function Ak(){}
_=Ak.prototype=new um();_.l=Ck;_.m=Dk;_.v=Ek;_.w=Fk;_.tI=9;function si(c,a,b){hn(a);Em(c.e,a);b.appendChild(a.h);kn(a,c)}
function ui(b,c){var a;if(c.g!=b){return false}kn(c,null);a=c.h;Fd((Bd(),a)).removeChild(a);dn(b.e,c);return true}
function vi(){return ym(new wm(),this.e)}
function wi(a){return ui(this,a)}
function qi(){}
_=qi.prototype=new Ak();_.r=vi;_.x=wi;_.tI=10;function ai(a,b){si(a,b,a.h)}
function ci(b,c){var a;a=ui(b,c);if(a){di(c.h)}return a}
function di(a){a.style[E]=F;a.style[ab]=F;a.style[bb]=F}
function ei(a){return ci(this,a)}
function Fh(){}
_=Fh.prototype=new qi();_.x=ei;_.tI=11;function Ci(){Ci=mu;Di=(En(),ao)}
function Bi(b,a){Ci();b.h=a;Di.y(b.h,0);return b}
function Ei(a){wh(a)}
function Ai(){}
_=Ai.prototype=new um();_.t=Ei;_.tI=12;var Di;function ii(){ii=mu;Ci()}
function hi(b,a){ii();b.h=a;Di.y(b.h,0);return b}
function gi(){}
_=gi.prototype=new Ai();_.tI=13;function li(){li=mu;ii()}
function ji(a){li();hi(a,$doc.createElement((Bd(),db)));mi(a.h);a.h[C]=eb;return a}
function ki(b,a){li();ji(b);b.h.innerHTML=a||F;return b}
function mi(b){if(b.type==fb){try{b.setAttribute(gb,db)}catch(a){}}}
function fi(){}
_=fi.prototype=new gi();_.tI=14;function oi(a){a.e=Dm(new vm());a.d=$doc.createElement((Bd(),hb));a.c=$doc.createElement(ib);a.d.appendChild(a.c);a.h=a.d;return a}
function ni(){}
_=ni.prototype=new qi();_.tI=15;_.c=null;_.d=null;function yi(){yi=mu;zi=(En(),Fn)}
var zi;function fk(a){a.h=$doc.createElement((Bd(),jb));a.h[C]=kb;return a}
function ik(a){wh(a)}
function ek(){}
_=ek.prototype=new um();_.t=ik;_.tI=16;function aj(a){a.h=$doc.createElement((Bd(),jb));a.h[C]=lb;return a}
function Fi(){}
_=Fi.prototype=new ek();_.tI=17;function jj(){jj=mu;hj(new gj(),mb);lj=hj(new gj(),E);hj(new gj(),ob);kj=lj}
var kj,lj;function hj(b,a){b.a=a;return b}
function gj(){}
_=gj.prototype=new gp();_.tI=0;_.a=null;function rj(){rj=mu;pj(new oj(),pb);pj(new oj(),qb);sj=pj(new oj(),ab)}
var sj;function pj(a,b){a.a=b;return a}
function oj(){}
_=oj.prototype=new gp();_.tI=0;_.a=null;function wj(a){oi(a);jj();rj();a.a=$doc.createElement((Bd(),rb));a.c.appendChild(a.a);a.d[sb]=tb;a.d[ub]=tb;return a}
function yj(c){var a,b;b=Fd((Bd(),c.h));a=ui(this,c);if(a){this.a.removeChild(b)}return a}
function vj(){}
_=vj.prototype=new ni();_.x=yj;_.tI=18;_.a=null;function bk(){bk=mu;kr(new ot())}
function ak(a,b){bk();Dj(new Cj(),a,b);a.h[C]=vb;return a}
function ck(a){wh(a)}
function zj(){}
_=zj.prototype=new um();_.t=ck;_.tI=19;function Aj(){}
_=Aj.prototype=new gp();_.tI=0;function Dj(b,a,c){jn(a,$doc.createElement((Bd(),wb)));ih(a.h,229501|(a.h.__eventBits||0));a.h.src=c;return b}
function Cj(){}
_=Cj.prototype=new Aj();_.tI=0;function mk(){mk=mu;Ci()}
function kk(a){mk();Bi(a,Ed((Bd(),false)));a.h[C]=xb;return a}
function nk(a){if(wh(a)==1024){}else{wh(a)}}
function jk(){}
_=jk.prototype=new Ai();_.t=nk;_.tI=20;function rk(a,b){ct(new bt());a.b=ct(new bt());uk(a,b,(xk(),new vk()));return a}
function tk(d,a){var b,c;for(c=Ar(new yr(),d.b);c.a<c.b.b;){b=Af(Dr(c));if(yd((Bd(),null.C()),a)){return b}}return null}
function uk(c,e){var a,b,d;b=$doc.createElement((Bd(),hb));c.a=$doc.createElement(ib);b.appendChild(c.a);if(!e){d=$doc.createElement(rb);c.a.appendChild(d)}a=yn((yi(),zi));a.appendChild(b);c.h=a;c.h.setAttribute(zb,Ab);ih(c.h,2225|(c.h.__eventBits||0));c.h[C]=Bb;if(e){gm(c,lm(c.h)+Cb+Db)}else{gm(c,lm(c.h)+Cb+Eb)}c.h.style[Fb]=ac;c.h.setAttribute(bc,cc)}
function yk(a){var b;tk(this,a.target);switch(wh(a)){case 1:{(yi(),this.h).firstChild.focus();break}{break}case 2048:{Af(gt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Af(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Af(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Af(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Af(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Af(gt(this.b,0))}}break}}}
function zk(){gn(this)}
function ok(){}
_=ok.prototype=new um();_.t=yk;_.u=zk;_.tI=21;_.a=null;function xk(){xk=mu}
function vk(){}
_=vk.prototype=new gp();_.tI=0;function am(){am=mu;Ci()}
function Fl(b,a){am();b.h=a;Di.y(b.h,0);return b}
function bm(a){var b;b=wh(a);if((b&896)!=0){wh(a)}else if(b==1024){}else{wh(a)}}
function El(){}
_=El.prototype=new Ai();_.t=bm;_.tI=22;function em(){em=mu;am()}
function cm(a){em();dm(a,Dd((Bd(),ec)),fc);return a}
function dm(c,a,b){em();c.h=a;Di.y(c.h,0);if(b!=null){c.h[C]=b}return c}
function Dl(){}
_=Dl.prototype=new El();_.tI=23;function cl(){cl=mu;em()}
function bl(a){cl();dm(a,Dd((Bd(),gc)),hc);return a}
function al(){}
_=al.prototype=new Dl();_.tI=24;function ll(){ll=mu;pl=pt(new ot());ql=tt(new st())}
function kl(b,a){ll();b.e=Dm(new vm());b.h=a;fn(b);return b}
function ml(){var b,a;ll();var c,d;for(d=(b=rq(new qq(),As(ql.a).b.a),ks(new js(),b));Cr(d.a.a);){c=of((a=of(Dr(d.a.a),9),a.o()),6);if(c.f){c.u()}}}
function ol(a){ll();var b;b=of(pr(pl,a),5);if(b){return b}if(pl.d==0){Bg(new fl())}b=il(new hl());vr(pl,a,b);ut(ql,b);return b}
function el(){}
_=el.prototype=new Fh();_.tI=25;var pl,ql;function fl(){}
_=fl.prototype=new gp();_.tI=26;function jl(){jl=mu;ll()}
function il(a){jl();kl(a,$doc.body);return a}
function hl(){}
_=hl.prototype=new el();_.tI=27;function Cl(){Cl=mu;am()}
function Bl(a){Cl();Fl(a,$doc.createElement((Bd(),ic)));a.h[C]=jc;return a}
function Al(){}
_=Al.prototype=new El();_.tI=28;function pm(a){oi(a);a.a=(jj(),kj);a.b=(rj(),sj);a.d[sb]=tb;a.d[ub]=tb;return a}
function qm(c,e){var b,d,a;d=$doc.createElement((Bd(),rb));b=(a=$doc.createElement(kc),(a[lc]=c.a.a,undefined),(a.style[mc]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);hn(e);Em(c.e,e);b.appendChild(e.h);kn(e,c)}
function tm(c){var a,b;b=Fd((Bd(),c.h));a=ui(this,c);if(a){this.c.removeChild(Fd(b))}return a}
function nm(){}
_=nm.prototype=new ni();_.x=tm;_.tI=29;function Dm(a){a.a=df(Ef,0,6,4,0);return a}
function Em(a,b){bn(a,b,a.b)}
function an(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function bn(d,e,a){var b,c;if(a<0||a>d.b){throw new cp()}if(d.b==d.a.length){c=df(Ef,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){gf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){gf(d.a,b,d.a[b-1])}gf(d.a,a,e)}
function cn(c,b){var a;if(b<0||b>=c.b){throw new cp()}--c.b;for(a=b;a<c.b;++a){gf(c.a,a,c.a[a+1])}gf(c.a,c.b,null)}
function dn(b,c){var a;a=an(b,c);if(a==-1){throw new fu()}cn(b,a)}
function vm(){}
_=vm.prototype=new gp();_.tI=0;_.a=null;_.b=0;function ym(b,a){b.b=a;return b}
function Am(a){if(a.a>=a.b.b){throw new fu()}return a.b.a[++a.a]}
function Bm(){return this.a<this.b.b-1}
function Cm(){return Am(this)}
function wm(){}
_=wm.prototype=new gp();_.q=Bm;_.s=Cm;_.tI=0;_.a=-1;_.b=null;function En(){En=mu;Fn=un(new sn());ao=Fn?(En(),new rn()):Fn}
function bo(a,b){a.tabIndex=b}
function rn(){}
_=rn.prototype=new gp();_.y=bo;_.tI=0;var Fn,ao;function vn(){vn=mu;En()}
function un(a){vn();a.a=wn();a.b=xn();a.c=zn();return a}
function wn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function xn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function yn(c){var a=$doc.createElement(jb);var b=c.k();b.addEventListener(x,c.a,false);b.addEventListener(dc,c.b,false);a.addEventListener(p,c.c,false);a.appendChild(b);return a}
function zn(){return function(){this.firstChild.focus()}}
function Bn(){var a=$doc.createElement(nc);a.type=ec;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=pc;return a}
function Cn(a,b){a.firstChild.tabIndex=b}
function sn(){}
_=sn.prototype=new rn();_.k=Bn;_.y=Cn;_.tI=0;function co(){}
_=co.prototype=new Be();_.tI=0;function fo(a){pm(new nm());wj(new vj());pm(new nm());kk(new jk());Bl(new Al());rk(new ok(),false);ki(new fi(),qc);fk(new ek());a.e=aj(new Fi());a.b=pm(new nm());a.d=cm(new Dl());a.c=bl(new al());a.a=ji(new fi());ak(new zj(),$moduleBase+rc);be((Bd(),a.e.h),sc);qm(a.b,a.e);qm(a.b,a.d);qm(a.b,a.c);qm(a.b,a.a);ai((ll(),ol(null)),a.b);return a}
function eo(){}
_=eo.prototype=new co();_.tI=0;function eq(){}
_=eq.prototype=new gp();_.tI=3;function Ao(){}
_=Ao.prototype=new eq();_.tI=4;function kp(){}
_=kp.prototype=new Ao();_.tI=5;function no(){}
_=no.prototype=new kp();_.tI=31;function uo(c,a){var b;b=new qo();return b}
function qo(){}
_=qo.prototype=new gp();_.tI=0;function ro(){}
_=ro.prototype=new kp();_.tI=34;function Co(){}
_=Co.prototype=new kp();_.tI=35;function Fo(){}
_=Fo.prototype=new kp();_.tI=36;function dp(b,a){return b}
function cp(){}
_=cp.prototype=new kp();_.tI=37;function yp(b,a){if(!(a!=null&&nf(a.tI,1))){return false}return String(b)==a}
function Cp(b,a){return b.substr(a,b.length-a)}
function Ep(c){if(c.length==0||c[0]>D&&c[c.length-1]>D){return c}var a=c.replace(/^(\s*)/,F);var b=a.replace(/\s*$/,F);return b}
function aq(a){return yp(this,a)}
function cq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function dq(){return up(this)}
_=String.prototype;_.eQ=aq;_.hC=dq;_.tI=2;function pp(){pp=mu;qp={};tp={}}
function rp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function up(c){pp();var a=tc+c;var b=tp[a];if(b!=null){return b}b=qp[a];if(b==null){b=rp(c)}vp();return tp[a]=b}
function vp(){if(sp==256){qp=tp;tp={};sp=0}++sp}
var qp,sp=0,tp;function gq(){}
_=gq.prototype=new kp();_.tI=38;function kq(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:hd(b,c)){return a}}return null}
function mq(a){throw new gq()}
function nq(b){var a;a=kq(this.r(),b);return !!a}
function jq(){}
_=jq.prototype=new gp();_.i=mq;_.j=nq;_.tI=0;function As(b){var a;a=vq(new pq(),b);return ps(new is(),b,a)}
function Bs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&nf(c.tI,11))){return false}e=of(c,11);if(of(this,11).d!=e.d){return false}for(b=rq(new qq(),vq(new pq(),e).a);Cr(b.a);){a=of(Dr(b.a),9);d=a.o();f=a.p();if(!(d==null?of(this,11).c:d!=null&&nf(d.tI,1)?rr(of(this,11),of(d,1)):qr(of(this,11),d,~~jd(d)))){return false}if(!lu(f,d==null?of(this,11).b:d!=null&&nf(d.tI,1)?of(this,11).e[tc+of(d,1)]:nr(of(this,11),d,~~jd(d)))){return false}}return true}
function Cs(){var a,b,c;c=0;for(b=rq(new qq(),vq(new pq(),of(this,11)).a);Cr(b.a);){a=of(Dr(b.a),9);c+=a.hC();c=~~c}return c}
function hs(){}
_=hs.prototype=new gp();_.eQ=Bs;_.hC=Cs;_.tI=0;function ir(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.i(a[f])}}}}
function jr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=gr(e,c.substring(1));a.i(b)}}}
function kr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function mr(b,a){return a==null?b.c:a!=null&&nf(a.tI,1)?rr(b,of(a,1)):qr(b,a,~~jd(a))}
function pr(b,a){return a==null?b.b:a!=null&&nf(a.tI,1)?b.e[tc+of(a,1)]:nr(b,a,~~jd(a))}
function nr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function qr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function rr(b,a){return tc+a in b.e}
function vr(b,a,c){return a==null?tr(b,c):a!=null&&nf(a.tI,1)?ur(b,of(a,1),c):sr(b,a,c,~~jd(a))}
function sr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.z(j);return h}}}else{a=i.a[e]=[]}var c=Et(new Dt(),g,j);a.push(c);++i.d;return null}
function tr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ur(d,a,e){var b,c=d.e;a=tc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function wr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function oq(){}
_=oq.prototype=new hs();_.n=wr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&nf(b.tI,12))){return false}c=of(b,12);if(c.A()!=this.A()){return false}for(a=c.r();a.q();){d=a.s();if(!this.j(d)){return false}}return true}
function at(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=jd(c);a=~~a}}return a}
function Ds(){}
_=Ds.prototype=new jq();_.eQ=Fs;_.hC=at;_.tI=39;function vq(b,a){b.a=a;return b}
function xq(d,c){var a,b,e;if(c!=null&&nf(c.tI,9)){a=of(c,9);b=a.o();if(mr(d.a,b)){e=pr(d.a,b);return rt(a.p(),e)}}return false}
function yq(a){return xq(this,a)}
function zq(){return rq(new qq(),this.a)}
function Aq(){return this.a.d}
function pq(){}
_=pq.prototype=new Ds();_.j=yq;_.r=zq;_.A=Aq;_.tI=40;_.a=null;function rq(c,b){var a;c.b=b;a=ct(new bt());if(c.b.c){et(a,Cq(new Bq(),c.b))}jr(c.b,a);ir(c.b,a);c.a=Ar(new yr(),a);return c}
function tq(){return Cr(this.a)}
function uq(){return of(Dr(this.a),9)}
function qq(){}
_=qq.prototype=new gp();_.q=tq;_.s=uq;_.tI=0;_.a=null;_.b=null;function xs(b){var a;if(b!=null&&nf(b.tI,9)){a=of(b,9);if(lu(this.o(),a.o())&&lu(this.p(),a.p())){return true}}return false}
function ys(){var a,b;a=0;b=0;if(this.o()!=null){a=jd(this.o())}if(this.p()!=null){b=jd(this.p())}return a^b}
function vs(){}
_=vs.prototype=new gp();_.eQ=xs;_.hC=ys;_.tI=41;function Cq(b,a){b.a=a;return b}
function Eq(){return null}
function Fq(){return this.a.b}
function ar(a){return tr(this.a,a)}
function Bq(){}
_=Bq.prototype=new vs();_.o=Eq;_.p=Fq;_.z=ar;_.tI=42;_.a=null;function cr(c,a,b){c.b=b;c.a=a;return c}
function er(){return this.a}
function fr(){return this.b.e[tc+this.a]}
function gr(b,a){return cr(new br(),a,b)}
function hr(a){return ur(this.b,this.a,a)}
function br(){}
_=br.prototype=new vs();_.o=er;_.p=fr;_.z=hr;_.tI=43;_.a=null;_.b=null;function bs(a){dt(this,this.A(),a);return true}
function cs(a,b){if(a<0||a>=b){fs(a,b)}}
function ds(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&nf(e.tI,10))){return false}f=of(e,10);if(this.A()!=f.b){return false}c=Ar(new yr(),this);d=Ar(new yr(),f);while(c.a<c.b.b){a=Dr(c);b=Dr(d);if(!(a==null?b==null:hd(a,b))){return false}}return true}
function es(){var a,b,c;b=1;a=Ar(new yr(),this);while(a.a<a.b.b){c=Dr(a);b=31*b+(c==null?0:jd(c));b=~~b}return b}
function fs(a,b){throw dp(new cp(),uc+a+vc+b)}
function gs(){return Ar(new yr(),this)}
function xr(){}
_=xr.prototype=new jq();_.i=bs;_.eQ=ds;_.hC=es;_.r=gs;_.tI=0;function Ar(b,a){b.b=a;return b}
function Cr(a){return a.a<a.b.b}
function Dr(a){if(a.a>=a.b.b){throw new fu()}return gt(a.b,a.a++)}
function Er(){return this.a<this.b.b}
function Fr(){return Dr(this)}
function yr(){}
_=yr.prototype=new gp();_.q=Er;_.s=Fr;_.tI=0;_.a=0;_.b=null;function ps(b,a,c){b.a=a;b.b=c;return b}
function ss(a){return mr(this.a,a)}
function ts(){var a;return a=rq(new qq(),this.b.a),ks(new js(),a)}
function us(){return this.b.a.d}
function is(){}
_=is.prototype=new Ds();_.j=ss;_.r=ts;_.A=us;_.tI=44;_.a=null;_.b=null;function ks(a,b){a.a=b;return a}
function ns(){return Cr(this.a.a)}
function os(){var a;return a=of(Dr(this.a.a),9),a.o()}
function js(){}
_=js.prototype=new gp();_.q=ns;_.s=os;_.tI=0;_.a=null;function ct(a){a.a=df(Ff,0,0,0,0);a.b=0;return a}
function et(b,a){gf(b.a,b.b++,a);return true}
function dt(c,a,b){if(a<0||a>c.b){fs(a,c.b)}c.a.splice(a,0,b);++c.b}
function gt(b,a){cs(a,b.b);return b.a[a]}
function ht(c,b,a){for(;a<c.b;++a){if(lu(b,c.a[a])){return a}}return -1}
function it(a){return gf(this.a,this.b++,a),true}
function jt(a){return ht(this,a,0)!=-1}
function kt(){return this.b}
function bt(){}
_=bt.prototype=new xr();_.i=it;_.j=jt;_.A=kt;_.tI=45;_.a=null;_.b=0;function pt(a){kr(a);return a}
function rt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function ot(){}
_=ot.prototype=new oq();_.tI=46;function tt(a){a.a=pt(new ot());return a}
function ut(c,a){var b;b=vr(c.a,a,c);return b==null}
function wt(b){var a;return a=vr(this.a,b,this),a==null}
function xt(a){return mr(this.a,a)}
function yt(){var a;return a=rq(new qq(),As(this.a).b.a),ks(new js(),a)}
function zt(){return this.a.d}
function st(){}
_=st.prototype=new Ds();_.i=wt;_.j=xt;_.r=yt;_.A=zt;_.tI=47;_.a=null;function Et(b,a,c){b.a=a;b.b=c;return b}
function au(){return this.a}
function bu(){return this.b}
function du(b){var a;a=this.b;this.b=b;return a}
function Dt(){}
_=Dt.prototype=new vs();_.o=au;_.p=bu;_.z=du;_.tI=48;_.a=null;_.b=null;function fu(){}
_=fu.prototype=new kp();_.tI=49;function lu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function lo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:wc,evtGroup:xc,millis:(new Date()).getTime(),type:yc,className:Ac});fo(new eo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lo()}catch(a){b(d)}else{lo()}}
function mu(){}
var Ef=uo(Bc,Cc),Ff=uo(Dc,Ec);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();