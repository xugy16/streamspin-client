(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var ab='',E=' ',lb=', Size: ',ac='-',wb='0',fc='0px',zc='100%',Fc='100px',Ec='150px',ad='300px',cd=':',Cb='DIV',z='DOMMouseScroll',m='INPUT',kb='Index: ',C='MouseEvents',ld='Object;',rc='Status: <b>Offline<\/b>',qc='Status: <b>Online<\/b>',Cc='This is some content that should show how the widget handles stuff,\n <b> wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er<\/b>',jd='Widget;',id='[Lcom.google.gwt.user.client.ui.',kd='[Ljava.lang.',bd='__gwt_gadget_content_div',nc='align',y='blur',sb='bottom',eb='button',xb='cellPadding',vb='cellSpacing',qb='center',db='change',D='className',ob='click',hd='com.streamspin.client.StreamSpinClient',A='contextmenu',zb='dblclick',mb='div',w='error',ec='focus',fb='gwt-Button',pb='gwt-HTML',yb='gwt-Image',nb='gwt-Label',Bb='gwt-ListBox',Fb='gwt-MenuBar',wc='gwt-PasswordTextBox',lc='gwt-TextArea',uc='gwt-TextBox',Dc='height',gc='hideFocus',cc='horizontal',B='html',xc='images/daisy.gif',Ab='img',pc='keydown',Ac='keypress',fd='keyup',F='left',o='load',p='losecapture',Eb='menubar',tb='middle',ed='moduleStartup',q='mousedown',r='mousemove',s='mouseout',t='mouseover',u='mouseup',x='mousewheel',gd='onModuleLoadStart',dc='outline',vc='password',cb='position',ic='readOnly',jc='readonly',rb='right',Db='role',v='scroll',n='select',sc='someTest',dd='startup',gb='submit',ib='table',jb='tbody',mc='td',tc='text',kc='textarea',bb='top',ub='tr',hc='true',hb='type',Bc='value',bc='vertical',oc='verticalAlign',yc='width';var _;function bq(a){return this===(a==null?null:a)}
function cq(){return this.$H||(this.$H=++Cd)}
function Fp(){}
_=Fp.prototype={};_.eQ=bq;_.hC=cq;_.tM=hv;_.tI=1;function td(b,a){return b.tM==hv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function vd(a){return a.tM==hv||a.tI==2?a.hC():a.$H||(a.$H=++Cd)}
var Cd=0;function ee(){ee=hv;ae();new Ed()}
function ge(c){var a=$doc.createElement(m);a.type=c;return a}
function he(a){var b;b=$doc.createElement(n);if(a){b.multiple=true}return b}
function ie(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Dd(){}
_=Dd.prototype=new Fp();_.tI=0;function de(){de=hv;ee()}
function ce(){}
_=ce.prototype=new Dd();_.tI=0;function ae(){ae=hv;de()}
function be(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Ed(){}
_=Ed.prototype=new ce();_.tI=0;function gf(){}
_=gf.prototype=new Fp();_.tI=0;function lf(){}
_=lf.prototype=new Fp();_.tI=0;function of(){}
_=of.prototype=new Fp();_.tI=0;function yf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function zf(a,f,c,b,e){var d;d=yf(e,b);Af(a,f,c,d);return d}
function Af(b,d,c,a){if(!Bf){Bf=new uf()}Ef(a,Bf);a.tI=d;a.qI=c;return a}
function Cf(a,b,c){if(c!=null){if(a.qI>0&&!bg(c.tI,a.qI)){throw new ap()}if(a.qI<0&&(c.tM==hv||c.tI==2)){throw new ap()}}return a[b]=c}
function Ef(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function uf(){}
_=uf.prototype=new Fp();_.tI=0;_.length=0;_.qI=0;var Bf=null;function cg(b,a){return b&&!!qg[b][a]}
function bg(b,a){return b&&qg[b][a]}
function dg(b,a){if(b!=null&&!bg(b.tI,a)){throw new kp()}return b}
function pg(a){if(a!=null){throw new kp()}return a}
var qg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{12:1},{12:1},{12:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{5:1},{2:1},{2:1},{2:1},{2:1},{10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{14:1},{14:1},{11:1},{11:1},{11:1},{14:1},{13:1},{14:1},{11:1},{2:1},{9:1}];function fh(b,a,c){var d;if(a==kh){if(li(b)==8192){kh=null}}d=eh;eh=b;try{c.w(b)}finally{eh=d}}
var eh=null,kh=null;function qh(a){vh();if(!rh){rh=Ct(new Bt())}Dt(rh,a)}
function sh(){var a;if(rh){for(a=ts(new rs(),rh);a.a<a.b.C();){dg(ws(a),3);cm()}}}
function th(){var a,b;b=null;if(rh){for(a=ts(new rs(),rh);a.a<a.b.C();){dg(ws(a),3);b=null}}return b}
function vh(){if(!uh){uh=true;ti()}}
var rh=null,uh=false;function li(a){switch(a.type){case y:return 4096;case db:return 1024;case ob:return 1;case zb:return 2;case ec:return 2048;case pc:return 128;case Ac:return 256;case fd:return 512;case o:return 32768;case p:return 8192;case q:return 4;case r:return 64;case s:return 32;case t:return 16;case u:return 8;case v:return 16384;case w:return 65536;case x:return 131072;case z:return 131072;case A:return 262144;}}
function ni(){if(!pi){ci();Bh();pi=true}}
function qi(a){return a!=null&&cg(a.tI,4)&&!(a!=null&&(a.tM!=hv&&a.tI!=2))}
var pi=false;function ci(){gi=function(b){if(fi(b)){var a=ei;if(a&&a.__listener){if(qi(a.__listener)){fh(b,a,a.__listener);b.stopPropagation()}}}};fi=function(a){return true};hi=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(qi(c)){fh(b,a,c)}}};$wnd.addEventListener(ob,gi,true);$wnd.addEventListener(zb,gi,true);$wnd.addEventListener(q,gi,true);$wnd.addEventListener(u,gi,true);$wnd.addEventListener(r,gi,true);$wnd.addEventListener(t,gi,true);$wnd.addEventListener(s,gi,true);$wnd.addEventListener(x,gi,true);$wnd.addEventListener(pc,fi,true);$wnd.addEventListener(fd,fi,true);$wnd.addEventListener(Ac,fi,true)}
function di(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?hi:null;if(b&2)c.ondblclick=a&2?hi:null;if(b&4)c.onmousedown=a&4?hi:null;if(b&8)c.onmouseup=a&8?hi:null;if(b&16)c.onmouseover=a&16?hi:null;if(b&32)c.onmouseout=a&32?hi:null;if(b&64)c.onmousemove=a&64?hi:null;if(b&128)c.onkeydown=a&128?hi:null;if(b&256)c.onkeypress=a&256?hi:null;if(b&512)c.onkeyup=a&512?hi:null;if(b&1024)c.onchange=a&1024?hi:null;if(b&2048)c.onfocus=a&2048?hi:null;if(b&4096)c.onblur=a&4096?hi:null;if(b&8192)c.onlosecapture=a&8192?hi:null;if(b&16384)c.onscroll=a&16384?hi:null;if(b&32768)c.onload=a&32768?hi:null;if(b&65536)c.onerror=a&65536?hi:null;if(b&131072)c.onmousewheel=a&131072?hi:null;if(b&262144)c.oncontextmenu=a&262144?hi:null}
var ei=null,fi=null,gi=null,hi=null;function Bh(){$wnd.addEventListener(s,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(B==b.target.tagName.toLowerCase()){var c=$doc.createEvent(C);c.initMouseEvent(u,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(z,gi,true)}
function Dh(b,a){ni();di(b,a);Ch(b,a)}
function Ch(b,a){if(a&131072){b.addEventListener(z,hi,false)}}
function ti(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=th()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{sh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Bm(b,a){en(b.h,a,true)}
function Dm(b,a){en(b.h,a,false)}
function Em(b,a){if(b.h){Fm(b.h,a)}b.h=a}
function Fm(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function dn(a){var b,c;b=a[D]==null?null:String(a[D]);c=b.indexOf(Bq(32));if(c>=0){return b.substr(0,c-0)}return b}
function en(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new dq()}j=xq(j);if(j.length==0){throw new vp()}i=c[D]==null?null:String(c[D]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=E}c[D]=i+j}}else{if(e!=-1){b=xq(i.substr(0,e-0));d=xq(vq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+E+d}c[D]=h}}}
function Am(){}
_=Am.prototype=new Fp();_.tI=7;_.h=null;function En(a){if(a.f){throw new yp()}a.f=true;a.h.__listener=a;a.l();a.y()}
function Fn(a){if(!a.f){throw new yp()}try{a.z()}finally{a.m();a.h.__listener=null;a.f=false}}
function ao(a){if(a.g){a.g.A(a)}else if(a.g){throw new yp()}}
function bo(b,a){if(b.f){b.h.__listener=null}Em(b,a);if(b.f){b.h.__listener=b}}
function co(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.x()}c.g=null}else{if(a){throw new yp()}c.g=b;if(b.f){En(c)}}}
function eo(){}
function fo(){}
function go(a){}
function ho(){Fn(this)}
function io(){}
function jo(){}
function nn(){}
_=nn.prototype=new Am();_.l=eo;_.m=fo;_.w=go;_.x=ho;_.y=io;_.z=jo;_.tI=8;_.f=false;_.g=null;function tl(){var a,b;for(b=this.u();b.a<b.b.b-1;){a=tn(b);En(a)}}
function ul(){var a,b;for(b=this.u();b.a<b.b.b-1;){a=tn(b);a.x()}}
function vl(){}
function wl(){}
function rl(){}
_=rl.prototype=new nn();_.l=tl;_.m=ul;_.y=vl;_.z=wl;_.tI=9;function mj(c,a,b){ao(a);xn(c.e,a);b.appendChild(a.h);co(a,c)}
function oj(b,c){var a;if(c.g!=b){return false}co(c,null);a=c.h;ie((ee(),a)).removeChild(a);Cn(b.e,c);return true}
function pj(){return rn(new pn(),this.e)}
function qj(a){return oj(this,a)}
function kj(){}
_=kj.prototype=new rl();_.u=pj;_.A=qj;_.tI=10;function vi(a,b){mj(a,b,a.h)}
function xi(b,c){var a;a=oj(b,c);if(a){yi(c.h)}return a}
function yi(a){a.style[F]=ab;a.style[bb]=ab;a.style[cb]=ab}
function zi(a){return xi(this,a)}
function ui(){}
_=ui.prototype=new kj();_.A=zi;_.tI=11;function sj(b,a){b.h=a;b.h.tabIndex=0;return b}
function tj(b,a){if(!b.a){b.a=gj(new fj());Dh(b.h,1|(b.h.__eventBits||0))}Dt(b.a,a)}
function vj(b,a){if(li(a)==1){if(b.a){ij(b.a)}}}
function wj(a){vj(this,a)}
function rj(){}
_=rj.prototype=new nn();_.w=wj;_.tI=12;_.a=null;function Ci(b,a){b.h=a;b.h.tabIndex=0;return b}
function Bi(){}
_=Bi.prototype=new rj();_.tI=13;function Ei(a){Ci(a,$doc.createElement((ee(),eb)));bj(a.h);a.h[D]=fb;return a}
function Fi(b,a){Ei(b);b.h.innerHTML=a||ab;return b}
function bj(b){if(b.type==gb){try{b.setAttribute(hb,eb)}catch(a){}}}
function Ai(){}
_=Ai.prototype=new Bi();_.tI=14;function dj(a){a.e=wn(new on());a.d=$doc.createElement((ee(),ib));a.c=$doc.createElement(jb);a.d.appendChild(a.c);a.h=a.d;return a}
function cj(){}
_=cj.prototype=new kj();_.tI=15;_.c=null;_.d=null;function dr(a,b){var c;while(a.r()){c=a.v();if(b==null?c==null:td(b,c)){return a}}return null}
function fr(a){throw new Fq()}
function gr(b){var a;a=dr(this.u(),b);return !!a}
function cr(){}
_=cr.prototype=new Fp();_.j=fr;_.k=gr;_.tI=0;function Bs(a){this.i(this.C(),a);return true}
function As(b,a){throw new Fq()}
function Cs(a,b){if(a<0||a>=b){Fs(a,b)}}
function Ds(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&cg(e.tI,12))){return false}f=dg(e,12);if(this.C()!=f.C()){return false}c=ts(new rs(),this);d=f.u();while(c.a<c.b.C()){a=ws(c);b=ws(d);if(!(a==null?b==null:td(a,b))){return false}}return true}
function Es(){var a,b,c;b=1;a=ts(new rs(),this);while(a.a<a.b.C()){c=ws(a);b=31*b+(c==null?0:vd(c));b=~~b}return b}
function Fs(a,b){throw Cp(new Bp(),kb+a+lb+b)}
function at(){return ts(new rs(),this)}
function qs(){}
_=qs.prototype=new cr();_.j=Bs;_.i=As;_.eQ=Ds;_.hC=Es;_.u=at;_.tI=16;function Ct(a){a.a=zf(ug,0,0,0,0);a.b=0;return a}
function Dt(b,a){Cf(b.a,b.b++,a);return true}
function Ft(b,a){Cs(a,b.b);return b.a[a]}
function au(c,b,a){for(;a<c.b;++a){if(gv(b,c.a[a])){return a}}return -1}
function cu(a){return Cf(this.a,this.b++,a),true}
function bu(a,b){if(a<0||a>this.b){Fs(a,this.b)}this.a.splice(a,0,b);++this.b}
function du(a){return au(this,a,0)!=-1}
function eu(a){return Cs(a,this.b),this.a[a]}
function fu(){return this.b}
function Bt(){}
_=Bt.prototype=new qs();_.j=cu;_.i=bu;_.k=du;_.q=eu;_.C=fu;_.tI=17;_.a=null;_.b=0;function gj(a){Ct(a);return a}
function ij(c){var a,b;for(b=ts(new rs(),c);b.a<b.b.C();){a=dg(ws(b),5);pg(Ft(a.a.a,a.a.f.h.selectedIndex));null.E()}}
function fj(){}
_=fj.prototype=new Bt();_.tI=18;function Dk(a){a.h=$doc.createElement((ee(),mb));a.h[D]=nb;return a}
function Fk(a){li(a)}
function Ck(){}
_=Ck.prototype=new nn();_.w=Fk;_.tI=19;function yj(a){a.h=$doc.createElement((ee(),mb));a.h[D]=pb;return a}
function xj(){}
_=xj.prototype=new Ck();_.tI=20;function bk(){bk=hv;Fj(new Ej(),qb);dk=Fj(new Ej(),F);Fj(new Ej(),rb);ck=dk}
var ck,dk;function Fj(b,a){b.a=a;return b}
function Ej(){}
_=Ej.prototype=new Fp();_.tI=0;_.a=null;function jk(){jk=hv;hk(new gk(),sb);hk(new gk(),tb);kk=hk(new gk(),bb)}
var kk;function hk(a,b){a.a=b;return a}
function gk(){}
_=gk.prototype=new Fp();_.tI=0;_.a=null;function ok(a){dj(a);bk();jk();a.a=$doc.createElement((ee(),ub));a.c.appendChild(a.a);a.d[vb]=wb;a.d[xb]=wb;return a}
function qk(c){var a,b;b=ie((ee(),c.h));a=oj(this,c);if(a){this.a.removeChild(b)}return a}
function nk(){}
_=nk.prototype=new cj();_.A=qk;_.tI=21;_.a=null;function zk(){zk=hv;ds(new ju())}
function yk(a,b){zk();vk(new uk(),a,b);a.h[D]=yb;return a}
function Ak(a){li(a)}
function rk(){}
_=rk.prototype=new nn();_.w=Ak;_.tI=22;function sk(){}
_=sk.prototype=new Fp();_.tI=0;function vk(b,a,c){bo(a,$doc.createElement((ee(),Ab)));Dh(a.h,229501|(a.h.__eventBits||0));a.h.src=c;return b}
function uk(){}
_=uk.prototype=new sk();_.tI=0;function bl(b,a){sj(b,he((ee(),a)));b.h[D]=Bb;return b}
function el(a){if(li(a)==1024){}else{vj(this,a)}}
function al(){}
_=al.prototype=new rj();_.w=el;_.tI=23;function il(a,b){Ct(new Bt());a.b=Ct(new Bt());ll(a,b,(ol(),new ml()));return a}
function kl(d,a){var b,c;for(c=ts(new rs(),d.b);c.a<c.b.C();){b=pg(ws(c));if(be((ee(),null.E()),a)){return b}}return null}
function ll(d,f){var b,c,e,a;c=$doc.createElement((ee(),ib));d.a=$doc.createElement(jb);c.appendChild(d.a);if(!f){e=$doc.createElement(ub);d.a.appendChild(e)}b=(a=$doc.createElement(Cb),a.tabIndex=0,a);b.appendChild(c);d.h=b;d.h.setAttribute(Db,Eb);Dh(d.h,2225|(d.h.__eventBits||0));d.h[D]=Fb;if(f){Bm(d,dn(d.h)+ac+bc)}else{Bm(d,dn(d.h)+ac+cc)}d.h.style[dc]=fc;d.h.setAttribute(gc,hc)}
function pl(a){var b;kl(this,a.target);switch(li(a)){case 1:{this.h.focus();break}{break}case 2048:{pg(Ft(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{pg(Ft(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{pg(Ft(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:pg(Ft(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:pg(Ft(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{pg(Ft(this.b,0))}}break}}}
function ql(){Fn(this)}
function fl(){}
_=fl.prototype=new nn();_.w=pl;_.x=ql;_.tI=24;_.a=null;function ol(){ol=hv}
function ml(){}
_=ml.prototype=new Fp();_.tI=0;function tm(b,a){b.h=a;b.h.tabIndex=0;return b}
function vm(b,a){b.h[ic]=a;if(a){Bm(b,dn(b.h)+ac+jc)}else{Dm(b,dn(b.h)+ac+jc)}}
function xm(a){var b;b=li(a);if((b&896)!=0){vj(this,a)}else if(b==1024){}else{vj(this,a)}}
function sm(){}
_=sm.prototype=new rj();_.w=xm;_.tI=25;function ym(c,a,b){c.h=a;c.h.tabIndex=0;if(b!=null){c.h[D]=b}return c}
function rm(){}
_=rm.prototype=new sm();_.tI=26;function xl(){}
_=xl.prototype=new rm();_.tI=27;function bm(){bm=hv;fm=ku(new ju());gm=ou(new nu())}
function am(b,a){bm();b.e=wn(new on());b.h=a;En(b);return b}
function cm(){var b,a;bm();var c,d;for(d=(b=kr(new jr(),ut(gm.a).b.a),et(new dt(),b));vs(d.a.a);){c=dg((a=dg(ws(d.a.a),11),a.o()),7);if(c.f){c.x()}}}
function em(b){bm();var a,c;c=dg(is(fm,b),6);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(fm.d==0){qh(new Bl())}if(!a){c=El(new Dl())}else{c=am(new Al(),a)}os(fm,b,c);pu(gm,c);return c}
function Al(){}
_=Al.prototype=new ui();_.tI=28;var fm,gm;function Bl(){}
_=Bl.prototype=new Fp();_.tI=29;function Fl(){Fl=hv;bm()}
function El(a){Fl();am(a,$doc.body);return a}
function Dl(){}
_=Dl.prototype=new Al();_.tI=30;function pm(a){tm(a,$doc.createElement((ee(),kc)));a.h[D]=lc;return a}
function om(){}
_=om.prototype=new sm();_.tI=31;function hn(a){dj(a);a.a=(bk(),ck);a.b=(jk(),kk);a.d[vb]=wb;a.d[xb]=wb;return a}
function jn(c,e){var b,d,a;d=$doc.createElement((ee(),ub));b=(a=$doc.createElement(mc),(a[nc]=c.a.a,undefined),(a.style[oc]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);ao(e);xn(c.e,e);b.appendChild(e.h);co(e,c)}
function mn(c){var a,b;b=ie((ee(),c.h));a=oj(this,c);if(a){this.c.removeChild(ie(b))}return a}
function fn(){}
_=fn.prototype=new cj();_.A=mn;_.tI=32;function wn(a){a.a=zf(tg,0,7,4,0);return a}
function xn(a,b){An(a,b,a.b)}
function zn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function An(d,e,a){var b,c;if(a<0||a>d.b){throw new Bp()}if(d.b==d.a.length){c=zf(tg,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){Cf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Cf(d.a,b,d.a[b-1])}Cf(d.a,a,e)}
function Bn(c,b){var a;if(b<0||b>=c.b){throw new Bp()}--c.b;for(a=b;a<c.b;++a){Cf(c.a,a,c.a[a+1])}Cf(c.a,c.b,null)}
function Cn(b,c){var a;a=zn(b,c);if(a==-1){throw new av()}Bn(b,a)}
function on(){}
_=on.prototype=new Fp();_.tI=0;_.a=null;_.b=0;function rn(b,a){b.b=a;return b}
function tn(a){if(a.a>=a.b.b){throw new av()}return a.b.a[++a.a]}
function un(){return this.a<this.b.b-1}
function vn(){return tn(this)}
function pn(){}
_=pn.prototype=new Fp();_.r=un;_.v=vn;_.tI=0;_.a=-1;_.b=null;function zo(b,a){if(a.a){b.e.h.innerHTML=qc}else{b.e.h.innerHTML=rc}}
function Do(a){}
function Co(a){}
function po(){}
_=po.prototype=new lf();_.t=Do;_.s=Co;_.tI=0;function ro(b,a){b.a=a;return b}
function qo(){}
_=qo.prototype=new Fp();_.tI=33;_.a=null;function uo(b){var a;b.d=hn(new fn());b.c=ok(new nk());b.g=hn(new fn());b.f=bl(new al(),false);b.b=pm(new om());il(new fl(),false);Fi(new Ai(),sc);b.e=Dk(new Ck());yj(new xj());hn(new fn());ym(new rm(),ge((ee(),tc)),uc);ym(new xl(),(a=$doc.createElement(m),a.type=vc,a),wc);Ei(new Ai());yk(new rk(),$moduleBase+xc);b.a=Ct(new Bt());b.s(new gf());b.t(new of());tj(b.f,ro(new qo(),b));b.f.h.size=5;b.f.h.style[yc]=zc;b.b.h[Bc]=Cc!=null?Cc:ab;vm(b.b,true);b.b.h.style[yc]=zc;b.b.h.style[Dc]=Ec;jn(b.g,b.f);jn(b.g,b.b);b.g.h.style[Dc]=Fc;b.g.h.style[yc]=zc;zo(b,(ep(),ep(),fp));jn(b.d,b.c);jn(b.d,b.g);jn(b.d,b.e);b.d.h.style[Dc]=ad;b.d.h.style[yc]=zc;vi((bm(),em(null)),b.d);em(bd);$wnd._IG_AdjustIFrameHeight();return b}
function to(){}
_=to.prototype=new po();_.tI=0;function Dq(){}
_=Dq.prototype=new Fp();_.tI=3;function tp(){}
_=tp.prototype=new Dq();_.tI=4;function dq(){}
_=dq.prototype=new tp();_.tI=5;function ap(){}
_=ap.prototype=new dq();_.tI=35;function ep(){ep=hv;dp(new cp(),false);fp=dp(new cp(),true)}
function dp(a,b){ep();a.a=b;return a}
function gp(a){return a!=null&&cg(a.tI,10)&&dg(a,10).a==this.a}
function hp(){return this.a?1231:1237}
function cp(){}
_=cp.prototype=new Fp();_.eQ=gp;_.hC=hp;_.tI=38;_.a=false;var fp;function np(c,a){var b;b=new jp();return b}
function jp(){}
_=jp.prototype=new Fp();_.tI=0;function kp(){}
_=kp.prototype=new dq();_.tI=39;function vp(){}
_=vp.prototype=new dq();_.tI=40;function yp(){}
_=yp.prototype=new dq();_.tI=41;function Cp(b,a){return b}
function Bp(){}
_=Bp.prototype=new dq();_.tI=42;function rq(b,a){if(!(a!=null&&cg(a.tI,1))){return false}return String(b)==a}
function vq(b,a){return b.substr(a,b.length-a)}
function xq(c){if(c.length==0||c[0]>E&&c[c.length-1]>E){return c}var a=c.replace(/^(\s*)/,ab);var b=a.replace(/\s*$/,ab);return b}
function zq(a){return rq(this,a)}
function Bq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Cq(){return nq(this)}
_=String.prototype;_.eQ=zq;_.hC=Cq;_.tI=2;function iq(){iq=hv;jq={};mq={}}
function kq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function nq(c){iq();var a=cd+c;var b=mq[a];if(b!=null){return b}b=jq[a];if(b==null){b=kq(c)}oq();return mq[a]=b}
function oq(){if(lq==256){jq=mq;mq={};lq=0}++lq}
var jq,lq=0,mq;function Fq(){}
_=Fq.prototype=new dq();_.tI=43;function ut(b){var a;a=or(new ir(),b);return jt(new ct(),b,a)}
function vt(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&cg(c.tI,13))){return false}e=dg(c,13);if(dg(this,13).d!=e.d){return false}for(b=kr(new jr(),or(new ir(),e).a);vs(b.a);){a=dg(ws(b.a),11);d=a.o();f=a.p();if(!(d==null?dg(this,13).c:d!=null&&cg(d.tI,1)?ks(dg(this,13),dg(d,1)):js(dg(this,13),d,~~vd(d)))){return false}if(!gv(f,d==null?dg(this,13).b:d!=null&&cg(d.tI,1)?dg(this,13).e[cd+dg(d,1)]:gs(dg(this,13),d,~~vd(d)))){return false}}return true}
function wt(){var a,b,c;c=0;for(b=kr(new jr(),or(new ir(),dg(this,13)).a);vs(b.a);){a=dg(ws(b.a),11);c+=a.hC();c=~~c}return c}
function bt(){}
_=bt.prototype=new Fp();_.eQ=vt;_.hC=wt;_.tI=0;function bs(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function cs(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Fr(e,c.substring(1));a.j(b)}}}
function ds(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function fs(b,a){return a==null?b.c:a!=null&&cg(a.tI,1)?ks(b,dg(a,1)):js(b,a,~~vd(a))}
function is(b,a){return a==null?b.b:a!=null&&cg(a.tI,1)?b.e[cd+dg(a,1)]:gs(b,a,~~vd(a))}
function gs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function js(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function ks(b,a){return cd+a in b.e}
function os(b,a,c){return a==null?ms(b,c):a!=null&&cg(a.tI,1)?ns(b,dg(a,1),c):ls(b,a,c,~~vd(a))}
function ls(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.B(j);return h}}}else{a=i.a[e]=[]}var c=zu(new yu(),g,j);a.push(c);++i.d;return null}
function ms(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ns(d,a,e){var b,c=d.e;a=cd+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ps(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&td(a,b)}
function hr(){}
_=hr.prototype=new bt();_.n=ps;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function zt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&cg(b.tI,14))){return false}c=dg(b,14);if(c.C()!=this.C()){return false}for(a=c.u();a.r();){d=a.v();if(!this.k(d)){return false}}return true}
function At(){var a,b,c;a=0;for(b=this.u();b.r();){c=b.v();if(c!=null){a+=vd(c);a=~~a}}return a}
function xt(){}
_=xt.prototype=new cr();_.eQ=zt;_.hC=At;_.tI=44;function or(b,a){b.a=a;return b}
function qr(d,c){var a,b,e;if(c!=null&&cg(c.tI,11)){a=dg(c,11);b=a.o();if(fs(d.a,b)){e=is(d.a,b);return mu(a.p(),e)}}return false}
function rr(a){return qr(this,a)}
function sr(){return kr(new jr(),this.a)}
function tr(){return this.a.d}
function ir(){}
_=ir.prototype=new xt();_.k=rr;_.u=sr;_.C=tr;_.tI=45;_.a=null;function kr(c,b){var a;c.b=b;a=Ct(new Bt());if(c.b.c){Dt(a,vr(new ur(),c.b))}cs(c.b,a);bs(c.b,a);c.a=ts(new rs(),a);return c}
function mr(){return vs(this.a)}
function nr(){return dg(ws(this.a),11)}
function jr(){}
_=jr.prototype=new Fp();_.r=mr;_.v=nr;_.tI=0;_.a=null;_.b=null;function rt(b){var a;if(b!=null&&cg(b.tI,11)){a=dg(b,11);if(gv(this.o(),a.o())&&gv(this.p(),a.p())){return true}}return false}
function st(){var a,b;a=0;b=0;if(this.o()!=null){a=vd(this.o())}if(this.p()!=null){b=vd(this.p())}return a^b}
function pt(){}
_=pt.prototype=new Fp();_.eQ=rt;_.hC=st;_.tI=46;function vr(b,a){b.a=a;return b}
function xr(){return null}
function yr(){return this.a.b}
function zr(a){return ms(this.a,a)}
function ur(){}
_=ur.prototype=new pt();_.o=xr;_.p=yr;_.B=zr;_.tI=47;_.a=null;function Br(c,a,b){c.b=b;c.a=a;return c}
function Dr(){return this.a}
function Er(){return this.b.e[cd+this.a]}
function Fr(b,a){return Br(new Ar(),a,b)}
function as(a){return ns(this.b,this.a,a)}
function Ar(){}
_=Ar.prototype=new pt();_.o=Dr;_.p=Er;_.B=as;_.tI=48;_.a=null;_.b=null;function ts(b,a){b.b=a;return b}
function vs(a){return a.a<a.b.C()}
function ws(a){if(a.a>=a.b.C()){throw new av()}return a.b.q(a.a++)}
function xs(){return this.a<this.b.C()}
function ys(){return ws(this)}
function rs(){}
_=rs.prototype=new Fp();_.r=xs;_.v=ys;_.tI=0;_.a=0;_.b=null;function jt(b,a,c){b.a=a;b.b=c;return b}
function mt(a){return fs(this.a,a)}
function nt(){var a;return a=kr(new jr(),this.b.a),et(new dt(),a)}
function ot(){return this.b.a.d}
function ct(){}
_=ct.prototype=new xt();_.k=mt;_.u=nt;_.C=ot;_.tI=49;_.a=null;_.b=null;function et(a,b){a.a=b;return a}
function ht(){return vs(this.a.a)}
function it(){var a;return a=dg(ws(this.a.a),11),a.o()}
function dt(){}
_=dt.prototype=new Fp();_.r=ht;_.v=it;_.tI=0;_.a=null;function ku(a){ds(a);return a}
function mu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&td(a,b)}
function ju(){}
_=ju.prototype=new hr();_.tI=50;function ou(a){a.a=ku(new ju());return a}
function pu(c,a){var b;b=os(c.a,a,c);return b==null}
function ru(b){var a;return a=os(this.a,b,this),a==null}
function su(a){return fs(this.a,a)}
function tu(){var a;return a=kr(new jr(),ut(this.a).b.a),et(new dt(),a)}
function uu(){return this.a.d}
function nu(){}
_=nu.prototype=new xt();_.j=ru;_.k=su;_.u=tu;_.C=uu;_.tI=51;_.a=null;function zu(b,a,c){b.a=a;b.b=c;return b}
function Bu(){return this.a}
function Cu(){return this.b}
function Eu(b){var a;a=this.b;this.b=b;return a}
function yu(){}
_=yu.prototype=new pt();_.o=Bu;_.p=Cu;_.B=Eu;_.tI=52;_.a=null;_.b=null;function av(){}
_=av.prototype=new dq();_.tI=53;function gv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&td(a,b)}
function Eo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:dd,evtGroup:ed,millis:(new Date()).getTime(),type:gd,className:hd});uo(new to())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{Eo()}catch(a){b(d)}else{Eo()}}
function hv(){}
var tg=np(id,jd),ug=np(kd,ld);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();