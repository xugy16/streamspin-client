(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',C=' ',jb=', Size: ',Eb='-',ub='0',cc='0px',xc='100%',Dc='100px',Cc='150px',Ec='300px',ad=':',Ab='DIV',z='DOMMouseScroll',m='INPUT',ib='Index: ',jd='Object;',oc='Status: <b>Offline<\/b>',nc='Status: <b>Online<\/b>',zc='This is some content that should show how the widget handles stuff,\n <b> wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er<\/b>',hd='Widget;',gd='[Lcom.google.gwt.user.client.ui.',id='[Ljava.lang.',Fc='__gwt_gadget_content_div',lc='align',y='blur',qb='bottom',bb='button',vb='cellPadding',tb='cellSpacing',nb='center',db='change',B='className',ob='click',ed='com.streamspin.client.StreamSpinClient',A='contextmenu',zb='dblclick',kb='div',w='error',ec='focus',cb='gwt-Button',mb='gwt-HTML',wb='gwt-Image',lb='gwt-Label',yb='gwt-ListBox',Db='gwt-MenuBar',uc='gwt-PasswordTextBox',jc='gwt-TextArea',sc='gwt-TextBox',Bc='height',dc='hideFocus',ac='horizontal',vc='images/daisy.gif',xb='img',pc='keydown',Ac='keypress',fd='keyup',D='left',o='load',p='losecapture',Cb='menubar',rb='middle',cd='moduleStartup',q='mousedown',r='mousemove',s='mouseout',t='mouseover',u='mouseup',x='mousewheel',dd='onModuleLoadStart',bc='outline',tc='password',ab='position',gc='readOnly',hc='readonly',pb='right',Bb='role',v='scroll',n='select',qc='someTest',bd='startup',eb='submit',gb='table',hb='tbody',kc='td',rc='text',ic='textarea',F='top',sb='tr',fc='true',fb='type',yc='value',Fb='vertical',mc='verticalAlign',wc='width';var _;function Dp(a){return this===(a==null?null:a)}
function Ep(){return this.$H||(this.$H=++Ad)}
function Bp(){}
_=Bp.prototype={};_.eQ=Dp;_.hC=Ep;_.tM=dv;_.tI=1;function rd(b,a){return b.tM==dv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function td(a){return a.tM==dv||a.tI==2?a.hC():a.$H||(a.$H=++Ad)}
var Ad=0;function ce(){ce=dv;Ed();new Cd()}
function ee(c){var a=$doc.createElement(m);a.type=c;return a}
function fe(a){var b;b=$doc.createElement(n);if(a){b.multiple=true}return b}
function ge(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Bd(){}
_=Bd.prototype=new Bp();_.tI=0;function ae(){ae=dv;ce()}
function Fd(){}
_=Fd.prototype=new Bd();_.tI=0;function Ed(){Ed=dv;ae()}
function Cd(){}
_=Cd.prototype=new Fd();_.tI=0;function ef(){}
_=ef.prototype=new Bp();_.tI=0;function jf(){}
_=jf.prototype=new Bp();_.tI=0;function mf(){}
_=mf.prototype=new Bp();_.tI=0;function wf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function xf(a,f,c,b,e){var d;d=wf(e,b);yf(a,f,c,d);return d}
function yf(b,d,c,a){if(!zf){zf=new sf()}Cf(a,zf);a.tI=d;a.qI=c;return a}
function Af(a,b,c){if(c!=null){if(a.qI>0&&!Ff(c.tI,a.qI)){throw new Co()}if(a.qI<0&&(c.tM==dv||c.tI==2)){throw new Co()}}return a[b]=c}
function Cf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function sf(){}
_=sf.prototype=new Bp();_.tI=0;_.length=0;_.qI=0;var zf=null;function ag(b,a){return b&&!!og[b][a]}
function Ff(b,a){return b&&og[b][a]}
function bg(b,a){if(b!=null&&!Ff(b.tI,a)){throw new gp()}return b}
function ng(a){if(a!=null){throw new gp()}return a}
var og=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{12:1},{12:1},{12:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{5:1},{2:1},{2:1},{2:1},{2:1},{10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{14:1},{14:1},{11:1},{11:1},{11:1},{14:1},{13:1},{14:1},{11:1},{2:1},{9:1}];function dh(b,a,c){var d;if(a==ih){if(hi(b)==8192){ih=null}}d=ch;ch=b;try{c.w(b)}finally{ch=d}}
function kh(a,b){ji();a.__eventBits=b;a.onclick=b&1?di:null;a.ondblclick=b&2?di:null;a.onmousedown=b&4?di:null;a.onmouseup=b&8?di:null;a.onmouseover=b&16?di:null;a.onmouseout=b&32?di:null;a.onmousemove=b&64?di:null;a.onkeydown=b&128?di:null;a.onkeypress=b&256?di:null;a.onkeyup=b&512?di:null;a.onchange=b&1024?di:null;a.onfocus=b&2048?di:null;a.onblur=b&4096?di:null;a.onlosecapture=b&8192?di:null;a.onscroll=b&16384?di:null;a.onload=b&32768?di:null;a.onerror=b&65536?di:null;a.onmousewheel=b&131072?di:null;a.oncontextmenu=b&262144?di:null}
var ch=null,ih=null;function ph(a){uh();if(!qh){qh=yt(new xt())}zt(qh,a)}
function rh(){var a;if(qh){for(a=ps(new ns(),qh);a.a<a.b.C();){bg(ss(a),3);El()}}}
function sh(){var a,b;b=null;if(qh){for(a=ps(new ns(),qh);a.a<a.b.C();){bg(ss(a),3);b=null}}return b}
function uh(){if(!th){th=true;pi()}}
var qh=null,th=false;function hi(a){switch(a.type){case y:return 4096;case db:return 1024;case ob:return 1;case zb:return 2;case ec:return 2048;case pc:return 128;case Ac:return 256;case fd:return 512;case o:return 32768;case p:return 8192;case q:return 4;case r:return 64;case s:return 32;case t:return 16;case u:return 8;case v:return 16384;case w:return 65536;case x:return 131072;case z:return 131072;case A:return 262144;}}
function ji(){if(!li){Fh();li=true}}
function mi(a){return a!=null&&ag(a.tI,4)&&!(a!=null&&(a.tM!=dv&&a.tI!=2))}
var li=false;function Fh(){ci=function(b){if(bi(b)){var a=ai;if(a&&a.__listener){if(mi(a.__listener)){dh(b,a,a.__listener);b.stopPropagation()}}}};bi=function(a){return true};di=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(mi(c)){dh(b,a,c)}}};$wnd.addEventListener(ob,ci,true);$wnd.addEventListener(zb,ci,true);$wnd.addEventListener(q,ci,true);$wnd.addEventListener(u,ci,true);$wnd.addEventListener(r,ci,true);$wnd.addEventListener(t,ci,true);$wnd.addEventListener(s,ci,true);$wnd.addEventListener(x,ci,true);$wnd.addEventListener(pc,bi,true);$wnd.addEventListener(fd,bi,true);$wnd.addEventListener(Ac,bi,true)}
var ai=null,bi=null,ci=null,di=null;function pi(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=sh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{rh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function xm(b,a){an(b.h,a,true)}
function zm(b,a){an(b.h,a,false)}
function Am(b,a){if(b.h){Bm(b.h,a)}b.h=a}
function Bm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function Fm(a){var b,c;b=a[B]==null?null:String(a[B]);c=b.indexOf(xq(32));if(c>=0){return b.substr(0,c-0)}return b}
function an(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new Fp()}j=tq(j);if(j.length==0){throw new rp()}i=c[B]==null?null:String(c[B]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=C}c[B]=i+j}}else{if(e!=-1){b=tq(i.substr(0,e-0));d=tq(rq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+C+d}c[B]=h}}}
function wm(){}
_=wm.prototype=new Bp();_.tI=7;_.h=null;function An(a){if(a.f){throw new up()}a.f=true;a.h.__listener=a;a.l();a.y()}
function Bn(a){if(!a.f){throw new up()}try{a.z()}finally{a.m();a.h.__listener=null;a.f=false}}
function Cn(a){if(a.g){a.g.A(a)}else if(a.g){throw new up()}}
function Dn(b,a){if(b.f){b.h.__listener=null}Am(b,a);if(b.f){b.h.__listener=b}}
function En(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.x()}c.g=null}else{if(a){throw new up()}c.g=b;if(b.f){An(c)}}}
function Fn(){}
function ao(){}
function bo(a){}
function co(){Bn(this)}
function eo(){}
function fo(){}
function jn(){}
_=jn.prototype=new wm();_.l=Fn;_.m=ao;_.w=bo;_.x=co;_.y=eo;_.z=fo;_.tI=8;_.f=false;_.g=null;function pl(){var a,b;for(b=this.u();b.a<b.b.b-1;){a=pn(b);An(a)}}
function ql(){var a,b;for(b=this.u();b.a<b.b.b-1;){a=pn(b);a.x()}}
function rl(){}
function sl(){}
function nl(){}
_=nl.prototype=new jn();_.l=pl;_.m=ql;_.y=rl;_.z=sl;_.tI=9;function ij(c,a,b){Cn(a);tn(c.e,a);b.appendChild(a.h);En(a,c)}
function kj(b,c){var a;if(c.g!=b){return false}En(c,null);a=c.h;ge((ce(),a)).removeChild(a);yn(b.e,c);return true}
function lj(){return nn(new ln(),this.e)}
function mj(a){return kj(this,a)}
function gj(){}
_=gj.prototype=new nl();_.u=lj;_.A=mj;_.tI=10;function ri(a,b){ij(a,b,a.h)}
function ti(b,c){var a;a=kj(b,c);if(a){ui(c.h)}return a}
function ui(a){a.style[D]=E;a.style[F]=E;a.style[ab]=E}
function vi(a){return ti(this,a)}
function qi(){}
_=qi.prototype=new gj();_.A=vi;_.tI=11;function oj(b,a){b.h=a;b.h.tabIndex=0;return b}
function pj(b,a){if(!b.a){b.a=cj(new bj());kh(b.h,1|(b.h.__eventBits||0))}zt(b.a,a)}
function rj(b,a){if(hi(a)==1){if(b.a){ej(b.a)}}}
function sj(a){rj(this,a)}
function nj(){}
_=nj.prototype=new jn();_.w=sj;_.tI=12;_.a=null;function yi(b,a){b.h=a;b.h.tabIndex=0;return b}
function xi(){}
_=xi.prototype=new nj();_.tI=13;function Ai(a){yi(a,$doc.createElement((ce(),bb)));Di(a.h);a.h[B]=cb;return a}
function Bi(b,a){Ai(b);b.h.innerHTML=a||E;return b}
function Di(b){if(b.type==eb){try{b.setAttribute(fb,bb)}catch(a){}}}
function wi(){}
_=wi.prototype=new xi();_.tI=14;function Fi(a){a.e=sn(new kn());a.d=$doc.createElement((ce(),gb));a.c=$doc.createElement(hb);a.d.appendChild(a.c);a.h=a.d;return a}
function Ei(){}
_=Ei.prototype=new gj();_.tI=15;_.c=null;_.d=null;function Fq(a,b){var c;while(a.r()){c=a.v();if(b==null?c==null:rd(b,c)){return a}}return null}
function br(a){throw new Bq()}
function cr(b){var a;a=Fq(this.u(),b);return !!a}
function Eq(){}
_=Eq.prototype=new Bp();_.j=br;_.k=cr;_.tI=0;function xs(a){this.i(this.C(),a);return true}
function ws(b,a){throw new Bq()}
function ys(a,b){if(a<0||a>=b){Bs(a,b)}}
function zs(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ag(e.tI,12))){return false}f=bg(e,12);if(this.C()!=f.C()){return false}c=ps(new ns(),this);d=f.u();while(c.a<c.b.C()){a=ss(c);b=ss(d);if(!(a==null?b==null:rd(a,b))){return false}}return true}
function As(){var a,b,c;b=1;a=ps(new ns(),this);while(a.a<a.b.C()){c=ss(a);b=31*b+(c==null?0:td(c));b=~~b}return b}
function Bs(a,b){throw yp(new xp(),ib+a+jb+b)}
function Cs(){return ps(new ns(),this)}
function ms(){}
_=ms.prototype=new Eq();_.j=xs;_.i=ws;_.eQ=zs;_.hC=As;_.u=Cs;_.tI=16;function yt(a){a.a=xf(sg,0,0,0,0);a.b=0;return a}
function zt(b,a){Af(b.a,b.b++,a);return true}
function Bt(b,a){ys(a,b.b);return b.a[a]}
function Ct(c,b,a){for(;a<c.b;++a){if(cv(b,c.a[a])){return a}}return -1}
function Et(a){return Af(this.a,this.b++,a),true}
function Dt(a,b){if(a<0||a>this.b){Bs(a,this.b)}this.a.splice(a,0,b);++this.b}
function Ft(a){return Ct(this,a,0)!=-1}
function au(a){return ys(a,this.b),this.a[a]}
function bu(){return this.b}
function xt(){}
_=xt.prototype=new ms();_.j=Et;_.i=Dt;_.k=Ft;_.q=au;_.C=bu;_.tI=17;_.a=null;_.b=0;function cj(a){yt(a);return a}
function ej(c){var a,b;for(b=ps(new ns(),c);b.a<b.b.C();){a=bg(ss(b),5);ng(Bt(a.a.a,a.a.f.h.selectedIndex));null.E()}}
function bj(){}
_=bj.prototype=new xt();_.tI=18;function zk(a){a.h=$doc.createElement((ce(),kb));a.h[B]=lb;return a}
function Bk(a){hi(a)}
function yk(){}
_=yk.prototype=new jn();_.w=Bk;_.tI=19;function uj(a){a.h=$doc.createElement((ce(),kb));a.h[B]=mb;return a}
function tj(){}
_=tj.prototype=new yk();_.tI=20;function Dj(){Dj=dv;Bj(new Aj(),nb);Fj=Bj(new Aj(),D);Bj(new Aj(),pb);Ej=Fj}
var Ej,Fj;function Bj(b,a){b.a=a;return b}
function Aj(){}
_=Aj.prototype=new Bp();_.tI=0;_.a=null;function fk(){fk=dv;dk(new ck(),qb);dk(new ck(),rb);gk=dk(new ck(),F)}
var gk;function dk(a,b){a.a=b;return a}
function ck(){}
_=ck.prototype=new Bp();_.tI=0;_.a=null;function kk(a){Fi(a);Dj();fk();a.a=$doc.createElement((ce(),sb));a.c.appendChild(a.a);a.d[tb]=ub;a.d[vb]=ub;return a}
function mk(c){var a,b;b=ge((ce(),c.h));a=kj(this,c);if(a){this.a.removeChild(b)}return a}
function jk(){}
_=jk.prototype=new Ei();_.A=mk;_.tI=21;_.a=null;function vk(){vk=dv;Fr(new fu())}
function uk(a,b){vk();rk(new qk(),a,b);a.h[B]=wb;return a}
function wk(a){hi(a)}
function nk(){}
_=nk.prototype=new jn();_.w=wk;_.tI=22;function ok(){}
_=ok.prototype=new Bp();_.tI=0;function rk(b,a,c){Dn(a,$doc.createElement((ce(),xb)));kh(a.h,229501|(a.h.__eventBits||0));a.h.src=c;return b}
function qk(){}
_=qk.prototype=new ok();_.tI=0;function Dk(b,a){oj(b,fe((ce(),a)));b.h[B]=yb;return b}
function al(a){if(hi(a)==1024){}else{rj(this,a)}}
function Ck(){}
_=Ck.prototype=new nj();_.w=al;_.tI=23;function el(a,b){yt(new xt());a.b=yt(new xt());hl(a,b,(kl(),new il()));return a}
function gl(d,a){var b,c;for(c=ps(new ns(),d.b);c.a<c.b.C();){b=ng(ss(c));if((ce(),null.E()).contains(a)){return b}}return null}
function hl(d,f){var b,c,e,a;c=$doc.createElement((ce(),gb));d.a=$doc.createElement(hb);c.appendChild(d.a);if(!f){e=$doc.createElement(sb);d.a.appendChild(e)}b=(a=$doc.createElement(Ab),a.tabIndex=0,a);b.appendChild(c);d.h=b;d.h.setAttribute(Bb,Cb);kh(d.h,2225|(d.h.__eventBits||0));d.h[B]=Db;if(f){xm(d,Fm(d.h)+Eb+Fb)}else{xm(d,Fm(d.h)+Eb+ac)}d.h.style[bc]=cc;d.h.setAttribute(dc,fc)}
function ll(a){var b;gl(this,a.target);switch(hi(a)){case 1:{this.h.focus();break}{break}case 2048:{ng(Bt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{ng(Bt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{ng(Bt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:ng(Bt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:ng(Bt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{ng(Bt(this.b,0))}}break}}}
function ml(){Bn(this)}
function bl(){}
_=bl.prototype=new jn();_.w=ll;_.x=ml;_.tI=24;_.a=null;function kl(){kl=dv}
function il(){}
_=il.prototype=new Bp();_.tI=0;function pm(b,a){b.h=a;b.h.tabIndex=0;return b}
function rm(b,a){b.h[gc]=a;if(a){xm(b,Fm(b.h)+Eb+hc)}else{zm(b,Fm(b.h)+Eb+hc)}}
function tm(a){var b;b=hi(a);if((b&896)!=0){rj(this,a)}else if(b==1024){}else{rj(this,a)}}
function om(){}
_=om.prototype=new nj();_.w=tm;_.tI=25;function um(c,a,b){c.h=a;c.h.tabIndex=0;if(b!=null){c.h[B]=b}return c}
function nm(){}
_=nm.prototype=new om();_.tI=26;function tl(){}
_=tl.prototype=new nm();_.tI=27;function Dl(){Dl=dv;bm=gu(new fu());cm=ku(new ju())}
function Cl(b,a){Dl();b.e=sn(new kn());b.h=a;An(b);return b}
function El(){var b,a;Dl();var c,d;for(d=(b=gr(new fr(),qt(cm.a).b.a),at(new Fs(),b));rs(d.a.a);){c=bg((a=bg(ss(d.a.a),11),a.o()),7);if(c.f){c.x()}}}
function am(b){Dl();var a,c;c=bg(es(bm,b),6);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(bm.d==0){ph(new xl())}if(!a){c=Al(new zl())}else{c=Cl(new wl(),a)}ks(bm,b,c);lu(cm,c);return c}
function wl(){}
_=wl.prototype=new qi();_.tI=28;var bm,cm;function xl(){}
_=xl.prototype=new Bp();_.tI=29;function Bl(){Bl=dv;Dl()}
function Al(a){Bl();Cl(a,$doc.body);return a}
function zl(){}
_=zl.prototype=new wl();_.tI=30;function lm(a){pm(a,$doc.createElement((ce(),ic)));a.h[B]=jc;return a}
function km(){}
_=km.prototype=new om();_.tI=31;function dn(a){Fi(a);a.a=(Dj(),Ej);a.b=(fk(),gk);a.d[tb]=ub;a.d[vb]=ub;return a}
function en(c,e){var b,d,a;d=$doc.createElement((ce(),sb));b=(a=$doc.createElement(kc),(a[lc]=c.a.a,undefined),(a.style[mc]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);Cn(e);tn(c.e,e);b.appendChild(e.h);En(e,c)}
function hn(c){var a,b;b=ge((ce(),c.h));a=kj(this,c);if(a){this.c.removeChild(ge(b))}return a}
function bn(){}
_=bn.prototype=new Ei();_.A=hn;_.tI=32;function sn(a){a.a=xf(rg,0,7,4,0);return a}
function tn(a,b){wn(a,b,a.b)}
function vn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function wn(d,e,a){var b,c;if(a<0||a>d.b){throw new xp()}if(d.b==d.a.length){c=xf(rg,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){Af(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Af(d.a,b,d.a[b-1])}Af(d.a,a,e)}
function xn(c,b){var a;if(b<0||b>=c.b){throw new xp()}--c.b;for(a=b;a<c.b;++a){Af(c.a,a,c.a[a+1])}Af(c.a,c.b,null)}
function yn(b,c){var a;a=vn(b,c);if(a==-1){throw new Cu()}xn(b,a)}
function kn(){}
_=kn.prototype=new Bp();_.tI=0;_.a=null;_.b=0;function nn(b,a){b.b=a;return b}
function pn(a){if(a.a>=a.b.b){throw new Cu()}return a.b.a[++a.a]}
function qn(){return this.a<this.b.b-1}
function rn(){return pn(this)}
function ln(){}
_=ln.prototype=new Bp();_.r=qn;_.v=rn;_.tI=0;_.a=-1;_.b=null;function vo(b,a){if(a.a){b.e.h.innerHTML=nc}else{b.e.h.innerHTML=oc}}
function zo(a){}
function yo(a){}
function lo(){}
_=lo.prototype=new jf();_.t=zo;_.s=yo;_.tI=0;function no(b,a){b.a=a;return b}
function mo(){}
_=mo.prototype=new Bp();_.tI=33;_.a=null;function qo(b){var a;b.d=dn(new bn());b.c=kk(new jk());b.g=dn(new bn());b.f=Dk(new Ck(),false);b.b=lm(new km());el(new bl(),false);Bi(new wi(),qc);b.e=zk(new yk());uj(new tj());dn(new bn());um(new nm(),ee((ce(),rc)),sc);um(new tl(),(a=$doc.createElement(m),a.type=tc,a),uc);Ai(new wi());uk(new nk(),$moduleBase+vc);b.a=yt(new xt());b.s(new ef());b.t(new mf());pj(b.f,no(new mo(),b));b.f.h.size=5;b.f.h.style[wc]=xc;b.b.h[yc]=zc!=null?zc:E;rm(b.b,true);b.b.h.style[wc]=xc;b.b.h.style[Bc]=Cc;en(b.g,b.f);en(b.g,b.b);b.g.h.style[Bc]=Dc;b.g.h.style[wc]=xc;vo(b,(ap(),ap(),bp));en(b.d,b.c);en(b.d,b.g);en(b.d,b.e);b.d.h.style[Bc]=Ec;b.d.h.style[wc]=xc;ri((Dl(),am(null)),b.d);am(Fc);$wnd._IG_AdjustIFrameHeight();return b}
function po(){}
_=po.prototype=new lo();_.tI=0;function zq(){}
_=zq.prototype=new Bp();_.tI=3;function pp(){}
_=pp.prototype=new zq();_.tI=4;function Fp(){}
_=Fp.prototype=new pp();_.tI=5;function Co(){}
_=Co.prototype=new Fp();_.tI=35;function ap(){ap=dv;Fo(new Eo(),false);bp=Fo(new Eo(),true)}
function Fo(a,b){ap();a.a=b;return a}
function cp(a){return a!=null&&ag(a.tI,10)&&bg(a,10).a==this.a}
function dp(){return this.a?1231:1237}
function Eo(){}
_=Eo.prototype=new Bp();_.eQ=cp;_.hC=dp;_.tI=38;_.a=false;var bp;function jp(c,a){var b;b=new fp();return b}
function fp(){}
_=fp.prototype=new Bp();_.tI=0;function gp(){}
_=gp.prototype=new Fp();_.tI=39;function rp(){}
_=rp.prototype=new Fp();_.tI=40;function up(){}
_=up.prototype=new Fp();_.tI=41;function yp(b,a){return b}
function xp(){}
_=xp.prototype=new Fp();_.tI=42;function nq(b,a){if(!(a!=null&&ag(a.tI,1))){return false}return String(b)==a}
function rq(b,a){return b.substr(a,b.length-a)}
function tq(c){if(c.length==0||c[0]>C&&c[c.length-1]>C){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function vq(a){return nq(this,a)}
function xq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function yq(){return jq(this)}
_=String.prototype;_.eQ=vq;_.hC=yq;_.tI=2;function eq(){eq=dv;fq={};iq={}}
function gq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function jq(c){eq();var a=ad+c;var b=iq[a];if(b!=null){return b}b=fq[a];if(b==null){b=gq(c)}kq();return iq[a]=b}
function kq(){if(hq==256){fq=iq;iq={};hq=0}++hq}
var fq,hq=0,iq;function Bq(){}
_=Bq.prototype=new Fp();_.tI=43;function qt(b){var a;a=kr(new er(),b);return ft(new Es(),b,a)}
function rt(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ag(c.tI,13))){return false}e=bg(c,13);if(bg(this,13).d!=e.d){return false}for(b=gr(new fr(),kr(new er(),e).a);rs(b.a);){a=bg(ss(b.a),11);d=a.o();f=a.p();if(!(d==null?bg(this,13).c:d!=null&&ag(d.tI,1)?gs(bg(this,13),bg(d,1)):fs(bg(this,13),d,~~td(d)))){return false}if(!cv(f,d==null?bg(this,13).b:d!=null&&ag(d.tI,1)?bg(this,13).e[ad+bg(d,1)]:cs(bg(this,13),d,~~td(d)))){return false}}return true}
function st(){var a,b,c;c=0;for(b=gr(new fr(),kr(new er(),bg(this,13)).a);rs(b.a);){a=bg(ss(b.a),11);c+=a.hC();c=~~c}return c}
function Ds(){}
_=Ds.prototype=new Bp();_.eQ=rt;_.hC=st;_.tI=0;function Dr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function Er(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Br(e,c.substring(1));a.j(b)}}}
function Fr(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function bs(b,a){return a==null?b.c:a!=null&&ag(a.tI,1)?gs(b,bg(a,1)):fs(b,a,~~td(a))}
function es(b,a){return a==null?b.b:a!=null&&ag(a.tI,1)?b.e[ad+bg(a,1)]:cs(b,a,~~td(a))}
function cs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function fs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function gs(b,a){return ad+a in b.e}
function ks(b,a,c){return a==null?is(b,c):a!=null&&ag(a.tI,1)?js(b,bg(a,1),c):hs(b,a,c,~~td(a))}
function hs(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.B(j);return h}}}else{a=i.a[e]=[]}var c=vu(new uu(),g,j);a.push(c);++i.d;return null}
function is(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function js(d,a,e){var b,c=d.e;a=ad+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ls(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rd(a,b)}
function dr(){}
_=dr.prototype=new Ds();_.n=ls;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function vt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ag(b.tI,14))){return false}c=bg(b,14);if(c.C()!=this.C()){return false}for(a=c.u();a.r();){d=a.v();if(!this.k(d)){return false}}return true}
function wt(){var a,b,c;a=0;for(b=this.u();b.r();){c=b.v();if(c!=null){a+=td(c);a=~~a}}return a}
function tt(){}
_=tt.prototype=new Eq();_.eQ=vt;_.hC=wt;_.tI=44;function kr(b,a){b.a=a;return b}
function mr(d,c){var a,b,e;if(c!=null&&ag(c.tI,11)){a=bg(c,11);b=a.o();if(bs(d.a,b)){e=es(d.a,b);return iu(a.p(),e)}}return false}
function nr(a){return mr(this,a)}
function or(){return gr(new fr(),this.a)}
function pr(){return this.a.d}
function er(){}
_=er.prototype=new tt();_.k=nr;_.u=or;_.C=pr;_.tI=45;_.a=null;function gr(c,b){var a;c.b=b;a=yt(new xt());if(c.b.c){zt(a,rr(new qr(),c.b))}Er(c.b,a);Dr(c.b,a);c.a=ps(new ns(),a);return c}
function ir(){return rs(this.a)}
function jr(){return bg(ss(this.a),11)}
function fr(){}
_=fr.prototype=new Bp();_.r=ir;_.v=jr;_.tI=0;_.a=null;_.b=null;function nt(b){var a;if(b!=null&&ag(b.tI,11)){a=bg(b,11);if(cv(this.o(),a.o())&&cv(this.p(),a.p())){return true}}return false}
function ot(){var a,b;a=0;b=0;if(this.o()!=null){a=td(this.o())}if(this.p()!=null){b=td(this.p())}return a^b}
function lt(){}
_=lt.prototype=new Bp();_.eQ=nt;_.hC=ot;_.tI=46;function rr(b,a){b.a=a;return b}
function tr(){return null}
function ur(){return this.a.b}
function vr(a){return is(this.a,a)}
function qr(){}
_=qr.prototype=new lt();_.o=tr;_.p=ur;_.B=vr;_.tI=47;_.a=null;function xr(c,a,b){c.b=b;c.a=a;return c}
function zr(){return this.a}
function Ar(){return this.b.e[ad+this.a]}
function Br(b,a){return xr(new wr(),a,b)}
function Cr(a){return js(this.b,this.a,a)}
function wr(){}
_=wr.prototype=new lt();_.o=zr;_.p=Ar;_.B=Cr;_.tI=48;_.a=null;_.b=null;function ps(b,a){b.b=a;return b}
function rs(a){return a.a<a.b.C()}
function ss(a){if(a.a>=a.b.C()){throw new Cu()}return a.b.q(a.a++)}
function ts(){return this.a<this.b.C()}
function us(){return ss(this)}
function ns(){}
_=ns.prototype=new Bp();_.r=ts;_.v=us;_.tI=0;_.a=0;_.b=null;function ft(b,a,c){b.a=a;b.b=c;return b}
function it(a){return bs(this.a,a)}
function jt(){var a;return a=gr(new fr(),this.b.a),at(new Fs(),a)}
function kt(){return this.b.a.d}
function Es(){}
_=Es.prototype=new tt();_.k=it;_.u=jt;_.C=kt;_.tI=49;_.a=null;_.b=null;function at(a,b){a.a=b;return a}
function dt(){return rs(this.a.a)}
function et(){var a;return a=bg(ss(this.a.a),11),a.o()}
function Fs(){}
_=Fs.prototype=new Bp();_.r=dt;_.v=et;_.tI=0;_.a=null;function gu(a){Fr(a);return a}
function iu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rd(a,b)}
function fu(){}
_=fu.prototype=new dr();_.tI=50;function ku(a){a.a=gu(new fu());return a}
function lu(c,a){var b;b=ks(c.a,a,c);return b==null}
function nu(b){var a;return a=ks(this.a,b,this),a==null}
function ou(a){return bs(this.a,a)}
function pu(){var a;return a=gr(new fr(),qt(this.a).b.a),at(new Fs(),a)}
function qu(){return this.a.d}
function ju(){}
_=ju.prototype=new tt();_.j=nu;_.k=ou;_.u=pu;_.C=qu;_.tI=51;_.a=null;function vu(b,a,c){b.a=a;b.b=c;return b}
function xu(){return this.a}
function yu(){return this.b}
function Au(b){var a;a=this.b;this.b=b;return a}
function uu(){}
_=uu.prototype=new lt();_.o=xu;_.p=yu;_.B=Au;_.tI=52;_.a=null;_.b=null;function Cu(){}
_=Cu.prototype=new Fp();_.tI=53;function cv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rd(a,b)}
function Ao(){!!$stats&&$stats({moduleName:$moduleName,subSystem:bd,evtGroup:cd,millis:(new Date()).getTime(),type:dd,className:ed});qo(new po())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Ao()}catch(a){b(d)}else{Ao()}}
function dv(){}
var rg=jp(gd,hd),sg=jp(id,jd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();