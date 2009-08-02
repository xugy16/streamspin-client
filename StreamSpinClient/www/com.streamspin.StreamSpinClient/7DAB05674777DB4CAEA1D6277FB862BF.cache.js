(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',Dc=', Size: ',Bb='-',qb='0',Fb='0px',tc='100%',xc='100px',ic='1px',Ac='50px',Bc=':',w='DOMMouseScroll',Cc='Index: ',pc='Item four',lc='Item one',rc='Item six',qc='Item that has a long title and is number five',nc='Item tree',mc='Item two',gd='Object;',yc='Status: <b>Online<\/b>',vc='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',dd='Widget;',cd='[Lcom.google.gwt.user.client.ui.',fd='[Ljava.lang.',hc='absolute',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',bd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',hb='gwt-Label',vb='gwt-ListBox',Ab='gwt-MenuBar',ec='gwt-TextArea',wc='height',jc='hidden',ac='hideFocus',Db='horizontal',fc='input',dc='keydown',oc='keypress',zc='keyup',B='left',ed='load',n='losecapture',zb='menubar',mb='middle',Fc='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',ad='onModuleLoadStart',wb='option',Eb='outline',E='position',kb='right',xb='role',t='scroll',l='select',Ec='startup',bb='submit',eb='table',fb='tbody',sb='td',gc='text',cc='textarea',kc='title of Main Window',D='top',ob='tr',bc='true',db='type',uc='value',Cb='vertical',ub='verticalAlign',sc='width';var _;function ip(a){return this===(a==null?null:a)}
function jp(){return this.$H||(this.$H=++xd)}
function gp(){}
_=gp.prototype={};_.eQ=ip;_.hC=jp;_.tM=mu;_.tI=1;function od(b,a){return b.tM==mu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function qd(a){return a.tM==mu||a.tI==2?a.hC():a.$H||(a.$H=++xd)}
var xd=0;function be(){be=mu;Bd();new zd()}
function de(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function ee(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function ge(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function yd(){}
_=yd.prototype=new gp();_.tI=0;function ae(){ae=mu;be()}
function Fd(){}
_=Fd.prototype=new yd();_.tI=0;function Bd(){Bd=mu;ae()}
function Cd(b,a){while(a){if(b==a){return true}a=a.parentNode;if(a&&a.nodeType!=1){a=null}}return false}
function zd(){}
_=zd.prototype=new Fd();_.tI=0;function ff(){}
_=ff.prototype=new gp();_.tI=0;function nf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function of(a,f,c,b,e){var d;d=nf(e,b);pf(a,f,c,d);return d}
function pf(b,d,c,a){if(!qf){qf=new jf()}tf(a,qf);a.tI=d;a.qI=c;return a}
function rf(a,b,c){if(c!=null){if(a.qI>0&&!wf(c.tI,a.qI)){throw new no()}if(a.qI<0&&(c.tM==mu||c.tI==2)){throw new no()}}return a[b]=c}
function tf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function jf(){}
_=jf.prototype=new gp();_.tI=0;_.length=0;_.qI=0;var qf=null;function xf(b,a){return b&&!!fg[b][a]}
function wf(b,a){return b&&fg[b][a]}
function yf(b,a){if(b!=null&&!wf(b.tI,a)){throw new ro()}return b}
function eg(a){if(a!=null){throw new ro()}return a}
var fg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Ag(b,a,c){var d;if(a==Fg){if(Ch(b)==8192){Fg=null}}d=zg;zg=b;try{c.u(b)}finally{zg=d}}
function bh(a,b){Eh();uh(a,b)}
var zg=null,Fg=null;function gh(a){lh();if(!hh){hh=ct(new bt())}et(hh,a)}
function ih(){var a;if(hh){for(a=Ar(new yr(),hh);a.a<a.b.b;){yf(Dr(a),3);ll()}}}
function jh(){var a,b;b=null;if(hh){for(a=Ar(new yr(),hh);a.a<a.b.b;){yf(Dr(a),3);b=null}}return b}
function lh(){if(!kh){kh=true;ei()}}
var hh=null,kh=false;function Ch(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function Eh(){if(!ai){th();ai=true}}
function bi(a){return a!=null&&xf(a.tI,4)&&!(a!=null&&(a.tM!=mu&&a.tI!=2))}
var ai=false;function th(){xh=function(b){if(wh(b)){var a=vh;if(a&&a.__listener){if(bi(a.__listener)){Ag(b,a,a.__listener);b.stopPropagation()}}}};wh=function(a){return true};yh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(bi(c)){Ag(b,a,c)}}};$wnd.addEventListener(cb,xh,true);$wnd.addEventListener(nb,xh,true);$wnd.addEventListener(o,xh,true);$wnd.addEventListener(s,xh,true);$wnd.addEventListener(p,xh,true);$wnd.addEventListener(r,xh,true);$wnd.addEventListener(q,xh,true);$wnd.addEventListener(v,xh,true);$wnd.addEventListener(dc,wh,true);$wnd.addEventListener(zc,wh,true);$wnd.addEventListener(oc,wh,true)}
function uh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?yh:null;if(b&2)c.ondblclick=a&2?yh:null;if(b&4)c.onmousedown=a&4?yh:null;if(b&8)c.onmouseup=a&8?yh:null;if(b&16)c.onmouseover=a&16?yh:null;if(b&32)c.onmouseout=a&32?yh:null;if(b&64)c.onmousemove=a&64?yh:null;if(b&128)c.onkeydown=a&128?yh:null;if(b&256)c.onkeypress=a&256?yh:null;if(b&512)c.onkeyup=a&512?yh:null;if(b&1024)c.onchange=a&1024?yh:null;if(b&2048)c.onfocus=a&2048?yh:null;if(b&4096)c.onblur=a&4096?yh:null;if(b&8192)c.onlosecapture=a&8192?yh:null;if(b&16384)c.onscroll=a&16384?yh:null;if(b&32768)c.onload=a&32768?yh:null;if(b&65536)c.onerror=a&65536?yh:null;if(b&131072)c.onmousewheel=a&131072?yh:null;if(b&262144)c.oncontextmenu=a&262144?yh:null}
var vh=null,wh=null,xh=null,yh=null;function ei(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=jh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ih()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function bm(b,a){hm(b.i,a,true)}
function gm(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(cq(32));if(c>=0){return b.substr(0,c-0)}return b}
function hm(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new kp()}j=Ep(j);if(j.length==0){throw new Co()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=Ep(i.substr(0,e-0));d=Ep(Cp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function am(){}
_=am.prototype=new gp();_.tI=7;_.i=null;function an(a){if(a.g){throw new Fo()}a.g=true;a.i.__listener=a;a.m();a.w()}
function bn(a){if(!a.g){throw new Fo()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function cn(a){if(a.h){a.h.y(a)}else if(a.h){throw new Fo()}}
function dn(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new Fo()}c.h=b;if(b.g){an(c)}}}
function en(){}
function fn(){}
function gn(a){}
function hn(){bn(this)}
function jn(){}
function kn(){}
function pm(){}
_=pm.prototype=new am();_.m=en;_.n=fn;_.u=gn;_.v=hn;_.w=jn;_.x=kn;_.tI=8;_.g=false;_.h=null;function Ek(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=vm(b);an(a)}}
function Fk(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=vm(b);a.v()}}
function al(){}
function bl(){}
function Ck(){}
_=Ck.prototype=new pm();_.m=Ek;_.n=Fk;_.w=al;_.x=bl;_.tI=9;function xi(c,a,b){cn(a);zm(c.f,a);b.appendChild(a.i);dn(a,c)}
function zi(b,c){var a;if(c.h!=b){return false}dn(c,null);a=c.i;ee((be(),a)).removeChild(a);Em(b.f,c);return true}
function Ai(){return tm(new rm(),this.f)}
function Bi(a){return zi(this,a)}
function vi(){}
_=vi.prototype=new Ck();_.s=Ai;_.y=Bi;_.tI=10;function gi(a,b){xi(a,b,a.i)}
function ii(b,c){var a;a=zi(b,c);if(a){ji(c.i)}return a}
function ji(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function ki(a){return ii(this,a)}
function fi(){}
_=fi.prototype=new vi();_.y=ki;_.tI=11;function bj(){bj=mu;cj=(Cn(),En)}
function aj(b,a){bj();b.i=a;cj.z(b.i,0);return b}
function dj(a){Ch(a)}
function Fi(){}
_=Fi.prototype=new pm();_.u=dj;_.tI=12;var cj;function oi(){oi=mu;bj()}
function ni(b,a){oi();b.i=a;cj.z(b.i,0);return b}
function mi(){}
_=mi.prototype=new Fi();_.tI=13;function qi(){qi=mu;oi()}
function pi(a){qi();ni(a,$doc.createElement((be(),F)));ri(a.i);a.i[z]=ab;return a}
function ri(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function li(){}
_=li.prototype=new mi();_.tI=14;function ti(a){a.f=ym(new qm());a.e=$doc.createElement((be(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function si(){}
_=si.prototype=new vi();_.tI=15;_.d=null;_.e=null;function Di(){Di=mu;Ei=(Cn(),Dn)}
var Ei;function ek(a){a.i=$doc.createElement((be(),gb));a.i[z]=hb;return a}
function hk(a){Ch(a)}
function dk(){}
_=dk.prototype=new pm();_.u=hk;_.tI=16;function fj(a){a.i=$doc.createElement((be(),gb));a.i[z]=ib;return a}
function ej(){}
_=ej.prototype=new dk();_.tI=17;function oj(){oj=mu;mj(new lj(),jb);qj=mj(new lj(),B);mj(new lj(),kb);pj=qj}
var pj,qj;function mj(b,a){b.a=a;return b}
function lj(){}
_=lj.prototype=new gp();_.tI=0;_.a=null;function wj(){wj=mu;uj(new tj(),lb);uj(new tj(),mb);xj=uj(new tj(),D)}
var xj;function uj(a,b){a.a=b;return a}
function tj(){}
_=tj.prototype=new gp();_.tI=0;_.a=null;function Cj(a){ti(a);a.a=(oj(),pj);a.c=(wj(),xj);a.b=$doc.createElement((be(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function Dj(c,d){var b,a;b=(a=$doc.createElement((be(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);cn(d);zm(c.f,d);b.appendChild(d.i);dn(d,c)}
function ak(c){var a,b;b=ee((be(),c.i));a=zi(this,c);if(a){this.b.removeChild(b)}return a}
function Aj(){}
_=Aj.prototype=new si();_.y=ak;_.tI=18;_.b=null;function mk(){mk=mu;bj()}
function jk(a){mk();aj(a,de((be(),false)));a.i[z]=vb;return a}
function nk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((be(),wb));d.text=c;d.value=g;if(b==-1||b==e.children.length){e.add(d,null)}else{a=e.children[b];e.add(d,a)}}
function pk(a){if(Ch(a)==1024){}else{Ch(a)}}
function ik(){}
_=ik.prototype=new Fi();_.u=pk;_.tI=19;function tk(a){ct(new bt());a.b=ct(new bt());wk(a,false,(zk(),new xk()));return a}
function vk(d,a){var b,c;for(c=Ar(new yr(),d.b);c.a<c.b.b;){b=eg(Dr(c));if(Cd((be(),null.D()),a)){return b}}return null}
function wk(c,e){var a,b,d;b=$doc.createElement((be(),eb));c.a=$doc.createElement(fb);b.appendChild(c.a);if(!e){d=$doc.createElement(ob);c.a.appendChild(d)}a=sn((Di(),Ei));a.appendChild(b);c.i=a;c.i.setAttribute(xb,zb);bh(c.i,2225|(c.i.__eventBits||0));c.i[z]=Ab;if(e){bm(c,gm(c.i)+Bb+Cb)}else{bm(c,gm(c.i)+Bb+Db)}c.i.style[Eb]=Fb;c.i.setAttribute(ac,bc)}
function Ak(a){var b;vk(this,a.target);switch(Ch(a)){case 1:{zn((Di(),this.i));break}{break}case 2048:{eg(gt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{eg(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{eg(gt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:eg(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:eg(gt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{eg(gt(this.b,0))}}break}}}
function Bk(){bn(this)}
function qk(){}
_=qk.prototype=new pm();_.u=Ak;_.v=Bk;_.tI=20;_.a=null;function zk(){zk=mu}
function xk(){}
_=xk.prototype=new gp();_.tI=0;function kl(){kl=mu;ol=pt(new ot());pl=tt(new st())}
function jl(b,a){kl();b.f=ym(new qm());b.i=a;an(b);return b}
function ll(){var b,a;kl();var c,d;for(d=(b=rq(new qq(),As(pl.a).b.a),ks(new js(),b));Cr(d.a.a);){c=yf((a=yf(Dr(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function nl(a){kl();var b;b=yf(pr(ol,a),5);if(b){return b}if(ol.d==0){gh(new el())}b=hl(new gl());vr(ol,a,b);ut(pl,b);return b}
function dl(){}
_=dl.prototype=new fi();_.tI=21;var ol,pl;function el(){}
_=el.prototype=new gp();_.tI=22;function il(){il=mu;kl()}
function hl(a){il();jl(a,$doc.body);return a}
function gl(){}
_=gl.prototype=new dl();_.tI=23;function Dl(){Dl=mu;bj()}
function Cl(b,a){Dl();b.i=a;cj.z(b.i,0);return b}
function Fl(a){var b;b=Ch(a);if((b&896)!=0){Ch(a)}else if(b==1024){}else{Ch(a)}}
function Bl(){}
_=Bl.prototype=new Fi();_.u=Fl;_.tI=24;function Al(){Al=mu;Dl()}
function zl(a){Al();Cl(a,$doc.createElement((be(),cc)));a.i[z]=ec;return a}
function yl(){}
_=yl.prototype=new Bl();_.tI=25;function km(a){ti(a);a.a=(oj(),pj);a.b=(wj(),xj);a.e[pb]=qb;a.e[rb]=qb;return a}
function lm(c,e){var b,d,a;d=$doc.createElement((be(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);cn(e);zm(c.f,e);b.appendChild(e.i);dn(e,c)}
function om(c){var a,b;b=ee((be(),c.i));a=zi(this,c);if(a){this.d.removeChild(ee(b))}return a}
function im(){}
_=im.prototype=new si();_.y=om;_.tI=26;function ym(a){a.a=of(ig,0,6,4,0);return a}
function zm(a,b){Cm(a,b,a.b)}
function Bm(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function Cm(d,e,a){var b,c;if(a<0||a>d.b){throw new cp()}if(d.b==d.a.length){c=of(ig,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){rf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){rf(d.a,b,d.a[b-1])}rf(d.a,a,e)}
function Dm(c,b){var a;if(b<0||b>=c.b){throw new cp()}--c.b;for(a=b;a<c.b;++a){rf(c.a,a,c.a[a+1])}rf(c.a,c.b,null)}
function Em(b,c){var a;a=Bm(b,c);if(a==-1){throw new fu()}Dm(b,a)}
function qm(){}
_=qm.prototype=new gp();_.tI=0;_.a=null;_.b=0;function tm(b,a){b.b=a;return b}
function vm(a){if(a.a>=a.b.b){throw new fu()}return a.b.a[++a.a]}
function wm(){return this.a<this.b.b-1}
function xm(){return vm(this)}
function rm(){}
_=rm.prototype=new gp();_.r=wm;_.t=xm;_.tI=0;_.a=-1;_.b=null;function Cn(){Cn=mu;Dn=wn(new vn());En=Dn?(Cn(),new ln()):Dn}
function Fn(a,b){a.tabIndex=b}
function ln(){}
_=ln.prototype=new gp();_.z=Fn;_.tI=0;var Dn,En;function pn(){pn=mu;Cn()}
function qn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function rn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function sn(c){var a=$doc.createElement(gb);var b=c.l();b.addEventListener(m,c.a,false);b.addEventListener(yb,c.b,false);a.addEventListener(o,c.c,false);a.appendChild(b);return a}
function tn(){var a=$doc.createElement(fc);a.type=gc;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=hc;return a}
function un(a,b){a.firstChild.tabIndex=b}
function mn(){}
_=mn.prototype=new ln();_.l=tn;_.z=un;_.tI=0;function xn(){xn=mu;pn()}
function wn(a){xn();a.a=qn();a.b=rn();a.c=yn();return a}
function yn(){return function(){var a=this.firstChild;$wnd.setTimeout(function(){a.focus()},0)}}
function zn(a){$wnd.setTimeout(function(){a.firstChild.focus()},0)}
function An(){var a=$doc.createElement(fc);a.type=gc;a.style.opacity=0;a.style.zIndex=-1;a.style.height=ic;a.style.width=ic;a.style.overflow=jc;a.style.position=hc;return a}
function vn(){}
_=vn.prototype=new mn();_.l=An;_.tI=0;function ao(){}
_=ao.prototype=new ff();_.tI=0;function co(a){a.d=km(new im());a.c=Cj(new Aj());a.h=km(new im());a.g=jk(new ik());a.a=zl(new yl());a.e=tk(new qk());a.b=pi(new li());a.f=ek(new dk());a.i=fj(new ej());ge((be(),a.i.i),kc);nk(a.g,lc,lc,-1);nk(a.g,mc,mc,-1);nk(a.g,nc,nc,-1);nk(a.g,pc,pc,-1);nk(a.g,qc,qc,-1);nk(a.g,rc,rc,-1);a.g.i.size=4;a.g.i.style[sc]=tc;a.a.i[uc]=vc!=null?vc:C;a.a.i.style[sc]=tc;lm(a.h,a.g);lm(a.h,a.a);a.h.i.style[wc]=xc;a.h.i.style[sc]=tc;a.f.i.innerHTML=yc;Dj(a.c,a.e);a.c.i.style[wc]=Ac;a.c.i.style[sc]=tc;lm(a.d,a.i);lm(a.d,a.h);lm(a.d,a.f);lm(a.d,a.b);a.d.i.style[wc]=tc;a.d.i.style[sc]=tc;gi((kl(),nl(null)),a.d);return a}
function bo(){}
_=bo.prototype=new ao();_.tI=0;function eq(){}
_=eq.prototype=new gp();_.tI=3;function Ao(){}
_=Ao.prototype=new eq();_.tI=4;function kp(){}
_=kp.prototype=new Ao();_.tI=5;function no(){}
_=no.prototype=new kp();_.tI=28;function uo(c,a){var b;b=new qo();return b}
function qo(){}
_=qo.prototype=new gp();_.tI=0;function ro(){}
_=ro.prototype=new kp();_.tI=31;function Co(){}
_=Co.prototype=new kp();_.tI=32;function Fo(){}
_=Fo.prototype=new kp();_.tI=33;function dp(b,a){return b}
function cp(){}
_=cp.prototype=new kp();_.tI=34;function yp(b,a){if(!(a!=null&&xf(a.tI,1))){return false}return String(b)==a}
function Cp(b,a){return b.substr(a,b.length-a)}
function Ep(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function aq(a){return yp(this,a)}
function cq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function dq(){return up(this)}
_=String.prototype;_.eQ=aq;_.hC=dq;_.tI=2;function pp(){pp=mu;qp={};tp={}}
function rp(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function up(c){pp();var a=Bc+c;var b=tp[a];if(b!=null){return b}b=qp[a];if(b==null){b=rp(c)}vp();return tp[a]=b}
function vp(){if(sp==256){qp=tp;tp={};sp=0}++sp}
var qp,sp=0,tp;function gq(){}
_=gq.prototype=new kp();_.tI=35;function kq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:od(b,c)){return a}}return null}
function mq(a){throw new gq()}
function nq(b){var a;a=kq(this.s(),b);return !!a}
function jq(){}
_=jq.prototype=new gp();_.j=mq;_.k=nq;_.tI=0;function As(b){var a;a=vq(new pq(),b);return ps(new is(),b,a)}
function Bs(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&xf(c.tI,11))){return false}e=yf(c,11);if(yf(this,11).d!=e.d){return false}for(b=rq(new qq(),vq(new pq(),e).a);Cr(b.a);){a=yf(Dr(b.a),9);d=a.p();f=a.q();if(!(d==null?yf(this,11).c:d!=null&&xf(d.tI,1)?rr(yf(this,11),yf(d,1)):qr(yf(this,11),d,~~qd(d)))){return false}if(!lu(f,d==null?yf(this,11).b:d!=null&&xf(d.tI,1)?yf(this,11).e[Bc+yf(d,1)]:nr(yf(this,11),d,~~qd(d)))){return false}}return true}
function Cs(){var a,b,c;c=0;for(b=rq(new qq(),vq(new pq(),yf(this,11)).a);Cr(b.a);){a=yf(Dr(b.a),9);c+=a.hC();c=~~c}return c}
function hs(){}
_=hs.prototype=new gp();_.eQ=Bs;_.hC=Cs;_.tI=0;function ir(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function jr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=gr(e,c.substring(1));a.j(b)}}}
function mr(b,a){return a==null?b.c:a!=null&&xf(a.tI,1)?rr(b,yf(a,1)):qr(b,a,~~qd(a))}
function pr(b,a){return a==null?b.b:a!=null&&xf(a.tI,1)?b.e[Bc+yf(a,1)]:nr(b,a,~~qd(a))}
function nr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function qr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function rr(b,a){return Bc+a in b.e}
function vr(b,a,c){return a==null?tr(b,c):a!=null&&xf(a.tI,1)?ur(b,yf(a,1),c):sr(b,a,c,~~qd(a))}
function sr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.A(j);return h}}}else{a=i.a[e]=[]}var c=Et(new Dt(),g,j);a.push(c);++i.d;return null}
function tr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ur(d,a,e){var b,c=d.e;a=Bc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function wr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function oq(){}
_=oq.prototype=new hs();_.o=wr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Fs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&xf(b.tI,12))){return false}c=yf(b,12);if(c.B()!=this.B()){return false}for(a=c.s();a.r();){d=a.t();if(!this.k(d)){return false}}return true}
function at(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=qd(c);a=~~a}}return a}
function Ds(){}
_=Ds.prototype=new jq();_.eQ=Fs;_.hC=at;_.tI=36;function vq(b,a){b.a=a;return b}
function xq(d,c){var a,b,e;if(c!=null&&xf(c.tI,9)){a=yf(c,9);b=a.p();if(mr(d.a,b)){e=pr(d.a,b);return rt(a.q(),e)}}return false}
function yq(a){return xq(this,a)}
function zq(){return rq(new qq(),this.a)}
function Aq(){return this.a.d}
function pq(){}
_=pq.prototype=new Ds();_.k=yq;_.s=zq;_.B=Aq;_.tI=37;_.a=null;function rq(c,b){var a;c.b=b;a=ct(new bt());if(c.b.c){et(a,Cq(new Bq(),c.b))}jr(c.b,a);ir(c.b,a);c.a=Ar(new yr(),a);return c}
function tq(){return Cr(this.a)}
function uq(){return yf(Dr(this.a),9)}
function qq(){}
_=qq.prototype=new gp();_.r=tq;_.t=uq;_.tI=0;_.a=null;_.b=null;function xs(b){var a;if(b!=null&&xf(b.tI,9)){a=yf(b,9);if(lu(this.p(),a.p())&&lu(this.q(),a.q())){return true}}return false}
function ys(){var a,b;a=0;b=0;if(this.p()!=null){a=qd(this.p())}if(this.q()!=null){b=qd(this.q())}return a^b}
function vs(){}
_=vs.prototype=new gp();_.eQ=xs;_.hC=ys;_.tI=38;function Cq(b,a){b.a=a;return b}
function Eq(){return null}
function Fq(){return this.a.b}
function ar(a){return tr(this.a,a)}
function Bq(){}
_=Bq.prototype=new vs();_.p=Eq;_.q=Fq;_.A=ar;_.tI=39;_.a=null;function cr(c,a,b){c.b=b;c.a=a;return c}
function er(){return this.a}
function fr(){return this.b.e[Bc+this.a]}
function gr(b,a){return cr(new br(),a,b)}
function hr(a){return ur(this.b,this.a,a)}
function br(){}
_=br.prototype=new vs();_.p=er;_.q=fr;_.A=hr;_.tI=40;_.a=null;_.b=null;function bs(a){dt(this,this.B(),a);return true}
function cs(a,b){if(a<0||a>=b){fs(a,b)}}
function ds(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&xf(e.tI,10))){return false}f=yf(e,10);if(this.B()!=f.b){return false}c=Ar(new yr(),this);d=Ar(new yr(),f);while(c.a<c.b.b){a=Dr(c);b=Dr(d);if(!(a==null?b==null:od(a,b))){return false}}return true}
function es(){var a,b,c;b=1;a=Ar(new yr(),this);while(a.a<a.b.b){c=Dr(a);b=31*b+(c==null?0:qd(c));b=~~b}return b}
function fs(a,b){throw dp(new cp(),Cc+a+Dc+b)}
function gs(){return Ar(new yr(),this)}
function xr(){}
_=xr.prototype=new jq();_.j=bs;_.eQ=ds;_.hC=es;_.s=gs;_.tI=0;function Ar(b,a){b.b=a;return b}
function Cr(a){return a.a<a.b.b}
function Dr(a){if(a.a>=a.b.b){throw new fu()}return gt(a.b,a.a++)}
function Er(){return this.a<this.b.b}
function Fr(){return Dr(this)}
function yr(){}
_=yr.prototype=new gp();_.r=Er;_.t=Fr;_.tI=0;_.a=0;_.b=null;function ps(b,a,c){b.a=a;b.b=c;return b}
function ss(a){return mr(this.a,a)}
function ts(){var a;return a=rq(new qq(),this.b.a),ks(new js(),a)}
function us(){return this.b.a.d}
function is(){}
_=is.prototype=new Ds();_.k=ss;_.s=ts;_.B=us;_.tI=41;_.a=null;_.b=null;function ks(a,b){a.a=b;return a}
function ns(){return Cr(this.a.a)}
function os(){var a;return a=yf(Dr(this.a.a),9),a.p()}
function js(){}
_=js.prototype=new gp();_.r=ns;_.t=os;_.tI=0;_.a=null;function ct(a){a.a=of(jg,0,0,0,0);a.b=0;return a}
function et(b,a){rf(b.a,b.b++,a);return true}
function dt(c,a,b){if(a<0||a>c.b){fs(a,c.b)}c.a.splice(a,0,b);++c.b}
function gt(b,a){cs(a,b.b);return b.a[a]}
function ht(c,b,a){for(;a<c.b;++a){if(lu(b,c.a[a])){return a}}return -1}
function it(a){return rf(this.a,this.b++,a),true}
function jt(a){return ht(this,a,0)!=-1}
function kt(){return this.b}
function bt(){}
_=bt.prototype=new xr();_.j=it;_.k=jt;_.B=kt;_.tI=42;_.a=null;_.b=0;function pt(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function rt(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function ot(){}
_=ot.prototype=new oq();_.tI=43;function tt(a){a.a=pt(new ot());return a}
function ut(c,a){var b;b=vr(c.a,a,c);return b==null}
function wt(b){var a;return a=vr(this.a,b,this),a==null}
function xt(a){return mr(this.a,a)}
function yt(){var a;return a=rq(new qq(),As(this.a).b.a),ks(new js(),a)}
function zt(){return this.a.d}
function st(){}
_=st.prototype=new Ds();_.j=wt;_.k=xt;_.s=yt;_.B=zt;_.tI=44;_.a=null;function Et(b,a,c){b.a=a;b.b=c;return b}
function au(){return this.a}
function bu(){return this.b}
function du(b){var a;a=this.b;this.b=b;return a}
function Dt(){}
_=Dt.prototype=new vs();_.p=au;_.q=bu;_.A=du;_.tI=45;_.a=null;_.b=null;function fu(){}
_=fu.prototype=new kp();_.tI=46;function lu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function lo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Ec,evtGroup:Fc,millis:(new Date()).getTime(),type:ad,className:bd});co(new bo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{lo()}catch(a){b(d)}else{lo()}}
function mu(){}
var ig=uo(cd,dd),jg=uo(fd,gd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();