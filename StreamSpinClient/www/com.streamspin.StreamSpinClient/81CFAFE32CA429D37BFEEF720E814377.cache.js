(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var pb='',Db=' ',l='#',p='$',s=', Size: ',Fc='-',eb='/',sc='0',dd='0px',wd='100%',Ad='100px',q=':',xc='<SELECT>',m='?',Ab='BackgroundImageCache',Ac='DIV',jb='DOMMouseScroll',r='Index: ',sd='Item four',od='Item one',ud='Item six',td='Item that has a long title and is number five',qd='Item tree',pd='Item two',B='Object;',Bd='Status: <b>Online<\/b>',yd='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',z='Widget;',x='[Lcom.google.gwt.user.client.ui.',A='[Ljava.lang.',o='\\',fc='__gwt_initWindowCloseHandler',vc='align',qc='blur',nc='bottom',bc='button',tc='cellPadding',rc='cellSpacing',lc='center',Bc='change',Cb='className',md='clear.cache.gif',gd='click',w='com.streamspin.client.StreamSpinClient',kb='contextmenu',rd='dblclick',ic='div',hb='error',n='focus',yb='function',zb='function ',cc='gwt-Button',kc='gwt-HTML',jc='gwt-Label',yc='gwt-ListBox',Ec='gwt-MenuBar',id='gwt-TextArea',zd='height',ed='hideFocus',bd='horizontal',ld='http://',jd='https',kd='https://',y='keydown',C='keypress',D='keyup',Eb='left',E='load',F='losecapture',Dc='menubar',oc='middle',u='moduleStartup',ab='mousedown',bb='mousemove',cb='mouseout',db='mouseover',fb='mouseup',ib='mousewheel',v='onModuleLoadStart',vb='onblur',lb='onclick',xb='oncontextmenu',wb='ondblclick',ub='onfocus',rb='onkeydown',sb='onkeypress',tb='onkeyup',mb='onmousedown',ob='onmousemove',nb='onmouseup',qb='onmousewheel',zc='option',cd='outline',ac='position',mc='right',Cc='role',Bb='script',gb='scroll',t='startup',dc='submit',gc='table',hc='tbody',uc='td',hd='textarea',nd='title of Main Window',Fb='top',pc='tr',fd='true',ec='type',xd='value',ad='vertical',wc='verticalAlign',vd='width';var _;function bq(a){return this===(a==null?null:a)}
function cq(){return this.$H||(this.$H=++qe)}
function Fp(){}
_=Fp.prototype={};_.eQ=bq;_.hC=cq;_.tM=hv;_.tI=1;function ge(b,a){return b.tM==hv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ie(a){return a.tM==hv||a.tI==2?a.hC():a.$H||(a.$H=++qe)}
function ne(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(eb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+eb:pb}
var qe=0;function we(b,a){return b===a||b.contains(a)}
function xe(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function lf(){lf=hv;of()}
function nf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function of(){try{$doc.execCommand(Ab,false,true)}catch(a){}}
function sf(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function tf(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;nf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function uf(a,c){lf();var b,d;if(rq(a.__pendingSrc||a.src,c)){return}if(!vf){vf={}}b=a.__pendingSrc;if(b!=null){d=vf[b];if(d==a){tf(vf,d)}else{sf(d,a)}}d=vf[c];if(!d){nf(vf,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var vf=null;function kg(){}
_=kg.prototype=new Fp();_.tI=0;function rg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function sg(a,f,c,b,e){var d;d=rg(e,b);tg(a,f,c,d);return d}
function tg(b,d,c,a){if(!ug){ug=new ng()}xg(a,ug);a.tI=d;a.qI=c;return a}
function vg(a,b,c){if(c!=null){if(a.qI>0&&!Ag(c.tI,a.qI)){throw new gp()}if(a.qI<0&&(c.tM==hv||c.tI==2)){throw new gp()}}return a[b]=c}
function xg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function ng(){}
_=ng.prototype=new Fp();_.tI=0;_.length=0;_.qI=0;var ug=null;function Bg(b,a){return b&&!!jh[b][a]}
function Ag(b,a){return b&&jh[b][a]}
function Cg(b,a){if(b!=null&&!Ag(b.tI,a)){throw new kp()}return b}
function ih(a){if(a!=null){throw new kp()}return a}
var jh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Eh(b,a,c){var d;if(a==bi){if(Ei(b)==8192){bi=null}}d=Dh;Dh=b;try{c.t(b)}finally{Dh=d}}
function ai(a){return true}
function ei(a,b){aj();xi(a,b)}
var Dh=null,bi=null;function ji(a){oi();if(!ki){ki=Dt(new Ct())}Ft(ki,a)}
function li(){var a;if(ki){for(a=vs(new ts(),ki);a.a<a.b.b;){Cg(ys(a),3);om()}}}
function mi(){var a,b;b=null;if(ki){for(a=vs(new ts(),ki);a.a<a.b.b;){Cg(ys(a),3);b=null}}return b}
function oi(){if(!ni){ni=true;ij(hj(),fc)}}
var ki=null,ni=false;function Ei(a){switch(a.type){case qc:return 4096;case Bc:return 1024;case gd:return 1;case rd:return 2;case n:return 2048;case y:return 128;case C:return 256;case D:return 512;case E:return 32768;case F:return 8192;case ab:return 4;case bb:return 64;case cb:return 32;case db:return 16;case fb:return 8;case gb:return 16384;case hb:return 65536;case ib:return 131072;case jb:return 131072;case kb:return 262144;}}
function aj(){if(!cj){wi();cj=true}}
var cj=false;function wi(){Ai=function(){var c=yi;yi=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!ai($wnd.event)){yi=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&Bg(b.tI,4)&&!(b!=null&&(b.tM!=hv&&b.tI!=2))){Eh($wnd.event,a,b)}}yi=c};zi=function(){var a=$doc.createEventObject();this.fireEvent(lb,a);if(this.__eventBits&2){Ai.call(this)}};var e=function(){Ai.call($doc.body)};var d=function(){zi.call($doc.body)};$doc.body.attachEvent(lb,e);$doc.body.attachEvent(mb,e);$doc.body.attachEvent(nb,e);$doc.body.attachEvent(ob,e);$doc.body.attachEvent(qb,e);$doc.body.attachEvent(rb,e);$doc.body.attachEvent(sb,e);$doc.body.attachEvent(tb,e);$doc.body.attachEvent(ub,e);$doc.body.attachEvent(vb,e);$doc.body.attachEvent(wb,d);$doc.body.attachEvent(xb,e)}
function xi(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Ai:null;if(b&3)c.ondblclick=a&3?zi:null;if(b&4)c.onmousedown=a&4?Ai:null;if(b&8)c.onmouseup=a&8?Ai:null;if(b&16)c.onmouseover=a&16?Ai:null;if(b&32)c.onmouseout=a&32?Ai:null;if(b&64)c.onmousemove=a&64?Ai:null;if(b&128)c.onkeydown=a&128?Ai:null;if(b&256)c.onkeypress=a&256?Ai:null;if(b&512)c.onkeyup=a&512?Ai:null;if(b&1024)c.onchange=a&1024?Ai:null;if(b&2048)c.onfocus=a&2048?Ai:null;if(b&4096)c.onblur=a&4096?Ai:null;if(b&8192)c.onlosecapture=a&8192?Ai:null;if(b&16384)c.onscroll=a&16384?Ai:null;if(b&32768)c.onload=a&32768?Ai:null;if(b&65536)c.onerror=a&65536?Ai:null;if(b&131072)c.onmousewheel=a&131072?Ai:null;if(b&262144)c.oncontextmenu=a&262144?Ai:null}
var yi=null,zi=null,Ai=null;function hj(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function ij(c,b){var d,a;c=vq(c,yb,zb+b);d=(a=$doc.createElement(Bb),a.text=c,a);$doc.body.appendChild(d);jj();$doc.body.removeChild(d)}
function jj(){$wnd.__gwt_initWindowCloseHandler(function(){return mi()},function(){li()})}
function cn(b,a){jn(b.i,a,true)}
function hn(a){var b,c;b=a[Cb]==null?null:String(a[Cb]);c=b.indexOf(Dq(32));if(c>=0){return b.substr(0,c-0)}return b}
function jn(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new dq()}j=yq(j);if(j.length==0){throw new vp()}i=c[Cb]==null?null:String(c[Cb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Db}c[Cb]=i+j}}else{if(e!=-1){b=yq(i.substr(0,e-0));d=yq(wq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Db+d}c[Cb]=h}}}
function bn(){}
_=bn.prototype=new Fp();_.tI=7;_.i=null;function co(a){if(a.g){throw new yp()}a.g=true;a.i.__listener=a;a.l();a.v()}
function eo(a){if(!a.g){throw new yp()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function fo(a){if(a.h){a.h.x(a)}else if(a.h){throw new yp()}}
function go(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new yp()}c.h=b;if(b.g){co(c)}}}
function ho(){}
function io(){}
function jo(a){}
function ko(){eo(this)}
function lo(){}
function mo(){}
function rn(){}
_=rn.prototype=new bn();_.l=ho;_.m=io;_.t=jo;_.u=ko;_.v=lo;_.w=mo;_.tI=8;_.g=false;_.h=null;function bm(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=xn(b);co(a)}}
function cm(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=xn(b);a.u()}}
function dm(){}
function em(){}
function Fl(){}
_=Fl.prototype=new rn();_.l=bm;_.m=cm;_.v=dm;_.w=em;_.tI=9;function Fj(c,a,b){fo(a);Bn(c.f,a);b.appendChild(a.i);go(a,c)}
function bk(b,c){var a;if(c.h!=b){return false}go(c,null);a=c.i;a.parentElement.removeChild(a);ao(b.f,c);return true}
function ck(){return vn(new tn(),this.f)}
function dk(a){return bk(this,a)}
function Dj(){}
_=Dj.prototype=new Fl();_.r=ck;_.x=dk;_.tI=10;function mj(a,b){Fj(a,b,a.i)}
function oj(b,c){var a;a=bk(b,c);if(a){pj(c.i)}return a}
function pj(a){a.style[Eb]=pb;a.style[Fb]=pb;a.style[ac]=pb}
function qj(a){return oj(this,a)}
function lj(){}
_=lj.prototype=new Dj();_.x=qj;_.tI=11;function fk(b,a){b.i=a;b.i.tabIndex=0;return b}
function hk(a){Ei(a)}
function ek(){}
_=ek.prototype=new rn();_.t=hk;_.tI=12;function vj(b,a){b.i=a;b.i.tabIndex=0;return b}
function uj(){}
_=uj.prototype=new ek();_.tI=13;function xj(a){vj(a,$doc.createElement(bc));zj(a.i);a.i[Cb]=cc;return a}
function zj(b){if(b.type==dc){try{b.setAttribute(ec,bc)}catch(a){}}}
function tj(){}
_=tj.prototype=new uj();_.tI=14;function Bj(a){a.f=An(new sn());a.e=$doc.createElement(gc);a.d=$doc.createElement(hc);a.e.appendChild(a.d);a.i=a.e;return a}
function Aj(){}
_=Aj.prototype=new Dj();_.tI=15;_.d=null;_.e=null;function il(a){a.i=$doc.createElement(ic);a.i[Cb]=jc;return a}
function ll(a){Ei(a)}
function hl(){}
_=hl.prototype=new rn();_.t=ll;_.tI=16;function jk(a){a.i=$doc.createElement(ic);a.i[Cb]=kc;return a}
function ik(){}
_=ik.prototype=new hl();_.tI=17;function sk(){sk=hv;qk(new pk(),lc);uk=qk(new pk(),Eb);qk(new pk(),mc);tk=uk}
var tk,uk;function qk(b,a){b.a=a;return b}
function pk(){}
_=pk.prototype=new Fp();_.tI=0;_.a=null;function Ak(){Ak=hv;yk(new xk(),nc);yk(new xk(),oc);Bk=yk(new xk(),Fb)}
var Bk;function yk(a,b){a.a=b;return a}
function xk(){}
_=xk.prototype=new Fp();_.tI=0;_.a=null;function al(a){Bj(a);a.a=(sk(),tk);a.c=(Ak(),Bk);a.b=$doc.createElement(pc);a.d.appendChild(a.b);a.e[rc]=sc;a.e[tc]=sc;return a}
function bl(c,d){var b,a;b=(a=$doc.createElement(uc),(a[vc]=c.a.a,undefined),(a.style[wc]=c.c.a,undefined),a);c.b.appendChild(b);fo(d);Bn(c.f,d);b.appendChild(d.i);go(d,c)}
function el(c){var a,b;b=c.i.parentElement;a=bk(this,c);if(a){this.b.removeChild(b)}return a}
function Ek(){}
_=Ek.prototype=new Aj();_.x=el;_.tI=18;_.b=null;function nl(b){var a;fk(b,(a=xc,$doc.createElement(a)));b.i[Cb]=yc;return b}
function ql(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement(zc);d.text=c;d.value=g;if(b==-1||b==e.options.length){xe(e,d,null)}else{a=e.options[b];xe(e,d,a)}}
function sl(a){if(Ei(a)==1024){}else{Ei(a)}}
function ml(){}
_=ml.prototype=new ek();_.t=sl;_.tI=19;function wl(a){Dt(new Ct());a.b=Dt(new Ct());zl(a,false,(Cl(),new Al()));return a}
function yl(d,a){var b,c;for(c=vs(new ts(),d.b);c.a<c.b.b;){b=ih(ys(c));if(we(null.B(),a)){return b}}return null}
function zl(d,f){var b,c,e,a;c=$doc.createElement(gc);d.a=$doc.createElement(hc);c.appendChild(d.a);if(!f){e=$doc.createElement(pc);d.a.appendChild(e)}b=(a=$doc.createElement(Ac),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Cc,Dc);ei(d.i,2225|(d.i.__eventBits||0));d.i[Cb]=Ec;if(f){cn(d,hn(d.i)+Fc+ad)}else{cn(d,hn(d.i)+Fc+bd)}d.i.style[cd]=dd;d.i.setAttribute(ed,fd)}
function Dl(a){var b;yl(this,a.srcElement);switch(Ei(a)){case 1:{xo(this.i);break}{break}case 2048:{ih(bu(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{ih(bu(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{ih(bu(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:ih(bu(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:ih(bu(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{ih(bu(this.b,0))}}break}}}
function El(){eo(this)}
function tl(){}
_=tl.prototype=new rn();_.t=Dl;_.u=El;_.tI=20;_.a=null;function Cl(){Cl=hv;to()}
function Al(){}
_=Al.prototype=new Fp();_.tI=0;function nm(){nm=hv;rm=ku(new ju());sm=ou(new nu())}
function mm(b,a){nm();b.f=An(new sn());b.i=a;co(b);return b}
function om(){var b,a;nm();var c,d;for(d=(b=mr(new lr(),vt(sm.a).b.a),ft(new et(),b));xs(d.a.a);){c=Cg((a=Cg(ys(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function qm(a){nm();var b;b=Cg(ks(rm,a),5);if(b){return b}if(rm.d==0){ji(new hm())}b=km(new jm());qs(rm,a,b);pu(sm,b);return b}
function gm(){}
_=gm.prototype=new lj();_.tI=21;var rm,sm;function hm(){}
_=hm.prototype=new Fp();_.tI=22;function lm(){lm=hv;nm()}
function km(a){lm();mm(a,$doc.body);return a}
function jm(){}
_=jm.prototype=new gm();_.tI=23;function Dm(b,a){b.i=a;b.i.tabIndex=0;return b}
function an(a){var b;b=Ei(a);if((b&896)!=0){Ei(a)}else if(b==1024){}else{Ei(a)}}
function Cm(){}
_=Cm.prototype=new ek();_.t=an;_.tI=24;function Am(a){Dm(a,$doc.createElement(hd));a.i[Cb]=id;return a}
function zm(){}
_=zm.prototype=new Cm();_.tI=25;function mn(a){Bj(a);a.a=(sk(),tk);a.b=(Ak(),Bk);a.e[rc]=sc;a.e[tc]=sc;return a}
function nn(c,e){var b,d,a;d=$doc.createElement(pc);b=(a=$doc.createElement(uc),(a[vc]=c.a.a,undefined),(a.style[wc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);fo(e);Bn(c.f,e);b.appendChild(e.i);go(e,c)}
function qn(c){var a,b;b=c.i.parentElement;a=bk(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function kn(){}
_=kn.prototype=new Aj();_.x=qn;_.tI=26;function An(a){a.a=sg(mh,0,6,4,0);return a}
function Bn(a,b){En(a,b,a.b)}
function Dn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function En(d,e,a){var b,c;if(a<0||a>d.b){throw new Bp()}if(d.b==d.a.length){c=sg(mh,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){vg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){vg(d.a,b,d.a[b-1])}vg(d.a,a,e)}
function Fn(c,b){var a;if(b<0||b>=c.b){throw new Bp()}--c.b;for(a=b;a<c.b;++a){vg(c.a,a,c.a[a+1])}vg(c.a,c.b,null)}
function ao(b,c){var a;a=Dn(b,c);if(a==-1){throw new av()}Fn(b,a)}
function sn(){}
_=sn.prototype=new Fp();_.tI=0;_.a=null;_.b=0;function vn(b,a){b.b=a;return b}
function xn(a){if(a.a>=a.b.b){throw new av()}return a.b.a[++a.a]}
function yn(){return this.a<this.b.b-1}
function zn(){return xn(this)}
function tn(){}
_=tn.prototype=new Fp();_.q=yn;_.s=zn;_.tI=0;_.a=-1;_.b=null;function po(){po=hv;ne().indexOf(jd)==0?kd:ld}
function qo(){po();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;uf(a,$moduleBase+md)}}
function to(){to=hv;po();qo()}
function xo(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function Bo(){}
_=Bo.prototype=new kg();_.tI=0;function Do(a){a.d=mn(new kn());a.c=al(new Ek());a.h=mn(new kn());a.g=nl(new ml());a.a=Am(new zm());a.e=wl(new tl());a.b=xj(new tj());a.f=il(new hl());a.i=jk(new ik());a.i.i.innerText=nd;ql(a.g,od,od,-1);ql(a.g,pd,pd,-1);ql(a.g,qd,qd,-1);ql(a.g,sd,sd,-1);ql(a.g,td,td,-1);ql(a.g,ud,ud,-1);a.g.i.size=3;a.g.i.style[vd]=wd;a.a.i[xd]=yd!=null?yd:pb;a.a.i.style[vd]=wd;nn(a.h,a.g);nn(a.h,a.a);a.h.i.style[zd]=Ad;a.h.i.style[vd]=wd;a.f.i.innerHTML=Bd;bl(a.c,a.b);bl(a.c,a.e);nn(a.d,a.i);nn(a.d,a.h);nn(a.d,a.b);nn(a.d,a.f);a.d.i.style[zd]=wd;a.d.i.style[vd]=wd;mj((nm(),qm(null)),a.d);return a}
function Co(){}
_=Co.prototype=new Bo();_.tI=0;function Fq(){}
_=Fq.prototype=new Fp();_.tI=3;function tp(){}
_=tp.prototype=new Fq();_.tI=4;function dq(){}
_=dq.prototype=new tp();_.tI=5;function gp(){}
_=gp.prototype=new dq();_.tI=28;function np(c,a){var b;b=new jp();return b}
function jp(){}
_=jp.prototype=new Fp();_.tI=0;function kp(){}
_=kp.prototype=new dq();_.tI=31;function vp(){}
_=vp.prototype=new dq();_.tI=32;function yp(){}
_=yp.prototype=new dq();_.tI=33;function Cp(b,a){return b}
function Bp(){}
_=Bp.prototype=new dq();_.tI=34;function rq(b,a){if(!(a!=null&&Bg(a.tI,1))){return false}return String(b)==a}
function vq(c,a,b){b=Aq(b);return c.replace(RegExp(a),b)}
function wq(b,a){return b.substr(a,b.length-a)}
function yq(c){if(c.length==0||c[0]>Db&&c[c.length-1]>Db){return c}var a=c.replace(/^(\s*)/,pb);var b=a.replace(/\s*$/,pb);return b}
function Aq(b){var a;a=0;while(0<=(a=b.indexOf(o,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+p+wq(b,++a)}else{b=b.substr(0,a-0)+wq(b,++a)}}return b}
function Bq(a){return rq(this,a)}
function Dq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Eq(){return nq(this)}
_=String.prototype;_.eQ=Bq;_.hC=Eq;_.tI=2;function iq(){iq=hv;jq={};mq={}}
function kq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function nq(c){iq();var a=q+c;var b=mq[a];if(b!=null){return b}b=jq[a];if(b==null){b=kq(c)}oq();return mq[a]=b}
function oq(){if(lq==256){jq=mq;mq={};lq=0}++lq}
var jq,lq=0,mq;function br(){}
_=br.prototype=new dq();_.tI=35;function fr(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:ge(b,c)){return a}}return null}
function hr(a){throw new br()}
function ir(b){var a;a=fr(this.r(),b);return !!a}
function er(){}
_=er.prototype=new Fp();_.j=hr;_.k=ir;_.tI=0;function vt(b){var a;a=qr(new kr(),b);return kt(new dt(),b,a)}
function wt(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Bg(c.tI,11))){return false}e=Cg(c,11);if(Cg(this,11).d!=e.d){return false}for(b=mr(new lr(),qr(new kr(),e).a);xs(b.a);){a=Cg(ys(b.a),9);d=a.o();f=a.p();if(!(d==null?Cg(this,11).c:d!=null&&Bg(d.tI,1)?ms(Cg(this,11),Cg(d,1)):ls(Cg(this,11),d,~~ie(d)))){return false}if(!gv(f,d==null?Cg(this,11).b:d!=null&&Bg(d.tI,1)?Cg(this,11).e[q+Cg(d,1)]:is(Cg(this,11),d,~~ie(d)))){return false}}return true}
function xt(){var a,b,c;c=0;for(b=mr(new lr(),qr(new kr(),Cg(this,11)).a);xs(b.a);){a=Cg(ys(b.a),9);c+=a.hC();c=~~c}return c}
function ct(){}
_=ct.prototype=new Fp();_.eQ=wt;_.hC=xt;_.tI=0;function ds(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function es(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=bs(e,c.substring(1));a.j(b)}}}
function hs(b,a){return a==null?b.c:a!=null&&Bg(a.tI,1)?ms(b,Cg(a,1)):ls(b,a,~~ie(a))}
function ks(b,a){return a==null?b.b:a!=null&&Bg(a.tI,1)?b.e[q+Cg(a,1)]:is(b,a,~~ie(a))}
function is(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function ls(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function ms(b,a){return q+a in b.e}
function qs(b,a,c){return a==null?os(b,c):a!=null&&Bg(a.tI,1)?ps(b,Cg(a,1),c):ns(b,a,c,~~ie(a))}
function ns(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=zu(new yu(),g,j);a.push(c);++i.d;return null}
function os(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ps(d,a,e){var b,c=d.e;a=q+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function rs(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ge(a,b)}
function jr(){}
_=jr.prototype=new ct();_.n=rs;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function At(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Bg(b.tI,12))){return false}c=Cg(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function Bt(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=ie(c);a=~~a}}return a}
function yt(){}
_=yt.prototype=new er();_.eQ=At;_.hC=Bt;_.tI=36;function qr(b,a){b.a=a;return b}
function sr(d,c){var a,b,e;if(c!=null&&Bg(c.tI,9)){a=Cg(c,9);b=a.o();if(hs(d.a,b)){e=ks(d.a,b);return mu(a.p(),e)}}return false}
function tr(a){return sr(this,a)}
function ur(){return mr(new lr(),this.a)}
function vr(){return this.a.d}
function kr(){}
_=kr.prototype=new yt();_.k=tr;_.r=ur;_.z=vr;_.tI=37;_.a=null;function mr(c,b){var a;c.b=b;a=Dt(new Ct());if(c.b.c){Ft(a,xr(new wr(),c.b))}es(c.b,a);ds(c.b,a);c.a=vs(new ts(),a);return c}
function or(){return xs(this.a)}
function pr(){return Cg(ys(this.a),9)}
function lr(){}
_=lr.prototype=new Fp();_.q=or;_.s=pr;_.tI=0;_.a=null;_.b=null;function st(b){var a;if(b!=null&&Bg(b.tI,9)){a=Cg(b,9);if(gv(this.o(),a.o())&&gv(this.p(),a.p())){return true}}return false}
function tt(){var a,b;a=0;b=0;if(this.o()!=null){a=ie(this.o())}if(this.p()!=null){b=ie(this.p())}return a^b}
function qt(){}
_=qt.prototype=new Fp();_.eQ=st;_.hC=tt;_.tI=38;function xr(b,a){b.a=a;return b}
function zr(){return null}
function Ar(){return this.a.b}
function Br(a){return os(this.a,a)}
function wr(){}
_=wr.prototype=new qt();_.o=zr;_.p=Ar;_.y=Br;_.tI=39;_.a=null;function Dr(c,a,b){c.b=b;c.a=a;return c}
function Fr(){return this.a}
function as(){return this.b.e[q+this.a]}
function bs(b,a){return Dr(new Cr(),a,b)}
function cs(a){return ps(this.b,this.a,a)}
function Cr(){}
_=Cr.prototype=new qt();_.o=Fr;_.p=as;_.y=cs;_.tI=40;_.a=null;_.b=null;function Cs(a){Et(this,this.z(),a);return true}
function Ds(a,b){if(a<0||a>=b){at(a,b)}}
function Es(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Bg(e.tI,10))){return false}f=Cg(e,10);if(this.z()!=f.b){return false}c=vs(new ts(),this);d=vs(new ts(),f);while(c.a<c.b.b){a=ys(c);b=ys(d);if(!(a==null?b==null:ge(a,b))){return false}}return true}
function Fs(){var a,b,c;b=1;a=vs(new ts(),this);while(a.a<a.b.b){c=ys(a);b=31*b+(c==null?0:ie(c));b=~~b}return b}
function at(a,b){throw Cp(new Bp(),r+a+s+b)}
function bt(){return vs(new ts(),this)}
function ss(){}
_=ss.prototype=new er();_.j=Cs;_.eQ=Es;_.hC=Fs;_.r=bt;_.tI=0;function vs(b,a){b.b=a;return b}
function xs(a){return a.a<a.b.b}
function ys(a){if(a.a>=a.b.b){throw new av()}return bu(a.b,a.a++)}
function zs(){return this.a<this.b.b}
function As(){return ys(this)}
function ts(){}
_=ts.prototype=new Fp();_.q=zs;_.s=As;_.tI=0;_.a=0;_.b=null;function kt(b,a,c){b.a=a;b.b=c;return b}
function nt(a){return hs(this.a,a)}
function ot(){var a;return a=mr(new lr(),this.b.a),ft(new et(),a)}
function pt(){return this.b.a.d}
function dt(){}
_=dt.prototype=new yt();_.k=nt;_.r=ot;_.z=pt;_.tI=41;_.a=null;_.b=null;function ft(a,b){a.a=b;return a}
function it(){return xs(this.a.a)}
function jt(){var a;return a=Cg(ys(this.a.a),9),a.o()}
function et(){}
_=et.prototype=new Fp();_.q=it;_.s=jt;_.tI=0;_.a=null;function Dt(a){a.a=sg(nh,0,0,0,0);a.b=0;return a}
function Ft(b,a){vg(b.a,b.b++,a);return true}
function Et(c,a,b){if(a<0||a>c.b){at(a,c.b)}c.a.splice(a,0,b);++c.b}
function bu(b,a){Ds(a,b.b);return b.a[a]}
function cu(c,b,a){for(;a<c.b;++a){if(gv(b,c.a[a])){return a}}return -1}
function du(a){return vg(this.a,this.b++,a),true}
function eu(a){return cu(this,a,0)!=-1}
function fu(){return this.b}
function Ct(){}
_=Ct.prototype=new ss();_.j=du;_.k=eu;_.z=fu;_.tI=42;_.a=null;_.b=0;function ku(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function mu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ge(a,b)}
function ju(){}
_=ju.prototype=new jr();_.tI=43;function ou(a){a.a=ku(new ju());return a}
function pu(c,a){var b;b=qs(c.a,a,c);return b==null}
function ru(b){var a;return a=qs(this.a,b,this),a==null}
function su(a){return hs(this.a,a)}
function tu(){var a;return a=mr(new lr(),vt(this.a).b.a),ft(new et(),a)}
function uu(){return this.a.d}
function nu(){}
_=nu.prototype=new yt();_.j=ru;_.k=su;_.r=tu;_.z=uu;_.tI=44;_.a=null;function zu(b,a,c){b.a=a;b.b=c;return b}
function Bu(){return this.a}
function Cu(){return this.b}
function Eu(b){var a;a=this.b;this.b=b;return a}
function yu(){}
_=yu.prototype=new qt();_.o=Bu;_.p=Cu;_.y=Eu;_.tI=45;_.a=null;_.b=null;function av(){}
_=av.prototype=new dq();_.tI=46;function gv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ge(a,b)}
function ep(){!!$stats&&$stats({moduleName:$moduleName,subSystem:t,evtGroup:u,millis:(new Date()).getTime(),type:v,className:w});Do(new Co())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ep()}catch(a){b(d)}else{ep()}}
function hv(){}
var mh=np(x,z),nh=np(A,B);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();