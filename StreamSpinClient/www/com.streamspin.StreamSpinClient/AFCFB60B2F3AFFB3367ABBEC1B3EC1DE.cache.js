(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',Cc=', Size: ',Eb='-',qb='0',cc='0px',tc='100%',xc='100px',Ac=':',Ab='DIV',w='DOMMouseScroll',Bc='Index: ',pc='Item four',lc='Item one',rc='Item six',qc='Item that has a long title and is number five',nc='Item tree',mc='Item two',fd='Object;',yc='Status: <b>Online<\/b>',vc='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',cd='Widget;',bd='[Lcom.google.gwt.user.client.ui.',dd='[Ljava.lang.',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',ad='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',vb='gwt-Image',hb='gwt-Label',xb='gwt-ListBox',Db='gwt-MenuBar',hc='gwt-TextArea',wc='height',ec='hideFocus',ac='horizontal',jc='images/daisy.tif',wb='img',dc='keydown',oc='keypress',zc='keyup',B='left',ed='load',n='losecapture',Cb='menubar',mb='middle',Ec='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',Fc='onModuleLoadStart',zb='option',bc='outline',E='position',kb='right',Bb='role',t='scroll',l='select',ic='someTest',Dc='startup',bb='submit',eb='table',fb='tbody',sb='td',gc='textarea',kc='title of Main Window',D='top',ob='tr',fc='true',db='type',uc='value',Fb='vertical',ub='verticalAlign',sc='width';var _;function dp(a){return this===(a==null?null:a)}
function ep(){return this.$H||(this.$H=++wd)}
function bp(){}
_=bp.prototype={};_.eQ=dp;_.hC=ep;_.tM=hu;_.tI=1;function nd(b,a){return b.tM==hu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function pd(a){return a.tM==hu||a.tI==2?a.hC():a.$H||(a.$H=++wd)}
var wd=0;function Ed(){Ed=hu;Ad();new yd()}
function ae(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function be(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ge(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function xd(){}
_=xd.prototype=new bp();_.tI=0;function Cd(){Cd=hu;Ed()}
function Bd(){}
_=Bd.prototype=new xd();_.tI=0;function Ad(){Ad=hu;Cd()}
function yd(){}
_=yd.prototype=new Bd();_.tI=0;function jf(){}
_=jf.prototype=new bp();_.tI=0;function qf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function rf(a,f,c,b,e){var d;d=qf(e,b);sf(a,f,c,d);return d}
function sf(b,d,c,a){if(!tf){tf=new mf()}wf(a,tf);a.tI=d;a.qI=c;return a}
function uf(a,b,c){if(c!=null){if(a.qI>0&&!zf(c.tI,a.qI)){throw new io()}if(a.qI<0&&(c.tM==hu||c.tI==2)){throw new io()}}return a[b]=c}
function wf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function mf(){}
_=mf.prototype=new bp();_.tI=0;_.length=0;_.qI=0;var tf=null;function Af(b,a){return b&&!!ig[b][a]}
function zf(b,a){return b&&ig[b][a]}
function Bf(b,a){if(b!=null&&!zf(b.tI,a)){throw new mo()}return b}
function hg(a){if(a!=null){throw new mo()}return a}
var ig=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Dg(b,a,c){var d;if(a==ch){if(bi(b)==8192){ch=null}}d=Cg;Cg=b;try{c.u(b)}finally{Cg=d}}
function eh(a,b){di();a.__eventBits=b;a.onclick=b&1?Dh:null;a.ondblclick=b&2?Dh:null;a.onmousedown=b&4?Dh:null;a.onmouseup=b&8?Dh:null;a.onmouseover=b&16?Dh:null;a.onmouseout=b&32?Dh:null;a.onmousemove=b&64?Dh:null;a.onkeydown=b&128?Dh:null;a.onkeypress=b&256?Dh:null;a.onkeyup=b&512?Dh:null;a.onchange=b&1024?Dh:null;a.onfocus=b&2048?Dh:null;a.onblur=b&4096?Dh:null;a.onlosecapture=b&8192?Dh:null;a.onscroll=b&16384?Dh:null;a.onload=b&32768?Dh:null;a.onerror=b&65536?Dh:null;a.onmousewheel=b&131072?Dh:null;a.oncontextmenu=b&262144?Dh:null}
var Cg=null,ch=null;function jh(a){oh();if(!kh){kh=Ds(new Cs())}Fs(kh,a)}
function lh(){var a;if(kh){for(a=vr(new tr(),kh);a.a<a.b.b;){Bf(yr(a),3);vl()}}}
function mh(){var a,b;b=null;if(kh){for(a=vr(new tr(),kh);a.a<a.b.b;){Bf(yr(a),3);b=null}}return b}
function oh(){if(!nh){nh=true;ji()}}
var kh=null,nh=false;function bi(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function di(){if(!fi){zh();fi=true}}
function gi(a){return a!=null&&Af(a.tI,4)&&!(a!=null&&(a.tM!=hu&&a.tI!=2))}
var fi=false;function zh(){Ch=function(b){if(Bh(b)){var a=Ah;if(a&&a.__listener){if(gi(a.__listener)){Dg(b,a,a.__listener);b.stopPropagation()}}}};Bh=function(a){return true};Dh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(gi(c)){Dg(b,a,c)}}};$wnd.addEventListener(cb,Ch,true);$wnd.addEventListener(nb,Ch,true);$wnd.addEventListener(o,Ch,true);$wnd.addEventListener(s,Ch,true);$wnd.addEventListener(p,Ch,true);$wnd.addEventListener(r,Ch,true);$wnd.addEventListener(q,Ch,true);$wnd.addEventListener(v,Ch,true);$wnd.addEventListener(dc,Bh,true);$wnd.addEventListener(zc,Bh,true);$wnd.addEventListener(oc,Bh,true)}
var Ah=null,Bh=null,Ch=null,Dh=null;function ji(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=mh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{lh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function km(b,a){sm(b.i,a,true)}
function mm(b,a){if(b.i){nm(b.i,a)}b.i=a}
function nm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function rm(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(Dp(32));if(c>=0){return b.substr(0,c-0)}return b}
function sm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new fp()}j=zp(j);if(j.length==0){throw new xo()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=zp(i.substr(0,e-0));d=zp(xp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function jm(){}
_=jm.prototype=new bp();_.tI=7;_.i=null;function mn(a){if(a.g){throw new Ao()}a.g=true;a.i.__listener=a;a.m();a.w()}
function nn(a){if(!a.g){throw new Ao()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function on(a){if(a.h){a.h.y(a)}else if(a.h){throw new Ao()}}
function pn(b,a){if(b.g){b.i.__listener=null}mm(b,a);if(b.g){b.i.__listener=b}}
function qn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new Ao()}c.h=b;if(b.g){mn(c)}}}
function rn(){}
function sn(){}
function tn(a){}
function un(){nn(this)}
function vn(){}
function wn(){}
function Am(){}
_=Am.prototype=new jm();_.m=rn;_.n=sn;_.u=tn;_.v=un;_.w=vn;_.x=wn;_.tI=8;_.g=false;_.h=null;function il(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=an(b);mn(a)}}
function jl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=an(b);a.v()}}
function kl(){}
function ll(){}
function gl(){}
_=gl.prototype=new Am();_.m=il;_.n=jl;_.w=kl;_.x=ll;_.tI=9;function Di(c,a,b){on(a);en(c.f,a);b.appendChild(a.i);qn(a,c)}
function Fi(b,c){var a;if(c.h!=b){return false}qn(c,null);a=c.i;be((Ed(),a)).removeChild(a);kn(b.f,c);return true}
function aj(){return Em(new Cm(),this.f)}
function bj(a){return Fi(this,a)}
function Bi(){}
_=Bi.prototype=new gl();_.s=aj;_.y=bj;_.tI=10;function li(a,b){Di(a,b,a.i)}
function ni(b,c){var a;a=Fi(b,c);if(a){oi(c.i)}return a}
function oi(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function pi(a){return ni(this,a)}
function ki(){}
_=ki.prototype=new Bi();_.y=pi;_.tI=11;function dj(b,a){b.i=a;b.i.tabIndex=0;return b}
function fj(a){bi(a)}
function cj(){}
_=cj.prototype=new Am();_.u=fj;_.tI=12;function si(b,a){b.i=a;b.i.tabIndex=0;return b}
function ri(){}
_=ri.prototype=new cj();_.tI=13;function vi(b,a){si(b,$doc.createElement((Ed(),F)));xi(b.i);b.i[z]=ab;b.i.innerHTML=a||C;return b}
function xi(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function qi(){}
_=qi.prototype=new ri();_.tI=14;function zi(a){a.f=dn(new Bm());a.e=$doc.createElement((Ed(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function yi(){}
_=yi.prototype=new Bi();_.tI=15;_.d=null;_.e=null;function pk(a){a.i=$doc.createElement((Ed(),gb));a.i[z]=hb;return a}
function sk(a){bi(a)}
function ok(){}
_=ok.prototype=new Am();_.u=sk;_.tI=16;function hj(a){a.i=$doc.createElement((Ed(),gb));a.i[z]=ib;return a}
function gj(){}
_=gj.prototype=new ok();_.tI=17;function qj(){qj=hu;oj(new nj(),jb);sj=oj(new nj(),B);oj(new nj(),kb);rj=sj}
var rj,sj;function oj(b,a){b.a=a;return b}
function nj(){}
_=nj.prototype=new bp();_.tI=0;_.a=null;function yj(){yj=hu;wj(new vj(),lb);wj(new vj(),mb);zj=wj(new vj(),D)}
var zj;function wj(a,b){a.a=b;return a}
function vj(){}
_=vj.prototype=new bp();_.tI=0;_.a=null;function Ej(a){zi(a);a.a=(qj(),rj);a.c=(yj(),zj);a.b=$doc.createElement((Ed(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function Fj(c,d){var b,a;b=(a=$doc.createElement((Ed(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);on(d);en(c.f,d);b.appendChild(d.i);qn(d,c)}
function ck(c){var a,b;b=be((Ed(),c.i));a=Fi(this,c);if(a){this.b.removeChild(b)}return a}
function Cj(){}
_=Cj.prototype=new yi();_.y=ck;_.tI=18;_.b=null;function lk(){lk=hu;fr(new jt())}
function kk(a,b){lk();hk(new gk(),a,b);a.i[z]=vb;return a}
function mk(a){bi(a)}
function dk(){}
_=dk.prototype=new Am();_.u=mk;_.tI=19;function ek(){}
_=ek.prototype=new bp();_.tI=0;function hk(b,a,c){pn(a,$doc.createElement((Ed(),wb)));eh(a.i,229501|(a.i.__eventBits||0));a.i.src=c;return b}
function gk(){}
_=gk.prototype=new ek();_.tI=0;function uk(a){dj(a,ae((Ed(),false)));a.i[z]=xb;return a}
function xk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((Ed(),zb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function zk(a){if(bi(a)==1024){}else{bi(a)}}
function tk(){}
_=tk.prototype=new cj();_.u=zk;_.tI=20;function Dk(a){Ds(new Cs());a.b=Ds(new Cs());al(a,false,(dl(),new bl()));return a}
function Fk(d,a){var b,c;for(c=vr(new tr(),d.b);c.a<c.b.b;){b=hg(yr(c));if((Ed(),null.C()).contains(a)){return b}}return null}
function al(d,f){var b,c,e,a;c=$doc.createElement((Ed(),eb));d.a=$doc.createElement(fb);c.appendChild(d.a);if(!f){e=$doc.createElement(ob);d.a.appendChild(e)}b=(a=$doc.createElement(Ab),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Bb,Cb);eh(d.i,2225|(d.i.__eventBits||0));d.i[z]=Db;if(f){km(d,rm(d.i)+Eb+Fb)}else{km(d,rm(d.i)+Eb+ac)}d.i.style[bc]=cc;d.i.setAttribute(ec,fc)}
function el(a){var b;Fk(this,a.target);switch(bi(a)){case 1:{this.i.focus();break}{break}case 2048:{hg(bt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{hg(bt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{hg(bt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:hg(bt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:hg(bt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{hg(bt(this.b,0))}}break}}}
function fl(){nn(this)}
function Ak(){}
_=Ak.prototype=new Am();_.u=el;_.v=fl;_.tI=21;_.a=null;function dl(){dl=hu}
function bl(){}
_=bl.prototype=new bp();_.tI=0;function ul(){ul=hu;yl=kt(new jt());zl=ot(new nt())}
function tl(b,a){ul();b.f=dn(new Bm());b.i=a;mn(b);return b}
function vl(){var b,a;ul();var c,d;for(d=(b=mq(new lq(),vs(zl.a).b.a),fs(new es(),b));xr(d.a.a);){c=Bf((a=Bf(yr(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function xl(a){ul();var b;b=Bf(kr(yl,a),5);if(b){return b}if(yl.d==0){jh(new ol())}b=rl(new ql());qr(yl,a,b);pt(zl,b);return b}
function nl(){}
_=nl.prototype=new ki();_.tI=22;var yl,zl;function ol(){}
_=ol.prototype=new bp();_.tI=23;function sl(){sl=hu;ul()}
function rl(a){sl();tl(a,$doc.body);return a}
function ql(){}
_=ql.prototype=new nl();_.tI=24;function fm(b,a){b.i=a;b.i.tabIndex=0;return b}
function im(a){var b;b=bi(a);if((b&896)!=0){bi(a)}else if(b==1024){}else{bi(a)}}
function em(){}
_=em.prototype=new cj();_.u=im;_.tI=25;function cm(a){fm(a,$doc.createElement((Ed(),gc)));a.i[z]=hc;return a}
function bm(){}
_=bm.prototype=new em();_.tI=26;function vm(a){zi(a);a.a=(qj(),rj);a.b=(yj(),zj);a.e[pb]=qb;a.e[rb]=qb;return a}
function wm(c,e){var b,d,a;d=$doc.createElement((Ed(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);on(e);en(c.f,e);b.appendChild(e.i);qn(e,c)}
function zm(c){var a,b;b=be((Ed(),c.i));a=Fi(this,c);if(a){this.d.removeChild(be(b))}return a}
function tm(){}
_=tm.prototype=new yi();_.y=zm;_.tI=27;function dn(a){a.a=rf(lg,0,6,4,0);return a}
function en(a,b){hn(a,b,a.b)}
function gn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function hn(d,e,a){var b,c;if(a<0||a>d.b){throw new Do()}if(d.b==d.a.length){c=rf(lg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){uf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){uf(d.a,b,d.a[b-1])}uf(d.a,a,e)}
function jn(c,b){var a;if(b<0||b>=c.b){throw new Do()}--c.b;for(a=b;a<c.b;++a){uf(c.a,a,c.a[a+1])}uf(c.a,c.b,null)}
function kn(b,c){var a;a=gn(b,c);if(a==-1){throw new au()}jn(b,a)}
function Bm(){}
_=Bm.prototype=new bp();_.tI=0;_.a=null;_.b=0;function Em(b,a){b.b=a;return b}
function an(a){if(a.a>=a.b.b){throw new au()}return a.b.a[++a.a]}
function bn(){return this.a<this.b.b-1}
function cn(){return an(this)}
function Cm(){}
_=Cm.prototype=new bp();_.r=bn;_.t=cn;_.tI=0;_.a=-1;_.b=null;function Cn(){}
_=Cn.prototype=new jf();_.tI=0;function En(a){a.d=vm(new tm());a.c=Ej(new Cj());a.h=vm(new tm());a.g=uk(new tk());a.a=cm(new bm());a.e=Dk(new Ak());a.b=vi(new qi(),ic);a.f=pk(new ok());a.j=hj(new gj());a.i=kk(new dk(),$moduleBase+jc);ge((Ed(),a.j.i),kc);xk(a.g,lc,lc,-1);xk(a.g,mc,mc,-1);xk(a.g,nc,nc,-1);xk(a.g,pc,pc,-1);xk(a.g,qc,qc,-1);xk(a.g,rc,rc,-1);a.g.i.size=3;a.g.i.style[sc]=tc;a.a.i[uc]=vc!=null?vc:C;a.a.i.style[sc]=tc;wm(a.h,a.g);wm(a.h,a.a);a.h.i.style[wc]=xc;a.h.i.style[sc]=tc;a.f.i.innerHTML=yc;Fj(a.c,a.b);Fj(a.c,a.e);wm(a.d,a.j);wm(a.d,a.h);wm(a.d,a.i);wm(a.d,a.f);wm(a.d,a.c);a.d.i.style[wc]=tc;a.d.i.style[sc]=tc;li((ul(),xl(null)),a.d);return a}
function Dn(){}
_=Dn.prototype=new Cn();_.tI=0;function Fp(){}
_=Fp.prototype=new bp();_.tI=3;function vo(){}
_=vo.prototype=new Fp();_.tI=4;function fp(){}
_=fp.prototype=new vo();_.tI=5;function io(){}
_=io.prototype=new fp();_.tI=29;function po(c,a){var b;b=new lo();return b}
function lo(){}
_=lo.prototype=new bp();_.tI=0;function mo(){}
_=mo.prototype=new fp();_.tI=32;function xo(){}
_=xo.prototype=new fp();_.tI=33;function Ao(){}
_=Ao.prototype=new fp();_.tI=34;function Eo(b,a){return b}
function Do(){}
_=Do.prototype=new fp();_.tI=35;function tp(b,a){if(!(a!=null&&Af(a.tI,1))){return false}return String(b)==a}
function xp(b,a){return b.substr(a,b.length-a)}
function zp(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function Bp(a){return tp(this,a)}
function Dp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Ep(){return pp(this)}
_=String.prototype;_.eQ=Bp;_.hC=Ep;_.tI=2;function kp(){kp=hu;lp={};op={}}
function mp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function pp(c){kp();var a=Ac+c;var b=op[a];if(b!=null){return b}b=lp[a];if(b==null){b=mp(c)}qp();return op[a]=b}
function qp(){if(np==256){lp=op;op={};np=0}++np}
var lp,np=0,op;function bq(){}
_=bq.prototype=new fp();_.tI=36;function fq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:nd(b,c)){return a}}return null}
function hq(a){throw new bq()}
function iq(b){var a;a=fq(this.s(),b);return !!a}
function eq(){}
_=eq.prototype=new bp();_.k=hq;_.l=iq;_.tI=0;function vs(b){var a;a=qq(new kq(),b);return ks(new ds(),b,a)}
function ws(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Af(c.tI,11))){return false}e=Bf(c,11);if(Bf(this,11).d!=e.d){return false}for(b=mq(new lq(),qq(new kq(),e).a);xr(b.a);){a=Bf(yr(b.a),9);d=a.p();f=a.q();if(!(d==null?Bf(this,11).c:d!=null&&Af(d.tI,1)?mr(Bf(this,11),Bf(d,1)):lr(Bf(this,11),d,~~pd(d)))){return false}if(!gu(f,d==null?Bf(this,11).b:d!=null&&Af(d.tI,1)?Bf(this,11).e[Ac+Bf(d,1)]:ir(Bf(this,11),d,~~pd(d)))){return false}}return true}
function xs(){var a,b,c;c=0;for(b=mq(new lq(),qq(new kq(),Bf(this,11)).a);xr(b.a);){a=Bf(yr(b.a),9);c+=a.hC();c=~~c}return c}
function cs(){}
_=cs.prototype=new bp();_.eQ=ws;_.hC=xs;_.tI=0;function dr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.k(a[f])}}}}
function er(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=br(e,c.substring(1));a.k(b)}}}
function fr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function hr(b,a){return a==null?b.c:a!=null&&Af(a.tI,1)?mr(b,Bf(a,1)):lr(b,a,~~pd(a))}
function kr(b,a){return a==null?b.b:a!=null&&Af(a.tI,1)?b.e[Ac+Bf(a,1)]:ir(b,a,~~pd(a))}
function ir(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function lr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function mr(b,a){return Ac+a in b.e}
function qr(b,a,c){return a==null?or(b,c):a!=null&&Af(a.tI,1)?pr(b,Bf(a,1),c):nr(b,a,c,~~pd(a))}
function nr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.z(j);return h}}}else{a=i.a[e]=[]}var c=zt(new yt(),g,j);a.push(c);++i.d;return null}
function or(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function pr(d,a,e){var b,c=d.e;a=Ac+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function rr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&nd(a,b)}
function jq(){}
_=jq.prototype=new cs();_.o=rr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function As(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Af(b.tI,12))){return false}c=Bf(b,12);if(c.A()!=this.A()){return false}for(a=c.s();a.r();){d=a.t();if(!this.l(d)){return false}}return true}
function Bs(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=pd(c);a=~~a}}return a}
function ys(){}
_=ys.prototype=new eq();_.eQ=As;_.hC=Bs;_.tI=37;function qq(b,a){b.a=a;return b}
function sq(d,c){var a,b,e;if(c!=null&&Af(c.tI,9)){a=Bf(c,9);b=a.p();if(hr(d.a,b)){e=kr(d.a,b);return mt(a.q(),e)}}return false}
function tq(a){return sq(this,a)}
function uq(){return mq(new lq(),this.a)}
function vq(){return this.a.d}
function kq(){}
_=kq.prototype=new ys();_.l=tq;_.s=uq;_.A=vq;_.tI=38;_.a=null;function mq(c,b){var a;c.b=b;a=Ds(new Cs());if(c.b.c){Fs(a,xq(new wq(),c.b))}er(c.b,a);dr(c.b,a);c.a=vr(new tr(),a);return c}
function oq(){return xr(this.a)}
function pq(){return Bf(yr(this.a),9)}
function lq(){}
_=lq.prototype=new bp();_.r=oq;_.t=pq;_.tI=0;_.a=null;_.b=null;function ss(b){var a;if(b!=null&&Af(b.tI,9)){a=Bf(b,9);if(gu(this.p(),a.p())&&gu(this.q(),a.q())){return true}}return false}
function ts(){var a,b;a=0;b=0;if(this.p()!=null){a=pd(this.p())}if(this.q()!=null){b=pd(this.q())}return a^b}
function qs(){}
_=qs.prototype=new bp();_.eQ=ss;_.hC=ts;_.tI=39;function xq(b,a){b.a=a;return b}
function zq(){return null}
function Aq(){return this.a.b}
function Bq(a){return or(this.a,a)}
function wq(){}
_=wq.prototype=new qs();_.p=zq;_.q=Aq;_.z=Bq;_.tI=40;_.a=null;function Dq(c,a,b){c.b=b;c.a=a;return c}
function Fq(){return this.a}
function ar(){return this.b.e[Ac+this.a]}
function br(b,a){return Dq(new Cq(),a,b)}
function cr(a){return pr(this.b,this.a,a)}
function Cq(){}
_=Cq.prototype=new qs();_.p=Fq;_.q=ar;_.z=cr;_.tI=41;_.a=null;_.b=null;function Cr(a){Es(this,this.A(),a);return true}
function Dr(a,b){if(a<0||a>=b){as(a,b)}}
function Er(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Af(e.tI,10))){return false}f=Bf(e,10);if(this.A()!=f.b){return false}c=vr(new tr(),this);d=vr(new tr(),f);while(c.a<c.b.b){a=yr(c);b=yr(d);if(!(a==null?b==null:nd(a,b))){return false}}return true}
function Fr(){var a,b,c;b=1;a=vr(new tr(),this);while(a.a<a.b.b){c=yr(a);b=31*b+(c==null?0:pd(c));b=~~b}return b}
function as(a,b){throw Eo(new Do(),Bc+a+Cc+b)}
function bs(){return vr(new tr(),this)}
function sr(){}
_=sr.prototype=new eq();_.k=Cr;_.eQ=Er;_.hC=Fr;_.s=bs;_.tI=0;function vr(b,a){b.b=a;return b}
function xr(a){return a.a<a.b.b}
function yr(a){if(a.a>=a.b.b){throw new au()}return bt(a.b,a.a++)}
function zr(){return this.a<this.b.b}
function Ar(){return yr(this)}
function tr(){}
_=tr.prototype=new bp();_.r=zr;_.t=Ar;_.tI=0;_.a=0;_.b=null;function ks(b,a,c){b.a=a;b.b=c;return b}
function ns(a){return hr(this.a,a)}
function os(){var a;return a=mq(new lq(),this.b.a),fs(new es(),a)}
function ps(){return this.b.a.d}
function ds(){}
_=ds.prototype=new ys();_.l=ns;_.s=os;_.A=ps;_.tI=42;_.a=null;_.b=null;function fs(a,b){a.a=b;return a}
function is(){return xr(this.a.a)}
function js(){var a;return a=Bf(yr(this.a.a),9),a.p()}
function es(){}
_=es.prototype=new bp();_.r=is;_.t=js;_.tI=0;_.a=null;function Ds(a){a.a=rf(mg,0,0,0,0);a.b=0;return a}
function Fs(b,a){uf(b.a,b.b++,a);return true}
function Es(c,a,b){if(a<0||a>c.b){as(a,c.b)}c.a.splice(a,0,b);++c.b}
function bt(b,a){Dr(a,b.b);return b.a[a]}
function ct(c,b,a){for(;a<c.b;++a){if(gu(b,c.a[a])){return a}}return -1}
function dt(a){return uf(this.a,this.b++,a),true}
function et(a){return ct(this,a,0)!=-1}
function ft(){return this.b}
function Cs(){}
_=Cs.prototype=new sr();_.k=dt;_.l=et;_.A=ft;_.tI=43;_.a=null;_.b=0;function kt(a){fr(a);return a}
function mt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&nd(a,b)}
function jt(){}
_=jt.prototype=new jq();_.tI=44;function ot(a){a.a=kt(new jt());return a}
function pt(c,a){var b;b=qr(c.a,a,c);return b==null}
function rt(b){var a;return a=qr(this.a,b,this),a==null}
function st(a){return hr(this.a,a)}
function tt(){var a;return a=mq(new lq(),vs(this.a).b.a),fs(new es(),a)}
function ut(){return this.a.d}
function nt(){}
_=nt.prototype=new ys();_.k=rt;_.l=st;_.s=tt;_.A=ut;_.tI=45;_.a=null;function zt(b,a,c){b.a=a;b.b=c;return b}
function Bt(){return this.a}
function Ct(){return this.b}
function Et(b){var a;a=this.b;this.b=b;return a}
function yt(){}
_=yt.prototype=new qs();_.p=Bt;_.q=Ct;_.z=Et;_.tI=46;_.a=null;_.b=null;function au(){}
_=au.prototype=new fp();_.tI=47;function gu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&nd(a,b)}
function go(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Dc,evtGroup:Ec,millis:(new Date()).getTime(),type:Fc,className:ad});En(new Dn())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{go()}catch(a){b(d)}else{go()}}
function hu(){}
var lg=po(bd,cd),mg=po(dd,fd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();