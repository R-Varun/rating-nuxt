(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{341:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(133);var o=n(164),l=n(105);function c(t){return function(t){if(Array.isArray(t))return Object(r.a)(t)}(t)||Object(o.a)(t)||Object(l.a)(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},344:function(t,e,n){"use strict";var r={inserted:function(t,e,n){var r=e.value,o=e.options||{passive:!0};window.addEventListener("resize",r,o),t._onResize=Object(t._onResize),t._onResize[n.context._uid]={callback:r,options:o},e.modifiers&&e.modifiers.quiet||r()},unbind:function(t,e,n){var r;if(null!=(r=t._onResize)&&r[n.context._uid]){var o=t._onResize[n.context._uid],l=o.callback,c=o.options;window.removeEventListener("resize",l,c),delete t._onResize[n.context._uid]}}};e.a=r},349:function(t,e,n){"use strict";n.d(e,"a",(function(){return c}));var r=n(100),o=n(8),l=n(0);function c(t){return l.a.extend({name:"intersectable",data:function(){return{isIntersecting:!1}},mounted:function(){r.a.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed:function(){r.a.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve:function(e,n,r){if(this.isIntersecting=r,r)for(var i=0,l=t.onVisible.length;i<l;i++){var c=this[t.onVisible[i]];"function"!=typeof c?Object(o.c)(t.onVisible[i]+" method is not available on the instance but referenced in intersectable mixin options"):c()}}}})}},421:function(t,e,n){var content=n(422);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("7f6d4ad6",content,!0,{sourceMap:!1})},422:function(t,e,n){var r=n(20)(!1);r.push([t.i,"@import url(https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap);"]),r.push([t.i,".theme--light.v-pagination .v-pagination__item{background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-pagination .v-pagination__item--active{color:#fff}.theme--light.v-pagination .v-pagination__navigation{background:#fff}.theme--dark.v-pagination .v-pagination__item{background:#1e1e1e;color:#fff}.theme--dark.v-pagination .v-pagination__item--active{color:#fff}.theme--dark.v-pagination .v-pagination__navigation{background:#1e1e1e}.v-pagination{align-items:center;display:inline-flex;list-style-type:none;justify-content:center;margin:0;max-width:100%;width:100%}.v-pagination.v-pagination{padding-left:0}.v-pagination>li{align-items:center;display:flex}.v-pagination--circle .v-pagination__item,.v-pagination--circle .v-pagination__more,.v-pagination--circle .v-pagination__navigation{border-radius:50%}.v-pagination--disabled{pointer-events:none;opacity:.6}.v-pagination__item{background:transparent;border-radius:8px;font-size:1rem;height:34px;margin:.3rem;min-width:34px;padding:0 5px;text-decoration:none;transition:.3s cubic-bezier(0,0,.2,1);width:auto;box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12)}.v-pagination__item--active{box-shadow:0 2px 4px -1px rgba(0,0,0,.2),0 4px 5px 0 rgba(0,0,0,.14),0 1px 10px 0 rgba(0,0,0,.12)}.v-pagination__navigation{box-shadow:0 3px 1px -2px rgba(0,0,0,.2),0 2px 2px 0 rgba(0,0,0,.14),0 1px 5px 0 rgba(0,0,0,.12);border-radius:8px;display:inline-flex;justify-content:center;align-items:center;text-decoration:none;height:32px;width:32px;margin:.3rem 10px}.v-pagination__navigation .v-icon{transition:.2s cubic-bezier(.4,0,.6,1);vertical-align:middle}.v-pagination__navigation--disabled{opacity:.6;pointer-events:none}.v-pagination__more{margin:.3rem;display:inline-flex;align-items:flex-end;justify-content:center;height:32px;width:32px}",""]),t.exports=r},472:function(t,e,n){"use strict";n.r(e);var r={name:"UiPagination",data:function(){return{page:1}},methods:{}},o=n(44),l=n(47),c=n.n(l),v=n(467),h=n(333),d=(n(10),n(11),n(12),n(22),n(13),n(23),n(341)),f=n(3),m=(n(39),n(27),n(62),n(14),n(80),n(53),n(421),n(160)),x=n(344),_=n(78),y=n(349),w=n(60),O=n(25);function j(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var $=Object(O.a)(_.a,Object(y.a)({onVisible:["init"]}),w.a).extend({name:"v-pagination",directives:{Resize:x.a},props:{circle:Boolean,disabled:Boolean,length:{type:Number,default:0,validator:function(t){return t%1==0}},nextIcon:{type:String,default:"$next"},prevIcon:{type:String,default:"$prev"},totalVisible:[Number,String],value:{type:Number,default:0},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},wrapperAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.wrapper"}},data:function(){return{maxButtons:0,selected:null}},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?j(Object(source),!0).forEach((function(e){Object(f.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):j(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-pagination":!0,"v-pagination--circle":this.circle,"v-pagination--disabled":this.disabled},this.themeClasses)},items:function(){var t=parseInt(this.totalVisible,10);if(0===t)return[];var e=Math.min(Math.max(0,t)||this.length,Math.max(0,this.maxButtons)||this.length,this.length);if(this.length<=e)return this.range(1,this.length);var n=e%2==0?1:0,r=Math.floor(e/2),o=this.length-r+1+n;if(this.value>r&&this.value<o){var l=this.length,c=this.value-r+2,v=this.value+r-2-n,h=v+1===l-1?v+1:"...";return[1,c-1==2?2:"..."].concat(Object(d.a)(this.range(c,v)),[h,this.length])}if(this.value===r){var f=this.value+r-1-n;return[].concat(Object(d.a)(this.range(1,f)),["...",this.length])}if(this.value===o){var m=this.value-r+1;return[1,"..."].concat(Object(d.a)(this.range(m,this.length)))}return[].concat(Object(d.a)(this.range(1,r)),["..."],Object(d.a)(this.range(o,this.length)))}},watch:{value:function(){this.init()}},mounted:function(){this.init()},methods:{init:function(){var t=this;this.selected=null,this.$nextTick(this.onResize),setTimeout((function(){return t.selected=t.value}),100)},onResize:function(){var t=this.$el&&this.$el.parentElement?this.$el.parentElement.clientWidth:window.innerWidth;this.maxButtons=Math.floor((t-96)/42)},next:function(t){t.preventDefault(),this.$emit("input",this.value+1),this.$emit("next")},previous:function(t){t.preventDefault(),this.$emit("input",this.value-1),this.$emit("previous")},range:function(t,e){for(var n=[],i=t=t>0?t:1;i<=e;i++)n.push(i);return n},genIcon:function(t,e,n,r,label){return t("li",[t("button",{staticClass:"v-pagination__navigation",class:{"v-pagination__navigation--disabled":n},attrs:{disabled:n,type:"button","aria-label":label},on:n?{}:{click:r}},[t(m.a,[e])])])},genItem:function(t,i){var e=this,n=i===this.value&&(this.color||"primary"),r=i===this.value,o=r?this.currentPageAriaLabel:this.pageAriaLabel;return t("button",this.setBackgroundColor(n,{staticClass:"v-pagination__item",class:{"v-pagination__item--active":i===this.value},attrs:{type:"button","aria-current":r,"aria-label":this.$vuetify.lang.t(o,i)},on:{click:function(){return e.$emit("input",i)}}}),[i.toString()])},genItems:function(t){var e=this;return this.items.map((function(i,n){return t("li",{key:n},[isNaN(Number(i))?t("span",{class:"v-pagination__more"},[i.toString()]):e.genItem(t,i)])}))},genList:function(t,e){return t("ul",{directives:[{modifiers:{quiet:!0},name:"resize",value:this.onResize}],class:this.classes},e)}},render:function(t){var e=[this.genIcon(t,this.$vuetify.rtl?this.nextIcon:this.prevIcon,this.value<=1,this.previous,this.$vuetify.lang.t(this.previousAriaLabel)),this.genItems(t),this.genIcon(t,this.$vuetify.rtl?this.prevIcon:this.nextIcon,this.value>=this.length,this.next,this.$vuetify.lang.t(this.nextAriaLabel))];return t("nav",{attrs:{role:"navigation","aria-label":this.$vuetify.lang.t(this.wrapperAriaLabel)}},[this.genList(t,e)])}}),k=n(468),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"mini-spacer"},[n("v-container",[n("v-row",{attrs:{justify:"center"}},[n("v-col",{attrs:{cols:"12",sm:"10",md:"9",lg:"7"}},[n("div",{staticClass:"text-center"},[n("h2",{staticClass:"ui-title font-weight-bold"},[t._v("Pagination")]),t._v(" "),n("p",[t._v("\n              Here you can check Demos we created based on WrapKit. Its quite\n              easy to Create your own dream website & dashboard in No-time.\n            ")])])])],1)],1)],1),t._v(" "),n("div",[n("v-container",[n("div",[n("v-row",[n("v-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("Basic Pagination")]),t._v(" "),n("v-pagination",{staticClass:"mt-10",attrs:{length:9,circle:""},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("Length Pagination")]),t._v(" "),n("v-pagination",{staticClass:"mt-10",attrs:{length:15},model:{value:t.page,callback:function(e){t.page=e},expression:"page"}})],1),t._v(" "),n("v-col",{attrs:{cols:"6"}},[n("h4",{staticClass:"font-weight-regular font-18"},[t._v("Disabled Pagination")]),t._v(" "),n("v-pagination",{staticClass:"mt-10",attrs:{length:9,disabled:""}})],1)],1)],1)])],1)])}),[],!1,null,null,null);e.default=component.exports;c()(component,{VCol:v.a,VContainer:h.a,VPagination:$,VRow:k.a})}}]);