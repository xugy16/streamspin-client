(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var hc='',wc=' ',fb=" border='0'><\/gwt:clipper>",eb=' height=',cb='" width=',F='"><img src=\'',l='#',jb='$',ab="' onerror='if(window.__gwt_transparentImgHandler)window.__gwt_transparentImgHandler(this);else this.src=\"",B="',sizingMethod='crop'); margin-left: ",cd=', Size: ',sd='-',Cb='/',kd='0',de='0.0',xd='0px',he='100%',s='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',qe='50%',Ad='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',kb=':',se='<\/div>',md='<SELECT>',re="<div class='vsplitter' style='text-align:center;'>",E='<gwt:clipper style="',m='?',sc='BackgroundImageCache',qc='CSS1Compat',od='DIV',bc='DOMMouseScroll',dd='Hello World!',bd='Index: ',vb='JavaScriptObject$;',tb='Object;',hb='SimpleGadget',rb='Widget;',ub='[Lcom.google.gwt.core.client.',qb='[Lcom.google.gwt.user.client.ui.',sb='[Ljava.lang.',ib='\\',Dc='__gwt_initWindowCloseHandler',Bd='absolute',fe='alpha(opacity=0)',o='auto',ae='background',id='blur',Fd='border',Ac='button',ld='cellPadding',jd='cellSpacing',td='change',vc='className',gb='clear.cache.gif',bb='clear.cache.gif"\' style="',Ed='click',pb='com.streamspin.client.StreamSpinClient',cc='contextmenu',je='dblclick',ed='div',Fb='error',ee='filter',A="filter: progid:DXImageTransform.Microsoft.AlphaImageLoader(src='",n='focus',rc='function',tc='function ',Bc='gwt-Button',gd='gwt-HTML',fd='gwt-Label',nd='gwt-ListBox',rd='gwt-MenuBar',oe='gwt-TextArea',pe='gwt-VerticalSplitPanel',ie='height',yd='hideFocus',vd='horizontal',v='http://',t='https',u='https://',y='keydown',db='keypress',ob='keyup',xc='left',wb='load',xb='losecapture',Cd='margin',qd='menubar',mb='moduleStartup',yb='mousedown',zb='mousemove',Ab='mouseout',Bb='mouseover',Db='mouseup',ac='mousewheel',me='none',ke='offsetHeight',nb='onModuleLoadStart',nc='onblur',dc='onclick',pc='oncontextmenu',oc='ondblclick',mc='onfocus',jc='onkeydown',kc='onkeypress',lc='onkeyup',ec='onmousedown',gc='onmousemove',fc='onmouseup',ic='onmousewheel',p='onresize',ce='opacity',wd='outline',te='overflow',w='overflow: hidden; width: ',Dd='padding',zc='position',le='px',D='px; border: none',x='px; height: ',C='px; margin-top: ',z='px; padding: 0px; zoom: 1',r='relative',pd='role',uc='script',Eb='scroll',lb='startup',Cc='submit',Fc='table',ad='tbody',q='textAlign',ne='textarea',yc='top',hd='tr',zd='true',Ec='type',ud='vertical',be='white',ge='width';var _;function bu(a){return this===(a==null?null:a)}
function cu(){return this.$H||(this.$H=++mf)}
function Ft(){}
_=Ft.prototype={};_.eQ=bu;_.hC=cu;_.tM=mz;_.tI=1;function bf(b,a){return b.tM==mz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function df(a){return a.tM==mz||a.tI==2?a.hC():a.$H||(a.$H=++mf)}
function jf(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(Cb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+Cb:hc}
var mf=0;function uf(b,a){return b===a||b.contains(a)}
function hg(){hg=mz;kg()}
function jg(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function kg(){try{$doc.execCommand(sc,false,true)}catch(a){}}
function og(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function pg(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;jg(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function qg(a,c){hg();var b,d;if(ru(a.__pendingSrc||a.src,c)){return}if(!rg){rg={}}b=a.__pendingSrc;if(b!=null){d=rg[b];if(d==a){pg(rg,d)}else{og(d,a)}}d=rg[c];if(!d){jg(rg,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var rg=null;function Cg(){}
_=Cg.prototype=new Ft();_.tI=0;function dh(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function eh(a,f,c,b,e){var d;d=dh(e,b);fh(a,f,c,d);return d}
function fh(b,d,c,a){if(!gh){gh=new Fg()}jh(a,gh);a.tI=d;a.qI=c;return a}
function hh(a,b,c){if(c!=null){if(a.qI>0&&!mh(c.tI,a.qI)){throw new dt()}if(a.qI<0&&(c.tM==mz||c.tI==2)){throw new dt()}}return a[b]=c}
function jh(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Fg(){}
_=Fg.prototype=new Ft();_.tI=0;_.length=0;_.qI=0;var gh=null;function nh(b,a){return b&&!!Bh[b][a]}
function mh(b,a){return b&&Bh[b][a]}
function oh(b,a){if(b!=null&&!mh(b.tI,a)){throw new ht()}return b}
function Ah(a){if(a!=null){throw new ht()}return a}
var Bh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{15:1},{15:1},{15:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,9:1,13:1},{5:1},{6:1,8:1,9:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,13:1},{6:1,8:1,12:1,13:1},{3:1},{4:1},{7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{17:1},{17:1},{14:1},{14:1},{14:1},{17:1},{16:1},{17:1},{14:1},{2:1},{11:1}];function Fu(){}
_=Fu.prototype=new Ft();_.tI=3;function qt(){}
_=qt.prototype=new Fu();_.tI=4;function du(){}
_=du.prototype=new qt();_.tI=5;function pi(a){return a}
function oi(){}
_=oi.prototype=new du();_.tI=7;function gj(a){a.a=ti(new si(),a);a.b=Ex(new Dx());a.d=xi(new wi(),a);a.f=Ci(new Ai(),a);return a}
function ij(b){var a;a=Ei(b.f);bj(b.f);if(a!=null&&nh(a.tI,3)){pi(new oi(),oh(a,3))}else{}b.c=false;kj(b)}
function jj(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;hk(d.a,10000);while(Fi(d.f)){b=aj(d.f);try{if(b==null){return}if(b!=null&&nh(b.tI,3)){a=oh(b,3);br(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}bj(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){ek(d.a);d.c=false;kj(d)}}}
function kj(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;hk(a.d,1)}}
function mj(b,a){Fx(b.b,a);kj(b)}
function ri(){}
_=ri.prototype=new Ft();_.tI=0;_.c=false;_.e=false;function fk(){fk=mz;mk=Ex(new Dx());qk(new ak())}
function ek(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}ey(mk,a)}
function gk(a){if(!a.b){ey(mk,a)}a.ab()}
function hk(b,a){if(a<=0){throw new st()}ek(b);b.b=false;b.c=kk(b,a);Fx(mk,b)}
function kk(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function lk(){gk(this)}
function Fj(){}
_=Fj.prototype=new Ft();_.s=lk;_.tI=8;_.b=false;_.c=0;var mk;function ui(){ui=mz;fk()}
function ti(b,a){ui();b.a=a;return b}
function vi(){if(!this.a.c){return}ij(this.a)}
function si(){}
_=si.prototype=new Fj();_.ab=vi;_.tI=9;_.a=null;function yi(){yi=mz;fk()}
function xi(b,a){yi();b.a=a;return b}
function zi(){this.a.e=false;jj(this.a,(new Date()).getTime())}
function wi(){}
_=wi.prototype=new Fj();_.ab=zi;_.tI=10;_.a=null;function Ci(b,a){b.d=a;return b}
function Ei(a){return by(a.d.b,a.b)}
function Fi(a){return a.c<a.a}
function aj(b){var a;b.b=b.c;a=by(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function bj(a){dy(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function dj(){return this.c<this.a}
function ej(){return aj(this)}
function Ai(){}
_=Ai.prototype=new Ft();_.w=dj;_.y=ej;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function rj(b,a,c){var d;if(a==vj){if(kl(b)==8192){vj=null}}d=qj;qj=b;try{c.z(b)}finally{qj=d}}
function tj(a){return true}
function uj(a){if(!!vj&&a==vj){vj=null}ml();a.releaseCapture()}
function wj(a){vj=a;ml();a.setCapture()}
function zj(a,b){ml();bl(a,b)}
var qj=null,vj=null;function Bj(){Bj=mz;Dj=gj(new ri())}
function Cj(a){Bj();if(!a){throw new Ct()}mj(Dj,a)}
var Dj;function ck(){while((fk(),mk).b>0){ek(oh(by(mk,0),4))}}
function dk(){return null}
function ak(){}
_=ak.prototype=new Ft();_.E=ck;_.F=dk;_.tI=11;function qk(a){wk();if(!sk){sk=Ex(new Dx())}Fx(sk,a)}
function tk(){var a,b;if(sk){for(b=vw(new tw(),sk);b.a<b.b.cb();){a=oh(yw(b),5);a.E()}}}
function uk(){var a,b,c,d;d=null;if(sk){for(b=vw(new tw(),sk);b.a<b.b.cb();){a=oh(yw(b),5);c=a.F();d=c}}return d}
function wk(){if(!vk){vk=true;zl(yl(),Dc)}}
var sk=null,vk=false;function kl(a){switch(a.type){case id:return 4096;case td:return 1024;case Ed:return 1;case je:return 2;case n:return 2048;case y:return 128;case db:return 256;case ob:return 512;case wb:return 32768;case xb:return 8192;case yb:return 4;case zb:return 64;case Ab:return 32;case Bb:return 16;case Db:return 8;case Eb:return 16384;case Fb:return 65536;case ac:return 131072;case bc:return 131072;case cc:return 262144;}}
function ml(){if(!ol){Ek();ol=true}}
var ol=false;function Ek(){el=function(){var c=cl;cl=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!tj($wnd.event)){cl=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&nh(b.tI,6)&&!(b!=null&&(b.tM!=mz&&b.tI!=2))){rj($wnd.event,a,b)}}cl=c};dl=function(){var a=$doc.createEventObject();this.fireEvent(dc,a);if(this.__eventBits&2){el.call(this)}};var e=function(){el.call($doc.body)};var d=function(){dl.call($doc.body)};$doc.body.attachEvent(dc,e);$doc.body.attachEvent(ec,e);$doc.body.attachEvent(fc,e);$doc.body.attachEvent(gc,e);$doc.body.attachEvent(ic,e);$doc.body.attachEvent(jc,e);$doc.body.attachEvent(kc,e);$doc.body.attachEvent(lc,e);$doc.body.attachEvent(mc,e);$doc.body.attachEvent(nc,e);$doc.body.attachEvent(oc,d);$doc.body.attachEvent(pc,e)}
function bl(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?el:null;if(b&3)c.ondblclick=a&3?dl:null;if(b&4)c.onmousedown=a&4?el:null;if(b&8)c.onmouseup=a&8?el:null;if(b&16)c.onmouseover=a&16?el:null;if(b&32)c.onmouseout=a&32?el:null;if(b&64)c.onmousemove=a&64?el:null;if(b&128)c.onkeydown=a&128?el:null;if(b&256)c.onkeypress=a&256?el:null;if(b&512)c.onkeyup=a&512?el:null;if(b&1024)c.onchange=a&1024?el:null;if(b&2048)c.onfocus=a&2048?el:null;if(b&4096)c.onblur=a&4096?el:null;if(b&8192)c.onlosecapture=a&8192?el:null;if(b&16384)c.onscroll=a&16384?el:null;if(b&32768)c.onload=a&32768?el:null;if(b&65536)c.onerror=a&65536?el:null;if(b&131072)c.onmousewheel=a&131072?el:null;if(b&262144)c.oncontextmenu=a&262144?el:null}
var cl=null,dl=null,el=null;function sl(){sl=mz;ul=tl((sl(),new ql()))}
function tl(){return $doc.compatMode==qc?$doc.documentElement:$doc.body}
function ql(){}
_=ql.prototype=new Ft();_.tI=0;var ul;function yl(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function zl(c,b){var d,a;c=vu(c,rc,tc+b);d=(a=$doc.createElement(uc),a.text=c,a);$doc.body.appendChild(d);Al();$doc.body.removeChild(d)}
function Al(){$wnd.__gwt_initWindowCloseHandler(function(){return uk()},function(){tk()})}
function xp(b,a){Bp(b.l,a,true)}
function Ap(a){var b,c;b=a[vc]==null?null:String(a[vc]);c=b.indexOf(Du(32));if(c>=0){return b.substr(0,c-0)}return b}
function Bp(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new du()}j=yu(j);if(j.length==0){throw new st()}i=c[vc]==null?null:String(c[vc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=wc}c[vc]=i+j}}else{if(e!=-1){b=yu(i.substr(0,e-0));d=yu(wu(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+wc+d}c[vc]=h}}}
function wp(){}
_=wp.prototype=new Ft();_.tI=12;_.l=null;function Br(a){if(a.j){throw new vt()}a.j=true;a.l.__listener=a;a.p();a.B()}
function Cr(a){if(!a.j){throw new vt()}try{a.D()}finally{a.q();a.l.__listener=null;a.j=false}}
function Dr(a){if(a.k){Fl(a.k,a)}else if(a.k){throw new vt()}}
function Er(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){Cr(c)}c.k=null}else{if(a){throw new vt()}c.k=b;if(b.j){Br(c)}}}
function Fr(){}
function as(){}
function bs(a){}
function cs(){Cr(this)}
function ds(){}
function es(){}
function er(){}
_=er.prototype=new wp();_.p=Fr;_.q=as;_.z=bs;_.A=cs;_.B=ds;_.D=es;_.tI=13;_.j=false;_.k=null;function ko(){var a,b;for(b=this.x();b.w();){a=oh(b.y(),8);Br(a)}}
function lo(){var a,b;for(b=this.x();b.w();){a=oh(b.y(),8);a.A()}}
function mo(){}
function no(){}
function io(){}
_=io.prototype=new er();_.p=ko;_.q=lo;_.B=mo;_.D=no;_.tI=14;function vm(c,a,b){Dr(a);nr(c.d,a);b.appendChild(a.l);Er(a,c)}
function xm(b,c){var a;if(c.k!=b){return false}Er(c,null);a=c.l;a.parentElement.removeChild(a);sr(b.d,c);return true}
function ym(){return ir(new gr(),this.d)}
function tm(){}
_=tm.prototype=new io();_.x=ym;_.tI=15;function Dl(a,b){vm(a,b,a.l)}
function Fl(b,c){var a;a=xm(b,c);if(a){am(c.l)}return a}
function am(a){a.style[xc]=hc;a.style[yc]=hc;a.style[zc]=hc}
function Cl(){}
_=Cl.prototype=new tm();_.tI=16;function bm(){}
_=bm.prototype=new Ft();_.tI=0;function Am(b,a){b.l=a;b.l.tabIndex=0;return b}
function Bm(b,a){if(!b.a){b.a=pm(new om());zj(b.l,1|(b.l.__eventBits||0))}Fx(b.a,a)}
function Dm(b,a){if(kl(a)==1){if(b.a){rm(b.a)}}}
function Em(a){Dm(this,a)}
function zm(){}
_=zm.prototype=new er();_.z=Em;_.tI=17;_.a=null;function fm(b,a){b.l=a;b.l.tabIndex=0;return b}
function em(){}
_=em.prototype=new zm();_.tI=18;function hm(a){fm(a,$doc.createElement(Ac));km(a.l);a.l[vc]=Bc;return a}
function im(b,a){hm(b);b.l.innerHTML=a||hc;return b}
function km(b){if(b.type==Cc){try{b.setAttribute(Ec,Ac)}catch(a){}}}
function dm(){}
_=dm.prototype=new em();_.tI=19;function mm(a){a.d=mr(new fr());a.c=$doc.createElement(Fc);a.b=$doc.createElement(ad);a.c.appendChild(a.b);a.l=a.c;return a}
function lm(){}
_=lm.prototype=new tm();_.tI=20;_.b=null;_.c=null;function fv(a,b){var c;while(a.w()){c=a.y();if(b==null?c==null:bf(b,c)){return a}}return null}
function hv(a){throw new bv()}
function iv(b){var a;a=fv(this.x(),b);return !!a}
function ev(){}
_=ev.prototype=new Ft();_.n=hv;_.o=iv;_.tI=0;function Dw(a){this.m(this.cb(),a);return true}
function Cw(b,a){throw new bv()}
function Ew(a,b){if(a<0||a>=b){bx(a,b)}}
function Fw(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&nh(e.tI,15))){return false}f=oh(e,15);if(this.cb()!=f.cb()){return false}c=vw(new tw(),this);d=f.x();while(c.a<c.b.cb()){a=yw(c);b=yw(d);if(!(a==null?b==null:bf(a,b))){return false}}return true}
function ax(){var a,b,c;b=1;a=vw(new tw(),this);while(a.a<a.b.cb()){c=yw(a);b=31*b+(c==null?0:df(c));b=~~b}return b}
function bx(a,b){throw zt(new yt(),bd+a+cd+b)}
function cx(){return vw(new tw(),this)}
function sw(){}
_=sw.prototype=new ev();_.n=Dw;_.m=Cw;_.eQ=Fw;_.hC=ax;_.x=cx;_.tI=21;function Ex(a){a.a=eh(ai,0,0,0,0);a.b=0;return a}
function Fx(b,a){hh(b.a,b.b++,a);return true}
function by(b,a){Ew(a,b.b);return b.a[a]}
function cy(c,b,a){for(;a<c.b;++a){if(lz(b,c.a[a])){return a}}return -1}
function dy(c,a){var b;b=(Ew(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function ey(g,f){var a;a=cy(g,f,0);if(a==-1){return false}dy(g,a);return true}
function gy(a){return hh(this.a,this.b++,a),true}
function fy(a,b){if(a<0||a>this.b){bx(a,this.b)}this.a.splice(a,0,b);++this.b}
function hy(a){return cy(this,a,0)!=-1}
function iy(a){return Ew(a,this.b),this.a[a]}
function jy(){return this.b}
function Dx(){}
_=Dx.prototype=new sw();_.n=gy;_.m=fy;_.o=hy;_.v=iy;_.cb=jy;_.tI=22;_.a=null;_.b=0;function pm(a){Ex(a);return a}
function rm(b){var a;for(a=vw(new tw(),b);a.a<a.b.cb();){oh(yw(a),7);$wnd.alert(dd)}}
function om(){}
_=om.prototype=new Dx();_.tI=23;function tn(a){a.l=$doc.createElement(ed);a.l[vc]=fd;return a}
function vn(a){kl(a)}
function sn(){}
_=sn.prototype=new er();_.z=vn;_.tI=24;function an(a){a.l=$doc.createElement(ed);a.l[vc]=gd;return a}
function Fm(){}
_=Fm.prototype=new sn();_.tI=25;function on(a){mm(a);a.a=$doc.createElement(hd);a.b.appendChild(a.a);a.c[jd]=kd;a.c[ld]=kd;return a}
function nn(){}
_=nn.prototype=new lm();_.tI=26;_.a=null;function xn(b){var a;Am(b,(a=md,$doc.createElement(a)));b.l[vc]=nd;return b}
function zn(a){if(kl(a)==1024){}else{Dm(this,a)}}
function wn(){}
_=wn.prototype=new zm();_.z=zn;_.tI=27;function Dn(a,b){Ex(new Dx());a.b=Ex(new Dx());ao(a,b,(eo(),new bo()));return a}
function Fn(d,a){var b,c;for(c=vw(new tw(),d.b);c.a<c.b.cb();){b=Ah(yw(c));if(uf(null.eb(),a)){return b}}return null}
function ao(d,f){var b,c,e,a;c=$doc.createElement(Fc);d.a=$doc.createElement(ad);c.appendChild(d.a);if(!f){e=$doc.createElement(hd);d.a.appendChild(e)}b=(a=$doc.createElement(od),a.tabIndex=0,a);b.appendChild(c);d.l=b;d.l.setAttribute(pd,qd);zj(d.l,2225|(d.l.__eventBits||0));d.l[vc]=rd;if(f){xp(d,Ap(d.l)+sd+ud)}else{xp(d,Ap(d.l)+sd+vd)}d.l.style[wd]=xd;d.l.setAttribute(yd,zd)}
function go(a){var b;Fn(this,a.srcElement);switch(kl(a)){case 1:{ts(this.l);break}{break}case 2048:{Ah(by(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Ah(by(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{Ah(by(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:Ah(by(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:Ah(by(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{Ah(by(this.b,0))}}break}}}
function ho(){Cr(this)}
function An(){}
_=An.prototype=new er();_.z=go;_.A=ho;_.tI=28;_.a=null;function eo(){eo=mz;fo=$moduleBase+Ad;os(new ms(),fo,0,0,5,9)}
function bo(){}
_=bo.prototype=new Ft();_.tI=0;var fo;function yo(){yo=mz;Co=py(new oy());Do=ty(new sy())}
function xo(b,a){yo();b.d=mr(new fr());b.l=a;Br(b);return b}
function zo(){var b,a;yo();var c,d;for(d=(b=mv(new lv(),wx(Do.a).b.a),gx(new fx(),b));xw(d.a.a);){c=oh((a=oh(yw(d.a.a),14),a.t()),8);if(c.j){c.A()}}}
function Bo(a){yo();var b;b=oh(kw(Co,a),9);if(b){return b}if(Co.d==0){qk(new qo())}b=vo(new uo());qw(Co,a,b);uy(Do,b);return b}
function po(){}
_=po.prototype=new Cl();_.tI=29;var Co,Do;function so(){zo()}
function to(){return null}
function qo(){}
_=qo.prototype=new Ft();_.E=so;_.F=to;_.tI=30;function wo(){wo=mz;yo()}
function vo(a){wo();xo(a,$doc.body);return a}
function uo(){}
_=uo.prototype=new po();_.tI=31;function gp(e,b,c,a,d){e.i=eh(Fh,0,8,2,0);e.f=eh(Eh,0,-1,2,0);e.l=b;e.h=c;hh(e.f,0,a);hh(e.f,1,d);zj(e.l,8316|(e.l.__eventBits||0));if(!lp){lp=$doc.createElement(ed);lp.style[zc]=Bd;lp.style[yc]=xd;lp.style[xc]=xd;lp.style[Cd]=xd;lp.style[Dd]=xd;lp.style[Fd]=xd;lp.style[ae]=be;lp.style[ce]=de;lp.style[ee]=fe}return e}
function kp(a){a.style[zc]=Bd;a.style[yc]=xd;a.style[xc]=xd;a.style[ge]=he;a.style[ie]=he}
function mp(){return vr(new tr(),this.i)}
function np(c){var d,a,b;switch(kl(c)){case 4:{d=c.srcElement;if(uf(this.h,d)){this.g=true;this.c=((c.clientX||0)-(this.l.getBoundingClientRect().left+(sl(),ul).scrollLeft),(c.clientY||0)-(this.l.getBoundingClientRect().top+ul.scrollTop));this.d=parseInt(this.f[0][ke])||0;a=((yo(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;lp.style[ie]=a+le;lp.style[ge]=b+le;$doc.body.appendChild(lp);wj(this.l);c.returnValue=false}break}case 8:{if(oh(this,12).g){oh(this,12).g=false;(yo(),$doc.body).removeChild(lp);uj(this.l)}break}case 64:{if(oh(this,12).g){pq(this.b,this.d+((c.clientX||0)-(this.l.getBoundingClientRect().left+(sl(),ul).scrollLeft),(c.clientY||0)-(this.l.getBoundingClientRect().top+ul.scrollTop))-this.c);c.returnValue=false}break}case 8192:{if(oh(this,12).g){oh(this,12).g=false;(yo(),$doc.body).removeChild(lp)}break}}}
function op(a){a.style[Dd]=kd;a.style[Cd]=kd;a.style[Fd]=me;return a}
function ep(){}
_=ep.prototype=new io();_.x=mp;_.z=np;_.tI=32;_.g=false;_.h=null;var lp=null;function tp(b,a){b.l=a;b.l.tabIndex=0;return b}
function vp(a){var b;b=kl(a);if((b&896)!=0){Dm(this,a)}else if(b==1024){}else{Dm(this,a)}}
function sp(){}
_=sp.prototype=new zm();_.z=vp;_.tI=33;function qp(a){tp(a,$doc.createElement(ne));a.l[vc]=oe;return a}
function pp(){}
_=pp.prototype=new sp();_.tI=34;function Dp(a){mm(a);a.c[jd]=kd;a.c[ld]=kd;return a}
function Cp(){}
_=Cp.prototype=new lm();_.tI=35;function Dq(e){gp(e,$doc.createElement(ed),$doc.createElement(ed),op($doc.createElement(ed)),op($doc.createElement(ed)));e.b=new eq();e.a=op($doc.createElement(ed));Eq(e,(zq(),Bq));e.l[vc]=pe;nq(e.b,e);br(e,qe);return e}
function Eq(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=re+is(d.d,d.b,d.c,d.e,d.a)+se||hc;e.style[te]=o;a.style[te]=o}
function br(b,a){var c;b.e=a;c=b.f[0];c.style[ie]=a;uq(b.b,parseInt(c[ke])||0)}
function cr(){oq(this.b);br(this,this.e);Cj(bq(new aq(),this))}
function dr(){this.b.e.a[p]=null}
function Fp(){}
_=Fp.prototype=new ep();_.B=cr;_.D=dr;_.tI=36;_.a=null;_.c=0;_.d=0;_.e=null;function bq(b,a){b.a=a;return b}
function aq(){}
_=aq.prototype=new Ft();_.tI=37;_.a=null;function uq(f,b){var a,c,d,e;d=f.e.h;c=parseInt(f.e.a[ke])||0;e=parseInt(d[ke])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}qq(f,f.e.f[0],d,f.e.f[1],b,b+e,a)}
function dq(){}
_=dq.prototype=new Ft();_.tI=0;_.e=null;function lq(c,a){var b=c;a.onresize=function(){b.C()}}
function nq(d,c){var a,b,e;d.e=c;b=c.l;b.style[q]=xc;b.style[zc]=r;e=c.f[0];a=c.f[1];rq(e);rq(a);rq(c.h);kp(c.a)}
function oq(a){lq(a,a.e.a);uq(a,parseInt(a.e.f[0][ke])||0)}
function pq(b,a){if(!b.b){b.b=true;hk(gq(new fq(),b),20)}b.d=a}
function qq(e,f,d,a,g,c,b){if(g==0){f.style[ge]=xd;e.c=true}else if(e.c){f.style[ge]=he;e.c=false}if(b==0){a.style[ge]=xd;e.a=true}else if(e.a){a.style[ge]=he;e.a=false}f.style[ie]=g+le;d.style[yc]=g+le;a.style[yc]=c+le;a.style[ie]=b+le}
function rq(a){a.style[zc]=Bd;a.style[xc]=kd;a.style[ge]=he}
function sq(){uq(this,parseInt(this.e.f[0][ke])||0)}
function eq(){}
_=eq.prototype=new dq();_.C=sq;_.tI=0;_.a=false;_.b=false;_.c=false;_.d=0;function hq(){hq=mz;fk()}
function gq(b,a){hq();b.a=a;return b}
function iq(){uq(this.a,this.a.d);this.a.b=false}
function fq(){}
_=fq.prototype=new Fj();_.ab=iq;_.tI=38;_.a=null;function zq(){zq=mz;Aq=$moduleBase+s;Bq=os(new ms(),Aq,0,0,7,7)}
function xq(){}
_=xq.prototype=new Ft();_.tI=0;var Aq,Bq;function mr(a){a.a=eh(Fh,0,8,4,0);return a}
function nr(a,b){qr(a,b,a.b)}
function pr(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function qr(d,e,a){var b,c;if(a<0||a>d.b){throw new yt()}if(d.b==d.a.length){c=eh(Fh,0,8,d.a.length*2,0);for(b=0;b<d.a.length;++b){hh(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){hh(d.a,b,d.a[b-1])}hh(d.a,a,e)}
function rr(c,b){var a;if(b<0||b>=c.b){throw new yt()}--c.b;for(a=b;a<c.b;++a){hh(c.a,a,c.a[a+1])}hh(c.a,c.b,null)}
function sr(b,c){var a;a=pr(b,c);if(a==-1){throw new fz()}rr(b,a)}
function fr(){}
_=fr.prototype=new Ft();_.tI=0;_.a=null;_.b=0;function ir(b,a){b.b=a;return b}
function kr(){return this.a<this.b.b-1}
function lr(){if(this.a>=this.b.b){throw new fz()}return this.b.a[++this.a]}
function gr(){}
_=gr.prototype=new Ft();_.w=kr;_.y=lr;_.tI=0;_.a=-1;_.b=null;function vr(a,b){a.b=b;xr(a);return a}
function xr(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function yr(){return this.a<this.b.length}
function zr(){var a;if(this.a>=this.b.length){throw new fz()}a=this.b[this.a];xr(this);return a}
function tr(){}
_=tr.prototype=new Ft();_.w=yr;_.y=zr;_.tI=0;_.a=-1;_.b=null;function hs(){hs=mz;ks=jf().indexOf(t)==0?u:v}
function is(g,e,f,h,c){var a,b,d;b=w+h+x+c+z;d=A+g+B+-e+C+-f+D;a=E+b+F+ks+ab+$moduleBase+bb+d+cb+(e+h)+eb+(f+c)+fb;return a}
function js(){hs();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;qg(a,$moduleBase+gb)}}
var ks;function ps(){ps=mz;hs();js()}
function os(c,e,b,d,f,a){ps();c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function ms(){}
_=ms.prototype=new bm();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function ts(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function xs(){}
_=xs.prototype=new Cg();_.tI=0;function ys(){}
_=ys.prototype=new Ft();_.tI=39;function Bs(b){var a;Dp(new Cp());on(new nn());Dq(new Fp(),(zq(),new xq()));xn(new wn());qp(new pp());Dn(new An(),false);hm(new dm());tn(new sn());an(new Fm());a=im(new dm(),hb);Bm(a,new ys());Dl((yo(),Bo(null)),a);return b}
function As(){}
_=As.prototype=new xs();_.tI=0;function dt(){}
_=dt.prototype=new du();_.tI=41;function kt(c,a){var b;b=new gt();return b}
function gt(){}
_=gt.prototype=new Ft();_.tI=0;function ht(){}
_=ht.prototype=new du();_.tI=44;function st(){}
_=st.prototype=new du();_.tI=45;function vt(){}
_=vt.prototype=new du();_.tI=46;function zt(b,a){return b}
function yt(){}
_=yt.prototype=new du();_.tI=47;function Ct(){}
_=Ct.prototype=new du();_.tI=48;function ru(b,a){if(!(a!=null&&nh(a.tI,1))){return false}return String(b)==a}
function vu(c,a,b){b=Au(b);return c.replace(RegExp(a),b)}
function wu(b,a){return b.substr(a,b.length-a)}
function yu(c){if(c.length==0||c[0]>wc&&c[c.length-1]>wc){return c}var a=c.replace(/^(\s*)/,hc);var b=a.replace(/\s*$/,hc);return b}
function Au(b){var a;a=0;while(0<=(a=b.indexOf(ib,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+jb+wu(b,++a)}else{b=b.substr(0,a-0)+wu(b,++a)}}return b}
function Bu(a){return ru(this,a)}
function Du(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Eu(){return nu(this)}
_=String.prototype;_.eQ=Bu;_.hC=Eu;_.tI=2;function iu(){iu=mz;ju={};mu={}}
function ku(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function nu(c){iu();var a=kb+c;var b=mu[a];if(b!=null){return b}b=ju[a];if(b==null){b=ku(c)}ou();return mu[a]=b}
function ou(){if(lu==256){ju=mu;mu={};lu=0}++lu}
var ju,lu=0,mu;function bv(){}
_=bv.prototype=new du();_.tI=49;function wx(b){var a;a=qv(new kv(),b);return lx(new ex(),b,a)}
function xx(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&nh(c.tI,16))){return false}e=oh(c,16);if(oh(this,16).d!=e.d){return false}for(b=mv(new lv(),qv(new kv(),e).a);xw(b.a);){a=oh(yw(b.a),14);d=a.t();f=a.u();if(!(d==null?oh(this,16).c:d!=null&&nh(d.tI,1)?mw(oh(this,16),oh(d,1)):lw(oh(this,16),d,~~df(d)))){return false}if(!lz(f,d==null?oh(this,16).b:d!=null&&nh(d.tI,1)?oh(this,16).e[kb+oh(d,1)]:iw(oh(this,16),d,~~df(d)))){return false}}return true}
function yx(){var a,b,c;c=0;for(b=mv(new lv(),qv(new kv(),oh(this,16)).a);xw(b.a);){a=oh(yw(b.a),14);c+=a.hC();c=~~c}return c}
function dx(){}
_=dx.prototype=new Ft();_.eQ=xx;_.hC=yx;_.tI=0;function dw(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.n(a[f])}}}}
function ew(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=bw(e,c.substring(1));a.n(b)}}}
function hw(b,a){return a==null?b.c:a!=null&&nh(a.tI,1)?mw(b,oh(a,1)):lw(b,a,~~df(a))}
function kw(b,a){return a==null?b.b:a!=null&&nh(a.tI,1)?b.e[kb+oh(a,1)]:iw(b,a,~~df(a))}
function iw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function lw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function mw(b,a){return kb+a in b.e}
function qw(b,a,c){return a==null?ow(b,c):a!=null&&nh(a.tI,1)?pw(b,oh(a,1),c):nw(b,a,c,~~df(a))}
function nw(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.bb(j);return h}}}else{a=i.a[e]=[]}var c=Ey(new Dy(),g,j);a.push(c);++i.d;return null}
function ow(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function pw(d,a,e){var b,c=d.e;a=kb+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function rw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&bf(a,b)}
function jv(){}
_=jv.prototype=new dx();_.r=rw;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Bx(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&nh(b.tI,17))){return false}c=oh(b,17);if(c.cb()!=this.cb()){return false}for(a=c.x();a.w();){d=a.y();if(!this.o(d)){return false}}return true}
function Cx(){var a,b,c;a=0;for(b=this.x();b.w();){c=b.y();if(c!=null){a+=df(c);a=~~a}}return a}
function zx(){}
_=zx.prototype=new ev();_.eQ=Bx;_.hC=Cx;_.tI=50;function qv(b,a){b.a=a;return b}
function sv(d,c){var a,b,e;if(c!=null&&nh(c.tI,14)){a=oh(c,14);b=a.t();if(hw(d.a,b)){e=kw(d.a,b);return ry(a.u(),e)}}return false}
function tv(a){return sv(this,a)}
function uv(){return mv(new lv(),this.a)}
function vv(){return this.a.d}
function kv(){}
_=kv.prototype=new zx();_.o=tv;_.x=uv;_.cb=vv;_.tI=51;_.a=null;function mv(c,b){var a;c.b=b;a=Ex(new Dx());if(c.b.c){Fx(a,xv(new wv(),c.b))}ew(c.b,a);dw(c.b,a);c.a=vw(new tw(),a);return c}
function ov(){return xw(this.a)}
function pv(){return oh(yw(this.a),14)}
function lv(){}
_=lv.prototype=new Ft();_.w=ov;_.y=pv;_.tI=0;_.a=null;_.b=null;function tx(b){var a;if(b!=null&&nh(b.tI,14)){a=oh(b,14);if(lz(this.t(),a.t())&&lz(this.u(),a.u())){return true}}return false}
function ux(){var a,b;a=0;b=0;if(this.t()!=null){a=df(this.t())}if(this.u()!=null){b=df(this.u())}return a^b}
function rx(){}
_=rx.prototype=new Ft();_.eQ=tx;_.hC=ux;_.tI=52;function xv(b,a){b.a=a;return b}
function zv(){return null}
function Av(){return this.a.b}
function Bv(a){return ow(this.a,a)}
function wv(){}
_=wv.prototype=new rx();_.t=zv;_.u=Av;_.bb=Bv;_.tI=53;_.a=null;function Dv(c,a,b){c.b=b;c.a=a;return c}
function Fv(){return this.a}
function aw(){return this.b.e[kb+this.a]}
function bw(b,a){return Dv(new Cv(),a,b)}
function cw(a){return pw(this.b,this.a,a)}
function Cv(){}
_=Cv.prototype=new rx();_.t=Fv;_.u=aw;_.bb=cw;_.tI=54;_.a=null;_.b=null;function vw(b,a){b.b=a;return b}
function xw(a){return a.a<a.b.cb()}
function yw(a){if(a.a>=a.b.cb()){throw new fz()}return a.b.v(a.a++)}
function zw(){return this.a<this.b.cb()}
function Aw(){return yw(this)}
function tw(){}
_=tw.prototype=new Ft();_.w=zw;_.y=Aw;_.tI=0;_.a=0;_.b=null;function lx(b,a,c){b.a=a;b.b=c;return b}
function ox(a){return hw(this.a,a)}
function px(){var a;return a=mv(new lv(),this.b.a),gx(new fx(),a)}
function qx(){return this.b.a.d}
function ex(){}
_=ex.prototype=new zx();_.o=ox;_.x=px;_.cb=qx;_.tI=55;_.a=null;_.b=null;function gx(a,b){a.a=b;return a}
function jx(){return xw(this.a.a)}
function kx(){var a;return a=oh(yw(this.a.a),14),a.t()}
function fx(){}
_=fx.prototype=new Ft();_.w=jx;_.y=kx;_.tI=0;_.a=null;function py(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function ry(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&bf(a,b)}
function oy(){}
_=oy.prototype=new jv();_.tI=56;function ty(a){a.a=py(new oy());return a}
function uy(c,a){var b;b=qw(c.a,a,c);return b==null}
function wy(b){var a;return a=qw(this.a,b,this),a==null}
function xy(a){return hw(this.a,a)}
function yy(){var a;return a=mv(new lv(),wx(this.a).b.a),gx(new fx(),a)}
function zy(){return this.a.d}
function sy(){}
_=sy.prototype=new zx();_.n=wy;_.o=xy;_.x=yy;_.cb=zy;_.tI=57;_.a=null;function Ey(b,a,c){b.a=a;b.b=c;return b}
function az(){return this.a}
function bz(){return this.b}
function dz(b){var a;a=this.b;this.b=b;return a}
function Dy(){}
_=Dy.prototype=new rx();_.t=az;_.u=bz;_.bb=dz;_.tI=58;_.a=null;_.b=null;function fz(){}
_=fz.prototype=new du();_.tI=59;function lz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&bf(a,b)}
function bt(){!!$stats&&$stats({moduleName:$moduleName,subSystem:lb,evtGroup:mb,millis:(new Date()).getTime(),type:nb,className:pb});Bs(new As())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{bt()}catch(a){b(d)}else{bt()}}
function mz(){}
var Fh=kt(qb,rb),ai=kt(sb,tb),Eh=kt(ub,vb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();