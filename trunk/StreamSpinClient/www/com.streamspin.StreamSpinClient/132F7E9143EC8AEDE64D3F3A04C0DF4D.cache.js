(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var rb='',Fb=' ',l='#',r='$',u=', Size: ',bd='-',gb='/',uc='0',fd='0px',yd='100%',Cd='100px',p='20px',s=':',zc='<SELECT>',m='?',Cb='BackgroundImageCache',Cc='DIV',lb='DOMMouseScroll',t='Index: ',ud='Item four',qd='Item one',wd='Item six',vd='Item that has a long title and is number five',sd='Item tree',rd='Item two',D='Object;',o='Status: <b>Online<\/b>',Ad='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',B='Widget;',A='[Lcom.google.gwt.user.client.ui.',C='[Ljava.lang.',q='\\',hc='__gwt_initWindowCloseHandler',xc='align',sc='blur',pc='bottom',dc='button',vc='cellPadding',tc='cellSpacing',nc='center',Dc='change',Eb='className',od='clear.cache.gif',id='click',z='com.streamspin.client.StreamSpinClient',mb='contextmenu',td='dblclick',kc='div',jb='error',n='focus',Ab='function',Bb='function ',ec='gwt-Button',mc='gwt-HTML',lc='gwt-Label',Ac='gwt-ListBox',ad='gwt-MenuBar',kd='gwt-TextArea',Bd='height',gd='hideFocus',dd='horizontal',nd='http://',ld='https',md='https://',y='keydown',E='keypress',F='keyup',ac='left',ab='load',bb='losecapture',Fc='menubar',qc='middle',w='moduleStartup',cb='mousedown',db='mousemove',eb='mouseout',fb='mouseover',hb='mouseup',kb='mousewheel',x='onModuleLoadStart',xb='onblur',nb='onclick',zb='oncontextmenu',yb='ondblclick',wb='onfocus',tb='onkeydown',ub='onkeypress',vb='onkeyup',ob='onmousedown',qb='onmousemove',pb='onmouseup',sb='onmousewheel',Bc='option',ed='outline',cc='position',oc='right',Ec='role',Db='script',ib='scroll',v='startup',Dd='status Online',fc='submit',ic='table',jc='tbody',wc='td',jd='textarea',pd='title of Main Window',bc='top',rc='tr',hd='true',gc='type',zd='value',cd='vertical',yc='verticalAlign',xd='width';var _;function eq(a){return this===(a==null?null:a)}
function fq(){return this.$H||(this.$H=++se)}
function cq(){}
_=cq.prototype={};_.eQ=eq;_.hC=fq;_.tM=kv;_.tI=1;function ie(b,a){return b.tM==kv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ke(a){return a.tM==kv||a.tI==2?a.hC():a.$H||(a.$H=++se)}
function pe(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(gb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+gb:rb}
var se=0;function ye(b,a){return b===a||b.contains(a)}
function ze(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function nf(){nf=kv;qf()}
function pf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function qf(){try{$doc.execCommand(Cb,false,true)}catch(a){}}
function uf(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function vf(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;pf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function wf(a,c){nf();var b,d;if(uq(a.__pendingSrc||a.src,c)){return}if(!xf){xf={}}b=a.__pendingSrc;if(b!=null){d=xf[b];if(d==a){vf(xf,d)}else{uf(d,a)}}d=xf[c];if(!d){pf(xf,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var xf=null;function mg(){}
_=mg.prototype=new cq();_.tI=0;function tg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ug(a,f,c,b,e){var d;d=tg(e,b);vg(a,f,c,d);return d}
function vg(b,d,c,a){if(!wg){wg=new pg()}zg(a,wg);a.tI=d;a.qI=c;return a}
function xg(a,b,c){if(c!=null){if(a.qI>0&&!Cg(c.tI,a.qI)){throw new jp()}if(a.qI<0&&(c.tM==kv||c.tI==2)){throw new jp()}}return a[b]=c}
function zg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function pg(){}
_=pg.prototype=new cq();_.tI=0;_.length=0;_.qI=0;var wg=null;function Dg(b,a){return b&&!!lh[b][a]}
function Cg(b,a){return b&&lh[b][a]}
function Eg(b,a){if(b!=null&&!Cg(b.tI,a)){throw new np()}return b}
function kh(a){if(a!=null){throw new np()}return a}
var lh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function ai(b,a,c){var d;if(a==di){if(aj(b)==8192){di=null}}d=Fh;Fh=b;try{c.t(b)}finally{Fh=d}}
function ci(a){return true}
function gi(a,b){cj();zi(a,b)}
var Fh=null,di=null;function li(a){qi();if(!mi){mi=au(new Ft())}cu(mi,a)}
function ni(){var a;if(mi){for(a=ys(new ws(),mi);a.a<a.b.b;){Eg(Bs(a),3);qm()}}}
function oi(){var a,b;b=null;if(mi){for(a=ys(new ws(),mi);a.a<a.b.b;){Eg(Bs(a),3);b=null}}return b}
function qi(){if(!pi){pi=true;kj(jj(),hc)}}
var mi=null,pi=false;function aj(a){switch(a.type){case sc:return 4096;case Dc:return 1024;case id:return 1;case td:return 2;case n:return 2048;case y:return 128;case E:return 256;case F:return 512;case ab:return 32768;case bb:return 8192;case cb:return 4;case db:return 64;case eb:return 32;case fb:return 16;case hb:return 8;case ib:return 16384;case jb:return 65536;case kb:return 131072;case lb:return 131072;case mb:return 262144;}}
function cj(){if(!ej){yi();ej=true}}
var ej=false;function yi(){Ci=function(){var c=Ai;Ai=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!ci($wnd.event)){Ai=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&Dg(b.tI,4)&&!(b!=null&&(b.tM!=kv&&b.tI!=2))){ai($wnd.event,a,b)}}Ai=c};Bi=function(){var a=$doc.createEventObject();this.fireEvent(nb,a);if(this.__eventBits&2){Ci.call(this)}};var e=function(){Ci.call($doc.body)};var d=function(){Bi.call($doc.body)};$doc.body.attachEvent(nb,e);$doc.body.attachEvent(ob,e);$doc.body.attachEvent(pb,e);$doc.body.attachEvent(qb,e);$doc.body.attachEvent(sb,e);$doc.body.attachEvent(tb,e);$doc.body.attachEvent(ub,e);$doc.body.attachEvent(vb,e);$doc.body.attachEvent(wb,e);$doc.body.attachEvent(xb,e);$doc.body.attachEvent(yb,d);$doc.body.attachEvent(zb,e)}
function zi(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Ci:null;if(b&3)c.ondblclick=a&3?Bi:null;if(b&4)c.onmousedown=a&4?Ci:null;if(b&8)c.onmouseup=a&8?Ci:null;if(b&16)c.onmouseover=a&16?Ci:null;if(b&32)c.onmouseout=a&32?Ci:null;if(b&64)c.onmousemove=a&64?Ci:null;if(b&128)c.onkeydown=a&128?Ci:null;if(b&256)c.onkeypress=a&256?Ci:null;if(b&512)c.onkeyup=a&512?Ci:null;if(b&1024)c.onchange=a&1024?Ci:null;if(b&2048)c.onfocus=a&2048?Ci:null;if(b&4096)c.onblur=a&4096?Ci:null;if(b&8192)c.onlosecapture=a&8192?Ci:null;if(b&16384)c.onscroll=a&16384?Ci:null;if(b&32768)c.onload=a&32768?Ci:null;if(b&65536)c.onerror=a&65536?Ci:null;if(b&131072)c.onmousewheel=a&131072?Ci:null;if(b&262144)c.oncontextmenu=a&262144?Ci:null}
var Ai=null,Bi=null,Ci=null;function jj(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function kj(c,b){var d,a;c=yq(c,Ab,Bb+b);d=(a=$doc.createElement(Db),a.text=c,a);$doc.body.appendChild(d);lj();$doc.body.removeChild(d)}
function lj(){$wnd.__gwt_initWindowCloseHandler(function(){return oi()},function(){ni()})}
function en(b,a){ln(b.i,a,true)}
function kn(a){var b,c;b=a[Eb]==null?null:String(a[Eb]);c=b.indexOf(ar(32));if(c>=0){return b.substr(0,c-0)}return b}
function ln(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new gq()}j=Bq(j);if(j.length==0){throw new yp()}i=c[Eb]==null?null:String(c[Eb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Fb}c[Eb]=i+j}}else{if(e!=-1){b=Bq(i.substr(0,e-0));d=Bq(zq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Fb+d}c[Eb]=h}}}
function dn(){}
_=dn.prototype=new cq();_.tI=7;_.i=null;function fo(a){if(a.g){throw new Bp()}a.g=true;a.i.__listener=a;a.l();a.v()}
function go(a){if(!a.g){throw new Bp()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function ho(a){if(a.h){a.h.x(a)}else if(a.h){throw new Bp()}}
function io(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new Bp()}c.h=b;if(b.g){fo(c)}}}
function jo(){}
function ko(){}
function lo(a){}
function mo(){go(this)}
function no(){}
function oo(){}
function tn(){}
_=tn.prototype=new dn();_.l=jo;_.m=ko;_.t=lo;_.u=mo;_.v=no;_.w=oo;_.tI=8;_.g=false;_.h=null;function dm(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=zn(b);fo(a)}}
function em(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=zn(b);a.u()}}
function fm(){}
function gm(){}
function bm(){}
_=bm.prototype=new tn();_.l=dm;_.m=em;_.v=fm;_.w=gm;_.tI=9;function bk(c,a,b){ho(a);Dn(c.f,a);b.appendChild(a.i);io(a,c)}
function dk(b,c){var a;if(c.h!=b){return false}io(c,null);a=c.i;a.parentElement.removeChild(a);co(b.f,c);return true}
function ek(){return xn(new vn(),this.f)}
function fk(a){return dk(this,a)}
function Fj(){}
_=Fj.prototype=new bm();_.r=ek;_.x=fk;_.tI=10;function oj(a,b){bk(a,b,a.i)}
function qj(b,c){var a;a=dk(b,c);if(a){rj(c.i)}return a}
function rj(a){a.style[ac]=rb;a.style[bc]=rb;a.style[cc]=rb}
function sj(a){return qj(this,a)}
function nj(){}
_=nj.prototype=new Fj();_.x=sj;_.tI=11;function hk(b,a){b.i=a;b.i.tabIndex=0;return b}
function jk(a){aj(a)}
function gk(){}
_=gk.prototype=new tn();_.t=jk;_.tI=12;function xj(b,a){b.i=a;b.i.tabIndex=0;return b}
function wj(){}
_=wj.prototype=new gk();_.tI=13;function zj(a){xj(a,$doc.createElement(dc));Bj(a.i);a.i[Eb]=ec;return a}
function Bj(b){if(b.type==fc){try{b.setAttribute(gc,dc)}catch(a){}}}
function vj(){}
_=vj.prototype=new wj();_.tI=14;function Dj(a){a.f=Cn(new un());a.e=$doc.createElement(ic);a.d=$doc.createElement(jc);a.e.appendChild(a.d);a.i=a.e;return a}
function Cj(){}
_=Cj.prototype=new Fj();_.tI=15;_.d=null;_.e=null;function kl(a){a.i=$doc.createElement(kc);a.i[Eb]=lc;return a}
function nl(a){aj(a)}
function jl(){}
_=jl.prototype=new tn();_.t=nl;_.tI=16;function lk(a){a.i=$doc.createElement(kc);a.i[Eb]=mc;return a}
function kk(){}
_=kk.prototype=new jl();_.tI=17;function uk(){uk=kv;sk(new rk(),nc);wk=sk(new rk(),ac);sk(new rk(),oc);vk=wk}
var vk,wk;function sk(b,a){b.a=a;return b}
function rk(){}
_=rk.prototype=new cq();_.tI=0;_.a=null;function Ck(){Ck=kv;Ak(new zk(),pc);Ak(new zk(),qc);Dk=Ak(new zk(),bc)}
var Dk;function Ak(a,b){a.a=b;return a}
function zk(){}
_=zk.prototype=new cq();_.tI=0;_.a=null;function cl(a){Dj(a);a.a=(uk(),vk);a.c=(Ck(),Dk);a.b=$doc.createElement(rc);a.d.appendChild(a.b);a.e[tc]=uc;a.e[vc]=uc;return a}
function dl(c,d){var b,a;b=(a=$doc.createElement(wc),(a[xc]=c.a.a,undefined),(a.style[yc]=c.c.a,undefined),a);c.b.appendChild(b);ho(d);Dn(c.f,d);b.appendChild(d.i);io(d,c)}
function gl(c){var a,b;b=c.i.parentElement;a=dk(this,c);if(a){this.b.removeChild(b)}return a}
function al(){}
_=al.prototype=new Cj();_.x=gl;_.tI=18;_.b=null;function pl(b){var a;hk(b,(a=zc,$doc.createElement(a)));b.i[Eb]=Ac;return b}
function sl(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement(Bc);d.text=c;d.value=g;if(b==-1||b==e.options.length){ze(e,d,null)}else{a=e.options[b];ze(e,d,a)}}
function ul(a){if(aj(a)==1024){}else{aj(a)}}
function ol(){}
_=ol.prototype=new gk();_.t=ul;_.tI=19;function yl(a){au(new Ft());a.b=au(new Ft());Bl(a,false,(El(),new Cl()));return a}
function Al(d,a){var b,c;for(c=ys(new ws(),d.b);c.a<c.b.b;){b=kh(Bs(c));if(ye(null.B(),a)){return b}}return null}
function Bl(d,f){var b,c,e,a;c=$doc.createElement(ic);d.a=$doc.createElement(jc);c.appendChild(d.a);if(!f){e=$doc.createElement(rc);d.a.appendChild(e)}b=(a=$doc.createElement(Cc),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Ec,Fc);gi(d.i,2225|(d.i.__eventBits||0));d.i[Eb]=ad;if(f){en(d,kn(d.i)+bd+cd)}else{en(d,kn(d.i)+bd+dd)}d.i.style[ed]=fd;d.i.setAttribute(gd,hd)}
function Fl(a){var b;Al(this,a.srcElement);switch(aj(a)){case 1:{zo(this.i);break}{break}case 2048:{kh(eu(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{kh(eu(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{kh(eu(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:kh(eu(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:kh(eu(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{kh(eu(this.b,0))}}break}}}
function am(){go(this)}
function vl(){}
_=vl.prototype=new tn();_.t=Fl;_.u=am;_.tI=20;_.a=null;function El(){El=kv;vo()}
function Cl(){}
_=Cl.prototype=new cq();_.tI=0;function pm(){pm=kv;tm=nu(new mu());um=ru(new qu())}
function om(b,a){pm();b.f=Cn(new un());b.i=a;fo(b);return b}
function qm(){var b,a;pm();var c,d;for(d=(b=pr(new or(),yt(um.a).b.a),it(new ht(),b));As(d.a.a);){c=Eg((a=Eg(Bs(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function sm(a){pm();var b;b=Eg(ns(tm,a),5);if(b){return b}if(tm.d==0){li(new jm())}b=mm(new lm());ts(tm,a,b);su(um,b);return b}
function im(){}
_=im.prototype=new nj();_.tI=21;var tm,um;function jm(){}
_=jm.prototype=new cq();_.tI=22;function nm(){nm=kv;pm()}
function mm(a){nm();om(a,$doc.body);return a}
function lm(){}
_=lm.prototype=new im();_.tI=23;function Fm(b,a){b.i=a;b.i.tabIndex=0;return b}
function cn(a){var b;b=aj(a);if((b&896)!=0){aj(a)}else if(b==1024){}else{aj(a)}}
function Em(){}
_=Em.prototype=new gk();_.t=cn;_.tI=24;function Cm(a){Fm(a,$doc.createElement(jd));a.i[Eb]=kd;return a}
function Bm(){}
_=Bm.prototype=new Em();_.tI=25;function on(a){Dj(a);a.a=(uk(),vk);a.b=(Ck(),Dk);a.e[tc]=uc;a.e[vc]=uc;return a}
function pn(c,e){var b,d,a;d=$doc.createElement(rc);b=(a=$doc.createElement(wc),(a[xc]=c.a.a,undefined),(a.style[yc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);ho(e);Dn(c.f,e);b.appendChild(e.i);io(e,c)}
function sn(c){var a,b;b=c.i.parentElement;a=dk(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function mn(){}
_=mn.prototype=new Cj();_.x=sn;_.tI=26;function Cn(a){a.a=ug(oh,0,6,4,0);return a}
function Dn(a,b){ao(a,b,a.b)}
function Fn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function ao(d,e,a){var b,c;if(a<0||a>d.b){throw new Ep()}if(d.b==d.a.length){c=ug(oh,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){xg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){xg(d.a,b,d.a[b-1])}xg(d.a,a,e)}
function bo(c,b){var a;if(b<0||b>=c.b){throw new Ep()}--c.b;for(a=b;a<c.b;++a){xg(c.a,a,c.a[a+1])}xg(c.a,c.b,null)}
function co(b,c){var a;a=Fn(b,c);if(a==-1){throw new dv()}bo(b,a)}
function un(){}
_=un.prototype=new cq();_.tI=0;_.a=null;_.b=0;function xn(b,a){b.b=a;return b}
function zn(a){if(a.a>=a.b.b){throw new dv()}return a.b.a[++a.a]}
function An(){return this.a<this.b.b-1}
function Bn(){return zn(this)}
function vn(){}
_=vn.prototype=new cq();_.q=An;_.s=Bn;_.tI=0;_.a=-1;_.b=null;function ro(){ro=kv;pe().indexOf(ld)==0?md:nd}
function so(){ro();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;wf(a,$moduleBase+od)}}
function vo(){vo=kv;ro();so()}
function zo(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function Do(){}
_=Do.prototype=new mg();_.tI=0;function Fo(a){a.d=on(new mn());a.c=cl(new al());a.h=on(new mn());a.g=pl(new ol());a.a=Cm(new Bm());a.e=yl(new vl());a.b=zj(new vj());a.f=kl(new jl());a.i=lk(new kk());a.i.i.innerText=pd;sl(a.g,qd,qd,-1);sl(a.g,rd,rd,-1);sl(a.g,sd,sd,-1);sl(a.g,ud,ud,-1);sl(a.g,vd,vd,-1);sl(a.g,wd,wd,-1);a.g.i.size=4;a.g.i.style[xd]=yd;a.a.i[zd]=Ad!=null?Ad:rb;a.a.i.style[xd]=yd;pn(a.h,a.g);pn(a.h,a.a);a.h.i.style[Bd]=Cd;a.h.i.style[xd]=yd;a.f.i.innerText=Dd;a.f.i.innerHTML=o;dl(a.c,a.b);dl(a.c,a.e);a.c.i.style[Bd]=p;pn(a.d,a.i);pn(a.d,a.h);pn(a.d,a.f);pn(a.d,a.c);a.d.i.style[Bd]=yd;a.d.i.style[xd]=yd;oj((pm(),sm(null)),a.d);return a}
function Eo(){}
_=Eo.prototype=new Do();_.tI=0;function cr(){}
_=cr.prototype=new cq();_.tI=3;function wp(){}
_=wp.prototype=new cr();_.tI=4;function gq(){}
_=gq.prototype=new wp();_.tI=5;function jp(){}
_=jp.prototype=new gq();_.tI=28;function qp(c,a){var b;b=new mp();return b}
function mp(){}
_=mp.prototype=new cq();_.tI=0;function np(){}
_=np.prototype=new gq();_.tI=31;function yp(){}
_=yp.prototype=new gq();_.tI=32;function Bp(){}
_=Bp.prototype=new gq();_.tI=33;function Fp(b,a){return b}
function Ep(){}
_=Ep.prototype=new gq();_.tI=34;function uq(b,a){if(!(a!=null&&Dg(a.tI,1))){return false}return String(b)==a}
function yq(c,a,b){b=Dq(b);return c.replace(RegExp(a),b)}
function zq(b,a){return b.substr(a,b.length-a)}
function Bq(c){if(c.length==0||c[0]>Fb&&c[c.length-1]>Fb){return c}var a=c.replace(/^(\s*)/,rb);var b=a.replace(/\s*$/,rb);return b}
function Dq(b){var a;a=0;while(0<=(a=b.indexOf(q,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+r+zq(b,++a)}else{b=b.substr(0,a-0)+zq(b,++a)}}return b}
function Eq(a){return uq(this,a)}
function ar(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function br(){return qq(this)}
_=String.prototype;_.eQ=Eq;_.hC=br;_.tI=2;function lq(){lq=kv;mq={};pq={}}
function nq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function qq(c){lq();var a=s+c;var b=pq[a];if(b!=null){return b}b=mq[a];if(b==null){b=nq(c)}rq();return pq[a]=b}
function rq(){if(oq==256){mq=pq;pq={};oq=0}++oq}
var mq,oq=0,pq;function er(){}
_=er.prototype=new gq();_.tI=35;function ir(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:ie(b,c)){return a}}return null}
function kr(a){throw new er()}
function lr(b){var a;a=ir(this.r(),b);return !!a}
function hr(){}
_=hr.prototype=new cq();_.j=kr;_.k=lr;_.tI=0;function yt(b){var a;a=tr(new nr(),b);return nt(new gt(),b,a)}
function zt(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Dg(c.tI,11))){return false}e=Eg(c,11);if(Eg(this,11).d!=e.d){return false}for(b=pr(new or(),tr(new nr(),e).a);As(b.a);){a=Eg(Bs(b.a),9);d=a.o();f=a.p();if(!(d==null?Eg(this,11).c:d!=null&&Dg(d.tI,1)?ps(Eg(this,11),Eg(d,1)):os(Eg(this,11),d,~~ke(d)))){return false}if(!jv(f,d==null?Eg(this,11).b:d!=null&&Dg(d.tI,1)?Eg(this,11).e[s+Eg(d,1)]:ls(Eg(this,11),d,~~ke(d)))){return false}}return true}
function At(){var a,b,c;c=0;for(b=pr(new or(),tr(new nr(),Eg(this,11)).a);As(b.a);){a=Eg(Bs(b.a),9);c+=a.hC();c=~~c}return c}
function ft(){}
_=ft.prototype=new cq();_.eQ=zt;_.hC=At;_.tI=0;function gs(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function hs(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=es(e,c.substring(1));a.j(b)}}}
function ks(b,a){return a==null?b.c:a!=null&&Dg(a.tI,1)?ps(b,Eg(a,1)):os(b,a,~~ke(a))}
function ns(b,a){return a==null?b.b:a!=null&&Dg(a.tI,1)?b.e[s+Eg(a,1)]:ls(b,a,~~ke(a))}
function ls(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function os(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function ps(b,a){return s+a in b.e}
function ts(b,a,c){return a==null?rs(b,c):a!=null&&Dg(a.tI,1)?ss(b,Eg(a,1),c):qs(b,a,c,~~ke(a))}
function qs(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=Cu(new Bu(),g,j);a.push(c);++i.d;return null}
function rs(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ss(d,a,e){var b,c=d.e;a=s+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function us(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ie(a,b)}
function mr(){}
_=mr.prototype=new ft();_.n=us;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Dt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Dg(b.tI,12))){return false}c=Eg(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function Et(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=ke(c);a=~~a}}return a}
function Bt(){}
_=Bt.prototype=new hr();_.eQ=Dt;_.hC=Et;_.tI=36;function tr(b,a){b.a=a;return b}
function vr(d,c){var a,b,e;if(c!=null&&Dg(c.tI,9)){a=Eg(c,9);b=a.o();if(ks(d.a,b)){e=ns(d.a,b);return pu(a.p(),e)}}return false}
function wr(a){return vr(this,a)}
function xr(){return pr(new or(),this.a)}
function yr(){return this.a.d}
function nr(){}
_=nr.prototype=new Bt();_.k=wr;_.r=xr;_.z=yr;_.tI=37;_.a=null;function pr(c,b){var a;c.b=b;a=au(new Ft());if(c.b.c){cu(a,Ar(new zr(),c.b))}hs(c.b,a);gs(c.b,a);c.a=ys(new ws(),a);return c}
function rr(){return As(this.a)}
function sr(){return Eg(Bs(this.a),9)}
function or(){}
_=or.prototype=new cq();_.q=rr;_.s=sr;_.tI=0;_.a=null;_.b=null;function vt(b){var a;if(b!=null&&Dg(b.tI,9)){a=Eg(b,9);if(jv(this.o(),a.o())&&jv(this.p(),a.p())){return true}}return false}
function wt(){var a,b;a=0;b=0;if(this.o()!=null){a=ke(this.o())}if(this.p()!=null){b=ke(this.p())}return a^b}
function tt(){}
_=tt.prototype=new cq();_.eQ=vt;_.hC=wt;_.tI=38;function Ar(b,a){b.a=a;return b}
function Cr(){return null}
function Dr(){return this.a.b}
function Er(a){return rs(this.a,a)}
function zr(){}
_=zr.prototype=new tt();_.o=Cr;_.p=Dr;_.y=Er;_.tI=39;_.a=null;function as(c,a,b){c.b=b;c.a=a;return c}
function cs(){return this.a}
function ds(){return this.b.e[s+this.a]}
function es(b,a){return as(new Fr(),a,b)}
function fs(a){return ss(this.b,this.a,a)}
function Fr(){}
_=Fr.prototype=new tt();_.o=cs;_.p=ds;_.y=fs;_.tI=40;_.a=null;_.b=null;function Fs(a){bu(this,this.z(),a);return true}
function at(a,b){if(a<0||a>=b){dt(a,b)}}
function bt(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Dg(e.tI,10))){return false}f=Eg(e,10);if(this.z()!=f.b){return false}c=ys(new ws(),this);d=ys(new ws(),f);while(c.a<c.b.b){a=Bs(c);b=Bs(d);if(!(a==null?b==null:ie(a,b))){return false}}return true}
function ct(){var a,b,c;b=1;a=ys(new ws(),this);while(a.a<a.b.b){c=Bs(a);b=31*b+(c==null?0:ke(c));b=~~b}return b}
function dt(a,b){throw Fp(new Ep(),t+a+u+b)}
function et(){return ys(new ws(),this)}
function vs(){}
_=vs.prototype=new hr();_.j=Fs;_.eQ=bt;_.hC=ct;_.r=et;_.tI=0;function ys(b,a){b.b=a;return b}
function As(a){return a.a<a.b.b}
function Bs(a){if(a.a>=a.b.b){throw new dv()}return eu(a.b,a.a++)}
function Cs(){return this.a<this.b.b}
function Ds(){return Bs(this)}
function ws(){}
_=ws.prototype=new cq();_.q=Cs;_.s=Ds;_.tI=0;_.a=0;_.b=null;function nt(b,a,c){b.a=a;b.b=c;return b}
function qt(a){return ks(this.a,a)}
function rt(){var a;return a=pr(new or(),this.b.a),it(new ht(),a)}
function st(){return this.b.a.d}
function gt(){}
_=gt.prototype=new Bt();_.k=qt;_.r=rt;_.z=st;_.tI=41;_.a=null;_.b=null;function it(a,b){a.a=b;return a}
function lt(){return As(this.a.a)}
function mt(){var a;return a=Eg(Bs(this.a.a),9),a.o()}
function ht(){}
_=ht.prototype=new cq();_.q=lt;_.s=mt;_.tI=0;_.a=null;function au(a){a.a=ug(ph,0,0,0,0);a.b=0;return a}
function cu(b,a){xg(b.a,b.b++,a);return true}
function bu(c,a,b){if(a<0||a>c.b){dt(a,c.b)}c.a.splice(a,0,b);++c.b}
function eu(b,a){at(a,b.b);return b.a[a]}
function fu(c,b,a){for(;a<c.b;++a){if(jv(b,c.a[a])){return a}}return -1}
function gu(a){return xg(this.a,this.b++,a),true}
function hu(a){return fu(this,a,0)!=-1}
function iu(){return this.b}
function Ft(){}
_=Ft.prototype=new vs();_.j=gu;_.k=hu;_.z=iu;_.tI=42;_.a=null;_.b=0;function nu(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function pu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ie(a,b)}
function mu(){}
_=mu.prototype=new mr();_.tI=43;function ru(a){a.a=nu(new mu());return a}
function su(c,a){var b;b=ts(c.a,a,c);return b==null}
function uu(b){var a;return a=ts(this.a,b,this),a==null}
function vu(a){return ks(this.a,a)}
function wu(){var a;return a=pr(new or(),yt(this.a).b.a),it(new ht(),a)}
function xu(){return this.a.d}
function qu(){}
_=qu.prototype=new Bt();_.j=uu;_.k=vu;_.r=wu;_.z=xu;_.tI=44;_.a=null;function Cu(b,a,c){b.a=a;b.b=c;return b}
function Eu(){return this.a}
function Fu(){return this.b}
function bv(b){var a;a=this.b;this.b=b;return a}
function Bu(){}
_=Bu.prototype=new tt();_.o=Eu;_.p=Fu;_.y=bv;_.tI=45;_.a=null;_.b=null;function dv(){}
_=dv.prototype=new gq();_.tI=46;function jv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ie(a,b)}
function hp(){!!$stats&&$stats({moduleName:$moduleName,subSystem:v,evtGroup:w,millis:(new Date()).getTime(),type:x,className:z});Fo(new Eo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{hp()}catch(a){b(d)}else{hp()}}
function kv(){}
var oh=qp(A,B),ph=qp(C,D);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();