(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var E='',C=' ',Dc=', Size: ',Db='-',sb='0',bc='0px',tc='100%',xc='100px',Bc=':',w='DOMMouseScroll',Cc='Index: ',pc='Item four',lc='Item one',rc='Item six',qc='Item that has a long title and is number five',nc='Item tree',mc='Item two',A='MouseEvents',gd='Object;',Ac='Status: <b>Online<\/b>',vc='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',dd='Widget;',cd='[Lcom.google.gwt.user.client.ui.',fd='[Ljava.lang.',jc='absolute',vb='align',m='blur',ob='bottom',bb='button',tb='cellPadding',rb='cellSpacing',lb='center',x='change',B='className',cb='click',bd='com.streamspin.client.StreamSpinClient',y='contextmenu',nb='dblclick',ib='div',u='error',yb='focus',db='gwt-Button',kb='gwt-HTML',jb='gwt-Label',xb='gwt-ListBox',Cb='gwt-MenuBar',gc='gwt-TextArea',wc='height',cc='hideFocus',Fb='horizontal',z='html',hc='input',dc='keydown',oc='keypress',zc='keyup',D='left',ed='load',n='losecapture',Bb='menubar',pb='middle',Fc='moduleStartup',o='mousedown',p='mousemove',q='mouseout',r='mouseover',s='mouseup',v='mousewheel',ad='onModuleLoadStart',zb='option',ac='outline',ab='position',mb='right',Ab='role',t='scroll',l='select',Ec='startup',yc='status Online',eb='submit',gb='table',hb='tbody',ub='td',ic='text',fc='textarea',kc='title of Main Window',F='top',qb='tr',ec='true',fb='type',uc='value',Eb='vertical',wb='verticalAlign',sc='width';var _;function lp(a){return this===(a==null?null:a)}
function mp(){return this.$H||(this.$H=++xd)}
function jp(){}
_=jp.prototype={};_.eQ=lp;_.hC=mp;_.tM=pu;_.tI=1;function od(b,a){return b.tM==pu||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function qd(a){return a.tM==pu||a.tI==2?a.hC():a.$H||(a.$H=++xd)}
var xd=0;function ce(){ce=pu;Cd();new Ad()}
function ee(a){var b;b=$doc.createElement(l);if(a){b.multiple=true}return b}
function fe(a){var b=a.parentNode;if(b==null){return null}if(b.nodeType!=1)b=null;return b}
function je(a,b){while(a.firstChild){a.removeChild(a.firstChild)}if(b!=null){a.appendChild($doc.createTextNode(b))}}
function yd(){}
_=yd.prototype=new jp();_.tI=0;function be(){be=pu;ce()}
function ae(){}
_=ae.prototype=new yd();_.tI=0;function Ed(){Ed=pu;be()}
function Fd(b,a){return b===a||!!(b.compareDocumentPosition(a)&16)}
function zd(){}
_=zd.prototype=new ae();_.tI=0;function Cd(){Cd=pu;Ed()}
function Ad(){}
_=Ad.prototype=new zd();_.tI=0;function jf(){}
_=jf.prototype=new jp();_.tI=0;function qf(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function rf(a,f,c,b,e){var d;d=qf(e,b);sf(a,f,c,d);return d}
function sf(b,d,c,a){if(!tf){tf=new mf()}wf(a,tf);a.tI=d;a.qI=c;return a}
function uf(a,b,c){if(c!=null){if(a.qI>0&&!zf(c.tI,a.qI)){throw new qo()}if(a.qI<0&&(c.tM==pu||c.tI==2)){throw new qo()}}return a[b]=c}
function wf(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function mf(){}
_=mf.prototype=new jp();_.tI=0;_.length=0;_.qI=0;var tf=null;function Af(b,a){return b&&!!ig[b][a]}
function zf(b,a){return b&&ig[b][a]}
function Bf(b,a){if(b!=null&&!zf(b.tI,a)){throw new uo()}return b}
function hg(a){if(a!=null){throw new uo()}return a}
var ig=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function Dg(b,a,c){var d;if(a==ch){if(di(b)==8192){ch=null}}d=Cg;Cg=b;try{c.u(b)}finally{Cg=d}}
var Cg=null,ch=null;function ih(a){nh();if(!jh){jh=ft(new et())}ht(jh,a)}
function kh(){var a;if(jh){for(a=Dr(new Br(),jh);a.a<a.b.b;){Bf(as(a),3);sl()}}}
function lh(){var a,b;b=null;if(jh){for(a=Dr(new Br(),jh);a.a<a.b.b;){Bf(as(a),3);b=null}}return b}
function nh(){if(!mh){mh=true;li()}}
var jh=null,mh=false;function di(a){switch(a.type){case m:return 4096;case x:return 1024;case cb:return 1;case nb:return 2;case yb:return 2048;case dc:return 128;case oc:return 256;case zc:return 512;case ed:return 32768;case n:return 8192;case o:return 4;case p:return 64;case q:return 32;case r:return 16;case s:return 8;case t:return 16384;case u:return 65536;case v:return 131072;case w:return 131072;case y:return 262144;}}
function fi(){if(!hi){Ah();th();hi=true}}
function ii(a){return a!=null&&Af(a.tI,4)&&!(a!=null&&(a.tM!=pu&&a.tI!=2))}
var hi=false;function Ah(){Eh=function(b){if(Dh(b)){var a=Ch;if(a&&a.__listener){if(ii(a.__listener)){Dg(b,a,a.__listener);b.stopPropagation()}}}};Dh=function(a){return true};Fh=function(b){var c,a=this;while(a&&!(c=a.__listener)){a=a.parentNode}if(a&&a.nodeType!=1){a=null}if(c){if(ii(c)){Dg(b,a,c)}}};$wnd.addEventListener(cb,Eh,true);$wnd.addEventListener(nb,Eh,true);$wnd.addEventListener(o,Eh,true);$wnd.addEventListener(s,Eh,true);$wnd.addEventListener(p,Eh,true);$wnd.addEventListener(r,Eh,true);$wnd.addEventListener(q,Eh,true);$wnd.addEventListener(v,Eh,true);$wnd.addEventListener(dc,Dh,true);$wnd.addEventListener(zc,Dh,true);$wnd.addEventListener(oc,Dh,true)}
function Bh(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?Fh:null;if(b&2)c.ondblclick=a&2?Fh:null;if(b&4)c.onmousedown=a&4?Fh:null;if(b&8)c.onmouseup=a&8?Fh:null;if(b&16)c.onmouseover=a&16?Fh:null;if(b&32)c.onmouseout=a&32?Fh:null;if(b&64)c.onmousemove=a&64?Fh:null;if(b&128)c.onkeydown=a&128?Fh:null;if(b&256)c.onkeypress=a&256?Fh:null;if(b&512)c.onkeyup=a&512?Fh:null;if(b&1024)c.onchange=a&1024?Fh:null;if(b&2048)c.onfocus=a&2048?Fh:null;if(b&4096)c.onblur=a&4096?Fh:null;if(b&8192)c.onlosecapture=a&8192?Fh:null;if(b&16384)c.onscroll=a&16384?Fh:null;if(b&32768)c.onload=a&32768?Fh:null;if(b&65536)c.onerror=a&65536?Fh:null;if(b&131072)c.onmousewheel=a&131072?Fh:null;if(b&262144)c.oncontextmenu=a&262144?Fh:null}
var Ch=null,Dh=null,Eh=null,Fh=null;function th(){$wnd.addEventListener(q,function(b){var a=$wnd.__captureElem;if(a&&!b.relatedTarget){if(z==b.target.tagName.toLowerCase()){var c=$doc.createEvent(A);c.initMouseEvent(s,true,true,$wnd,0,b.screenX,b.screenY,b.clientX,b.clientY,b.ctrlKey,b.altKey,b.shiftKey,b.metaKey,b.button,null);a.dispatchEvent(c)}}},true);$wnd.addEventListener(w,Eh,true)}
function vh(b,a){fi();Bh(b,a);uh(b,a)}
function uh(b,a){if(a&131072){b.addEventListener(w,Fh,false)}}
function li(){var d=$wnd.onbeforeunload;var e=$wnd.onunload;$wnd.onbeforeunload=function(a){var c,b;try{c=lh()}finally{b=d&&d(a)}if(c!=null){return c}if(b!=null){return b}};$wnd.onunload=function(a){try{kh()}finally{e&&e(a);$wnd.onresize=null;$wnd.onscroll=null;$wnd.onbeforeunload=null;$wnd.onunload=null}}}
function im(b,a){om(b.i,a,true)}
function nm(a){var b,c;b=a[B]==null?null:String(a[B]);c=b.indexOf(fq(32));if(c>=0){return b.substr(0,c-0)}return b}
function om(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new np()}j=bq(j);if(j.length==0){throw new Fo()}i=c[B]==null?null:String(c[B]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=C}c[B]=i+j}}else{if(e!=-1){b=bq(i.substr(0,e-0));d=bq(Fp(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+C+d}c[B]=h}}}
function hm(){}
_=hm.prototype=new jp();_.tI=7;_.i=null;function hn(a){if(a.g){throw new cp()}a.g=true;a.i.__listener=a;a.m();a.w()}
function jn(a){if(!a.g){throw new cp()}try{a.x()}finally{a.n();a.i.__listener=null;a.g=false}}
function kn(a){if(a.h){a.h.y(a)}else if(a.h){throw new cp()}}
function ln(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.v()}c.h=null}else{if(a){throw new cp()}c.h=b;if(b.g){hn(c)}}}
function mn(){}
function nn(){}
function on(a){}
function pn(){jn(this)}
function qn(){}
function rn(){}
function wm(){}
_=wm.prototype=new hm();_.m=mn;_.n=nn;_.u=on;_.v=pn;_.w=qn;_.x=rn;_.tI=8;_.g=false;_.h=null;function fl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=Cm(b);hn(a)}}
function gl(){var a,b;for(b=this.s();b.a<b.b.b-1;){a=Cm(b);a.v()}}
function hl(){}
function il(){}
function dl(){}
_=dl.prototype=new wm();_.m=fl;_.n=gl;_.w=hl;_.x=il;_.tI=9;function Ei(c,a,b){kn(a);an(c.f,a);b.appendChild(a.i);ln(a,c)}
function aj(b,c){var a;if(c.h!=b){return false}ln(c,null);a=c.i;fe((ce(),a)).removeChild(a);fn(b.f,c);return true}
function bj(){return Am(new ym(),this.f)}
function cj(a){return aj(this,a)}
function Ci(){}
_=Ci.prototype=new dl();_.s=bj;_.y=cj;_.tI=10;function ni(a,b){Ei(a,b,a.i)}
function pi(b,c){var a;a=aj(b,c);if(a){qi(c.i)}return a}
function qi(a){a.style[D]=E;a.style[F]=E;a.style[ab]=E}
function ri(a){return pi(this,a)}
function mi(){}
_=mi.prototype=new Ci();_.y=ri;_.tI=11;function ij(){ij=pu;jj=(Fn(),bo)}
function hj(b,a){ij();b.i=a;jj.z(b.i,0);return b}
function kj(a){di(a)}
function gj(){}
_=gj.prototype=new wm();_.u=kj;_.tI=12;var jj;function vi(){vi=pu;ij()}
function ui(b,a){vi();b.i=a;jj.z(b.i,0);return b}
function ti(){}
_=ti.prototype=new gj();_.tI=13;function xi(){xi=pu;vi()}
function wi(a){xi();ui(a,$doc.createElement((ce(),bb)));yi(a.i);a.i[B]=db;return a}
function yi(b){if(b.type==eb){try{b.setAttribute(fb,bb)}catch(a){}}}
function si(){}
_=si.prototype=new ti();_.tI=14;function Ai(a){a.f=Fm(new xm());a.e=$doc.createElement((ce(),gb));a.d=$doc.createElement(hb);a.e.appendChild(a.d);a.i=a.e;return a}
function zi(){}
_=zi.prototype=new Ci();_.tI=15;_.d=null;_.e=null;function ej(){ej=pu;fj=(Fn(),ao)}
var fj;function lk(a){a.i=$doc.createElement((ce(),ib));a.i[B]=jb;return a}
function ok(a){di(a)}
function kk(){}
_=kk.prototype=new wm();_.u=ok;_.tI=16;function mj(a){a.i=$doc.createElement((ce(),ib));a.i[B]=kb;return a}
function lj(){}
_=lj.prototype=new kk();_.tI=17;function vj(){vj=pu;tj(new sj(),lb);xj=tj(new sj(),D);tj(new sj(),mb);wj=xj}
var wj,xj;function tj(b,a){b.a=a;return b}
function sj(){}
_=sj.prototype=new jp();_.tI=0;_.a=null;function Dj(){Dj=pu;Bj(new Aj(),ob);Bj(new Aj(),pb);Ej=Bj(new Aj(),F)}
var Ej;function Bj(a,b){a.a=b;return a}
function Aj(){}
_=Aj.prototype=new jp();_.tI=0;_.a=null;function dk(a){Ai(a);a.a=(vj(),wj);a.c=(Dj(),Ej);a.b=$doc.createElement((ce(),qb));a.d.appendChild(a.b);a.e[rb]=sb;a.e[tb]=sb;return a}
function ek(c,d){var b,a;b=(a=$doc.createElement((ce(),ub)),(a[vb]=c.a.a,undefined),(a.style[wb]=c.c.a,undefined),a);c.b.appendChild(b);kn(d);an(c.f,d);b.appendChild(d.i);ln(d,c)}
function hk(c){var a,b;b=fe((ce(),c.i));a=aj(this,c);if(a){this.b.removeChild(b)}return a}
function bk(){}
_=bk.prototype=new zi();_.y=hk;_.tI=18;_.b=null;function tk(){tk=pu;ij()}
function qk(a){tk();hj(a,ee((ce(),false)));a.i[B]=xb;return a}
function uk(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement((ce(),zb));d.text=c;d.value=g;if(b==-1||b==e.options.length){e.add(d,null)}else{a=e.options[b];e.add(d,a)}}
function wk(a){if(di(a)==1024){}else{di(a)}}
function pk(){}
_=pk.prototype=new gj();_.u=wk;_.tI=19;function Ak(a){ft(new et());a.b=ft(new et());Dk(a,false,(al(),new Ek()));return a}
function Ck(d,a){var b,c;for(c=Dr(new Br(),d.b);c.a<c.b.b;){b=hg(as(c));if(Fd((ce(),null.D()),a)){return b}}return null}
function Dk(c,e){var a,b,d;b=$doc.createElement((ce(),gb));c.a=$doc.createElement(hb);b.appendChild(c.a);if(!e){d=$doc.createElement(qb);c.a.appendChild(d)}a=zn((ej(),fj));a.appendChild(b);c.i=a;c.i.setAttribute(Ab,Bb);vh(c.i,2225|(c.i.__eventBits||0));c.i[B]=Cb;if(e){im(c,nm(c.i)+Db+Eb)}else{im(c,nm(c.i)+Db+Fb)}c.i.style[ac]=bc;c.i.setAttribute(cc,ec)}
function bl(a){var b;Ck(this,a.target);switch(di(a)){case 1:{(ej(),this.i).firstChild.focus();break}{break}case 2048:{hg(jt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{hg(jt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 39:{hg(jt(this.b,0))}a.cancelBubble=true;a.preventDefault();break;case 38:hg(jt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 40:hg(jt(this.b,0));a.cancelBubble=true;a.preventDefault();break;case 27:a.cancelBubble=true;a.preventDefault();break;case 13:{hg(jt(this.b,0))}}break}}}
function cl(){jn(this)}
function xk(){}
_=xk.prototype=new wm();_.u=bl;_.v=cl;_.tI=20;_.a=null;function al(){al=pu}
function Ek(){}
_=Ek.prototype=new jp();_.tI=0;function rl(){rl=pu;vl=st(new rt());wl=wt(new vt())}
function ql(b,a){rl();b.f=Fm(new xm());b.i=a;hn(b);return b}
function sl(){var b,a;rl();var c,d;for(d=(b=uq(new tq(),Ds(wl.a).b.a),ns(new ms(),b));Fr(d.a.a);){c=Bf((a=Bf(as(d.a.a),9),a.p()),6);if(c.g){c.v()}}}
function ul(a){rl();var b;b=Bf(sr(vl,a),5);if(b){return b}if(vl.d==0){ih(new ll())}b=ol(new nl());yr(vl,a,b);xt(wl,b);return b}
function kl(){}
_=kl.prototype=new mi();_.tI=21;var vl,wl;function ll(){}
_=ll.prototype=new jp();_.tI=22;function pl(){pl=pu;rl()}
function ol(a){pl();ql(a,$doc.body);return a}
function nl(){}
_=nl.prototype=new kl();_.tI=23;function em(){em=pu;ij()}
function dm(b,a){em();b.i=a;jj.z(b.i,0);return b}
function gm(a){var b;b=di(a);if((b&896)!=0){di(a)}else if(b==1024){}else{di(a)}}
function cm(){}
_=cm.prototype=new gj();_.u=gm;_.tI=24;function bm(){bm=pu;em()}
function am(a){bm();dm(a,$doc.createElement((ce(),fc)));a.i[B]=gc;return a}
function Fl(){}
_=Fl.prototype=new cm();_.tI=25;function rm(a){Ai(a);a.a=(vj(),wj);a.b=(Dj(),Ej);a.e[rb]=sb;a.e[tb]=sb;return a}
function sm(c,e){var b,d,a;d=$doc.createElement((ce(),qb));b=(a=$doc.createElement(ub),(a[vb]=c.a.a,undefined),(a.style[wb]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);kn(e);an(c.f,e);b.appendChild(e.i);ln(e,c)}
function vm(c){var a,b;b=fe((ce(),c.i));a=aj(this,c);if(a){this.d.removeChild(fe(b))}return a}
function pm(){}
_=pm.prototype=new zi();_.y=vm;_.tI=26;function Fm(a){a.a=rf(lg,0,6,4,0);return a}
function an(a,b){dn(a,b,a.b)}
function cn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function dn(d,e,a){var b,c;if(a<0||a>d.b){throw new fp()}if(d.b==d.a.length){c=rf(lg,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){uf(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){uf(d.a,b,d.a[b-1])}uf(d.a,a,e)}
function en(c,b){var a;if(b<0||b>=c.b){throw new fp()}--c.b;for(a=b;a<c.b;++a){uf(c.a,a,c.a[a+1])}uf(c.a,c.b,null)}
function fn(b,c){var a;a=cn(b,c);if(a==-1){throw new iu()}en(b,a)}
function xm(){}
_=xm.prototype=new jp();_.tI=0;_.a=null;_.b=0;function Am(b,a){b.b=a;return b}
function Cm(a){if(a.a>=a.b.b){throw new iu()}return a.b.a[++a.a]}
function Dm(){return this.a<this.b.b-1}
function Em(){return Cm(this)}
function ym(){}
_=ym.prototype=new jp();_.r=Dm;_.t=Em;_.tI=0;_.a=-1;_.b=null;function Fn(){Fn=pu;ao=vn(new tn());bo=ao?(Fn(),new sn()):ao}
function co(a,b){a.tabIndex=b}
function sn(){}
_=sn.prototype=new jp();_.z=co;_.tI=0;var ao,bo;function wn(){wn=pu;Fn()}
function vn(a){wn();a.a=xn();a.b=yn();a.c=An();return a}
function xn(){return function(a){if(this.parentNode.onblur){this.parentNode.onblur(a)}}}
function yn(){return function(a){if(this.parentNode.onfocus){this.parentNode.onfocus(a)}}}
function zn(c){var a=$doc.createElement(ib);var b=c.l();b.addEventListener(m,c.a,false);b.addEventListener(yb,c.b,false);a.addEventListener(o,c.c,false);a.appendChild(b);return a}
function An(){return function(){this.firstChild.focus()}}
function Cn(){var a=$doc.createElement(hc);a.type=ic;a.style.width=a.style.height=0;a.style.zIndex=-1;a.style.position=jc;return a}
function Dn(a,b){a.firstChild.tabIndex=b}
function tn(){}
_=tn.prototype=new sn();_.l=Cn;_.z=Dn;_.tI=0;function eo(){}
_=eo.prototype=new jf();_.tI=0;function go(a){a.d=rm(new pm());a.c=dk(new bk());a.h=rm(new pm());a.g=qk(new pk());a.a=am(new Fl());a.e=Ak(new xk());a.b=wi(new si());a.f=lk(new kk());a.i=mj(new lj());je((ce(),a.i.i),kc);uk(a.g,lc,lc,-1);uk(a.g,mc,mc,-1);uk(a.g,nc,nc,-1);uk(a.g,pc,pc,-1);uk(a.g,qc,qc,-1);uk(a.g,rc,rc,-1);a.g.i.size=4;a.g.i.style[sc]=tc;a.a.i[uc]=vc!=null?vc:E;a.a.i.style[sc]=tc;sm(a.h,a.g);sm(a.h,a.a);a.h.i.style[wc]=xc;a.h.i.style[sc]=tc;je(a.f.i,yc);a.f.i.innerHTML=Ac;ek(a.c,a.b);ek(a.c,a.e);a.c.i.style[wc]=tc;sm(a.d,a.i);sm(a.d,a.h);sm(a.d,a.f);sm(a.d,a.c);a.d.i.style[wc]=tc;a.d.i.style[sc]=tc;ni((rl(),ul(null)),a.d);return a}
function fo(){}
_=fo.prototype=new eo();_.tI=0;function hq(){}
_=hq.prototype=new jp();_.tI=3;function Do(){}
_=Do.prototype=new hq();_.tI=4;function np(){}
_=np.prototype=new Do();_.tI=5;function qo(){}
_=qo.prototype=new np();_.tI=28;function xo(c,a){var b;b=new to();return b}
function to(){}
_=to.prototype=new jp();_.tI=0;function uo(){}
_=uo.prototype=new np();_.tI=31;function Fo(){}
_=Fo.prototype=new np();_.tI=32;function cp(){}
_=cp.prototype=new np();_.tI=33;function gp(b,a){return b}
function fp(){}
_=fp.prototype=new np();_.tI=34;function Bp(b,a){if(!(a!=null&&Af(a.tI,1))){return false}return String(b)==a}
function Fp(b,a){return b.substr(a,b.length-a)}
function bq(c){if(c.length==0||c[0]>C&&c[c.length-1]>C){return c}var a=c.replace(/^(\s*)/,E);var b=a.replace(/\s*$/,E);return b}
function dq(a){return Bp(this,a)}
function fq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function gq(){return xp(this)}
_=String.prototype;_.eQ=dq;_.hC=gq;_.tI=2;function sp(){sp=pu;tp={};wp={}}
function up(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function xp(c){sp();var a=Bc+c;var b=wp[a];if(b!=null){return b}b=tp[a];if(b==null){b=up(c)}yp();return wp[a]=b}
function yp(){if(vp==256){tp=wp;wp={};vp=0}++vp}
var tp,vp=0,wp;function jq(){}
_=jq.prototype=new np();_.tI=35;function nq(a,b){var c;while(a.r()){c=a.t();if(b==null?c==null:od(b,c)){return a}}return null}
function pq(a){throw new jq()}
function qq(b){var a;a=nq(this.s(),b);return !!a}
function mq(){}
_=mq.prototype=new jp();_.j=pq;_.k=qq;_.tI=0;function Ds(b){var a;a=yq(new sq(),b);return ss(new ls(),b,a)}
function Es(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&Af(c.tI,11))){return false}e=Bf(c,11);if(Bf(this,11).d!=e.d){return false}for(b=uq(new tq(),yq(new sq(),e).a);Fr(b.a);){a=Bf(as(b.a),9);d=a.p();f=a.q();if(!(d==null?Bf(this,11).c:d!=null&&Af(d.tI,1)?ur(Bf(this,11),Bf(d,1)):tr(Bf(this,11),d,~~qd(d)))){return false}if(!ou(f,d==null?Bf(this,11).b:d!=null&&Af(d.tI,1)?Bf(this,11).e[Bc+Bf(d,1)]:qr(Bf(this,11),d,~~qd(d)))){return false}}return true}
function Fs(){var a,b,c;c=0;for(b=uq(new tq(),yq(new sq(),Bf(this,11)).a);Fr(b.a);){a=Bf(as(b.a),9);c+=a.hC();c=~~c}return c}
function ks(){}
_=ks.prototype=new jp();_.eQ=Es;_.hC=Fs;_.tI=0;function lr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function mr(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=jr(e,c.substring(1));a.j(b)}}}
function pr(b,a){return a==null?b.c:a!=null&&Af(a.tI,1)?ur(b,Bf(a,1)):tr(b,a,~~qd(a))}
function sr(b,a){return a==null?b.b:a!=null&&Af(a.tI,1)?b.e[Bc+Bf(a,1)]:qr(b,a,~~qd(a))}
function qr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return c.q()}}}return null}
function tr(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(h.o(g,d)){return true}}}return false}
function ur(b,a){return Bc+a in b.e}
function yr(b,a,c){return a==null?wr(b,c):a!=null&&Af(a.tI,1)?xr(b,Bf(a,1),c):vr(b,a,c,~~qd(a))}
function vr(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.p();if(i.o(g,d)){var h=c.q();c.A(j);return h}}}else{a=i.a[e]=[]}var c=bu(new au(),g,j);a.push(c);++i.d;return null}
function wr(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function xr(d,a,e){var b,c=d.e;a=Bc+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function zr(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function rq(){}
_=rq.prototype=new ks();_.o=zr;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function ct(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&Af(b.tI,12))){return false}c=Bf(b,12);if(c.B()!=this.B()){return false}for(a=c.s();a.r();){d=a.t();if(!this.k(d)){return false}}return true}
function dt(){var a,b,c;a=0;for(b=this.s();b.r();){c=b.t();if(c!=null){a+=qd(c);a=~~a}}return a}
function at(){}
_=at.prototype=new mq();_.eQ=ct;_.hC=dt;_.tI=36;function yq(b,a){b.a=a;return b}
function Aq(d,c){var a,b,e;if(c!=null&&Af(c.tI,9)){a=Bf(c,9);b=a.p();if(pr(d.a,b)){e=sr(d.a,b);return ut(a.q(),e)}}return false}
function Bq(a){return Aq(this,a)}
function Cq(){return uq(new tq(),this.a)}
function Dq(){return this.a.d}
function sq(){}
_=sq.prototype=new at();_.k=Bq;_.s=Cq;_.B=Dq;_.tI=37;_.a=null;function uq(c,b){var a;c.b=b;a=ft(new et());if(c.b.c){ht(a,Fq(new Eq(),c.b))}mr(c.b,a);lr(c.b,a);c.a=Dr(new Br(),a);return c}
function wq(){return Fr(this.a)}
function xq(){return Bf(as(this.a),9)}
function tq(){}
_=tq.prototype=new jp();_.r=wq;_.t=xq;_.tI=0;_.a=null;_.b=null;function As(b){var a;if(b!=null&&Af(b.tI,9)){a=Bf(b,9);if(ou(this.p(),a.p())&&ou(this.q(),a.q())){return true}}return false}
function Bs(){var a,b;a=0;b=0;if(this.p()!=null){a=qd(this.p())}if(this.q()!=null){b=qd(this.q())}return a^b}
function ys(){}
_=ys.prototype=new jp();_.eQ=As;_.hC=Bs;_.tI=38;function Fq(b,a){b.a=a;return b}
function br(){return null}
function cr(){return this.a.b}
function dr(a){return wr(this.a,a)}
function Eq(){}
_=Eq.prototype=new ys();_.p=br;_.q=cr;_.A=dr;_.tI=39;_.a=null;function fr(c,a,b){c.b=b;c.a=a;return c}
function hr(){return this.a}
function ir(){return this.b.e[Bc+this.a]}
function jr(b,a){return fr(new er(),a,b)}
function kr(a){return xr(this.b,this.a,a)}
function er(){}
_=er.prototype=new ys();_.p=hr;_.q=ir;_.A=kr;_.tI=40;_.a=null;_.b=null;function es(a){gt(this,this.B(),a);return true}
function fs(a,b){if(a<0||a>=b){is(a,b)}}
function gs(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&Af(e.tI,10))){return false}f=Bf(e,10);if(this.B()!=f.b){return false}c=Dr(new Br(),this);d=Dr(new Br(),f);while(c.a<c.b.b){a=as(c);b=as(d);if(!(a==null?b==null:od(a,b))){return false}}return true}
function hs(){var a,b,c;b=1;a=Dr(new Br(),this);while(a.a<a.b.b){c=as(a);b=31*b+(c==null?0:qd(c));b=~~b}return b}
function is(a,b){throw gp(new fp(),Cc+a+Dc+b)}
function js(){return Dr(new Br(),this)}
function Ar(){}
_=Ar.prototype=new mq();_.j=es;_.eQ=gs;_.hC=hs;_.s=js;_.tI=0;function Dr(b,a){b.b=a;return b}
function Fr(a){return a.a<a.b.b}
function as(a){if(a.a>=a.b.b){throw new iu()}return jt(a.b,a.a++)}
function bs(){return this.a<this.b.b}
function cs(){return as(this)}
function Br(){}
_=Br.prototype=new jp();_.r=bs;_.t=cs;_.tI=0;_.a=0;_.b=null;function ss(b,a,c){b.a=a;b.b=c;return b}
function vs(a){return pr(this.a,a)}
function ws(){var a;return a=uq(new tq(),this.b.a),ns(new ms(),a)}
function xs(){return this.b.a.d}
function ls(){}
_=ls.prototype=new at();_.k=vs;_.s=ws;_.B=xs;_.tI=41;_.a=null;_.b=null;function ns(a,b){a.a=b;return a}
function qs(){return Fr(this.a.a)}
function rs(){var a;return a=Bf(as(this.a.a),9),a.p()}
function ms(){}
_=ms.prototype=new jp();_.r=qs;_.t=rs;_.tI=0;_.a=null;function ft(a){a.a=rf(mg,0,0,0,0);a.b=0;return a}
function ht(b,a){uf(b.a,b.b++,a);return true}
function gt(c,a,b){if(a<0||a>c.b){is(a,c.b)}c.a.splice(a,0,b);++c.b}
function jt(b,a){fs(a,b.b);return b.a[a]}
function kt(c,b,a){for(;a<c.b;++a){if(ou(b,c.a[a])){return a}}return -1}
function lt(a){return uf(this.a,this.b++,a),true}
function mt(a){return kt(this,a,0)!=-1}
function nt(){return this.b}
function et(){}
_=et.prototype=new Ar();_.j=lt;_.k=mt;_.B=nt;_.tI=42;_.a=null;_.b=0;function st(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function ut(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function rt(){}
_=rt.prototype=new rq();_.tI=43;function wt(a){a.a=st(new rt());return a}
function xt(c,a){var b;b=yr(c.a,a,c);return b==null}
function zt(b){var a;return a=yr(this.a,b,this),a==null}
function At(a){return pr(this.a,a)}
function Bt(){var a;return a=uq(new tq(),Ds(this.a).b.a),ns(new ms(),a)}
function Ct(){return this.a.d}
function vt(){}
_=vt.prototype=new at();_.j=zt;_.k=At;_.s=Bt;_.B=Ct;_.tI=44;_.a=null;function bu(b,a,c){b.a=a;b.b=c;return b}
function du(){return this.a}
function eu(){return this.b}
function gu(b){var a;a=this.b;this.b=b;return a}
function au(){}
_=au.prototype=new ys();_.p=du;_.q=eu;_.A=gu;_.tI=45;_.a=null;_.b=null;function iu(){}
_=iu.prototype=new np();_.tI=46;function ou(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&od(a,b)}
function oo(){!!$stats&&$stats({moduleName:$moduleName,subSystem:Ec,evtGroup:Fc,millis:(new Date()).getTime(),type:ad,className:bd});go(new fo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{oo()}catch(a){b(d)}else{oo()}}
function pu(){}
var lg=xo(cd,dd),mg=xo(fd,gd);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();