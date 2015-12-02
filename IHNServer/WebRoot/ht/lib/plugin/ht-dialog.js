!function(C,_){"use strict";var T="ht",p=C[T],l="px",x="left",c="top",X="bottom",e="right",o="innerHTML",q="className",a="",K="width",J="height",w="string",A="position",b="absolute",k="0",j="opacity",P="background",f=p.Default,Y=f.getInternal(),z=p.Color,G=f.animate,R=f.isTouchable,t=null,I=(Math.sqrt,C.parseInt),Q=C.setTimeout,N=(Math.round,z.titleIconBackground),v=function(I){return typeof I===w||I instanceof String},i=function(){return document},$=function(K){return i().createElement(K)},r=function(){var r=$("div");return r.tabIndex=-1,r.style.outline="none",r},U=function(){return $("canvas")},O=function(T,J){h(T,"-webkit-transform",J),h(T,"-ms-transform",J),h(T,"transform",J)},h=function(A,r,J){A.style.setProperty(r,J,t)},V=function(k,e,g){f.def(p.widget[k],e,g)},F=function(G,e){G.appendChild(e)},M=function(g,r){g.removeChild(r)},n=function(){return i().body},B=function(){return i().documentElement},W=function(){return B().clientWidth},L=function(){return B().clientHeight},y=function(w,q,M,y){w.addEventListener(q,M,!!y)},D=function(t){var P=t.touches[0];return P?P:t.changedTouches[0]};Y.addMethod(f,{dialogCloseIcon:{width:100,height:100,comps:[{type:"shape",points:[10,10,90,90],segments:[1,2],borderWidth:8,borderColor:N},{type:"shape",points:[90,10,10,90],segments:[1,2],borderWidth:8,borderColor:N}]},dialogMaximizeIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,15,80,75],borderWidth:6,borderColor:N},{type:"rect",rect:[10,10,80,20],background:N}]},dialogRestoreIcon:{width:100,height:100,comps:[{type:"rect",rect:[10,34,56,56],borderWidth:8,borderColor:N},{type:"rect",rect:[10,34,56,14],background:N},{type:"rect",rect:[34,10,56,14],background:N},{type:"rect",rect:[82,10,8,56],background:N},{type:"rect",rect:[66,62,24,8],background:N}]},dialogTitleLabelColor:f.labelSelectColor,dialogTitleLabelFont:(R?"18":"14")+"px arial, sans-serif",dialogContentLabelFont:f.labelFont,dialogTitleBackground:z.titleBackground,dialogHeaderBackground:z.headerBackground,dialogButtonBackground:"#1ABC9C",dialogButtonSelectBackground:"#16A085",dialogButtonLabelColor:"#fff"},!0);var H=function(T){var S=this;S.$1d=T,S.addListeners()};f.def(H,_,{ms_listener:1,getView:function(){return this.$1d.getView()},clear:function(){delete this.$2d,delete this.$3d,delete this.$4d,delete this.$5d},handle_touchstart:function(x){var K=this,U=K.$1d,L=U.$6d,G=U._config,h=U.$7d,m=x,d=x.target;if(h.contains(d)||f.preventDefault(x),f.isLeftButton(x)){R&&(m=D(x));var Y=K.$8d={x:m.pageX,y:m.pageY};K.$9d={x:Y.x,y:Y.y},!G.maximized&&G.draggable&&L.contains(d)&&(K.$4d=!0,f.startDragging(K,x)),K.handle_mousemove(x)&&(K.$2d=!0,f.startDragging(K,x)),h.contains(x.target)||U.$41d.focus()}},handle_mousedown:function(D){this.handle_touchstart(D)},handle_touchend:function(T){if(f.isLeftButton(T)&&!this.$5d&&!this.$3d){var L=this,U=L.$1d,J=T.target,j=U._config,b=U.$18d,Q=U.$16d;for(j.closable&&b.contains(J)&&U.hide(),j.maximizable&&Q.contains(J)&&(j.maximized?U.restore():U.maximize());J&&(J.className||"").indexOf("dialog-button")<0;)J=J.parentNode;J&&J.buttonItem&&U.action&&U.action(J.buttonItem,T),delete L.$8d,delete L.$9d}},handle_mouseup:function(v){this.handle_touchend(v)},handleWindowTouchEnd:function(n){var I=this,g=I.$1d,o=g.$10d;I.$2d&&I.$3d?o.fire({kind:"endResize",target:g,originEvent:n}):I.$4d&&I.$5d&&o.fire({kind:"endMove",target:g,originEvent:n}),this.clear()},handleWindowMouseUp:function(v){this.handleWindowTouchEnd(v)},handle_mousemove:function(M){var k=this.$1d._config;if(k.maximized)return!1;if("w"!==k.resizeMode&&"h"!==k.resizeMode&&"wh"!==k.resizeMode)return!1;var K=this,o=K.getView(),u=o.querySelector(".resize-area"),w=u.getBoundingClientRect(),$={x:w.left,y:w.top,width:w.width,height:w.height};M=R?D(M):M;var N=M.clientX,v=M.clientY,j={x:N,y:v};return f.containsPoint($,j)?(h(o,"cursor","nwse-resize"),!0):(h(o,"cursor",a),void 0)},handleWindowTouchMove:function(F){F.preventDefault();var e=F;R&&(e=D(F));var C=this,V=C.$8d,i=C.$9d;if(!(i.x==V.x&&i.y==V.y&&f.getDistance(i,{x:e.pageX,y:e.pageY})<=1)){var p=C.$1d,N=p._config,H=p.$21d,b=N.resizeMode||"wh",Y=e.pageX-V.x,s=e.pageY-V.y;if(C.$2d){var m=H.offsetWidth,r=H.offsetHeight,u=m+Y,G=r+s;if(u=Math.max(u,50),G=Math.max(G,50),"center"===N.position||N.position==t){var q={},X=H.getBoundingClientRect();q.x=X.left,q.y=X.top,N.position=q}"w"===b?(p.setSize(u,r),V.x+=u-m):"h"===b?(p.setSize(m,G),V.y+=G-r):"wh"===b&&(p.setSize(u,G),V.x+=u-m,V.y+=G-r),C.$3d?p.$10d.fire({kind:"betweenResize",target:p,originEvent:F}):(C.$3d=!0,p.$10d.fire({kind:"beginResize",target:p,originEvent:F}))}else if(C.$4d){var Z=H.getBoundingClientRect(),P=Z.width,S=Z.height,A=W(),E=L(),w=I(H.style.left)||0,T=I(H.style.top)||0,$=w+Y,K=T+s;$+P>A&&($=A-P),K+S>E&&(K=E-S),0>$&&($=0),0>K&&(K=0);var y=$-w,_=K-T;h(H,x,$+l),h(H,c,K+l),V.x+=y,V.y+=_,N.position={x:$,y:K},C.$5d?p.$10d.fire({kind:"betweenMove",target:p,originEvent:F}):(C.$5d=!0,p.$10d.fire({kind:"beginMove",target:p,originEvent:F}))}}},handleWindowMouseMove:function(K){this.handleWindowTouchMove(K)},handleWindowResize:function(){var j=this,Q=j,N=Q._config,o=Q.$21d,e=W(),u=L(),Z=N.width,R=N.height,O=N.position||"center";N.maximized?(h(o,K,e+l),h(o,J,u+l),h(o,c,k),h(o,x,k)):(h(o,K,Z+l),h(o,J,R+l),"center"===O?(h(o,x,(e-Z)/2+l),h(o,c,(u-R)/2+l)):(h(o,x,O.x+l),h(o,c,O.y+l)))},handle_mousewheel:function(J){J.stopPropagation()},handle_DOMMouseScroll:function(t){t.stopPropagation()}}),p.widget.Dialog=function(y){var X=this,w=X._view=r();w[q]="ht-widget-dialog",h(w,A,b),f.baseZIndex!=t&&h(w,"z-index",f.baseZIndex+"");var E=X.$11d=new H(X);X.bindingHandleWindowResize=E.handleWindowResize.bind(X),X.$10d=new p.Notifier,y&&X.setConfig(y)},V("Dialog",_,{ms_v:1,setTitle:function(v){this._config.title=v,this.getView().querySelector(".dialog-container-title span").innerHTML=v},$31d:function(){var p=this,L=p.$6d=r(),Z=p._config,d=p.$12d=p.$13d();L[q]="dialog-container-title",h(L,"cursor","default"),h(L,"white-space","nowrap"),h(L,"overflow","hidden"),h(L,"font",f.dialogTitleLabelFont),h(L,P,Z.titleBackground||f.dialogTitleBackground),h(L,"color",Z.titleColor||f.dialogTitleLabelColor);var W=$("span"),A=p.$25d();if(Z.titleAlign&&h(L,"text-align",Z.titleAlign),Z.titleIcon){var Q=p.$14d=p.$15d();F(L,Q)}if(W[o]=Z.title,F(L,W),Z.maximizable){var v=p.$16d=p.$17d();F(d,v)}if(Z.closable){var i=p.$18d=p.$19d();F(d,i)}return F(L,d),h(L,"display","block"),h(L,"line-height",A+l),L},$13d:function(){var d=r();return h(d,A,b),h(d,x,k),h(d,e,5+l),h(d,c,k),h(d,X,k),h(d,"text-align",e),h(d,"white-space","nowrap"),d[q]="dialog-title-controls",d},$20d:function(){var X=this.$21d=r(),s=this._config,M=s.borderWidth;return h(X,A,"fixed"),h(X,"box-shadow","rgba(0, 0, 0, 0.2) 0px 5px 10px 0px"),h(X,"padding",k+" "+M+l+" "+M+l+" "+M+l),h(X,"box-sizing","border-box"),h(X,"-moz-box-sizing","border-box"),X[q]="dialog-container",h(X,P,s.titleBackground||f.dialogTitleBackground),X},$22d:function(){var L,a=this,P=a._config,z=a.$7d=r(),H=P.content,R=0,O=P.contentPadding||0;P.buttons!=t&&P.buttons.length>0&&(R=32),v(H)?z[o]=H:H.getView?(L=H.getView(),F(z,L)):(L=H,F(z,L)),h(z,A,b),h(z,"font",f.dialogContentLabelFont),F(n(),z);var u=z.offsetWidth+1,V=z.offsetHeight,W=a.$25d();return P.width==t&&(P.width=u+10+2*O),P.height==t&&(P.height=V+W+R+5+2*O),M(n(),z),L&&(h(L,"box-sizing","border-box"),h(L,"-moz-box-sizing","border-box"),h(L,K,"100%"),h(L,J,"100%")),z[q]="dialog-content",h(z,c,W+O+l),h(z,X,R+O+l),h(z,x,O+l),h(z,e,O+l),h(z,"overflow","hidden"),z},$23d:function(){var $=this.$41d=r();return $[q]="dialog-overlay",h($,K,"100%"),h($,J,"100%"),h($,A,"fixed"),h($,c,k),h($,x,k),h($,P,"rgba(235, 235, 235, 0.7)"),$},_config:t,setSize:function(I,x){var H=this,X=H._config;X&&(X.width=I,X.height=x,H.isShowing()&&(H.bindingHandleWindowResize(),H.iv()))},getConfig:function(){return this._config},$24d:function(){var s=this._config,w=s.titleIconSize||16;return R&&(w*=1.2),w},$25d:function(){var S=this._config,g=S.titleHeight||f.widgetTitleHeight;return g},$26d:function(_){h(_,"cursor","pointer"),h(_,"display","inline-block"),h(_,"margin-right",(R?8:4)+l),h(_,"vertical-align",c)},$27d:function(){var B=this.$30d=r(),v=10;return R&&(v=20),h(B,K,v+l),h(B,J,v+l),h(B,A,b),h(B,X,k),h(B,e,k),B[q]="resize-area",B},$15d:function(){var O=this,m=U();m[q]="dialog-title-control dialog-title-control-icon";var $=O.$25d(),y=O.$24d();return O.$26d(m),Y.setCanvas(m,y,$),m},$17d:function(){var i=U();i[q]="dialog-title-control dialog-title-control-maximize";var v=this.$25d(),E=this.$24d();return this.$26d(i),Y.setCanvas(i,E,v),i},$19d:function(){var C=U();C[q]="dialog-title-control dialog-title-control-close";var u=this.$25d(),h=this.$24d();return this.$26d(C),Y.setCanvas(C,h,u),C},$28d:function(){var g=r();return h(g,P,"white"),h(g,K,"100%"),h(g,J,"100%"),h(g,A,"relative"),g},$29d:function(){var D=this,n=r();h(n,"line-height",32+l),h(n,A,b),h(n,X,k),h(n,x,k),h(n,"white-space","nowrap"),h(n,"overflow","hidden"),h(n,e,k),h(n,P,f.dialogHeaderBackground),n[q]="dialog-container-buttons";var S=this._config,W=S.buttonsAlign||e,J=0;return h(n,"text-align",W),D.$42d=[],S.buttons.forEach(function(B){var z=new p.widget.Button,G=z.getView();G[q]="dialog-button",G.buttonItem=B,D.$42d.push(z),z.setBorderColor(t),z.setBackground(f.dialogButtonBackground),z.setSelectBackground(f.dialogButtonSelectBackground),z.setLabelColor(f.dialogButtonLabelColor),h(G,A,"static"),h(G,"display","inline-block"),h(G,"text-align",x),h(G,"height",24+l);var d=R?10:5;W===x||W===e?h(G,"margin-"+W,d+l):0===J||h(G,"margin-"+x,d+l),h(G,"vertical-align","middle");var w=f.getTextSize(z.getLabelFont(),B.label).width+10;z.onClicked=function(h){B.action&&B.action.call(D,B,h)},z.setLabel(B.label),h(G,K,w+l),F(n,z.getView()),J++}),n},setConfig:function(p){if(p){var K=this,W=K._view;K._config=p,K.action=p.action,W[o]=a,p.borderWidth==t&&(p.borderWidth=5);var X=K.$23d(),L=K.$28d(),R=K.$31d(),n=K.$22d(),z=K.$20d(),P=K.$30d=K.$27d();if(F(W,X),F(W,z),F(z,L),F(L,R),F(L,n),p.buttons!=t&&p.buttons.length>0){var i=K.$29d();F(L,i)}F(z,P),p.maximized?(p.maximized=!1,K.bindingHandleWindowResize(),K.maximize(!0)):K.bindingHandleWindowResize(),K.isShowing()&&K.iv()}},hide:function(){var S=this,b=S.$21d,x=S.$41d,H=S._view;H[q]="ht-widget-dialog",G(b).duration(200).scale(.7).set(j,k).end(function(){S.onHidden&&S.onHidden(),M(n(),H),S.$10d.fire({kind:"hide",target:S})}),G(x).duration(200).set(j,k).end(),C.removeEventListener("resize",S.bindingHandleWindowResize)},isShowing:function(){return n().contains(this._view)},$32d:function(){var R=this,I=R._config,X=R.$21d;O(X,a),R.iv(),I.maximized?R.$10d.fire({kind:"maximize",target:R}):R.$10d.fire({kind:"restore",target:R})},maximize:function(t){var Q=this,h=Q.$21d,z=Q._config;if(!z.maximized){z.maximized=!0,Q.$33d(),Q.$16d[q]="dialog-title-control dialog-title-control-minimize";var p=W(),F=L(),T=z.width,X=z.height,e=I(h.style.left)||0,Z=I(h.style.top)||0;Q.$36d=T,Q.$37d=X,Q.$34d=e,Q.$35d=Z;var O=t?0:200;G(h).duration(O).set(x,k).set(c,k).set(K,p+l).set(J,F+l).end(function(){Q.$32d()})}},restore:function(){var i=this,R=i.$34d,F=i.$35d,e=i.$36d,f=i.$37d,a=i._config;if(a.maximized&&(a.maximized=!1,i.$33d(),i.$16d[q]="dialog-title-control dialog-title-control-maximize",i.isShowing()&&R!=t&&F!=t&&e!=t&&f!=t)){var S=i.$21d;G(S).duration(200).set(x,R+l).set(c,F+l).set(K,e+l).set(J,f+l).end(function(){i.$32d()})}delete i.$34d,delete i.$35d,delete i.$36d,delete i.$37d},show:function(){var A=this,V=A._view,x=A._config,Y=A.$21d,s=A.$41d;x&&x.zIndex!=t&&h(V,"z-index",x.zIndex+a),F(n(),V),O(Y,"scale(0.7)"),h(Y,j,k),A.iv(),A.validate(),A._view[q]+=" dialog-show",Q(function(){G(Y).duration(200).scale(1).set(j,"1").end(function(){h(Y,K,Y.clientWidth+l),h(Y,J,Y.clientHeight+l),A.onShown&&A.onShown(),A.$10d.fire({kind:"show",target:A})}),G(s).duration(200).set(j,"1").end(),y(C,"resize",A.bindingHandleWindowResize)},30)},addEventListener:function(t,p,h){this.$10d.add(t,p,h)},removeEventListener:function(e,t){this.$10d.remove(e,t)},$38d:function(U,e,b,p){var j=Y.initContext(U);Y.translateAndScale(j,0,0,1),j.clearRect(0,0,b,b);var d=(b-p)/2;f.drawStretchImage(j,f.getImage(e),"fill",0,d,p,p),j.restore()},$33d:function(){var X=this,Z=X._config,C=X.$16d,$=Z.maximized?f.dialogRestoreIcon:f.dialogMaximizeIcon;if(C&&$){var i=X.$25d(),c=X.$24d();X.$38d(C,f.getImage($),i,c)}},$39d:function(){var u=this,Y=u._config,k=u.$14d,e=Y.titleIcon;if(k&&e){var H=u.$25d(),I=u.$24d();u.$38d(k,f.getImage(e),H,I)}},$40d:function(){var z=this,E=z.$18d,i=f.dialogCloseIcon;if(E&&i){var m=z.$25d(),w=z.$24d();z.$38d(E,f.getImage(i),m,w)}},invalidate:function(Q){var b=this,H=b.$42d;b._68I||(b._68I=1,f.callLater(b.validate,b,t,Q),b.onInvalidated&&b.onInvalidated(),b._41O("invalidate"));var h=b._config.content;h.invalidate&&h.invalidate(),H&&H.forEach(function(Z){Z.iv()})},validateImpl:function(){var D=this;D.$40d(),D.$33d(),D.$39d()}})}(this,Object);