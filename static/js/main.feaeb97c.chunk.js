(window["webpackJsonpcupcake-test"]=window["webpackJsonpcupcake-test"]||[]).push([[0],{18:function(e,t,r){e.exports={Wrapper:"SelectedCard_Wrapper__3V4QF",BriefBookInfo:"SelectedCard_BriefBookInfo__1d7Ct",OtherInfo:"SelectedCard_OtherInfo__3fEda",Price:"SelectedCard_Price__9bHvu",CartControls:"SelectedCard_CartControls__3Hsun"}},19:function(e,t,r){e.exports={Controls:"CartControls_Controls__2mQdK",MoreLess:"CartControls_MoreLess__Nmyne",AddToCart:"CartControls_AddToCart__BLCGt"}},22:function(e,t,r){e.exports={Cart:"Cart_Cart__25Ayl",Empty:"Cart_Empty__1u72a",FinalPrice:"Cart_FinalPrice__uXS1K"}},26:function(e,t,r){e.exports={Header:"App_Header__1E4NM",Cart:"App_Cart__3PaiA"}},37:function(e,t,r){e.exports={loader:"Spinner_loader__d-ssg",load6:"Spinner_load6__2fCiY",round:"Spinner_round__26qnL"}},38:function(e,t,r){e.exports={Card:"ProductCard_Card__npHTw"}},39:function(e,t,r){e.exports={ProductsContainer:"Products_ProductsContainer__3Eyz0"}},40:function(e,t,r){e.exports={Modal:"Modal_Modal__2NWDf"}},41:function(e,t,r){e.exports={Backdrop:"Backdrop_Backdrop__1k1uQ"}},45:function(e,t,r){e.exports=r(74)},55:function(e,t,r){},74:function(e,t,r){"use strict";r.r(t);var a=r(1),n=r.n(a),o=r(20),c=r.n(o),s=r(14),i=r(11),l=r(44),u=(r(55),r(8)),d=r(9),p=r(12),m=r(10),h=r(13),f=r(37),C=r.n(f),_=function(){return n.a.createElement("div",{className:C.a.loader},"Loading...")},v=r(38),b=r.n(v),O=function(e){return n.a.createElement("section",{className:b.a.Card,onClick:function(){return e.showModal(e.index)}},n.a.createElement("h3",null,e.title),n.a.createElement("img",{src:e.img,alt:"Product"}))},E=r(39),w=r.n(E),g=r(40),y=r.n(g),k=r(41),j=r.n(k),S=function(e){return e.show?n.a.createElement("div",{className:j.a.Backdrop,onClick:e.clicked}):null},T=function(e){function t(){return Object(u.a)(this,t),Object(p.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement(S,{show:this.props.show,clicked:this.props.hide}),n.a.createElement("div",{className:y.a.Modal,style:{transform:this.props.show?"translateY(0)":"translateY(-100vh)",opacity:this.props.show?"1":"0"}},this.props.children))}}]),t}(a.Component),I=r(18),N=r.n(I),P=r(19),x=r.n(P),A=function(e){return n.a.createElement("div",null,n.a.createElement("div",{className:x.a.Controls},n.a.createElement("button",{onClick:e.removeItem,className:x.a.MoreLess},"-"),n.a.createElement("input",{type:"text",value:e.value,readOnly:!0}),n.a.createElement("button",{onClick:e.addItem,className:x.a.MoreLess},"+")),n.a.createElement("div",{className:x.a.AddToCart},n.a.createElement("button",{onClick:e.addToCart},"Add to cart")))},M="PRODUCTS_INIT_START",D=function(){return{type:"PRODUCTS_INIT_START_LOADING"}},B=function(e){return{type:"PRODUCTS_INIT_SUCCESS",response:e}},L=function(e){return{type:"PRODUCTS_INIT_FAIL",error:e}},R=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={value:1},r.addItem=function(){r.setState({value:r.state.value+1})},r.removeItem=function(){r.setState({value:r.state.value-1})},r.pushToCart=function(){var e={value:r.state.value,title:r.props.title,price:r.props.price};r.props.addToCart(e),r.props.hide()},r}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){return n.a.createElement("article",{className:N.a.Wrapper},n.a.createElement("section",{className:N.a.BriefBookInfo},n.a.createElement("h2",null,this.props.title),n.a.createElement("img",{src:this.props.img,alt:"Book"})),n.a.createElement("section",{className:N.a.OtherInfo},n.a.createElement("h3",null,this.props.subtitle),n.a.createElement("p",null,"Some other info that could be provided for the book. I could look it up by myself and hardcode it, but hardcoding is bad. Oh well, at least i can now show off, that i know english quite well."),n.a.createElement("p",null,"Do you know what is the difference between a muffin and a cupcake? Ask me during our interview if only i'm getting invited after this one."),n.a.createElement("p",{className:N.a.Price},"Price: ",this.props.price," $"),n.a.createElement("section",{className:N.a.CartControls},n.a.createElement(A,{value:this.state.value,addItem:this.addItem,removeItem:this.removeItem,addToCart:this.pushToCart}))))}}]),t}(a.Component),F=Object(i.b)(null,(function(e){return{addToCart:function(t){return e(function(e){return{type:"ADD_TO_CART",order:e}}(t))}}}))(R),U=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showModal:!1,currentCard:{}},r.showModal=function(e){r.setState({currentCard:r.props.data[e]}),r.setState({showModal:!0})},r.hideModal=function(){r.setState({showModal:!1}),r.setState({currentCard:{}})},r}return Object(h.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e,t=this;this.props.data&&(e=this.props.data.map((function(e,r){return n.a.createElement(O,{img:e.image,key:e.isbn13,title:e.title,showModal:t.showModal,index:r})}))),this.props.loading&&(e=n.a.createElement(_,null));var r=this.state.showModal?n.a.createElement(T,{show:this.state.showModal,hide:this.hideModal},n.a.createElement(F,{title:this.state.currentCard.title,img:this.state.currentCard.image,subtitle:this.state.currentCard.subtitle,price:this.state.currentCard.price,url:this.state.currentCard.url,hide:this.hideModal})):null;return n.a.createElement("div",{className:w.a.ProductsContainer},r,e)}}]),t}(a.Component),H=Object(i.b)((function(e){return{loading:e.loading,data:e.data}}))(U),W=r(26),$=r.n(W),G=r(22),Q=r.n(G),Y=function(e){var t;t=0===e.sum?n.a.createElement("p",{className:Q.a.Empty},"Sorry!",n.a.createElement("br",null),"The cart is empty!"):n.a.createElement(n.a.Fragment,null,n.a.createElement("p",{className:Q.a.FinalPrice},"Total price: ",e.sum.toFixed(2)," $"),n.a.createElement("button",null,"Proceed to checkout"));var r=e.orders.map((function(e){return n.a.createElement("div",null,n.a.createElement("li",null,e.title,": ",e.price*e.value," $"))}));return n.a.createElement("div",{className:Q.a.Cart},n.a.createElement("ol",null,r),t)},q=function(e){function t(){var e,r;Object(u.a)(this,t);for(var a=arguments.length,n=new Array(a),o=0;o<a;o++)n[o]=arguments[o];return(r=Object(p.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(n)))).state={showCart:!1},r.onCartToggle=function(){r.setState({showCart:!r.state.showCart})},r}return Object(h.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.props.initStart()}},{key:"render",value:function(){var e=null;return this.state.showCart&&(e=n.a.createElement(Y,{orders:this.props.orders,sum:this.props.sum})),n.a.createElement("div",null,n.a.createElement("header",{className:$.a.Header},n.a.createElement("button",{className:$.a.Cart,onClick:this.onCartToggle},n.a.createElement("i",{className:"fa fa-shopping-cart"})," ",this.props.orderCount),n.a.createElement("h1",null,"SomeLogo")),e,n.a.createElement(H,null))}}]),t}(a.Component),J=Object(i.b)((function(e){return{orderCount:e.order.length,orders:e.order,sum:e.sum}}),(function(e){return{initStart:function(){return e({type:M})}}}))(q);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var K=r(42);function z(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function V(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?z(r,!0).forEach((function(t){Object(K.a)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):z(r).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var X={loading:!1,order:[],sum:0},Z=function(e,t){e.order.push(t.order);var r=Number((t.order.price*t.order.value).toFixed(2));return V({},e,{sum:e.sum+r})},ee=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:X,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PRODUCTS_INIT_START_LOADING":return V({},e,{loading:!0});case"PRODUCTS_INIT_SUCCESS":return V({},e,{loading:!1,data:t.response.data.books});case"PRODUCTS_INIT_FAIL":return V({},e,{loading:!1,error:t.error});case"ADD_TO_CART":return Z(e,t);default:return e}},te=r(16),re=r.n(te),ae=r(17),ne=r(43),oe=r.n(ne),ce=re.a.mark(se);function se(e){var t;return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.a)(D());case 2:return e.prev=2,e.next=5,oe.a.get("http://5d22b7fd4e05c600146ef4dd.mockapi.io/cupcake/books");case 5:return t=e.sent,e.next=8,Object(ae.a)(B(t));case 8:e.next=14;break;case 10:return e.prev=10,e.t0=e.catch(2),e.next=14,Object(ae.a)(L(e.t0));case 14:case"end":return e.stop()}}),ce,null,[[2,10]])}var ie=re.a.mark(le);function le(){return re.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(ae.b)(M,se);case 2:case"end":return e.stop()}}),ie)}var ue=s.c,de=Object(l.a)(),pe=Object(s.d)(ee,ue(Object(s.a)(de)));de.run(le);var me=n.a.createElement(i.a,{store:pe},n.a.createElement(J,null));c.a.render(me,document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[45,1,2]]]);
//# sourceMappingURL=main.feaeb97c.chunk.js.map