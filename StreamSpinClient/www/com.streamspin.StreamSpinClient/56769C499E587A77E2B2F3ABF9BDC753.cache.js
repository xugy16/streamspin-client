(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',Ec=', Size: ',Bb='-',qb='0',Fb='0px',tc='100%',xc='100px',ic='1px',Bc='50px',Cc=':',w='DOMMouseScroll',Dc='Index: ',pc='Item four',lc='Item one',rc='Item six',qc='Item that has a long title and is number five',nc='Item tree',mc='Item two',hd='Object;',Ac='Status: <b>Online<\/b>',vc='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',fd='Widget;',dd='[Lcom.google.gwt.user.client.ui.',gd='[Ljava.lang.',hc='absolute',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',cd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',hb='gwt-Label',vb='gwt-ListBox',Ab='gwt-MenuBar',ec='gwt-TextArea',wc='height',jc='hidden',ac='hideFocus',Db='horizontal',fc='input',dc='keydown',oc='keypress',zc='keyup',B='left',ed='load',n='losecapture',zb='menubar',mb='middle',ad='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',bd='onModuleLoadStart',wb='option',Eb='outline',E='position',kb='right',xb='role',t='scroll',l='select',Fc='startup',yc='status Online',bb='submit',eb='table',fb='tbody',sb='td',gc='text',cc='textarea',kc='title of Main Window',D='top',ob='tr',bc='true',db='type',uc='value',Cb='vertical',ub='verticalAlign',sc='width';var _;function jp(a){return this===(a==null?null:a)}
function kp(){return this.$H||(this.$H=++yd)}
function hp(){}
_=hp.prototype={};_.eQ=jp;_.hC=kp;_.tM=nu;_.tI=1;function pd(b,a){return b.tM==nu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function rd(a){return a.tM==nu||a.tI==2?a.hC():a.$H||(a.$H=++yd)}
var yd=0;function ce(){ce=nu;Cd();new Ad()}
function ee(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function fe(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function he(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function zd(){}
_=zd.prototype=new hp();_.tI=0;function be(){be=nu;ce()}
function ae(){}
_=ae.prototype=new zd();_.tI=0;function Cd(){Cd=nu;be()}
function Dd(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function Ad(){}
_=Ad.prototype=new ae();_.tI=0;function gf(){}
_=gf.prototype=new hp();_.tI=0;function of(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function pf(a,f,c,b,e){var d;d=of(e,b);qf(a,f,c,d);return d}
function qf(b,d,c,a){if(!rf){rf=new kf()}uf(a,rf);a.tI=d;a.qI=c;return a}
function sf(a,b,c){if(c!=null){if(a.qI>0&&!xf(c.tI,a.qI)){throw new oo()}if(a.qI<0&&(c.tM==nu||c.tI==2)){throw new oo()}}return a[b]=c}
function uf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function kf(){}
_=kf.prototype=new hp();_.tI=0;_.length=0;_.qI=0;var rf=null;function yf(b,a){return b&&!!gg[b][a]}
function xf(b,a){return b&&gg[b][a]}
function zf(b,a){if(b!=null&&!xf(b.tI,a)){throw new so()}return b}
function fg(a){if(a!=null){throw new so()}return a}
var gg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Bg(b,a,c){var d;if(a==ah){if(Dh(b)==8192){ah=null}}d=Ag;Ag=b;try{c.u(b)}finally{Ag=d}}
function ch(a,b){Fh();vh(a,b)}
var Ag=null,ah=null;function hh(a){mh();if(!ih){ih=dt(new ct())}ft(ih,a)}
function jh(){var a;if(ih){for(a=Br(new zr(),ih);a.a<a.b.b;){zf(Er(a),3);ml()}}}
function kh(){var a,b;b=null;if(ih){for(a=Br(new zr(),ih);a.a<a.b.b;){zf(Er(a),3);b=null}}return b}
function mh(){if(!lh){lh=true;fi()}}
var ih=null,lh=false;function Dh(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function Fh(){if(!bi){uh();bi=true}}
function ci(a){return a!=null&&yf(a.tI,4)&&!(a!=null&&(a.tM!=nu&&a.tI!=2))}
var bi=false;function uh(){yh=function(b){if(xh(b)){var a=wh;if(a&&a.__listener){if(ci(a.__listener)){Bg(b,a,a.__listener);b.stopPropagation()}}}};xh=function(a){return true};zh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(ci(c)){Bg(b,a,c)}}};$wnd.addEventListener(cb,yh,true);$wnd.addEventListener(nb,yh,true);$wnd.addEventListener(o,yh,true);$wnd.addEventListener(s,yh,true);$wnd.addEventListener(p,yh,true);$wnd.addEventListener(r,yh,true);$wnd.addEventListener(q,yh,true);$wnd.addEventListener(v,yh,true);$wnd.addEventListener(dc,xh,true);$wnd.addEventListener(zc,xh,true);$wnd.addEventListener(oc,xh,true)}
function vh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?zh:null;if(b&2)c.ondblclick=a&2?zh:null;if(b&4)c.onmousedown=a&4?zh:null;if(b&8)c.onmouseup=a&8?zh:null;if(b&16)c.onmouseover=a&16?zh:null;if(b&32)c.onmouseout=a&32?zh:null;if(b&64)c.onmousemove=a&64?zh:null;if(b&128)c.onkeydown=a&128?zh:null;if(b&256)c.onkeypress=a&256?zh:null;if(b&512)c.onkeyup=a&512?zh:null;if(b&1024)c.onchange=a&1024?zh:null;if(b&2048)c.onfocus=a&2048?zh:null;if(b&4096)c.onblur=a&4096?zh:null;if(b&8192)c.onlosecapture=a&8192?zh:null;if(b&16384)c.onscroll=a&16384?zh:null;if(b&32768)c.onload=a&32768?zh:null;if(b&65536)c.onerror=a&65536?zh:null;if(b&131072)c.onmousewheel=a&131072?zh:null;if(b&262144)c.oncontextmenu=a&262144?zh:null}
var wh=null,xh=null,yh=null,zh=null;function fi(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=kh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{jh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function cm(b,a){im(b.i,a,true)}
function hm(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(dq(32));if(c>=0){return b.substr(0,c-0)}return b}
function im(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new lp()}j=Fp(j);if(j.length==0){throw new Do()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=Fp(i.substr(0,e-0));d=Fp(Dp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function bm(){}
_=bm.prototype=new hp();_.tI=7;_.i=null;function bn(a){if(a.g){throw new ap()}a.g=true;a.i.__listener=a;a.m();a.w()}
function cn(a){if(!a.g){throw new ap()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function dn(a){if(a.h){a.h.y(a)}else if(a.h){throw new ap()}}
function en(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new ap()}c.h=b;if(b.g){bn(c)}}}
function fn(){}
function gn(){}
function hn(a){}
function jn(){cn(this)}
function kn(){}
function ln(){}
function qm(){}
_=qm.prototype=new bm();_.m=fn;_.n=gn;_.u=hn;_.v=jn;_.w=kn;_.x=ln;_.tI=8;_.g=false;_.h=null;function Fk(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=wm(b);bn(a)}}
function al(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=wm(b);a.v()}}
function bl(){}
function cl(){}
function Dk(){}
_=Dk.prototype=new qm();_.m=Fk;_.n=al;_.w=bl;_.x=cl;_.tI=9;function yi(c,a,b){dn(a);Am(c.f,a);b.appendChild(a.i);en(a,c)}
function Ai(b,c){var a;if(c.h!=b){return false}en(c,null);a=c.i;fe((ce(),a)).removeChild(a);Fm(b.f,c);return true}
function Bi(){return um(new sm(),this.f)}
function Ci(a){return Ai(this,a)}
function wi(){}
_=wi.prototype=new Dk();_.s=Bi;_.y=Ci;_.tI=10;function hi(a,b){yi(a,b,a.i)}
function ji(b,c){var a;a=Ai(b,c);if(a){ki(c.i)}return a}
function ki(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function li(a){return ji(this,a)}
function gi(){}
_=gi.prototype=new wi();_.y=li;_.tI=11;function cj(){cj=nu;dj=(Dn(),Fn)}
function bj(b,a){cj();b.i=a;dj.z(b.i,0);return b}
function ej(a){Dh(a)}
function aj(){}
_=aj.prototype=new qm();_.u=ej;_.tI=12;var dj;function pi(){pi=nu;cj()}
function oi(b,a){pi();b.i=a;dj.z(b.i,0);return b}
function ni(){}
_=ni.prototype=new aj();_.tI=13;function ri(){ri=nu;pi()}
function qi(a){ri();oi(a,$doc.createElement((ce(),F)));si(a.i);a.i[z]=ab;return a}
function si(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function mi(){}
_=mi.prototype=new ni();_.tI=14;function ui(a){a.f=zm(new rm());a.e=$doc.createElement((ce(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function ti(){}
_=ti.prototype=new wi();_.tI=15;_.d=null;_.e=null;function Ei(){Ei=nu;Fi=(Dn(),En)}
var Fi;function fk(a){a.i=$doc.createElement((ce(),gb));a.i[z]=hb;return a}
function ik(a){Dh(a)}
function ek(){}
_=ek.prototype=new qm();_.u=ik;_.tI=16;function gj(a){a.i=$doc.createElement((ce(),gb));a.i[z]=ib;return a}
function fj(){}
_=fj.prototype=new ek();_.tI=17;function pj(){pj=nu;nj(new mj(),jb);rj=nj(new mj(),B);nj(new mj(),kb);qj=rj}
var qj,rj;function nj(b,a){b.a=a;return b}
function mj(){}
_=mj.prototype=new hp();_.tI=0;_.a=null;function xj(){xj=nu;vj(new uj(),lb);vj(new uj(),mb);yj=vj(new uj(),D)}
var yj;function vj(a,b){a.a=b;return a}
function uj(){}
_=uj.prototype=new hp();_.tI=0;_.a=null;function Dj(a){ui(a);a.a=(pj(),qj);a.c=(xj(),yj);a.b=$doc.createElement((ce(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function Ej(c,d){var b,a;b=(a=$doc.createElement((ce(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);dn(d);Am(c.f,d);b.appendChild(d.i);en(d,c)}
function bk(c){var a,b;b=fe((ce(),c.i));a=Ai(this,c);if(a){this.b.removeChild(b)}return a}
function Bj(){}
_=Bj.prototype=new ti();_.y=bk;_.tI=18;_.b=null;function nk(){nk=nu;cj()}
function kk(a){nk();bj(a,ee((ce(),false)));a.i[z]=vb;return a}
function ok(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((ce(),wb));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function qk(a){if(Dh(a)==1024){}else{Dh(a)}}
function jk(){}
_=jk.prototype=new aj();_.u=qk;_.tI=19;function uk(a){dt(new ct());a.b=dt(new ct());xk(a,false,(Ak(),new yk()));return a}
function wk(d,a){var b,c;for(c=Br(new zr(),d.b);c.a<c.b.b;){b=fg(Er(c));if(Dd((ce(),null.D()),a)){return b}}return null}
function xk(c,e){var a,b,d;b=$doc.createElement((ce(),eb));c.a=$doc.createElement(fb);b.appendChild(c.a);if(!e){d=$doc.createElement(ob);c.a.appendChild(d)}a=tn((Ei(),Fi));a.appendChild(b);c.i=a;c.i.setAttribute(xb,zb);ch(c.i,2225|(c.i.__eventBits||0));c.i[z]=Ab;if(e){cm(c,hm(c.i)+Bb+Cb)}else{cm(c,hm(c.i)+Bb+Db)}c.i.style[Eb]=Fb;c.i.setAttribute(ac,bc)}
function Bk(a){var b;wk(this,a.target);switch(Dh(a)){case 1:{An((Ei(),this.i));break}{break}case 2048:{fg(ht(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{fg(ht(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{fg(ht(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:fg(ht(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:fg(ht(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{fg(ht(this.b,0))}}break}}}
function Ck(){cn(this)}
function rk(){}
_=rk.prototype=new qm();_.u=Bk;_.v=Ck;_.tI=20;_.a=null;function Ak(){Ak=nu}
function yk(){}
_=yk.prototype=new hp();_.tI=0;function ll(){ll=nu;pl=qt(new pt());ql=ut(new tt())}
function kl(b,a){ll();b.f=zm(new rm());b.i=a;bn(b);return b}
function ml(){var b,a;ll();var c,d;for(d=(b=sq(new rq(),Bs(ql.a).b.a),ls(new ks(),b));Dr(d.a.a);){c=zf((a=zf(Er(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function ol(a){ll();var b;b=zf(qr(pl,a),5);if(b){return b}if(pl.d==0){hh(new fl())}b=il(new hl());wr(pl,a,b);vt(ql,b);return b}
function el(){}
_=el.prototype=new gi();_.tI=21;var pl,ql;function fl(){}
_=fl.prototype=new hp();_.tI=22;function jl(){jl=nu;ll()}
function il(a){jl();kl(a,$doc.body);return a}
function hl(){}
_=hl.prototype=new el();_.tI=23;function El(){El=nu;cj()}
function Dl(b,a){El();b.i=a;dj.z(b.i,0);return b}
function am(a){var b;b=Dh(a);if((b&896)!=0){Dh(a)}else if(b==1024){}else{Dh(a)}}
function Cl(){}
_=Cl.prototype=new aj();_.u=am;_.tI=24;function Bl(){Bl=nu;El()}
function Al(a){Bl();Dl(a,$doc.createElement((ce(),cc)));a.i[z]=ec;return a}
function zl(){}
_=zl.prototype=new Cl();_.tI=25;function lm(a){ui(a);a.a=(pj(),qj);a.b=(xj(),yj);a.e[pb]=qb;a.e[rb]=qb;return a}
function mm(c,e){var b,d,a;d=$doc.createElement((ce(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);dn(e);Am(c.f,e);b.appendChild(e.i);en(e,c)}
function pm(c){var a,b;b=fe((ce(),c.i));a=Ai(this,c);if(a){this.d.removeChild(fe(b))}return a}
function jm(){}
_=jm.prototype=new ti();_.y=pm;_.tI=26;function zm(a){a.a=pf(jg,0,6,4,0);return a}
function Am(a,b){Dm(a,b,a.b)}
function Cm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function Dm(d,e,a){var b,c;if(a<0||a>d.b){throw new dp()}if(d.b==d.a.length){c=pf(jg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){sf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){sf(d.a,b,d.a[b-1])}sf(d.a,a,e)}
function Em(c,b){var a;if(b<0||b>=c.b){throw new dp()}--c.b;for(a=b;a<c.b;++a){sf(c.a,a,c.a[a+1])}sf(c.a,c.b,null)}
function Fm(b,c){var a;a=Cm(b,c);if(a==-1){throw new gu()}Em(b,a)}
function rm(){}
_=rm.prototype=new hp();_.tI=0;_.a=null;_.b=0;function um(b,a){b.b=a;return b}
function wm(a){if(a.a>=a.b.b){throw new gu()}return a.b.a[++a.a]}
function xm(){return this.a<this.b.b-1}
function ym(){return wm(this)}
function sm(){}
_=sm.prototype=new hp();_.r=xm;_.t=ym;_.tI=0;_.a=-1;_.b=null;function Dn(){Dn=nu;En=xn(new wn());Fn=En?(Dn(),new mn()):En}
function ao(a,b){a.tabIndex=b}
function mn(){}
_=mn.prototype=new hp();_.z=ao;_.tI=0;var En,Fn;function qn(){qn=nu;Dn()}
function rn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function sn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function tn(c){var a=$doc.createElement(gb);var b=c.l();b.addEventListener(m,c.a,false);b.addEventListener(yb,c.b,false);a.addEventListener(o,c.c,false);a.appendChild(b);return a}
function un(){var a=$doc.createElement(fc);a.type=gc;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=hc;return a}
function vn(a,b){a.firstChild.tabIndex=b}
function nn(){}
_=nn.prototype=new mn();_.l=un;_.z=vn;_.tI=0;function yn(){yn=nu;qn()}
function xn(a){yn();a.a=rn();a.b=sn();a.c=zn();return a}
function zn(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function An(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function Bn(){var a=$doc.createElement(fc);a.type=gc;a.style.opacity=0;a.style.zIndex=-1;a.style.height=ic;a.style.width=ic;a.style.overflow=jc;a.style.position=hc;return a}
function wn(){}
_=wn.prototype=new nn();_.l=Bn;_.tI=0;function bo(){}
_=bo.prototype=new gf();_.tI=0;function eo(a){a.c=lm(new jm());a.b=Dj(new Bj());a.g=lm(new jm());a.f=kk(new jk());a.a=Al(new zl());a.d=uk(new rk());qi(new mi());a.e=fk(new ek());a.h=gj(new fj());he((ce(),a.h.i),kc);ok(a.f,lc,lc,-1);ok(a.f,mc,mc,-1);ok(a.f,nc,nc,-1);ok(a.f,pc,pc,-1);ok(a.f,qc,qc,-1);ok(a.f,rc,rc,-1);a.f.i.size=4;a.f.i.style[sc]=tc;a.a.i[uc]=vc!=null?vc:C;a.a.i.style[sc]=tc;mm(a.g,a.f);mm(a.g,a.a);a.g.i.style[wc]=xc;a.g.i.style[sc]=tc;he(a.e.i,yc);a.e.i.innerHTML=Ac;Ej(a.b,a.d);a.b.i.style[wc]=Bc;a.b.i.style[sc]=tc;mm(a.c,a.h);mm(a.c,a.g);mm(a.c,a.e);mm(a.c,a.d);a.c.i.style[wc]=tc;a.c.i.style[sc]=tc;hi((ll(),ol(null)),a.c);return a}
function co(){}
_=co.prototype=new bo();_.tI=0;function fq(){}
_=fq.prototype=new hp();_.tI=3;function Bo(){}
_=Bo.prototype=new fq();_.tI=4;function lp(){}
_=lp.prototype=new Bo();_.tI=5;function oo(){}
_=oo.prototype=new lp();_.tI=28;function vo(c,a){var b;b=new ro();return b}
function ro(){}
_=ro.prototype=new hp();_.tI=0;function so(){}
_=so.prototype=new lp();_.tI=31;function Do(){}
_=Do.prototype=new lp();_.tI=32;function ap(){}
_=ap.prototype=new lp();_.tI=33;function ep(b,a){return b}
function dp(){}
_=dp.prototype=new lp();_.tI=34;function zp(b,a){if(!(a!=null&&yf(a.tI,1))){return false}return String(b)==a}
function Dp(b,a){return b.substr(a,b.length-a)}
function Fp(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function bq(a){return zp(this,a)}
function dq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function eq(){return vp(this)}
_=String.prototype;_.eQ=bq;_.hC=eq;_.tI=2;function qp(){qp=nu;rp={};up={}}
function sp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function vp(c){qp();var a=Cc+c;var b=up[a];if(b!=null){return b}b=rp[a];if(b==null){b=sp(c)}wp();return up[a]=b}
function wp(){if(tp==256){rp=up;up={};tp=0}++tp}
var rp,tp=0,up;function hq(){}
_=hq.prototype=new lp();_.tI=35;function lq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:pd(b,c)){return a}}return null}
function nq(a){throw new hq()}
function oq(b){var a;a=lq(this.s(),b);return !!a}
function kq(){}
_=kq.prototype=new hp();_.j=nq;_.k=oq;_.tI=0;function Bs(b){var a;a=wq(new qq(),b);return qs(new js(),b,a)}
function Cs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&yf(c.tI,11))){return false}e=zf(c,11);if(zf(this,11).d!=e.d){return false}for(b=sq(new rq(),wq(new qq(),e).a);Dr(b.a);){a=zf(Er(b.a),9);d=a.p();f=a.q();if(!(d==null?zf(this,11).c:d!=null&&yf(d.tI,1)?sr(zf(this,11),zf(d,1)):rr(zf(this,11),d,~~rd(d)))){return false}if(!mu(f,d==null?zf(this,11).b:d!=null&&yf(d.tI,1)?zf(this,11).e[Cc+zf(d,1)]:or(zf(this,11),d,~~rd(d)))){return false}}return true}
function Ds(){var a,b,c;c=0;for(b=sq(new rq(),wq(new qq(),zf(this,11)).a);Dr(b.a);){a=zf(Er(b.a),9);c+=a.hC();c=~~c}return c}
function is(){}
_=is.prototype=new hp();_.eQ=Cs;_.hC=Ds;_.tI=0;function jr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function kr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=hr(e,c.substring(1));a.j(b)}}}
function nr(b,a){return a==null?b.c:a!=null&&yf(a.tI,1)?sr(b,zf(a,1)):rr(b,a,~~rd(a))}
function qr(b,a){return a==null?b.b:a!=null&&yf(a.tI,1)?b.e[Cc+zf(a,1)]:or(b,a,~~rd(a))}
function or(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function rr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function sr(b,a){return Cc+a in b.e}
function wr(b,a,c){return a==null?ur(b,c):a!=null&&yf(a.tI,1)?vr(b,zf(a,1),c):tr(b,a,c,~~rd(a))}
function tr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.A(j);return h}}}else{a=i.a[e]=[]}var c=Ft(new Et(),g,j);a.push(c);++i.d;return null}
function ur(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function vr(d,a,e){var b,c=d.e;a=Cc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function xr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pd(a,b)}
function pq(){}
_=pq.prototype=new is();_.o=xr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function at(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&yf(b.tI,12))){return false}c=zf(b,12);if(c.B()!=this.B()){return false}for(a=c.s();a.r();){d=a.t();if(!this.k(d)){return false}}return true}
function bt(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=rd(c);a=~~a}}return a}
function Es(){}
_=Es.prototype=new kq();_.eQ=at;_.hC=bt;_.tI=36;function wq(b,a){b.a=a;return b}
function yq(d,c){var a,b,e;if(c!=null&&yf(c.tI,9)){a=zf(c,9);b=a.p();if(nr(d.a,b)){e=qr(d.a,b);return st(a.q(),e)}}return false}
function zq(a){return yq(this,a)}
function Aq(){return sq(new rq(),this.a)}
function Bq(){return this.a.d}
function qq(){}
_=qq.prototype=new Es();_.k=zq;_.s=Aq;_.B=Bq;_.tI=37;_.a=null;function sq(c,b){var a;c.b=b;a=dt(new ct());if(c.b.c){ft(a,Dq(new Cq(),c.b))}kr(c.b,a);jr(c.b,a);c.a=Br(new zr(),a);return c}
function uq(){return Dr(this.a)}
function vq(){return zf(Er(this.a),9)}
function rq(){}
_=rq.prototype=new hp();_.r=uq;_.t=vq;_.tI=0;_.a=null;_.b=null;function ys(b){var a;if(b!=null&&yf(b.tI,9)){a=zf(b,9);if(mu(this.p(),a.p())&&mu(this.q(),a.q())){return true}}return false}
function zs(){var a,b;a=0;b=0;if(this.p()!=null){a=rd(this.p())}if(this.q()!=null){b=rd(this.q())}return a^b}
function ws(){}
_=ws.prototype=new hp();_.eQ=ys;_.hC=zs;_.tI=38;function Dq(b,a){b.a=a;return b}
function Fq(){return null}
function ar(){return this.a.b}
function br(a){return ur(this.a,a)}
function Cq(){}
_=Cq.prototype=new ws();_.p=Fq;_.q=ar;_.A=br;_.tI=39;_.a=null;function dr(c,a,b){c.b=b;c.a=a;return c}
function fr(){return this.a}
function gr(){return this.b.e[Cc+this.a]}
function hr(b,a){return dr(new cr(),a,b)}
function ir(a){return vr(this.b,this.a,a)}
function cr(){}
_=cr.prototype=new ws();_.p=fr;_.q=gr;_.A=ir;_.tI=40;_.a=null;_.b=null;function cs(a){et(this,this.B(),a);return true}
function ds(a,b){if(a<0||a>=b){gs(a,b)}}
function es(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&yf(e.tI,10))){return false}f=zf(e,10);if(this.B()!=f.b){return false}c=Br(new zr(),this);d=Br(new zr(),f);while(c.a<c.b.b){a=Er(c);b=Er(d);if(!(a==null?b==null:pd(a,b))){return false}}return true}
function fs(){var a,b,c;b=1;a=Br(new zr(),this);while(a.a<a.b.b){c=Er(a);b=31*b+(c==null?0:rd(c));b=~~b}return b}
function gs(a,b){throw ep(new dp(),Dc+a+Ec+b)}
function hs(){return Br(new zr(),this)}
function yr(){}
_=yr.prototype=new kq();_.j=cs;_.eQ=es;_.hC=fs;_.s=hs;_.tI=0;function Br(b,a){b.b=a;return b}
function Dr(a){return a.a<a.b.b}
function Er(a){if(a.a>=a.b.b){throw new gu()}return ht(a.b,a.a++)}
function Fr(){return this.a<this.b.b}
function as(){return Er(this)}
function zr(){}
_=zr.prototype=new hp();_.r=Fr;_.t=as;_.tI=0;_.a=0;_.b=null;function qs(b,a,c){b.a=a;b.b=c;return b}
function ts(a){return nr(this.a,a)}
function us(){var a;return a=sq(new rq(),this.b.a),ls(new ks(),a)}
function vs(){return this.b.a.d}
function js(){}
_=js.prototype=new Es();_.k=ts;_.s=us;_.B=vs;_.tI=41;_.a=null;_.b=null;function ls(a,b){a.a=b;return a}
function os(){return Dr(this.a.a)}
function ps(){var a;return a=zf(Er(this.a.a),9),a.p()}
function ks(){}
_=ks.prototype=new hp();_.r=os;_.t=ps;_.tI=0;_.a=null;function dt(a){a.a=pf(kg,0,0,0,0);a.b=0;return a}
function ft(b,a){sf(b.a,b.b++,a);return true}
function et(c,a,b){if(a<0||a>c.b){gs(a,c.b)}c.a.splice(a,0,b);++c.b}
function ht(b,a){ds(a,b.b);return b.a[a]}
function it(c,b,a){for(;a<c.b;++a){if(mu(b,c.a[a])){return a}}return -1}
function jt(a){return sf(this.a,this.b++,a),true}
function kt(a){return it(this,a,0)!=-1}
function lt(){return this.b}
function ct(){}
_=ct.prototype=new yr();_.j=jt;_.k=kt;_.B=lt;_.tI=42;_.a=null;_.b=0;function qt(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function st(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pd(a,b)}
function pt(){}
_=pt.prototype=new pq();_.tI=43;function ut(a){a.a=qt(new pt());return a}
function vt(c,a){var b;b=wr(c.a,a,c);return b==null}
function xt(b){var a;return a=wr(this.a,b,this),a==null}
function yt(a){return nr(this.a,a)}
function zt(){var a;return a=sq(new rq(),Bs(this.a).b.a),ls(new ks(),a)}
function At(){return this.a.d}
function tt(){}
_=tt.prototype=new Es();_.j=xt;_.k=yt;_.s=zt;_.B=At;_.tI=44;_.a=null;function Ft(b,a,c){b.a=a;b.b=c;return b}
function bu(){return this.a}
function cu(){return this.b}
function eu(b){var a;a=this.b;this.b=b;return a}
function Et(){}
_=Et.prototype=new ws();_.p=bu;_.q=cu;_.A=eu;_.tI=45;_.a=null;_.b=null;function gu(){}
_=gu.prototype=new lp();_.tI=46;function mu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pd(a,b)}
function mo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Fc,evtGroup:ad,millis:(new Date()).getTime(),type:bd,className:cd});eo(new co())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{mo()}catch(a){b(d)}else{mo()}}
function nu(){}
var jg=vo(dd,fd),kg=vo(gd,hd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();