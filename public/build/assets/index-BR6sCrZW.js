import{s as l,B as i,x as c,c as s,o as a,j as r,b as d,z as t,y as o}from"./app-DISGhn7w.js";var n=l`
    .p-card {
        background: dt('card.background');
        color: dt('card.color');
        box-shadow: dt('card.shadow');
        border-radius: dt('card.border.radius');
        display: flex;
        flex-direction: column;
    }

    .p-card-caption {
        display: flex;
        flex-direction: column;
        gap: dt('card.caption.gap');
    }

    .p-card-body {
        padding: dt('card.body.padding');
        display: flex;
        flex-direction: column;
        gap: dt('card.body.gap');
    }

    .p-card-title {
        font-size: dt('card.title.font.size');
        font-weight: dt('card.title.font.weight');
    }

    .p-card-subtitle {
        color: dt('card.subtitle.color');
    }
`,p={root:"p-card p-component",header:"p-card-header",body:"p-card-body",caption:"p-card-caption",title:"p-card-title",subtitle:"p-card-subtitle",content:"p-card-content",footer:"p-card-footer"},u=i.extend({name:"card",style:n,classes:p}),b={name:"BaseCard",extends:c,style:u,provide:function(){return{$pcCard:this,$parentInstance:this}}},m={name:"Card",extends:b,inheritAttrs:!1};function y(e,f,$,v,h,g){return a(),s("div",t({class:e.cx("root")},e.ptmi("root")),[e.$slots.header?(a(),s("div",t({key:0,class:e.cx("header")},e.ptm("header")),[o(e.$slots,"header")],16)):r("",!0),d("div",t({class:e.cx("body")},e.ptm("body")),[e.$slots.title||e.$slots.subtitle?(a(),s("div",t({key:0,class:e.cx("caption")},e.ptm("caption")),[e.$slots.title?(a(),s("div",t({key:0,class:e.cx("title")},e.ptm("title")),[o(e.$slots,"title")],16)):r("",!0),e.$slots.subtitle?(a(),s("div",t({key:1,class:e.cx("subtitle")},e.ptm("subtitle")),[o(e.$slots,"subtitle")],16)):r("",!0)],16)):r("",!0),d("div",t({class:e.cx("content")},e.ptm("content")),[o(e.$slots,"content")],16),e.$slots.footer?(a(),s("div",t({key:1,class:e.cx("footer")},e.ptm("footer")),[o(e.$slots,"footer")],16)):r("",!0)],16)],16)}m.render=y;export{m as s};
