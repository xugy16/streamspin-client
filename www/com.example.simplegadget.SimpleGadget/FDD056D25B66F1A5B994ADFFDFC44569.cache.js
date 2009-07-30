(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var z='',db=', Size: ',fb=':',v='DOMMouseScroll',eb='Hello World!',bb='Index: ',pb='Object;',kb='SimpleGadget',mb='Widget;',lb='[Lcom.google.gwt.user.client.ui.',ob='[Ljava.lang.',l='blur',C='button',m='change',D='className',x='click',jb='com.example.simplegadget.client.SimpleGadget',w='contextmenu',cb='dblclick',t='error',nb='focus',E='gwt-Button',qb='keydown',rb='keypress',sb='keyup',y='left',tb='load',ub='losecapture',hb='moduleStartup',n='mousedown',o='mousemove',p='mouseout',q='mouseover',r='mouseup',u='mousewheel',ib='onModuleLoadStart',B='position',s='scroll',gb='startup',F='submit',A='top',ab='type';var _;function nj(a){return this===(a==null?null:a)}
function oj(){return this.$H||(this.$H=++lc)}
function lj(){}
_=lj.prototype={};_.eQ=nj;_.hC=oj;_.tM=ko;_.tI=1;function wb(){}
_=wb.prototype=new lj();_.tI=3;function dc(b,a){return b.tM==ko||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function fc(a){return a.tM==ko||a.tI==2?a.hC():a.$H||(a.$H=++lc)}
var lc=0;function sc(){sc=ko;pc();new nc()}
function uc(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function mc(){}
_=mc.prototype=new lj();_.tI=0;function rc(){rc=ko;sc()}
function qc(){}
_=qc.prototype=new mc();_.tI=0;function pc(){pc=ko;rc()}
function nc(){}
_=nc.prototype=new qc();_.tI=0;function kd(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ld(a,f,c,b,e){var d;d=kd(e,b);md(a,f,c,d);return d}
function md(b,d,c,a){if(!nd){nd=new gd()}qd(a,nd);a.tI=d;a.qI=c;return a}
function od(a,b,c){if(c!=null){if(a.qI>0&&!td(c.tI,a.qI)){throw new vi()}if(a.qI<0&&(c.tM==ko||c.tI==2)){throw new vi()}}return a[b]=c}
function qd(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function gd(){}
_=gd.prototype=new lj();_.tI=0;_.length=0;_.qI=0;var nd=null;function ud(b,a){return b&&!!ae[b][a]}
function td(b,a){return b&&ae[b][a]}
function vd(b,a){if(b!=null&&!td(b.tI,a)){throw new zi()}return b}
var ae=[{},{},{1:1},{5:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{11:1},{11:1},{11:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{13:1},{13:1},{10:1},{10:1},{10:1},{13:1},{12:1},{13:1},{10:1},{2:1},{9:1}];function ve(b,a,c){var d;if(a==ye){if(uf(b)==8192){ye=null}}d=ue;ue=b;try{c.r(b)}finally{ue=d}}
function ze(a,b){wf();a.__eventBits=b;a.onclick=b&1?sf:null;a.ondblclick=b&2?sf:null;a.onmousedown=b&4?sf:null;a.onmouseup=b&8?sf:null;a.onmouseover=b&16?sf:null;a.onmouseout=b&32?sf:null;a.onmousemove=b&64?sf:null;a.onkeydown=b&128?sf:null;a.onkeypress=b&256?sf:null;a.onkeyup=b&512?sf:null;a.onchange=b&1024?sf:null;a.onfocus=b&2048?sf:null;a.onblur=b&4096?sf:null;a.onlosecapture=b&8192?sf:null;a.onscroll=b&16384?sf:null;a.onload=b&32768?sf:null;a.onerror=b&65536?sf:null;a.onmousewheel=b&131072?sf:null;a.oncontextmenu=b&262144?sf:null}
var ue=null,ye=null;function Ee(a){ef();if(!af){af=Em(new Dm())}Fm(af,a)}
function bf(){var a;if(af){for(a=vl(new tl(),af);a.a<a.b.v();){vd(yl(a),3);mh()}}}
function cf(){var a,b;b=null;if(af){for(a=vl(new tl(),af);a.a<a.b.v();){vd(yl(a),3);b=null}}return b}
function ef(){if(!df){df=true;Cf()}}
var af=null,df=false;function uf(a){switch(a.type){case l:return 4096;case m:return 1024;case x:return 1;case cb:return 2;case nb:return 2048;case qb:return 128;case rb:return 256;case sb:return 512;case tb:return 32768;case ub:return 8192;case n:return 4;case o:return 64;case p:return 32;case q:return 16;case r:return 8;case s:return 16384;case t:return 65536;case u:return 131072;case v:return 131072;case w:return 262144;}}
function wf(){if(!yf){of();yf=true}}
function zf(a){return a!=null&&ud(a.tI,4)&&!(a!=null&&(a.tM!=ko&&a.tI!=2))}
var yf=false;function of(){rf=function(b){if(qf(b)){var a=pf;if(a&&a.__listener){if(zf(a.__listener)){ve(b,a,a.__listener);b.stopPropagation()}}}};qf=function(a){return true};sf=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(zf(c)){ve(b,a,c)}}};$wnd.addEventListener(x,rf,true);$wnd.addEventListener(cb,rf,true);$wnd.addEventListener(n,rf,true);$wnd.addEventListener(r,rf,true);$wnd.addEventListener(o,rf,true);$wnd.addEventListener(q,rf,true);$wnd.addEventListener(p,rf,true);$wnd.addEventListener(u,rf,true);$wnd.addEventListener(qb,qf,true);$wnd.addEventListener(sb,qf,true);$wnd.addEventListener(rb,qf,true)}
var pf=null,qf=null,rf=null,sf=null;function Cf(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=cf()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{bf()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function uh(){}
_=uh.prototype=new lj();_.tI=8;_.d=null;function hi(a){if(a.b){throw new ej()}a.b=true;a.d.__listener=a;a.i();a.s()}
function ii(a){if(!a.b){throw new ej()}try{a.t()}finally{a.j();a.d.__listener=null;a.b=false}}
function ji(a){if(a.c){ag(a.c,a)}else if(a.c){throw new ej()}}
function ki(c,b){var a;a=c.c;if(!b){if(!!a&&a.b){ii(c)}c.c=null}else{if(a){throw new ej()}c.c=b;if(b.b){hi(c)}}}
function li(){}
function mi(){}
function ni(a){}
function oi(){}
function pi(){}
function wh(){}
_=wh.prototype=new uh();_.i=li;_.j=mi;_.r=ni;_.s=oi;_.t=pi;_.tI=9;_.b=false;_.c=null;function ah(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=Ch(b);hi(a)}}
function bh(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=Ch(b);ii(a)}}
function ch(){}
function dh(){}
function Eg(){}
_=Eg.prototype=new wh();_.i=ah;_.j=bh;_.s=ch;_.t=dh;_.tI=10;function rg(c,a,b){ji(a);ai(c.a,a);b.appendChild(a.d);ki(a,c)}
function tg(b,c){var a;if(c.c!=b){return false}ki(c,null);a=c.d;uc((sc(),a)).removeChild(a);fi(b.a,c);return true}
function ug(){return Ah(new yh(),this.a)}
function pg(){}
_=pg.prototype=new Eg();_.p=ug;_.tI=11;function Ef(a,b){rg(a,b,a.d)}
function ag(b,c){var a;a=tg(b,c);if(a){bg(c.d)}return a}
function bg(a){a.style[y]=z;a.style[A]=z;a.style[B]=z}
function Df(){}
_=Df.prototype=new pg();_.tI=12;function wg(b,a){if(!b.a){b.a=lg(new kg());ze(b.d,1|(b.d.__eventBits||0))}Fm(b.a,a)}
function yg(a){if(uf(a)==1){if(this.a){ng(this.a)}}}
function vg(){}
_=vg.prototype=new wh();_.r=yg;_.tI=13;_.a=null;function eg(b,a){b.d=a;b.d.tabIndex=0;return b}
function dg(){}
_=dg.prototype=new vg();_.tI=14;function hg(b,a){eg(b,$doc.createElement((sc(),C)));jg(b.d);b.d[D]=E;b.d.innerHTML=a||z;return b}
function jg(b){if(b.type==F){try{b.setAttribute(ab,C)}catch(a){}}}
function cg(){}
_=cg.prototype=new dg();_.tI=15;function gk(a,b){var c;while(a.o()){c=a.q();if(b==null?c==null:dc(b,c)){return a}}return null}
function ik(a){throw new ck()}
function jk(b){var a;a=gk(this.p(),b);return !!a}
function fk(){}
_=fk.prototype=new lj();_.g=ik;_.h=jk;_.tI=0;function Dl(a){this.f(this.v(),a);return true}
function Cl(b,a){throw new ck()}
function El(a,b){if(a<0||a>=b){bm(a,b)}}
function Fl(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ud(e.tI,11))){return false}f=vd(e,11);if(this.v()!=f.v()){return false}c=vl(new tl(),this);d=f.p();while(c.a<c.b.v()){a=yl(c);b=yl(d);if(!(a==null?b==null:dc(a,b))){return false}}return true}
function am(){var a,b,c;b=1;a=vl(new tl(),this);while(a.a<a.b.v()){c=yl(a);b=31*b+(c==null?0:fc(c));b=~~b}return b}
function bm(a,b){throw ij(new hj(),bb+a+db+b)}
function cm(){return vl(new tl(),this)}
function sl(){}
_=sl.prototype=new fk();_.g=Dl;_.f=Cl;_.eQ=Fl;_.hC=am;_.p=cm;_.tI=16;function Em(a){a.a=ld(ee,0,0,0,0);a.b=0;return a}
function Fm(b,a){od(b.a,b.b++,a);return true}
function bn(c,b,a){for(;a<c.b;++a){if(jo(b,c.a[a])){return a}}return -1}
function dn(a){return od(this.a,this.b++,a),true}
function cn(a,b){if(a<0||a>this.b){bm(a,this.b)}this.a.splice(a,0,b);++this.b}
function en(a){return bn(this,a,0)!=-1}
function fn(a){return El(a,this.b),this.a[a]}
function gn(){return this.b}
function Dm(){}
_=Dm.prototype=new sl();_.g=dn;_.f=cn;_.h=en;_.n=fn;_.v=gn;_.tI=17;_.a=null;_.b=0;function lg(a){Em(a);return a}
function ng(b){var a;for(a=vl(new tl(),b);a.a<a.b.v();){vd(yl(a),5);$wnd.alert(eb)}}
function kg(){}
_=kg.prototype=new Dm();_.tI=18;function lh(){lh=ko;ph=mn(new ln());qh=qn(new pn())}
function kh(b,a){lh();b.a=Fh(new xh());b.d=a;hi(b);return b}
function mh(){var b,a;lh();var c,d;for(d=(b=nk(new mk(),wm(qh.a).b.a),gm(new fm(),b));xl(d.a.a);){c=vd((a=vd(yl(d.a.a),10),a.l()),7);if(c.b){ii(c)}}}
function oh(a){lh();var b;b=vd(kl(ph,a),6);if(b){return b}if(ph.d==0){Ee(new fh())}b=ih(new hh());ql(ph,a,b);rn(qh,b);return b}
function eh(){}
_=eh.prototype=new Df();_.tI=19;var ph,qh;function fh(){}
_=fh.prototype=new lj();_.tI=20;function jh(){jh=ko;lh()}
function ih(a){jh();kh(a,$doc.body);return a}
function hh(){}
_=hh.prototype=new eh();_.tI=21;function Fh(a){a.a=ld(de,0,7,4,0);return a}
function ai(a,b){di(a,b,a.b)}
function ci(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function di(d,e,a){var b,c;if(a<0||a>d.b){throw new hj()}if(d.b==d.a.length){c=ld(de,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){od(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){od(d.a,b,d.a[b-1])}od(d.a,a,e)}
function ei(c,b){var a;if(b<0||b>=c.b){throw new hj()}--c.b;for(a=b;a<c.b;++a){od(c.a,a,c.a[a+1])}od(c.a,c.b,null)}
function fi(b,c){var a;a=ci(b,c);if(a==-1){throw new co()}ei(b,a)}
function xh(){}
_=xh.prototype=new lj();_.tI=0;_.a=null;_.b=0;function Ah(b,a){b.b=a;return b}
function Ch(a){if(a.a>=a.b.b){throw new co()}return a.b.a[++a.a]}
function Dh(){return this.a<this.b.b-1}
function Eh(){return Ch(this)}
function yh(){}
_=yh.prototype=new lj();_.o=Dh;_.q=Eh;_.tI=0;_.a=-1;_.b=null;function ak(){}
_=ak.prototype=new lj();_.tI=4;function cj(){}
_=cj.prototype=new ak();_.tI=5;function pj(){}
_=pj.prototype=new cj();_.tI=6;function vi(){}
_=vi.prototype=new pj();_.tI=23;function Ci(c,a){var b;b=new yi();return b}
function yi(){}
_=yi.prototype=new lj();_.tI=0;function zi(){}
_=zi.prototype=new pj();_.tI=26;function ej(){}
_=ej.prototype=new pj();_.tI=27;function ij(b,a){return b}
function hj(){}
_=hj.prototype=new pj();_.tI=28;function Ej(a){if(!(a!=null&&ud(a.tI,1))){return false}return String(this)==a}
function Fj(){return yj(this)}
_=String.prototype;_.eQ=Ej;_.hC=Fj;_.tI=2;function tj(){tj=ko;uj={};xj={}}
function vj(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function yj(c){tj();var a=fb+c;var b=xj[a];if(b!=null){return b}b=uj[a];if(b==null){b=vj(c)}zj();return xj[a]=b}
function zj(){if(wj==256){uj=xj;xj={};wj=0}++wj}
var uj,wj=0,xj;function ck(){}
_=ck.prototype=new pj();_.tI=29;function wm(b){var a;a=rk(new lk(),b);return lm(new em(),b,a)}
function xm(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ud(c.tI,12))){return false}e=vd(c,12);if(vd(this,12).d!=e.d){return false}for(b=nk(new mk(),rk(new lk(),e).a);xl(b.a);){a=vd(yl(b.a),10);d=a.l();f=a.m();if(!(d==null?vd(this,12).c:d!=null&&ud(d.tI,1)?ml(vd(this,12),vd(d,1)):ll(vd(this,12),d,~~fc(d)))){return false}if(!jo(f,d==null?vd(this,12).b:d!=null&&ud(d.tI,1)?vd(this,12).e[fb+vd(d,1)]:il(vd(this,12),d,~~fc(d)))){return false}}return true}
function ym(){var a,b,c;c=0;for(b=nk(new mk(),rk(new lk(),vd(this,12)).a);xl(b.a);){a=vd(yl(b.a),10);c+=a.hC();c=~~c}return c}
function dm(){}
_=dm.prototype=new lj();_.eQ=xm;_.hC=ym;_.tI=0;function dl(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.g(a[f])}}}}
function el(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=bl(e,c.substring(1));a.g(b)}}}
function hl(b,a){return a==null?b.c:a!=null&&ud(a.tI,1)?ml(b,vd(a,1)):ll(b,a,~~fc(a))}
function kl(b,a){return a==null?b.b:a!=null&&ud(a.tI,1)?b.e[fb+vd(a,1)]:il(b,a,~~fc(a))}
function il(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return c.m()}}}return null}
function ll(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return true}}}return false}
function ml(b,a){return fb+a in b.e}
function ql(b,a,c){return a==null?ol(b,c):a!=null&&ud(a.tI,1)?pl(b,vd(a,1),c):nl(b,a,c,~~fc(a))}
function nl(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(i.k(g,d)){var h=c.m();c.u(j);return h}}}else{a=i.a[e]=[]}var c=Bn(new An(),g,j);a.push(c);++i.d;return null}
function ol(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function pl(d,a,e){var b,c=d.e;a=fb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function rl(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&dc(a,b)}
function kk(){}
_=kk.prototype=new dm();_.k=rl;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Bm(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ud(b.tI,13))){return false}c=vd(b,13);if(c.v()!=this.v()){return false}for(a=c.p();a.o();){d=a.q();if(!this.h(d)){return false}}return true}
function Cm(){var a,b,c;a=0;for(b=this.p();b.o();){c=b.q();if(c!=null){a+=fc(c);a=~~a}}return a}
function zm(){}
_=zm.prototype=new fk();_.eQ=Bm;_.hC=Cm;_.tI=30;function rk(b,a){b.a=a;return b}
function tk(c){var a,b,d;if(c!=null&&ud(c.tI,10)){a=vd(c,10);b=a.l();if(hl(this.a,b)){d=kl(this.a,b);return on(a.m(),d)}}return false}
function uk(){return nk(new mk(),this.a)}
function vk(){return this.a.d}
function lk(){}
_=lk.prototype=new zm();_.h=tk;_.p=uk;_.v=vk;_.tI=31;_.a=null;function nk(c,b){var a;c.b=b;a=Em(new Dm());if(c.b.c){Fm(a,xk(new wk(),c.b))}el(c.b,a);dl(c.b,a);c.a=vl(new tl(),a);return c}
function pk(){return xl(this.a)}
function qk(){return vd(yl(this.a),10)}
function mk(){}
_=mk.prototype=new lj();_.o=pk;_.q=qk;_.tI=0;_.a=null;_.b=null;function tm(b){var a;if(b!=null&&ud(b.tI,10)){a=vd(b,10);if(jo(this.l(),a.l())&&jo(this.m(),a.m())){return true}}return false}
function um(){var a,b;a=0;b=0;if(this.l()!=null){a=fc(this.l())}if(this.m()!=null){b=fc(this.m())}return a^b}
function rm(){}
_=rm.prototype=new lj();_.eQ=tm;_.hC=um;_.tI=32;function xk(b,a){b.a=a;return b}
function zk(){return null}
function Ak(){return this.a.b}
function Bk(a){return ol(this.a,a)}
function wk(){}
_=wk.prototype=new rm();_.l=zk;_.m=Ak;_.u=Bk;_.tI=33;_.a=null;function Dk(c,a,b){c.b=b;c.a=a;return c}
function Fk(){return this.a}
function al(){return this.b.e[fb+this.a]}
function bl(b,a){return Dk(new Ck(),a,b)}
function cl(a){return pl(this.b,this.a,a)}
function Ck(){}
_=Ck.prototype=new rm();_.l=Fk;_.m=al;_.u=cl;_.tI=34;_.a=null;_.b=null;function vl(b,a){b.b=a;return b}
function xl(a){return a.a<a.b.v()}
function yl(a){if(a.a>=a.b.v()){throw new co()}return a.b.n(a.a++)}
function zl(){return this.a<this.b.v()}
function Al(){return yl(this)}
function tl(){}
_=tl.prototype=new lj();_.o=zl;_.q=Al;_.tI=0;_.a=0;_.b=null;function lm(b,a,c){b.a=a;b.b=c;return b}
function om(a){return hl(this.a,a)}
function pm(){var a;return a=nk(new mk(),this.b.a),gm(new fm(),a)}
function qm(){return this.b.a.d}
function em(){}
_=em.prototype=new zm();_.h=om;_.p=pm;_.v=qm;_.tI=35;_.a=null;_.b=null;function gm(a,b){a.a=b;return a}
function jm(){return xl(this.a.a)}
function km(){var a;return a=vd(yl(this.a.a),10),a.l()}
function fm(){}
_=fm.prototype=new lj();_.o=jm;_.q=km;_.tI=0;_.a=null;function mn(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function on(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&dc(a,b)}
function ln(){}
_=ln.prototype=new kk();_.tI=36;function qn(a){a.a=mn(new ln());return a}
function rn(c,a){var b;b=ql(c.a,a,c);return b==null}
function tn(b){var a;return a=ql(this.a,b,this),a==null}
function un(a){return hl(this.a,a)}
function vn(){var a;return a=nk(new mk(),wm(this.a).b.a),gm(new fm(),a)}
function wn(){return this.a.d}
function pn(){}
_=pn.prototype=new zm();_.g=tn;_.h=un;_.p=vn;_.v=wn;_.tI=37;_.a=null;function Bn(b,a,c){b.a=a;b.b=c;return b}
function Dn(){return this.a}
function En(){return this.b}
function ao(b){var a;a=this.b;this.b=b;return a}
function An(){}
_=An.prototype=new rm();_.l=Dn;_.m=En;_.u=ao;_.tI=38;_.a=null;_.b=null;function co(){}
_=co.prototype=new pj();_.tI=39;function jo(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&dc(a,b)}
function ti(){var a;!!$stats&&$stats({moduleName:$moduleName,subSystem:gb,evtGroup:hb,millis:(new Date()).getTime(),type:ib,className:jb});a=hg(new cg(),kb);wg(a,new wb());Ef((lh(),oh(null)),a)}
function gwtOnLoad(b,j,i){$moduleName=j;$moduleBase=i;if(b)try{ti()}catch(a){b(j)}else{ti()}}
function ko(){}
var de=Ci(lb,mb),ee=Ci(ob,pb);$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_example_simplegadget_SimpleGadget) {  var __gwt_initHandlers = com_example_simplegadget_SimpleGadget.__gwt_initHandlers;  com_example_simplegadget_SimpleGadget.onScriptLoad(gwtOnLoad);}})();