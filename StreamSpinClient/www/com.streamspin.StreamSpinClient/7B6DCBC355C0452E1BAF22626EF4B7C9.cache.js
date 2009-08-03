(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var F='',D=' ',uc=', Size: ',Db='-',tb='0',bc='0px',sc=':',zb='DIV',y='DOMMouseScroll',l='INPUT',tc='Index: ',rc='Login Screen',B='MouseEvents',Dc='Object;',Bc='Widget;',Ac='[Lcom.google.gwt.user.client.ui.',Cc='[Ljava.lang.',mc='align',x='blur',pb='bottom',db='button',ub='cellPadding',sb='cellSpacing',mb='center',cb='change',C='className',nb='click',yc='com.streamspin.client.StreamSpinClient',z='contextmenu',yb='dblclick',jb='div',v='error',dc='focus',eb='gwt-Button',lb='gwt-HTML',vb='gwt-Image',kb='gwt-Label',xb='gwt-ListBox',Cb='gwt-MenuBar',ic='gwt-PasswordTextBox',kc='gwt-TextArea',gc='gwt-TextBox',cc='hideFocus',Fb='horizontal',A='html',qc='images/daisy.gif',wb='img',oc='keydown',zc='keypress',Ec='keyup',E='left',n='load',o='losecapture',Bb='menubar',qb='middle',wc='moduleStartup',p='mousedown',q='mousemove',r='mouseout',s='mouseover',t='mouseup',w='mousewheel',xc='onModuleLoadStart',ac='outline',hc='password',bb='position',ob='right',Ab='role',u='scroll',m='select',pc='someTest',vc='startup',fb='submit',hb='table',ib='tbody',lc='td',fc='text',jc='textarea',ab='top',rb='tr',ec='true',gb='type',Eb='vertical',nc='verticalAlign';var _;function ro(a){return this===(a==null?null:a)}
function so(){return this.$H||(this.$H=++pd)}
function po(){}
_=po.prototype={};_.eQ=ro;_.hC=so;_.tM=vt;_.tI=1;function gd(b,a){return b.tM==vt||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function id(a){return a.tM==vt||a.tI==2?a.hC():a.$H||(a.$H=++pd)}
var pd=0;function xd(){xd=vt;td();new rd()}
function zd(c){var a=$doc.createElement(l);a.type=c;return a}
function Ad(a){var b;b=$doc.createElement(m);if(a){b.multiple=true}return b}
function Bd(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Dd(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function qd(){}
_=qd.prototype=new po();_.tI=0;function wd(){wd=vt;xd()}
function vd(){}
_=vd.prototype=new qd();_.tI=0;function td(){td=vt;wd()}
function ud(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function rd(){}
_=rd.prototype=new vd();_.tI=0;function xe(){}
_=xe.prototype=new po();_.tI=0;function Ee(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function Fe(a,f,c,b,e){var d;d=Ee(e,b);af(a,f,c,d);return d}
function af(b,d,c,a){if(!bf){bf=new Ae()}ef(a,bf);a.tI=d;a.qI=c;return a}
function cf(a,b,c){if(c!=null){if(a.qI>0&&!hf(c.tI,a.qI)){throw new vn()}if(a.qI<0&&(c.tM==vt||c.tI==2)){throw new vn()}}return a[b]=c}
function ef(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Ae(){}
_=Ae.prototype=new po();_.tI=0;_.length=0;_.qI=0;var bf=null;function jf(b,a){return b&&!!xf[b][a]}
function hf(b,a){return b&&xf[b][a]}
function kf(b,a){if(b!=null&&!hf(b.tI,a)){throw new zn()}return b}
function wf(a){if(a!=null){throw new zn()}return a}
var xf=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function mg(b,a,c){var d;if(a==rg){if(sh(b)==8192){rg=null}}d=lg;lg=b;try{c.s(b)}finally{lg=d}}
var lg=null,rg=null;function xg(a){Cg();if(!yg){yg=ls(new ks())}ns(yg,a)}
function zg(){var a;if(yg){for(a=dr(new br(),yg);a.a<a.b.b;){kf(gr(a),3);dl()}}}
function Ag(){var a,b;b=null;if(yg){for(a=dr(new br(),yg);a.a<a.b.b;){kf(gr(a),3);b=null}}return b}
function Cg(){if(!Bg){Bg=true;Ah()}}
var yg=null,Bg=false;function sh(a){switch(a.type){case x:return 4096;case cb:return 1024;case nb:return 1;case yb:return 2;case dc:return 2048;case oc:return 128;case zc:return 256;case Ec:return 512;case n:return 32768;case o:return 8192;case p:return 4;case q:return 64;case r:return 32;case s:return 16;case t:return 8;case u:return 16384;case v:return 65536;case w:return 131072;case y:return 131072;case z:return 262144;}}
function uh(){if(!wh){jh();ch();wh=true}}
function xh(a){return a!=null&&jf(a.tI,4)&&!(a!=null&&(a.tM!=vt&&a.tI!=2))}
var wh=false;function jh(){nh=function(b){if(mh(b)){var a=lh;if(a&&a.__listener){if(xh(a.__listener)){mg(b,a,a.__listener);b.stopPropagation()}}}};mh=function(a){return true};oh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(xh(c)){mg(b,a,c)}}};$wnd.addEventListener(nb,nh,true);$wnd.addEventListener(yb,nh,true);$wnd.addEventListener(p,nh,true);$wnd.addEventListener(t,nh,true);$wnd.addEventListener(q,nh,true);$wnd.addEventListener(s,nh,true);$wnd.addEventListener(r,nh,true);$wnd.addEventListener(w,nh,true);$wnd.addEventListener(oc,mh,true);$wnd.addEventListener(Ec,mh,true);$wnd.addEventListener(zc,mh,true)}
function kh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?oh:null;if(b&2)c.ondblclick=a&2?oh:null;if(b&4)c.onmousedown=a&4?oh:null;if(b&8)c.onmouseup=a&8?oh:null;if(b&16)c.onmouseover=a&16?oh:null;if(b&32)c.onmouseout=a&32?oh:null;if(b&64)c.onmousemove=a&64?oh:null;if(b&128)c.onkeydown=a&128?oh:null;if(b&256)c.onkeypress=a&256?oh:null;if(b&512)c.onkeyup=a&512?oh:null;if(b&1024)c.onchange=a&1024?oh:null;if(b&2048)c.onfocus=a&2048?oh:null;if(b&4096)c.onblur=a&4096?oh:null;if(b&8192)c.onlosecapture=a&8192?oh:null;if(b&16384)c.onscroll=a&16384?oh:null;if(b&32768)c.onload=a&32768?oh:null;if(b&65536)c.onerror=a&65536?oh:null;if(b&131072)c.onmousewheel=a&131072?oh:null;if(b&262144)c.oncontextmenu=a&262144?oh:null}
var lh=null,mh=null,nh=null,oh=null;function ch(){$wnd.addEventListener(r,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(A==b.target.tagName.toLowerCase()){var c=$doc.createEvent(B);c.initMouseEvent(t,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(y,nh,true)}
function eh(b,a){uh();kh(b,a);dh(b,a)}
function dh(b,a){if(a&131072){b.addEventListener(y,oh,false)}}
function Ah(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=Ag()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{zg()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Bl(b,a){bm(b.h,a,true)}
function Dl(b,a){if(b.h){El(b.h,a)}b.h=a}
function El(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function am(a){var b,c;b=a[C]==null?null:String(a[C]);c=b.indexOf(lp(32));if(c>=0){return b.substr(0,c-0)}return b}
function bm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new to()}j=hp(j);if(j.length==0){throw new fo()}i=c[C]==null?null:String(c[C]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=D}c[C]=i+j}}else{if(e!=-1){b=hp(i.substr(0,e-0));d=hp(fp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+D+d}c[C]=h}}}
function Al(){}
_=Al.prototype=new po();_.tI=7;_.h=null;function Am(a){if(a.f){throw new io()}a.f=true;a.h.__listener=a;a.k();a.u()}
function Bm(a){if(!a.f){throw new io()}try{a.v()}finally{a.l();a.h.__listener=null;a.f=false}}
function Cm(a){if(a.g){a.g.w(a)}else if(a.g){throw new io()}}
function Dm(b,a){if(b.f){b.h.__listener=null}Dl(b,a);if(b.f){b.h.__listener=b}}
function Em(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.t()}c.g=null}else{if(a){throw new io()}c.g=b;if(b.f){Am(c)}}}
function Fm(){}
function an(){}
function bn(a){}
function cn(){Bm(this)}
function dn(){}
function en(){}
function jm(){}
_=jm.prototype=new Al();_.k=Fm;_.l=an;_.s=bn;_.t=cn;_.u=dn;_.v=en;_.tI=8;_.f=false;_.g=null;function tk(){var a,b;for(b=this.q();b.a<b.b.b-1;){a=pm(b);Am(a)}}
function uk(){var a,b;for(b=this.q();b.a<b.b.b-1;){a=pm(b);a.t()}}
function vk(){}
function wk(){}
function rk(){}
_=rk.prototype=new jm();_.k=tk;_.l=uk;_.u=vk;_.v=wk;_.tI=9;function oi(c,a,b){Cm(a);tm(c.e,a);b.appendChild(a.h);Em(a,c)}
function qi(b,c){var a;if(c.g!=b){return false}Em(c,null);a=c.h;Bd((xd(),a)).removeChild(a);ym(b.e,c);return true}
function ri(){return nm(new lm(),this.e)}
function si(a){return qi(this,a)}
function mi(){}
_=mi.prototype=new rk();_.q=ri;_.w=si;_.tI=10;function Ch(a,b){oi(a,b,a.h)}
function Eh(b,c){var a;a=qi(b,c);if(a){Fh(c.h)}return a}
function Fh(a){a.style[E]=F;a.style[ab]=F;a.style[bb]=F}
function ai(a){return Eh(this,a)}
function Bh(){}
_=Bh.prototype=new mi();_.w=ai;_.tI=11;function ui(b,a){b.h=a;b.h.tabIndex=0;return b}
function wi(a){sh(a)}
function ti(){}
_=ti.prototype=new jm();_.s=wi;_.tI=12;function di(b,a){b.h=a;b.h.tabIndex=0;return b}
function ci(){}
_=ci.prototype=new ti();_.tI=13;function fi(a){di(a,$doc.createElement((xd(),db)));ii(a.h);a.h[C]=eb;return a}
function gi(b,a){fi(b);b.h.innerHTML=a||F;return b}
function ii(b){if(b.type==fb){try{b.setAttribute(gb,db)}catch(a){}}}
function bi(){}
_=bi.prototype=new ci();_.tI=14;function ki(a){a.e=sm(new km());a.d=$doc.createElement((xd(),hb));a.c=$doc.createElement(ib);a.d.appendChild(a.c);a.h=a.d;return a}
function ji(){}
_=ji.prototype=new mi();_.tI=15;_.c=null;_.d=null;function Dj(a){a.h=$doc.createElement((xd(),jb));a.h[C]=kb;return a}
function ak(a){sh(a)}
function Cj(){}
_=Cj.prototype=new jm();_.s=ak;_.tI=16;function yi(a){a.h=$doc.createElement((xd(),jb));a.h[C]=lb;return a}
function xi(){}
_=xi.prototype=new Cj();_.tI=17;function bj(){bj=vt;Fi(new Ei(),mb);dj=Fi(new Ei(),E);Fi(new Ei(),ob);cj=dj}
var cj,dj;function Fi(b,a){b.a=a;return b}
function Ei(){}
_=Ei.prototype=new po();_.tI=0;_.a=null;function jj(){jj=vt;hj(new gj(),pb);hj(new gj(),qb);kj=hj(new gj(),ab)}
var kj;function hj(a,b){a.a=b;return a}
function gj(){}
_=gj.prototype=new po();_.tI=0;_.a=null;function oj(a){ki(a);bj();jj();a.a=$doc.createElement((xd(),rb));a.c.appendChild(a.a);a.d[sb]=tb;a.d[ub]=tb;return a}
function qj(c){var a,b;b=Bd((xd(),c.h));a=qi(this,c);if(a){this.a.removeChild(b)}return a}
function nj(){}
_=nj.prototype=new ji();_.w=qj;_.tI=18;_.a=null;function zj(){zj=vt;tq(new xs())}
function yj(a,b){zj();vj(new uj(),a,b);a.h[C]=vb;return a}
function Aj(a){sh(a)}
function rj(){}
_=rj.prototype=new jm();_.s=Aj;_.tI=19;function sj(){}
_=sj.prototype=new po();_.tI=0;function vj(b,a,c){Dm(a,$doc.createElement((xd(),wb)));eh(a.h,229501|(a.h.__eventBits||0));a.h.src=c;return b}
function uj(){}
_=uj.prototype=new sj();_.tI=0;function ck(a){ui(a,Ad((xd(),false)));a.h[C]=xb;return a}
function ek(a){if(sh(a)==1024){}else{sh(a)}}
function bk(){}
_=bk.prototype=new ti();_.s=ek;_.tI=20;function ik(a,b){ls(new ks());a.b=ls(new ks());lk(a,b,(ok(),new mk()));return a}
function kk(d,a){var b,c;for(c=dr(new br(),d.b);c.a<c.b.b;){b=wf(gr(c));if(ud((xd(),null.A()),a)){return b}}return null}
function lk(d,f){var b,c,e,a;c=$doc.createElement((xd(),hb));d.a=$doc.createElement(ib);c.appendChild(d.a);if(!f){e=$doc.createElement(rb);d.a.appendChild(e)}b=(a=$doc.createElement(zb),a.tabIndex=0,a);b.appendChild(c);d.h=b;d.h.setAttribute(Ab,Bb);eh(d.h,2225|(d.h.__eventBits||0));d.h[C]=Cb;if(f){Bl(d,am(d.h)+Db+Eb)}else{Bl(d,am(d.h)+Db+Fb)}d.h.style[ac]=bc;d.h.setAttribute(cc,ec)}
function pk(a){var b;kk(this,a.target);switch(sh(a)){case 1:{this.h.focus();break}{break}case 2048:{wf(ps(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{wf(ps(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{wf(ps(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:wf(ps(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:wf(ps(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{wf(ps(this.b,0))}}break}}}
function qk(){Bm(this)}
function fk(){}
_=fk.prototype=new jm();_.s=pk;_.t=qk;_.tI=21;_.a=null;function ok(){ok=vt}
function mk(){}
_=mk.prototype=new po();_.tI=0;function ul(b,a){b.h=a;b.h.tabIndex=0;return b}
function wl(a){var b;b=sh(a);if((b&896)!=0){sh(a)}else if(b==1024){}else{sh(a)}}
function tl(){}
_=tl.prototype=new ti();_.s=wl;_.tI=22;function xl(a){yl(a,zd((xd(),fc)),gc);return a}
function yl(c,a,b){c.h=a;c.h.tabIndex=0;if(b!=null){c.h[C]=b}return c}
function sl(){}
_=sl.prototype=new tl();_.tI=23;function yk(a){yl(a,zd((xd(),hc)),ic);return a}
function xk(){}
_=xk.prototype=new sl();_.tI=24;function cl(){cl=vt;gl=ys(new xs());hl=Cs(new Bs())}
function bl(b,a){cl();b.e=sm(new km());b.h=a;Am(b);return b}
function dl(){var b,a;cl();var c,d;for(d=(b=Ap(new zp(),ds(hl.a).b.a),tr(new sr(),b));fr(d.a.a);){c=kf((a=kf(gr(d.a.a),9),a.n()),6);if(c.f){c.t()}}}
function fl(a){cl();var b;b=kf(yq(gl,a),5);if(b){return b}if(gl.d==0){xg(new Ck())}b=Fk(new Ek());Eq(gl,a,b);Ds(hl,b);return b}
function Bk(){}
_=Bk.prototype=new Bh();_.tI=25;var gl,hl;function Ck(){}
_=Ck.prototype=new po();_.tI=26;function al(){al=vt;cl()}
function Fk(a){al();bl(a,$doc.body);return a}
function Ek(){}
_=Ek.prototype=new Bk();_.tI=27;function ql(a){ul(a,$doc.createElement((xd(),jc)));a.h[C]=kc;return a}
function pl(){}
_=pl.prototype=new tl();_.tI=28;function em(a){ki(a);a.a=(bj(),cj);a.b=(jj(),kj);a.d[sb]=tb;a.d[ub]=tb;return a}
function fm(c,e){var b,d,a;d=$doc.createElement((xd(),rb));b=(a=$doc.createElement(lc),(a[mc]=c.a.a,undefined),(a.style[nc]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);Cm(e);tm(c.e,e);b.appendChild(e.h);Em(e,c)}
function im(c){var a,b;b=Bd((xd(),c.h));a=qi(this,c);if(a){this.c.removeChild(Bd(b))}return a}
function cm(){}
_=cm.prototype=new ji();_.w=im;_.tI=29;function sm(a){a.a=Fe(Af,0,6,4,0);return a}
function tm(a,b){wm(a,b,a.b)}
function vm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function wm(d,e,a){var b,c;if(a<0||a>d.b){throw new lo()}if(d.b==d.a.length){c=Fe(Af,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){cf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){cf(d.a,b,d.a[b-1])}cf(d.a,a,e)}
function xm(c,b){var a;if(b<0||b>=c.b){throw new lo()}--c.b;for(a=b;a<c.b;++a){cf(c.a,a,c.a[a+1])}cf(c.a,c.b,null)}
function ym(b,c){var a;a=vm(b,c);if(a==-1){throw new ot()}xm(b,a)}
function km(){}
_=km.prototype=new po();_.tI=0;_.a=null;_.b=0;function nm(b,a){b.b=a;return b}
function pm(a){if(a.a>=a.b.b){throw new ot()}return a.b.a[++a.a]}
function qm(){return this.a<this.b.b-1}
function rm(){return pm(this)}
function lm(){}
_=lm.prototype=new po();_.p=qm;_.r=rm;_.tI=0;_.a=-1;_.b=null;function ln(){}
_=ln.prototype=new xe();_.tI=0;function nn(a){em(new cm());oj(new nj());em(new cm());ck(new bk());ql(new pl());ik(new fk(),false);gi(new bi(),pc);Dj(new Cj());a.e=yi(new xi());a.b=em(new cm());a.d=xl(new sl());a.c=yk(new xk());a.a=fi(new bi());yj(new rj(),$moduleBase+qc);Dd((xd(),a.e.h),rc);fm(a.b,a.e);fm(a.b,a.d);fm(a.b,a.c);fm(a.b,a.a);Ch((cl(),fl(null)),a.b);return a}
function mn(){}
_=mn.prototype=new ln();_.tI=0;function np(){}
_=np.prototype=new po();_.tI=3;function co(){}
_=co.prototype=new np();_.tI=4;function to(){}
_=to.prototype=new co();_.tI=5;function vn(){}
_=vn.prototype=new to();_.tI=31;function Cn(c,a){var b;b=new yn();return b}
function yn(){}
_=yn.prototype=new po();_.tI=0;function zn(){}
_=zn.prototype=new to();_.tI=34;function fo(){}
_=fo.prototype=new to();_.tI=35;function io(){}
_=io.prototype=new to();_.tI=36;function mo(b,a){return b}
function lo(){}
_=lo.prototype=new to();_.tI=37;function bp(b,a){if(!(a!=null&&jf(a.tI,1))){return false}return String(b)==a}
function fp(b,a){return b.substr(a,b.length-a)}
function hp(c){if(c.length==0||c[0]>D&&c[c.length-1]>D){return c}var a=c.replace(/^(\s*)/,F);var b=a.replace(/\s*$/,F);return b}
function jp(a){return bp(this,a)}
function lp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function mp(){return Do(this)}
_=String.prototype;_.eQ=jp;_.hC=mp;_.tI=2;function yo(){yo=vt;zo={};Co={}}
function Ao(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function Do(c){yo();var a=sc+c;var b=Co[a];if(b!=null){return b}b=zo[a];if(b==null){b=Ao(c)}Eo();return Co[a]=b}
function Eo(){if(Bo==256){zo=Co;Co={};Bo=0}++Bo}
var zo,Bo=0,Co;function pp(){}
_=pp.prototype=new to();_.tI=38;function tp(a,b){var c;while(a.p()){c=a.r();if(b==null?c==null:gd(b,c)){return a}}return null}
function vp(a){throw new pp()}
function wp(b){var a;a=tp(this.q(),b);return !!a}
function sp(){}
_=sp.prototype=new po();_.i=vp;_.j=wp;_.tI=0;function ds(b){var a;a=Ep(new yp(),b);return yr(new rr(),b,a)}
function es(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&jf(c.tI,11))){return false}e=kf(c,11);if(kf(this,11).d!=e.d){return false}for(b=Ap(new zp(),Ep(new yp(),e).a);fr(b.a);){a=kf(gr(b.a),9);d=a.n();f=a.o();if(!(d==null?kf(this,11).c:d!=null&&jf(d.tI,1)?Aq(kf(this,11),kf(d,1)):zq(kf(this,11),d,~~id(d)))){return false}if(!ut(f,d==null?kf(this,11).b:d!=null&&jf(d.tI,1)?kf(this,11).e[sc+kf(d,1)]:wq(kf(this,11),d,~~id(d)))){return false}}return true}
function fs(){var a,b,c;c=0;for(b=Ap(new zp(),Ep(new yp(),kf(this,11)).a);fr(b.a);){a=kf(gr(b.a),9);c+=a.hC();c=~~c}return c}
function qr(){}
_=qr.prototype=new po();_.eQ=es;_.hC=fs;_.tI=0;function rq(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.i(a[f])}}}}
function sq(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=pq(e,c.substring(1));a.i(b)}}}
function tq(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function vq(b,a){return a==null?b.c:a!=null&&jf(a.tI,1)?Aq(b,kf(a,1)):zq(b,a,~~id(a))}
function yq(b,a){return a==null?b.b:a!=null&&jf(a.tI,1)?b.e[sc+kf(a,1)]:wq(b,a,~~id(a))}
function wq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.n();if(h.m(g,d)){return c.o()}}}return null}
function zq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.n();if(h.m(g,d)){return true}}}return false}
function Aq(b,a){return sc+a in b.e}
function Eq(b,a,c){return a==null?Cq(b,c):a!=null&&jf(a.tI,1)?Dq(b,kf(a,1),c):Bq(b,a,c,~~id(a))}
function Bq(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.n();if(i.m(g,d)){var h=c.o();c.x(j);return h}}}else{a=i.a[e]=[]}var c=ht(new gt(),g,j);a.push(c);++i.d;return null}
function Cq(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function Dq(d,a,e){var b,c=d.e;a=sc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Fq(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&gd(a,b)}
function xp(){}
_=xp.prototype=new qr();_.m=Fq;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function is(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&jf(b.tI,12))){return false}c=kf(b,12);if(c.y()!=this.y()){return false}for(a=c.q();a.p();){d=a.r();if(!this.j(d)){return false}}return true}
function js(){var a,b,c;a=0;for(b=this.q();b.p();){c=b.r();if(c!=null){a+=id(c);a=~~a}}return a}
function gs(){}
_=gs.prototype=new sp();_.eQ=is;_.hC=js;_.tI=39;function Ep(b,a){b.a=a;return b}
function aq(d,c){var a,b,e;if(c!=null&&jf(c.tI,9)){a=kf(c,9);b=a.n();if(vq(d.a,b)){e=yq(d.a,b);return As(a.o(),e)}}return false}
function bq(a){return aq(this,a)}
function cq(){return Ap(new zp(),this.a)}
function dq(){return this.a.d}
function yp(){}
_=yp.prototype=new gs();_.j=bq;_.q=cq;_.y=dq;_.tI=40;_.a=null;function Ap(c,b){var a;c.b=b;a=ls(new ks());if(c.b.c){ns(a,fq(new eq(),c.b))}sq(c.b,a);rq(c.b,a);c.a=dr(new br(),a);return c}
function Cp(){return fr(this.a)}
function Dp(){return kf(gr(this.a),9)}
function zp(){}
_=zp.prototype=new po();_.p=Cp;_.r=Dp;_.tI=0;_.a=null;_.b=null;function as(b){var a;if(b!=null&&jf(b.tI,9)){a=kf(b,9);if(ut(this.n(),a.n())&&ut(this.o(),a.o())){return true}}return false}
function bs(){var a,b;a=0;b=0;if(this.n()!=null){a=id(this.n())}if(this.o()!=null){b=id(this.o())}return a^b}
function Er(){}
_=Er.prototype=new po();_.eQ=as;_.hC=bs;_.tI=41;function fq(b,a){b.a=a;return b}
function hq(){return null}
function iq(){return this.a.b}
function jq(a){return Cq(this.a,a)}
function eq(){}
_=eq.prototype=new Er();_.n=hq;_.o=iq;_.x=jq;_.tI=42;_.a=null;function lq(c,a,b){c.b=b;c.a=a;return c}
function nq(){return this.a}
function oq(){return this.b.e[sc+this.a]}
function pq(b,a){return lq(new kq(),a,b)}
function qq(a){return Dq(this.b,this.a,a)}
function kq(){}
_=kq.prototype=new Er();_.n=nq;_.o=oq;_.x=qq;_.tI=43;_.a=null;_.b=null;function kr(a){ms(this,this.y(),a);return true}
function lr(a,b){if(a<0||a>=b){or(a,b)}}
function mr(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&jf(e.tI,10))){return false}f=kf(e,10);if(this.y()!=f.b){return false}c=dr(new br(),this);d=dr(new br(),f);while(c.a<c.b.b){a=gr(c);b=gr(d);if(!(a==null?b==null:gd(a,b))){return false}}return true}
function nr(){var a,b,c;b=1;a=dr(new br(),this);while(a.a<a.b.b){c=gr(a);b=31*b+(c==null?0:id(c));b=~~b}return b}
function or(a,b){throw mo(new lo(),tc+a+uc+b)}
function pr(){return dr(new br(),this)}
function ar(){}
_=ar.prototype=new sp();_.i=kr;_.eQ=mr;_.hC=nr;_.q=pr;_.tI=0;function dr(b,a){b.b=a;return b}
function fr(a){return a.a<a.b.b}
function gr(a){if(a.a>=a.b.b){throw new ot()}return ps(a.b,a.a++)}
function hr(){return this.a<this.b.b}
function ir(){return gr(this)}
function br(){}
_=br.prototype=new po();_.p=hr;_.r=ir;_.tI=0;_.a=0;_.b=null;function yr(b,a,c){b.a=a;b.b=c;return b}
function Br(a){return vq(this.a,a)}
function Cr(){var a;return a=Ap(new zp(),this.b.a),tr(new sr(),a)}
function Dr(){return this.b.a.d}
function rr(){}
_=rr.prototype=new gs();_.j=Br;_.q=Cr;_.y=Dr;_.tI=44;_.a=null;_.b=null;function tr(a,b){a.a=b;return a}
function wr(){return fr(this.a.a)}
function xr(){var a;return a=kf(gr(this.a.a),9),a.n()}
function sr(){}
_=sr.prototype=new po();_.p=wr;_.r=xr;_.tI=0;_.a=null;function ls(a){a.a=Fe(Bf,0,0,0,0);a.b=0;return a}
function ns(b,a){cf(b.a,b.b++,a);return true}
function ms(c,a,b){if(a<0||a>c.b){or(a,c.b)}c.a.splice(a,0,b);++c.b}
function ps(b,a){lr(a,b.b);return b.a[a]}
function qs(c,b,a){for(;a<c.b;++a){if(ut(b,c.a[a])){return a}}return -1}
function rs(a){return cf(this.a,this.b++,a),true}
function ss(a){return qs(this,a,0)!=-1}
function ts(){return this.b}
function ks(){}
_=ks.prototype=new ar();_.i=rs;_.j=ss;_.y=ts;_.tI=45;_.a=null;_.b=0;function ys(a){tq(a);return a}
function As(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&gd(a,b)}
function xs(){}
_=xs.prototype=new xp();_.tI=46;function Cs(a){a.a=ys(new xs());return a}
function Ds(c,a){var b;b=Eq(c.a,a,c);return b==null}
function Fs(b){var a;return a=Eq(this.a,b,this),a==null}
function at(a){return vq(this.a,a)}
function bt(){var a;return a=Ap(new zp(),ds(this.a).b.a),tr(new sr(),a)}
function ct(){return this.a.d}
function Bs(){}
_=Bs.prototype=new gs();_.i=Fs;_.j=at;_.q=bt;_.y=ct;_.tI=47;_.a=null;function ht(b,a,c){b.a=a;b.b=c;return b}
function jt(){return this.a}
function kt(){return this.b}
function mt(b){var a;a=this.b;this.b=b;return a}
function gt(){}
_=gt.prototype=new Er();_.n=jt;_.o=kt;_.x=mt;_.tI=48;_.a=null;_.b=null;function ot(){}
_=ot.prototype=new to();_.tI=49;function ut(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&gd(a,b)}
function tn(){!!$stats&&$stats({moduleName:$moduleName,subSystem:vc,evtGroup:wc,millis:(new Date()).getTime(),type:xc,className:yc});nn(new mn())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{tn()}catch(a){b(d)}else{tn()}}
function vt(){}
var Af=Cn(Ac,Bc),Bf=Cn(Cc,Dc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();