(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var qb='',Eb=' ',l='#',q='$',t=', Size: ',ad='-',fb='/',tc='0',ed='0px',yd='100%',Cd='100px',r=':',yc='<SELECT>',m='?',Bb='BackgroundImageCache',Bc='DIV',kb='DOMMouseScroll',s='Index: ',ud='Item four',qd='Item one',wd='Item six',vd='Item that has a long title and is number five',td='Item tree',rd='Item two',C='Object;',o='Status: <b>Online<\/b>',Ad='This is some contense that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',A='Widget;',z='[Lcom.google.gwt.user.client.ui.',B='[Ljava.lang.',p='\\',gc='__gwt_initWindowCloseHandler',wc='align',rc='blur',oc='bottom',cc='button',uc='cellPadding',sc='cellSpacing',mc='center',Cc='change',Db='className',nd='clear.cache.gif',hd='click',x='com.streamspin.client.StreamSpinClient',lb='contextmenu',sd='dblclick',jc='div',ib='error',n='focus',zb='function',Ab='function ',dc='gwt-Button',lc='gwt-HTML',kc='gwt-Label',zc='gwt-ListBox',Fc='gwt-MenuBar',jd='gwt-TextArea',Bd='height',fd='hideFocus',cd='horizontal',md='http://',kd='https',ld='https://',y='keydown',D='keypress',E='keyup',Fb='left',F='load',ab='losecapture',Ec='menubar',pc='middle',v='moduleStartup',bb='mousedown',cb='mousemove',db='mouseout',eb='mouseover',gb='mouseup',jb='mousewheel',w='onModuleLoadStart',wb='onblur',mb='onclick',yb='oncontextmenu',xb='ondblclick',vb='onfocus',sb='onkeydown',tb='onkeypress',ub='onkeyup',nb='onmousedown',pb='onmousemove',ob='onmouseup',rb='onmousewheel',Ac='option',dd='outline',bc='position',nc='right',Dc='role',Cb='script',hb='scroll',od='someTest',u='startup',ec='submit',hc='table',ic='tbody',vc='td',id='textarea',pd='title of Main Window',ac='top',qc='tr',gd='true',fc='type',zd='value',bd='vertical',xc='verticalAlign',xd='width';var _;function dq(a){return this===(a==null?null:a)}
function eq(){return this.$H||(this.$H=++re)}
function bq(){}
_=bq.prototype={};_.eQ=dq;_.hC=eq;_.tM=jv;_.tI=1;function he(b,a){return b.tM==jv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function je(a){return a.tM==jv||a.tI==2?a.hC():a.$H||(a.$H=++re)}
function oe(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(fb);if(a!=-1)b=b.substring(0,a);return b.length>0?b+fb:qb}
var re=0;function xe(b,a){return b===a||b.contains(a)}
function ye(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function mf(){mf=jv;pf()}
function of(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function pf(){try{$doc.execCommand(Bb,false,true)}catch(a){}}
function tf(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function uf(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;of(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function vf(a,c){mf();var b,d;if(tq(a.__pendingSrc||a.src,c)){return}if(!wf){wf={}}b=a.__pendingSrc;if(b!=null){d=wf[b];if(d==a){uf(wf,d)}else{tf(d,a)}}d=wf[c];if(!d){of(wf,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var wf=null;function lg(){}
_=lg.prototype=new bq();_.tI=0;function sg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function tg(a,f,c,b,e){var d;d=sg(e,b);ug(a,f,c,d);return d}
function ug(b,d,c,a){if(!vg){vg=new og()}yg(a,vg);a.tI=d;a.qI=c;return a}
function wg(a,b,c){if(c!=null){if(a.qI>0&&!Bg(c.tI,a.qI)){throw new ip()}if(a.qI<0&&(c.tM==jv||c.tI==2)){throw new ip()}}return a[b]=c}
function yg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function og(){}
_=og.prototype=new bq();_.tI=0;_.length=0;_.qI=0;var vg=null;function Cg(b,a){return b&&!!kh[b][a]}
function Bg(b,a){return b&&kh[b][a]}
function Dg(b,a){if(b!=null&&!Bg(b.tI,a)){throw new mp()}return b}
function jh(a){if(a!=null){throw new mp()}return a}
var kh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Fh(b,a,c){var d;if(a==ci){if(Fi(b)==8192){ci=null}}d=Eh;Eh=b;try{c.t(b)}finally{Eh=d}}
function bi(a){return true}
function fi(a,b){bj();yi(a,b)}
var Eh=null,ci=null;function ki(a){pi();if(!li){li=Ft(new Et())}bu(li,a)}
function mi(){var a;if(li){for(a=xs(new vs(),li);a.a<a.b.b;){Dg(As(a),3);qm()}}}
function ni(){var a,b;b=null;if(li){for(a=xs(new vs(),li);a.a<a.b.b;){Dg(As(a),3);b=null}}return b}
function pi(){if(!oi){oi=true;jj(ij(),gc)}}
var li=null,oi=false;function Fi(a){switch(a.type){case rc:return 4096;case Cc:return 1024;case hd:return 1;case sd:return 2;case n:return 2048;case y:return 128;case D:return 256;case E:return 512;case F:return 32768;case ab:return 8192;case bb:return 4;case cb:return 64;case db:return 32;case eb:return 16;case gb:return 8;case hb:return 16384;case ib:return 65536;case jb:return 131072;case kb:return 131072;case lb:return 262144;}}
function bj(){if(!dj){xi();dj=true}}
var dj=false;function xi(){Bi=function(){var c=zi;zi=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!bi($wnd.event)){zi=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&Cg(b.tI,4)&&!(b!=null&&(b.tM!=jv&&b.tI!=2))){Fh($wnd.event,a,b)}}zi=c};Ai=function(){var a=$doc.createEventObject();this.fireEvent(mb,a);if(this.__eventBits&2){Bi.call(this)}};var e=function(){Bi.call($doc.body)};var d=function(){Ai.call($doc.body)};$doc.body.attachEvent(mb,e);$doc.body.attachEvent(nb,e);$doc.body.attachEvent(ob,e);$doc.body.attachEvent(pb,e);$doc.body.attachEvent(rb,e);$doc.body.attachEvent(sb,e);$doc.body.attachEvent(tb,e);$doc.body.attachEvent(ub,e);$doc.body.attachEvent(vb,e);$doc.body.attachEvent(wb,e);$doc.body.attachEvent(xb,d);$doc.body.attachEvent(yb,e)}
function yi(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Bi:null;if(b&3)c.ondblclick=a&3?Ai:null;if(b&4)c.onmousedown=a&4?Bi:null;if(b&8)c.onmouseup=a&8?Bi:null;if(b&16)c.onmouseover=a&16?Bi:null;if(b&32)c.onmouseout=a&32?Bi:null;if(b&64)c.onmousemove=a&64?Bi:null;if(b&128)c.onkeydown=a&128?Bi:null;if(b&256)c.onkeypress=a&256?Bi:null;if(b&512)c.onkeyup=a&512?Bi:null;if(b&1024)c.onchange=a&1024?Bi:null;if(b&2048)c.onfocus=a&2048?Bi:null;if(b&4096)c.onblur=a&4096?Bi:null;if(b&8192)c.onlosecapture=a&8192?Bi:null;if(b&16384)c.onscroll=a&16384?Bi:null;if(b&32768)c.onload=a&32768?Bi:null;if(b&65536)c.onerror=a&65536?Bi:null;if(b&131072)c.onmousewheel=a&131072?Bi:null;if(b&262144)c.oncontextmenu=a&262144?Bi:null}
var zi=null,Ai=null,Bi=null;function ij(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function jj(c,b){var d,a;c=xq(c,zb,Ab+b);d=(a=$doc.createElement(Cb),a.text=c,a);$doc.body.appendChild(d);kj();$doc.body.removeChild(d)}
function kj(){$wnd.__gwt_initWindowCloseHandler(function(){return ni()},function(){mi()})}
function en(b,a){ln(b.i,a,true)}
function kn(a){var b,c;b=a[Db]==null?null:String(a[Db]);c=b.indexOf(Fq(32));if(c>=0){return b.substr(0,c-0)}return b}
function ln(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new fq()}j=Aq(j);if(j.length==0){throw new xp()}i=c[Db]==null?null:String(c[Db]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=Eb}c[Db]=i+j}}else{if(e!=-1){b=Aq(i.substr(0,e-0));d=Aq(yq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+Eb+d}c[Db]=h}}}
function dn(){}
_=dn.prototype=new bq();_.tI=7;_.i=null;function fo(a){if(a.g){throw new Ap()}a.g=true;a.i.__listener=a;a.l();a.v()}
function go(a){if(!a.g){throw new Ap()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function ho(a){if(a.h){a.h.x(a)}else if(a.h){throw new Ap()}}
function io(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new Ap()}c.h=b;if(b.g){fo(c)}}}
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
_=Fj.prototype=new bm();_.r=ek;_.x=fk;_.tI=10;function nj(a,b){bk(a,b,a.i)}
function pj(b,c){var a;a=dk(b,c);if(a){qj(c.i)}return a}
function qj(a){a.style[Fb]=qb;a.style[ac]=qb;a.style[bc]=qb}
function rj(a){return pj(this,a)}
function mj(){}
_=mj.prototype=new Fj();_.x=rj;_.tI=11;function hk(b,a){b.i=a;b.i.tabIndex=0;return b}
function jk(a){Fi(a)}
function gk(){}
_=gk.prototype=new tn();_.t=jk;_.tI=12;function wj(b,a){b.i=a;b.i.tabIndex=0;return b}
function vj(){}
_=vj.prototype=new gk();_.tI=13;function zj(b,a){wj(b,$doc.createElement(cc));Bj(b.i);b.i[Db]=dc;b.i.innerHTML=a||qb;return b}
function Bj(b){if(b.type==ec){try{b.setAttribute(fc,cc)}catch(a){}}}
function uj(){}
_=uj.prototype=new vj();_.tI=14;function Dj(a){a.f=Cn(new un());a.e=$doc.createElement(hc);a.d=$doc.createElement(ic);a.e.appendChild(a.d);a.i=a.e;return a}
function Cj(){}
_=Cj.prototype=new Fj();_.tI=15;_.d=null;_.e=null;function kl(a){a.i=$doc.createElement(jc);a.i[Db]=kc;return a}
function nl(a){Fi(a)}
function jl(){}
_=jl.prototype=new tn();_.t=nl;_.tI=16;function lk(a){a.i=$doc.createElement(jc);a.i[Db]=lc;return a}
function kk(){}
_=kk.prototype=new jl();_.tI=17;function uk(){uk=jv;sk(new rk(),mc);wk=sk(new rk(),Fb);sk(new rk(),nc);vk=wk}
var vk,wk;function sk(b,a){b.a=a;return b}
function rk(){}
_=rk.prototype=new bq();_.tI=0;_.a=null;function Ck(){Ck=jv;Ak(new zk(),oc);Ak(new zk(),pc);Dk=Ak(new zk(),ac)}
var Dk;function Ak(a,b){a.a=b;return a}
function zk(){}
_=zk.prototype=new bq();_.tI=0;_.a=null;function cl(a){Dj(a);a.a=(uk(),vk);a.c=(Ck(),Dk);a.b=$doc.createElement(qc);a.d.appendChild(a.b);a.e[sc]=tc;a.e[uc]=tc;return a}
function dl(c,d){var b,a;b=(a=$doc.createElement(vc),(a[wc]=c.a.a,undefined),(a.style[xc]=c.c.a,undefined),a);c.b.appendChild(b);ho(d);Dn(c.f,d);b.appendChild(d.i);io(d,c)}
function gl(c){var a,b;b=c.i.parentElement;a=dk(this,c);if(a){this.b.removeChild(b)}return a}
function al(){}
_=al.prototype=new Cj();_.x=gl;_.tI=18;_.b=null;function pl(b){var a;hk(b,(a=yc,$doc.createElement(a)));b.i[Db]=zc;return b}
function sl(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement(Ac);d.text=c;d.value=g;if(b==-1||b==e.options.length){ye(e,d,null)}else{a=e.options[b];ye(e,d,a)}}
function ul(a){if(Fi(a)==1024){}else{Fi(a)}}
function ol(){}
_=ol.prototype=new gk();_.t=ul;_.tI=19;function yl(a){Ft(new Et());a.b=Ft(new Et());Bl(a,false,(El(),new Cl()));return a}
function Al(d,a){var b,c;for(c=xs(new vs(),d.b);c.a<c.b.b;){b=jh(As(c));if(xe(null.B(),a)){return b}}return null}
function Bl(d,f){var b,c,e,a;c=$doc.createElement(hc);d.a=$doc.createElement(ic);c.appendChild(d.a);if(!f){e=$doc.createElement(qc);d.a.appendChild(e)}b=(a=$doc.createElement(Bc),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(Dc,Ec);fi(d.i,2225|(d.i.__eventBits||0));d.i[Db]=Fc;if(f){en(d,kn(d.i)+ad+bd)}else{en(d,kn(d.i)+ad+cd)}d.i.style[dd]=ed;d.i.setAttribute(fd,gd)}
function Fl(a){var b;Al(this,a.srcElement);switch(Fi(a)){case 1:{zo(this.i);break}{break}case 2048:{jh(du(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{jh(du(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{jh(du(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:jh(du(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:jh(du(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{jh(du(this.b,0))}}break}}}
function am(){go(this)}
function vl(){}
_=vl.prototype=new tn();_.t=Fl;_.u=am;_.tI=20;_.a=null;function El(){El=jv;vo()}
function Cl(){}
_=Cl.prototype=new bq();_.tI=0;function pm(){pm=jv;tm=mu(new lu());um=qu(new pu())}
function om(b,a){pm();b.f=Cn(new un());b.i=a;fo(b);return b}
function qm(){var b,a;pm();var c,d;for(d=(b=or(new nr(),xt(um.a).b.a),ht(new gt(),b));zs(d.a.a);){c=Dg((a=Dg(As(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function sm(a){pm();var b;b=Dg(ms(tm,a),5);if(b){return b}if(tm.d==0){ki(new jm())}b=mm(new lm());ss(tm,a,b);ru(um,b);return b}
function im(){}
_=im.prototype=new mj();_.tI=21;var tm,um;function jm(){}
_=jm.prototype=new bq();_.tI=22;function nm(){nm=jv;pm()}
function mm(a){nm();om(a,$doc.body);return a}
function lm(){}
_=lm.prototype=new im();_.tI=23;function Fm(b,a){b.i=a;b.i.tabIndex=0;return b}
function cn(a){var b;b=Fi(a);if((b&896)!=0){Fi(a)}else if(b==1024){}else{Fi(a)}}
function Em(){}
_=Em.prototype=new gk();_.t=cn;_.tI=24;function Cm(a){Fm(a,$doc.createElement(id));a.i[Db]=jd;return a}
function Bm(){}
_=Bm.prototype=new Em();_.tI=25;function on(a){Dj(a);a.a=(uk(),vk);a.b=(Ck(),Dk);a.e[sc]=tc;a.e[uc]=tc;return a}
function pn(c,e){var b,d,a;d=$doc.createElement(qc);b=(a=$doc.createElement(vc),(a[wc]=c.a.a,undefined),(a.style[xc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);ho(e);Dn(c.f,e);b.appendChild(e.i);io(e,c)}
function sn(c){var a,b;b=c.i.parentElement;a=dk(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function mn(){}
_=mn.prototype=new Cj();_.x=sn;_.tI=26;function Cn(a){a.a=tg(nh,0,6,4,0);return a}
function Dn(a,b){ao(a,b,a.b)}
function Fn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function ao(d,e,a){var b,c;if(a<0||a>d.b){throw new Dp()}if(d.b==d.a.length){c=tg(nh,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){wg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){wg(d.a,b,d.a[b-1])}wg(d.a,a,e)}
function bo(c,b){var a;if(b<0||b>=c.b){throw new Dp()}--c.b;for(a=b;a<c.b;++a){wg(c.a,a,c.a[a+1])}wg(c.a,c.b,null)}
function co(b,c){var a;a=Fn(b,c);if(a==-1){throw new cv()}bo(b,a)}
function un(){}
_=un.prototype=new bq();_.tI=0;_.a=null;_.b=0;function xn(b,a){b.b=a;return b}
function zn(a){if(a.a>=a.b.b){throw new cv()}return a.b.a[++a.a]}
function An(){return this.a<this.b.b-1}
function Bn(){return zn(this)}
function vn(){}
_=vn.prototype=new bq();_.q=An;_.s=Bn;_.tI=0;_.a=-1;_.b=null;function ro(){ro=jv;oe().indexOf(kd)==0?ld:md}
function so(){ro();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;vf(a,$moduleBase+nd)}}
function vo(){vo=jv;ro();so()}
function zo(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function Do(){}
_=Do.prototype=new lg();_.tI=0;function Fo(a){a.d=on(new mn());a.c=cl(new al());a.h=on(new mn());a.g=pl(new ol());a.a=Cm(new Bm());a.e=yl(new vl());a.b=zj(new uj(),od);a.f=kl(new jl());a.i=lk(new kk());a.i.i.innerText=pd;sl(a.g,qd,qd,-1);sl(a.g,rd,rd,-1);sl(a.g,td,td,-1);sl(a.g,ud,ud,-1);sl(a.g,vd,vd,-1);sl(a.g,wd,wd,-1);a.g.i.size=3;a.g.i.style[xd]=yd;a.a.i[zd]=Ad!=null?Ad:qb;a.a.i.style[xd]=yd;pn(a.h,a.g);pn(a.h,a.a);a.h.i.style[Bd]=Cd;a.h.i.style[xd]=yd;a.f.i.innerHTML=o;dl(a.c,a.b);dl(a.c,a.e);pn(a.d,a.i);pn(a.d,a.h);pn(a.d,a.b);pn(a.d,a.f);a.d.i.style[Bd]=yd;a.d.i.style[xd]=yd;nj((pm(),sm(null)),a.d);return a}
function Eo(){}
_=Eo.prototype=new Do();_.tI=0;function br(){}
_=br.prototype=new bq();_.tI=3;function vp(){}
_=vp.prototype=new br();_.tI=4;function fq(){}
_=fq.prototype=new vp();_.tI=5;function ip(){}
_=ip.prototype=new fq();_.tI=28;function pp(c,a){var b;b=new lp();return b}
function lp(){}
_=lp.prototype=new bq();_.tI=0;function mp(){}
_=mp.prototype=new fq();_.tI=31;function xp(){}
_=xp.prototype=new fq();_.tI=32;function Ap(){}
_=Ap.prototype=new fq();_.tI=33;function Ep(b,a){return b}
function Dp(){}
_=Dp.prototype=new fq();_.tI=34;function tq(b,a){if(!(a!=null&&Cg(a.tI,1))){return false}return String(b)==a}
function xq(c,a,b){b=Cq(b);return c.replace(RegExp(a),b)}
function yq(b,a){return b.substr(a,b.length-a)}
function Aq(c){if(c.length==0||c[0]>Eb&&c[c.length-1]>Eb){return c}var a=c.replace(/^(\s*)/,qb);var b=a.replace(/\s*$/,qb);return b}
function Cq(b){var a;a=0;while(0<=(a=b.indexOf(p,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+q+yq(b,++a)}else{b=b.substr(0,a-0)+yq(b,++a)}}return b}
function Dq(a){return tq(this,a)}
function Fq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function ar(){return pq(this)}
_=String.prototype;_.eQ=Dq;_.hC=ar;_.tI=2;function kq(){kq=jv;lq={};oq={}}
function mq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function pq(c){kq();var a=r+c;var b=oq[a];if(b!=null){return b}b=lq[a];if(b==null){b=mq(c)}qq();return oq[a]=b}
function qq(){if(nq==256){lq=oq;oq={};nq=0}++nq}
var lq,nq=0,oq;function dr(){}
_=dr.prototype=new fq();_.tI=35;function hr(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:he(b,c)){return a}}return null}
function jr(a){throw new dr()}
function kr(b){var a;a=hr(this.r(),b);return !!a}
function gr(){}
_=gr.prototype=new bq();_.j=jr;_.k=kr;_.tI=0;function xt(b){var a;a=sr(new mr(),b);return mt(new ft(),b,a)}
function yt(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Cg(c.tI,11))){return false}e=Dg(c,11);if(Dg(this,11).d!=e.d){return false}for(b=or(new nr(),sr(new mr(),e).a);zs(b.a);){a=Dg(As(b.a),9);d=a.o();f=a.p();if(!(d==null?Dg(this,11).c:d!=null&&Cg(d.tI,1)?os(Dg(this,11),Dg(d,1)):ns(Dg(this,11),d,~~je(d)))){return false}if(!iv(f,d==null?Dg(this,11).b:d!=null&&Cg(d.tI,1)?Dg(this,11).e[r+Dg(d,1)]:ks(Dg(this,11),d,~~je(d)))){return false}}return true}
function zt(){var a,b,c;c=0;for(b=or(new nr(),sr(new mr(),Dg(this,11)).a);zs(b.a);){a=Dg(As(b.a),9);c+=a.hC();c=~~c}return c}
function et(){}
_=et.prototype=new bq();_.eQ=yt;_.hC=zt;_.tI=0;function fs(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function gs(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=ds(e,c.substring(1));a.j(b)}}}
function js(b,a){return a==null?b.c:a!=null&&Cg(a.tI,1)?os(b,Dg(a,1)):ns(b,a,~~je(a))}
function ms(b,a){return a==null?b.b:a!=null&&Cg(a.tI,1)?b.e[r+Dg(a,1)]:ks(b,a,~~je(a))}
function ks(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function ns(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function os(b,a){return r+a in b.e}
function ss(b,a,c){return a==null?qs(b,c):a!=null&&Cg(a.tI,1)?rs(b,Dg(a,1),c):ps(b,a,c,~~je(a))}
function ps(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=Bu(new Au(),g,j);a.push(c);++i.d;return null}
function qs(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function rs(d,a,e){var b,c=d.e;a=r+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ts(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&he(a,b)}
function lr(){}
_=lr.prototype=new et();_.n=ts;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function Ct(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Cg(b.tI,12))){return false}c=Dg(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function Dt(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=je(c);a=~~a}}return a}
function At(){}
_=At.prototype=new gr();_.eQ=Ct;_.hC=Dt;_.tI=36;function sr(b,a){b.a=a;return b}
function ur(d,c){var a,b,e;if(c!=null&&Cg(c.tI,9)){a=Dg(c,9);b=a.o();if(js(d.a,b)){e=ms(d.a,b);return ou(a.p(),e)}}return false}
function vr(a){return ur(this,a)}
function wr(){return or(new nr(),this.a)}
function xr(){return this.a.d}
function mr(){}
_=mr.prototype=new At();_.k=vr;_.r=wr;_.z=xr;_.tI=37;_.a=null;function or(c,b){var a;c.b=b;a=Ft(new Et());if(c.b.c){bu(a,zr(new yr(),c.b))}gs(c.b,a);fs(c.b,a);c.a=xs(new vs(),a);return c}
function qr(){return zs(this.a)}
function rr(){return Dg(As(this.a),9)}
function nr(){}
_=nr.prototype=new bq();_.q=qr;_.s=rr;_.tI=0;_.a=null;_.b=null;function ut(b){var a;if(b!=null&&Cg(b.tI,9)){a=Dg(b,9);if(iv(this.o(),a.o())&&iv(this.p(),a.p())){return true}}return false}
function vt(){var a,b;a=0;b=0;if(this.o()!=null){a=je(this.o())}if(this.p()!=null){b=je(this.p())}return a^b}
function st(){}
_=st.prototype=new bq();_.eQ=ut;_.hC=vt;_.tI=38;function zr(b,a){b.a=a;return b}
function Br(){return null}
function Cr(){return this.a.b}
function Dr(a){return qs(this.a,a)}
function yr(){}
_=yr.prototype=new st();_.o=Br;_.p=Cr;_.y=Dr;_.tI=39;_.a=null;function Fr(c,a,b){c.b=b;c.a=a;return c}
function bs(){return this.a}
function cs(){return this.b.e[r+this.a]}
function ds(b,a){return Fr(new Er(),a,b)}
function es(a){return rs(this.b,this.a,a)}
function Er(){}
_=Er.prototype=new st();_.o=bs;_.p=cs;_.y=es;_.tI=40;_.a=null;_.b=null;function Es(a){au(this,this.z(),a);return true}
function Fs(a,b){if(a<0||a>=b){ct(a,b)}}
function at(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Cg(e.tI,10))){return false}f=Dg(e,10);if(this.z()!=f.b){return false}c=xs(new vs(),this);d=xs(new vs(),f);while(c.a<c.b.b){a=As(c);b=As(d);if(!(a==null?b==null:he(a,b))){return false}}return true}
function bt(){var a,b,c;b=1;a=xs(new vs(),this);while(a.a<a.b.b){c=As(a);b=31*b+(c==null?0:je(c));b=~~b}return b}
function ct(a,b){throw Ep(new Dp(),s+a+t+b)}
function dt(){return xs(new vs(),this)}
function us(){}
_=us.prototype=new gr();_.j=Es;_.eQ=at;_.hC=bt;_.r=dt;_.tI=0;function xs(b,a){b.b=a;return b}
function zs(a){return a.a<a.b.b}
function As(a){if(a.a>=a.b.b){throw new cv()}return du(a.b,a.a++)}
function Bs(){return this.a<this.b.b}
function Cs(){return As(this)}
function vs(){}
_=vs.prototype=new bq();_.q=Bs;_.s=Cs;_.tI=0;_.a=0;_.b=null;function mt(b,a,c){b.a=a;b.b=c;return b}
function pt(a){return js(this.a,a)}
function qt(){var a;return a=or(new nr(),this.b.a),ht(new gt(),a)}
function rt(){return this.b.a.d}
function ft(){}
_=ft.prototype=new At();_.k=pt;_.r=qt;_.z=rt;_.tI=41;_.a=null;_.b=null;function ht(a,b){a.a=b;return a}
function kt(){return zs(this.a.a)}
function lt(){var a;return a=Dg(As(this.a.a),9),a.o()}
function gt(){}
_=gt.prototype=new bq();_.q=kt;_.s=lt;_.tI=0;_.a=null;function Ft(a){a.a=tg(oh,0,0,0,0);a.b=0;return a}
function bu(b,a){wg(b.a,b.b++,a);return true}
function au(c,a,b){if(a<0||a>c.b){ct(a,c.b)}c.a.splice(a,0,b);++c.b}
function du(b,a){Fs(a,b.b);return b.a[a]}
function eu(c,b,a){for(;a<c.b;++a){if(iv(b,c.a[a])){return a}}return -1}
function fu(a){return wg(this.a,this.b++,a),true}
function gu(a){return eu(this,a,0)!=-1}
function hu(){return this.b}
function Et(){}
_=Et.prototype=new us();_.j=fu;_.k=gu;_.z=hu;_.tI=42;_.a=null;_.b=0;function mu(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function ou(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&he(a,b)}
function lu(){}
_=lu.prototype=new lr();_.tI=43;function qu(a){a.a=mu(new lu());return a}
function ru(c,a){var b;b=ss(c.a,a,c);return b==null}
function tu(b){var a;return a=ss(this.a,b,this),a==null}
function uu(a){return js(this.a,a)}
function vu(){var a;return a=or(new nr(),xt(this.a).b.a),ht(new gt(),a)}
function wu(){return this.a.d}
function pu(){}
_=pu.prototype=new At();_.j=tu;_.k=uu;_.r=vu;_.z=wu;_.tI=44;_.a=null;function Bu(b,a,c){b.a=a;b.b=c;return b}
function Du(){return this.a}
function Eu(){return this.b}
function av(b){var a;a=this.b;this.b=b;return a}
function Au(){}
_=Au.prototype=new st();_.o=Du;_.p=Eu;_.y=av;_.tI=45;_.a=null;_.b=null;function cv(){}
_=cv.prototype=new fq();_.tI=46;function iv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&he(a,b)}
function gp(){!!$stats&&$stats({moduleName:$moduleName,subSystem:u,evtGroup:v,millis:(new Date()).getTime(),type:w,className:x});Fo(new Eo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{gp()}catch(a){b(d)}else{gp()}}
function jv(){}
var nh=pp(z,A),oh=pp(B,C);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();