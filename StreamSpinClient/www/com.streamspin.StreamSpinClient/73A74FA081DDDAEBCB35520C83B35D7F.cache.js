(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var m='',Cb=' ',ge="' border='0'>",ce=') no-repeat ',D=', Size: ',Bc='-',qc='0',ld='0.0',ad='0px',w='100px',p='1px',z='250px',A='400px',Ed='4BF90CCB5E6B04D22EF1776E8EBF09F8.cache.png',xd='50%',dd='548CDF11D6FE9011F3447CA200D7FB7F.cache.png',B=':',zd='<\/div>',yd="<div class='vsplitter' style='text-align:center;'>",ee="<img src='",Bb='BODY',vb='DOMMouseScroll',C='Index: ',s='Item one',t='Item two',ib='JavaScriptObject$;',gb='Object;',v='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',eb='Widget;',hb='[Lcom.google.gwt.core.client.',cb='[Lcom.google.gwt.user.client.ui.',fb='[Ljava.lang.',gc='absolute',uc='align',nd='alpha(opacity=0)',Bd='auto',id='background',Cc='blur',gd='border',qb='border-left-width',rc='border-top-width',mc='bottom',x='buhu',ac='button',sc='cellPadding',pc='cellSpacing',kc='center',hd='change',Ab='className',fe="clear.cache.gif' style='",sd='click',bb='com.streamspin.client.StreamSpinClient',wb='contextmenu',Dd='dblclick',hc='div',tb='error',md='filter',n='focus',bc='gwt-Button',jc='gwt-HTML',ic='gwt-Label',wc='gwt-ListBox',Ac='gwt-MenuBar',vd='gwt-TextArea',wd='gwt-VerticalSplitPanel',pd='height',q='hidden',bd='hideFocus',Ec='horizontal',xb='html',he='input',y='keydown',db='keypress',jb='keyup',Db='left',kb='load',lb='losecapture',ed='margin',yb='margin-left',zb='margin-top',zc='menubar',nc='middle',F='moduleStartup',mb='mousedown',nb='mousemove',ob='mouseout',pb='mouseover',rb='mouseup',ub='mousewheel',td='none',od='offsetHeight',ab='onModuleLoadStart',r='online stuff',kd='opacity',xc='option',Fc='outline',Ad='overflow',fd='padding',Fb='position',qd='px',de='px ',be='px; background: url(',ae='px; height: ',Cd='relative',lc='right',yc='role',sb='scroll',l='select',E='startup',cc='submit',ec='table',fc='tbody',tc='td',o='text',ud='textarea',Eb='top',oc='tr',cd='true',dc='type',u='value',Dc='vertical',vc='verticalAlign',jd='white',rd='width',Fd='width: ';var _;function ku(a){return this===(a==null?null:a)}
function lu(){return this.$H||(this.$H=++Be)}
function iu(){}
_=iu.prototype={};_.eQ=ku;_.hC=lu;_.tM=rz;_.tI=1;function se(b,a){return b.tM==rz||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ue(a){return a.tM==rz||a.tI==2?a.hC():a.$H||(a.$H=++Be)}
var Be=0;function hf(){hf=rz;Fe();new De()}
function kf(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function lf(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function nf(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function Ce(){}
_=Ce.prototype=new iu();_.tI=0;function gf(){gf=rz;hf()}
function ff(){}
_=ff.prototype=new Ce();_.tI=0;function Fe(){Fe=rz;gf()}
function af(b){if(b.offsetLeft==null){return 0}var c=0;var a=b.parentNode;if(a){while(a.offsetParent){c-=a.scrollLeft;a=a.parentNode}}while(b){c+=b.offsetLeft;var d=b.offsetParent;if(d&&$wnd.devicePixelRatio){c+=parseInt($doc.defaultView.getComputedStyle(d,m).getPropertyValue(qb))}if(d&&(d.tagName==Bb&&b.style.position==gc)){break}b=d}return c}
function bf(b){if(b.offsetTop==null){return 0}var e=0;var a=b.parentNode;if(a){while(a.offsetParent){e-=a.scrollTop;a=a.parentNode}}while(b){e+=b.offsetTop;var c=b.offsetParent;if(c&&$wnd.devicePixelRatio){e+=parseInt($doc.defaultView.getComputedStyle(c,m).getPropertyValue(rc))}if(c&&(c.tagName==Bb&&b.style.position==gc)){break}b=c}return e}
function cf(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function De(){}
_=De.prototype=new ff();_.tI=0;function pg(){}
_=pg.prototype=new iu();_.tI=0;function wg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function xg(a,f,c,b,e){var d;d=wg(e,b);yg(a,f,c,d);return d}
function yg(b,d,c,a){if(!zg){zg=new sg()}Cg(a,zg);a.tI=d;a.qI=c;return a}
function Ag(a,b,c){if(c!=null){if(a.qI>0&&!Fg(c.tI,a.qI)){throw new mt()}if(a.qI<0&&(c.tM==rz||c.tI==2)){throw new mt()}}return a[b]=c}
function Cg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function sg(){}
_=sg.prototype=new iu();_.tI=0;_.length=0;_.qI=0;var zg=null;function ah(b,a){return b&&!!oh[b][a]}
function Fg(b,a){return b&&oh[b][a]}
function bh(b,a){if(b!=null&&!Fg(b.tI,a)){throw new qt()}return b}
function nh(a){if(a!=null){throw new qt()}return a}
var oh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{2:1},{4:1},{4:1},{4:1},{5:1},{12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,8:1,12:1},{5:1},{6:1,7:1,8:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,12:1},{6:1,7:1,11:1,12:1},{3:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{16:1},{16:1},{13:1},{13:1},{13:1},{16:1},{14:1},{15:1},{16:1},{13:1},{2:1},{10:1}];function gv(){}
_=gv.prototype=new iu();_.tI=3;function zt(){}
_=zt.prototype=new gv();_.tI=4;function mu(){}
_=mu.prototype=new zt();_.tI=5;function ci(a){return a}
function bi(){}
_=bi.prototype=new mu();_.tI=7;function zi(a){a.a=gi(new fi(),a);a.b=ey(new dy());a.d=ki(new ji(),a);a.f=pi(new ni(),a);return a}
function Bi(b){var a;a=ri(b.f);ui(b.f);if(a!=null&&ah(a.tI,3)){ci(new bi(),bh(a,3))}else{}b.c=false;Di(b)}
function Ci(d,c){var a,b,e;e=false;try{d.c=true;d.f.a=d.b.b;Dj(d.a,10000);while(si(d.f)){b=ti(d.f);try{if(b==null){return}if(b!=null&&ah(b.tI,3)){a=bh(b,3);br(a.a,a.a.e)}else{}}finally{e=d.f.b==-1;if(e){return}ui(d.f)}if((new Date()).getTime()-c>=100){return}}}finally{if(!e){Aj(d.a);d.c=false;Di(d)}}}
function Di(a){if(a.b.b!=0&&!a.e&&!a.c){a.e=true;Dj(a.d,1)}}
function Fi(b,a){gy(b.b,a);Di(b)}
function ei(){}
_=ei.prototype=new iu();_.tI=0;_.c=false;_.e=false;function Bj(){Bj=rz;ck=ey(new dy());gk(new wj())}
function Aj(a){if(a.b){$wnd.clearInterval(a.c)}else{$wnd.clearTimeout(a.c)}ly(ck,a)}
function Cj(a){if(!a.b){ly(ck,a)}a.F()}
function Dj(b,a){if(a<=0){throw new Bt()}Aj(b);b.b=false;b.c=ak(b,a);gy(ck,b)}
function ak(b,a){return $wnd.setTimeout(function(){b.s()},a)}
function bk(){Cj(this)}
function vj(){}
_=vj.prototype=new iu();_.s=bk;_.tI=8;_.b=false;_.c=0;var ck;function hi(){hi=rz;Bj()}
function gi(b,a){hi();b.a=a;return b}
function ii(){if(!this.a.c){return}Bi(this.a)}
function fi(){}
_=fi.prototype=new vj();_.F=ii;_.tI=9;_.a=null;function li(){li=rz;Bj()}
function ki(b,a){li();b.a=a;return b}
function mi(){this.a.e=false;Ci(this.a,(new Date()).getTime())}
function ji(){}
_=ji.prototype=new vj();_.F=mi;_.tI=10;_.a=null;function pi(b,a){b.d=a;return b}
function ri(a){return iy(a.d.b,a.b)}
function si(a){return a.c<a.a}
function ti(b){var a;b.b=b.c;a=iy(b.d.b,b.c++);if(b.c>=b.a){b.c=0}return a}
function ui(a){ky(a.d.b,a.b);--a.a;if(a.b<=a.c){if(--a.c<0){a.c=0}}a.b=-1}
function wi(){return this.c<this.a}
function xi(){return ti(this)}
function ni(){}
_=ni.prototype=new iu();_.v=wi;_.x=xi;_.tI=0;_.a=0;_.b=-1;_.c=0;_.d=null;function ej(b,a,c){var d;if(a==mj){if(cl(b)==8192){mj=null}}d=dj;dj=b;try{c.y(b)}finally{dj=d}}
function lj(a){if(!!mj&&a==mj){mj=null}el();yk(a)}
function nj(a){mj=a;el();Bk=a}
function pj(a,b){el();Ak(a,b)}
var dj=null,mj=null;function rj(){rj=rz;tj=zi(new ei())}
function sj(a){rj();if(!a){throw new fu()}Fi(tj,a)}
var tj;function yj(){while((Bj(),ck).b>0){Aj(bh(iy(ck,0),4))}}
function zj(){return null}
function wj(){}
_=wj.prototype=new iu();_.C=yj;_.D=zj;_.tI=11;function gk(a){lk();if(!hk){hk=ey(new dy())}gy(hk,a)}
function ik(){var a,b;if(hk){for(b=Cw(new Aw(),hk);b.a<b.b.b;){a=bh(Fw(b),5);a.C()}}}
function jk(){var a,b,c,d;d=null;if(hk){for(b=Cw(new Aw(),hk);b.a<b.b.b;){a=bh(Fw(b),5);c=a.D();d=c}}return d}
function lk(){if(!kk){kk=true;kl()}}
var hk=null,kk=false;function cl(a){switch(a.type){case Cc:return 4096;case hd:return 1024;case sd:return 1;case Dd:return 2;case n:return 2048;case y:return 128;case db:return 256;case jb:return 512;case kb:return 32768;case lb:return 8192;case mb:return 4;case nb:return 64;case ob:return 32;case pb:return 16;case rb:return 8;case sb:return 16384;case tb:return 65536;case ub:return 131072;case vb:return 131072;case wb:return 262144;}}
function el(){if(!gl){xk();gl=true}}
function hl(a){return a!=null&&ah(a.tI,6)&&!(a!=null&&(a.tM!=rz&&a.tI!=2))}
var gl=false;function xk(){Dk=function(b){if(Ck(b)){var a=Bk;if(a&&a.__listener){if(hl(a.__listener)){ej(b,a,a.__listener);b.stopPropagation()}}}};Ck=function(a){return true};Ek=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(hl(c)){ej(b,a,c)}}};$wnd.addEventListener(sd,Dk,true);$wnd.addEventListener(Dd,Dk,true);$wnd.addEventListener(mb,Dk,true);$wnd.addEventListener(rb,Dk,true);$wnd.addEventListener(nb,Dk,true);$wnd.addEventListener(pb,Dk,true);$wnd.addEventListener(ob,Dk,true);$wnd.addEventListener(ub,Dk,true);$wnd.addEventListener(y,Ck,true);$wnd.addEventListener(jb,Ck,true);$wnd.addEventListener(db,Ck,true)}
function yk(a){if(a===Bk){Bk=null}}
function Ak(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Ek:null;if(b&2)c.ondblclick=a&2?Ek:null;if(b&4)c.onmousedown=a&4?Ek:null;if(b&8)c.onmouseup=a&8?Ek:null;if(b&16)c.onmouseover=a&16?Ek:null;if(b&32)c.onmouseout=a&32?Ek:null;if(b&64)c.onmousemove=a&64?Ek:null;if(b&128)c.onkeydown=a&128?Ek:null;if(b&256)c.onkeypress=a&256?Ek:null;if(b&512)c.onkeyup=a&512?Ek:null;if(b&1024)c.onchange=a&1024?Ek:null;if(b&2048)c.onfocus=a&2048?Ek:null;if(b&4096)c.onblur=a&4096?Ek:null;if(b&8192)c.onlosecapture=a&8192?Ek:null;if(b&16384)c.onscroll=a&16384?Ek:null;if(b&32768)c.onload=a&32768?Ek:null;if(b&65536)c.onerror=a&65536?Ek:null;if(b&131072)c.onmousewheel=a&131072?Ek:null;if(b&262144)c.oncontextmenu=a&262144?Ek:null}
var Bk=null,Ck=null,Dk=null,Ek=null;function rk(a){if($wnd.devicePixelRatio){return a.clientX||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(xb)[0],m);return a.pageX-$doc.body.scrollLeft-parseInt(b.getPropertyValue(yb))-parseInt(b.getPropertyValue(qb))||0}}
function sk(a){if($wnd.devicePixelRatio){return a.clientY||0}else{var b=document.defaultView.getComputedStyle($doc.getElementsByTagName(xb)[0],m);return a.pageY-$doc.body.scrollTop-parseInt(b.getPropertyValue(zb))-parseInt(b.getPropertyValue(rc))||0}}
function kl(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=jk()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ik()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function Cp(b,a){cq(b.l,a,true)}
function bq(a){var b,c;b=a[Ab]==null?null:String(a[Ab]);c=b.indexOf(ev(32));if(c>=0){return b.substr(0,c-0)}return b}
function cq(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new mu()}j=av(j);if(j.length==0){throw new Bt()}i=c[Ab]==null?null:String(c[Ab]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Cb}c[Ab]=i+j}}else{if(e!=-1){b=av(i.substr(0,e-0));d=av(Eu(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Cb+d}c[Ab]=h}}}
function Bp(){}
_=Bp.prototype=new iu();_.tI=12;_.l=null;function Br(a){if(a.j){throw new Et()}a.j=true;a.l.__listener=a;a.p();a.A()}
function Cr(a){if(!a.j){throw new Et()}try{a.B()}finally{a.q();a.l.__listener=null;a.j=false}}
function Dr(a){if(a.k){a.k.E(a)}else if(a.k){throw new Et()}}
function Er(c,b){var a;a=c.k;if(!b){if(!!a&&a.j){c.z()}c.k=null}else{if(a){throw new Et()}c.k=b;if(b.j){Br(c)}}}
function Fr(){}
function as(){}
function bs(a){}
function cs(){Cr(this)}
function ds(){}
function es(){}
function er(){}
_=er.prototype=new Bp();_.p=Fr;_.q=as;_.y=bs;_.z=cs;_.A=ds;_.B=es;_.tI=13;_.j=false;_.k=null;function jo(){var a,b;for(b=this.w();b.v();){a=bh(b.x(),7);Br(a)}}
function ko(){var a,b;for(b=this.w();b.v();){a=bh(b.x(),7);a.z()}}
function lo(){}
function mo(){}
function ho(){}
_=ho.prototype=new er();_.p=jo;_.q=ko;_.A=lo;_.B=mo;_.tI=14;function Fl(c,a,b){Dr(a);nr(c.f,a);b.appendChild(a.l);Er(a,c)}
function bm(b,c){var a;if(c.k!=b){return false}Er(c,null);a=c.l;lf((hf(),a)).removeChild(a);sr(b.f,c);return true}
function cm(){return ir(new gr(),this.f)}
function dm(a){return bm(this,a)}
function Dl(){}
_=Dl.prototype=new ho();_.w=cm;_.E=dm;_.tI=15;function ml(a,b){Fl(a,b,a.l)}
function ol(b,c){var a;a=bm(b,c);if(a){pl(c.l)}return a}
function pl(a){a.style[Db]=m;a.style[Eb]=m;a.style[Fb]=m}
function ql(a){return ol(this,a)}
function ll(){}
_=ll.prototype=new Dl();_.E=ql;_.tI=16;function rl(){}
_=rl.prototype=new iu();_.tI=0;function jm(){jm=rz;km=(Ds(),Fs)}
function im(b,a){jm();b.l=a;km.ab(b.l,0);return b}
function lm(a){cl(a)}
function hm(){}
_=hm.prototype=new er();_.y=lm;_.tI=17;var km;function wl(){wl=rz;jm()}
function vl(b,a){wl();b.l=a;km.ab(b.l,0);return b}
function ul(){}
_=ul.prototype=new hm();_.tI=18;function yl(){yl=rz;wl()}
function xl(a){yl();vl(a,$doc.createElement((hf(),ac)));zl(a.l);a.l[Ab]=bc;return a}
function zl(b){if(b.type==cc){try{b.setAttribute(dc,ac)}catch(a){}}}
function tl(){}
_=tl.prototype=new ul();_.tI=19;function Bl(a){a.f=mr(new fr());a.e=$doc.createElement((hf(),ec));a.d=$doc.createElement(fc);a.e.appendChild(a.d);a.l=a.e;return a}
function Al(){}
_=Al.prototype=new Dl();_.tI=20;_.d=null;_.e=null;function fm(){fm=rz;gm=(Ds(),Es)}
var gm;function nn(a){a.l=$doc.createElement((hf(),hc));a.l[Ab]=ic;return a}
function qn(a){cl(a)}
function mn(){}
_=mn.prototype=new er();_.y=qn;_.tI=21;function nm(a){a.l=$doc.createElement((hf(),hc));a.l[Ab]=jc;return a}
function mm(){}
_=mm.prototype=new mn();_.tI=22;function wm(){wm=rz;um(new tm(),kc);ym=um(new tm(),Db);um(new tm(),lc);xm=ym}
var xm,ym;function um(b,a){b.a=a;return b}
function tm(){}
_=tm.prototype=new iu();_.tI=0;_.a=null;function Em(){Em=rz;Cm(new Bm(),mc);Cm(new Bm(),nc);Fm=Cm(new Bm(),Eb)}
var Fm;function Cm(a,b){a.a=b;return a}
function Bm(){}
_=Bm.prototype=new iu();_.tI=0;_.a=null;function en(a){Bl(a);a.a=(wm(),xm);a.c=(Em(),Fm);a.b=$doc.createElement((hf(),oc));a.d.appendChild(a.b);a.e[pc]=qc;a.e[sc]=qc;return a}
function fn(c,d){var b,a;b=(a=$doc.createElement((hf(),tc)),(a[uc]=c.a.a,undefined),(a.style[vc]=c.c.a,undefined),a);c.b.appendChild(b);Dr(d);nr(c.f,d);b.appendChild(d.l);Er(d,c)}
function jn(c){var a,b;b=lf((hf(),c.l));a=bm(this,c);if(a){this.b.removeChild(b)}return a}
function cn(){}
_=cn.prototype=new Al();_.E=jn;_.tI=23;_.b=null;function vn(){vn=rz;jm()}
function sn(a){vn();im(a,kf((hf(),false)));a.l[Ab]=wc;return a}
function wn(f,c,g,b){var a,d,e;e=f.l;d=$doc.createElement((hf(),xc));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function yn(a){if(cl(a)==1024){}else{cl(a)}}
function rn(){}
_=rn.prototype=new hm();_.y=yn;_.tI=24;function Cn(a){ey(new dy());a.b=ey(new dy());Fn(a,false,(co(),new ao()));return a}
function En(d,a){var b,c;for(c=Cw(new Aw(),d.b);c.a<c.b.b;){b=nh(Fw(c));if(cf((hf(),null.eb()),a)){return b}}return null}
function Fn(c,e){var a,b,d;b=$doc.createElement((hf(),ec));c.a=$doc.createElement(fc);b.appendChild(c.a);if(!e){d=$doc.createElement(oc);c.a.appendChild(d)}a=ts((fm(),gm));a.appendChild(b);c.l=a;c.l.setAttribute(yc,zc);pj(c.l,2225|(c.l.__eventBits||0));c.l[Ab]=Ac;if(e){Cp(c,bq(c.l)+Bc+Dc)}else{Cp(c,bq(c.l)+Bc+Ec)}c.l.style[Fc]=ad;c.l.setAttribute(bd,cd)}
function fo(a){var b;En(this,a.target);switch(cl(a)){case 1:{As((fm(),this.l));break}{break}case 2048:{nh(iy(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{nh(iy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{nh(iy(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:nh(iy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:nh(iy(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{nh(iy(this.b,0))}}break}}}
function go(){Cr(this)}
function zn(){}
_=zn.prototype=new er();_.y=fo;_.z=go;_.tI=25;_.a=null;function co(){co=rz;eo=$moduleBase+dd;ks(new is(),eo,0,0,5,9)}
function ao(){}
_=ao.prototype=new iu();_.tI=0;var eo;function xo(){xo=rz;Bo=uy(new ty());Co=yy(new xy())}
function wo(b,a){xo();b.f=mr(new fr());b.l=a;Br(b);return b}
function yo(){var b,a;xo();var c,d;for(d=(b=tv(new sv(),Cx(Co.a).b.a),mx(new lx(),b));Ew(d.a.a);){c=bh((a=bh(Fw(d.a.a),13),a.t()),7);if(c.j){c.z()}}}
function Ao(a){xo();var b;b=bh(rw(Bo,a),8);if(b){return b}if(Bo.d==0){gk(new po())}b=uo(new to());xw(Bo,a,b);zy(Co,b);return b}
function oo(){}
_=oo.prototype=new ll();_.tI=26;var Bo,Co;function ro(){yo()}
function so(){return null}
function po(){}
_=po.prototype=new iu();_.C=ro;_.D=so;_.tI=27;function vo(){vo=rz;xo()}
function uo(a){vo();wo(a,$doc.body);return a}
function to(){}
_=to.prototype=new oo();_.tI=28;function hp(e,b,c,a,d){e.i=xg(sh,0,7,2,0);e.f=xg(rh,0,-1,2,0);e.l=b;e.h=c;Ag(e.f,0,a);Ag(e.f,1,d);pj(e.l,8316|(e.l.__eventBits||0));if(!op){op=$doc.createElement((hf(),hc));op.style[Fb]=gc;op.style[Eb]=ad;op.style[Db]=ad;op.style[ed]=ad;op.style[fd]=ad;op.style[gd]=ad;op.style[id]=jd;op.style[kd]=ld;op.style[md]=nd}return e}
function ip(a,b){if(!a.i[0]){lp(a,0,b)}else if(!a.i[1]){lp(a,1,b)}else{throw new Et()}}
function lp(c,a,d){var b;b=c.i[a];if(b==d){return}if(d){Dr(d)}if(b){Er(b,null);c.f[a].removeChild(b.l)}Ag(c.i,a,d);if(d){c.f[a].appendChild(d.l);Er(d,c)}}
function np(a){a.style[Fb]=gc;a.style[Db]=ad;a.style[lc]=ad;a.style[Eb]=ad;a.style[mc]=ad}
function pp(){return vr(new tr(),this.i)}
function qp(c){var d,a,b;switch(cl(c)){case 4:{d=c.target;if(cf((hf(),this.h),d)){this.g=true;this.c=(rk(c)-af(this.l),sk(c)-bf(this.l));this.d=parseInt(this.f[0][od])||0;a=((xo(),$doc.body).scrollHeight||0)-1;b=($doc.body.scrollWidth||0)-1;op.style[pd]=a+qd;op.style[rd]=b+qd;$doc.body.appendChild(op);nj(this.l);c.preventDefault()}break}case 8:{if(bh(this,11).g){bh(this,11).g=false;(xo(),$doc.body).removeChild(op);lj(this.l)}break}case 64:{if(bh(this,11).g){rq(this.b,this.d+(rk(c)-af((hf(),this.l)),sk(c)-bf(this.l))-this.c);c.preventDefault()}break}case 8192:{if(bh(this,11).g){bh(this,11).g=false;(xo(),$doc.body).removeChild(op)}break}}}
function rp(a){a.style[fd]=qc;a.style[ed]=qc;a.style[gd]=td;return a}
function sp(a){if(this.i[0]==a){lp(this,0,null);return true}else if(this.i[1]==a){lp(this,1,null);return true}return false}
function fp(){}
_=fp.prototype=new ho();_.w=pp;_.y=qp;_.E=sp;_.tI=29;_.g=false;_.h=null;var op=null;function yp(){yp=rz;jm()}
function xp(b,a){yp();b.l=a;km.ab(b.l,0);return b}
function Ap(a){var b;b=cl(a);if((b&896)!=0){cl(a)}else if(b==1024){}else{cl(a)}}
function wp(){}
_=wp.prototype=new hm();_.y=Ap;_.tI=30;function vp(){vp=rz;yp()}
function up(a){vp();xp(a,$doc.createElement((hf(),ud)));a.l[Ab]=vd;return a}
function tp(){}
_=tp.prototype=new wp();_.tI=31;function fq(a){Bl(a);a.a=(wm(),xm);a.b=(Em(),Fm);a.e[pc]=qc;a.e[sc]=qc;return a}
function gq(c,e){var b,d,a;d=$doc.createElement((hf(),oc));b=(a=$doc.createElement(tc),(a[uc]=c.a.a,undefined),(a.style[vc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);Dr(e);nr(c.f,e);b.appendChild(e.l);Er(e,c)}
function jq(c){var a,b;b=lf((hf(),c.l));a=bm(this,c);if(a){this.d.removeChild(lf(b))}return a}
function dq(){}
_=dq.prototype=new Al();_.E=jq;_.tI=32;function Bq(a){Cq(a,(xq(),new vq()));return a}
function Cq(d){hp(d,$doc.createElement((hf(),hc)),$doc.createElement(hc),rp($doc.createElement(hc)),rp($doc.createElement(hc)));d.b=new oq();d.a=rp($doc.createElement(hc));Dq(d,(xq(),zq));d.l[Ab]=wd;qq(d.b,d);br(d,xd);return d}
function Dq(c,d){var a,b,e;e=c.f[0];a=c.f[1];b=c.h;c.l.appendChild(c.a);c.a.appendChild(e);c.a.appendChild(b);c.a.appendChild(a);b.innerHTML=yd+hs(d.d,d.b,d.c,d.e,d.a)+zd||m;e.style[Ad]=Bd;a.style[Ad]=Bd}
function br(b,a){var c;b.e=a;c=b.f[0];c.style[pd]=a;rq(b.b,parseInt(c[od])||0)}
function cr(){br(this,this.e);sj(mq(new lq(),this))}
function dr(){}
function kq(){}
_=kq.prototype=new fp();_.A=cr;_.B=dr;_.tI=33;_.a=null;_.c=0;_.d=0;_.e=null;function mq(b,a){b.a=a;return b}
function lq(){}
_=lq.prototype=new iu();_.tI=34;_.a=null;function qq(c,b){var a,d;c.a=b;b.l.style[Fb]=Cd;d=b.f[0];a=b.f[1];tq(d);tq(a);tq(b.h);np(b.a);a.style[mc]=qc}
function rq(f,b){var a,c,d,e;d=f.a.h;c=parseInt(f.a.a[od])||0;e=parseInt(d[od])||0;if(c<e){return}a=c-b-e;if(b<0){b=0;a=c-e}else if(a<0){b=c-e;a=0}sq(f.a.f[0],d,f.a.f[1],b,b+e)}
function sq(d,c,a,e,b){d.style[pd]=e+qd;c.style[Eb]=e+qd;a.style[Eb]=b+qd}
function tq(a){a.style[Fb]=gc;a.style[Db]=qc;a.style[lc]=qc}
function oq(){}
_=oq.prototype=new iu();_.tI=0;_.a=null;function xq(){xq=rz;yq=$moduleBase+Ed;zq=ks(new is(),yq,0,0,7,7)}
function vq(){}
_=vq.prototype=new iu();_.tI=0;var yq,zq;function mr(a){a.a=xg(sh,0,7,4,0);return a}
function nr(a,b){qr(a,b,a.b)}
function pr(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function qr(d,e,a){var b,c;if(a<0||a>d.b){throw new bu()}if(d.b==d.a.length){c=xg(sh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){Ag(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){Ag(d.a,b,d.a[b-1])}Ag(d.a,a,e)}
function rr(c,b){var a;if(b<0||b>=c.b){throw new bu()}--c.b;for(a=b;a<c.b;++a){Ag(c.a,a,c.a[a+1])}Ag(c.a,c.b,null)}
function sr(b,c){var a;a=pr(b,c);if(a==-1){throw new kz()}rr(b,a)}
function fr(){}
_=fr.prototype=new iu();_.tI=0;_.a=null;_.b=0;function ir(b,a){b.b=a;return b}
function kr(){return this.a<this.b.b-1}
function lr(){if(this.a>=this.b.b){throw new kz()}return this.b.a[++this.a]}
function gr(){}
_=gr.prototype=new iu();_.v=kr;_.x=lr;_.tI=0;_.a=-1;_.b=null;function vr(a,b){a.b=b;xr(a);return a}
function xr(a){++a.a;while(a.a<a.b.length){if(a.b[a.a]){return}++a.a}}
function yr(){return this.a<this.b.length}
function zr(){var a;if(this.a>=this.b.length){throw new kz()}a=this.b[this.a];xr(this);return a}
function tr(){}
_=tr.prototype=new iu();_.v=yr;_.x=zr;_.tI=0;_.a=-1;_.b=null;function hs(f,c,e,g,b){var a,d;d=Fd+g+ae+b+be+f+ce+(-c+de)+(-e+qd);a=ee+$moduleBase+fe+d+ge;return a}
function ks(c,e,b,d,f,a){c.d=e;c.b=b;c.c=d;c.e=f;c.a=a;return c}
function is(){}
_=is.prototype=new rl();_.tI=0;_.a=0;_.b=0;_.c=0;_.d=null;_.e=0;function Ds(){Ds=rz;Es=xs(new ws());Fs=Es?(Ds(),new ms()):Es}
function at(a,b){a.tabIndex=b}
function ms(){}
_=ms.prototype=new iu();_.ab=at;_.tI=0;var Es,Fs;function qs(){qs=rz;Ds()}
function rs(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function ss(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function ts(c){var a=$doc.createElement(hc);var b=c.o();b.addEventListener(Cc,c.a,false);b.addEventListener(n,c.b,false);a.addEventListener(mb,c.c,false);a.appendChild(b);return a}
function us(){var a=$doc.createElement(he);a.type=o;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=gc;return a}
function vs(a,b){a.firstChild.tabIndex=b}
function ns(){}
_=ns.prototype=new ms();_.o=us;_.ab=vs;_.tI=0;function ys(){ys=rz;qs()}
function xs(a){ys();a.a=rs();a.b=ss();a.c=zs();return a}
function zs(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function As(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function Bs(){var a=$doc.createElement(he);a.type=o;a.style.opacity=0;a.style.zIndex=-1;a.style.height=p;a.style.width=p;a.style.overflow=q;a.style.position=gc;return a}
function ws(){}
_=ws.prototype=new ns();_.o=Bs;_.tI=0;function bt(){}
_=bt.prototype=new pg();_.tI=0;function dt(a){a.d=fq(new dq());a.c=en(new cn());a.i=Bq(new kq());a.h=sn(new rn());a.a=up(new tp());a.e=Cn(new zn());a.b=xl(new tl());a.f=nn(new mn());a.g=nm(new mm());nf((hf(),a.f.l),r);fn(a.c,a.b);fn(a.c,a.e);wn(a.h,s,s,-1);wn(a.h,t,t,-1);a.h.l.size=6;a.a.l[u]=v!=null?v:m;ip(a.i,a.h);ip(a.i,a.a);a.i.l.style[pd]=w;nf(a.g.l,x);gq(a.d,a.g);gq(a.d,a.i);gq(a.d,a.f);gq(a.d,a.c);a.d.l.style[pd]=z;a.d.l.style[rd]=A;ml((xo(),Ao(null)),a.d);return a}
function ct(){}
_=ct.prototype=new bt();_.tI=0;function mt(){}
_=mt.prototype=new mu();_.tI=36;function tt(c,a){var b;b=new pt();return b}
function pt(){}
_=pt.prototype=new iu();_.tI=0;function qt(){}
_=qt.prototype=new mu();_.tI=39;function Bt(){}
_=Bt.prototype=new mu();_.tI=40;function Et(){}
_=Et.prototype=new mu();_.tI=41;function cu(b,a){return b}
function bu(){}
_=bu.prototype=new mu();_.tI=42;function fu(){}
_=fu.prototype=new mu();_.tI=43;function Au(b,a){if(!(a!=null&&ah(a.tI,1))){return false}return String(b)==a}
function Eu(b,a){return b.substr(a,b.length-a)}
function av(c){if(c.length==0||c[0]>Cb&&c[c.length-1]>Cb){return c}var a=c.replace(/^(\s*)/,m);var b=a.replace(/\s*$/,m);return b}
function cv(a){return Au(this,a)}
function ev(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function fv(){return wu(this)}
_=String.prototype;_.eQ=cv;_.hC=fv;_.tI=2;function ru(){ru=rz;su={};vu={}}
function tu(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function wu(c){ru();var a=B+c;var b=vu[a];if(b!=null){return b}b=su[a];if(b==null){b=tu(c)}xu();return vu[a]=b}
function xu(){if(uu==256){su=vu;vu={};uu=0}++uu}
var su,uu=0,vu;function iv(){}
_=iv.prototype=new mu();_.tI=44;function mv(a,b){var c;while(a.v()){c=a.x();if(b==null?c==null:se(b,c)){return a}}return null}
function ov(a){throw new iv()}
function pv(b){var a;a=mv(this.w(),b);return !!a}
function lv(){}
_=lv.prototype=new iu();_.m=ov;_.n=pv;_.tI=0;function Cx(b){var a;a=xv(new rv(),b);return rx(new kx(),b,a)}
function Dx(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&ah(c.tI,15))){return false}e=bh(c,15);if(bh(this,15).d!=e.d){return false}for(b=tv(new sv(),xv(new rv(),e).a);Ew(b.a);){a=bh(Fw(b.a),13);d=a.t();f=a.u();if(!(d==null?bh(this,15).c:d!=null&&ah(d.tI,1)?tw(bh(this,15),bh(d,1)):sw(bh(this,15),d,~~ue(d)))){return false}if(!qz(f,d==null?bh(this,15).b:d!=null&&ah(d.tI,1)?bh(this,15).e[B+bh(d,1)]:pw(bh(this,15),d,~~ue(d)))){return false}}return true}
function Ex(){var a,b,c;c=0;for(b=tv(new sv(),xv(new rv(),bh(this,15)).a);Ew(b.a);){a=bh(Fw(b.a),13);c+=a.hC();c=~~c}return c}
function jx(){}
_=jx.prototype=new iu();_.eQ=Dx;_.hC=Ex;_.tI=0;function kw(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function lw(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=iw(e,c.substring(1));a.m(b)}}}
function ow(b,a){return a==null?b.c:a!=null&&ah(a.tI,1)?tw(b,bh(a,1)):sw(b,a,~~ue(a))}
function rw(b,a){return a==null?b.b:a!=null&&ah(a.tI,1)?b.e[B+bh(a,1)]:pw(b,a,~~ue(a))}
function pw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return c.u()}}}return null}
function sw(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(h.r(g,d)){return true}}}return false}
function tw(b,a){return B+a in b.e}
function xw(b,a,c){return a==null?vw(b,c):a!=null&&ah(a.tI,1)?ww(b,bh(a,1),c):uw(b,a,c,~~ue(a))}
function uw(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.t();if(i.r(g,d)){var h=c.u();c.bb(j);return h}}}else{a=i.a[e]=[]}var c=dz(new cz(),g,j);a.push(c);++i.d;return null}
function vw(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ww(d,a,e){var b,c=d.e;a=B+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function yw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&se(a,b)}
function qv(){}
_=qv.prototype=new jx();_.r=yw;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function by(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&ah(b.tI,16))){return false}c=bh(b,16);if(c.cb()!=this.cb()){return false}for(a=c.w();a.v();){d=a.x();if(!this.n(d)){return false}}return true}
function cy(){var a,b,c;a=0;for(b=this.w();b.v();){c=b.x();if(c!=null){a+=ue(c);a=~~a}}return a}
function Fx(){}
_=Fx.prototype=new lv();_.eQ=by;_.hC=cy;_.tI=45;function xv(b,a){b.a=a;return b}
function zv(d,c){var a,b,e;if(c!=null&&ah(c.tI,13)){a=bh(c,13);b=a.t();if(ow(d.a,b)){e=rw(d.a,b);return wy(a.u(),e)}}return false}
function Av(a){return zv(this,a)}
function Bv(){return tv(new sv(),this.a)}
function Cv(){return this.a.d}
function rv(){}
_=rv.prototype=new Fx();_.n=Av;_.w=Bv;_.cb=Cv;_.tI=46;_.a=null;function tv(c,b){var a;c.b=b;a=ey(new dy());if(c.b.c){gy(a,Ev(new Dv(),c.b))}lw(c.b,a);kw(c.b,a);c.a=Cw(new Aw(),a);return c}
function vv(){return Ew(this.a)}
function wv(){return bh(Fw(this.a),13)}
function sv(){}
_=sv.prototype=new iu();_.v=vv;_.x=wv;_.tI=0;_.a=null;_.b=null;function zx(b){var a;if(b!=null&&ah(b.tI,13)){a=bh(b,13);if(qz(this.t(),a.t())&&qz(this.u(),a.u())){return true}}return false}
function Ax(){var a,b;a=0;b=0;if(this.t()!=null){a=ue(this.t())}if(this.u()!=null){b=ue(this.u())}return a^b}
function xx(){}
_=xx.prototype=new iu();_.eQ=zx;_.hC=Ax;_.tI=47;function Ev(b,a){b.a=a;return b}
function aw(){return null}
function bw(){return this.a.b}
function cw(a){return vw(this.a,a)}
function Dv(){}
_=Dv.prototype=new xx();_.t=aw;_.u=bw;_.bb=cw;_.tI=48;_.a=null;function ew(c,a,b){c.b=b;c.a=a;return c}
function gw(){return this.a}
function hw(){return this.b.e[B+this.a]}
function iw(b,a){return ew(new dw(),a,b)}
function jw(a){return ww(this.b,this.a,a)}
function dw(){}
_=dw.prototype=new xx();_.t=gw;_.u=hw;_.bb=jw;_.tI=49;_.a=null;_.b=null;function dx(a){fy(this,this.cb(),a);return true}
function ex(a,b){if(a<0||a>=b){hx(a,b)}}
function fx(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&ah(e.tI,14))){return false}f=bh(e,14);if(this.cb()!=f.b){return false}c=Cw(new Aw(),this);d=Cw(new Aw(),f);while(c.a<c.b.b){a=Fw(c);b=Fw(d);if(!(a==null?b==null:se(a,b))){return false}}return true}
function gx(){var a,b,c;b=1;a=Cw(new Aw(),this);while(a.a<a.b.b){c=Fw(a);b=31*b+(c==null?0:ue(c));b=~~b}return b}
function hx(a,b){throw cu(new bu(),C+a+D+b)}
function ix(){return Cw(new Aw(),this)}
function zw(){}
_=zw.prototype=new lv();_.m=dx;_.eQ=fx;_.hC=gx;_.w=ix;_.tI=0;function Cw(b,a){b.b=a;return b}
function Ew(a){return a.a<a.b.b}
function Fw(a){if(a.a>=a.b.b){throw new kz()}return iy(a.b,a.a++)}
function ax(){return this.a<this.b.b}
function bx(){return Fw(this)}
function Aw(){}
_=Aw.prototype=new iu();_.v=ax;_.x=bx;_.tI=0;_.a=0;_.b=null;function rx(b,a,c){b.a=a;b.b=c;return b}
function ux(a){return ow(this.a,a)}
function vx(){var a;return a=tv(new sv(),this.b.a),mx(new lx(),a)}
function wx(){return this.b.a.d}
function kx(){}
_=kx.prototype=new Fx();_.n=ux;_.w=vx;_.cb=wx;_.tI=50;_.a=null;_.b=null;function mx(a,b){a.a=b;return a}
function px(){return Ew(this.a.a)}
function qx(){var a;return a=bh(Fw(this.a.a),13),a.t()}
function lx(){}
_=lx.prototype=new iu();_.v=px;_.x=qx;_.tI=0;_.a=null;function ey(a){a.a=xg(th,0,0,0,0);a.b=0;return a}
function gy(b,a){Ag(b.a,b.b++,a);return true}
function fy(c,a,b){if(a<0||a>c.b){hx(a,c.b)}c.a.splice(a,0,b);++c.b}
function iy(b,a){ex(a,b.b);return b.a[a]}
function jy(c,b,a){for(;a<c.b;++a){if(qz(b,c.a[a])){return a}}return -1}
function ky(c,a){var b;b=(ex(a,c.b),c.a[a]);c.a.splice(a,1);--c.b;return b}
function ly(f,e){var a;a=jy(f,e,0);if(a==-1){return false}ky(f,a);return true}
function my(a){return Ag(this.a,this.b++,a),true}
function ny(a){return jy(this,a,0)!=-1}
function oy(){return this.b}
function dy(){}
_=dy.prototype=new zw();_.m=my;_.n=ny;_.cb=oy;_.tI=51;_.a=null;_.b=0;function uy(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function wy(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&se(a,b)}
function ty(){}
_=ty.prototype=new qv();_.tI=52;function yy(a){a.a=uy(new ty());return a}
function zy(c,a){var b;b=xw(c.a,a,c);return b==null}
function By(b){var a;return a=xw(this.a,b,this),a==null}
function Cy(a){return ow(this.a,a)}
function Dy(){var a;return a=tv(new sv(),Cx(this.a).b.a),mx(new lx(),a)}
function Ey(){return this.a.d}
function xy(){}
_=xy.prototype=new Fx();_.m=By;_.n=Cy;_.w=Dy;_.cb=Ey;_.tI=53;_.a=null;function dz(b,a,c){b.a=a;b.b=c;return b}
function fz(){return this.a}
function gz(){return this.b}
function iz(b){var a;a=this.b;this.b=b;return a}
function cz(){}
_=cz.prototype=new xx();_.t=fz;_.u=gz;_.bb=iz;_.tI=54;_.a=null;_.b=null;function kz(){}
_=kz.prototype=new mu();_.tI=55;function qz(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&se(a,b)}
function kt(){!!$stats&&$stats({moduleName:$moduleName,subSystem:E,evtGroup:F,millis:(new Date()).getTime(),type:ab,className:bb});dt(new ct())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{kt()}catch(a){b(d)}else{kt()}}
function rz(){}
var sh=tt(cb,eb),th=tt(fb,gb),rh=tt(hb,ib);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();