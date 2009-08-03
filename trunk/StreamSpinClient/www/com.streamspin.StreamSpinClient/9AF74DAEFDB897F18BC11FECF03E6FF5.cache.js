(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',Dc=', Size: ',Eb='-',qb='0',cc='0px',tc='100%',xc='100px',Ac='30px',Bc=':',Ab='DIV',w='DOMMouseScroll',Cc='Index: ',pc='Item four',lc='Item one',rc='Item six',qc='Item that has a long title and is number five',nc='Item tree',mc='Item two',gd='Object;',yc='Status: <b>Online<\/b>',vc='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',dd='Widget;',cd='[Lcom.google.gwt.user.client.ui.',fd='[Ljava.lang.',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',bd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',vb='gwt-Image',hb='gwt-Label',xb='gwt-ListBox',Db='gwt-MenuBar',hc='gwt-TextArea',wc='height',ec='hideFocus',ac='horizontal',jc='images/daisy.gif',wb='img',dc='keydown',oc='keypress',zc='keyup',B='left',ed='load',n='losecapture',Cb='menubar',mb='middle',Fc='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',ad='onModuleLoadStart',zb='option',bc='outline',E='position',kb='right',Bb='role',t='scroll',l='select',ic='someTest',Ec='startup',bb='submit',eb='table',fb='tbody',sb='td',gc='textarea',kc='title of Main Window',D='top',ob='tr',fc='true',db='type',uc='value',Fb='vertical',ub='verticalAlign',sc='width';var _;function ep(a){return this===(a==null?null:a)}
function fp(){return this.$H||(this.$H=++xd)}
function cp(){}
_=cp.prototype={};_.eQ=ep;_.hC=fp;_.tM=iu;_.tI=1;function od(b,a){return b.tM==iu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function qd(a){return a.tM==iu||a.tI==2?a.hC():a.$H||(a.$H=++xd)}
var xd=0;function Fd(){Fd=iu;Bd();new zd()}
function be(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function ce(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function he(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function yd(){}
_=yd.prototype=new cp();_.tI=0;function Dd(){Dd=iu;Fd()}
function Cd(){}
_=Cd.prototype=new yd();_.tI=0;function Bd(){Bd=iu;Dd()}
function zd(){}
_=zd.prototype=new Cd();_.tI=0;function kf(){}
_=kf.prototype=new cp();_.tI=0;function rf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function sf(a,f,c,b,e){var d;d=rf(e,b);tf(a,f,c,d);return d}
function tf(b,d,c,a){if(!uf){uf=new nf()}xf(a,uf);a.tI=d;a.qI=c;return a}
function vf(a,b,c){if(c!=null){if(a.qI>0&&!Af(c.tI,a.qI)){throw new jo()}if(a.qI<0&&(c.tM==iu||c.tI==2)){throw new jo()}}return a[b]=c}
function xf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function nf(){}
_=nf.prototype=new cp();_.tI=0;_.length=0;_.qI=0;var uf=null;function Bf(b,a){return b&&!!jg[b][a]}
function Af(b,a){return b&&jg[b][a]}
function Cf(b,a){if(b!=null&&!Af(b.tI,a)){throw new no()}return b}
function ig(a){if(a!=null){throw new no()}return a}
var jg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Eg(b,a,c){var d;if(a==dh){if(ci(b)==8192){dh=null}}d=Dg;Dg=b;try{c.u(b)}finally{Dg=d}}
function fh(a,b){ei();a.__eventBits=b;a.onclick=b&1?Eh:null;a.ondblclick=b&2?Eh:null;a.onmousedown=b&4?Eh:null;a.onmouseup=b&8?Eh:null;a.onmouseover=b&16?Eh:null;a.onmouseout=b&32?Eh:null;a.onmousemove=b&64?Eh:null;a.onkeydown=b&128?Eh:null;a.onkeypress=b&256?Eh:null;a.onkeyup=b&512?Eh:null;a.onchange=b&1024?Eh:null;a.onfocus=b&2048?Eh:null;a.onblur=b&4096?Eh:null;a.onlosecapture=b&8192?Eh:null;a.onscroll=b&16384?Eh:null;a.onload=b&32768?Eh:null;a.onerror=b&65536?Eh:null;a.onmousewheel=b&131072?Eh:null;a.oncontextmenu=b&262144?Eh:null}
var Dg=null,dh=null;function kh(a){ph();if(!lh){lh=Es(new Ds())}at(lh,a)}
function mh(){var a;if(lh){for(a=wr(new ur(),lh);a.a<a.b.b;){Cf(zr(a),3);wl()}}}
function nh(){var a,b;b=null;if(lh){for(a=wr(new ur(),lh);a.a<a.b.b;){Cf(zr(a),3);b=null}}return b}
function ph(){if(!oh){oh=true;ki()}}
var lh=null,oh=false;function ci(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function ei(){if(!gi){Ah();gi=true}}
function hi(a){return a!=null&&Bf(a.tI,4)&&!(a!=null&&(a.tM!=iu&&a.tI!=2))}
var gi=false;function Ah(){Dh=function(b){if(Ch(b)){var a=Bh;if(a&&a.__listener){if(hi(a.__listener)){Eg(b,a,a.__listener);b.stopPropagation()}}}};Ch=function(a){return true};Eh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(hi(c)){Eg(b,a,c)}}};$wnd.addEventListener(cb,Dh,true);$wnd.addEventListener(nb,Dh,true);$wnd.addEventListener(o,Dh,true);$wnd.addEventListener(s,Dh,true);$wnd.addEventListener(p,Dh,true);$wnd.addEventListener(r,Dh,true);$wnd.addEventListener(q,Dh,true);$wnd.addEventListener(v,Dh,true);$wnd.addEventListener(dc,Ch,true);$wnd.addEventListener(zc,Ch,true);$wnd.addEventListener(oc,Ch,true)}
var Bh=null,Ch=null,Dh=null,Eh=null;function ki(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=nh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{mh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function lm(b,a){tm(b.i,a,true)}
function nm(b,a){if(b.i){om(b.i,a)}b.i=a}
function om(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function sm(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(Ep(32));if(c>=0){return b.substr(0,c-0)}return b}
function tm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new gp()}j=Ap(j);if(j.length==0){throw new yo()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=Ap(i.substr(0,e-0));d=Ap(yp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function km(){}
_=km.prototype=new cp();_.tI=7;_.i=null;function nn(a){if(a.g){throw new Bo()}a.g=true;a.i.__listener=a;a.m();a.w()}
function on(a){if(!a.g){throw new Bo()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function pn(a){if(a.h){a.h.y(a)}else if(a.h){throw new Bo()}}
function qn(b,a){if(b.g){b.i.__listener=null}nm(b,a);if(b.g){b.i.__listener=b}}
function rn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new Bo()}c.h=b;if(b.g){nn(c)}}}
function sn(){}
function tn(){}
function un(a){}
function vn(){on(this)}
function wn(){}
function xn(){}
function Bm(){}
_=Bm.prototype=new km();_.m=sn;_.n=tn;_.u=un;_.v=vn;_.w=wn;_.x=xn;_.tI=8;_.g=false;_.h=null;function jl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=bn(b);nn(a)}}
function kl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=bn(b);a.v()}}
function ll(){}
function ml(){}
function hl(){}
_=hl.prototype=new Bm();_.m=jl;_.n=kl;_.w=ll;_.x=ml;_.tI=9;function Ei(c,a,b){pn(a);fn(c.f,a);b.appendChild(a.i);rn(a,c)}
function aj(b,c){var a;if(c.h!=b){return false}rn(c,null);a=c.i;ce((Fd(),a)).removeChild(a);ln(b.f,c);return true}
function bj(){return Fm(new Dm(),this.f)}
function cj(a){return aj(this,a)}
function Ci(){}
_=Ci.prototype=new hl();_.s=bj;_.y=cj;_.tI=10;function mi(a,b){Ei(a,b,a.i)}
function oi(b,c){var a;a=aj(b,c);if(a){pi(c.i)}return a}
function pi(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function qi(a){return oi(this,a)}
function li(){}
_=li.prototype=new Ci();_.y=qi;_.tI=11;function ej(b,a){b.i=a;b.i.tabIndex=0;return b}
function gj(a){ci(a)}
function dj(){}
_=dj.prototype=new Bm();_.u=gj;_.tI=12;function ti(b,a){b.i=a;b.i.tabIndex=0;return b}
function si(){}
_=si.prototype=new dj();_.tI=13;function wi(b,a){ti(b,$doc.createElement((Fd(),F)));yi(b.i);b.i[z]=ab;b.i.innerHTML=a||C;return b}
function yi(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function ri(){}
_=ri.prototype=new si();_.tI=14;function Ai(a){a.f=en(new Cm());a.e=$doc.createElement((Fd(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function zi(){}
_=zi.prototype=new Ci();_.tI=15;_.d=null;_.e=null;function qk(a){a.i=$doc.createElement((Fd(),gb));a.i[z]=hb;return a}
function tk(a){ci(a)}
function pk(){}
_=pk.prototype=new Bm();_.u=tk;_.tI=16;function ij(a){a.i=$doc.createElement((Fd(),gb));a.i[z]=ib;return a}
function hj(){}
_=hj.prototype=new pk();_.tI=17;function rj(){rj=iu;pj(new oj(),jb);tj=pj(new oj(),B);pj(new oj(),kb);sj=tj}
var sj,tj;function pj(b,a){b.a=a;return b}
function oj(){}
_=oj.prototype=new cp();_.tI=0;_.a=null;function zj(){zj=iu;xj(new wj(),lb);xj(new wj(),mb);Aj=xj(new wj(),D)}
var Aj;function xj(a,b){a.a=b;return a}
function wj(){}
_=wj.prototype=new cp();_.tI=0;_.a=null;function Fj(a){Ai(a);a.a=(rj(),sj);a.c=(zj(),Aj);a.b=$doc.createElement((Fd(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function ak(c,d){var b,a;b=(a=$doc.createElement((Fd(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);pn(d);fn(c.f,d);b.appendChild(d.i);rn(d,c)}
function dk(c){var a,b;b=ce((Fd(),c.i));a=aj(this,c);if(a){this.b.removeChild(b)}return a}
function Dj(){}
_=Dj.prototype=new zi();_.y=dk;_.tI=18;_.b=null;function mk(){mk=iu;gr(new kt())}
function lk(a,b){mk();ik(new hk(),a,b);a.i[z]=vb;return a}
function nk(a){ci(a)}
function ek(){}
_=ek.prototype=new Bm();_.u=nk;_.tI=19;function fk(){}
_=fk.prototype=new cp();_.tI=0;function ik(b,a,c){qn(a,$doc.createElement((Fd(),wb)));fh(a.i,229501|(a.i.__eventBits||0));a.i.src=c;return b}
function hk(){}
_=hk.prototype=new fk();_.tI=0;function vk(a){ej(a,be((Fd(),false)));a.i[z]=xb;return a}
function yk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((Fd(),zb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function Ak(a){if(ci(a)==1024){}else{ci(a)}}
function uk(){}
_=uk.prototype=new dj();_.u=Ak;_.tI=20;function Ek(a){Es(new Ds());a.b=Es(new Ds());bl(a,false,(el(),new cl()));return a}
function al(d,a){var b,c;for(c=wr(new ur(),d.b);c.a<c.b.b;){b=ig(zr(c));if((Fd(),null.C()).contains(a)){return b}}return null}
function bl(d,f){var b,c,e,a;c=$doc.createElement((Fd(),eb));d.a=$doc.createElement(fb);c.appendChild(d.a);if(!f){e=$doc.createElement(ob);d.a.appendChild(e)}b=(a=$doc.createElement(Ab),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Bb,Cb);fh(d.i,2225|(d.i.__eventBits||0));d.i[z]=Db;if(f){lm(d,sm(d.i)+Eb+Fb)}else{lm(d,sm(d.i)+Eb+ac)}d.i.style[bc]=cc;d.i.setAttribute(ec,fc)}
function fl(a){var b;al(this,a.target);switch(ci(a)){case 1:{this.i.focus();break}{break}case 2048:{ig(ct(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{ig(ct(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{ig(ct(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:ig(ct(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:ig(ct(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{ig(ct(this.b,0))}}break}}}
function gl(){on(this)}
function Bk(){}
_=Bk.prototype=new Bm();_.u=fl;_.v=gl;_.tI=21;_.a=null;function el(){el=iu}
function cl(){}
_=cl.prototype=new cp();_.tI=0;function vl(){vl=iu;zl=lt(new kt());Al=pt(new ot())}
function ul(b,a){vl();b.f=en(new Cm());b.i=a;nn(b);return b}
function wl(){var b,a;vl();var c,d;for(d=(b=nq(new mq(),ws(Al.a).b.a),gs(new fs(),b));yr(d.a.a);){c=Cf((a=Cf(zr(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function yl(a){vl();var b;b=Cf(lr(zl,a),5);if(b){return b}if(zl.d==0){kh(new pl())}b=sl(new rl());rr(zl,a,b);qt(Al,b);return b}
function ol(){}
_=ol.prototype=new li();_.tI=22;var zl,Al;function pl(){}
_=pl.prototype=new cp();_.tI=23;function tl(){tl=iu;vl()}
function sl(a){tl();ul(a,$doc.body);return a}
function rl(){}
_=rl.prototype=new ol();_.tI=24;function gm(b,a){b.i=a;b.i.tabIndex=0;return b}
function jm(a){var b;b=ci(a);if((b&896)!=0){ci(a)}else if(b==1024){}else{ci(a)}}
function fm(){}
_=fm.prototype=new dj();_.u=jm;_.tI=25;function dm(a){gm(a,$doc.createElement((Fd(),gc)));a.i[z]=hc;return a}
function cm(){}
_=cm.prototype=new fm();_.tI=26;function wm(a){Ai(a);a.a=(rj(),sj);a.b=(zj(),Aj);a.e[pb]=qb;a.e[rb]=qb;return a}
function xm(c,e){var b,d,a;d=$doc.createElement((Fd(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);pn(e);fn(c.f,e);b.appendChild(e.i);rn(e,c)}
function Am(c){var a,b;b=ce((Fd(),c.i));a=aj(this,c);if(a){this.d.removeChild(ce(b))}return a}
function um(){}
_=um.prototype=new zi();_.y=Am;_.tI=27;function en(a){a.a=sf(mg,0,6,4,0);return a}
function fn(a,b){jn(a,b,a.b)}
function hn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function jn(d,e,a){var b,c;if(a<0||a>d.b){throw new Eo()}if(d.b==d.a.length){c=sf(mg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){vf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){vf(d.a,b,d.a[b-1])}vf(d.a,a,e)}
function kn(c,b){var a;if(b<0||b>=c.b){throw new Eo()}--c.b;for(a=b;a<c.b;++a){vf(c.a,a,c.a[a+1])}vf(c.a,c.b,null)}
function ln(b,c){var a;a=hn(b,c);if(a==-1){throw new bu()}kn(b,a)}
function Cm(){}
_=Cm.prototype=new cp();_.tI=0;_.a=null;_.b=0;function Fm(b,a){b.b=a;return b}
function bn(a){if(a.a>=a.b.b){throw new bu()}return a.b.a[++a.a]}
function cn(){return this.a<this.b.b-1}
function dn(){return bn(this)}
function Dm(){}
_=Dm.prototype=new cp();_.r=cn;_.t=dn;_.tI=0;_.a=-1;_.b=null;function Dn(){}
_=Dn.prototype=new kf();_.tI=0;function Fn(a){a.d=wm(new um());a.c=Fj(new Dj());a.h=wm(new um());a.g=vk(new uk());a.a=dm(new cm());a.e=Ek(new Bk());a.b=wi(new ri(),ic);a.f=qk(new pk());a.j=ij(new hj());a.i=lk(new ek(),$moduleBase+jc);he((Fd(),a.j.i),kc);yk(a.g,lc,lc,-1);yk(a.g,mc,mc,-1);yk(a.g,nc,nc,-1);yk(a.g,pc,pc,-1);yk(a.g,qc,qc,-1);yk(a.g,rc,rc,-1);a.g.i.size=3;a.g.i.style[sc]=tc;a.a.i[uc]=vc!=null?vc:C;a.a.i.style[sc]=tc;xm(a.h,a.g);xm(a.h,a.a);a.h.i.style[wc]=xc;a.h.i.style[sc]=tc;a.f.i.innerHTML=yc;ak(a.c,a.b);ak(a.c,a.e);a.i.i.style[wc]=Ac;xm(a.d,a.j);xm(a.d,a.h);xm(a.d,a.i);xm(a.d,a.f);xm(a.d,a.c);a.d.i.style[wc]=tc;a.d.i.style[sc]=tc;mi((vl(),yl(null)),a.d);return a}
function En(){}
_=En.prototype=new Dn();_.tI=0;function aq(){}
_=aq.prototype=new cp();_.tI=3;function wo(){}
_=wo.prototype=new aq();_.tI=4;function gp(){}
_=gp.prototype=new wo();_.tI=5;function jo(){}
_=jo.prototype=new gp();_.tI=29;function qo(c,a){var b;b=new mo();return b}
function mo(){}
_=mo.prototype=new cp();_.tI=0;function no(){}
_=no.prototype=new gp();_.tI=32;function yo(){}
_=yo.prototype=new gp();_.tI=33;function Bo(){}
_=Bo.prototype=new gp();_.tI=34;function Fo(b,a){return b}
function Eo(){}
_=Eo.prototype=new gp();_.tI=35;function up(b,a){if(!(a!=null&&Bf(a.tI,1))){return false}return String(b)==a}
function yp(b,a){return b.substr(a,b.length-a)}
function Ap(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function Cp(a){return up(this,a)}
function Ep(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Fp(){return qp(this)}
_=String.prototype;_.eQ=Cp;_.hC=Fp;_.tI=2;function lp(){lp=iu;mp={};pp={}}
function np(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function qp(c){lp();var a=Bc+c;var b=pp[a];if(b!=null){return b}b=mp[a];if(b==null){b=np(c)}rp();return pp[a]=b}
function rp(){if(op==256){mp=pp;pp={};op=0}++op}
var mp,op=0,pp;function cq(){}
_=cq.prototype=new gp();_.tI=36;function gq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:od(b,c)){return a}}return null}
function iq(a){throw new cq()}
function jq(b){var a;a=gq(this.s(),b);return !!a}
function fq(){}
_=fq.prototype=new cp();_.k=iq;_.l=jq;_.tI=0;function ws(b){var a;a=rq(new lq(),b);return ls(new es(),b,a)}
function xs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Bf(c.tI,11))){return false}e=Cf(c,11);if(Cf(this,11).d!=e.d){return false}for(b=nq(new mq(),rq(new lq(),e).a);yr(b.a);){a=Cf(zr(b.a),9);d=a.p();f=a.q();if(!(d==null?Cf(this,11).c:d!=null&&Bf(d.tI,1)?nr(Cf(this,11),Cf(d,1)):mr(Cf(this,11),d,~~qd(d)))){return false}if(!hu(f,d==null?Cf(this,11).b:d!=null&&Bf(d.tI,1)?Cf(this,11).e[Bc+Cf(d,1)]:jr(Cf(this,11),d,~~qd(d)))){return false}}return true}
function ys(){var a,b,c;c=0;for(b=nq(new mq(),rq(new lq(),Cf(this,11)).a);yr(b.a);){a=Cf(zr(b.a),9);c+=a.hC();c=~~c}return c}
function ds(){}
_=ds.prototype=new cp();_.eQ=xs;_.hC=ys;_.tI=0;function er(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function fr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=cr(e,c.substring(1));a.k(b)}}}
function gr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function ir(b,a){return a==null?b.c:a!=null&&Bf(a.tI,1)?nr(b,Cf(a,1)):mr(b,a,~~qd(a))}
function lr(b,a){return a==null?b.b:a!=null&&Bf(a.tI,1)?b.e[Bc+Cf(a,1)]:jr(b,a,~~qd(a))}
function jr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function mr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function nr(b,a){return Bc+a in b.e}
function rr(b,a,c){return a==null?pr(b,c):a!=null&&Bf(a.tI,1)?qr(b,Cf(a,1),c):or(b,a,c,~~qd(a))}
function or(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.z(j);return h}}}else{a=i.a[e]=[]}var c=At(new zt(),g,j);a.push(c);++i.d;return null}
function pr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function qr(d,a,e){var b,c=d.e;a=Bc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function sr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function kq(){}
_=kq.prototype=new ds();_.o=sr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Bs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Bf(b.tI,12))){return false}c=Cf(b,12);if(c.A()!=this.A()){return false}for(a=c.s();a.r();){d=a.t();if(!this.l(d)){return false}}return true}
function Cs(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=qd(c);a=~~a}}return a}
function zs(){}
_=zs.prototype=new fq();_.eQ=Bs;_.hC=Cs;_.tI=37;function rq(b,a){b.a=a;return b}
function tq(d,c){var a,b,e;if(c!=null&&Bf(c.tI,9)){a=Cf(c,9);b=a.p();if(ir(d.a,b)){e=lr(d.a,b);return nt(a.q(),e)}}return false}
function uq(a){return tq(this,a)}
function vq(){return nq(new mq(),this.a)}
function wq(){return this.a.d}
function lq(){}
_=lq.prototype=new zs();_.l=uq;_.s=vq;_.A=wq;_.tI=38;_.a=null;function nq(c,b){var a;c.b=b;a=Es(new Ds());if(c.b.c){at(a,yq(new xq(),c.b))}fr(c.b,a);er(c.b,a);c.a=wr(new ur(),a);return c}
function pq(){return yr(this.a)}
function qq(){return Cf(zr(this.a),9)}
function mq(){}
_=mq.prototype=new cp();_.r=pq;_.t=qq;_.tI=0;_.a=null;_.b=null;function ts(b){var a;if(b!=null&&Bf(b.tI,9)){a=Cf(b,9);if(hu(this.p(),a.p())&&hu(this.q(),a.q())){return true}}return false}
function us(){var a,b;a=0;b=0;if(this.p()!=null){a=qd(this.p())}if(this.q()!=null){b=qd(this.q())}return a^b}
function rs(){}
_=rs.prototype=new cp();_.eQ=ts;_.hC=us;_.tI=39;function yq(b,a){b.a=a;return b}
function Aq(){return null}
function Bq(){return this.a.b}
function Cq(a){return pr(this.a,a)}
function xq(){}
_=xq.prototype=new rs();_.p=Aq;_.q=Bq;_.z=Cq;_.tI=40;_.a=null;function Eq(c,a,b){c.b=b;c.a=a;return c}
function ar(){return this.a}
function br(){return this.b.e[Bc+this.a]}
function cr(b,a){return Eq(new Dq(),a,b)}
function dr(a){return qr(this.b,this.a,a)}
function Dq(){}
_=Dq.prototype=new rs();_.p=ar;_.q=br;_.z=dr;_.tI=41;_.a=null;_.b=null;function Dr(a){Fs(this,this.A(),a);return true}
function Er(a,b){if(a<0||a>=b){bs(a,b)}}
function Fr(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Bf(e.tI,10))){return false}f=Cf(e,10);if(this.A()!=f.b){return false}c=wr(new ur(),this);d=wr(new ur(),f);while(c.a<c.b.b){a=zr(c);b=zr(d);if(!(a==null?b==null:od(a,b))){return false}}return true}
function as(){var a,b,c;b=1;a=wr(new ur(),this);while(a.a<a.b.b){c=zr(a);b=31*b+(c==null?0:qd(c));b=~~b}return b}
function bs(a,b){throw Fo(new Eo(),Cc+a+Dc+b)}
function cs(){return wr(new ur(),this)}
function tr(){}
_=tr.prototype=new fq();_.k=Dr;_.eQ=Fr;_.hC=as;_.s=cs;_.tI=0;function wr(b,a){b.b=a;return b}
function yr(a){return a.a<a.b.b}
function zr(a){if(a.a>=a.b.b){throw new bu()}return ct(a.b,a.a++)}
function Ar(){return this.a<this.b.b}
function Br(){return zr(this)}
function ur(){}
_=ur.prototype=new cp();_.r=Ar;_.t=Br;_.tI=0;_.a=0;_.b=null;function ls(b,a,c){b.a=a;b.b=c;return b}
function os(a){return ir(this.a,a)}
function ps(){var a;return a=nq(new mq(),this.b.a),gs(new fs(),a)}
function qs(){return this.b.a.d}
function es(){}
_=es.prototype=new zs();_.l=os;_.s=ps;_.A=qs;_.tI=42;_.a=null;_.b=null;function gs(a,b){a.a=b;return a}
function js(){return yr(this.a.a)}
function ks(){var a;return a=Cf(zr(this.a.a),9),a.p()}
function fs(){}
_=fs.prototype=new cp();_.r=js;_.t=ks;_.tI=0;_.a=null;function Es(a){a.a=sf(ng,0,0,0,0);a.b=0;return a}
function at(b,a){vf(b.a,b.b++,a);return true}
function Fs(c,a,b){if(a<0||a>c.b){bs(a,c.b)}c.a.splice(a,0,b);++c.b}
function ct(b,a){Er(a,b.b);return b.a[a]}
function dt(c,b,a){for(;a<c.b;++a){if(hu(b,c.a[a])){return a}}return -1}
function et(a){return vf(this.a,this.b++,a),true}
function ft(a){return dt(this,a,0)!=-1}
function gt(){return this.b}
function Ds(){}
_=Ds.prototype=new tr();_.k=et;_.l=ft;_.A=gt;_.tI=43;_.a=null;_.b=0;function lt(a){gr(a);return a}
function nt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function kt(){}
_=kt.prototype=new kq();_.tI=44;function pt(a){a.a=lt(new kt());return a}
function qt(c,a){var b;b=rr(c.a,a,c);return b==null}
function st(b){var a;return a=rr(this.a,b,this),a==null}
function tt(a){return ir(this.a,a)}
function ut(){var a;return a=nq(new mq(),ws(this.a).b.a),gs(new fs(),a)}
function vt(){return this.a.d}
function ot(){}
_=ot.prototype=new zs();_.k=st;_.l=tt;_.s=ut;_.A=vt;_.tI=45;_.a=null;function At(b,a,c){b.a=a;b.b=c;return b}
function Ct(){return this.a}
function Dt(){return this.b}
function Ft(b){var a;a=this.b;this.b=b;return a}
function zt(){}
_=zt.prototype=new rs();_.p=Ct;_.q=Dt;_.z=Ft;_.tI=46;_.a=null;_.b=null;function bu(){}
_=bu.prototype=new gp();_.tI=47;function hu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function ho(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Ec,evtGroup:Fc,millis:(new Date()).getTime(),type:ad,className:bd});Fn(new En())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ho()}catch(a){b(d)}else{ho()}}
function iu(){}
var mg=qo(cd,dd),ng=qo(fd,gd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();