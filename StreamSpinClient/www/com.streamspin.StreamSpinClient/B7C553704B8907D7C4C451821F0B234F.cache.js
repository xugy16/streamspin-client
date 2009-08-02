(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var m='',Bb=' ',fe="' border='0'>",be=') no-repeat ',C=', Size: ',Ac='-',pc='0',kd='0.0',Fc='0px',u='100%',x='100px',p='1px',Dd='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',wd='50%',cd='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',A=':',yd='<\/div>',xd="<div class='vsplitter' style='text-align:center;'>",de="<img src='",Ab='BODY',ub='DOMMouseScroll',B='Index: ',s='Item one',t='Item two',hb='JavaScriptObject$;',fb='Object;',w='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',cb='Widget;',gb='[Lcom.google.gwt.core.client.',bb='[Lcom.google.gwt.user.client.ui.',eb='[Ljava.lang.',fc='absolute',tc='align',md='alpha(opacity=0)',Ad='auto',hd='background',Bc='blur',fd='border',pb='border-left-width',qc='border-top-width',lc='bottom',z='buhu',Fb='button',rc='cellPadding',oc='cellSpacing',jc='center',gd='change',zb='className',ee="clear.cache.gif' style='",rd='click',ab='com.streamspin.client.StreamSpinClient',vb='contextmenu',Cd='dblclick',gc='div',sb='error',ld='filter',n='focus',ac='gwt-Button',ic='gwt-HTML',hc='gwt-Label',vc='gwt-ListBox',zc='gwt-MenuBar',ud='gwt-TextArea',vd='gwt-VerticalSplitPanel',od='height',q='hidden',ad='hideFocus',Dc='horizontal',wb='html',ge='input',y='keydown',db='keypress',ib='keyup',Cb='left',jb='load',kb='losecapture',dd='margin',xb='margin-left',yb='margin-top',yc='menubar',mc='middle',E='moduleStartup',lb='mousedown',mb='mousemove',nb='mouseout',ob='mouseover',qb='mouseup',tb='mousewheel',sd='none',nd='offsetHeight',F='onModuleLoadStart',r='online stuff',jd='opacity',wc='option',Ec='outline',zd='overflow',ed='padding',Eb='position',pd='px',ce='px ',ae='px; background: url(',Fd='px; height: ',Bd='relative',kc='right',xc='role',rb='scroll',l='select',D='startup',bc='submit',dc='table',ec='tbody',sc='td',o='text',td='textarea',Db='top',nc='tr',bd='true',cc='type',v='value',Cc='vertical',uc='verticalAlign',id='white',qd='width',Ed='width: ';var _;function ju(a){return this===(a==null?null:a)}
function ku(){return this.$H||(this.$H=++Ae)}
function hu(){}
_=hu.prototype={};_.eQ=ju;_.hC=ku;_.tM=qz;_.tI=1;function re(b,a){return b.tM==qz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function te(a){return a.tM==qz||a.tI==2?a.hC():a.$H||(a.$H=++Ae)}
var Ae=0;function gf(){gf=qz;Ee();new Ce()}
function jf(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function kf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function mf(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Be(){}
_=Be.prototype=new hu();_.tI=0;function ff(){ff=qz;gf()}
function ef(){}
_=ef.prototype=new Be();_.tI=0;function Ee(){Ee=qz;ff()}
function Fe(b){if(b.offsetLeft==null){return 0}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&$wnd.devicePixelRatio){c+=parseInt($doc.defaultView.getComputedStyle(d,m).getPropertyValue(pb))}if(d&&(d.tagName==Ab&&b.style.position==fc)){break}b=d}return c}
function af(b){if(b.offsetTop==null){return 0}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&$wnd.devicePixelRatio){e+=parseInt($doc.defaultView.getComputedStyle(c,m).getPropertyValue(qc))}if(c&&(c.tagName==Ab&&b.style.position==fc)){break}b=c}return e}
function bf(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function Ce(){}
_=Ce.prototype=new ef();_.tI=0;function og(){}
_=og.prototype=new hu();_.tI=0;function vg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function wg(a,f,c,b,e){var d;d=vg(e,b);xg(a,f,c,d);return d}
function xg(b,d,c,a){if(!yg){yg=new rg()}Bg(a,yg);a.tI=d;a.qI=c;return a}
function zg(a,b,c){if(c!=null){if(a.qI>0&&!Eg(c.tI,a.qI)){throw new lt()}if(a.qI<0&&(c.tM==qz||c.tI==2)){throw new lt()}}return a[b]=c}
function Bg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function rg(){}
_=rg.prototype=new hu();_.tI=0;_.length=0;_.qI=0;var yg=null;function Fg(b,a){return b&&!!nh[b][a]}
function Eg(b,a){return b&&nh[b][a]}
function ah(b,a){if(b!=null&&!Eg(b.tI,a)){throw new pt()}return b}
function mh(a){if(a!=null){throw new pt()}return a}
var nh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function fv(){}
_=fv.prototype=new hu();_.tI=3;function yt(){}
_=yt.prototype=new fv();_.tI=4;function lu(){}
_=lu.prototype=new yt();_.tI=5;function bi(a){return a}
function ai(){}
_=ai.prototype=new lu();_.tI=7;function yi(a){a.a=fi(new ei(),a);a.b=dy(new cy());a.d=ji(new ii(),a);a.f=oi(new mi(),a);return a}
function Ai(b){var a;a=qi(b.f);ti(b.f);if(a!=null&&Fg(a.tI,3)){bi(new ai(),ah(a,3))}else{}b.c=false;Ci(b)}
function Bi(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;Cj(d.a,10000);while(ri(d.f)){b=si(d.f);try{if(b==null){return}if(b!=null&&Fg(b.tI,3)){a=ah(b,3);ar(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}ti(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){zj(d.a);d.c=false;Ci(d)}}}
function Ci(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;Cj(a.d,1)}}
function Ei(b,a){fy(b.b,a);Ci(b)}
function di(){}
_=di.prototype=new hu();_.tI=0;_.c=false;_.e=false;function Aj(){Aj=qz;bk=dy(new cy());fk(new vj())}
function zj(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}ky(bk,a)}
function Bj(a){if(!a.b){ky(bk,a)}a.F()}
function Cj(b,a){if(a<=0){throw new At()}zj(b);b.b=false;b.c=Fj(b,a);fy(bk,b)}
function Fj(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function ak(){Bj(this)}
function uj(){}
_=uj.prototype=new hu();_.s=ak;_.tI=8;_.b=false;_.c=0;var bk;function gi(){gi=qz;Aj()}
function fi(b,a){gi();b.a=a;return b}
function hi(){if(!this.a.c){return}Ai(this.a)}
function ei(){}
_=ei.prototype=new uj();_.F=hi;_.tI=9;_.a=null;function ki(){ki=qz;Aj()}
function ji(b,a){ki();b.a=a;return b}
function li(){this.a.e=false;Bi(this.a,(new Date()).getTime())}
function ii(){}
_=ii.prototype=new uj();_.F=li;_.tI=10;_.a=null;function oi(b,a){b.d=a;return b}
function qi(a){return hy(a.d.b,a.b)}
function ri(a){return a.c<a.a}
function si(b){var a;b.b=b.c;a=hy(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ti(a){jy(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function vi(){return this.c<this.a}
function wi(){return si(this)}
function mi(){}
_=mi.prototype=new hu();_.v=vi;_.x=wi;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function dj(b,a,c){var d;if(a==lj){if(bl(b)==8192){lj=null}}d=cj;cj=b;try{c.y(b)}finally{cj=d}}
function kj(a){if(!!lj&&a==lj){lj=null}dl();xk(a)}
function mj(a){lj=a;dl();Ak=a}
function oj(a,b){dl();zk(a,b)}
var cj=null,lj=null;function qj(){qj=qz;sj=yi(new di())}
function rj(a){qj();if(!a){throw new eu()}Ei(sj,a)}
var sj;function xj(){while((Aj(),bk).b>0){zj(ah(hy(bk,0),4))}}
function yj(){return null}
function vj(){}
_=vj.prototype=new hu();_.C=xj;_.D=yj;_.tI=11;function fk(a){kk();if(!gk){gk=dy(new cy())}fy(gk,a)}
function hk(){var a,b;if(gk){for(b=Bw(new zw(),gk);b.a<b.b.b;){a=ah(Ew(b),5);a.C()}}}
function ik(){var a,b,c,d;d=null;if(gk){for(b=Bw(new zw(),gk);b.a<b.b.b;){a=ah(Ew(b),5);c=a.D();d=c}}return d}
function kk(){if(!jk){jk=true;jl()}}
var gk=null,jk=false;function bl(a){switch(a.type){case Bc:return 4096;case gd:return 1024;case rd:return 1;case Cd:return 2;case n:return 2048;case y:return 128;case db:return 256;case ib:return 512;case jb:return 32768;case kb:return 8192;case lb:return 4;case mb:return 64;case nb:return 32;case ob:return 16;case qb:return 8;case rb:return 16384;case sb:return 65536;case tb:return 131072;case ub:return 131072;case vb:return 262144;}}
function dl(){if(!fl){wk();fl=true}}
function gl(a){return a!=null&&Fg(a.tI,6)&&!(a!=null&&(a.tM!=qz&&a.tI!=2))}
var fl=false;function wk(){Ck=function(b){if(Bk(b)){var a=Ak;if(a&&a.__listener){if(gl(a.__listener)){dj(b,a,a.__listener);b.stopPropagation()}}}};Bk=function(a){return true};Dk=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(gl(c)){dj(b,a,c)}}};$wnd.addEventListener(rd,Ck,true);$wnd.addEventListener(Cd,Ck,true);$wnd.addEventListener(lb,Ck,true);$wnd.addEventListener(qb,Ck,true);$wnd.addEventListener(mb,Ck,true);$wnd.addEventListener(ob,Ck,true);$wnd.addEventListener(nb,Ck,true);$wnd.addEventListener(tb,Ck,true);$wnd.addEventListener(y,Bk,true);$wnd.addEventListener(ib,Bk,true);$wnd.addEventListener(db,Bk,true)}
function xk(a){if(a===Ak){Ak=null}}
function zk(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Dk:null;if(b&2)c.ondblclick=a&2?Dk:null;if(b&4)c.onmousedown=a&4?Dk:null;if(b&8)c.onmouseup=a&8?Dk:null;if(b&16)c.onmouseover=a&16?Dk:null;if(b&32)c.onmouseout=a&32?Dk:null;if(b&64)c.onmousemove=a&64?Dk:null;if(b&128)c.onkeydown=a&128?Dk:null;if(b&256)c.onkeypress=a&256?Dk:null;if(b&512)c.onkeyup=a&512?Dk:null;if(b&1024)c.onchange=a&1024?Dk:null;if(b&2048)c.onfocus=a&2048?Dk:null;if(b&4096)c.onblur=a&4096?Dk:null;if(b&8192)c.onlosecapture=a&8192?Dk:null;if(b&16384)c.onscroll=a&16384?Dk:null;if(b&32768)c.onload=a&32768?Dk:null;if(b&65536)c.onerror=a&65536?Dk:null;if(b&131072)c.onmousewheel=a&131072?Dk:null;if(b&262144)c.oncontextmenu=a&262144?Dk:null}
var Ak=null,Bk=null,Ck=null,Dk=null;function qk(a){if($wnd.devicePixelRatio){return a.clientX||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(wb)[0],m);return a.pageX-$doc.body.scrollLeft-parseInt(b.getPropertyValue(xb))-parseInt(b.getPropertyValue(pb))||0}}
function rk(a){if($wnd.devicePixelRatio){return a.clientY||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(wb)[0],m);return a.pageY-$doc.body.scrollTop-parseInt(b.getPropertyValue(yb))-parseInt(b.getPropertyValue(qc))||0}}
function jl(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ik()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{hk()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Bp(b,a){bq(b.l,a,true)}
function aq(a){var b,c;b=a[zb]==null?null:String(a[zb]);c=b.indexOf(dv(32));if(c>=0){return b.substr(0,c-0)}return b}
function bq(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new lu()}j=Fu(j);if(j.length==0){throw new At()}i=c[zb]==null?null:String(c[zb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Bb}c[zb]=i+j}}else{if(e!=-1){b=Fu(i.substr(0,e-0));d=Fu(Du(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Bb+d}c[zb]=h}}}
function Ap(){}
_=Ap.prototype=new hu();_.tI=12;_.l=null;function Ar(a){if(a.j){throw new Dt()}a.j=true;a.l.__listener=a;a.p();a.A()}
function Br(a){if(!a.j){throw new Dt()}try{a.B()}finally{a.q();a.l.__listener=null;a.j=false}}
function Cr(a){if(a.k){a.k.E(a)}else if(a.k){throw new Dt()}}
function Dr(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.z()}c.k=null}else{if(a){throw new Dt()}c.k=b;if(b.j){Ar(c)}}}
function Er(){}
function Fr(){}
function as(a){}
function bs(){Br(this)}
function cs(){}
function ds(){}
function dr(){}
_=dr.prototype=new Ap();_.p=Er;_.q=Fr;_.y=as;_.z=bs;_.A=cs;_.B=ds;_.tI=13;_.j=false;_.k=null;function io(){var a,b;for(b=this.w();b.v();){a=ah(b.x(),7);Ar(a)}}
function jo(){var a,b;for(b=this.w();b.v();){a=ah(b.x(),7);a.z()}}
function ko(){}
function lo(){}
function go(){}
_=go.prototype=new dr();_.p=io;_.q=jo;_.A=ko;_.B=lo;_.tI=14;function El(c,a,b){Cr(a);mr(c.f,a);b.appendChild(a.l);Dr(a,c)}
function am(b,c){var a;if(c.k!=b){return false}Dr(c,null);a=c.l;kf((gf(),a)).removeChild(a);rr(b.f,c);return true}
function bm(){return hr(new fr(),this.f)}
function cm(a){return am(this,a)}
function Cl(){}
_=Cl.prototype=new go();_.w=bm;_.E=cm;_.tI=15;function ll(a,b){El(a,b,a.l)}
function nl(b,c){var a;a=am(b,c);if(a){ol(c.l)}return a}
function ol(a){a.style[Cb]=m;a.style[Db]=m;a.style[Eb]=m}
function pl(a){return nl(this,a)}
function kl(){}
_=kl.prototype=new Cl();_.E=pl;_.tI=16;function ql(){}
_=ql.prototype=new hu();_.tI=0;function im(){im=qz;jm=(Cs(),Es)}
function hm(b,a){im();b.l=a;jm.ab(b.l,0);return b}
function km(a){bl(a)}
function gm(){}
_=gm.prototype=new dr();_.y=km;_.tI=17;var jm;function vl(){vl=qz;im()}
function ul(b,a){vl();b.l=a;jm.ab(b.l,0);return b}
function tl(){}
_=tl.prototype=new gm();_.tI=18;function xl(){xl=qz;vl()}
function wl(a){xl();ul(a,$doc.createElement((gf(),Fb)));yl(a.l);a.l[zb]=ac;return a}
function yl(b){if(b.type==bc){try{b.setAttribute(cc,Fb)}catch(a){}}}
function sl(){}
_=sl.prototype=new tl();_.tI=19;function Al(a){a.f=lr(new er());a.e=$doc.createElement((gf(),dc));a.d=$doc.createElement(ec);a.e.appendChild(a.d);a.l=a.e;return a}
function zl(){}
_=zl.prototype=new Cl();_.tI=20;_.d=null;_.e=null;function em(){em=qz;fm=(Cs(),Ds)}
var fm;function mn(a){a.l=$doc.createElement((gf(),gc));a.l[zb]=hc;return a}
function pn(a){bl(a)}
function ln(){}
_=ln.prototype=new dr();_.y=pn;_.tI=21;function mm(a){a.l=$doc.createElement((gf(),gc));a.l[zb]=ic;return a}
function lm(){}
_=lm.prototype=new ln();_.tI=22;function vm(){vm=qz;tm(new sm(),jc);xm=tm(new sm(),Cb);tm(new sm(),kc);wm=xm}
var wm,xm;function tm(b,a){b.a=a;return b}
function sm(){}
_=sm.prototype=new hu();_.tI=0;_.a=null;function Dm(){Dm=qz;Bm(new Am(),lc);Bm(new Am(),mc);Em=Bm(new Am(),Db)}
var Em;function Bm(a,b){a.a=b;return a}
function Am(){}
_=Am.prototype=new hu();_.tI=0;_.a=null;function dn(a){Al(a);a.a=(vm(),wm);a.c=(Dm(),Em);a.b=$doc.createElement((gf(),nc));a.d.appendChild(a.b);a.e[oc]=pc;a.e[rc]=pc;return a}
function en(c,d){var b,a;b=(a=$doc.createElement((gf(),sc)),(a[tc]=c.a.a,undefined),(a.style[uc]=c.c.a,undefined),a);c.b.appendChild(b);Cr(d);mr(c.f,d);b.appendChild(d.l);Dr(d,c)}
function hn(c){var a,b;b=kf((gf(),c.l));a=am(this,c);if(a){this.b.removeChild(b)}return a}
function bn(){}
_=bn.prototype=new zl();_.E=hn;_.tI=23;_.b=null;function un(){un=qz;im()}
function rn(a){un();hm(a,jf((gf(),false)));a.l[zb]=vc;return a}
function vn(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement((gf(),wc));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function xn(a){if(bl(a)==1024){}else{bl(a)}}
function qn(){}
_=qn.prototype=new gm();_.y=xn;_.tI=24;function Bn(a){dy(new cy());a.b=dy(new cy());En(a,false,(bo(),new Fn()));return a}
function Dn(d,a){var b,c;for(c=Bw(new zw(),d.b);c.a<c.b.b;){b=mh(Ew(c));if(bf((gf(),null.eb()),a)){return b}}return null}
function En(c,e){var a,b,d;b=$doc.createElement((gf(),dc));c.a=$doc.createElement(ec);b.appendChild(c.a);if(!e){d=$doc.createElement(nc);c.a.appendChild(d)}a=ss((em(),fm));a.appendChild(b);c.l=a;c.l.setAttribute(xc,yc);oj(c.l,2225|(c.l.__eventBits||0));c.l[zb]=zc;if(e){Bp(c,aq(c.l)+Ac+Cc)}else{Bp(c,aq(c.l)+Ac+Dc)}c.l.style[Ec]=Fc;c.l.setAttribute(ad,bd)}
function eo(a){var b;Dn(this,a.target);switch(bl(a)){case 1:{zs((em(),this.l));break}{break}case 2048:{mh(hy(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{mh(hy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{mh(hy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:mh(hy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:mh(hy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{mh(hy(this.b,0))}}break}}}
function fo(){Br(this)}
function yn(){}
_=yn.prototype=new dr();_.y=eo;_.z=fo;_.tI=25;_.a=null;function bo(){bo=qz;co=$moduleBase+cd;js(new hs(),co,0,0,5,9)}
function Fn(){}
_=Fn.prototype=new hu();_.tI=0;var co;function wo(){wo=qz;Ao=ty(new sy());Bo=xy(new wy())}
function vo(b,a){wo();b.f=lr(new er());b.l=a;Ar(b);return b}
function xo(){var b,a;wo();var c,d;for(d=(b=sv(new rv(),Bx(Bo.a).b.a),lx(new kx(),b));Dw(d.a.a);){c=ah((a=ah(Ew(d.a.a),13),a.t()),7);if(c.j){c.z()}}}
function zo(a){wo();var b;b=ah(qw(Ao,a),8);if(b){return b}if(Ao.d==0){fk(new oo())}b=to(new so());ww(Ao,a,b);yy(Bo,b);return b}
function no(){}
_=no.prototype=new kl();_.tI=26;var Ao,Bo;function qo(){xo()}
function ro(){return null}
function oo(){}
_=oo.prototype=new hu();_.C=qo;_.D=ro;_.tI=27;function uo(){uo=qz;wo()}
function to(a){uo();vo(a,$doc.body);return a}
function so(){}
_=so.prototype=new no();_.tI=28;function gp(e,b,c,a,d){e.i=wg(rh,0,7,2,0);e.f=wg(qh,0,-1,2,0);e.l=b;e.h=c;zg(e.f,0,a);zg(e.f,1,d);oj(e.l,8316|(e.l.__eventBits||0));if(!np){np=$doc.createElement((gf(),gc));np.style[Eb]=fc;np.style[Db]=Fc;np.style[Cb]=Fc;np.style[dd]=Fc;np.style[ed]=Fc;np.style[fd]=Fc;np.style[hd]=id;np.style[jd]=kd;np.style[ld]=md}return e}
function hp(a,b){if(!a.i[0]){kp(a,0,b)}else if(!a.i[1]){kp(a,1,b)}else{throw new Dt()}}
function kp(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){Cr(d)}if(b){Dr(b,null);c.f[a].removeChild(b.l)}zg(c.i,a,d);if(d){c.f[a].appendChild(d.l);Dr(d,c)}}
function mp(a){a.style[Eb]=fc;a.style[Cb]=Fc;a.style[kc]=Fc;a.style[Db]=Fc;a.style[lc]=Fc}
function op(){return ur(new sr(),this.i)}
function pp(c){var d,a,b;switch(bl(c)){case 4:{d=c.target;if(bf((gf(),this.h),d)){this.g=true;this.c=(qk(c)-Fe(this.l),rk(c)-af(this.l));this.d=parseInt(this.f[0][nd])||0;a=((wo(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;np.style[od]=a+pd;np.style[qd]=b+pd;$doc.body.appendChild(np);mj(this.l);c.preventDefault()}break}case 8:{if(ah(this,11).g){ah(this,11).g=false;(wo(),$doc.body).removeChild(np);kj(this.l)}break}case 64:{if(ah(this,11).g){qq(this.b,this.d+(qk(c)-Fe((gf(),this.l)),rk(c)-af(this.l))-this.c);c.preventDefault()}break}case 8192:{if(ah(this,11).g){ah(this,11).g=false;(wo(),$doc.body).removeChild(np)}break}}}
function qp(a){a.style[ed]=pc;a.style[dd]=pc;a.style[fd]=sd;return a}
function rp(a){if(this.i[0]==a){kp(this,0,null);return true}else if(this.i[1]==a){kp(this,1,null);return true}return false}
function ep(){}
_=ep.prototype=new go();_.w=op;_.y=pp;_.E=rp;_.tI=29;_.g=false;_.h=null;var np=null;function xp(){xp=qz;im()}
function wp(b,a){xp();b.l=a;jm.ab(b.l,0);return b}
function zp(a){var b;b=bl(a);if((b&896)!=0){bl(a)}else if(b==1024){}else{bl(a)}}
function vp(){}
_=vp.prototype=new gm();_.y=zp;_.tI=30;function up(){up=qz;xp()}
function tp(a){up();wp(a,$doc.createElement((gf(),td)));a.l[zb]=ud;return a}
function sp(){}
_=sp.prototype=new vp();_.tI=31;function eq(a){Al(a);a.a=(vm(),wm);a.b=(Dm(),Em);a.e[oc]=pc;a.e[rc]=pc;return a}
function fq(c,e){var b,d,a;d=$doc.createElement((gf(),nc));b=(a=$doc.createElement(sc),(a[tc]=c.a.a,undefined),(a.style[uc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);Cr(e);mr(c.f,e);b.appendChild(e.l);Dr(e,c)}
function iq(c){var a,b;b=kf((gf(),c.l));a=am(this,c);if(a){this.d.removeChild(kf(b))}return a}
function cq(){}
_=cq.prototype=new zl();_.E=iq;_.tI=32;function Aq(a){Bq(a,(wq(),new uq()));return a}
function Bq(d){gp(d,$doc.createElement((gf(),gc)),$doc.createElement(gc),qp($doc.createElement(gc)),qp($doc.createElement(gc)));d.b=new nq();d.a=qp($doc.createElement(gc));Cq(d,(wq(),yq));d.l[zb]=vd;pq(d.b,d);ar(d,wd);return d}
function Cq(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=xd+gs(d.d,d.b,d.c,d.e,d.a)+yd||m;e.style[zd]=Ad;a.style[zd]=Ad}
function ar(b,a){var c;b.e=a;c=b.f[0];c.style[od]=a;qq(b.b,parseInt(c[nd])||0)}
function br(){ar(this,this.e);rj(lq(new kq(),this))}
function cr(){}
function jq(){}
_=jq.prototype=new ep();_.A=br;_.B=cr;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function lq(b,a){b.a=a;return b}
function kq(){}
_=kq.prototype=new hu();_.tI=34;_.a=null;function pq(c,b){var a,d;c.a=b;b.l.style[Eb]=Bd;d=b.f[0];a=b.f[1];sq(d);sq(a);sq(b.h);mp(b.a);a.style[lc]=pc}
function qq(f,b){var a,c,d,e;d=f.a.h;c=parseInt(f.a.a[nd])||0;e=parseInt(d[nd])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}rq(f.a.f[0],d,f.a.f[1],b,b+e)}
function rq(d,c,a,e,b){d.style[od]=e+pd;c.style[Db]=e+pd;a.style[Db]=b+pd}
function sq(a){a.style[Eb]=fc;a.style[Cb]=pc;a.style[kc]=pc}
function nq(){}
_=nq.prototype=new hu();_.tI=0;_.a=null;function wq(){wq=qz;xq=$moduleBase+Dd;yq=js(new hs(),xq,0,0,7,7)}
function uq(){}
_=uq.prototype=new hu();_.tI=0;var xq,yq;function lr(a){a.a=wg(rh,0,7,4,0);return a}
function mr(a,b){pr(a,b,a.b)}
function or(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function pr(d,e,a){var b,c;if(a<0||a>d.b){throw new au()}if(d.b==d.a.length){c=wg(rh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){zg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){zg(d.a,b,d.a[b-1])}zg(d.a,a,e)}
function qr(c,b){var a;if(b<0||b>=c.b){throw new au()}--c.b;for(a=b;a<c.b;++a){zg(c.a,a,c.a[a+1])}zg(c.a,c.b,null)}
function rr(b,c){var a;a=or(b,c);if(a==-1){throw new jz()}qr(b,a)}
function er(){}
_=er.prototype=new hu();_.tI=0;_.a=null;_.b=0;function hr(b,a){b.b=a;return b}
function jr(){return this.a<this.b.b-1}
function kr(){if(this.a>=this.b.b){throw new jz()}return this.b.a[++this.a]}
function fr(){}
_=fr.prototype=new hu();_.v=jr;_.x=kr;_.tI=0;_.a=-1;_.b=null;function ur(a,b){a.b=b;wr(a);return a}
function wr(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function xr(){return this.a<this.b.length}
function yr(){var a;if(this.a>=this.b.length){throw new jz()}a=this.b[this.a];wr(this);return a}
function sr(){}
_=sr.prototype=new hu();_.v=xr;_.x=yr;_.tI=0;_.a=-1;_.b=null;function gs(f,c,e,g,b){var a,d;d=Ed+g+Fd+b+ae+f+be+(-c+ce)+(-e+pd);a=de+$moduleBase+ee+d+fe;return a}
function js(c,e,b,d,f,a){c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function hs(){}
_=hs.prototype=new ql();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function Cs(){Cs=qz;Ds=ws(new vs());Es=Ds?(Cs(),new ls()):Ds}
function Fs(a,b){a.tabIndex=b}
function ls(){}
_=ls.prototype=new hu();_.ab=Fs;_.tI=0;var Ds,Es;function ps(){ps=qz;Cs()}
function qs(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function rs(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function ss(c){var a=$doc.createElement(gc);var b=c.o();b.addEventListener(Bc,c.a,false);b.addEventListener(n,c.b,false);a.addEventListener(lb,c.c,false);a.appendChild(b);return a}
function ts(){var a=$doc.createElement(ge);a.type=o;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=fc;return a}
function us(a,b){a.firstChild.tabIndex=b}
function ms(){}
_=ms.prototype=new ls();_.o=ts;_.ab=us;_.tI=0;function xs(){xs=qz;ps()}
function ws(a){xs();a.a=qs();a.b=rs();a.c=ys();return a}
function ys(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function zs(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function As(){var a=$doc.createElement(ge);a.type=o;a.style.opacity=0;a.style.zIndex=-1;a.style.height=p;a.style.width=p;a.style.overflow=q;a.style.position=fc;return a}
function vs(){}
_=vs.prototype=new ms();_.o=As;_.tI=0;function at(){}
_=at.prototype=new og();_.tI=0;function ct(a){a.d=eq(new cq());a.c=dn(new bn());a.i=Aq(new jq());a.h=rn(new qn());a.a=tp(new sp());a.e=Bn(new yn());a.b=wl(new sl());a.f=mn(new ln());a.g=mm(new lm());mf((gf(),a.f.l),r);en(a.c,a.b);en(a.c,a.e);vn(a.h,s,s,-1);vn(a.h,t,t,-1);a.h.l.size=6;a.h.l.style[qd]=u;a.a.l[v]=w!=null?w:m;hp(a.i,a.h);hp(a.i,a.a);a.i.l.style[od]=x;mf(a.g.l,z);fq(a.d,a.g);fq(a.d,a.i);fq(a.d,a.f);fq(a.d,a.c);a.d.l.style[od]=u;a.d.l.style[qd]=u;ll((wo(),zo(null)),a.d);return a}
function bt(){}
_=bt.prototype=new at();_.tI=0;function lt(){}
_=lt.prototype=new lu();_.tI=36;function st(c,a){var b;b=new ot();return b}
function ot(){}
_=ot.prototype=new hu();_.tI=0;function pt(){}
_=pt.prototype=new lu();_.tI=39;function At(){}
_=At.prototype=new lu();_.tI=40;function Dt(){}
_=Dt.prototype=new lu();_.tI=41;function bu(b,a){return b}
function au(){}
_=au.prototype=new lu();_.tI=42;function eu(){}
_=eu.prototype=new lu();_.tI=43;function zu(b,a){if(!(a!=null&&Fg(a.tI,1))){return false}return String(b)==a}
function Du(b,a){return b.substr(a,b.length-a)}
function Fu(c){if(c.length==0||c[0]>Bb&&c[c.length-1]>Bb){return c}var a=c.replace(/^(\s*)/,m);var b=a.replace(/\s*$/,m);return b}
function bv(a){return zu(this,a)}
function dv(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ev(){return vu(this)}
_=String.prototype;_.eQ=bv;_.hC=ev;_.tI=2;function qu(){qu=qz;ru={};uu={}}
function su(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function vu(c){qu();var a=A+c;var b=uu[a];if(b!=null){return b}b=ru[a];if(b==null){b=su(c)}wu();return uu[a]=b}
function wu(){if(tu==256){ru=uu;uu={};tu=0}++tu}
var ru,tu=0,uu;function hv(){}
_=hv.prototype=new lu();_.tI=44;function lv(a,b){var c;while(a.v()){c=a.x();if(b==null?c==null:re(b,c)){return a}}return null}
function nv(a){throw new hv()}
function ov(b){var a;a=lv(this.w(),b);return !!a}
function kv(){}
_=kv.prototype=new hu();_.m=nv;_.n=ov;_.tI=0;function Bx(b){var a;a=wv(new qv(),b);return qx(new jx(),b,a)}
function Cx(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Fg(c.tI,15))){return false}e=ah(c,15);if(ah(this,15).d!=e.d){return false}for(b=sv(new rv(),wv(new qv(),e).a);Dw(b.a);){a=ah(Ew(b.a),13);d=a.t();f=a.u();if(!(d==null?ah(this,15).c:d!=null&&Fg(d.tI,1)?sw(ah(this,15),ah(d,1)):rw(ah(this,15),d,~~te(d)))){return false}if(!pz(f,d==null?ah(this,15).b:d!=null&&Fg(d.tI,1)?ah(this,15).e[A+ah(d,1)]:ow(ah(this,15),d,~~te(d)))){return false}}return true}
function Dx(){var a,b,c;c=0;for(b=sv(new rv(),wv(new qv(),ah(this,15)).a);Dw(b.a);){a=ah(Ew(b.a),13);c+=a.hC();c=~~c}return c}
function ix(){}
_=ix.prototype=new hu();_.eQ=Cx;_.hC=Dx;_.tI=0;function jw(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function kw(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=hw(e,c.substring(1));a.m(b)}}}
function nw(b,a){return a==null?b.c:a!=null&&Fg(a.tI,1)?sw(b,ah(a,1)):rw(b,a,~~te(a))}
function qw(b,a){return a==null?b.b:a!=null&&Fg(a.tI,1)?b.e[A+ah(a,1)]:ow(b,a,~~te(a))}
function ow(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function rw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function sw(b,a){return A+a in b.e}
function ww(b,a,c){return a==null?uw(b,c):a!=null&&Fg(a.tI,1)?vw(b,ah(a,1),c):tw(b,a,c,~~te(a))}
function tw(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.bb(j);return h}}}else{a=i.a[e]=[]}var c=cz(new bz(),g,j);a.push(c);++i.d;return null}
function uw(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function vw(d,a,e){var b,c=d.e;a=A+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function xw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function pv(){}
_=pv.prototype=new ix();_.r=xw;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function ay(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Fg(b.tI,16))){return false}c=ah(b,16);if(c.cb()!=this.cb()){return false}for(a=c.w();a.v();){d=a.x();if(!this.n(d)){return false}}return true}
function by(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.x();if(c!=null){a+=te(c);a=~~a}}return a}
function Ex(){}
_=Ex.prototype=new kv();_.eQ=ay;_.hC=by;_.tI=45;function wv(b,a){b.a=a;return b}
function yv(d,c){var a,b,e;if(c!=null&&Fg(c.tI,13)){a=ah(c,13);b=a.t();if(nw(d.a,b)){e=qw(d.a,b);return vy(a.u(),e)}}return false}
function zv(a){return yv(this,a)}
function Av(){return sv(new rv(),this.a)}
function Bv(){return this.a.d}
function qv(){}
_=qv.prototype=new Ex();_.n=zv;_.w=Av;_.cb=Bv;_.tI=46;_.a=null;function sv(c,b){var a;c.b=b;a=dy(new cy());if(c.b.c){fy(a,Dv(new Cv(),c.b))}kw(c.b,a);jw(c.b,a);c.a=Bw(new zw(),a);return c}
function uv(){return Dw(this.a)}
function vv(){return ah(Ew(this.a),13)}
function rv(){}
_=rv.prototype=new hu();_.v=uv;_.x=vv;_.tI=0;_.a=null;_.b=null;function yx(b){var a;if(b!=null&&Fg(b.tI,13)){a=ah(b,13);if(pz(this.t(),a.t())&&pz(this.u(),a.u())){return true}}return false}
function zx(){var a,b;a=0;b=0;if(this.t()!=null){a=te(this.t())}if(this.u()!=null){b=te(this.u())}return a^b}
function wx(){}
_=wx.prototype=new hu();_.eQ=yx;_.hC=zx;_.tI=47;function Dv(b,a){b.a=a;return b}
function Fv(){return null}
function aw(){return this.a.b}
function bw(a){return uw(this.a,a)}
function Cv(){}
_=Cv.prototype=new wx();_.t=Fv;_.u=aw;_.bb=bw;_.tI=48;_.a=null;function dw(c,a,b){c.b=b;c.a=a;return c}
function fw(){return this.a}
function gw(){return this.b.e[A+this.a]}
function hw(b,a){return dw(new cw(),a,b)}
function iw(a){return vw(this.b,this.a,a)}
function cw(){}
_=cw.prototype=new wx();_.t=fw;_.u=gw;_.bb=iw;_.tI=49;_.a=null;_.b=null;function cx(a){ey(this,this.cb(),a);return true}
function dx(a,b){if(a<0||a>=b){gx(a,b)}}
function ex(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Fg(e.tI,14))){return false}f=ah(e,14);if(this.cb()!=f.b){return false}c=Bw(new zw(),this);d=Bw(new zw(),f);while(c.a<c.b.b){a=Ew(c);b=Ew(d);if(!(a==null?b==null:re(a,b))){return false}}return true}
function fx(){var a,b,c;b=1;a=Bw(new zw(),this);while(a.a<a.b.b){c=Ew(a);b=31*b+(c==null?0:te(c));b=~~b}return b}
function gx(a,b){throw bu(new au(),B+a+C+b)}
function hx(){return Bw(new zw(),this)}
function yw(){}
_=yw.prototype=new kv();_.m=cx;_.eQ=ex;_.hC=fx;_.w=hx;_.tI=0;function Bw(b,a){b.b=a;return b}
function Dw(a){return a.a<a.b.b}
function Ew(a){if(a.a>=a.b.b){throw new jz()}return hy(a.b,a.a++)}
function Fw(){return this.a<this.b.b}
function ax(){return Ew(this)}
function zw(){}
_=zw.prototype=new hu();_.v=Fw;_.x=ax;_.tI=0;_.a=0;_.b=null;function qx(b,a,c){b.a=a;b.b=c;return b}
function tx(a){return nw(this.a,a)}
function ux(){var a;return a=sv(new rv(),this.b.a),lx(new kx(),a)}
function vx(){return this.b.a.d}
function jx(){}
_=jx.prototype=new Ex();_.n=tx;_.w=ux;_.cb=vx;_.tI=50;_.a=null;_.b=null;function lx(a,b){a.a=b;return a}
function ox(){return Dw(this.a.a)}
function px(){var a;return a=ah(Ew(this.a.a),13),a.t()}
function kx(){}
_=kx.prototype=new hu();_.v=ox;_.x=px;_.tI=0;_.a=null;function dy(a){a.a=wg(sh,0,0,0,0);a.b=0;return a}
function fy(b,a){zg(b.a,b.b++,a);return true}
function ey(c,a,b){if(a<0||a>c.b){gx(a,c.b)}c.a.splice(a,0,b);++c.b}
function hy(b,a){dx(a,b.b);return b.a[a]}
function iy(c,b,a){for(;a<c.b;++a){if(pz(b,c.a[a])){return a}}return -1}
function jy(c,a){var b;b=(dx(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function ky(f,e){var a;a=iy(f,e,0);if(a==-1){return false}jy(f,a);return true}
function ly(a){return zg(this.a,this.b++,a),true}
function my(a){return iy(this,a,0)!=-1}
function ny(){return this.b}
function cy(){}
_=cy.prototype=new yw();_.m=ly;_.n=my;_.cb=ny;_.tI=51;_.a=null;_.b=0;function ty(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function vy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function sy(){}
_=sy.prototype=new pv();_.tI=52;function xy(a){a.a=ty(new sy());return a}
function yy(c,a){var b;b=ww(c.a,a,c);return b==null}
function Ay(b){var a;return a=ww(this.a,b,this),a==null}
function By(a){return nw(this.a,a)}
function Cy(){var a;return a=sv(new rv(),Bx(this.a).b.a),lx(new kx(),a)}
function Dy(){return this.a.d}
function wy(){}
_=wy.prototype=new Ex();_.m=Ay;_.n=By;_.w=Cy;_.cb=Dy;_.tI=53;_.a=null;function cz(b,a,c){b.a=a;b.b=c;return b}
function ez(){return this.a}
function fz(){return this.b}
function hz(b){var a;a=this.b;this.b=b;return a}
function bz(){}
_=bz.prototype=new wx();_.t=ez;_.u=fz;_.bb=hz;_.tI=54;_.a=null;_.b=null;function jz(){}
_=jz.prototype=new lu();_.tI=55;function pz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function jt(){!!$stats&&$stats({moduleName:$moduleName,subSystem:D,evtGroup:E,millis:(new Date()).getTime(),type:F,className:ab});ct(new bt())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{jt()}catch(a){b(d)}else{jt()}}
function qz(){}
var rh=st(bb,cb),sh=st(eb,fb),qh=st(gb,hb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();