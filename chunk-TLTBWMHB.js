import{C as xe,G as Ce,H as ye,I as J,J as K,M as U,O as W,R as ve,U as Te,V as z,_ as R,b as H,d as L,e as _e,f as A,g as X,i as Y,p as he}from"./chunk-HWK54FYX.js";import{Aa as O,Ab as ne,Ac as re,Bb as ie,Cb as j,Cc as le,Db as E,Eb as $,Ec as ce,Fb as l,Gb as V,Hb as S,Ib as h,Kb as x,La as de,Lb as C,Pa as a,Pb as ue,Qb as d,Rb as N,Sb as f,Xb as q,Y as G,Zb as ae,_b as fe,ab as w,ca as M,cc as g,dc as u,eb as Q,fc as _,gb as p,ka as v,la as T,mb as B,na as P,nb as c,nc as se,rb as ge,sb as k,ua as me,wc as I,xb as s,yb as r,zb as y,zc as be}from"./chunk-QKZ3VD4W.js";Y();Y();I();I();var Re=["header"],Me=["title"],Pe=["subtitle"],Se=["content"],ze=["footer"],Fe=["*",[["p-header"]],[["p-footer"]]],Be=["*","p-header","p-footer"];function Ne(e,n){e&1&&j(0)}function De(e,n){if(e&1&&(s(0,"div",8),S(1,1),p(2,Ne,1,0,"ng-container",6),r()),e&2){let t=l();a(2),c("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Ge(e,n){if(e&1&&(ne(0),d(1),ie()),e&2){let t=l(2);a(),N(t.header)}}function Oe(e,n){e&1&&j(0)}function Qe(e,n){if(e&1&&(s(0,"div",9),p(1,Ge,2,1,"ng-container",10)(2,Oe,1,0,"ng-container",6),r()),e&2){let t=l();a(),c("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),a(),c("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Ve(e,n){if(e&1&&(ne(0),d(1),ie()),e&2){let t=l(2);a(),N(t.subheader)}}function qe(e,n){e&1&&j(0)}function He(e,n){if(e&1&&(s(0,"div",11),p(1,Ve,2,1,"ng-container",10)(2,qe,1,0,"ng-container",6),r()),e&2){let t=l();a(),c("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),a(),c("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Le(e,n){e&1&&j(0)}function Ae(e,n){e&1&&j(0)}function Xe(e,n){if(e&1&&(s(0,"div",12),S(1,2),p(2,Ae,1,0,"ng-container",6),r()),e&2){let t=l();a(2),c("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Ye=({dt:e})=>`
.p-card {
    background: ${e("card.background")};
    color: ${e("card.color")};
    box-shadow: ${e("card.shadow")};
    border-radius: ${e("card.border.radius")};
    display: flex;
    flex-direction: column;
}

.p-card-caption {
    display: flex;
    flex-direction: column;
    gap: ${e("card.caption.gap")};
}

.p-card-body {
    padding: ${e("card.body.padding")};
    display: flex;
    flex-direction: column;
    gap: ${e("card.body.gap")};
}

.p-card-title {
    font-size: ${e("card.title.font.size")};
    font-weight: ${e("card.title.font.weight")};
}

.p-card-subtitle {
    color: ${e("card.subtitle.color")};
}
`,Je={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},we=(()=>{class e extends U{name="card";theme=Ye;classes=Je;static \u0275fac=(()=>{let t;return function(o){return(t||(t=P(e)))(o||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var F=(()=>{class e extends W{header;subheader;set style(t){xe(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=O(null);_componentStyle=M(we);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=P(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-card"]],contentQueries:function(i,o,b){if(i&1&&(h(b,Ce,5),h(b,ye,5),h(b,Re,4),h(b,Me,4),h(b,Pe,4),h(b,Se,4),h(b,ze,4),h(b,J,4)),i&2){let m;x(m=C())&&(o.headerFacet=m.first),x(m=C())&&(o.footerFacet=m.first),x(m=C())&&(o.headerTemplate=m.first),x(m=C())&&(o.titleTemplate=m.first),x(m=C())&&(o.subtitleTemplate=m.first),x(m=C())&&(o.contentTemplate=m.first),x(m=C())&&(o.footerTemplate=m.first),x(m=C())&&(o.templates=m)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[q([we]),Q],ngContentSelectors:Be,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,o){i&1&&(V(Fe),s(0,"div",0),p(1,De,3,1,"div",1),s(2,"div",2),p(3,Qe,3,2,"div",3)(4,He,3,2,"div",4),s(5,"div",5),S(6),p(7,Le,1,0,"ng-container",6),r(),p(8,Xe,3,1,"div",7),r()()),i&2&&(ge(o.styleClass),c("ngClass","p-card p-component")("ngStyle",o._style()),B("data-pc-name","card"),a(),c("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),a(2),c("ngIf",o.header||o.titleTemplate||o._titleTemplate),a(),c("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),a(3),c("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),a(),c("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[X,H,L,A,_e,K],encapsulation:2,changeDetection:0})}return e})();I();function Ke(e,n){e&1&&(s(0,"div",5),y(1,"img",6),r())}function Ue(e,n){if(e&1&&(d(0),g(1,"translate")),e&2){let t=l();f(" ",u(1,1,t.translateRoot+"title")," ")}}function We(e,n){if(e&1&&(s(0,"span",7),d(1),g(2,"translate"),r()),e&2){let t=l();a(),f(" ",u(2,1,t.translateRoot+"subtitle")," ")}}function Ze(e,n){if(e&1){let t=E();s(0,"p-button",8),g(1,"translate"),$("onClick",function(){v(t);let o=l();return T(o.redirectToGithub())}),r()}if(e&2){let t=l();c("label",u(1,1,t.translateRoot+"github-btn"))}}var Z=class e{translateRoot="projects.cards.fx-exchange.";redirectToGithub=()=>window.open("https://github.com/cezeta1/fx-exchange-demo","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=w({type:e,selectors:[["fx-exchange-project-card"]],decls:12,vars:3,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px]
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","overflow-hidden","border-b","border-toolbar-border-color"],["src","/assets/images/fx.jpeg","alt","Card",1,"object-cover","w-full","h-full","!rounded-t-xl"],[1,"text-muted","text-sm"],["outlined","","styleClass","w-full","icon","pi pi-github","severity","secondary",3,"onClick","label"]],template:function(t,i){t&1&&(s(0,"p-card",4),p(1,Ke,2,0,"ng-template",null,0,_)(3,Ue,2,3,"ng-template",null,1,_)(5,We,3,3,"ng-template",null,2,_),s(7,"p"),d(8),g(9,"translate"),r(),p(10,Ze,2,3,"ng-template",null,3,_),r()),t&2&&(a(8),f(" ",u(9,1,i.translateRoot+"content")," "))},dependencies:[F,z,R],encapsulation:2})};I();function et(e,n){e&1&&(s(0,"div",5),y(1,"img",6),r())}function tt(e,n){if(e&1&&(d(0),g(1,"translate")),e&2){let t=l();f(" ",u(1,1,t.translateRoot+"title")," ")}}function ot(e,n){if(e&1&&(s(0,"span",7),d(1),g(2,"translate"),r()),e&2){let t=l();a(),f(" ",u(2,1,t.translateRoot+"subtitle")," ")}}function nt(e,n){if(e&1){let t=E();s(0,"div",8)(1,"p-button",9),g(2,"translate"),$("onClick",function(){v(t);let o=l();return T(o.redirectToGithub())}),r(),s(3,"p-button",10),g(4,"translate"),$("onClick",function(){v(t);let o=l();return T(o.redirectToLive())}),r()()}if(e&2){let t=l();a(),c("label",u(2,2,t.translateRoot+"github-btn")),a(2),c("label",u(4,4,t.translateRoot+"go-btn"))}}var ee=class e{translateRoot="projects.cards.gaslands.";redirectToGithub=()=>window.open("https://github.com/cezeta1/gaslands-app-ng","_blank");redirectToLive=()=>window.open("https://cezeta1.github.io/gaslands-app-ng","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=w({type:e,selectors:[["gaslands-project-card"]],decls:12,vars:3,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px] 
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","overflow-hidden","border-b","border-toolbar-border-color"],["src","/assets/images/gaslands-car.png","alt","Card",1,"object-cover","w-full","h-full","!rounded-t-xl"],[1,"text-muted","text-sm"],[1,"inline-flex","mt-1","gap-2","w-full"],["outlined","","styleClass","w-full grow","icon","pi pi-github","severity","secondary",1,"grow",3,"onClick","label"],["icon","pi pi-car",3,"onClick","label"]],template:function(t,i){t&1&&(s(0,"p-card",4),p(1,et,2,0,"ng-template",null,0,_)(3,tt,2,3,"ng-template",null,1,_)(5,ot,3,3,"ng-template",null,2,_),s(7,"p"),d(8),g(9,"translate"),r(),p(10,nt,5,6,"ng-template",null,3,_),r()),t&2&&(a(8),f(" ",u(9,1,i.translateRoot+"content")," "))},dependencies:[R,F,z],encapsulation:2})};I();Y();Y();I();I();var it=["container"],at=["icon"],st=["closeicon"],rt=["*"],lt=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),ct=e=>({value:"visible()",params:e}),pt=e=>({closeCallback:e});function mt(e,n){e&1&&j(0)}function dt(e,n){if(e&1&&p(0,mt,1,0,"ng-container",7),e&2){let t=l(2);c("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function gt(e,n){if(e&1&&y(0,"i",3),e&2){let t=l(2);c("ngClass",t.icon)}}function ut(e,n){if(e&1&&y(0,"span",9),e&2){let t=l(3);c("ngClass",t.cx("text"))("innerHTML",t.text,de)}}function ft(e,n){if(e&1&&(s(0,"div"),p(1,ut,1,2,"span",8),r()),e&2){let t=l(2);a(),c("ngIf",!t.escape)}}function _t(e,n){if(e&1&&(s(0,"span",5),d(1),r()),e&2){let t=l(3);c("ngClass",t.cx("text")),a(),N(t.text)}}function bt(e,n){if(e&1&&p(0,_t,2,2,"span",10),e&2){let t=l(2);c("ngIf",t.escape&&t.text)}}function ht(e,n){e&1&&j(0)}function xt(e,n){if(e&1&&p(0,ht,1,0,"ng-container",11),e&2){let t=l(2);c("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",ae(2,pt,t.close.bind(t)))}}function Ct(e,n){if(e&1&&(s(0,"span",5),S(1),r()),e&2){let t=l(2);c("ngClass",t.cx("text"))}}function yt(e,n){if(e&1&&y(0,"i",13),e&2){let t=l(3);c("ngClass",t.closeIcon)}}function vt(e,n){e&1&&j(0)}function Tt(e,n){if(e&1&&p(0,vt,1,0,"ng-container",7),e&2){let t=l(3);c("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function wt(e,n){e&1&&y(0,"TimesIcon",14)}function $t(e,n){if(e&1){let t=E();s(0,"button",12),$("click",function(o){v(t);let b=l(2);return T(b.close(o))}),p(1,yt,1,1,"i",13)(2,Tt,1,1,"ng-container")(3,wt,1,0,"TimesIcon",14),r()}if(e&2){let t=l(2);B("aria-label",t.closeAriaLabel),a(),k(t.closeIcon?1:-1),a(),k(t.closeIconTemplate||t._closeIconTemplate?2:-1),a(),k(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function jt(e,n){if(e&1&&(s(0,"div",1)(1,"div",2),p(2,dt,1,1,"ng-container")(3,gt,1,1,"i",3)(4,ft,2,1,"div",4)(5,bt,1,1,"ng-template",null,0,_)(7,xt,1,4,"ng-container")(8,Ct,2,1,"span",5)(9,$t,4,4,"button",6),r()()),e&2){let t=ue(6),i=l();c("ngClass",i.containerClass)("@messageAnimation",ae(13,ct,fe(10,lt,i.showTransitionOptions,i.hideTransitionOptions))),B("aria-live","polite")("role","alert"),a(2),k(i.iconTemplate||i._iconTemplate?2:-1),a(),k(i.icon?3:-1),a(),c("ngIf",!i.escape)("ngIfElse",t),a(3),k(i.containerTemplate||i._containerTemplate?7:8),a(2),k(i.closable?9:-1)}}var kt=({dt:e})=>`
.p-message {
    border-radius: ${e("message.border.radius")};
    outline-width: ${e("message.border.width")};
    outline-style: solid;
}

.p-message-content {
    display: flex;
    align-items: center;
    padding: ${e("message.content.padding")};
    gap: ${e("message.content.gap")};
    height: 100%;
}

.p-message-icon {
    flex-shrink: 0;
}

.p-message-close-button {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    margin-inline-start: auto;
    overflow: hidden;
    position: relative;
    width: ${e("message.close.button.width")};
    height: ${e("message.close.button.height")};
    border-radius: ${e("message.close.button.border.radius")};
    background: transparent;
    transition: background ${e("message.transition.duration")}, color ${e("message.transition.duration")}, outline-color ${e("message.transition.duration")}, box-shadow ${e("message.transition.duration")}, opacity 0.3s;
    outline-color: transparent;
    color: inherit;
    padding: 0;
    border: none;
    cursor: pointer;
    user-select: none;
}

.p-message-close-icon {
    font-size: ${e("message.close.icon.size")};
    width: ${e("message.close.icon.size")};
    height: ${e("message.close.icon.size")};
}

.p-message-close-button:focus-visible {
    outline-width: ${e("message.close.button.focus.ring.width")};
    outline-style: ${e("message.close.button.focus.ring.style")};
    outline-offset: ${e("message.close.button.focus.ring.offset")};
}

.p-message-info {
    background: ${e("message.info.background")};
    outline-color: ${e("message.info.border.color")};
    color: ${e("message.info.color")};
    box-shadow: ${e("message.info.shadow")};
}

.p-message-info .p-message-close-button:focus-visible {
    outline-color: ${e("message.info.close.button.focus.ring.color")};
    box-shadow: ${e("message.info.close.button.focus.ring.shadow")};
}

.p-message-info .p-message-close-button:hover {
    background: ${e("message.info.close.button.hover.background")};
}

.p-message-info.p-message-outlined {
    color: ${e("message.info.outlined.color")};
    outline-color: ${e("message.info.outlined.border.color")};
}

.p-message-info.p-message-simple {
    color: ${e("message.info.simple.color")};
}

.p-message-success {
    background: ${e("message.success.background")};
    outline-color: ${e("message.success.border.color")};
    color: ${e("message.success.color")};
    box-shadow: ${e("message.success.shadow")};
}

.p-message-success .p-message-close-button:focus-visible {
    outline-color: ${e("message.success.close.button.focus.ring.color")};
    box-shadow: ${e("message.success.close.button.focus.ring.shadow")};
}

.p-message-success .p-message-close-button:hover {
    background: ${e("message.success.close.button.hover.background")};
}

.p-message-success.p-message-outlined {
    color: ${e("message.success.outlined.color")};
    outline-color: ${e("message.success.outlined.border.color")};
}

.p-message-success.p-message-simple {
    color: ${e("message.success.simple.color")};
}

.p-message-warn {
    background: ${e("message.warn.background")};
    outline-color: ${e("message.warn.border.color")};
    color: ${e("message.warn.color")};
    box-shadow: ${e("message.warn.shadow")};
}

.p-message-warn .p-message-close-button:focus-visible {
    outline-color: ${e("message.warn.close.button.focus.ring.color")};
    box-shadow: ${e("message.warn.close.button.focus.ring.shadow")};
}

.p-message-warn .p-message-close-button:hover {
    background: ${e("message.warn.close.button.hover.background")};
}

.p-message-warn.p-message-outlined {
    color: ${e("message.warn.outlined.color")};
    outline-color: ${e("message.warn.outlined.border.color")};
}

.p-message-warn.p-message-simple {
    color: ${e("message.warn.simple.color")};
}

.p-message-error {
    background: ${e("message.error.background")};
    outline-color: ${e("message.error.border.color")};
    color: ${e("message.error.color")};
    box-shadow: ${e("message.error.shadow")};
}

.p-message-error .p-message-close-button:focus-visible {
    outline-color: ${e("message.error.close.button.focus.ring.color")};
    box-shadow: ${e("message.error.close.button.focus.ring.shadow")};
}

.p-message-error .p-message-close-button:hover {
    background: ${e("message.error.close.button.hover.background")};
}

.p-message-error.p-message-outlined {
    color: ${e("message.error.outlined.color")};
    outline-color: ${e("message.error.outlined.border.color")};
}

.p-message-error.p-message-simple {
    color: ${e("message.error.simple.color")};
}

.p-message-secondary {
    background: ${e("message.secondary.background")};
    outline-color: ${e("message.secondary.border.color")};
    color: ${e("message.secondary.color")};
    box-shadow: ${e("message.secondary.shadow")};
}

.p-message-secondary .p-message-close-button:focus-visible {
    outline-color: ${e("message.secondary.close.button.focus.ring.color")};
    box-shadow: ${e("message.secondary.close.button.focus.ring.shadow")};
}

.p-message-secondary .p-message-close-button:hover {
    background: ${e("message.secondary.close.button.hover.background")};
}

.p-message-secondary.p-message-outlined {
    color: ${e("message.secondary.outlined.color")};
    outline-color: ${e("message.secondary.outlined.border.color")};
}

.p-message-secondary.p-message-simple {
    color: ${e("message.secondary.simple.color")};
}

.p-message-contrast {
    background: ${e("message.contrast.background")};
    outline-color: ${e("message.contrast.border.color")};
    color: ${e("message.contrast.color")};
    box-shadow: ${e("message.contrast.shadow")};
}

.p-message-contrast .p-message-close-button:focus-visible {
    outline-color: ${e("message.contrast.close.button.focus.ring.color")};
    box-shadow: ${e("message.contrast.close.button.focus.ring.shadow")};
}

.p-message-contrast .p-message-close-button:hover {
    background: ${e("message.contrast.close.button.hover.background")};
}

.p-message-contrast.p-message-outlined {
    color: ${e("message.contrast.outlined.color")};
    outline-color: ${e("message.contrast.outlined.border.color")};
}

.p-message-contrast.p-message-simple {
    color: ${e("message.contrast.simple.color")};
}

.p-message-text {
    display: inline-flex;
    align-items: center;
    font-size: ${e("message.text.font.size")};
    font-weight: ${e("message.text.font.weight")};
}

.p-message-icon {
    font-size: ${e("message.icon.size")};
    width: ${e("message.icon.size")};
    height: ${e("message.icon.size")};
}

.p-message-enter-from {
    opacity: 0;
}

.p-message-enter-active {
    transition: opacity 0.3s;
}

.p-message.p-message-leave-from {
    max-height: 1000px;
}

.p-message.p-message-leave-to {
    max-height: 0;
    opacity: 0;
    margin: 0;
}

.p-message-leave-active {
    overflow: hidden;
    transition: max-height 0.45s cubic-bezier(0, 1, 0, 1), opacity 0.3s, margin 0.3s;
}

.p-message-leave-active .p-message-close-button {
    opacity: 0;
}

.p-message-sm .p-message-content {
    padding: ${e("message.content.sm.padding")};
}

.p-message-sm .p-message-text {
    font-size: ${e("message.text.sm.font.size")};
}

.p-message-sm .p-message-icon {
    font-size: ${e("message.icon.sm.size")};
    width: ${e("message.icon.sm.size")};
    height: ${e("message.icon.sm.size")};
}

.p-message-sm .p-message-close-icon {
    font-size: ${e("message.close.icon.sm.size")};
    width: ${e("message.close.icon.sm.size")};
    height: ${e("message.close.icon.sm.size")};
}

.p-message-lg .p-message-content {
    padding: ${e("message.content.lg.padding")};
}

.p-message-lg .p-message-text {
    font-size: ${e("message.text.lg.font.size")};
}

.p-message-lg .p-message-icon {
    font-size: ${e("message.icon.lg.size")};
    width: ${e("message.icon.lg.size")};
    height: ${e("message.icon.lg.size")};
}

.p-message-lg .p-message-close-icon {
    font-size: ${e("message.close.icon.lg.size")};
    width: ${e("message.close.icon.lg.size")};
    height: ${e("message.close.icon.lg.size")};
}

.p-message-outlined {
    background: transparent;
    outline-width: ${e("message.outlined.border.width")};
}

.p-message-simple {
    background: transparent;
    outline-color: transparent;
    box-shadow: none;
}

.p-message-simple .p-message-content {
    padding: ${e("message.simple.content.padding")};
}

.p-message-outlined .p-message-close-button:hover,
.p-message-simple .p-message-close-button:hover {
    background: transparent;
}`,Et={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},$e=(()=>{class e extends U{name="message";theme=kt;classes=Et;static \u0275fac=(()=>{let t;return function(o){return(t||(t=P(e)))(o||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var je=(()=>{class e extends W{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new me;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=O(!0);_componentStyle=M($e);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=P(e)))(o||e)}})();static \u0275cmp=w({type:e,selectors:[["p-message"]],contentQueries:function(i,o,b){if(i&1&&(h(b,it,4),h(b,at,4),h(b,st,4),h(b,J,4)),i&2){let m;x(m=C())&&(o.containerTemplate=m.first),x(m=C())&&(o.iconTemplate=m.first),x(m=C())&&(o.closeIconTemplate=m.first),x(m=C())&&(o.templates=m)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",se],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",se],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[q([$e]),Q],ngContentSelectors:rt,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,o){i&1&&(V(),p(0,jt,10,15,"div",1)),i&2&&k(o.visible()?0:-1)},dependencies:[X,H,L,A,ve,Te,K],encapsulation:2,data:{animation:[be("messageAnimation",[ce(":enter",[le({opacity:0,transform:"translateY(-25%)"}),re("{{showTransitionParams}}")]),ce(":leave",[re("{{hideTransitionParams}}",le({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})();I();function It(e,n){e&1&&y(0,"div",8)}function Rt(e,n){if(e&1&&(d(0),g(1,"translate")),e&2){let t=l();f(" ",u(1,1,t.translateRoot+"title")," ")}}function Mt(e,n){if(e&1&&(s(0,"span",9),d(1),g(2,"translate"),r()),e&2){let t=l();a(),f(" ",u(2,1,t.translateRoot+"subtitle")," ")}}function Pt(e,n){if(e&1){let t=E();s(0,"div",10)(1,"p-button",11),g(2,"translate"),$("onClick",function(){v(t);let o=l();return T(o.redirectToGithub())}),r(),s(3,"div",12)(4,"p-button",13),$("onClick",function(){v(t);let o=l();return T(o.redirectToNpm())}),r(),s(5,"p-button",14),g(6,"translate"),$("onClick",function(){v(t);let o=l();return T(o.redirectToLive())}),r()()()}if(e&2){let t=l();a(),c("label",u(2,2,t.translateRoot+"github-btn")),a(4),c("label",u(6,4,t.translateRoot+"doc-btn"))}}var te=class e{_router=M(he);translateRoot="projects.cards.ng-group-controls.";redirectToGithub=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");redirectToNpm=()=>window.open("https://www.npmjs.com/package/ng-group-controls","_blank");redirectToLive=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");redirectToHome=()=>this._router.navigate(["home"]);static \u0275fac=function(t){return new(t||e)};static \u0275cmp=w({type:e,selectors:[["ng-group-controls-project-card"]],decls:24,vars:15,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px]
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],["severity","secondary","styleClass","mt-4","size","small","icon","pi pi-thumbs-up"],[1,"underline",3,"click"],["styleClass","mt-4","size","small","icon","pi pi-info-circle"],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","background-pattern","overflow-hidden","border-b","border-toolbar-border-color"],[1,"text-muted","text-sm"],[1,"flex","flex-col","mt-1","gap-2","w-full","justify-center"],["outlined","","styleClass","w-full","icon","pi pi-github","severity","secondary",3,"onClick","label"],[1,"inline-flex","w-full","*:!w-full","gap-2"],["outlined","","styleClass","w-full !text-red-400","icon","pi pi-box","label","npm","severity","secondary",3,"onClick"],["disabled","","icon","pi pi-globe","severity","secondary",3,"onClick","label"]],template:function(t,i){if(t&1){let o=E();s(0,"p-card",4),p(1,It,1,0,"ng-template",null,0,_)(3,Rt,2,3,"ng-template",null,1,_)(5,Mt,3,3,"ng-template",null,2,_),s(7,"p"),d(8),g(9,"translate"),r(),s(10,"p-message",5)(11,"span"),d(12),g(13,"translate"),s(14,"a",6),$("click",function(){return v(o),T(i.redirectToHome())}),d(15),g(16,"translate"),r(),d(17),g(18,"translate"),r()(),s(19,"p-message",7),d(20),g(21,"translate"),r(),p(22,Pt,7,6,"ng-template",null,3,_),r()}t&2&&(a(8),f(" ",u(9,5,i.translateRoot+"content")," "),a(4),f(" ",u(13,7,i.translateRoot+"message1.start")," "),a(3),f(" ",u(16,9,i.translateRoot+"message1.link")," "),a(2),f(" ",u(18,11,i.translateRoot+"message1.end")," "),a(3),f(" ",u(21,13,i.translateRoot+"message2")," "))},dependencies:[R,F,z,je],encapsulation:2})};I();var oe=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=w({type:e,selectors:[["projects"]],decls:7,vars:3,consts:[[1,"text-center","text-xl","font-bold"],[1,"flex","justify-center","flex-wrap","gap-4","w-full","my-4"]],template:function(t,i){t&1&&(s(0,"h1",0),d(1),g(2,"translate"),r(),s(3,"div",1),y(4,"gaslands-project-card")(5,"ng-group-controls-project-card")(6,"fx-exchange-project-card"),r()),t&2&&(a(),f(" ",u(2,1,"projects.title"),`
`))},dependencies:[R,te,ee,Z],encapsulation:2})};var zt=(n=>(n.Home="",n))(zt||{}),Go=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:oe},{path:"**",redirectTo:"not-found"}];export{zt as ExampleRoutesEnum,Go as sectionRoutes};
