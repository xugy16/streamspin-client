(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var xb='',vb=' ',ce="' border='0'>",Ed=') no-repeat ',A=', Size: ',wc='-',lc='0',hd='0.0',Bc='0px',r='100%',w='1000px',u='100px',zd='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',td='50%',Ec='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',x=':',vd='<\/div>',ud="<div class='vsplitter' style='text-align:center;'>",ae="<img src='",tb='CSS1Compat',pb='DOMMouseScroll',z='Index: ',p='Item one',q='Item two',fb='JavaScriptObject$;',sb='MouseEvents',cb='Object;',t='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',ab='Widget;',eb='[Lcom.google.gwt.core.client.',F='[Lcom.google.gwt.user.client.ui.',bb='[Ljava.lang.',Fc='absolute',pc='align',jd='alpha(opacity=0)',xd='auto',dd='background',yb='blur',cd='border',m='border-left-width',nb='border-top-width',hc='bottom',v='buhu',Bb='button',mc='cellPadding',kc='cellSpacing',fc='center',dc='change',ub='className',be="clear.cache.gif' style='",oc='click',E='com.streamspin.client.StreamSpinClient',qb='contextmenu',zc='dblclick',bc='div',mb='error',id='filter',ed='focus',Cb='gwt-Button',ec='gwt-HTML',cc='gwt-Label',rc='gwt-ListBox',vc='gwt-MenuBar',rd='gwt-TextArea',sd='gwt-VerticalSplitPanel',ld='height',Cc='hideFocus',yc='horizontal',rb='html',de='input',pd='keydown',Ad='keypress',n='keyup',wb='left',y='load',db='losecapture',ad='margin',uc='menubar',ic='middle',C='moduleStartup',gb='mousedown',hb='mousemove',ib='mouseout',jb='mouseover',kb='mouseup',ob='mousewheel',od='none',kd='offsetHeight',D='onModuleLoadStart',o='online stuff',gd='opacity',sc='option',Ac='outline',wd='overflow',bd='padding',Ab='position',md='px',Fd='px ',Dd='px; background: url(',Cd='px; height: ',yd='relative',gc='right',tc='role',lb='scroll',l='select',B='startup',Db='submit',Fb='table',ac='tbody',nc='td',ee='text',qd='textarea',zb='top',jc='tr',Dc='true',Eb='type',s='value',xc='vertical',qc='verticalAlign',fd='white',nd='width',Bd='width: ';var _;function nu(a){return this===(a==null?null:a)}
function ou(){return this.$H||(this.$H=++ye)}
function lu(){}
_=lu.prototype={};_.eQ=nu;_.hC=ou;_.tM=uz;_.tI=1;function pe(b,a){return b.tM==uz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function re(a){return a.tM==uz||a.tI==2?a.hC():a.$H||(a.$H=++ye)}
var ye=0;function ff(){ff=uz;De();new Be()}
function hf(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function jf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function nf(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function ze(){}
_=ze.prototype=new lu();_.tI=0;function ef(){ef=uz;ff()}
function df(){}
_=df.prototype=new ze();_.tI=0;function bf(){bf=uz;ef()}
function cf(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function Ae(){}
_=Ae.prototype=new df();_.tI=0;function De(){De=uz;bf()}
function Ee(a){var d=$doc.defaultView.getComputedStyle(a,null);var b=$doc.getBoxObjectFor(a).x-Math.round(d.getPropertyCSSValue(m).getFloatValue(CSSPrimitiveValue.CSS_PX));var c=a.parentNode;while(c){if(c.scrollLeft>0){b-=c.scrollLeft}c=c.parentNode}return b+(ml(),ol).scrollLeft}
function Fe(a){var c=$doc.defaultView.getComputedStyle(a,null);var e=$doc.getBoxObjectFor(a).y-Math.round(c.getPropertyCSSValue(nb).getFloatValue(CSSPrimitiveValue.CSS_PX));var b=a.parentNode;while(b){if(b.scrollTop>0){e-=b.scrollTop}b=b.parentNode}return e+(ml(),ol).scrollTop}
function Be(){}
_=Be.prototype=new Ae();_.tI=0;function pg(){}
_=pg.prototype=new lu();_.tI=0;function wg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function xg(a,f,c,b,e){var d;d=wg(e,b);yg(a,f,c,d);return d}
function yg(b,d,c,a){if(!zg){zg=new sg()}Cg(a,zg);a.tI=d;a.qI=c;return a}
function Ag(a,b,c){if(c!=null){if(a.qI>0&&!Fg(c.tI,a.qI)){throw new pt()}if(a.qI<0&&(c.tM==uz||c.tI==2)){throw new pt()}}return a[b]=c}
function Cg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function sg(){}
_=sg.prototype=new lu();_.tI=0;_.length=0;_.qI=0;var zg=null;function ah(b,a){return b&&!!oh[b][a]}
function Fg(b,a){return b&&oh[b][a]}
function bh(b,a){if(b!=null&&!Fg(b.tI,a)){throw new tt()}return b}
function nh(a){if(a!=null){throw new tt()}return a}
var oh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function jv(){}
_=jv.prototype=new lu();_.tI=3;function Ct(){}
_=Ct.prototype=new jv();_.tI=4;function pu(){}
_=pu.prototype=new Ct();_.tI=5;function ci(a){return a}
function bi(){}
_=bi.prototype=new pu();_.tI=7;function zi(a){a.a=gi(new fi(),a);a.b=hy(new gy());a.d=ki(new ji(),a);a.f=pi(new ni(),a);return a}
function Bi(b){var a;a=ri(b.f);ui(b.f);if(a!=null&&ah(a.tI,3)){ci(new bi(),bh(a,3))}else{}b.c=false;Di(b)}
function Ci(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;Cj(d.a,10000);while(si(d.f)){b=ti(d.f);try{if(b==null){return}if(b!=null&&ah(b.tI,3)){a=bh(b,3);ir(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}ui(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){zj(d.a);d.c=false;Di(d)}}}
function Di(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;Cj(a.d,1)}}
function Fi(b,a){jy(b.b,a);Di(b)}
function ei(){}
_=ei.prototype=new lu();_.tI=0;_.c=false;_.e=false;function Aj(){Aj=uz;bk=hy(new gy());fk(new vj())}
function zj(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}oy(bk,a)}
function Bj(a){if(!a.b){oy(bk,a)}a.bb()}
function Cj(b,a){if(a<=0){throw new Et()}zj(b);b.b=false;b.c=Fj(b,a);jy(bk,b)}
function Fj(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function ak(){Bj(this)}
function uj(){}
_=uj.prototype=new lu();_.s=ak;_.tI=8;_.b=false;_.c=0;var bk;function hi(){hi=uz;Aj()}
function gi(b,a){hi();b.a=a;return b}
function ii(){if(!this.a.c){return}Bi(this.a)}
function fi(){}
_=fi.prototype=new uj();_.bb=ii;_.tI=9;_.a=null;function li(){li=uz;Aj()}
function ki(b,a){li();b.a=a;return b}
function mi(){this.a.e=false;Ci(this.a,(new Date()).getTime())}
function ji(){}
_=ji.prototype=new uj();_.bb=mi;_.tI=10;_.a=null;function pi(b,a){b.d=a;return b}
function ri(a){return ly(a.d.b,a.b)}
function si(a){return a.c<a.a}
function ti(b){var a;b.b=b.c;a=ly(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ui(a){ny(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function wi(){return this.c<this.a}
function xi(){return ti(this)}
function ni(){}
_=ni.prototype=new lu();_.v=wi;_.z=xi;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function ej(b,a,c){var d;if(a==mj){if(el(b)==8192){mj=null}}d=dj;dj=b;try{c.A(b)}finally{dj=d}}
function lj(a){if(!!mj&&a==mj){mj=null}gl();yk(a)}
function nj(a){mj=a;gl();Bk=a}
var dj=null,mj=null;function qj(){qj=uz;sj=zi(new ei())}
function rj(a){qj();if(!a){throw new iu()}Fi(sj,a)}
var sj;function xj(){while((Aj(),bk).b>0){zj(bh(ly(bk,0),4))}}
function yj(){return null}
function vj(){}
_=vj.prototype=new lu();_.E=xj;_.F=yj;_.tI=11;function fk(a){kk();if(!gk){gk=hy(new gy())}jy(gk,a)}
function hk(){var a,b;if(gk){for(b=Fw(new Dw(),gk);b.a<b.b.b;){a=bh(cx(b),5);a.E()}}}
function ik(){var a,b,c,d;d=null;if(gk){for(b=Fw(new Dw(),gk);b.a<b.b.b;){a=bh(cx(b),5);c=a.F();d=c}}return d}
function kk(){if(!jk){jk=true;rl()}}
var gk=null,jk=false;function el(a){switch(a.type){case yb:return 4096;case dc:return 1024;case oc:return 1;case zc:return 2;case ed:return 2048;case pd:return 128;case Ad:return 256;case n:return 512;case y:return 32768;case db:return 8192;case gb:return 4;case hb:return 64;case ib:return 32;case jb:return 16;case kb:return 8;case lb:return 16384;case mb:return 65536;case ob:return 131072;case pb:return 131072;case qb:return 262144;}}
function gl(){if(!il){xk();qk();il=true}}
function jl(a){return a!=null&&ah(a.tI,6)&&!(a!=null&&(a.tM!=uz&&a.tI!=2))}
var il=false;function xk(){Dk=function(b){if(Ck(b)){var a=Bk;if(a&&a.__listener){if(jl(a.__listener)){ej(b,a,a.__listener);b.stopPropagation()}}}};Ck=function(a){return true};Ek=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(jl(c)){ej(b,a,c)}}};$wnd.addEventListener(oc,Dk,true);$wnd.addEventListener(zc,Dk,true);$wnd.addEventListener(gb,Dk,true);$wnd.addEventListener(kb,Dk,true);$wnd.addEventListener(hb,Dk,true);$wnd.addEventListener(jb,Dk,true);$wnd.addEventListener(ib,Dk,true);$wnd.addEventListener(ob,Dk,true);$wnd.addEventListener(pd,Ck,true);$wnd.addEventListener(n,Ck,true);$wnd.addEventListener(Ad,Ck,true)}
function yk(a){if(a===Bk){Bk=null}}
function Ak(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Ek:null;if(b&2)c.ondblclick=a&2?Ek:null;if(b&4)c.onmousedown=a&4?Ek:null;if(b&8)c.onmouseup=a&8?Ek:null;if(b&16)c.onmouseover=a&16?Ek:null;if(b&32)c.onmouseout=a&32?Ek:null;if(b&64)c.onmousemove=a&64?Ek:null;if(b&128)c.onkeydown=a&128?Ek:null;if(b&256)c.onkeypress=a&256?Ek:null;if(b&512)c.onkeyup=a&512?Ek:null;if(b&1024)c.onchange=a&1024?Ek:null;if(b&2048)c.onfocus=a&2048?Ek:null;if(b&4096)c.onblur=a&4096?Ek:null;if(b&8192)c.onlosecapture=a&8192?Ek:null;if(b&16384)c.onscroll=a&16384?Ek:null;if(b&32768)c.onload=a&32768?Ek:null;if(b&65536)c.onerror=a&65536?Ek:null;if(b&131072)c.onmousewheel=a&131072?Ek:null;if(b&262144)c.oncontextmenu=a&262144?Ek:null}
var Bk=null,Ck=null,Dk=null,Ek=null;function qk(){$wnd.addEventListener(ib,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(rb==b.target.tagName.toLowerCase()){var c=$doc.createEvent(sb);c.initMouseEvent(kb,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(pb,Dk,true)}
function sk(b,a){gl();Ak(b,a);rk(b,a)}
function rk(b,a){if(a&131072){b.addEventListener(pb,Ek,false)}}
function ml(){ml=uz;ol=nl((ml(),new kl()))}
function nl(){return $doc.compatMode==tb?$doc.documentElement:$doc.body}
function kl(){}
_=kl.prototype=new lu();_.tI=0;var ol;function rl(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=ik()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{hk()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function dq(b,a){jq(b.l,a,true)}
function iq(a){var b,c;b=a[ub]==null?null:String(a[ub]);c=b.indexOf(hv(32));if(c>=0){return b.substr(0,c-0)}return b}
function jq(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new pu()}j=dv(j);if(j.length==0){throw new Et()}i=c[ub]==null?null:String(c[ub]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=vb}c[ub]=i+j}}else{if(e!=-1){b=dv(i.substr(0,e-0));d=dv(bv(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+vb+d}c[ub]=h}}}
function cq(){}
_=cq.prototype=new lu();_.tI=12;_.l=null;function cs(a){if(a.j){throw new bu()}a.j=true;a.l.__listener=a;a.p();a.C()}
function ds(a){if(!a.j){throw new bu()}try{a.D()}finally{a.q();a.l.__listener=null;a.j=false}}
function es(a){if(a.k){a.k.ab(a)}else if(a.k){throw new bu()}}
function fs(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.B()}c.k=null}else{if(a){throw new bu()}c.k=b;if(b.j){cs(c)}}}
function gs(){}
function hs(){}
function is(a){}
function js(){ds(this)}
function ks(){}
function ls(){}
function lr(){}
_=lr.prototype=new cq();_.p=gs;_.q=hs;_.A=is;_.B=js;_.C=ks;_.D=ls;_.tI=13;_.j=false;_.k=null;function qo(){var a,b;for(b=this.w();b.v();){a=bh(b.z(),7);cs(a)}}
function ro(){var a,b;for(b=this.w();b.v();){a=bh(b.z(),7);a.B()}}
function so(){}
function to(){}
function oo(){}
_=oo.prototype=new lr();_.p=qo;_.q=ro;_.C=so;_.D=to;_.tI=14;function gm(c,a,b){es(a);ur(c.f,a);b.appendChild(a.l);fs(a,c)}
function im(b,c){var a;if(c.k!=b){return false}fs(c,null);a=c.l;jf((ff(),a)).removeChild(a);zr(b.f,c);return true}
function jm(){return pr(new nr(),this.f)}
function km(a){return im(this,a)}
function em(){}
_=em.prototype=new oo();_.w=jm;_.ab=km;_.tI=15;function tl(a,b){gm(a,b,a.l)}
function vl(b,c){var a;a=im(b,c);if(a){wl(c.l)}return a}
function wl(a){a.style[wb]=xb;a.style[zb]=xb;a.style[Ab]=xb}
function xl(a){return vl(this,a)}
function sl(){}
_=sl.prototype=new em();_.ab=xl;_.tI=16;function yl(){}
_=yl.prototype=new lu();_.tI=0;function qm(){qm=uz;rm=(at(),ct)}
function pm(b,a){qm();b.l=a;rm.cb(b.l,0);return b}
function sm(a){el(a)}
function om(){}
_=om.prototype=new lr();_.A=sm;_.tI=17;var rm;function Dl(){Dl=uz;qm()}
function Cl(b,a){Dl();b.l=a;rm.cb(b.l,0);return b}
function Bl(){}
_=Bl.prototype=new om();_.tI=18;function Fl(){Fl=uz;Dl()}
function El(a){Fl();Cl(a,$doc.createElement((ff(),Bb)));am(a.l);a.l[ub]=Cb;return a}
function am(b){if(b.type==Db){try{b.setAttribute(Eb,Bb)}catch(a){}}}
function Al(){}
_=Al.prototype=new Bl();_.tI=19;function cm(a){a.f=tr(new mr());a.e=$doc.createElement((ff(),Fb));a.d=$doc.createElement(ac);a.e.appendChild(a.d);a.l=a.e;return a}
function bm(){}
_=bm.prototype=new em();_.tI=20;_.d=null;_.e=null;function mm(){mm=uz;nm=(at(),bt)}
var nm;function un(a){a.l=$doc.createElement((ff(),bc));a.l[ub]=cc;return a}
function xn(a){el(a)}
function tn(){}
_=tn.prototype=new lr();_.A=xn;_.tI=21;function um(a){a.l=$doc.createElement((ff(),bc));a.l[ub]=ec;return a}
function tm(){}
_=tm.prototype=new tn();_.tI=22;function Dm(){Dm=uz;Bm(new Am(),fc);Fm=Bm(new Am(),wb);Bm(new Am(),gc);Em=Fm}
var Em,Fm;function Bm(b,a){b.a=a;return b}
function Am(){}
_=Am.prototype=new lu();_.tI=0;_.a=null;function fn(){fn=uz;dn(new cn(),hc);dn(new cn(),ic);gn=dn(new cn(),zb)}
var gn;function dn(a,b){a.a=b;return a}
function cn(){}
_=cn.prototype=new lu();_.tI=0;_.a=null;function mn(a){cm(a);a.a=(Dm(),Em);a.c=(fn(),gn);a.b=$doc.createElement((ff(),jc));a.d.appendChild(a.b);a.e[kc]=lc;a.e[mc]=lc;return a}
function nn(c,d){var b,a;b=(a=$doc.createElement((ff(),nc)),(a[pc]=c.a.a,undefined),(a.style[qc]=c.c.a,undefined),a);c.b.appendChild(b);es(d);ur(c.f,d);b.appendChild(d.l);fs(d,c)}
function qn(c){var a,b;b=jf((ff(),c.l));a=im(this,c);if(a){this.b.removeChild(b)}return a}
function kn(){}
_=kn.prototype=new bm();_.ab=qn;_.tI=23;_.b=null;function Cn(){Cn=uz;qm()}
function zn(a){Cn();pm(a,hf((ff(),false)));a.l[ub]=rc;return a}
function Dn(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement((ff(),sc));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function Fn(a){if(el(a)==1024){}else{el(a)}}
function yn(){}
_=yn.prototype=new om();_.A=Fn;_.tI=24;function eo(a){hy(new gy());a.b=hy(new gy());ho(a,false,(ko(),new io()));return a}
function go(d,a){var b,c;for(c=Fw(new Dw(),d.b);c.a<c.b.b;){b=nh(cx(c));if(cf((ff(),null.gb()),a)){return b}}return null}
function ho(c,e){var a,b,d;b=$doc.createElement((ff(),Fb));c.a=$doc.createElement(ac);b.appendChild(c.a);if(!e){d=$doc.createElement(jc);c.a.appendChild(d)}a=As((mm(),nm));a.appendChild(b);c.l=a;c.l.setAttribute(tc,uc);sk(c.l,2225|(c.l.__eventBits||0));c.l[ub]=vc;if(e){dq(c,iq(c.l)+wc+xc)}else{dq(c,iq(c.l)+wc+yc)}c.l.style[Ac]=Bc;c.l.setAttribute(Cc,Dc)}
function mo(a){var b;go(this,a.target);switch(el(a)){case 1:{(mm(),this.l).firstChild.focus();break}{break}case 2048:{nh(ly(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{nh(ly(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{nh(ly(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:nh(ly(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:nh(ly(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{nh(ly(this.b,0))}}break}}}
function no(){ds(this)}
function ao(){}
_=ao.prototype=new lr();_.A=mo;_.B=no;_.tI=25;_.a=null;function ko(){ko=uz;lo=$moduleBase+Ec;rs(new ps(),lo,0,0,5,9)}
function io(){}
_=io.prototype=new lu();_.tI=0;var lo;function Eo(){Eo=uz;cp=xy(new wy());dp=By(new Ay())}
function Do(b,a){Eo();b.f=tr(new mr());b.l=a;cs(b);return b}
function Fo(){var b,a;Eo();var c,d;for(d=(b=wv(new vv(),Fx(dp.a).b.a),px(new ox(),b));bx(d.a.a);){c=bh((a=bh(cx(d.a.a),13),a.t()),7);if(c.j){c.B()}}}
function bp(a){Eo();var b;b=bh(uw(cp,a),8);if(b){return b}if(cp.d==0){fk(new wo())}b=Bo(new Ao());Aw(cp,a,b);Cy(dp,b);return b}
function vo(){}
_=vo.prototype=new sl();_.tI=26;var cp,dp;function yo(){Fo()}
function zo(){return null}
function wo(){}
_=wo.prototype=new lu();_.E=yo;_.F=zo;_.tI=27;function Co(){Co=uz;Eo()}
function Bo(a){Co();Do(a,$doc.body);return a}
function Ao(){}
_=Ao.prototype=new vo();_.tI=28;function op(e,b,c,a,d){e.i=xg(sh,0,7,2,0);e.f=xg(rh,0,-1,2,0);e.l=b;e.h=c;Ag(e.f,0,a);Ag(e.f,1,d);sk(e.l,8316|(e.l.__eventBits||0));if(!vp){vp=$doc.createElement((ff(),bc));vp.style[Ab]=Fc;vp.style[zb]=Bc;vp.style[wb]=Bc;vp.style[ad]=Bc;vp.style[bd]=Bc;vp.style[cd]=Bc;vp.style[dd]=fd;vp.style[gd]=hd;vp.style[id]=jd}return e}
function pp(a,b){if(!a.i[0]){sp(a,0,b)}else if(!a.i[1]){sp(a,1,b)}else{throw new bu()}}
function sp(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){es(d)}if(b){fs(b,null);c.f[a].removeChild(b.l)}Ag(c.i,a,d);if(d){c.f[a].appendChild(d.l);fs(d,c)}}
function up(a){a.style[Ab]=Fc;a.style[wb]=Bc;a.style[gc]=Bc;a.style[zb]=Bc;a.style[hc]=Bc}
function wp(){return Cr(new Ar(),this.i)}
function xp(c){var d,a,b;switch(el(c)){case 4:{d=c.target;if(cf((ff(),this.h),d)){this.g=true;this.c=((c.clientX||0)-Ee(this.l),(c.clientY||0)-Fe(this.l));this.d=parseInt(this.f[0][kd])||0;a=((Eo(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;vp.style[ld]=a+md;vp.style[nd]=b+md;$doc.body.appendChild(vp);nj(this.l);c.preventDefault()}break}case 8:{if(bh(this,11).g){bh(this,11).g=false;(Eo(),$doc.body).removeChild(vp);lj(this.l)}break}case 64:{if(bh(this,11).g){yq(this.b,this.d+((c.clientX||0)-Ee((ff(),this.l)),(c.clientY||0)-Fe(this.l))-this.c);c.preventDefault()}break}case 8192:{if(bh(this,11).g){bh(this,11).g=false;(Eo(),$doc.body).removeChild(vp)}break}}}
function yp(a){a.style[bd]=lc;a.style[ad]=lc;a.style[cd]=od;return a}
function zp(a){if(this.i[0]==a){sp(this,0,null);return true}else if(this.i[1]==a){sp(this,1,null);return true}return false}
function mp(){}
_=mp.prototype=new oo();_.w=wp;_.A=xp;_.ab=zp;_.tI=29;_.g=false;_.h=null;var vp=null;function Fp(){Fp=uz;qm()}
function Ep(b,a){Fp();b.l=a;rm.cb(b.l,0);return b}
function bq(a){var b;b=el(a);if((b&896)!=0){el(a)}else if(b==1024){}else{el(a)}}
function Dp(){}
_=Dp.prototype=new om();_.A=bq;_.tI=30;function Cp(){Cp=uz;Fp()}
function Bp(a){Cp();Ep(a,$doc.createElement((ff(),qd)));a.l[ub]=rd;return a}
function Ap(){}
_=Ap.prototype=new Dp();_.tI=31;function mq(a){cm(a);a.a=(Dm(),Em);a.b=(fn(),gn);a.e[kc]=lc;a.e[mc]=lc;return a}
function nq(c,e){var b,d,a;d=$doc.createElement((ff(),jc));b=(a=$doc.createElement(nc),(a[pc]=c.a.a,undefined),(a.style[qc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);es(e);ur(c.f,e);b.appendChild(e.l);fs(e,c)}
function qq(c){var a,b;b=jf((ff(),c.l));a=im(this,c);if(a){this.d.removeChild(jf(b))}return a}
function kq(){}
_=kq.prototype=new bm();_.ab=qq;_.tI=32;function cr(a){dr(a,(Eq(),new Cq()));return a}
function dr(d){op(d,$doc.createElement((ff(),bc)),$doc.createElement(bc),yp($doc.createElement(bc)),yp($doc.createElement(bc)));d.b=new vq();d.a=yp($doc.createElement(bc));er(d,(Eq(),ar));d.l[ub]=sd;xq(d.b,d);ir(d,td);return d}
function er(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=ud+os(d.d,d.b,d.c,d.e,d.a)+vd||xb;e.style[wd]=xd;a.style[wd]=xd}
function ir(b,a){var c;b.e=a;c=b.f[0];c.style[ld]=a;yq(b.b,parseInt(c[kd])||0)}
function jr(){ir(this,this.e);rj(tq(new sq(),this))}
function kr(){}
function rq(){}
_=rq.prototype=new mp();_.C=jr;_.D=kr;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function tq(b,a){b.a=a;return b}
function sq(){}
_=sq.prototype=new lu();_.tI=34;_.a=null;function xq(c,b){var a,d;c.a=b;b.l.style[Ab]=yd;d=b.f[0];a=b.f[1];Aq(d);Aq(a);Aq(b.h);up(b.a);a.style[hc]=lc}
function yq(f,b){var a,c,d,e;d=f.a.h;c=parseInt(f.a.a[kd])||0;e=parseInt(d[kd])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}zq(f.a.f[0],d,f.a.f[1],b,b+e)}
function zq(d,c,a,e,b){d.style[ld]=e+md;c.style[zb]=e+md;a.style[zb]=b+md}
function Aq(a){a.style[Ab]=Fc;a.style[wb]=lc;a.style[gc]=lc}
function vq(){}
_=vq.prototype=new lu();_.tI=0;_.a=null;function Eq(){Eq=uz;Fq=$moduleBase+zd;ar=rs(new ps(),Fq,0,0,7,7)}
function Cq(){}
_=Cq.prototype=new lu();_.tI=0;var Fq,ar;function tr(a){a.a=xg(sh,0,7,4,0);return a}
function ur(a,b){xr(a,b,a.b)}
function wr(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function xr(d,e,a){var b,c;if(a<0||a>d.b){throw new eu()}if(d.b==d.a.length){c=xg(sh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){Ag(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Ag(d.a,b,d.a[b-1])}Ag(d.a,a,e)}
function yr(c,b){var a;if(b<0||b>=c.b){throw new eu()}--c.b;for(a=b;a<c.b;++a){Ag(c.a,a,c.a[a+1])}Ag(c.a,c.b,null)}
function zr(b,c){var a;a=wr(b,c);if(a==-1){throw new nz()}yr(b,a)}
function mr(){}
_=mr.prototype=new lu();_.tI=0;_.a=null;_.b=0;function pr(b,a){b.b=a;return b}
function rr(){return this.a<this.b.b-1}
function sr(){if(this.a>=this.b.b){throw new nz()}return this.b.a[++this.a]}
function nr(){}
_=nr.prototype=new lu();_.v=rr;_.z=sr;_.tI=0;_.a=-1;_.b=null;function Cr(a,b){a.b=b;Er(a);return a}
function Er(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function Fr(){return this.a<this.b.length}
function as(){var a;if(this.a>=this.b.length){throw new nz()}a=this.b[this.a];Er(this);return a}
function Ar(){}
_=Ar.prototype=new lu();_.v=Fr;_.z=as;_.tI=0;_.a=-1;_.b=null;function os(f,c,e,g,b){var a,d;d=Bd+g+Cd+b+Dd+f+Ed+(-c+Fd)+(-e+md);a=ae+$moduleBase+be+d+ce;return a}
function rs(c,e,b,d,f,a){c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function ps(){}
_=ps.prototype=new yl();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function at(){at=uz;bt=ws(new us());ct=bt?(at(),new ts()):bt}
function dt(a,b){a.tabIndex=b}
function ts(){}
_=ts.prototype=new lu();_.cb=dt;_.tI=0;var bt,ct;function xs(){xs=uz;at()}
function ws(a){xs();a.a=ys();a.b=zs();a.c=Bs();return a}
function ys(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function zs(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function As(c){var a=$doc.createElement(bc);var b=c.o();b.addEventListener(yb,c.a,false);b.addEventListener(ed,c.b,false);a.addEventListener(gb,c.c,false);a.appendChild(b);return a}
function Bs(){return function(){this.firstChild.focus()}}
function Ds(){var a=$doc.createElement(de);a.type=ee;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=Fc;return a}
function Es(a,b){a.firstChild.tabIndex=b}
function us(){}
_=us.prototype=new ts();_.o=Ds;_.cb=Es;_.tI=0;function et(){}
_=et.prototype=new pg();_.tI=0;function gt(a){a.d=mq(new kq());a.c=mn(new kn());a.i=cr(new rq());a.h=zn(new yn());a.a=Bp(new Ap());a.e=eo(new ao());a.b=El(new Al());a.f=un(new tn());a.g=um(new tm());nf((ff(),a.f.l),o);nn(a.c,a.b);nn(a.c,a.e);Dn(a.h,p,p,-1);Dn(a.h,q,q,-1);a.h.l.size=6;a.h.l.style[nd]=r;a.a.l[s]=t!=null?t:xb;pp(a.i,a.h);pp(a.i,a.a);a.i.l.style[ld]=u;nf(a.g.l,v);nq(a.d,a.g);nq(a.d,a.i);nq(a.d,a.f);nq(a.d,a.c);a.d.l.style[ld]=w;a.d.l.style[nd]=r;tl((Eo(),bp(null)),a.d);return a}
function ft(){}
_=ft.prototype=new et();_.tI=0;function pt(){}
_=pt.prototype=new pu();_.tI=36;function wt(c,a){var b;b=new st();return b}
function st(){}
_=st.prototype=new lu();_.tI=0;function tt(){}
_=tt.prototype=new pu();_.tI=39;function Et(){}
_=Et.prototype=new pu();_.tI=40;function bu(){}
_=bu.prototype=new pu();_.tI=41;function fu(b,a){return b}
function eu(){}
_=eu.prototype=new pu();_.tI=42;function iu(){}
_=iu.prototype=new pu();_.tI=43;function Du(b,a){if(!(a!=null&&ah(a.tI,1))){return false}return String(b)==a}
function bv(b,a){return b.substr(a,b.length-a)}
function dv(c){if(c.length==0||c[0]>vb&&c[c.length-1]>vb){return c}var a=c.replace(/^(\s*)/,xb);var b=a.replace(/\s*$/,xb);return b}
function fv(a){return Du(this,a)}
function hv(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function iv(){return zu(this)}
_=String.prototype;_.eQ=fv;_.hC=iv;_.tI=2;function uu(){uu=uz;vu={};yu={}}
function wu(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function zu(c){uu();var a=x+c;var b=yu[a];if(b!=null){return b}b=vu[a];if(b==null){b=wu(c)}Au();return yu[a]=b}
function Au(){if(xu==256){vu=yu;yu={};xu=0}++xu}
var vu,xu=0,yu;function lv(){}
_=lv.prototype=new pu();_.tI=44;function pv(a,b){var c;while(a.v()){c=a.z();if(b==null?c==null:pe(b,c)){return a}}return null}
function rv(a){throw new lv()}
function sv(b){var a;a=pv(this.w(),b);return !!a}
function ov(){}
_=ov.prototype=new lu();_.m=rv;_.n=sv;_.tI=0;function Fx(b){var a;a=Av(new uv(),b);return ux(new nx(),b,a)}
function ay(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ah(c.tI,15))){return false}e=bh(c,15);if(bh(this,15).d!=e.d){return false}for(b=wv(new vv(),Av(new uv(),e).a);bx(b.a);){a=bh(cx(b.a),13);d=a.t();f=a.u();if(!(d==null?bh(this,15).c:d!=null&&ah(d.tI,1)?ww(bh(this,15),bh(d,1)):vw(bh(this,15),d,~~re(d)))){return false}if(!tz(f,d==null?bh(this,15).b:d!=null&&ah(d.tI,1)?bh(this,15).e[x+bh(d,1)]:sw(bh(this,15),d,~~re(d)))){return false}}return true}
function by(){var a,b,c;c=0;for(b=wv(new vv(),Av(new uv(),bh(this,15)).a);bx(b.a);){a=bh(cx(b.a),13);c+=a.hC();c=~~c}return c}
function mx(){}
_=mx.prototype=new lu();_.eQ=ay;_.hC=by;_.tI=0;function nw(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function ow(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=lw(e,c.substring(1));a.m(b)}}}
function rw(b,a){return a==null?b.c:a!=null&&ah(a.tI,1)?ww(b,bh(a,1)):vw(b,a,~~re(a))}
function uw(b,a){return a==null?b.b:a!=null&&ah(a.tI,1)?b.e[x+bh(a,1)]:sw(b,a,~~re(a))}
function sw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function vw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function ww(b,a){return x+a in b.e}
function Aw(b,a,c){return a==null?yw(b,c):a!=null&&ah(a.tI,1)?zw(b,bh(a,1),c):xw(b,a,c,~~re(a))}
function xw(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.db(j);return h}}}else{a=i.a[e]=[]}var c=gz(new fz(),g,j);a.push(c);++i.d;return null}
function yw(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function zw(d,a,e){var b,c=d.e;a=x+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Bw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function tv(){}
_=tv.prototype=new mx();_.r=Bw;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function ey(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ah(b.tI,16))){return false}c=bh(b,16);if(c.eb()!=this.eb()){return false}for(a=c.w();a.v();){d=a.z();if(!this.n(d)){return false}}return true}
function fy(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.z();if(c!=null){a+=re(c);a=~~a}}return a}
function cy(){}
_=cy.prototype=new ov();_.eQ=ey;_.hC=fy;_.tI=45;function Av(b,a){b.a=a;return b}
function Cv(d,c){var a,b,e;if(c!=null&&ah(c.tI,13)){a=bh(c,13);b=a.t();if(rw(d.a,b)){e=uw(d.a,b);return zy(a.u(),e)}}return false}
function Dv(a){return Cv(this,a)}
function Ev(){return wv(new vv(),this.a)}
function Fv(){return this.a.d}
function uv(){}
_=uv.prototype=new cy();_.n=Dv;_.w=Ev;_.eb=Fv;_.tI=46;_.a=null;function wv(c,b){var a;c.b=b;a=hy(new gy());if(c.b.c){jy(a,bw(new aw(),c.b))}ow(c.b,a);nw(c.b,a);c.a=Fw(new Dw(),a);return c}
function yv(){return bx(this.a)}
function zv(){return bh(cx(this.a),13)}
function vv(){}
_=vv.prototype=new lu();_.v=yv;_.z=zv;_.tI=0;_.a=null;_.b=null;function Cx(b){var a;if(b!=null&&ah(b.tI,13)){a=bh(b,13);if(tz(this.t(),a.t())&&tz(this.u(),a.u())){return true}}return false}
function Dx(){var a,b;a=0;b=0;if(this.t()!=null){a=re(this.t())}if(this.u()!=null){b=re(this.u())}return a^b}
function Ax(){}
_=Ax.prototype=new lu();_.eQ=Cx;_.hC=Dx;_.tI=47;function bw(b,a){b.a=a;return b}
function dw(){return null}
function ew(){return this.a.b}
function fw(a){return yw(this.a,a)}
function aw(){}
_=aw.prototype=new Ax();_.t=dw;_.u=ew;_.db=fw;_.tI=48;_.a=null;function hw(c,a,b){c.b=b;c.a=a;return c}
function jw(){return this.a}
function kw(){return this.b.e[x+this.a]}
function lw(b,a){return hw(new gw(),a,b)}
function mw(a){return zw(this.b,this.a,a)}
function gw(){}
_=gw.prototype=new Ax();_.t=jw;_.u=kw;_.db=mw;_.tI=49;_.a=null;_.b=null;function gx(a){iy(this,this.eb(),a);return true}
function hx(a,b){if(a<0||a>=b){kx(a,b)}}
function ix(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ah(e.tI,14))){return false}f=bh(e,14);if(this.eb()!=f.b){return false}c=Fw(new Dw(),this);d=Fw(new Dw(),f);while(c.a<c.b.b){a=cx(c);b=cx(d);if(!(a==null?b==null:pe(a,b))){return false}}return true}
function jx(){var a,b,c;b=1;a=Fw(new Dw(),this);while(a.a<a.b.b){c=cx(a);b=31*b+(c==null?0:re(c));b=~~b}return b}
function kx(a,b){throw fu(new eu(),z+a+A+b)}
function lx(){return Fw(new Dw(),this)}
function Cw(){}
_=Cw.prototype=new ov();_.m=gx;_.eQ=ix;_.hC=jx;_.w=lx;_.tI=0;function Fw(b,a){b.b=a;return b}
function bx(a){return a.a<a.b.b}
function cx(a){if(a.a>=a.b.b){throw new nz()}return ly(a.b,a.a++)}
function dx(){return this.a<this.b.b}
function ex(){return cx(this)}
function Dw(){}
_=Dw.prototype=new lu();_.v=dx;_.z=ex;_.tI=0;_.a=0;_.b=null;function ux(b,a,c){b.a=a;b.b=c;return b}
function xx(a){return rw(this.a,a)}
function yx(){var a;return a=wv(new vv(),this.b.a),px(new ox(),a)}
function zx(){return this.b.a.d}
function nx(){}
_=nx.prototype=new cy();_.n=xx;_.w=yx;_.eb=zx;_.tI=50;_.a=null;_.b=null;function px(a,b){a.a=b;return a}
function sx(){return bx(this.a.a)}
function tx(){var a;return a=bh(cx(this.a.a),13),a.t()}
function ox(){}
_=ox.prototype=new lu();_.v=sx;_.z=tx;_.tI=0;_.a=null;function hy(a){a.a=xg(th,0,0,0,0);a.b=0;return a}
function jy(b,a){Ag(b.a,b.b++,a);return true}
function iy(c,a,b){if(a<0||a>c.b){kx(a,c.b)}c.a.splice(a,0,b);++c.b}
function ly(b,a){hx(a,b.b);return b.a[a]}
function my(c,b,a){for(;a<c.b;++a){if(tz(b,c.a[a])){return a}}return -1}
function ny(c,a){var b;b=(hx(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function oy(f,e){var a;a=my(f,e,0);if(a==-1){return false}ny(f,a);return true}
function py(a){return Ag(this.a,this.b++,a),true}
function qy(a){return my(this,a,0)!=-1}
function ry(){return this.b}
function gy(){}
_=gy.prototype=new Cw();_.m=py;_.n=qy;_.eb=ry;_.tI=51;_.a=null;_.b=0;function xy(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function zy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function wy(){}
_=wy.prototype=new tv();_.tI=52;function By(a){a.a=xy(new wy());return a}
function Cy(c,a){var b;b=Aw(c.a,a,c);return b==null}
function Ey(b){var a;return a=Aw(this.a,b,this),a==null}
function Fy(a){return rw(this.a,a)}
function az(){var a;return a=wv(new vv(),Fx(this.a).b.a),px(new ox(),a)}
function bz(){return this.a.d}
function Ay(){}
_=Ay.prototype=new cy();_.m=Ey;_.n=Fy;_.w=az;_.eb=bz;_.tI=53;_.a=null;function gz(b,a,c){b.a=a;b.b=c;return b}
function iz(){return this.a}
function jz(){return this.b}
function lz(b){var a;a=this.b;this.b=b;return a}
function fz(){}
_=fz.prototype=new Ax();_.t=iz;_.u=jz;_.db=lz;_.tI=54;_.a=null;_.b=null;function nz(){}
_=nz.prototype=new pu();_.tI=55;function tz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function nt(){!!$stats&&$stats({moduleName:$moduleName,subSystem:B,evtGroup:C,millis:(new Date()).getTime(),type:D,className:E});gt(new ft())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{nt()}catch(a){b(d)}else{nt()}}
function uz(){}
var sh=wt(F,ab),th=wt(bb,cb),rh=wt(eb,fb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();