(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var B='',fb=', Size: ',hb=':',v='DOMMouseScroll',gb='Hello World!',eb='Index: ',z='MouseEvents',rb='Object;',mb='SimpleGadget',pb='Widget;',ob='[Lcom.google.gwt.user.client.ui.',qb='[Ljava.lang.',l='blur',E='button',m='change',F='className',x='click',lb='com.example.simplegadget.client.SimpleGadget',w='contextmenu',cb='dblclick',t='error',nb='focus',ab='gwt-Button',y='html',sb='keydown',tb='keypress',ub='keyup',A='left',vb='load',wb='losecapture',jb='moduleStartup',n='mousedown',o='mousemove',p='mouseout',q='mouseover',r='mouseup',u='mousewheel',kb='onModuleLoadStart',D='position',s='scroll',ib='startup',bb='submit',C='top',db='type';var _;function rj(a){return this===(a==null?null:a)}
function sj(){return this.$H||(this.$H=++nc)}
function pj(){}
_=pj.prototype={};_.eQ=rj;_.hC=sj;_.tM=oo;_.tI=1;function yb(){}
_=yb.prototype=new pj();_.tI=3;function fc(b,a){return b.tM==oo||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function hc(a){return a.tM==oo||a.tI==2?a.hC():a.$H||(a.$H=++nc)}
var nc=0;function uc(){uc=oo;rc();new pc()}
function wc(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function oc(){}
_=oc.prototype=new pj();_.tI=0;function tc(){tc=oo;uc()}
function sc(){}
_=sc.prototype=new oc();_.tI=0;function rc(){rc=oo;tc()}
function pc(){}
_=pc.prototype=new sc();_.tI=0;function md(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function nd(a,f,c,b,e){var d;d=md(e,b);od(a,f,c,d);return d}
function od(b,d,c,a){if(!pd){pd=new id()}sd(a,pd);a.tI=d;a.qI=c;return a}
function qd(a,b,c){if(c!=null){if(a.qI>0&&!vd(c.tI,a.qI)){throw new zi()}if(a.qI<0&&(c.tM==oo||c.tI==2)){throw new zi()}}return a[b]=c}
function sd(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function id(){}
_=id.prototype=new pj();_.tI=0;_.length=0;_.qI=0;var pd=null;function wd(b,a){return b&&!!ce[b][a]}
function vd(b,a){return b&&ce[b][a]}
function xd(b,a){if(b!=null&&!vd(b.tI,a)){throw new Di()}return b}
var ce=[{},{},{1:1},{5:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{11:1},{11:1},{11:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{13:1},{13:1},{10:1},{10:1},{10:1},{13:1},{12:1},{13:1},{10:1},{2:1},{9:1}];function xe(b,a,c){var d;if(a==Ae){if(yf(b)==8192){Ae=null}}d=we;we=b;try{c.r(b)}finally{we=d}}
var we=null,Ae=null;function Fe(a){ff();if(!bf){bf=cn(new bn())}dn(bf,a)}
function cf(){var a;if(bf){for(a=zl(new xl(),bf);a.a<a.b.v();){xd(Cl(a),3);qh()}}}
function df(){var a,b;b=null;if(bf){for(a=zl(new xl(),bf);a.a<a.b.v();){xd(Cl(a),3);b=null}}return b}
function ff(){if(!ef){ef=true;ag()}}
var bf=null,ef=false;function yf(a){switch(a.type){case l:return 4096;case m:return 1024;case x:return 1;case cb:return 2;case nb:return 2048;case sb:return 128;case tb:return 256;case ub:return 512;case vb:return 32768;case wb:return 8192;case n:return 4;case o:return 64;case p:return 32;case q:return 16;case r:return 8;case s:return 16384;case t:return 65536;case u:return 131072;case v:return 131072;case w:return 262144;}}
function Af(){if(!Cf){rf();mf();Cf=true}}
function Df(a){return a!=null&&wd(a.tI,4)&&!(a!=null&&(a.tM!=oo&&a.tI!=2))}
var Cf=false;function rf(){vf=function(b){if(uf(b)){var a=tf;if(a&&a.__listener){if(Df(a.__listener)){xe(b,a,a.__listener);b.stopPropagation()}}}};uf=function(a){return true};wf=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Df(c)){xe(b,a,c)}}};$wnd.addEventListener(x,vf,true);$wnd.addEventListener(cb,vf,true);$wnd.addEventListener(n,vf,true);$wnd.addEventListener(r,vf,true);$wnd.addEventListener(o,vf,true);$wnd.addEventListener(q,vf,true);$wnd.addEventListener(p,vf,true);$wnd.addEventListener(u,vf,true);$wnd.addEventListener(sb,uf,true);$wnd.addEventListener(ub,uf,true);$wnd.addEventListener(tb,uf,true)}
function sf(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?wf:null;if(b&2)c.ondblclick=a&2?wf:null;if(b&4)c.onmousedown=a&4?wf:null;if(b&8)c.onmouseup=a&8?wf:null;if(b&16)c.onmouseover=a&16?wf:null;if(b&32)c.onmouseout=a&32?wf:null;if(b&64)c.onmousemove=a&64?wf:null;if(b&128)c.onkeydown=a&128?wf:null;if(b&256)c.onkeypress=a&256?wf:null;if(b&512)c.onkeyup=a&512?wf:null;if(b&1024)c.onchange=a&1024?wf:null;if(b&2048)c.onfocus=a&2048?wf:null;if(b&4096)c.onblur=a&4096?wf:null;if(b&8192)c.onlosecapture=a&8192?wf:null;if(b&16384)c.onscroll=a&16384?wf:null;if(b&32768)c.onload=a&32768?wf:null;if(b&65536)c.onerror=a&65536?wf:null;if(b&131072)c.onmousewheel=a&131072?wf:null;if(b&262144)c.oncontextmenu=a&262144?wf:null}
var tf=null,uf=null,vf=null,wf=null;function mf(){$wnd.addEventListener(p,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(y==b.target.tagName.toLowerCase()){var c=$doc.createEvent(z);c.initMouseEvent(r,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(v,vf,true)}
function of(b,a){Af();sf(b,a);nf(b,a)}
function nf(b,a){if(a&131072){b.addEventListener(v,wf,false)}}
function ag(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=df()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{cf()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function yh(){}
_=yh.prototype=new pj();_.tI=8;_.d=null;function li(a){if(a.b){throw new ij()}a.b=true;a.d.__listener=a;a.i();a.s()}
function mi(a){if(!a.b){throw new ij()}try{a.t()}finally{a.j();a.d.__listener=null;a.b=false}}
function ni(a){if(a.c){eg(a.c,a)}else if(a.c){throw new ij()}}
function oi(c,b){var a;a=c.c;if(!b){if(!!a&&a.b){mi(c)}c.c=null}else{if(a){throw new ij()}c.c=b;if(b.b){li(c)}}}
function pi(){}
function qi(){}
function ri(a){}
function si(){}
function ti(){}
function Ah(){}
_=Ah.prototype=new yh();_.i=pi;_.j=qi;_.r=ri;_.s=si;_.t=ti;_.tI=9;_.b=false;_.c=null;function eh(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=ai(b);li(a)}}
function fh(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=ai(b);mi(a)}}
function gh(){}
function hh(){}
function ch(){}
_=ch.prototype=new Ah();_.i=eh;_.j=fh;_.s=gh;_.t=hh;_.tI=10;function vg(c,a,b){ni(a);ei(c.a,a);b.appendChild(a.d);oi(a,c)}
function xg(b,c){var a;if(c.c!=b){return false}oi(c,null);a=c.d;wc((uc(),a)).removeChild(a);ji(b.a,c);return true}
function yg(){return Eh(new Ch(),this.a)}
function tg(){}
_=tg.prototype=new ch();_.p=yg;_.tI=11;function cg(a,b){vg(a,b,a.d)}
function eg(b,c){var a;a=xg(b,c);if(a){fg(c.d)}return a}
function fg(a){a.style[A]=B;a.style[C]=B;a.style[D]=B}
function bg(){}
_=bg.prototype=new tg();_.tI=12;function Ag(b,a){if(!b.a){b.a=pg(new og());of(b.d,1|(b.d.__eventBits||0))}dn(b.a,a)}
function Cg(a){if(yf(a)==1){if(this.a){rg(this.a)}}}
function zg(){}
_=zg.prototype=new Ah();_.r=Cg;_.tI=13;_.a=null;function ig(b,a){b.d=a;b.d.tabIndex=0;return b}
function hg(){}
_=hg.prototype=new zg();_.tI=14;function lg(b,a){ig(b,$doc.createElement((uc(),E)));ng(b.d);b.d[F]=ab;b.d.innerHTML=a||B;return b}
function ng(b){if(b.type==bb){try{b.setAttribute(db,E)}catch(a){}}}
function gg(){}
_=gg.prototype=new hg();_.tI=15;function kk(a,b){var c;while(a.o()){c=a.q();if(b==null?c==null:fc(b,c)){return a}}return null}
function mk(a){throw new gk()}
function nk(b){var a;a=kk(this.p(),b);return !!a}
function jk(){}
_=jk.prototype=new pj();_.g=mk;_.h=nk;_.tI=0;function bm(a){this.f(this.v(),a);return true}
function am(b,a){throw new gk()}
function cm(a,b){if(a<0||a>=b){fm(a,b)}}
function dm(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&wd(e.tI,11))){return false}f=xd(e,11);if(this.v()!=f.v()){return false}c=zl(new xl(),this);d=f.p();while(c.a<c.b.v()){a=Cl(c);b=Cl(d);if(!(a==null?b==null:fc(a,b))){return false}}return true}
function em(){var a,b,c;b=1;a=zl(new xl(),this);while(a.a<a.b.v()){c=Cl(a);b=31*b+(c==null?0:hc(c));b=~~b}return b}
function fm(a,b){throw mj(new lj(),eb+a+fb+b)}
function gm(){return zl(new xl(),this)}
function wl(){}
_=wl.prototype=new jk();_.g=bm;_.f=am;_.eQ=dm;_.hC=em;_.p=gm;_.tI=16;function cn(a){a.a=nd(ge,0,0,0,0);a.b=0;return a}
function dn(b,a){qd(b.a,b.b++,a);return true}
function fn(c,b,a){for(;a<c.b;++a){if(no(b,c.a[a])){return a}}return -1}
function hn(a){return qd(this.a,this.b++,a),true}
function gn(a,b){if(a<0||a>this.b){fm(a,this.b)}this.a.splice(a,0,b);++this.b}
function jn(a){return fn(this,a,0)!=-1}
function kn(a){return cm(a,this.b),this.a[a]}
function ln(){return this.b}
function bn(){}
_=bn.prototype=new wl();_.g=hn;_.f=gn;_.h=jn;_.n=kn;_.v=ln;_.tI=17;_.a=null;_.b=0;function pg(a){cn(a);return a}
function rg(b){var a;for(a=zl(new xl(),b);a.a<a.b.v();){xd(Cl(a),5);$wnd.alert(gb)}}
function og(){}
_=og.prototype=new bn();_.tI=18;function ph(){ph=oo;th=qn(new pn());uh=un(new tn())}
function oh(b,a){ph();b.a=di(new Bh());b.d=a;li(b);return b}
function qh(){var b,a;ph();var c,d;for(d=(b=rk(new qk(),Am(uh.a).b.a),km(new jm(),b));Bl(d.a.a);){c=xd((a=xd(Cl(d.a.a),10),a.l()),7);if(c.b){mi(c)}}}
function sh(a){ph();var b;b=xd(ol(th,a),6);if(b){return b}if(th.d==0){Fe(new jh())}b=mh(new lh());ul(th,a,b);vn(uh,b);return b}
function ih(){}
_=ih.prototype=new bg();_.tI=19;var th,uh;function jh(){}
_=jh.prototype=new pj();_.tI=20;function nh(){nh=oo;ph()}
function mh(a){nh();oh(a,$doc.body);return a}
function lh(){}
_=lh.prototype=new ih();_.tI=21;function di(a){a.a=nd(fe,0,7,4,0);return a}
function ei(a,b){hi(a,b,a.b)}
function gi(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function hi(d,e,a){var b,c;if(a<0||a>d.b){throw new lj()}if(d.b==d.a.length){c=nd(fe,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){qd(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){qd(d.a,b,d.a[b-1])}qd(d.a,a,e)}
function ii(c,b){var a;if(b<0||b>=c.b){throw new lj()}--c.b;for(a=b;a<c.b;++a){qd(c.a,a,c.a[a+1])}qd(c.a,c.b,null)}
function ji(b,c){var a;a=gi(b,c);if(a==-1){throw new ho()}ii(b,a)}
function Bh(){}
_=Bh.prototype=new pj();_.tI=0;_.a=null;_.b=0;function Eh(b,a){b.b=a;return b}
function ai(a){if(a.a>=a.b.b){throw new ho()}return a.b.a[++a.a]}
function bi(){return this.a<this.b.b-1}
function ci(){return ai(this)}
function Ch(){}
_=Ch.prototype=new pj();_.o=bi;_.q=ci;_.tI=0;_.a=-1;_.b=null;function ek(){}
_=ek.prototype=new pj();_.tI=4;function gj(){}
_=gj.prototype=new ek();_.tI=5;function tj(){}
_=tj.prototype=new gj();_.tI=6;function zi(){}
_=zi.prototype=new tj();_.tI=23;function aj(c,a){var b;b=new Ci();return b}
function Ci(){}
_=Ci.prototype=new pj();_.tI=0;function Di(){}
_=Di.prototype=new tj();_.tI=26;function ij(){}
_=ij.prototype=new tj();_.tI=27;function mj(b,a){return b}
function lj(){}
_=lj.prototype=new tj();_.tI=28;function ck(a){if(!(a!=null&&wd(a.tI,1))){return false}return String(this)==a}
function dk(){return Cj(this)}
_=String.prototype;_.eQ=ck;_.hC=dk;_.tI=2;function xj(){xj=oo;yj={};Bj={}}
function zj(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function Cj(c){xj();var a=hb+c;var b=Bj[a];if(b!=null){return b}b=yj[a];if(b==null){b=zj(c)}Dj();return Bj[a]=b}
function Dj(){if(Aj==256){yj=Bj;Bj={};Aj=0}++Aj}
var yj,Aj=0,Bj;function gk(){}
_=gk.prototype=new tj();_.tI=29;function Am(b){var a;a=vk(new pk(),b);return pm(new im(),b,a)}
function Bm(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&wd(c.tI,12))){return false}e=xd(c,12);if(xd(this,12).d!=e.d){return false}for(b=rk(new qk(),vk(new pk(),e).a);Bl(b.a);){a=xd(Cl(b.a),10);d=a.l();f=a.m();if(!(d==null?xd(this,12).c:d!=null&&wd(d.tI,1)?ql(xd(this,12),xd(d,1)):pl(xd(this,12),d,~~hc(d)))){return false}if(!no(f,d==null?xd(this,12).b:d!=null&&wd(d.tI,1)?xd(this,12).e[hb+xd(d,1)]:ml(xd(this,12),d,~~hc(d)))){return false}}return true}
function Cm(){var a,b,c;c=0;for(b=rk(new qk(),vk(new pk(),xd(this,12)).a);Bl(b.a);){a=xd(Cl(b.a),10);c+=a.hC();c=~~c}return c}
function hm(){}
_=hm.prototype=new pj();_.eQ=Bm;_.hC=Cm;_.tI=0;function hl(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.g(a[f])}}}}
function il(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=fl(e,c.substring(1));a.g(b)}}}
function ll(b,a){return a==null?b.c:a!=null&&wd(a.tI,1)?ql(b,xd(a,1)):pl(b,a,~~hc(a))}
function ol(b,a){return a==null?b.b:a!=null&&wd(a.tI,1)?b.e[hb+xd(a,1)]:ml(b,a,~~hc(a))}
function ml(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return c.m()}}}return null}
function pl(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return true}}}return false}
function ql(b,a){return hb+a in b.e}
function ul(b,a,c){return a==null?sl(b,c):a!=null&&wd(a.tI,1)?tl(b,xd(a,1),c):rl(b,a,c,~~hc(a))}
function rl(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(i.k(g,d)){var h=c.m();c.u(j);return h}}}else{a=i.a[e]=[]}var c=Fn(new En(),g,j);a.push(c);++i.d;return null}
function sl(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function tl(d,a,e){var b,c=d.e;a=hb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function vl(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fc(a,b)}
function ok(){}
_=ok.prototype=new hm();_.k=vl;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fm(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&wd(b.tI,13))){return false}c=xd(b,13);if(c.v()!=this.v()){return false}for(a=c.p();a.o();){d=a.q();if(!this.h(d)){return false}}return true}
function an(){var a,b,c;a=0;for(b=this.p();b.o();){c=b.q();if(c!=null){a+=hc(c);a=~~a}}return a}
function Dm(){}
_=Dm.prototype=new jk();_.eQ=Fm;_.hC=an;_.tI=30;function vk(b,a){b.a=a;return b}
function xk(c){var a,b,d;if(c!=null&&wd(c.tI,10)){a=xd(c,10);b=a.l();if(ll(this.a,b)){d=ol(this.a,b);return sn(a.m(),d)}}return false}
function yk(){return rk(new qk(),this.a)}
function zk(){return this.a.d}
function pk(){}
_=pk.prototype=new Dm();_.h=xk;_.p=yk;_.v=zk;_.tI=31;_.a=null;function rk(c,b){var a;c.b=b;a=cn(new bn());if(c.b.c){dn(a,Bk(new Ak(),c.b))}il(c.b,a);hl(c.b,a);c.a=zl(new xl(),a);return c}
function tk(){return Bl(this.a)}
function uk(){return xd(Cl(this.a),10)}
function qk(){}
_=qk.prototype=new pj();_.o=tk;_.q=uk;_.tI=0;_.a=null;_.b=null;function xm(b){var a;if(b!=null&&wd(b.tI,10)){a=xd(b,10);if(no(this.l(),a.l())&&no(this.m(),a.m())){return true}}return false}
function ym(){var a,b;a=0;b=0;if(this.l()!=null){a=hc(this.l())}if(this.m()!=null){b=hc(this.m())}return a^b}
function vm(){}
_=vm.prototype=new pj();_.eQ=xm;_.hC=ym;_.tI=32;function Bk(b,a){b.a=a;return b}
function Dk(){return null}
function Ek(){return this.a.b}
function Fk(a){return sl(this.a,a)}
function Ak(){}
_=Ak.prototype=new vm();_.l=Dk;_.m=Ek;_.u=Fk;_.tI=33;_.a=null;function bl(c,a,b){c.b=b;c.a=a;return c}
function dl(){return this.a}
function el(){return this.b.e[hb+this.a]}
function fl(b,a){return bl(new al(),a,b)}
function gl(a){return tl(this.b,this.a,a)}
function al(){}
_=al.prototype=new vm();_.l=dl;_.m=el;_.u=gl;_.tI=34;_.a=null;_.b=null;function zl(b,a){b.b=a;return b}
function Bl(a){return a.a<a.b.v()}
function Cl(a){if(a.a>=a.b.v()){throw new ho()}return a.b.n(a.a++)}
function Dl(){return this.a<this.b.v()}
function El(){return Cl(this)}
function xl(){}
_=xl.prototype=new pj();_.o=Dl;_.q=El;_.tI=0;_.a=0;_.b=null;function pm(b,a,c){b.a=a;b.b=c;return b}
function sm(a){return ll(this.a,a)}
function tm(){var a;return a=rk(new qk(),this.b.a),km(new jm(),a)}
function um(){return this.b.a.d}
function im(){}
_=im.prototype=new Dm();_.h=sm;_.p=tm;_.v=um;_.tI=35;_.a=null;_.b=null;function km(a,b){a.a=b;return a}
function nm(){return Bl(this.a.a)}
function om(){var a;return a=xd(Cl(this.a.a),10),a.l()}
function jm(){}
_=jm.prototype=new pj();_.o=nm;_.q=om;_.tI=0;_.a=null;function qn(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function sn(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fc(a,b)}
function pn(){}
_=pn.prototype=new ok();_.tI=36;function un(a){a.a=qn(new pn());return a}
function vn(c,a){var b;b=ul(c.a,a,c);return b==null}
function xn(b){var a;return a=ul(this.a,b,this),a==null}
function yn(a){return ll(this.a,a)}
function zn(){var a;return a=rk(new qk(),Am(this.a).b.a),km(new jm(),a)}
function An(){return this.a.d}
function tn(){}
_=tn.prototype=new Dm();_.g=xn;_.h=yn;_.p=zn;_.v=An;_.tI=37;_.a=null;function Fn(b,a,c){b.a=a;b.b=c;return b}
function bo(){return this.a}
function co(){return this.b}
function fo(b){var a;a=this.b;this.b=b;return a}
function En(){}
_=En.prototype=new vm();_.l=bo;_.m=co;_.u=fo;_.tI=38;_.a=null;_.b=null;function ho(){}
_=ho.prototype=new tj();_.tI=39;function no(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fc(a,b)}
function xi(){var a;!!$stats&&$stats({moduleName:$moduleName,subSystem:ib,evtGroup:jb,millis:(new Date()).getTime(),type:kb,className:lb});a=lg(new gg(),mb);Ag(a,new yb());cg((ph(),sh(null)),a)}
function gwtOnLoad(b,j,i){$moduleName=j;$moduleBase=i;if(b)try{xi()}catch(a){b(j)}else{xi()}}
function oo(){}
var fe=aj(ob,pb),ge=aj(qb,rb);$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_example_simplegadget_SimpleGadget) {  var __gwt_initHandlers = com_example_simplegadget_SimpleGadget.__gwt_initHandlers;  com_example_simplegadget_SimpleGadget.onScriptLoad(gwtOnLoad);}})();