(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],[,,,function(e,t,n){e.exports={form:"Checkout_form__2JXa5",control:"Checkout_control__2lD2t",actions:"Checkout_actions__J3EeA",submit:"Checkout_submit__1Qwxt",invalid:"Checkout_invalid__30lE0"}},function(e,t,n){e.exports={"cart-items":"Cart_cart-items__3TvwS",total:"Cart_total__1KD3y",actions:"Cart_actions__26tjs","button--alt":"Cart_button--alt__3fkrG",button:"Cart_button__14d0s"}},,,function(e,t,n){e.exports={"cart-item":"CartItem_cart-item__3nnlf",summary:"CartItem_summary__1ooO3",price:"CartItem_price__3matv",amount:"CartItem_amount__1QdpP",actions:"CartItem_actions__YVIWo"}},,,function(e,t,n){e.exports={button:"HeaderCartButton_button__2S5Qc",icon:"HeaderCartButton_icon__1ATC-",badge:"HeaderCartButton_badge__3jqx_",bump:"HeaderCartButton_bump__sZbOY"}},,,function(e,t,n){e.exports={meal:"MealItem_meal__3ZUyb",description:"MealItem_description__1bGUG",price:"MealItem_price__1UBZX"}},function(e,t,n){e.exports={meals:"AvailableMeals_meals__135Do","meals-appear":"AvailableMeals_meals-appear__xGjRq",MealsLoading:"AvailableMeals_MealsLoading__1T51L",MealsError:"AvailableMeals_MealsError__M0wi3"}},function(e,t,n){e.exports={backdrop:"Modal_backdrop__vUEP4",modal:"Modal_modal__3f0k0","slide-down":"Modal_slide-down__MJOSv"}},,function(e,t,n){e.exports={header:"Header_header__XNzhR","main-image":"Header_main-image__2k1uR"}},,function(e,t,n){e.exports={summary:"MealsSummary_summary__7pgj2"}},function(e,t,n){e.exports={card:"Card_card__2Y47v"}},function(e,t,n){e.exports={input:"Input_input__3gCQw"}},function(e,t,n){e.exports={form:"MealItemForm_form__2_D0H"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var a=n(8),c=n.n(a),r=(n(27),n(2)),s=n(1),i=n.n(s),o=n(0),l=function(){return Object(o.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",children:Object(o.jsx)("path",{d:"M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"})})},u=i.a.createContext({items:[],totalAmount:0,addItem:function(e){},removeItem:function(e){},clearCart:function(){}}),d=n(10),j=n.n(d),m=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useContext)(u).items,d=i.reduce((function(e,t){return e+t.amount}),0),m="".concat(j.a.button," ").concat(a?j.a.bump:"");return Object(s.useEffect)((function(){if(0!==i.length){c(!0);var e=setTimeout((function(){c(!1)}),300);return function(){clearTimeout(e)}}}),[i]),Object(o.jsxs)("button",{className:m,onClick:e.onClick,children:[Object(o.jsx)("span",{className:j.a.icon,children:Object(o.jsx)(l,{})}),Object(o.jsx)("span",{children:"Your Cart"}),Object(o.jsx)("span",{className:j.a.badge,children:d})]})},b=n.p+"static/media/meals.2971f633.jpg",O=n(17),x=n.n(O),h=function(e){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsxs)("header",{className:x.a.header,children:[Object(o.jsx)("h1",{children:"Happy Meals"}),Object(o.jsx)(m,{onClick:e.onShowCart})]}),Object(o.jsx)("div",{className:x.a["main-image"],children:Object(o.jsx)("img",{src:b,alt:"A table full of delicious food!"})})]})},p=n(19),f=n.n(p),_=function(){return Object(o.jsxs)("section",{className:f.a.summary,children:[Object(o.jsx)("h2",{children:"Delicious Food, Delivered To You"}),Object(o.jsx)("p",{children:"Choose your favorite meal from our broad selection of available meals and enjoy a delicious lunch or dinner at home."}),Object(o.jsx)("p",{children:"All our meals are cooked with high-quality ingredients, just-in-time and of course by experienced chefs!"})]})},v=n(6),C=n.n(v),y=n(12),N=n(20),g=n.n(N),A=function(e){return Object(o.jsx)("div",{className:g.a.card,children:e.children})},k=n(5),M=n(21),w=n.n(M),S=i.a.forwardRef((function(e,t){return Object(o.jsxs)("div",{className:w.a.input,children:[Object(o.jsx)("label",{htmlFor:e.input.id,children:e.label}),Object(o.jsx)("input",Object(k.a)({ref:t},e.input))]})})),I=n(22),E=n.n(I),F=function(e){var t=Object(s.useState)(!0),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)();return Object(o.jsxs)("form",{className:E.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=+n;0===n.trim().length||a<1||a>5?c(!1):e.onAddToCart(a)},children:[Object(o.jsx)(S,{ref:i,label:"Amount",input:{id:"amount_"+e.id,type:"number",min:"1",max:"5",step:"1",defaultValue:"1"}}),Object(o.jsx)("button",{children:"+ Add"}),!a&&Object(o.jsx)("p",{children:"Please enter a valid amount (1-5)."})]})},R=n(13),H=n.n(R),D=function(e){var t=Object(s.useContext)(u),n="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:H.a.meal,children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h3",{children:e.name}),Object(o.jsx)("div",{className:H.a.description,children:e.description}),Object(o.jsx)("div",{className:H.a.price,children:n})]}),Object(o.jsx)("div",{children:Object(o.jsx)(F,{id:e.id,onAddToCart:function(n){t.addItem({id:e.id,name:e.name,amount:n,price:e.price})}})})]})},P=n(14),T=n.n(P),B=function(){var e=Object(s.useState)([]),t=Object(r.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(!0),i=Object(r.a)(c,2),l=i[0],u=i[1],d=Object(s.useState)(),j=Object(r.a)(d,2),m=j[0],b=j[1];if(Object(s.useEffect)((function(){(function(){var e=Object(y.a)(C.a.mark((function e(){var t,n,c,r;return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://happy-meals-5c56a-default-rtdb.firebaseio.com/meals.json");case 2:if((t=e.sent).ok){e.next=5;break}throw new Error("Something went wrong!");case 5:return e.next=7,t.json();case 7:for(r in n=e.sent,c=[],n)c.push({id:r,name:n[r].name,description:n[r].description,price:n[r].price});a(c),u(!1);case 12:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()().catch((function(e){u(!1),b(e.message)}))}),[]),l)return Object(o.jsx)("section",{className:T.a.MealsLoading,children:Object(o.jsx)("p",{children:"Loading..."})});if(m)return Object(o.jsx)("section",{className:T.a.MealsError,children:Object(o.jsx)("p",{children:m})});var O=n.map((function(e){return Object(o.jsx)(D,{id:e.id,name:e.name,description:e.description,price:e.price},e.id)}));return Object(o.jsx)("section",{className:T.a.meals,children:Object(o.jsx)(A,{children:Object(o.jsx)("ul",{children:O})})})},J=function(){return Object(o.jsxs)(s.Fragment,{children:[Object(o.jsx)(_,{}),Object(o.jsx)(B,{})]})},L=n(15),Y=n.n(L),z=function(e){return Object(o.jsx)("div",{className:Y.a.backdrop,onClick:e.onClose})},G=function(e){return Object(o.jsx)("div",{className:Y.a.modal,children:Object(o.jsx)("div",{className:Y.a.content,children:e.children})})},Q=document.getElementById("overlays"),U=function(e){return Object(o.jsxs)(s.Fragment,{children:[c.a.createPortal(Object(o.jsx)(z,{onClose:e.onClose}),Q),c.a.createPortal(Object(o.jsx)(G,{children:e.children}),Q)]})},V=n(7),q=n.n(V),X=function(e){var t="$".concat(e.price.toFixed(2));return Object(o.jsxs)("li",{className:q.a["cart-item"],children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:e.name}),Object(o.jsxs)("div",{className:q.a.summary,children:[Object(o.jsx)("span",{className:q.a.price,children:t}),Object(o.jsxs)("span",{className:q.a.amount,children:["x ",e.amount]})]})]}),Object(o.jsxs)("div",{className:q.a.actions,children:[Object(o.jsx)("button",{onClick:e.onRemove,children:"\u2212"}),Object(o.jsx)("button",{onClick:e.onAdd,children:"+"})]})]})},Z=n(4),$=n.n(Z),K=n(3),W=n.n(K),ee=function(e){return""===e.trim()},te=function(e){var t=Object(s.useState)({name:!0,street:!0,city:!0,postalCode:!0}),n=Object(r.a)(t,2),a=n[0],c=n[1],i=Object(s.useRef)(),l=Object(s.useRef)(),u=Object(s.useRef)(),d=Object(s.useRef)(),j="".concat(W.a.control," ").concat(a.name?"":W.a.invalid),m="".concat(W.a.control," ").concat(a.street?"":W.a.invalid),b="".concat(W.a.control," ").concat(a.postalCode?"":W.a.invalid),O="".concat(W.a.control," ").concat(a.city?"":W.a.invalid);return Object(o.jsxs)("form",{className:W.a.form,onSubmit:function(t){t.preventDefault();var n=i.current.value,a=l.current.value,r=u.current.value,s=d.current.value,o=!ee(n),j=!ee(a),m=!ee(s),b=5===r.trim().length;c({name:o,street:j,city:m,postalCode:b}),o&&j&&m&&b&&e.onConfirm({name:n,street:a,city:s,postalCode:r})},children:[Object(o.jsxs)("div",{className:j,children:[Object(o.jsx)("label",{htmlFor:"name",children:"Your Name"}),Object(o.jsx)("input",{type:"text",id:"name",ref:i}),!a.name&&Object(o.jsx)("p",{children:"Please enter a valid name!"})]}),Object(o.jsxs)("div",{className:m,children:[Object(o.jsx)("label",{htmlFor:"street",children:"Street"}),Object(o.jsx)("input",{type:"text",id:"street",ref:l}),!a.street&&Object(o.jsx)("p",{children:"Please enter a valid street!"})]}),Object(o.jsxs)("div",{className:b,children:[Object(o.jsx)("label",{htmlFor:"postal",children:"Postal Code"}),Object(o.jsx)("input",{type:"text",id:"postal",ref:u}),!a.postalCode&&Object(o.jsx)("p",{children:"Please enter a valid postal code (5 characters long)!"})]}),Object(o.jsxs)("div",{className:O,children:[Object(o.jsx)("label",{htmlFor:"city",children:"City"}),Object(o.jsx)("input",{type:"text",id:"city",ref:d}),!a.city&&Object(o.jsx)("p",{children:"Please enter a valid city!"})]}),Object(o.jsxs)("div",{className:W.a.actions,children:[Object(o.jsx)("button",{type:"button",onClick:e.onCancel,children:"Cancel"}),Object(o.jsx)("button",{className:W.a.submit,children:"Confirm"})]})]})},ne=function(e){var t=Object(s.useState)(!1),n=Object(r.a)(t,2),a=n[0],c=n[1],l=Object(s.useState)(!1),d=Object(r.a)(l,2),j=d[0],m=d[1],b=Object(s.useState)(!1),O=Object(r.a)(b,2),x=O[0],h=O[1],p=Object(s.useContext)(u),f="$".concat(p.totalAmount.toFixed(2)),_=p.items.length>0,v=function(e){p.removeItem(e)},N=function(e){p.addItem(e)},g=function(){var e=Object(y.a)(C.a.mark((function e(t){return C.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return m(!0),e.next=3,fetch("https://happy-meals-5c56a-default-rtdb.firebaseio.com/orders.json",{method:"POST",body:JSON.stringify({user:t,orderedItems:p.items})});case 3:m(!1),h(!0),p.clearCart();case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),A=Object(o.jsx)("ul",{className:$.a["cart-items"],children:p.items.map((function(e){return Object(o.jsx)(X,{name:e.name,amount:e.amount,price:e.price,onRemove:v.bind(null,e.id),onAdd:N.bind(null,e)},e.id)}))}),k=Object(o.jsxs)("div",{className:$.a.actions,children:[Object(o.jsx)("button",{className:$.a["button--alt"],onClick:e.onClose,children:"Close"}),_&&Object(o.jsx)("button",{className:$.a.button,onClick:function(){c(!0)},children:"Order"})]}),M=Object(o.jsxs)(i.a.Fragment,{children:[A,Object(o.jsxs)("div",{className:$.a.total,children:[Object(o.jsx)("span",{children:"Total Amount"}),Object(o.jsx)("span",{children:f})]}),a&&Object(o.jsx)(te,{onConfirm:g,onCancel:e.onClose}),!a&&k]}),w=Object(o.jsx)("p",{children:"Sending order data..."}),S=Object(o.jsxs)(i.a.Fragment,{children:[Object(o.jsx)("p",{children:"Successfully sent the order!"}),Object(o.jsx)("div",{className:$.a.actions,children:Object(o.jsx)("button",{className:$.a.button,onClick:e.onClose,children:"Close"})})]});return Object(o.jsxs)(U,{onClose:e.onClose,children:[!j&&!x&&M,j&&w,!j&&x&&S]})},ae=n(18),ce={items:[],totalAmount:0},re=function(e,t){if("ADD"===t.type){var n,a=e.totalAmount+t.item.price*t.item.amount,c=e.items.findIndex((function(e){return e.id===t.item.id})),r=e.items[c];if(r){var s=Object(k.a)(Object(k.a)({},r),{},{amount:r.amount+t.item.amount});(n=Object(ae.a)(e.items))[c]=s}else n=e.items.concat(t.item);return{items:n,totalAmount:a}}if("REMOVE"===t.type){var i,o=e.items.findIndex((function(e){return e.id===t.id})),l=e.items[o],u=e.totalAmount-l.price;if(1===l.amount)i=e.items.filter((function(e){return e.id!==t.id}));else{var d=Object(k.a)(Object(k.a)({},l),{},{amount:l.amount-1});(i=Object(ae.a)(e.items))[o]=d}return{items:i,totalAmount:u}}return t.type,ce},se=function(e){var t=Object(s.useReducer)(re,ce),n=Object(r.a)(t,2),a=n[0],c=n[1],i={items:a.items,totalAmount:a.totalAmount,addItem:function(e){c({type:"ADD",item:e})},removeItem:function(e){c({type:"REMOVE",id:e})},clearCart:function(){c({type:"CLEAR"})}};return Object(o.jsx)(u.Provider,{value:i,children:e.children})};var ie=function(){var e=Object(s.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1];return Object(o.jsxs)(se,{children:[n&&Object(o.jsx)(ne,{onClose:function(){a(!1)}}),Object(o.jsx)(h,{onShowCart:function(){a(!0)}}),Object(o.jsx)("main",{children:Object(o.jsx)(J,{})})]})};c.a.render(Object(o.jsx)(ie,{}),document.getElementById("root"))}],[[30,1,2]]]);
//# sourceMappingURL=main.d92c578a.chunk.js.map