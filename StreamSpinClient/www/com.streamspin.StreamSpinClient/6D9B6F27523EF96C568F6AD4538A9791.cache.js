(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var Cb='',lc=' ',m='#',F='$',yc=', Size: ',rd='-',rb='/',dd='0',wd='0px',w='100%',B='100px',A='150px',C='300px',ab=':',kd='<SELECT MULTIPLE>',ld='<SELECT>',n='?',hc='BackgroundImageCache',nd='DIV',wb='DOMMouseScroll',ge='INPUT',xc='Index: ',jb='Object;',s='Send Message',ee='Status: <b>Offline<\/b>',de='Status: <b>Online<\/b>',x='This is some content that should show how the widget handles stuff,\n <b> wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er<\/b>',hb='Widget;',t='You can send messages to your friends with this',gb='[Lcom.google.gwt.user.client.ui.',ib='[Ljava.lang.',E='\\',D='__gwt_gadget_content_div',sc='__gwt_initWindowCloseHandler',wc='align',Dc='blur',Fc='bottom',pc='button',ed='cellPadding',cd='cellSpacing',Cc='center',id='change',kc='className',ce='clear.cache.gif',td='click',fb='com.streamspin.client.StreamSpinClient',xb='contextmenu',Ed='dblclick',zc='div',ub='error',o='focus',fc='function',gc='function ',qc='gwt-Button',Bc='gwt-HTML',hd='gwt-Image',Ac='gwt-Label',md='gwt-ListBox',qd='gwt-MenuBar',q='gwt-PasswordTextBox',Dd='gwt-TextArea',ie='gwt-TextBox',y='height',xd='hideFocus',ud='horizontal',be='http://',Fd='https',ae='https://',r='images/daisy.gif',jd='img',z='keydown',eb='keypress',kb='keyup',mc='left',lb='load',mb='losecapture',pd='menubar',ad='middle',cb='moduleStartup',nb='mousedown',ob='mousemove',pb='mouseout',qb='mouseover',sb='mouseup',vb='mousewheel',db='onModuleLoadStart',cc='onblur',yb='onclick',ec='oncontextmenu',dc='ondblclick',bc='onfocus',Eb='onkeydown',Fb='onkeypress',ac='onkeyup',zb='onmousedown',Bb='onmousemove',Ab='onmouseup',Db='onmousewheel',vd='outline',p='password',oc='position',zd='readOnly',Ad='readonly',Ec='right',od='role',ic='script',tb='scroll',fe='someTest',bb='startup',rc='submit',uc='table',vc='tbody',fd='td',he='text',Cd='textarea',jc='title',u='title of Main Window',nc='top',bd='tr',yd='true',tc='type',Bd='value',sd='vertical',gd='verticalAlign',v='width';var _;function fs(a){return this===(a==null?null:a)}
function gs(){return this.$H||(this.$H=++De)}
function ds(){}
_=ds.prototype={};_.eQ=fs;_.hC=gs;_.tM=nx;_.tI=1;function te(b,a){return b.tM==nx||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ve(a){return a.tM==nx||a.tI==2?a.hC():a.$H||(a.$H=++De)}
function Ae(){var b=$doc.location.href;var a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.indexOf(n);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(rb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+rb:Cb}
var De=0;function df(b,a){return b===a||b.contains(a)}
function zf(){zf=nx;Cf()}
function Bf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function Cf(){try{$doc.execCommand(hc,false,true)}catch(a){}}
function ag(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function bg(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;Bf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function cg(a,c){zf();var b,d;if(vs(a.__pendingSrc||a.src,c)){return}if(!dg){dg={}}b=a.__pendingSrc;if(b!=null){d=dg[b];if(d==a){bg(dg,d)}else{ag(d,a)}}d=dg[c];if(!d){Bf(dg,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var dg=null;function sg(){}
_=sg.prototype=new ds();_.tI=0;function wg(){}
_=wg.prototype=new ds();_.tI=0;function zg(){}
_=zg.prototype=new ds();_.tI=0;function dh(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function eh(a,f,c,b,e){var d;d=dh(e,b);fh(a,f,c,d);return d}
function fh(b,d,c,a){if(!gh){gh=new Fg()}jh(a,gh);a.tI=d;a.qI=c;return a}
function hh(a,b,c){if(c!=null){if(a.qI>0&&!mh(c.tI,a.qI)){throw new er()}if(a.qI<0&&(c.tM==nx||c.tI==2)){throw new er()}}return a[b]=c}
function jh(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function Fg(){}
_=Fg.prototype=new ds();_.tI=0;_.length=0;_.qI=0;var gh=null;function nh(b,a){return b&&!!Bh[b][a]}
function mh(b,a){return b&&Bh[b][a]}
function oh(b,a){if(b!=null&&!mh(b.tI,a)){throw new or()}return b}
function Ah(a){if(a!=null){throw new or()}return a}
var Bh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{12:1},{12:1},{12:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{5:1},{5:1},{2:1},{2:1},{2:1},{2:1},{10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{14:1},{14:1},{11:1},{11:1},{11:1},{14:1},{13:1},{14:1},{11:1},{2:1},{9:1}];function qi(b,a,c){var d;if(a==ti){if(qj(b)==8192){ti=null}}d=pi;pi=b;try{c.z(b)}finally{pi=d}}
function si(a){return true}
function wi(a,b){sj();jj(a,b)}
var pi=null,ti=null;function Bi(a){aj();if(!Ci){Ci=cw(new bw())}dw(Ci,a)}
function Di(){var a;if(Ci){for(a=zu(new xu(),Ci);a.a<a.b.ab();){oh(Cu(a),3);wn()}}}
function Ei(){var a,b;b=null;if(Ci){for(a=zu(new xu(),Ci);a.a<a.b.ab();){oh(Cu(a),3);b=null}}return b}
function aj(){if(!Fi){Fi=true;Aj(zj(),sc)}}
var Ci=null,Fi=false;function qj(a){switch(a.type){case Dc:return 4096;case id:return 1024;case td:return 1;case Ed:return 2;case o:return 2048;case z:return 128;case eb:return 256;case kb:return 512;case lb:return 32768;case mb:return 8192;case nb:return 4;case ob:return 64;case pb:return 32;case qb:return 16;case sb:return 8;case tb:return 16384;case ub:return 65536;case vb:return 131072;case wb:return 131072;case xb:return 262144;}}
function sj(){if(!uj){ij();uj=true}}
var uj=false;function ij(){mj=function(){var c=kj;kj=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!si($wnd.event)){kj=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&nh(b.tI,4)&&!(b!=null&&(b.tM!=nx&&b.tI!=2))){qi($wnd.event,a,b)}}kj=c};lj=function(){var a=$doc.createEventObject();this.fireEvent(yb,a);if(this.__eventBits&2){mj.call(this)}};var e=function(){mj.call($doc.body)};var d=function(){lj.call($doc.body)};$doc.body.attachEvent(yb,e);$doc.body.attachEvent(zb,e);$doc.body.attachEvent(Ab,e);$doc.body.attachEvent(Bb,e);$doc.body.attachEvent(Db,e);$doc.body.attachEvent(Eb,e);$doc.body.attachEvent(Fb,e);$doc.body.attachEvent(ac,e);$doc.body.attachEvent(bc,e);$doc.body.attachEvent(cc,e);$doc.body.attachEvent(dc,d);$doc.body.attachEvent(ec,e)}
function jj(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?mj:null;if(b&3)c.ondblclick=a&3?lj:null;if(b&4)c.onmousedown=a&4?mj:null;if(b&8)c.onmouseup=a&8?mj:null;if(b&16)c.onmouseover=a&16?mj:null;if(b&32)c.onmouseout=a&32?mj:null;if(b&64)c.onmousemove=a&64?mj:null;if(b&128)c.onkeydown=a&128?mj:null;if(b&256)c.onkeypress=a&256?mj:null;if(b&512)c.onkeyup=a&512?mj:null;if(b&1024)c.onchange=a&1024?mj:null;if(b&2048)c.onfocus=a&2048?mj:null;if(b&4096)c.onblur=a&4096?mj:null;if(b&8192)c.onlosecapture=a&8192?mj:null;if(b&16384)c.onscroll=a&16384?mj:null;if(b&32768)c.onload=a&32768?mj:null;if(b&65536)c.onerror=a&65536?mj:null;if(b&131072)c.onmousewheel=a&131072?mj:null;if(b&262144)c.oncontextmenu=a&262144?mj:null}
var kj=null,lj=null,mj=null;function zj(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function Aj(c,b){var d,a;c=zs(c,fc,gc+b);d=(a=$doc.createElement(ic),a.text=c,a);$doc.body.appendChild(d);Bj();$doc.body.removeChild(d)}
function Bj(){$wnd.__gwt_initWindowCloseHandler(function(){return Ei()},function(){Di()})}
function qo(b,a){Ao(b.i,a,true)}
function so(b,a){Ao(b.i,a,false)}
function to(b,a){if(b.i){uo(b.i,a)}b.i=a}
function uo(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function xo(a,b){if(b==null||b.length==0){a.i.removeAttribute(jc)}else{a.i.setAttribute(jc,b)}}
function zo(a){var b,c;b=a[kc]==null?null:String(a[kc]);c=b.indexOf(bt(32));if(c>=0){return b.substr(0,c-0)}return b}
function Ao(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new hs()}j=Cs(j);if(j.length==0){throw new zr()}i=c[kc]==null?null:String(c[kc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=lc}c[kc]=i+j}}else{if(e!=-1){b=Cs(i.substr(0,e-0));d=Cs(As(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+lc+d}c[kc]=h}}}
function po(){}
_=po.prototype=new ds();_.tI=7;_.i=null;function tp(a){if(a.g){throw new Cr()}a.g=true;a.i.__listener=a;a.o();a.C()}
function up(a){if(!a.g){throw new Cr()}try{a.D()}finally{a.p();a.i.__listener=null;a.g=false}}
function vp(a){if(a.h){a.h.E(a)}else if(a.h){throw new Cr()}}
function wp(b,a){if(b.g){b.i.__listener=null}to(b,a);if(b.g){b.i.__listener=b}}
function xp(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.B()}c.h=null}else{if(a){throw new Cr()}c.h=b;if(b.g){tp(c)}}}
function yp(){}
function zp(){}
function Ap(a){}
function Bp(){up(this)}
function Cp(){}
function Dp(){}
function cp(){}
_=cp.prototype=new po();_.o=yp;_.p=zp;_.z=Ap;_.B=Bp;_.C=Cp;_.D=Dp;_.tI=8;_.g=false;_.h=null;function gn(){var a,b;for(b=this.x();b.a<b.b.b-1;){a=ip(b);tp(a)}}
function hn(){var a,b;for(b=this.x();b.a<b.b.b-1;){a=ip(b);a.B()}}
function jn(){}
function kn(){}
function en(){}
_=en.prototype=new cp();_.o=gn;_.p=hn;_.C=jn;_.D=kn;_.tI=9;function zk(c,a,b){vp(a);mp(c.f,a);b.appendChild(a.i);xp(a,c)}
function Bk(b,c){var a;if(c.h!=b){return false}xp(c,null);a=c.i;a.parentElement.removeChild(a);rp(b.f,c);return true}
function Ck(){return gp(new ep(),this.f)}
function Dk(a){return Bk(this,a)}
function xk(){}
_=xk.prototype=new en();_.x=Ck;_.E=Dk;_.tI=10;function Ej(a,b){zk(a,b,a.i)}
function ak(b,c){var a;a=Bk(b,c);if(a){bk(c.i)}return a}
function bk(a){a.style[mc]=Cb;a.style[nc]=Cb;a.style[oc]=Cb}
function ck(a){return ak(this,a)}
function Dj(){}
_=Dj.prototype=new xk();_.E=ck;_.tI=11;function Fk(b,a){b.i=a;b.i.tabIndex=0;return b}
function al(b,a){if(!b.a){b.a=tk(new sk());wi(b.i,1|(b.i.__eventBits||0))}dw(b.a,a)}
function cl(b,a){if(qj(a)==1){if(b.a){vk(b.a,b)}}}
function dl(a){cl(this,a)}
function Ek(){}
_=Ek.prototype=new cp();_.z=dl;_.tI=12;_.a=null;function hk(b,a){b.i=a;b.i.tabIndex=0;return b}
function gk(){}
_=gk.prototype=new Ek();_.tI=13;function jk(a){hk(a,$doc.createElement(pc));mk(a.i);a.i[kc]=qc;return a}
function kk(b,a){jk(b);b.i.innerHTML=a||Cb;return b}
function mk(b){if(b.type==rc){try{b.setAttribute(tc,pc)}catch(a){}}}
function fk(){}
_=fk.prototype=new gk();_.tI=14;function ok(a){a.f=lp(new dp());a.e=$doc.createElement(uc);a.d=$doc.createElement(vc);a.e.appendChild(a.d);a.i=a.e;return a}
function qk(a,b){if(b.h!=a){return null}return b.i.parentElement}
function rk(c,d,a){var b;b=qk(c,d);if(b){b[wc]=a.a}}
function nk(){}
_=nk.prototype=new xk();_.tI=15;_.d=null;_.e=null;function jt(a,b){var c;while(a.u()){c=a.y();if(b==null?c==null:te(b,c)){return a}}return null}
function lt(a){throw new ft()}
function mt(b){var a;a=jt(this.x(),b);return !!a}
function it(){}
_=it.prototype=new ds();_.m=lt;_.n=mt;_.tI=0;function bv(a){this.l(this.ab(),a);return true}
function av(b,a){throw new ft()}
function cv(a,b){if(a<0||a>=b){fv(a,b)}}
function dv(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&nh(e.tI,12))){return false}f=oh(e,12);if(this.ab()!=f.ab()){return false}c=zu(new xu(),this);d=f.x();while(c.a<c.b.ab()){a=Cu(c);b=Cu(d);if(!(a==null?b==null:te(a,b))){return false}}return true}
function ev(){var a,b,c;b=1;a=zu(new xu(),this);while(a.a<a.b.ab()){c=Cu(a);b=31*b+(c==null?0:ve(c));b=~~b}return b}
function fv(a,b){throw as(new Fr(),xc+a+yc+b)}
function gv(){return zu(new xu(),this)}
function wu(){}
_=wu.prototype=new it();_.m=bv;_.l=av;_.eQ=dv;_.hC=ev;_.x=gv;_.tI=16;function cw(a){a.a=eh(Fh,0,0,0,0);a.b=0;return a}
function dw(b,a){hh(b.a,b.b++,a);return true}
function fw(b,a){cv(a,b.b);return b.a[a]}
function gw(c,b,a){for(;a<c.b;++a){if(mx(b,c.a[a])){return a}}return -1}
function iw(a){return hh(this.a,this.b++,a),true}
function hw(a,b){if(a<0||a>this.b){fv(a,this.b)}this.a.splice(a,0,b);++this.b}
function jw(a){return gw(this,a,0)!=-1}
function kw(a){return cv(a,this.b),this.a[a]}
function lw(){return this.b}
function bw(){}
_=bw.prototype=new wu();_.m=iw;_.l=hw;_.n=jw;_.t=kw;_.ab=lw;_.tI=17;_.a=null;_.b=0;function tk(a){cw(a);return a}
function vk(d,c){var a,b;for(b=zu(new xu(),d);b.a<b.b.ab();){a=oh(Cu(b),5);a.A(c)}}
function sk(){}
_=sk.prototype=new bw();_.tI=18;function pm(a){a.i=$doc.createElement(zc);a.i[kc]=Ac;return a}
function sm(a){qj(a)}
function om(){}
_=om.prototype=new cp();_.z=sm;_.tI=19;function fl(a){a.i=$doc.createElement(zc);a.i[kc]=Bc;return a}
function el(){}
_=el.prototype=new om();_.tI=20;function ol(){ol=nx;pl=ml(new ll(),Cc);rl=ml(new ll(),mc);sl=ml(new ll(),Ec);ql=rl}
var pl,ql,rl,sl;function ml(b,a){b.a=a;return b}
function ll(){}
_=ll.prototype=new ds();_.tI=0;_.a=null;function yl(){yl=nx;wl(new vl(),Fc);wl(new vl(),ad);zl=wl(new vl(),nc)}
var zl;function wl(a,b){a.a=b;return a}
function vl(){}
_=vl.prototype=new ds();_.tI=0;_.a=null;function El(a){ok(a);a.a=(ol(),ql);a.c=(yl(),zl);a.b=$doc.createElement(bd);a.d.appendChild(a.b);a.e[cd]=dd;a.e[ed]=dd;return a}
function Fl(c,d){var b,a;b=(a=$doc.createElement(fd),(a[wc]=c.a.a,undefined),(a.style[gd]=c.c.a,undefined),a);c.b.appendChild(b);vp(d);mp(c.f,d);b.appendChild(d.i);xp(d,c)}
function cm(c){var a,b;b=c.i.parentElement;a=Bk(this,c);if(a){this.b.removeChild(b)}return a}
function Cl(){}
_=Cl.prototype=new nk();_.E=cm;_.tI=21;_.b=null;function lm(){lm=nx;ju(new pw())}
function km(a,b){lm();hm(new gm(),a,b);a.i[kc]=hd;return a}
function mm(a){qj(a)}
function dm(){}
_=dm.prototype=new cp();_.z=mm;_.tI=22;function em(){}
_=em.prototype=new ds();_.tI=0;function hm(b,a,c){wp(a,$doc.createElement(jd));wi(a.i,229501|(a.i.__eventBits||0));cg(a.i,c);return b}
function gm(){}
_=gm.prototype=new em();_.tI=0;function um(c,b){var a;Fk(c,(a=b?kd:ld,$doc.createElement(a)));c.i[kc]=md;return c}
function xm(a){if(qj(a)==1024){}else{cl(this,a)}}
function tm(){}
_=tm.prototype=new Ek();_.z=xm;_.tI=23;function Bm(a){cw(new bw());a.b=cw(new bw());Em(a,false,(bn(),new Fm()));return a}
function Dm(d,a){var b,c;for(c=zu(new xu(),d.b);c.a<c.b.ab();){b=Ah(Cu(c));if(df(null.cb(),a)){return b}}return null}
function Em(d,f){var b,c,e,a;c=$doc.createElement(uc);d.a=$doc.createElement(vc);c.appendChild(d.a);if(!f){e=$doc.createElement(bd);d.a.appendChild(e)}b=(a=$doc.createElement(nd),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(od,pd);wi(d.i,2225|(d.i.__eventBits||0));d.i[kc]=qd;if(f){qo(d,zo(d.i)+rd+sd)}else{qo(d,zo(d.i)+rd+ud)}d.i.style[vd]=wd;d.i.setAttribute(xd,yd)}
function cn(a){var b;Dm(this,a.srcElement);switch(qj(a)){case 1:{iq(this.i);break}{break}case 2048:{Ah(fw(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Ah(fw(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{Ah(fw(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:Ah(fw(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:Ah(fw(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{Ah(fw(this.b,0))}}break}}}
function dn(){up(this)}
function ym(){}
_=ym.prototype=new cp();_.z=cn;_.B=dn;_.tI=24;_.a=null;function bn(){bn=nx;eq()}
function Fm(){}
_=Fm.prototype=new ds();_.tI=0;function io(b,a){b.i=a;b.i.tabIndex=0;return b}
function ko(b,a){b.i[zd]=a;if(a){qo(b,zo(b.i)+rd+Ad)}else{so(b,zo(b.i)+rd+Ad)}}
function lo(b,a){b.i[Bd]=a!=null?a:Cb}
function mo(a){var b;b=qj(a);if((b&896)!=0){cl(this,a)}else if(b==1024){}else{cl(this,a)}}
function ho(){}
_=ho.prototype=new Ek();_.z=mo;_.tI=25;function no(c,a,b){c.i=a;c.i.tabIndex=0;if(b!=null){c.i[kc]=b}return c}
function go(){}
_=go.prototype=new ho();_.tI=26;function ln(){}
_=ln.prototype=new go();_.tI=27;function vn(){vn=nx;zn=qw(new pw());An=uw(new tw())}
function un(b,a){vn();b.f=lp(new dp());b.i=a;tp(b);return b}
function wn(){var b,a;vn();var c,d;for(d=(b=qt(new pt(),Av(An.a).b.a),kv(new jv(),b));Bu(d.a.a);){c=oh((a=oh(Cu(d.a.a),11),a.r()),7);if(c.g){c.B()}}}
function yn(b){vn();var a,c;c=oh(ou(zn,b),6);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(zn.d==0){Bi(new pn())}if(!a){c=sn(new rn())}else{c=un(new on(),a)}uu(zn,b,c);vw(An,c);return c}
function on(){}
_=on.prototype=new Dj();_.tI=28;var zn,An;function pn(){}
_=pn.prototype=new ds();_.tI=29;function tn(){tn=nx;vn()}
function sn(a){tn();un(a,$doc.body);return a}
function rn(){}
_=rn.prototype=new on();_.tI=30;function eo(a){io(a,$doc.createElement(Cd));a.i[kc]=Dd;return a}
function co(){}
_=co.prototype=new ho();_.tI=31;function Do(a){ok(a);a.a=(ol(),ql);a.b=(yl(),zl);a.e[cd]=dd;a.e[ed]=dd;return a}
function Eo(c,e){var b,d,a;d=$doc.createElement(bd);b=(a=$doc.createElement(fd),(a[wc]=c.a.a,undefined),(a.style[gd]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);vp(e);mp(c.f,e);b.appendChild(e.i);xp(e,c)}
function bp(c){var a,b;b=c.i.parentElement;a=Bk(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function Bo(){}
_=Bo.prototype=new nk();_.E=bp;_.tI=32;function lp(a){a.a=eh(Eh,0,7,4,0);return a}
function mp(a,b){pp(a,b,a.b)}
function op(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function pp(d,e,a){var b,c;if(a<0||a>d.b){throw new Fr()}if(d.b==d.a.length){c=eh(Eh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){hh(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){hh(d.a,b,d.a[b-1])}hh(d.a,a,e)}
function qp(c,b){var a;if(b<0||b>=c.b){throw new Fr()}--c.b;for(a=b;a<c.b;++a){hh(c.a,a,c.a[a+1])}hh(c.a,c.b,null)}
function rp(b,c){var a;a=op(b,c);if(a==-1){throw new gx()}qp(b,a)}
function dp(){}
_=dp.prototype=new ds();_.tI=0;_.a=null;_.b=0;function gp(b,a){b.b=a;return b}
function ip(a){if(a.a>=a.b.b){throw new gx()}return a.b.a[++a.a]}
function jp(){return this.a<this.b.b-1}
function kp(){return ip(this)}
function ep(){}
_=ep.prototype=new ds();_.u=jp;_.y=kp;_.tI=0;_.a=-1;_.b=null;function aq(){aq=nx;Ae().indexOf(Fd)==0?ae:be}
function bq(){aq();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;cg(a,$moduleBase+ce)}}
function eq(){eq=nx;aq();bq()}
function iq(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function Cq(b,a){if(a.a){b.g.i.innerHTML=de}else{b.g.i.innerHTML=ee}}
function br(a){}
function ar(a){}
function mq(){}
_=mq.prototype=new wg();_.w=br;_.v=ar;_.tI=0;_.j=null;function oq(b,a){b.a=a;return b}
function qq(a){lo(this.a.b,this.a.j)}
function nq(){}
_=nq.prototype=new ds();_.A=qq;_.tI=33;_.a=null;function sq(b,a){b.a=a;return b}
function uq(a){Ah(fw(this.a.a,this.a.h.i.selectedIndex));null.cb()}
function rq(){}
_=rq.prototype=new ds();_.A=uq;_.tI=34;_.a=null;function wq(c){var a,b;c.e=Do(new Bo());c.d=El(new Cl());c.i=Do(new Bo());c.h=um(new tm(),false);c.b=eo(new co());c.c=Bm(new ym());c.f=kk(new fk(),fe);c.g=pm(new om());c.k=fl(new el());Do(new Bo());no(new go(),(a=$doc.createElement(ge),a.type=he,a),ie);no(new ln(),(b=$doc.createElement(ge),b.type=p,b),q);jk(new fk());km(new dm(),$moduleBase+r);c.a=cw(new bw());c.v(new sg());c.w(new zg());al(c.f,oq(new nq(),c));c.f.i.innerText=s;xo(c.f,t);c.k.i.innerText=u;Fl(c.d,c.c);Fl(c.d,c.k);Fl(c.d,c.f);rk(c.d,c.c,(ol(),rl));rk(c.d,c.k,pl);rk(c.d,c.f,sl);c.d.i.style[v]=w;al(c.h,sq(new rq(),c));c.h.i.size=5;c.h.i.style[v]=w;c.b.i[Bd]=x!=null?x:Cb;ko(c.b,true);c.b.i.style[v]=w;c.b.i.style[y]=A;Eo(c.i,c.h);Eo(c.i,c.b);c.i.i.style[y]=B;c.i.i.style[v]=w;Cq(c,(ir(),ir(),jr));Eo(c.e,c.d);Eo(c.e,c.i);Eo(c.e,c.g);c.e.i.style[y]=C;c.e.i.style[v]=w;Ej((vn(),yn(null)),c.e);yn(D);$wnd._IG_AdjustIFrameHeight();return c}
function vq(){}
_=vq.prototype=new mq();_.tI=0;function dt(){}
_=dt.prototype=new ds();_.tI=3;function xr(){}
_=xr.prototype=new dt();_.tI=4;function hs(){}
_=hs.prototype=new xr();_.tI=5;function er(){}
_=er.prototype=new hs();_.tI=36;function ir(){ir=nx;hr(new gr(),false);jr=hr(new gr(),true)}
function hr(a,b){ir();a.a=b;return a}
function kr(a){return a!=null&&nh(a.tI,10)&&oh(a,10).a==this.a}
function lr(){return this.a?1231:1237}
function gr(){}
_=gr.prototype=new ds();_.eQ=kr;_.hC=lr;_.tI=39;_.a=false;var jr;function rr(c,a){var b;b=new nr();return b}
function nr(){}
_=nr.prototype=new ds();_.tI=0;function or(){}
_=or.prototype=new hs();_.tI=40;function zr(){}
_=zr.prototype=new hs();_.tI=41;function Cr(){}
_=Cr.prototype=new hs();_.tI=42;function as(b,a){return b}
function Fr(){}
_=Fr.prototype=new hs();_.tI=43;function vs(b,a){if(!(a!=null&&nh(a.tI,1))){return false}return String(b)==a}
function zs(c,a,b){b=Es(b);return c.replace(RegExp(a),b)}
function As(b,a){return b.substr(a,b.length-a)}
function Cs(c){if(c.length==0||c[0]>lc&&c[c.length-1]>lc){return c}var a=c.replace(/^(\s*)/,Cb);var b=a.replace(/\s*$/,Cb);return b}
function Es(b){var a;a=0;while(0<=(a=b.indexOf(E,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+F+As(b,++a)}else{b=b.substr(0,a-0)+As(b,++a)}}return b}
function Fs(a){return vs(this,a)}
function bt(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ct(){return rs(this)}
_=String.prototype;_.eQ=Fs;_.hC=ct;_.tI=2;function ms(){ms=nx;ns={};qs={}}
function os(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function rs(c){ms();var a=ab+c;var b=qs[a];if(b!=null){return b}b=ns[a];if(b==null){b=os(c)}ss();return qs[a]=b}
function ss(){if(ps==256){ns=qs;qs={};ps=0}++ps}
var ns,ps=0,qs;function ft(){}
_=ft.prototype=new hs();_.tI=44;function Av(b){var a;a=ut(new ot(),b);return pv(new iv(),b,a)}
function Bv(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&nh(c.tI,13))){return false}e=oh(c,13);if(oh(this,13).d!=e.d){return false}for(b=qt(new pt(),ut(new ot(),e).a);Bu(b.a);){a=oh(Cu(b.a),11);d=a.r();f=a.s();if(!(d==null?oh(this,13).c:d!=null&&nh(d.tI,1)?qu(oh(this,13),oh(d,1)):pu(oh(this,13),d,~~ve(d)))){return false}if(!mx(f,d==null?oh(this,13).b:d!=null&&nh(d.tI,1)?oh(this,13).e[ab+oh(d,1)]:mu(oh(this,13),d,~~ve(d)))){return false}}return true}
function Cv(){var a,b,c;c=0;for(b=qt(new pt(),ut(new ot(),oh(this,13)).a);Bu(b.a);){a=oh(Cu(b.a),11);c+=a.hC();c=~~c}return c}
function hv(){}
_=hv.prototype=new ds();_.eQ=Bv;_.hC=Cv;_.tI=0;function hu(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.m(a[f])}}}}
function iu(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=fu(e,c.substring(1));a.m(b)}}}
function ju(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function lu(b,a){return a==null?b.c:a!=null&&nh(a.tI,1)?qu(b,oh(a,1)):pu(b,a,~~ve(a))}
function ou(b,a){return a==null?b.b:a!=null&&nh(a.tI,1)?b.e[ab+oh(a,1)]:mu(b,a,~~ve(a))}
function mu(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.q(g,d)){return c.s()}}}return null}
function pu(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(h.q(g,d)){return true}}}return false}
function qu(b,a){return ab+a in b.e}
function uu(b,a,c){return a==null?su(b,c):a!=null&&nh(a.tI,1)?tu(b,oh(a,1),c):ru(b,a,c,~~ve(a))}
function ru(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.r();if(i.q(g,d)){var h=c.s();c.F(j);return h}}}else{a=i.a[e]=[]}var c=Fw(new Ew(),g,j);a.push(c);++i.d;return null}
function su(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function tu(d,a,e){var b,c=d.e;a=ab+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function vu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&te(a,b)}
function nt(){}
_=nt.prototype=new hv();_.q=vu;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fv(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&nh(b.tI,14))){return false}c=oh(b,14);if(c.ab()!=this.ab()){return false}for(a=c.x();a.u();){d=a.y();if(!this.n(d)){return false}}return true}
function aw(){var a,b,c;a=0;for(b=this.x();b.u();){c=b.y();if(c!=null){a+=ve(c);a=~~a}}return a}
function Dv(){}
_=Dv.prototype=new it();_.eQ=Fv;_.hC=aw;_.tI=45;function ut(b,a){b.a=a;return b}
function wt(d,c){var a,b,e;if(c!=null&&nh(c.tI,11)){a=oh(c,11);b=a.r();if(lu(d.a,b)){e=ou(d.a,b);return sw(a.s(),e)}}return false}
function xt(a){return wt(this,a)}
function yt(){return qt(new pt(),this.a)}
function zt(){return this.a.d}
function ot(){}
_=ot.prototype=new Dv();_.n=xt;_.x=yt;_.ab=zt;_.tI=46;_.a=null;function qt(c,b){var a;c.b=b;a=cw(new bw());if(c.b.c){dw(a,Bt(new At(),c.b))}iu(c.b,a);hu(c.b,a);c.a=zu(new xu(),a);return c}
function st(){return Bu(this.a)}
function tt(){return oh(Cu(this.a),11)}
function pt(){}
_=pt.prototype=new ds();_.u=st;_.y=tt;_.tI=0;_.a=null;_.b=null;function xv(b){var a;if(b!=null&&nh(b.tI,11)){a=oh(b,11);if(mx(this.r(),a.r())&&mx(this.s(),a.s())){return true}}return false}
function yv(){var a,b;a=0;b=0;if(this.r()!=null){a=ve(this.r())}if(this.s()!=null){b=ve(this.s())}return a^b}
function vv(){}
_=vv.prototype=new ds();_.eQ=xv;_.hC=yv;_.tI=47;function Bt(b,a){b.a=a;return b}
function Dt(){return null}
function Et(){return this.a.b}
function Ft(a){return su(this.a,a)}
function At(){}
_=At.prototype=new vv();_.r=Dt;_.s=Et;_.F=Ft;_.tI=48;_.a=null;function bu(c,a,b){c.b=b;c.a=a;return c}
function du(){return this.a}
function eu(){return this.b.e[ab+this.a]}
function fu(b,a){return bu(new au(),a,b)}
function gu(a){return tu(this.b,this.a,a)}
function au(){}
_=au.prototype=new vv();_.r=du;_.s=eu;_.F=gu;_.tI=49;_.a=null;_.b=null;function zu(b,a){b.b=a;return b}
function Bu(a){return a.a<a.b.ab()}
function Cu(a){if(a.a>=a.b.ab()){throw new gx()}return a.b.t(a.a++)}
function Du(){return this.a<this.b.ab()}
function Eu(){return Cu(this)}
function xu(){}
_=xu.prototype=new ds();_.u=Du;_.y=Eu;_.tI=0;_.a=0;_.b=null;function pv(b,a,c){b.a=a;b.b=c;return b}
function sv(a){return lu(this.a,a)}
function tv(){var a;return a=qt(new pt(),this.b.a),kv(new jv(),a)}
function uv(){return this.b.a.d}
function iv(){}
_=iv.prototype=new Dv();_.n=sv;_.x=tv;_.ab=uv;_.tI=50;_.a=null;_.b=null;function kv(a,b){a.a=b;return a}
function nv(){return Bu(this.a.a)}
function ov(){var a;return a=oh(Cu(this.a.a),11),a.r()}
function jv(){}
_=jv.prototype=new ds();_.u=nv;_.y=ov;_.tI=0;_.a=null;function qw(a){ju(a);return a}
function sw(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&te(a,b)}
function pw(){}
_=pw.prototype=new nt();_.tI=51;function uw(a){a.a=qw(new pw());return a}
function vw(c,a){var b;b=uu(c.a,a,c);return b==null}
function xw(b){var a;return a=uu(this.a,b,this),a==null}
function yw(a){return lu(this.a,a)}
function zw(){var a;return a=qt(new pt(),Av(this.a).b.a),kv(new jv(),a)}
function Aw(){return this.a.d}
function tw(){}
_=tw.prototype=new Dv();_.m=xw;_.n=yw;_.x=zw;_.ab=Aw;_.tI=52;_.a=null;function Fw(b,a,c){b.a=a;b.b=c;return b}
function bx(){return this.a}
function cx(){return this.b}
function ex(b){var a;a=this.b;this.b=b;return a}
function Ew(){}
_=Ew.prototype=new vv();_.r=bx;_.s=cx;_.F=ex;_.tI=53;_.a=null;_.b=null;function gx(){}
_=gx.prototype=new hs();_.tI=54;function mx(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&te(a,b)}
function cr(){!!$stats&&$stats({moduleName:$moduleName,subSystem:bb,evtGroup:cb,millis:(new Date()).getTime(),type:db,className:fb});wq(new vq())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{cr()}catch(a){b(d)}else{cr()}}
function nx(){}
var Eh=rr(gb,hb),Fh=rr(ib,jb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();