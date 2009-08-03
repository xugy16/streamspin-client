(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var D='',B=' ',vc=', Size: ',Ab='-',rb='0',Eb='0px',nc='1px',tc=':',y='DOMMouseScroll',l='INPUT',uc='Index: ',sc='Login Screen',Ec='Object;',Cc='Widget;',Bc='[Lcom.google.gwt.user.client.ui.',Dc='[Ljava.lang.',mc='absolute',jc='align',x='blur',mb='bottom',ab='button',sb='cellPadding',qb='cellSpacing',kb='center',cb='change',A='className',nb='click',Ac='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',hb='div',v='error',dc='focus',bb='gwt-Button',jb='gwt-HTML',tb='gwt-Image',ib='gwt-Label',vb='gwt-ListBox',zb='gwt-MenuBar',fc='gwt-PasswordTextBox',hc='gwt-TextArea',cc='gwt-TextBox',pc='hidden',Fb='hideFocus',Cb='horizontal',rc='images/daisy.gif',ub='img',lc='input',oc='keydown',zc='keypress',Fc='keyup',C='left',n='load',o='losecapture',xb='menubar',ob='middle',xc='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',yc='onModuleLoadStart',Db='outline',ec='password',F='position',lb='right',wb='role',u='scroll',m='select',qc='someTest',wc='startup',db='submit',fb='table',gb='tbody',ic='td',bc='text',gc='textarea',E='top',pb='tr',ac='true',eb='type',Bb='vertical',kc='verticalAlign';var _;function fp(a){return this===(a==null?null:a)}
function gp(){return this.$H||(this.$H=++qd)}
function dp(){}
_=dp.prototype={};_.eQ=fp;_.hC=gp;_.tM=ju;_.tI=1;function hd(b,a){return b.tM==ju||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function jd(a){return a.tM==ju||a.tI==2?a.hC():a.$H||(a.$H=++qd)}
var qd=0;function yd(){yd=ju;ud();new sd()}
function Ad(c){var a=$doc.createElement(l);a.type=c;return a}
function Bd(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function Cd(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Ed(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function rd(){}
_=rd.prototype=new dp();_.tI=0;function xd(){xd=ju;yd()}
function wd(){}
_=wd.prototype=new rd();_.tI=0;function ud(){ud=ju;xd()}
function vd(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function sd(){}
_=sd.prototype=new wd();_.tI=0;function ye(){}
_=ye.prototype=new dp();_.tI=0;function Fe(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function af(a,f,c,b,e){var d;d=Fe(e,b);bf(a,f,c,d);return d}
function bf(b,d,c,a){if(!cf){cf=new Be()}ff(a,cf);a.tI=d;a.qI=c;return a}
function df(a,b,c){if(c!=null){if(a.qI>0&&!jf(c.tI,a.qI)){throw new ko()}if(a.qI<0&&(c.tM==ju||c.tI==2)){throw new ko()}}return a[b]=c}
function ff(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Be(){}
_=Be.prototype=new dp();_.tI=0;_.length=0;_.qI=0;var cf=null;function kf(b,a){return b&&!!yf[b][a]}
function jf(b,a){return b&&yf[b][a]}
function lf(b,a){if(b!=null&&!jf(b.tI,a)){throw new oo()}return b}
function xf(a){if(a!=null){throw new oo()}return a}
var yf=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function ng(b,a,c){var d;if(a==sg){if(ph(b)==8192){sg=null}}d=mg;mg=b;try{c.t(b)}finally{mg=d}}
function ug(a,b){rh();hh(a,b)}
var mg=null,sg=null;function zg(a){Eg();if(!Ag){Ag=Fs(new Es())}bt(Ag,a)}
function Bg(){var a;if(Ag){for(a=xr(new vr(),Ag);a.a<a.b.b;){lf(Ar(a),3);fl()}}}
function Cg(){var a,b;b=null;if(Ag){for(a=xr(new vr(),Ag);a.a<a.b.b;){lf(Ar(a),3);b=null}}return b}
function Eg(){if(!Dg){Dg=true;xh()}}
var Ag=null,Dg=false;function ph(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case oc:return 128;case zc:return 256;case Fc:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function rh(){if(!th){gh();th=true}}
function uh(a){return a!=null&&kf(a.tI,4)&&!(a!=null&&(a.tM!=ju&&a.tI!=2))}
var th=false;function gh(){kh=function(b){if(jh(b)){var a=ih;if(a&&a.__listener){if(uh(a.__listener)){ng(b,a,a.__listener);b.stopPropagation()}}}};jh=function(a){return true};lh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(uh(c)){ng(b,a,c)}}};$wnd.addEventListener(nb,kh,true);$wnd.addEventListener(yb,kh,true);$wnd.addEventListener(p,kh,true);$wnd.addEventListener(t,kh,true);$wnd.addEventListener(q,kh,true);$wnd.addEventListener(s,kh,true);$wnd.addEventListener(r,kh,true);$wnd.addEventListener(w,kh,true);$wnd.addEventListener(oc,jh,true);$wnd.addEventListener(Fc,jh,true);$wnd.addEventListener(zc,jh,true)}
function hh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?lh:null;if(b&2)c.ondblclick=a&2?lh:null;if(b&4)c.onmousedown=a&4?lh:null;if(b&8)c.onmouseup=a&8?lh:null;if(b&16)c.onmouseover=a&16?lh:null;if(b&32)c.onmouseout=a&32?lh:null;if(b&64)c.onmousemove=a&64?lh:null;if(b&128)c.onkeydown=a&128?lh:null;if(b&256)c.onkeypress=a&256?lh:null;if(b&512)c.onkeyup=a&512?lh:null;if(b&1024)c.onchange=a&1024?lh:null;if(b&2048)c.onfocus=a&2048?lh:null;if(b&4096)c.onblur=a&4096?lh:null;if(b&8192)c.onlosecapture=a&8192?lh:null;if(b&16384)c.onscroll=a&16384?lh:null;if(b&32768)c.onload=a&32768?lh:null;if(b&65536)c.onerror=a&65536?lh:null;if(b&131072)c.onmousewheel=a&131072?lh:null;if(b&262144)c.oncontextmenu=a&262144?lh:null}
var ih=null,jh=null,kh=null,lh=null;function xh(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=Cg()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{Bg()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Fl(b,a){fm(b.h,a,true)}
function bm(b,a){if(b.h){cm(b.h,a)}b.h=a}
function cm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function em(a){var b,c;b=a[A]==null?null:String(a[A]);c=b.indexOf(Fp(32));if(c>=0){return b.substr(0,c-0)}return b}
function fm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new hp()}j=Bp(j);if(j.length==0){throw new zo()}i=c[A]==null?null:String(c[A]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=B}c[A]=i+j}}else{if(e!=-1){b=Bp(i.substr(0,e-0));d=Bp(zp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+B+d}c[A]=h}}}
function El(){}
_=El.prototype=new dp();_.tI=7;_.h=null;function Em(a){if(a.f){throw new Co()}a.f=true;a.h.__listener=a;a.l();a.v()}
function Fm(a){if(!a.f){throw new Co()}try{a.w()}finally{a.m();a.h.__listener=null;a.f=false}}
function an(a){if(a.g){a.g.x(a)}else if(a.g){throw new Co()}}
function bn(b,a){if(b.f){b.h.__listener=null}bm(b,a);if(b.f){b.h.__listener=b}}
function cn(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.u()}c.g=null}else{if(a){throw new Co()}c.g=b;if(b.f){Em(c)}}}
function dn(){}
function en(){}
function fn(a){}
function gn(){Fm(this)}
function hn(){}
function jn(){}
function nm(){}
_=nm.prototype=new El();_.l=dn;_.m=en;_.t=fn;_.u=gn;_.v=hn;_.w=jn;_.tI=8;_.f=false;_.g=null;function vk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=tm(b);Em(a)}}
function wk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=tm(b);a.u()}}
function xk(){}
function yk(){}
function tk(){}
_=tk.prototype=new nm();_.l=vk;_.m=wk;_.v=xk;_.w=yk;_.tI=9;function li(c,a,b){an(a);xm(c.e,a);b.appendChild(a.h);cn(a,c)}
function ni(b,c){var a;if(c.g!=b){return false}cn(c,null);a=c.h;Cd((yd(),a)).removeChild(a);Cm(b.e,c);return true}
function oi(){return rm(new pm(),this.e)}
function pi(a){return ni(this,a)}
function ji(){}
_=ji.prototype=new tk();_.r=oi;_.x=pi;_.tI=10;function zh(a,b){li(a,b,a.h)}
function Bh(b,c){var a;a=ni(b,c);if(a){Ch(c.h)}return a}
function Ch(a){a.style[C]=D;a.style[E]=D;a.style[F]=D}
function Dh(a){return Bh(this,a)}
function yh(){}
_=yh.prototype=new ji();_.x=Dh;_.tI=11;function vi(){vi=ju;wi=(Bn(),Dn)}
function ui(b,a){vi();b.h=a;wi.y(b.h,0);return b}
function xi(a){ph(a)}
function ti(){}
_=ti.prototype=new nm();_.t=xi;_.tI=12;var wi;function bi(){bi=ju;vi()}
function ai(b,a){bi();b.h=a;wi.y(b.h,0);return b}
function Fh(){}
_=Fh.prototype=new ti();_.tI=13;function ei(){ei=ju;bi()}
function ci(a){ei();ai(a,$doc.createElement((yd(),ab)));fi(a.h);a.h[A]=bb;return a}
function di(b,a){ei();ci(b);b.h.innerHTML=a||D;return b}
function fi(b){if(b.type==db){try{b.setAttribute(eb,ab)}catch(a){}}}
function Eh(){}
_=Eh.prototype=new Fh();_.tI=14;function hi(a){a.e=wm(new om());a.d=$doc.createElement((yd(),fb));a.c=$doc.createElement(gb);a.d.appendChild(a.c);a.h=a.d;return a}
function gi(){}
_=gi.prototype=new ji();_.tI=15;_.c=null;_.d=null;function ri(){ri=ju;si=(Bn(),Cn)}
var si;function Ej(a){a.h=$doc.createElement((yd(),hb));a.h[A]=ib;return a}
function bk(a){ph(a)}
function Dj(){}
_=Dj.prototype=new nm();_.t=bk;_.tI=16;function zi(a){a.h=$doc.createElement((yd(),hb));a.h[A]=jb;return a}
function yi(){}
_=yi.prototype=new Dj();_.tI=17;function cj(){cj=ju;aj(new Fi(),kb);ej=aj(new Fi(),C);aj(new Fi(),lb);dj=ej}
var dj,ej;function aj(b,a){b.a=a;return b}
function Fi(){}
_=Fi.prototype=new dp();_.tI=0;_.a=null;function kj(){kj=ju;ij(new hj(),mb);ij(new hj(),ob);lj=ij(new hj(),E)}
var lj;function ij(a,b){a.a=b;return a}
function hj(){}
_=hj.prototype=new dp();_.tI=0;_.a=null;function pj(a){hi(a);cj();kj();a.a=$doc.createElement((yd(),pb));a.c.appendChild(a.a);a.d[qb]=rb;a.d[sb]=rb;return a}
function rj(c){var a,b;b=Cd((yd(),c.h));a=ni(this,c);if(a){this.a.removeChild(b)}return a}
function oj(){}
_=oj.prototype=new gi();_.x=rj;_.tI=18;_.a=null;function Aj(){Aj=ju;hr(new lt())}
function zj(a,b){Aj();wj(new vj(),a,b);a.h[A]=tb;return a}
function Bj(a){ph(a)}
function sj(){}
_=sj.prototype=new nm();_.t=Bj;_.tI=19;function tj(){}
_=tj.prototype=new dp();_.tI=0;function wj(b,a,c){bn(a,$doc.createElement((yd(),ub)));ug(a.h,229501|(a.h.__eventBits||0));a.h.src=c;return b}
function vj(){}
_=vj.prototype=new tj();_.tI=0;function fk(){fk=ju;vi()}
function dk(a){fk();ui(a,Bd((yd(),false)));a.h[A]=vb;return a}
function gk(a){if(ph(a)==1024){}else{ph(a)}}
function ck(){}
_=ck.prototype=new ti();_.t=gk;_.tI=20;function kk(a,b){Fs(new Es());a.b=Fs(new Es());nk(a,b,(qk(),new ok()));return a}
function mk(d,a){var b,c;for(c=xr(new vr(),d.b);c.a<c.b.b;){b=xf(Ar(c));if(vd((yd(),null.C()),a)){return b}}return null}
function nk(c,e){var a,b,d;b=$doc.createElement((yd(),fb));c.a=$doc.createElement(gb);b.appendChild(c.a);if(!e){d=$doc.createElement(pb);c.a.appendChild(d)}a=rn((ri(),si));a.appendChild(b);c.h=a;c.h.setAttribute(wb,xb);ug(c.h,2225|(c.h.__eventBits||0));c.h[A]=zb;if(e){Fl(c,em(c.h)+Ab+Bb)}else{Fl(c,em(c.h)+Ab+Cb)}c.h.style[Db]=Eb;c.h.setAttribute(Fb,ac)}
function rk(a){var b;mk(this,a.target);switch(ph(a)){case 1:{yn((ri(),this.h));break}{break}case 2048:{xf(dt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{xf(dt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{xf(dt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:xf(dt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:xf(dt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{xf(dt(this.b,0))}}break}}}
function sk(){Fm(this)}
function hk(){}
_=hk.prototype=new nm();_.t=rk;_.u=sk;_.tI=21;_.a=null;function qk(){qk=ju}
function ok(){}
_=ok.prototype=new dp();_.tI=0;function zl(){zl=ju;vi()}
function yl(b,a){zl();b.h=a;wi.y(b.h,0);return b}
function Al(a){var b;b=ph(a);if((b&896)!=0){ph(a)}else if(b==1024){}else{ph(a)}}
function xl(){}
_=xl.prototype=new ti();_.t=Al;_.tI=22;function Dl(){Dl=ju;zl()}
function Bl(a){Dl();Cl(a,Ad((yd(),bc)),cc);return a}
function Cl(c,a,b){Dl();c.h=a;wi.y(c.h,0);if(b!=null){c.h[A]=b}return c}
function wl(){}
_=wl.prototype=new xl();_.tI=23;function Bk(){Bk=ju;Dl()}
function Ak(a){Bk();Cl(a,Ad((yd(),ec)),fc);return a}
function zk(){}
_=zk.prototype=new wl();_.tI=24;function el(){el=ju;il=mt(new lt());jl=qt(new pt())}
function dl(b,a){el();b.e=wm(new om());b.h=a;Em(b);return b}
function fl(){var b,a;el();var c,d;for(d=(b=oq(new nq(),xs(jl.a).b.a),hs(new gs(),b));zr(d.a.a);){c=lf((a=lf(Ar(d.a.a),9),a.o()),6);if(c.f){c.u()}}}
function hl(a){el();var b;b=lf(mr(il,a),5);if(b){return b}if(il.d==0){zg(new Ek())}b=bl(new al());sr(il,a,b);rt(jl,b);return b}
function Dk(){}
_=Dk.prototype=new yh();_.tI=25;var il,jl;function Ek(){}
_=Ek.prototype=new dp();_.tI=26;function cl(){cl=ju;el()}
function bl(a){cl();dl(a,$doc.body);return a}
function al(){}
_=al.prototype=new Dk();_.tI=27;function vl(){vl=ju;zl()}
function ul(a){vl();yl(a,$doc.createElement((yd(),gc)));a.h[A]=hc;return a}
function tl(){}
_=tl.prototype=new xl();_.tI=28;function im(a){hi(a);a.a=(cj(),dj);a.b=(kj(),lj);a.d[qb]=rb;a.d[sb]=rb;return a}
function jm(c,e){var b,d,a;d=$doc.createElement((yd(),pb));b=(a=$doc.createElement(ic),(a[jc]=c.a.a,undefined),(a.style[kc]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);an(e);xm(c.e,e);b.appendChild(e.h);cn(e,c)}
function mm(c){var a,b;b=Cd((yd(),c.h));a=ni(this,c);if(a){this.c.removeChild(Cd(b))}return a}
function gm(){}
_=gm.prototype=new gi();_.x=mm;_.tI=29;function wm(a){a.a=af(Bf,0,6,4,0);return a}
function xm(a,b){Am(a,b,a.b)}
function zm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function Am(d,e,a){var b,c;if(a<0||a>d.b){throw new Fo()}if(d.b==d.a.length){c=af(Bf,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){df(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){df(d.a,b,d.a[b-1])}df(d.a,a,e)}
function Bm(c,b){var a;if(b<0||b>=c.b){throw new Fo()}--c.b;for(a=b;a<c.b;++a){df(c.a,a,c.a[a+1])}df(c.a,c.b,null)}
function Cm(b,c){var a;a=zm(b,c);if(a==-1){throw new cu()}Bm(b,a)}
function om(){}
_=om.prototype=new dp();_.tI=0;_.a=null;_.b=0;function rm(b,a){b.b=a;return b}
function tm(a){if(a.a>=a.b.b){throw new cu()}return a.b.a[++a.a]}
function um(){return this.a<this.b.b-1}
function vm(){return tm(this)}
function pm(){}
_=pm.prototype=new dp();_.q=um;_.s=vm;_.tI=0;_.a=-1;_.b=null;function Bn(){Bn=ju;Cn=vn(new un());Dn=Cn?(Bn(),new kn()):Cn}
function En(a,b){a.tabIndex=b}
function kn(){}
_=kn.prototype=new dp();_.y=En;_.tI=0;var Cn,Dn;function on(){on=ju;Bn()}
function pn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function qn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function rn(c){var a=$doc.createElement(hb);var b=c.k();b.addEventListener(x,c.a,false);b.addEventListener(dc,c.b,false);a.addEventListener(p,c.c,false);a.appendChild(b);return a}
function sn(){var a=$doc.createElement(lc);a.type=bc;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=mc;return a}
function tn(a,b){a.firstChild.tabIndex=b}
function ln(){}
_=ln.prototype=new kn();_.k=sn;_.y=tn;_.tI=0;function wn(){wn=ju;on()}
function vn(a){wn();a.a=pn();a.b=qn();a.c=xn();return a}
function xn(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function yn(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function zn(){var a=$doc.createElement(lc);a.type=bc;a.style.opacity=0;a.style.zIndex=-1;a.style.height=nc;a.style.width=nc;a.style.overflow=pc;a.style.position=mc;return a}
function un(){}
_=un.prototype=new ln();_.k=zn;_.tI=0;function Fn(){}
_=Fn.prototype=new ye();_.tI=0;function bo(a){im(new gm());pj(new oj());im(new gm());dk(new ck());ul(new tl());kk(new hk(),false);di(new Eh(),qc);Ej(new Dj());a.e=zi(new yi());a.b=im(new gm());a.d=Bl(new wl());a.c=Ak(new zk());a.a=ci(new Eh());zj(new sj(),$moduleBase+rc);Ed((yd(),a.e.h),sc);jm(a.b,a.e);jm(a.b,a.d);jm(a.b,a.c);jm(a.b,a.a);zh((el(),hl(null)),a.b);return a}
function ao(){}
_=ao.prototype=new Fn();_.tI=0;function bq(){}
_=bq.prototype=new dp();_.tI=3;function xo(){}
_=xo.prototype=new bq();_.tI=4;function hp(){}
_=hp.prototype=new xo();_.tI=5;function ko(){}
_=ko.prototype=new hp();_.tI=31;function ro(c,a){var b;b=new no();return b}
function no(){}
_=no.prototype=new dp();_.tI=0;function oo(){}
_=oo.prototype=new hp();_.tI=34;function zo(){}
_=zo.prototype=new hp();_.tI=35;function Co(){}
_=Co.prototype=new hp();_.tI=36;function ap(b,a){return b}
function Fo(){}
_=Fo.prototype=new hp();_.tI=37;function vp(b,a){if(!(a!=null&&kf(a.tI,1))){return false}return String(b)==a}
function zp(b,a){return b.substr(a,b.length-a)}
function Bp(c){if(c.length==0||c[0]>B&&c[c.length-1]>B){return c}var a=c.replace(/^(\s*)/,D);var b=a.replace(/\s*$/,D);return b}
function Dp(a){return vp(this,a)}
function Fp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function aq(){return rp(this)}
_=String.prototype;_.eQ=Dp;_.hC=aq;_.tI=2;function mp(){mp=ju;np={};qp={}}
function op(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function rp(c){mp();var a=tc+c;var b=qp[a];if(b!=null){return b}b=np[a];if(b==null){b=op(c)}sp();return qp[a]=b}
function sp(){if(pp==256){np=qp;qp={};pp=0}++pp}
var np,pp=0,qp;function dq(){}
_=dq.prototype=new hp();_.tI=38;function hq(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:hd(b,c)){return a}}return null}
function jq(a){throw new dq()}
function kq(b){var a;a=hq(this.r(),b);return !!a}
function gq(){}
_=gq.prototype=new dp();_.i=jq;_.j=kq;_.tI=0;function xs(b){var a;a=sq(new mq(),b);return ms(new fs(),b,a)}
function ys(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&kf(c.tI,11))){return false}e=lf(c,11);if(lf(this,11).d!=e.d){return false}for(b=oq(new nq(),sq(new mq(),e).a);zr(b.a);){a=lf(Ar(b.a),9);d=a.o();f=a.p();if(!(d==null?lf(this,11).c:d!=null&&kf(d.tI,1)?or(lf(this,11),lf(d,1)):nr(lf(this,11),d,~~jd(d)))){return false}if(!iu(f,d==null?lf(this,11).b:d!=null&&kf(d.tI,1)?lf(this,11).e[tc+lf(d,1)]:kr(lf(this,11),d,~~jd(d)))){return false}}return true}
function zs(){var a,b,c;c=0;for(b=oq(new nq(),sq(new mq(),lf(this,11)).a);zr(b.a);){a=lf(Ar(b.a),9);c+=a.hC();c=~~c}return c}
function es(){}
_=es.prototype=new dp();_.eQ=ys;_.hC=zs;_.tI=0;function fr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.i(a[f])}}}}
function gr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=dr(e,c.substring(1));a.i(b)}}}
function hr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function jr(b,a){return a==null?b.c:a!=null&&kf(a.tI,1)?or(b,lf(a,1)):nr(b,a,~~jd(a))}
function mr(b,a){return a==null?b.b:a!=null&&kf(a.tI,1)?b.e[tc+lf(a,1)]:kr(b,a,~~jd(a))}
function kr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function nr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function or(b,a){return tc+a in b.e}
function sr(b,a,c){return a==null?qr(b,c):a!=null&&kf(a.tI,1)?rr(b,lf(a,1),c):pr(b,a,c,~~jd(a))}
function pr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.z(j);return h}}}else{a=i.a[e]=[]}var c=Bt(new At(),g,j);a.push(c);++i.d;return null}
function qr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function rr(d,a,e){var b,c=d.e;a=tc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function tr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function lq(){}
_=lq.prototype=new es();_.n=tr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Cs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&kf(b.tI,12))){return false}c=lf(b,12);if(c.A()!=this.A()){return false}for(a=c.r();a.q();){d=a.s();if(!this.j(d)){return false}}return true}
function Ds(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=jd(c);a=~~a}}return a}
function As(){}
_=As.prototype=new gq();_.eQ=Cs;_.hC=Ds;_.tI=39;function sq(b,a){b.a=a;return b}
function uq(d,c){var a,b,e;if(c!=null&&kf(c.tI,9)){a=lf(c,9);b=a.o();if(jr(d.a,b)){e=mr(d.a,b);return ot(a.p(),e)}}return false}
function vq(a){return uq(this,a)}
function wq(){return oq(new nq(),this.a)}
function xq(){return this.a.d}
function mq(){}
_=mq.prototype=new As();_.j=vq;_.r=wq;_.A=xq;_.tI=40;_.a=null;function oq(c,b){var a;c.b=b;a=Fs(new Es());if(c.b.c){bt(a,zq(new yq(),c.b))}gr(c.b,a);fr(c.b,a);c.a=xr(new vr(),a);return c}
function qq(){return zr(this.a)}
function rq(){return lf(Ar(this.a),9)}
function nq(){}
_=nq.prototype=new dp();_.q=qq;_.s=rq;_.tI=0;_.a=null;_.b=null;function us(b){var a;if(b!=null&&kf(b.tI,9)){a=lf(b,9);if(iu(this.o(),a.o())&&iu(this.p(),a.p())){return true}}return false}
function vs(){var a,b;a=0;b=0;if(this.o()!=null){a=jd(this.o())}if(this.p()!=null){b=jd(this.p())}return a^b}
function ss(){}
_=ss.prototype=new dp();_.eQ=us;_.hC=vs;_.tI=41;function zq(b,a){b.a=a;return b}
function Bq(){return null}
function Cq(){return this.a.b}
function Dq(a){return qr(this.a,a)}
function yq(){}
_=yq.prototype=new ss();_.o=Bq;_.p=Cq;_.z=Dq;_.tI=42;_.a=null;function Fq(c,a,b){c.b=b;c.a=a;return c}
function br(){return this.a}
function cr(){return this.b.e[tc+this.a]}
function dr(b,a){return Fq(new Eq(),a,b)}
function er(a){return rr(this.b,this.a,a)}
function Eq(){}
_=Eq.prototype=new ss();_.o=br;_.p=cr;_.z=er;_.tI=43;_.a=null;_.b=null;function Er(a){at(this,this.A(),a);return true}
function Fr(a,b){if(a<0||a>=b){cs(a,b)}}
function as(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&kf(e.tI,10))){return false}f=lf(e,10);if(this.A()!=f.b){return false}c=xr(new vr(),this);d=xr(new vr(),f);while(c.a<c.b.b){a=Ar(c);b=Ar(d);if(!(a==null?b==null:hd(a,b))){return false}}return true}
function bs(){var a,b,c;b=1;a=xr(new vr(),this);while(a.a<a.b.b){c=Ar(a);b=31*b+(c==null?0:jd(c));b=~~b}return b}
function cs(a,b){throw ap(new Fo(),uc+a+vc+b)}
function ds(){return xr(new vr(),this)}
function ur(){}
_=ur.prototype=new gq();_.i=Er;_.eQ=as;_.hC=bs;_.r=ds;_.tI=0;function xr(b,a){b.b=a;return b}
function zr(a){return a.a<a.b.b}
function Ar(a){if(a.a>=a.b.b){throw new cu()}return dt(a.b,a.a++)}
function Br(){return this.a<this.b.b}
function Cr(){return Ar(this)}
function vr(){}
_=vr.prototype=new dp();_.q=Br;_.s=Cr;_.tI=0;_.a=0;_.b=null;function ms(b,a,c){b.a=a;b.b=c;return b}
function ps(a){return jr(this.a,a)}
function qs(){var a;return a=oq(new nq(),this.b.a),hs(new gs(),a)}
function rs(){return this.b.a.d}
function fs(){}
_=fs.prototype=new As();_.j=ps;_.r=qs;_.A=rs;_.tI=44;_.a=null;_.b=null;function hs(a,b){a.a=b;return a}
function ks(){return zr(this.a.a)}
function ls(){var a;return a=lf(Ar(this.a.a),9),a.o()}
function gs(){}
_=gs.prototype=new dp();_.q=ks;_.s=ls;_.tI=0;_.a=null;function Fs(a){a.a=af(Cf,0,0,0,0);a.b=0;return a}
function bt(b,a){df(b.a,b.b++,a);return true}
function at(c,a,b){if(a<0||a>c.b){cs(a,c.b)}c.a.splice(a,0,b);++c.b}
function dt(b,a){Fr(a,b.b);return b.a[a]}
function et(c,b,a){for(;a<c.b;++a){if(iu(b,c.a[a])){return a}}return -1}
function ft(a){return df(this.a,this.b++,a),true}
function gt(a){return et(this,a,0)!=-1}
function ht(){return this.b}
function Es(){}
_=Es.prototype=new ur();_.i=ft;_.j=gt;_.A=ht;_.tI=45;_.a=null;_.b=0;function mt(a){hr(a);return a}
function ot(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function lt(){}
_=lt.prototype=new lq();_.tI=46;function qt(a){a.a=mt(new lt());return a}
function rt(c,a){var b;b=sr(c.a,a,c);return b==null}
function tt(b){var a;return a=sr(this.a,b,this),a==null}
function ut(a){return jr(this.a,a)}
function vt(){var a;return a=oq(new nq(),xs(this.a).b.a),hs(new gs(),a)}
function wt(){return this.a.d}
function pt(){}
_=pt.prototype=new As();_.i=tt;_.j=ut;_.r=vt;_.A=wt;_.tI=47;_.a=null;function Bt(b,a,c){b.a=a;b.b=c;return b}
function Dt(){return this.a}
function Et(){return this.b}
function au(b){var a;a=this.b;this.b=b;return a}
function At(){}
_=At.prototype=new ss();_.o=Dt;_.p=Et;_.z=au;_.tI=48;_.a=null;_.b=null;function cu(){}
_=cu.prototype=new hp();_.tI=49;function iu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&hd(a,b)}
function io(){!!$stats&&$stats({moduleName:$moduleName,subSystem:wc,evtGroup:xc,millis:(new Date()).getTime(),type:yc,className:Ac});bo(new ao())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{io()}catch(a){b(d)}else{io()}}
function ju(){}
var Bf=ro(Bc,Cc),Cf=ro(Dc,Ec);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();