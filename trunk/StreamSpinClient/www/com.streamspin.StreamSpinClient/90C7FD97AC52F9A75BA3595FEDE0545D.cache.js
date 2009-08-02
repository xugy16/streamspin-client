(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var m='',Ab=' ',ee="' border='0'>",ae=') no-repeat ',B=', Size: ',zc='-',oc='0',jd='0.0',Ec='0px',p='1px',Cd='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',vd='50%',bd='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',w='60px',z=':',xd='<\/div>',wd="<div class='vsplitter' style='text-align:center;'>",ce="<img src='",zb='BODY',tb='DOMMouseScroll',A='Index: ',s='Item one',t='Item two',gb='JavaScriptObject$;',eb='Object;',v='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',bb='Widget;',fb='[Lcom.google.gwt.core.client.',ab='[Lcom.google.gwt.user.client.ui.',cb='[Ljava.lang.',ec='absolute',sc='align',ld='alpha(opacity=0)',zd='auto',gd='background',Ac='blur',ed='border',ob='border-left-width',pc='border-top-width',kc='bottom',x='buhu',Eb='button',qc='cellPadding',nc='cellSpacing',ic='center',fd='change',yb='className',de="clear.cache.gif' style='",qd='click',F='com.streamspin.client.StreamSpinClient',ub='contextmenu',Bd='dblclick',fc='div',rb='error',kd='filter',n='focus',Fb='gwt-Button',hc='gwt-HTML',gc='gwt-Label',uc='gwt-ListBox',yc='gwt-MenuBar',td='gwt-TextArea',ud='gwt-VerticalSplitPanel',nd='height',q='hidden',Fc='hideFocus',Cc='horizontal',vb='html',fe='input',y='keydown',db='keypress',hb='keyup',Bb='left',ib='load',jb='losecapture',cd='margin',wb='margin-left',xb='margin-top',xc='menubar',lc='middle',D='moduleStartup',kb='mousedown',lb='mousemove',mb='mouseout',nb='mouseover',pb='mouseup',sb='mousewheel',rd='none',md='offsetHeight',E='onModuleLoadStart',r='online stuff',id='opacity',vc='option',Dc='outline',yd='overflow',dd='padding',Db='position',od='px',be='px ',Fd='px; background: url(',Ed='px; height: ',Ad='relative',jc='right',wc='role',qb='scroll',l='select',C='startup',ac='submit',cc='table',dc='tbody',rc='td',o='text',sd='textarea',Cb='top',mc='tr',ad='true',bc='type',u='value',Bc='vertical',tc='verticalAlign',hd='white',pd='width',Dd='width: ';var _;function eu(a){return this===(a==null?null:a)}
function fu(){return this.$H||(this.$H=++ze)}
function cu(){}
_=cu.prototype={};_.eQ=eu;_.hC=fu;_.tM=lz;_.tI=1;function qe(b,a){return b.tM==lz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function se(a){return a.tM==lz||a.tI==2?a.hC():a.$H||(a.$H=++ze)}
var ze=0;function ff(){ff=lz;De();new Be()}
function hf(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function jf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function lf(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Ae(){}
_=Ae.prototype=new cu();_.tI=0;function ef(){ef=lz;ff()}
function df(){}
_=df.prototype=new Ae();_.tI=0;function De(){De=lz;ef()}
function Ee(b){if(b.offsetLeft==null){return 0}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&$wnd.devicePixelRatio){c+=parseInt($doc.defaultView.getComputedStyle(d,m).getPropertyValue(ob))}if(d&&(d.tagName==zb&&b.style.position==ec)){break}b=d}return c}
function Fe(b){if(b.offsetTop==null){return 0}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&$wnd.devicePixelRatio){e+=parseInt($doc.defaultView.getComputedStyle(c,m).getPropertyValue(pc))}if(c&&(c.tagName==zb&&b.style.position==ec)){break}b=c}return e}
function af(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function Be(){}
_=Be.prototype=new df();_.tI=0;function mg(){}
_=mg.prototype=new cu();_.tI=0;function tg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ug(a,f,c,b,e){var d;d=tg(e,b);vg(a,f,c,d);return d}
function vg(b,d,c,a){if(!wg){wg=new pg()}zg(a,wg);a.tI=d;a.qI=c;return a}
function xg(a,b,c){if(c!=null){if(a.qI>0&&!Cg(c.tI,a.qI)){throw new gt()}if(a.qI<0&&(c.tM==lz||c.tI==2)){throw new gt()}}return a[b]=c}
function zg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function pg(){}
_=pg.prototype=new cu();_.tI=0;_.length=0;_.qI=0;var wg=null;function Dg(b,a){return b&&!!lh[b][a]}
function Cg(b,a){return b&&lh[b][a]}
function Eg(b,a){if(b!=null&&!Cg(b.tI,a)){throw new kt()}return b}
function kh(a){if(a!=null){throw new kt()}return a}
var lh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function av(){}
_=av.prototype=new cu();_.tI=3;function tt(){}
_=tt.prototype=new av();_.tI=4;function gu(){}
_=gu.prototype=new tt();_.tI=5;function Fh(a){return a}
function Eh(){}
_=Eh.prototype=new gu();_.tI=7;function wi(a){a.a=di(new ci(),a);a.b=Ex(new Dx());a.d=hi(new gi(),a);a.f=mi(new ki(),a);return a}
function yi(b){var a;a=oi(b.f);ri(b.f);if(a!=null&&Dg(a.tI,3)){Fh(new Eh(),Eg(a,3))}else{}b.c=false;Ai(b)}
function zi(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;Aj(d.a,10000);while(pi(d.f)){b=qi(d.f);try{if(b==null){return}if(b!=null&&Dg(b.tI,3)){a=Eg(b,3);Bq(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}ri(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){xj(d.a);d.c=false;Ai(d)}}}
function Ai(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;Aj(a.d,1)}}
function Ci(b,a){ay(b.b,a);Ai(b)}
function bi(){}
_=bi.prototype=new cu();_.tI=0;_.c=false;_.e=false;function yj(){yj=lz;Fj=Ex(new Dx());dk(new tj())}
function xj(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}fy(Fj,a)}
function zj(a){if(!a.b){fy(Fj,a)}a.F()}
function Aj(b,a){if(a<=0){throw new vt()}xj(b);b.b=false;b.c=Dj(b,a);ay(Fj,b)}
function Dj(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function Ej(){zj(this)}
function sj(){}
_=sj.prototype=new cu();_.s=Ej;_.tI=8;_.b=false;_.c=0;var Fj;function ei(){ei=lz;yj()}
function di(b,a){ei();b.a=a;return b}
function fi(){if(!this.a.c){return}yi(this.a)}
function ci(){}
_=ci.prototype=new sj();_.F=fi;_.tI=9;_.a=null;function ii(){ii=lz;yj()}
function hi(b,a){ii();b.a=a;return b}
function ji(){this.a.e=false;zi(this.a,(new Date()).getTime())}
function gi(){}
_=gi.prototype=new sj();_.F=ji;_.tI=10;_.a=null;function mi(b,a){b.d=a;return b}
function oi(a){return cy(a.d.b,a.b)}
function pi(a){return a.c<a.a}
function qi(b){var a;b.b=b.c;a=cy(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ri(a){ey(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function ti(){return this.c<this.a}
function ui(){return qi(this)}
function ki(){}
_=ki.prototype=new cu();_.v=ti;_.x=ui;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function bj(b,a,c){var d;if(a==jj){if(Fk(b)==8192){jj=null}}d=aj;aj=b;try{c.y(b)}finally{aj=d}}
function ij(a){if(!!jj&&a==jj){jj=null}bl();vk(a)}
function kj(a){jj=a;bl();yk=a}
function mj(a,b){bl();xk(a,b)}
var aj=null,jj=null;function oj(){oj=lz;qj=wi(new bi())}
function pj(a){oj();if(!a){throw new Ft()}Ci(qj,a)}
var qj;function vj(){while((yj(),Fj).b>0){xj(Eg(cy(Fj,0),4))}}
function wj(){return null}
function tj(){}
_=tj.prototype=new cu();_.C=vj;_.D=wj;_.tI=11;function dk(a){ik();if(!ek){ek=Ex(new Dx())}ay(ek,a)}
function fk(){var a,b;if(ek){for(b=ww(new uw(),ek);b.a<b.b.b;){a=Eg(zw(b),5);a.C()}}}
function gk(){var a,b,c,d;d=null;if(ek){for(b=ww(new uw(),ek);b.a<b.b.b;){a=Eg(zw(b),5);c=a.D();d=c}}return d}
function ik(){if(!hk){hk=true;hl()}}
var ek=null,hk=false;function Fk(a){switch(a.type){case Ac:return 4096;case fd:return 1024;case qd:return 1;case Bd:return 2;case n:return 2048;case y:return 128;case db:return 256;case hb:return 512;case ib:return 32768;case jb:return 8192;case kb:return 4;case lb:return 64;case mb:return 32;case nb:return 16;case pb:return 8;case qb:return 16384;case rb:return 65536;case sb:return 131072;case tb:return 131072;case ub:return 262144;}}
function bl(){if(!dl){uk();dl=true}}
function el(a){return a!=null&&Dg(a.tI,6)&&!(a!=null&&(a.tM!=lz&&a.tI!=2))}
var dl=false;function uk(){Ak=function(b){if(zk(b)){var a=yk;if(a&&a.__listener){if(el(a.__listener)){bj(b,a,a.__listener);b.stopPropagation()}}}};zk=function(a){return true};Bk=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(el(c)){bj(b,a,c)}}};$wnd.addEventListener(qd,Ak,true);$wnd.addEventListener(Bd,Ak,true);$wnd.addEventListener(kb,Ak,true);$wnd.addEventListener(pb,Ak,true);$wnd.addEventListener(lb,Ak,true);$wnd.addEventListener(nb,Ak,true);$wnd.addEventListener(mb,Ak,true);$wnd.addEventListener(sb,Ak,true);$wnd.addEventListener(y,zk,true);$wnd.addEventListener(hb,zk,true);$wnd.addEventListener(db,zk,true)}
function vk(a){if(a===yk){yk=null}}
function xk(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Bk:null;if(b&2)c.ondblclick=a&2?Bk:null;if(b&4)c.onmousedown=a&4?Bk:null;if(b&8)c.onmouseup=a&8?Bk:null;if(b&16)c.onmouseover=a&16?Bk:null;if(b&32)c.onmouseout=a&32?Bk:null;if(b&64)c.onmousemove=a&64?Bk:null;if(b&128)c.onkeydown=a&128?Bk:null;if(b&256)c.onkeypress=a&256?Bk:null;if(b&512)c.onkeyup=a&512?Bk:null;if(b&1024)c.onchange=a&1024?Bk:null;if(b&2048)c.onfocus=a&2048?Bk:null;if(b&4096)c.onblur=a&4096?Bk:null;if(b&8192)c.onlosecapture=a&8192?Bk:null;if(b&16384)c.onscroll=a&16384?Bk:null;if(b&32768)c.onload=a&32768?Bk:null;if(b&65536)c.onerror=a&65536?Bk:null;if(b&131072)c.onmousewheel=a&131072?Bk:null;if(b&262144)c.oncontextmenu=a&262144?Bk:null}
var yk=null,zk=null,Ak=null,Bk=null;function ok(a){if($wnd.devicePixelRatio){return a.clientX||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(vb)[0],m);return a.pageX-$doc.body.scrollLeft-parseInt(b.getPropertyValue(wb))-parseInt(b.getPropertyValue(ob))||0}}
function pk(a){if($wnd.devicePixelRatio){return a.clientY||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(vb)[0],m);return a.pageY-$doc.body.scrollTop-parseInt(b.getPropertyValue(xb))-parseInt(b.getPropertyValue(pc))||0}}
function hl(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=gk()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{fk()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function yp(b,a){Cp(b.l,a,true)}
function Bp(a){var b,c;b=a[yb]==null?null:String(a[yb]);c=b.indexOf(Eu(32));if(c>=0){return b.substr(0,c-0)}return b}
function Cp(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new gu()}j=Au(j);if(j.length==0){throw new vt()}i=c[yb]==null?null:String(c[yb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Ab}c[yb]=i+j}}else{if(e!=-1){b=Au(i.substr(0,e-0));d=Au(yu(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Ab+d}c[yb]=h}}}
function xp(){}
_=xp.prototype=new cu();_.tI=12;_.l=null;function vr(a){if(a.j){throw new yt()}a.j=true;a.l.__listener=a;a.p();a.A()}
function wr(a){if(!a.j){throw new yt()}try{a.B()}finally{a.q();a.l.__listener=null;a.j=false}}
function xr(a){if(a.k){a.k.E(a)}else if(a.k){throw new yt()}}
function yr(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.z()}c.k=null}else{if(a){throw new yt()}c.k=b;if(b.j){vr(c)}}}
function zr(){}
function Ar(){}
function Br(a){}
function Cr(){wr(this)}
function Dr(){}
function Er(){}
function Eq(){}
_=Eq.prototype=new xp();_.p=zr;_.q=Ar;_.y=Br;_.z=Cr;_.A=Dr;_.B=Er;_.tI=13;_.j=false;_.k=null;function fo(){var a,b;for(b=this.w();b.v();){a=Eg(b.x(),7);vr(a)}}
function go(){var a,b;for(b=this.w();b.v();){a=Eg(b.x(),7);a.z()}}
function ho(){}
function io(){}
function co(){}
_=co.prototype=new Eq();_.p=fo;_.q=go;_.A=ho;_.B=io;_.tI=14;function Cl(c,a,b){xr(a);hr(c.f,a);b.appendChild(a.l);yr(a,c)}
function El(b,c){var a;if(c.k!=b){return false}yr(c,null);a=c.l;jf((ff(),a)).removeChild(a);mr(b.f,c);return true}
function Fl(){return cr(new ar(),this.f)}
function am(a){return El(this,a)}
function Al(){}
_=Al.prototype=new co();_.w=Fl;_.E=am;_.tI=15;function jl(a,b){Cl(a,b,a.l)}
function ll(b,c){var a;a=El(b,c);if(a){ml(c.l)}return a}
function ml(a){a.style[Bb]=m;a.style[Cb]=m;a.style[Db]=m}
function nl(a){return ll(this,a)}
function il(){}
_=il.prototype=new Al();_.E=nl;_.tI=16;function ol(){}
_=ol.prototype=new cu();_.tI=0;function gm(){gm=lz;hm=(xs(),zs)}
function fm(b,a){gm();b.l=a;hm.ab(b.l,0);return b}
function im(a){Fk(a)}
function em(){}
_=em.prototype=new Eq();_.y=im;_.tI=17;var hm;function tl(){tl=lz;gm()}
function sl(b,a){tl();b.l=a;hm.ab(b.l,0);return b}
function rl(){}
_=rl.prototype=new em();_.tI=18;function vl(){vl=lz;tl()}
function ul(a){vl();sl(a,$doc.createElement((ff(),Eb)));wl(a.l);a.l[yb]=Fb;return a}
function wl(b){if(b.type==ac){try{b.setAttribute(bc,Eb)}catch(a){}}}
function ql(){}
_=ql.prototype=new rl();_.tI=19;function yl(a){a.f=gr(new Fq());a.e=$doc.createElement((ff(),cc));a.d=$doc.createElement(dc);a.e.appendChild(a.d);a.l=a.e;return a}
function xl(){}
_=xl.prototype=new Al();_.tI=20;_.d=null;_.e=null;function cm(){cm=lz;dm=(xs(),ys)}
var dm;function kn(a){a.l=$doc.createElement((ff(),fc));a.l[yb]=gc;return a}
function nn(a){Fk(a)}
function jn(){}
_=jn.prototype=new Eq();_.y=nn;_.tI=21;function km(a){a.l=$doc.createElement((ff(),fc));a.l[yb]=hc;return a}
function jm(){}
_=jm.prototype=new jn();_.tI=22;function tm(){tm=lz;rm(new qm(),ic);vm=rm(new qm(),Bb);rm(new qm(),jc);um=vm}
var um,vm;function rm(b,a){b.a=a;return b}
function qm(){}
_=qm.prototype=new cu();_.tI=0;_.a=null;function Bm(){Bm=lz;zm(new ym(),kc);zm(new ym(),lc);Cm=zm(new ym(),Cb)}
var Cm;function zm(a,b){a.a=b;return a}
function ym(){}
_=ym.prototype=new cu();_.tI=0;_.a=null;function bn(a){yl(a);a.a=(tm(),um);a.c=(Bm(),Cm);a.b=$doc.createElement((ff(),mc));a.d.appendChild(a.b);a.e[nc]=oc;a.e[qc]=oc;return a}
function cn(c,d){var b,a;b=(a=$doc.createElement((ff(),rc)),(a[sc]=c.a.a,undefined),(a.style[tc]=c.c.a,undefined),a);c.b.appendChild(b);xr(d);hr(c.f,d);b.appendChild(d.l);yr(d,c)}
function fn(c){var a,b;b=jf((ff(),c.l));a=El(this,c);if(a){this.b.removeChild(b)}return a}
function Fm(){}
_=Fm.prototype=new xl();_.E=fn;_.tI=23;_.b=null;function sn(){sn=lz;gm()}
function pn(a){sn();fm(a,hf((ff(),false)));a.l[yb]=uc;return a}
function tn(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement((ff(),vc));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function un(a){if(Fk(a)==1024){}else{Fk(a)}}
function on(){}
_=on.prototype=new em();_.y=un;_.tI=24;function yn(a){Ex(new Dx());a.b=Ex(new Dx());Bn(a,false,(En(),new Cn()));return a}
function An(d,a){var b,c;for(c=ww(new uw(),d.b);c.a<c.b.b;){b=kh(zw(c));if(af((ff(),null.eb()),a)){return b}}return null}
function Bn(c,e){var a,b,d;b=$doc.createElement((ff(),cc));c.a=$doc.createElement(dc);b.appendChild(c.a);if(!e){d=$doc.createElement(mc);c.a.appendChild(d)}a=ns((cm(),dm));a.appendChild(b);c.l=a;c.l.setAttribute(wc,xc);mj(c.l,2225|(c.l.__eventBits||0));c.l[yb]=yc;if(e){yp(c,Bp(c.l)+zc+Bc)}else{yp(c,Bp(c.l)+zc+Cc)}c.l.style[Dc]=Ec;c.l.setAttribute(Fc,ad)}
function ao(a){var b;An(this,a.target);switch(Fk(a)){case 1:{us((cm(),this.l));break}{break}case 2048:{kh(cy(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{kh(cy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{kh(cy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:kh(cy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:kh(cy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{kh(cy(this.b,0))}}break}}}
function bo(){wr(this)}
function vn(){}
_=vn.prototype=new Eq();_.y=ao;_.z=bo;_.tI=25;_.a=null;function En(){En=lz;Fn=$moduleBase+bd;es(new cs(),Fn,0,0,5,9)}
function Cn(){}
_=Cn.prototype=new cu();_.tI=0;var Fn;function to(){to=lz;xo=oy(new ny());yo=sy(new ry())}
function so(b,a){to();b.f=gr(new Fq());b.l=a;vr(b);return b}
function uo(){var b,a;to();var c,d;for(d=(b=nv(new mv(),wx(yo.a).b.a),gx(new fx(),b));yw(d.a.a);){c=Eg((a=Eg(zw(d.a.a),13),a.t()),7);if(c.j){c.z()}}}
function wo(a){to();var b;b=Eg(lw(xo,a),8);if(b){return b}if(xo.d==0){dk(new lo())}b=qo(new po());rw(xo,a,b);ty(yo,b);return b}
function ko(){}
_=ko.prototype=new il();_.tI=26;var xo,yo;function no(){uo()}
function oo(){return null}
function lo(){}
_=lo.prototype=new cu();_.C=no;_.D=oo;_.tI=27;function ro(){ro=lz;to()}
function qo(a){ro();so(a,$doc.body);return a}
function po(){}
_=po.prototype=new ko();_.tI=28;function dp(e,b,c,a,d){e.i=ug(ph,0,7,2,0);e.f=ug(oh,0,-1,2,0);e.l=b;e.h=c;xg(e.f,0,a);xg(e.f,1,d);mj(e.l,8316|(e.l.__eventBits||0));if(!kp){kp=$doc.createElement((ff(),fc));kp.style[Db]=ec;kp.style[Cb]=Ec;kp.style[Bb]=Ec;kp.style[cd]=Ec;kp.style[dd]=Ec;kp.style[ed]=Ec;kp.style[gd]=hd;kp.style[id]=jd;kp.style[kd]=ld}return e}
function ep(a,b){if(!a.i[0]){hp(a,0,b)}else if(!a.i[1]){hp(a,1,b)}else{throw new yt()}}
function hp(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){xr(d)}if(b){yr(b,null);c.f[a].removeChild(b.l)}xg(c.i,a,d);if(d){c.f[a].appendChild(d.l);yr(d,c)}}
function jp(a){a.style[Db]=ec;a.style[Bb]=Ec;a.style[jc]=Ec;a.style[Cb]=Ec;a.style[kc]=Ec}
function lp(){return pr(new nr(),this.i)}
function mp(c){var d,a,b;switch(Fk(c)){case 4:{d=c.target;if(af((ff(),this.h),d)){this.g=true;this.c=(ok(c)-Ee(this.l),pk(c)-Fe(this.l));this.d=parseInt(this.f[0][md])||0;a=((to(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;kp.style[nd]=a+od;kp.style[pd]=b+od;$doc.body.appendChild(kp);kj(this.l);c.preventDefault()}break}case 8:{if(Eg(this,11).g){Eg(this,11).g=false;(to(),$doc.body).removeChild(kp);ij(this.l)}break}case 64:{if(Eg(this,11).g){lq(this.b,this.d+(ok(c)-Ee((ff(),this.l)),pk(c)-Fe(this.l))-this.c);c.preventDefault()}break}case 8192:{if(Eg(this,11).g){Eg(this,11).g=false;(to(),$doc.body).removeChild(kp)}break}}}
function np(a){a.style[dd]=oc;a.style[cd]=oc;a.style[ed]=rd;return a}
function op(a){if(this.i[0]==a){hp(this,0,null);return true}else if(this.i[1]==a){hp(this,1,null);return true}return false}
function bp(){}
_=bp.prototype=new co();_.w=lp;_.y=mp;_.E=op;_.tI=29;_.g=false;_.h=null;var kp=null;function up(){up=lz;gm()}
function tp(b,a){up();b.l=a;hm.ab(b.l,0);return b}
function wp(a){var b;b=Fk(a);if((b&896)!=0){Fk(a)}else if(b==1024){}else{Fk(a)}}
function sp(){}
_=sp.prototype=new em();_.y=wp;_.tI=30;function rp(){rp=lz;up()}
function qp(a){rp();tp(a,$doc.createElement((ff(),sd)));a.l[yb]=td;return a}
function pp(){}
_=pp.prototype=new sp();_.tI=31;function Fp(a){yl(a);a.a=(tm(),um);a.b=(Bm(),Cm);a.e[nc]=oc;a.e[qc]=oc;return a}
function aq(c,e){var b,d,a;d=$doc.createElement((ff(),mc));b=(a=$doc.createElement(rc),(a[sc]=c.a.a,undefined),(a.style[tc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);xr(e);hr(c.f,e);b.appendChild(e.l);yr(e,c)}
function dq(c){var a,b;b=jf((ff(),c.l));a=El(this,c);if(a){this.d.removeChild(jf(b))}return a}
function Dp(){}
_=Dp.prototype=new xl();_.E=dq;_.tI=32;function vq(a){wq(a,(rq(),new pq()));return a}
function wq(d){dp(d,$doc.createElement((ff(),fc)),$doc.createElement(fc),np($doc.createElement(fc)),np($doc.createElement(fc)));d.b=new iq();d.a=np($doc.createElement(fc));xq(d,(rq(),tq));d.l[yb]=ud;kq(d.b,d);Bq(d,vd);return d}
function xq(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=wd+bs(d.d,d.b,d.c,d.e,d.a)+xd||m;e.style[yd]=zd;a.style[yd]=zd}
function Bq(b,a){var c;b.e=a;c=b.f[0];c.style[nd]=a;lq(b.b,parseInt(c[md])||0)}
function Cq(){Bq(this,this.e);pj(gq(new fq(),this))}
function Dq(){}
function eq(){}
_=eq.prototype=new bp();_.A=Cq;_.B=Dq;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function gq(b,a){b.a=a;return b}
function fq(){}
_=fq.prototype=new cu();_.tI=34;_.a=null;function kq(c,b){var a,d;c.a=b;b.l.style[Db]=Ad;d=b.f[0];a=b.f[1];nq(d);nq(a);nq(b.h);jp(b.a);a.style[kc]=oc}
function lq(f,b){var a,c,d,e;d=f.a.h;c=parseInt(f.a.a[md])||0;e=parseInt(d[md])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}mq(f.a.f[0],d,f.a.f[1],b,b+e)}
function mq(d,c,a,e,b){d.style[nd]=e+od;c.style[Cb]=e+od;a.style[Cb]=b+od}
function nq(a){a.style[Db]=ec;a.style[Bb]=oc;a.style[jc]=oc}
function iq(){}
_=iq.prototype=new cu();_.tI=0;_.a=null;function rq(){rq=lz;sq=$moduleBase+Cd;tq=es(new cs(),sq,0,0,7,7)}
function pq(){}
_=pq.prototype=new cu();_.tI=0;var sq,tq;function gr(a){a.a=ug(ph,0,7,4,0);return a}
function hr(a,b){kr(a,b,a.b)}
function jr(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function kr(d,e,a){var b,c;if(a<0||a>d.b){throw new Bt()}if(d.b==d.a.length){c=ug(ph,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){xg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){xg(d.a,b,d.a[b-1])}xg(d.a,a,e)}
function lr(c,b){var a;if(b<0||b>=c.b){throw new Bt()}--c.b;for(a=b;a<c.b;++a){xg(c.a,a,c.a[a+1])}xg(c.a,c.b,null)}
function mr(b,c){var a;a=jr(b,c);if(a==-1){throw new ez()}lr(b,a)}
function Fq(){}
_=Fq.prototype=new cu();_.tI=0;_.a=null;_.b=0;function cr(b,a){b.b=a;return b}
function er(){return this.a<this.b.b-1}
function fr(){if(this.a>=this.b.b){throw new ez()}return this.b.a[++this.a]}
function ar(){}
_=ar.prototype=new cu();_.v=er;_.x=fr;_.tI=0;_.a=-1;_.b=null;function pr(a,b){a.b=b;rr(a);return a}
function rr(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function sr(){return this.a<this.b.length}
function tr(){var a;if(this.a>=this.b.length){throw new ez()}a=this.b[this.a];rr(this);return a}
function nr(){}
_=nr.prototype=new cu();_.v=sr;_.x=tr;_.tI=0;_.a=-1;_.b=null;function bs(f,c,e,g,b){var a,d;d=Dd+g+Ed+b+Fd+f+ae+(-c+be)+(-e+od);a=ce+$moduleBase+de+d+ee;return a}
function es(c,e,b,d,f,a){c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function cs(){}
_=cs.prototype=new ol();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function xs(){xs=lz;ys=rs(new qs());zs=ys?(xs(),new gs()):ys}
function As(a,b){a.tabIndex=b}
function gs(){}
_=gs.prototype=new cu();_.ab=As;_.tI=0;var ys,zs;function ks(){ks=lz;xs()}
function ls(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function ms(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function ns(c){var a=$doc.createElement(fc);var b=c.o();b.addEventListener(Ac,c.a,false);b.addEventListener(n,c.b,false);a.addEventListener(kb,c.c,false);a.appendChild(b);return a}
function os(){var a=$doc.createElement(fe);a.type=o;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=ec;return a}
function ps(a,b){a.firstChild.tabIndex=b}
function hs(){}
_=hs.prototype=new gs();_.o=os;_.ab=ps;_.tI=0;function ss(){ss=lz;ks()}
function rs(a){ss();a.a=ls();a.b=ms();a.c=ts();return a}
function ts(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function us(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function vs(){var a=$doc.createElement(fe);a.type=o;a.style.opacity=0;a.style.zIndex=-1;a.style.height=p;a.style.width=p;a.style.overflow=q;a.style.position=ec;return a}
function qs(){}
_=qs.prototype=new hs();_.o=vs;_.tI=0;function Bs(){}
_=Bs.prototype=new mg();_.tI=0;function Ds(a){a.d=Fp(new Dp());a.c=bn(new Fm());a.i=vq(new eq());a.h=pn(new on());a.a=qp(new pp());a.e=yn(new vn());a.b=ul(new ql());a.f=kn(new jn());a.g=km(new jm());lf((ff(),a.f.l),r);cn(a.c,a.b);cn(a.c,a.e);tn(a.h,s,s,-1);tn(a.h,t,t,-1);a.a.l[u]=v!=null?v:m;ep(a.i,a.h);ep(a.i,a.a);a.i.l.style[nd]=w;lf(a.g.l,x);aq(a.d,a.g);aq(a.d,a.i);aq(a.d,a.f);aq(a.d,a.c);jl((to(),wo(null)),a.d);return a}
function Cs(){}
_=Cs.prototype=new Bs();_.tI=0;function gt(){}
_=gt.prototype=new gu();_.tI=36;function nt(c,a){var b;b=new jt();return b}
function jt(){}
_=jt.prototype=new cu();_.tI=0;function kt(){}
_=kt.prototype=new gu();_.tI=39;function vt(){}
_=vt.prototype=new gu();_.tI=40;function yt(){}
_=yt.prototype=new gu();_.tI=41;function Ct(b,a){return b}
function Bt(){}
_=Bt.prototype=new gu();_.tI=42;function Ft(){}
_=Ft.prototype=new gu();_.tI=43;function uu(b,a){if(!(a!=null&&Dg(a.tI,1))){return false}return String(b)==a}
function yu(b,a){return b.substr(a,b.length-a)}
function Au(c){if(c.length==0||c[0]>Ab&&c[c.length-1]>Ab){return c}var a=c.replace(/^(\s*)/,m);var b=a.replace(/\s*$/,m);return b}
function Cu(a){return uu(this,a)}
function Eu(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Fu(){return qu(this)}
_=String.prototype;_.eQ=Cu;_.hC=Fu;_.tI=2;function lu(){lu=lz;mu={};pu={}}
function nu(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function qu(c){lu();var a=z+c;var b=pu[a];if(b!=null){return b}b=mu[a];if(b==null){b=nu(c)}ru();return pu[a]=b}
function ru(){if(ou==256){mu=pu;pu={};ou=0}++ou}
var mu,ou=0,pu;function cv(){}
_=cv.prototype=new gu();_.tI=44;function gv(a,b){var c;while(a.v()){c=a.x();if(b==null?c==null:qe(b,c)){return a}}return null}
function iv(a){throw new cv()}
function jv(b){var a;a=gv(this.w(),b);return !!a}
function fv(){}
_=fv.prototype=new cu();_.m=iv;_.n=jv;_.tI=0;function wx(b){var a;a=rv(new lv(),b);return lx(new ex(),b,a)}
function xx(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Dg(c.tI,15))){return false}e=Eg(c,15);if(Eg(this,15).d!=e.d){return false}for(b=nv(new mv(),rv(new lv(),e).a);yw(b.a);){a=Eg(zw(b.a),13);d=a.t();f=a.u();if(!(d==null?Eg(this,15).c:d!=null&&Dg(d.tI,1)?nw(Eg(this,15),Eg(d,1)):mw(Eg(this,15),d,~~se(d)))){return false}if(!kz(f,d==null?Eg(this,15).b:d!=null&&Dg(d.tI,1)?Eg(this,15).e[z+Eg(d,1)]:jw(Eg(this,15),d,~~se(d)))){return false}}return true}
function yx(){var a,b,c;c=0;for(b=nv(new mv(),rv(new lv(),Eg(this,15)).a);yw(b.a);){a=Eg(zw(b.a),13);c+=a.hC();c=~~c}return c}
function dx(){}
_=dx.prototype=new cu();_.eQ=xx;_.hC=yx;_.tI=0;function ew(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function fw(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=cw(e,c.substring(1));a.m(b)}}}
function iw(b,a){return a==null?b.c:a!=null&&Dg(a.tI,1)?nw(b,Eg(a,1)):mw(b,a,~~se(a))}
function lw(b,a){return a==null?b.b:a!=null&&Dg(a.tI,1)?b.e[z+Eg(a,1)]:jw(b,a,~~se(a))}
function jw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function mw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function nw(b,a){return z+a in b.e}
function rw(b,a,c){return a==null?pw(b,c):a!=null&&Dg(a.tI,1)?qw(b,Eg(a,1),c):ow(b,a,c,~~se(a))}
function ow(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.bb(j);return h}}}else{a=i.a[e]=[]}var c=Dy(new Cy(),g,j);a.push(c);++i.d;return null}
function pw(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function qw(d,a,e){var b,c=d.e;a=z+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function sw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&qe(a,b)}
function kv(){}
_=kv.prototype=new dx();_.r=sw;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Bx(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Dg(b.tI,16))){return false}c=Eg(b,16);if(c.cb()!=this.cb()){return false}for(a=c.w();a.v();){d=a.x();if(!this.n(d)){return false}}return true}
function Cx(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.x();if(c!=null){a+=se(c);a=~~a}}return a}
function zx(){}
_=zx.prototype=new fv();_.eQ=Bx;_.hC=Cx;_.tI=45;function rv(b,a){b.a=a;return b}
function tv(d,c){var a,b,e;if(c!=null&&Dg(c.tI,13)){a=Eg(c,13);b=a.t();if(iw(d.a,b)){e=lw(d.a,b);return qy(a.u(),e)}}return false}
function uv(a){return tv(this,a)}
function vv(){return nv(new mv(),this.a)}
function wv(){return this.a.d}
function lv(){}
_=lv.prototype=new zx();_.n=uv;_.w=vv;_.cb=wv;_.tI=46;_.a=null;function nv(c,b){var a;c.b=b;a=Ex(new Dx());if(c.b.c){ay(a,yv(new xv(),c.b))}fw(c.b,a);ew(c.b,a);c.a=ww(new uw(),a);return c}
function pv(){return yw(this.a)}
function qv(){return Eg(zw(this.a),13)}
function mv(){}
_=mv.prototype=new cu();_.v=pv;_.x=qv;_.tI=0;_.a=null;_.b=null;function tx(b){var a;if(b!=null&&Dg(b.tI,13)){a=Eg(b,13);if(kz(this.t(),a.t())&&kz(this.u(),a.u())){return true}}return false}
function ux(){var a,b;a=0;b=0;if(this.t()!=null){a=se(this.t())}if(this.u()!=null){b=se(this.u())}return a^b}
function rx(){}
_=rx.prototype=new cu();_.eQ=tx;_.hC=ux;_.tI=47;function yv(b,a){b.a=a;return b}
function Av(){return null}
function Bv(){return this.a.b}
function Cv(a){return pw(this.a,a)}
function xv(){}
_=xv.prototype=new rx();_.t=Av;_.u=Bv;_.bb=Cv;_.tI=48;_.a=null;function Ev(c,a,b){c.b=b;c.a=a;return c}
function aw(){return this.a}
function bw(){return this.b.e[z+this.a]}
function cw(b,a){return Ev(new Dv(),a,b)}
function dw(a){return qw(this.b,this.a,a)}
function Dv(){}
_=Dv.prototype=new rx();_.t=aw;_.u=bw;_.bb=dw;_.tI=49;_.a=null;_.b=null;function Dw(a){Fx(this,this.cb(),a);return true}
function Ew(a,b){if(a<0||a>=b){bx(a,b)}}
function Fw(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Dg(e.tI,14))){return false}f=Eg(e,14);if(this.cb()!=f.b){return false}c=ww(new uw(),this);d=ww(new uw(),f);while(c.a<c.b.b){a=zw(c);b=zw(d);if(!(a==null?b==null:qe(a,b))){return false}}return true}
function ax(){var a,b,c;b=1;a=ww(new uw(),this);while(a.a<a.b.b){c=zw(a);b=31*b+(c==null?0:se(c));b=~~b}return b}
function bx(a,b){throw Ct(new Bt(),A+a+B+b)}
function cx(){return ww(new uw(),this)}
function tw(){}
_=tw.prototype=new fv();_.m=Dw;_.eQ=Fw;_.hC=ax;_.w=cx;_.tI=0;function ww(b,a){b.b=a;return b}
function yw(a){return a.a<a.b.b}
function zw(a){if(a.a>=a.b.b){throw new ez()}return cy(a.b,a.a++)}
function Aw(){return this.a<this.b.b}
function Bw(){return zw(this)}
function uw(){}
_=uw.prototype=new cu();_.v=Aw;_.x=Bw;_.tI=0;_.a=0;_.b=null;function lx(b,a,c){b.a=a;b.b=c;return b}
function ox(a){return iw(this.a,a)}
function px(){var a;return a=nv(new mv(),this.b.a),gx(new fx(),a)}
function qx(){return this.b.a.d}
function ex(){}
_=ex.prototype=new zx();_.n=ox;_.w=px;_.cb=qx;_.tI=50;_.a=null;_.b=null;function gx(a,b){a.a=b;return a}
function jx(){return yw(this.a.a)}
function kx(){var a;return a=Eg(zw(this.a.a),13),a.t()}
function fx(){}
_=fx.prototype=new cu();_.v=jx;_.x=kx;_.tI=0;_.a=null;function Ex(a){a.a=ug(qh,0,0,0,0);a.b=0;return a}
function ay(b,a){xg(b.a,b.b++,a);return true}
function Fx(c,a,b){if(a<0||a>c.b){bx(a,c.b)}c.a.splice(a,0,b);++c.b}
function cy(b,a){Ew(a,b.b);return b.a[a]}
function dy(c,b,a){for(;a<c.b;++a){if(kz(b,c.a[a])){return a}}return -1}
function ey(c,a){var b;b=(Ew(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function fy(f,e){var a;a=dy(f,e,0);if(a==-1){return false}ey(f,a);return true}
function gy(a){return xg(this.a,this.b++,a),true}
function hy(a){return dy(this,a,0)!=-1}
function iy(){return this.b}
function Dx(){}
_=Dx.prototype=new tw();_.m=gy;_.n=hy;_.cb=iy;_.tI=51;_.a=null;_.b=0;function oy(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function qy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&qe(a,b)}
function ny(){}
_=ny.prototype=new kv();_.tI=52;function sy(a){a.a=oy(new ny());return a}
function ty(c,a){var b;b=rw(c.a,a,c);return b==null}
function vy(b){var a;return a=rw(this.a,b,this),a==null}
function wy(a){return iw(this.a,a)}
function xy(){var a;return a=nv(new mv(),wx(this.a).b.a),gx(new fx(),a)}
function yy(){return this.a.d}
function ry(){}
_=ry.prototype=new zx();_.m=vy;_.n=wy;_.w=xy;_.cb=yy;_.tI=53;_.a=null;function Dy(b,a,c){b.a=a;b.b=c;return b}
function Fy(){return this.a}
function az(){return this.b}
function cz(b){var a;a=this.b;this.b=b;return a}
function Cy(){}
_=Cy.prototype=new rx();_.t=Fy;_.u=az;_.bb=cz;_.tI=54;_.a=null;_.b=null;function ez(){}
_=ez.prototype=new gu();_.tI=55;function kz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&qe(a,b)}
function et(){!!$stats&&$stats({moduleName:$moduleName,subSystem:C,evtGroup:D,millis:(new Date()).getTime(),type:E,className:F});Ds(new Cs())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{et()}catch(a){b(d)}else{et()}}
function lz(){}
var ph=nt(ab,bb),qh=nt(cb,eb),oh=nt(fb,gb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();