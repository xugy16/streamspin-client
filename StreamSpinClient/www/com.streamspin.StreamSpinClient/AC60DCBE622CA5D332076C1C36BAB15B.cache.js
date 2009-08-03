(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',C=' ',Fc=', Size: ',ac='-',sb='0',fc='0px',vc='100%',Ac='100px',Cc='30px',Dc=':',Cb='DIV',w='DOMMouseScroll',Ec='Index: ',rc='Item four',nc='Item one',tc='Item six',sc='Item that has a long title and is number five',qc='Item tree',pc='Item two',A='MouseEvents',id='Object;',Bc='Status: <b>Online<\/b>',xc='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',gd='Widget;',fd='[Lcom.google.gwt.user.client.ui.',hd='[Ljava.lang.',vb='align',m='blur',ob='bottom',bb='button',tb='cellPadding',rb='cellSpacing',lb='center',x='change',B='className',cb='click',dd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',ib='div',u='error',yb='focus',db='gwt-Button',kb='gwt-HTML',xb='gwt-Image',jb='gwt-Label',Ab='gwt-ListBox',Fb='gwt-MenuBar',jc='gwt-TextArea',yc='height',gc='hideFocus',cc='horizontal',z='html',lc='images/daisy.gif',zb='img',dc='keydown',oc='keypress',zc='keyup',D='left',ed='load',n='losecapture',Eb='menubar',pb='middle',bd='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',cd='onModuleLoadStart',Bb='option',ec='outline',ab='position',mb='right',Db='role',t='scroll',l='select',kc='someTest',ad='startup',eb='submit',gb='table',hb='tbody',ub='td',ic='textarea',mc='title of Main Window',F='top',qb='tr',hc='true',fb='type',wc='value',bc='vertical',wb='verticalAlign',uc='width';var _;function ip(a){return this===(a==null?null:a)}
function jp(){return this.$H||(this.$H=++zd)}
function gp(){}
_=gp.prototype={};_.eQ=ip;_.hC=jp;_.tM=mu;_.tI=1;function qd(b,a){return b.tM==mu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function sd(a){return a.tM==mu||a.tI==2?a.hC():a.$H||(a.$H=++zd)}
var zd=0;function be(){be=mu;Dd();new Bd()}
function de(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function ee(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function je(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Ad(){}
_=Ad.prototype=new gp();_.tI=0;function ae(){ae=mu;be()}
function Fd(){}
_=Fd.prototype=new Ad();_.tI=0;function Dd(){Dd=mu;ae()}
function Ed(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Bd(){}
_=Bd.prototype=new Fd();_.tI=0;function mf(){}
_=mf.prototype=new gp();_.tI=0;function tf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function uf(a,f,c,b,e){var d;d=tf(e,b);vf(a,f,c,d);return d}
function vf(b,d,c,a){if(!wf){wf=new pf()}zf(a,wf);a.tI=d;a.qI=c;return a}
function xf(a,b,c){if(c!=null){if(a.qI>0&&!Cf(c.tI,a.qI)){throw new no()}if(a.qI<0&&(c.tM==mu||c.tI==2)){throw new no()}}return a[b]=c}
function zf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function pf(){}
_=pf.prototype=new gp();_.tI=0;_.length=0;_.qI=0;var wf=null;function Df(b,a){return b&&!!lg[b][a]}
function Cf(b,a){return b&&lg[b][a]}
function Ef(b,a){if(b!=null&&!Cf(b.tI,a)){throw new ro()}return b}
function kg(a){if(a!=null){throw new ro()}return a}
var lg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function ah(b,a,c){var d;if(a==fh){if(gi(b)==8192){fh=null}}d=Fg;Fg=b;try{c.u(b)}finally{Fg=d}}
var Fg=null,fh=null;function lh(a){qh();if(!mh){mh=ct(new bt())}et(mh,a)}
function nh(){var a;if(mh){for(a=Ar(new yr(),mh);a.a<a.b.b;){Ef(Dr(a),3);Al()}}}
function oh(){var a,b;b=null;if(mh){for(a=Ar(new yr(),mh);a.a<a.b.b;){Ef(Dr(a),3);b=null}}return b}
function qh(){if(!ph){ph=true;oi()}}
var mh=null,ph=false;function gi(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function ii(){if(!ki){Dh();wh();ki=true}}
function li(a){return a!=null&&Df(a.tI,4)&&!(a!=null&&(a.tM!=mu&&a.tI!=2))}
var ki=false;function Dh(){bi=function(b){if(ai(b)){var a=Fh;if(a&&a.__listener){if(li(a.__listener)){ah(b,a,a.__listener);b.stopPropagation()}}}};ai=function(a){return true};ci=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(li(c)){ah(b,a,c)}}};$wnd.addEventListener(cb,bi,true);$wnd.addEventListener(nb,bi,true);$wnd.addEventListener(o,bi,true);$wnd.addEventListener(s,bi,true);$wnd.addEventListener(p,bi,true);$wnd.addEventListener(r,bi,true);$wnd.addEventListener(q,bi,true);$wnd.addEventListener(v,bi,true);$wnd.addEventListener(dc,ai,true);$wnd.addEventListener(zc,ai,true);$wnd.addEventListener(oc,ai,true)}
function Eh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?ci:null;if(b&2)c.ondblclick=a&2?ci:null;if(b&4)c.onmousedown=a&4?ci:null;if(b&8)c.onmouseup=a&8?ci:null;if(b&16)c.onmouseover=a&16?ci:null;if(b&32)c.onmouseout=a&32?ci:null;if(b&64)c.onmousemove=a&64?ci:null;if(b&128)c.onkeydown=a&128?ci:null;if(b&256)c.onkeypress=a&256?ci:null;if(b&512)c.onkeyup=a&512?ci:null;if(b&1024)c.onchange=a&1024?ci:null;if(b&2048)c.onfocus=a&2048?ci:null;if(b&4096)c.onblur=a&4096?ci:null;if(b&8192)c.onlosecapture=a&8192?ci:null;if(b&16384)c.onscroll=a&16384?ci:null;if(b&32768)c.onload=a&32768?ci:null;if(b&65536)c.onerror=a&65536?ci:null;if(b&131072)c.onmousewheel=a&131072?ci:null;if(b&262144)c.oncontextmenu=a&262144?ci:null}
var Fh=null,ai=null,bi=null,ci=null;function wh(){$wnd.addEventListener(q,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(z==b.target.tagName.toLowerCase()){var c=$doc.createEvent(A);c.initMouseEvent(s,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(w,bi,true)}
function yh(b,a){ii();Eh(b,a);xh(b,a)}
function xh(b,a){if(a&131072){b.addEventListener(w,ci,false)}}
function oi(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=oh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{nh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function pm(b,a){xm(b.i,a,true)}
function rm(b,a){if(b.i){sm(b.i,a)}b.i=a}
function sm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function wm(a){var b,c;b=a[B]==null?null:String(a[B]);c=b.indexOf(cq(32));if(c>=0){return b.substr(0,c-0)}return b}
function xm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new kp()}j=Ep(j);if(j.length==0){throw new Co()}i=c[B]==null?null:String(c[B]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=C}c[B]=i+j}}else{if(e!=-1){b=Ep(i.substr(0,e-0));d=Ep(Cp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+C+d}c[B]=h}}}
function om(){}
_=om.prototype=new gp();_.tI=7;_.i=null;function rn(a){if(a.g){throw new Fo()}a.g=true;a.i.__listener=a;a.m();a.w()}
function sn(a){if(!a.g){throw new Fo()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function tn(a){if(a.h){a.h.y(a)}else if(a.h){throw new Fo()}}
function un(b,a){if(b.g){b.i.__listener=null}rm(b,a);if(b.g){b.i.__listener=b}}
function vn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new Fo()}c.h=b;if(b.g){rn(c)}}}
function wn(){}
function xn(){}
function yn(a){}
function zn(){sn(this)}
function An(){}
function Bn(){}
function Fm(){}
_=Fm.prototype=new om();_.m=wn;_.n=xn;_.u=yn;_.v=zn;_.w=An;_.x=Bn;_.tI=8;_.g=false;_.h=null;function nl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=fn(b);rn(a)}}
function ol(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=fn(b);a.v()}}
function pl(){}
function ql(){}
function ll(){}
_=ll.prototype=new Fm();_.m=nl;_.n=ol;_.w=pl;_.x=ql;_.tI=9;function cj(c,a,b){tn(a);kn(c.f,a);b.appendChild(a.i);vn(a,c)}
function ej(b,c){var a;if(c.h!=b){return false}vn(c,null);a=c.i;ee((be(),a)).removeChild(a);pn(b.f,c);return true}
function fj(){return dn(new bn(),this.f)}
function gj(a){return ej(this,a)}
function aj(){}
_=aj.prototype=new ll();_.s=fj;_.y=gj;_.tI=10;function qi(a,b){cj(a,b,a.i)}
function si(b,c){var a;a=ej(b,c);if(a){ti(c.i)}return a}
function ti(a){a.style[D]=E;a.style[F]=E;a.style[ab]=E}
function ui(a){return si(this,a)}
function pi(){}
_=pi.prototype=new aj();_.y=ui;_.tI=11;function ij(b,a){b.i=a;b.i.tabIndex=0;return b}
function kj(a){gi(a)}
function hj(){}
_=hj.prototype=new Fm();_.u=kj;_.tI=12;function xi(b,a){b.i=a;b.i.tabIndex=0;return b}
function wi(){}
_=wi.prototype=new hj();_.tI=13;function Ai(b,a){xi(b,$doc.createElement((be(),bb)));Ci(b.i);b.i[B]=db;b.i.innerHTML=a||E;return b}
function Ci(b){if(b.type==eb){try{b.setAttribute(fb,bb)}catch(a){}}}
function vi(){}
_=vi.prototype=new wi();_.tI=14;function Ei(a){a.f=jn(new an());a.e=$doc.createElement((be(),gb));a.d=$doc.createElement(hb);a.e.appendChild(a.d);a.i=a.e;return a}
function Di(){}
_=Di.prototype=new aj();_.tI=15;_.d=null;_.e=null;function uk(a){a.i=$doc.createElement((be(),ib));a.i[B]=jb;return a}
function xk(a){gi(a)}
function tk(){}
_=tk.prototype=new Fm();_.u=xk;_.tI=16;function mj(a){a.i=$doc.createElement((be(),ib));a.i[B]=kb;return a}
function lj(){}
_=lj.prototype=new tk();_.tI=17;function vj(){vj=mu;tj(new sj(),lb);xj=tj(new sj(),D);tj(new sj(),mb);wj=xj}
var wj,xj;function tj(b,a){b.a=a;return b}
function sj(){}
_=sj.prototype=new gp();_.tI=0;_.a=null;function Dj(){Dj=mu;Bj(new Aj(),ob);Bj(new Aj(),pb);Ej=Bj(new Aj(),F)}
var Ej;function Bj(a,b){a.a=b;return a}
function Aj(){}
_=Aj.prototype=new gp();_.tI=0;_.a=null;function dk(a){Ei(a);a.a=(vj(),wj);a.c=(Dj(),Ej);a.b=$doc.createElement((be(),qb));a.d.appendChild(a.b);a.e[rb]=sb;a.e[tb]=sb;return a}
function ek(c,d){var b,a;b=(a=$doc.createElement((be(),ub)),(a[vb]=c.a.a,undefined),(a.style[wb]=c.c.a,undefined),a);c.b.appendChild(b);tn(d);kn(c.f,d);b.appendChild(d.i);vn(d,c)}
function hk(c){var a,b;b=ee((be(),c.i));a=ej(this,c);if(a){this.b.removeChild(b)}return a}
function bk(){}
_=bk.prototype=new Di();_.y=hk;_.tI=18;_.b=null;function qk(){qk=mu;kr(new ot())}
function pk(a,b){qk();mk(new lk(),a,b);a.i[B]=xb;return a}
function rk(a){gi(a)}
function ik(){}
_=ik.prototype=new Fm();_.u=rk;_.tI=19;function jk(){}
_=jk.prototype=new gp();_.tI=0;function mk(b,a,c){un(a,$doc.createElement((be(),zb)));yh(a.i,229501|(a.i.__eventBits||0));a.i.src=c;return b}
function lk(){}
_=lk.prototype=new jk();_.tI=0;function zk(a){ij(a,de((be(),false)));a.i[B]=Ab;return a}
function Ck(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((be(),Bb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function Ek(a){if(gi(a)==1024){}else{gi(a)}}
function yk(){}
_=yk.prototype=new hj();_.u=Ek;_.tI=20;function cl(a){ct(new bt());a.b=ct(new bt());fl(a,false,(il(),new gl()));return a}
function el(d,a){var b,c;for(c=Ar(new yr(),d.b);c.a<c.b.b;){b=kg(Dr(c));if(Ed((be(),null.C()),a)){return b}}return null}
function fl(d,f){var b,c,e,a;c=$doc.createElement((be(),gb));d.a=$doc.createElement(hb);c.appendChild(d.a);if(!f){e=$doc.createElement(qb);d.a.appendChild(e)}b=(a=$doc.createElement(Cb),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Db,Eb);yh(d.i,2225|(d.i.__eventBits||0));d.i[B]=Fb;if(f){pm(d,wm(d.i)+ac+bc)}else{pm(d,wm(d.i)+ac+cc)}d.i.style[ec]=fc;d.i.setAttribute(gc,hc)}
function jl(a){var b;el(this,a.target);switch(gi(a)){case 1:{this.i.focus();break}{break}case 2048:{kg(gt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{kg(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{kg(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:kg(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:kg(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{kg(gt(this.b,0))}}break}}}
function kl(){sn(this)}
function Fk(){}
_=Fk.prototype=new Fm();_.u=jl;_.v=kl;_.tI=21;_.a=null;function il(){il=mu}
function gl(){}
_=gl.prototype=new gp();_.tI=0;function zl(){zl=mu;Dl=pt(new ot());El=tt(new st())}
function yl(b,a){zl();b.f=jn(new an());b.i=a;rn(b);return b}
function Al(){var b,a;zl();var c,d;for(d=(b=rq(new qq(),As(El.a).b.a),ks(new js(),b));Cr(d.a.a);){c=Ef((a=Ef(Dr(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function Cl(a){zl();var b;b=Ef(pr(Dl,a),5);if(b){return b}if(Dl.d==0){lh(new tl())}b=wl(new vl());vr(Dl,a,b);ut(El,b);return b}
function sl(){}
_=sl.prototype=new pi();_.tI=22;var Dl,El;function tl(){}
_=tl.prototype=new gp();_.tI=23;function xl(){xl=mu;zl()}
function wl(a){xl();yl(a,$doc.body);return a}
function vl(){}
_=vl.prototype=new sl();_.tI=24;function km(b,a){b.i=a;b.i.tabIndex=0;return b}
function nm(a){var b;b=gi(a);if((b&896)!=0){gi(a)}else if(b==1024){}else{gi(a)}}
function jm(){}
_=jm.prototype=new hj();_.u=nm;_.tI=25;function hm(a){km(a,$doc.createElement((be(),ic)));a.i[B]=jc;return a}
function gm(){}
_=gm.prototype=new jm();_.tI=26;function Am(a){Ei(a);a.a=(vj(),wj);a.b=(Dj(),Ej);a.e[rb]=sb;a.e[tb]=sb;return a}
function Bm(c,e){var b,d,a;d=$doc.createElement((be(),qb));b=(a=$doc.createElement(ub),(a[vb]=c.a.a,undefined),(a.style[wb]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);tn(e);kn(c.f,e);b.appendChild(e.i);vn(e,c)}
function Em(c){var a,b;b=ee((be(),c.i));a=ej(this,c);if(a){this.d.removeChild(ee(b))}return a}
function ym(){}
_=ym.prototype=new Di();_.y=Em;_.tI=27;function jn(a){a.a=uf(og,0,6,4,0);return a}
function kn(a,b){nn(a,b,a.b)}
function mn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function nn(d,e,a){var b,c;if(a<0||a>d.b){throw new cp()}if(d.b==d.a.length){c=uf(og,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){xf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){xf(d.a,b,d.a[b-1])}xf(d.a,a,e)}
function on(c,b){var a;if(b<0||b>=c.b){throw new cp()}--c.b;for(a=b;a<c.b;++a){xf(c.a,a,c.a[a+1])}xf(c.a,c.b,null)}
function pn(b,c){var a;a=mn(b,c);if(a==-1){throw new fu()}on(b,a)}
function an(){}
_=an.prototype=new gp();_.tI=0;_.a=null;_.b=0;function dn(b,a){b.b=a;return b}
function fn(a){if(a.a>=a.b.b){throw new fu()}return a.b.a[++a.a]}
function gn(){return this.a<this.b.b-1}
function hn(){return fn(this)}
function bn(){}
_=bn.prototype=new gp();_.r=gn;_.t=hn;_.tI=0;_.a=-1;_.b=null;function bo(){}
_=bo.prototype=new mf();_.tI=0;function eo(a){a.d=Am(new ym());a.c=dk(new bk());a.h=Am(new ym());a.g=zk(new yk());a.a=hm(new gm());a.e=cl(new Fk());a.b=Ai(new vi(),kc);a.f=uk(new tk());a.j=mj(new lj());a.i=pk(new ik(),$moduleBase+lc);je((be(),a.j.i),mc);Ck(a.g,nc,nc,-1);Ck(a.g,pc,pc,-1);Ck(a.g,qc,qc,-1);Ck(a.g,rc,rc,-1);Ck(a.g,sc,sc,-1);Ck(a.g,tc,tc,-1);a.g.i.size=3;a.g.i.style[uc]=vc;a.a.i[wc]=xc!=null?xc:E;a.a.i.style[uc]=vc;Bm(a.h,a.g);Bm(a.h,a.a);a.h.i.style[yc]=Ac;a.h.i.style[uc]=vc;a.f.i.innerHTML=Bc;ek(a.c,a.b);ek(a.c,a.e);a.i.i.style[yc]=Cc;Bm(a.d,a.j);Bm(a.d,a.h);Bm(a.d,a.i);Bm(a.d,a.f);Bm(a.d,a.c);a.d.i.style[yc]=vc;a.d.i.style[uc]=vc;qi((zl(),Cl(null)),a.d);return a}
function co(){}
_=co.prototype=new bo();_.tI=0;function eq(){}
_=eq.prototype=new gp();_.tI=3;function Ao(){}
_=Ao.prototype=new eq();_.tI=4;function kp(){}
_=kp.prototype=new Ao();_.tI=5;function no(){}
_=no.prototype=new kp();_.tI=29;function uo(c,a){var b;b=new qo();return b}
function qo(){}
_=qo.prototype=new gp();_.tI=0;function ro(){}
_=ro.prototype=new kp();_.tI=32;function Co(){}
_=Co.prototype=new kp();_.tI=33;function Fo(){}
_=Fo.prototype=new kp();_.tI=34;function dp(b,a){return b}
function cp(){}
_=cp.prototype=new kp();_.tI=35;function yp(b,a){if(!(a!=null&&Df(a.tI,1))){return false}return String(b)==a}
function Cp(b,a){return b.substr(a,b.length-a)}
function Ep(c){if(c.length==0||c[0]>C&&c[c.length-1]>C){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function aq(a){return yp(this,a)}
function cq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function dq(){return up(this)}
_=String.prototype;_.eQ=aq;_.hC=dq;_.tI=2;function pp(){pp=mu;qp={};tp={}}
function rp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function up(c){pp();var a=Dc+c;var b=tp[a];if(b!=null){return b}b=qp[a];if(b==null){b=rp(c)}vp();return tp[a]=b}
function vp(){if(sp==256){qp=tp;tp={};sp=0}++sp}
var qp,sp=0,tp;function gq(){}
_=gq.prototype=new kp();_.tI=36;function kq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:qd(b,c)){return a}}return null}
function mq(a){throw new gq()}
function nq(b){var a;a=kq(this.s(),b);return !!a}
function jq(){}
_=jq.prototype=new gp();_.k=mq;_.l=nq;_.tI=0;function As(b){var a;a=vq(new pq(),b);return ps(new is(),b,a)}
function Bs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Df(c.tI,11))){return false}e=Ef(c,11);if(Ef(this,11).d!=e.d){return false}for(b=rq(new qq(),vq(new pq(),e).a);Cr(b.a);){a=Ef(Dr(b.a),9);d=a.p();f=a.q();if(!(d==null?Ef(this,11).c:d!=null&&Df(d.tI,1)?rr(Ef(this,11),Ef(d,1)):qr(Ef(this,11),d,~~sd(d)))){return false}if(!lu(f,d==null?Ef(this,11).b:d!=null&&Df(d.tI,1)?Ef(this,11).e[Dc+Ef(d,1)]:nr(Ef(this,11),d,~~sd(d)))){return false}}return true}
function Cs(){var a,b,c;c=0;for(b=rq(new qq(),vq(new pq(),Ef(this,11)).a);Cr(b.a);){a=Ef(Dr(b.a),9);c+=a.hC();c=~~c}return c}
function hs(){}
_=hs.prototype=new gp();_.eQ=Bs;_.hC=Cs;_.tI=0;function ir(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function jr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=gr(e,c.substring(1));a.k(b)}}}
function kr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function mr(b,a){return a==null?b.c:a!=null&&Df(a.tI,1)?rr(b,Ef(a,1)):qr(b,a,~~sd(a))}
function pr(b,a){return a==null?b.b:a!=null&&Df(a.tI,1)?b.e[Dc+Ef(a,1)]:nr(b,a,~~sd(a))}
function nr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function qr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function rr(b,a){return Dc+a in b.e}
function vr(b,a,c){return a==null?tr(b,c):a!=null&&Df(a.tI,1)?ur(b,Ef(a,1),c):sr(b,a,c,~~sd(a))}
function sr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.z(j);return h}}}else{a=i.a[e]=[]}var c=Et(new Dt(),g,j);a.push(c);++i.d;return null}
function tr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ur(d,a,e){var b,c=d.e;a=Dc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function wr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&qd(a,b)}
function oq(){}
_=oq.prototype=new hs();_.o=wr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Df(b.tI,12))){return false}c=Ef(b,12);if(c.A()!=this.A()){return false}for(a=c.s();a.r();){d=a.t();if(!this.l(d)){return false}}return true}
function at(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=sd(c);a=~~a}}return a}
function Ds(){}
_=Ds.prototype=new jq();_.eQ=Fs;_.hC=at;_.tI=37;function vq(b,a){b.a=a;return b}
function xq(d,c){var a,b,e;if(c!=null&&Df(c.tI,9)){a=Ef(c,9);b=a.p();if(mr(d.a,b)){e=pr(d.a,b);return rt(a.q(),e)}}return false}
function yq(a){return xq(this,a)}
function zq(){return rq(new qq(),this.a)}
function Aq(){return this.a.d}
function pq(){}
_=pq.prototype=new Ds();_.l=yq;_.s=zq;_.A=Aq;_.tI=38;_.a=null;function rq(c,b){var a;c.b=b;a=ct(new bt());if(c.b.c){et(a,Cq(new Bq(),c.b))}jr(c.b,a);ir(c.b,a);c.a=Ar(new yr(),a);return c}
function tq(){return Cr(this.a)}
function uq(){return Ef(Dr(this.a),9)}
function qq(){}
_=qq.prototype=new gp();_.r=tq;_.t=uq;_.tI=0;_.a=null;_.b=null;function xs(b){var a;if(b!=null&&Df(b.tI,9)){a=Ef(b,9);if(lu(this.p(),a.p())&&lu(this.q(),a.q())){return true}}return false}
function ys(){var a,b;a=0;b=0;if(this.p()!=null){a=sd(this.p())}if(this.q()!=null){b=sd(this.q())}return a^b}
function vs(){}
_=vs.prototype=new gp();_.eQ=xs;_.hC=ys;_.tI=39;function Cq(b,a){b.a=a;return b}
function Eq(){return null}
function Fq(){return this.a.b}
function ar(a){return tr(this.a,a)}
function Bq(){}
_=Bq.prototype=new vs();_.p=Eq;_.q=Fq;_.z=ar;_.tI=40;_.a=null;function cr(c,a,b){c.b=b;c.a=a;return c}
function er(){return this.a}
function fr(){return this.b.e[Dc+this.a]}
function gr(b,a){return cr(new br(),a,b)}
function hr(a){return ur(this.b,this.a,a)}
function br(){}
_=br.prototype=new vs();_.p=er;_.q=fr;_.z=hr;_.tI=41;_.a=null;_.b=null;function bs(a){dt(this,this.A(),a);return true}
function cs(a,b){if(a<0||a>=b){fs(a,b)}}
function ds(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Df(e.tI,10))){return false}f=Ef(e,10);if(this.A()!=f.b){return false}c=Ar(new yr(),this);d=Ar(new yr(),f);while(c.a<c.b.b){a=Dr(c);b=Dr(d);if(!(a==null?b==null:qd(a,b))){return false}}return true}
function es(){var a,b,c;b=1;a=Ar(new yr(),this);while(a.a<a.b.b){c=Dr(a);b=31*b+(c==null?0:sd(c));b=~~b}return b}
function fs(a,b){throw dp(new cp(),Ec+a+Fc+b)}
function gs(){return Ar(new yr(),this)}
function xr(){}
_=xr.prototype=new jq();_.k=bs;_.eQ=ds;_.hC=es;_.s=gs;_.tI=0;function Ar(b,a){b.b=a;return b}
function Cr(a){return a.a<a.b.b}
function Dr(a){if(a.a>=a.b.b){throw new fu()}return gt(a.b,a.a++)}
function Er(){return this.a<this.b.b}
function Fr(){return Dr(this)}
function yr(){}
_=yr.prototype=new gp();_.r=Er;_.t=Fr;_.tI=0;_.a=0;_.b=null;function ps(b,a,c){b.a=a;b.b=c;return b}
function ss(a){return mr(this.a,a)}
function ts(){var a;return a=rq(new qq(),this.b.a),ks(new js(),a)}
function us(){return this.b.a.d}
function is(){}
_=is.prototype=new Ds();_.l=ss;_.s=ts;_.A=us;_.tI=42;_.a=null;_.b=null;function ks(a,b){a.a=b;return a}
function ns(){return Cr(this.a.a)}
function os(){var a;return a=Ef(Dr(this.a.a),9),a.p()}
function js(){}
_=js.prototype=new gp();_.r=ns;_.t=os;_.tI=0;_.a=null;function ct(a){a.a=uf(pg,0,0,0,0);a.b=0;return a}
function et(b,a){xf(b.a,b.b++,a);return true}
function dt(c,a,b){if(a<0||a>c.b){fs(a,c.b)}c.a.splice(a,0,b);++c.b}
function gt(b,a){cs(a,b.b);return b.a[a]}
function ht(c,b,a){for(;a<c.b;++a){if(lu(b,c.a[a])){return a}}return -1}
function it(a){return xf(this.a,this.b++,a),true}
function jt(a){return ht(this,a,0)!=-1}
function kt(){return this.b}
function bt(){}
_=bt.prototype=new xr();_.k=it;_.l=jt;_.A=kt;_.tI=43;_.a=null;_.b=0;function pt(a){kr(a);return a}
function rt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&qd(a,b)}
function ot(){}
_=ot.prototype=new oq();_.tI=44;function tt(a){a.a=pt(new ot());return a}
function ut(c,a){var b;b=vr(c.a,a,c);return b==null}
function wt(b){var a;return a=vr(this.a,b,this),a==null}
function xt(a){return mr(this.a,a)}
function yt(){var a;return a=rq(new qq(),As(this.a).b.a),ks(new js(),a)}
function zt(){return this.a.d}
function st(){}
_=st.prototype=new Ds();_.k=wt;_.l=xt;_.s=yt;_.A=zt;_.tI=45;_.a=null;function Et(b,a,c){b.a=a;b.b=c;return b}
function au(){return this.a}
function bu(){return this.b}
function du(b){var a;a=this.b;this.b=b;return a}
function Dt(){}
_=Dt.prototype=new vs();_.p=au;_.q=bu;_.z=du;_.tI=46;_.a=null;_.b=null;function fu(){}
_=fu.prototype=new kp();_.tI=47;function lu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&qd(a,b)}
function lo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:ad,evtGroup:bd,millis:(new Date()).getTime(),type:cd,className:dd});eo(new co())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lo()}catch(a){b(d)}else{lo()}}
function mu(){}
var og=uo(fd,gd),pg=uo(hd,id);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();