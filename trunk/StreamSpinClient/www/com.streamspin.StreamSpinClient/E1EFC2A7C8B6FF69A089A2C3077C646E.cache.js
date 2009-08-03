(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var cb='',E=' ',l='#',ad=', Size: ',bc='-',x='/',tb='0',gc='0px',xc='100%',Cc='100px',Ec=':',m='?',Db='DIV',B='DOMMouseScroll',Fc='Index: ',tc='Item four',qc='Item one',vc='Item six',uc='Item that has a long title and is number five',sc='Item tree',rc='Item two',jd='Object;',Dc='Status: <b>Online<\/b>',Ac='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',hd='Widget;',gd='[Lcom.google.gwt.user.client.ui.',id='[Ljava.lang.',wb='align',yb='blur',pb='bottom',db='button',ub='cellPadding',sb='cellSpacing',mb='center',dc='change',D='className',oc='click',fd='com.streamspin.client.StreamSpinClient',C='contextmenu',zc='dblclick',jb='div',z='error',ed='focus',eb='gwt-Button',lb='gwt-HTML',zb='gwt-Image',kb='gwt-Label',Bb='gwt-ListBox',ac='gwt-MenuBar',kc='gwt-TextArea',Bc='height',hc='hideFocus',ec='horizontal',nc='hostBaseURL',Ab='img',n='keydown',o='keypress',p='keyup',F='left',q='load',r='losecapture',Fb='menubar',qb='middle',mc='moduleBaseURL',cd='moduleStartup',s='mousedown',t='mousemove',u='mouseout',v='mouseover',w='mouseup',A='mousewheel',dd='onModuleLoadStart',Cb='option',fc='outline',bb='position',ob='right',Eb='role',y='scroll',nb='select',lc='someTest',bd='startup',fb='submit',hb='table',ib='tbody',vb='td',jc='textarea',pc='title of Main Window',ab='top',rb='tr',ic='true',gb='type',yc='value',cc='vertical',xb='verticalAlign',wc='width';var _;function ip(a){return this===(a==null?null:a)}
function jp(){return this.$H||(this.$H=++Bd)}
function gp(){}
_=gp.prototype={};_.eQ=ip;_.hC=jp;_.tM=mu;_.tI=1;function rd(b,a){return b.tM==mu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function td(a){return a.tM==mu||a.tI==2?a.hC():a.$H||(a.$H=++Bd)}
function yd(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(x);if(a!=-1)b=b.substring(0,a);return b.length>0?b+x:cb}
var Bd=0;function de(){de=mu;Fd();new Dd()}
function fe(a){var b;b=$doc.createElement(nb);if(a){b.multiple=true}return b}
function ge(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function le(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Cd(){}
_=Cd.prototype=new gp();_.tI=0;function be(){be=mu;de()}
function ae(){}
_=ae.prototype=new Cd();_.tI=0;function Fd(){Fd=mu;be()}
function Dd(){}
_=Dd.prototype=new ae();_.tI=0;function of(){}
_=of.prototype=new gp();_.tI=0;function vf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function wf(a,f,c,b,e){var d;d=vf(e,b);xf(a,f,c,d);return d}
function xf(b,d,c,a){if(!yf){yf=new rf()}Bf(a,yf);a.tI=d;a.qI=c;return a}
function zf(a,b,c){if(c!=null){if(a.qI>0&&!Ef(c.tI,a.qI)){throw new no()}if(a.qI<0&&(c.tM==mu||c.tI==2)){throw new no()}}return a[b]=c}
function Bf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function rf(){}
_=rf.prototype=new gp();_.tI=0;_.length=0;_.qI=0;var yf=null;function Ff(b,a){return b&&!!ng[b][a]}
function Ef(b,a){return b&&ng[b][a]}
function ag(b,a){if(b!=null&&!Ef(b.tI,a)){throw new ro()}return b}
function mg(a){if(a!=null){throw new ro()}return a}
var ng=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function ch(b,a,c){var d;if(a==hh){if(gi(b)==8192){hh=null}}d=bh;bh=b;try{c.v(b)}finally{bh=d}}
function jh(a,b){ii();a.__eventBits=b;a.onclick=b&1?ci:null;a.ondblclick=b&2?ci:null;a.onmousedown=b&4?ci:null;a.onmouseup=b&8?ci:null;a.onmouseover=b&16?ci:null;a.onmouseout=b&32?ci:null;a.onmousemove=b&64?ci:null;a.onkeydown=b&128?ci:null;a.onkeypress=b&256?ci:null;a.onkeyup=b&512?ci:null;a.onchange=b&1024?ci:null;a.onfocus=b&2048?ci:null;a.onblur=b&4096?ci:null;a.onlosecapture=b&8192?ci:null;a.onscroll=b&16384?ci:null;a.onload=b&32768?ci:null;a.onerror=b&65536?ci:null;a.onmousewheel=b&131072?ci:null;a.oncontextmenu=b&262144?ci:null}
var bh=null,hh=null;function oh(a){th();if(!ph){ph=ct(new bt())}et(ph,a)}
function qh(){var a;if(ph){for(a=Ar(new yr(),ph);a.a<a.b.b;){ag(Dr(a),3);Al()}}}
function rh(){var a,b;b=null;if(ph){for(a=Ar(new yr(),ph);a.a<a.b.b;){ag(Dr(a),3);b=null}}return b}
function th(){if(!sh){sh=true;oi()}}
var ph=null,sh=false;function gi(a){switch(a.type){case yb:return 4096;case dc:return 1024;case oc:return 1;case zc:return 2;case ed:return 2048;case n:return 128;case o:return 256;case p:return 512;case q:return 32768;case r:return 8192;case s:return 4;case t:return 64;case u:return 32;case v:return 16;case w:return 8;case y:return 16384;case z:return 65536;case A:return 131072;case B:return 131072;case C:return 262144;}}
function ii(){if(!ki){Eh();ki=true}}
function li(a){return a!=null&&Ff(a.tI,4)&&!(a!=null&&(a.tM!=mu&&a.tI!=2))}
var ki=false;function Eh(){bi=function(b){if(ai(b)){var a=Fh;if(a&&a.__listener){if(li(a.__listener)){ch(b,a,a.__listener);b.stopPropagation()}}}};ai=function(a){return true};ci=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(li(c)){ch(b,a,c)}}};$wnd.addEventListener(oc,bi,true);$wnd.addEventListener(zc,bi,true);$wnd.addEventListener(s,bi,true);$wnd.addEventListener(w,bi,true);$wnd.addEventListener(t,bi,true);$wnd.addEventListener(v,bi,true);$wnd.addEventListener(u,bi,true);$wnd.addEventListener(A,bi,true);$wnd.addEventListener(n,ai,true);$wnd.addEventListener(p,ai,true);$wnd.addEventListener(o,ai,true)}
var Fh=null,ai=null,bi=null,ci=null;function oi(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=rh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{qh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function pm(b,a){xm(b.i,a,true)}
function rm(b,a){if(b.i){sm(b.i,a)}b.i=a}
function sm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function wm(a){var b,c;b=a[D]==null?null:String(a[D]);c=b.indexOf(cq(32));if(c>=0){return b.substr(0,c-0)}return b}
function xm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new kp()}j=Ep(j);if(j.length==0){throw new Co()}i=c[D]==null?null:String(c[D]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=E}c[D]=i+j}}else{if(e!=-1){b=Ep(i.substr(0,e-0));d=Ep(Cp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+E+d}c[D]=h}}}
function om(){}
_=om.prototype=new gp();_.tI=7;_.i=null;function rn(a){if(a.g){throw new Fo()}a.g=true;a.i.__listener=a;a.n();a.x()}
function sn(a){if(!a.g){throw new Fo()}try{a.y()}finally{a.o();a.i.__listener=null;a.g=false}}
function tn(a){if(a.h){a.h.z(a)}else if(a.h){throw new Fo()}}
function un(b,a){if(b.g){b.i.__listener=null}rm(b,a);if(b.g){b.i.__listener=b}}
function vn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.w()}c.h=null}else{if(a){throw new Fo()}c.h=b;if(b.g){rn(c)}}}
function wn(){}
function xn(){}
function yn(a){}
function zn(){sn(this)}
function An(){}
function Bn(){}
function Fm(){}
_=Fm.prototype=new om();_.n=wn;_.o=xn;_.v=yn;_.w=zn;_.x=An;_.y=Bn;_.tI=8;_.g=false;_.h=null;function nl(){var a,b;for(b=this.t();b.a<b.b.b-1;){a=fn(b);rn(a)}}
function ol(){var a,b;for(b=this.t();b.a<b.b.b-1;){a=fn(b);a.w()}}
function pl(){}
function ql(){}
function ll(){}
_=ll.prototype=new Fm();_.n=nl;_.o=ol;_.x=pl;_.y=ql;_.tI=9;function cj(c,a,b){tn(a);kn(c.f,a);b.appendChild(a.i);vn(a,c)}
function ej(b,c){var a;if(c.h!=b){return false}vn(c,null);a=c.i;ge((de(),a)).removeChild(a);pn(b.f,c);return true}
function fj(){return dn(new bn(),this.f)}
function gj(a){return ej(this,a)}
function aj(){}
_=aj.prototype=new ll();_.t=fj;_.z=gj;_.tI=10;function qi(a,b){cj(a,b,a.i)}
function si(b,c){var a;a=ej(b,c);if(a){ti(c.i)}return a}
function ti(a){a.style[F]=cb;a.style[ab]=cb;a.style[bb]=cb}
function ui(a){return si(this,a)}
function pi(){}
_=pi.prototype=new aj();_.z=ui;_.tI=11;function ij(b,a){b.i=a;b.i.tabIndex=0;return b}
function kj(a){gi(a)}
function hj(){}
_=hj.prototype=new Fm();_.v=kj;_.tI=12;function xi(b,a){b.i=a;b.i.tabIndex=0;return b}
function wi(){}
_=wi.prototype=new hj();_.tI=13;function Ai(b,a){xi(b,$doc.createElement((de(),db)));Ci(b.i);b.i[D]=eb;b.i.innerHTML=a||cb;return b}
function Ci(b){if(b.type==fb){try{b.setAttribute(gb,db)}catch(a){}}}
function vi(){}
_=vi.prototype=new wi();_.tI=14;function Ei(a){a.f=jn(new an());a.e=$doc.createElement((de(),hb));a.d=$doc.createElement(ib);a.e.appendChild(a.d);a.i=a.e;return a}
function Di(){}
_=Di.prototype=new aj();_.tI=15;_.d=null;_.e=null;function uk(a){a.i=$doc.createElement((de(),jb));a.i[D]=kb;return a}
function xk(a){gi(a)}
function tk(){}
_=tk.prototype=new Fm();_.v=xk;_.tI=16;function mj(a){a.i=$doc.createElement((de(),jb));a.i[D]=lb;return a}
function lj(){}
_=lj.prototype=new tk();_.tI=17;function vj(){vj=mu;tj(new sj(),mb);xj=tj(new sj(),F);tj(new sj(),ob);wj=xj}
var wj,xj;function tj(b,a){b.a=a;return b}
function sj(){}
_=sj.prototype=new gp();_.tI=0;_.a=null;function Dj(){Dj=mu;Bj(new Aj(),pb);Bj(new Aj(),qb);Ej=Bj(new Aj(),ab)}
var Ej;function Bj(a,b){a.a=b;return a}
function Aj(){}
_=Aj.prototype=new gp();_.tI=0;_.a=null;function dk(a){Ei(a);a.a=(vj(),wj);a.c=(Dj(),Ej);a.b=$doc.createElement((de(),rb));a.d.appendChild(a.b);a.e[sb]=tb;a.e[ub]=tb;return a}
function ek(c,d){var b,a;b=(a=$doc.createElement((de(),vb)),(a[wb]=c.a.a,undefined),(a.style[xb]=c.c.a,undefined),a);c.b.appendChild(b);tn(d);kn(c.f,d);b.appendChild(d.i);vn(d,c)}
function hk(c){var a,b;b=ge((de(),c.i));a=ej(this,c);if(a){this.b.removeChild(b)}return a}
function bk(){}
_=bk.prototype=new Di();_.z=hk;_.tI=18;_.b=null;function qk(){qk=mu;kr(new ot())}
function pk(a,b){qk();mk(new lk(),a,b);a.i[D]=zb;return a}
function rk(a){gi(a)}
function ik(){}
_=ik.prototype=new Fm();_.v=rk;_.tI=19;function jk(){}
_=jk.prototype=new gp();_.tI=0;function mk(b,a,c){un(a,$doc.createElement((de(),Ab)));jh(a.i,229501|(a.i.__eventBits||0));a.i.src=c;return b}
function lk(){}
_=lk.prototype=new jk();_.tI=0;function zk(a){ij(a,fe((de(),false)));a.i[D]=Bb;return a}
function Ck(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((de(),Cb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function Ek(a){if(gi(a)==1024){}else{gi(a)}}
function yk(){}
_=yk.prototype=new hj();_.v=Ek;_.tI=20;function cl(a){ct(new bt());a.b=ct(new bt());fl(a,false,(il(),new gl()));return a}
function el(d,a){var b,c;for(c=Ar(new yr(),d.b);c.a<c.b.b;){b=mg(Dr(c));if((de(),null.D()).contains(a)){return b}}return null}
function fl(d,f){var b,c,e,a;c=$doc.createElement((de(),hb));d.a=$doc.createElement(ib);c.appendChild(d.a);if(!f){e=$doc.createElement(rb);d.a.appendChild(e)}b=(a=$doc.createElement(Db),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Eb,Fb);jh(d.i,2225|(d.i.__eventBits||0));d.i[D]=ac;if(f){pm(d,wm(d.i)+bc+cc)}else{pm(d,wm(d.i)+bc+ec)}d.i.style[fc]=gc;d.i.setAttribute(hc,ic)}
function jl(a){var b;el(this,a.target);switch(gi(a)){case 1:{this.i.focus();break}{break}case 2048:{mg(gt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{mg(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{mg(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:mg(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:mg(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{mg(gt(this.b,0))}}break}}}
function kl(){sn(this)}
function Fk(){}
_=Fk.prototype=new Fm();_.v=jl;_.w=kl;_.tI=21;_.a=null;function il(){il=mu}
function gl(){}
_=gl.prototype=new gp();_.tI=0;function zl(){zl=mu;Dl=pt(new ot());El=tt(new st())}
function yl(b,a){zl();b.f=jn(new an());b.i=a;rn(b);return b}
function Al(){var b,a;zl();var c,d;for(d=(b=rq(new qq(),As(El.a).b.a),ks(new js(),b));Cr(d.a.a);){c=ag((a=ag(Dr(d.a.a),9),a.q()),6);if(c.g){c.w()}}}
function Cl(a){zl();var b;b=ag(pr(Dl,a),5);if(b){return b}if(Dl.d==0){oh(new tl())}b=wl(new vl());vr(Dl,a,b);ut(El,b);return b}
function sl(){}
_=sl.prototype=new pi();_.tI=22;var Dl,El;function tl(){}
_=tl.prototype=new gp();_.tI=23;function xl(){xl=mu;zl()}
function wl(a){xl();yl(a,$doc.body);return a}
function vl(){}
_=vl.prototype=new sl();_.tI=24;function km(b,a){b.i=a;b.i.tabIndex=0;return b}
function nm(a){var b;b=gi(a);if((b&896)!=0){gi(a)}else if(b==1024){}else{gi(a)}}
function jm(){}
_=jm.prototype=new hj();_.v=nm;_.tI=25;function hm(a){km(a,$doc.createElement((de(),jc)));a.i[D]=kc;return a}
function gm(){}
_=gm.prototype=new jm();_.tI=26;function Am(a){Ei(a);a.a=(vj(),wj);a.b=(Dj(),Ej);a.e[sb]=tb;a.e[ub]=tb;return a}
function Bm(c,e){var b,d,a;d=$doc.createElement((de(),rb));b=(a=$doc.createElement(vb),(a[wb]=c.a.a,undefined),(a.style[xb]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);tn(e);kn(c.f,e);b.appendChild(e.i);vn(e,c)}
function Em(c){var a,b;b=ge((de(),c.i));a=ej(this,c);if(a){this.d.removeChild(ge(b))}return a}
function ym(){}
_=ym.prototype=new Di();_.z=Em;_.tI=27;function jn(a){a.a=wf(qg,0,6,4,0);return a}
function kn(a,b){nn(a,b,a.b)}
function mn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function nn(d,e,a){var b,c;if(a<0||a>d.b){throw new cp()}if(d.b==d.a.length){c=wf(qg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){zf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){zf(d.a,b,d.a[b-1])}zf(d.a,a,e)}
function on(c,b){var a;if(b<0||b>=c.b){throw new cp()}--c.b;for(a=b;a<c.b;++a){zf(c.a,a,c.a[a+1])}zf(c.a,c.b,null)}
function pn(b,c){var a;a=mn(b,c);if(a==-1){throw new fu()}on(b,a)}
function an(){}
_=an.prototype=new gp();_.tI=0;_.a=null;_.b=0;function dn(b,a){b.b=a;return b}
function fn(a){if(a.a>=a.b.b){throw new fu()}return a.b.a[++a.a]}
function gn(){return this.a<this.b.b-1}
function hn(){return fn(this)}
function bn(){}
_=bn.prototype=new gp();_.s=gn;_.u=hn;_.tI=0;_.a=-1;_.b=null;function bo(){}
_=bo.prototype=new of();_.tI=0;function eo(a){a.d=Am(new ym());a.c=dk(new bk());a.h=Am(new ym());a.g=zk(new yk());a.a=hm(new gm());a.e=cl(new Fk());a.b=Ai(new vi(),lc);a.f=uk(new tk());a.k=mj(new lj());a.i=pk(new ik(),$moduleBase+mc);a.j=pk(new ik(),yd()+nc);le((de(),a.k.i),pc);Ck(a.g,qc,qc,-1);Ck(a.g,rc,rc,-1);Ck(a.g,sc,sc,-1);Ck(a.g,tc,tc,-1);Ck(a.g,uc,uc,-1);Ck(a.g,vc,vc,-1);a.g.i.size=3;a.g.i.style[wc]=xc;a.a.i[yc]=Ac!=null?Ac:cb;a.a.i.style[wc]=xc;Bm(a.h,a.g);Bm(a.h,a.a);a.h.i.style[Bc]=Cc;a.h.i.style[wc]=xc;a.f.i.innerHTML=Dc;ek(a.c,a.b);ek(a.c,a.e);Bm(a.d,a.k);Bm(a.d,a.h);Bm(a.d,a.i);Bm(a.d,a.j);Bm(a.d,a.f);Bm(a.d,a.c);a.d.i.style[Bc]=xc;a.d.i.style[wc]=xc;qi((zl(),Cl(null)),a.d);return a}
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
_=cp.prototype=new kp();_.tI=35;function yp(b,a){if(!(a!=null&&Ff(a.tI,1))){return false}return String(b)==a}
function Cp(b,a){return b.substr(a,b.length-a)}
function Ep(c){if(c.length==0||c[0]>E&&c[c.length-1]>E){return c}var a=c.replace(/^(\s*)/,cb);var b=a.replace(/\s*$/,cb);return b}
function aq(a){return yp(this,a)}
function cq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function dq(){return up(this)}
_=String.prototype;_.eQ=aq;_.hC=dq;_.tI=2;function pp(){pp=mu;qp={};tp={}}
function rp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function up(c){pp();var a=Ec+c;var b=tp[a];if(b!=null){return b}b=qp[a];if(b==null){b=rp(c)}vp();return tp[a]=b}
function vp(){if(sp==256){qp=tp;tp={};sp=0}++sp}
var qp,sp=0,tp;function gq(){}
_=gq.prototype=new kp();_.tI=36;function kq(a,b){var c;while(a.s()){c=a.u();if(b==null?c==null:rd(b,c)){return a}}return null}
function mq(a){throw new gq()}
function nq(b){var a;a=kq(this.t(),b);return !!a}
function jq(){}
_=jq.prototype=new gp();_.l=mq;_.m=nq;_.tI=0;function As(b){var a;a=vq(new pq(),b);return ps(new is(),b,a)}
function Bs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Ff(c.tI,11))){return false}e=ag(c,11);if(ag(this,11).d!=e.d){return false}for(b=rq(new qq(),vq(new pq(),e).a);Cr(b.a);){a=ag(Dr(b.a),9);d=a.q();f=a.r();if(!(d==null?ag(this,11).c:d!=null&&Ff(d.tI,1)?rr(ag(this,11),ag(d,1)):qr(ag(this,11),d,~~td(d)))){return false}if(!lu(f,d==null?ag(this,11).b:d!=null&&Ff(d.tI,1)?ag(this,11).e[Ec+ag(d,1)]:nr(ag(this,11),d,~~td(d)))){return false}}return true}
function Cs(){var a,b,c;c=0;for(b=rq(new qq(),vq(new pq(),ag(this,11)).a);Cr(b.a);){a=ag(Dr(b.a),9);c+=a.hC();c=~~c}return c}
function hs(){}
_=hs.prototype=new gp();_.eQ=Bs;_.hC=Cs;_.tI=0;function ir(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.l(a[f])}}}}
function jr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=gr(e,c.substring(1));a.l(b)}}}
function kr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function mr(b,a){return a==null?b.c:a!=null&&Ff(a.tI,1)?rr(b,ag(a,1)):qr(b,a,~~td(a))}
function pr(b,a){return a==null?b.b:a!=null&&Ff(a.tI,1)?b.e[Ec+ag(a,1)]:nr(b,a,~~td(a))}
function nr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return c.r()}}}return null}
function qr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return true}}}return false}
function rr(b,a){return Ec+a in b.e}
function vr(b,a,c){return a==null?tr(b,c):a!=null&&Ff(a.tI,1)?ur(b,ag(a,1),c):sr(b,a,c,~~td(a))}
function sr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(i.p(g,d)){var h=c.r();c.A(j);return h}}}else{a=i.a[e]=[]}var c=Et(new Dt(),g,j);a.push(c);++i.d;return null}
function tr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ur(d,a,e){var b,c=d.e;a=Ec+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function wr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rd(a,b)}
function oq(){}
_=oq.prototype=new hs();_.p=wr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Ff(b.tI,12))){return false}c=ag(b,12);if(c.B()!=this.B()){return false}for(a=c.t();a.s();){d=a.u();if(!this.m(d)){return false}}return true}
function at(){var a,b,c;a=0;for(b=this.t();b.s();){c=b.u();if(c!=null){a+=td(c);a=~~a}}return a}
function Ds(){}
_=Ds.prototype=new jq();_.eQ=Fs;_.hC=at;_.tI=37;function vq(b,a){b.a=a;return b}
function xq(d,c){var a,b,e;if(c!=null&&Ff(c.tI,9)){a=ag(c,9);b=a.q();if(mr(d.a,b)){e=pr(d.a,b);return rt(a.r(),e)}}return false}
function yq(a){return xq(this,a)}
function zq(){return rq(new qq(),this.a)}
function Aq(){return this.a.d}
function pq(){}
_=pq.prototype=new Ds();_.m=yq;_.t=zq;_.B=Aq;_.tI=38;_.a=null;function rq(c,b){var a;c.b=b;a=ct(new bt());if(c.b.c){et(a,Cq(new Bq(),c.b))}jr(c.b,a);ir(c.b,a);c.a=Ar(new yr(),a);return c}
function tq(){return Cr(this.a)}
function uq(){return ag(Dr(this.a),9)}
function qq(){}
_=qq.prototype=new gp();_.s=tq;_.u=uq;_.tI=0;_.a=null;_.b=null;function xs(b){var a;if(b!=null&&Ff(b.tI,9)){a=ag(b,9);if(lu(this.q(),a.q())&&lu(this.r(),a.r())){return true}}return false}
function ys(){var a,b;a=0;b=0;if(this.q()!=null){a=td(this.q())}if(this.r()!=null){b=td(this.r())}return a^b}
function vs(){}
_=vs.prototype=new gp();_.eQ=xs;_.hC=ys;_.tI=39;function Cq(b,a){b.a=a;return b}
function Eq(){return null}
function Fq(){return this.a.b}
function ar(a){return tr(this.a,a)}
function Bq(){}
_=Bq.prototype=new vs();_.q=Eq;_.r=Fq;_.A=ar;_.tI=40;_.a=null;function cr(c,a,b){c.b=b;c.a=a;return c}
function er(){return this.a}
function fr(){return this.b.e[Ec+this.a]}
function gr(b,a){return cr(new br(),a,b)}
function hr(a){return ur(this.b,this.a,a)}
function br(){}
_=br.prototype=new vs();_.q=er;_.r=fr;_.A=hr;_.tI=41;_.a=null;_.b=null;function bs(a){dt(this,this.B(),a);return true}
function cs(a,b){if(a<0||a>=b){fs(a,b)}}
function ds(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Ff(e.tI,10))){return false}f=ag(e,10);if(this.B()!=f.b){return false}c=Ar(new yr(),this);d=Ar(new yr(),f);while(c.a<c.b.b){a=Dr(c);b=Dr(d);if(!(a==null?b==null:rd(a,b))){return false}}return true}
function es(){var a,b,c;b=1;a=Ar(new yr(),this);while(a.a<a.b.b){c=Dr(a);b=31*b+(c==null?0:td(c));b=~~b}return b}
function fs(a,b){throw dp(new cp(),Fc+a+ad+b)}
function gs(){return Ar(new yr(),this)}
function xr(){}
_=xr.prototype=new jq();_.l=bs;_.eQ=ds;_.hC=es;_.t=gs;_.tI=0;function Ar(b,a){b.b=a;return b}
function Cr(a){return a.a<a.b.b}
function Dr(a){if(a.a>=a.b.b){throw new fu()}return gt(a.b,a.a++)}
function Er(){return this.a<this.b.b}
function Fr(){return Dr(this)}
function yr(){}
_=yr.prototype=new gp();_.s=Er;_.u=Fr;_.tI=0;_.a=0;_.b=null;function ps(b,a,c){b.a=a;b.b=c;return b}
function ss(a){return mr(this.a,a)}
function ts(){var a;return a=rq(new qq(),this.b.a),ks(new js(),a)}
function us(){return this.b.a.d}
function is(){}
_=is.prototype=new Ds();_.m=ss;_.t=ts;_.B=us;_.tI=42;_.a=null;_.b=null;function ks(a,b){a.a=b;return a}
function ns(){return Cr(this.a.a)}
function os(){var a;return a=ag(Dr(this.a.a),9),a.q()}
function js(){}
_=js.prototype=new gp();_.s=ns;_.u=os;_.tI=0;_.a=null;function ct(a){a.a=wf(rg,0,0,0,0);a.b=0;return a}
function et(b,a){zf(b.a,b.b++,a);return true}
function dt(c,a,b){if(a<0||a>c.b){fs(a,c.b)}c.a.splice(a,0,b);++c.b}
function gt(b,a){cs(a,b.b);return b.a[a]}
function ht(c,b,a){for(;a<c.b;++a){if(lu(b,c.a[a])){return a}}return -1}
function it(a){return zf(this.a,this.b++,a),true}
function jt(a){return ht(this,a,0)!=-1}
function kt(){return this.b}
function bt(){}
_=bt.prototype=new xr();_.l=it;_.m=jt;_.B=kt;_.tI=43;_.a=null;_.b=0;function pt(a){kr(a);return a}
function rt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rd(a,b)}
function ot(){}
_=ot.prototype=new oq();_.tI=44;function tt(a){a.a=pt(new ot());return a}
function ut(c,a){var b;b=vr(c.a,a,c);return b==null}
function wt(b){var a;return a=vr(this.a,b,this),a==null}
function xt(a){return mr(this.a,a)}
function yt(){var a;return a=rq(new qq(),As(this.a).b.a),ks(new js(),a)}
function zt(){return this.a.d}
function st(){}
_=st.prototype=new Ds();_.l=wt;_.m=xt;_.t=yt;_.B=zt;_.tI=45;_.a=null;function Et(b,a,c){b.a=a;b.b=c;return b}
function au(){return this.a}
function bu(){return this.b}
function du(b){var a;a=this.b;this.b=b;return a}
function Dt(){}
_=Dt.prototype=new vs();_.q=au;_.r=bu;_.A=du;_.tI=46;_.a=null;_.b=null;function fu(){}
_=fu.prototype=new kp();_.tI=47;function lu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rd(a,b)}
function lo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:bd,evtGroup:cd,millis:(new Date()).getTime(),type:dd,className:fd});eo(new co())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lo()}catch(a){b(d)}else{lo()}}
function mu(){}
var qg=uo(gd,hd),rg=uo(id,jd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();