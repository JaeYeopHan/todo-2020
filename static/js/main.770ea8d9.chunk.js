(this["webpackJsonptodo-2020"]=this["webpackJsonptodo-2020"]||[]).push([[0],{23:function(e,t,n){e.exports=n(44)},24:function(e,t,n){},34:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);n(24);var a=n(0),r=n.n(a),c=n(10),i=n.n(c),o=n(1),u=n(5),l=(n(34),function(e){return r.a.createElement("h1",{className:"header"},e.children)}),s=(n(35),function(e){return r.a.createElement("ul",{className:"list"},e.children)}),m=(n(36),function(e){return r.a.createElement("main",{className:"main"},e.children)}),f=n(9),d=n(17);function b(e,t){if(!window.localStorage)return t;var n=window.localStorage.getItem(e);if(!n)return t;var a=atob(n);return JSON.parse(a)}function E(e,t){if(window.localStorage){var n=JSON.stringify(t),a=btoa(n);return window.localStorage.setItem(e,a)}}var O="__LOCALSTORAGE_TODO_ITEMS_KEY__";var v;!function(e){e.ALL="All",e.ACTIVE="Active",e.DONE="Done"}(v||(v={}));var p=function(e,t){var n=b(O,t);return n&&n[e]||t}("Todo",{items:[],currentFilter:v.ALL}),j=Object(f.b)({name:"Todo",initialState:p,reducers:{add:function(e,t){var n,a=t.payload,r=a.contents,c=a.createdTime;e.items.push({id:(n=c,"item_".concat(n)),contents:r,createdTime:c,isCompleted:!1})},delete:function(e,t){var n=t.payload,a=e.items.filter((function(e){var t=e.id;return n.id!==t}));e.items=a},toggle:function(e,t){var n=t.payload,a=e.items.map((function(e){return n.id===e.id&&(e.isCompleted=!e.isCompleted),e}));e.items=a},changeFilter:function(e,t){var n=t.payload;e.currentFilter=n.filter}}}),N=function(e){return e.currentFilter},h=function(e){return e.items},g={filter:N,items:h,visibleItems:Object(d.a)([N,h],(function(e,t){switch(e){case v.ALL:return t.slice().sort((function(e,t){return function(e,t){return arguments.length>2&&void 0!==arguments[2]&&arguments[2]?Number(t)-Number(e):Number(e)-Number(t)}(e.isCompleted,t.isCompleted)}));case v.ACTIVE:return t.filter((function(e){return!e.isCompleted}));case v.DONE:return t.filter((function(e){return e.isCompleted}));default:throw Error("Not found filter: ".concat(e))}}))},C=j.name,w=j.actions,k=j.reducer;n(38);var S=n(8),y=n.n(S),T=function(){var e=Object(o.b)(),t=Object(o.c)((function(e){return g.filter(e[C])}));return r.a.createElement("section",{className:"filters"},Object.values(v).map((function(n,a){return r.a.createElement("button",{className:(c=n,y()("filters-button",{"filters-button--active":c===t})),key:"filters_button_".concat(a),onClick:function(){return e(w.changeFilter({filter:n}))}},n);var c})))},_=(n(39),Object(f.b)({name:"Toast",initialState:{},reducers:{open:function(e,t){e[t.payload]=!0},close:function(e,t){e[t.payload]=!1}}})),x=_.name,A=_.actions,I=_.reducer;function L(e){return!/[$&+,:;=?#|'<>^*%!]/g.test(e)}var D,F=function(){var e=Object(o.b)(),t=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=Object(a.useState)(e),n=Object(u.a)(t,2),r=n[0],c=n[1],i=Object(a.useState)(!1),o=Object(u.a)(i,2),l=o[0],s=o[1],m=""===r;return Object(a.useEffect)((function(){s(!L(r))}),[r]),[r,c,l,m]}(),n=Object(u.a)(t,4),c=n[0],i=n[1],l=n[2],s=n[3],m=y()("input-textarea",{"input-textarea--warning":l}),f=y()("btn-submit",{"btn-submit--warning":l});return Object(a.useEffect)((function(){l&&e(A.open(C))}),[c,l,i,e]),r.a.createElement("section",{className:"input"},r.a.createElement("textarea",{className:m,onChange:function(e){var t=e.target;i(t.value)},value:c,placeholder:"Enter the TODO item",wrap:"off"}),r.a.createElement("button",{className:f,onClick:function(){s||l||(e(w.add({contents:c,createdTime:(new Date).getTime()})),i(""))}},"Submit"))},J=(n(40),function(e){var t=Object(o.b)(),n=e.id,a=e.contents,c=e.isCompleted,i=y()("item-contents",{"item-contents--cancel":c});return r.a.createElement("li",{className:"item"},r.a.createElement("input",{className:"item-checkbox",type:"checkbox",id:n,checked:c,onChange:function(){return t(w.toggle({id:n}))}}),r.a.createElement("label",{className:"item-checkbox-label",htmlFor:n}),r.a.createElement("div",{className:i},a),c&&r.a.createElement("button",{className:"item-button",onClick:function(){return t(w.delete({id:n}))}},"X"))}),M=(n(41),n(42),n(45)),K=function(e){return r.a.createElement(M.a,{timeout:400,in:e.in,mountOnEnter:e.isMountOnEnter,onEnter:e.onEnter,onExited:e.onExited,classNames:"drawer"},e.children)},R=(n(43),function(e){var t=e.isMountOnEnter,n=void 0!==t&&t;return r.a.createElement(M.a,{timeout:300,in:e.in,mountOnEnter:n,classNames:"fade"},e.children)}),V=function(e){var t=Object(o.b)(),n=Object(o.c)((function(e){return e[x]}))[e.id];return r.a.createElement(R,{in:n},r.a.createElement("div",{className:"toast-dimmed",style:{display:n?"block":"none"}},r.a.createElement(K,{in:n},r.a.createElement("div",{className:"toast-wrapper"},r.a.createElement("h3",{className:"toast-title"},"Info"),r.a.createElement("div",{className:"toast-contents"},e.children),r.a.createElement("button",{className:"toast-button",onClick:function(){t(A.close(e.id)),e.onClose&&e.onClose()}},"OK")))))},B=n(20),G=n(15),X=n(4),Y=Object(X.combineReducers)((D={},Object(G.a)(D,x,I),Object(G.a)(D,C,k),D)),$=Object(f.a)({reducer:Y,middleware:[].concat(Object(B.a)(Object(f.c)()),[function(e){var t=e.getState;return function(e){return function(n){var a,r=e(n);return a=t(),E(O,a),r}}}])});i.a.render(r.a.createElement(o.a,{store:$},r.a.createElement((function(){var e=Object(o.c)((function(e){return g.visibleItems(e[C])})),t=function(){var e=Object(a.useState)(0),t=Object(u.a)(e,2),n=t[0],r=t[1];return[n,Object(a.useCallback)((function(){return r((function(e){return e+1}))}),[])]}(),n=Object(u.a)(t,2),c=n[0],i=n[1];return r.a.createElement(m,{key:c},r.a.createElement(l,null,"Todo"),r.a.createElement(F,null),r.a.createElement(s,null,e.map((function(e){return r.a.createElement(J,Object.assign({key:e.id},e))}))),r.a.createElement(T,null),r.a.createElement(V,{id:C,onClose:i},"\uc785\ub825\ud560 \uc218 \uc5c6\ub294 \ud2b9\uc218\ubb38\uc790\ub97c \uc785\ub825\ud588\uac70\ub098 \uc62c\ubc14\ub974\uc9c0 \uc54a\uc740 \uc785\ub825\uc785\ub2c8\ub2e4. \ub2e4\uc2dc \uc2dc\ub3c4\ud574\uc8fc\uc138\uc694."))}),null)),document.getElementById("root"))}},[[23,1,2]]]);
//# sourceMappingURL=main.770ea8d9.chunk.js.map