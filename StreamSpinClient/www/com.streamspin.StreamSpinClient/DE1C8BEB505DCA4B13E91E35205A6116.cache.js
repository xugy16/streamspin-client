(function(){var $gwt_version = "null";var $wnd = window;var $doc = $wnd.document;var $moduleName, $moduleBase;var $stats = $wnd.__gwtStatsEvent ? function(a) {return $wnd.__gwtStatsEvent(a);} : null;$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalStart'});var lb='',zb=' ',l='#',vd='$',o=', Size: ',Bc='-',ab='/',oc='0',Fc='0px',od='100%',sd='100px',wd=':',tc='<SELECT>',m='?',wb='BackgroundImageCache',wc='DIV',fb='DOMMouseScroll',xd='Index: ',kd='Item one',ld='Item two',w='Object;',qd='This is some contence that should show how the widget handles stuff, wwwwwwwwwww wwwwwwwwww wwwwwwwwww wwwwew rw er',u='Widget;',t='[Lcom.google.gwt.user.client.ui.',v='[Ljava.lang.',ud='\\',bc='__gwt_initWindowCloseHandler',rc='align',mc='blur',jc='bottom',Db='button',pc='cellPadding',nc='cellSpacing',hc='center',xc='change',yb='className',id='clear.cache.gif',cd='click',s='com.streamspin.client.StreamSpinClient',gb='contextmenu',nd='dblclick',ec='div',db='error',n='focus',ub='function',vb='function ',Eb='gwt-Button',gc='gwt-HTML',fc='gwt-Label',uc='gwt-ListBox',Ac='gwt-MenuBar',ed='gwt-TextArea',rd='height',ad='hideFocus',Dc='horizontal',hd='http://',fd='https',gd='https://',x='keydown',y='keypress',z='keyup',Ab='left',A='load',B='losecapture',zc='menubar',kc='middle',q='moduleStartup',C='mousedown',D='mousemove',E='mouseout',F='mouseover',bb='mouseup',eb='mousewheel',r='onModuleLoadStart',rb='onblur',hb='onclick',tb='oncontextmenu',sb='ondblclick',qb='onfocus',nb='onkeydown',ob='onkeypress',pb='onkeyup',td='online staus',ib='onmousedown',kb='onmousemove',jb='onmouseup',mb='onmousewheel',vc='option',Ec='outline',Cb='position',ic='right',yc='role',xb='script',cb='scroll',p='startup',Fb='submit',cc='table',dc='tbody',qc='td',dd='textarea',jd='title of Main Window',Bb='top',lc='tr',bd='true',ac='type',pd='value',Cc='vertical',sc='verticalAlign',md='width';var _;function Dp(a){return this===(a==null?null:a)}
function Ep(){return this.$H||(this.$H=++me)}
function Bp(){}
_=Bp.prototype={};_.eQ=Dp;_.hC=Ep;_.tM=dv;_.tI=1;function ce(b,a){return b.tM==dv||b.tI==2?b.eQ(a):(b==null?null:b)===(a==null?null:a)}
function ee(a){return a.tM==dv||a.tI==2?a.hC():a.$H||(a.$H=++me)}
function je(){var b=$doc.location.href;var a=b.indexOf(l);if(a!=-1)b=b.substring(0,a);a=b.indexOf(m);if(a!=-1)b=b.substring(0,a);a=b.lastIndexOf(ab);if(a!=-1)b=b.substring(0,a);return b.length>0?b+ab:lb}
var me=0;function se(b,a){return b===a||b.contains(a)}
function te(c,b,a){if(a){c.add(b,a.index)}else{c.add(b)}}
function ff(){ff=dv;jf()}
function hf(k,i,j){i.src=j;if(i.complete){return}i.__kids=[];i.__pendingSrc=j;k[j]=i;var g=i.onload,f=i.onerror,e=i.onabort;function h(c){var d=i.__kids;i.__cleanup();window.setTimeout(function(){for(var a=0;a<d.length;++a){var b=d[a];if(b.__pendingSrc==j){b.src=j;b.__pendingSrc=null}}},0);c&&c.call(i)}
i.onload=function(){h(g)};i.onerror=function(){h(f)};i.onabort=function(){h(e)};i.__cleanup=function(){i.onload=g;i.onerror=f;i.onabort=e;i.__cleanup=i.__pendingSrc=i.__kids=null;delete k[j]}}
function jf(){try{$doc.execCommand(wb,false,true)}catch(a){}}
function nf(e,b){var d=e.__kids;for(var c=0,a=d.length;c<a;++c){if(d[c]===b){d.splice(c,1);b.__pendingSrc=null;return}}}
function of(f,c){var e=c.__pendingSrc;var d=c.__kids;c.__cleanup();if(c=d[0]){c.__pendingSrc=null;hf(f,c,e);if(c.__pendingSrc){d.splice(0,1);c.__kids=d}else{for(var b=1,a=d.length;b<a;++b){d[b].src=e;d[b].__pendingSrc=null}}}}
function pf(a,c){ff();var b,d;if(nq(a.__pendingSrc||a.src,c)){return}if(!qf){qf={}}b=a.__pendingSrc;if(b!=null){d=qf[b];if(d==a){of(qf,d)}else{nf(d,a)}}d=qf[c];if(!d){hf(qf,a,c)}else{d.__kids.push(a);a.__pendingSrc=d.__pendingSrc}}
var qf=null;function fg(){}
_=fg.prototype=new Bp();_.tI=0;function mg(e,c){var d=[null,0,false,[0,0]];var f=d[e];var a=new Array(c);for(var b=0;b<c;++b){a[b]=f}return a}
function ng(a,f,c,b,e){var d;d=mg(e,b);og(a,f,c,d);return d}
function og(b,d,c,a){if(!pg){pg=new ig()}sg(a,pg);a.tI=d;a.qI=c;return a}
function qg(a,b,c){if(c!=null){if(a.qI>0&&!vg(c.tI,a.qI)){throw new cp()}if(a.qI<0&&(c.tM==dv||c.tI==2)){throw new cp()}}return a[b]=c}
function sg(a,c){for(var b in c){var d=c[b];if(d){a[b]=d}}return a}
function ig(){}
_=ig.prototype=new Bp();_.tI=0;_.length=0;_.qI=0;var pg=null;function wg(b,a){return b&&!!eh[b][a]}
function vg(b,a){return b&&eh[b][a]}
function xg(b,a){if(b!=null&&!vg(b.tI,a)){throw new gp()}return b}
function dh(a){if(a!=null){throw new gp()}return a}
var eh=[{},{},{1:1},{2:1},{2:1},{2:1},{2:1},{7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,5:1,6:1,7:1},{3:1},{4:1,5:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{4:1,6:1,7:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{2:1},{12:1},{12:1},{9:1},{9:1},{9:1},{12:1},{10:1},{11:1},{12:1},{9:1},{2:1},{8:1}];function zh(b,a,c){var d;if(a==Ch){if(zi(b)==8192){Ch=null}}d=yh;yh=b;try{c.t(b)}finally{yh=d}}
function Bh(a){return true}
function Fh(a,b){Bi();si(a,b)}
var yh=null,Ch=null;function ei(a){ji();if(!fi){fi=zt(new yt())}Bt(fi,a)}
function gi(){var a;if(fi){for(a=rs(new ps(),fi);a.a<a.b.b;){xg(us(a),3);jm()}}}
function hi(){var a,b;b=null;if(fi){for(a=rs(new ps(),fi);a.a<a.b.b;){xg(us(a),3);b=null}}return b}
function ji(){if(!ii){ii=true;dj(cj(),bc)}}
var fi=null,ii=false;function zi(a){switch(a.type){case mc:return 4096;case xc:return 1024;case cd:return 1;case nd:return 2;case n:return 2048;case x:return 128;case y:return 256;case z:return 512;case A:return 32768;case B:return 8192;case C:return 4;case D:return 64;case E:return 32;case F:return 16;case bb:return 8;case cb:return 16384;case db:return 65536;case eb:return 131072;case fb:return 131072;case gb:return 262144;}}
function Bi(){if(!Di){ri();Di=true}}
var Di=false;function ri(){vi=function(){var c=ti;ti=this;if($wnd.event.returnValue==null){$wnd.event.returnValue=true;if(!Bh($wnd.event)){ti=c;return}}var b,a=this;while(a&&!(b=a.__listener)){a=a.parentElement}if(b){if(b!=null&&wg(b.tI,4)&&!(b!=null&&(b.tM!=dv&&b.tI!=2))){zh($wnd.event,a,b)}}ti=c};ui=function(){var a=$doc.createEventObject();this.fireEvent(hb,a);if(this.__eventBits&2){vi.call(this)}};var e=function(){vi.call($doc.body)};var d=function(){ui.call($doc.body)};$doc.body.attachEvent(hb,e);$doc.body.attachEvent(ib,e);$doc.body.attachEvent(jb,e);$doc.body.attachEvent(kb,e);$doc.body.attachEvent(mb,e);$doc.body.attachEvent(nb,e);$doc.body.attachEvent(ob,e);$doc.body.attachEvent(pb,e);$doc.body.attachEvent(qb,e);$doc.body.attachEvent(rb,e);$doc.body.attachEvent(sb,d);$doc.body.attachEvent(tb,e)}
function si(c,a){var b=(c.__eventBits||0)^a;c.__eventBits=a;if(!b)return;if(b&1)c.onclick=a&1?vi:null;if(b&3)c.ondblclick=a&3?ui:null;if(b&4)c.onmousedown=a&4?vi:null;if(b&8)c.onmouseup=a&8?vi:null;if(b&16)c.onmouseover=a&16?vi:null;if(b&32)c.onmouseout=a&32?vi:null;if(b&64)c.onmousemove=a&64?vi:null;if(b&128)c.onkeydown=a&128?vi:null;if(b&256)c.onkeypress=a&256?vi:null;if(b&512)c.onkeyup=a&512?vi:null;if(b&1024)c.onchange=a&1024?vi:null;if(b&2048)c.onfocus=a&2048?vi:null;if(b&4096)c.onblur=a&4096?vi:null;if(b&8192)c.onlosecapture=a&8192?vi:null;if(b&16384)c.onscroll=a&16384?vi:null;if(b&32768)c.onload=a&32768?vi:null;if(b&65536)c.onerror=a&65536?vi:null;if(b&131072)c.onmousewheel=a&131072?vi:null;if(b&262144)c.oncontextmenu=a&262144?vi:null}
var ti=null,ui=null,vi=null;function cj(){return function(d,g){var h=window,e=h.onbeforeunload,f=h.onunload;h.onbeforeunload=function(a){var c,b;try{c=d()}finally{b=e&&e(a)}if(c!=null){return c}if(b!=null){return b}};h.onunload=function(a){try{g()}finally{f&&f(a);h.onresize=null;h.onscroll=null;h.onbeforeunload=null;h.onunload=null}};h.__gwt_initWindowCloseHandler=undefined}.toString()}
function dj(c,b){var d,a;c=rq(c,ub,vb+b);d=(a=$doc.createElement(xb),a.text=c,a);$doc.body.appendChild(d);ej();$doc.body.removeChild(d)}
function ej(){$wnd.__gwt_initWindowCloseHandler(function(){return hi()},function(){gi()})}
function Dm(b,a){dn(b.i,a,true)}
function cn(a){var b,c;b=a[yb]==null?null:String(a[yb]);c=b.indexOf(zq(32));if(c>=0){return b.substr(0,c-0)}return b}
function dn(c,j,a){var b,d,e,f,g,h,i;if(!c){throw new Fp()}j=uq(j);if(j.length==0){throw new rp()}i=c[yb]==null?null:String(c[yb]);e=i.indexOf(j);while(e!=-1){if(e==0||i.charCodeAt(e-1)==32){f=e+j.length;g=i.length;if(f==g||f<g&&i.charCodeAt(f)==32){break}}e=i.indexOf(j,e+1)}if(a){if(e==-1){if(i.length>0){i+=zb}c[yb]=i+j}}else{if(e!=-1){b=uq(i.substr(0,e-0));d=uq(sq(i,e+j.length));if(b.length==0){h=d}else if(d.length==0){h=b}else{h=b+zb+d}c[yb]=h}}}
function Cm(){}
_=Cm.prototype=new Bp();_.tI=7;_.i=null;function Dn(a){if(a.g){throw new up()}a.g=true;a.i.__listener=a;a.l();a.v()}
function En(a){if(!a.g){throw new up()}try{a.w()}finally{a.m();a.i.__listener=null;a.g=false}}
function Fn(a){if(a.h){a.h.x(a)}else if(a.h){throw new up()}}
function ao(c,b){var a;a=c.h;if(!b){if(!!a&&a.g){c.u()}c.h=null}else{if(a){throw new up()}c.h=b;if(b.g){Dn(c)}}}
function bo(){}
function co(){}
function eo(a){}
function fo(){En(this)}
function go(){}
function ho(){}
function mn(){}
_=mn.prototype=new Cm();_.l=bo;_.m=co;_.t=eo;_.u=fo;_.v=go;_.w=ho;_.tI=8;_.g=false;_.h=null;function Cl(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=sn(b);Dn(a)}}
function Dl(){var a,b;for(b=this.r();b.a<b.b.b-1;){a=sn(b);a.u()}}
function El(){}
function Fl(){}
function Al(){}
_=Al.prototype=new mn();_.l=Cl;_.m=Dl;_.v=El;_.w=Fl;_.tI=9;function Aj(c,a,b){Fn(a);wn(c.f,a);b.appendChild(a.i);ao(a,c)}
function Cj(b,c){var a;if(c.h!=b){return false}ao(c,null);a=c.i;a.parentElement.removeChild(a);Bn(b.f,c);return true}
function Dj(){return qn(new on(),this.f)}
function Ej(a){return Cj(this,a)}
function yj(){}
_=yj.prototype=new Al();_.r=Dj;_.x=Ej;_.tI=10;function hj(a,b){Aj(a,b,a.i)}
function jj(b,c){var a;a=Cj(b,c);if(a){kj(c.i)}return a}
function kj(a){a.style[Ab]=lb;a.style[Bb]=lb;a.style[Cb]=lb}
function lj(a){return jj(this,a)}
function gj(){}
_=gj.prototype=new yj();_.x=lj;_.tI=11;function ak(b,a){b.i=a;b.i.tabIndex=0;return b}
function ck(a){zi(a)}
function Fj(){}
_=Fj.prototype=new mn();_.t=ck;_.tI=12;function qj(b,a){b.i=a;b.i.tabIndex=0;return b}
function pj(){}
_=pj.prototype=new Fj();_.tI=13;function sj(a){qj(a,$doc.createElement(Db));uj(a.i);a.i[yb]=Eb;return a}
function uj(b){if(b.type==Fb){try{b.setAttribute(ac,Db)}catch(a){}}}
function oj(){}
_=oj.prototype=new pj();_.tI=14;function wj(a){a.f=vn(new nn());a.e=$doc.createElement(cc);a.d=$doc.createElement(dc);a.e.appendChild(a.d);a.i=a.e;return a}
function vj(){}
_=vj.prototype=new yj();_.tI=15;_.d=null;_.e=null;function dl(a){a.i=$doc.createElement(ec);a.i[yb]=fc;return a}
function gl(a){zi(a)}
function cl(){}
_=cl.prototype=new mn();_.t=gl;_.tI=16;function ek(a){a.i=$doc.createElement(ec);a.i[yb]=gc;return a}
function dk(){}
_=dk.prototype=new cl();_.tI=17;function nk(){nk=dv;lk(new kk(),hc);pk=lk(new kk(),Ab);lk(new kk(),ic);ok=pk}
var ok,pk;function lk(b,a){b.a=a;return b}
function kk(){}
_=kk.prototype=new Bp();_.tI=0;_.a=null;function vk(){vk=dv;tk(new sk(),jc);tk(new sk(),kc);wk=tk(new sk(),Bb)}
var wk;function tk(a,b){a.a=b;return a}
function sk(){}
_=sk.prototype=new Bp();_.tI=0;_.a=null;function Bk(a){wj(a);a.a=(nk(),ok);a.c=(vk(),wk);a.b=$doc.createElement(lc);a.d.appendChild(a.b);a.e[nc]=oc;a.e[pc]=oc;return a}
function Ck(c,d){var b,a;b=(a=$doc.createElement(qc),(a[rc]=c.a.a,undefined),(a.style[sc]=c.c.a,undefined),a);c.b.appendChild(b);Fn(d);wn(c.f,d);b.appendChild(d.i);ao(d,c)}
function Fk(c){var a,b;b=c.i.parentElement;a=Cj(this,c);if(a){this.b.removeChild(b)}return a}
function zk(){}
_=zk.prototype=new vj();_.x=Fk;_.tI=18;_.b=null;function il(b){var a;ak(b,(a=tc,$doc.createElement(a)));b.i[yb]=uc;return b}
function ll(f,c,g,b){var a,d,e;e=f.i;d=$doc.createElement(vc);d.text=c;d.value=g;if(b==-1||b==e.options.length){te(e,d,null)}else{a=e.options[b];te(e,d,a)}}
function nl(a){if(zi(a)==1024){}else{zi(a)}}
function hl(){}
_=hl.prototype=new Fj();_.t=nl;_.tI=19;function rl(a){zt(new yt());a.b=zt(new yt());ul(a,false,(xl(),new vl()));return a}
function tl(d,a){var b,c;for(c=rs(new ps(),d.b);c.a<c.b.b;){b=dh(us(c));if(se(null.B(),a)){return b}}return null}
function ul(d,f){var b,c,e,a;c=$doc.createElement(cc);d.a=$doc.createElement(dc);c.appendChild(d.a);if(!f){e=$doc.createElement(lc);d.a.appendChild(e)}b=(a=$doc.createElement(wc),a.tabIndex=0,a);b.appendChild(c);d.i=b;d.i.setAttribute(yc,zc);Fh(d.i,2225|(d.i.__eventBits||0));d.i[yb]=Ac;if(f){Dm(d,cn(d.i)+Bc+Cc)}else{Dm(d,cn(d.i)+Bc+Dc)}d.i.style[Ec]=Fc;d.i.setAttribute(ad,bd)}
function yl(a){var b;tl(this,a.srcElement);switch(zi(a)){case 1:{so(this.i);break}{break}case 2048:{dh(Dt(this.b,0));break}case 128:{b=a.which||(a.keyCode||0);switch(b){case 37:{dh(Dt(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 39:{dh(Dt(this.b,0))}a.cancelBubble=true;a.returnValue=false;break;case 38:dh(Dt(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 40:dh(Dt(this.b,0));a.cancelBubble=true;a.returnValue=false;break;case 27:a.cancelBubble=true;a.returnValue=false;break;case 13:{dh(Dt(this.b,0))}}break}}}
function zl(){En(this)}
function ol(){}
_=ol.prototype=new mn();_.t=yl;_.u=zl;_.tI=20;_.a=null;function xl(){xl=dv;oo()}
function vl(){}
_=vl.prototype=new Bp();_.tI=0;function im(){im=dv;mm=gu(new fu());nm=ku(new ju())}
function hm(b,a){im();b.f=vn(new nn());b.i=a;Dn(b);return b}
function jm(){var b,a;im();var c,d;for(d=(b=ir(new hr(),rt(nm.a).b.a),bt(new at(),b));ts(d.a.a);){c=xg((a=xg(us(d.a.a),9),a.o()),6);if(c.g){c.u()}}}
function lm(a){im();var b;b=xg(gs(mm,a),5);if(b){return b}if(mm.d==0){ei(new cm())}b=fm(new em());ms(mm,a,b);lu(nm,b);return b}
function bm(){}
_=bm.prototype=new gj();_.tI=21;var mm,nm;function cm(){}
_=cm.prototype=new Bp();_.tI=22;function gm(){gm=dv;im()}
function fm(a){gm();hm(a,$doc.body);return a}
function em(){}
_=em.prototype=new bm();_.tI=23;function ym(b,a){b.i=a;b.i.tabIndex=0;return b}
function Bm(a){var b;b=zi(a);if((b&896)!=0){zi(a)}else if(b==1024){}else{zi(a)}}
function xm(){}
_=xm.prototype=new Fj();_.t=Bm;_.tI=24;function vm(a){ym(a,$doc.createElement(dd));a.i[yb]=ed;return a}
function um(){}
_=um.prototype=new xm();_.tI=25;function gn(a){wj(a);a.a=(nk(),ok);a.b=(vk(),wk);a.e[nc]=oc;a.e[pc]=oc;return a}
function hn(c,e){var b,d,a;d=$doc.createElement(lc);b=(a=$doc.createElement(qc),(a[rc]=c.a.a,undefined),(a.style[sc]=c.b.a,undefined),a);d.appendChild(b);c.d.appendChild(d);Fn(e);wn(c.f,e);b.appendChild(e.i);ao(e,c)}
function ln(c){var a,b;b=c.i.parentElement;a=Cj(this,c);if(a){this.d.removeChild(b.parentElement)}return a}
function en(){}
_=en.prototype=new vj();_.x=ln;_.tI=26;function vn(a){a.a=ng(hh,0,6,4,0);return a}
function wn(a,b){zn(a,b,a.b)}
function yn(b,c){var a;for(a=0;a<b.b;++a){if(b.a[a]==c){return a}}return -1}
function zn(d,e,a){var b,c;if(a<0||a>d.b){throw new xp()}if(d.b==d.a.length){c=ng(hh,0,6,d.a.length*2,0);for(b=0;b<d.a.length;++b){qg(c,b,d.a[b])}d.a=c}++d.b;for(b=d.b-1;b>a;--b){qg(d.a,b,d.a[b-1])}qg(d.a,a,e)}
function An(c,b){var a;if(b<0||b>=c.b){throw new xp()}--c.b;for(a=b;a<c.b;++a){qg(c.a,a,c.a[a+1])}qg(c.a,c.b,null)}
function Bn(b,c){var a;a=yn(b,c);if(a==-1){throw new Cu()}An(b,a)}
function nn(){}
_=nn.prototype=new Bp();_.tI=0;_.a=null;_.b=0;function qn(b,a){b.b=a;return b}
function sn(a){if(a.a>=a.b.b){throw new Cu()}return a.b.a[++a.a]}
function tn(){return this.a<this.b.b-1}
function un(){return sn(this)}
function on(){}
_=on.prototype=new Bp();_.q=tn;_.s=un;_.tI=0;_.a=-1;_.b=null;function ko(){ko=dv;je().indexOf(fd)==0?gd:hd}
function lo(){ko();$wnd.__gwt_transparentImgHandler=function(a){a.onerror=null;pf(a,$moduleBase+id)}}
function oo(){oo=dv;ko();lo()}
function so(b){try{b.focus()}catch(a){if(!b||!b.focus){throw a}}}
function wo(){}
_=wo.prototype=new fg();_.tI=0;function yo(a){a.d=gn(new en());a.c=Bk(new zk());a.h=gn(new en());a.g=il(new hl());a.a=vm(new um());a.e=rl(new ol());a.b=sj(new oj());a.f=dl(new cl());a.i=ek(new dk());a.i.i.innerText=jd;ll(a.g,kd,kd,-1);ll(a.g,ld,ld,-1);a.g.i.size=6;a.g.i.style[md]=od;a.a.i[pd]=qd!=null?qd:lb;a.a.i.style[md]=od;hn(a.h,a.g);hn(a.h,a.a);a.h.i.style[rd]=sd;a.f.i.innerText=td;Ck(a.c,a.b);Ck(a.c,a.e);a.c.i.style[rd]=od;hn(a.d,a.i);hn(a.d,a.h);hn(a.d,a.f);hn(a.d,a.c);a.d.i.style[rd]=od;a.d.i.style[md]=od;hj((im(),lm(null)),a.d);return a}
function xo(){}
_=xo.prototype=new wo();_.tI=0;function Bq(){}
_=Bq.prototype=new Bp();_.tI=3;function pp(){}
_=pp.prototype=new Bq();_.tI=4;function Fp(){}
_=Fp.prototype=new pp();_.tI=5;function cp(){}
_=cp.prototype=new Fp();_.tI=28;function jp(c,a){var b;b=new fp();return b}
function fp(){}
_=fp.prototype=new Bp();_.tI=0;function gp(){}
_=gp.prototype=new Fp();_.tI=31;function rp(){}
_=rp.prototype=new Fp();_.tI=32;function up(){}
_=up.prototype=new Fp();_.tI=33;function yp(b,a){return b}
function xp(){}
_=xp.prototype=new Fp();_.tI=34;function nq(b,a){if(!(a!=null&&wg(a.tI,1))){return false}return String(b)==a}
function rq(c,a,b){b=wq(b);return c.replace(RegExp(a),b)}
function sq(b,a){return b.substr(a,b.length-a)}
function uq(c){if(c.length==0||c[0]>zb&&c[c.length-1]>zb){return c}var a=c.replace(/^(\s*)/,lb);var b=a.replace(/\s*$/,lb);return b}
function wq(b){var a;a=0;while(0<=(a=b.indexOf(ud,a))){if(b.charCodeAt(a+1)==36){b=b.substr(0,a-0)+vd+sq(b,++a)}else{b=b.substr(0,a-0)+sq(b,++a)}}return b}
function xq(a){return nq(this,a)}
function zq(a){var b,c;if(a>=65536){b=55296+(a-65536>>10&1023)&65535;c=56320+(a-65536&1023)&65535;return String.fromCharCode(b)+String.fromCharCode(c)}else{return String.fromCharCode(a&65535)}}
function Aq(){return jq(this)}
_=String.prototype;_.eQ=xq;_.hC=Aq;_.tI=2;function eq(){eq=dv;fq={};iq={}}
function gq(e){var a,b,c,d;d=e.length;c=d<64?1:~~(d/32);a=0;for(b=0;b<d;b+=c){a<<=1;a+=e.charCodeAt(b)}a|=0;return a}
function jq(c){eq();var a=wd+c;var b=iq[a];if(b!=null){return b}b=fq[a];if(b==null){b=gq(c)}kq();return iq[a]=b}
function kq(){if(hq==256){fq=iq;iq={};hq=0}++hq}
var fq,hq=0,iq;function Dq(){}
_=Dq.prototype=new Fp();_.tI=35;function br(a,b){var c;while(a.q()){c=a.s();if(b==null?c==null:ce(b,c)){return a}}return null}
function dr(a){throw new Dq()}
function er(b){var a;a=br(this.r(),b);return !!a}
function ar(){}
_=ar.prototype=new Bp();_.j=dr;_.k=er;_.tI=0;function rt(b){var a;a=mr(new gr(),b);return gt(new Fs(),b,a)}
function st(c){var a,b,d,e,f;if((c==null?null:c)===this){return true}if(!(c!=null&&wg(c.tI,11))){return false}e=xg(c,11);if(xg(this,11).d!=e.d){return false}for(b=ir(new hr(),mr(new gr(),e).a);ts(b.a);){a=xg(us(b.a),9);d=a.o();f=a.p();if(!(d==null?xg(this,11).c:d!=null&&wg(d.tI,1)?is(xg(this,11),xg(d,1)):hs(xg(this,11),d,~~ee(d)))){return false}if(!cv(f,d==null?xg(this,11).b:d!=null&&wg(d.tI,1)?xg(this,11).e[wd+xg(d,1)]:es(xg(this,11),d,~~ee(d)))){return false}}return true}
function tt(){var a,b,c;c=0;for(b=ir(new hr(),mr(new gr(),xg(this,11)).a);ts(b.a);){a=xg(us(b.a),9);c+=a.hC();c=~~c}return c}
function Es(){}
_=Es.prototype=new Bp();_.eQ=st;_.hC=tt;_.tI=0;function Fr(g,c){var e=g.a;for(var d in e){if(d==parseInt(d)){var a=e[d];for(var f=0,b=a.length;f<b;++f){c.j(a[f])}}}}
function as(e,a){var d=e.e;for(var c in d){if(c.charCodeAt(0)==58){var b=Dr(e,c.substring(1));a.j(b)}}}
function ds(b,a){return a==null?b.c:a!=null&&wg(a.tI,1)?is(b,xg(a,1)):hs(b,a,~~ee(a))}
function gs(b,a){return a==null?b.b:a!=null&&wg(a.tI,1)?b.e[wd+xg(a,1)]:es(b,a,~~ee(a))}
function es(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return c.p()}}}return null}
function hs(h,g,e){var a=h.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(h.n(g,d)){return true}}}return false}
function is(b,a){return wd+a in b.e}
function ms(b,a,c){return a==null?ks(b,c):a!=null&&wg(a.tI,1)?ls(b,xg(a,1),c):js(b,a,c,~~ee(a))}
function js(i,g,j,e){var a=i.a[e];if(a){for(var f=0,b=a.length;f<b;++f){var c=a[f];var d=c.o();if(i.n(g,d)){var h=c.p();c.y(j);return h}}}else{a=i.a[e]=[]}var c=vu(new uu(),g,j);a.push(c);++i.d;return null}
function ks(b,c){var a;a=b.b;b.b=c;if(!b.c){b.c=true;++b.d}return a}
function ls(d,a,e){var b,c=d.e;a=wd+a;if(a in c){b=c[a]}else{++d.d}c[a]=e;return b}
function ns(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ce(a,b)}
function fr(){}
_=fr.prototype=new Es();_.n=ns;_.tI=0;_.a=null;_.b=null;_.c=false;_.d=0;_.e=null;function wt(b){var a,c,d;if((b==null?null:b)===this){return true}if(!(b!=null&&wg(b.tI,12))){return false}c=xg(b,12);if(c.z()!=this.z()){return false}for(a=c.r();a.q();){d=a.s();if(!this.k(d)){return false}}return true}
function xt(){var a,b,c;a=0;for(b=this.r();b.q();){c=b.s();if(c!=null){a+=ee(c);a=~~a}}return a}
function ut(){}
_=ut.prototype=new ar();_.eQ=wt;_.hC=xt;_.tI=36;function mr(b,a){b.a=a;return b}
function or(d,c){var a,b,e;if(c!=null&&wg(c.tI,9)){a=xg(c,9);b=a.o();if(ds(d.a,b)){e=gs(d.a,b);return iu(a.p(),e)}}return false}
function pr(a){return or(this,a)}
function qr(){return ir(new hr(),this.a)}
function rr(){return this.a.d}
function gr(){}
_=gr.prototype=new ut();_.k=pr;_.r=qr;_.z=rr;_.tI=37;_.a=null;function ir(c,b){var a;c.b=b;a=zt(new yt());if(c.b.c){Bt(a,tr(new sr(),c.b))}as(c.b,a);Fr(c.b,a);c.a=rs(new ps(),a);return c}
function kr(){return ts(this.a)}
function lr(){return xg(us(this.a),9)}
function hr(){}
_=hr.prototype=new Bp();_.q=kr;_.s=lr;_.tI=0;_.a=null;_.b=null;function ot(b){var a;if(b!=null&&wg(b.tI,9)){a=xg(b,9);if(cv(this.o(),a.o())&&cv(this.p(),a.p())){return true}}return false}
function pt(){var a,b;a=0;b=0;if(this.o()!=null){a=ee(this.o())}if(this.p()!=null){b=ee(this.p())}return a^b}
function mt(){}
_=mt.prototype=new Bp();_.eQ=ot;_.hC=pt;_.tI=38;function tr(b,a){b.a=a;return b}
function vr(){return null}
function wr(){return this.a.b}
function xr(a){return ks(this.a,a)}
function sr(){}
_=sr.prototype=new mt();_.o=vr;_.p=wr;_.y=xr;_.tI=39;_.a=null;function zr(c,a,b){c.b=b;c.a=a;return c}
function Br(){return this.a}
function Cr(){return this.b.e[wd+this.a]}
function Dr(b,a){return zr(new yr(),a,b)}
function Er(a){return ls(this.b,this.a,a)}
function yr(){}
_=yr.prototype=new mt();_.o=Br;_.p=Cr;_.y=Er;_.tI=40;_.a=null;_.b=null;function ys(a){At(this,this.z(),a);return true}
function zs(a,b){if(a<0||a>=b){Cs(a,b)}}
function As(e){var a,b,c,d,f;if((e==null?null:e)===this){return true}if(!(e!=null&&wg(e.tI,10))){return false}f=xg(e,10);if(this.z()!=f.b){return false}c=rs(new ps(),this);d=rs(new ps(),f);while(c.a<c.b.b){a=us(c);b=us(d);if(!(a==null?b==null:ce(a,b))){return false}}return true}
function Bs(){var a,b,c;b=1;a=rs(new ps(),this);while(a.a<a.b.b){c=us(a);b=31*b+(c==null?0:ee(c));b=~~b}return b}
function Cs(a,b){throw yp(new xp(),xd+a+o+b)}
function Ds(){return rs(new ps(),this)}
function os(){}
_=os.prototype=new ar();_.j=ys;_.eQ=As;_.hC=Bs;_.r=Ds;_.tI=0;function rs(b,a){b.b=a;return b}
function ts(a){return a.a<a.b.b}
function us(a){if(a.a>=a.b.b){throw new Cu()}return Dt(a.b,a.a++)}
function vs(){return this.a<this.b.b}
function ws(){return us(this)}
function ps(){}
_=ps.prototype=new Bp();_.q=vs;_.s=ws;_.tI=0;_.a=0;_.b=null;function gt(b,a,c){b.a=a;b.b=c;return b}
function jt(a){return ds(this.a,a)}
function kt(){var a;return a=ir(new hr(),this.b.a),bt(new at(),a)}
function lt(){return this.b.a.d}
function Fs(){}
_=Fs.prototype=new ut();_.k=jt;_.r=kt;_.z=lt;_.tI=41;_.a=null;_.b=null;function bt(a,b){a.a=b;return a}
function et(){return ts(this.a.a)}
function ft(){var a;return a=xg(us(this.a.a),9),a.o()}
function at(){}
_=at.prototype=new Bp();_.q=et;_.s=ft;_.tI=0;_.a=null;function zt(a){a.a=ng(ih,0,0,0,0);a.b=0;return a}
function Bt(b,a){qg(b.a,b.b++,a);return true}
function At(c,a,b){if(a<0||a>c.b){Cs(a,c.b)}c.a.splice(a,0,b);++c.b}
function Dt(b,a){zs(a,b.b);return b.a[a]}
function Et(c,b,a){for(;a<c.b;++a){if(cv(b,c.a[a])){return a}}return -1}
function Ft(a){return qg(this.a,this.b++,a),true}
function au(a){return Et(this,a,0)!=-1}
function bu(){return this.b}
function yt(){}
_=yt.prototype=new os();_.j=Ft;_.k=au;_.z=bu;_.tI=42;_.a=null;_.b=0;function gu(a){a.a=[];a.e={};a.c=false;a.b=null;a.d=0;return a}
function iu(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ce(a,b)}
function fu(){}
_=fu.prototype=new fr();_.tI=43;function ku(a){a.a=gu(new fu());return a}
function lu(c,a){var b;b=ms(c.a,a,c);return b==null}
function nu(b){var a;return a=ms(this.a,b,this),a==null}
function ou(a){return ds(this.a,a)}
function pu(){var a;return a=ir(new hr(),rt(this.a).b.a),bt(new at(),a)}
function qu(){return this.a.d}
function ju(){}
_=ju.prototype=new ut();_.j=nu;_.k=ou;_.r=pu;_.z=qu;_.tI=44;_.a=null;function vu(b,a,c){b.a=a;b.b=c;return b}
function xu(){return this.a}
function yu(){return this.b}
function Au(b){var a;a=this.b;this.b=b;return a}
function uu(){}
_=uu.prototype=new mt();_.o=xu;_.p=yu;_.y=Au;_.tI=45;_.a=null;_.b=null;function Cu(){}
_=Cu.prototype=new Fp();_.tI=46;function cv(a,b){return (a==null?null:a)===(b==null?null:b)||a!=null&&ce(a,b)}
function ap(){!!$stats&&$stats({moduleName:$moduleName,subSystem:p,evtGroup:q,millis:(new Date()).getTime(),type:r,className:s});yo(new xo())}
function gwtOnLoad(b,d,c){$moduleName=d;$moduleBase=c;if(b)try{ap()}catch(a){b(d)}else{ap()}}
function dv(){}
var hh=jp(t,u),ih=jp(v,w);$stats && $stats({moduleName:'com.streamspin.StreamSpinClient',subSystem:'startup',evtGroup:'moduleStartup',millis:(new Date()).getTime(),type:'moduleEvalEnd'});if (com_streamspin_StreamSpinClient) {  var __gwt_initHandlers = com_streamspin_StreamSpinClient.__gwt_initHandlers;  com_streamspin_StreamSpinClient.onScriptLoad(gwtOnLoad);}})();