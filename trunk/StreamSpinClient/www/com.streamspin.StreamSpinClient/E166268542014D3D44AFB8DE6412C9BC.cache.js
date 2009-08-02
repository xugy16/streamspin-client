(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var mb='',Ab=' ',l='#',xd='$',p=', Size: ',Cc='-',bb='/',pc='0',ad='0px',pd='100%',td='100px',yd=':',uc='<SELECT>',m='?',xb='BackgroundImageCache',xc='DIV',gb='DOMMouseScroll',o='Index: ',ld='Item one',md='Item two',x='Object;',vd='Status: <b>Online<\/b>',rd='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',v='Widget;',u='[Lcom.google.gwt.user.client.ui.',w='[Ljava.lang.',wd='\\',cc='__gwt_initWindowCloseHandler',sc='align',nc='blur',kc='bottom',Eb='button',qc='cellPadding',oc='cellSpacing',ic='center',yc='change',zb='className',jd='clear.cache.gif',dd='click',t='com.streamspin.client.StreamSpinClient',hb='contextmenu',od='dblclick',fc='div',eb='error',n='focus',vb='function',wb='function ',Fb='gwt-Button',hc='gwt-HTML',gc='gwt-Label',vc='gwt-ListBox',Bc='gwt-MenuBar',fd='gwt-TextArea',sd='height',bd='hideFocus',Ec='horizontal',id='http://',gd='https',hd='https://',y='keydown',z='keypress',A='keyup',Bb='left',B='load',C='losecapture',Ac='menubar',lc='middle',r='moduleStartup',D='mousedown',E='mousemove',F='mouseout',ab='mouseover',cb='mouseup',fb='mousewheel',s='onModuleLoadStart',sb='onblur',ib='onclick',ub='oncontextmenu',tb='ondblclick',rb='onfocus',ob='onkeydown',pb='onkeypress',qb='onkeyup',jb='onmousedown',lb='onmousemove',kb='onmouseup',nb='onmousewheel',wc='option',Fc='outline',Db='position',jc='right',zc='role',yb='script',db='scroll',q='startup',ud='status Online',ac='submit',dc='table',ec='tbody',rc='td',ed='textarea',kd='title of Main Window',Cb='top',mc='tr',cd='true',bc='type',qd='value',Dc='vertical',tc='verticalAlign',nd='width';var _;function Fp(a){return this===(a==null?null:a)}
function aq(){return this.$H||(this.$H=++ne)}
function Dp(){}
_=Dp.prototype={};_.eQ=Fp;_.hC=aq;_.tM=fv;_.tI=1;function de(b,a){return b.tM==fv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function fe(a){return a.tM==fv||a.tI==2?a.hC():a.$H||(a.$H=++ne)}
function ke(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(bb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+bb:mb}
var ne=0;function te(b,a){return b===a||b.contains(a)}
function ue(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function hf(){hf=fv;lf()}
function kf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function lf(){try{$doc.execCommand(xb,false,true)}catch(a){}}
function pf(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function qf(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;kf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function rf(a,c){hf();var b,d;if(pq(a.__pendingSrc||a.src,c)){return}if(!sf){sf={}}b=a.__pendingSrc;if(b!=null){d=sf[b];if(d==a){qf(sf,d)}else{pf(d,a)}}d=sf[c];if(!d){kf(sf,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var sf=null;function hg(){}
_=hg.prototype=new Dp();_.tI=0;function og(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function pg(a,f,c,b,e){var d;d=og(e,b);qg(a,f,c,d);return d}
function qg(b,d,c,a){if(!rg){rg=new kg()}ug(a,rg);a.tI=d;a.qI=c;return a}
function sg(a,b,c){if(c!=null){if(a.qI>0&&!xg(c.tI,a.qI)){throw new ep()}if(a.qI<0&&(c.tM==fv||c.tI==2)){throw new ep()}}return a[b]=c}
function ug(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function kg(){}
_=kg.prototype=new Dp();_.tI=0;_.length=0;_.qI=0;var rg=null;function yg(b,a){return b&&!!gh[b][a]}
function xg(b,a){return b&&gh[b][a]}
function zg(b,a){if(b!=null&&!xg(b.tI,a)){throw new ip()}return b}
function fh(a){if(a!=null){throw new ip()}return a}
var gh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Bh(b,a,c){var d;if(a==Eh){if(Bi(b)==8192){Eh=null}}d=Ah;Ah=b;try{c.t(b)}finally{Ah=d}}
function Dh(a){return true}
function bi(a,b){Di();ui(a,b)}
var Ah=null,Eh=null;function gi(a){li();if(!hi){hi=Bt(new At())}Dt(hi,a)}
function ii(){var a;if(hi){for(a=ts(new rs(),hi);a.a<a.b.b;){zg(ws(a),3);lm()}}}
function ji(){var a,b;b=null;if(hi){for(a=ts(new rs(),hi);a.a<a.b.b;){zg(ws(a),3);b=null}}return b}
function li(){if(!ki){ki=true;fj(ej(),cc)}}
var hi=null,ki=false;function Bi(a){switch(a.type){case nc:return 4096;case yc:return 1024;case dd:return 1;case od:return 2;case n:return 2048;case y:return 128;case z:return 256;case A:return 512;case B:return 32768;case C:return 8192;case D:return 4;case E:return 64;case F:return 32;case ab:return 16;case cb:return 8;case db:return 16384;case eb:return 65536;case fb:return 131072;case gb:return 131072;case hb:return 262144;}}
function Di(){if(!Fi){ti();Fi=true}}
var Fi=false;function ti(){xi=function(){var c=vi;vi=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Dh($wnd.event)){vi=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&yg(b.tI,4)&&!(b!=null&&(b.tM!=fv&&b.tI!=2))){Bh($wnd.event,a,b)}}vi=c};wi=function(){var a=$doc.createEventObject();this.fireEvent(ib,a);if(this.__eventBits&2){xi.call(this)}};var e=function(){xi.call($doc.body)};var d=function(){wi.call($doc.body)};$doc.body.attachEvent(ib,e);$doc.body.attachEvent(jb,e);$doc.body.attachEvent(kb,e);$doc.body.attachEvent(lb,e);$doc.body.attachEvent(nb,e);$doc.body.attachEvent(ob,e);$doc.body.attachEvent(pb,e);$doc.body.attachEvent(qb,e);$doc.body.attachEvent(rb,e);$doc.body.attachEvent(sb,e);$doc.body.attachEvent(tb,d);$doc.body.attachEvent(ub,e)}
function ui(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?xi:null;if(b&3)c.ondblclick=a&3?wi:null;if(b&4)c.onmousedown=a&4?xi:null;if(b&8)c.onmouseup=a&8?xi:null;if(b&16)c.onmouseover=a&16?xi:null;if(b&32)c.onmouseout=a&32?xi:null;if(b&64)c.onmousemove=a&64?xi:null;if(b&128)c.onkeydown=a&128?xi:null;if(b&256)c.onkeypress=a&256?xi:null;if(b&512)c.onkeyup=a&512?xi:null;if(b&1024)c.onchange=a&1024?xi:null;if(b&2048)c.onfocus=a&2048?xi:null;if(b&4096)c.onblur=a&4096?xi:null;if(b&8192)c.onlosecapture=a&8192?xi:null;if(b&16384)c.onscroll=a&16384?xi:null;if(b&32768)c.onload=a&32768?xi:null;if(b&65536)c.onerror=a&65536?xi:null;if(b&131072)c.onmousewheel=a&131072?xi:null;if(b&262144)c.oncontextmenu=a&262144?xi:null}
var vi=null,wi=null,xi=null;function ej(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function fj(c,b){var d,a;c=tq(c,vb,wb+b);d=(a=$doc.createElement(yb),a.text=c,a);$doc.body.appendChild(d);gj();$doc.body.removeChild(d)}
function gj(){$wnd.__gwt_initWindowCloseHandler(function(){return ji()},function(){ii()})}
function Fm(b,a){fn(b.i,a,true)}
function en(a){var b,c;b=a[zb]==null?null:String(a[zb]);c=b.indexOf(Bq(32));if(c>=0){return b.substr(0,c-0)}return b}
function fn(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new bq()}j=wq(j);if(j.length==0){throw new tp()}i=c[zb]==null?null:String(c[zb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Ab}c[zb]=i+j}}else{if(e!=-1){b=wq(i.substr(0,e-0));d=wq(uq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Ab+d}c[zb]=h}}}
function Em(){}
_=Em.prototype=new Dp();_.tI=7;_.i=null;function Fn(a){if(a.g){throw new wp()}a.g=true;a.i.__listener=a;a.l();a.v()}
function ao(a){if(!a.g){throw new wp()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function bo(a){if(a.h){a.h.x(a)}else if(a.h){throw new wp()}}
function co(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new wp()}c.h=b;if(b.g){Fn(c)}}}
function eo(){}
function fo(){}
function go(a){}
function ho(){ao(this)}
function io(){}
function jo(){}
function on(){}
_=on.prototype=new Em();_.l=eo;_.m=fo;_.t=go;_.u=ho;_.v=io;_.w=jo;_.tI=8;_.g=false;_.h=null;function El(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=un(b);Fn(a)}}
function Fl(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=un(b);a.u()}}
function am(){}
function bm(){}
function Cl(){}
_=Cl.prototype=new on();_.l=El;_.m=Fl;_.v=am;_.w=bm;_.tI=9;function Cj(c,a,b){bo(a);yn(c.f,a);b.appendChild(a.i);co(a,c)}
function Ej(b,c){var a;if(c.h!=b){return false}co(c,null);a=c.i;a.parentElement.removeChild(a);Dn(b.f,c);return true}
function Fj(){return sn(new qn(),this.f)}
function ak(a){return Ej(this,a)}
function Aj(){}
_=Aj.prototype=new Cl();_.r=Fj;_.x=ak;_.tI=10;function jj(a,b){Cj(a,b,a.i)}
function lj(b,c){var a;a=Ej(b,c);if(a){mj(c.i)}return a}
function mj(a){a.style[Bb]=mb;a.style[Cb]=mb;a.style[Db]=mb}
function nj(a){return lj(this,a)}
function ij(){}
_=ij.prototype=new Aj();_.x=nj;_.tI=11;function ck(b,a){b.i=a;b.i.tabIndex=0;return b}
function ek(a){Bi(a)}
function bk(){}
_=bk.prototype=new on();_.t=ek;_.tI=12;function sj(b,a){b.i=a;b.i.tabIndex=0;return b}
function rj(){}
_=rj.prototype=new bk();_.tI=13;function uj(a){sj(a,$doc.createElement(Eb));wj(a.i);a.i[zb]=Fb;return a}
function wj(b){if(b.type==ac){try{b.setAttribute(bc,Eb)}catch(a){}}}
function qj(){}
_=qj.prototype=new rj();_.tI=14;function yj(a){a.f=xn(new pn());a.e=$doc.createElement(dc);a.d=$doc.createElement(ec);a.e.appendChild(a.d);a.i=a.e;return a}
function xj(){}
_=xj.prototype=new Aj();_.tI=15;_.d=null;_.e=null;function fl(a){a.i=$doc.createElement(fc);a.i[zb]=gc;return a}
function il(a){Bi(a)}
function el(){}
_=el.prototype=new on();_.t=il;_.tI=16;function gk(a){a.i=$doc.createElement(fc);a.i[zb]=hc;return a}
function fk(){}
_=fk.prototype=new el();_.tI=17;function pk(){pk=fv;nk(new mk(),ic);rk=nk(new mk(),Bb);nk(new mk(),jc);qk=rk}
var qk,rk;function nk(b,a){b.a=a;return b}
function mk(){}
_=mk.prototype=new Dp();_.tI=0;_.a=null;function xk(){xk=fv;vk(new uk(),kc);vk(new uk(),lc);yk=vk(new uk(),Cb)}
var yk;function vk(a,b){a.a=b;return a}
function uk(){}
_=uk.prototype=new Dp();_.tI=0;_.a=null;function Dk(a){yj(a);a.a=(pk(),qk);a.c=(xk(),yk);a.b=$doc.createElement(mc);a.d.appendChild(a.b);a.e[oc]=pc;a.e[qc]=pc;return a}
function Ek(c,d){var b,a;b=(a=$doc.createElement(rc),(a[sc]=c.a.a,undefined),(a.style[tc]=c.c.a,undefined),a);c.b.appendChild(b);bo(d);yn(c.f,d);b.appendChild(d.i);co(d,c)}
function bl(c){var a,b;b=c.i.parentElement;a=Ej(this,c);if(a){this.b.removeChild(b)}return a}
function Bk(){}
_=Bk.prototype=new xj();_.x=bl;_.tI=18;_.b=null;function kl(b){var a;ck(b,(a=uc,$doc.createElement(a)));b.i[zb]=vc;return b}
function nl(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement(wc);d.text=c;d.value=g;if(b==-1||b==e.options.length){ue(e,d,null)}else{a=e.options[b];ue(e,d,a)}}
function pl(a){if(Bi(a)==1024){}else{Bi(a)}}
function jl(){}
_=jl.prototype=new bk();_.t=pl;_.tI=19;function tl(a){Bt(new At());a.b=Bt(new At());wl(a,false,(zl(),new xl()));return a}
function vl(d,a){var b,c;for(c=ts(new rs(),d.b);c.a<c.b.b;){b=fh(ws(c));if(te(null.B(),a)){return b}}return null}
function wl(d,f){var b,c,e,a;c=$doc.createElement(dc);d.a=$doc.createElement(ec);c.appendChild(d.a);if(!f){e=$doc.createElement(mc);d.a.appendChild(e)}b=(a=$doc.createElement(xc),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(zc,Ac);bi(d.i,2225|(d.i.__eventBits||0));d.i[zb]=Bc;if(f){Fm(d,en(d.i)+Cc+Dc)}else{Fm(d,en(d.i)+Cc+Ec)}d.i.style[Fc]=ad;d.i.setAttribute(bd,cd)}
function Al(a){var b;vl(this,a.srcElement);switch(Bi(a)){case 1:{uo(this.i);break}{break}case 2048:{fh(Ft(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{fh(Ft(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{fh(Ft(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:fh(Ft(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:fh(Ft(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{fh(Ft(this.b,0))}}break}}}
function Bl(){ao(this)}
function ql(){}
_=ql.prototype=new on();_.t=Al;_.u=Bl;_.tI=20;_.a=null;function zl(){zl=fv;qo()}
function xl(){}
_=xl.prototype=new Dp();_.tI=0;function km(){km=fv;om=iu(new hu());pm=mu(new lu())}
function jm(b,a){km();b.f=xn(new pn());b.i=a;Fn(b);return b}
function lm(){var b,a;km();var c,d;for(d=(b=kr(new jr(),tt(pm.a).b.a),dt(new ct(),b));vs(d.a.a);){c=zg((a=zg(ws(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function nm(a){km();var b;b=zg(is(om,a),5);if(b){return b}if(om.d==0){gi(new em())}b=hm(new gm());os(om,a,b);nu(pm,b);return b}
function dm(){}
_=dm.prototype=new ij();_.tI=21;var om,pm;function em(){}
_=em.prototype=new Dp();_.tI=22;function im(){im=fv;km()}
function hm(a){im();jm(a,$doc.body);return a}
function gm(){}
_=gm.prototype=new dm();_.tI=23;function Am(b,a){b.i=a;b.i.tabIndex=0;return b}
function Dm(a){var b;b=Bi(a);if((b&896)!=0){Bi(a)}else if(b==1024){}else{Bi(a)}}
function zm(){}
_=zm.prototype=new bk();_.t=Dm;_.tI=24;function xm(a){Am(a,$doc.createElement(ed));a.i[zb]=fd;return a}
function wm(){}
_=wm.prototype=new zm();_.tI=25;function jn(a){yj(a);a.a=(pk(),qk);a.b=(xk(),yk);a.e[oc]=pc;a.e[qc]=pc;return a}
function kn(c,e){var b,d,a;d=$doc.createElement(mc);b=(a=$doc.createElement(rc),(a[sc]=c.a.a,undefined),(a.style[tc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);bo(e);yn(c.f,e);b.appendChild(e.i);co(e,c)}
function nn(c){var a,b;b=c.i.parentElement;a=Ej(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function gn(){}
_=gn.prototype=new xj();_.x=nn;_.tI=26;function xn(a){a.a=pg(jh,0,6,4,0);return a}
function yn(a,b){Bn(a,b,a.b)}
function An(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function Bn(d,e,a){var b,c;if(a<0||a>d.b){throw new zp()}if(d.b==d.a.length){c=pg(jh,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){sg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){sg(d.a,b,d.a[b-1])}sg(d.a,a,e)}
function Cn(c,b){var a;if(b<0||b>=c.b){throw new zp()}--c.b;for(a=b;a<c.b;++a){sg(c.a,a,c.a[a+1])}sg(c.a,c.b,null)}
function Dn(b,c){var a;a=An(b,c);if(a==-1){throw new Eu()}Cn(b,a)}
function pn(){}
_=pn.prototype=new Dp();_.tI=0;_.a=null;_.b=0;function sn(b,a){b.b=a;return b}
function un(a){if(a.a>=a.b.b){throw new Eu()}return a.b.a[++a.a]}
function vn(){return this.a<this.b.b-1}
function wn(){return un(this)}
function qn(){}
_=qn.prototype=new Dp();_.q=vn;_.s=wn;_.tI=0;_.a=-1;_.b=null;function mo(){mo=fv;ke().indexOf(gd)==0?hd:id}
function no(){mo();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;rf(a,$moduleBase+jd)}}
function qo(){qo=fv;mo();no()}
function uo(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function yo(){}
_=yo.prototype=new hg();_.tI=0;function Ao(a){a.d=jn(new gn());a.c=Dk(new Bk());a.h=jn(new gn());a.g=kl(new jl());a.a=xm(new wm());a.e=tl(new ql());a.b=uj(new qj());a.f=fl(new el());a.i=gk(new fk());a.i.i.innerText=kd;nl(a.g,ld,ld,-1);nl(a.g,md,md,-1);a.g.i.size=6;a.g.i.style[nd]=pd;a.a.i[qd]=rd!=null?rd:mb;a.a.i.style[nd]=pd;kn(a.h,a.g);kn(a.h,a.a);a.h.i.style[sd]=td;a.f.i.innerText=ud;a.f.i.innerHTML=vd;Ek(a.c,a.b);Ek(a.c,a.e);a.c.i.style[sd]=pd;kn(a.d,a.i);kn(a.d,a.h);kn(a.d,a.f);kn(a.d,a.c);a.d.i.style[sd]=pd;a.d.i.style[nd]=pd;jj((km(),nm(null)),a.d);return a}
function zo(){}
_=zo.prototype=new yo();_.tI=0;function Dq(){}
_=Dq.prototype=new Dp();_.tI=3;function rp(){}
_=rp.prototype=new Dq();_.tI=4;function bq(){}
_=bq.prototype=new rp();_.tI=5;function ep(){}
_=ep.prototype=new bq();_.tI=28;function lp(c,a){var b;b=new hp();return b}
function hp(){}
_=hp.prototype=new Dp();_.tI=0;function ip(){}
_=ip.prototype=new bq();_.tI=31;function tp(){}
_=tp.prototype=new bq();_.tI=32;function wp(){}
_=wp.prototype=new bq();_.tI=33;function Ap(b,a){return b}
function zp(){}
_=zp.prototype=new bq();_.tI=34;function pq(b,a){if(!(a!=null&&yg(a.tI,1))){return false}return String(b)==a}
function tq(c,a,b){b=yq(b);return c.replace(RegExp(a),b)}
function uq(b,a){return b.substr(a,b.length-a)}
function wq(c){if(c.length==0||c[0]>Ab&&c[c.length-1]>Ab){return c}var a=c.replace(/^(\s*)/,mb);var b=a.replace(/\s*$/,mb);return b}
function yq(b){var a;a=0;while(0<=(a=b.indexOf(wd,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+xd+uq(b,++a)}else{b=b.substr(0,a-0)+uq(b,++a)}}return b}
function zq(a){return pq(this,a)}
function Bq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Cq(){return lq(this)}
_=String.prototype;_.eQ=zq;_.hC=Cq;_.tI=2;function gq(){gq=fv;hq={};kq={}}
function iq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function lq(c){gq();var a=yd+c;var b=kq[a];if(b!=null){return b}b=hq[a];if(b==null){b=iq(c)}mq();return kq[a]=b}
function mq(){if(jq==256){hq=kq;kq={};jq=0}++jq}
var hq,jq=0,kq;function Fq(){}
_=Fq.prototype=new bq();_.tI=35;function dr(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:de(b,c)){return a}}return null}
function fr(a){throw new Fq()}
function gr(b){var a;a=dr(this.r(),b);return !!a}
function cr(){}
_=cr.prototype=new Dp();_.j=fr;_.k=gr;_.tI=0;function tt(b){var a;a=or(new ir(),b);return it(new bt(),b,a)}
function ut(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&yg(c.tI,11))){return false}e=zg(c,11);if(zg(this,11).d!=e.d){return false}for(b=kr(new jr(),or(new ir(),e).a);vs(b.a);){a=zg(ws(b.a),9);d=a.o();f=a.p();if(!(d==null?zg(this,11).c:d!=null&&yg(d.tI,1)?ks(zg(this,11),zg(d,1)):js(zg(this,11),d,~~fe(d)))){return false}if(!ev(f,d==null?zg(this,11).b:d!=null&&yg(d.tI,1)?zg(this,11).e[yd+zg(d,1)]:gs(zg(this,11),d,~~fe(d)))){return false}}return true}
function vt(){var a,b,c;c=0;for(b=kr(new jr(),or(new ir(),zg(this,11)).a);vs(b.a);){a=zg(ws(b.a),9);c+=a.hC();c=~~c}return c}
function at(){}
_=at.prototype=new Dp();_.eQ=ut;_.hC=vt;_.tI=0;function bs(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function cs(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Fr(e,c.substring(1));a.j(b)}}}
function fs(b,a){return a==null?b.c:a!=null&&yg(a.tI,1)?ks(b,zg(a,1)):js(b,a,~~fe(a))}
function is(b,a){return a==null?b.b:a!=null&&yg(a.tI,1)?b.e[yd+zg(a,1)]:gs(b,a,~~fe(a))}
function gs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function js(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function ks(b,a){return yd+a in b.e}
function os(b,a,c){return a==null?ms(b,c):a!=null&&yg(a.tI,1)?ns(b,zg(a,1),c):ls(b,a,c,~~fe(a))}
function ls(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=xu(new wu(),g,j);a.push(c);++i.d;return null}
function ms(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ns(d,a,e){var b,c=d.e;a=yd+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ps(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&de(a,b)}
function hr(){}
_=hr.prototype=new at();_.n=ps;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function yt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&yg(b.tI,12))){return false}c=zg(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function zt(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=fe(c);a=~~a}}return a}
function wt(){}
_=wt.prototype=new cr();_.eQ=yt;_.hC=zt;_.tI=36;function or(b,a){b.a=a;return b}
function qr(d,c){var a,b,e;if(c!=null&&yg(c.tI,9)){a=zg(c,9);b=a.o();if(fs(d.a,b)){e=is(d.a,b);return ku(a.p(),e)}}return false}
function rr(a){return qr(this,a)}
function sr(){return kr(new jr(),this.a)}
function tr(){return this.a.d}
function ir(){}
_=ir.prototype=new wt();_.k=rr;_.r=sr;_.z=tr;_.tI=37;_.a=null;function kr(c,b){var a;c.b=b;a=Bt(new At());if(c.b.c){Dt(a,vr(new ur(),c.b))}cs(c.b,a);bs(c.b,a);c.a=ts(new rs(),a);return c}
function mr(){return vs(this.a)}
function nr(){return zg(ws(this.a),9)}
function jr(){}
_=jr.prototype=new Dp();_.q=mr;_.s=nr;_.tI=0;_.a=null;_.b=null;function qt(b){var a;if(b!=null&&yg(b.tI,9)){a=zg(b,9);if(ev(this.o(),a.o())&&ev(this.p(),a.p())){return true}}return false}
function rt(){var a,b;a=0;b=0;if(this.o()!=null){a=fe(this.o())}if(this.p()!=null){b=fe(this.p())}return a^b}
function ot(){}
_=ot.prototype=new Dp();_.eQ=qt;_.hC=rt;_.tI=38;function vr(b,a){b.a=a;return b}
function xr(){return null}
function yr(){return this.a.b}
function zr(a){return ms(this.a,a)}
function ur(){}
_=ur.prototype=new ot();_.o=xr;_.p=yr;_.y=zr;_.tI=39;_.a=null;function Br(c,a,b){c.b=b;c.a=a;return c}
function Dr(){return this.a}
function Er(){return this.b.e[yd+this.a]}
function Fr(b,a){return Br(new Ar(),a,b)}
function as(a){return ns(this.b,this.a,a)}
function Ar(){}
_=Ar.prototype=new ot();_.o=Dr;_.p=Er;_.y=as;_.tI=40;_.a=null;_.b=null;function As(a){Ct(this,this.z(),a);return true}
function Bs(a,b){if(a<0||a>=b){Es(a,b)}}
function Cs(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&yg(e.tI,10))){return false}f=zg(e,10);if(this.z()!=f.b){return false}c=ts(new rs(),this);d=ts(new rs(),f);while(c.a<c.b.b){a=ws(c);b=ws(d);if(!(a==null?b==null:de(a,b))){return false}}return true}
function Ds(){var a,b,c;b=1;a=ts(new rs(),this);while(a.a<a.b.b){c=ws(a);b=31*b+(c==null?0:fe(c));b=~~b}return b}
function Es(a,b){throw Ap(new zp(),o+a+p+b)}
function Fs(){return ts(new rs(),this)}
function qs(){}
_=qs.prototype=new cr();_.j=As;_.eQ=Cs;_.hC=Ds;_.r=Fs;_.tI=0;function ts(b,a){b.b=a;return b}
function vs(a){return a.a<a.b.b}
function ws(a){if(a.a>=a.b.b){throw new Eu()}return Ft(a.b,a.a++)}
function xs(){return this.a<this.b.b}
function ys(){return ws(this)}
function rs(){}
_=rs.prototype=new Dp();_.q=xs;_.s=ys;_.tI=0;_.a=0;_.b=null;function it(b,a,c){b.a=a;b.b=c;return b}
function lt(a){return fs(this.a,a)}
function mt(){var a;return a=kr(new jr(),this.b.a),dt(new ct(),a)}
function nt(){return this.b.a.d}
function bt(){}
_=bt.prototype=new wt();_.k=lt;_.r=mt;_.z=nt;_.tI=41;_.a=null;_.b=null;function dt(a,b){a.a=b;return a}
function gt(){return vs(this.a.a)}
function ht(){var a;return a=zg(ws(this.a.a),9),a.o()}
function ct(){}
_=ct.prototype=new Dp();_.q=gt;_.s=ht;_.tI=0;_.a=null;function Bt(a){a.a=pg(kh,0,0,0,0);a.b=0;return a}
function Dt(b,a){sg(b.a,b.b++,a);return true}
function Ct(c,a,b){if(a<0||a>c.b){Es(a,c.b)}c.a.splice(a,0,b);++c.b}
function Ft(b,a){Bs(a,b.b);return b.a[a]}
function au(c,b,a){for(;a<c.b;++a){if(ev(b,c.a[a])){return a}}return -1}
function bu(a){return sg(this.a,this.b++,a),true}
function cu(a){return au(this,a,0)!=-1}
function du(){return this.b}
function At(){}
_=At.prototype=new qs();_.j=bu;_.k=cu;_.z=du;_.tI=42;_.a=null;_.b=0;function iu(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function ku(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&de(a,b)}
function hu(){}
_=hu.prototype=new hr();_.tI=43;function mu(a){a.a=iu(new hu());return a}
function nu(c,a){var b;b=os(c.a,a,c);return b==null}
function pu(b){var a;return a=os(this.a,b,this),a==null}
function qu(a){return fs(this.a,a)}
function ru(){var a;return a=kr(new jr(),tt(this.a).b.a),dt(new ct(),a)}
function su(){return this.a.d}
function lu(){}
_=lu.prototype=new wt();_.j=pu;_.k=qu;_.r=ru;_.z=su;_.tI=44;_.a=null;function xu(b,a,c){b.a=a;b.b=c;return b}
function zu(){return this.a}
function Au(){return this.b}
function Cu(b){var a;a=this.b;this.b=b;return a}
function wu(){}
_=wu.prototype=new ot();_.o=zu;_.p=Au;_.y=Cu;_.tI=45;_.a=null;_.b=null;function Eu(){}
_=Eu.prototype=new bq();_.tI=46;function ev(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&de(a,b)}
function cp(){!!$stats&&$stats({moduleName:$moduleName,subSystem:q,evtGroup:r,millis:(new Date()).getTime(),type:s,className:t});Ao(new zo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{cp()}catch(a){b(d)}else{cp()}}
function fv(){}
var jh=lp(u,v),kh=lp(w,x);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();