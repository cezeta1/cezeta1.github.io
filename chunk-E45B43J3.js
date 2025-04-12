import{C as L,E as X,H as he,J as Ce,K as E,P as xe,s as fe,w as _e,x as be,y as q,z as A}from"./chunk-OT42YA3O.js";import{$a as c,Ab as G,Bb as j,Cb as f,Eb as _,Fa as se,Fb as b,Gc as ue,Hc as te,Ib as le,Ja as l,Jb as g,Jc as oe,Kb as z,Lb as ce,Lc as ne,Qb as N,Sb as Z,Tb as pe,U as S,Va as C,Xb as me,Yb as ge,Za as D,_ as F,_b as d,dc as ee,ga as x,gb as M,ha as y,hb as p,ja as k,lb as re,mb as w,pa as ae,rb as a,sb as s,tb as h,tc as O,ua as R,ub as U,vb as W,vc as Q,wb as v,wc as de,xb as $,xc as V,yb as T,yc as B,zb as r}from"./chunk-RZTV7BID.js";var je=["header"],Ee=["title"],Ie=["subtitle"],Me=["content"],ze=["footer"],Pe=["*",[["p-header"]],[["p-footer"]]],Se=["*","p-header","p-footer"];function Fe(e,n){e&1&&v(0)}function Re(e,n){if(e&1&&(a(0,"div",8),j(1,1),c(2,Fe,1,0,"ng-container",6),s()),e&2){let t=r();l(2),p("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function De(e,n){if(e&1&&(U(0),g(1),W()),e&2){let t=r(2);l(),z(t.header)}}function Ge(e,n){e&1&&v(0)}function Ne(e,n){if(e&1&&(a(0,"div",9),c(1,De,2,1,"ng-container",10)(2,Ge,1,0,"ng-container",6),s()),e&2){let t=r();l(),p("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),p("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Oe(e,n){if(e&1&&(U(0),g(1),W()),e&2){let t=r(2);l(),z(t.subheader)}}function Qe(e,n){e&1&&v(0)}function Ve(e,n){if(e&1&&(a(0,"div",11),c(1,Oe,2,1,"ng-container",10)(2,Qe,1,0,"ng-container",6),s()),e&2){let t=r();l(),p("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),p("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function Be(e,n){e&1&&v(0)}function qe(e,n){e&1&&v(0)}function Ae(e,n){if(e&1&&(a(0,"div",12),j(1,2),c(2,qe,1,0,"ng-container",6),s()),e&2){let t=r();l(2),p("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Le=({dt:e})=>`
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
`,Xe={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},ye=(()=>{class e extends L{name="card";theme=Le;classes=Xe;static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var I=(()=>{class e extends X{header;subheader;set style(t){fe(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=R(null);_componentStyle=F(ye);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["p-card"]],contentQueries:function(i,o,u){if(i&1&&(f(u,_e,5),f(u,be,5),f(u,je,4),f(u,Ee,4),f(u,Ie,4),f(u,Me,4),f(u,ze,4),f(u,q,4)),i&2){let m;_(m=b())&&(o.headerFacet=m.first),_(m=b())&&(o.footerFacet=m.first),_(m=b())&&(o.headerTemplate=m.first),_(m=b())&&(o.titleTemplate=m.first),_(m=b())&&(o.subtitleTemplate=m.first),_(m=b())&&(o.contentTemplate=m.first),_(m=b())&&(o.footerTemplate=m.first),_(m=b())&&(o.templates=m)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[N([ye]),D],ngContentSelectors:Se,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,o){i&1&&(G(Pe),a(0,"div",0),c(1,Re,3,1,"div",1),a(2,"div",2),c(3,Ne,3,2,"div",3)(4,Ve,3,2,"div",4),a(5,"div",5),j(6),c(7,Be,1,0,"ng-container",6),s(),c(8,Ae,3,1,"div",7),s()()),i&2&&(re(o.styleClass),p("ngClass","p-card p-component")("ngStyle",o._style()),M("data-pc-name","card"),l(),p("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),l(2),p("ngIf",o.header||o.titleTemplate||o._titleTemplate),l(),p("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),l(3),p("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),l(),p("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[B,O,Q,V,de,A],encapsulation:2,changeDetection:0})}return e})();function He(e,n){e&1&&(a(0,"div",5),h(1,"img",6),s())}function Ye(e,n){e&1&&g(0," Fx Exchange Platform ")}function Je(e,n){e&1&&(a(0,"span",7),g(1,"Tech demo"),s())}function Ke(e,n){if(e&1){let t=$();a(0,"p-button",8),T("onClick",function(){x(t);let o=r();return y(o.redirectToGithub())}),s()}}var H=class e{redirectToGithub=()=>window.open("https://github.com/cezeta1/fx-exchange-demo","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["fx-exchange-project-card"]],decls:11,vars:0,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px]
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","overflow-hidden","border-b","border-toolbar-border-color"],["src","/assets/images/fx.jpeg","alt","Card",1,"-mt-1","w-full","!rounded-t-xl"],[1,"text-muted","text-sm"],["outlined","","styleClass","w-full","icon","pi pi-github","label","Github project","severity","secondary",3,"onClick"]],template:function(t,i){t&1&&(a(0,"p-card",4),c(1,He,2,0,"ng-template",null,0,d)(3,Ye,1,0,"ng-template",null,1,d)(5,Je,2,0,"ng-template",null,2,d),a(7,"p"),g(8," Tech demo built for a code challenge demo. Features a foreign exchange (FX) platform where users can create contracts selecting which currency they want to convert from and to. "),s(),c(9,Ke,1,0,"ng-template",null,3,d),s())},dependencies:[I,E],encapsulation:2})};function Ue(e,n){e&1&&(a(0,"div",5),h(1,"img",6),s())}function We(e,n){e&1&&g(0," Gaslands Dice Roller ")}function Ze(e,n){e&1&&(a(0,"span",7),g(1,"Boardgame companion"),s())}function et(e,n){if(e&1){let t=$();a(0,"div",8)(1,"p-button",9),T("onClick",function(){x(t);let o=r();return y(o.redirectToGithub())}),s(),a(2,"p-button",10),T("onClick",function(){x(t);let o=r();return y(o.redirectToLive())}),s()()}}var Y=class e{redirectToGithub=()=>window.open("https://github.com/cezeta1/gaslands-app-ng","_blank");redirectToLive=()=>window.open("https://cezeta1.github.io/gaslands-app-ng","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["gaslands-project-card"]],decls:11,vars:0,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px] 
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","overflow-hidden","border-b","border-toolbar-border-color"],["src","/assets/images/gaslands-car.png","alt","Card",1,"-mt-1","w-full","!rounded-t-xl"],[1,"text-muted","text-sm"],[1,"inline-flex","mt-1","gap-2","w-full"],["outlined","","styleClass","w-full grow","icon","pi pi-github","label","Github project","severity","secondary",1,"grow",3,"onClick"],["icon","pi pi-car","label","Go!",3,"onClick"]],template:function(t,i){t&1&&(a(0,"p-card",4),c(1,Ue,2,0,"ng-template",null,0,d)(3,We,1,0,"ng-template",null,1,d)(5,Ze,2,0,"ng-template",null,2,d),a(7,"p"),g(8," Gaslands skid dice roller, for all your carnage needs! "),s(),c(9,et,3,0,"ng-template",null,3,d),s())},dependencies:[I,E],encapsulation:2})};var tt=["container"],ot=["icon"],nt=["closeicon"],it=["*"],at=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),st=e=>({value:"visible()",params:e}),rt=e=>({closeCallback:e});function lt(e,n){e&1&&v(0)}function ct(e,n){if(e&1&&c(0,lt,1,0,"ng-container",7),e&2){let t=r(2);p("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function pt(e,n){if(e&1&&h(0,"i",3),e&2){let t=r(2);p("ngClass",t.icon)}}function mt(e,n){if(e&1&&h(0,"span",9),e&2){let t=r(3);p("ngClass",t.cx("text"))("innerHTML",t.text,se)}}function gt(e,n){if(e&1&&(a(0,"div"),c(1,mt,1,2,"span",8),s()),e&2){let t=r(2);l(),p("ngIf",!t.escape)}}function dt(e,n){if(e&1&&(a(0,"span",5),g(1),s()),e&2){let t=r(3);p("ngClass",t.cx("text")),l(),z(t.text)}}function ut(e,n){if(e&1&&c(0,dt,2,2,"span",10),e&2){let t=r(2);p("ngIf",t.escape&&t.text)}}function ft(e,n){e&1&&v(0)}function _t(e,n){if(e&1&&c(0,ft,1,0,"ng-container",11),e&2){let t=r(2);p("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",Z(2,rt,t.close.bind(t)))}}function bt(e,n){if(e&1&&(a(0,"span",5),j(1),s()),e&2){let t=r(2);p("ngClass",t.cx("text"))}}function ht(e,n){if(e&1&&h(0,"i",13),e&2){let t=r(3);p("ngClass",t.closeIcon)}}function Ct(e,n){e&1&&v(0)}function xt(e,n){if(e&1&&c(0,Ct,1,0,"ng-container",7),e&2){let t=r(3);p("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function yt(e,n){e&1&&h(0,"TimesIcon",14)}function Tt(e,n){if(e&1){let t=$();a(0,"button",12),T("click",function(o){x(t);let u=r(2);return y(u.close(o))}),c(1,ht,1,1,"i",13)(2,xt,1,1,"ng-container")(3,yt,1,0,"TimesIcon",14),s()}if(e&2){let t=r(2);M("aria-label",t.closeAriaLabel),l(),w(t.closeIcon?1:-1),l(),w(t.closeIconTemplate||t._closeIconTemplate?2:-1),l(),w(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function vt(e,n){if(e&1&&(a(0,"div",1)(1,"div",2),c(2,ct,1,1,"ng-container")(3,pt,1,1,"i",3)(4,gt,2,1,"div",4)(5,ut,1,1,"ng-template",null,0,d)(7,_t,1,4,"ng-container")(8,bt,2,1,"span",5)(9,Tt,4,4,"button",6),s()()),e&2){let t=le(6),i=r();p("ngClass",i.containerClass)("@messageAnimation",Z(13,st,pe(10,at,i.showTransitionOptions,i.hideTransitionOptions))),M("aria-live","polite")("role","alert"),l(2),w(i.iconTemplate||i._iconTemplate?2:-1),l(),w(i.icon?3:-1),l(),p("ngIf",!i.escape)("ngIfElse",t),l(3),w(i.containerTemplate||i._containerTemplate?7:8),l(2),w(i.closable?9:-1)}}var wt=({dt:e})=>`
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
}`,$t={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Te=(()=>{class e extends L{name="message";theme=wt;classes=$t;static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275prov=S({token:e,factory:e.\u0275fac})}return e})();var ve=(()=>{class e extends X{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new ae;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=R(!0);_componentStyle=F(Te);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=k(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["p-message"]],contentQueries:function(i,o,u){if(i&1&&(f(u,tt,4),f(u,ot,4),f(u,nt,4),f(u,q,4)),i&2){let m;_(m=b())&&(o.containerTemplate=m.first),_(m=b())&&(o.iconTemplate=m.first),_(m=b())&&(o.closeIconTemplate=m.first),_(m=b())&&(o.templates=m)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",ee],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",ee],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[N([Te]),D],ngContentSelectors:it,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,o){i&1&&(G(),c(0,vt,10,15,"div",1)),i&2&&w(o.visible()?0:-1)},dependencies:[B,O,Q,V,he,Ce,A],encapsulation:2,data:{animation:[ue("messageAnimation",[ne(":enter",[oe({opacity:0,transform:"translateY(-25%)"}),te("{{showTransitionParams}}")]),ne(":leave",[te("{{hideTransitionParams}}",oe({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})();function kt(e,n){e&1&&h(0,"div",6)}function jt(e,n){e&1&&g(0," Ng Group Controls ")}function Et(e,n){e&1&&(a(0,"span",7),g(1,"npm package"),s())}function It(e,n){if(e&1){let t=$();a(0,"div",8)(1,"p-button",9),T("onClick",function(){x(t);let o=r();return y(o.redirectToGithub())}),s(),a(2,"div",10)(3,"p-button",11),T("onClick",function(){x(t);let o=r();return y(o.redirectToNpm())}),s(),a(4,"p-button",12),T("onClick",function(){x(t);let o=r();return y(o.redirectToLive())}),s()()()}}var J=class e{redirectToGithub=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");redirectToNpm=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");redirectToLive=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["ng-group-controls-project-card"]],decls:13,vars:0,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px]
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],["styleClass","mt-4","size","small","icon","pi pi-info-circle"],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","background-pattern","overflow-hidden","border-b","border-toolbar-border-color"],[1,"text-muted","text-sm"],[1,"flex","flex-col","mt-1","gap-2","w-full","justify-center"],["disabled","","styleClass","w-full","icon","pi pi-github","label","Github project","severity","secondary",3,"onClick"],[1,"inline-flex","w-full","*:!w-full","gap-2"],["disabled","","styleClass","w-full","icon","pi pi-box","label","npm","severity","secondary",3,"onClick"],["disabled","","icon","pi pi-globe","label","Documentation","severity","secondary",3,"onClick"]],template:function(t,i){t&1&&(a(0,"p-card",4),c(1,kt,1,0,"ng-template",null,0,d)(3,jt,1,0,"ng-template",null,1,d)(5,Et,2,0,"ng-template",null,2,d),a(7,"p"),g(8," A lightweight library providing an Angular Form Control extension to simplify the creation of composed custom reactive formControls. "),s(),a(9,"p-message",5),g(10," v1.0 coming soon! "),s(),c(11,It,5,0,"ng-template",null,3,d),s())},dependencies:[I,E,ve],encapsulation:2})};var K=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["projects"]],decls:7,vars:3,consts:[[1,"text-center","text-xl","font-bold"],[1,"flex","justify-center","flex-wrap","gap-4","w-full","my-4"]],template:function(t,i){t&1&&(a(0,"h1",0),g(1),me(2,"translate"),s(),a(3,"div",1),h(4,"gaslands-project-card")(5,"ng-group-controls-project-card")(6,"fx-exchange-project-card"),s()),t&2&&(l(),ce(" ",ge(2,1,"projects.title"),`
`))},dependencies:[xe,J,Y,H],encapsulation:2})};var Mt=(n=>(n.Home="",n))(Mt||{}),Eo=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:K},{path:"**",redirectTo:"not-found"}];export{Mt as ExampleRoutesEnum,Eo as sectionRoutes};
