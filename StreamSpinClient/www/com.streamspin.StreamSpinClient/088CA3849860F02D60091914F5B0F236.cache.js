(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var ob='',Cb=' ',l='#',q='$',ic=', Size: ',xd=', pw: ',Fc='-',db='/',uc='0',dd='0px',r=':',yc='<SELECT>',o='<b>Login<\/b>',m='?',zb='BackgroundImageCache',Bc='DIV',ib='DOMMouseScroll',hd='INPUT',hc='Index: ',Ad='Login Screen',A='Object;',x='Widget;',w='[Lcom.google.gwt.user.client.ui.',z='[Ljava.lang.',p='\\',ec='__gwt_initWindowCloseHandler',pd='align',pc='blur',qc='bottom',ac='button',vc='cellPadding',tc='cellSpacing',nc='center',Ac='change',Bb='className',vd='clear.cache.gif',fd='click',v='com.streamspin.client.StreamSpinClient',jb='contextmenu',qd='dblclick',kc='div',gb='error',n='focus',xb='function',yb='function ',bc='gwt-Button',mc='gwt-HTML',wc='gwt-Image',lc='gwt-Label',zc='gwt-ListBox',Ec='gwt-MenuBar',ld='gwt-PasswordTextBox',nd='gwt-TextArea',jd='gwt-TextBox',ed='hideFocus',bd='horizontal',ud='http://',sd='https',td='https://',zd='images/daisy.gif',xc='img',y='keydown',B='keypress',C='keyup',Db='left',D='load',E='losecapture',Dc='menubar',rc='middle',t='moduleStartup',F='mousedown',ab='mousemove',bb='mouseout',cb='mouseover',eb='mouseup',hb='mousewheel',u='onModuleLoadStart',ub='onblur',kb='onclick',wb='oncontextmenu',vb='ondblclick',tb='onfocus',qb='onkeydown',rb='onkeypress',sb='onkeyup',lb='onmousedown',nb='onmousemove',mb='onmouseup',pb='onmousewheel',cd='outline',kd='password',Fb='position',oc='right',Cc='role',Ab='script',fb='scroll',yd='someTest',s='startup',cc='submit',fc='table',gc='tbody',od='td',id='text',md='textarea',Eb='top',sc='tr',gd='true',dc='type',wd='un: ',jc='value',ad='vertical',rd='verticalAlign';var _;function pq(a){return this===(a==null?null:a)}
function qq(){return this.$H||(this.$H=++pe)}
function nq(){}
_=nq.prototype={};_.eQ=pq;_.hC=qq;_.tM=xv;_.tI=1;function fe(b,a){return b.tM==xv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function he(a){return a.tM==xv||a.tI==2?a.hC():a.$H||(a.$H=++pe)}
function me(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(db);if(a!=-1)b=b.substring(0,a);return b.length>0?b+db:ob}
var pe=0;function ve(b,a){return b===a||b.contains(a)}
function bf(b,a){return b[a]==null?null:String(b[a])}
function hf(){hf=xv;lf()}
function kf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function lf(){try{$doc.execCommand(zb,false,true)}catch(a){}}
function pf(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function qf(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;kf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function rf(a,c){hf();var b,d;if(Fq(a.__pendingSrc||a.src,c)){return}if(!sf){sf={}}b=a.__pendingSrc;if(b!=null){d=sf[b];if(d==a){qf(sf,d)}else{pf(d,a)}}d=sf[c];if(!d){kf(sf,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var sf=null;function Df(){}
_=Df.prototype=new nq();_.tI=0;function eg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function fg(a,f,c,b,e){var d;d=eg(e,b);gg(a,f,c,d);return d}
function gg(b,d,c,a){if(!hg){hg=new ag()}kg(a,hg);a.tI=d;a.qI=c;return a}
function ig(a,b,c){if(c!=null){if(a.qI>0&&!ng(c.tI,a.qI)){throw new pp()}if(a.qI<0&&(c.tM==xv||c.tI==2)){throw new pp()}}return a[b]=c}
function kg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function ag(){}
_=ag.prototype=new nq();_.tI=0;_.length=0;_.qI=0;var hg=null;function og(b,a){return b&&!!Cg[b][a]}
function ng(b,a){return b&&Cg[b][a]}
function pg(b,a){if(b!=null&&!ng(b.tI,a)){throw new yp()}return b}
function Bg(a){if(a!=null){throw new yp()}return a}
var Cg=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{12:1},{12:1},{12:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{4:1,6:1,7:1,8:1},{3:1},{4:1,6:1,7:1,8:1},{4:1,7:1,8:1},{4:1,7:1,8:1},{5:1},{2:1},{2:1},{2:1},{2:1},{10:1},{2:1},{2:1},{2:1},{2:1},{2:1},{14:1},{14:1},{11:1},{11:1},{11:1},{14:1},{13:1},{14:1},{11:1},{2:1},{9:1}];function rh(b,a,c){var d;if(a==uh){if(ri(b)==8192){uh=null}}d=qh;qh=b;try{c.u(b)}finally{qh=d}}
function th(a){return true}
function xh(a,b){ti();ki(a,b)}
var qh=null,uh=null;function Ch(a){bi();if(!Dh){Dh=mu(new lu())}nu(Dh,a)}
function Eh(){var a;if(Dh){for(a=dt(new bt(),Dh);a.a<a.b.A();){pg(gt(a),3);pm()}}}
function Fh(){var a,b;b=null;if(Dh){for(a=dt(new bt(),Dh);a.a<a.b.A();){pg(gt(a),3);b=null}}return b}
function bi(){if(!ai){ai=true;Bi(Ai(),ec)}}
var Dh=null,ai=false;function ri(a){switch(a.type){case pc:return 4096;case Ac:return 1024;case fd:return 1;case qd:return 2;case n:return 2048;case y:return 128;case B:return 256;case C:return 512;case D:return 32768;case E:return 8192;case F:return 4;case ab:return 64;case bb:return 32;case cb:return 16;case eb:return 8;case fb:return 16384;case gb:return 65536;case hb:return 131072;case ib:return 131072;case jb:return 262144;}}
function ti(){if(!vi){ji();vi=true}}
var vi=false;function ji(){ni=function(){var c=li;li=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!th($wnd.event)){li=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&og(b.tI,4)&&!(b!=null&&(b.tM!=xv&&b.tI!=2))){rh($wnd.event,a,b)}}li=c};mi=function(){var a=$doc.createEventObject();this.fireEvent(kb,a);if(this.__eventBits&2){ni.call(this)}};var e=function(){ni.call($doc.body)};var d=function(){mi.call($doc.body)};$doc.body.attachEvent(kb,e);$doc.body.attachEvent(lb,e);$doc.body.attachEvent(mb,e);$doc.body.attachEvent(nb,e);$doc.body.attachEvent(pb,e);$doc.body.attachEvent(qb,e);$doc.body.attachEvent(rb,e);$doc.body.attachEvent(sb,e);$doc.body.attachEvent(tb,e);$doc.body.attachEvent(ub,e);$doc.body.attachEvent(vb,d);$doc.body.attachEvent(wb,e)}
function ki(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?ni:null;if(b&3)c.ondblclick=a&3?mi:null;if(b&4)c.onmousedown=a&4?ni:null;if(b&8)c.onmouseup=a&8?ni:null;if(b&16)c.onmouseover=a&16?ni:null;if(b&32)c.onmouseout=a&32?ni:null;if(b&64)c.onmousemove=a&64?ni:null;if(b&128)c.onkeydown=a&128?ni:null;if(b&256)c.onkeypress=a&256?ni:null;if(b&512)c.onkeyup=a&512?ni:null;if(b&1024)c.onchange=a&1024?ni:null;if(b&2048)c.onfocus=a&2048?ni:null;if(b&4096)c.onblur=a&4096?ni:null;if(b&8192)c.onlosecapture=a&8192?ni:null;if(b&16384)c.onscroll=a&16384?ni:null;if(b&32768)c.onload=a&32768?ni:null;if(b&65536)c.onerror=a&65536?ni:null;if(b&131072)c.onmousewheel=a&131072?ni:null;if(b&262144)c.oncontextmenu=a&262144?ni:null}
var li=null,mi=null,ni=null;function Ai(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function Bi(c,b){var d,a;c=dr(c,xb,yb+b);d=(a=$doc.createElement(Ab),a.text=c,a);$doc.body.appendChild(d);Ci();$doc.body.removeChild(d)}
function Ci(){$wnd.__gwt_initWindowCloseHandler(function(){return Fh()},function(){Eh()})}
function hn(b,a){on(b.h,a,true)}
function kn(b,a){if(b.h){ln(b.h,a)}b.h=a}
function ln(b,a){var c=b.parentNode;if(!c){return}c.insertBefore(a,b);c.removeChild(b)}
function nn(a){var b,c;b=a[Bb]==null?null:String(a[Bb]);c=b.indexOf(lr(32));if(c>=0){return b.substr(0,c-0)}return b}
function on(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new rq()}j=gr(j);if(j.length==0){throw new dq()}i=c[Bb]==null?null:String(c[Bb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Cb}c[Bb]=i+j}}else{if(e!=-1){b=gr(i.substr(0,e-0));d=gr(er(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Cb+d}c[Bb]=h}}}
function gn(){}
_=gn.prototype=new nq();_.tI=7;_.h=null;function io(a){if(a.f){throw new gq()}a.f=true;a.h.__listener=a;a.l();a.w()}
function jo(a){if(!a.f){throw new gq()}try{a.x()}finally{a.m();a.h.__listener=null;a.f=false}}
function ko(a){if(a.g){a.g.y(a)}else if(a.g){throw new gq()}}
function lo(b,a){if(b.f){b.h.__listener=null}kn(b,a);if(b.f){b.h.__listener=b}}
function mo(c,b){var a;a=c.g;if(!b){if(!!a&&a.f){c.v()}c.g=null}else{if(a){throw new gq()}c.g=b;if(b.f){io(c)}}}
function no(){}
function oo(){}
function po(a){}
function qo(){jo(this)}
function ro(){}
function so(){}
function wn(){}
_=wn.prototype=new gn();_.l=no;_.m=oo;_.u=po;_.v=qo;_.w=ro;_.x=so;_.tI=8;_.f=false;_.g=null;function Fl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=Cn(b);io(a)}}
function am(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=Cn(b);a.v()}}
function bm(){}
function cm(){}
function Dl(){}
_=Dl.prototype=new wn();_.l=Fl;_.m=am;_.w=bm;_.x=cm;_.tI=9;function yj(c,a,b){ko(a);ao(c.e,a);b.appendChild(a.h);mo(a,c)}
function Aj(b,c){var a;if(c.g!=b){return false}mo(c,null);a=c.h;a.parentElement.removeChild(a);go(b.e,c);return true}
function Bj(){return An(new yn(),this.e)}
function Cj(a){return Aj(this,a)}
function wj(){}
_=wj.prototype=new Dl();_.s=Bj;_.y=Cj;_.tI=10;function Fi(a,b){yj(a,b,a.h)}
function bj(b,c){var a;a=Aj(b,c);if(a){cj(c.h)}return a}
function cj(a){a.style[Db]=ob;a.style[Eb]=ob;a.style[Fb]=ob}
function dj(a){return bj(this,a)}
function Ei(){}
_=Ei.prototype=new wj();_.y=dj;_.tI=11;function Ej(b,a){b.h=a;b.h.tabIndex=0;return b}
function Fj(b,a){if(!b.a){b.a=sj(new rj());xh(b.h,1|(b.h.__eventBits||0))}nu(b.a,a)}
function bk(b,a){if(ri(a)==1){if(b.a){uj(b.a)}}}
function ck(a){bk(this,a)}
function Dj(){}
_=Dj.prototype=new wn();_.u=ck;_.tI=12;_.a=null;function ij(b,a){b.h=a;b.h.tabIndex=0;return b}
function hj(){}
_=hj.prototype=new Dj();_.tI=13;function kj(a){ij(a,$doc.createElement(ac));nj(a.h);a.h[Bb]=bc;return a}
function lj(b,a){kj(b);b.h.innerHTML=a||ob;return b}
function nj(b){if(b.type==cc){try{b.setAttribute(dc,ac)}catch(a){}}}
function gj(){}
_=gj.prototype=new hj();_.tI=14;function pj(a){a.e=Fn(new xn());a.d=$doc.createElement(fc);a.c=$doc.createElement(gc);a.d.appendChild(a.c);a.h=a.d;return a}
function oj(){}
_=oj.prototype=new wj();_.tI=15;_.c=null;_.d=null;function tr(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:fe(b,c)){return a}}return null}
function vr(a){throw new pr()}
function wr(b){var a;a=tr(this.s(),b);return !!a}
function sr(){}
_=sr.prototype=new nq();_.j=vr;_.k=wr;_.tI=0;function lt(a){this.i(this.A(),a);return true}
function kt(b,a){throw new pr()}
function mt(a,b){if(a<0||a>=b){pt(a,b)}}
function nt(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&og(e.tI,12))){return false}f=pg(e,12);if(this.A()!=f.A()){return false}c=dt(new bt(),this);d=f.s();while(c.a<c.b.A()){a=gt(c);b=gt(d);if(!(a==null?b==null:fe(a,b))){return false}}return true}
function ot(){var a,b,c;b=1;a=dt(new bt(),this);while(a.a<a.b.A()){c=gt(a);b=31*b+(c==null?0:he(c));b=~~b}return b}
function pt(a,b){throw kq(new jq(),hc+a+ic+b)}
function qt(){return dt(new bt(),this)}
function at(){}
_=at.prototype=new sr();_.j=lt;_.i=kt;_.eQ=nt;_.hC=ot;_.s=qt;_.tI=16;function mu(a){a.a=fg(ah,0,0,0,0);a.b=0;return a}
function nu(b,a){ig(b.a,b.b++,a);return true}
function pu(b,a){mt(a,b.b);return b.a[a]}
function qu(c,b,a){for(;a<c.b;++a){if(wv(b,c.a[a])){return a}}return -1}
function su(a){return ig(this.a,this.b++,a),true}
function ru(a,b){if(a<0||a>this.b){pt(a,this.b)}this.a.splice(a,0,b);++this.b}
function tu(a){return qu(this,a,0)!=-1}
function uu(a){return mt(a,this.b),this.a[a]}
function vu(){return this.b}
function lu(){}
_=lu.prototype=new at();_.j=su;_.i=ru;_.k=tu;_.q=uu;_.A=vu;_.tI=17;_.a=null;_.b=0;function sj(a){mu(a);return a}
function uj(c){var a,b;for(b=dt(new bt(),c);b.a<b.b.A();){a=pg(gt(b),5);lp(a.a,bf(a.a.d.h,jc),bf(a.a.c.h,jc))}}
function rj(){}
_=rj.prototype=new lu();_.tI=18;function jl(a){a.h=$doc.createElement(kc);a.h[Bb]=lc;return a}
function ml(a){ri(a)}
function il(){}
_=il.prototype=new wn();_.u=ml;_.tI=19;function ek(a){a.h=$doc.createElement(kc);a.h[Bb]=mc;return a}
function dk(){}
_=dk.prototype=new il();_.tI=20;function nk(){nk=xv;lk(new kk(),nc);pk=lk(new kk(),Db);lk(new kk(),oc);ok=pk}
var ok,pk;function lk(b,a){b.a=a;return b}
function kk(){}
_=kk.prototype=new nq();_.tI=0;_.a=null;function vk(){vk=xv;tk(new sk(),qc);tk(new sk(),rc);wk=tk(new sk(),Eb)}
var wk;function tk(a,b){a.a=b;return a}
function sk(){}
_=sk.prototype=new nq();_.tI=0;_.a=null;function Ak(a){pj(a);nk();vk();a.a=$doc.createElement(sc);a.c.appendChild(a.a);a.d[tc]=uc;a.d[vc]=uc;return a}
function Ck(c){var a,b;b=c.h.parentElement;a=Aj(this,c);if(a){this.a.removeChild(b)}return a}
function zk(){}
_=zk.prototype=new oj();_.y=Ck;_.tI=21;_.a=null;function fl(){fl=xv;ts(new zu())}
function el(a,b){fl();bl(new al(),a,b);a.h[Bb]=wc;return a}
function gl(a){ri(a)}
function Dk(){}
_=Dk.prototype=new wn();_.u=gl;_.tI=22;function Ek(){}
_=Ek.prototype=new nq();_.tI=0;function bl(b,a,c){lo(a,$doc.createElement(xc));xh(a.h,229501|(a.h.__eventBits||0));rf(a.h,c);return b}
function al(){}
_=al.prototype=new Ek();_.tI=0;function ol(b){var a;Ej(b,(a=yc,$doc.createElement(a)));b.h[Bb]=zc;return b}
function ql(a){if(ri(a)==1024){}else{bk(this,a)}}
function nl(){}
_=nl.prototype=new Dj();_.u=ql;_.tI=23;function ul(a,b){mu(new lu());a.b=mu(new lu());xl(a,b,(Al(),new yl()));return a}
function wl(d,a){var b,c;for(c=dt(new bt(),d.b);c.a<c.b.A();){b=Bg(gt(c));if(ve(null.C(),a)){return b}}return null}
function xl(d,f){var b,c,e,a;c=$doc.createElement(fc);d.a=$doc.createElement(gc);c.appendChild(d.a);if(!f){e=$doc.createElement(sc);d.a.appendChild(e)}b=(a=$doc.createElement(Bc),a.tabIndex=0,a);b.appendChild(c);d.h=b;d.h.setAttribute(Cc,Dc);xh(d.h,2225|(d.h.__eventBits||0));d.h[Bb]=Ec;if(f){hn(d,nn(d.h)+Fc+ad)}else{hn(d,nn(d.h)+Fc+bd)}d.h.style[cd]=dd;d.h.setAttribute(ed,gd)}
function Bl(a){var b;wl(this,a.srcElement);switch(ri(a)){case 1:{Do(this.h);break}{break}case 2048:{Bg(pu(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Bg(pu(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{Bg(pu(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:Bg(pu(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:Bg(pu(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{Bg(pu(this.b,0))}}break}}}
function Cl(){jo(this)}
function rl(){}
_=rl.prototype=new wn();_.u=Bl;_.v=Cl;_.tI=24;_.a=null;function Al(){Al=xv;zo()}
function yl(){}
_=yl.prototype=new nq();_.tI=0;function an(b,a){b.h=a;b.h.tabIndex=0;return b}
function cn(a){var b;b=ri(a);if((b&896)!=0){bk(this,a)}else if(b==1024){}else{bk(this,a)}}
function Fm(){}
_=Fm.prototype=new Dj();_.u=cn;_.tI=25;function dn(b){var a;en(b,(a=$doc.createElement(hd),a.type=id,a),jd);return b}
function en(c,a,b){c.h=a;c.h.tabIndex=0;if(b!=null){c.h[Bb]=b}return c}
function Em(){}
_=Em.prototype=new Fm();_.tI=26;function em(b){var a;en(b,(a=$doc.createElement(hd),a.type=kd,a),ld);return b}
function dm(){}
_=dm.prototype=new Em();_.tI=27;function om(){om=xv;sm=Au(new zu());tm=Eu(new Du())}
function nm(b,a){om();b.e=Fn(new xn());b.h=a;io(b);return b}
function pm(){var b,a;om();var c,d;for(d=(b=Ar(new zr(),eu(tm.a).b.a),ut(new tt(),b));ft(d.a.a);){c=pg((a=pg(gt(d.a.a),11),a.o()),7);if(c.f){c.v()}}}
function rm(a){om();var b;b=pg(ys(sm,a),6);if(b){return b}if(sm.d==0){Ch(new im())}b=lm(new km());Es(sm,a,b);Fu(tm,b);return b}
function hm(){}
_=hm.prototype=new Ei();_.tI=28;var sm,tm;function im(){}
_=im.prototype=new nq();_.tI=29;function mm(){mm=xv;om()}
function lm(a){mm();nm(a,$doc.body);return a}
function km(){}
_=km.prototype=new hm();_.tI=30;function Cm(a){an(a,$doc.createElement(md));a.h[Bb]=nd;return a}
function Bm(){}
_=Bm.prototype=new Fm();_.tI=31;function rn(a){pj(a);a.a=(nk(),ok);a.b=(vk(),wk);a.d[tc]=uc;a.d[vc]=uc;return a}
function sn(c,e){var b,d,a;d=$doc.createElement(sc);b=(a=$doc.createElement(od),(a[pd]=c.a.a,undefined),(a.style[rd]=c.b.a,undefined),a);d.appendChild(b);c.c.appendChild(d);ko(e);ao(c.e,e);b.appendChild(e.h);mo(e,c)}
function vn(c){var a,b;b=c.h.parentElement;a=Aj(this,c);if(a){this.c.removeChild(b.parentElement)}return a}
function pn(){}
_=pn.prototype=new oj();_.y=vn;_.tI=32;function Fn(a){a.a=fg(Fg,0,7,4,0);return a}
function ao(a,b){eo(a,b,a.b)}
function co(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function eo(d,e,a){var b,c;if(a<0||a>d.b){throw new jq()}if(d.b==d.a.length){c=fg(Fg,0,7,d.a.length*2,0);for(b=0;b<d.a.length;++b){ig(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){ig(d.a,b,d.a[b-1])}ig(d.a,a,e)}
function fo(c,b){var a;if(b<0||b>=c.b){throw new jq()}--c.b;for(a=b;a<c.b;++a){ig(c.a,a,c.a[a+1])}ig(c.a,c.b,null)}
function go(b,c){var a;a=co(b,c);if(a==-1){throw new qv()}fo(b,a)}
function xn(){}
_=xn.prototype=new nq();_.tI=0;_.a=null;_.b=0;function An(b,a){b.b=a;return b}
function Cn(a){if(a.a>=a.b.b){throw new qv()}return a.b.a[++a.a]}
function Dn(){return this.a<this.b.b-1}
function En(){return Cn(this)}
function yn(){}
_=yn.prototype=new nq();_.r=Dn;_.t=En;_.tI=0;_.a=-1;_.b=null;function vo(){vo=xv;me().indexOf(sd)==0?td:ud}
function wo(){vo();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;rf(a,$moduleBase+vd)}}
function zo(){zo=xv;vo();wo()}
function Do(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function lp(b,c,a){b.a.h.innerText=wd+c+xd+a||ob}
function bp(){}
_=bp.prototype=new Df();_.tI=0;function dp(b,a){b.a=a;return b}
function cp(){}
_=cp.prototype=new nq();_.tI=33;_.a=null;function gp(a){rn(new pn());Ak(new zk());rn(new pn());ol(new nl());Cm(new Bm());ul(new rl(),false);lj(new gj(),yd);jl(new il());a.e=ek(new dk());a.b=rn(new pn());a.d=dn(new Em());a.c=em(new dm());a.a=kj(new gj());el(new Dk(),$moduleBase+zd);tp();a.e.h.innerText=Ad;Fj(a.a,dp(new cp(),a));a.a.h.innerHTML=o;sn(a.b,a.e);sn(a.b,a.d);sn(a.b,a.c);sn(a.b,a.a);Fi((om(),rm(null)),a.b);return a}
function fp(){}
_=fp.prototype=new bp();_.tI=0;function nr(){}
_=nr.prototype=new nq();_.tI=3;function bq(){}
_=bq.prototype=new nr();_.tI=4;function rq(){}
_=rq.prototype=new bq();_.tI=5;function pp(){}
_=pp.prototype=new rq();_.tI=35;function tp(){tp=xv;sp(new rp(),false);sp(new rp(),true)}
function sp(a,b){tp();a.a=b;return a}
function up(a){return a!=null&&og(a.tI,10)&&pg(a,10).a==this.a}
function vp(){return this.a?1231:1237}
function rp(){}
_=rp.prototype=new nq();_.eQ=up;_.hC=vp;_.tI=38;_.a=false;function Bp(c,a){var b;b=new xp();return b}
function xp(){}
_=xp.prototype=new nq();_.tI=0;function yp(){}
_=yp.prototype=new rq();_.tI=39;function dq(){}
_=dq.prototype=new rq();_.tI=40;function gq(){}
_=gq.prototype=new rq();_.tI=41;function kq(b,a){return b}
function jq(){}
_=jq.prototype=new rq();_.tI=42;function Fq(b,a){if(!(a!=null&&og(a.tI,1))){return false}return String(b)==a}
function dr(c,a,b){b=ir(b);return c.replace(RegExp(a),b)}
function er(b,a){return b.substr(a,b.length-a)}
function gr(c){if(c.length==0||c[0]>Cb&&c[c.length-1]>Cb){return c}var a=c.replace(/^(\s*)/,ob);var b=a.replace(/\s*$/,ob);return b}
function ir(b){var a;a=0;while(0<=(a=b.indexOf(p,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+q+er(b,++a)}else{b=b.substr(0,a-0)+er(b,++a)}}return b}
function jr(a){return Fq(this,a)}
function lr(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function mr(){return Bq(this)}
_=String.prototype;_.eQ=jr;_.hC=mr;_.tI=2;function wq(){wq=xv;xq={};Aq={}}
function yq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function Bq(c){wq();var a=r+c;var b=Aq[a];if(b!=null){return b}b=xq[a];if(b==null){b=yq(c)}Cq();return Aq[a]=b}
function Cq(){if(zq==256){xq=Aq;Aq={};zq=0}++zq}
var xq,zq=0,Aq;function pr(){}
_=pr.prototype=new rq();_.tI=43;function eu(b){var a;a=Er(new yr(),b);return zt(new st(),b,a)}
function fu(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&og(c.tI,13))){return false}e=pg(c,13);if(pg(this,13).d!=e.d){return false}for(b=Ar(new zr(),Er(new yr(),e).a);ft(b.a);){a=pg(gt(b.a),11);d=a.o();f=a.p();if(!(d==null?pg(this,13).c:d!=null&&og(d.tI,1)?As(pg(this,13),pg(d,1)):zs(pg(this,13),d,~~he(d)))){return false}if(!wv(f,d==null?pg(this,13).b:d!=null&&og(d.tI,1)?pg(this,13).e[r+pg(d,1)]:ws(pg(this,13),d,~~he(d)))){return false}}return true}
function gu(){var a,b,c;c=0;for(b=Ar(new zr(),Er(new yr(),pg(this,13)).a);ft(b.a);){a=pg(gt(b.a),11);c+=a.hC();c=~~c}return c}
function rt(){}
_=rt.prototype=new nq();_.eQ=fu;_.hC=gu;_.tI=0;function rs(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function ss(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=ps(e,c.substring(1));a.j(b)}}}
function ts(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0}
function vs(b,a){return a==null?b.c:a!=null&&og(a.tI,1)?As(b,pg(a,1)):zs(b,a,~~he(a))}
function ys(b,a){return a==null?b.b:a!=null&&og(a.tI,1)?b.e[r+pg(a,1)]:ws(b,a,~~he(a))}
function ws(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function zs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function As(b,a){return r+a in b.e}
function Es(b,a,c){return a==null?Cs(b,c):a!=null&&og(a.tI,1)?Ds(b,pg(a,1),c):Bs(b,a,c,~~he(a))}
function Bs(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.z(j);return h}}}else{a=i.a[e]=[]}var c=jv(new iv(),g,j);a.push(c);++i.d;return null}
function Cs(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function Ds(d,a,e){var b,c=d.e;a=r+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function Fs(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fe(a,b)}
function xr(){}
_=xr.prototype=new rt();_.n=Fs;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function ju(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&og(b.tI,14))){return false}c=pg(b,14);if(c.A()!=this.A()){return false}for(a=c.s();a.r();){d=a.t();if(!this.k(d)){return false}}return true}
function ku(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=he(c);a=~~a}}return a}
function hu(){}
_=hu.prototype=new sr();_.eQ=ju;_.hC=ku;_.tI=44;function Er(b,a){b.a=a;return b}
function as(d,c){var a,b,e;if(c!=null&&og(c.tI,11)){a=pg(c,11);b=a.o();if(vs(d.a,b)){e=ys(d.a,b);return Cu(a.p(),e)}}return false}
function bs(a){return as(this,a)}
function cs(){return Ar(new zr(),this.a)}
function ds(){return this.a.d}
function yr(){}
_=yr.prototype=new hu();_.k=bs;_.s=cs;_.A=ds;_.tI=45;_.a=null;function Ar(c,b){var a;c.b=b;a=mu(new lu());if(c.b.c){nu(a,fs(new es(),c.b))}ss(c.b,a);rs(c.b,a);c.a=dt(new bt(),a);return c}
function Cr(){return ft(this.a)}
function Dr(){return pg(gt(this.a),11)}
function zr(){}
_=zr.prototype=new nq();_.r=Cr;_.t=Dr;_.tI=0;_.a=null;_.b=null;function bu(b){var a;if(b!=null&&og(b.tI,11)){a=pg(b,11);if(wv(this.o(),a.o())&&wv(this.p(),a.p())){return true}}return false}
function cu(){var a,b;a=0;b=0;if(this.o()!=null){a=he(this.o())}if(this.p()!=null){b=he(this.p())}return a^b}
function Ft(){}
_=Ft.prototype=new nq();_.eQ=bu;_.hC=cu;_.tI=46;function fs(b,a){b.a=a;return b}
function hs(){return null}
function is(){return this.a.b}
function js(a){return Cs(this.a,a)}
function es(){}
_=es.prototype=new Ft();_.o=hs;_.p=is;_.z=js;_.tI=47;_.a=null;function ls(c,a,b){c.b=b;c.a=a;return c}
function ns(){return this.a}
function os(){return this.b.e[r+this.a]}
function ps(b,a){return ls(new ks(),a,b)}
function qs(a){return Ds(this.b,this.a,a)}
function ks(){}
_=ks.prototype=new Ft();_.o=ns;_.p=os;_.z=qs;_.tI=48;_.a=null;_.b=null;function dt(b,a){b.b=a;return b}
function ft(a){return a.a<a.b.A()}
function gt(a){if(a.a>=a.b.A()){throw new qv()}return a.b.q(a.a++)}
function ht(){return this.a<this.b.A()}
function it(){return gt(this)}
function bt(){}
_=bt.prototype=new nq();_.r=ht;_.t=it;_.tI=0;_.a=0;_.b=null;function zt(b,a,c){b.a=a;b.b=c;return b}
function Ct(a){return vs(this.a,a)}
function Dt(){var a;return a=Ar(new zr(),this.b.a),ut(new tt(),a)}
function Et(){return this.b.a.d}
function st(){}
_=st.prototype=new hu();_.k=Ct;_.s=Dt;_.A=Et;_.tI=49;_.a=null;_.b=null;function ut(a,b){a.a=b;return a}
function xt(){return ft(this.a.a)}
function yt(){var a;return a=pg(gt(this.a.a),11),a.o()}
function tt(){}
_=tt.prototype=new nq();_.r=xt;_.t=yt;_.tI=0;_.a=null;function Au(a){ts(a);return a}
function Cu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fe(a,b)}
function zu(){}
_=zu.prototype=new xr();_.tI=50;function Eu(a){a.a=Au(new zu());return a}
function Fu(c,a){var b;b=Es(c.a,a,c);return b==null}
function bv(b){var a;return a=Es(this.a,b,this),a==null}
function cv(a){return vs(this.a,a)}
function dv(){var a;return a=Ar(new zr(),eu(this.a).b.a),ut(new tt(),a)}
function ev(){return this.a.d}
function Du(){}
_=Du.prototype=new hu();_.j=bv;_.k=cv;_.s=dv;_.A=ev;_.tI=51;_.a=null;function jv(b,a,c){b.a=a;b.b=c;return b}
function lv(){return this.a}
function mv(){return this.b}
function ov(b){var a;a=this.b;this.b=b;return a}
function iv(){}
_=iv.prototype=new Ft();_.o=lv;_.p=mv;_.z=ov;_.tI=52;_.a=null;_.b=null;function qv(){}
_=qv.prototype=new rq();_.tI=53;function wv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&fe(a,b)}
function np(){!!$stats&&$stats({moduleName:$moduleName,subSystem:s,evtGroup:t,millis:(new Date()).getTime(),type:u,className:v});gp(new fp())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{np()}catch(a){b(d)}else{np()}}
function xv(){}
var Fg=Bp(w,x),ah=Bp(z,A);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();