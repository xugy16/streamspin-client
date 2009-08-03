(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var cb='',ab=' ',l='#',cd=', Size: ',ec='-',x='/',vb='0',ic='0px',Ac='100%',Ec='100px',ad=':',m='?',Fb='DIV',B='DOMMouseScroll',bd='Index: ',vc='Item four',sc='Item one',xc='Item six',wc='Item that has a long title and is number five',uc='Item tree',tc='Item two',E='MouseEvents',ld='Object;',Fc='Status: <b>Online<\/b>',Cc='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',jd='Widget;',id='[Lcom.google.gwt.user.client.ui.',kd='[Ljava.lang.',zb='align',yb='blur',rb='bottom',fb='button',wb='cellPadding',ub='cellSpacing',pb='center',dc='change',F='className',oc='click',hd='com.streamspin.client.StreamSpinClient',C='contextmenu',zc='dblclick',lb='div',z='error',ed='focus',gb='gwt-Button',ob='gwt-HTML',Bb='gwt-Image',mb='gwt-Label',Db='gwt-ListBox',cc='gwt-MenuBar',mc='gwt-TextArea',Dc='height',jc='hideFocus',gc='horizontal',qc='hostBaseURL',D='html',Cb='img',n='keydown',o='keypress',p='keyup',bb='left',q='load',r='losecapture',bc='menubar',sb='middle',pc='moduleBaseURL',fd='moduleStartup',s='mousedown',t='mousemove',u='mouseout',v='mouseover',w='mouseup',A='mousewheel',gd='onModuleLoadStart',Eb='option',hc='outline',eb='position',qb='right',ac='role',y='scroll',nb='select',nc='someTest',dd='startup',hb='submit',jb='table',kb='tbody',xb='td',lc='textarea',rc='title of Main Window',db='top',tb='tr',kc='true',ib='type',Bc='value',fc='vertical',Ab='verticalAlign',yc='width';var _;function mp(a){return this===(a==null?null:a)}
function np(){return this.$H||(this.$H=++Dd)}
function kp(){}
_=kp.prototype={};_.eQ=mp;_.hC=np;_.tM=qu;_.tI=1;function td(b,a){return b.tM==qu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function vd(a){return a.tM==qu||a.tI==2?a.hC():a.$H||(a.$H=++Dd)}
function Ad(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(x);if(a!=-1)b=b.substring(0,a);return b.length>0?b+x:cb}
var Dd=0;function fe(){fe=qu;be();new Fd()}
function he(a){var b;b=$doc.createElement(nb);if(a){b.multiple=true}return b}
function ie(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ne(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Ed(){}
_=Ed.prototype=new kp();_.tI=0;function ee(){ee=qu;fe()}
function de(){}
_=de.prototype=new Ed();_.tI=0;function be(){be=qu;ee()}
function ce(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Fd(){}
_=Fd.prototype=new de();_.tI=0;function qf(){}
_=qf.prototype=new kp();_.tI=0;function xf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function yf(a,f,c,b,e){var d;d=xf(e,b);zf(a,f,c,d);return d}
function zf(b,d,c,a){if(!Af){Af=new tf()}Df(a,Af);a.tI=d;a.qI=c;return a}
function Bf(a,b,c){if(c!=null){if(a.qI>0&&!ag(c.tI,a.qI)){throw new ro()}if(a.qI<0&&(c.tM==qu||c.tI==2)){throw new ro()}}return a[b]=c}
function Df(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function tf(){}
_=tf.prototype=new kp();_.tI=0;_.length=0;_.qI=0;var Af=null;function bg(b,a){return b&&!!pg[b][a]}
function ag(b,a){return b&&pg[b][a]}
function cg(b,a){if(b!=null&&!ag(b.tI,a)){throw new vo()}return b}
function og(a){if(a!=null){throw new vo()}return a}
var pg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function eh(b,a,c){var d;if(a==jh){if(ki(b)==8192){jh=null}}d=dh;dh=b;try{c.v(b)}finally{dh=d}}
var dh=null,jh=null;function ph(a){uh();if(!qh){qh=gt(new ft())}it(qh,a)}
function rh(){var a;if(qh){for(a=Er(new Cr(),qh);a.a<a.b.b;){cg(bs(a),3);El()}}}
function sh(){var a,b;b=null;if(qh){for(a=Er(new Cr(),qh);a.a<a.b.b;){cg(bs(a),3);b=null}}return b}
function uh(){if(!th){th=true;si()}}
var qh=null,th=false;function ki(a){switch(a.type){case yb:return 4096;case dc:return 1024;case oc:return 1;case zc:return 2;case ed:return 2048;case n:return 128;case o:return 256;case p:return 512;case q:return 32768;case r:return 8192;case s:return 4;case t:return 64;case u:return 32;case v:return 16;case w:return 8;case y:return 16384;case z:return 65536;case A:return 131072;case B:return 131072;case C:return 262144;}}
function mi(){if(!oi){bi();Ah();oi=true}}
function pi(a){return a!=null&&bg(a.tI,4)&&!(a!=null&&(a.tM!=qu&&a.tI!=2))}
var oi=false;function bi(){fi=function(b){if(ei(b)){var a=di;if(a&&a.__listener){if(pi(a.__listener)){eh(b,a,a.__listener);b.stopPropagation()}}}};ei=function(a){return true};gi=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(pi(c)){eh(b,a,c)}}};$wnd.addEventListener(oc,fi,true);$wnd.addEventListener(zc,fi,true);$wnd.addEventListener(s,fi,true);$wnd.addEventListener(w,fi,true);$wnd.addEventListener(t,fi,true);$wnd.addEventListener(v,fi,true);$wnd.addEventListener(u,fi,true);$wnd.addEventListener(A,fi,true);$wnd.addEventListener(n,ei,true);$wnd.addEventListener(p,ei,true);$wnd.addEventListener(o,ei,true)}
function ci(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?gi:null;if(b&2)c.ondblclick=a&2?gi:null;if(b&4)c.onmousedown=a&4?gi:null;if(b&8)c.onmouseup=a&8?gi:null;if(b&16)c.onmouseover=a&16?gi:null;if(b&32)c.onmouseout=a&32?gi:null;if(b&64)c.onmousemove=a&64?gi:null;if(b&128)c.onkeydown=a&128?gi:null;if(b&256)c.onkeypress=a&256?gi:null;if(b&512)c.onkeyup=a&512?gi:null;if(b&1024)c.onchange=a&1024?gi:null;if(b&2048)c.onfocus=a&2048?gi:null;if(b&4096)c.onblur=a&4096?gi:null;if(b&8192)c.onlosecapture=a&8192?gi:null;if(b&16384)c.onscroll=a&16384?gi:null;if(b&32768)c.onload=a&32768?gi:null;if(b&65536)c.onerror=a&65536?gi:null;if(b&131072)c.onmousewheel=a&131072?gi:null;if(b&262144)c.oncontextmenu=a&262144?gi:null}
var di=null,ei=null,fi=null,gi=null;function Ah(){$wnd.addEventListener(u,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(D==b.target.tagName.toLowerCase()){var c=$doc.createEvent(E);c.initMouseEvent(w,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(B,fi,true)}
function Ch(b,a){mi();ci(b,a);Bh(b,a)}
function Bh(b,a){if(a&131072){b.addEventListener(B,gi,false)}}
function si(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=sh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{rh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function tm(b,a){Bm(b.i,a,true)}
function vm(b,a){if(b.i){wm(b.i,a)}b.i=a}
function wm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function Am(a){var b,c;b=a[F]==null?null:String(a[F]);c=b.indexOf(gq(32));if(c>=0){return b.substr(0,c-0)}return b}
function Bm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new op()}j=cq(j);if(j.length==0){throw new ap()}i=c[F]==null?null:String(c[F]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=ab}c[F]=i+j}}else{if(e!=-1){b=cq(i.substr(0,e-0));d=cq(aq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+ab+d}c[F]=h}}}
function sm(){}
_=sm.prototype=new kp();_.tI=7;_.i=null;function vn(a){if(a.g){throw new dp()}a.g=true;a.i.__listener=a;a.n();a.x()}
function wn(a){if(!a.g){throw new dp()}try{a.y()}finally{a.o();a.i.__listener=null;a.g=false}}
function xn(a){if(a.h){a.h.z(a)}else if(a.h){throw new dp()}}
function yn(b,a){if(b.g){b.i.__listener=null}vm(b,a);if(b.g){b.i.__listener=b}}
function zn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.w()}c.h=null}else{if(a){throw new dp()}c.h=b;if(b.g){vn(c)}}}
function An(){}
function Bn(){}
function Cn(a){}
function Dn(){wn(this)}
function En(){}
function Fn(){}
function dn(){}
_=dn.prototype=new sm();_.n=An;_.o=Bn;_.v=Cn;_.w=Dn;_.x=En;_.y=Fn;_.tI=8;_.g=false;_.h=null;function rl(){var a,b;for(b=this.t();b.a<b.b.b-1;){a=kn(b);vn(a)}}
function sl(){var a,b;for(b=this.t();b.a<b.b.b-1;){a=kn(b);a.w()}}
function tl(){}
function ul(){}
function pl(){}
_=pl.prototype=new dn();_.n=rl;_.o=sl;_.x=tl;_.y=ul;_.tI=9;function gj(c,a,b){xn(a);on(c.f,a);b.appendChild(a.i);zn(a,c)}
function ij(b,c){var a;if(c.h!=b){return false}zn(c,null);a=c.i;ie((fe(),a)).removeChild(a);tn(b.f,c);return true}
function jj(){return hn(new fn(),this.f)}
function kj(a){return ij(this,a)}
function ej(){}
_=ej.prototype=new pl();_.t=jj;_.z=kj;_.tI=10;function ui(a,b){gj(a,b,a.i)}
function wi(b,c){var a;a=ij(b,c);if(a){xi(c.i)}return a}
function xi(a){a.style[bb]=cb;a.style[db]=cb;a.style[eb]=cb}
function yi(a){return wi(this,a)}
function ti(){}
_=ti.prototype=new ej();_.z=yi;_.tI=11;function mj(b,a){b.i=a;b.i.tabIndex=0;return b}
function oj(a){ki(a)}
function lj(){}
_=lj.prototype=new dn();_.v=oj;_.tI=12;function Bi(b,a){b.i=a;b.i.tabIndex=0;return b}
function Ai(){}
_=Ai.prototype=new lj();_.tI=13;function Ei(b,a){Bi(b,$doc.createElement((fe(),fb)));aj(b.i);b.i[F]=gb;b.i.innerHTML=a||cb;return b}
function aj(b){if(b.type==hb){try{b.setAttribute(ib,fb)}catch(a){}}}
function zi(){}
_=zi.prototype=new Ai();_.tI=14;function cj(a){a.f=nn(new en());a.e=$doc.createElement((fe(),jb));a.d=$doc.createElement(kb);a.e.appendChild(a.d);a.i=a.e;return a}
function bj(){}
_=bj.prototype=new ej();_.tI=15;_.d=null;_.e=null;function yk(a){a.i=$doc.createElement((fe(),lb));a.i[F]=mb;return a}
function Bk(a){ki(a)}
function xk(){}
_=xk.prototype=new dn();_.v=Bk;_.tI=16;function qj(a){a.i=$doc.createElement((fe(),lb));a.i[F]=ob;return a}
function pj(){}
_=pj.prototype=new xk();_.tI=17;function zj(){zj=qu;xj(new wj(),pb);Bj=xj(new wj(),bb);xj(new wj(),qb);Aj=Bj}
var Aj,Bj;function xj(b,a){b.a=a;return b}
function wj(){}
_=wj.prototype=new kp();_.tI=0;_.a=null;function bk(){bk=qu;Fj(new Ej(),rb);Fj(new Ej(),sb);ck=Fj(new Ej(),db)}
var ck;function Fj(a,b){a.a=b;return a}
function Ej(){}
_=Ej.prototype=new kp();_.tI=0;_.a=null;function hk(a){cj(a);a.a=(zj(),Aj);a.c=(bk(),ck);a.b=$doc.createElement((fe(),tb));a.d.appendChild(a.b);a.e[ub]=vb;a.e[wb]=vb;return a}
function ik(c,d){var b,a;b=(a=$doc.createElement((fe(),xb)),(a[zb]=c.a.a,undefined),(a.style[Ab]=c.c.a,undefined),a);c.b.appendChild(b);xn(d);on(c.f,d);b.appendChild(d.i);zn(d,c)}
function lk(c){var a,b;b=ie((fe(),c.i));a=ij(this,c);if(a){this.b.removeChild(b)}return a}
function fk(){}
_=fk.prototype=new bj();_.z=lk;_.tI=18;_.b=null;function uk(){uk=qu;or(new st())}
function tk(a,b){uk();qk(new pk(),a,b);a.i[F]=Bb;return a}
function vk(a){ki(a)}
function mk(){}
_=mk.prototype=new dn();_.v=vk;_.tI=19;function nk(){}
_=nk.prototype=new kp();_.tI=0;function qk(b,a,c){yn(a,$doc.createElement((fe(),Cb)));Ch(a.i,229501|(a.i.__eventBits||0));a.i.src=c;return b}
function pk(){}
_=pk.prototype=new nk();_.tI=0;function Dk(a){mj(a,he((fe(),false)));a.i[F]=Db;return a}
function al(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((fe(),Eb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function cl(a){if(ki(a)==1024){}else{ki(a)}}
function Ck(){}
_=Ck.prototype=new lj();_.v=cl;_.tI=20;function gl(a){gt(new ft());a.b=gt(new ft());jl(a,false,(ml(),new kl()));return a}
function il(d,a){var b,c;for(c=Er(new Cr(),d.b);c.a<c.b.b;){b=og(bs(c));if(ce((fe(),null.D()),a)){return b}}return null}
function jl(d,f){var b,c,e,a;c=$doc.createElement((fe(),jb));d.a=$doc.createElement(kb);c.appendChild(d.a);if(!f){e=$doc.createElement(tb);d.a.appendChild(e)}b=(a=$doc.createElement(Fb),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(ac,bc);Ch(d.i,2225|(d.i.__eventBits||0));d.i[F]=cc;if(f){tm(d,Am(d.i)+ec+fc)}else{tm(d,Am(d.i)+ec+gc)}d.i.style[hc]=ic;d.i.setAttribute(jc,kc)}
function nl(a){var b;il(this,a.target);switch(ki(a)){case 1:{this.i.focus();break}{break}case 2048:{og(kt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{og(kt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{og(kt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:og(kt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:og(kt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{og(kt(this.b,0))}}break}}}
function ol(){wn(this)}
function dl(){}
_=dl.prototype=new dn();_.v=nl;_.w=ol;_.tI=21;_.a=null;function ml(){ml=qu}
function kl(){}
_=kl.prototype=new kp();_.tI=0;function Dl(){Dl=qu;bm=tt(new st());cm=xt(new wt())}
function Cl(b,a){Dl();b.f=nn(new en());b.i=a;vn(b);return b}
function El(){var b,a;Dl();var c,d;for(d=(b=vq(new uq(),Es(cm.a).b.a),os(new ns(),b));as(d.a.a);){c=cg((a=cg(bs(d.a.a),9),a.q()),6);if(c.g){c.w()}}}
function am(a){Dl();var b;b=cg(tr(bm,a),5);if(b){return b}if(bm.d==0){ph(new xl())}b=Al(new zl());zr(bm,a,b);yt(cm,b);return b}
function wl(){}
_=wl.prototype=new ti();_.tI=22;var bm,cm;function xl(){}
_=xl.prototype=new kp();_.tI=23;function Bl(){Bl=qu;Dl()}
function Al(a){Bl();Cl(a,$doc.body);return a}
function zl(){}
_=zl.prototype=new wl();_.tI=24;function om(b,a){b.i=a;b.i.tabIndex=0;return b}
function rm(a){var b;b=ki(a);if((b&896)!=0){ki(a)}else if(b==1024){}else{ki(a)}}
function nm(){}
_=nm.prototype=new lj();_.v=rm;_.tI=25;function lm(a){om(a,$doc.createElement((fe(),lc)));a.i[F]=mc;return a}
function km(){}
_=km.prototype=new nm();_.tI=26;function Em(a){cj(a);a.a=(zj(),Aj);a.b=(bk(),ck);a.e[ub]=vb;a.e[wb]=vb;return a}
function Fm(c,e){var b,d,a;d=$doc.createElement((fe(),tb));b=(a=$doc.createElement(xb),(a[zb]=c.a.a,undefined),(a.style[Ab]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);xn(e);on(c.f,e);b.appendChild(e.i);zn(e,c)}
function cn(c){var a,b;b=ie((fe(),c.i));a=ij(this,c);if(a){this.d.removeChild(ie(b))}return a}
function Cm(){}
_=Cm.prototype=new bj();_.z=cn;_.tI=27;function nn(a){a.a=yf(sg,0,6,4,0);return a}
function on(a,b){rn(a,b,a.b)}
function qn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function rn(d,e,a){var b,c;if(a<0||a>d.b){throw new gp()}if(d.b==d.a.length){c=yf(sg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){Bf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Bf(d.a,b,d.a[b-1])}Bf(d.a,a,e)}
function sn(c,b){var a;if(b<0||b>=c.b){throw new gp()}--c.b;for(a=b;a<c.b;++a){Bf(c.a,a,c.a[a+1])}Bf(c.a,c.b,null)}
function tn(b,c){var a;a=qn(b,c);if(a==-1){throw new ju()}sn(b,a)}
function en(){}
_=en.prototype=new kp();_.tI=0;_.a=null;_.b=0;function hn(b,a){b.b=a;return b}
function kn(a){if(a.a>=a.b.b){throw new ju()}return a.b.a[++a.a]}
function ln(){return this.a<this.b.b-1}
function mn(){return kn(this)}
function fn(){}
_=fn.prototype=new kp();_.s=ln;_.u=mn;_.tI=0;_.a=-1;_.b=null;function go(){}
_=go.prototype=new qf();_.tI=0;function io(a){a.d=Em(new Cm());a.c=hk(new fk());a.h=Em(new Cm());a.g=Dk(new Ck());a.a=lm(new km());a.e=gl(new dl());a.b=Ei(new zi(),nc);a.f=yk(new xk());a.k=qj(new pj());a.i=tk(new mk(),$moduleBase+pc);a.j=tk(new mk(),Ad()+qc);ne((fe(),a.k.i),rc);al(a.g,sc,sc,-1);al(a.g,tc,tc,-1);al(a.g,uc,uc,-1);al(a.g,vc,vc,-1);al(a.g,wc,wc,-1);al(a.g,xc,xc,-1);a.g.i.size=3;a.g.i.style[yc]=Ac;a.a.i[Bc]=Cc!=null?Cc:cb;a.a.i.style[yc]=Ac;Fm(a.h,a.g);Fm(a.h,a.a);a.h.i.style[Dc]=Ec;a.h.i.style[yc]=Ac;a.f.i.innerHTML=Fc;ik(a.c,a.b);ik(a.c,a.e);Fm(a.d,a.k);Fm(a.d,a.h);Fm(a.d,a.i);Fm(a.d,a.j);Fm(a.d,a.f);Fm(a.d,a.c);a.d.i.style[Dc]=Ac;a.d.i.style[yc]=Ac;ui((Dl(),am(null)),a.d);return a}
function ho(){}
_=ho.prototype=new go();_.tI=0;function iq(){}
_=iq.prototype=new kp();_.tI=3;function Eo(){}
_=Eo.prototype=new iq();_.tI=4;function op(){}
_=op.prototype=new Eo();_.tI=5;function ro(){}
_=ro.prototype=new op();_.tI=29;function yo(c,a){var b;b=new uo();return b}
function uo(){}
_=uo.prototype=new kp();_.tI=0;function vo(){}
_=vo.prototype=new op();_.tI=32;function ap(){}
_=ap.prototype=new op();_.tI=33;function dp(){}
_=dp.prototype=new op();_.tI=34;function hp(b,a){return b}
function gp(){}
_=gp.prototype=new op();_.tI=35;function Cp(b,a){if(!(a!=null&&bg(a.tI,1))){return false}return String(b)==a}
function aq(b,a){return b.substr(a,b.length-a)}
function cq(c){if(c.length==0||c[0]>ab&&c[c.length-1]>ab){return c}var a=c.replace(/^(\s*)/,cb);var b=a.replace(/\s*$/,cb);return b}
function eq(a){return Cp(this,a)}
function gq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function hq(){return yp(this)}
_=String.prototype;_.eQ=eq;_.hC=hq;_.tI=2;function tp(){tp=qu;up={};xp={}}
function vp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function yp(c){tp();var a=ad+c;var b=xp[a];if(b!=null){return b}b=up[a];if(b==null){b=vp(c)}zp();return xp[a]=b}
function zp(){if(wp==256){up=xp;xp={};wp=0}++wp}
var up,wp=0,xp;function kq(){}
_=kq.prototype=new op();_.tI=36;function oq(a,b){var c;while(a.s()){c=a.u();if(b==null?c==null:td(b,c)){return a}}return null}
function qq(a){throw new kq()}
function rq(b){var a;a=oq(this.t(),b);return !!a}
function nq(){}
_=nq.prototype=new kp();_.l=qq;_.m=rq;_.tI=0;function Es(b){var a;a=zq(new tq(),b);return ts(new ms(),b,a)}
function Fs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&bg(c.tI,11))){return false}e=cg(c,11);if(cg(this,11).d!=e.d){return false}for(b=vq(new uq(),zq(new tq(),e).a);as(b.a);){a=cg(bs(b.a),9);d=a.q();f=a.r();if(!(d==null?cg(this,11).c:d!=null&&bg(d.tI,1)?vr(cg(this,11),cg(d,1)):ur(cg(this,11),d,~~vd(d)))){return false}if(!pu(f,d==null?cg(this,11).b:d!=null&&bg(d.tI,1)?cg(this,11).e[ad+cg(d,1)]:rr(cg(this,11),d,~~vd(d)))){return false}}return true}
function at(){var a,b,c;c=0;for(b=vq(new uq(),zq(new tq(),cg(this,11)).a);as(b.a);){a=cg(bs(b.a),9);c+=a.hC();c=~~c}return c}
function ls(){}
_=ls.prototype=new kp();_.eQ=Fs;_.hC=at;_.tI=0;function mr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f])}}}}
function nr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=kr(e,c.substring(1));a.l(b)}}}
function or(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function qr(b,a){return a==null?b.c:a!=null&&bg(a.tI,1)?vr(b,cg(a,1)):ur(b,a,~~vd(a))}
function tr(b,a){return a==null?b.b:a!=null&&bg(a.tI,1)?b.e[ad+cg(a,1)]:rr(b,a,~~vd(a))}
function rr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return c.r()}}}return null}
function ur(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return true}}}return false}
function vr(b,a){return ad+a in b.e}
function zr(b,a,c){return a==null?xr(b,c):a!=null&&bg(a.tI,1)?yr(b,cg(a,1),c):wr(b,a,c,~~vd(a))}
function wr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(i.p(g,d)){var h=c.r();c.A(j);return h}}}else{a=i.a[e]=[]}var c=cu(new bu(),g,j);a.push(c);++i.d;return null}
function xr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function yr(d,a,e){var b,c=d.e;a=ad+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Ar(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&td(a,b)}
function sq(){}
_=sq.prototype=new ls();_.p=Ar;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function dt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&bg(b.tI,12))){return false}c=cg(b,12);if(c.B()!=this.B()){return false}for(a=c.t();a.s();){d=a.u();if(!this.m(d)){return false}}return true}
function et(){var a,b,c;a=0;for(b=this.t();b.s();){c=b.u();if(c!=null){a+=vd(c);a=~~a}}return a}
function bt(){}
_=bt.prototype=new nq();_.eQ=dt;_.hC=et;_.tI=37;function zq(b,a){b.a=a;return b}
function Bq(d,c){var a,b,e;if(c!=null&&bg(c.tI,9)){a=cg(c,9);b=a.q();if(qr(d.a,b)){e=tr(d.a,b);return vt(a.r(),e)}}return false}
function Cq(a){return Bq(this,a)}
function Dq(){return vq(new uq(),this.a)}
function Eq(){return this.a.d}
function tq(){}
_=tq.prototype=new bt();_.m=Cq;_.t=Dq;_.B=Eq;_.tI=38;_.a=null;function vq(c,b){var a;c.b=b;a=gt(new ft());if(c.b.c){it(a,ar(new Fq(),c.b))}nr(c.b,a);mr(c.b,a);c.a=Er(new Cr(),a);return c}
function xq(){return as(this.a)}
function yq(){return cg(bs(this.a),9)}
function uq(){}
_=uq.prototype=new kp();_.s=xq;_.u=yq;_.tI=0;_.a=null;_.b=null;function Bs(b){var a;if(b!=null&&bg(b.tI,9)){a=cg(b,9);if(pu(this.q(),a.q())&&pu(this.r(),a.r())){return true}}return false}
function Cs(){var a,b;a=0;b=0;if(this.q()!=null){a=vd(this.q())}if(this.r()!=null){b=vd(this.r())}return a^b}
function zs(){}
_=zs.prototype=new kp();_.eQ=Bs;_.hC=Cs;_.tI=39;function ar(b,a){b.a=a;return b}
function cr(){return null}
function dr(){return this.a.b}
function er(a){return xr(this.a,a)}
function Fq(){}
_=Fq.prototype=new zs();_.q=cr;_.r=dr;_.A=er;_.tI=40;_.a=null;function gr(c,a,b){c.b=b;c.a=a;return c}
function ir(){return this.a}
function jr(){return this.b.e[ad+this.a]}
function kr(b,a){return gr(new fr(),a,b)}
function lr(a){return yr(this.b,this.a,a)}
function fr(){}
_=fr.prototype=new zs();_.q=ir;_.r=jr;_.A=lr;_.tI=41;_.a=null;_.b=null;function fs(a){ht(this,this.B(),a);return true}
function gs(a,b){if(a<0||a>=b){js(a,b)}}
function hs(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&bg(e.tI,10))){return false}f=cg(e,10);if(this.B()!=f.b){return false}c=Er(new Cr(),this);d=Er(new Cr(),f);while(c.a<c.b.b){a=bs(c);b=bs(d);if(!(a==null?b==null:td(a,b))){return false}}return true}
function is(){var a,b,c;b=1;a=Er(new Cr(),this);while(a.a<a.b.b){c=bs(a);b=31*b+(c==null?0:vd(c));b=~~b}return b}
function js(a,b){throw hp(new gp(),bd+a+cd+b)}
function ks(){return Er(new Cr(),this)}
function Br(){}
_=Br.prototype=new nq();_.l=fs;_.eQ=hs;_.hC=is;_.t=ks;_.tI=0;function Er(b,a){b.b=a;return b}
function as(a){return a.a<a.b.b}
function bs(a){if(a.a>=a.b.b){throw new ju()}return kt(a.b,a.a++)}
function cs(){return this.a<this.b.b}
function ds(){return bs(this)}
function Cr(){}
_=Cr.prototype=new kp();_.s=cs;_.u=ds;_.tI=0;_.a=0;_.b=null;function ts(b,a,c){b.a=a;b.b=c;return b}
function ws(a){return qr(this.a,a)}
function xs(){var a;return a=vq(new uq(),this.b.a),os(new ns(),a)}
function ys(){return this.b.a.d}
function ms(){}
_=ms.prototype=new bt();_.m=ws;_.t=xs;_.B=ys;_.tI=42;_.a=null;_.b=null;function os(a,b){a.a=b;return a}
function rs(){return as(this.a.a)}
function ss(){var a;return a=cg(bs(this.a.a),9),a.q()}
function ns(){}
_=ns.prototype=new kp();_.s=rs;_.u=ss;_.tI=0;_.a=null;function gt(a){a.a=yf(tg,0,0,0,0);a.b=0;return a}
function it(b,a){Bf(b.a,b.b++,a);return true}
function ht(c,a,b){if(a<0||a>c.b){js(a,c.b)}c.a.splice(a,0,b);++c.b}
function kt(b,a){gs(a,b.b);return b.a[a]}
function lt(c,b,a){for(;a<c.b;++a){if(pu(b,c.a[a])){return a}}return -1}
function mt(a){return Bf(this.a,this.b++,a),true}
function nt(a){return lt(this,a,0)!=-1}
function ot(){return this.b}
function ft(){}
_=ft.prototype=new Br();_.l=mt;_.m=nt;_.B=ot;_.tI=43;_.a=null;_.b=0;function tt(a){or(a);return a}
function vt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&td(a,b)}
function st(){}
_=st.prototype=new sq();_.tI=44;function xt(a){a.a=tt(new st());return a}
function yt(c,a){var b;b=zr(c.a,a,c);return b==null}
function At(b){var a;return a=zr(this.a,b,this),a==null}
function Bt(a){return qr(this.a,a)}
function Ct(){var a;return a=vq(new uq(),Es(this.a).b.a),os(new ns(),a)}
function Dt(){return this.a.d}
function wt(){}
_=wt.prototype=new bt();_.l=At;_.m=Bt;_.t=Ct;_.B=Dt;_.tI=45;_.a=null;function cu(b,a,c){b.a=a;b.b=c;return b}
function eu(){return this.a}
function fu(){return this.b}
function hu(b){var a;a=this.b;this.b=b;return a}
function bu(){}
_=bu.prototype=new zs();_.q=eu;_.r=fu;_.A=hu;_.tI=46;_.a=null;_.b=null;function ju(){}
_=ju.prototype=new op();_.tI=47;function pu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&td(a,b)}
function po(){!!$stats&&$stats({moduleName:$moduleName,subSystem:dd,evtGroup:fd,millis:(new Date()).getTime(),type:gd,className:hd});io(new ho())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{po()}catch(a){b(d)}else{po()}}
function qu(){}
var sg=yo(id,jd),tg=yo(kd,ld);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();