(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var z='',db=', Size: ',fb=':',v='DOMMouseScroll',eb='Hello World!',bb='Index: ',pb='Object;',kb='SimpleGadget',mb='Widget;',lb='[Lcom.google.gwt.user.client.ui.',ob='[Ljava.lang.',l='blur',C='button',m='change',D='className',x='click',jb='com.example.simplegadget.client.SimpleGadget',w='contextmenu',cb='dblclick',t='error',nb='focus',E='gwt-Button',qb='keydown',rb='keypress',sb='keyup',y='left',tb='load',ub='losecapture',hb='moduleStartup',n='mousedown',o='mousemove',p='mouseout',q='mouseover',r='mouseup',u='mousewheel',ib='onModuleLoadStart',B='position',s='scroll',gb='startup',F='submit',A='top',ab='type';var _;function Aj(a){return this===(a==null?null:a)}
function Bj(){return this.$H||(this.$H=++lc)}
function yj(){}
_=yj.prototype={};_.eQ=Aj;_.hC=Bj;_.tM=xo;_.tI=1;function wb(){}
_=wb.prototype=new yj();_.tI=3;function dc(b,a){return b.tM==xo||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function fc(a){return a.tM==xo||a.tI==2?a.hC():a.$H||(a.$H=++lc)}
var lc=0;function sc(){sc=xo;pc();new nc()}
function uc(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function mc(){}
_=mc.prototype=new yj();_.tI=0;function rc(){rc=xo;sc()}
function qc(){}
_=qc.prototype=new mc();_.tI=0;function pc(){pc=xo;rc()}
function nc(){}
_=nc.prototype=new qc();_.tI=0;function kd(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ld(a,f,c,b,e){var d;d=kd(e,b);md(a,f,c,d);return d}
function md(b,d,c,a){if(!nd){nd=new gd()}qd(a,nd);a.tI=d;a.qI=c;return a}
function od(a,b,c){if(c!=null){if(a.qI>0&&!td(c.tI,a.qI)){throw new cj()}if(a.qI<0&&(c.tM==xo||c.tI==2)){throw new cj()}}return a[b]=c}
function qd(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function gd(){}
_=gd.prototype=new yj();_.tI=0;_.length=0;_.qI=0;var nd=null;function ud(b,a){return b&&!!ae[b][a]}
function td(b,a){return b&&ae[b][a]}
function vd(b,a){if(b!=null&&!td(b.tI,a)){throw new gj()}return b}
var ae=[{},{},{1:1},{5:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{11:1},{11:1},{11:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{13:1},{13:1},{10:1},{10:1},{10:1},{13:1},{12:1},{13:1},{10:1},{2:1},{9:1}];function ve(b,a,c){var d;if(a==ye){if(sf(b)==8192){ye=null}}d=ue;ue=b;try{c.r(b)}finally{ue=d}}
function ze(a,b){uf();mf(a,b)}
var ue=null,ye=null;function Ee(a){ef();if(!af){af=mn(new ln())}nn(af,a)}
function bf(){var a;if(af){for(a=cm(new am(),af);a.a<a.b.w();){vd(fm(a),3);lh()}}}
function cf(){var a,b;b=null;if(af){for(a=cm(new am(),af);a.a<a.b.w();){vd(fm(a),3);b=null}}return b}
function ef(){if(!df){df=true;Af()}}
var af=null,df=false;function sf(a){switch(a.type){case l:return 4096;case m:return 1024;case x:return 1;case cb:return 2;case nb:return 2048;case qb:return 128;case rb:return 256;case sb:return 512;case tb:return 32768;case ub:return 8192;case n:return 4;case o:return 64;case p:return 32;case q:return 16;case r:return 8;case s:return 16384;case t:return 65536;case u:return 131072;case v:return 131072;case w:return 262144;}}
function uf(){if(!wf){lf();wf=true}}
function xf(a){return a!=null&&ud(a.tI,4)&&!(a!=null&&(a.tM!=xo&&a.tI!=2))}
var wf=false;function lf(){pf=function(b){if(of(b)){var a=nf;if(a&&a.__listener){if(xf(a.__listener)){ve(b,a,a.__listener);b.stopPropagation()}}}};of=function(a){return true};qf=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(xf(c)){ve(b,a,c)}}};$wnd.addEventListener(x,pf,true);$wnd.addEventListener(cb,pf,true);$wnd.addEventListener(n,pf,true);$wnd.addEventListener(r,pf,true);$wnd.addEventListener(o,pf,true);$wnd.addEventListener(q,pf,true);$wnd.addEventListener(p,pf,true);$wnd.addEventListener(u,pf,true);$wnd.addEventListener(qb,of,true);$wnd.addEventListener(sb,of,true);$wnd.addEventListener(rb,of,true)}
function mf(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?qf:null;if(b&2)c.ondblclick=a&2?qf:null;if(b&4)c.onmousedown=a&4?qf:null;if(b&8)c.onmouseup=a&8?qf:null;if(b&16)c.onmouseover=a&16?qf:null;if(b&32)c.onmouseout=a&32?qf:null;if(b&64)c.onmousemove=a&64?qf:null;if(b&128)c.onkeydown=a&128?qf:null;if(b&256)c.onkeypress=a&256?qf:null;if(b&512)c.onkeyup=a&512?qf:null;if(b&1024)c.onchange=a&1024?qf:null;if(b&2048)c.onfocus=a&2048?qf:null;if(b&4096)c.onblur=a&4096?qf:null;if(b&8192)c.onlosecapture=a&8192?qf:null;if(b&16384)c.onscroll=a&16384?qf:null;if(b&32768)c.onload=a&32768?qf:null;if(b&65536)c.onerror=a&65536?qf:null;if(b&131072)c.onmousewheel=a&131072?qf:null;if(b&262144)c.oncontextmenu=a&262144?qf:null}
var nf=null,of=null,pf=null,qf=null;function Af(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=cf()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{bf()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function th(){}
_=th.prototype=new yj();_.tI=8;_.d=null;function gi(a){if(a.b){throw new rj()}a.b=true;a.d.__listener=a;a.i();a.s()}
function hi(a){if(!a.b){throw new rj()}try{a.t()}finally{a.j();a.d.__listener=null;a.b=false}}
function ii(a){if(a.c){Ef(a.c,a)}else if(a.c){throw new rj()}}
function ji(c,b){var a;a=c.c;if(!b){if(!!a&&a.b){hi(c)}c.c=null}else{if(a){throw new rj()}c.c=b;if(b.b){gi(c)}}}
function ki(){}
function li(){}
function mi(a){}
function ni(){}
function oi(){}
function vh(){}
_=vh.prototype=new th();_.i=ki;_.j=li;_.r=mi;_.s=ni;_.t=oi;_.tI=9;_.b=false;_.c=null;function Fg(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=Bh(b);gi(a)}}
function ah(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=Bh(b);hi(a)}}
function bh(){}
function ch(){}
function Dg(){}
_=Dg.prototype=new vh();_.i=Fg;_.j=ah;_.s=bh;_.t=ch;_.tI=10;function pg(c,a,b){ii(a);Fh(c.a,a);b.appendChild(a.d);ji(a,c)}
function rg(b,c){var a;if(c.c!=b){return false}ji(c,null);a=c.d;uc((sc(),a)).removeChild(a);ei(b.a,c);return true}
function sg(){return zh(new xh(),this.a)}
function ng(){}
_=ng.prototype=new Dg();_.p=sg;_.tI=11;function Cf(a,b){pg(a,b,a.d)}
function Ef(b,c){var a;a=rg(b,c);if(a){Ff(c.d)}return a}
function Ff(a){a.style[y]=z;a.style[A]=z;a.style[B]=z}
function Bf(){}
_=Bf.prototype=new ng();_.tI=12;function vg(){vg=xo;wg=(Ci(),Ei)}
function ug(b,a){if(!b.a){b.a=jg(new ig());ze(b.d,1|(b.d.__eventBits||0))}nn(b.a,a)}
function xg(a){if(sf(a)==1){if(this.a){lg(this.a)}}}
function tg(){}
_=tg.prototype=new vh();_.r=xg;_.tI=13;_.a=null;var wg;function dg(){dg=xo;vg()}
function cg(b,a){dg();b.d=a;wg.u(b.d,0);return b}
function bg(){}
_=bg.prototype=new tg();_.tI=14;function gg(){gg=xo;dg()}
function fg(b,a){gg();cg(b,$doc.createElement((sc(),C)));hg(b.d);b.d[D]=E;b.d.innerHTML=a||z;return b}
function hg(b){if(b.type==F){try{b.setAttribute(ab,C)}catch(a){}}}
function ag(){}
_=ag.prototype=new bg();_.tI=15;function tk(a,b){var c;while(a.o()){c=a.q();if(b==null?c==null:dc(b,c)){return a}}return null}
function vk(a){throw new pk()}
function wk(b){var a;a=tk(this.p(),b);return !!a}
function sk(){}
_=sk.prototype=new yj();_.g=vk;_.h=wk;_.tI=0;function km(a){this.f(this.w(),a);return true}
function jm(b,a){throw new pk()}
function lm(a,b){if(a<0||a>=b){om(a,b)}}
function mm(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ud(e.tI,11))){return false}f=vd(e,11);if(this.w()!=f.w()){return false}c=cm(new am(),this);d=f.p();while(c.a<c.b.w()){a=fm(c);b=fm(d);if(!(a==null?b==null:dc(a,b))){return false}}return true}
function nm(){var a,b,c;b=1;a=cm(new am(),this);while(a.a<a.b.w()){c=fm(a);b=31*b+(c==null?0:fc(c));b=~~b}return b}
function om(a,b){throw vj(new uj(),bb+a+db+b)}
function pm(){return cm(new am(),this)}
function Fl(){}
_=Fl.prototype=new sk();_.g=km;_.f=jm;_.eQ=mm;_.hC=nm;_.p=pm;_.tI=16;function mn(a){a.a=ld(ee,0,0,0,0);a.b=0;return a}
function nn(b,a){od(b.a,b.b++,a);return true}
function pn(c,b,a){for(;a<c.b;++a){if(wo(b,c.a[a])){return a}}return -1}
function rn(a){return od(this.a,this.b++,a),true}
function qn(a,b){if(a<0||a>this.b){om(a,this.b)}this.a.splice(a,0,b);++this.b}
function sn(a){return pn(this,a,0)!=-1}
function tn(a){return lm(a,this.b),this.a[a]}
function un(){return this.b}
function ln(){}
_=ln.prototype=new Fl();_.g=rn;_.f=qn;_.h=sn;_.n=tn;_.w=un;_.tI=17;_.a=null;_.b=0;function jg(a){mn(a);return a}
function lg(b){var a;for(a=cm(new am(),b);a.a<a.b.w();){vd(fm(a),5);$wnd.alert(eb)}}
function ig(){}
_=ig.prototype=new ln();_.tI=18;function kh(){kh=xo;oh=zn(new yn());ph=Dn(new Cn())}
function jh(b,a){kh();b.a=Eh(new wh());b.d=a;gi(b);return b}
function lh(){var b,a;kh();var c,d;for(d=(b=Ak(new zk(),dn(ph.a).b.a),tm(new sm(),b));em(d.a.a);){c=vd((a=vd(fm(d.a.a),10),a.l()),7);if(c.b){hi(c)}}}
function nh(a){kh();var b;b=vd(xl(oh,a),6);if(b){return b}if(oh.d==0){Ee(new eh())}b=hh(new gh());Dl(oh,a,b);En(ph,b);return b}
function dh(){}
_=dh.prototype=new Bf();_.tI=19;var oh,ph;function eh(){}
_=eh.prototype=new yj();_.tI=20;function ih(){ih=xo;kh()}
function hh(a){ih();jh(a,$doc.body);return a}
function gh(){}
_=gh.prototype=new dh();_.tI=21;function Eh(a){a.a=ld(de,0,7,4,0);return a}
function Fh(a,b){ci(a,b,a.b)}
function bi(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function ci(d,e,a){var b,c;if(a<0||a>d.b){throw new uj()}if(d.b==d.a.length){c=ld(de,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){od(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){od(d.a,b,d.a[b-1])}od(d.a,a,e)}
function di(c,b){var a;if(b<0||b>=c.b){throw new uj()}--c.b;for(a=b;a<c.b;++a){od(c.a,a,c.a[a+1])}od(c.a,c.b,null)}
function ei(b,c){var a;a=bi(b,c);if(a==-1){throw new qo()}di(b,a)}
function wh(){}
_=wh.prototype=new yj();_.tI=0;_.a=null;_.b=0;function zh(b,a){b.b=a;return b}
function Bh(a){if(a.a>=a.b.b){throw new qo()}return a.b.a[++a.a]}
function Ch(){return this.a<this.b.b-1}
function Dh(){return Bh(this)}
function xh(){}
_=xh.prototype=new yj();_.o=Ch;_.q=Dh;_.tI=0;_.a=-1;_.b=null;function Ci(){Ci=xo;Di=yi(new xi());Ei=Di?(Ci(),new pi()):Di}
function Fi(a,b){a.tabIndex=b}
function pi(){}
_=pi.prototype=new yj();_.u=Fi;_.tI=0;var Di,Ei;function ti(){ti=xo;Ci()}
function ui(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function vi(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function wi(a,b){a.firstChild.tabIndex=b}
function qi(){}
_=qi.prototype=new pi();_.u=wi;_.tI=0;function zi(){zi=xo;ti()}
function yi(a){zi();ui();vi();Ai();return a}
function Ai(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function xi(){}
_=xi.prototype=new qi();_.tI=0;function nk(){}
_=nk.prototype=new yj();_.tI=4;function pj(){}
_=pj.prototype=new nk();_.tI=5;function Cj(){}
_=Cj.prototype=new pj();_.tI=6;function cj(){}
_=cj.prototype=new Cj();_.tI=23;function jj(c,a){var b;b=new fj();return b}
function fj(){}
_=fj.prototype=new yj();_.tI=0;function gj(){}
_=gj.prototype=new Cj();_.tI=26;function rj(){}
_=rj.prototype=new Cj();_.tI=27;function vj(b,a){return b}
function uj(){}
_=uj.prototype=new Cj();_.tI=28;function lk(a){if(!(a!=null&&ud(a.tI,1))){return false}return String(this)==a}
function mk(){return fk(this)}
_=String.prototype;_.eQ=lk;_.hC=mk;_.tI=2;function ak(){ak=xo;bk={};ek={}}
function ck(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function fk(c){ak();var a=fb+c;var b=ek[a];if(b!=null){return b}b=bk[a];if(b==null){b=ck(c)}gk();return ek[a]=b}
function gk(){if(dk==256){bk=ek;ek={};dk=0}++dk}
var bk,dk=0,ek;function pk(){}
_=pk.prototype=new Cj();_.tI=29;function dn(b){var a;a=Ek(new yk(),b);return ym(new rm(),b,a)}
function en(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ud(c.tI,12))){return false}e=vd(c,12);if(vd(this,12).d!=e.d){return false}for(b=Ak(new zk(),Ek(new yk(),e).a);em(b.a);){a=vd(fm(b.a),10);d=a.l();f=a.m();if(!(d==null?vd(this,12).c:d!=null&&ud(d.tI,1)?zl(vd(this,12),vd(d,1)):yl(vd(this,12),d,~~fc(d)))){return false}if(!wo(f,d==null?vd(this,12).b:d!=null&&ud(d.tI,1)?vd(this,12).e[fb+vd(d,1)]:vl(vd(this,12),d,~~fc(d)))){return false}}return true}
function fn(){var a,b,c;c=0;for(b=Ak(new zk(),Ek(new yk(),vd(this,12)).a);em(b.a);){a=vd(fm(b.a),10);c+=a.hC();c=~~c}return c}
function qm(){}
_=qm.prototype=new yj();_.eQ=en;_.hC=fn;_.tI=0;function ql(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.g(a[f])}}}}
function rl(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=ol(e,c.substring(1));a.g(b)}}}
function ul(b,a){return a==null?b.c:a!=null&&ud(a.tI,1)?zl(b,vd(a,1)):yl(b,a,~~fc(a))}
function xl(b,a){return a==null?b.b:a!=null&&ud(a.tI,1)?b.e[fb+vd(a,1)]:vl(b,a,~~fc(a))}
function vl(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return c.m()}}}return null}
function yl(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return true}}}return false}
function zl(b,a){return fb+a in b.e}
function Dl(b,a,c){return a==null?Bl(b,c):a!=null&&ud(a.tI,1)?Cl(b,vd(a,1),c):Al(b,a,c,~~fc(a))}
function Al(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(i.k(g,d)){var h=c.m();c.v(j);return h}}}else{a=i.a[e]=[]}var c=jo(new io(),g,j);a.push(c);++i.d;return null}
function Bl(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function Cl(d,a,e){var b,c=d.e;a=fb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function El(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&dc(a,b)}
function xk(){}
_=xk.prototype=new qm();_.k=El;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function jn(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ud(b.tI,13))){return false}c=vd(b,13);if(c.w()!=this.w()){return false}for(a=c.p();a.o();){d=a.q();if(!this.h(d)){return false}}return true}
function kn(){var a,b,c;a=0;for(b=this.p();b.o();){c=b.q();if(c!=null){a+=fc(c);a=~~a}}return a}
function gn(){}
_=gn.prototype=new sk();_.eQ=jn;_.hC=kn;_.tI=30;function Ek(b,a){b.a=a;return b}
function al(c){var a,b,d;if(c!=null&&ud(c.tI,10)){a=vd(c,10);b=a.l();if(ul(this.a,b)){d=xl(this.a,b);return Bn(a.m(),d)}}return false}
function bl(){return Ak(new zk(),this.a)}
function cl(){return this.a.d}
function yk(){}
_=yk.prototype=new gn();_.h=al;_.p=bl;_.w=cl;_.tI=31;_.a=null;function Ak(c,b){var a;c.b=b;a=mn(new ln());if(c.b.c){nn(a,el(new dl(),c.b))}rl(c.b,a);ql(c.b,a);c.a=cm(new am(),a);return c}
function Ck(){return em(this.a)}
function Dk(){return vd(fm(this.a),10)}
function zk(){}
_=zk.prototype=new yj();_.o=Ck;_.q=Dk;_.tI=0;_.a=null;_.b=null;function an(b){var a;if(b!=null&&ud(b.tI,10)){a=vd(b,10);if(wo(this.l(),a.l())&&wo(this.m(),a.m())){return true}}return false}
function bn(){var a,b;a=0;b=0;if(this.l()!=null){a=fc(this.l())}if(this.m()!=null){b=fc(this.m())}return a^b}
function Em(){}
_=Em.prototype=new yj();_.eQ=an;_.hC=bn;_.tI=32;function el(b,a){b.a=a;return b}
function gl(){return null}
function hl(){return this.a.b}
function il(a){return Bl(this.a,a)}
function dl(){}
_=dl.prototype=new Em();_.l=gl;_.m=hl;_.v=il;_.tI=33;_.a=null;function kl(c,a,b){c.b=b;c.a=a;return c}
function ml(){return this.a}
function nl(){return this.b.e[fb+this.a]}
function ol(b,a){return kl(new jl(),a,b)}
function pl(a){return Cl(this.b,this.a,a)}
function jl(){}
_=jl.prototype=new Em();_.l=ml;_.m=nl;_.v=pl;_.tI=34;_.a=null;_.b=null;function cm(b,a){b.b=a;return b}
function em(a){return a.a<a.b.w()}
function fm(a){if(a.a>=a.b.w()){throw new qo()}return a.b.n(a.a++)}
function gm(){return this.a<this.b.w()}
function hm(){return fm(this)}
function am(){}
_=am.prototype=new yj();_.o=gm;_.q=hm;_.tI=0;_.a=0;_.b=null;function ym(b,a,c){b.a=a;b.b=c;return b}
function Bm(a){return ul(this.a,a)}
function Cm(){var a;return a=Ak(new zk(),this.b.a),tm(new sm(),a)}
function Dm(){return this.b.a.d}
function rm(){}
_=rm.prototype=new gn();_.h=Bm;_.p=Cm;_.w=Dm;_.tI=35;_.a=null;_.b=null;function tm(a,b){a.a=b;return a}
function wm(){return em(this.a.a)}
function xm(){var a;return a=vd(fm(this.a.a),10),a.l()}
function sm(){}
_=sm.prototype=new yj();_.o=wm;_.q=xm;_.tI=0;_.a=null;function zn(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function Bn(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&dc(a,b)}
function yn(){}
_=yn.prototype=new xk();_.tI=36;function Dn(a){a.a=zn(new yn());return a}
function En(c,a){var b;b=Dl(c.a,a,c);return b==null}
function ao(b){var a;return a=Dl(this.a,b,this),a==null}
function bo(a){return ul(this.a,a)}
function co(){var a;return a=Ak(new zk(),dn(this.a).b.a),tm(new sm(),a)}
function eo(){return this.a.d}
function Cn(){}
_=Cn.prototype=new gn();_.g=ao;_.h=bo;_.p=co;_.w=eo;_.tI=37;_.a=null;function jo(b,a,c){b.a=a;b.b=c;return b}
function lo(){return this.a}
function mo(){return this.b}
function oo(b){var a;a=this.b;this.b=b;return a}
function io(){}
_=io.prototype=new Em();_.l=lo;_.m=mo;_.v=oo;_.tI=38;_.a=null;_.b=null;function qo(){}
_=qo.prototype=new Cj();_.tI=39;function wo(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&dc(a,b)}
function aj(){var a;!!$stats&&$stats({moduleName:$moduleName,subSystem:gb,evtGroup:hb,millis:(new Date()).getTime(),type:ib,className:jb});a=fg(new ag(),kb);ug(a,new wb());Cf((kh(),nh(null)),a)}
function gwtOnLoad(b,j,i){$moduleName=j;$moduleBase=i;if(b)try{aj()}catch(a){b(j)}else{aj()}}
function xo(){}
var de=jj(lb,mb),ee=jj(ob,pb);$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_example_simplegadget_SimpleGadget) {  var __gwt_initHandlers = com_example_simplegadget_SimpleGadget.__gwt_initHandlers;  com_example_simplegadget_SimpleGadget.onScriptLoad(gwtOnLoad);}})();