(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var wc='',fd=' ',kb=" border='0'><\/gwt:clipper>",jb=' height=',ib='" width=',fb='"><img src=\'',l='#',xb='$',gb="' onerror='if(window.__gwt_transparentImgHandler)window.__gwt_transparentImgHandler(this);else this.src=\"",ab="',sizingMethod='crop'); margin-left: ",Bb=', Size: ',he='-',lc='/',Ad='0',xe='0.0',le='0px',Ce='100%',sb='100px',ub='250px',vb='400px',x='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',p='50%',pe='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',yb=':',r='<\/div>',Fd='<SELECT>',q="<div class='vsplitter' style='text-align:center;'>",eb='<gwt:clipper style="',m='?',bd='BackgroundImageCache',Fc='CSS1Compat',de='DIV',qc='DOMMouseScroll',Ab='Index: ',nb='Item one',pb='Item two',gc='JavaScriptObject$;',dc='Object;',rb='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',bc='Widget;',fc='[Lcom.google.gwt.core.client.',ac='[Lcom.google.gwt.user.client.ui.',cc='[Ljava.lang.',wb='\\',md='__gwt_initWindowCloseHandler',qe='absolute',Dd='align',Ae='alpha(opacity=0)',t='auto',ue='background',xd='blur',te='border',vd='bottom',tb='buhu',jd='button',Bd='cellPadding',zd='cellSpacing',td='center',ce='change',ed='className',lb='clear.cache.gif',hb='clear.cache.gif"\' style="',ne='click',Fb='com.streamspin.client.StreamSpinClient',rc='contextmenu',ye='dblclick',qd='div',oc='error',ze='filter',F="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",n='focus',ad='function',cd='function ',kd='gwt-Button',sd='gwt-HTML',rd='gwt-Label',ae='gwt-ListBox',ge='gwt-MenuBar',cf='gwt-TextArea',o='gwt-VerticalSplitPanel',De='height',me='hideFocus',je='horizontal',B='http://',z='https',A='https://',y='keydown',db='keypress',ob='keyup',gd='left',zb='load',ec='losecapture',re='margin',fe='menubar',wd='middle',Db='moduleStartup',hc='mousedown',ic='mousemove',jc='mouseout',kc='mouseover',mc='mouseup',pc='mousewheel',af='none',Ee='offsetHeight',Eb='onModuleLoadStart',Cc='onblur',sc='onclick',Ec='oncontextmenu',Dc='ondblclick',Bc='onfocus',yc='onkeydown',zc='onkeypress',Ac='onkeyup',mb='online stuff',tc='onmousedown',vc='onmousemove',uc='onmouseup',xc='onmousewheel',u='onresize',we='opacity',be='option',ke='outline',s='overflow',C='overflow: hidden; width: ',se='padding',id='position',Fe='px',cb='px; border: none',D='px; height: ',bb='px; margin-top: ',E='px; padding: 0px; zoom: 1',w='relative',ud='right',ee='role',dd='script',nc='scroll',Cb='startup',ld='submit',od='table',pd='tbody',Cd='td',v='textAlign',bf='textarea',hd='top',yd='tr',oe='true',nd='type',qb='value',ie='vertical',Ed='verticalAlign',ve='white',Be='width';var _;function tv(a){return this===(a==null?null:a)}
function uv(){return this.$H||(this.$H=++Bf)}
function rv(){}
_=rv.prototype={};_.eQ=tv;_.hC=uv;_.tM=CA;_.tI=1;function rf(b,a){return b.tM==CA||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function tf(a){return a.tM==CA||a.tI==2?a.hC():a.$H||(a.$H=++Bf)}
function yf(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(lc);if(a!=-1)b=b.substring(0,a);return b.length>0?b+lc:wc}
var Bf=0;function dg(b,a){return b===a||b.contains(a)}
function eg(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function Ag(){Ag=CA;Dg()}
function Cg(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function Dg(){try{$doc.execCommand(bd,false,true)}catch(a){}}
function bh(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function ch(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;Cg(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function dh(a,c){Ag();var b,d;if(dw(a.__pendingSrc||a.src,c)){return}if(!eh){eh={}}b=a.__pendingSrc;if(b!=null){d=eh[b];if(d==a){ch(eh,d)}else{bh(d,a)}}d=eh[c];if(!d){Cg(eh,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var eh=null;function zh(){}
_=zh.prototype=new rv();_.tI=0;function ai(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function bi(a,f,c,b,e){var d;d=ai(e,b);ci(a,f,c,d);return d}
function ci(b,d,c,a){if(!di){di=new Ch()}gi(a,di);a.tI=d;a.qI=c;return a}
function ei(a,b,c){if(c!=null){if(a.qI>0&&!ji(c.tI,a.qI)){throw new vu()}if(a.qI<0&&(c.tM==CA||c.tI==2)){throw new vu()}}return a[b]=c}
function gi(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Ch(){}
_=Ch.prototype=new rv();_.tI=0;_.length=0;_.qI=0;var di=null;function ki(b,a){return b&&!!yi[b][a]}
function ji(b,a){return b&&yi[b][a]}
function li(b,a){if(b!=null&&!ji(b.tI,a)){throw new zu()}return b}
function xi(a){if(a!=null){throw new zu()}return a}
var yi=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{4:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function rw(){}
_=rw.prototype=new rv();_.tI=3;function cv(){}
_=cv.prototype=new rw();_.tI=4;function vv(){}
_=vv.prototype=new cv();_.tI=5;function mj(a){return a}
function lj(){}
_=lj.prototype=new vv();_.tI=7;function dk(a){a.a=qj(new pj(),a);a.b=pz(new oz());a.d=uj(new tj(),a);a.f=zj(new xj(),a);return a}
function fk(b){var a;a=Bj(b.f);Ej(b.f);if(a!=null&&ki(a.tI,3)){mj(new lj(),li(a,3))}else{}b.c=false;hk(b)}
function gk(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;el(d.a,10000);while(Cj(d.f)){b=Dj(d.f);try{if(b==null){return}if(b!=null&&ki(b.tI,3)){a=li(b,3);us(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}Ej(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){bl(d.a);d.c=false;hk(d)}}}
function hk(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;el(a.d,1)}}
function jk(b,a){rz(b.b,a);hk(b)}
function oj(){}
_=oj.prototype=new rv();_.tI=0;_.c=false;_.e=false;function cl(){cl=CA;jl=pz(new oz());nl(new Dk())}
function bl(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}wz(jl,a)}
function dl(a){if(!a.b){wz(jl,a)}a.F()}
function el(b,a){if(a<=0){throw new ev()}bl(b);b.b=false;b.c=hl(b,a);rz(jl,b)}
function hl(b,a){return $wnd.setTimeout(function(){b.r()},a)}
function il(){dl(this)}
function Ck(){}
_=Ck.prototype=new rv();_.r=il;_.tI=8;_.b=false;_.c=0;var jl;function rj(){rj=CA;cl()}
function qj(b,a){rj();b.a=a;return b}
function sj(){if(!this.a.c){return}fk(this.a)}
function pj(){}
_=pj.prototype=new Ck();_.F=sj;_.tI=9;_.a=null;function vj(){vj=CA;cl()}
function uj(b,a){vj();b.a=a;return b}
function wj(){this.a.e=false;gk(this.a,(new Date()).getTime())}
function tj(){}
_=tj.prototype=new Ck();_.F=wj;_.tI=10;_.a=null;function zj(b,a){b.d=a;return b}
function Bj(a){return tz(a.d.b,a.b)}
function Cj(a){return a.c<a.a}
function Dj(b){var a;b.b=b.c;a=tz(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function Ej(a){vz(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function ak(){return this.c<this.a}
function bk(){return Dj(this)}
function xj(){}
_=xj.prototype=new rv();_.u=ak;_.w=bk;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function ok(b,a,c){var d;if(a==sk){if(gm(b)==8192){sk=null}}d=nk;nk=b;try{c.x(b)}finally{nk=d}}
function qk(a){return true}
function rk(a){if(!!sk&&a==sk){sk=null}im();a.releaseCapture()}
function tk(a){sk=a;im();a.setCapture()}
function wk(a,b){im();Dl(a,b)}
var nk=null,sk=null;function yk(){yk=CA;Ak=dk(new oj())}
function zk(a){yk();if(!a){throw new ov()}jk(Ak,a)}
var Ak;function Fk(){while((cl(),jl).b>0){bl(li(tz(jl,0),4))}}
function al(){return null}
function Dk(){}
_=Dk.prototype=new rv();_.C=Fk;_.D=al;_.tI=11;function nl(a){sl();if(!ol){ol=pz(new oz())}rz(ol,a)}
function pl(){var a,b;if(ol){for(b=hy(new fy(),ol);b.a<b.b.b;){a=li(ky(b),5);a.C()}}}
function ql(){var a,b,c,d;d=null;if(ol){for(b=hy(new fy(),ol);b.a<b.b.b;){a=li(ky(b),5);c=a.D();d=c}}return d}
function sl(){if(!rl){rl=true;vm(um(),md)}}
var ol=null,rl=false;function gm(a){switch(a.type){case xd:return 4096;case ce:return 1024;case ne:return 1;case ye:return 2;case n:return 2048;case y:return 128;case db:return 256;case ob:return 512;case zb:return 32768;case ec:return 8192;case hc:return 4;case ic:return 64;case jc:return 32;case kc:return 16;case mc:return 8;case nc:return 16384;case oc:return 65536;case pc:return 131072;case qc:return 131072;case rc:return 262144;}}
function im(){if(!km){Al();km=true}}
var km=false;function Al(){am=function(){var c=El;El=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!qk($wnd.event)){El=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&ki(b.tI,6)&&!(b!=null&&(b.tM!=CA&&b.tI!=2))){ok($wnd.event,a,b)}}El=c};Fl=function(){var a=$doc.createEventObject();this.fireEvent(sc,a);if(this.__eventBits&2){am.call(this)}};var e=function(){am.call($doc.body)};var d=function(){Fl.call($doc.body)};$doc.body.attachEvent(sc,e);$doc.body.attachEvent(tc,e);$doc.body.attachEvent(uc,e);$doc.body.attachEvent(vc,e);$doc.body.attachEvent(xc,e);$doc.body.attachEvent(yc,e);$doc.body.attachEvent(zc,e);$doc.body.attachEvent(Ac,e);$doc.body.attachEvent(Bc,e);$doc.body.attachEvent(Cc,e);$doc.body.attachEvent(Dc,d);$doc.body.attachEvent(Ec,e)}
function Dl(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?am:null;if(b&3)c.ondblclick=a&3?Fl:null;if(b&4)c.onmousedown=a&4?am:null;if(b&8)c.onmouseup=a&8?am:null;if(b&16)c.onmouseover=a&16?am:null;if(b&32)c.onmouseout=a&32?am:null;if(b&64)c.onmousemove=a&64?am:null;if(b&128)c.onkeydown=a&128?am:null;if(b&256)c.onkeypress=a&256?am:null;if(b&512)c.onkeyup=a&512?am:null;if(b&1024)c.onchange=a&1024?am:null;if(b&2048)c.onfocus=a&2048?am:null;if(b&4096)c.onblur=a&4096?am:null;if(b&8192)c.onlosecapture=a&8192?am:null;if(b&16384)c.onscroll=a&16384?am:null;if(b&32768)c.onload=a&32768?am:null;if(b&65536)c.onerror=a&65536?am:null;if(b&131072)c.onmousewheel=a&131072?am:null;if(b&262144)c.oncontextmenu=a&262144?am:null}
var El=null,Fl=null,am=null;function om(){om=CA;qm=pm((om(),new mm()))}
function pm(){return $doc.compatMode==Fc?$doc.documentElement:$doc.body}
function mm(){}
_=mm.prototype=new rv();_.tI=0;var qm;function um(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function vm(c,b){var d,a;c=hw(c,ad,cd+b);d=(a=$doc.createElement(dd),a.text=c,a);$doc.body.appendChild(d);wm();$doc.body.removeChild(d)}
function wm(){$wnd.__gwt_initWindowCloseHandler(function(){return ql()},function(){pl()})}
function cr(b,a){ir(b.l,a,true)}
function hr(a){var b,c;b=a[ed]==null?null:String(a[ed]);c=b.indexOf(pw(32));if(c>=0){return b.substr(0,c-0)}return b}
function ir(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new vv()}j=kw(j);if(j.length==0){throw new ev()}i=c[ed]==null?null:String(c[ed]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=fd}c[ed]=i+j}}else{if(e!=-1){b=kw(i.substr(0,e-0));d=kw(iw(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+fd+d}c[ed]=h}}}
function br(){}
_=br.prototype=new rv();_.tI=12;_.l=null;function ot(a){if(a.j){throw new hv()}a.j=true;a.l.__listener=a;a.o();a.z()}
function pt(a){if(!a.j){throw new hv()}try{a.B()}finally{a.p();a.l.__listener=null;a.j=false}}
function qt(a){if(a.k){a.k.E(a)}else if(a.k){throw new hv()}}
function rt(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.y()}c.k=null}else{if(a){throw new hv()}c.k=b;if(b.j){ot(c)}}}
function st(){}
function tt(){}
function ut(a){}
function vt(){pt(this)}
function wt(){}
function xt(){}
function xs(){}
_=xs.prototype=new br();_.o=st;_.p=tt;_.x=ut;_.y=vt;_.z=wt;_.B=xt;_.tI=13;_.j=false;_.k=null;function rp(){var a,b;for(b=this.v();b.u();){a=li(b.w(),7);ot(a)}}
function sp(){var a,b;for(b=this.v();b.u();){a=li(b.w(),7);a.y()}}
function tp(){}
function up(){}
function pp(){}
_=pp.prototype=new xs();_.o=rp;_.p=sp;_.z=tp;_.B=up;_.tI=14;function nn(c,a,b){qt(a);at(c.f,a);b.appendChild(a.l);rt(a,c)}
function pn(b,c){var a;if(c.k!=b){return false}rt(c,null);a=c.l;a.parentElement.removeChild(a);ft(b.f,c);return true}
function qn(){return Bs(new zs(),this.f)}
function rn(a){return pn(this,a)}
function ln(){}
_=ln.prototype=new pp();_.v=qn;_.E=rn;_.tI=15;function zm(a,b){nn(a,b,a.l)}
function Bm(b,c){var a;a=pn(b,c);if(a){Cm(c.l)}return a}
function Cm(a){a.style[gd]=wc;a.style[hd]=wc;a.style[id]=wc}
function Dm(a){return Bm(this,a)}
function ym(){}
_=ym.prototype=new ln();_.E=Dm;_.tI=16;function Em(){}
_=Em.prototype=new rv();_.tI=0;function tn(b,a){b.l=a;b.l.tabIndex=0;return b}
function vn(a){gm(a)}
function sn(){}
_=sn.prototype=new xs();_.x=vn;_.tI=17;function cn(b,a){b.l=a;b.l.tabIndex=0;return b}
function bn(){}
_=bn.prototype=new sn();_.tI=18;function en(a){cn(a,$doc.createElement(jd));gn(a.l);a.l[ed]=kd;return a}
function gn(b){if(b.type==ld){try{b.setAttribute(nd,jd)}catch(a){}}}
function an(){}
_=an.prototype=new bn();_.tI=19;function jn(a){a.f=Fs(new ys());a.e=$doc.createElement(od);a.d=$doc.createElement(pd);a.e.appendChild(a.d);a.l=a.e;return a}
function hn(){}
_=hn.prototype=new ln();_.tI=20;_.d=null;_.e=null;function xo(a){a.l=$doc.createElement(qd);a.l[ed]=rd;return a}
function Ao(a){gm(a)}
function wo(){}
_=wo.prototype=new xs();_.x=Ao;_.tI=21;function xn(a){a.l=$doc.createElement(qd);a.l[ed]=sd;return a}
function wn(){}
_=wn.prototype=new wo();_.tI=22;function ao(){ao=CA;En(new Dn(),td);co=En(new Dn(),gd);En(new Dn(),ud);bo=co}
var bo,co;function En(b,a){b.a=a;return b}
function Dn(){}
_=Dn.prototype=new rv();_.tI=0;_.a=null;function jo(){jo=CA;ho(new go(),vd);ho(new go(),wd);ko=ho(new go(),hd)}
var ko;function ho(a,b){a.a=b;return a}
function go(){}
_=go.prototype=new rv();_.tI=0;_.a=null;function po(a){jn(a);a.a=(ao(),bo);a.c=(jo(),ko);a.b=$doc.createElement(yd);a.d.appendChild(a.b);a.e[zd]=Ad;a.e[Bd]=Ad;return a}
function qo(c,d){var b,a;b=(a=$doc.createElement(Cd),(a[Dd]=c.a.a,undefined),(a.style[Ed]=c.c.a,undefined),a);c.b.appendChild(b);qt(d);at(c.f,d);b.appendChild(d.l);rt(d,c)}
function to(c){var a,b;b=c.l.parentElement;a=pn(this,c);if(a){this.b.removeChild(b)}return a}
function no(){}
_=no.prototype=new hn();_.E=to;_.tI=23;_.b=null;function Co(b){var a;tn(b,(a=Fd,$doc.createElement(a)));b.l[ed]=ae;return b}
function Fo(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement(be);d.text=c;d.value=g;if(b==-1||b==e.options.length){eg(e,d,null)}else{a=e.options[b];eg(e,d,a)}}
function bp(a){if(gm(a)==1024){}else{gm(a)}}
function Bo(){}
_=Bo.prototype=new sn();_.x=bp;_.tI=24;function fp(a){pz(new oz());a.b=pz(new oz());ip(a,false,(lp(),new jp()));return a}
function hp(d,a){var b,c;for(c=hy(new fy(),d.b);c.a<c.b.b;){b=xi(ky(c));if(dg(null.db(),a)){return b}}return null}
function ip(d,f){var b,c,e,a;c=$doc.createElement(od);d.a=$doc.createElement(pd);c.appendChild(d.a);if(!f){e=$doc.createElement(yd);d.a.appendChild(e)}b=(a=$doc.createElement(de),a.tabIndex=0,a);b.appendChild(c);d.l=b;d.l.setAttribute(ee,fe);wk(d.l,2225|(d.l.__eventBits||0));d.l[ed]=ge;if(f){cr(d,hr(d.l)+he+ie)}else{cr(d,hr(d.l)+he+je)}d.l.style[ke]=le;d.l.setAttribute(me,oe)}
function np(a){var b;hp(this,a.srcElement);switch(gm(a)){case 1:{gu(this.l);break}{break}case 2048:{xi(tz(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{xi(tz(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{xi(tz(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:xi(tz(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:xi(tz(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{xi(tz(this.b,0))}}break}}}
function op(){pt(this)}
function cp(){}
_=cp.prototype=new xs();_.x=np;_.y=op;_.tI=25;_.a=null;function lp(){lp=CA;mp=$moduleBase+pe;bu(new Ft(),mp,0,0,5,9)}
function jp(){}
_=jp.prototype=new rv();_.tI=0;var mp;function Fp(){Fp=CA;dq=Fz(new Ez());eq=dA(new cA())}
function Ep(b,a){Fp();b.f=Fs(new ys());b.l=a;ot(b);return b}
function aq(){var b,a;Fp();var c,d;for(d=(b=Ew(new Dw(),hz(eq.a).b.a),xy(new wy(),b));jy(d.a.a);){c=li((a=li(ky(d.a.a),13),a.s()),7);if(c.j){c.y()}}}
function cq(a){Fp();var b;b=li(Cx(dq,a),8);if(b){return b}if(dq.d==0){nl(new xp())}b=Cp(new Bp());cy(dq,a,b);eA(eq,b);return b}
function wp(){}
_=wp.prototype=new ym();_.tI=26;var dq,eq;function zp(){aq()}
function Ap(){return null}
function xp(){}
_=xp.prototype=new rv();_.C=zp;_.D=Ap;_.tI=27;function Dp(){Dp=CA;Fp()}
function Cp(a){Dp();Ep(a,$doc.body);return a}
function Bp(){}
_=Bp.prototype=new wp();_.tI=28;function nq(e,b,c,a,d){e.i=bi(Ci,0,7,2,0);e.f=bi(Bi,0,-1,2,0);e.l=b;e.h=c;ei(e.f,0,a);ei(e.f,1,d);wk(e.l,8316|(e.l.__eventBits||0));if(!uq){uq=$doc.createElement(qd);uq.style[id]=qe;uq.style[hd]=le;uq.style[gd]=le;uq.style[re]=le;uq.style[se]=le;uq.style[te]=le;uq.style[ue]=ve;uq.style[we]=xe;uq.style[ze]=Ae}return e}
function oq(a,b){if(!a.i[0]){rq(a,0,b)}else if(!a.i[1]){rq(a,1,b)}else{throw new hv()}}
function rq(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){qt(d)}if(b){rt(b,null);c.f[a].removeChild(b.l)}ei(c.i,a,d);if(d){c.f[a].appendChild(d.l);rt(d,c)}}
function tq(a){a.style[id]=qe;a.style[hd]=le;a.style[gd]=le;a.style[Be]=Ce;a.style[De]=Ce}
function vq(){return it(new gt(),this.i)}
function wq(c){var d,a,b;switch(gm(c)){case 4:{d=c.srcElement;if(dg(this.h,d)){this.g=true;this.c=((c.clientX||0)-(this.l.getBoundingClientRect().left+(om(),qm).scrollLeft),(c.clientY||0)-(this.l.getBoundingClientRect().top+qm.scrollTop));this.d=parseInt(this.f[0][Ee])||0;a=((Fp(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;uq.style[De]=a+Fe;uq.style[Be]=b+Fe;$doc.body.appendChild(uq);tk(this.l);c.returnValue=false}break}case 8:{if(li(this,11).g){li(this,11).g=false;(Fp(),$doc.body).removeChild(uq);rk(this.l)}break}case 64:{if(li(this,11).g){as(this.b,this.d+((c.clientX||0)-(this.l.getBoundingClientRect().left+(om(),qm).scrollLeft),(c.clientY||0)-(this.l.getBoundingClientRect().top+qm.scrollTop))-this.c);c.returnValue=false}break}case 8192:{if(li(this,11).g){li(this,11).g=false;(Fp(),$doc.body).removeChild(uq)}break}}}
function xq(a){a.style[se]=Ad;a.style[re]=Ad;a.style[te]=af;return a}
function yq(a){if(this.i[0]==a){rq(this,0,null);return true}else if(this.i[1]==a){rq(this,1,null);return true}return false}
function lq(){}
_=lq.prototype=new pp();_.v=vq;_.x=wq;_.E=yq;_.tI=29;_.g=false;_.h=null;var uq=null;function Dq(b,a){b.l=a;b.l.tabIndex=0;return b}
function ar(a){var b;b=gm(a);if((b&896)!=0){gm(a)}else if(b==1024){}else{gm(a)}}
function Cq(){}
_=Cq.prototype=new sn();_.x=ar;_.tI=30;function Aq(a){Dq(a,$doc.createElement(bf));a.l[ed]=cf;return a}
function zq(){}
_=zq.prototype=new Cq();_.tI=31;function lr(a){jn(a);a.a=(ao(),bo);a.b=(jo(),ko);a.e[zd]=Ad;a.e[Bd]=Ad;return a}
function mr(c,e){var b,d,a;d=$doc.createElement(yd);b=(a=$doc.createElement(Cd),(a[Dd]=c.a.a,undefined),(a.style[Ed]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);qt(e);at(c.f,e);b.appendChild(e.l);rt(e,c)}
function pr(c){var a,b;b=c.l.parentElement;a=pn(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function jr(){}
_=jr.prototype=new hn();_.E=pr;_.tI=32;function os(a){ps(a,(ks(),new is()));return a}
function ps(e){nq(e,$doc.createElement(qd),$doc.createElement(qd),xq($doc.createElement(qd)),xq($doc.createElement(qd)));e.b=new vr();e.a=xq($doc.createElement(qd));qs(e,(ks(),ms));e.l[ed]=o;Er(e.b,e);us(e,p);return e}
function qs(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=q+Bt(d.d,d.b,d.c,d.e,d.a)+r||wc;e.style[s]=t;a.style[s]=t}
function us(b,a){var c;b.e=a;c=b.f[0];c.style[De]=a;fs(b.b,parseInt(c[Ee])||0)}
function vs(){Fr(this.b);us(this,this.e);zk(sr(new rr(),this))}
function ws(){this.b.e.a[u]=null}
function qr(){}
_=qr.prototype=new lq();_.z=vs;_.B=ws;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function sr(b,a){b.a=a;return b}
function rr(){}
_=rr.prototype=new rv();_.tI=34;_.a=null;function fs(f,b){var a,c,d,e;d=f.e.h;c=parseInt(f.e.a[Ee])||0;e=parseInt(d[Ee])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}bs(f,f.e.f[0],d,f.e.f[1],b,b+e,a)}
function ur(){}
_=ur.prototype=new rv();_.tI=0;_.e=null;function Cr(c,a){var b=c;a.onresize=function(){b.A()}}
function Er(d,c){var a,b,e;d.e=c;b=c.l;b.style[v]=gd;b.style[id]=w;e=c.f[0];a=c.f[1];cs(e);cs(a);cs(c.h);tq(c.a)}
function Fr(a){Cr(a,a.e.a);fs(a,parseInt(a.e.f[0][Ee])||0)}
function as(b,a){if(!b.b){b.b=true;el(xr(new wr(),b),20)}b.d=a}
function bs(e,f,d,a,g,c,b){if(g==0){f.style[Be]=le;e.c=true}else if(e.c){f.style[Be]=Ce;e.c=false}if(b==0){a.style[Be]=le;e.a=true}else if(e.a){a.style[Be]=Ce;e.a=false}f.style[De]=g+Fe;d.style[hd]=g+Fe;a.style[hd]=c+Fe;a.style[De]=b+Fe}
function cs(a){a.style[id]=qe;a.style[gd]=Ad;a.style[Be]=Ce}
function ds(){fs(this,parseInt(this.e.f[0][Ee])||0)}
function vr(){}
_=vr.prototype=new ur();_.A=ds;_.tI=0;_.a=false;_.b=false;_.c=false;_.d=0;function yr(){yr=CA;cl()}
function xr(b,a){yr();b.a=a;return b}
function zr(){fs(this.a,this.a.d);this.a.b=false}
function wr(){}
_=wr.prototype=new Ck();_.F=zr;_.tI=35;_.a=null;function ks(){ks=CA;ls=$moduleBase+x;ms=bu(new Ft(),ls,0,0,7,7)}
function is(){}
_=is.prototype=new rv();_.tI=0;var ls,ms;function Fs(a){a.a=bi(Ci,0,7,4,0);return a}
function at(a,b){dt(a,b,a.b)}
function ct(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function dt(d,e,a){var b,c;if(a<0||a>d.b){throw new kv()}if(d.b==d.a.length){c=bi(Ci,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){ei(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){ei(d.a,b,d.a[b-1])}ei(d.a,a,e)}
function et(c,b){var a;if(b<0||b>=c.b){throw new kv()}--c.b;for(a=b;a<c.b;++a){ei(c.a,a,c.a[a+1])}ei(c.a,c.b,null)}
function ft(b,c){var a;a=ct(b,c);if(a==-1){throw new vA()}et(b,a)}
function ys(){}
_=ys.prototype=new rv();_.tI=0;_.a=null;_.b=0;function Bs(b,a){b.b=a;return b}
function Ds(){return this.a<this.b.b-1}
function Es(){if(this.a>=this.b.b){throw new vA()}return this.b.a[++this.a]}
function zs(){}
_=zs.prototype=new rv();_.u=Ds;_.w=Es;_.tI=0;_.a=-1;_.b=null;function it(a,b){a.b=b;kt(a);return a}
function kt(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function lt(){return this.a<this.b.length}
function mt(){var a;if(this.a>=this.b.length){throw new vA()}a=this.b[this.a];kt(this);return a}
function gt(){}
_=gt.prototype=new rv();_.u=lt;_.w=mt;_.tI=0;_.a=-1;_.b=null;function At(){At=CA;Dt=yf().indexOf(z)==0?A:B}
function Bt(g,e,f,h,c){var a,b,d;b=C+h+D+c+E;d=F+g+ab+-e+bb+-f+cb;a=eb+b+fb+Dt+gb+$moduleBase+hb+d+ib+(e+h)+jb+(f+c)+kb;return a}
function Ct(){At();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;dh(a,$moduleBase+lb)}}
var Dt;function cu(){cu=CA;At();Ct()}
function bu(c,e,b,d,f,a){cu();c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function Ft(){}
_=Ft.prototype=new Em();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function gu(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function ku(){}
_=ku.prototype=new zh();_.tI=0;function mu(a){a.d=lr(new jr());a.c=po(new no());a.i=os(new qr());a.h=Co(new Bo());a.a=Aq(new zq());a.e=fp(new cp());a.b=en(new an());a.f=xo(new wo());a.g=xn(new wn());a.f.l.innerText=mb;qo(a.c,a.b);qo(a.c,a.e);Fo(a.h,nb,nb,-1);Fo(a.h,pb,pb,-1);a.h.l.size=6;a.h.l.style[Be]=Ce;a.a.l[qb]=rb!=null?rb:wc;oq(a.i,a.h);oq(a.i,a.a);a.i.l.style[De]=sb;a.g.l.innerText=tb;mr(a.d,a.g);mr(a.d,a.i);mr(a.d,a.f);mr(a.d,a.c);a.d.l.style[De]=ub;a.d.l.style[Be]=vb;zm((Fp(),cq(null)),a.d);return a}
function lu(){}
_=lu.prototype=new ku();_.tI=0;function vu(){}
_=vu.prototype=new vv();_.tI=37;function Cu(c,a){var b;b=new yu();return b}
function yu(){}
_=yu.prototype=new rv();_.tI=0;function zu(){}
_=zu.prototype=new vv();_.tI=40;function ev(){}
_=ev.prototype=new vv();_.tI=41;function hv(){}
_=hv.prototype=new vv();_.tI=42;function lv(b,a){return b}
function kv(){}
_=kv.prototype=new vv();_.tI=43;function ov(){}
_=ov.prototype=new vv();_.tI=44;function dw(b,a){if(!(a!=null&&ki(a.tI,1))){return false}return String(b)==a}
function hw(c,a,b){b=mw(b);return c.replace(RegExp(a),b)}
function iw(b,a){return b.substr(a,b.length-a)}
function kw(c){if(c.length==0||c[0]>fd&&c[c.length-1]>fd){return c}var a=c.replace(/^(\s*)/,wc);var b=a.replace(/\s*$/,wc);return b}
function mw(b){var a;a=0;while(0<=(a=b.indexOf(wb,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+xb+iw(b,++a)}else{b=b.substr(0,a-0)+iw(b,++a)}}return b}
function nw(a){return dw(this,a)}
function pw(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function qw(){return Fv(this)}
_=String.prototype;_.eQ=nw;_.hC=qw;_.tI=2;function Av(){Av=CA;Bv={};Ev={}}
function Cv(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function Fv(c){Av();var a=yb+c;var b=Ev[a];if(b!=null){return b}b=Bv[a];if(b==null){b=Cv(c)}aw();return Ev[a]=b}
function aw(){if(Dv==256){Bv=Ev;Ev={};Dv=0}++Dv}
var Bv,Dv=0,Ev;function tw(){}
_=tw.prototype=new vv();_.tI=45;function xw(a,b){var c;while(a.u()){c=a.w();if(b==null?c==null:rf(b,c)){return a}}return null}
function zw(a){throw new tw()}
function Aw(b){var a;a=xw(this.v(),b);return !!a}
function ww(){}
_=ww.prototype=new rv();_.m=zw;_.n=Aw;_.tI=0;function hz(b){var a;a=cx(new Cw(),b);return Cy(new vy(),b,a)}
function iz(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ki(c.tI,15))){return false}e=li(c,15);if(li(this,15).d!=e.d){return false}for(b=Ew(new Dw(),cx(new Cw(),e).a);jy(b.a);){a=li(ky(b.a),13);d=a.s();f=a.t();if(!(d==null?li(this,15).c:d!=null&&ki(d.tI,1)?Ex(li(this,15),li(d,1)):Dx(li(this,15),d,~~tf(d)))){return false}if(!BA(f,d==null?li(this,15).b:d!=null&&ki(d.tI,1)?li(this,15).e[yb+li(d,1)]:Ax(li(this,15),d,~~tf(d)))){return false}}return true}
function jz(){var a,b,c;c=0;for(b=Ew(new Dw(),cx(new Cw(),li(this,15)).a);jy(b.a);){a=li(ky(b.a),13);c+=a.hC();c=~~c}return c}
function uy(){}
_=uy.prototype=new rv();_.eQ=iz;_.hC=jz;_.tI=0;function vx(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function wx(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=tx(e,c.substring(1));a.m(b)}}}
function zx(b,a){return a==null?b.c:a!=null&&ki(a.tI,1)?Ex(b,li(a,1)):Dx(b,a,~~tf(a))}
function Cx(b,a){return a==null?b.b:a!=null&&ki(a.tI,1)?b.e[yb+li(a,1)]:Ax(b,a,~~tf(a))}
function Ax(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.s();if(h.q(g,d)){return c.t()}}}return null}
function Dx(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.s();if(h.q(g,d)){return true}}}return false}
function Ex(b,a){return yb+a in b.e}
function cy(b,a,c){return a==null?ay(b,c):a!=null&&ki(a.tI,1)?by(b,li(a,1),c):Fx(b,a,c,~~tf(a))}
function Fx(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.s();if(i.q(g,d)){var h=c.t();c.ab(j);return h}}}else{a=i.a[e]=[]}var c=oA(new nA(),g,j);a.push(c);++i.d;return null}
function ay(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function by(d,a,e){var b,c=d.e;a=yb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function dy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rf(a,b)}
function Bw(){}
_=Bw.prototype=new uy();_.q=dy;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function mz(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ki(b.tI,16))){return false}c=li(b,16);if(c.bb()!=this.bb()){return false}for(a=c.v();a.u();){d=a.w();if(!this.n(d)){return false}}return true}
function nz(){var a,b,c;a=0;for(b=this.v();b.u();){c=b.w();if(c!=null){a+=tf(c);a=~~a}}return a}
function kz(){}
_=kz.prototype=new ww();_.eQ=mz;_.hC=nz;_.tI=46;function cx(b,a){b.a=a;return b}
function ex(d,c){var a,b,e;if(c!=null&&ki(c.tI,13)){a=li(c,13);b=a.s();if(zx(d.a,b)){e=Cx(d.a,b);return bA(a.t(),e)}}return false}
function fx(a){return ex(this,a)}
function gx(){return Ew(new Dw(),this.a)}
function hx(){return this.a.d}
function Cw(){}
_=Cw.prototype=new kz();_.n=fx;_.v=gx;_.bb=hx;_.tI=47;_.a=null;function Ew(c,b){var a;c.b=b;a=pz(new oz());if(c.b.c){rz(a,jx(new ix(),c.b))}wx(c.b,a);vx(c.b,a);c.a=hy(new fy(),a);return c}
function ax(){return jy(this.a)}
function bx(){return li(ky(this.a),13)}
function Dw(){}
_=Dw.prototype=new rv();_.u=ax;_.w=bx;_.tI=0;_.a=null;_.b=null;function ez(b){var a;if(b!=null&&ki(b.tI,13)){a=li(b,13);if(BA(this.s(),a.s())&&BA(this.t(),a.t())){return true}}return false}
function fz(){var a,b;a=0;b=0;if(this.s()!=null){a=tf(this.s())}if(this.t()!=null){b=tf(this.t())}return a^b}
function cz(){}
_=cz.prototype=new rv();_.eQ=ez;_.hC=fz;_.tI=48;function jx(b,a){b.a=a;return b}
function lx(){return null}
function mx(){return this.a.b}
function nx(a){return ay(this.a,a)}
function ix(){}
_=ix.prototype=new cz();_.s=lx;_.t=mx;_.ab=nx;_.tI=49;_.a=null;function px(c,a,b){c.b=b;c.a=a;return c}
function rx(){return this.a}
function sx(){return this.b.e[yb+this.a]}
function tx(b,a){return px(new ox(),a,b)}
function ux(a){return by(this.b,this.a,a)}
function ox(){}
_=ox.prototype=new cz();_.s=rx;_.t=sx;_.ab=ux;_.tI=50;_.a=null;_.b=null;function oy(a){qz(this,this.bb(),a);return true}
function py(a,b){if(a<0||a>=b){sy(a,b)}}
function qy(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ki(e.tI,14))){return false}f=li(e,14);if(this.bb()!=f.b){return false}c=hy(new fy(),this);d=hy(new fy(),f);while(c.a<c.b.b){a=ky(c);b=ky(d);if(!(a==null?b==null:rf(a,b))){return false}}return true}
function ry(){var a,b,c;b=1;a=hy(new fy(),this);while(a.a<a.b.b){c=ky(a);b=31*b+(c==null?0:tf(c));b=~~b}return b}
function sy(a,b){throw lv(new kv(),Ab+a+Bb+b)}
function ty(){return hy(new fy(),this)}
function ey(){}
_=ey.prototype=new ww();_.m=oy;_.eQ=qy;_.hC=ry;_.v=ty;_.tI=0;function hy(b,a){b.b=a;return b}
function jy(a){return a.a<a.b.b}
function ky(a){if(a.a>=a.b.b){throw new vA()}return tz(a.b,a.a++)}
function ly(){return this.a<this.b.b}
function my(){return ky(this)}
function fy(){}
_=fy.prototype=new rv();_.u=ly;_.w=my;_.tI=0;_.a=0;_.b=null;function Cy(b,a,c){b.a=a;b.b=c;return b}
function Fy(a){return zx(this.a,a)}
function az(){var a;return a=Ew(new Dw(),this.b.a),xy(new wy(),a)}
function bz(){return this.b.a.d}
function vy(){}
_=vy.prototype=new kz();_.n=Fy;_.v=az;_.bb=bz;_.tI=51;_.a=null;_.b=null;function xy(a,b){a.a=b;return a}
function Ay(){return jy(this.a.a)}
function By(){var a;return a=li(ky(this.a.a),13),a.s()}
function wy(){}
_=wy.prototype=new rv();_.u=Ay;_.w=By;_.tI=0;_.a=null;function pz(a){a.a=bi(Di,0,0,0,0);a.b=0;return a}
function rz(b,a){ei(b.a,b.b++,a);return true}
function qz(c,a,b){if(a<0||a>c.b){sy(a,c.b)}c.a.splice(a,0,b);++c.b}
function tz(b,a){py(a,b.b);return b.a[a]}
function uz(c,b,a){for(;a<c.b;++a){if(BA(b,c.a[a])){return a}}return -1}
function vz(c,a){var b;b=(py(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function wz(g,f){var a;a=uz(g,f,0);if(a==-1){return false}vz(g,a);return true}
function xz(a){return ei(this.a,this.b++,a),true}
function yz(a){return uz(this,a,0)!=-1}
function zz(){return this.b}
function oz(){}
_=oz.prototype=new ey();_.m=xz;_.n=yz;_.bb=zz;_.tI=52;_.a=null;_.b=0;function Fz(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function bA(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rf(a,b)}
function Ez(){}
_=Ez.prototype=new Bw();_.tI=53;function dA(a){a.a=Fz(new Ez());return a}
function eA(c,a){var b;b=cy(c.a,a,c);return b==null}
function gA(b){var a;return a=cy(this.a,b,this),a==null}
function hA(a){return zx(this.a,a)}
function iA(){var a;return a=Ew(new Dw(),hz(this.a).b.a),xy(new wy(),a)}
function jA(){return this.a.d}
function cA(){}
_=cA.prototype=new kz();_.m=gA;_.n=hA;_.v=iA;_.bb=jA;_.tI=54;_.a=null;function oA(b,a,c){b.a=a;b.b=c;return b}
function qA(){return this.a}
function rA(){return this.b}
function tA(b){var a;a=this.b;this.b=b;return a}
function nA(){}
_=nA.prototype=new cz();_.s=qA;_.t=rA;_.ab=tA;_.tI=55;_.a=null;_.b=null;function vA(){}
_=vA.prototype=new vv();_.tI=56;function BA(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&rf(a,b)}
function tu(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Cb,evtGroup:Db,millis:(new Date()).getTime(),type:Eb,className:Fb});mu(new lu())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{tu()}catch(a){b(d)}else{tu()}}
function CA(){}
var Ci=Cu(ac,bc),Di=Cu(cc,dc),Bi=Cu(fc,gc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();