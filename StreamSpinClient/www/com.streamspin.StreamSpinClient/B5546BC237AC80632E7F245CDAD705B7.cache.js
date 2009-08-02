(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',C=' ',Ec=', Size: ',Db='-',sb='0',bc='0px',tc='100%',xc='100px',Bc='50px',Cc=':',w='DOMMouseScroll',Dc='Index: ',pc='Item four',lc='Item one',rc='Item six',qc='Item that has a long title and is number five',nc='Item tree',mc='Item two',A='MouseEvents',hd='Object;',Ac='Status: <b>Online<\/b>',vc='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',fd='Widget;',dd='[Lcom.google.gwt.user.client.ui.',gd='[Ljava.lang.',jc='absolute',vb='align',m='blur',ob='bottom',bb='button',tb='cellPadding',rb='cellSpacing',lb='center',x='change',B='className',cb='click',cd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',ib='div',u='error',yb='focus',db='gwt-Button',kb='gwt-HTML',jb='gwt-Label',xb='gwt-ListBox',Cb='gwt-MenuBar',gc='gwt-TextArea',wc='height',cc='hideFocus',Fb='horizontal',z='html',hc='input',dc='keydown',oc='keypress',zc='keyup',D='left',ed='load',n='losecapture',Bb='menubar',pb='middle',ad='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',bd='onModuleLoadStart',zb='option',ac='outline',ab='position',mb='right',Ab='role',t='scroll',l='select',Fc='startup',yc='status Online',eb='submit',gb='table',hb='tbody',ub='td',ic='text',fc='textarea',kc='title of Main Window',F='top',qb='tr',ec='true',fb='type',uc='value',Eb='vertical',wb='verticalAlign',sc='width';var _;function mp(a){return this===(a==null?null:a)}
function np(){return this.$H||(this.$H=++yd)}
function kp(){}
_=kp.prototype={};_.eQ=mp;_.hC=np;_.tM=qu;_.tI=1;function pd(b,a){return b.tM==qu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function rd(a){return a.tM==qu||a.tI==2?a.hC():a.$H||(a.$H=++yd)}
var yd=0;function de(){de=qu;Dd();new Bd()}
function fe(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function ge(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ke(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function zd(){}
_=zd.prototype=new kp();_.tI=0;function ce(){ce=qu;de()}
function be(){}
_=be.prototype=new zd();_.tI=0;function Fd(){Fd=qu;ce()}
function ae(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Ad(){}
_=Ad.prototype=new be();_.tI=0;function Dd(){Dd=qu;Fd()}
function Bd(){}
_=Bd.prototype=new Ad();_.tI=0;function kf(){}
_=kf.prototype=new kp();_.tI=0;function rf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function sf(a,f,c,b,e){var d;d=rf(e,b);tf(a,f,c,d);return d}
function tf(b,d,c,a){if(!uf){uf=new nf()}xf(a,uf);a.tI=d;a.qI=c;return a}
function vf(a,b,c){if(c!=null){if(a.qI>0&&!Af(c.tI,a.qI)){throw new ro()}if(a.qI<0&&(c.tM==qu||c.tI==2)){throw new ro()}}return a[b]=c}
function xf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function nf(){}
_=nf.prototype=new kp();_.tI=0;_.length=0;_.qI=0;var uf=null;function Bf(b,a){return b&&!!jg[b][a]}
function Af(b,a){return b&&jg[b][a]}
function Cf(b,a){if(b!=null&&!Af(b.tI,a)){throw new vo()}return b}
function ig(a){if(a!=null){throw new vo()}return a}
var jg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Eg(b,a,c){var d;if(a==dh){if(ei(b)==8192){dh=null}}d=Dg;Dg=b;try{c.u(b)}finally{Dg=d}}
var Dg=null,dh=null;function jh(a){oh();if(!kh){kh=gt(new ft())}it(kh,a)}
function lh(){var a;if(kh){for(a=Er(new Cr(),kh);a.a<a.b.b;){Cf(bs(a),3);tl()}}}
function mh(){var a,b;b=null;if(kh){for(a=Er(new Cr(),kh);a.a<a.b.b;){Cf(bs(a),3);b=null}}return b}
function oh(){if(!nh){nh=true;mi()}}
var kh=null,nh=false;function ei(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function gi(){if(!ii){Bh();uh();ii=true}}
function ji(a){return a!=null&&Bf(a.tI,4)&&!(a!=null&&(a.tM!=qu&&a.tI!=2))}
var ii=false;function Bh(){Fh=function(b){if(Eh(b)){var a=Dh;if(a&&a.__listener){if(ji(a.__listener)){Eg(b,a,a.__listener);b.stopPropagation()}}}};Eh=function(a){return true};ai=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(ji(c)){Eg(b,a,c)}}};$wnd.addEventListener(cb,Fh,true);$wnd.addEventListener(nb,Fh,true);$wnd.addEventListener(o,Fh,true);$wnd.addEventListener(s,Fh,true);$wnd.addEventListener(p,Fh,true);$wnd.addEventListener(r,Fh,true);$wnd.addEventListener(q,Fh,true);$wnd.addEventListener(v,Fh,true);$wnd.addEventListener(dc,Eh,true);$wnd.addEventListener(zc,Eh,true);$wnd.addEventListener(oc,Eh,true)}
function Ch(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?ai:null;if(b&2)c.ondblclick=a&2?ai:null;if(b&4)c.onmousedown=a&4?ai:null;if(b&8)c.onmouseup=a&8?ai:null;if(b&16)c.onmouseover=a&16?ai:null;if(b&32)c.onmouseout=a&32?ai:null;if(b&64)c.onmousemove=a&64?ai:null;if(b&128)c.onkeydown=a&128?ai:null;if(b&256)c.onkeypress=a&256?ai:null;if(b&512)c.onkeyup=a&512?ai:null;if(b&1024)c.onchange=a&1024?ai:null;if(b&2048)c.onfocus=a&2048?ai:null;if(b&4096)c.onblur=a&4096?ai:null;if(b&8192)c.onlosecapture=a&8192?ai:null;if(b&16384)c.onscroll=a&16384?ai:null;if(b&32768)c.onload=a&32768?ai:null;if(b&65536)c.onerror=a&65536?ai:null;if(b&131072)c.onmousewheel=a&131072?ai:null;if(b&262144)c.oncontextmenu=a&262144?ai:null}
var Dh=null,Eh=null,Fh=null,ai=null;function uh(){$wnd.addEventListener(q,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(z==b.target.tagName.toLowerCase()){var c=$doc.createEvent(A);c.initMouseEvent(s,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(w,Fh,true)}
function wh(b,a){gi();Ch(b,a);vh(b,a)}
function vh(b,a){if(a&131072){b.addEventListener(w,ai,false)}}
function mi(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=mh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{lh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function jm(b,a){pm(b.i,a,true)}
function om(a){var b,c;b=a[B]==null?null:String(a[B]);c=b.indexOf(gq(32));if(c>=0){return b.substr(0,c-0)}return b}
function pm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new op()}j=cq(j);if(j.length==0){throw new ap()}i=c[B]==null?null:String(c[B]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=C}c[B]=i+j}}else{if(e!=-1){b=cq(i.substr(0,e-0));d=cq(aq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+C+d}c[B]=h}}}
function im(){}
_=im.prototype=new kp();_.tI=7;_.i=null;function jn(a){if(a.g){throw new dp()}a.g=true;a.i.__listener=a;a.m();a.w()}
function kn(a){if(!a.g){throw new dp()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function ln(a){if(a.h){a.h.y(a)}else if(a.h){throw new dp()}}
function mn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new dp()}c.h=b;if(b.g){jn(c)}}}
function nn(){}
function on(){}
function pn(a){}
function qn(){kn(this)}
function rn(){}
function sn(){}
function xm(){}
_=xm.prototype=new im();_.m=nn;_.n=on;_.u=pn;_.v=qn;_.w=rn;_.x=sn;_.tI=8;_.g=false;_.h=null;function gl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=Dm(b);jn(a)}}
function hl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=Dm(b);a.v()}}
function il(){}
function jl(){}
function el(){}
_=el.prototype=new xm();_.m=gl;_.n=hl;_.w=il;_.x=jl;_.tI=9;function Fi(c,a,b){ln(a);bn(c.f,a);b.appendChild(a.i);mn(a,c)}
function bj(b,c){var a;if(c.h!=b){return false}mn(c,null);a=c.i;ge((de(),a)).removeChild(a);gn(b.f,c);return true}
function cj(){return Bm(new zm(),this.f)}
function dj(a){return bj(this,a)}
function Di(){}
_=Di.prototype=new el();_.s=cj;_.y=dj;_.tI=10;function oi(a,b){Fi(a,b,a.i)}
function qi(b,c){var a;a=bj(b,c);if(a){ri(c.i)}return a}
function ri(a){a.style[D]=E;a.style[F]=E;a.style[ab]=E}
function si(a){return qi(this,a)}
function ni(){}
_=ni.prototype=new Di();_.y=si;_.tI=11;function jj(){jj=qu;kj=(ao(),co)}
function ij(b,a){jj();b.i=a;kj.z(b.i,0);return b}
function lj(a){ei(a)}
function hj(){}
_=hj.prototype=new xm();_.u=lj;_.tI=12;var kj;function wi(){wi=qu;jj()}
function vi(b,a){wi();b.i=a;kj.z(b.i,0);return b}
function ui(){}
_=ui.prototype=new hj();_.tI=13;function yi(){yi=qu;wi()}
function xi(a){yi();vi(a,$doc.createElement((de(),bb)));zi(a.i);a.i[B]=db;return a}
function zi(b){if(b.type==eb){try{b.setAttribute(fb,bb)}catch(a){}}}
function ti(){}
_=ti.prototype=new ui();_.tI=14;function Bi(a){a.f=an(new ym());a.e=$doc.createElement((de(),gb));a.d=$doc.createElement(hb);a.e.appendChild(a.d);a.i=a.e;return a}
function Ai(){}
_=Ai.prototype=new Di();_.tI=15;_.d=null;_.e=null;function fj(){fj=qu;gj=(ao(),bo)}
var gj;function mk(a){a.i=$doc.createElement((de(),ib));a.i[B]=jb;return a}
function pk(a){ei(a)}
function lk(){}
_=lk.prototype=new xm();_.u=pk;_.tI=16;function nj(a){a.i=$doc.createElement((de(),ib));a.i[B]=kb;return a}
function mj(){}
_=mj.prototype=new lk();_.tI=17;function wj(){wj=qu;uj(new tj(),lb);yj=uj(new tj(),D);uj(new tj(),mb);xj=yj}
var xj,yj;function uj(b,a){b.a=a;return b}
function tj(){}
_=tj.prototype=new kp();_.tI=0;_.a=null;function Ej(){Ej=qu;Cj(new Bj(),ob);Cj(new Bj(),pb);Fj=Cj(new Bj(),F)}
var Fj;function Cj(a,b){a.a=b;return a}
function Bj(){}
_=Bj.prototype=new kp();_.tI=0;_.a=null;function ek(a){Bi(a);a.a=(wj(),xj);a.c=(Ej(),Fj);a.b=$doc.createElement((de(),qb));a.d.appendChild(a.b);a.e[rb]=sb;a.e[tb]=sb;return a}
function fk(c,d){var b,a;b=(a=$doc.createElement((de(),ub)),(a[vb]=c.a.a,undefined),(a.style[wb]=c.c.a,undefined),a);c.b.appendChild(b);ln(d);bn(c.f,d);b.appendChild(d.i);mn(d,c)}
function ik(c){var a,b;b=ge((de(),c.i));a=bj(this,c);if(a){this.b.removeChild(b)}return a}
function ck(){}
_=ck.prototype=new Ai();_.y=ik;_.tI=18;_.b=null;function uk(){uk=qu;jj()}
function rk(a){uk();ij(a,fe((de(),false)));a.i[B]=xb;return a}
function vk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((de(),zb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function xk(a){if(ei(a)==1024){}else{ei(a)}}
function qk(){}
_=qk.prototype=new hj();_.u=xk;_.tI=19;function Bk(a){gt(new ft());a.b=gt(new ft());Ek(a,false,(bl(),new Fk()));return a}
function Dk(d,a){var b,c;for(c=Er(new Cr(),d.b);c.a<c.b.b;){b=ig(bs(c));if(ae((de(),null.D()),a)){return b}}return null}
function Ek(c,e){var a,b,d;b=$doc.createElement((de(),gb));c.a=$doc.createElement(hb);b.appendChild(c.a);if(!e){d=$doc.createElement(qb);c.a.appendChild(d)}a=An((fj(),gj));a.appendChild(b);c.i=a;c.i.setAttribute(Ab,Bb);wh(c.i,2225|(c.i.__eventBits||0));c.i[B]=Cb;if(e){jm(c,om(c.i)+Db+Eb)}else{jm(c,om(c.i)+Db+Fb)}c.i.style[ac]=bc;c.i.setAttribute(cc,ec)}
function cl(a){var b;Dk(this,a.target);switch(ei(a)){case 1:{(fj(),this.i).firstChild.focus();break}{break}case 2048:{ig(kt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{ig(kt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{ig(kt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:ig(kt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:ig(kt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{ig(kt(this.b,0))}}break}}}
function dl(){kn(this)}
function yk(){}
_=yk.prototype=new xm();_.u=cl;_.v=dl;_.tI=20;_.a=null;function bl(){bl=qu}
function Fk(){}
_=Fk.prototype=new kp();_.tI=0;function sl(){sl=qu;wl=tt(new st());xl=xt(new wt())}
function rl(b,a){sl();b.f=an(new ym());b.i=a;jn(b);return b}
function tl(){var b,a;sl();var c,d;for(d=(b=vq(new uq(),Es(xl.a).b.a),os(new ns(),b));as(d.a.a);){c=Cf((a=Cf(bs(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function vl(a){sl();var b;b=Cf(tr(wl,a),5);if(b){return b}if(wl.d==0){jh(new ml())}b=pl(new ol());zr(wl,a,b);yt(xl,b);return b}
function ll(){}
_=ll.prototype=new ni();_.tI=21;var wl,xl;function ml(){}
_=ml.prototype=new kp();_.tI=22;function ql(){ql=qu;sl()}
function pl(a){ql();rl(a,$doc.body);return a}
function ol(){}
_=ol.prototype=new ll();_.tI=23;function fm(){fm=qu;jj()}
function em(b,a){fm();b.i=a;kj.z(b.i,0);return b}
function hm(a){var b;b=ei(a);if((b&896)!=0){ei(a)}else if(b==1024){}else{ei(a)}}
function dm(){}
_=dm.prototype=new hj();_.u=hm;_.tI=24;function cm(){cm=qu;fm()}
function bm(a){cm();em(a,$doc.createElement((de(),fc)));a.i[B]=gc;return a}
function am(){}
_=am.prototype=new dm();_.tI=25;function sm(a){Bi(a);a.a=(wj(),xj);a.b=(Ej(),Fj);a.e[rb]=sb;a.e[tb]=sb;return a}
function tm(c,e){var b,d,a;d=$doc.createElement((de(),qb));b=(a=$doc.createElement(ub),(a[vb]=c.a.a,undefined),(a.style[wb]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);ln(e);bn(c.f,e);b.appendChild(e.i);mn(e,c)}
function wm(c){var a,b;b=ge((de(),c.i));a=bj(this,c);if(a){this.d.removeChild(ge(b))}return a}
function qm(){}
_=qm.prototype=new Ai();_.y=wm;_.tI=26;function an(a){a.a=sf(mg,0,6,4,0);return a}
function bn(a,b){en(a,b,a.b)}
function dn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function en(d,e,a){var b,c;if(a<0||a>d.b){throw new gp()}if(d.b==d.a.length){c=sf(mg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){vf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){vf(d.a,b,d.a[b-1])}vf(d.a,a,e)}
function fn(c,b){var a;if(b<0||b>=c.b){throw new gp()}--c.b;for(a=b;a<c.b;++a){vf(c.a,a,c.a[a+1])}vf(c.a,c.b,null)}
function gn(b,c){var a;a=dn(b,c);if(a==-1){throw new ju()}fn(b,a)}
function ym(){}
_=ym.prototype=new kp();_.tI=0;_.a=null;_.b=0;function Bm(b,a){b.b=a;return b}
function Dm(a){if(a.a>=a.b.b){throw new ju()}return a.b.a[++a.a]}
function Em(){return this.a<this.b.b-1}
function Fm(){return Dm(this)}
function zm(){}
_=zm.prototype=new kp();_.r=Em;_.t=Fm;_.tI=0;_.a=-1;_.b=null;function ao(){ao=qu;bo=wn(new un());co=bo?(ao(),new tn()):bo}
function eo(a,b){a.tabIndex=b}
function tn(){}
_=tn.prototype=new kp();_.z=eo;_.tI=0;var bo,co;function xn(){xn=qu;ao()}
function wn(a){xn();a.a=yn();a.b=zn();a.c=Bn();return a}
function yn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function zn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function An(c){var a=$doc.createElement(ib);var b=c.l();b.addEventListener(m,c.a,false);b.addEventListener(yb,c.b,false);a.addEventListener(o,c.c,false);a.appendChild(b);return a}
function Bn(){return function(){this.firstChild.focus()}}
function Dn(){var a=$doc.createElement(hc);a.type=ic;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=jc;return a}
function En(a,b){a.firstChild.tabIndex=b}
function un(){}
_=un.prototype=new tn();_.l=Dn;_.z=En;_.tI=0;function fo(){}
_=fo.prototype=new kf();_.tI=0;function ho(a){a.d=sm(new qm());a.c=ek(new ck());a.h=sm(new qm());a.g=rk(new qk());a.a=bm(new am());a.e=Bk(new yk());a.b=xi(new ti());a.f=mk(new lk());a.i=nj(new mj());ke((de(),a.i.i),kc);vk(a.g,lc,lc,-1);vk(a.g,mc,mc,-1);vk(a.g,nc,nc,-1);vk(a.g,pc,pc,-1);vk(a.g,qc,qc,-1);vk(a.g,rc,rc,-1);a.g.i.size=4;a.g.i.style[sc]=tc;a.a.i[uc]=vc!=null?vc:E;a.a.i.style[sc]=tc;tm(a.h,a.g);tm(a.h,a.a);a.h.i.style[wc]=xc;a.h.i.style[sc]=tc;ke(a.f.i,yc);a.f.i.innerHTML=Ac;fk(a.c,a.b);fk(a.c,a.e);a.c.i.style[wc]=Bc;tm(a.d,a.i);tm(a.d,a.h);tm(a.d,a.f);tm(a.d,a.c);a.d.i.style[wc]=tc;a.d.i.style[sc]=tc;oi((sl(),vl(null)),a.d);return a}
function go(){}
_=go.prototype=new fo();_.tI=0;function iq(){}
_=iq.prototype=new kp();_.tI=3;function Eo(){}
_=Eo.prototype=new iq();_.tI=4;function op(){}
_=op.prototype=new Eo();_.tI=5;function ro(){}
_=ro.prototype=new op();_.tI=28;function yo(c,a){var b;b=new uo();return b}
function uo(){}
_=uo.prototype=new kp();_.tI=0;function vo(){}
_=vo.prototype=new op();_.tI=31;function ap(){}
_=ap.prototype=new op();_.tI=32;function dp(){}
_=dp.prototype=new op();_.tI=33;function hp(b,a){return b}
function gp(){}
_=gp.prototype=new op();_.tI=34;function Cp(b,a){if(!(a!=null&&Bf(a.tI,1))){return false}return String(b)==a}
function aq(b,a){return b.substr(a,b.length-a)}
function cq(c){if(c.length==0||c[0]>C&&c[c.length-1]>C){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function eq(a){return Cp(this,a)}
function gq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function hq(){return yp(this)}
_=String.prototype;_.eQ=eq;_.hC=hq;_.tI=2;function tp(){tp=qu;up={};xp={}}
function vp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function yp(c){tp();var a=Cc+c;var b=xp[a];if(b!=null){return b}b=up[a];if(b==null){b=vp(c)}zp();return xp[a]=b}
function zp(){if(wp==256){up=xp;xp={};wp=0}++wp}
var up,wp=0,xp;function kq(){}
_=kq.prototype=new op();_.tI=35;function oq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:pd(b,c)){return a}}return null}
function qq(a){throw new kq()}
function rq(b){var a;a=oq(this.s(),b);return !!a}
function nq(){}
_=nq.prototype=new kp();_.j=qq;_.k=rq;_.tI=0;function Es(b){var a;a=zq(new tq(),b);return ts(new ms(),b,a)}
function Fs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Bf(c.tI,11))){return false}e=Cf(c,11);if(Cf(this,11).d!=e.d){return false}for(b=vq(new uq(),zq(new tq(),e).a);as(b.a);){a=Cf(bs(b.a),9);d=a.p();f=a.q();if(!(d==null?Cf(this,11).c:d!=null&&Bf(d.tI,1)?vr(Cf(this,11),Cf(d,1)):ur(Cf(this,11),d,~~rd(d)))){return false}if(!pu(f,d==null?Cf(this,11).b:d!=null&&Bf(d.tI,1)?Cf(this,11).e[Cc+Cf(d,1)]:rr(Cf(this,11),d,~~rd(d)))){return false}}return true}
function at(){var a,b,c;c=0;for(b=vq(new uq(),zq(new tq(),Cf(this,11)).a);as(b.a);){a=Cf(bs(b.a),9);c+=a.hC();c=~~c}return c}
function ls(){}
_=ls.prototype=new kp();_.eQ=Fs;_.hC=at;_.tI=0;function mr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function nr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=kr(e,c.substring(1));a.j(b)}}}
function qr(b,a){return a==null?b.c:a!=null&&Bf(a.tI,1)?vr(b,Cf(a,1)):ur(b,a,~~rd(a))}
function tr(b,a){return a==null?b.b:a!=null&&Bf(a.tI,1)?b.e[Cc+Cf(a,1)]:rr(b,a,~~rd(a))}
function rr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function ur(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function vr(b,a){return Cc+a in b.e}
function zr(b,a,c){return a==null?xr(b,c):a!=null&&Bf(a.tI,1)?yr(b,Cf(a,1),c):wr(b,a,c,~~rd(a))}
function wr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.A(j);return h}}}else{a=i.a[e]=[]}var c=cu(new bu(),g,j);a.push(c);++i.d;return null}
function xr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function yr(d,a,e){var b,c=d.e;a=Cc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Ar(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pd(a,b)}
function sq(){}
_=sq.prototype=new ls();_.o=Ar;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function dt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Bf(b.tI,12))){return false}c=Cf(b,12);if(c.B()!=this.B()){return false}for(a=c.s();a.r();){d=a.t();if(!this.k(d)){return false}}return true}
function et(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=rd(c);a=~~a}}return a}
function bt(){}
_=bt.prototype=new nq();_.eQ=dt;_.hC=et;_.tI=36;function zq(b,a){b.a=a;return b}
function Bq(d,c){var a,b,e;if(c!=null&&Bf(c.tI,9)){a=Cf(c,9);b=a.p();if(qr(d.a,b)){e=tr(d.a,b);return vt(a.q(),e)}}return false}
function Cq(a){return Bq(this,a)}
function Dq(){return vq(new uq(),this.a)}
function Eq(){return this.a.d}
function tq(){}
_=tq.prototype=new bt();_.k=Cq;_.s=Dq;_.B=Eq;_.tI=37;_.a=null;function vq(c,b){var a;c.b=b;a=gt(new ft());if(c.b.c){it(a,ar(new Fq(),c.b))}nr(c.b,a);mr(c.b,a);c.a=Er(new Cr(),a);return c}
function xq(){return as(this.a)}
function yq(){return Cf(bs(this.a),9)}
function uq(){}
_=uq.prototype=new kp();_.r=xq;_.t=yq;_.tI=0;_.a=null;_.b=null;function Bs(b){var a;if(b!=null&&Bf(b.tI,9)){a=Cf(b,9);if(pu(this.p(),a.p())&&pu(this.q(),a.q())){return true}}return false}
function Cs(){var a,b;a=0;b=0;if(this.p()!=null){a=rd(this.p())}if(this.q()!=null){b=rd(this.q())}return a^b}
function zs(){}
_=zs.prototype=new kp();_.eQ=Bs;_.hC=Cs;_.tI=38;function ar(b,a){b.a=a;return b}
function cr(){return null}
function dr(){return this.a.b}
function er(a){return xr(this.a,a)}
function Fq(){}
_=Fq.prototype=new zs();_.p=cr;_.q=dr;_.A=er;_.tI=39;_.a=null;function gr(c,a,b){c.b=b;c.a=a;return c}
function ir(){return this.a}
function jr(){return this.b.e[Cc+this.a]}
function kr(b,a){return gr(new fr(),a,b)}
function lr(a){return yr(this.b,this.a,a)}
function fr(){}
_=fr.prototype=new zs();_.p=ir;_.q=jr;_.A=lr;_.tI=40;_.a=null;_.b=null;function fs(a){ht(this,this.B(),a);return true}
function gs(a,b){if(a<0||a>=b){js(a,b)}}
function hs(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Bf(e.tI,10))){return false}f=Cf(e,10);if(this.B()!=f.b){return false}c=Er(new Cr(),this);d=Er(new Cr(),f);while(c.a<c.b.b){a=bs(c);b=bs(d);if(!(a==null?b==null:pd(a,b))){return false}}return true}
function is(){var a,b,c;b=1;a=Er(new Cr(),this);while(a.a<a.b.b){c=bs(a);b=31*b+(c==null?0:rd(c));b=~~b}return b}
function js(a,b){throw hp(new gp(),Dc+a+Ec+b)}
function ks(){return Er(new Cr(),this)}
function Br(){}
_=Br.prototype=new nq();_.j=fs;_.eQ=hs;_.hC=is;_.s=ks;_.tI=0;function Er(b,a){b.b=a;return b}
function as(a){return a.a<a.b.b}
function bs(a){if(a.a>=a.b.b){throw new ju()}return kt(a.b,a.a++)}
function cs(){return this.a<this.b.b}
function ds(){return bs(this)}
function Cr(){}
_=Cr.prototype=new kp();_.r=cs;_.t=ds;_.tI=0;_.a=0;_.b=null;function ts(b,a,c){b.a=a;b.b=c;return b}
function ws(a){return qr(this.a,a)}
function xs(){var a;return a=vq(new uq(),this.b.a),os(new ns(),a)}
function ys(){return this.b.a.d}
function ms(){}
_=ms.prototype=new bt();_.k=ws;_.s=xs;_.B=ys;_.tI=41;_.a=null;_.b=null;function os(a,b){a.a=b;return a}
function rs(){return as(this.a.a)}
function ss(){var a;return a=Cf(bs(this.a.a),9),a.p()}
function ns(){}
_=ns.prototype=new kp();_.r=rs;_.t=ss;_.tI=0;_.a=null;function gt(a){a.a=sf(ng,0,0,0,0);a.b=0;return a}
function it(b,a){vf(b.a,b.b++,a);return true}
function ht(c,a,b){if(a<0||a>c.b){js(a,c.b)}c.a.splice(a,0,b);++c.b}
function kt(b,a){gs(a,b.b);return b.a[a]}
function lt(c,b,a){for(;a<c.b;++a){if(pu(b,c.a[a])){return a}}return -1}
function mt(a){return vf(this.a,this.b++,a),true}
function nt(a){return lt(this,a,0)!=-1}
function ot(){return this.b}
function ft(){}
_=ft.prototype=new Br();_.j=mt;_.k=nt;_.B=ot;_.tI=42;_.a=null;_.b=0;function tt(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function vt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pd(a,b)}
function st(){}
_=st.prototype=new sq();_.tI=43;function xt(a){a.a=tt(new st());return a}
function yt(c,a){var b;b=zr(c.a,a,c);return b==null}
function At(b){var a;return a=zr(this.a,b,this),a==null}
function Bt(a){return qr(this.a,a)}
function Ct(){var a;return a=vq(new uq(),Es(this.a).b.a),os(new ns(),a)}
function Dt(){return this.a.d}
function wt(){}
_=wt.prototype=new bt();_.j=At;_.k=Bt;_.s=Ct;_.B=Dt;_.tI=44;_.a=null;function cu(b,a,c){b.a=a;b.b=c;return b}
function eu(){return this.a}
function fu(){return this.b}
function hu(b){var a;a=this.b;this.b=b;return a}
function bu(){}
_=bu.prototype=new zs();_.p=eu;_.q=fu;_.A=hu;_.tI=45;_.a=null;_.b=null;function ju(){}
_=ju.prototype=new op();_.tI=46;function pu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pd(a,b)}
function po(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Fc,evtGroup:ad,millis:(new Date()).getTime(),type:bd,className:cd});ho(new go())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{po()}catch(a){b(d)}else{po()}}
function qu(){}
var mg=yo(dd,fd),ng=yo(gd,hd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();