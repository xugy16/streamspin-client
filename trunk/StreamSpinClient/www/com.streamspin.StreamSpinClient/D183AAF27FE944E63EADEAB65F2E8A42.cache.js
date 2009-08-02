(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var m='',Bb=' ',fe="' border='0'>",be=') no-repeat ',C=', Size: ',Ac='-',pc='0',kd='0.0',Fc='0px',p='1px',z='450px',Dd='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',wd='50%',cd='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',x='650px',A=':',yd='<\/div>',xd="<div class='vsplitter' style='text-align:center;'>",de="<img src='",Ab='BODY',ub='DOMMouseScroll',B='Index: ',s='Item one',t='Item two',hb='JavaScriptObject$;',fb='Object;',v='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',cb='Widget;',gb='[Lcom.google.gwt.core.client.',bb='[Lcom.google.gwt.user.client.ui.',eb='[Ljava.lang.',fc='absolute',tc='align',md='alpha(opacity=0)',Ad='auto',hd='background',Bc='blur',fd='border',pb='border-left-width',qc='border-top-width',lc='bottom',w='buhu',Fb='button',rc='cellPadding',oc='cellSpacing',jc='center',gd='change',zb='className',ee="clear.cache.gif' style='",rd='click',ab='com.streamspin.client.StreamSpinClient',vb='contextmenu',Cd='dblclick',gc='div',sb='error',ld='filter',n='focus',ac='gwt-Button',ic='gwt-HTML',hc='gwt-Label',vc='gwt-ListBox',zc='gwt-MenuBar',ud='gwt-TextArea',vd='gwt-VerticalSplitPanel',od='height',q='hidden',ad='hideFocus',Dc='horizontal',wb='html',ge='input',y='keydown',db='keypress',ib='keyup',Cb='left',jb='load',kb='losecapture',dd='margin',xb='margin-left',yb='margin-top',yc='menubar',mc='middle',E='moduleStartup',lb='mousedown',mb='mousemove',nb='mouseout',ob='mouseover',qb='mouseup',tb='mousewheel',sd='none',nd='offsetHeight',F='onModuleLoadStart',r='online stuff',jd='opacity',wc='option',Ec='outline',zd='overflow',ed='padding',Eb='position',pd='px',ce='px ',ae='px; background: url(',Fd='px; height: ',Bd='relative',kc='right',xc='role',rb='scroll',l='select',D='startup',bc='submit',dc='table',ec='tbody',sc='td',o='text',td='textarea',Db='top',nc='tr',bd='true',cc='type',u='value',Cc='vertical',uc='verticalAlign',id='white',qd='width',Ed='width: ';var _;function iu(a){return this===(a==null?null:a)}
function ju(){return this.$H||(this.$H=++Ae)}
function gu(){}
_=gu.prototype={};_.eQ=iu;_.hC=ju;_.tM=pz;_.tI=1;function re(b,a){return b.tM==pz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function te(a){return a.tM==pz||a.tI==2?a.hC():a.$H||(a.$H=++Ae)}
var Ae=0;function gf(){gf=pz;Ee();new Ce()}
function jf(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function kf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function mf(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Be(){}
_=Be.prototype=new gu();_.tI=0;function ff(){ff=pz;gf()}
function ef(){}
_=ef.prototype=new Be();_.tI=0;function Ee(){Ee=pz;ff()}
function Fe(b){if(b.offsetLeft==null){return 0}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&$wnd.devicePixelRatio){c+=parseInt($doc.defaultView.getComputedStyle(d,m).getPropertyValue(pb))}if(d&&(d.tagName==Ab&&b.style.position==fc)){break}b=d}return c}
function af(b){if(b.offsetTop==null){return 0}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&$wnd.devicePixelRatio){e+=parseInt($doc.defaultView.getComputedStyle(c,m).getPropertyValue(qc))}if(c&&(c.tagName==Ab&&b.style.position==fc)){break}b=c}return e}
function bf(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function Ce(){}
_=Ce.prototype=new ef();_.tI=0;function og(){}
_=og.prototype=new gu();_.tI=0;function vg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function wg(a,f,c,b,e){var d;d=vg(e,b);xg(a,f,c,d);return d}
function xg(b,d,c,a){if(!yg){yg=new rg()}Bg(a,yg);a.tI=d;a.qI=c;return a}
function zg(a,b,c){if(c!=null){if(a.qI>0&&!Eg(c.tI,a.qI)){throw new kt()}if(a.qI<0&&(c.tM==pz||c.tI==2)){throw new kt()}}return a[b]=c}
function Bg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function rg(){}
_=rg.prototype=new gu();_.tI=0;_.length=0;_.qI=0;var yg=null;function Fg(b,a){return b&&!!nh[b][a]}
function Eg(b,a){return b&&nh[b][a]}
function ah(b,a){if(b!=null&&!Eg(b.tI,a)){throw new ot()}return b}
function mh(a){if(a!=null){throw new ot()}return a}
var nh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function ev(){}
_=ev.prototype=new gu();_.tI=3;function xt(){}
_=xt.prototype=new ev();_.tI=4;function ku(){}
_=ku.prototype=new xt();_.tI=5;function bi(a){return a}
function ai(){}
_=ai.prototype=new ku();_.tI=7;function yi(a){a.a=fi(new ei(),a);a.b=cy(new by());a.d=ji(new ii(),a);a.f=oi(new mi(),a);return a}
function Ai(b){var a;a=qi(b.f);ti(b.f);if(a!=null&&Fg(a.tI,3)){bi(new ai(),ah(a,3))}else{}b.c=false;Ci(b)}
function Bi(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;Cj(d.a,10000);while(ri(d.f)){b=si(d.f);try{if(b==null){return}if(b!=null&&Fg(b.tI,3)){a=ah(b,3);Fq(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}ti(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){zj(d.a);d.c=false;Ci(d)}}}
function Ci(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;Cj(a.d,1)}}
function Ei(b,a){ey(b.b,a);Ci(b)}
function di(){}
_=di.prototype=new gu();_.tI=0;_.c=false;_.e=false;function Aj(){Aj=pz;bk=cy(new by());fk(new vj())}
function zj(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}jy(bk,a)}
function Bj(a){if(!a.b){jy(bk,a)}a.F()}
function Cj(b,a){if(a<=0){throw new zt()}zj(b);b.b=false;b.c=Fj(b,a);ey(bk,b)}
function Fj(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function ak(){Bj(this)}
function uj(){}
_=uj.prototype=new gu();_.s=ak;_.tI=8;_.b=false;_.c=0;var bk;function gi(){gi=pz;Aj()}
function fi(b,a){gi();b.a=a;return b}
function hi(){if(!this.a.c){return}Ai(this.a)}
function ei(){}
_=ei.prototype=new uj();_.F=hi;_.tI=9;_.a=null;function ki(){ki=pz;Aj()}
function ji(b,a){ki();b.a=a;return b}
function li(){this.a.e=false;Bi(this.a,(new Date()).getTime())}
function ii(){}
_=ii.prototype=new uj();_.F=li;_.tI=10;_.a=null;function oi(b,a){b.d=a;return b}
function qi(a){return gy(a.d.b,a.b)}
function ri(a){return a.c<a.a}
function si(b){var a;b.b=b.c;a=gy(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ti(a){iy(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function vi(){return this.c<this.a}
function wi(){return si(this)}
function mi(){}
_=mi.prototype=new gu();_.v=vi;_.x=wi;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function dj(b,a,c){var d;if(a==lj){if(bl(b)==8192){lj=null}}d=cj;cj=b;try{c.y(b)}finally{cj=d}}
function kj(a){if(!!lj&&a==lj){lj=null}dl();xk(a)}
function mj(a){lj=a;dl();Ak=a}
function oj(a,b){dl();zk(a,b)}
var cj=null,lj=null;function qj(){qj=pz;sj=yi(new di())}
function rj(a){qj();if(!a){throw new du()}Ei(sj,a)}
var sj;function xj(){while((Aj(),bk).b>0){zj(ah(gy(bk,0),4))}}
function yj(){return null}
function vj(){}
_=vj.prototype=new gu();_.C=xj;_.D=yj;_.tI=11;function fk(a){kk();if(!gk){gk=cy(new by())}ey(gk,a)}
function hk(){var a,b;if(gk){for(b=Aw(new yw(),gk);b.a<b.b.b;){a=ah(Dw(b),5);a.C()}}}
function ik(){var a,b,c,d;d=null;if(gk){for(b=Aw(new yw(),gk);b.a<b.b.b;){a=ah(Dw(b),5);c=a.D();d=c}}return d}
function kk(){if(!jk){jk=true;jl()}}
var gk=null,jk=false;function bl(a){switch(a.type){case Bc:return 4096;case gd:return 1024;case rd:return 1;case Cd:return 2;case n:return 2048;case y:return 128;case db:return 256;case ib:return 512;case jb:return 32768;case kb:return 8192;case lb:return 4;case mb:return 64;case nb:return 32;case ob:return 16;case qb:return 8;case rb:return 16384;case sb:return 65536;case tb:return 131072;case ub:return 131072;case vb:return 262144;}}
function dl(){if(!fl){wk();fl=true}}
function gl(a){return a!=null&&Fg(a.tI,6)&&!(a!=null&&(a.tM!=pz&&a.tI!=2))}
var fl=false;function wk(){Ck=function(b){if(Bk(b)){var a=Ak;if(a&&a.__listener){if(gl(a.__listener)){dj(b,a,a.__listener);b.stopPropagation()}}}};Bk=function(a){return true};Dk=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(gl(c)){dj(b,a,c)}}};$wnd.addEventListener(rd,Ck,true);$wnd.addEventListener(Cd,Ck,true);$wnd.addEventListener(lb,Ck,true);$wnd.addEventListener(qb,Ck,true);$wnd.addEventListener(mb,Ck,true);$wnd.addEventListener(ob,Ck,true);$wnd.addEventListener(nb,Ck,true);$wnd.addEventListener(tb,Ck,true);$wnd.addEventListener(y,Bk,true);$wnd.addEventListener(ib,Bk,true);$wnd.addEventListener(db,Bk,true)}
function xk(a){if(a===Ak){Ak=null}}
function zk(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Dk:null;if(b&2)c.ondblclick=a&2?Dk:null;if(b&4)c.onmousedown=a&4?Dk:null;if(b&8)c.onmouseup=a&8?Dk:null;if(b&16)c.onmouseover=a&16?Dk:null;if(b&32)c.onmouseout=a&32?Dk:null;if(b&64)c.onmousemove=a&64?Dk:null;if(b&128)c.onkeydown=a&128?Dk:null;if(b&256)c.onkeypress=a&256?Dk:null;if(b&512)c.onkeyup=a&512?Dk:null;if(b&1024)c.onchange=a&1024?Dk:null;if(b&2048)c.onfocus=a&2048?Dk:null;if(b&4096)c.onblur=a&4096?Dk:null;if(b&8192)c.onlosecapture=a&8192?Dk:null;if(b&16384)c.onscroll=a&16384?Dk:null;if(b&32768)c.onload=a&32768?Dk:null;if(b&65536)c.onerror=a&65536?Dk:null;if(b&131072)c.onmousewheel=a&131072?Dk:null;if(b&262144)c.oncontextmenu=a&262144?Dk:null}
var Ak=null,Bk=null,Ck=null,Dk=null;function qk(a){if($wnd.devicePixelRatio){return a.clientX||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(wb)[0],m);return a.pageX-$doc.body.scrollLeft-parseInt(b.getPropertyValue(xb))-parseInt(b.getPropertyValue(pb))||0}}
function rk(a){if($wnd.devicePixelRatio){return a.clientY||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(wb)[0],m);return a.pageY-$doc.body.scrollTop-parseInt(b.getPropertyValue(yb))-parseInt(b.getPropertyValue(qc))||0}}
function jl(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ik()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{hk()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Bp(b,a){bq(b.l,a,true)}
function aq(a){var b,c;b=a[zb]==null?null:String(a[zb]);c=b.indexOf(cv(32));if(c>=0){return b.substr(0,c-0)}return b}
function bq(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new ku()}j=Eu(j);if(j.length==0){throw new zt()}i=c[zb]==null?null:String(c[zb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Bb}c[zb]=i+j}}else{if(e!=-1){b=Eu(i.substr(0,e-0));d=Eu(Cu(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Bb+d}c[zb]=h}}}
function Ap(){}
_=Ap.prototype=new gu();_.tI=12;_.l=null;function zr(a){if(a.j){throw new Ct()}a.j=true;a.l.__listener=a;a.p();a.A()}
function Ar(a){if(!a.j){throw new Ct()}try{a.B()}finally{a.q();a.l.__listener=null;a.j=false}}
function Br(a){if(a.k){a.k.E(a)}else if(a.k){throw new Ct()}}
function Cr(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.z()}c.k=null}else{if(a){throw new Ct()}c.k=b;if(b.j){zr(c)}}}
function Dr(){}
function Er(){}
function Fr(a){}
function as(){Ar(this)}
function bs(){}
function cs(){}
function cr(){}
_=cr.prototype=new Ap();_.p=Dr;_.q=Er;_.y=Fr;_.z=as;_.A=bs;_.B=cs;_.tI=13;_.j=false;_.k=null;function io(){var a,b;for(b=this.w();b.v();){a=ah(b.x(),7);zr(a)}}
function jo(){var a,b;for(b=this.w();b.v();){a=ah(b.x(),7);a.z()}}
function ko(){}
function lo(){}
function go(){}
_=go.prototype=new cr();_.p=io;_.q=jo;_.A=ko;_.B=lo;_.tI=14;function El(c,a,b){Br(a);lr(c.f,a);b.appendChild(a.l);Cr(a,c)}
function am(b,c){var a;if(c.k!=b){return false}Cr(c,null);a=c.l;kf((gf(),a)).removeChild(a);qr(b.f,c);return true}
function bm(){return gr(new er(),this.f)}
function cm(a){return am(this,a)}
function Cl(){}
_=Cl.prototype=new go();_.w=bm;_.E=cm;_.tI=15;function ll(a,b){El(a,b,a.l)}
function nl(b,c){var a;a=am(b,c);if(a){ol(c.l)}return a}
function ol(a){a.style[Cb]=m;a.style[Db]=m;a.style[Eb]=m}
function pl(a){return nl(this,a)}
function kl(){}
_=kl.prototype=new Cl();_.E=pl;_.tI=16;function ql(){}
_=ql.prototype=new gu();_.tI=0;function im(){im=pz;jm=(Bs(),Ds)}
function hm(b,a){im();b.l=a;jm.ab(b.l,0);return b}
function km(a){bl(a)}
function gm(){}
_=gm.prototype=new cr();_.y=km;_.tI=17;var jm;function vl(){vl=pz;im()}
function ul(b,a){vl();b.l=a;jm.ab(b.l,0);return b}
function tl(){}
_=tl.prototype=new gm();_.tI=18;function xl(){xl=pz;vl()}
function wl(a){xl();ul(a,$doc.createElement((gf(),Fb)));yl(a.l);a.l[zb]=ac;return a}
function yl(b){if(b.type==bc){try{b.setAttribute(cc,Fb)}catch(a){}}}
function sl(){}
_=sl.prototype=new tl();_.tI=19;function Al(a){a.f=kr(new dr());a.e=$doc.createElement((gf(),dc));a.d=$doc.createElement(ec);a.e.appendChild(a.d);a.l=a.e;return a}
function zl(){}
_=zl.prototype=new Cl();_.tI=20;_.d=null;_.e=null;function em(){em=pz;fm=(Bs(),Cs)}
var fm;function mn(a){a.l=$doc.createElement((gf(),gc));a.l[zb]=hc;return a}
function pn(a){bl(a)}
function ln(){}
_=ln.prototype=new cr();_.y=pn;_.tI=21;function mm(a){a.l=$doc.createElement((gf(),gc));a.l[zb]=ic;return a}
function lm(){}
_=lm.prototype=new ln();_.tI=22;function vm(){vm=pz;tm(new sm(),jc);xm=tm(new sm(),Cb);tm(new sm(),kc);wm=xm}
var wm,xm;function tm(b,a){b.a=a;return b}
function sm(){}
_=sm.prototype=new gu();_.tI=0;_.a=null;function Dm(){Dm=pz;Bm(new Am(),lc);Bm(new Am(),mc);Em=Bm(new Am(),Db)}
var Em;function Bm(a,b){a.a=b;return a}
function Am(){}
_=Am.prototype=new gu();_.tI=0;_.a=null;function dn(a){Al(a);a.a=(vm(),wm);a.c=(Dm(),Em);a.b=$doc.createElement((gf(),nc));a.d.appendChild(a.b);a.e[oc]=pc;a.e[rc]=pc;return a}
function en(c,d){var b,a;b=(a=$doc.createElement((gf(),sc)),(a[tc]=c.a.a,undefined),(a.style[uc]=c.c.a,undefined),a);c.b.appendChild(b);Br(d);lr(c.f,d);b.appendChild(d.l);Cr(d,c)}
function hn(c){var a,b;b=kf((gf(),c.l));a=am(this,c);if(a){this.b.removeChild(b)}return a}
function bn(){}
_=bn.prototype=new zl();_.E=hn;_.tI=23;_.b=null;function un(){un=pz;im()}
function rn(a){un();hm(a,jf((gf(),false)));a.l[zb]=vc;return a}
function vn(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement((gf(),wc));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function xn(a){if(bl(a)==1024){}else{bl(a)}}
function qn(){}
_=qn.prototype=new gm();_.y=xn;_.tI=24;function Bn(a){cy(new by());a.b=cy(new by());En(a,false,(bo(),new Fn()));return a}
function Dn(d,a){var b,c;for(c=Aw(new yw(),d.b);c.a<c.b.b;){b=mh(Dw(c));if(bf((gf(),null.eb()),a)){return b}}return null}
function En(c,e){var a,b,d;b=$doc.createElement((gf(),dc));c.a=$doc.createElement(ec);b.appendChild(c.a);if(!e){d=$doc.createElement(nc);c.a.appendChild(d)}a=rs((em(),fm));a.appendChild(b);c.l=a;c.l.setAttribute(xc,yc);oj(c.l,2225|(c.l.__eventBits||0));c.l[zb]=zc;if(e){Bp(c,aq(c.l)+Ac+Cc)}else{Bp(c,aq(c.l)+Ac+Dc)}c.l.style[Ec]=Fc;c.l.setAttribute(ad,bd)}
function eo(a){var b;Dn(this,a.target);switch(bl(a)){case 1:{ys((em(),this.l));break}{break}case 2048:{mh(gy(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{mh(gy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{mh(gy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:mh(gy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:mh(gy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{mh(gy(this.b,0))}}break}}}
function fo(){Ar(this)}
function yn(){}
_=yn.prototype=new cr();_.y=eo;_.z=fo;_.tI=25;_.a=null;function bo(){bo=pz;co=$moduleBase+cd;is(new gs(),co,0,0,5,9)}
function Fn(){}
_=Fn.prototype=new gu();_.tI=0;var co;function wo(){wo=pz;Ao=sy(new ry());Bo=wy(new vy())}
function vo(b,a){wo();b.f=kr(new dr());b.l=a;zr(b);return b}
function xo(){var b,a;wo();var c,d;for(d=(b=rv(new qv(),Ax(Bo.a).b.a),kx(new jx(),b));Cw(d.a.a);){c=ah((a=ah(Dw(d.a.a),13),a.t()),7);if(c.j){c.z()}}}
function zo(a){wo();var b;b=ah(pw(Ao,a),8);if(b){return b}if(Ao.d==0){fk(new oo())}b=to(new so());vw(Ao,a,b);xy(Bo,b);return b}
function no(){}
_=no.prototype=new kl();_.tI=26;var Ao,Bo;function qo(){xo()}
function ro(){return null}
function oo(){}
_=oo.prototype=new gu();_.C=qo;_.D=ro;_.tI=27;function uo(){uo=pz;wo()}
function to(a){uo();vo(a,$doc.body);return a}
function so(){}
_=so.prototype=new no();_.tI=28;function gp(e,b,c,a,d){e.i=wg(rh,0,7,2,0);e.f=wg(qh,0,-1,2,0);e.l=b;e.h=c;zg(e.f,0,a);zg(e.f,1,d);oj(e.l,8316|(e.l.__eventBits||0));if(!np){np=$doc.createElement((gf(),gc));np.style[Eb]=fc;np.style[Db]=Fc;np.style[Cb]=Fc;np.style[dd]=Fc;np.style[ed]=Fc;np.style[fd]=Fc;np.style[hd]=id;np.style[jd]=kd;np.style[ld]=md}return e}
function hp(a,b){if(!a.i[0]){kp(a,0,b)}else if(!a.i[1]){kp(a,1,b)}else{throw new Ct()}}
function kp(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){Br(d)}if(b){Cr(b,null);c.f[a].removeChild(b.l)}zg(c.i,a,d);if(d){c.f[a].appendChild(d.l);Cr(d,c)}}
function mp(a){a.style[Eb]=fc;a.style[Cb]=Fc;a.style[kc]=Fc;a.style[Db]=Fc;a.style[lc]=Fc}
function op(){return tr(new rr(),this.i)}
function pp(c){var d,a,b;switch(bl(c)){case 4:{d=c.target;if(bf((gf(),this.h),d)){this.g=true;this.c=(qk(c)-Fe(this.l),rk(c)-af(this.l));this.d=parseInt(this.f[0][nd])||0;a=((wo(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;np.style[od]=a+pd;np.style[qd]=b+pd;$doc.body.appendChild(np);mj(this.l);c.preventDefault()}break}case 8:{if(ah(this,11).g){ah(this,11).g=false;(wo(),$doc.body).removeChild(np);kj(this.l)}break}case 64:{if(ah(this,11).g){qq(this.b,this.d+(qk(c)-Fe((gf(),this.l)),rk(c)-af(this.l))-this.c);c.preventDefault()}break}case 8192:{if(ah(this,11).g){ah(this,11).g=false;(wo(),$doc.body).removeChild(np)}break}}}
function qp(a){a.style[ed]=pc;a.style[dd]=pc;a.style[fd]=sd;return a}
function rp(a){if(this.i[0]==a){kp(this,0,null);return true}else if(this.i[1]==a){kp(this,1,null);return true}return false}
function ep(){}
_=ep.prototype=new go();_.w=op;_.y=pp;_.E=rp;_.tI=29;_.g=false;_.h=null;var np=null;function xp(){xp=pz;im()}
function wp(b,a){xp();b.l=a;jm.ab(b.l,0);return b}
function zp(a){var b;b=bl(a);if((b&896)!=0){bl(a)}else if(b==1024){}else{bl(a)}}
function vp(){}
_=vp.prototype=new gm();_.y=zp;_.tI=30;function up(){up=pz;xp()}
function tp(a){up();wp(a,$doc.createElement((gf(),td)));a.l[zb]=ud;return a}
function sp(){}
_=sp.prototype=new vp();_.tI=31;function eq(a){Al(a);a.a=(vm(),wm);a.b=(Dm(),Em);a.e[oc]=pc;a.e[rc]=pc;return a}
function fq(c,e){var b,d,a;d=$doc.createElement((gf(),nc));b=(a=$doc.createElement(sc),(a[tc]=c.a.a,undefined),(a.style[uc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);Br(e);lr(c.f,e);b.appendChild(e.l);Cr(e,c)}
function iq(c){var a,b;b=kf((gf(),c.l));a=am(this,c);if(a){this.d.removeChild(kf(b))}return a}
function cq(){}
_=cq.prototype=new zl();_.E=iq;_.tI=32;function Aq(a){Bq(a,(wq(),new uq()));return a}
function Bq(d){gp(d,$doc.createElement((gf(),gc)),$doc.createElement(gc),qp($doc.createElement(gc)),qp($doc.createElement(gc)));d.b=new nq();d.a=qp($doc.createElement(gc));Cq(d,(wq(),yq));d.l[zb]=vd;pq(d.b,d);Fq(d,wd);return d}
function Cq(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=xd+fs(d.d,d.b,d.c,d.e,d.a)+yd||m;e.style[zd]=Ad;a.style[zd]=Ad}
function Fq(b,a){var c;b.e=a;c=b.f[0];c.style[od]=a;qq(b.b,parseInt(c[nd])||0)}
function ar(){Fq(this,this.e);rj(lq(new kq(),this))}
function br(){}
function jq(){}
_=jq.prototype=new ep();_.A=ar;_.B=br;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function lq(b,a){b.a=a;return b}
function kq(){}
_=kq.prototype=new gu();_.tI=34;_.a=null;function pq(c,b){var a,d;c.a=b;b.l.style[Eb]=Bd;d=b.f[0];a=b.f[1];sq(d);sq(a);sq(b.h);mp(b.a);a.style[lc]=pc}
function qq(f,b){var a,c,d,e;d=f.a.h;c=parseInt(f.a.a[nd])||0;e=parseInt(d[nd])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}rq(f.a.f[0],d,f.a.f[1],b,b+e)}
function rq(d,c,a,e,b){d.style[od]=e+pd;c.style[Db]=e+pd;a.style[Db]=b+pd}
function sq(a){a.style[Eb]=fc;a.style[Cb]=pc;a.style[kc]=pc}
function nq(){}
_=nq.prototype=new gu();_.tI=0;_.a=null;function wq(){wq=pz;xq=$moduleBase+Dd;yq=is(new gs(),xq,0,0,7,7)}
function uq(){}
_=uq.prototype=new gu();_.tI=0;var xq,yq;function kr(a){a.a=wg(rh,0,7,4,0);return a}
function lr(a,b){or(a,b,a.b)}
function nr(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function or(d,e,a){var b,c;if(a<0||a>d.b){throw new Ft()}if(d.b==d.a.length){c=wg(rh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){zg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){zg(d.a,b,d.a[b-1])}zg(d.a,a,e)}
function pr(c,b){var a;if(b<0||b>=c.b){throw new Ft()}--c.b;for(a=b;a<c.b;++a){zg(c.a,a,c.a[a+1])}zg(c.a,c.b,null)}
function qr(b,c){var a;a=nr(b,c);if(a==-1){throw new iz()}pr(b,a)}
function dr(){}
_=dr.prototype=new gu();_.tI=0;_.a=null;_.b=0;function gr(b,a){b.b=a;return b}
function ir(){return this.a<this.b.b-1}
function jr(){if(this.a>=this.b.b){throw new iz()}return this.b.a[++this.a]}
function er(){}
_=er.prototype=new gu();_.v=ir;_.x=jr;_.tI=0;_.a=-1;_.b=null;function tr(a,b){a.b=b;vr(a);return a}
function vr(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function wr(){return this.a<this.b.length}
function xr(){var a;if(this.a>=this.b.length){throw new iz()}a=this.b[this.a];vr(this);return a}
function rr(){}
_=rr.prototype=new gu();_.v=wr;_.x=xr;_.tI=0;_.a=-1;_.b=null;function fs(f,c,e,g,b){var a,d;d=Ed+g+Fd+b+ae+f+be+(-c+ce)+(-e+pd);a=de+$moduleBase+ee+d+fe;return a}
function is(c,e,b,d,f,a){c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function gs(){}
_=gs.prototype=new ql();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function Bs(){Bs=pz;Cs=vs(new us());Ds=Cs?(Bs(),new ks()):Cs}
function Es(a,b){a.tabIndex=b}
function ks(){}
_=ks.prototype=new gu();_.ab=Es;_.tI=0;var Cs,Ds;function os(){os=pz;Bs()}
function ps(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function qs(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function rs(c){var a=$doc.createElement(gc);var b=c.o();b.addEventListener(Bc,c.a,false);b.addEventListener(n,c.b,false);a.addEventListener(lb,c.c,false);a.appendChild(b);return a}
function ss(){var a=$doc.createElement(ge);a.type=o;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=fc;return a}
function ts(a,b){a.firstChild.tabIndex=b}
function ls(){}
_=ls.prototype=new ks();_.o=ss;_.ab=ts;_.tI=0;function ws(){ws=pz;os()}
function vs(a){ws();a.a=ps();a.b=qs();a.c=xs();return a}
function xs(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function ys(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function zs(){var a=$doc.createElement(ge);a.type=o;a.style.opacity=0;a.style.zIndex=-1;a.style.height=p;a.style.width=p;a.style.overflow=q;a.style.position=fc;return a}
function us(){}
_=us.prototype=new ls();_.o=zs;_.tI=0;function Fs(){}
_=Fs.prototype=new og();_.tI=0;function bt(a){a.d=eq(new cq());a.c=dn(new bn());a.i=Aq(new jq());a.h=rn(new qn());a.a=tp(new sp());a.e=Bn(new yn());a.b=wl(new sl());a.f=mn(new ln());a.g=mm(new lm());mf((gf(),a.f.l),r);en(a.c,a.b);en(a.c,a.e);vn(a.h,s,s,-1);vn(a.h,t,t,-1);a.h.l.size=6;a.a.l[u]=v!=null?v:m;hp(a.i,a.h);hp(a.i,a.a);mf(a.g.l,w);fq(a.d,a.g);fq(a.d,a.i);fq(a.d,a.f);fq(a.d,a.c);a.d.l.style[od]=x;a.d.l.style[qd]=z;ll((wo(),zo(null)),a.d);return a}
function at(){}
_=at.prototype=new Fs();_.tI=0;function kt(){}
_=kt.prototype=new ku();_.tI=36;function rt(c,a){var b;b=new nt();return b}
function nt(){}
_=nt.prototype=new gu();_.tI=0;function ot(){}
_=ot.prototype=new ku();_.tI=39;function zt(){}
_=zt.prototype=new ku();_.tI=40;function Ct(){}
_=Ct.prototype=new ku();_.tI=41;function au(b,a){return b}
function Ft(){}
_=Ft.prototype=new ku();_.tI=42;function du(){}
_=du.prototype=new ku();_.tI=43;function yu(b,a){if(!(a!=null&&Fg(a.tI,1))){return false}return String(b)==a}
function Cu(b,a){return b.substr(a,b.length-a)}
function Eu(c){if(c.length==0||c[0]>Bb&&c[c.length-1]>Bb){return c}var a=c.replace(/^(\s*)/,m);var b=a.replace(/\s*$/,m);return b}
function av(a){return yu(this,a)}
function cv(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function dv(){return uu(this)}
_=String.prototype;_.eQ=av;_.hC=dv;_.tI=2;function pu(){pu=pz;qu={};tu={}}
function ru(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function uu(c){pu();var a=A+c;var b=tu[a];if(b!=null){return b}b=qu[a];if(b==null){b=ru(c)}vu();return tu[a]=b}
function vu(){if(su==256){qu=tu;tu={};su=0}++su}
var qu,su=0,tu;function gv(){}
_=gv.prototype=new ku();_.tI=44;function kv(a,b){var c;while(a.v()){c=a.x();if(b==null?c==null:re(b,c)){return a}}return null}
function mv(a){throw new gv()}
function nv(b){var a;a=kv(this.w(),b);return !!a}
function jv(){}
_=jv.prototype=new gu();_.m=mv;_.n=nv;_.tI=0;function Ax(b){var a;a=vv(new pv(),b);return px(new ix(),b,a)}
function Bx(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Fg(c.tI,15))){return false}e=ah(c,15);if(ah(this,15).d!=e.d){return false}for(b=rv(new qv(),vv(new pv(),e).a);Cw(b.a);){a=ah(Dw(b.a),13);d=a.t();f=a.u();if(!(d==null?ah(this,15).c:d!=null&&Fg(d.tI,1)?rw(ah(this,15),ah(d,1)):qw(ah(this,15),d,~~te(d)))){return false}if(!oz(f,d==null?ah(this,15).b:d!=null&&Fg(d.tI,1)?ah(this,15).e[A+ah(d,1)]:nw(ah(this,15),d,~~te(d)))){return false}}return true}
function Cx(){var a,b,c;c=0;for(b=rv(new qv(),vv(new pv(),ah(this,15)).a);Cw(b.a);){a=ah(Dw(b.a),13);c+=a.hC();c=~~c}return c}
function hx(){}
_=hx.prototype=new gu();_.eQ=Bx;_.hC=Cx;_.tI=0;function iw(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function jw(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=gw(e,c.substring(1));a.m(b)}}}
function mw(b,a){return a==null?b.c:a!=null&&Fg(a.tI,1)?rw(b,ah(a,1)):qw(b,a,~~te(a))}
function pw(b,a){return a==null?b.b:a!=null&&Fg(a.tI,1)?b.e[A+ah(a,1)]:nw(b,a,~~te(a))}
function nw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function qw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function rw(b,a){return A+a in b.e}
function vw(b,a,c){return a==null?tw(b,c):a!=null&&Fg(a.tI,1)?uw(b,ah(a,1),c):sw(b,a,c,~~te(a))}
function sw(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.bb(j);return h}}}else{a=i.a[e]=[]}var c=bz(new az(),g,j);a.push(c);++i.d;return null}
function tw(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function uw(d,a,e){var b,c=d.e;a=A+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ww(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function ov(){}
_=ov.prototype=new hx();_.r=ww;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fx(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Fg(b.tI,16))){return false}c=ah(b,16);if(c.cb()!=this.cb()){return false}for(a=c.w();a.v();){d=a.x();if(!this.n(d)){return false}}return true}
function ay(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.x();if(c!=null){a+=te(c);a=~~a}}return a}
function Dx(){}
_=Dx.prototype=new jv();_.eQ=Fx;_.hC=ay;_.tI=45;function vv(b,a){b.a=a;return b}
function xv(d,c){var a,b,e;if(c!=null&&Fg(c.tI,13)){a=ah(c,13);b=a.t();if(mw(d.a,b)){e=pw(d.a,b);return uy(a.u(),e)}}return false}
function yv(a){return xv(this,a)}
function zv(){return rv(new qv(),this.a)}
function Av(){return this.a.d}
function pv(){}
_=pv.prototype=new Dx();_.n=yv;_.w=zv;_.cb=Av;_.tI=46;_.a=null;function rv(c,b){var a;c.b=b;a=cy(new by());if(c.b.c){ey(a,Cv(new Bv(),c.b))}jw(c.b,a);iw(c.b,a);c.a=Aw(new yw(),a);return c}
function tv(){return Cw(this.a)}
function uv(){return ah(Dw(this.a),13)}
function qv(){}
_=qv.prototype=new gu();_.v=tv;_.x=uv;_.tI=0;_.a=null;_.b=null;function xx(b){var a;if(b!=null&&Fg(b.tI,13)){a=ah(b,13);if(oz(this.t(),a.t())&&oz(this.u(),a.u())){return true}}return false}
function yx(){var a,b;a=0;b=0;if(this.t()!=null){a=te(this.t())}if(this.u()!=null){b=te(this.u())}return a^b}
function vx(){}
_=vx.prototype=new gu();_.eQ=xx;_.hC=yx;_.tI=47;function Cv(b,a){b.a=a;return b}
function Ev(){return null}
function Fv(){return this.a.b}
function aw(a){return tw(this.a,a)}
function Bv(){}
_=Bv.prototype=new vx();_.t=Ev;_.u=Fv;_.bb=aw;_.tI=48;_.a=null;function cw(c,a,b){c.b=b;c.a=a;return c}
function ew(){return this.a}
function fw(){return this.b.e[A+this.a]}
function gw(b,a){return cw(new bw(),a,b)}
function hw(a){return uw(this.b,this.a,a)}
function bw(){}
_=bw.prototype=new vx();_.t=ew;_.u=fw;_.bb=hw;_.tI=49;_.a=null;_.b=null;function bx(a){dy(this,this.cb(),a);return true}
function cx(a,b){if(a<0||a>=b){fx(a,b)}}
function dx(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Fg(e.tI,14))){return false}f=ah(e,14);if(this.cb()!=f.b){return false}c=Aw(new yw(),this);d=Aw(new yw(),f);while(c.a<c.b.b){a=Dw(c);b=Dw(d);if(!(a==null?b==null:re(a,b))){return false}}return true}
function ex(){var a,b,c;b=1;a=Aw(new yw(),this);while(a.a<a.b.b){c=Dw(a);b=31*b+(c==null?0:te(c));b=~~b}return b}
function fx(a,b){throw au(new Ft(),B+a+C+b)}
function gx(){return Aw(new yw(),this)}
function xw(){}
_=xw.prototype=new jv();_.m=bx;_.eQ=dx;_.hC=ex;_.w=gx;_.tI=0;function Aw(b,a){b.b=a;return b}
function Cw(a){return a.a<a.b.b}
function Dw(a){if(a.a>=a.b.b){throw new iz()}return gy(a.b,a.a++)}
function Ew(){return this.a<this.b.b}
function Fw(){return Dw(this)}
function yw(){}
_=yw.prototype=new gu();_.v=Ew;_.x=Fw;_.tI=0;_.a=0;_.b=null;function px(b,a,c){b.a=a;b.b=c;return b}
function sx(a){return mw(this.a,a)}
function tx(){var a;return a=rv(new qv(),this.b.a),kx(new jx(),a)}
function ux(){return this.b.a.d}
function ix(){}
_=ix.prototype=new Dx();_.n=sx;_.w=tx;_.cb=ux;_.tI=50;_.a=null;_.b=null;function kx(a,b){a.a=b;return a}
function nx(){return Cw(this.a.a)}
function ox(){var a;return a=ah(Dw(this.a.a),13),a.t()}
function jx(){}
_=jx.prototype=new gu();_.v=nx;_.x=ox;_.tI=0;_.a=null;function cy(a){a.a=wg(sh,0,0,0,0);a.b=0;return a}
function ey(b,a){zg(b.a,b.b++,a);return true}
function dy(c,a,b){if(a<0||a>c.b){fx(a,c.b)}c.a.splice(a,0,b);++c.b}
function gy(b,a){cx(a,b.b);return b.a[a]}
function hy(c,b,a){for(;a<c.b;++a){if(oz(b,c.a[a])){return a}}return -1}
function iy(c,a){var b;b=(cx(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function jy(f,e){var a;a=hy(f,e,0);if(a==-1){return false}iy(f,a);return true}
function ky(a){return zg(this.a,this.b++,a),true}
function ly(a){return hy(this,a,0)!=-1}
function my(){return this.b}
function by(){}
_=by.prototype=new xw();_.m=ky;_.n=ly;_.cb=my;_.tI=51;_.a=null;_.b=0;function sy(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function uy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function ry(){}
_=ry.prototype=new ov();_.tI=52;function wy(a){a.a=sy(new ry());return a}
function xy(c,a){var b;b=vw(c.a,a,c);return b==null}
function zy(b){var a;return a=vw(this.a,b,this),a==null}
function Ay(a){return mw(this.a,a)}
function By(){var a;return a=rv(new qv(),Ax(this.a).b.a),kx(new jx(),a)}
function Cy(){return this.a.d}
function vy(){}
_=vy.prototype=new Dx();_.m=zy;_.n=Ay;_.w=By;_.cb=Cy;_.tI=53;_.a=null;function bz(b,a,c){b.a=a;b.b=c;return b}
function dz(){return this.a}
function ez(){return this.b}
function gz(b){var a;a=this.b;this.b=b;return a}
function az(){}
_=az.prototype=new vx();_.t=dz;_.u=ez;_.bb=gz;_.tI=54;_.a=null;_.b=null;function iz(){}
_=iz.prototype=new ku();_.tI=55;function oz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&re(a,b)}
function it(){!!$stats&&$stats({moduleName:$moduleName,subSystem:D,evtGroup:E,millis:(new Date()).getTime(),type:F,className:ab});bt(new at())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{it()}catch(a){b(d)}else{it()}}
function pz(){}
var rh=rt(bb,cb),sh=rt(eb,fb),qh=rt(gb,hb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();