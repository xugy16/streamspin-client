(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var yb='',gc=' ',m='#',B='$',sc=', Size: ',jd='-',nb='/',Dc='0',nd='0px',r='100%',w='100px',v='150px',x='300px',C=':',bd='<SELECT MULTIPLE>',cd='<SELECT>',n='?',dc='BackgroundImageCache',fd='DIV',sb='DOMMouseScroll',ae='INPUT',rc='Index: ',fb='Object;',Ed='Status: <b>Offline<\/b>',Dd='Status: <b>Online<\/b>',t='This is some content that should show how the widget handles stuff,\n <b> wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er<\/b>',cb='Widget;',bb='[Lcom.google.gwt.user.client.ui.',db='[Ljava.lang.',A='\\',y='__gwt_gadget_content_div',oc='__gwt_initWindowCloseHandler',wd='align',zc='blur',yc='bottom',kc='button',Ec='cellPadding',Cc='cellSpacing',wc='center',ed='change',fc='className',Cd='clear.cache.gif',pd='click',ab='com.streamspin.client.StreamSpinClient',tb='contextmenu',Ad='dblclick',tc='div',qb='error',o='focus',bc='function',cc='function ',lc='gwt-Button',vc='gwt-HTML',Fc='gwt-Image',uc='gwt-Label',dd='gwt-ListBox',id='gwt-MenuBar',ee='gwt-PasswordTextBox',ud='gwt-TextArea',ce='gwt-TextBox',u='height',od='hideFocus',ld='horizontal',Bd='http://',yd='https',zd='https://',p='images/daisy.gif',ad='img',z='keydown',eb='keypress',gb='keyup',hc='left',hb='load',ib='losecapture',hd='menubar',Ac='middle',E='moduleStartup',jb='mousedown',kb='mousemove',lb='mouseout',mb='mouseover',ob='mouseup',rb='mousewheel',F='onModuleLoadStart',Eb='onblur',ub='onclick',ac='oncontextmenu',Fb='ondblclick',Db='onfocus',Ab='onkeydown',Bb='onkeypress',Cb='onkeyup',vb='onmousedown',xb='onmousemove',wb='onmouseup',zb='onmousewheel',md='outline',de='password',jc='position',rd='readOnly',sd='readonly',xc='right',gd='role',ec='script',pb='scroll',Fd='someTest',D='startup',mc='submit',pc='table',qc='tbody',vd='td',be='text',td='textarea',ic='top',Bc='tr',qd='true',nc='type',s='value',kd='vertical',xd='verticalAlign',q='width';var _;function pr(a){return this===(a==null?null:a)}
function qr(){return this.$H||(this.$H=++ze)}
function nr(){}
_=nr.prototype={};_.eQ=pr;_.hC=qr;_.tM=xw;_.tI=1;function pe(b,a){return b.tM==xw||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function re(a){return a.tM==xw||a.tI==2?a.hC():a.$H||(a.$H=++ze)}
function we(){var b=$doc.location.href;var a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.indexOf(n);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(nb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+nb:yb}
var ze=0;function Fe(b,a){return b===a||b.contains(a)}
function tf(){tf=xw;wf()}
function vf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function wf(){try{$doc.execCommand(dc,false,true)}catch(a){}}
function Af(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function Bf(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;vf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function Cf(a,c){tf();var b,d;if(Fr(a.__pendingSrc||a.src,c)){return}if(!Df){Df={}}b=a.__pendingSrc;if(b!=null){d=Df[b];if(d==a){Bf(Df,d)}else{Af(d,a)}}d=Df[c];if(!d){vf(Df,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var Df=null;function mg(){}
_=mg.prototype=new nr();_.tI=0;function qg(){}
_=qg.prototype=new nr();_.tI=0;function tg(){}
_=tg.prototype=new nr();_.tI=0;function Dg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function Eg(a,f,c,b,e){var d;d=Dg(e,b);Fg(a,f,c,d);return d}
function Fg(b,d,c,a){if(!ah){ah=new zg()}dh(a,ah);a.tI=d;a.qI=c;return a}
function bh(a,b,c){if(c!=null){if(a.qI>0&&!gh(c.tI,a.qI)){throw new oq()}if(a.qI<0&&(c.tM==xw||c.tI==2)){throw new oq()}}return a[b]=c}
function dh(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function zg(){}
_=zg.prototype=new nr();_.tI=0;_.length=0;_.qI=0;var ah=null;function hh(b,a){return b&&!!vh[b][a]}
function gh(b,a){return b&&vh[b][a]}
function ih(b,a){if(b!=null&&!gh(b.tI,a)){throw new yq()}return b}
function uh(a){if(a!=null){throw new yq()}return a}
var vh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{12:1},{12:1},{12:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{5:1},{2:1},{2:1},{2:1},{2:1},{10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{14:1},{14:1},{11:1},{11:1},{11:1},{14:1},{13:1},{14:1},{11:1},{2:1},{9:1}];function ki(b,a,c){var d;if(a==ni){if(kj(b)==8192){ni=null}}d=ji;ji=b;try{c.w(b)}finally{ji=d}}
function mi(a){return true}
function qi(a,b){mj();dj(a,b)}
var ji=null,ni=null;function vi(a){Ai();if(!wi){wi=mv(new lv())}nv(wi,a)}
function xi(){var a;if(wi){for(a=du(new bu(),wi);a.a<a.b.C();){ih(gu(a),3);hn()}}}
function yi(){var a,b;b=null;if(wi){for(a=du(new bu(),wi);a.a<a.b.C();){ih(gu(a),3);b=null}}return b}
function Ai(){if(!zi){zi=true;uj(tj(),oc)}}
var wi=null,zi=false;function kj(a){switch(a.type){case zc:return 4096;case ed:return 1024;case pd:return 1;case Ad:return 2;case o:return 2048;case z:return 128;case eb:return 256;case gb:return 512;case hb:return 32768;case ib:return 8192;case jb:return 4;case kb:return 64;case lb:return 32;case mb:return 16;case ob:return 8;case pb:return 16384;case qb:return 65536;case rb:return 131072;case sb:return 131072;case tb:return 262144;}}
function mj(){if(!oj){cj();oj=true}}
var oj=false;function cj(){gj=function(){var c=ej;ej=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!mi($wnd.event)){ej=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&hh(b.tI,4)&&!(b!=null&&(b.tM!=xw&&b.tI!=2))){ki($wnd.event,a,b)}}ej=c};fj=function(){var a=$doc.createEventObject();this.fireEvent(ub,a);if(this.__eventBits&2){gj.call(this)}};var e=function(){gj.call($doc.body)};var d=function(){fj.call($doc.body)};$doc.body.attachEvent(ub,e);$doc.body.attachEvent(vb,e);$doc.body.attachEvent(wb,e);$doc.body.attachEvent(xb,e);$doc.body.attachEvent(zb,e);$doc.body.attachEvent(Ab,e);$doc.body.attachEvent(Bb,e);$doc.body.attachEvent(Cb,e);$doc.body.attachEvent(Db,e);$doc.body.attachEvent(Eb,e);$doc.body.attachEvent(Fb,d);$doc.body.attachEvent(ac,e)}
function dj(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?gj:null;if(b&3)c.ondblclick=a&3?fj:null;if(b&4)c.onmousedown=a&4?gj:null;if(b&8)c.onmouseup=a&8?gj:null;if(b&16)c.onmouseover=a&16?gj:null;if(b&32)c.onmouseout=a&32?gj:null;if(b&64)c.onmousemove=a&64?gj:null;if(b&128)c.onkeydown=a&128?gj:null;if(b&256)c.onkeypress=a&256?gj:null;if(b&512)c.onkeyup=a&512?gj:null;if(b&1024)c.onchange=a&1024?gj:null;if(b&2048)c.onfocus=a&2048?gj:null;if(b&4096)c.onblur=a&4096?gj:null;if(b&8192)c.onlosecapture=a&8192?gj:null;if(b&16384)c.onscroll=a&16384?gj:null;if(b&32768)c.onload=a&32768?gj:null;if(b&65536)c.onerror=a&65536?gj:null;if(b&131072)c.onmousewheel=a&131072?gj:null;if(b&262144)c.oncontextmenu=a&262144?gj:null}
var ej=null,fj=null,gj=null;function tj(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function uj(c,b){var d,a;c=ds(c,bc,cc+b);d=(a=$doc.createElement(ec),a.text=c,a);$doc.body.appendChild(d);vj();$doc.body.removeChild(d)}
function vj(){$wnd.__gwt_initWindowCloseHandler(function(){return yi()},function(){xi()})}
function bo(b,a){lo(b.h,a,true)}
function eo(b,a){lo(b.h,a,false)}
function fo(b,a){if(b.h){go(b.h,a)}b.h=a}
function go(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function ko(a){var b,c;b=a[fc]==null?null:String(a[fc]);c=b.indexOf(ls(32));if(c>=0){return b.substr(0,c-0)}return b}
function lo(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new rr()}j=gs(j);if(j.length==0){throw new dr()}i=c[fc]==null?null:String(c[fc]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=gc}c[fc]=i+j}}else{if(e!=-1){b=gs(i.substr(0,e-0));d=gs(es(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+gc+d}c[fc]=h}}}
function ao(){}
_=ao.prototype=new nr();_.tI=7;_.h=null;function ep(a){if(a.f){throw new gr()}a.f=true;a.h.__listener=a;a.l();a.y()}
function fp(a){if(!a.f){throw new gr()}try{a.z()}finally{a.m();a.h.__listener=null;a.f=false}}
function gp(a){if(a.g){a.g.A(a)}else if(a.g){throw new gr()}}
function hp(b,a){if(b.f){b.h.__listener=null}fo(b,a);if(b.f){b.h.__listener=b}}
function ip(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.x()}c.g=null}else{if(a){throw new gr()}c.g=b;if(b.f){ep(c)}}}
function jp(){}
function kp(){}
function lp(a){}
function mp(){fp(this)}
function np(){}
function op(){}
function to(){}
_=to.prototype=new ao();_.l=jp;_.m=kp;_.w=lp;_.x=mp;_.y=np;_.z=op;_.tI=8;_.f=false;_.g=null;function ym(){var a,b;for(b=this.u();b.a<b.b.b-1;){a=zo(b);ep(a)}}
function zm(){var a,b;for(b=this.u();b.a<b.b.b-1;){a=zo(b);a.x()}}
function Am(){}
function Bm(){}
function wm(){}
_=wm.prototype=new to();_.l=ym;_.m=zm;_.y=Am;_.z=Bm;_.tI=9;function rk(c,a,b){gp(a);Do(c.e,a);b.appendChild(a.h);ip(a,c)}
function tk(b,c){var a;if(c.g!=b){return false}ip(c,null);a=c.h;a.parentElement.removeChild(a);cp(b.e,c);return true}
function uk(){return xo(new vo(),this.e)}
function vk(a){return tk(this,a)}
function pk(){}
_=pk.prototype=new wm();_.u=uk;_.A=vk;_.tI=10;function yj(a,b){rk(a,b,a.h)}
function Aj(b,c){var a;a=tk(b,c);if(a){Bj(c.h)}return a}
function Bj(a){a.style[hc]=yb;a.style[ic]=yb;a.style[jc]=yb}
function Cj(a){return Aj(this,a)}
function xj(){}
_=xj.prototype=new pk();_.A=Cj;_.tI=11;function xk(b,a){b.h=a;b.h.tabIndex=0;return b}
function yk(b,a){if(!b.a){b.a=lk(new kk());qi(b.h,1|(b.h.__eventBits||0))}nv(b.a,a)}
function Ak(b,a){if(kj(a)==1){if(b.a){nk(b.a)}}}
function Bk(a){Ak(this,a)}
function wk(){}
_=wk.prototype=new to();_.w=Bk;_.tI=12;_.a=null;function bk(b,a){b.h=a;b.h.tabIndex=0;return b}
function ak(){}
_=ak.prototype=new wk();_.tI=13;function dk(a){bk(a,$doc.createElement(kc));gk(a.h);a.h[fc]=lc;return a}
function ek(b,a){dk(b);b.h.innerHTML=a||yb;return b}
function gk(b){if(b.type==mc){try{b.setAttribute(nc,kc)}catch(a){}}}
function Fj(){}
_=Fj.prototype=new ak();_.tI=14;function ik(a){a.e=Co(new uo());a.d=$doc.createElement(pc);a.c=$doc.createElement(qc);a.d.appendChild(a.c);a.h=a.d;return a}
function hk(){}
_=hk.prototype=new pk();_.tI=15;_.c=null;_.d=null;function ts(a,b){var c;while(a.r()){c=a.v();if(b==null?c==null:pe(b,c)){return a}}return null}
function vs(a){throw new ps()}
function ws(b){var a;a=ts(this.u(),b);return !!a}
function ss(){}
_=ss.prototype=new nr();_.j=vs;_.k=ws;_.tI=0;function lu(a){this.i(this.C(),a);return true}
function ku(b,a){throw new ps()}
function mu(a,b){if(a<0||a>=b){pu(a,b)}}
function nu(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&hh(e.tI,12))){return false}f=ih(e,12);if(this.C()!=f.C()){return false}c=du(new bu(),this);d=f.u();while(c.a<c.b.C()){a=gu(c);b=gu(d);if(!(a==null?b==null:pe(a,b))){return false}}return true}
function ou(){var a,b,c;b=1;a=du(new bu(),this);while(a.a<a.b.C()){c=gu(a);b=31*b+(c==null?0:re(c));b=~~b}return b}
function pu(a,b){throw kr(new jr(),rc+a+sc+b)}
function qu(){return du(new bu(),this)}
function au(){}
_=au.prototype=new ss();_.j=lu;_.i=ku;_.eQ=nu;_.hC=ou;_.u=qu;_.tI=16;function mv(a){a.a=Eg(zh,0,0,0,0);a.b=0;return a}
function nv(b,a){bh(b.a,b.b++,a);return true}
function pv(b,a){mu(a,b.b);return b.a[a]}
function qv(c,b,a){for(;a<c.b;++a){if(ww(b,c.a[a])){return a}}return -1}
function sv(a){return bh(this.a,this.b++,a),true}
function rv(a,b){if(a<0||a>this.b){pu(a,this.b)}this.a.splice(a,0,b);++this.b}
function tv(a){return qv(this,a,0)!=-1}
function uv(a){return mu(a,this.b),this.a[a]}
function vv(){return this.b}
function lv(){}
_=lv.prototype=new au();_.j=sv;_.i=rv;_.k=tv;_.q=uv;_.C=vv;_.tI=17;_.a=null;_.b=0;function lk(a){mv(a);return a}
function nk(c){var a,b;for(b=du(new bu(),c);b.a<b.b.C();){a=ih(gu(b),5);uh(pv(a.a.a,a.a.f.h.selectedIndex));null.E()}}
function kk(){}
_=kk.prototype=new lv();_.tI=18;function cm(a){a.h=$doc.createElement(tc);a.h[fc]=uc;return a}
function em(a){kj(a)}
function bm(){}
_=bm.prototype=new to();_.w=em;_.tI=19;function Dk(a){a.h=$doc.createElement(tc);a.h[fc]=vc;return a}
function Ck(){}
_=Ck.prototype=new bm();_.tI=20;function gl(){gl=xw;el(new dl(),wc);il=el(new dl(),hc);el(new dl(),xc);hl=il}
var hl,il;function el(b,a){b.a=a;return b}
function dl(){}
_=dl.prototype=new nr();_.tI=0;_.a=null;function ol(){ol=xw;ml(new ll(),yc);ml(new ll(),Ac);pl=ml(new ll(),ic)}
var pl;function ml(a,b){a.a=b;return a}
function ll(){}
_=ll.prototype=new nr();_.tI=0;_.a=null;function tl(a){ik(a);gl();ol();a.a=$doc.createElement(Bc);a.c.appendChild(a.a);a.d[Cc]=Dc;a.d[Ec]=Dc;return a}
function vl(c){var a,b;b=c.h.parentElement;a=tk(this,c);if(a){this.a.removeChild(b)}return a}
function sl(){}
_=sl.prototype=new hk();_.A=vl;_.tI=21;_.a=null;function El(){El=xw;tt(new zv())}
function Dl(a,b){El();Al(new zl(),a,b);a.h[fc]=Fc;return a}
function Fl(a){kj(a)}
function wl(){}
_=wl.prototype=new to();_.w=Fl;_.tI=22;function xl(){}
_=xl.prototype=new nr();_.tI=0;function Al(b,a,c){hp(a,$doc.createElement(ad));qi(a.h,229501|(a.h.__eventBits||0));Cf(a.h,c);return b}
function zl(){}
_=zl.prototype=new xl();_.tI=0;function gm(c,b){var a;xk(c,(a=b?bd:cd,$doc.createElement(a)));c.h[fc]=dd;return c}
function jm(a){if(kj(a)==1024){}else{Ak(this,a)}}
function fm(){}
_=fm.prototype=new wk();_.w=jm;_.tI=23;function nm(a,b){mv(new lv());a.b=mv(new lv());qm(a,b,(tm(),new rm()));return a}
function pm(d,a){var b,c;for(c=du(new bu(),d.b);c.a<c.b.C();){b=uh(gu(c));if(Fe(null.E(),a)){return b}}return null}
function qm(d,f){var b,c,e,a;c=$doc.createElement(pc);d.a=$doc.createElement(qc);c.appendChild(d.a);if(!f){e=$doc.createElement(Bc);d.a.appendChild(e)}b=(a=$doc.createElement(fd),a.tabIndex=0,a);b.appendChild(c);d.h=b;d.h.setAttribute(gd,hd);qi(d.h,2225|(d.h.__eventBits||0));d.h[fc]=id;if(f){bo(d,ko(d.h)+jd+kd)}else{bo(d,ko(d.h)+jd+ld)}d.h.style[md]=nd;d.h.setAttribute(od,qd)}
function um(a){var b;pm(this,a.srcElement);switch(kj(a)){case 1:{zp(this.h);break}{break}case 2048:{uh(pv(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{uh(pv(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{uh(pv(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:uh(pv(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:uh(pv(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{uh(pv(this.b,0))}}break}}}
function vm(){fp(this)}
function km(){}
_=km.prototype=new to();_.w=um;_.x=vm;_.tI=24;_.a=null;function tm(){tm=xw;vp()}
function rm(){}
_=rm.prototype=new nr();_.tI=0;function zn(b,a){b.h=a;b.h.tabIndex=0;return b}
function Bn(b,a){b.h[rd]=a;if(a){bo(b,ko(b.h)+jd+sd)}else{eo(b,ko(b.h)+jd+sd)}}
function Dn(a){var b;b=kj(a);if((b&896)!=0){Ak(this,a)}else if(b==1024){}else{Ak(this,a)}}
function yn(){}
_=yn.prototype=new wk();_.w=Dn;_.tI=25;function En(c,a,b){c.h=a;c.h.tabIndex=0;if(b!=null){c.h[fc]=b}return c}
function xn(){}
_=xn.prototype=new yn();_.tI=26;function Cm(){}
_=Cm.prototype=new xn();_.tI=27;function gn(){gn=xw;ln=Av(new zv());mn=Ev(new Dv())}
function fn(b,a){gn();b.e=Co(new uo());b.h=a;ep(b);return b}
function hn(){var b,a;gn();var c,d;for(d=(b=As(new zs(),ev(mn.a).b.a),uu(new tu(),b));fu(d.a.a);){c=ih((a=ih(gu(d.a.a),11),a.o()),7);if(c.f){c.x()}}}
function kn(b){gn();var a,c;c=ih(yt(ln,b),6);if(c){return c}a=null;if(b!=null){if(!(a=$doc.getElementById(b))){return null}}if(ln.d==0){vi(new an())}if(!a){c=dn(new cn())}else{c=fn(new Fm(),a)}Et(ln,b,c);Fv(mn,c);return c}
function Fm(){}
_=Fm.prototype=new xj();_.tI=28;var ln,mn;function an(){}
_=an.prototype=new nr();_.tI=29;function en(){en=xw;gn()}
function dn(a){en();fn(a,$doc.body);return a}
function cn(){}
_=cn.prototype=new Fm();_.tI=30;function vn(a){zn(a,$doc.createElement(td));a.h[fc]=ud;return a}
function un(){}
_=un.prototype=new yn();_.tI=31;function oo(a){ik(a);a.a=(gl(),hl);a.b=(ol(),pl);a.d[Cc]=Dc;a.d[Ec]=Dc;return a}
function po(c,e){var b,d,a;d=$doc.createElement(Bc);b=(a=$doc.createElement(vd),(a[wd]=c.a.a,undefined),(a.style[xd]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);gp(e);Do(c.e,e);b.appendChild(e.h);ip(e,c)}
function so(c){var a,b;b=c.h.parentElement;a=tk(this,c);if(a){this.c.removeChild(b.parentElement)}return a}
function mo(){}
_=mo.prototype=new hk();_.A=so;_.tI=32;function Co(a){a.a=Eg(yh,0,7,4,0);return a}
function Do(a,b){ap(a,b,a.b)}
function Fo(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function ap(d,e,a){var b,c;if(a<0||a>d.b){throw new jr()}if(d.b==d.a.length){c=Eg(yh,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){bh(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){bh(d.a,b,d.a[b-1])}bh(d.a,a,e)}
function bp(c,b){var a;if(b<0||b>=c.b){throw new jr()}--c.b;for(a=b;a<c.b;++a){bh(c.a,a,c.a[a+1])}bh(c.a,c.b,null)}
function cp(b,c){var a;a=Fo(b,c);if(a==-1){throw new qw()}bp(b,a)}
function uo(){}
_=uo.prototype=new nr();_.tI=0;_.a=null;_.b=0;function xo(b,a){b.b=a;return b}
function zo(a){if(a.a>=a.b.b){throw new qw()}return a.b.a[++a.a]}
function Ao(){return this.a<this.b.b-1}
function Bo(){return zo(this)}
function vo(){}
_=vo.prototype=new nr();_.r=Ao;_.v=Bo;_.tI=0;_.a=-1;_.b=null;function rp(){rp=xw;we().indexOf(yd)==0?zd:Bd}
function sp(){rp();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;Cf(a,$moduleBase+Cd)}}
function vp(){vp=xw;rp();sp()}
function zp(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function hq(b,a){if(a.a){b.e.h.innerHTML=Dd}else{b.e.h.innerHTML=Ed}}
function lq(a){}
function kq(a){}
function Dp(){}
_=Dp.prototype=new qg();_.t=lq;_.s=kq;_.tI=0;function Fp(b,a){b.a=a;return b}
function Ep(){}
_=Ep.prototype=new nr();_.tI=33;_.a=null;function cq(c){var a,b;c.d=oo(new mo());c.c=tl(new sl());c.g=oo(new mo());c.f=gm(new fm(),false);c.b=vn(new un());nm(new km(),false);ek(new Fj(),Fd);c.e=cm(new bm());Dk(new Ck());oo(new mo());En(new xn(),(a=$doc.createElement(ae),a.type=be,a),ce);En(new Cm(),(b=$doc.createElement(ae),b.type=de,b),ee);dk(new Fj());Dl(new wl(),$moduleBase+p);c.a=mv(new lv());c.s(new mg());c.t(new tg());yk(c.f,Fp(new Ep(),c));c.f.h.size=5;c.f.h.style[q]=r;c.b.h[s]=t!=null?t:yb;Bn(c.b,true);c.b.h.style[q]=r;c.b.h.style[u]=v;po(c.g,c.f);po(c.g,c.b);c.g.h.style[u]=w;c.g.h.style[q]=r;hq(c,(sq(),sq(),tq));po(c.d,c.c);po(c.d,c.g);po(c.d,c.e);c.d.h.style[u]=x;c.d.h.style[q]=r;yj((gn(),kn(null)),c.d);kn(y);$wnd._IG_AdjustIFrameHeight();return c}
function bq(){}
_=bq.prototype=new Dp();_.tI=0;function ns(){}
_=ns.prototype=new nr();_.tI=3;function br(){}
_=br.prototype=new ns();_.tI=4;function rr(){}
_=rr.prototype=new br();_.tI=5;function oq(){}
_=oq.prototype=new rr();_.tI=35;function sq(){sq=xw;rq(new qq(),false);tq=rq(new qq(),true)}
function rq(a,b){sq();a.a=b;return a}
function uq(a){return a!=null&&hh(a.tI,10)&&ih(a,10).a==this.a}
function vq(){return this.a?1231:1237}
function qq(){}
_=qq.prototype=new nr();_.eQ=uq;_.hC=vq;_.tI=38;_.a=false;var tq;function Bq(c,a){var b;b=new xq();return b}
function xq(){}
_=xq.prototype=new nr();_.tI=0;function yq(){}
_=yq.prototype=new rr();_.tI=39;function dr(){}
_=dr.prototype=new rr();_.tI=40;function gr(){}
_=gr.prototype=new rr();_.tI=41;function kr(b,a){return b}
function jr(){}
_=jr.prototype=new rr();_.tI=42;function Fr(b,a){if(!(a!=null&&hh(a.tI,1))){return false}return String(b)==a}
function ds(c,a,b){b=is(b);return c.replace(RegExp(a),b)}
function es(b,a){return b.substr(a,b.length-a)}
function gs(c){if(c.length==0||c[0]>gc&&c[c.length-1]>gc){return c}var a=c.replace(/^(\s*)/,yb);var b=a.replace(/\s*$/,yb);return b}
function is(b){var a;a=0;while(0<=(a=b.indexOf(A,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+B+es(b,++a)}else{b=b.substr(0,a-0)+es(b,++a)}}return b}
function js(a){return Fr(this,a)}
function ls(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ms(){return Br(this)}
_=String.prototype;_.eQ=js;_.hC=ms;_.tI=2;function wr(){wr=xw;xr={};Ar={}}
function yr(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function Br(c){wr();var a=C+c;var b=Ar[a];if(b!=null){return b}b=xr[a];if(b==null){b=yr(c)}Cr();return Ar[a]=b}
function Cr(){if(zr==256){xr=Ar;Ar={};zr=0}++zr}
var xr,zr=0,Ar;function ps(){}
_=ps.prototype=new rr();_.tI=43;function ev(b){var a;a=Es(new ys(),b);return zu(new su(),b,a)}
function fv(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&hh(c.tI,13))){return false}e=ih(c,13);if(ih(this,13).d!=e.d){return false}for(b=As(new zs(),Es(new ys(),e).a);fu(b.a);){a=ih(gu(b.a),11);d=a.o();f=a.p();if(!(d==null?ih(this,13).c:d!=null&&hh(d.tI,1)?At(ih(this,13),ih(d,1)):zt(ih(this,13),d,~~re(d)))){return false}if(!ww(f,d==null?ih(this,13).b:d!=null&&hh(d.tI,1)?ih(this,13).e[C+ih(d,1)]:wt(ih(this,13),d,~~re(d)))){return false}}return true}
function gv(){var a,b,c;c=0;for(b=As(new zs(),Es(new ys(),ih(this,13)).a);fu(b.a);){a=ih(gu(b.a),11);c+=a.hC();c=~~c}return c}
function ru(){}
_=ru.prototype=new nr();_.eQ=fv;_.hC=gv;_.tI=0;function rt(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function st(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=pt(e,c.substring(1));a.j(b)}}}
function tt(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function vt(b,a){return a==null?b.c:a!=null&&hh(a.tI,1)?At(b,ih(a,1)):zt(b,a,~~re(a))}
function yt(b,a){return a==null?b.b:a!=null&&hh(a.tI,1)?b.e[C+ih(a,1)]:wt(b,a,~~re(a))}
function wt(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function zt(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function At(b,a){return C+a in b.e}
function Et(b,a,c){return a==null?Ct(b,c):a!=null&&hh(a.tI,1)?Dt(b,ih(a,1),c):Bt(b,a,c,~~re(a))}
function Bt(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.B(j);return h}}}else{a=i.a[e]=[]}var c=jw(new iw(),g,j);a.push(c);++i.d;return null}
function Ct(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function Dt(d,a,e){var b,c=d.e;a=C+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Ft(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function xs(){}
_=xs.prototype=new ru();_.n=Ft;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function jv(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&hh(b.tI,14))){return false}c=ih(b,14);if(c.C()!=this.C()){return false}for(a=c.u();a.r();){d=a.v();if(!this.k(d)){return false}}return true}
function kv(){var a,b,c;a=0;for(b=this.u();b.r();){c=b.v();if(c!=null){a+=re(c);a=~~a}}return a}
function hv(){}
_=hv.prototype=new ss();_.eQ=jv;_.hC=kv;_.tI=44;function Es(b,a){b.a=a;return b}
function at(d,c){var a,b,e;if(c!=null&&hh(c.tI,11)){a=ih(c,11);b=a.o();if(vt(d.a,b)){e=yt(d.a,b);return Cv(a.p(),e)}}return false}
function bt(a){return at(this,a)}
function ct(){return As(new zs(),this.a)}
function dt(){return this.a.d}
function ys(){}
_=ys.prototype=new hv();_.k=bt;_.u=ct;_.C=dt;_.tI=45;_.a=null;function As(c,b){var a;c.b=b;a=mv(new lv());if(c.b.c){nv(a,ft(new et(),c.b))}st(c.b,a);rt(c.b,a);c.a=du(new bu(),a);return c}
function Cs(){return fu(this.a)}
function Ds(){return ih(gu(this.a),11)}
function zs(){}
_=zs.prototype=new nr();_.r=Cs;_.v=Ds;_.tI=0;_.a=null;_.b=null;function bv(b){var a;if(b!=null&&hh(b.tI,11)){a=ih(b,11);if(ww(this.o(),a.o())&&ww(this.p(),a.p())){return true}}return false}
function cv(){var a,b;a=0;b=0;if(this.o()!=null){a=re(this.o())}if(this.p()!=null){b=re(this.p())}return a^b}
function Fu(){}
_=Fu.prototype=new nr();_.eQ=bv;_.hC=cv;_.tI=46;function ft(b,a){b.a=a;return b}
function ht(){return null}
function it(){return this.a.b}
function jt(a){return Ct(this.a,a)}
function et(){}
_=et.prototype=new Fu();_.o=ht;_.p=it;_.B=jt;_.tI=47;_.a=null;function lt(c,a,b){c.b=b;c.a=a;return c}
function nt(){return this.a}
function ot(){return this.b.e[C+this.a]}
function pt(b,a){return lt(new kt(),a,b)}
function qt(a){return Dt(this.b,this.a,a)}
function kt(){}
_=kt.prototype=new Fu();_.o=nt;_.p=ot;_.B=qt;_.tI=48;_.a=null;_.b=null;function du(b,a){b.b=a;return b}
function fu(a){return a.a<a.b.C()}
function gu(a){if(a.a>=a.b.C()){throw new qw()}return a.b.q(a.a++)}
function hu(){return this.a<this.b.C()}
function iu(){return gu(this)}
function bu(){}
_=bu.prototype=new nr();_.r=hu;_.v=iu;_.tI=0;_.a=0;_.b=null;function zu(b,a,c){b.a=a;b.b=c;return b}
function Cu(a){return vt(this.a,a)}
function Du(){var a;return a=As(new zs(),this.b.a),uu(new tu(),a)}
function Eu(){return this.b.a.d}
function su(){}
_=su.prototype=new hv();_.k=Cu;_.u=Du;_.C=Eu;_.tI=49;_.a=null;_.b=null;function uu(a,b){a.a=b;return a}
function xu(){return fu(this.a.a)}
function yu(){var a;return a=ih(gu(this.a.a),11),a.o()}
function tu(){}
_=tu.prototype=new nr();_.r=xu;_.v=yu;_.tI=0;_.a=null;function Av(a){tt(a);return a}
function Cv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function zv(){}
_=zv.prototype=new xs();_.tI=50;function Ev(a){a.a=Av(new zv());return a}
function Fv(c,a){var b;b=Et(c.a,a,c);return b==null}
function bw(b){var a;return a=Et(this.a,b,this),a==null}
function cw(a){return vt(this.a,a)}
function dw(){var a;return a=As(new zs(),ev(this.a).b.a),uu(new tu(),a)}
function ew(){return this.a.d}
function Dv(){}
_=Dv.prototype=new hv();_.j=bw;_.k=cw;_.u=dw;_.C=ew;_.tI=51;_.a=null;function jw(b,a,c){b.a=a;b.b=c;return b}
function lw(){return this.a}
function mw(){return this.b}
function ow(b){var a;a=this.b;this.b=b;return a}
function iw(){}
_=iw.prototype=new Fu();_.o=lw;_.p=mw;_.B=ow;_.tI=52;_.a=null;_.b=null;function qw(){}
_=qw.prototype=new rr();_.tI=53;function ww(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&pe(a,b)}
function mq(){!!$stats&&$stats({moduleName:$moduleName,subSystem:D,evtGroup:E,millis:(new Date()).getTime(),type:F,className:ab});cq(new bq())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{mq()}catch(a){b(d)}else{mq()}}
function xw(){}
var yh=Bq(bb,cb),zh=Bq(db,fb);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();