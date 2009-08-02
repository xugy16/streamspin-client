(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var wb='',ub=' ',be="' border='0'>",Dd=') no-repeat ',z=', Size: ',vc='-',kc='0',gd='0.0',Ac='0px',v='450px',yd='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',sd='50%',Dc='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',u='650px',w=':',ud='<\/div>',td="<div class='vsplitter' style='text-align:center;'>",Fd="<img src='",sb='CSS1Compat',ob='DOMMouseScroll',x='Index: ',p='Item one',q='Item two',eb='JavaScriptObject$;',rb='MouseEvents',bb='Object;',s='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',F='Widget;',cb='[Lcom.google.gwt.core.client.',E='[Lcom.google.gwt.user.client.ui.',ab='[Ljava.lang.',Ec='absolute',oc='align',id='alpha(opacity=0)',wd='auto',cd='background',xb='blur',bd='border',m='border-left-width',mb='border-top-width',gc='bottom',t='buhu',Ab='button',lc='cellPadding',jc='cellSpacing',ec='center',cc='change',tb='className',ae="clear.cache.gif' style='",nc='click',D='com.streamspin.client.StreamSpinClient',pb='contextmenu',yc='dblclick',ac='div',lb='error',hd='filter',dd='focus',Bb='gwt-Button',dc='gwt-HTML',bc='gwt-Label',qc='gwt-ListBox',uc='gwt-MenuBar',qd='gwt-TextArea',rd='gwt-VerticalSplitPanel',kd='height',Bc='hideFocus',xc='horizontal',qb='html',ce='input',od='keydown',zd='keypress',n='keyup',vb='left',y='load',db='losecapture',Fc='margin',tc='menubar',hc='middle',B='moduleStartup',fb='mousedown',gb='mousemove',hb='mouseout',ib='mouseover',jb='mouseup',nb='mousewheel',nd='none',jd='offsetHeight',C='onModuleLoadStart',o='online stuff',fd='opacity',rc='option',zc='outline',vd='overflow',ad='padding',zb='position',ld='px',Ed='px ',Cd='px; background: url(',Bd='px; height: ',xd='relative',fc='right',sc='role',kb='scroll',l='select',A='startup',Cb='submit',Eb='table',Fb='tbody',mc='td',de='text',pd='textarea',yb='top',ic='tr',Cc='true',Db='type',r='value',wc='vertical',pc='verticalAlign',ed='white',md='width',Ad='width: ';var _;function lu(a){return this===(a==null?null:a)}
function mu(){return this.$H||(this.$H=++xe)}
function ju(){}
_=ju.prototype={};_.eQ=lu;_.hC=mu;_.tM=sz;_.tI=1;function oe(b,a){return b.tM==sz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function qe(a){return a.tM==sz||a.tI==2?a.hC():a.$H||(a.$H=++xe)}
var xe=0;function ef(){ef=sz;Ce();new Ae()}
function gf(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function hf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function mf(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function ye(){}
_=ye.prototype=new ju();_.tI=0;function df(){df=sz;ef()}
function cf(){}
_=cf.prototype=new ye();_.tI=0;function af(){af=sz;df()}
function bf(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function ze(){}
_=ze.prototype=new cf();_.tI=0;function Ce(){Ce=sz;af()}
function De(a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue(m).getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft}c=c.parentNode}return b+(ll(),nl).scrollLeft}
function Ee(a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue(mb).getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop}b=b.parentNode}return e+(ll(),nl).scrollTop}
function Ae(){}
_=Ae.prototype=new ze();_.tI=0;function og(){}
_=og.prototype=new ju();_.tI=0;function vg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function wg(a,f,c,b,e){var d;d=vg(e,b);xg(a,f,c,d);return d}
function xg(b,d,c,a){if(!yg){yg=new rg()}Bg(a,yg);a.tI=d;a.qI=c;return a}
function zg(a,b,c){if(c!=null){if(a.qI>0&&!Eg(c.tI,a.qI)){throw new nt()}if(a.qI<0&&(c.tM==sz||c.tI==2)){throw new nt()}}return a[b]=c}
function Bg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function rg(){}
_=rg.prototype=new ju();_.tI=0;_.length=0;_.qI=0;var yg=null;function Fg(b,a){return b&&!!nh[b][a]}
function Eg(b,a){return b&&nh[b][a]}
function ah(b,a){if(b!=null&&!Eg(b.tI,a)){throw new rt()}return b}
function mh(a){if(a!=null){throw new rt()}return a}
var nh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function hv(){}
_=hv.prototype=new ju();_.tI=3;function At(){}
_=At.prototype=new hv();_.tI=4;function nu(){}
_=nu.prototype=new At();_.tI=5;function bi(a){return a}
function ai(){}
_=ai.prototype=new nu();_.tI=7;function yi(a){a.a=fi(new ei(),a);a.b=fy(new ey());a.d=ji(new ii(),a);a.f=oi(new mi(),a);return a}
function Ai(b){var a;a=qi(b.f);ti(b.f);if(a!=null&&Fg(a.tI,3)){bi(new ai(),ah(a,3))}else{}b.c=false;Ci(b)}
function Bi(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;Bj(d.a,10000);while(ri(d.f)){b=si(d.f);try{if(b==null){return}if(b!=null&&Fg(b.tI,3)){a=ah(b,3);gr(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}ti(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){yj(d.a);d.c=false;Ci(d)}}}
function Ci(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;Bj(a.d,1)}}
function Ei(b,a){hy(b.b,a);Ci(b)}
function di(){}
_=di.prototype=new ju();_.tI=0;_.c=false;_.e=false;function zj(){zj=sz;ak=fy(new ey());ek(new uj())}
function yj(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}my(ak,a)}
function Aj(a){if(!a.b){my(ak,a)}a.bb()}
function Bj(b,a){if(a<=0){throw new Ct()}yj(b);b.b=false;b.c=Ej(b,a);hy(ak,b)}
function Ej(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function Fj(){Aj(this)}
function tj(){}
_=tj.prototype=new ju();_.s=Fj;_.tI=8;_.b=false;_.c=0;var ak;function gi(){gi=sz;zj()}
function fi(b,a){gi();b.a=a;return b}
function hi(){if(!this.a.c){return}Ai(this.a)}
function ei(){}
_=ei.prototype=new tj();_.bb=hi;_.tI=9;_.a=null;function ki(){ki=sz;zj()}
function ji(b,a){ki();b.a=a;return b}
function li(){this.a.e=false;Bi(this.a,(new Date()).getTime())}
function ii(){}
_=ii.prototype=new tj();_.bb=li;_.tI=10;_.a=null;function oi(b,a){b.d=a;return b}
function qi(a){return jy(a.d.b,a.b)}
function ri(a){return a.c<a.a}
function si(b){var a;b.b=b.c;a=jy(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ti(a){ly(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function vi(){return this.c<this.a}
function wi(){return si(this)}
function mi(){}
_=mi.prototype=new ju();_.v=vi;_.z=wi;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function dj(b,a,c){var d;if(a==lj){if(dl(b)==8192){lj=null}}d=cj;cj=b;try{c.A(b)}finally{cj=d}}
function kj(a){if(!!lj&&a==lj){lj=null}fl();xk(a)}
function mj(a){lj=a;fl();Ak=a}
var cj=null,lj=null;function pj(){pj=sz;rj=yi(new di())}
function qj(a){pj();if(!a){throw new gu()}Ei(rj,a)}
var rj;function wj(){while((zj(),ak).b>0){yj(ah(jy(ak,0),4))}}
function xj(){return null}
function uj(){}
_=uj.prototype=new ju();_.E=wj;_.F=xj;_.tI=11;function ek(a){jk();if(!fk){fk=fy(new ey())}hy(fk,a)}
function gk(){var a,b;if(fk){for(b=Dw(new Bw(),fk);b.a<b.b.b;){a=ah(ax(b),5);a.E()}}}
function hk(){var a,b,c,d;d=null;if(fk){for(b=Dw(new Bw(),fk);b.a<b.b.b;){a=ah(ax(b),5);c=a.F();d=c}}return d}
function jk(){if(!ik){ik=true;ql()}}
var fk=null,ik=false;function dl(a){switch(a.type){case xb:return 4096;case cc:return 1024;case nc:return 1;case yc:return 2;case dd:return 2048;case od:return 128;case zd:return 256;case n:return 512;case y:return 32768;case db:return 8192;case fb:return 4;case gb:return 64;case hb:return 32;case ib:return 16;case jb:return 8;case kb:return 16384;case lb:return 65536;case nb:return 131072;case ob:return 131072;case pb:return 262144;}}
function fl(){if(!hl){wk();pk();hl=true}}
function il(a){return a!=null&&Fg(a.tI,6)&&!(a!=null&&(a.tM!=sz&&a.tI!=2))}
var hl=false;function wk(){Ck=function(b){if(Bk(b)){var a=Ak;if(a&&a.__listener){if(il(a.__listener)){dj(b,a,a.__listener);b.stopPropagation()}}}};Bk=function(a){return true};Dk=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(il(c)){dj(b,a,c)}}};$wnd.addEventListener(nc,Ck,true);$wnd.addEventListener(yc,Ck,true);$wnd.addEventListener(fb,Ck,true);$wnd.addEventListener(jb,Ck,true);$wnd.addEventListener(gb,Ck,true);$wnd.addEventListener(ib,Ck,true);$wnd.addEventListener(hb,Ck,true);$wnd.addEventListener(nb,Ck,true);$wnd.addEventListener(od,Bk,true);$wnd.addEventListener(n,Bk,true);$wnd.addEventListener(zd,Bk,true)}
function xk(a){if(a===Ak){Ak=null}}
function zk(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Dk:null;if(b&2)c.ondblclick=a&2?Dk:null;if(b&4)c.onmousedown=a&4?Dk:null;if(b&8)c.onmouseup=a&8?Dk:null;if(b&16)c.onmouseover=a&16?Dk:null;if(b&32)c.onmouseout=a&32?Dk:null;if(b&64)c.onmousemove=a&64?Dk:null;if(b&128)c.onkeydown=a&128?Dk:null;if(b&256)c.onkeypress=a&256?Dk:null;if(b&512)c.onkeyup=a&512?Dk:null;if(b&1024)c.onchange=a&1024?Dk:null;if(b&2048)c.onfocus=a&2048?Dk:null;if(b&4096)c.onblur=a&4096?Dk:null;if(b&8192)c.onlosecapture=a&8192?Dk:null;if(b&16384)c.onscroll=a&16384?Dk:null;if(b&32768)c.onload=a&32768?Dk:null;if(b&65536)c.onerror=a&65536?Dk:null;if(b&131072)c.onmousewheel=a&131072?Dk:null;if(b&262144)c.oncontextmenu=a&262144?Dk:null}
var Ak=null,Bk=null,Ck=null,Dk=null;function pk(){$wnd.addEventListener(hb,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(qb==b.target.tagName.toLowerCase()){var c=$doc.createEvent(rb);c.initMouseEvent(jb,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(ob,Ck,true)}
function rk(b,a){fl();zk(b,a);qk(b,a)}
function qk(b,a){if(a&131072){b.addEventListener(ob,Dk,false)}}
function ll(){ll=sz;nl=ml((ll(),new jl()))}
function ml(){return $doc.compatMode==sb?$doc.documentElement:$doc.body}
function jl(){}
_=jl.prototype=new ju();_.tI=0;var nl;function ql(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=hk()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{gk()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function cq(b,a){iq(b.l,a,true)}
function hq(a){var b,c;b=a[tb]==null?null:String(a[tb]);c=b.indexOf(fv(32));if(c>=0){return b.substr(0,c-0)}return b}
function iq(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new nu()}j=bv(j);if(j.length==0){throw new Ct()}i=c[tb]==null?null:String(c[tb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=ub}c[tb]=i+j}}else{if(e!=-1){b=bv(i.substr(0,e-0));d=bv(Fu(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+ub+d}c[tb]=h}}}
function bq(){}
_=bq.prototype=new ju();_.tI=12;_.l=null;function as(a){if(a.j){throw new Ft()}a.j=true;a.l.__listener=a;a.p();a.C()}
function bs(a){if(!a.j){throw new Ft()}try{a.D()}finally{a.q();a.l.__listener=null;a.j=false}}
function cs(a){if(a.k){a.k.ab(a)}else if(a.k){throw new Ft()}}
function ds(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.B()}c.k=null}else{if(a){throw new Ft()}c.k=b;if(b.j){as(c)}}}
function es(){}
function fs(){}
function gs(a){}
function hs(){bs(this)}
function is(){}
function js(){}
function jr(){}
_=jr.prototype=new bq();_.p=es;_.q=fs;_.A=gs;_.B=hs;_.C=is;_.D=js;_.tI=13;_.j=false;_.k=null;function po(){var a,b;for(b=this.w();b.v();){a=ah(b.z(),7);as(a)}}
function qo(){var a,b;for(b=this.w();b.v();){a=ah(b.z(),7);a.B()}}
function ro(){}
function so(){}
function no(){}
_=no.prototype=new jr();_.p=po;_.q=qo;_.C=ro;_.D=so;_.tI=14;function fm(c,a,b){cs(a);sr(c.f,a);b.appendChild(a.l);ds(a,c)}
function hm(b,c){var a;if(c.k!=b){return false}ds(c,null);a=c.l;hf((ef(),a)).removeChild(a);xr(b.f,c);return true}
function im(){return nr(new lr(),this.f)}
function jm(a){return hm(this,a)}
function dm(){}
_=dm.prototype=new no();_.w=im;_.ab=jm;_.tI=15;function sl(a,b){fm(a,b,a.l)}
function ul(b,c){var a;a=hm(b,c);if(a){vl(c.l)}return a}
function vl(a){a.style[vb]=wb;a.style[yb]=wb;a.style[zb]=wb}
function wl(a){return ul(this,a)}
function rl(){}
_=rl.prototype=new dm();_.ab=wl;_.tI=16;function xl(){}
_=xl.prototype=new ju();_.tI=0;function pm(){pm=sz;qm=(Es(),at)}
function om(b,a){pm();b.l=a;qm.cb(b.l,0);return b}
function rm(a){dl(a)}
function nm(){}
_=nm.prototype=new jr();_.A=rm;_.tI=17;var qm;function Cl(){Cl=sz;pm()}
function Bl(b,a){Cl();b.l=a;qm.cb(b.l,0);return b}
function Al(){}
_=Al.prototype=new nm();_.tI=18;function El(){El=sz;Cl()}
function Dl(a){El();Bl(a,$doc.createElement((ef(),Ab)));Fl(a.l);a.l[tb]=Bb;return a}
function Fl(b){if(b.type==Cb){try{b.setAttribute(Db,Ab)}catch(a){}}}
function zl(){}
_=zl.prototype=new Al();_.tI=19;function bm(a){a.f=rr(new kr());a.e=$doc.createElement((ef(),Eb));a.d=$doc.createElement(Fb);a.e.appendChild(a.d);a.l=a.e;return a}
function am(){}
_=am.prototype=new dm();_.tI=20;_.d=null;_.e=null;function lm(){lm=sz;mm=(Es(),Fs)}
var mm;function tn(a){a.l=$doc.createElement((ef(),ac));a.l[tb]=bc;return a}
function wn(a){dl(a)}
function sn(){}
_=sn.prototype=new jr();_.A=wn;_.tI=21;function tm(a){a.l=$doc.createElement((ef(),ac));a.l[tb]=dc;return a}
function sm(){}
_=sm.prototype=new sn();_.tI=22;function Cm(){Cm=sz;Am(new zm(),ec);Em=Am(new zm(),vb);Am(new zm(),fc);Dm=Em}
var Dm,Em;function Am(b,a){b.a=a;return b}
function zm(){}
_=zm.prototype=new ju();_.tI=0;_.a=null;function en(){en=sz;cn(new bn(),gc);cn(new bn(),hc);fn=cn(new bn(),yb)}
var fn;function cn(a,b){a.a=b;return a}
function bn(){}
_=bn.prototype=new ju();_.tI=0;_.a=null;function ln(a){bm(a);a.a=(Cm(),Dm);a.c=(en(),fn);a.b=$doc.createElement((ef(),ic));a.d.appendChild(a.b);a.e[jc]=kc;a.e[lc]=kc;return a}
function mn(c,d){var b,a;b=(a=$doc.createElement((ef(),mc)),(a[oc]=c.a.a,undefined),(a.style[pc]=c.c.a,undefined),a);c.b.appendChild(b);cs(d);sr(c.f,d);b.appendChild(d.l);ds(d,c)}
function pn(c){var a,b;b=hf((ef(),c.l));a=hm(this,c);if(a){this.b.removeChild(b)}return a}
function jn(){}
_=jn.prototype=new am();_.ab=pn;_.tI=23;_.b=null;function Bn(){Bn=sz;pm()}
function yn(a){Bn();om(a,gf((ef(),false)));a.l[tb]=qc;return a}
function Cn(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement((ef(),rc));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function En(a){if(dl(a)==1024){}else{dl(a)}}
function xn(){}
_=xn.prototype=new nm();_.A=En;_.tI=24;function co(a){fy(new ey());a.b=fy(new ey());go(a,false,(jo(),new ho()));return a}
function fo(d,a){var b,c;for(c=Dw(new Bw(),d.b);c.a<c.b.b;){b=mh(ax(c));if(bf((ef(),null.gb()),a)){return b}}return null}
function go(c,e){var a,b,d;b=$doc.createElement((ef(),Eb));c.a=$doc.createElement(Fb);b.appendChild(c.a);if(!e){d=$doc.createElement(ic);c.a.appendChild(d)}a=ys((lm(),mm));a.appendChild(b);c.l=a;c.l.setAttribute(sc,tc);rk(c.l,2225|(c.l.__eventBits||0));c.l[tb]=uc;if(e){cq(c,hq(c.l)+vc+wc)}else{cq(c,hq(c.l)+vc+xc)}c.l.style[zc]=Ac;c.l.setAttribute(Bc,Cc)}
function lo(a){var b;fo(this,a.target);switch(dl(a)){case 1:{(lm(),this.l).firstChild.focus();break}{break}case 2048:{mh(jy(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{mh(jy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{mh(jy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:mh(jy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:mh(jy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{mh(jy(this.b,0))}}break}}}
function mo(){bs(this)}
function Fn(){}
_=Fn.prototype=new jr();_.A=lo;_.B=mo;_.tI=25;_.a=null;function jo(){jo=sz;ko=$moduleBase+Dc;ps(new ns(),ko,0,0,5,9)}
function ho(){}
_=ho.prototype=new ju();_.tI=0;var ko;function Do(){Do=sz;bp=vy(new uy());cp=zy(new yy())}
function Co(b,a){Do();b.f=rr(new kr());b.l=a;as(b);return b}
function Eo(){var b,a;Do();var c,d;for(d=(b=uv(new tv(),Dx(cp.a).b.a),nx(new mx(),b));Fw(d.a.a);){c=ah((a=ah(ax(d.a.a),13),a.t()),7);if(c.j){c.B()}}}
function ap(a){Do();var b;b=ah(sw(bp,a),8);if(b){return b}if(bp.d==0){ek(new vo())}b=Ao(new zo());yw(bp,a,b);Ay(cp,b);return b}
function uo(){}
_=uo.prototype=new rl();_.tI=26;var bp,cp;function xo(){Eo()}
function yo(){return null}
function vo(){}
_=vo.prototype=new ju();_.E=xo;_.F=yo;_.tI=27;function Bo(){Bo=sz;Do()}
function Ao(a){Bo();Co(a,$doc.body);return a}
function zo(){}
_=zo.prototype=new uo();_.tI=28;function np(e,b,c,a,d){e.i=wg(rh,0,7,2,0);e.f=wg(qh,0,-1,2,0);e.l=b;e.h=c;zg(e.f,0,a);zg(e.f,1,d);rk(e.l,8316|(e.l.__eventBits||0));if(!up){up=$doc.createElement((ef(),ac));up.style[zb]=Ec;up.style[yb]=Ac;up.style[vb]=Ac;up.style[Fc]=Ac;up.style[ad]=Ac;up.style[bd]=Ac;up.style[cd]=ed;up.style[fd]=gd;up.style[hd]=id}return e}
function op(a,b){if(!a.i[0]){rp(a,0,b)}else if(!a.i[1]){rp(a,1,b)}else{throw new Ft()}}
function rp(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){cs(d)}if(b){ds(b,null);c.f[a].removeChild(b.l)}zg(c.i,a,d);if(d){c.f[a].appendChild(d.l);ds(d,c)}}
function tp(a){a.style[zb]=Ec;a.style[vb]=Ac;a.style[fc]=Ac;a.style[yb]=Ac;a.style[gc]=Ac}
function vp(){return Ar(new yr(),this.i)}
function wp(c){var d,a,b;switch(dl(c)){case 4:{d=c.target;if(bf((ef(),this.h),d)){this.g=true;this.c=((c.clientX||0)-De(this.l),(c.clientY||0)-Ee(this.l));this.d=parseInt(this.f[0][jd])||0;a=((Do(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;up.style[kd]=a+ld;up.style[md]=b+ld;$doc.body.appendChild(up);mj(this.l);c.preventDefault()}break}case 8:{if(ah(this,11).g){ah(this,11).g=false;(Do(),$doc.body).removeChild(up);kj(this.l)}break}case 64:{if(ah(this,11).g){xq(this.b,this.d+((c.clientX||0)-De((ef(),this.l)),(c.clientY||0)-Ee(this.l))-this.c);c.preventDefault()}break}case 8192:{if(ah(this,11).g){ah(this,11).g=false;(Do(),$doc.body).removeChild(up)}break}}}
function xp(a){a.style[ad]=kc;a.style[Fc]=kc;a.style[bd]=nd;return a}
function yp(a){if(this.i[0]==a){rp(this,0,null);return true}else if(this.i[1]==a){rp(this,1,null);return true}return false}
function lp(){}
_=lp.prototype=new no();_.w=vp;_.A=wp;_.ab=yp;_.tI=29;_.g=false;_.h=null;var up=null;function Ep(){Ep=sz;pm()}
function Dp(b,a){Ep();b.l=a;qm.cb(b.l,0);return b}
function aq(a){var b;b=dl(a);if((b&896)!=0){dl(a)}else if(b==1024){}else{dl(a)}}
function Cp(){}
_=Cp.prototype=new nm();_.A=aq;_.tI=30;function Bp(){Bp=sz;Ep()}
function Ap(a){Bp();Dp(a,$doc.createElement((ef(),pd)));a.l[tb]=qd;return a}
function zp(){}
_=zp.prototype=new Cp();_.tI=31;function lq(a){bm(a);a.a=(Cm(),Dm);a.b=(en(),fn);a.e[jc]=kc;a.e[lc]=kc;return a}
function mq(c,e){var b,d,a;d=$doc.createElement((ef(),ic));b=(a=$doc.createElement(mc),(a[oc]=c.a.a,undefined),(a.style[pc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);cs(e);sr(c.f,e);b.appendChild(e.l);ds(e,c)}
function pq(c){var a,b;b=hf((ef(),c.l));a=hm(this,c);if(a){this.d.removeChild(hf(b))}return a}
function jq(){}
_=jq.prototype=new am();_.ab=pq;_.tI=32;function br(a){cr(a,(Dq(),new Bq()));return a}
function cr(d){np(d,$doc.createElement((ef(),ac)),$doc.createElement(ac),xp($doc.createElement(ac)),xp($doc.createElement(ac)));d.b=new uq();d.a=xp($doc.createElement(ac));dr(d,(Dq(),Fq));d.l[tb]=rd;wq(d.b,d);gr(d,sd);return d}
function dr(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=td+ms(d.d,d.b,d.c,d.e,d.a)+ud||wb;e.style[vd]=wd;a.style[vd]=wd}
function gr(b,a){var c;b.e=a;c=b.f[0];c.style[kd]=a;xq(b.b,parseInt(c[jd])||0)}
function hr(){gr(this,this.e);qj(sq(new rq(),this))}
function ir(){}
function qq(){}
_=qq.prototype=new lp();_.C=hr;_.D=ir;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function sq(b,a){b.a=a;return b}
function rq(){}
_=rq.prototype=new ju();_.tI=34;_.a=null;function wq(c,b){var a,d;c.a=b;b.l.style[zb]=xd;d=b.f[0];a=b.f[1];zq(d);zq(a);zq(b.h);tp(b.a);a.style[gc]=kc}
function xq(f,b){var a,c,d,e;d=f.a.h;c=parseInt(f.a.a[jd])||0;e=parseInt(d[jd])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}yq(f.a.f[0],d,f.a.f[1],b,b+e)}
function yq(d,c,a,e,b){d.style[kd]=e+ld;c.style[yb]=e+ld;a.style[yb]=b+ld}
function zq(a){a.style[zb]=Ec;a.style[vb]=kc;a.style[fc]=kc}
function uq(){}
_=uq.prototype=new ju();_.tI=0;_.a=null;function Dq(){Dq=sz;Eq=$moduleBase+yd;Fq=ps(new ns(),Eq,0,0,7,7)}
function Bq(){}
_=Bq.prototype=new ju();_.tI=0;var Eq,Fq;function rr(a){a.a=wg(rh,0,7,4,0);return a}
function sr(a,b){vr(a,b,a.b)}
function ur(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function vr(d,e,a){var b,c;if(a<0||a>d.b){throw new cu()}if(d.b==d.a.length){c=wg(rh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){zg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){zg(d.a,b,d.a[b-1])}zg(d.a,a,e)}
function wr(c,b){var a;if(b<0||b>=c.b){throw new cu()}--c.b;for(a=b;a<c.b;++a){zg(c.a,a,c.a[a+1])}zg(c.a,c.b,null)}
function xr(b,c){var a;a=ur(b,c);if(a==-1){throw new lz()}wr(b,a)}
function kr(){}
_=kr.prototype=new ju();_.tI=0;_.a=null;_.b=0;function nr(b,a){b.b=a;return b}
function pr(){return this.a<this.b.b-1}
function qr(){if(this.a>=this.b.b){throw new lz()}return this.b.a[++this.a]}
function lr(){}
_=lr.prototype=new ju();_.v=pr;_.z=qr;_.tI=0;_.a=-1;_.b=null;function Ar(a,b){a.b=b;Cr(a);return a}
function Cr(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function Dr(){return this.a<this.b.length}
function Er(){var a;if(this.a>=this.b.length){throw new lz()}a=this.b[this.a];Cr(this);return a}
function yr(){}
_=yr.prototype=new ju();_.v=Dr;_.z=Er;_.tI=0;_.a=-1;_.b=null;function ms(f,c,e,g,b){var a,d;d=Ad+g+Bd+b+Cd+f+Dd+(-c+Ed)+(-e+ld);a=Fd+$moduleBase+ae+d+be;return a}
function ps(c,e,b,d,f,a){c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function ns(){}
_=ns.prototype=new xl();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function Es(){Es=sz;Fs=us(new ss());at=Fs?(Es(),new rs()):Fs}
function bt(a,b){a.tabIndex=b}
function rs(){}
_=rs.prototype=new ju();_.cb=bt;_.tI=0;var Fs,at;function vs(){vs=sz;Es()}
function us(a){vs();a.a=ws();a.b=xs();a.c=zs();return a}
function ws(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function xs(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function ys(c){var a=$doc.createElement(ac);var b=c.o();b.addEventListener(xb,c.a,false);b.addEventListener(dd,c.b,false);a.addEventListener(fb,c.c,false);a.appendChild(b);return a}
function zs(){return function(){this.firstChild.focus()}}
function Bs(){var a=$doc.createElement(ce);a.type=de;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=Ec;return a}
function Cs(a,b){a.firstChild.tabIndex=b}
function ss(){}
_=ss.prototype=new rs();_.o=Bs;_.cb=Cs;_.tI=0;function ct(){}
_=ct.prototype=new og();_.tI=0;function et(a){a.d=lq(new jq());a.c=ln(new jn());a.i=br(new qq());a.h=yn(new xn());a.a=Ap(new zp());a.e=co(new Fn());a.b=Dl(new zl());a.f=tn(new sn());a.g=tm(new sm());mf((ef(),a.f.l),o);mn(a.c,a.b);mn(a.c,a.e);Cn(a.h,p,p,-1);Cn(a.h,q,q,-1);a.h.l.size=6;a.a.l[r]=s!=null?s:wb;op(a.i,a.h);op(a.i,a.a);mf(a.g.l,t);mq(a.d,a.g);mq(a.d,a.i);mq(a.d,a.f);mq(a.d,a.c);a.d.l.style[kd]=u;a.d.l.style[md]=v;sl((Do(),ap(null)),a.d);return a}
function dt(){}
_=dt.prototype=new ct();_.tI=0;function nt(){}
_=nt.prototype=new nu();_.tI=36;function ut(c,a){var b;b=new qt();return b}
function qt(){}
_=qt.prototype=new ju();_.tI=0;function rt(){}
_=rt.prototype=new nu();_.tI=39;function Ct(){}
_=Ct.prototype=new nu();_.tI=40;function Ft(){}
_=Ft.prototype=new nu();_.tI=41;function du(b,a){return b}
function cu(){}
_=cu.prototype=new nu();_.tI=42;function gu(){}
_=gu.prototype=new nu();_.tI=43;function Bu(b,a){if(!(a!=null&&Fg(a.tI,1))){return false}return String(b)==a}
function Fu(b,a){return b.substr(a,b.length-a)}
function bv(c){if(c.length==0||c[0]>ub&&c[c.length-1]>ub){return c}var a=c.replace(/^(\s*)/,wb);var b=a.replace(/\s*$/,wb);return b}
function dv(a){return Bu(this,a)}
function fv(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function gv(){return xu(this)}
_=String.prototype;_.eQ=dv;_.hC=gv;_.tI=2;function su(){su=sz;tu={};wu={}}
function uu(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function xu(c){su();var a=w+c;var b=wu[a];if(b!=null){return b}b=tu[a];if(b==null){b=uu(c)}yu();return wu[a]=b}
function yu(){if(vu==256){tu=wu;wu={};vu=0}++vu}
var tu,vu=0,wu;function jv(){}
_=jv.prototype=new nu();_.tI=44;function nv(a,b){var c;while(a.v()){c=a.z();if(b==null?c==null:oe(b,c)){return a}}return null}
function pv(a){throw new jv()}
function qv(b){var a;a=nv(this.w(),b);return !!a}
function mv(){}
_=mv.prototype=new ju();_.m=pv;_.n=qv;_.tI=0;function Dx(b){var a;a=yv(new sv(),b);return sx(new lx(),b,a)}
function Ex(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Fg(c.tI,15))){return false}e=ah(c,15);if(ah(this,15).d!=e.d){return false}for(b=uv(new tv(),yv(new sv(),e).a);Fw(b.a);){a=ah(ax(b.a),13);d=a.t();f=a.u();if(!(d==null?ah(this,15).c:d!=null&&Fg(d.tI,1)?uw(ah(this,15),ah(d,1)):tw(ah(this,15),d,~~qe(d)))){return false}if(!rz(f,d==null?ah(this,15).b:d!=null&&Fg(d.tI,1)?ah(this,15).e[w+ah(d,1)]:qw(ah(this,15),d,~~qe(d)))){return false}}return true}
function Fx(){var a,b,c;c=0;for(b=uv(new tv(),yv(new sv(),ah(this,15)).a);Fw(b.a);){a=ah(ax(b.a),13);c+=a.hC();c=~~c}return c}
function kx(){}
_=kx.prototype=new ju();_.eQ=Ex;_.hC=Fx;_.tI=0;function lw(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function mw(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=jw(e,c.substring(1));a.m(b)}}}
function pw(b,a){return a==null?b.c:a!=null&&Fg(a.tI,1)?uw(b,ah(a,1)):tw(b,a,~~qe(a))}
function sw(b,a){return a==null?b.b:a!=null&&Fg(a.tI,1)?b.e[w+ah(a,1)]:qw(b,a,~~qe(a))}
function qw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function tw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function uw(b,a){return w+a in b.e}
function yw(b,a,c){return a==null?ww(b,c):a!=null&&Fg(a.tI,1)?xw(b,ah(a,1),c):vw(b,a,c,~~qe(a))}
function vw(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.db(j);return h}}}else{a=i.a[e]=[]}var c=ez(new dz(),g,j);a.push(c);++i.d;return null}
function ww(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function xw(d,a,e){var b,c=d.e;a=w+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function zw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&oe(a,b)}
function rv(){}
_=rv.prototype=new kx();_.r=zw;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function cy(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Fg(b.tI,16))){return false}c=ah(b,16);if(c.eb()!=this.eb()){return false}for(a=c.w();a.v();){d=a.z();if(!this.n(d)){return false}}return true}
function dy(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.z();if(c!=null){a+=qe(c);a=~~a}}return a}
function ay(){}
_=ay.prototype=new mv();_.eQ=cy;_.hC=dy;_.tI=45;function yv(b,a){b.a=a;return b}
function Av(d,c){var a,b,e;if(c!=null&&Fg(c.tI,13)){a=ah(c,13);b=a.t();if(pw(d.a,b)){e=sw(d.a,b);return xy(a.u(),e)}}return false}
function Bv(a){return Av(this,a)}
function Cv(){return uv(new tv(),this.a)}
function Dv(){return this.a.d}
function sv(){}
_=sv.prototype=new ay();_.n=Bv;_.w=Cv;_.eb=Dv;_.tI=46;_.a=null;function uv(c,b){var a;c.b=b;a=fy(new ey());if(c.b.c){hy(a,Fv(new Ev(),c.b))}mw(c.b,a);lw(c.b,a);c.a=Dw(new Bw(),a);return c}
function wv(){return Fw(this.a)}
function xv(){return ah(ax(this.a),13)}
function tv(){}
_=tv.prototype=new ju();_.v=wv;_.z=xv;_.tI=0;_.a=null;_.b=null;function Ax(b){var a;if(b!=null&&Fg(b.tI,13)){a=ah(b,13);if(rz(this.t(),a.t())&&rz(this.u(),a.u())){return true}}return false}
function Bx(){var a,b;a=0;b=0;if(this.t()!=null){a=qe(this.t())}if(this.u()!=null){b=qe(this.u())}return a^b}
function yx(){}
_=yx.prototype=new ju();_.eQ=Ax;_.hC=Bx;_.tI=47;function Fv(b,a){b.a=a;return b}
function bw(){return null}
function cw(){return this.a.b}
function dw(a){return ww(this.a,a)}
function Ev(){}
_=Ev.prototype=new yx();_.t=bw;_.u=cw;_.db=dw;_.tI=48;_.a=null;function fw(c,a,b){c.b=b;c.a=a;return c}
function hw(){return this.a}
function iw(){return this.b.e[w+this.a]}
function jw(b,a){return fw(new ew(),a,b)}
function kw(a){return xw(this.b,this.a,a)}
function ew(){}
_=ew.prototype=new yx();_.t=hw;_.u=iw;_.db=kw;_.tI=49;_.a=null;_.b=null;function ex(a){gy(this,this.eb(),a);return true}
function fx(a,b){if(a<0||a>=b){ix(a,b)}}
function gx(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Fg(e.tI,14))){return false}f=ah(e,14);if(this.eb()!=f.b){return false}c=Dw(new Bw(),this);d=Dw(new Bw(),f);while(c.a<c.b.b){a=ax(c);b=ax(d);if(!(a==null?b==null:oe(a,b))){return false}}return true}
function hx(){var a,b,c;b=1;a=Dw(new Bw(),this);while(a.a<a.b.b){c=ax(a);b=31*b+(c==null?0:qe(c));b=~~b}return b}
function ix(a,b){throw du(new cu(),x+a+z+b)}
function jx(){return Dw(new Bw(),this)}
function Aw(){}
_=Aw.prototype=new mv();_.m=ex;_.eQ=gx;_.hC=hx;_.w=jx;_.tI=0;function Dw(b,a){b.b=a;return b}
function Fw(a){return a.a<a.b.b}
function ax(a){if(a.a>=a.b.b){throw new lz()}return jy(a.b,a.a++)}
function bx(){return this.a<this.b.b}
function cx(){return ax(this)}
function Bw(){}
_=Bw.prototype=new ju();_.v=bx;_.z=cx;_.tI=0;_.a=0;_.b=null;function sx(b,a,c){b.a=a;b.b=c;return b}
function vx(a){return pw(this.a,a)}
function wx(){var a;return a=uv(new tv(),this.b.a),nx(new mx(),a)}
function xx(){return this.b.a.d}
function lx(){}
_=lx.prototype=new ay();_.n=vx;_.w=wx;_.eb=xx;_.tI=50;_.a=null;_.b=null;function nx(a,b){a.a=b;return a}
function qx(){return Fw(this.a.a)}
function rx(){var a;return a=ah(ax(this.a.a),13),a.t()}
function mx(){}
_=mx.prototype=new ju();_.v=qx;_.z=rx;_.tI=0;_.a=null;function fy(a){a.a=wg(sh,0,0,0,0);a.b=0;return a}
function hy(b,a){zg(b.a,b.b++,a);return true}
function gy(c,a,b){if(a<0||a>c.b){ix(a,c.b)}c.a.splice(a,0,b);++c.b}
function jy(b,a){fx(a,b.b);return b.a[a]}
function ky(c,b,a){for(;a<c.b;++a){if(rz(b,c.a[a])){return a}}return -1}
function ly(c,a){var b;b=(fx(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function my(f,e){var a;a=ky(f,e,0);if(a==-1){return false}ly(f,a);return true}
function ny(a){return zg(this.a,this.b++,a),true}
function oy(a){return ky(this,a,0)!=-1}
function py(){return this.b}
function ey(){}
_=ey.prototype=new Aw();_.m=ny;_.n=oy;_.eb=py;_.tI=51;_.a=null;_.b=0;function vy(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function xy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&oe(a,b)}
function uy(){}
_=uy.prototype=new rv();_.tI=52;function zy(a){a.a=vy(new uy());return a}
function Ay(c,a){var b;b=yw(c.a,a,c);return b==null}
function Cy(b){var a;return a=yw(this.a,b,this),a==null}
function Dy(a){return pw(this.a,a)}
function Ey(){var a;return a=uv(new tv(),Dx(this.a).b.a),nx(new mx(),a)}
function Fy(){return this.a.d}
function yy(){}
_=yy.prototype=new ay();_.m=Cy;_.n=Dy;_.w=Ey;_.eb=Fy;_.tI=53;_.a=null;function ez(b,a,c){b.a=a;b.b=c;return b}
function gz(){return this.a}
function hz(){return this.b}
function jz(b){var a;a=this.b;this.b=b;return a}
function dz(){}
_=dz.prototype=new yx();_.t=gz;_.u=hz;_.db=jz;_.tI=54;_.a=null;_.b=null;function lz(){}
_=lz.prototype=new nu();_.tI=55;function rz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&oe(a,b)}
function lt(){!!$stats&&$stats({moduleName:$moduleName,subSystem:A,evtGroup:B,millis:(new Date()).getTime(),type:C,className:D});et(new dt())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lt()}catch(a){b(d)}else{lt()}}
function sz(){}
var rh=ut(E,F),sh=ut(ab,bb),qh=ut(cb,eb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();