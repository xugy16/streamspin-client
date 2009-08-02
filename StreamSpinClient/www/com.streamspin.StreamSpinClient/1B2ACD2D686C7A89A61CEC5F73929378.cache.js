(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',tc=', Size: ',Cb='-',qb='0',ac='0px',kc='100%',pc='100px',rc=':',xb='DIV',w='DOMMouseScroll',sc='Index: ',hc='Item one',ic='Item two',Cc='Object;',mc='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',Ac='Widget;',yc='[Lcom.google.gwt.user.client.ui.',Bc='[Ljava.lang.',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',xc='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',hb='gwt-Label',vb='gwt-ListBox',Bb='gwt-MenuBar',fc='gwt-TextArea',nc='height',bc='hideFocus',Eb='horizontal',dc='keydown',oc='keypress',zc='keyup',B='left',Dc='load',n='losecapture',Ab='menubar',mb='middle',vc='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',wc='onModuleLoadStart',qc='online staus',wb='option',Fb='outline',E='position',kb='right',zb='role',t='scroll',l='select',uc='startup',bb='submit',eb='table',fb='tbody',sb='td',ec='textarea',gc='title of Main Window',D='top',ob='tr',cc='true',db='type',lc='value',Db='vertical',ub='verticalAlign',jc='width';var _;function jo(a){return this===(a==null?null:a)}
function ko(){return this.$H||(this.$H=++od)}
function ho(){}
_=ho.prototype={};_.eQ=jo;_.hC=ko;_.tM=nt;_.tI=1;function fd(b,a){return b.tM==nt||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function hd(a){return a.tM==nt||a.tI==2?a.hC():a.$H||(a.$H=++od)}
var od=0;function wd(){wd=nt;sd();new qd()}
function yd(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function zd(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Dd(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function pd(){}
_=pd.prototype=new ho();_.tI=0;function ud(){ud=nt;wd()}
function td(){}
_=td.prototype=new pd();_.tI=0;function sd(){sd=nt;ud()}
function qd(){}
_=qd.prototype=new td();_.tI=0;function Be(){}
_=Be.prototype=new ho();_.tI=0;function cf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function df(a,f,c,b,e){var d;d=cf(e,b);ef(a,f,c,d);return d}
function ef(b,d,c,a){if(!ff){ff=new Ee()}jf(a,ff);a.tI=d;a.qI=c;return a}
function gf(a,b,c){if(c!=null){if(a.qI>0&&!mf(c.tI,a.qI)){throw new nn()}if(a.qI<0&&(c.tM==nt||c.tI==2)){throw new nn()}}return a[b]=c}
function jf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Ee(){}
_=Ee.prototype=new ho();_.tI=0;_.length=0;_.qI=0;var ff=null;function nf(b,a){return b&&!!Bf[b][a]}
function mf(b,a){return b&&Bf[b][a]}
function of(b,a){if(b!=null&&!mf(b.tI,a)){throw new rn()}return b}
function Af(a){if(a!=null){throw new rn()}return a}
var Bf=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function qg(b,a,c){var d;if(a==vg){if(uh(b)==8192){vg=null}}d=pg;pg=b;try{c.t(b)}finally{pg=d}}
function xg(a,b){wh();a.__eventBits=b;a.onclick=b&1?qh:null;a.ondblclick=b&2?qh:null;a.onmousedown=b&4?qh:null;a.onmouseup=b&8?qh:null;a.onmouseover=b&16?qh:null;a.onmouseout=b&32?qh:null;a.onmousemove=b&64?qh:null;a.onkeydown=b&128?qh:null;a.onkeypress=b&256?qh:null;a.onkeyup=b&512?qh:null;a.onchange=b&1024?qh:null;a.onfocus=b&2048?qh:null;a.onblur=b&4096?qh:null;a.onlosecapture=b&8192?qh:null;a.onscroll=b&16384?qh:null;a.onload=b&32768?qh:null;a.onerror=b&65536?qh:null;a.onmousewheel=b&131072?qh:null;a.oncontextmenu=b&262144?qh:null}
var pg=null,vg=null;function Cg(a){bh();if(!Dg){Dg=ds(new cs())}fs(Dg,a)}
function Eg(){var a;if(Dg){for(a=Bq(new zq(),Dg);a.a<a.b.b;){of(Eq(a),3);Ek()}}}
function Fg(){var a,b;b=null;if(Dg){for(a=Bq(new zq(),Dg);a.a<a.b.b;){of(Eq(a),3);b=null}}return b}
function bh(){if(!ah){ah=true;Ch()}}
var Dg=null,ah=false;function uh(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case Dc:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function wh(){if(!yh){mh();yh=true}}
function zh(a){return a!=null&&nf(a.tI,4)&&!(a!=null&&(a.tM!=nt&&a.tI!=2))}
var yh=false;function mh(){ph=function(b){if(oh(b)){var a=nh;if(a&&a.__listener){if(zh(a.__listener)){qg(b,a,a.__listener);b.stopPropagation()}}}};oh=function(a){return true};qh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(zh(c)){qg(b,a,c)}}};$wnd.addEventListener(cb,ph,true);$wnd.addEventListener(nb,ph,true);$wnd.addEventListener(o,ph,true);$wnd.addEventListener(s,ph,true);$wnd.addEventListener(p,ph,true);$wnd.addEventListener(r,ph,true);$wnd.addEventListener(q,ph,true);$wnd.addEventListener(v,ph,true);$wnd.addEventListener(dc,oh,true);$wnd.addEventListener(zc,oh,true);$wnd.addEventListener(oc,oh,true)}
var nh=null,oh=null,ph=null,qh=null;function Ch(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=Fg()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{Eg()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function sl(b,a){yl(b.i,a,true)}
function xl(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(dp(32));if(c>=0){return b.substr(0,c-0)}return b}
function yl(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new lo()}j=Fo(j);if(j.length==0){throw new Cn()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=Fo(i.substr(0,e-0));d=Fo(Do(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function rl(){}
_=rl.prototype=new ho();_.tI=7;_.i=null;function rm(a){if(a.g){throw new Fn()}a.g=true;a.i.__listener=a;a.l();a.v()}
function sm(a){if(!a.g){throw new Fn()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function tm(a){if(a.h){a.h.x(a)}else if(a.h){throw new Fn()}}
function um(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new Fn()}c.h=b;if(b.g){rm(c)}}}
function vm(){}
function wm(){}
function xm(a){}
function ym(){sm(this)}
function zm(){}
function Am(){}
function am(){}
_=am.prototype=new rl();_.l=vm;_.m=wm;_.t=xm;_.u=ym;_.v=zm;_.w=Am;_.tI=8;_.g=false;_.h=null;function rk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=gm(b);rm(a)}}
function sk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=gm(b);a.u()}}
function tk(){}
function uk(){}
function pk(){}
_=pk.prototype=new am();_.l=rk;_.m=sk;_.v=tk;_.w=uk;_.tI=9;function pi(c,a,b){tm(a);km(c.f,a);b.appendChild(a.i);um(a,c)}
function ri(b,c){var a;if(c.h!=b){return false}um(c,null);a=c.i;zd((wd(),a)).removeChild(a);pm(b.f,c);return true}
function si(){return em(new cm(),this.f)}
function ti(a){return ri(this,a)}
function ni(){}
_=ni.prototype=new pk();_.r=si;_.x=ti;_.tI=10;function Eh(a,b){pi(a,b,a.i)}
function ai(b,c){var a;a=ri(b,c);if(a){bi(c.i)}return a}
function bi(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function ci(a){return ai(this,a)}
function Dh(){}
_=Dh.prototype=new ni();_.x=ci;_.tI=11;function vi(b,a){b.i=a;b.i.tabIndex=0;return b}
function xi(a){uh(a)}
function ui(){}
_=ui.prototype=new am();_.t=xi;_.tI=12;function fi(b,a){b.i=a;b.i.tabIndex=0;return b}
function ei(){}
_=ei.prototype=new ui();_.tI=13;function hi(a){fi(a,$doc.createElement((wd(),F)));ji(a.i);a.i[z]=ab;return a}
function ji(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function di(){}
_=di.prototype=new ei();_.tI=14;function li(a){a.f=jm(new bm());a.e=$doc.createElement((wd(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function ki(){}
_=ki.prototype=new ni();_.tI=15;_.d=null;_.e=null;function yj(a){a.i=$doc.createElement((wd(),gb));a.i[z]=hb;return a}
function Bj(a){uh(a)}
function xj(){}
_=xj.prototype=new am();_.t=Bj;_.tI=16;function zi(a){a.i=$doc.createElement((wd(),gb));a.i[z]=ib;return a}
function yi(){}
_=yi.prototype=new xj();_.tI=17;function cj(){cj=nt;aj(new Fi(),jb);ej=aj(new Fi(),B);aj(new Fi(),kb);dj=ej}
var dj,ej;function aj(b,a){b.a=a;return b}
function Fi(){}
_=Fi.prototype=new ho();_.tI=0;_.a=null;function kj(){kj=nt;ij(new hj(),lb);ij(new hj(),mb);lj=ij(new hj(),D)}
var lj;function ij(a,b){a.a=b;return a}
function hj(){}
_=hj.prototype=new ho();_.tI=0;_.a=null;function qj(a){li(a);a.a=(cj(),dj);a.c=(kj(),lj);a.b=$doc.createElement((wd(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function rj(c,d){var b,a;b=(a=$doc.createElement((wd(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);tm(d);km(c.f,d);b.appendChild(d.i);um(d,c)}
function uj(c){var a,b;b=zd((wd(),c.i));a=ri(this,c);if(a){this.b.removeChild(b)}return a}
function oj(){}
_=oj.prototype=new ki();_.x=uj;_.tI=18;_.b=null;function Dj(a){vi(a,yd((wd(),false)));a.i[z]=vb;return a}
function ak(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((wd(),wb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function ck(a){if(uh(a)==1024){}else{uh(a)}}
function Cj(){}
_=Cj.prototype=new ui();_.t=ck;_.tI=19;function gk(a){ds(new cs());a.b=ds(new cs());jk(a,false,(mk(),new kk()));return a}
function ik(d,a){var b,c;for(c=Bq(new zq(),d.b);c.a<c.b.b;){b=Af(Eq(c));if((wd(),null.B()).contains(a)){return b}}return null}
function jk(d,f){var b,c,e,a;c=$doc.createElement((wd(),eb));d.a=$doc.createElement(fb);c.appendChild(d.a);if(!f){e=$doc.createElement(ob);d.a.appendChild(e)}b=(a=$doc.createElement(xb),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(zb,Ab);xg(d.i,2225|(d.i.__eventBits||0));d.i[z]=Bb;if(f){sl(d,xl(d.i)+Cb+Db)}else{sl(d,xl(d.i)+Cb+Eb)}d.i.style[Fb]=ac;d.i.setAttribute(bc,cc)}
function nk(a){var b;ik(this,a.target);switch(uh(a)){case 1:{this.i.focus();break}{break}case 2048:{Af(hs(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Af(hs(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Af(hs(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Af(hs(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Af(hs(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Af(hs(this.b,0))}}break}}}
function ok(){sm(this)}
function dk(){}
_=dk.prototype=new am();_.t=nk;_.u=ok;_.tI=20;_.a=null;function mk(){mk=nt}
function kk(){}
_=kk.prototype=new ho();_.tI=0;function Dk(){Dk=nt;bl=qs(new ps());cl=us(new ts())}
function Ck(b,a){Dk();b.f=jm(new bm());b.i=a;rm(b);return b}
function Ek(){var b,a;Dk();var c,d;for(d=(b=sp(new rp(),Br(cl.a).b.a),lr(new kr(),b));Dq(d.a.a);){c=of((a=of(Eq(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function al(a){Dk();var b;b=of(qq(bl,a),5);if(b){return b}if(bl.d==0){Cg(new xk())}b=Ak(new zk());wq(bl,a,b);vs(cl,b);return b}
function wk(){}
_=wk.prototype=new Dh();_.tI=21;var bl,cl;function xk(){}
_=xk.prototype=new ho();_.tI=22;function Bk(){Bk=nt;Dk()}
function Ak(a){Bk();Ck(a,$doc.body);return a}
function zk(){}
_=zk.prototype=new wk();_.tI=23;function nl(b,a){b.i=a;b.i.tabIndex=0;return b}
function ql(a){var b;b=uh(a);if((b&896)!=0){uh(a)}else if(b==1024){}else{uh(a)}}
function ml(){}
_=ml.prototype=new ui();_.t=ql;_.tI=24;function kl(a){nl(a,$doc.createElement((wd(),ec)));a.i[z]=fc;return a}
function jl(){}
_=jl.prototype=new ml();_.tI=25;function Bl(a){li(a);a.a=(cj(),dj);a.b=(kj(),lj);a.e[pb]=qb;a.e[rb]=qb;return a}
function Cl(c,e){var b,d,a;d=$doc.createElement((wd(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);tm(e);km(c.f,e);b.appendChild(e.i);um(e,c)}
function Fl(c){var a,b;b=zd((wd(),c.i));a=ri(this,c);if(a){this.d.removeChild(zd(b))}return a}
function zl(){}
_=zl.prototype=new ki();_.x=Fl;_.tI=26;function jm(a){a.a=df(Ef,0,6,4,0);return a}
function km(a,b){nm(a,b,a.b)}
function mm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function nm(d,e,a){var b,c;if(a<0||a>d.b){throw new co()}if(d.b==d.a.length){c=df(Ef,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){gf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){gf(d.a,b,d.a[b-1])}gf(d.a,a,e)}
function om(c,b){var a;if(b<0||b>=c.b){throw new co()}--c.b;for(a=b;a<c.b;++a){gf(c.a,a,c.a[a+1])}gf(c.a,c.b,null)}
function pm(b,c){var a;a=mm(b,c);if(a==-1){throw new gt()}om(b,a)}
function bm(){}
_=bm.prototype=new ho();_.tI=0;_.a=null;_.b=0;function em(b,a){b.b=a;return b}
function gm(a){if(a.a>=a.b.b){throw new gt()}return a.b.a[++a.a]}
function hm(){return this.a<this.b.b-1}
function im(){return gm(this)}
function cm(){}
_=cm.prototype=new ho();_.q=hm;_.s=im;_.tI=0;_.a=-1;_.b=null;function an(){}
_=an.prototype=new Be();_.tI=0;function cn(a){a.d=Bl(new zl());a.c=qj(new oj());a.h=Bl(new zl());a.g=Dj(new Cj());a.a=kl(new jl());a.e=gk(new dk());a.b=hi(new di());a.f=yj(new xj());a.i=zi(new yi());Dd((wd(),a.i.i),gc);ak(a.g,hc,hc,-1);ak(a.g,ic,ic,-1);a.g.i.size=6;a.g.i.style[jc]=kc;a.a.i[lc]=mc!=null?mc:C;a.a.i.style[jc]=kc;Cl(a.h,a.g);Cl(a.h,a.a);a.h.i.style[nc]=pc;Dd(a.f.i,qc);rj(a.c,a.b);rj(a.c,a.e);a.c.i.style[nc]=kc;Cl(a.d,a.i);Cl(a.d,a.h);Cl(a.d,a.f);Cl(a.d,a.c);a.d.i.style[nc]=kc;a.d.i.style[jc]=kc;Eh((Dk(),al(null)),a.d);return a}
function bn(){}
_=bn.prototype=new an();_.tI=0;function fp(){}
_=fp.prototype=new ho();_.tI=3;function An(){}
_=An.prototype=new fp();_.tI=4;function lo(){}
_=lo.prototype=new An();_.tI=5;function nn(){}
_=nn.prototype=new lo();_.tI=28;function un(c,a){var b;b=new qn();return b}
function qn(){}
_=qn.prototype=new ho();_.tI=0;function rn(){}
_=rn.prototype=new lo();_.tI=31;function Cn(){}
_=Cn.prototype=new lo();_.tI=32;function Fn(){}
_=Fn.prototype=new lo();_.tI=33;function eo(b,a){return b}
function co(){}
_=co.prototype=new lo();_.tI=34;function zo(b,a){if(!(a!=null&&nf(a.tI,1))){return false}return String(b)==a}
function Do(b,a){return b.substr(a,b.length-a)}
function Fo(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function bp(a){return zo(this,a)}
function dp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ep(){return vo(this)}
_=String.prototype;_.eQ=bp;_.hC=ep;_.tI=2;function qo(){qo=nt;ro={};uo={}}
function so(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function vo(c){qo();var a=rc+c;var b=uo[a];if(b!=null){return b}b=ro[a];if(b==null){b=so(c)}wo();return uo[a]=b}
function wo(){if(to==256){ro=uo;uo={};to=0}++to}
var ro,to=0,uo;function hp(){}
_=hp.prototype=new lo();_.tI=35;function lp(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:fd(b,c)){return a}}return null}
function np(a){throw new hp()}
function op(b){var a;a=lp(this.r(),b);return !!a}
function kp(){}
_=kp.prototype=new ho();_.j=np;_.k=op;_.tI=0;function Br(b){var a;a=wp(new qp(),b);return qr(new jr(),b,a)}
function Cr(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&nf(c.tI,11))){return false}e=of(c,11);if(of(this,11).d!=e.d){return false}for(b=sp(new rp(),wp(new qp(),e).a);Dq(b.a);){a=of(Eq(b.a),9);d=a.o();f=a.p();if(!(d==null?of(this,11).c:d!=null&&nf(d.tI,1)?sq(of(this,11),of(d,1)):rq(of(this,11),d,~~hd(d)))){return false}if(!mt(f,d==null?of(this,11).b:d!=null&&nf(d.tI,1)?of(this,11).e[rc+of(d,1)]:oq(of(this,11),d,~~hd(d)))){return false}}return true}
function Dr(){var a,b,c;c=0;for(b=sp(new rp(),wp(new qp(),of(this,11)).a);Dq(b.a);){a=of(Eq(b.a),9);c+=a.hC();c=~~c}return c}
function ir(){}
_=ir.prototype=new ho();_.eQ=Cr;_.hC=Dr;_.tI=0;function jq(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function kq(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=hq(e,c.substring(1));a.j(b)}}}
function nq(b,a){return a==null?b.c:a!=null&&nf(a.tI,1)?sq(b,of(a,1)):rq(b,a,~~hd(a))}
function qq(b,a){return a==null?b.b:a!=null&&nf(a.tI,1)?b.e[rc+of(a,1)]:oq(b,a,~~hd(a))}
function oq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function rq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function sq(b,a){return rc+a in b.e}
function wq(b,a,c){return a==null?uq(b,c):a!=null&&nf(a.tI,1)?vq(b,of(a,1),c):tq(b,a,c,~~hd(a))}
function tq(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=Fs(new Es(),g,j);a.push(c);++i.d;return null}
function uq(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function vq(d,a,e){var b,c=d.e;a=rc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function xq(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fd(a,b)}
function pp(){}
_=pp.prototype=new ir();_.n=xq;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function as(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&nf(b.tI,12))){return false}c=of(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function bs(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=hd(c);a=~~a}}return a}
function Er(){}
_=Er.prototype=new kp();_.eQ=as;_.hC=bs;_.tI=36;function wp(b,a){b.a=a;return b}
function yp(d,c){var a,b,e;if(c!=null&&nf(c.tI,9)){a=of(c,9);b=a.o();if(nq(d.a,b)){e=qq(d.a,b);return ss(a.p(),e)}}return false}
function zp(a){return yp(this,a)}
function Ap(){return sp(new rp(),this.a)}
function Bp(){return this.a.d}
function qp(){}
_=qp.prototype=new Er();_.k=zp;_.r=Ap;_.z=Bp;_.tI=37;_.a=null;function sp(c,b){var a;c.b=b;a=ds(new cs());if(c.b.c){fs(a,Dp(new Cp(),c.b))}kq(c.b,a);jq(c.b,a);c.a=Bq(new zq(),a);return c}
function up(){return Dq(this.a)}
function vp(){return of(Eq(this.a),9)}
function rp(){}
_=rp.prototype=new ho();_.q=up;_.s=vp;_.tI=0;_.a=null;_.b=null;function yr(b){var a;if(b!=null&&nf(b.tI,9)){a=of(b,9);if(mt(this.o(),a.o())&&mt(this.p(),a.p())){return true}}return false}
function zr(){var a,b;a=0;b=0;if(this.o()!=null){a=hd(this.o())}if(this.p()!=null){b=hd(this.p())}return a^b}
function wr(){}
_=wr.prototype=new ho();_.eQ=yr;_.hC=zr;_.tI=38;function Dp(b,a){b.a=a;return b}
function Fp(){return null}
function aq(){return this.a.b}
function bq(a){return uq(this.a,a)}
function Cp(){}
_=Cp.prototype=new wr();_.o=Fp;_.p=aq;_.y=bq;_.tI=39;_.a=null;function dq(c,a,b){c.b=b;c.a=a;return c}
function fq(){return this.a}
function gq(){return this.b.e[rc+this.a]}
function hq(b,a){return dq(new cq(),a,b)}
function iq(a){return vq(this.b,this.a,a)}
function cq(){}
_=cq.prototype=new wr();_.o=fq;_.p=gq;_.y=iq;_.tI=40;_.a=null;_.b=null;function cr(a){es(this,this.z(),a);return true}
function dr(a,b){if(a<0||a>=b){gr(a,b)}}
function er(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&nf(e.tI,10))){return false}f=of(e,10);if(this.z()!=f.b){return false}c=Bq(new zq(),this);d=Bq(new zq(),f);while(c.a<c.b.b){a=Eq(c);b=Eq(d);if(!(a==null?b==null:fd(a,b))){return false}}return true}
function fr(){var a,b,c;b=1;a=Bq(new zq(),this);while(a.a<a.b.b){c=Eq(a);b=31*b+(c==null?0:hd(c));b=~~b}return b}
function gr(a,b){throw eo(new co(),sc+a+tc+b)}
function hr(){return Bq(new zq(),this)}
function yq(){}
_=yq.prototype=new kp();_.j=cr;_.eQ=er;_.hC=fr;_.r=hr;_.tI=0;function Bq(b,a){b.b=a;return b}
function Dq(a){return a.a<a.b.b}
function Eq(a){if(a.a>=a.b.b){throw new gt()}return hs(a.b,a.a++)}
function Fq(){return this.a<this.b.b}
function ar(){return Eq(this)}
function zq(){}
_=zq.prototype=new ho();_.q=Fq;_.s=ar;_.tI=0;_.a=0;_.b=null;function qr(b,a,c){b.a=a;b.b=c;return b}
function tr(a){return nq(this.a,a)}
function ur(){var a;return a=sp(new rp(),this.b.a),lr(new kr(),a)}
function vr(){return this.b.a.d}
function jr(){}
_=jr.prototype=new Er();_.k=tr;_.r=ur;_.z=vr;_.tI=41;_.a=null;_.b=null;function lr(a,b){a.a=b;return a}
function or(){return Dq(this.a.a)}
function pr(){var a;return a=of(Eq(this.a.a),9),a.o()}
function kr(){}
_=kr.prototype=new ho();_.q=or;_.s=pr;_.tI=0;_.a=null;function ds(a){a.a=df(Ff,0,0,0,0);a.b=0;return a}
function fs(b,a){gf(b.a,b.b++,a);return true}
function es(c,a,b){if(a<0||a>c.b){gr(a,c.b)}c.a.splice(a,0,b);++c.b}
function hs(b,a){dr(a,b.b);return b.a[a]}
function is(c,b,a){for(;a<c.b;++a){if(mt(b,c.a[a])){return a}}return -1}
function js(a){return gf(this.a,this.b++,a),true}
function ks(a){return is(this,a,0)!=-1}
function ls(){return this.b}
function cs(){}
_=cs.prototype=new yq();_.j=js;_.k=ks;_.z=ls;_.tI=42;_.a=null;_.b=0;function qs(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function ss(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fd(a,b)}
function ps(){}
_=ps.prototype=new pp();_.tI=43;function us(a){a.a=qs(new ps());return a}
function vs(c,a){var b;b=wq(c.a,a,c);return b==null}
function xs(b){var a;return a=wq(this.a,b,this),a==null}
function ys(a){return nq(this.a,a)}
function zs(){var a;return a=sp(new rp(),Br(this.a).b.a),lr(new kr(),a)}
function As(){return this.a.d}
function ts(){}
_=ts.prototype=new Er();_.j=xs;_.k=ys;_.r=zs;_.z=As;_.tI=44;_.a=null;function Fs(b,a,c){b.a=a;b.b=c;return b}
function bt(){return this.a}
function ct(){return this.b}
function et(b){var a;a=this.b;this.b=b;return a}
function Es(){}
_=Es.prototype=new wr();_.o=bt;_.p=ct;_.y=et;_.tI=45;_.a=null;_.b=null;function gt(){}
_=gt.prototype=new lo();_.tI=46;function mt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fd(a,b)}
function ln(){!!$stats&&$stats({moduleName:$moduleName,subSystem:uc,evtGroup:vc,millis:(new Date()).getTime(),type:wc,className:xc});cn(new bn())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ln()}catch(a){b(d)}else{ln()}}
function nt(){}
var Ef=un(yc,Ac),Ff=un(Bc,Cc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();