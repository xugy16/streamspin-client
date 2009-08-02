(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var uc='',dd=' ',kb=" border='0'><\/gwt:clipper>",jb=' height=',ib='" width=',fb='"><img src=\'',l='#',vb='$',gb="' onerror='if(window.__gwt_transparentImgHandler)window.__gwt_transparentImgHandler(this);else this.src=\"",ab="',sizingMethod='crop'); margin-left: ",yb=', Size: ',fe='-',jc='/',yd='0',ve='0.0',je='0px',Ae='100%',sb='100px',x='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',p='50%',ne='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',wb=':',r='<\/div>',Dd='<SELECT>',q="<div class='vsplitter' style='text-align:center;'>",eb='<gwt:clipper style="',m='?',Fc='BackgroundImageCache',Dc='CSS1Compat',be='DIV',oc='DOMMouseScroll',xb='Index: ',nb='Item one',pb='Item two',dc='JavaScriptObject$;',bc='Object;',rb='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',Fb='Widget;',cc='[Lcom.google.gwt.core.client.',Eb='[Lcom.google.gwt.user.client.ui.',ac='[Ljava.lang.',ub='\\',kd='__gwt_initWindowCloseHandler',oe='absolute',Bd='align',ye='alpha(opacity=0)',t='auto',se='background',vd='blur',re='border',td='bottom',tb='buhu',hd='button',zd='cellPadding',xd='cellSpacing',rd='center',ae='change',cd='className',lb='clear.cache.gif',hb='clear.cache.gif"\' style="',le='click',Db='com.streamspin.client.StreamSpinClient',pc='contextmenu',we='dblclick',od='div',mc='error',xe='filter',F="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",n='focus',Ec='function',ad='function ',id='gwt-Button',qd='gwt-HTML',pd='gwt-Label',Ed='gwt-ListBox',ee='gwt-MenuBar',af='gwt-TextArea',o='gwt-VerticalSplitPanel',Be='height',ke='hideFocus',he='horizontal',B='http://',z='https',A='https://',y='keydown',db='keypress',ob='keyup',ed='left',zb='load',ec='losecapture',pe='margin',de='menubar',ud='middle',Bb='moduleStartup',fc='mousedown',gc='mousemove',hc='mouseout',ic='mouseover',kc='mouseup',nc='mousewheel',Ee='none',Ce='offsetHeight',Cb='onModuleLoadStart',Ac='onblur',qc='onclick',Cc='oncontextmenu',Bc='ondblclick',zc='onfocus',wc='onkeydown',xc='onkeypress',yc='onkeyup',mb='online stuff',rc='onmousedown',tc='onmousemove',sc='onmouseup',vc='onmousewheel',u='onresize',ue='opacity',Fd='option',ie='outline',s='overflow',C='overflow: hidden; width: ',qe='padding',gd='position',De='px',cb='px; border: none',D='px; height: ',bb='px; margin-top: ',E='px; padding: 0px; zoom: 1',w='relative',sd='right',ce='role',bd='script',lc='scroll',Ab='startup',jd='submit',md='table',nd='tbody',Ad='td',v='textAlign',Fe='textarea',fd='top',wd='tr',me='true',ld='type',qb='value',ge='vertical',Cd='verticalAlign',te='white',ze='width';var _;function rv(a){return this===(a==null?null:a)}
function sv(){return this.$H||(this.$H=++zf)}
function pv(){}
_=pv.prototype={};_.eQ=rv;_.hC=sv;_.tM=AA;_.tI=1;function pf(b,a){return b.tM==AA||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function rf(a){return a.tM==AA||a.tI==2?a.hC():a.$H||(a.$H=++zf)}
function wf(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(jc);if(a!=-1)b=b.substring(0,a);return b.length>0?b+jc:uc}
var zf=0;function bg(b,a){return b===a||b.contains(a)}
function cg(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function yg(){yg=AA;Bg()}
function Ag(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function Bg(){try{$doc.execCommand(Fc,false,true)}catch(a){}}
function Fg(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function ah(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;Ag(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function bh(a,c){yg();var b,d;if(bw(a.__pendingSrc||a.src,c)){return}if(!ch){ch={}}b=a.__pendingSrc;if(b!=null){d=ch[b];if(d==a){ah(ch,d)}else{Fg(d,a)}}d=ch[c];if(!d){Ag(ch,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var ch=null;function xh(){}
_=xh.prototype=new pv();_.tI=0;function Eh(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function Fh(a,f,c,b,e){var d;d=Eh(e,b);ai(a,f,c,d);return d}
function ai(b,d,c,a){if(!bi){bi=new Ah()}ei(a,bi);a.tI=d;a.qI=c;return a}
function ci(a,b,c){if(c!=null){if(a.qI>0&&!hi(c.tI,a.qI)){throw new tu()}if(a.qI<0&&(c.tM==AA||c.tI==2)){throw new tu()}}return a[b]=c}
function ei(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Ah(){}
_=Ah.prototype=new pv();_.tI=0;_.length=0;_.qI=0;var bi=null;function ii(b,a){return b&&!!wi[b][a]}
function hi(b,a){return b&&wi[b][a]}
function ji(b,a){if(b!=null&&!hi(b.tI,a)){throw new xu()}return b}
function vi(a){if(a!=null){throw new xu()}return a}
var wi=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{4:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function pw(){}
_=pw.prototype=new pv();_.tI=3;function av(){}
_=av.prototype=new pw();_.tI=4;function tv(){}
_=tv.prototype=new av();_.tI=5;function kj(a){return a}
function jj(){}
_=jj.prototype=new tv();_.tI=7;function bk(a){a.a=oj(new nj(),a);a.b=nz(new mz());a.d=sj(new rj(),a);a.f=xj(new vj(),a);return a}
function dk(b){var a;a=zj(b.f);Cj(b.f);if(a!=null&&ii(a.tI,3)){kj(new jj(),ji(a,3))}else{}b.c=false;fk(b)}
function ek(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;cl(d.a,10000);while(Aj(d.f)){b=Bj(d.f);try{if(b==null){return}if(b!=null&&ii(b.tI,3)){a=ji(b,3);ss(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}Cj(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){Fk(d.a);d.c=false;fk(d)}}}
function fk(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;cl(a.d,1)}}
function hk(b,a){pz(b.b,a);fk(b)}
function mj(){}
_=mj.prototype=new pv();_.tI=0;_.c=false;_.e=false;function al(){al=AA;hl=nz(new mz());ll(new Bk())}
function Fk(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}uz(hl,a)}
function bl(a){if(!a.b){uz(hl,a)}a.F()}
function cl(b,a){if(a<=0){throw new cv()}Fk(b);b.b=false;b.c=fl(b,a);pz(hl,b)}
function fl(b,a){return $wnd.setTimeout(function(){b.r()},a)}
function gl(){bl(this)}
function Ak(){}
_=Ak.prototype=new pv();_.r=gl;_.tI=8;_.b=false;_.c=0;var hl;function pj(){pj=AA;al()}
function oj(b,a){pj();b.a=a;return b}
function qj(){if(!this.a.c){return}dk(this.a)}
function nj(){}
_=nj.prototype=new Ak();_.F=qj;_.tI=9;_.a=null;function tj(){tj=AA;al()}
function sj(b,a){tj();b.a=a;return b}
function uj(){this.a.e=false;ek(this.a,(new Date()).getTime())}
function rj(){}
_=rj.prototype=new Ak();_.F=uj;_.tI=10;_.a=null;function xj(b,a){b.d=a;return b}
function zj(a){return rz(a.d.b,a.b)}
function Aj(a){return a.c<a.a}
function Bj(b){var a;b.b=b.c;a=rz(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function Cj(a){tz(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function Ej(){return this.c<this.a}
function Fj(){return Bj(this)}
function vj(){}
_=vj.prototype=new pv();_.u=Ej;_.w=Fj;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function mk(b,a,c){var d;if(a==qk){if(em(b)==8192){qk=null}}d=lk;lk=b;try{c.x(b)}finally{lk=d}}
function ok(a){return true}
function pk(a){if(!!qk&&a==qk){qk=null}gm();a.releaseCapture()}
function rk(a){qk=a;gm();a.setCapture()}
function uk(a,b){gm();Bl(a,b)}
var lk=null,qk=null;function wk(){wk=AA;yk=bk(new mj())}
function xk(a){wk();if(!a){throw new mv()}hk(yk,a)}
var yk;function Dk(){while((al(),hl).b>0){Fk(ji(rz(hl,0),4))}}
function Ek(){return null}
function Bk(){}
_=Bk.prototype=new pv();_.C=Dk;_.D=Ek;_.tI=11;function ll(a){ql();if(!ml){ml=nz(new mz())}pz(ml,a)}
function nl(){var a,b;if(ml){for(b=fy(new dy(),ml);b.a<b.b.b;){a=ji(iy(b),5);a.C()}}}
function ol(){var a,b,c,d;d=null;if(ml){for(b=fy(new dy(),ml);b.a<b.b.b;){a=ji(iy(b),5);c=a.D();d=c}}return d}
function ql(){if(!pl){pl=true;tm(sm(),kd)}}
var ml=null,pl=false;function em(a){switch(a.type){case vd:return 4096;case ae:return 1024;case le:return 1;case we:return 2;case n:return 2048;case y:return 128;case db:return 256;case ob:return 512;case zb:return 32768;case ec:return 8192;case fc:return 4;case gc:return 64;case hc:return 32;case ic:return 16;case kc:return 8;case lc:return 16384;case mc:return 65536;case nc:return 131072;case oc:return 131072;case pc:return 262144;}}
function gm(){if(!im){yl();im=true}}
var im=false;function yl(){El=function(){var c=Cl;Cl=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!ok($wnd.event)){Cl=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&ii(b.tI,6)&&!(b!=null&&(b.tM!=AA&&b.tI!=2))){mk($wnd.event,a,b)}}Cl=c};Dl=function(){var a=$doc.createEventObject();this.fireEvent(qc,a);if(this.__eventBits&2){El.call(this)}};var e=function(){El.call($doc.body)};var d=function(){Dl.call($doc.body)};$doc.body.attachEvent(qc,e);$doc.body.attachEvent(rc,e);$doc.body.attachEvent(sc,e);$doc.body.attachEvent(tc,e);$doc.body.attachEvent(vc,e);$doc.body.attachEvent(wc,e);$doc.body.attachEvent(xc,e);$doc.body.attachEvent(yc,e);$doc.body.attachEvent(zc,e);$doc.body.attachEvent(Ac,e);$doc.body.attachEvent(Bc,d);$doc.body.attachEvent(Cc,e)}
function Bl(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?El:null;if(b&3)c.ondblclick=a&3?Dl:null;if(b&4)c.onmousedown=a&4?El:null;if(b&8)c.onmouseup=a&8?El:null;if(b&16)c.onmouseover=a&16?El:null;if(b&32)c.onmouseout=a&32?El:null;if(b&64)c.onmousemove=a&64?El:null;if(b&128)c.onkeydown=a&128?El:null;if(b&256)c.onkeypress=a&256?El:null;if(b&512)c.onkeyup=a&512?El:null;if(b&1024)c.onchange=a&1024?El:null;if(b&2048)c.onfocus=a&2048?El:null;if(b&4096)c.onblur=a&4096?El:null;if(b&8192)c.onlosecapture=a&8192?El:null;if(b&16384)c.onscroll=a&16384?El:null;if(b&32768)c.onload=a&32768?El:null;if(b&65536)c.onerror=a&65536?El:null;if(b&131072)c.onmousewheel=a&131072?El:null;if(b&262144)c.oncontextmenu=a&262144?El:null}
var Cl=null,Dl=null,El=null;function mm(){mm=AA;om=nm((mm(),new km()))}
function nm(){return $doc.compatMode==Dc?$doc.documentElement:$doc.body}
function km(){}
_=km.prototype=new pv();_.tI=0;var om;function sm(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function tm(c,b){var d,a;c=fw(c,Ec,ad+b);d=(a=$doc.createElement(bd),a.text=c,a);$doc.body.appendChild(d);um();$doc.body.removeChild(d)}
function um(){$wnd.__gwt_initWindowCloseHandler(function(){return ol()},function(){nl()})}
function ar(b,a){gr(b.l,a,true)}
function fr(a){var b,c;b=a[cd]==null?null:String(a[cd]);c=b.indexOf(nw(32));if(c>=0){return b.substr(0,c-0)}return b}
function gr(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new tv()}j=iw(j);if(j.length==0){throw new cv()}i=c[cd]==null?null:String(c[cd]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=dd}c[cd]=i+j}}else{if(e!=-1){b=iw(i.substr(0,e-0));d=iw(gw(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+dd+d}c[cd]=h}}}
function Fq(){}
_=Fq.prototype=new pv();_.tI=12;_.l=null;function mt(a){if(a.j){throw new fv()}a.j=true;a.l.__listener=a;a.o();a.z()}
function nt(a){if(!a.j){throw new fv()}try{a.B()}finally{a.p();a.l.__listener=null;a.j=false}}
function ot(a){if(a.k){a.k.E(a)}else if(a.k){throw new fv()}}
function pt(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.y()}c.k=null}else{if(a){throw new fv()}c.k=b;if(b.j){mt(c)}}}
function qt(){}
function rt(){}
function st(a){}
function tt(){nt(this)}
function ut(){}
function vt(){}
function vs(){}
_=vs.prototype=new Fq();_.o=qt;_.p=rt;_.x=st;_.y=tt;_.z=ut;_.B=vt;_.tI=13;_.j=false;_.k=null;function pp(){var a,b;for(b=this.v();b.u();){a=ji(b.w(),7);mt(a)}}
function qp(){var a,b;for(b=this.v();b.u();){a=ji(b.w(),7);a.y()}}
function rp(){}
function sp(){}
function np(){}
_=np.prototype=new vs();_.o=pp;_.p=qp;_.z=rp;_.B=sp;_.tI=14;function ln(c,a,b){ot(a);Es(c.f,a);b.appendChild(a.l);pt(a,c)}
function nn(b,c){var a;if(c.k!=b){return false}pt(c,null);a=c.l;a.parentElement.removeChild(a);dt(b.f,c);return true}
function on(){return zs(new xs(),this.f)}
function pn(a){return nn(this,a)}
function jn(){}
_=jn.prototype=new np();_.v=on;_.E=pn;_.tI=15;function xm(a,b){ln(a,b,a.l)}
function zm(b,c){var a;a=nn(b,c);if(a){Am(c.l)}return a}
function Am(a){a.style[ed]=uc;a.style[fd]=uc;a.style[gd]=uc}
function Bm(a){return zm(this,a)}
function wm(){}
_=wm.prototype=new jn();_.E=Bm;_.tI=16;function Cm(){}
_=Cm.prototype=new pv();_.tI=0;function rn(b,a){b.l=a;b.l.tabIndex=0;return b}
function tn(a){em(a)}
function qn(){}
_=qn.prototype=new vs();_.x=tn;_.tI=17;function an(b,a){b.l=a;b.l.tabIndex=0;return b}
function Fm(){}
_=Fm.prototype=new qn();_.tI=18;function cn(a){an(a,$doc.createElement(hd));en(a.l);a.l[cd]=id;return a}
function en(b){if(b.type==jd){try{b.setAttribute(ld,hd)}catch(a){}}}
function Em(){}
_=Em.prototype=new Fm();_.tI=19;function gn(a){a.f=Ds(new ws());a.e=$doc.createElement(md);a.d=$doc.createElement(nd);a.e.appendChild(a.d);a.l=a.e;return a}
function fn(){}
_=fn.prototype=new jn();_.tI=20;_.d=null;_.e=null;function vo(a){a.l=$doc.createElement(od);a.l[cd]=pd;return a}
function yo(a){em(a)}
function uo(){}
_=uo.prototype=new vs();_.x=yo;_.tI=21;function vn(a){a.l=$doc.createElement(od);a.l[cd]=qd;return a}
function un(){}
_=un.prototype=new uo();_.tI=22;function En(){En=AA;Cn(new Bn(),rd);ao=Cn(new Bn(),ed);Cn(new Bn(),sd);Fn=ao}
var Fn,ao;function Cn(b,a){b.a=a;return b}
function Bn(){}
_=Bn.prototype=new pv();_.tI=0;_.a=null;function ho(){ho=AA;fo(new eo(),td);fo(new eo(),ud);io=fo(new eo(),fd)}
var io;function fo(a,b){a.a=b;return a}
function eo(){}
_=eo.prototype=new pv();_.tI=0;_.a=null;function no(a){gn(a);a.a=(En(),Fn);a.c=(ho(),io);a.b=$doc.createElement(wd);a.d.appendChild(a.b);a.e[xd]=yd;a.e[zd]=yd;return a}
function oo(c,d){var b,a;b=(a=$doc.createElement(Ad),(a[Bd]=c.a.a,undefined),(a.style[Cd]=c.c.a,undefined),a);c.b.appendChild(b);ot(d);Es(c.f,d);b.appendChild(d.l);pt(d,c)}
function ro(c){var a,b;b=c.l.parentElement;a=nn(this,c);if(a){this.b.removeChild(b)}return a}
function lo(){}
_=lo.prototype=new fn();_.E=ro;_.tI=23;_.b=null;function Ao(b){var a;rn(b,(a=Dd,$doc.createElement(a)));b.l[cd]=Ed;return b}
function Do(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement(Fd);d.text=c;d.value=g;if(b==-1||b==e.options.length){cg(e,d,null)}else{a=e.options[b];cg(e,d,a)}}
function Fo(a){if(em(a)==1024){}else{em(a)}}
function zo(){}
_=zo.prototype=new qn();_.x=Fo;_.tI=24;function dp(a){nz(new mz());a.b=nz(new mz());gp(a,false,(jp(),new hp()));return a}
function fp(d,a){var b,c;for(c=fy(new dy(),d.b);c.a<c.b.b;){b=vi(iy(c));if(bg(null.db(),a)){return b}}return null}
function gp(d,f){var b,c,e,a;c=$doc.createElement(md);d.a=$doc.createElement(nd);c.appendChild(d.a);if(!f){e=$doc.createElement(wd);d.a.appendChild(e)}b=(a=$doc.createElement(be),a.tabIndex=0,a);b.appendChild(c);d.l=b;d.l.setAttribute(ce,de);uk(d.l,2225|(d.l.__eventBits||0));d.l[cd]=ee;if(f){ar(d,fr(d.l)+fe+ge)}else{ar(d,fr(d.l)+fe+he)}d.l.style[ie]=je;d.l.setAttribute(ke,me)}
function lp(a){var b;fp(this,a.srcElement);switch(em(a)){case 1:{eu(this.l);break}{break}case 2048:{vi(rz(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{vi(rz(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{vi(rz(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:vi(rz(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:vi(rz(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{vi(rz(this.b,0))}}break}}}
function mp(){nt(this)}
function ap(){}
_=ap.prototype=new vs();_.x=lp;_.y=mp;_.tI=25;_.a=null;function jp(){jp=AA;kp=$moduleBase+ne;Ft(new Dt(),kp,0,0,5,9)}
function hp(){}
_=hp.prototype=new pv();_.tI=0;var kp;function Dp(){Dp=AA;bq=Dz(new Cz());cq=bA(new aA())}
function Cp(b,a){Dp();b.f=Ds(new ws());b.l=a;mt(b);return b}
function Ep(){var b,a;Dp();var c,d;for(d=(b=Cw(new Bw(),fz(cq.a).b.a),vy(new uy(),b));hy(d.a.a);){c=ji((a=ji(iy(d.a.a),13),a.s()),7);if(c.j){c.y()}}}
function aq(a){Dp();var b;b=ji(Ax(bq,a),8);if(b){return b}if(bq.d==0){ll(new vp())}b=Ap(new zp());ay(bq,a,b);cA(cq,b);return b}
function up(){}
_=up.prototype=new wm();_.tI=26;var bq,cq;function xp(){Ep()}
function yp(){return null}
function vp(){}
_=vp.prototype=new pv();_.C=xp;_.D=yp;_.tI=27;function Bp(){Bp=AA;Dp()}
function Ap(a){Bp();Cp(a,$doc.body);return a}
function zp(){}
_=zp.prototype=new up();_.tI=28;function lq(e,b,c,a,d){e.i=Fh(Ai,0,7,2,0);e.f=Fh(zi,0,-1,2,0);e.l=b;e.h=c;ci(e.f,0,a);ci(e.f,1,d);uk(e.l,8316|(e.l.__eventBits||0));if(!sq){sq=$doc.createElement(od);sq.style[gd]=oe;sq.style[fd]=je;sq.style[ed]=je;sq.style[pe]=je;sq.style[qe]=je;sq.style[re]=je;sq.style[se]=te;sq.style[ue]=ve;sq.style[xe]=ye}return e}
function mq(a,b){if(!a.i[0]){pq(a,0,b)}else if(!a.i[1]){pq(a,1,b)}else{throw new fv()}}
function pq(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){ot(d)}if(b){pt(b,null);c.f[a].removeChild(b.l)}ci(c.i,a,d);if(d){c.f[a].appendChild(d.l);pt(d,c)}}
function rq(a){a.style[gd]=oe;a.style[fd]=je;a.style[ed]=je;a.style[ze]=Ae;a.style[Be]=Ae}
function tq(){return gt(new et(),this.i)}
function uq(c){var d,a,b;switch(em(c)){case 4:{d=c.srcElement;if(bg(this.h,d)){this.g=true;this.c=((c.clientX||0)-(this.l.getBoundingClientRect().left+(mm(),om).scrollLeft),(c.clientY||0)-(this.l.getBoundingClientRect().top+om.scrollTop));this.d=parseInt(this.f[0][Ce])||0;a=((Dp(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;sq.style[Be]=a+De;sq.style[ze]=b+De;$doc.body.appendChild(sq);rk(this.l);c.returnValue=false}break}case 8:{if(ji(this,11).g){ji(this,11).g=false;(Dp(),$doc.body).removeChild(sq);pk(this.l)}break}case 64:{if(ji(this,11).g){Er(this.b,this.d+((c.clientX||0)-(this.l.getBoundingClientRect().left+(mm(),om).scrollLeft),(c.clientY||0)-(this.l.getBoundingClientRect().top+om.scrollTop))-this.c);c.returnValue=false}break}case 8192:{if(ji(this,11).g){ji(this,11).g=false;(Dp(),$doc.body).removeChild(sq)}break}}}
function vq(a){a.style[qe]=yd;a.style[pe]=yd;a.style[re]=Ee;return a}
function wq(a){if(this.i[0]==a){pq(this,0,null);return true}else if(this.i[1]==a){pq(this,1,null);return true}return false}
function jq(){}
_=jq.prototype=new np();_.v=tq;_.x=uq;_.E=wq;_.tI=29;_.g=false;_.h=null;var sq=null;function Bq(b,a){b.l=a;b.l.tabIndex=0;return b}
function Eq(a){var b;b=em(a);if((b&896)!=0){em(a)}else if(b==1024){}else{em(a)}}
function Aq(){}
_=Aq.prototype=new qn();_.x=Eq;_.tI=30;function yq(a){Bq(a,$doc.createElement(Fe));a.l[cd]=af;return a}
function xq(){}
_=xq.prototype=new Aq();_.tI=31;function jr(a){gn(a);a.a=(En(),Fn);a.b=(ho(),io);a.e[xd]=yd;a.e[zd]=yd;return a}
function kr(c,e){var b,d,a;d=$doc.createElement(wd);b=(a=$doc.createElement(Ad),(a[Bd]=c.a.a,undefined),(a.style[Cd]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);ot(e);Es(c.f,e);b.appendChild(e.l);pt(e,c)}
function nr(c){var a,b;b=c.l.parentElement;a=nn(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function hr(){}
_=hr.prototype=new fn();_.E=nr;_.tI=32;function ms(a){ns(a,(is(),new gs()));return a}
function ns(e){lq(e,$doc.createElement(od),$doc.createElement(od),vq($doc.createElement(od)),vq($doc.createElement(od)));e.b=new tr();e.a=vq($doc.createElement(od));os(e,(is(),ks));e.l[cd]=o;Cr(e.b,e);ss(e,p);return e}
function os(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=q+zt(d.d,d.b,d.c,d.e,d.a)+r||uc;e.style[s]=t;a.style[s]=t}
function ss(b,a){var c;b.e=a;c=b.f[0];c.style[Be]=a;ds(b.b,parseInt(c[Ce])||0)}
function ts(){Dr(this.b);ss(this,this.e);xk(qr(new pr(),this))}
function us(){this.b.e.a[u]=null}
function or(){}
_=or.prototype=new jq();_.z=ts;_.B=us;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function qr(b,a){b.a=a;return b}
function pr(){}
_=pr.prototype=new pv();_.tI=34;_.a=null;function ds(f,b){var a,c,d,e;d=f.e.h;c=parseInt(f.e.a[Ce])||0;e=parseInt(d[Ce])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}Fr(f,f.e.f[0],d,f.e.f[1],b,b+e,a)}
function sr(){}
_=sr.prototype=new pv();_.tI=0;_.e=null;function Ar(c,a){var b=c;a.onresize=function(){b.A()}}
function Cr(d,c){var a,b,e;d.e=c;b=c.l;b.style[v]=ed;b.style[gd]=w;e=c.f[0];a=c.f[1];as(e);as(a);as(c.h);rq(c.a)}
function Dr(a){Ar(a,a.e.a);ds(a,parseInt(a.e.f[0][Ce])||0)}
function Er(b,a){if(!b.b){b.b=true;cl(vr(new ur(),b),20)}b.d=a}
function Fr(e,f,d,a,g,c,b){if(g==0){f.style[ze]=je;e.c=true}else if(e.c){f.style[ze]=Ae;e.c=false}if(b==0){a.style[ze]=je;e.a=true}else if(e.a){a.style[ze]=Ae;e.a=false}f.style[Be]=g+De;d.style[fd]=g+De;a.style[fd]=c+De;a.style[Be]=b+De}
function as(a){a.style[gd]=oe;a.style[ed]=yd;a.style[ze]=Ae}
function bs(){ds(this,parseInt(this.e.f[0][Ce])||0)}
function tr(){}
_=tr.prototype=new sr();_.A=bs;_.tI=0;_.a=false;_.b=false;_.c=false;_.d=0;function wr(){wr=AA;al()}
function vr(b,a){wr();b.a=a;return b}
function xr(){ds(this.a,this.a.d);this.a.b=false}
function ur(){}
_=ur.prototype=new Ak();_.F=xr;_.tI=35;_.a=null;function is(){is=AA;js=$moduleBase+x;ks=Ft(new Dt(),js,0,0,7,7)}
function gs(){}
_=gs.prototype=new pv();_.tI=0;var js,ks;function Ds(a){a.a=Fh(Ai,0,7,4,0);return a}
function Es(a,b){bt(a,b,a.b)}
function at(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function bt(d,e,a){var b,c;if(a<0||a>d.b){throw new iv()}if(d.b==d.a.length){c=Fh(Ai,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){ci(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){ci(d.a,b,d.a[b-1])}ci(d.a,a,e)}
function ct(c,b){var a;if(b<0||b>=c.b){throw new iv()}--c.b;for(a=b;a<c.b;++a){ci(c.a,a,c.a[a+1])}ci(c.a,c.b,null)}
function dt(b,c){var a;a=at(b,c);if(a==-1){throw new tA()}ct(b,a)}
function ws(){}
_=ws.prototype=new pv();_.tI=0;_.a=null;_.b=0;function zs(b,a){b.b=a;return b}
function Bs(){return this.a<this.b.b-1}
function Cs(){if(this.a>=this.b.b){throw new tA()}return this.b.a[++this.a]}
function xs(){}
_=xs.prototype=new pv();_.u=Bs;_.w=Cs;_.tI=0;_.a=-1;_.b=null;function gt(a,b){a.b=b;it(a);return a}
function it(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function jt(){return this.a<this.b.length}
function kt(){var a;if(this.a>=this.b.length){throw new tA()}a=this.b[this.a];it(this);return a}
function et(){}
_=et.prototype=new pv();_.u=jt;_.w=kt;_.tI=0;_.a=-1;_.b=null;function yt(){yt=AA;Bt=wf().indexOf(z)==0?A:B}
function zt(g,e,f,h,c){var a,b,d;b=C+h+D+c+E;d=F+g+ab+-e+bb+-f+cb;a=eb+b+fb+Bt+gb+$moduleBase+hb+d+ib+(e+h)+jb+(f+c)+kb;return a}
function At(){yt();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;bh(a,$moduleBase+lb)}}
var Bt;function au(){au=AA;yt();At()}
function Ft(c,e,b,d,f,a){au();c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function Dt(){}
_=Dt.prototype=new Cm();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function eu(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function iu(){}
_=iu.prototype=new xh();_.tI=0;function ku(a){a.d=jr(new hr());a.c=no(new lo());a.i=ms(new or());a.h=Ao(new zo());a.a=yq(new xq());a.e=dp(new ap());a.b=cn(new Em());a.f=vo(new uo());a.g=vn(new un());a.f.l.innerText=mb;oo(a.c,a.b);oo(a.c,a.e);Do(a.h,nb,nb,-1);Do(a.h,pb,pb,-1);a.h.l.size=6;a.h.l.style[ze]=Ae;a.a.l[qb]=rb!=null?rb:uc;mq(a.i,a.h);mq(a.i,a.a);a.i.l.style[Be]=sb;a.g.l.innerText=tb;kr(a.d,a.g);kr(a.d,a.i);kr(a.d,a.f);kr(a.d,a.c);a.d.l.style[Be]=Ae;a.d.l.style[ze]=Ae;xm((Dp(),aq(null)),a.d);return a}
function ju(){}
_=ju.prototype=new iu();_.tI=0;function tu(){}
_=tu.prototype=new tv();_.tI=37;function Au(c,a){var b;b=new wu();return b}
function wu(){}
_=wu.prototype=new pv();_.tI=0;function xu(){}
_=xu.prototype=new tv();_.tI=40;function cv(){}
_=cv.prototype=new tv();_.tI=41;function fv(){}
_=fv.prototype=new tv();_.tI=42;function jv(b,a){return b}
function iv(){}
_=iv.prototype=new tv();_.tI=43;function mv(){}
_=mv.prototype=new tv();_.tI=44;function bw(b,a){if(!(a!=null&&ii(a.tI,1))){return false}return String(b)==a}
function fw(c,a,b){b=kw(b);return c.replace(RegExp(a),b)}
function gw(b,a){return b.substr(a,b.length-a)}
function iw(c){if(c.length==0||c[0]>dd&&c[c.length-1]>dd){return c}var a=c.replace(/^(\s*)/,uc);var b=a.replace(/\s*$/,uc);return b}
function kw(b){var a;a=0;while(0<=(a=b.indexOf(ub,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+vb+gw(b,++a)}else{b=b.substr(0,a-0)+gw(b,++a)}}return b}
function lw(a){return bw(this,a)}
function nw(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ow(){return Dv(this)}
_=String.prototype;_.eQ=lw;_.hC=ow;_.tI=2;function yv(){yv=AA;zv={};Cv={}}
function Av(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function Dv(c){yv();var a=wb+c;var b=Cv[a];if(b!=null){return b}b=zv[a];if(b==null){b=Av(c)}Ev();return Cv[a]=b}
function Ev(){if(Bv==256){zv=Cv;Cv={};Bv=0}++Bv}
var zv,Bv=0,Cv;function rw(){}
_=rw.prototype=new tv();_.tI=45;function vw(a,b){var c;while(a.u()){c=a.w();if(b==null?c==null:pf(b,c)){return a}}return null}
function xw(a){throw new rw()}
function yw(b){var a;a=vw(this.v(),b);return !!a}
function uw(){}
_=uw.prototype=new pv();_.m=xw;_.n=yw;_.tI=0;function fz(b){var a;a=ax(new Aw(),b);return Ay(new ty(),b,a)}
function gz(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ii(c.tI,15))){return false}e=ji(c,15);if(ji(this,15).d!=e.d){return false}for(b=Cw(new Bw(),ax(new Aw(),e).a);hy(b.a);){a=ji(iy(b.a),13);d=a.s();f=a.t();if(!(d==null?ji(this,15).c:d!=null&&ii(d.tI,1)?Cx(ji(this,15),ji(d,1)):Bx(ji(this,15),d,~~rf(d)))){return false}if(!zA(f,d==null?ji(this,15).b:d!=null&&ii(d.tI,1)?ji(this,15).e[wb+ji(d,1)]:yx(ji(this,15),d,~~rf(d)))){return false}}return true}
function hz(){var a,b,c;c=0;for(b=Cw(new Bw(),ax(new Aw(),ji(this,15)).a);hy(b.a);){a=ji(iy(b.a),13);c+=a.hC();c=~~c}return c}
function sy(){}
_=sy.prototype=new pv();_.eQ=gz;_.hC=hz;_.tI=0;function tx(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function ux(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=rx(e,c.substring(1));a.m(b)}}}
function xx(b,a){return a==null?b.c:a!=null&&ii(a.tI,1)?Cx(b,ji(a,1)):Bx(b,a,~~rf(a))}
function Ax(b,a){return a==null?b.b:a!=null&&ii(a.tI,1)?b.e[wb+ji(a,1)]:yx(b,a,~~rf(a))}
function yx(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.s();if(h.q(g,d)){return c.t()}}}return null}
function Bx(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.s();if(h.q(g,d)){return true}}}return false}
function Cx(b,a){return wb+a in b.e}
function ay(b,a,c){return a==null?Ex(b,c):a!=null&&ii(a.tI,1)?Fx(b,ji(a,1),c):Dx(b,a,c,~~rf(a))}
function Dx(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.s();if(i.q(g,d)){var h=c.t();c.ab(j);return h}}}else{a=i.a[e]=[]}var c=mA(new lA(),g,j);a.push(c);++i.d;return null}
function Ex(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function Fx(d,a,e){var b,c=d.e;a=wb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function by(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pf(a,b)}
function zw(){}
_=zw.prototype=new sy();_.q=by;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function kz(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ii(b.tI,16))){return false}c=ji(b,16);if(c.bb()!=this.bb()){return false}for(a=c.v();a.u();){d=a.w();if(!this.n(d)){return false}}return true}
function lz(){var a,b,c;a=0;for(b=this.v();b.u();){c=b.w();if(c!=null){a+=rf(c);a=~~a}}return a}
function iz(){}
_=iz.prototype=new uw();_.eQ=kz;_.hC=lz;_.tI=46;function ax(b,a){b.a=a;return b}
function cx(d,c){var a,b,e;if(c!=null&&ii(c.tI,13)){a=ji(c,13);b=a.s();if(xx(d.a,b)){e=Ax(d.a,b);return Fz(a.t(),e)}}return false}
function dx(a){return cx(this,a)}
function ex(){return Cw(new Bw(),this.a)}
function fx(){return this.a.d}
function Aw(){}
_=Aw.prototype=new iz();_.n=dx;_.v=ex;_.bb=fx;_.tI=47;_.a=null;function Cw(c,b){var a;c.b=b;a=nz(new mz());if(c.b.c){pz(a,hx(new gx(),c.b))}ux(c.b,a);tx(c.b,a);c.a=fy(new dy(),a);return c}
function Ew(){return hy(this.a)}
function Fw(){return ji(iy(this.a),13)}
function Bw(){}
_=Bw.prototype=new pv();_.u=Ew;_.w=Fw;_.tI=0;_.a=null;_.b=null;function cz(b){var a;if(b!=null&&ii(b.tI,13)){a=ji(b,13);if(zA(this.s(),a.s())&&zA(this.t(),a.t())){return true}}return false}
function dz(){var a,b;a=0;b=0;if(this.s()!=null){a=rf(this.s())}if(this.t()!=null){b=rf(this.t())}return a^b}
function az(){}
_=az.prototype=new pv();_.eQ=cz;_.hC=dz;_.tI=48;function hx(b,a){b.a=a;return b}
function jx(){return null}
function kx(){return this.a.b}
function lx(a){return Ex(this.a,a)}
function gx(){}
_=gx.prototype=new az();_.s=jx;_.t=kx;_.ab=lx;_.tI=49;_.a=null;function nx(c,a,b){c.b=b;c.a=a;return c}
function px(){return this.a}
function qx(){return this.b.e[wb+this.a]}
function rx(b,a){return nx(new mx(),a,b)}
function sx(a){return Fx(this.b,this.a,a)}
function mx(){}
_=mx.prototype=new az();_.s=px;_.t=qx;_.ab=sx;_.tI=50;_.a=null;_.b=null;function my(a){oz(this,this.bb(),a);return true}
function ny(a,b){if(a<0||a>=b){qy(a,b)}}
function oy(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ii(e.tI,14))){return false}f=ji(e,14);if(this.bb()!=f.b){return false}c=fy(new dy(),this);d=fy(new dy(),f);while(c.a<c.b.b){a=iy(c);b=iy(d);if(!(a==null?b==null:pf(a,b))){return false}}return true}
function py(){var a,b,c;b=1;a=fy(new dy(),this);while(a.a<a.b.b){c=iy(a);b=31*b+(c==null?0:rf(c));b=~~b}return b}
function qy(a,b){throw jv(new iv(),xb+a+yb+b)}
function ry(){return fy(new dy(),this)}
function cy(){}
_=cy.prototype=new uw();_.m=my;_.eQ=oy;_.hC=py;_.v=ry;_.tI=0;function fy(b,a){b.b=a;return b}
function hy(a){return a.a<a.b.b}
function iy(a){if(a.a>=a.b.b){throw new tA()}return rz(a.b,a.a++)}
function jy(){return this.a<this.b.b}
function ky(){return iy(this)}
function dy(){}
_=dy.prototype=new pv();_.u=jy;_.w=ky;_.tI=0;_.a=0;_.b=null;function Ay(b,a,c){b.a=a;b.b=c;return b}
function Dy(a){return xx(this.a,a)}
function Ey(){var a;return a=Cw(new Bw(),this.b.a),vy(new uy(),a)}
function Fy(){return this.b.a.d}
function ty(){}
_=ty.prototype=new iz();_.n=Dy;_.v=Ey;_.bb=Fy;_.tI=51;_.a=null;_.b=null;function vy(a,b){a.a=b;return a}
function yy(){return hy(this.a.a)}
function zy(){var a;return a=ji(iy(this.a.a),13),a.s()}
function uy(){}
_=uy.prototype=new pv();_.u=yy;_.w=zy;_.tI=0;_.a=null;function nz(a){a.a=Fh(Bi,0,0,0,0);a.b=0;return a}
function pz(b,a){ci(b.a,b.b++,a);return true}
function oz(c,a,b){if(a<0||a>c.b){qy(a,c.b)}c.a.splice(a,0,b);++c.b}
function rz(b,a){ny(a,b.b);return b.a[a]}
function sz(c,b,a){for(;a<c.b;++a){if(zA(b,c.a[a])){return a}}return -1}
function tz(c,a){var b;b=(ny(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function uz(g,f){var a;a=sz(g,f,0);if(a==-1){return false}tz(g,a);return true}
function vz(a){return ci(this.a,this.b++,a),true}
function wz(a){return sz(this,a,0)!=-1}
function xz(){return this.b}
function mz(){}
_=mz.prototype=new cy();_.m=vz;_.n=wz;_.bb=xz;_.tI=52;_.a=null;_.b=0;function Dz(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function Fz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pf(a,b)}
function Cz(){}
_=Cz.prototype=new zw();_.tI=53;function bA(a){a.a=Dz(new Cz());return a}
function cA(c,a){var b;b=ay(c.a,a,c);return b==null}
function eA(b){var a;return a=ay(this.a,b,this),a==null}
function fA(a){return xx(this.a,a)}
function gA(){var a;return a=Cw(new Bw(),fz(this.a).b.a),vy(new uy(),a)}
function hA(){return this.a.d}
function aA(){}
_=aA.prototype=new iz();_.m=eA;_.n=fA;_.v=gA;_.bb=hA;_.tI=54;_.a=null;function mA(b,a,c){b.a=a;b.b=c;return b}
function oA(){return this.a}
function pA(){return this.b}
function rA(b){var a;a=this.b;this.b=b;return a}
function lA(){}
_=lA.prototype=new az();_.s=oA;_.t=pA;_.ab=rA;_.tI=55;_.a=null;_.b=null;function tA(){}
_=tA.prototype=new tv();_.tI=56;function zA(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pf(a,b)}
function ru(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Ab,evtGroup:Bb,millis:(new Date()).getTime(),type:Cb,className:Db});ku(new ju())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ru()}catch(a){b(d)}else{ru()}}
function AA(){}
var Ai=Au(Eb,Fb),Bi=Au(ac,bc),zi=Au(cc,dc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();