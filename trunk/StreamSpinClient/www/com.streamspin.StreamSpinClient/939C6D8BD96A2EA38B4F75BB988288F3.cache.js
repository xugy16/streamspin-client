(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',bd=', Size: ',Db='-',qb='0',bc='0px',xc='100%',Cc='100px',Ec='10px',kc='1px',Fc=':',w='DOMMouseScroll',ad='Index: ',tc='Item four',qc='Item one',vc='Item six',uc='Item that has a long title and is number five',sc='Item tree',rc='Item two',kd='Object;',Dc='Status: <b>Online<\/b>',Ac='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',id='Widget;',hd='[Lcom.google.gwt.user.client.ui.',jd='[Ljava.lang.',jc='absolute',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',gd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',vb='gwt-Image',hb='gwt-Label',xb='gwt-ListBox',Cb='gwt-MenuBar',gc='gwt-TextArea',Bc='height',lc='hidden',cc='hideFocus',Fb='horizontal',nc='images/daisy.tif',wb='img',hc='input',dc='keydown',oc='keypress',zc='keyup',B='left',ed='load',n='losecapture',Bb='menubar',mb='middle',dd='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',fd='onModuleLoadStart',zb='option',ac='outline',E='position',kb='right',Ab='role',t='scroll',l='select',mc='someTest',cd='startup',bb='submit',eb='table',fb='tbody',sb='td',ic='text',fc='textarea',pc='title of Main Window',D='top',ob='tr',ec='true',db='type',yc='value',Eb='vertical',ub='verticalAlign',wc='width';var _;function Dp(a){return this===(a==null?null:a)}
function Ep(){return this.$H||(this.$H=++Bd)}
function Bp(){}
_=Bp.prototype={};_.eQ=Dp;_.hC=Ep;_.tM=bv;_.tI=1;function sd(b,a){return b.tM==bv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ud(a){return a.tM==bv||a.tI==2?a.hC():a.$H||(a.$H=++Bd)}
var Bd=0;function fe(){fe=bv;Fd();new Dd()}
function he(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function ie(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function le(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Cd(){}
_=Cd.prototype=new Bp();_.tI=0;function ee(){ee=bv;fe()}
function de(){}
_=de.prototype=new Cd();_.tI=0;function Fd(){Fd=bv;ee()}
function ae(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function Dd(){}
_=Dd.prototype=new de();_.tI=0;function of(){}
_=of.prototype=new Bp();_.tI=0;function vf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function wf(a,f,c,b,e){var d;d=vf(e,b);xf(a,f,c,d);return d}
function xf(b,d,c,a){if(!yf){yf=new rf()}Bf(a,yf);a.tI=d;a.qI=c;return a}
function zf(a,b,c){if(c!=null){if(a.qI>0&&!Ef(c.tI,a.qI)){throw new cp()}if(a.qI<0&&(c.tM==bv||c.tI==2)){throw new cp()}}return a[b]=c}
function Bf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function rf(){}
_=rf.prototype=new Bp();_.tI=0;_.length=0;_.qI=0;var yf=null;function Ff(b,a){return b&&!!ng[b][a]}
function Ef(b,a){return b&&ng[b][a]}
function ag(b,a){if(b!=null&&!Ef(b.tI,a)){throw new gp()}return b}
function mg(a){if(a!=null){throw new gp()}return a}
var ng=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function ch(b,a,c){var d;if(a==hh){if(ei(b)==8192){hh=null}}d=bh;bh=b;try{c.v(b)}finally{bh=d}}
function jh(a,b){gi();Ch(a,b)}
var bh=null,hh=null;function oh(a){th();if(!ph){ph=xt(new wt())}zt(ph,a)}
function qh(){var a;if(ph){for(a=ps(new ns(),ph);a.a<a.b.b;){ag(ss(a),3);Dl()}}}
function rh(){var a,b;b=null;if(ph){for(a=ps(new ns(),ph);a.a<a.b.b;){ag(ss(a),3);b=null}}return b}
function th(){if(!sh){sh=true;mi()}}
var ph=null,sh=false;function ei(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function gi(){if(!ii){Bh();ii=true}}
function ji(a){return a!=null&&Ff(a.tI,4)&&!(a!=null&&(a.tM!=bv&&a.tI!=2))}
var ii=false;function Bh(){Fh=function(b){if(Eh(b)){var a=Dh;if(a&&a.__listener){if(ji(a.__listener)){ch(b,a,a.__listener);b.stopPropagation()}}}};Eh=function(a){return true};ai=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(ji(c)){ch(b,a,c)}}};$wnd.addEventListener(cb,Fh,true);$wnd.addEventListener(nb,Fh,true);$wnd.addEventListener(o,Fh,true);$wnd.addEventListener(s,Fh,true);$wnd.addEventListener(p,Fh,true);$wnd.addEventListener(r,Fh,true);$wnd.addEventListener(q,Fh,true);$wnd.addEventListener(v,Fh,true);$wnd.addEventListener(dc,Eh,true);$wnd.addEventListener(zc,Eh,true);$wnd.addEventListener(oc,Eh,true)}
function Ch(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?ai:null;if(b&2)c.ondblclick=a&2?ai:null;if(b&4)c.onmousedown=a&4?ai:null;if(b&8)c.onmouseup=a&8?ai:null;if(b&16)c.onmouseover=a&16?ai:null;if(b&32)c.onmouseout=a&32?ai:null;if(b&64)c.onmousemove=a&64?ai:null;if(b&128)c.onkeydown=a&128?ai:null;if(b&256)c.onkeypress=a&256?ai:null;if(b&512)c.onkeyup=a&512?ai:null;if(b&1024)c.onchange=a&1024?ai:null;if(b&2048)c.onfocus=a&2048?ai:null;if(b&4096)c.onblur=a&4096?ai:null;if(b&8192)c.onlosecapture=a&8192?ai:null;if(b&16384)c.onscroll=a&16384?ai:null;if(b&32768)c.onload=a&32768?ai:null;if(b&65536)c.onerror=a&65536?ai:null;if(b&131072)c.onmousewheel=a&131072?ai:null;if(b&262144)c.oncontextmenu=a&262144?ai:null}
var Dh=null,Eh=null,Fh=null,ai=null;function mi(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=rh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{qh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function um(b,a){Cm(b.i,a,true)}
function wm(b,a){if(b.i){xm(b.i,a)}b.i=a}
function xm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function Bm(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(xq(32));if(c>=0){return b.substr(0,c-0)}return b}
function Cm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new Fp()}j=tq(j);if(j.length==0){throw new rp()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=tq(i.substr(0,e-0));d=tq(rq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function tm(){}
_=tm.prototype=new Bp();_.tI=7;_.i=null;function wn(a){if(a.g){throw new up()}a.g=true;a.i.__listener=a;a.n();a.x()}
function xn(a){if(!a.g){throw new up()}try{a.y()}finally{a.o();a.i.__listener=null;a.g=false}}
function yn(a){if(a.h){a.h.z(a)}else if(a.h){throw new up()}}
function zn(b,a){if(b.g){b.i.__listener=null}wm(b,a);if(b.g){b.i.__listener=b}}
function An(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.w()}c.h=null}else{if(a){throw new up()}c.h=b;if(b.g){wn(c)}}}
function Bn(){}
function Cn(){}
function Dn(a){}
function En(){xn(this)}
function Fn(){}
function ao(){}
function en(){}
_=en.prototype=new tm();_.n=Bn;_.o=Cn;_.v=Dn;_.w=En;_.x=Fn;_.y=ao;_.tI=8;_.g=false;_.h=null;function ql(){var a,b;for(b=this.t();b.a<b.b.b-1;){a=ln(b);wn(a)}}
function rl(){var a,b;for(b=this.t();b.a<b.b.b-1;){a=ln(b);a.w()}}
function sl(){}
function tl(){}
function ol(){}
_=ol.prototype=new en();_.n=ql;_.o=rl;_.x=sl;_.y=tl;_.tI=9;function aj(c,a,b){yn(a);pn(c.f,a);b.appendChild(a.i);An(a,c)}
function cj(b,c){var a;if(c.h!=b){return false}An(c,null);a=c.i;ie((fe(),a)).removeChild(a);un(b.f,c);return true}
function dj(){return jn(new gn(),this.f)}
function ej(a){return cj(this,a)}
function Ei(){}
_=Ei.prototype=new ol();_.t=dj;_.z=ej;_.tI=10;function oi(a,b){aj(a,b,a.i)}
function qi(b,c){var a;a=cj(b,c);if(a){ri(c.i)}return a}
function ri(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function si(a){return qi(this,a)}
function ni(){}
_=ni.prototype=new Ei();_.z=si;_.tI=11;function kj(){kj=bv;lj=(to(),vo)}
function jj(b,a){kj();b.i=a;lj.A(b.i,0);return b}
function mj(a){ei(a)}
function ij(){}
_=ij.prototype=new en();_.v=mj;_.tI=12;var lj;function wi(){wi=bv;kj()}
function vi(b,a){wi();b.i=a;lj.A(b.i,0);return b}
function ui(){}
_=ui.prototype=new ij();_.tI=13;function zi(){zi=bv;wi()}
function yi(b,a){zi();vi(b,$doc.createElement((fe(),F)));Ai(b.i);b.i[z]=ab;b.i.innerHTML=a||C;return b}
function Ai(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function ti(){}
_=ti.prototype=new ui();_.tI=14;function Ci(a){a.f=on(new fn());a.e=$doc.createElement((fe(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function Bi(){}
_=Bi.prototype=new Ei();_.tI=15;_.d=null;_.e=null;function gj(){gj=bv;hj=(to(),uo)}
var hj;function wk(a){a.i=$doc.createElement((fe(),gb));a.i[z]=hb;return a}
function zk(a){ei(a)}
function vk(){}
_=vk.prototype=new en();_.v=zk;_.tI=16;function oj(a){a.i=$doc.createElement((fe(),gb));a.i[z]=ib;return a}
function nj(){}
_=nj.prototype=new vk();_.tI=17;function xj(){xj=bv;vj(new uj(),jb);zj=vj(new uj(),B);vj(new uj(),kb);yj=zj}
var yj,zj;function vj(b,a){b.a=a;return b}
function uj(){}
_=uj.prototype=new Bp();_.tI=0;_.a=null;function Fj(){Fj=bv;Dj(new Cj(),lb);Dj(new Cj(),mb);ak=Dj(new Cj(),D)}
var ak;function Dj(a,b){a.a=b;return a}
function Cj(){}
_=Cj.prototype=new Bp();_.tI=0;_.a=null;function fk(a){Ci(a);a.a=(xj(),yj);a.c=(Fj(),ak);a.b=$doc.createElement((fe(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function gk(c,d){var b,a;b=(a=$doc.createElement((fe(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);yn(d);pn(c.f,d);b.appendChild(d.i);An(d,c)}
function jk(c){var a,b;b=ie((fe(),c.i));a=cj(this,c);if(a){this.b.removeChild(b)}return a}
function dk(){}
_=dk.prototype=new Bi();_.z=jk;_.tI=18;_.b=null;function sk(){sk=bv;Fr(new du())}
function rk(a,b){sk();ok(new nk(),a,b);a.i[z]=vb;return a}
function tk(a){ei(a)}
function kk(){}
_=kk.prototype=new en();_.v=tk;_.tI=19;function lk(){}
_=lk.prototype=new Bp();_.tI=0;function ok(b,a,c){zn(a,$doc.createElement((fe(),wb)));jh(a.i,229501|(a.i.__eventBits||0));a.i.src=c;return b}
function nk(){}
_=nk.prototype=new lk();_.tI=0;function Ek(){Ek=bv;kj()}
function Bk(a){Ek();jj(a,he((fe(),false)));a.i[z]=xb;return a}
function Fk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((fe(),zb));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function bl(a){if(ei(a)==1024){}else{ei(a)}}
function Ak(){}
_=Ak.prototype=new ij();_.v=bl;_.tI=20;function fl(a){xt(new wt());a.b=xt(new wt());il(a,false,(ll(),new jl()));return a}
function hl(d,a){var b,c;for(c=ps(new ns(),d.b);c.a<c.b.b;){b=mg(ss(c));if(ae((fe(),null.E()),a)){return b}}return null}
function il(c,e){var a,b,d;b=$doc.createElement((fe(),eb));c.a=$doc.createElement(fb);b.appendChild(c.a);if(!e){d=$doc.createElement(ob);c.a.appendChild(d)}a=jo((gj(),hj));a.appendChild(b);c.i=a;c.i.setAttribute(Ab,Bb);jh(c.i,2225|(c.i.__eventBits||0));c.i[z]=Cb;if(e){um(c,Bm(c.i)+Db+Eb)}else{um(c,Bm(c.i)+Db+Fb)}c.i.style[ac]=bc;c.i.setAttribute(cc,ec)}
function ml(a){var b;hl(this,a.target);switch(ei(a)){case 1:{qo((gj(),this.i));break}{break}case 2048:{mg(Bt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{mg(Bt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{mg(Bt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:mg(Bt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:mg(Bt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{mg(Bt(this.b,0))}}break}}}
function nl(){xn(this)}
function cl(){}
_=cl.prototype=new en();_.v=ml;_.w=nl;_.tI=21;_.a=null;function ll(){ll=bv}
function jl(){}
_=jl.prototype=new Bp();_.tI=0;function Cl(){Cl=bv;am=eu(new du());bm=iu(new hu())}
function Bl(b,a){Cl();b.f=on(new fn());b.i=a;wn(b);return b}
function Dl(){var b,a;Cl();var c,d;for(d=(b=gr(new fr(),pt(bm.a).b.a),Fs(new Es(),b));rs(d.a.a);){c=ag((a=ag(ss(d.a.a),9),a.q()),6);if(c.g){c.w()}}}
function Fl(a){Cl();var b;b=ag(es(am,a),5);if(b){return b}if(am.d==0){oh(new wl())}b=zl(new yl());ks(am,a,b);ju(bm,b);return b}
function vl(){}
_=vl.prototype=new ni();_.tI=22;var am,bm;function wl(){}
_=wl.prototype=new Bp();_.tI=23;function Al(){Al=bv;Cl()}
function zl(a){Al();Bl(a,$doc.body);return a}
function yl(){}
_=yl.prototype=new vl();_.tI=24;function qm(){qm=bv;kj()}
function pm(b,a){qm();b.i=a;lj.A(b.i,0);return b}
function sm(a){var b;b=ei(a);if((b&896)!=0){ei(a)}else if(b==1024){}else{ei(a)}}
function om(){}
_=om.prototype=new ij();_.v=sm;_.tI=25;function nm(){nm=bv;qm()}
function mm(a){nm();pm(a,$doc.createElement((fe(),fc)));a.i[z]=gc;return a}
function lm(){}
_=lm.prototype=new om();_.tI=26;function Fm(a){Ci(a);a.a=(xj(),yj);a.b=(Fj(),ak);a.e[pb]=qb;a.e[rb]=qb;return a}
function an(c,e){var b,d,a;d=$doc.createElement((fe(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);yn(e);pn(c.f,e);b.appendChild(e.i);An(e,c)}
function dn(c){var a,b;b=ie((fe(),c.i));a=cj(this,c);if(a){this.d.removeChild(ie(b))}return a}
function Dm(){}
_=Dm.prototype=new Bi();_.z=dn;_.tI=27;function on(a){a.a=wf(qg,0,6,4,0);return a}
function pn(a,b){sn(a,b,a.b)}
function rn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function sn(d,e,a){var b,c;if(a<0||a>d.b){throw new xp()}if(d.b==d.a.length){c=wf(qg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){zf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){zf(d.a,b,d.a[b-1])}zf(d.a,a,e)}
function tn(c,b){var a;if(b<0||b>=c.b){throw new xp()}--c.b;for(a=b;a<c.b;++a){zf(c.a,a,c.a[a+1])}zf(c.a,c.b,null)}
function un(b,c){var a;a=rn(b,c);if(a==-1){throw new Au()}tn(b,a)}
function fn(){}
_=fn.prototype=new Bp();_.tI=0;_.a=null;_.b=0;function jn(b,a){b.b=a;return b}
function ln(a){if(a.a>=a.b.b){throw new Au()}return a.b.a[++a.a]}
function mn(){return this.a<this.b.b-1}
function nn(){return ln(this)}
function gn(){}
_=gn.prototype=new Bp();_.s=mn;_.u=nn;_.tI=0;_.a=-1;_.b=null;function to(){to=bv;uo=no(new mo());vo=uo?(to(),new bo()):uo}
function wo(a,b){a.tabIndex=b}
function bo(){}
_=bo.prototype=new Bp();_.A=wo;_.tI=0;var uo,vo;function go(){go=bv;to()}
function ho(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function io(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function jo(c){var a=$doc.createElement(gb);var b=c.m();b.addEventListener(m,c.a,false);b.addEventListener(yb,c.b,false);a.addEventListener(o,c.c,false);a.appendChild(b);return a}
function ko(){var a=$doc.createElement(hc);a.type=ic;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=jc;return a}
function lo(a,b){a.firstChild.tabIndex=b}
function co(){}
_=co.prototype=new bo();_.m=ko;_.A=lo;_.tI=0;function oo(){oo=bv;go()}
function no(a){oo();a.a=ho();a.b=io();a.c=po();return a}
function po(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function qo(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function ro(){var a=$doc.createElement(hc);a.type=ic;a.style.opacity=0;a.style.zIndex=-1;a.style.height=kc;a.style.width=kc;a.style.overflow=lc;a.style.position=jc;return a}
function mo(){}
_=mo.prototype=new co();_.m=ro;_.tI=0;function xo(){}
_=xo.prototype=new of();_.tI=0;function zo(a){a.d=Fm(new Dm());a.c=fk(new dk());a.h=Fm(new Dm());a.g=Bk(new Ak());a.a=mm(new lm());a.e=fl(new cl());a.b=yi(new ti(),mc);a.f=wk(new vk());a.j=oj(new nj());a.i=rk(new kk(),$moduleBase+nc);le((fe(),a.j.i),pc);Fk(a.g,qc,qc,-1);Fk(a.g,rc,rc,-1);Fk(a.g,sc,sc,-1);Fk(a.g,tc,tc,-1);Fk(a.g,uc,uc,-1);Fk(a.g,vc,vc,-1);a.g.i.size=3;a.g.i.style[wc]=xc;a.a.i[yc]=Ac!=null?Ac:C;a.a.i.style[wc]=xc;an(a.h,a.g);an(a.h,a.a);a.h.i.style[Bc]=Cc;a.h.i.style[wc]=xc;a.f.i.innerHTML=Dc;gk(a.c,a.b);gk(a.c,a.e);an(a.d,a.j);an(a.d,a.h);an(a.d,a.i);a.i.i.style[Bc]=Ec;an(a.d,a.i);an(a.d,a.f);an(a.d,a.c);a.d.i.style[Bc]=xc;a.d.i.style[wc]=xc;oi((Cl(),Fl(null)),a.d);return a}
function yo(){}
_=yo.prototype=new xo();_.tI=0;function zq(){}
_=zq.prototype=new Bp();_.tI=3;function pp(){}
_=pp.prototype=new zq();_.tI=4;function Fp(){}
_=Fp.prototype=new pp();_.tI=5;function cp(){}
_=cp.prototype=new Fp();_.tI=29;function jp(c,a){var b;b=new fp();return b}
function fp(){}
_=fp.prototype=new Bp();_.tI=0;function gp(){}
_=gp.prototype=new Fp();_.tI=32;function rp(){}
_=rp.prototype=new Fp();_.tI=33;function up(){}
_=up.prototype=new Fp();_.tI=34;function yp(b,a){return b}
function xp(){}
_=xp.prototype=new Fp();_.tI=35;function nq(b,a){if(!(a!=null&&Ff(a.tI,1))){return false}return String(b)==a}
function rq(b,a){return b.substr(a,b.length-a)}
function tq(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function vq(a){return nq(this,a)}
function xq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function yq(){return jq(this)}
_=String.prototype;_.eQ=vq;_.hC=yq;_.tI=2;function eq(){eq=bv;fq={};iq={}}
function gq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function jq(c){eq();var a=Fc+c;var b=iq[a];if(b!=null){return b}b=fq[a];if(b==null){b=gq(c)}kq();return iq[a]=b}
function kq(){if(hq==256){fq=iq;iq={};hq=0}++hq}
var fq,hq=0,iq;function Bq(){}
_=Bq.prototype=new Fp();_.tI=36;function Fq(a,b){var c;while(a.s()){c=a.u();if(b==null?c==null:sd(b,c)){return a}}return null}
function br(a){throw new Bq()}
function cr(b){var a;a=Fq(this.t(),b);return !!a}
function Eq(){}
_=Eq.prototype=new Bp();_.k=br;_.l=cr;_.tI=0;function pt(b){var a;a=kr(new er(),b);return et(new Ds(),b,a)}
function qt(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Ff(c.tI,11))){return false}e=ag(c,11);if(ag(this,11).d!=e.d){return false}for(b=gr(new fr(),kr(new er(),e).a);rs(b.a);){a=ag(ss(b.a),9);d=a.q();f=a.r();if(!(d==null?ag(this,11).c:d!=null&&Ff(d.tI,1)?gs(ag(this,11),ag(d,1)):fs(ag(this,11),d,~~ud(d)))){return false}if(!av(f,d==null?ag(this,11).b:d!=null&&Ff(d.tI,1)?ag(this,11).e[Fc+ag(d,1)]:cs(ag(this,11),d,~~ud(d)))){return false}}return true}
function rt(){var a,b,c;c=0;for(b=gr(new fr(),kr(new er(),ag(this,11)).a);rs(b.a);){a=ag(ss(b.a),9);c+=a.hC();c=~~c}return c}
function Cs(){}
_=Cs.prototype=new Bp();_.eQ=qt;_.hC=rt;_.tI=0;function Dr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function Er(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Br(e,c.substring(1));a.k(b)}}}
function Fr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function bs(b,a){return a==null?b.c:a!=null&&Ff(a.tI,1)?gs(b,ag(a,1)):fs(b,a,~~ud(a))}
function es(b,a){return a==null?b.b:a!=null&&Ff(a.tI,1)?b.e[Fc+ag(a,1)]:cs(b,a,~~ud(a))}
function cs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return c.r()}}}return null}
function fs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(h.p(g,d)){return true}}}return false}
function gs(b,a){return Fc+a in b.e}
function ks(b,a,c){return a==null?is(b,c):a!=null&&Ff(a.tI,1)?js(b,ag(a,1),c):hs(b,a,c,~~ud(a))}
function hs(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.q();if(i.p(g,d)){var h=c.r();c.B(j);return h}}}else{a=i.a[e]=[]}var c=tu(new su(),g,j);a.push(c);++i.d;return null}
function is(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function js(d,a,e){var b,c=d.e;a=Fc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ls(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&sd(a,b)}
function dr(){}
_=dr.prototype=new Cs();_.p=ls;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function ut(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Ff(b.tI,12))){return false}c=ag(b,12);if(c.C()!=this.C()){return false}for(a=c.t();a.s();){d=a.u();if(!this.l(d)){return false}}return true}
function vt(){var a,b,c;a=0;for(b=this.t();b.s();){c=b.u();if(c!=null){a+=ud(c);a=~~a}}return a}
function st(){}
_=st.prototype=new Eq();_.eQ=ut;_.hC=vt;_.tI=37;function kr(b,a){b.a=a;return b}
function mr(d,c){var a,b,e;if(c!=null&&Ff(c.tI,9)){a=ag(c,9);b=a.q();if(bs(d.a,b)){e=es(d.a,b);return gu(a.r(),e)}}return false}
function nr(a){return mr(this,a)}
function or(){return gr(new fr(),this.a)}
function pr(){return this.a.d}
function er(){}
_=er.prototype=new st();_.l=nr;_.t=or;_.C=pr;_.tI=38;_.a=null;function gr(c,b){var a;c.b=b;a=xt(new wt());if(c.b.c){zt(a,rr(new qr(),c.b))}Er(c.b,a);Dr(c.b,a);c.a=ps(new ns(),a);return c}
function ir(){return rs(this.a)}
function jr(){return ag(ss(this.a),9)}
function fr(){}
_=fr.prototype=new Bp();_.s=ir;_.u=jr;_.tI=0;_.a=null;_.b=null;function mt(b){var a;if(b!=null&&Ff(b.tI,9)){a=ag(b,9);if(av(this.q(),a.q())&&av(this.r(),a.r())){return true}}return false}
function nt(){var a,b;a=0;b=0;if(this.q()!=null){a=ud(this.q())}if(this.r()!=null){b=ud(this.r())}return a^b}
function kt(){}
_=kt.prototype=new Bp();_.eQ=mt;_.hC=nt;_.tI=39;function rr(b,a){b.a=a;return b}
function tr(){return null}
function ur(){return this.a.b}
function vr(a){return is(this.a,a)}
function qr(){}
_=qr.prototype=new kt();_.q=tr;_.r=ur;_.B=vr;_.tI=40;_.a=null;function xr(c,a,b){c.b=b;c.a=a;return c}
function zr(){return this.a}
function Ar(){return this.b.e[Fc+this.a]}
function Br(b,a){return xr(new wr(),a,b)}
function Cr(a){return js(this.b,this.a,a)}
function wr(){}
_=wr.prototype=new kt();_.q=zr;_.r=Ar;_.B=Cr;_.tI=41;_.a=null;_.b=null;function ws(a){yt(this,this.C(),a);return true}
function xs(a,b){if(a<0||a>=b){As(a,b)}}
function ys(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Ff(e.tI,10))){return false}f=ag(e,10);if(this.C()!=f.b){return false}c=ps(new ns(),this);d=ps(new ns(),f);while(c.a<c.b.b){a=ss(c);b=ss(d);if(!(a==null?b==null:sd(a,b))){return false}}return true}
function zs(){var a,b,c;b=1;a=ps(new ns(),this);while(a.a<a.b.b){c=ss(a);b=31*b+(c==null?0:ud(c));b=~~b}return b}
function As(a,b){throw yp(new xp(),ad+a+bd+b)}
function Bs(){return ps(new ns(),this)}
function ms(){}
_=ms.prototype=new Eq();_.k=ws;_.eQ=ys;_.hC=zs;_.t=Bs;_.tI=0;function ps(b,a){b.b=a;return b}
function rs(a){return a.a<a.b.b}
function ss(a){if(a.a>=a.b.b){throw new Au()}return Bt(a.b,a.a++)}
function ts(){return this.a<this.b.b}
function us(){return ss(this)}
function ns(){}
_=ns.prototype=new Bp();_.s=ts;_.u=us;_.tI=0;_.a=0;_.b=null;function et(b,a,c){b.a=a;b.b=c;return b}
function ht(a){return bs(this.a,a)}
function it(){var a;return a=gr(new fr(),this.b.a),Fs(new Es(),a)}
function jt(){return this.b.a.d}
function Ds(){}
_=Ds.prototype=new st();_.l=ht;_.t=it;_.C=jt;_.tI=42;_.a=null;_.b=null;function Fs(a,b){a.a=b;return a}
function ct(){return rs(this.a.a)}
function dt(){var a;return a=ag(ss(this.a.a),9),a.q()}
function Es(){}
_=Es.prototype=new Bp();_.s=ct;_.u=dt;_.tI=0;_.a=null;function xt(a){a.a=wf(rg,0,0,0,0);a.b=0;return a}
function zt(b,a){zf(b.a,b.b++,a);return true}
function yt(c,a,b){if(a<0||a>c.b){As(a,c.b)}c.a.splice(a,0,b);++c.b}
function Bt(b,a){xs(a,b.b);return b.a[a]}
function Ct(c,b,a){for(;a<c.b;++a){if(av(b,c.a[a])){return a}}return -1}
function Dt(a){return zf(this.a,this.b++,a),true}
function Et(a){return Ct(this,a,0)!=-1}
function Ft(){return this.b}
function wt(){}
_=wt.prototype=new ms();_.k=Dt;_.l=Et;_.C=Ft;_.tI=43;_.a=null;_.b=0;function eu(a){Fr(a);return a}
function gu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&sd(a,b)}
function du(){}
_=du.prototype=new dr();_.tI=44;function iu(a){a.a=eu(new du());return a}
function ju(c,a){var b;b=ks(c.a,a,c);return b==null}
function lu(b){var a;return a=ks(this.a,b,this),a==null}
function mu(a){return bs(this.a,a)}
function nu(){var a;return a=gr(new fr(),pt(this.a).b.a),Fs(new Es(),a)}
function ou(){return this.a.d}
function hu(){}
_=hu.prototype=new st();_.k=lu;_.l=mu;_.t=nu;_.C=ou;_.tI=45;_.a=null;function tu(b,a,c){b.a=a;b.b=c;return b}
function vu(){return this.a}
function wu(){return this.b}
function yu(b){var a;a=this.b;this.b=b;return a}
function su(){}
_=su.prototype=new kt();_.q=vu;_.r=wu;_.B=yu;_.tI=46;_.a=null;_.b=null;function Au(){}
_=Au.prototype=new Fp();_.tI=47;function av(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&sd(a,b)}
function ap(){!!$stats&&$stats({moduleName:$moduleName,subSystem:cd,evtGroup:dd,millis:(new Date()).getTime(),type:fd,className:gd});zo(new yo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ap()}catch(a){b(d)}else{ap()}}
function bv(){}
var qg=jp(hd,id),rg=jp(jd,kd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();