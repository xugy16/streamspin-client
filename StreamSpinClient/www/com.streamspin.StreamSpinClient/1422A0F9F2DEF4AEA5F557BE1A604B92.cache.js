(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var C='',A=' ',uc=', Size: ',Cb='-',qb='0',ac='0px',kc='100%',pc='100px',sc=':',rc='<b>Awsome Online Status<\/b>',xb='DIV',w='DOMMouseScroll',tc='Index: ',hc='Item one',ic='Item two',Dc='Object;',mc='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',Bc='Widget;',Ac='[Lcom.google.gwt.user.client.ui.',Cc='[Ljava.lang.',tb='align',m='blur',lb='bottom',F='button',rb='cellPadding',pb='cellSpacing',jb='center',x='change',z='className',cb='click',yc='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',gb='div',u='error',yb='focus',ab='gwt-Button',ib='gwt-HTML',hb='gwt-Label',vb='gwt-ListBox',Bb='gwt-MenuBar',fc='gwt-TextArea',nc='height',bc='hideFocus',Eb='horizontal',dc='keydown',oc='keypress',zc='keyup',B='left',Ec='load',n='losecapture',Ab='menubar',mb='middle',wc='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',xc='onModuleLoadStart',wb='option',Fb='outline',E='position',kb='right',zb='role',t='scroll',l='select',vc='startup',qc='status Online',bb='submit',eb='table',fb='tbody',sb='td',ec='textarea',gc='title of Main Window',D='top',ob='tr',cc='true',db='type',lc='value',Db='vertical',ub='verticalAlign',jc='width';var _;function lo(a){return this===(a==null?null:a)}
function mo(){return this.$H||(this.$H=++pd)}
function jo(){}
_=jo.prototype={};_.eQ=lo;_.hC=mo;_.tM=pt;_.tI=1;function gd(b,a){return b.tM==pt||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function id(a){return a.tM==pt||a.tI==2?a.hC():a.$H||(a.$H=++pd)}
var pd=0;function xd(){xd=pt;td();new rd()}
function zd(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function Ad(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function Ed(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function qd(){}
_=qd.prototype=new jo();_.tI=0;function vd(){vd=pt;xd()}
function ud(){}
_=ud.prototype=new qd();_.tI=0;function td(){td=pt;vd()}
function rd(){}
_=rd.prototype=new ud();_.tI=0;function De(){}
_=De.prototype=new jo();_.tI=0;function ef(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ff(a,f,c,b,e){var d;d=ef(e,b);gf(a,f,c,d);return d}
function gf(b,d,c,a){if(!hf){hf=new af()}lf(a,hf);a.tI=d;a.qI=c;return a}
function jf(a,b,c){if(c!=null){if(a.qI>0&&!of(c.tI,a.qI)){throw new pn()}if(a.qI<0&&(c.tM==pt||c.tI==2)){throw new pn()}}return a[b]=c}
function lf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function af(){}
_=af.prototype=new jo();_.tI=0;_.length=0;_.qI=0;var hf=null;function pf(b,a){return b&&!!Df[b][a]}
function of(b,a){return b&&Df[b][a]}
function qf(b,a){if(b!=null&&!of(b.tI,a)){throw new tn()}return b}
function Cf(a){if(a!=null){throw new tn()}return a}
var Df=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function sg(b,a,c){var d;if(a==xg){if(wh(b)==8192){xg=null}}d=rg;rg=b;try{c.t(b)}finally{rg=d}}
function zg(a,b){yh();a.__eventBits=b;a.onclick=b&1?sh:null;a.ondblclick=b&2?sh:null;a.onmousedown=b&4?sh:null;a.onmouseup=b&8?sh:null;a.onmouseover=b&16?sh:null;a.onmouseout=b&32?sh:null;a.onmousemove=b&64?sh:null;a.onkeydown=b&128?sh:null;a.onkeypress=b&256?sh:null;a.onkeyup=b&512?sh:null;a.onchange=b&1024?sh:null;a.onfocus=b&2048?sh:null;a.onblur=b&4096?sh:null;a.onlosecapture=b&8192?sh:null;a.onscroll=b&16384?sh:null;a.onload=b&32768?sh:null;a.onerror=b&65536?sh:null;a.onmousewheel=b&131072?sh:null;a.oncontextmenu=b&262144?sh:null}
var rg=null,xg=null;function Eg(a){dh();if(!Fg){Fg=fs(new es())}hs(Fg,a)}
function ah(){var a;if(Fg){for(a=Dq(new Bq(),Fg);a.a<a.b.b;){qf(ar(a),3);al()}}}
function bh(){var a,b;b=null;if(Fg){for(a=Dq(new Bq(),Fg);a.a<a.b.b;){qf(ar(a),3);b=null}}return b}
function dh(){if(!ch){ch=true;Eh()}}
var Fg=null,ch=false;function wh(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case Ec:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function yh(){if(!Ah){oh();Ah=true}}
function Bh(a){return a!=null&&pf(a.tI,4)&&!(a!=null&&(a.tM!=pt&&a.tI!=2))}
var Ah=false;function oh(){rh=function(b){if(qh(b)){var a=ph;if(a&&a.__listener){if(Bh(a.__listener)){sg(b,a,a.__listener);b.stopPropagation()}}}};qh=function(a){return true};sh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(Bh(c)){sg(b,a,c)}}};$wnd.addEventListener(cb,rh,true);$wnd.addEventListener(nb,rh,true);$wnd.addEventListener(o,rh,true);$wnd.addEventListener(s,rh,true);$wnd.addEventListener(p,rh,true);$wnd.addEventListener(r,rh,true);$wnd.addEventListener(q,rh,true);$wnd.addEventListener(v,rh,true);$wnd.addEventListener(dc,qh,true);$wnd.addEventListener(zc,qh,true);$wnd.addEventListener(oc,qh,true)}
var ph=null,qh=null,rh=null,sh=null;function Eh(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=bh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{ah()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function ul(b,a){Al(b.i,a,true)}
function zl(a){var b,c;b=a[z]==null?null:String(a[z]);c=b.indexOf(fp(32));if(c>=0){return b.substr(0,c-0)}return b}
function Al(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new no()}j=bp(j);if(j.length==0){throw new En()}i=c[z]==null?null:String(c[z]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=A}c[z]=i+j}}else{if(e!=-1){b=bp(i.substr(0,e-0));d=bp(Fo(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+A+d}c[z]=h}}}
function tl(){}
_=tl.prototype=new jo();_.tI=7;_.i=null;function tm(a){if(a.g){throw new bo()}a.g=true;a.i.__listener=a;a.l();a.v()}
function um(a){if(!a.g){throw new bo()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function vm(a){if(a.h){a.h.x(a)}else if(a.h){throw new bo()}}
function wm(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new bo()}c.h=b;if(b.g){tm(c)}}}
function xm(){}
function ym(){}
function zm(a){}
function Am(){um(this)}
function Bm(){}
function Cm(){}
function cm(){}
_=cm.prototype=new tl();_.l=xm;_.m=ym;_.t=zm;_.u=Am;_.v=Bm;_.w=Cm;_.tI=8;_.g=false;_.h=null;function tk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=im(b);tm(a)}}
function uk(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=im(b);a.u()}}
function vk(){}
function wk(){}
function rk(){}
_=rk.prototype=new cm();_.l=tk;_.m=uk;_.v=vk;_.w=wk;_.tI=9;function ri(c,a,b){vm(a);mm(c.f,a);b.appendChild(a.i);wm(a,c)}
function ti(b,c){var a;if(c.h!=b){return false}wm(c,null);a=c.i;Ad((xd(),a)).removeChild(a);rm(b.f,c);return true}
function ui(){return gm(new em(),this.f)}
function vi(a){return ti(this,a)}
function pi(){}
_=pi.prototype=new rk();_.r=ui;_.x=vi;_.tI=10;function ai(a,b){ri(a,b,a.i)}
function ci(b,c){var a;a=ti(b,c);if(a){di(c.i)}return a}
function di(a){a.style[B]=C;a.style[D]=C;a.style[E]=C}
function ei(a){return ci(this,a)}
function Fh(){}
_=Fh.prototype=new pi();_.x=ei;_.tI=11;function xi(b,a){b.i=a;b.i.tabIndex=0;return b}
function zi(a){wh(a)}
function wi(){}
_=wi.prototype=new cm();_.t=zi;_.tI=12;function hi(b,a){b.i=a;b.i.tabIndex=0;return b}
function gi(){}
_=gi.prototype=new wi();_.tI=13;function ji(a){hi(a,$doc.createElement((xd(),F)));li(a.i);a.i[z]=ab;return a}
function li(b){if(b.type==bb){try{b.setAttribute(db,F)}catch(a){}}}
function fi(){}
_=fi.prototype=new gi();_.tI=14;function ni(a){a.f=lm(new dm());a.e=$doc.createElement((xd(),eb));a.d=$doc.createElement(fb);a.e.appendChild(a.d);a.i=a.e;return a}
function mi(){}
_=mi.prototype=new pi();_.tI=15;_.d=null;_.e=null;function Aj(a){a.i=$doc.createElement((xd(),gb));a.i[z]=hb;return a}
function Dj(a){wh(a)}
function zj(){}
_=zj.prototype=new cm();_.t=Dj;_.tI=16;function Bi(a){a.i=$doc.createElement((xd(),gb));a.i[z]=ib;return a}
function Ai(){}
_=Ai.prototype=new zj();_.tI=17;function ej(){ej=pt;cj(new bj(),jb);gj=cj(new bj(),B);cj(new bj(),kb);fj=gj}
var fj,gj;function cj(b,a){b.a=a;return b}
function bj(){}
_=bj.prototype=new jo();_.tI=0;_.a=null;function mj(){mj=pt;kj(new jj(),lb);kj(new jj(),mb);nj=kj(new jj(),D)}
var nj;function kj(a,b){a.a=b;return a}
function jj(){}
_=jj.prototype=new jo();_.tI=0;_.a=null;function sj(a){ni(a);a.a=(ej(),fj);a.c=(mj(),nj);a.b=$doc.createElement((xd(),ob));a.d.appendChild(a.b);a.e[pb]=qb;a.e[rb]=qb;return a}
function tj(c,d){var b,a;b=(a=$doc.createElement((xd(),sb)),(a[tb]=c.a.a,undefined),(a.style[ub]=c.c.a,undefined),a);c.b.appendChild(b);vm(d);mm(c.f,d);b.appendChild(d.i);wm(d,c)}
function wj(c){var a,b;b=Ad((xd(),c.i));a=ti(this,c);if(a){this.b.removeChild(b)}return a}
function qj(){}
_=qj.prototype=new mi();_.x=wj;_.tI=18;_.b=null;function Fj(a){xi(a,zd((xd(),false)));a.i[z]=vb;return a}
function ck(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((xd(),wb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function ek(a){if(wh(a)==1024){}else{wh(a)}}
function Ej(){}
_=Ej.prototype=new wi();_.t=ek;_.tI=19;function ik(a){fs(new es());a.b=fs(new es());lk(a,false,(ok(),new mk()));return a}
function kk(d,a){var b,c;for(c=Dq(new Bq(),d.b);c.a<c.b.b;){b=Cf(ar(c));if((xd(),null.B()).contains(a)){return b}}return null}
function lk(d,f){var b,c,e,a;c=$doc.createElement((xd(),eb));d.a=$doc.createElement(fb);c.appendChild(d.a);if(!f){e=$doc.createElement(ob);d.a.appendChild(e)}b=(a=$doc.createElement(xb),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(zb,Ab);zg(d.i,2225|(d.i.__eventBits||0));d.i[z]=Bb;if(f){ul(d,zl(d.i)+Cb+Db)}else{ul(d,zl(d.i)+Cb+Eb)}d.i.style[Fb]=ac;d.i.setAttribute(bc,cc)}
function pk(a){var b;kk(this,a.target);switch(wh(a)){case 1:{this.i.focus();break}{break}case 2048:{Cf(js(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{Cf(js(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{Cf(js(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:Cf(js(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:Cf(js(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{Cf(js(this.b,0))}}break}}}
function qk(){um(this)}
function fk(){}
_=fk.prototype=new cm();_.t=pk;_.u=qk;_.tI=20;_.a=null;function ok(){ok=pt}
function mk(){}
_=mk.prototype=new jo();_.tI=0;function Fk(){Fk=pt;dl=ss(new rs());el=ws(new vs())}
function Ek(b,a){Fk();b.f=lm(new dm());b.i=a;tm(b);return b}
function al(){var b,a;Fk();var c,d;for(d=(b=up(new tp(),Dr(el.a).b.a),nr(new mr(),b));Fq(d.a.a);){c=qf((a=qf(ar(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function cl(a){Fk();var b;b=qf(sq(dl,a),5);if(b){return b}if(dl.d==0){Eg(new zk())}b=Ck(new Bk());yq(dl,a,b);xs(el,b);return b}
function yk(){}
_=yk.prototype=new Fh();_.tI=21;var dl,el;function zk(){}
_=zk.prototype=new jo();_.tI=22;function Dk(){Dk=pt;Fk()}
function Ck(a){Dk();Ek(a,$doc.body);return a}
function Bk(){}
_=Bk.prototype=new yk();_.tI=23;function pl(b,a){b.i=a;b.i.tabIndex=0;return b}
function sl(a){var b;b=wh(a);if((b&896)!=0){wh(a)}else if(b==1024){}else{wh(a)}}
function ol(){}
_=ol.prototype=new wi();_.t=sl;_.tI=24;function ml(a){pl(a,$doc.createElement((xd(),ec)));a.i[z]=fc;return a}
function ll(){}
_=ll.prototype=new ol();_.tI=25;function Dl(a){ni(a);a.a=(ej(),fj);a.b=(mj(),nj);a.e[pb]=qb;a.e[rb]=qb;return a}
function El(c,e){var b,d,a;d=$doc.createElement((xd(),ob));b=(a=$doc.createElement(sb),(a[tb]=c.a.a,undefined),(a.style[ub]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);vm(e);mm(c.f,e);b.appendChild(e.i);wm(e,c)}
function bm(c){var a,b;b=Ad((xd(),c.i));a=ti(this,c);if(a){this.d.removeChild(Ad(b))}return a}
function Bl(){}
_=Bl.prototype=new mi();_.x=bm;_.tI=26;function lm(a){a.a=ff(ag,0,6,4,0);return a}
function mm(a,b){pm(a,b,a.b)}
function om(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function pm(d,e,a){var b,c;if(a<0||a>d.b){throw new fo()}if(d.b==d.a.length){c=ff(ag,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){jf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){jf(d.a,b,d.a[b-1])}jf(d.a,a,e)}
function qm(c,b){var a;if(b<0||b>=c.b){throw new fo()}--c.b;for(a=b;a<c.b;++a){jf(c.a,a,c.a[a+1])}jf(c.a,c.b,null)}
function rm(b,c){var a;a=om(b,c);if(a==-1){throw new it()}qm(b,a)}
function dm(){}
_=dm.prototype=new jo();_.tI=0;_.a=null;_.b=0;function gm(b,a){b.b=a;return b}
function im(a){if(a.a>=a.b.b){throw new it()}return a.b.a[++a.a]}
function jm(){return this.a<this.b.b-1}
function km(){return im(this)}
function em(){}
_=em.prototype=new jo();_.q=jm;_.s=km;_.tI=0;_.a=-1;_.b=null;function cn(){}
_=cn.prototype=new De();_.tI=0;function en(a){a.d=Dl(new Bl());a.c=sj(new qj());a.h=Dl(new Bl());a.g=Fj(new Ej());a.a=ml(new ll());a.e=ik(new fk());a.b=ji(new fi());a.f=Aj(new zj());a.i=Bi(new Ai());Ed((xd(),a.i.i),gc);ck(a.g,hc,hc,-1);ck(a.g,ic,ic,-1);a.g.i.size=6;a.g.i.style[jc]=kc;a.a.i[lc]=mc!=null?mc:C;a.a.i.style[jc]=kc;El(a.h,a.g);El(a.h,a.a);a.h.i.style[nc]=pc;Ed(a.f.i,qc);a.f.i.innerHTML=rc;tj(a.c,a.b);tj(a.c,a.e);a.c.i.style[nc]=kc;El(a.d,a.i);El(a.d,a.h);El(a.d,a.f);El(a.d,a.c);a.d.i.style[nc]=kc;a.d.i.style[jc]=kc;ai((Fk(),cl(null)),a.d);return a}
function dn(){}
_=dn.prototype=new cn();_.tI=0;function hp(){}
_=hp.prototype=new jo();_.tI=3;function Cn(){}
_=Cn.prototype=new hp();_.tI=4;function no(){}
_=no.prototype=new Cn();_.tI=5;function pn(){}
_=pn.prototype=new no();_.tI=28;function wn(c,a){var b;b=new sn();return b}
function sn(){}
_=sn.prototype=new jo();_.tI=0;function tn(){}
_=tn.prototype=new no();_.tI=31;function En(){}
_=En.prototype=new no();_.tI=32;function bo(){}
_=bo.prototype=new no();_.tI=33;function go(b,a){return b}
function fo(){}
_=fo.prototype=new no();_.tI=34;function Bo(b,a){if(!(a!=null&&pf(a.tI,1))){return false}return String(b)==a}
function Fo(b,a){return b.substr(a,b.length-a)}
function bp(c){if(c.length==0||c[0]>A&&c[c.length-1]>A){return c}var a=c.replace(/^(\s*)/,C);var b=a.replace(/\s*$/,C);return b}
function dp(a){return Bo(this,a)}
function fp(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function gp(){return xo(this)}
_=String.prototype;_.eQ=dp;_.hC=gp;_.tI=2;function so(){so=pt;to={};wo={}}
function uo(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function xo(c){so();var a=sc+c;var b=wo[a];if(b!=null){return b}b=to[a];if(b==null){b=uo(c)}yo();return wo[a]=b}
function yo(){if(vo==256){to=wo;wo={};vo=0}++vo}
var to,vo=0,wo;function jp(){}
_=jp.prototype=new no();_.tI=35;function np(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:gd(b,c)){return a}}return null}
function pp(a){throw new jp()}
function qp(b){var a;a=np(this.r(),b);return !!a}
function mp(){}
_=mp.prototype=new jo();_.j=pp;_.k=qp;_.tI=0;function Dr(b){var a;a=yp(new sp(),b);return sr(new lr(),b,a)}
function Er(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&pf(c.tI,11))){return false}e=qf(c,11);if(qf(this,11).d!=e.d){return false}for(b=up(new tp(),yp(new sp(),e).a);Fq(b.a);){a=qf(ar(b.a),9);d=a.o();f=a.p();if(!(d==null?qf(this,11).c:d!=null&&pf(d.tI,1)?uq(qf(this,11),qf(d,1)):tq(qf(this,11),d,~~id(d)))){return false}if(!ot(f,d==null?qf(this,11).b:d!=null&&pf(d.tI,1)?qf(this,11).e[sc+qf(d,1)]:qq(qf(this,11),d,~~id(d)))){return false}}return true}
function Fr(){var a,b,c;c=0;for(b=up(new tp(),yp(new sp(),qf(this,11)).a);Fq(b.a);){a=qf(ar(b.a),9);c+=a.hC();c=~~c}return c}
function kr(){}
_=kr.prototype=new jo();_.eQ=Er;_.hC=Fr;_.tI=0;function lq(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function mq(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=jq(e,c.substring(1));a.j(b)}}}
function pq(b,a){return a==null?b.c:a!=null&&pf(a.tI,1)?uq(b,qf(a,1)):tq(b,a,~~id(a))}
function sq(b,a){return a==null?b.b:a!=null&&pf(a.tI,1)?b.e[sc+qf(a,1)]:qq(b,a,~~id(a))}
function qq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function tq(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function uq(b,a){return sc+a in b.e}
function yq(b,a,c){return a==null?wq(b,c):a!=null&&pf(a.tI,1)?xq(b,qf(a,1),c):vq(b,a,c,~~id(a))}
function vq(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=bt(new at(),g,j);a.push(c);++i.d;return null}
function wq(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function xq(d,a,e){var b,c=d.e;a=sc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function zq(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&gd(a,b)}
function rp(){}
_=rp.prototype=new kr();_.n=zq;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function cs(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&pf(b.tI,12))){return false}c=qf(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function ds(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=id(c);a=~~a}}return a}
function as(){}
_=as.prototype=new mp();_.eQ=cs;_.hC=ds;_.tI=36;function yp(b,a){b.a=a;return b}
function Ap(d,c){var a,b,e;if(c!=null&&pf(c.tI,9)){a=qf(c,9);b=a.o();if(pq(d.a,b)){e=sq(d.a,b);return us(a.p(),e)}}return false}
function Bp(a){return Ap(this,a)}
function Cp(){return up(new tp(),this.a)}
function Dp(){return this.a.d}
function sp(){}
_=sp.prototype=new as();_.k=Bp;_.r=Cp;_.z=Dp;_.tI=37;_.a=null;function up(c,b){var a;c.b=b;a=fs(new es());if(c.b.c){hs(a,Fp(new Ep(),c.b))}mq(c.b,a);lq(c.b,a);c.a=Dq(new Bq(),a);return c}
function wp(){return Fq(this.a)}
function xp(){return qf(ar(this.a),9)}
function tp(){}
_=tp.prototype=new jo();_.q=wp;_.s=xp;_.tI=0;_.a=null;_.b=null;function Ar(b){var a;if(b!=null&&pf(b.tI,9)){a=qf(b,9);if(ot(this.o(),a.o())&&ot(this.p(),a.p())){return true}}return false}
function Br(){var a,b;a=0;b=0;if(this.o()!=null){a=id(this.o())}if(this.p()!=null){b=id(this.p())}return a^b}
function yr(){}
_=yr.prototype=new jo();_.eQ=Ar;_.hC=Br;_.tI=38;function Fp(b,a){b.a=a;return b}
function bq(){return null}
function cq(){return this.a.b}
function dq(a){return wq(this.a,a)}
function Ep(){}
_=Ep.prototype=new yr();_.o=bq;_.p=cq;_.y=dq;_.tI=39;_.a=null;function fq(c,a,b){c.b=b;c.a=a;return c}
function hq(){return this.a}
function iq(){return this.b.e[sc+this.a]}
function jq(b,a){return fq(new eq(),a,b)}
function kq(a){return xq(this.b,this.a,a)}
function eq(){}
_=eq.prototype=new yr();_.o=hq;_.p=iq;_.y=kq;_.tI=40;_.a=null;_.b=null;function er(a){gs(this,this.z(),a);return true}
function fr(a,b){if(a<0||a>=b){ir(a,b)}}
function gr(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&pf(e.tI,10))){return false}f=qf(e,10);if(this.z()!=f.b){return false}c=Dq(new Bq(),this);d=Dq(new Bq(),f);while(c.a<c.b.b){a=ar(c);b=ar(d);if(!(a==null?b==null:gd(a,b))){return false}}return true}
function hr(){var a,b,c;b=1;a=Dq(new Bq(),this);while(a.a<a.b.b){c=ar(a);b=31*b+(c==null?0:id(c));b=~~b}return b}
function ir(a,b){throw go(new fo(),tc+a+uc+b)}
function jr(){return Dq(new Bq(),this)}
function Aq(){}
_=Aq.prototype=new mp();_.j=er;_.eQ=gr;_.hC=hr;_.r=jr;_.tI=0;function Dq(b,a){b.b=a;return b}
function Fq(a){return a.a<a.b.b}
function ar(a){if(a.a>=a.b.b){throw new it()}return js(a.b,a.a++)}
function br(){return this.a<this.b.b}
function cr(){return ar(this)}
function Bq(){}
_=Bq.prototype=new jo();_.q=br;_.s=cr;_.tI=0;_.a=0;_.b=null;function sr(b,a,c){b.a=a;b.b=c;return b}
function vr(a){return pq(this.a,a)}
function wr(){var a;return a=up(new tp(),this.b.a),nr(new mr(),a)}
function xr(){return this.b.a.d}
function lr(){}
_=lr.prototype=new as();_.k=vr;_.r=wr;_.z=xr;_.tI=41;_.a=null;_.b=null;function nr(a,b){a.a=b;return a}
function qr(){return Fq(this.a.a)}
function rr(){var a;return a=qf(ar(this.a.a),9),a.o()}
function mr(){}
_=mr.prototype=new jo();_.q=qr;_.s=rr;_.tI=0;_.a=null;function fs(a){a.a=ff(bg,0,0,0,0);a.b=0;return a}
function hs(b,a){jf(b.a,b.b++,a);return true}
function gs(c,a,b){if(a<0||a>c.b){ir(a,c.b)}c.a.splice(a,0,b);++c.b}
function js(b,a){fr(a,b.b);return b.a[a]}
function ks(c,b,a){for(;a<c.b;++a){if(ot(b,c.a[a])){return a}}return -1}
function ls(a){return jf(this.a,this.b++,a),true}
function ms(a){return ks(this,a,0)!=-1}
function ns(){return this.b}
function es(){}
_=es.prototype=new Aq();_.j=ls;_.k=ms;_.z=ns;_.tI=42;_.a=null;_.b=0;function ss(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function us(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&gd(a,b)}
function rs(){}
_=rs.prototype=new rp();_.tI=43;function ws(a){a.a=ss(new rs());return a}
function xs(c,a){var b;b=yq(c.a,a,c);return b==null}
function zs(b){var a;return a=yq(this.a,b,this),a==null}
function As(a){return pq(this.a,a)}
function Bs(){var a;return a=up(new tp(),Dr(this.a).b.a),nr(new mr(),a)}
function Cs(){return this.a.d}
function vs(){}
_=vs.prototype=new as();_.j=zs;_.k=As;_.r=Bs;_.z=Cs;_.tI=44;_.a=null;function bt(b,a,c){b.a=a;b.b=c;return b}
function dt(){return this.a}
function et(){return this.b}
function gt(b){var a;a=this.b;this.b=b;return a}
function at(){}
_=at.prototype=new yr();_.o=dt;_.p=et;_.y=gt;_.tI=45;_.a=null;_.b=null;function it(){}
_=it.prototype=new no();_.tI=46;function ot(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&gd(a,b)}
function nn(){!!$stats&&$stats({moduleName:$moduleName,subSystem:vc,evtGroup:wc,millis:(new Date()).getTime(),type:xc,className:yc});en(new dn())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{nn()}catch(a){b(d)}else{nn()}}
function pt(){}
var ag=wn(Ac,Bc),bg=wn(Cc,Dc);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();