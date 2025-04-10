import{C as K,E as U,H as $e,J as ke,K as I,L as z,P as je,s as Te,w as ve,x as we,y as J,z as k}from"./chunk-GTYLNCG4.js";import{$a as c,Ab as q,Bb as M,Cb as f,Eb as _,Fa as ge,Fb as b,Gc as ye,Hc as se,Ib as fe,Ja as l,Jb as d,Jc as re,Kb as R,Lb as _e,Lc as le,Qb as A,Sb as ie,Tb as be,U as G,V as N,Va as C,Wa as B,Xb as he,Yb as Ce,Za as V,_ as O,_b as g,dc as ae,ga as x,gb as F,ha as y,hb as p,ja as E,lb as ue,mb as w,pa as de,rb as a,sb as s,tb as h,tc as L,ua as Q,ub as oe,vb as ne,vc as X,wb as v,wc as xe,xb as $,xc as H,yb as T,yc as Y,zb as r}from"./chunk-RZTV7BID.js";var Pe=["header"],Se=["title"],Fe=["subtitle"],Re=["content"],De=["footer"],Ge=["*",[["p-header"]],[["p-footer"]]],Ne=["*","p-header","p-footer"];function Oe(e,n){e&1&&v(0)}function Qe(e,n){if(e&1&&(a(0,"div",8),M(1,1),c(2,Oe,1,0,"ng-container",6),s()),e&2){let t=r();l(2),p("ngTemplateOutlet",t.headerTemplate||t._headerTemplate)}}function Be(e,n){if(e&1&&(oe(0),d(1),ne()),e&2){let t=r(2);l(),R(t.header)}}function Ve(e,n){e&1&&v(0)}function qe(e,n){if(e&1&&(a(0,"div",9),c(1,Be,2,1,"ng-container",10)(2,Ve,1,0,"ng-container",6),s()),e&2){let t=r();l(),p("ngIf",t.header&&!t._titleTemplate&&!t.titleTemplate),l(),p("ngTemplateOutlet",t.titleTemplate||t._titleTemplate)}}function Ae(e,n){if(e&1&&(oe(0),d(1),ne()),e&2){let t=r(2);l(),R(t.subheader)}}function Le(e,n){e&1&&v(0)}function Xe(e,n){if(e&1&&(a(0,"div",11),c(1,Ae,2,1,"ng-container",10)(2,Le,1,0,"ng-container",6),s()),e&2){let t=r();l(),p("ngIf",t.subheader&&!t._subtitleTemplate&&!t.subtitleTemplate),l(),p("ngTemplateOutlet",t.subtitleTemplate||t._subtitleTemplate)}}function He(e,n){e&1&&v(0)}function Ye(e,n){e&1&&v(0)}function Je(e,n){if(e&1&&(a(0,"div",12),M(1,2),c(2,Ye,1,0,"ng-container",6),s()),e&2){let t=r();l(2),p("ngTemplateOutlet",t.footerTemplate||t._footerTemplate)}}var Ke=({dt:e})=>`
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
`,Ue={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},Ee=(()=>{class e extends K{name="card";theme=Ke;classes=Ue;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var j=(()=>{class e extends U{header;subheader;set style(t){Te(this._style(),t)||this._style.set(t)}styleClass;headerFacet;footerFacet;headerTemplate;titleTemplate;subtitleTemplate;contentTemplate;footerTemplate;_headerTemplate;_titleTemplate;_subtitleTemplate;_contentTemplate;_footerTemplate;_style=Q(null);_componentStyle=O(Ee);getBlockableElement(){return this.el.nativeElement.children[0]}templates;ngAfterContentInit(){this.templates.forEach(t=>{switch(t.getType()){case"header":this._headerTemplate=t.template;break;case"title":this._titleTemplate=t.template;break;case"subtitle":this._subtitleTemplate=t.template;break;case"content":this._contentTemplate=t.template;break;case"footer":this._footerTemplate=t.template;break;default:this._contentTemplate=t.template;break}})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["p-card"]],contentQueries:function(i,o,u){if(i&1&&(f(u,ve,5),f(u,we,5),f(u,Pe,4),f(u,Se,4),f(u,Fe,4),f(u,Re,4),f(u,De,4),f(u,J,4)),i&2){let m;_(m=b())&&(o.headerFacet=m.first),_(m=b())&&(o.footerFacet=m.first),_(m=b())&&(o.headerTemplate=m.first),_(m=b())&&(o.titleTemplate=m.first),_(m=b())&&(o.subtitleTemplate=m.first),_(m=b())&&(o.contentTemplate=m.first),_(m=b())&&(o.footerTemplate=m.first),_(m=b())&&(o.templates=m)}},inputs:{header:"header",subheader:"subheader",style:"style",styleClass:"styleClass"},features:[A([Ee]),V],ngContentSelectors:Ne,decls:9,vars:10,consts:[[3,"ngClass","ngStyle"],["class","p-card-header",4,"ngIf"],[1,"p-card-body"],["class","p-card-title",4,"ngIf"],["class","p-card-subtitle",4,"ngIf"],[1,"p-card-content"],[4,"ngTemplateOutlet"],["class","p-card-footer",4,"ngIf"],[1,"p-card-header"],[1,"p-card-title"],[4,"ngIf"],[1,"p-card-subtitle"],[1,"p-card-footer"]],template:function(i,o){i&1&&(q(Ge),a(0,"div",0),c(1,Qe,3,1,"div",1),a(2,"div",2),c(3,qe,3,2,"div",3)(4,Xe,3,2,"div",4),a(5,"div",5),M(6),c(7,He,1,0,"ng-container",6),s(),c(8,Je,3,1,"div",7),s()()),i&2&&(ue(o.styleClass),p("ngClass","p-card p-component")("ngStyle",o._style()),F("data-pc-name","card"),l(),p("ngIf",o.headerFacet||o.headerTemplate||o._headerTemplate),l(2),p("ngIf",o.header||o.titleTemplate||o._titleTemplate),l(),p("ngIf",o.subheader||o.subtitleTemplate||o._subtitleTemplate),l(3),p("ngTemplateOutlet",o.contentTemplate||o._contentTemplate),l(),p("ngIf",o.footerFacet||o.footerTemplate||o._footerTemplate))},dependencies:[Y,L,X,H,xe,k],encapsulation:2,changeDetection:0})}return e})(),P=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=B({type:e});static \u0275inj=N({imports:[j,k,k]})}return e})();var We=["container"],Ze=["icon"],et=["closeicon"],tt=["*"],ot=(e,n)=>({showTransitionParams:e,hideTransitionParams:n}),nt=e=>({value:"visible()",params:e}),it=e=>({closeCallback:e});function at(e,n){e&1&&v(0)}function st(e,n){if(e&1&&c(0,at,1,0,"ng-container",7),e&2){let t=r(2);p("ngTemplateOutlet",t.iconTemplate||t.iconTemplate)}}function rt(e,n){if(e&1&&h(0,"i",3),e&2){let t=r(2);p("ngClass",t.icon)}}function lt(e,n){if(e&1&&h(0,"span",9),e&2){let t=r(3);p("ngClass",t.cx("text"))("innerHTML",t.text,ge)}}function ct(e,n){if(e&1&&(a(0,"div"),c(1,lt,1,2,"span",8),s()),e&2){let t=r(2);l(),p("ngIf",!t.escape)}}function pt(e,n){if(e&1&&(a(0,"span",5),d(1),s()),e&2){let t=r(3);p("ngClass",t.cx("text")),l(),R(t.text)}}function mt(e,n){if(e&1&&c(0,pt,2,2,"span",10),e&2){let t=r(2);p("ngIf",t.escape&&t.text)}}function dt(e,n){e&1&&v(0)}function gt(e,n){if(e&1&&c(0,dt,1,0,"ng-container",11),e&2){let t=r(2);p("ngTemplateOutlet",t.containerTemplate||t.containerTemplate)("ngTemplateOutletContext",ie(2,it,t.close.bind(t)))}}function ut(e,n){if(e&1&&(a(0,"span",5),M(1),s()),e&2){let t=r(2);p("ngClass",t.cx("text"))}}function ft(e,n){if(e&1&&h(0,"i",13),e&2){let t=r(3);p("ngClass",t.closeIcon)}}function _t(e,n){e&1&&v(0)}function bt(e,n){if(e&1&&c(0,_t,1,0,"ng-container",7),e&2){let t=r(3);p("ngTemplateOutlet",t.closeIconTemplate||t._closeIconTemplate)}}function ht(e,n){e&1&&h(0,"TimesIcon",14)}function Ct(e,n){if(e&1){let t=$();a(0,"button",12),T("click",function(o){x(t);let u=r(2);return y(u.close(o))}),c(1,ft,1,1,"i",13)(2,bt,1,1,"ng-container")(3,ht,1,0,"TimesIcon",14),s()}if(e&2){let t=r(2);F("aria-label",t.closeAriaLabel),l(),w(t.closeIcon?1:-1),l(),w(t.closeIconTemplate||t._closeIconTemplate?2:-1),l(),w(!t.closeIconTemplate&&!t._closeIconTemplate&&!t.closeIcon?3:-1)}}function xt(e,n){if(e&1&&(a(0,"div",1)(1,"div",2),c(2,st,1,1,"ng-container")(3,rt,1,1,"i",3)(4,ct,2,1,"div",4)(5,mt,1,1,"ng-template",null,0,g)(7,gt,1,4,"ng-container")(8,ut,2,1,"span",5)(9,Ct,4,4,"button",6),s()()),e&2){let t=fe(6),i=r();p("ngClass",i.containerClass)("@messageAnimation",ie(13,nt,be(10,ot,i.showTransitionOptions,i.hideTransitionOptions))),F("aria-live","polite")("role","alert"),l(2),w(i.iconTemplate||i._iconTemplate?2:-1),l(),w(i.icon?3:-1),l(),p("ngIf",!i.escape)("ngIfElse",t),l(3),w(i.containerTemplate||i._containerTemplate?7:8),l(2),w(i.closable?9:-1)}}var yt=({dt:e})=>`
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
}`,Tt={root:({props:e})=>["p-message p-component p-message-"+e.severity,{"p-message-simple":e.variant==="simple"}],content:"p-message-content",icon:"p-message-icon",text:"p-message-text",closeButton:"p-message-close-button",closeIcon:"p-message-close-icon"},Me=(()=>{class e extends K{name="message";theme=yt;classes=Tt;static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275prov=G({token:e,factory:e.\u0275fac})}return e})();var pe=(()=>{class e extends U{severity="info";text;escape=!0;style;styleClass;closable=!1;icon;closeIcon;life;showTransitionOptions="300ms ease-out";hideTransitionOptions="200ms cubic-bezier(0.86, 0, 0.07, 1)";size;variant;onClose=new de;get closeAriaLabel(){return this.config.translation.aria?this.config.translation.aria.close:void 0}get containerClass(){let t=this.variant==="outlined"?"p-message-outlined":this.variant==="simple"?"p-message-simple":"",i=this.size==="small"?"p-message-sm":this.size==="large"?"p-message-lg":"";return`p-message-${this.severity} ${t} ${i}`.trim()+(this.styleClass?" "+this.styleClass:"")}visible=Q(!0);_componentStyle=O(Me);containerTemplate;iconTemplate;closeIconTemplate;templates;_containerTemplate;_iconTemplate;_closeIconTemplate;ngOnInit(){super.ngOnInit(),this.life&&setTimeout(()=>{this.visible.set(!1)},this.life)}ngAfterContentInit(){this.templates?.forEach(t=>{switch(t.getType()){case"container":this._containerTemplate=t.template;break;case"icon":this._iconTemplate=t.template;break;case"closeicon":this._closeIconTemplate=t.template;break}})}close(t){this.visible.set(!1),this.onClose.emit({originalEvent:t})}static \u0275fac=(()=>{let t;return function(o){return(t||(t=E(e)))(o||e)}})();static \u0275cmp=C({type:e,selectors:[["p-message"]],contentQueries:function(i,o,u){if(i&1&&(f(u,We,4),f(u,Ze,4),f(u,et,4),f(u,J,4)),i&2){let m;_(m=b())&&(o.containerTemplate=m.first),_(m=b())&&(o.iconTemplate=m.first),_(m=b())&&(o.closeIconTemplate=m.first),_(m=b())&&(o.templates=m)}},inputs:{severity:"severity",text:"text",escape:[2,"escape","escape",ae],style:"style",styleClass:"styleClass",closable:[2,"closable","closable",ae],icon:"icon",closeIcon:"closeIcon",life:"life",showTransitionOptions:"showTransitionOptions",hideTransitionOptions:"hideTransitionOptions",size:"size",variant:"variant"},outputs:{onClose:"onClose"},features:[A([Me]),V],ngContentSelectors:tt,decls:1,vars:1,consts:[["escapeOut",""],[1,"p-message","p-component",3,"ngClass"],[1,"p-message-content"],[1,"p-message-icon",3,"ngClass"],[4,"ngIf","ngIfElse"],[3,"ngClass"],["pRipple","","type","button",1,"p-message-close-button"],[4,"ngTemplateOutlet"],[3,"ngClass","innerHTML",4,"ngIf"],[3,"ngClass","innerHTML"],[3,"ngClass",4,"ngIf"],[4,"ngTemplateOutlet","ngTemplateOutletContext"],["pRipple","","type","button",1,"p-message-close-button",3,"click"],[1,"p-message-close-icon",3,"ngClass"],["styleClass","p-message-close-icon"]],template:function(i,o){i&1&&(q(),c(0,xt,10,15,"div",1)),i&2&&w(o.visible()?0:-1)},dependencies:[Y,L,X,H,$e,ke,k],encapsulation:2,data:{animation:[ye("messageAnimation",[le(":enter",[re({opacity:0,transform:"translateY(-25%)"}),se("{{showTransitionParams}}")]),le(":leave",[se("{{hideTransitionParams}}",re({height:0,marginTop:0,marginBottom:0,marginLeft:0,marginRight:0,opacity:0}))])])]},changeDetection:0})}return e})(),S=(()=>{class e{static \u0275fac=function(i){return new(i||e)};static \u0275mod=B({type:e});static \u0275inj=N({imports:[pe,k,k]})}return e})();function wt(e,n){e&1&&(a(0,"div",5),h(1,"img",6),s())}function $t(e,n){e&1&&d(0," Fx Exchange Platform ")}function kt(e,n){e&1&&(a(0,"span",7),d(1,"Tech demo"),s())}function jt(e,n){if(e&1){let t=$();a(0,"p-button",8),T("onClick",function(){x(t);let o=r();return y(o.redirectToGithub())}),s()}}var W=class e{redirectToGithub=()=>window.open("https://github.com/cezeta1/fx-exchange-demo","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["fx-exchange-project-card"]],decls:11,vars:0,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px]
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","overflow-hidden","border-b","border-toolbar-border-color"],["src","/assets/images/fx.jpeg","alt","Card",1,"-mt-1","w-full","!rounded-t-xl"],[1,"text-muted","text-sm"],["outlined","","styleClass","w-full","icon","pi pi-github","label","Github project","severity","secondary",3,"onClick"]],template:function(t,i){t&1&&(a(0,"p-card",4),c(1,wt,2,0,"ng-template",null,0,g)(3,$t,1,0,"ng-template",null,1,g)(5,kt,2,0,"ng-template",null,2,g),a(7,"p"),d(8," Tech demo built for a code challenge demo. Features a foreign exchange (FX) platform where users can create contracts selecting which currency they want to convert from and to. "),s(),c(9,jt,1,0,"ng-template",null,3,g),s())},dependencies:[P,j,z,I,S],encapsulation:2})};function Et(e,n){e&1&&(a(0,"div",5),h(1,"img",6),s())}function Mt(e,n){e&1&&d(0," Gaslands Dice Roller ")}function It(e,n){e&1&&(a(0,"span",7),d(1,"Boardgame companion"),s())}function zt(e,n){if(e&1){let t=$();a(0,"div",8)(1,"p-button",9),T("onClick",function(){x(t);let o=r();return y(o.redirectToGithub())}),s(),a(2,"p-button",10),T("onClick",function(){x(t);let o=r();return y(o.redirectToLive())}),s()()}}var Z=class e{redirectToGithub=()=>window.open("https://github.com/cezeta1/gaslands-app-ng","_blank");redirectToLive=()=>window.open("https://cezeta1.github.io/gaslands-app-ng","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["gaslands-project-card"]],decls:11,vars:0,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px] 
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","overflow-hidden","border-b","border-toolbar-border-color"],["src","/assets/images/gaslands-car.png","alt","Card",1,"-mt-1","w-full","!rounded-t-xl"],[1,"text-muted","text-sm"],[1,"inline-flex","mt-1","gap-2","w-full"],["outlined","","styleClass","w-full grow","icon","pi pi-github","label","Github project","severity","secondary",1,"grow",3,"onClick"],["icon","pi pi-car","label","Go!",3,"onClick"]],template:function(t,i){t&1&&(a(0,"p-card",4),c(1,Et,2,0,"ng-template",null,0,g)(3,Mt,1,0,"ng-template",null,1,g)(5,It,2,0,"ng-template",null,2,g),a(7,"p"),d(8," Gaslands skid dice roller, for all your carnage needs! "),s(),c(9,zt,3,0,"ng-template",null,3,g),s())},dependencies:[P,j,z,I,S],encapsulation:2})};function Pt(e,n){e&1&&h(0,"div",6)}function St(e,n){e&1&&d(0," Ng Group Controls ")}function Ft(e,n){e&1&&(a(0,"span",7),d(1,"npm package"),s())}function Rt(e,n){if(e&1){let t=$();a(0,"div",8)(1,"p-button",9),T("onClick",function(){x(t);let o=r();return y(o.redirectToGithub())}),s(),a(2,"div",10)(3,"p-button",11),T("onClick",function(){x(t);let o=r();return y(o.redirectToNpm())}),s(),a(4,"p-button",12),T("onClick",function(){x(t);let o=r();return y(o.redirectToLive())}),s()()()}}var ee=class e{redirectToGithub=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");redirectToNpm=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");redirectToLive=()=>window.open("https://github.com/cezeta1/ng-group-controls","_blank");static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["ng-group-controls-project-card"]],decls:13,vars:0,consts:[["header",""],["title",""],["subtitle",""],["footer",""],["styleClass",`
        h-full max-w-[300px]
        overflow-hidden 
        border border-toolbar-border-color
        [&>_.p-card-body]:h-full
        [&>_.p-card-body]:flex
        [&>_.p-card-body]:[&>_.p-card-content]:grow
        [&>_.p-card-body]:[&>_.p-card-title]:!font-bold
      `],["styleClass","mt-4","size","small","icon","pi pi-info-circle"],[1,"max-h-[10rem]","min-h-[10rem]","h-full","w-full","background-pattern","overflow-hidden","border-b","border-toolbar-border-color"],[1,"text-muted","text-sm"],[1,"flex","flex-col","mt-1","gap-2","w-full","justify-center"],["disabled","","styleClass","w-full","icon","pi pi-github","label","Github project","severity","secondary",3,"onClick"],[1,"inline-flex","w-full","*:!w-full","gap-2"],["disabled","","styleClass","w-full","icon","pi pi-box","label","npm","severity","secondary",3,"onClick"],["disabled","","icon","pi pi-globe","label","Documentation","severity","secondary",3,"onClick"]],template:function(t,i){t&1&&(a(0,"p-card",4),c(1,Pt,1,0,"ng-template",null,0,g)(3,St,1,0,"ng-template",null,1,g)(5,Ft,2,0,"ng-template",null,2,g),a(7,"p"),d(8," A lightweight library providing an Angular Form Control extension to simplify the creation of composed custom reactive formControls. "),s(),a(9,"p-message",5),d(10," v1.0 coming soon! "),s(),c(11,Rt,5,0,"ng-template",null,3,g),s())},dependencies:[P,j,z,I,S,pe],encapsulation:2})};var te=class e{static \u0275fac=function(t){return new(t||e)};static \u0275cmp=C({type:e,selectors:[["projects"]],decls:7,vars:3,consts:[[1,"text-center","text-xl","font-bold"],[1,"flex","justify-center","flex-wrap","gap-4","w-full","my-4"]],template:function(t,i){t&1&&(a(0,"h1",0),d(1),he(2,"translate"),s(),a(3,"div",1),h(4,"gaslands-project-card")(5,"ng-group-controls-project-card")(6,"fx-exchange-project-card"),s()),t&2&&(l(),_e(" ",Ce(2,1,"projects.title"),`
`))},dependencies:[je,ee,Z,W],encapsulation:2})};var Dt=(n=>(n.Home="",n))(Dt||{}),Fo=[{path:"",redirectTo:"",pathMatch:"full"},{path:"",component:te},{path:"**",redirectTo:"not-found"}];export{Dt as ExampleRoutesEnum,Fo as sectionRoutes};
