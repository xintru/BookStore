(this["webpackJsonpcup-test-remastered"]=this["webpackJsonpcup-test-remastered"]||[]).push([[0],[,,,,function(e,t,a){e.exports={header:"Header_header__2whw2",uiContainer:"Header_uiContainer__1sIhP",cartIcon:"Header_cartIcon__1-e8r",hasItems:"Header_hasItems__1eTig",hasManyItems:"Header_hasManyItems__RwEmK"}},function(e,t,a){e.exports={dialogContainer:"ItemDetails_dialogContainer__2MKjs",imageFallback:"ItemDetails_imageFallback__502NW",hiddenImage:"ItemDetails_hiddenImage__3tCvY",controls:"ItemDetails_controls__3Fh1M",counter:"ItemDetails_counter__1wtCN"}},,function(e,t,a){e.exports={cartContainer:"Cart_cartContainer__1b-0M",empty:"Cart_empty__24_iI",total:"Cart_total__2RQtA"}},,,function(e,t,a){e.exports={listContainer:"ItemList_listContainer__24zWS",list:"ItemList_list__3Z6fe",dialogContent:"ItemList_dialogContent__2dJRU"}},function(e,t,a){e.exports={backdrop:"Dialog_backdrop__3-K5h",dialog:"Dialog_dialog__1aqDG"}},function(e,t,a){e.exports={button:"Button_button__2ZzKt"}},function(e,t,a){e.exports={cartItem:"CartItem_cartItem__2Z2KA"}},,,,,,function(e,t,a){e.exports={footer:"Footer_footer__1e2W4"}},function(e,t,a){e.exports={layout:"Layout_layout__3O5JT"}},,function(e,t,a){e.exports={card:"ShopItem_card__38gb5"}},function(e,t,a){e.exports={"lds-ripple":"Loading_lds-ripple__3o8w9"}},,,function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,,,function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(3),l=a.n(c),i=(a(31),a(14)),o=a(2),s=a(18),m=a(17),u=a(4),d=a.n(u),E=function(e){var t=e.cartCounter,a=e.toggleCart;return r.a.createElement("header",{className:d.a.header},r.a.createElement("div",{className:d.a.uiContainer},r.a.createElement("h1",null,"Orion",r.a.createElement(m.a,null)),r.a.createElement("div",{className:d.a.cartIcon,onClick:a},!!t&&r.a.createElement("div",{className:"".concat(d.a.hasItems," ").concat(d.a.hasManyItems)},t),r.a.createElement(s.a,null))))},_=a(19),f=a.n(_),h=function(){return r.a.createElement("footer",{className:f.a.footer},r.a.createElement("h5",null,"(Re)Created by ",r.a.createElement("a",{href:"https://github.com/xintru"},"Xintru.")," 2020"))},b=a(20),g=a.n(b),p=function(e){return r.a.createElement("div",{className:"".concat(g.a.layout," centered")},e.children)},C=a(9),v=a.n(C),I=a(21),O=a(10),N=a.n(O),j=a(22),k=a.n(j),y=function(e){return r.a.createElement("div",{className:k.a.card,onClick:function(){return e.openDetails(e.isbn)}},r.a.createElement("h3",null,e.title),r.a.createElement("img",{src:e.img,alt:e.title}))},x=a(37),w=a(11),D=a.n(w),S=function(e){var t=e.children,a=e.onClose,n=e.show;return Object(c.createPortal)(r.a.createElement(r.a.Fragment,null,n&&r.a.createElement("div",{className:D.a.backdrop,onClick:function(){return a()}}),r.a.createElement(x.a,{in:n,mountOnEnter:!0,timeout:200,unmountOnExit:!0,classNames:"dialog-transition"},r.a.createElement("div",{className:D.a.dialog},t))),document.getElementById("dialog-root"))},F=function(e){return r.a.createElement(S,e)},T=a(5),q=a.n(T),H=a(24),M=a(12),L=a.n(M),K=function(e){var t=e.children,a=e.onClick,n=e.href,c=Object(H.a)(e,["children","onClick","href"]);return n?r.a.createElement("a",{href:n},r.a.createElement("button",Object.assign({},c,{className:L.a.button}),t)):r.a.createElement("button",Object.assign({},c,{onClick:a,className:L.a.button}),t)},J=a(23),R=a.n(J),W=function(){return r.a.createElement("div",{className:R.a["lds-ripple"]},r.a.createElement("div",null),r.a.createElement("div",null))},A=function(e){var t=Object(n.useState)(),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(1),s=Object(o.a)(i,2),m=s[0],u=s[1],d=e.item,E=e.addToCart,_=e.closeDetails;return r.a.createElement("div",{className:q.a.dialogContainer},r.a.createElement("h2",null,d.title),r.a.createElement("hr",null),r.a.createElement("img",{src:d.image,alt:d.title,className:c?"":q.a.hiddenImage,onLoad:function(){l(!0)}}),!c&&r.a.createElement("div",{className:q.a.imageFallback},r.a.createElement(W,null)),r.a.createElement("hr",null),r.a.createElement("h3",null,d.price," $"),r.a.createElement("p",null,d.subtitle),r.a.createElement("div",{className:q.a.controls},r.a.createElement("div",{className:q.a.counter},r.a.createElement(K,{onClick:function(){m>1&&u((function(e){return e-1}))}},"-"),r.a.createElement("input",{readOnly:!0,value:m}),r.a.createElement(K,{onClick:function(){u((function(e){return e+1}))}},"+")),r.a.createElement(K,{onClick:function(){E(d,m),_()}},"Add To Cart")),r.a.createElement("hr",null),r.a.createElement(K,{href:d.url},"Official store"))},B=function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],l=a[1],i=Object(n.useState)(""),s=Object(o.a)(i,2),m=s[0],u=s[1],d=Object(n.useState)(!1),E=Object(o.a)(d,2),_=E[0],f=E[1],h=Object(n.useState)({image:"",isbn13:"",price:"",subtitle:"",title:"",url:""}),b=Object(o.a)(h,2),g=b[0],p=b[1],C=e.addToCart;Object(n.useEffect)((function(){return Object(I.a)(v.a.mark((function e(){var t,a,n;return v.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return u(""),e.prev=1,e.next=4,fetch("https://bookstore-27221.firebaseio.com/pack.json");case 4:if((t=e.sent).ok){e.next=7;break}throw new Error("Whoops...something went wrong.");case 7:return e.next=9,t.json();case 9:a=e.sent,n=a.books,l(n),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(1),u(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[1,14]])})))(),function(){u("")}}),[]);var O=function(e){return r.a.createElement("h3",{className:"centered"},"Sorry, it seems something went wrong.")},j=function(e){f((function(e){return!e}));var t=c.find((function(t){return t.isbn13===e}));t&&p(t)};return r.a.createElement("div",{className:N.a.listContainer},r.a.createElement("h2",null,"Programming books"),m&&O(),!!c.length&&!!m&&O(),!!c.length&&r.a.createElement("div",{className:N.a.list},c.map((function(e){return r.a.createElement(y,{key:e.isbn13,title:e.title,img:e.image,isbn:e.isbn13,openDetails:j})}))),r.a.createElement(F,{show:_,onClose:j},r.a.createElement(A,{item:g,addToCart:C,closeDetails:j})))},P=a(13),Z=a.n(P),$=function(e){var t=e.title,a=e.quantity,n=e.price;return r.a.createElement("li",{className:Z.a.cartItem},r.a.createElement("h3",{className:Z.a.title},t),r.a.createElement("p",null,"".concat(a," x ").concat(n," = ").concat((a*+n).toFixed(2),"$")))},z=a(7),G=a.n(z),Q=function(e){var t=e.showCart,a=e.toggleCartHandler,n=e.cart;return r.a.createElement(F,{show:t,onClose:a},r.a.createElement("div",{className:G.a.cartContainer},n.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",null,n.map((function(e){return r.a.createElement("div",{className:G.a.cartItem,key:e.item.isbn13},r.a.createElement($,{quantity:e.quantity,title:e.item.title,price:e.item.price}))}))),r.a.createElement("h3",{className:G.a.total},"Total:"," ",n.reduce((function(e,t){return e+ +t.item.price*t.quantity}),0).toFixed(2),"$")):r.a.createElement("h3",{className:"".concat(G.a.empty," centered")},"Cart is empty")))},U=function(){var e=Object(n.useState)(!1),t=Object(o.a)(e,2),a=t[0],c=t[1],l=Object(n.useState)([]),s=Object(o.a)(l,2),m=s[0],u=s[1],d=function(){c((function(e){return!e}))};return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,{cartCounter:m.length||0,toggleCart:d}),r.a.createElement(p,null,r.a.createElement(B,{addToCart:function(e,t){var a=Object(i.a)(m),n=a.find((function(t){return t.item.isbn13===e.isbn13}));n?(n.quantity+=t,u(a)):u((function(a){return[].concat(Object(i.a)(a),[{item:e,quantity:t}])}))}}),r.a.createElement(Q,{showCart:a,toggleCartHandler:d,cart:m})),r.a.createElement(h,null))};l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(U,null)),document.getElementById("root"))}],[[26,1,2]]]);
//# sourceMappingURL=main.a90a4601.chunk.js.map