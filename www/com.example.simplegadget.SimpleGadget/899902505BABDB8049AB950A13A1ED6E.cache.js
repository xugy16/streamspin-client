(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var B='',fb=', Size: ',hb=':',v='DOMMouseScroll',gb='Hello World!',eb='Index: ',z='MouseEvents',rb='Object;',mb='SimpleGadget',pb='Widget;',ob='[Lcom.google.gwt.user.client.ui.',qb='[Ljava.lang.',l='blur',E='button',m='change',F='className',x='click',lb='com.example.simplegadget.client.SimpleGadget',w='contextmenu',cb='dblclick',t='error',nb='focus',ab='gwt-Button',y='html',sb='keydown',tb='keypress',ub='keyup',A='left',vb='load',wb='losecapture',jb='moduleStartup',n='mousedown',o='mousemove',p='mouseout',q='mouseover',r='mouseup',u='mousewheel',kb='onModuleLoadStart',D='position',s='scroll',ib='startup',bb='submit',C='top',db='type';var _;function ak(a){return this===(a==null?null:a)}
function bk(){return this.$H||(this.$H=++nc)}
function Ej(){}
_=Ej.prototype={};_.eQ=ak;_.hC=bk;_.tM=Do;_.tI=1;function yb(){}
_=yb.prototype=new Ej();_.tI=3;function fc(b,a){return b.tM==Do||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function hc(a){return a.tM==Do||a.tI==2?a.hC():a.$H||(a.$H=++nc)}
var nc=0;function xc(){xc=Do;sc();new qc()}
function zc(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function oc(){}
_=oc.prototype=new Ej();_.tI=0;function wc(){wc=Do;xc()}
function vc(){}
_=vc.prototype=new oc();_.tI=0;function uc(){uc=Do;wc()}
function pc(){}
_=pc.prototype=new vc();_.tI=0;function sc(){sc=Do;uc()}
function qc(){}
_=qc.prototype=new pc();_.tI=0;function pd(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function qd(a,f,c,b,e){var d;d=pd(e,b);rd(a,f,c,d);return d}
function rd(b,d,c,a){if(!sd){sd=new ld()}vd(a,sd);a.tI=d;a.qI=c;return a}
function td(a,b,c){if(c!=null){if(a.qI>0&&!yd(c.tI,a.qI)){throw new ij()}if(a.qI<0&&(c.tM==Do||c.tI==2)){throw new ij()}}return a[b]=c}
function vd(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function ld(){}
_=ld.prototype=new Ej();_.tI=0;_.length=0;_.qI=0;var sd=null;function zd(b,a){return b&&!!fe[b][a]}
function yd(b,a){return b&&fe[b][a]}
function Ad(b,a){if(b!=null&&!yd(b.tI,a)){throw new mj()}return b}
var fe=[{},{},{1:1},{5:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{11:1},{11:1},{11:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{13:1},{13:1},{10:1},{10:1},{10:1},{13:1},{12:1},{13:1},{10:1},{2:1},{9:1}];function Ae(b,a,c){var d;if(a==De){if(Bf(b)==8192){De=null}}d=ze;ze=b;try{c.r(b)}finally{ze=d}}
var ze=null,De=null;function cf(a){jf();if(!ef){ef=sn(new rn())}tn(ef,a)}
function ff(){var a;if(ef){for(a=im(new gm(),ef);a.a<a.b.w();){Ad(lm(a),3);uh()}}}
function gf(){var a,b;b=null;if(ef){for(a=im(new gm(),ef);a.a<a.b.w();){Ad(lm(a),3);b=null}}return b}
function jf(){if(!hf){hf=true;dg()}}
var ef=null,hf=false;function Bf(a){switch(a.type){case l:return 4096;case m:return 1024;case x:return 1;case cb:return 2;case nb:return 2048;case sb:return 128;case tb:return 256;case ub:return 512;case vb:return 32768;case wb:return 8192;case n:return 4;case o:return 64;case p:return 32;case q:return 16;case r:return 8;case s:return 16384;case t:return 65536;case u:return 131072;case v:return 131072;case w:return 262144;}}
function Df(){if(!Ff){uf();pf();Ff=true}}
function ag(a){return a!=null&&zd(a.tI,4)&&!(a!=null&&(a.tM!=Do&&a.tI!=2))}
var Ff=false;function uf(){yf=function(b){if(xf(b)){var a=wf;if(a&&a.__listener){if(ag(a.__listener)){Ae(b,a,a.__listener);b.stopPropagation()}}}};xf=function(a){return true};zf=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(ag(c)){Ae(b,a,c)}}};$wnd.addEventListener(x,yf,true);$wnd.addEventListener(cb,yf,true);$wnd.addEventListener(n,yf,true);$wnd.addEventListener(r,yf,true);$wnd.addEventListener(o,yf,true);$wnd.addEventListener(q,yf,true);$wnd.addEventListener(p,yf,true);$wnd.addEventListener(u,yf,true);$wnd.addEventListener(sb,xf,true);$wnd.addEventListener(ub,xf,true);$wnd.addEventListener(tb,xf,true)}
function vf(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?zf:null;if(b&2)c.ondblclick=a&2?zf:null;if(b&4)c.onmousedown=a&4?zf:null;if(b&8)c.onmouseup=a&8?zf:null;if(b&16)c.onmouseover=a&16?zf:null;if(b&32)c.onmouseout=a&32?zf:null;if(b&64)c.onmousemove=a&64?zf:null;if(b&128)c.onkeydown=a&128?zf:null;if(b&256)c.onkeypress=a&256?zf:null;if(b&512)c.onkeyup=a&512?zf:null;if(b&1024)c.onchange=a&1024?zf:null;if(b&2048)c.onfocus=a&2048?zf:null;if(b&4096)c.onblur=a&4096?zf:null;if(b&8192)c.onlosecapture=a&8192?zf:null;if(b&16384)c.onscroll=a&16384?zf:null;if(b&32768)c.onload=a&32768?zf:null;if(b&65536)c.onerror=a&65536?zf:null;if(b&131072)c.onmousewheel=a&131072?zf:null;if(b&262144)c.oncontextmenu=a&262144?zf:null}
var wf=null,xf=null,yf=null,zf=null;function pf(){$wnd.addEventListener(p,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(y==b.target.tagName.toLowerCase()){var c=$doc.createEvent(z);c.initMouseEvent(r,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(v,yf,true)}
function rf(b,a){Df();vf(b,a);qf(b,a)}
function qf(b,a){if(a&131072){b.addEventListener(v,zf,false)}}
function dg(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=gf()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ff()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Ch(){}
_=Ch.prototype=new Ej();_.tI=8;_.d=null;function pi(a){if(a.b){throw new xj()}a.b=true;a.d.__listener=a;a.i();a.s()}
function qi(a){if(!a.b){throw new xj()}try{a.t()}finally{a.j();a.d.__listener=null;a.b=false}}
function ri(a){if(a.c){hg(a.c,a)}else if(a.c){throw new xj()}}
function si(c,b){var a;a=c.c;if(!b){if(!!a&&a.b){qi(c)}c.c=null}else{if(a){throw new xj()}c.c=b;if(b.b){pi(c)}}}
function ti(){}
function ui(){}
function vi(a){}
function wi(){}
function xi(){}
function Eh(){}
_=Eh.prototype=new Ch();_.i=ti;_.j=ui;_.r=vi;_.s=wi;_.t=xi;_.tI=9;_.b=false;_.c=null;function ih(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=ei(b);pi(a)}}
function jh(){var a,b;for(b=this.p();b.a<b.b.b-1;){a=ei(b);qi(a)}}
function kh(){}
function lh(){}
function gh(){}
_=gh.prototype=new Eh();_.i=ih;_.j=jh;_.s=kh;_.t=lh;_.tI=10;function yg(c,a,b){ri(a);ii(c.a,a);b.appendChild(a.d);si(a,c)}
function Ag(b,c){var a;if(c.c!=b){return false}si(c,null);a=c.d;zc((xc(),a)).removeChild(a);ni(b.a,c);return true}
function Bg(){return ci(new ai(),this.a)}
function wg(){}
_=wg.prototype=new gh();_.p=Bg;_.tI=11;function fg(a,b){yg(a,b,a.d)}
function hg(b,c){var a;a=Ag(b,c);if(a){ig(c.d)}return a}
function ig(a){a.style[A]=B;a.style[C]=B;a.style[D]=B}
function eg(){}
_=eg.prototype=new wg();_.tI=12;function Eg(){Eg=Do;Fg=(cj(),ej)}
function Dg(b,a){if(!b.a){b.a=sg(new rg());rf(b.d,1|(b.d.__eventBits||0))}tn(b.a,a)}
function ah(a){if(Bf(a)==1){if(this.a){ug(this.a)}}}
function Cg(){}
_=Cg.prototype=new Eh();_.r=ah;_.tI=13;_.a=null;var Fg;function mg(){mg=Do;Eg()}
function lg(b,a){mg();b.d=a;Fg.u(b.d,0);return b}
function kg(){}
_=kg.prototype=new Cg();_.tI=14;function pg(){pg=Do;mg()}
function og(b,a){pg();lg(b,$doc.createElement((xc(),E)));qg(b.d);b.d[F]=ab;b.d.innerHTML=a||B;return b}
function qg(b){if(b.type==bb){try{b.setAttribute(db,E)}catch(a){}}}
function jg(){}
_=jg.prototype=new kg();_.tI=15;function zk(a,b){var c;while(a.o()){c=a.q();if(b==null?c==null:fc(b,c)){return a}}return null}
function Bk(a){throw new vk()}
function Ck(b){var a;a=zk(this.p(),b);return !!a}
function yk(){}
_=yk.prototype=new Ej();_.g=Bk;_.h=Ck;_.tI=0;function qm(a){this.f(this.w(),a);return true}
function pm(b,a){throw new vk()}
function rm(a,b){if(a<0||a>=b){um(a,b)}}
function sm(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&zd(e.tI,11))){return false}f=Ad(e,11);if(this.w()!=f.w()){return false}c=im(new gm(),this);d=f.p();while(c.a<c.b.w()){a=lm(c);b=lm(d);if(!(a==null?b==null:fc(a,b))){return false}}return true}
function tm(){var a,b,c;b=1;a=im(new gm(),this);while(a.a<a.b.w()){c=lm(a);b=31*b+(c==null?0:hc(c));b=~~b}return b}
function um(a,b){throw Bj(new Aj(),eb+a+fb+b)}
function vm(){return im(new gm(),this)}
function fm(){}
_=fm.prototype=new yk();_.g=qm;_.f=pm;_.eQ=sm;_.hC=tm;_.p=vm;_.tI=16;function sn(a){a.a=qd(je,0,0,0,0);a.b=0;return a}
function tn(b,a){td(b.a,b.b++,a);return true}
function vn(c,b,a){for(;a<c.b;++a){if(Co(b,c.a[a])){return a}}return -1}
function xn(a){return td(this.a,this.b++,a),true}
function wn(a,b){if(a<0||a>this.b){um(a,this.b)}this.a.splice(a,0,b);++this.b}
function yn(a){return vn(this,a,0)!=-1}
function zn(a){return rm(a,this.b),this.a[a]}
function An(){return this.b}
function rn(){}
_=rn.prototype=new fm();_.g=xn;_.f=wn;_.h=yn;_.n=zn;_.w=An;_.tI=17;_.a=null;_.b=0;function sg(a){sn(a);return a}
function ug(b){var a;for(a=im(new gm(),b);a.a<a.b.w();){Ad(lm(a),5);$wnd.alert(gb)}}
function rg(){}
_=rg.prototype=new rn();_.tI=18;function th(){th=Do;xh=Fn(new En());yh=eo(new co())}
function sh(b,a){th();b.a=hi(new Fh());b.d=a;pi(b);return b}
function uh(){var b,a;th();var c,d;for(d=(b=al(new Fk(),kn(yh.a).b.a),zm(new ym(),b));km(d.a.a);){c=Ad((a=Ad(lm(d.a.a),10),a.l()),7);if(c.b){qi(c)}}}
function wh(a){th();var b;b=Ad(Dl(xh,a),6);if(b){return b}if(xh.d==0){cf(new nh())}b=qh(new ph());dm(xh,a,b);fo(yh,b);return b}
function mh(){}
_=mh.prototype=new eg();_.tI=19;var xh,yh;function nh(){}
_=nh.prototype=new Ej();_.tI=20;function rh(){rh=Do;th()}
function qh(a){rh();sh(a,$doc.body);return a}
function ph(){}
_=ph.prototype=new mh();_.tI=21;function hi(a){a.a=qd(ie,0,7,4,0);return a}
function ii(a,b){li(a,b,a.b)}
function ki(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function li(d,e,a){var b,c;if(a<0||a>d.b){throw new Aj()}if(d.b==d.a.length){c=qd(ie,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){td(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){td(d.a,b,d.a[b-1])}td(d.a,a,e)}
function mi(c,b){var a;if(b<0||b>=c.b){throw new Aj()}--c.b;for(a=b;a<c.b;++a){td(c.a,a,c.a[a+1])}td(c.a,c.b,null)}
function ni(b,c){var a;a=ki(b,c);if(a==-1){throw new wo()}mi(b,a)}
function Fh(){}
_=Fh.prototype=new Ej();_.tI=0;_.a=null;_.b=0;function ci(b,a){b.b=a;return b}
function ei(a){if(a.a>=a.b.b){throw new wo()}return a.b.a[++a.a]}
function fi(){return this.a<this.b.b-1}
function gi(){return ei(this)}
function ai(){}
_=ai.prototype=new Ej();_.o=fi;_.q=gi;_.tI=0;_.a=-1;_.b=null;function cj(){cj=Do;dj=Bi(new zi());ej=dj?(cj(),new yi()):dj}
function fj(a,b){a.tabIndex=b}
function yi(){}
_=yi.prototype=new Ej();_.u=fj;_.tI=0;var dj,ej;function Ci(){Ci=Do;cj()}
function Bi(a){Ci();Di();Ei();Fi();return a}
function Di(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function Ei(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function Fi(){return function(){this.firstChild.focus()}}
function aj(a,b){a.firstChild.tabIndex=b}
function zi(){}
_=zi.prototype=new yi();_.u=aj;_.tI=0;function tk(){}
_=tk.prototype=new Ej();_.tI=4;function vj(){}
_=vj.prototype=new tk();_.tI=5;function ck(){}
_=ck.prototype=new vj();_.tI=6;function ij(){}
_=ij.prototype=new ck();_.tI=23;function pj(c,a){var b;b=new lj();return b}
function lj(){}
_=lj.prototype=new Ej();_.tI=0;function mj(){}
_=mj.prototype=new ck();_.tI=26;function xj(){}
_=xj.prototype=new ck();_.tI=27;function Bj(b,a){return b}
function Aj(){}
_=Aj.prototype=new ck();_.tI=28;function rk(a){if(!(a!=null&&zd(a.tI,1))){return false}return String(this)==a}
function sk(){return lk(this)}
_=String.prototype;_.eQ=rk;_.hC=sk;_.tI=2;function gk(){gk=Do;hk={};kk={}}
function ik(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function lk(c){gk();var a=hb+c;var b=kk[a];if(b!=null){return b}b=hk[a];if(b==null){b=ik(c)}mk();return kk[a]=b}
function mk(){if(jk==256){hk=kk;kk={};jk=0}++jk}
var hk,jk=0,kk;function vk(){}
_=vk.prototype=new ck();_.tI=29;function kn(b){var a;a=el(new Ek(),b);return Em(new xm(),b,a)}
function ln(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&zd(c.tI,12))){return false}e=Ad(c,12);if(Ad(this,12).d!=e.d){return false}for(b=al(new Fk(),el(new Ek(),e).a);km(b.a);){a=Ad(lm(b.a),10);d=a.l();f=a.m();if(!(d==null?Ad(this,12).c:d!=null&&zd(d.tI,1)?Fl(Ad(this,12),Ad(d,1)):El(Ad(this,12),d,~~hc(d)))){return false}if(!Co(f,d==null?Ad(this,12).b:d!=null&&zd(d.tI,1)?Ad(this,12).e[hb+Ad(d,1)]:Bl(Ad(this,12),d,~~hc(d)))){return false}}return true}
function mn(){var a,b,c;c=0;for(b=al(new Fk(),el(new Ek(),Ad(this,12)).a);km(b.a);){a=Ad(lm(b.a),10);c+=a.hC();c=~~c}return c}
function wm(){}
_=wm.prototype=new Ej();_.eQ=ln;_.hC=mn;_.tI=0;function wl(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.g(a[f])}}}}
function xl(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=ul(e,c.substring(1));a.g(b)}}}
function Al(b,a){return a==null?b.c:a!=null&&zd(a.tI,1)?Fl(b,Ad(a,1)):El(b,a,~~hc(a))}
function Dl(b,a){return a==null?b.b:a!=null&&zd(a.tI,1)?b.e[hb+Ad(a,1)]:Bl(b,a,~~hc(a))}
function Bl(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return c.m()}}}return null}
function El(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(h.k(g,d)){return true}}}return false}
function Fl(b,a){return hb+a in b.e}
function dm(b,a,c){return a==null?bm(b,c):a!=null&&zd(a.tI,1)?cm(b,Ad(a,1),c):am(b,a,c,~~hc(a))}
function am(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.l();if(i.k(g,d)){var h=c.m();c.v(j);return h}}}else{a=i.a[e]=[]}var c=po(new oo(),g,j);a.push(c);++i.d;return null}
function bm(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function cm(d,a,e){var b,c=d.e;a=hb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function em(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fc(a,b)}
function Dk(){}
_=Dk.prototype=new wm();_.k=em;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function pn(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&zd(b.tI,13))){return false}c=Ad(b,13);if(c.w()!=this.w()){return false}for(a=c.p();a.o();){d=a.q();if(!this.h(d)){return false}}return true}
function qn(){var a,b,c;a=0;for(b=this.p();b.o();){c=b.q();if(c!=null){a+=hc(c);a=~~a}}return a}
function nn(){}
_=nn.prototype=new yk();_.eQ=pn;_.hC=qn;_.tI=30;function el(b,a){b.a=a;return b}
function gl(c){var a,b,d;if(c!=null&&zd(c.tI,10)){a=Ad(c,10);b=a.l();if(Al(this.a,b)){d=Dl(this.a,b);return bo(a.m(),d)}}return false}
function hl(){return al(new Fk(),this.a)}
function il(){return this.a.d}
function Ek(){}
_=Ek.prototype=new nn();_.h=gl;_.p=hl;_.w=il;_.tI=31;_.a=null;function al(c,b){var a;c.b=b;a=sn(new rn());if(c.b.c){tn(a,kl(new jl(),c.b))}xl(c.b,a);wl(c.b,a);c.a=im(new gm(),a);return c}
function cl(){return km(this.a)}
function dl(){return Ad(lm(this.a),10)}
function Fk(){}
_=Fk.prototype=new Ej();_.o=cl;_.q=dl;_.tI=0;_.a=null;_.b=null;function gn(b){var a;if(b!=null&&zd(b.tI,10)){a=Ad(b,10);if(Co(this.l(),a.l())&&Co(this.m(),a.m())){return true}}return false}
function hn(){var a,b;a=0;b=0;if(this.l()!=null){a=hc(this.l())}if(this.m()!=null){b=hc(this.m())}return a^b}
function en(){}
_=en.prototype=new Ej();_.eQ=gn;_.hC=hn;_.tI=32;function kl(b,a){b.a=a;return b}
function ml(){return null}
function nl(){return this.a.b}
function ol(a){return bm(this.a,a)}
function jl(){}
_=jl.prototype=new en();_.l=ml;_.m=nl;_.v=ol;_.tI=33;_.a=null;function ql(c,a,b){c.b=b;c.a=a;return c}
function sl(){return this.a}
function tl(){return this.b.e[hb+this.a]}
function ul(b,a){return ql(new pl(),a,b)}
function vl(a){return cm(this.b,this.a,a)}
function pl(){}
_=pl.prototype=new en();_.l=sl;_.m=tl;_.v=vl;_.tI=34;_.a=null;_.b=null;function im(b,a){b.b=a;return b}
function km(a){return a.a<a.b.w()}
function lm(a){if(a.a>=a.b.w()){throw new wo()}return a.b.n(a.a++)}
function mm(){return this.a<this.b.w()}
function nm(){return lm(this)}
function gm(){}
_=gm.prototype=new Ej();_.o=mm;_.q=nm;_.tI=0;_.a=0;_.b=null;function Em(b,a,c){b.a=a;b.b=c;return b}
function bn(a){return Al(this.a,a)}
function cn(){var a;return a=al(new Fk(),this.b.a),zm(new ym(),a)}
function dn(){return this.b.a.d}
function xm(){}
_=xm.prototype=new nn();_.h=bn;_.p=cn;_.w=dn;_.tI=35;_.a=null;_.b=null;function zm(a,b){a.a=b;return a}
function Cm(){return km(this.a.a)}
function Dm(){var a;return a=Ad(lm(this.a.a),10),a.l()}
function ym(){}
_=ym.prototype=new Ej();_.o=Cm;_.q=Dm;_.tI=0;_.a=null;function Fn(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function bo(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fc(a,b)}
function En(){}
_=En.prototype=new Dk();_.tI=36;function eo(a){a.a=Fn(new En());return a}
function fo(c,a){var b;b=dm(c.a,a,c);return b==null}
function ho(b){var a;return a=dm(this.a,b,this),a==null}
function io(a){return Al(this.a,a)}
function jo(){var a;return a=al(new Fk(),kn(this.a).b.a),zm(new ym(),a)}
function ko(){return this.a.d}
function co(){}
_=co.prototype=new nn();_.g=ho;_.h=io;_.p=jo;_.w=ko;_.tI=37;_.a=null;function po(b,a,c){b.a=a;b.b=c;return b}
function ro(){return this.a}
function so(){return this.b}
function uo(b){var a;a=this.b;this.b=b;return a}
function oo(){}
_=oo.prototype=new en();_.l=ro;_.m=so;_.v=uo;_.tI=38;_.a=null;_.b=null;function wo(){}
_=wo.prototype=new ck();_.tI=39;function Co(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fc(a,b)}
function gj(){var a;!!$stats&&$stats({moduleName:$moduleName,subSystem:ib,evtGroup:jb,millis:(new Date()).getTime(),type:kb,className:lb});a=og(new jg(),mb);Dg(a,new yb());fg((th(),wh(null)),a)}
function gwtOnLoad(b,j,i){$moduleName=j;$moduleBase=i;if(b)try{gj()}catch(a){b(j)}else{gj()}}
function Do(){}
var ie=pj(ob,pb),je=pj(qb,rb);$stats && $stats({moduleName:'com.example.simplegadget.SimpleGadget',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_example_simplegadget_SimpleGadget) {  var __gwt_initHandlers = com_example_simplegadget_SimpleGadget.__gwt_initHandlers;  com_example_simplegadget_SimpleGadget.onScriptLoad(gwtOnLoad);}})();