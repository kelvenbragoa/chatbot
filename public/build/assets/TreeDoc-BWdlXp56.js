import{s as Be,B as $e,c as h,o as c,g as f,j as b,V as C,z as p,t as Q,T as z,b as k,ai as ze,a7 as Ve,w as Ue,F as S,U as y,h as g,e as We,k as O,y as m,Y as re,x as H,R as Ge,af as Xe,aw as Z,J as T,ax as ee,aj as w,aq as xe,a6 as M,a5 as qe,O as G,N as X,G as j,ay as oe,ao as _e,ak as Je,az as le,M as Ye,ag as ie,ap as ae,au as se,aA as de,r as U,m as Qe,d as E}from"./app-DISGhn7w.js";import{g as B,_ as Ze}from"./index-Dmwz32cQ.js";import{s as Me,a as et}from"./index-BXBwaVhH.js";import{c as tt}from"./index-DLdxaRU9.js";import{a as ce,b as ue,c as pe,s as nt}from"./index-Dp7pqsRC.js";import{s as rt}from"./index-BT2MxYvU.js";import{s as ot}from"./index-CQ7YCv7X.js";import{s as lt}from"./index-B5lAdbY7.js";import{s as it}from"./index-Ddg5760n.js";import{N as he,s as at}from"./NodeService-1p4ocErV.js";import"./index-CdOHt7PJ.js";import"./index-ChK941R9.js";import"./index-BDIxr8KR.js";import"./index-DiX3zkH4.js";import"./index-8AE3I5Av.js";import"./index-Cqnxe0bC.js";var st=Be`
    .p-treetable {
        position: relative;
    }

    .p-treetable-table {
        border-spacing: 0;
        border-collapse: separate;
        width: 100%;
    }

    .p-treetable-scrollable > .p-treetable-table-container {
        position: relative;
    }

    .p-treetable-scrollable-table > .p-treetable-thead {
        inset-block-start: 0;
        z-index: 1;
    }

    .p-treetable-scrollable-table > .p-treetable-frozen-tbody {
        position: sticky;
        z-index: 1;
    }

    .p-treetable-scrollable-table > .p-treetable-tfoot {
        inset-block-end: 0;
        z-index: 1;
    }

    .p-treetable-scrollable .p-treetable-frozen-column {
        position: sticky;
        background: dt('treetable.header.cell.background');
    }

    .p-treetable-scrollable th.p-treetable-frozen-column {
        z-index: 1;
    }

    .p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-thead {
        background: dt('treetable.header.cell.background');
    }

    .p-treetable-scrollable > .p-treetable-table-container > .p-treetable-table > .p-treetable-tfoot {
        background: dt('treetable.footer.cell.background');
    }

    .p-treetable-flex-scrollable {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .p-treetable-flex-scrollable > .p-treetable-table-container {
        display: flex;
        flex-direction: column;
        flex: 1;
        height: 100%;
    }

    .p-treetable-scrollable-table > .p-treetable-tbody > .p-treetable-row-group-header {
        position: sticky;
        z-index: 1;
    }

    .p-treetable-resizable-table > .p-treetable-thead > tr > th,
    .p-treetable-resizable-table > .p-treetable-tfoot > tr > td,
    .p-treetable-resizable-table > .p-treetable-tbody > tr > td {
        overflow: hidden;
        white-space: nowrap;
    }

    .p-treetable-resizable-table > .p-treetable-thead > tr > th.p-treetable-resizable-column:not(.p-treetable-frozen-column) {
        background-clip: padding-box;
        position: relative;
    }

    .p-treetable-resizable-table-fit > .p-treetable-thead > tr > th.p-treetable-resizable-column:last-child .p-treetable-column-resizer {
        display: none;
    }

    .p-treetable-column-resizer {
        display: block;
        position: absolute;
        inset-block-start: 0;
        inset-inline-end: 0;
        margin: 0;
        width: dt('treetable.column.resizer.width');
        height: 100%;
        padding: 0;
        cursor: col-resize;
        border: 1px solid transparent;
    }

    .p-treetable-column-header-content {
        display: flex;
        align-items: center;
        gap: dt('treetable.header.cell.gap');
    }

    .p-treetable-column-resize-indicator {
        width: dt('treetable.resize.indicator.width');
        position: absolute;
        z-index: 10;
        display: none;
        background: dt('treetable.resize.indicator.color');
    }

    .p-treetable-mask {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 2;
    }

    .p-treetable-paginator-top {
        border-color: dt('treetable.paginator.top.border.color');
        border-style: solid;
        border-width: dt('treetable.paginator.top.border.width');
    }

    .p-treetable-paginator-bottom {
        border-color: dt('treetable.paginator.bottom.border.color');
        border-style: solid;
        border-width: dt('treetable.paginator.bottom.border.width');
    }

    .p-treetable-header {
        background: dt('treetable.header.background');
        color: dt('treetable.header.color');
        border-color: dt('treetable.header.border.color');
        border-style: solid;
        border-width: dt('treetable.header.border.width');
        padding: dt('treetable.header.padding');
    }

    .p-treetable-footer {
        background: dt('treetable.footer.background');
        color: dt('treetable.footer.color');
        border-color: dt('treetable.footer.border.color');
        border-style: solid;
        border-width: dt('treetable.footer.border.width');
        padding: dt('treetable.footer.padding');
    }

    .p-treetable-header-cell {
        padding: dt('treetable.header.cell.padding');
        background: dt('treetable.header.cell.background');
        border-color: dt('treetable.header.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('treetable.header.cell.color');
        font-weight: normal;
        text-align: start;
        transition:
            background dt('treetable.transition.duration'),
            color dt('treetable.transition.duration'),
            border-color dt('treetable.transition.duration'),
            outline-color dt('treetable.transition.duration'),
            box-shadow dt('treetable.transition.duration');
    }

    .p-treetable-column-title {
        font-weight: dt('treetable.column.title.font.weight');
    }

    .p-treetable-tbody > tr {
        outline-color: transparent;
        background: dt('treetable.row.background');
        color: dt('treetable.row.color');
        transition:
            background dt('treetable.transition.duration'),
            color dt('treetable.transition.duration'),
            border-color dt('treetable.transition.duration'),
            outline-color dt('treetable.transition.duration'),
            box-shadow dt('treetable.transition.duration');
    }

    .p-treetable-tbody > tr > td {
        text-align: start;
        border-color: dt('treetable.body.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        padding: dt('treetable.body.cell.padding');
    }

    .p-treetable-hoverable .p-treetable-tbody > tr:not(.p-treetable-row-selected):hover {
        background: dt('treetable.row.hover.background');
        color: dt('treetable.row.hover.color');
    }

    .p-treetable-tbody > tr.p-treetable-row-selected {
        background: dt('treetable.row.selected.background');
        color: dt('treetable.row.selected.color');
    }

    .p-treetable-tbody > tr:has(+ .p-treetable-row-selected) > td {
        border-block-end-color: dt('treetable.body.cell.selected.border.color');
    }

    .p-treetable-tbody > tr.p-treetable-row-selected > td {
        border-block-end-color: dt('treetable.body.cell.selected.border.color');
    }

    .p-treetable-tbody > tr:focus-visible,
    .p-treetable-tbody > tr.p-treetable-contextmenu-row-selected {
        box-shadow: dt('treetable.row.focus.ring.shadow');
        outline: dt('treetable.row.focus.ring.width') dt('treetable.row.focus.ring.style') dt('treetable.row.focus.ring.color');
        outline-offset: dt('treetable.row.focus.ring.offset');
    }

    .p-treetable-tfoot > tr > td {
        text-align: start;
        padding: dt('treetable.footer.cell.padding');
        border-color: dt('treetable.footer.cell.border.color');
        border-style: solid;
        border-width: 0 0 1px 0;
        color: dt('treetable.footer.cell.color');
        background: dt('treetable.footer.cell.background');
    }

    .p-treetable-column-footer {
        font-weight: dt('treetable.column.footer.font.weight');
    }

    .p-treetable-sortable-column {
        cursor: pointer;
        user-select: none;
        outline-color: transparent;
    }

    .p-treetable-column-title,
    .p-treetable-sort-icon,
    .p-treetable-sort-badge {
        vertical-align: middle;
    }

    .p-treetable-sort-icon {
        color: dt('treetable.sort.icon.color');
        font-size: dt('treetable.sort.icon.size');
        width: dt('treetable.sort.icon.size');
        height: dt('treetable.sort.icon.size');
        transition: color dt('treetable.transition.duration');
    }

    .p-treetable-sortable-column:not(.p-treetable-column-sorted):hover {
        background: dt('treetable.header.cell.hover.background');
        color: dt('treetable.header.cell.hover.color');
    }

    .p-treetable-sortable-column:not(.p-treetable-column-sorted):hover .p-treetable-sort-icon {
        color: dt('treetable.sort.icon.hover.color');
    }

    .p-treetable-column-sorted {
        background: dt('treetable.header.cell.selected.background');
        color: dt('treetable.header.cell.selected.color');
    }

    .p-treetable-column-sorted .p-treetable-sort-icon {
        color: dt('treetable.header.cell.selected.color');
    }

    .p-treetable-sortable-column:focus-visible {
        box-shadow: dt('treetable.header.cell.focus.ring.shadow');
        outline: dt('treetable.header.cell.focus.ring.width') dt('treetable.header.cell.focus.ring.style') dt('treetable.header.cell.focus.ring.color');
        outline-offset: dt('treetable.header.cell.focus.ring.offset');
    }

    .p-treetable-hoverable .p-treetable-selectable-row {
        cursor: pointer;
    }

    .p-treetable-loading-icon {
        font-size: dt('treetable.loading.icon.size');
        width: dt('treetable.loading.icon.size');
        height: dt('treetable.loading.icon.size');
    }

    .p-treetable-gridlines .p-treetable-header {
        border-width: 1px 1px 0 1px;
    }

    .p-treetable-gridlines .p-treetable-footer {
        border-width: 0 1px 1px 1px;
    }

    .p-treetable-gridlines .p-treetable-paginator-top {
        border-width: 1px 1px 0 1px;
    }

    .p-treetable-gridlines .p-treetable-paginator-bottom {
        border-width: 0 1px 1px 1px;
    }

    .p-treetable-gridlines .p-treetable-thead > tr > th {
        border-width: 1px 0 1px 1px;
    }

    .p-treetable-gridlines .p-treetable-thead > tr > th:last-child {
        border-width: 1px;
    }

    .p-treetable-gridlines .p-treetable-tbody > tr > td {
        border-width: 1px 0 0 1px;
    }

    .p-treetable-gridlines .p-treetable-tbody > tr > td:last-child {
        border-width: 1px 1px 0 1px;
    }

    .p-treetable-gridlines .p-treetable-tbody > tr:last-child > td {
        border-width: 1px 0 1px 1px;
    }

    .p-treetable-gridlines .p-treetable-tbody > tr:last-child > td:last-child {
        border-width: 1px;
    }

    .p-treetable-gridlines .p-treetable-tfoot > tr > td {
        border-width: 1px 0 1px 1px;
    }

    .p-treetable-gridlines .p-treetable-tfoot > tr > td:last-child {
        border-width: 1px 1px 1px 1px;
    }

    .p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-treetable.p-treetable-gridlines .p-treetable-thead + .p-treetable-tfoot > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td {
        border-width: 0 0 1px 1px;
    }

    .p-treetable.p-treetable-gridlines:has(.p-treetable-thead):has(.p-treetable-tbody) .p-treetable-tbody > tr > td:last-child {
        border-width: 0 1px 1px 1px;
    }

    .p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td {
        border-width: 0 0 0 1px;
    }

    .p-treetable.p-treetable-gridlines:has(.p-treetable-tbody):has(.p-treetable-tfoot) .p-treetable-tbody > tr:last-child > td:last-child {
        border-width: 0 1px 0 1px;
    }

    .p-treetable.p-treetable-sm .p-treetable-header {
        padding: 0.375rem 0.5rem;
    }

    .p-treetable.p-treetable-sm .p-treetable-thead > tr > th {
        padding: 0.375rem 0.5rem;
    }

    .p-treetable.p-treetable-sm .p-treetable-tbody > tr > td {
        padding: 0.375rem 0.5rem;
    }

    .p-treetable.p-treetable-sm .p-treetable-tfoot > tr > td {
        padding: 0.375rem 0.5rem;
    }

    .p-treetable.p-treetable-sm .p-treetable-footer {
        padding: 0.375rem 0.5rem;
    }

    .p-treetable.p-treetable-lg .p-treetable-header {
        padding: 0.9375rem 1.25rem;
    }

    .p-treetable.p-treetable-lg .p-treetable-thead > tr > th {
        padding: 0.9375rem 1.25rem;
    }

    .p-treetable.p-treetable-lg .p-treetable-tbody > tr > td {
        padding: 0.9375rem 1.25rem;
    }

    .p-treetable.p-treetable-lg .p-treetable-tfoot > tr > td {
        padding: 0.9375rem 1.25rem;
    }

    .p-treetable.p-treetable-lg .p-treetable-footer {
        padding: 0.9375rem 1.25rem;
    }

    .p-treetable-body-cell-content {
        display: flex;
        align-items: center;
        gap: dt('treetable.body.cell.gap');
    }

    .p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button {
        color: inherit;
    }

    .p-treetable-node-toggle-button {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        width: dt('treetable.node.toggle.button.size');
        height: dt('treetable.node.toggle.button.size');
        color: dt('treetable.node.toggle.button.color');
        border: 0 none;
        background: transparent;
        cursor: pointer;
        border-radius: dt('treetable.node.toggle.button.border.radius');
        transition:
            background dt('treetable.transition.duration'),
            color dt('treetable.transition.duration'),
            border-color dt('treetable.transition.duration'),
            outline-color dt('treetable.transition.duration'),
            box-shadow dt('treetable.transition.duration');
        outline-color: transparent;
        user-select: none;
    }

    .p-treetable-node-toggle-button:enabled:hover {
        color: dt('treetable.node.toggle.button.hover.color');
        background: dt('treetable.node.toggle.button.hover.background');
    }

    .p-treetable-tbody > tr.p-treetable-row-selected .p-treetable-node-toggle-button:hover {
        background: dt('treetable.node.toggle.button.selected.hover.background');
        color: dt('treetable.node.toggle.button.selected.hover.color');
    }

    .p-treetable-node-toggle-button:focus-visible {
        box-shadow: dt('treetable.node.toggle.button.focus.ring.shadow');
        outline: dt('treetable.node.toggle.button.focus.ring.width') dt('treetable.node.toggle.button.focus.ring.style') dt('treetable.node.toggle.button.focus.ring.color');
        outline-offset: dt('treetable.node.toggle.button.focus.ring.offset');
    }

    .p-treetable-node-toggle-icon:dir(rtl) {
        transform: rotate(180deg);
    }
`,dt={root:function(e){var n=e.instance,r=e.props;return["p-treetable p-component",{"p-treetable-hoverable":r.rowHover||n.rowSelectionMode,"p-treetable-resizable":r.resizableColumns,"p-treetable-resizable-fit":r.resizableColumns&&r.columnResizeMode==="fit","p-treetable-scrollable":r.scrollable,"p-treetable-flex-scrollable":r.scrollable&&r.scrollHeight==="flex","p-treetable-gridlines":r.showGridlines,"p-treetable-sm":r.size==="small","p-treetable-lg":r.size==="large"}]},loading:"p-treetable-loading",mask:"p-treetable-mask p-overlay-mask",loadingIcon:"p-treetable-loading-icon",header:"p-treetable-header",paginator:function(e){var n=e.position;return"p-treetable-paginator-"+n},tableContainer:"p-treetable-table-container",table:function(e){var n=e.props;return["p-treetable-table",{"p-treetable-scrollable-table":n.scrollable,"p-treetable-resizable-table":n.resizableColumns,"p-treetable-resizable-table-fit":n.resizableColumns&&n.columnResizeMode==="fit"}]},thead:"p-treetable-thead",headerCell:function(e){var n=e.instance,r=e.props;return["p-treetable-header-cell",{"p-treetable-sortable-column":n.columnProp("sortable"),"p-treetable-resizable-column":r.resizableColumns,"p-treetable-column-sorted":n.columnProp("sortable")?n.isColumnSorted():!1,"p-treetable-frozen-column":n.columnProp("frozen")}]},columnResizer:"p-treetable-column-resizer",columnHeaderContent:"p-treetable-column-header-content",columnTitle:"p-treetable-column-title",sortIcon:"p-treetable-sort-icon",pcSortBadge:"p-treetable-sort-badge",tbody:"p-treetable-tbody",row:function(e){var n=e.props,r=e.instance;return[{"p-treetable-row-selected":r.selected,"p-treetable-contextmenu-row-selected":n.contextMenuSelection&&r.isSelectedWithContextMenu}]},bodyCell:function(e){var n=e.instance;return[{"p-treetable-frozen-column":n.columnProp("frozen")}]},bodyCellContent:function(e){var n=e.instance;return["p-treetable-body-cell-content",{"p-treetable-body-cell-content-expander":n.columnProp("expander")}]},nodeToggleButton:"p-treetable-node-toggle-button",nodeToggleIcon:"p-treetable-node-toggle-icon",pcNodeCheckbox:"p-treetable-node-checkbox",emptyMessage:"p-treetable-empty-message",tfoot:"p-treetable-tfoot",footerCell:function(e){var n=e.instance;return[{"p-treetable-frozen-column":n.columnProp("frozen")}]},footer:"p-treetable-footer",columnResizeIndicator:"p-treetable-column-resize-indicator"},ct={tableContainer:{overflow:"auto"},thead:{position:"sticky"},tfoot:{position:"sticky"}},ut=$e.extend({name:"treetable",style:st,classes:dt,inlineStyles:ct}),pt={name:"BaseTreeTable",extends:H,props:{value:{type:null,default:null},dataKey:{type:[String,Function],default:"key"},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},metaKeySelection:{type:Boolean,default:!1},contextMenu:{type:Boolean,default:!1},contextMenuSelection:{type:Object,default:null},rows:{type:Number,default:0},first:{type:Number,default:0},totalRecords:{type:Number,default:0},paginator:{type:Boolean,default:!1},paginatorPosition:{type:String,default:"bottom"},alwaysShowPaginator:{type:Boolean,default:!0},paginatorTemplate:{type:String,default:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"},pageLinkSize:{type:Number,default:5},rowsPerPageOptions:{type:Array,default:null},currentPageReportTemplate:{type:String,default:"({currentPage} of {totalPages})"},lazy:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},loadingIcon:{type:String,default:void 0},loadingMode:{type:String,default:"mask"},rowHover:{type:Boolean,default:!1},autoLayout:{type:Boolean,default:!1},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},defaultSortOrder:{type:Number,default:1},multiSortMeta:{type:Array,default:null},sortMode:{type:String,default:"single"},removableSort:{type:Boolean,default:!1},filters:{type:Object,default:null},filterMode:{type:String,default:"lenient"},filterLocale:{type:String,default:void 0},resizableColumns:{type:Boolean,default:!1},columnResizeMode:{type:String,default:"fit"},indentation:{type:Number,default:1},showGridlines:{type:Boolean,default:!1},scrollable:{type:Boolean,default:!1},scrollHeight:{type:String,default:null},size:{type:String,default:null},tableStyle:{type:null,default:null},tableClass:{type:[String,Object],default:null},tableProps:{type:Object,default:null}},style:ut,provide:function(){return{$pcTreeTable:this,$parentInstance:this}}},Te={name:"FooterCell",hostName:"TreeTable",extends:H,props:{column:{type:Object,default:null},index:{type:Number,default:null}},data:function(){return{styleObject:{}}},mounted:function(){this.columnProp("frozen")&&this.updateStickyPosition()},updated:function(){this.columnProp("frozen")&&this.updateStickyPosition()},methods:{columnProp:function(e){return B(this.column,e)},getColumnPT:function(e){var n,r={props:this.column.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:this.index,frozen:this.columnProp("frozen"),size:(n=this.$parentInstance)===null||n===void 0?void 0:n.size}};return p(this.ptm("column.".concat(e),{column:r}),this.ptm("column.".concat(e),r),this.ptmo(this.getColumnProp(),e,r))},getColumnProp:function(){return this.column.props&&this.column.props.pt?this.column.props.pt:void 0},updateStickyPosition:function(){if(this.columnProp("frozen")){var e=this.columnProp("alignFrozen");if(e==="right"){var n=0,r=Z(this.$el,'[data-p-frozen-column="true"]');r&&(n=T(r)+parseFloat(r.style["inset-inline-end"]||0)),this.styleObject.insetInlineEnd=n+"px"}else{var l=0,o=ee(this.$el,'[data-p-frozen-column="true"]');o&&(l=T(o)+parseFloat(o.style["inset-inline-start"]||0)),this.styleObject.insetInlineStart=l+"px"}}}},computed:{containerClass:function(){return[this.columnProp("footerClass"),this.columnProp("class"),this.cx("footerCell")]},containerStyle:function(){var e=this.columnProp("footerStyle"),n=this.columnProp("style");return this.columnProp("frozen")?[n,e,this.styleObject]:[n,e]}}};function I(t){"@babel/helpers - typeof";return I=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},I(t)}function fe(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function be(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?fe(Object(n),!0).forEach(function(r){ht(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):fe(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function ht(t,e,n){return(e=ft(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ft(t){var e=bt(t,"string");return I(e)=="symbol"?e:e+""}function bt(t,e){if(I(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(I(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var mt=["data-p-frozen-column"];function gt(t,e,n,r,l,o){return c(),h("td",p({style:o.containerStyle,class:o.containerClass,role:"cell"},be(be({},o.getColumnPT("root")),o.getColumnPT("footerCell")),{"data-p-frozen-column":o.columnProp("frozen")}),[n.column.children&&n.column.children.footer?(c(),f(C(n.column.children.footer),{key:0,column:n.column},null,8,["column"])):b("",!0),o.columnProp("footer")?(c(),h("span",p({key:1,class:t.cx("columnFooter")},o.getColumnPT("columnFooter")),Q(o.columnProp("footer")),17)):b("",!0)],16,mt)}Te.render=gt;var Oe={name:"HeaderCell",hostName:"TreeTable",extends:H,emits:["column-click","column-resizestart"],props:{column:{type:Object,default:null},resizableColumns:{type:Boolean,default:!1},sortField:{type:[String,Function],default:null},sortOrder:{type:Number,default:null},multiSortMeta:{type:Array,default:null},sortMode:{type:String,default:"single"},index:{type:Number,default:null}},data:function(){return{styleObject:{}}},mounted:function(){this.columnProp("frozen")&&this.updateStickyPosition()},updated:function(){this.columnProp("frozen")&&this.updateStickyPosition()},methods:{columnProp:function(e){return B(this.column,e)},getColumnPT:function(e){var n,r={props:this.column.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:this.index,sorted:this.isColumnSorted(),frozen:this.$parentInstance.scrollable&&this.columnProp("frozen"),resizable:this.resizableColumns,scrollable:this.$parentInstance.scrollable,showGridlines:this.$parentInstance.showGridlines,size:(n=this.$parentInstance)===null||n===void 0?void 0:n.size}};return p(this.ptm("column.".concat(e),{column:r}),this.ptm("column.".concat(e),r),this.ptmo(this.getColumnProp(),e,r))},getColumnProp:function(){return this.column.props&&this.column.props.pt?this.column.props.pt:void 0},updateStickyPosition:function(){if(this.columnProp("frozen")){var e=this.columnProp("alignFrozen");if(e==="right"){var n=0,r=Z(this.$el,'[data-p-frozen-column="true"]');r&&(n=T(r)+parseFloat(r.style["inset-inline-end"]||0)),this.styleObject.insetInlineEnd=n+"px"}else{var l=0,o=ee(this.$el,'[data-p-frozen-column="true"]');o&&(l=T(o)+parseFloat(o.style["inset-inline-start"]||0)),this.styleObject.insetInlineStart=l+"px"}var a=this.$el.parentElement.nextElementSibling;if(a){var s=xe(this.$el);a.children[s].style["inset-inline-start"]=this.styleObject["inset-inline-start"],a.children[s].style["inset-inline-end"]=this.styleObject["inset-inline-end"]}}},onClick:function(e){this.$emit("column-click",{originalEvent:e,column:this.column})},onKeyDown:function(e){(e.code==="Enter"||e.code==="NumpadEnter"||e.code==="Space")&&e.currentTarget.nodeName==="TH"&&w(e.currentTarget,"data-p-sortable-column")&&(this.$emit("column-click",{originalEvent:e,column:this.column}),e.preventDefault())},onResizeStart:function(e){this.$emit("column-resizestart",e)},getMultiSortMetaIndex:function(){for(var e=-1,n=0;n<this.multiSortMeta.length;n++){var r=this.multiSortMeta[n];if(r.field===this.columnProp("field")||r.field===this.columnProp("sortField")){e=n;break}}return e},isMultiSorted:function(){return this.columnProp("sortable")&&this.getMultiSortMetaIndex()>-1},isColumnSorted:function(){return this.sortMode==="single"?this.sortField&&(this.sortField===this.columnProp("field")||this.sortField===this.columnProp("sortField")):this.isMultiSorted()}},computed:{containerClass:function(){return[this.columnProp("headerClass"),this.columnProp("class"),this.cx("headerCell")]},containerStyle:function(){var e=this.columnProp("headerStyle"),n=this.columnProp("style");return this.columnProp("frozen")?[n,e,this.styleObject]:[n,e]},sortState:function(){var e=!1,n=null;if(this.sortMode==="single")e=this.sortField&&(this.sortField===this.columnProp("field")||this.sortField===this.columnProp("sortField")),n=e?this.sortOrder:0;else if(this.sortMode==="multiple"){var r=this.getMultiSortMetaIndex();r>-1&&(e=!0,n=this.multiSortMeta[r].order)}return{sorted:e,sortOrder:n}},sortableColumnIcon:function(){var e=this.sortState,n=e.sorted,r=e.sortOrder;if(n){if(n&&r>0)return ue;if(n&&r<0)return ce}else return pe;return null},ariaSort:function(){if(this.columnProp("sortable")){var e=this.sortState,n=e.sorted,r=e.sortOrder;return n&&r<0?"descending":n&&r>0?"ascending":"none"}else return null}},components:{Badge:et,SortAltIcon:pe,SortAmountUpAltIcon:ue,SortAmountDownIcon:ce}};function F(t){"@babel/helpers - typeof";return F=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},F(t)}function me(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function ge(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?me(Object(n),!0).forEach(function(r){yt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):me(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function yt(t,e,n){return(e=vt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function vt(t){var e=kt(t,"string");return F(e)=="symbol"?e:e+""}function kt(t,e){if(F(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(F(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var St=["tabindex","aria-sort","data-p-sortable-column","data-p-resizable-column","data-p-sorted","data-p-frozen-column"];function Ct(t,e,n,r,l,o){var a=z("Badge");return c(),h("th",p({class:o.containerClass,style:[o.containerStyle],onClick:e[1]||(e[1]=function(){return o.onClick&&o.onClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),tabindex:o.columnProp("sortable")?"0":null,"aria-sort":o.ariaSort,role:"columnheader"},ge(ge({},o.getColumnPT("root")),o.getColumnPT("headerCell")),{"data-p-sortable-column":o.columnProp("sortable"),"data-p-resizable-column":n.resizableColumns,"data-p-sorted":o.isColumnSorted(),"data-p-frozen-column":o.columnProp("frozen")}),[n.resizableColumns&&!o.columnProp("frozen")?(c(),h("span",p({key:0,class:t.cx("columnResizer"),onMousedown:e[0]||(e[0]=function(){return o.onResizeStart&&o.onResizeStart.apply(o,arguments)})},o.getColumnPT("columnResizer")),null,16)):b("",!0),k("div",p({class:t.cx("columnHeaderContent")},o.getColumnPT("columnHeaderContent")),[n.column.children&&n.column.children.header?(c(),f(C(n.column.children.header),{key:0,column:n.column},null,8,["column"])):b("",!0),o.columnProp("header")?(c(),h("span",p({key:1,class:t.cx("columnTitle")},o.getColumnPT("columnTitle")),Q(o.columnProp("header")),17)):b("",!0),o.columnProp("sortable")?(c(),h("span",ze(p({key:2},o.getColumnPT("sort"))),[(c(),f(C(n.column.children&&n.column.children.sorticon||o.sortableColumnIcon),p({sorted:o.sortState.sorted,sortOrder:o.sortState.sortOrder,class:t.cx("sortIcon")},o.getColumnPT("sortIcon")),null,16,["sorted","sortOrder","class"]))],16)):b("",!0),o.isMultiSorted()?(c(),f(a,p({key:3,class:t.cx("pcSortBadge")},o.getColumnPT("pcSortBadge"),{value:o.getMultiSortMetaIndex()+1,size:"small"}),null,16,["class","value"])):b("",!0)],16)],16,St)}Oe.render=Ct;var Ke={name:"BodyCell",hostName:"TreeTable",extends:H,emits:["node-toggle","checkbox-toggle"],props:{node:{type:Object,default:null},column:{type:Object,default:null},level:{type:Number,default:0},indentation:{type:Number,default:1},leaf:{type:Boolean,default:!1},expanded:{type:Boolean,default:!1},selectionMode:{type:String,default:null},checked:{type:Boolean,default:!1},partialChecked:{type:Boolean,default:!1},templates:{type:Object,default:null},index:{type:Number,default:null},loadingMode:{type:String,default:"mask"}},data:function(){return{styleObject:{}}},mounted:function(){this.columnProp("frozen")&&this.updateStickyPosition()},updated:function(){this.columnProp("frozen")&&this.updateStickyPosition()},methods:{toggle:function(){this.$emit("node-toggle",this.node)},columnProp:function(e){return B(this.column,e)},getColumnPT:function(e){var n,r={props:this.column.props,parent:{instance:this,props:this.$props,state:this.$data},context:{index:this.index,selectable:this.$parentInstance.rowHover||this.$parentInstance.rowSelectionMode,selected:this.$parent.selected,frozen:this.columnProp("frozen"),scrollable:this.$parentInstance.scrollable,showGridlines:this.$parentInstance.showGridlines,size:(n=this.$parentInstance)===null||n===void 0?void 0:n.size,node:this.node}};return p(this.ptm("column.".concat(e),{column:r}),this.ptm("column.".concat(e),r),this.ptmo(this.getColumnProp(),e,r))},getColumnProp:function(){return this.column.props&&this.column.props.pt?this.column.props.pt:void 0},getColumnCheckboxPT:function(e){var n={props:this.column.props,parent:{instance:this,props:this.$props,state:this.$data},context:{checked:this.checked,partialChecked:this.partialChecked,node:this.node}};return p(this.ptm("column.".concat(e),{column:n}),this.ptm("column.".concat(e),n),this.ptmo(this.getColumnProp(),e,n))},updateStickyPosition:function(){if(this.columnProp("frozen")){var e=this.columnProp("alignFrozen");if(e==="right"){var n=0,r=Z(this.$el,'[data-p-frozen-column="true"]');r&&(n=T(r)+parseFloat(r.style["inset-inline-end"]||0)),this.styleObject.insetInlineEnd=n+"px"}else{var l=0,o=ee(this.$el,'[data-p-frozen-column="true"]');o&&(l=T(o)+parseFloat(o.style["inset-inline-start"]||0)),this.styleObject.insetInlineStart=l+"px"}}},resolveFieldData:function(e,n){return M(e,n)},toggleCheckbox:function(){this.$emit("checkbox-toggle")}},computed:{containerClass:function(){return[this.columnProp("bodyClass"),this.columnProp("class"),this.cx("bodyCell")]},containerStyle:function(){var e=this.columnProp("bodyStyle"),n=this.columnProp("style");return this.columnProp("frozen")?[n,e,this.styleObject]:[n,e]},togglerStyle:function(){return{marginLeft:this.level*this.indentation+"rem",visibility:this.leaf?"hidden":"visible"}},checkboxSelectionMode:function(){return this.selectionMode==="checkbox"}},components:{Checkbox:it,ChevronRightIcon:ot,ChevronDownIcon:rt,CheckIcon:Xe,MinusIcon:lt,SpinnerIcon:Me},directives:{ripple:Ge}};function D(t){"@babel/helpers - typeof";return D=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},D(t)}function ye(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function ve(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ye(Object(n),!0).forEach(function(r){wt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ye(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function wt(t,e,n){return(e=Pt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Pt(t){var e=zt(t,"string");return D(e)=="symbol"?e:e+""}function zt(t,e){if(D(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(D(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var xt=["data-p-frozen-column"];function Mt(t,e,n,r,l,o){var a=z("SpinnerIcon"),s=z("Checkbox"),d=Ve("ripple");return c(),h("td",p({style:o.containerStyle,class:o.containerClass,role:"cell"},ve(ve({},o.getColumnPT("root")),o.getColumnPT("bodyCell")),{"data-p-frozen-column":o.columnProp("frozen")}),[k("div",p({class:t.cx("bodyCellContent")},o.getColumnPT("bodyCellContent")),[o.columnProp("expander")?Ue((c(),h("button",p({key:0,type:"button",class:t.cx("nodeToggleButton"),onClick:e[0]||(e[0]=function(){return o.toggle&&o.toggle.apply(o,arguments)}),style:o.togglerStyle,tabindex:"-1"},o.getColumnPT("nodeToggleButton"),{"data-pc-group-section":"rowactionbutton"}),[n.node.loading&&n.loadingMode==="icon"?(c(),h(S,{key:0},[n.templates.nodetoggleicon?(c(),f(C(n.templates.nodetoggleicon),{key:0})):b("",!0),n.templates.nodetogglericon?(c(),f(C(n.templates.nodetogglericon),{key:1})):(c(),f(a,p({key:2,spin:""},t.ptm("nodetoggleicon")),null,16))],64)):(c(),h(S,{key:1},[n.column.children&&n.column.children.rowtoggleicon?(c(),f(C(n.column.children.rowtoggleicon),{key:0,node:n.node,expanded:n.expanded,class:y(t.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):n.templates.nodetoggleicon?(c(),f(C(n.templates.nodetoggleicon),{key:1,node:n.node,expanded:n.expanded,class:y(t.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):n.column.children&&n.column.children.rowtogglericon?(c(),f(C(n.column.children.rowtogglericon),{key:2,node:n.node,expanded:n.expanded,class:y(t.cx("nodeToggleIcon"))},null,8,["node","expanded","class"])):n.expanded?(c(),f(C(n.node.expandedIcon?"span":"ChevronDownIcon"),p({key:3,class:t.cx("nodeToggleIcon")},o.getColumnPT("nodeToggleIcon")),null,16,["class"])):(c(),f(C(n.node.collapsedIcon?"span":"ChevronRightIcon"),p({key:4,class:t.cx("nodeToggleIcon")},o.getColumnPT("nodeToggleIcon")),null,16,["class"]))],64))],16)),[[d]]):b("",!0),o.checkboxSelectionMode&&o.columnProp("expander")?(c(),f(s,{key:1,modelValue:n.checked,binary:!0,class:y(t.cx("pcNodeCheckbox")),disabled:n.node.selectable===!1,onChange:o.toggleCheckbox,tabindex:-1,indeterminate:n.partialChecked,unstyled:t.unstyled,pt:o.getColumnCheckboxPT("pcNodeCheckbox"),"data-p-partialchecked":n.partialChecked},{icon:g(function(u){return[n.templates.checkboxicon?(c(),f(C(n.templates.checkboxicon),{key:0,checked:u.checked,partialChecked:n.partialChecked,class:y(u.class)},null,8,["checked","partialChecked","class"])):b("",!0)]}),_:1},8,["modelValue","class","disabled","onChange","indeterminate","unstyled","pt","data-p-partialchecked"])):b("",!0),n.column.children&&n.column.children.body?(c(),f(C(n.column.children.body),{key:2,node:n.node,column:n.column},null,8,["node","column"])):(c(),h(S,{key:3},[We(Q(o.resolveFieldData(n.node.data,o.columnProp("field"))),1)],64))],16)],16,xt)}Ke.render=Mt;function N(t){"@babel/helpers - typeof";return N=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},N(t)}function q(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=je(t))||e){n&&(t=n);var r=0,l=function(){};return{s:l,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return a=u.done,u},e:function(u){s=!0,o=u},f:function(){try{a||n.return==null||n.return()}finally{if(s)throw o}}}}function ke(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function _(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?ke(Object(n),!0).forEach(function(r){Tt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):ke(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Tt(t,e,n){return(e=Ot(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ot(t){var e=Kt(t,"string");return N(e)=="symbol"?e:e+""}function Kt(t,e){if(N(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(N(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Se(t){return Rt(t)||Et(t)||je(t)||jt()}function jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function je(t,e){if(t){if(typeof t=="string")return J(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?J(t,e):void 0}}function Et(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Rt(t){if(Array.isArray(t))return J(t)}function J(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var Ee={name:"TreeTableRow",hostName:"TreeTable",extends:H,emits:["node-click","node-toggle","checkbox-change","nodeClick","nodeToggle","checkboxChange","row-rightclick","rowRightclick"],props:{node:{type:null,default:null},dataKey:{type:[String,Function],default:"key"},parentNode:{type:null,default:null},columns:{type:null,default:null},expandedKeys:{type:null,default:null},selectionKeys:{type:null,default:null},selectionMode:{type:String,default:null},level:{type:Number,default:0},indentation:{type:Number,default:1},tabindex:{type:Number,default:-1},ariaSetSize:{type:Number,default:null},ariaPosInset:{type:Number,default:null},loadingMode:{type:String,default:"mask"},templates:{type:Object,default:null},contextMenu:{type:Boolean,default:!1},contextMenuSelection:{type:Object,default:null}},nodeTouched:!1,methods:{columnProp:function(e,n){return B(e,n)},toggle:function(){this.$emit("node-toggle",this.node)},onClick:function(e){oe(e.target)||w(e.target,"data-pc-section")==="nodetogglebutton"||w(e.target,"data-pc-section")==="nodetoggleicon"||e.target.tagName==="path"||(this.setTabIndexForSelectionMode(e,this.nodeTouched),this.$emit("node-click",{originalEvent:e,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1)},onRowRightClick:function(e){this.$emit("row-rightclick",{originalEvent:e,node:this.node})},onTouchEnd:function(){this.nodeTouched=!0},nodeKey:function(e){return M(e,this.dataKey)},onKeyDown:function(e,n){switch(e.code){case"ArrowDown":this.onArrowDownKey(e);break;case"ArrowUp":this.onArrowUpKey(e);break;case"ArrowLeft":this.onArrowLeftKey(e);break;case"ArrowRight":this.onArrowRightKey(e);break;case"Home":this.onHomeKey(e);break;case"End":this.onEndKey(e);break;case"Enter":case"NumpadEnter":case"Space":oe(e.target)||this.onEnterKey(e,n);break;case"Tab":this.onTabKey(e);break}},onArrowDownKey:function(e){var n=e.currentTarget.nextElementSibling;n&&this.focusRowChange(e.currentTarget,n),e.preventDefault()},onArrowUpKey:function(e){var n=e.currentTarget.previousElementSibling;n&&this.focusRowChange(e.currentTarget,n),e.preventDefault()},onArrowRightKey:function(e){var n=this,r=j(e.currentTarget,"button").style.visibility==="hidden",l=j(this.$refs.node,'[data-pc-section="nodetogglebutton"]');r||(!this.expanded&&l.click(),this.$nextTick(function(){n.onArrowDownKey(e)}),e.preventDefault())},onArrowLeftKey:function(e){if(!(this.level===0&&!this.expanded)){var n=e.currentTarget,r=j(n,"button").style.visibility==="hidden",l=j(n,'[data-pc-section="nodetogglebutton"]');if(this.expanded&&!r){l.click();return}var o=this.findBeforeClickableNode(n);o&&this.focusRowChange(n,o)}},onHomeKey:function(e){var n=j(e.currentTarget.parentElement,'tr[aria-level="'.concat(this.level+1,'"]'));n&&X(n),e.preventDefault()},onEndKey:function(e){var n=G(e.currentTarget.parentElement,'tr[aria-level="'.concat(this.level+1,'"]')),r=n[n.length-1];X(r),e.preventDefault()},onEnterKey:function(e){if(e.preventDefault(),this.setTabIndexForSelectionMode(e,this.nodeTouched),this.selectionMode==="checkbox"){this.toggleCheckbox();return}this.$emit("node-click",{originalEvent:e,nodeTouched:this.nodeTouched,node:this.node}),this.nodeTouched=!1},onTabKey:function(){var e=Se(G(this.$refs.node.parentElement,"tr")),n=e.some(function(l){return w(l,"data-p-selected")||l.getAttribute("aria-checked")==="true"});if(e.forEach(function(l){l.tabIndex=-1}),n){var r=e.filter(function(l){return w(l,"data-p-selected")||l.getAttribute("aria-checked")==="true"});r[0].tabIndex=0;return}e[0].tabIndex=0},focusRowChange:function(e,n){e.tabIndex="-1",n.tabIndex="0",X(n)},findBeforeClickableNode:function(e){var n=e.previousElementSibling;if(n){var r=n.querySelector("button");return r&&r.style.visibility!=="hidden"?n:this.findBeforeClickableNode(n)}return null},toggleCheckbox:function(){var e=this.selectionKeys?_({},this.selectionKeys):{},n=!this.checked;this.propagateDown(this.node,n,e),this.$emit("checkbox-change",{node:this.node,check:n,selectionKeys:e})},propagateDown:function(e,n,r){if(n?r[this.nodeKey(e)]={checked:!0,partialChecked:!1}:delete r[this.nodeKey(e)],e.children&&e.children.length){var l=q(e.children),o;try{for(l.s();!(o=l.n()).done;){var a=o.value;this.propagateDown(a,n,r)}}catch(s){l.e(s)}finally{l.f()}}},propagateUp:function(e){var n=e.check,r=_({},e.selectionKeys),l=0,o=!1,a=q(this.node.children),s;try{for(a.s();!(s=a.n()).done;){var d=s.value;r[this.nodeKey(d)]&&r[this.nodeKey(d)].checked?l++:r[this.nodeKey(d)]&&r[this.nodeKey(d)].partialChecked&&(o=!0)}}catch(u){a.e(u)}finally{a.f()}n&&l===this.node.children.length?r[this.nodeKey(this.node)]={checked:!0,partialChecked:!1}:(n||delete r[this.nodeKey(this.node)],o||l>0&&l!==this.node.children.length?r[this.nodeKey(this.node)]={checked:!1,partialChecked:!0}:r[this.nodeKey(this.node)]={checked:!1,partialChecked:!1}),this.$emit("checkbox-change",{node:e.node,check:e.check,selectionKeys:r})},onCheckboxChange:function(e){var n=e.check,r=_({},e.selectionKeys),l=0,o=!1,a=q(this.node.children),s;try{for(a.s();!(s=a.n()).done;){var d=s.value;r[this.nodeKey(d)]&&r[this.nodeKey(d)].checked?l++:r[this.nodeKey(d)]&&r[this.nodeKey(d)].partialChecked&&(o=!0)}}catch(u){a.e(u)}finally{a.f()}n&&l===this.node.children.length?r[this.nodeKey(this.node)]={checked:!0,partialChecked:!1}:(n||delete r[this.nodeKey(this.node)],o||l>0&&l!==this.node.children.length?r[this.nodeKey(this.node)]={checked:!1,partialChecked:!0}:r[this.nodeKey(this.node)]={checked:!1,partialChecked:!1}),this.$emit("checkbox-change",{node:e.node,check:e.check,selectionKeys:r})},setTabIndexForSelectionMode:function(e,n){if(this.selectionMode!==null){var r=Se(G(this.$refs.node.parentElement,"tr"));e.currentTarget.tabIndex=n===!1?-1:0,r.every(function(l){return l.tabIndex===-1})&&(r[0].tabIndex=0)}}},computed:{containerClass:function(){return[this.node.styleClass,this.cx("row")]},expanded:function(){return this.expandedKeys&&this.expandedKeys[this.nodeKey(this.node)]===!0},leaf:function(){return this.node.leaf===!1?!1:!(this.node.children&&this.node.children.length)},selected:function(){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.nodeKey(this.node)]===!0:!1},isSelectedWithContextMenu:function(){return this.node&&this.contextMenuSelection?qe(this.node,this.contextMenuSelection,this.dataKey):!1},checked:function(){return this.selectionKeys?this.selectionKeys[this.nodeKey(this.node)]&&this.selectionKeys[this.nodeKey(this.node)].checked:!1},partialChecked:function(){return this.selectionKeys?this.selectionKeys[this.nodeKey(this.node)]&&this.selectionKeys[this.nodeKey(this.node)].partialChecked:!1},getAriaSelected:function(){return this.selectionMode==="single"||this.selectionMode==="multiple"?this.selected:null},ptmOptions:function(){return{context:{selectable:this.$parentInstance.rowHover||this.$parentInstance.rowSelectionMode,selected:this.selected,scrollable:this.$parentInstance.scrollable}}}},components:{TTBodyCell:Ke}},It=["tabindex","aria-expanded","aria-level","aria-setsize","aria-posinset","aria-selected","aria-checked","data-p-selected","data-p-selected-contextmenu"];function Ft(t,e,n,r,l,o){var a=z("TTBodyCell"),s=z("TreeTableRow",!0);return c(),h(S,null,[k("tr",p({ref:"node",class:o.containerClass,style:n.node.style,tabindex:n.tabindex,role:"row","aria-expanded":n.node.children&&n.node.children.length?o.expanded:void 0,"aria-level":n.level+1,"aria-setsize":n.ariaSetSize,"aria-posinset":n.ariaPosInset,"aria-selected":o.getAriaSelected,"aria-checked":o.checked||void 0,onClick:e[1]||(e[1]=function(){return o.onClick&&o.onClick.apply(o,arguments)}),onKeydown:e[2]||(e[2]=function(){return o.onKeyDown&&o.onKeyDown.apply(o,arguments)}),onTouchend:e[3]||(e[3]=function(){return o.onTouchEnd&&o.onTouchEnd.apply(o,arguments)}),onContextmenu:e[4]||(e[4]=function(){return o.onRowRightClick&&o.onRowRightClick.apply(o,arguments)})},t.ptm("row",o.ptmOptions),{"data-p-selected":o.selected,"data-p-selected-contextmenu":n.contextMenuSelection&&o.isSelectedWithContextMenu}),[(c(!0),h(S,null,O(n.columns,function(d,u){return c(),h(S,{key:o.columnProp(d,"columnKey")||o.columnProp(d,"field")||u},[o.columnProp(d,"hidden")?b("",!0):(c(),f(a,{key:0,column:d,node:n.node,level:n.level,leaf:o.leaf,indentation:n.indentation,expanded:o.expanded,selectionMode:n.selectionMode,checked:o.checked,partialChecked:o.partialChecked,templates:n.templates,onNodeToggle:e[0]||(e[0]=function(i){return t.$emit("node-toggle",i)}),onCheckboxToggle:o.toggleCheckbox,index:u,loadingMode:n.loadingMode,unstyled:t.unstyled,pt:t.pt},null,8,["column","node","level","leaf","indentation","expanded","selectionMode","checked","partialChecked","templates","onCheckboxToggle","index","loadingMode","unstyled","pt"]))],64)}),128))],16,It),o.expanded&&n.node.children&&n.node.children.length?(c(!0),h(S,{key:0},O(n.node.children,function(d){return c(),f(s,{key:o.nodeKey(d),dataKey:n.dataKey,columns:n.columns,node:d,parentNode:n.node,level:n.level+1,expandedKeys:n.expandedKeys,selectionMode:n.selectionMode,selectionKeys:n.selectionKeys,contextMenu:n.contextMenu,contextMenuSelection:n.contextMenuSelection,indentation:n.indentation,ariaPosInset:n.node.children.indexOf(d)+1,ariaSetSize:n.node.children.length,templates:n.templates,onNodeToggle:e[5]||(e[5]=function(u){return t.$emit("node-toggle",u)}),onNodeClick:e[6]||(e[6]=function(u){return t.$emit("node-click",u)}),onRowRightclick:e[7]||(e[7]=function(u){return t.$emit("row-rightclick",u)}),onCheckboxChange:o.onCheckboxChange,unstyled:t.unstyled,pt:t.pt},null,8,["dataKey","columns","node","parentNode","level","expandedKeys","selectionMode","selectionKeys","contextMenu","contextMenuSelection","indentation","ariaPosInset","ariaSetSize","templates","onCheckboxChange","unstyled","pt"])}),128)):b("",!0)],64)}Ee.render=Ft;function L(t){"@babel/helpers - typeof";return L=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},L(t)}function W(t,e){var n=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=Re(t))||e){n&&(t=n);var r=0,l=function(){};return{s:l,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(u){throw u},f:l}}throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var o,a=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var u=n.next();return a=u.done,u},e:function(u){s=!0,o=u},f:function(){try{a||n.return==null||n.return()}finally{if(s)throw o}}}}function Ce(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function x(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Ce(Object(n),!0).forEach(function(r){Dt(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Ce(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function Dt(t,e,n){return(e=Nt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Nt(t){var e=Lt(t,"string");return L(e)=="symbol"?e:e+""}function Lt(t,e){if(L(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(L(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function R(t){return Bt(t)||Ht(t)||Re(t)||At()}function At(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Re(t,e){if(t){if(typeof t=="string")return Y(t,e);var n={}.toString.call(t).slice(8,-1);return n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set"?Array.from(t):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Y(t,e):void 0}}function Ht(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Bt(t){if(Array.isArray(t))return Y(t)}function Y(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,r=Array(e);n<e;n++)r[n]=t[n];return r}var Ie={name:"TreeTable",extends:pt,inheritAttrs:!1,emits:["node-expand","node-collapse","update:expandedKeys","update:selectionKeys","node-select","node-unselect","update:first","update:rows","page","update:sortField","update:sortOrder","update:multiSortMeta","sort","filter","column-resize-end","update:contextMenuSelection","row-contextmenu"],provide:function(){return{$columns:this.d_columns}},data:function(){return{d_expandedKeys:this.expandedKeys||{},d_first:this.first,d_rows:this.rows,d_sortField:this.sortField,d_sortOrder:this.sortOrder,d_multiSortMeta:this.multiSortMeta?R(this.multiSortMeta):[],hasASelectedNode:!1,d_columns:new Ze({type:"Column"})}},documentColumnResizeListener:null,documentColumnResizeEndListener:null,lastResizeHelperX:null,resizeColumnElement:null,watch:{expandedKeys:function(e){this.d_expandedKeys=e},first:function(e){this.d_first=e},rows:function(e){this.d_rows=e},sortField:function(e){this.d_sortField=e},sortOrder:function(e){this.d_sortOrder=e},multiSortMeta:function(e){this.d_multiSortMeta=e}},beforeUnmount:function(){this.destroyStyleElement(),this.d_columns.clear()},methods:{columnProp:function(e,n){return B(e,n)},ptHeaderCellOptions:function(e){return{context:{frozen:this.columnProp(e,"frozen")}}},onNodeToggle:function(e){var n=this.nodeKey(e);this.d_expandedKeys[n]?(delete this.d_expandedKeys[n],this.$emit("node-collapse",e)):(this.d_expandedKeys[n]=!0,this.$emit("node-expand",e)),this.d_expandedKeys=x({},this.d_expandedKeys),this.$emit("update:expandedKeys",this.d_expandedKeys)},onNodeClick:function(e){if(this.rowSelectionMode&&e.node.selectable!==!1){var n=e.nodeTouched?!1:this.metaKeySelection,r=n?this.handleSelectionWithMetaKey(e):this.handleSelectionWithoutMetaKey(e);this.$emit("update:selectionKeys",r)}},nodeKey:function(e){return M(e,this.dataKey)},handleSelectionWithMetaKey:function(e){var n=e.originalEvent,r=e.node,l=this.nodeKey(r),o=n.metaKey||n.ctrlKey,a=this.isNodeSelected(r),s;return a&&o?(this.isSingleSelectionMode()?s={}:(s=x({},this.selectionKeys),delete s[l]),this.$emit("node-unselect",r)):(this.isSingleSelectionMode()?s={}:this.isMultipleSelectionMode()&&(s=o?this.selectionKeys?x({},this.selectionKeys):{}:{}),s[l]=!0,this.$emit("node-select",r)),s},handleSelectionWithoutMetaKey:function(e){var n=e.node,r=this.nodeKey(n),l=this.isNodeSelected(n),o;return this.isSingleSelectionMode()?l?(o={},this.$emit("node-unselect",n)):(o={},o[r]=!0,this.$emit("node-select",n)):l?(o=x({},this.selectionKeys),delete o[r],this.$emit("node-unselect",n)):(o=this.selectionKeys?x({},this.selectionKeys):{},o[r]=!0,this.$emit("node-select",n)),o},onCheckboxChange:function(e){this.$emit("update:selectionKeys",e.selectionKeys),e.check?this.$emit("node-select",e.node):this.$emit("node-unselect",e.node)},onRowRightClick:function(e){this.contextMenu&&(de(),e.originalEvent.target.focus()),this.$emit("update:contextMenuSelection",e.node),this.$emit("row-contextmenu",e)},isSingleSelectionMode:function(){return this.selectionMode==="single"},isMultipleSelectionMode:function(){return this.selectionMode==="multiple"},onPage:function(e){this.d_first=e.first,this.d_rows=e.rows;var n=this.createLazyLoadEvent(e);n.pageCount=e.pageCount,n.page=e.page,this.d_expandedKeys={},this.$emit("update:expandedKeys",this.d_expandedKeys),this.$emit("update:first",this.d_first),this.$emit("update:rows",this.d_rows),this.$emit("page",n)},resetPage:function(){this.d_first=0,this.$emit("update:first",this.d_first)},getFilterColumnHeaderClass:function(e){return[this.cx("headerCell",{column:e}),this.columnProp(e,"filterHeaderClass")]},onColumnHeaderClick:function(e){var n=e.originalEvent,r=e.column;if(this.columnProp(r,"sortable")){var l=n.target,o=this.columnProp(r,"sortField")||this.columnProp(r,"field");if(w(l,"data-p-sortable-column")===!0||w(l,"data-pc-section")==="columntitle"||w(l,"data-pc-section")==="columnheadercontent"||w(l,"data-pc-section")==="sorticon"||w(l.parentElement,"data-pc-section")==="sorticon"||w(l.parentElement.parentElement,"data-pc-section")==="sorticon"||l.closest('[data-p-sortable-column="true"]')){if(de(),this.sortMode==="single")this.d_sortField===o?this.removableSort&&this.d_sortOrder*-1===this.defaultSortOrder?(this.d_sortOrder=null,this.d_sortField=null):this.d_sortOrder=this.d_sortOrder*-1:(this.d_sortOrder=this.defaultSortOrder,this.d_sortField=o),this.$emit("update:sortField",this.d_sortField),this.$emit("update:sortOrder",this.d_sortOrder),this.resetPage();else if(this.sortMode==="multiple"){var a=n.metaKey||n.ctrlKey;a||(this.d_multiSortMeta=this.d_multiSortMeta.filter(function(s){return s.field===o})),this.addMultiSortField(o),this.$emit("update:multiSortMeta",this.d_multiSortMeta)}this.$emit("sort",this.createLazyLoadEvent(n))}}},addMultiSortField:function(e){var n=this.d_multiSortMeta.findIndex(function(r){return r.field===e});n>=0?this.removableSort&&this.d_multiSortMeta[n].order*-1===this.defaultSortOrder?this.d_multiSortMeta.splice(n,1):this.d_multiSortMeta[n]={field:e,order:this.d_multiSortMeta[n].order*-1}:this.d_multiSortMeta.push({field:e,order:this.defaultSortOrder}),this.d_multiSortMeta=R(this.d_multiSortMeta)},sortSingle:function(e){return this.sortNodesSingle(e)},sortNodesSingle:function(e){var n=this,r=R(e),l=ae();return r.sort(function(o,a){var s=M(o.data,n.d_sortField),d=M(a.data,n.d_sortField);return se(s,d,n.d_sortOrder,l)}),r},sortMultiple:function(e){return this.sortNodesMultiple(e)},sortNodesMultiple:function(e){var n=this,r=R(e);return r.sort(function(l,o){return n.multisortField(l,o,0)}),r},multisortField:function(e,n,r){var l=M(e.data,this.d_multiSortMeta[r].field),o=M(n.data,this.d_multiSortMeta[r].field),a=ae();return l===o?this.d_multiSortMeta.length-1>r?this.multisortField(e,n,r+1):0:se(l,o,this.d_multiSortMeta[r].order,a)},filter:function(e){var n=[],r=this.filterMode==="strict",l=W(e),o;try{for(l.s();!(o=l.n()).done;){for(var a=o.value,s=x({},a),d=!0,u=!1,i=0;i<this.columns.length;i++){var v=this.columns[i],P=this.columnProp(v,"filterField")||this.columnProp(v,"field");if(Object.prototype.hasOwnProperty.call(this.filters,P)){var Fe=this.columnProp(v,"filterMatchMode")||"startsWith",De=this.filters[P],Ne=ie.filters[Fe],$={filterField:P,filterValue:De,filterConstraint:Ne,strict:r};if((r&&!(this.findFilteredNodes(s,$)||this.isFilterMatched(s,$))||!r&&!(this.isFilterMatched(s,$)||this.findFilteredNodes(s,$)))&&(d=!1),!d)break}if(this.hasGlobalFilter()&&!u){var K=x({},s),Le=this.filters.global,Ae=ie.filters.contains,V={filterField:P,filterValue:Le,filterConstraint:Ae,strict:r};(r&&(this.findFilteredNodes(K,V)||this.isFilterMatched(K,V))||!r&&(this.isFilterMatched(K,V)||this.findFilteredNodes(K,V)))&&(u=!0,s=K)}}var te=d;this.hasGlobalFilter()&&(te=d&&u),te&&n.push(s)}}catch(He){l.e(He)}finally{l.f()}var ne=this.createLazyLoadEvent(event);return ne.filteredValue=n,this.$emit("filter",ne),n},findFilteredNodes:function(e,n){if(e){var r=!1;if(e.children){var l=R(e.children);e.children=[];var o=W(l),a;try{for(o.s();!(a=o.n()).done;){var s=a.value,d=x({},s);this.isFilterMatched(d,n)&&(r=!0,e.children.push(d))}}catch(u){o.e(u)}finally{o.f()}}if(r)return!0}},isFilterMatched:function(e,n){var r=n.filterField,l=n.filterValue,o=n.filterConstraint,a=n.strict,s=!1,d=M(e.data,r);return o(d,l,this.filterLocale)&&(s=!0),(!s||a&&!this.isNodeLeaf(e))&&(s=this.findFilteredNodes(e,{filterField:r,filterValue:l,filterConstraint:o,strict:a})||s),s},isNodeSelected:function(e){return this.selectionMode&&this.selectionKeys?this.selectionKeys[this.nodeKey(e)]===!0:!1},isNodeLeaf:function(e){return e.leaf===!1?!1:!(e.children&&e.children.length)},createLazyLoadEvent:function(e){var n=this,r;return this.hasFilters()&&(r={},this.columns.forEach(function(l){n.columnProp(l,"field")&&(r[l.props.field]=n.columnProp(l,"filterMatchMode"))})),{originalEvent:e,first:this.d_first,rows:this.d_rows,sortField:this.d_sortField,sortOrder:this.d_sortOrder,multiSortMeta:this.d_multiSortMeta,filters:this.filters,filterMatchModes:r}},onColumnResizeStart:function(e){var n=le(this.$el).left;this.resizeColumnElement=e.target.parentElement,this.columnResizing=!0,this.lastResizeHelperX=e.pageX-n+this.$el.scrollLeft,this.bindColumnResizeEvents()},onColumnResize:function(e){var n=le(this.$el).left;this.$el.setAttribute("data-p-unselectable-text","true"),!this.isUnstyled&&Ye(this.$el,{"user-select":"none"}),this.$refs.resizeHelper.style.height=this.$el.offsetHeight+"px",this.$refs.resizeHelper.style.top="0px",this.$refs.resizeHelper.style.left=e.pageX-n+this.$el.scrollLeft+"px",this.$refs.resizeHelper.style.display="block"},onColumnResizeEnd:function(){var e=Je(this.$el)?this.lastResizeHelperX-this.$refs.resizeHelper.offsetLeft:this.$refs.resizeHelper.offsetLeft-this.lastResizeHelperX,n=this.resizeColumnElement.offsetWidth,r=n+e,l=this.resizeColumnElement.style.minWidth||15;if(n+e>parseInt(l,10)){if(this.columnResizeMode==="fit"){var o=this.resizeColumnElement.nextElementSibling,a=o.offsetWidth-e;r>15&&a>15&&this.resizeTableCells(r,a)}else if(this.columnResizeMode==="expand"){var s=this.$refs.table.offsetWidth+e+"px",d=function(i){i&&(i.style.width=i.style.minWidth=s)};this.resizeTableCells(r),d(this.$refs.table)}this.$emit("column-resize-end",{element:this.resizeColumnElement,delta:e})}this.$refs.resizeHelper.style.display="none",this.resizeColumn=null,this.$el.removeAttribute("data-p-unselectable-text"),!this.isUnstyled&&(this.$el.style["user-select"]=""),this.unbindColumnResizeEvents()},resizeTableCells:function(e,n){var r=xe(this.resizeColumnElement),l=[],o=G(this.$refs.table,'thead[data-pc-section="thead"] > tr > th');o.forEach(function(d){return l.push(T(d))}),this.destroyStyleElement(),this.createStyleElement();var a="",s='[data-pc-name="treetable"]['.concat(this.$attrSelector,'] > [data-pc-section="tablecontainer"] > table[data-pc-section="table"]');l.forEach(function(d,u){var i=u===r?e:n&&u===r+1?n:d,v="width: ".concat(i,"px !important; max-width: ").concat(i,"px !important");a+=`
                    `.concat(s,' > thead[data-pc-section="thead"] > tr > th:nth-child(').concat(u+1,`),
                    `).concat(s,' > tbody[data-pc-section="tbody"] > tr > td:nth-child(').concat(u+1,`),
                    `).concat(s,' > tfoot[data-pc-section="tfoot"] > tr > td:nth-child(').concat(u+1,`) {
                        `).concat(v,`
                    }
                `)}),this.styleElement.innerHTML=a},bindColumnResizeEvents:function(){var e=this;this.documentColumnResizeListener||(this.documentColumnResizeListener=document.addEventListener("mousemove",function(n){e.columnResizing&&e.onColumnResize(n)})),this.documentColumnResizeEndListener||(this.documentColumnResizeEndListener=document.addEventListener("mouseup",function(){e.columnResizing&&(e.columnResizing=!1,e.onColumnResizeEnd())}))},unbindColumnResizeEvents:function(){this.documentColumnResizeListener&&(document.removeEventListener("document",this.documentColumnResizeListener),this.documentColumnResizeListener=null),this.documentColumnResizeEndListener&&(document.removeEventListener("document",this.documentColumnResizeEndListener),this.documentColumnResizeEndListener=null)},onColumnKeyDown:function(e,n){(e.code==="Enter"||e.code==="NumpadEnter")&&e.currentTarget.nodeName==="TH"&&w(e.currentTarget,"data-p-sortable-column")&&this.onColumnHeaderClick(e,n)},hasColumnFilter:function(){if(this.columns){var e=W(this.columns),n;try{for(e.s();!(n=e.n()).done;){var r=n.value;if(r.children&&r.children.filter)return!0}}catch(l){e.e(l)}finally{e.f()}}return!1},hasFilters:function(){return this.filters&&Object.keys(this.filters).length>0&&this.filters.constructor===Object},hasGlobalFilter:function(){return this.filters&&Object.prototype.hasOwnProperty.call(this.filters,"global")},getItemLabel:function(e){return e.data.name},createStyleElement:function(){var e;this.styleElement=document.createElement("style"),this.styleElement.type="text/css",_e(this.styleElement,"nonce",(e=this.$primevue)===null||e===void 0||(e=e.config)===null||e===void 0||(e=e.csp)===null||e===void 0?void 0:e.nonce),document.head.appendChild(this.styleElement)},destroyStyleElement:function(){this.styleElement&&(document.head.removeChild(this.styleElement),this.styleElement=null)},setTabindex:function(e,n){if(this.isNodeSelected(e))return this.hasASelectedNode=!0,0;if(this.selectionMode){if(!this.isNodeSelected(e)&&n===0&&!this.hasASelectedNode)return 0}else if(!this.selectionMode&&n===0)return 0;return-1}},computed:{columns:function(){return this.d_columns.get(this)},processedData:function(){if(this.lazy)return this.value;if(this.value&&this.value.length){var e=this.value;return this.sorted&&(this.sortMode==="single"?e=this.sortSingle(e):this.sortMode==="multiple"&&(e=this.sortMultiple(e))),this.hasFilters()&&(e=this.filter(e)),e}else return null},dataToRender:function(){var e=this.processedData;if(this.paginator){var n=this.lazy?0:this.d_first;return e.slice(n,n+this.d_rows)}else return e},empty:function(){var e=this.processedData;return!e||e.length===0},sorted:function(){return this.d_sortField||this.d_multiSortMeta&&this.d_multiSortMeta.length>0},hasFooter:function(){var e=!1,n=W(this.columns),r;try{for(n.s();!(r=n.n()).done;){var l=r.value;if(this.columnProp(l,"footer")||l.children&&l.children.footer){e=!0;break}}}catch(o){n.e(o)}finally{n.f()}return e},paginatorTop:function(){return this.paginator&&(this.paginatorPosition!=="bottom"||this.paginatorPosition==="both")},paginatorBottom:function(){return this.paginator&&(this.paginatorPosition!=="top"||this.paginatorPosition==="both")},singleSelectionMode:function(){return this.selectionMode&&this.selectionMode==="single"},multipleSelectionMode:function(){return this.selectionMode&&this.selectionMode==="multiple"},rowSelectionMode:function(){return this.singleSelectionMode||this.multipleSelectionMode},totalRecordsLength:function(){if(this.lazy)return this.totalRecords;var e=this.processedData;return e?e.length:0}},components:{TTRow:Ee,TTPaginator:tt,TTHeaderCell:Oe,TTFooterCell:Te,SpinnerIcon:Me}};function A(t){"@babel/helpers - typeof";return A=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},A(t)}function we(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter(function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable})),n.push.apply(n,r)}return n}function Pe(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?we(Object(n),!0).forEach(function(r){$t(t,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):we(Object(n)).forEach(function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(n,r))})}return t}function $t(t,e,n){return(e=Vt(e))in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Vt(t){var e=Ut(t,"string");return A(e)=="symbol"?e:e+""}function Ut(t,e){if(A(t)!="object"||!t)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var r=n.call(t,e);if(A(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var Wt=["colspan"];function Gt(t,e,n,r,l,o){var a=z("TTPaginator"),s=z("TTHeaderCell"),d=z("TTRow"),u=z("TTFooterCell");return c(),h("div",p({class:t.cx("root"),"data-scrollselectors":".p-treetable-scrollable-body"},t.ptmi("root")),[m(t.$slots,"default"),t.loading&&t.loadingMode==="mask"?(c(),h("div",p({key:0,class:t.cx("loading")},t.ptm("loading")),[k("div",p({class:t.cx("mask")},t.ptm("mask")),[m(t.$slots,"loadingicon",{class:y(t.cx("loadingIcon"))},function(){return[(c(),f(C(t.loadingIcon?"span":"SpinnerIcon"),p({spin:"",class:[t.cx("loadingIcon"),t.loadingIcon]},t.ptm("loadingIcon")),null,16,["class"]))]})],16)],16)):b("",!0),t.$slots.header?(c(),h("div",p({key:1,class:t.cx("header")},t.ptm("header")),[m(t.$slots,"header")],16)):b("",!0),o.paginatorTop?(c(),f(a,{key:2,rows:l.d_rows,first:l.d_first,totalRecords:o.totalRecordsLength,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:y(t.cx("pcPaginator",{position:"top"})),onPage:e[0]||(e[0]=function(i){return o.onPage(i)}),alwaysShow:t.alwaysShowPaginator,unstyled:t.unstyled,pt:t.ptm("pcPaginator")},re({_:2},[t.$slots.paginatorcontainer?{name:"container",fn:g(function(i){return[m(t.$slots,"paginatorcontainer",{first:i.first,last:i.last,rows:i.rows,page:i.page,pageCount:i.pageCount,totalRecords:i.totalRecords,firstPageCallback:i.firstPageCallback,lastPageCallback:i.lastPageCallback,prevPageCallback:i.prevPageCallback,nextPageCallback:i.nextPageCallback,rowChangeCallback:i.rowChangeCallback})]}),key:"0"}:void 0,t.$slots.paginatorstart?{name:"start",fn:g(function(){return[m(t.$slots,"paginatorstart")]}),key:"1"}:void 0,t.$slots.paginatorend?{name:"end",fn:g(function(){return[m(t.$slots,"paginatorend")]}),key:"2"}:void 0,t.$slots.paginatorfirstpagelinkicon?{name:"firstpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatorfirstpagelinkicon",{class:y(i.class)})]}),key:"3"}:void 0,t.$slots.paginatorprevpagelinkicon?{name:"prevpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatorprevpagelinkicon",{class:y(i.class)})]}),key:"4"}:void 0,t.$slots.paginatornextpagelinkicon?{name:"nextpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatornextpagelinkicon",{class:y(i.class)})]}),key:"5"}:void 0,t.$slots.paginatorlastpagelinkicon?{name:"lastpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatorlastpagelinkicon",{class:y(i.class)})]}),key:"6"}:void 0,t.$slots.paginatorjumptopagedropdownicon?{name:"jumptopagedropdownicon",fn:g(function(i){return[m(t.$slots,"paginatorjumptopagedropdownicon",{class:y(i.class)})]}),key:"7"}:void 0,t.$slots.paginatorrowsperpagedropdownicon?{name:"rowsperpagedropdownicon",fn:g(function(i){return[m(t.$slots,"paginatorrowsperpagedropdownicon",{class:y(i.class)})]}),key:"8"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):b("",!0),k("div",p({class:t.cx("tableContainer"),style:[t.sx("tableContainer"),{maxHeight:t.scrollHeight}]},t.ptm("tableContainer")),[k("table",p({ref:"table",role:"table",class:[t.cx("table"),t.tableClass],style:t.tableStyle},Pe(Pe({},t.tableProps),t.ptm("table"))),[k("thead",p({class:t.cx("thead"),style:t.sx("thead"),role:"rowgroup"},t.ptm("thead")),[k("tr",p({role:"row"},t.ptm("headerRow")),[(c(!0),h(S,null,O(o.columns,function(i,v){return c(),h(S,{key:o.columnProp(i,"columnKey")||o.columnProp(i,"field")||v},[o.columnProp(i,"hidden")?b("",!0):(c(),f(s,{key:0,column:i,resizableColumns:t.resizableColumns,sortField:l.d_sortField,sortOrder:l.d_sortOrder,multiSortMeta:l.d_multiSortMeta,sortMode:t.sortMode,onColumnClick:e[1]||(e[1]=function(P){return o.onColumnHeaderClick(P)}),onColumnResizestart:e[2]||(e[2]=function(P){return o.onColumnResizeStart(P)}),index:v,unstyled:t.unstyled,pt:t.pt},null,8,["column","resizableColumns","sortField","sortOrder","multiSortMeta","sortMode","index","unstyled","pt"]))],64)}),128))],16),o.hasColumnFilter()?(c(),h("tr",ze(p({key:0},t.ptm("headerRow"))),[(c(!0),h(S,null,O(o.columns,function(i,v){return c(),h(S,{key:o.columnProp(i,"columnKey")||o.columnProp(i,"field")||v},[o.columnProp(i,"hidden")?b("",!0):(c(),h("th",p({key:0,class:o.getFilterColumnHeaderClass(i),style:[o.columnProp(i,"style"),o.columnProp(i,"filterHeaderStyle")],ref_for:!0},t.ptm("headerCell",o.ptHeaderCellOptions(i))),[i.children&&i.children.filter?(c(),f(C(i.children.filter),{key:0,column:i,index:v},null,8,["column","index"])):b("",!0)],16))],64)}),128))],16)):b("",!0)],16),k("tbody",p({class:t.cx("tbody"),role:"rowgroup"},t.ptm("tbody")),[o.empty?(c(),h("tr",p({key:1,class:t.cx("emptyMessage")},t.ptm("emptyMessage")),[k("td",p({colspan:o.columns.length},t.ptm("emptyMessageCell")),[m(t.$slots,"empty")],16,Wt)],16)):(c(!0),h(S,{key:0},O(o.dataToRender,function(i,v){return c(),f(d,{key:o.nodeKey(i),dataKey:t.dataKey,columns:o.columns,node:i,level:0,expandedKeys:l.d_expandedKeys,indentation:t.indentation,selectionMode:t.selectionMode,selectionKeys:t.selectionKeys,ariaSetSize:o.dataToRender.length,ariaPosInset:v+1,tabindex:o.setTabindex(i,v),loadingMode:t.loadingMode,contextMenu:t.contextMenu,contextMenuSelection:t.contextMenuSelection,templates:t.$slots,onNodeToggle:o.onNodeToggle,onNodeClick:o.onNodeClick,onCheckboxChange:o.onCheckboxChange,onRowRightclick:e[3]||(e[3]=function(P){return o.onRowRightClick(P)}),unstyled:t.unstyled,pt:t.pt},null,8,["dataKey","columns","node","expandedKeys","indentation","selectionMode","selectionKeys","ariaSetSize","ariaPosInset","tabindex","loadingMode","contextMenu","contextMenuSelection","templates","onNodeToggle","onNodeClick","onCheckboxChange","unstyled","pt"])}),128))],16),o.hasFooter?(c(),h("tfoot",p({key:0,class:t.cx("tfoot"),style:t.sx("tfoot"),role:"rowgroup"},t.ptm("tfoot")),[k("tr",p({role:"row"},t.ptm("footerRow")),[(c(!0),h(S,null,O(o.columns,function(i,v){return c(),h(S,{key:o.columnProp(i,"columnKey")||o.columnProp(i,"field")||v},[o.columnProp(i,"hidden")?b("",!0):(c(),f(u,{key:0,column:i,index:v,unstyled:t.unstyled,pt:t.pt},null,8,["column","index","unstyled","pt"]))],64)}),128))],16)],16)):b("",!0)],16)],16),o.paginatorBottom?(c(),f(a,{key:3,rows:l.d_rows,first:l.d_first,totalRecords:o.totalRecordsLength,pageLinkSize:t.pageLinkSize,template:t.paginatorTemplate,rowsPerPageOptions:t.rowsPerPageOptions,currentPageReportTemplate:t.currentPageReportTemplate,class:y(t.cx("pcPaginator",{position:"bottom"})),onPage:e[4]||(e[4]=function(i){return o.onPage(i)}),alwaysShow:t.alwaysShowPaginator,unstyled:t.unstyled,pt:t.ptm("pcPaginator")},re({_:2},[t.$slots.paginatorcontainer?{name:"container",fn:g(function(i){return[m(t.$slots,"paginatorcontainer",{first:i.first,last:i.last,rows:i.rows,page:i.page,pageCount:i.pageCount,totalRecords:i.totalRecords,firstPageCallback:i.firstPageCallback,lastPageCallback:i.lastPageCallback,prevPageCallback:i.prevPageCallback,nextPageCallback:i.nextPageCallback,rowChangeCallback:i.rowChangeCallback})]}),key:"0"}:void 0,t.$slots.paginatorstart?{name:"start",fn:g(function(){return[m(t.$slots,"paginatorstart")]}),key:"1"}:void 0,t.$slots.paginatorend?{name:"end",fn:g(function(){return[m(t.$slots,"paginatorend")]}),key:"2"}:void 0,t.$slots.paginatorfirstpagelinkicon?{name:"firstpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatorfirstpagelinkicon",{class:y(i.class)})]}),key:"3"}:void 0,t.$slots.paginatorprevpagelinkicon?{name:"prevpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatorprevpagelinkicon",{class:y(i.class)})]}),key:"4"}:void 0,t.$slots.paginatornextpagelinkicon?{name:"nextpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatornextpagelinkicon",{class:y(i.class)})]}),key:"5"}:void 0,t.$slots.paginatorlastpagelinkicon?{name:"lastpagelinkicon",fn:g(function(i){return[m(t.$slots,"paginatorlastpagelinkicon",{class:y(i.class)})]}),key:"6"}:void 0,t.$slots.paginatorjumptopagedropdownicon?{name:"jumptopagedropdownicon",fn:g(function(i){return[m(t.$slots,"paginatorjumptopagedropdownicon",{class:y(i.class)})]}),key:"7"}:void 0,t.$slots.paginatorrowsperpagedropdownicon?{name:"rowsperpagedropdownicon",fn:g(function(i){return[m(t.$slots,"paginatorrowsperpagedropdownicon",{class:y(i.class)})]}),key:"8"}:void 0]),1032,["rows","first","totalRecords","pageLinkSize","template","rowsPerPageOptions","currentPageReportTemplate","class","alwaysShow","unstyled","pt"])):b("",!0),t.$slots.footer?(c(),h("div",p({key:4,class:t.cx("footer")},t.ptm("footer")),[m(t.$slots,"footer")],16)):b("",!0),k("div",p({ref:"resizeHelper",class:t.cx("columnResizeIndicator"),style:{display:"none"}},t.ptm("columnResizeIndicator")),null,16)],16)}Ie.render=Gt;const Xt={class:"card"},qt={class:"card"},pn={__name:"TreeDoc",setup(t){const e=U(null),n=U(null),r=U(null),l=U(null);return Qe(()=>{he.getTreeNodes().then(o=>e.value=o),he.getTreeTableNodes().then(o=>r.value=o)}),(o,a)=>{const s=at,d=nt,u=Ie;return c(),h(S,null,[k("div",Xt,[a[2]||(a[2]=k("div",{class:"font-semibold text-xl"},"Tree",-1)),E(s,{value:e.value,selectionMode:"checkbox",selectionKeys:n.value,"onUpdate:selectionKeys":a[0]||(a[0]=i=>n.value=i)},null,8,["value","selectionKeys"])]),k("div",qt,[a[3]||(a[3]=k("div",{class:"font-semibold text-xl mb-4"},"TreeTable",-1)),E(u,{value:r.value,selectionMode:"checkbox",selectionKeys:l.value,"onUpdate:selectionKeys":a[1]||(a[1]=i=>l.value=i)},{default:g(()=>[E(d,{field:"name",header:"Name",expander:!0}),E(d,{field:"size",header:"Size"}),E(d,{field:"type",header:"Type"})]),_:1},8,["value","selectionKeys"])])],64)}}};export{pn as default};
