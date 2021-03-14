(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{16:function(e,t,c){"use strict";c.r(t),c.d(t,"PRODUCT_LIST_REQUEST",(function(){return r})),c.d(t,"PRODUCT_LIST_SUCCESS",(function(){return n})),c.d(t,"PRODUCT_LIST_FAIL",(function(){return s})),c.d(t,"PRODUCT_DETAILS_REQUEST",(function(){return a})),c.d(t,"PRODUCT_DETAILS_SUCCESS",(function(){return i})),c.d(t,"PRODUCT_DETAILS_FAIL",(function(){return d}));var r="PRODUCT_LIST_REQUEST",n="PRODUCT_LIST_SUCCESS",s="PRODUCT_LIST_FAIL",a="PRODUCT_DETAILS_REQUEST",i="PRODUCT_DETAILS_SUCCESS",d="PRODUCT_DETAILS_FAIL"},52:function(e,t,c){},76:function(e,t,c){"use strict";c.r(t);var r=c(1),n=c.n(r),s=c(2),a=c(20),i=c.n(a),d=(c(52),c(4)),l=c(6),o=c(5),j=c.n(o),u=c(10),b=c(11),h=c.n(b),p="USER_REGISTER_REQUEST",O="USER_REGISTER_SUCCESS",x="USER_REGISTER_FAIL",m="USER_SIGNIN_REQUEST",v="USER_SIGNIN_SUCCESS",f="USER_SIGNIN_FAIL",g="USER_SIGNOUT",y=c(19),S="CART_ADD_ITEM",I="CART_REMOVE_ITEM",E="CART_SAVE_SHIPPING_ADDRESS",N="CART_SAVE_PAYMENT_METHOD",_="CART_EMPTY",C=function(e,t){return function(){var c=Object(u.a)(j.a.mark((function c(r,n){var s,a;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return c.next=2,h.a.get("/api/products/".concat(e));case 2:s=c.sent,a=s.data,r({type:S,payload:{name:a.name,image:a.image,price:a.price,countInStock:a.countInStock,product:a._id,qty:t}}),localStorage.setItem("cartItems",JSON.stringify(n().cart.cartItems));case 6:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()},R=c(0);function T(e){return Object(R.jsx)("div",{className:"alert alert-".concat(e.variant||"info"),children:e.children})}function w(e){var t=e.match.params.id,c=e.location.search?Number(e.location.search.split("=")[1]):1,n=Object(s.c)((function(e){return e.cart})).cartItems,a=Object(s.b)();Object(r.useEffect)((function(){t&&a(C(t,c))}),[a,t,c]);var i=function(e){a(function(e){return function(t,c){t({type:I,payload:e}),localStorage.setItem("cartItems",JSON.stringify(c().cart.cartItems))}}(e))};return Object(R.jsxs)("div",{className:"row top",children:[Object(R.jsxs)("div",{className:"col-2",children:[Object(R.jsx)("h1",{children:"Shopping Cart"}),0===n.length?Object(R.jsxs)(T,{children:["Cart is empty. ",Object(R.jsx)(d.b,{to:"/",children:"Go Shopping"})]}):Object(R.jsx)("ul",{children:n.map((function(e){return Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(R.jsx)("div",{className:"min-30",children:Object(R.jsx)(d.b,{to:"/product/".concat(e.product),children:e.name})}),Object(R.jsx)("div",{children:Object(R.jsx)("select",{value:e.qty,onChange:function(t){return a(C(e.product,Number(t.target.value)))},children:Object(y.a)(Array(e.countInStock).keys()).map((function(e){return Object(R.jsx)("option",{value:e+1,children:e+1},e+1)}))})}),Object(R.jsxs)("div",{children:["\u20ac",e.price]}),Object(R.jsx)("div",{children:Object(R.jsx)("button",{type:"button",onClick:function(){return i(e.product)},children:"Delete"})})]})},e.product)}))})]}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsx)("div",{className:"card card-body",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsxs)("h2",{children:["Subtotal (",n.reduce((function(e,t){return e+t.qty}),0)," items) : \u20ac",n.reduce((function(e,t){return e+t.price*t.qty}),0)]})}),Object(R.jsx)("li",{children:Object(R.jsx)("button",{type:"button",onClick:function(){e.history.push("/signin?redirect=shipping")},className:"primary block",disabled:0===n.length,children:"Proceed to Checkout"})})]})})})]})}function P(e){var t=e.rating,c=e.numReviews;return Object(R.jsxs)("div",{className:"rating",children:[Object(R.jsxs)("span",{children:[" ",Object(R.jsx)("i",{className:t>=1?"fa fa-star":t>=.5?"fa fa-star-half-o":"fa fa-star-o"})," "]}),Object(R.jsxs)("span",{children:[" ",Object(R.jsx)("i",{className:t>=2?"fa fa-star":t>=1.5?"fa fa-star-half-o":"fa fa-star-o"})," "]}),Object(R.jsxs)("span",{children:[" ",Object(R.jsx)("i",{className:t>=3?"fa fa-star":t>=2.5?"fa fa-star-half-o":"fa fa-star-o"})," "]}),Object(R.jsxs)("span",{children:[" ",Object(R.jsx)("i",{className:t>=4?"fa fa-star":t>=3.5?"fa fa-star-half-o":"fa fa-star-o"})," "]}),Object(R.jsxs)("span",{children:[" ",Object(R.jsx)("i",{className:t>=5?"fa fa-star":t>=4.5?"fa fa-star-half-o":"fa fa-star-o"})," "]}),Object(R.jsx)("span",{children:c+" reviews"})]})}function A(e){var t=e.product;return Object(R.jsxs)("div",{className:"card",children:[Object(R.jsx)(d.b,{to:"/product/".concat(t._id),children:Object(R.jsx)("img",{width:"100px",className:"medium",src:t.image,alt:t.name})}),Object(R.jsxs)("div",{className:"card-body",children:[Object(R.jsx)(d.b,{to:"/product/".concat(t._id),children:Object(R.jsx)("h2",{children:t.name})}),Object(R.jsx)(P,{rating:t.rating,numReviews:t.numReviews}),Object(R.jsxs)("div",{className:"price",children:["\u20ac",t.price]})]})]},t._id)}function D(){return Object(R.jsxs)("div",{className:"loading",children:[Object(R.jsx)("i",{className:"fa fa-spinner fa-spin"})," Loading..."]})}var U=c(16);function L(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.productList})),c=t.loading,n=t.error,a=t.products;return Object(r.useEffect)((function(){e(function(){var e=Object(u.a)(j.a.mark((function e(t){var c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:U.PRODUCT_LIST_REQUEST}),e.prev=1,e.next=4,h.a.get("/api/products");case 4:c=e.sent,r=c.data,t({type:U.PRODUCT_LIST_SUCCESS,payload:r}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:U.PRODUCT_LIST_FAIL,payload:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[e]),Object(R.jsx)("div",{children:c?Object(R.jsx)(D,{}):n?Object(R.jsx)(T,{variant:"danger",children:n}):Object(R.jsx)("div",{className:"row center",children:a.map((function(e){return Object(R.jsx)(A,{product:e},e._id)}))})})}var F=c(7),k=c(40),q="ORDER_CREATE_REQUEST",M="ORDER_CREATE_SUCCESS",Q="ORDER_CREATE_FAIL",J="ORDER_CREATE_RESET",G="ORDER_PAY_REQUEST",B="ORDER_PAY_SUCCESS",Y="ORDER_PAY_FAIL",z="ORDER_PAY_RESET",V="ORDER_DETAILS_REQUEST",H="ORDER_DETAILS_SUCCESS",X="ORDER_DETAILS_FAIL";function K(e){var t=e.match.params.id,c=Object(r.useState)(!1),n=Object(F.a)(c,2),a=n[0],i=n[1],l=Object(s.c)((function(e){return e.orderDetails})),o=l.order,b=l.loading,p=l.error,O=Object(s.c)((function(e){return e.orderPay})),x=O.loading,m=O.error,v=O.success,f=Object(s.b)();Object(r.useEffect)((function(){var e=function(){var e=Object(u.a)(j.a.mark((function e(){var t,c,r;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.a.get("/api/config/paypal");case 2:t=e.sent,c=t.data,(r=document.createElement("script")).type="text/javascript",r.src="https://www.paypal.com/sdk/js?client-id=".concat(c),r.async=!0,r.onload=function(){i(!0)},document.body.appendChild(r);case 10:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();!o||v||o&&o._id!==t?(f({type:z}),f(function(e){return function(){var t=Object(u.a)(j.a.mark((function t(c,r){var n,s,a,i,d;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:V,payload:e}),n=r(),s=n.userSignin.userInfo,t.prev=2,t.next=5,h.a.get("/api/orders/".concat(e),{headers:{Authorization:"Bearer ".concat(s.token)}});case 5:a=t.sent,i=a.data,c({type:H,payload:i}),t.next=14;break;case 10:t.prev=10,t.t0=t.catch(2),d=t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message,c({type:X,payload:d});case 14:case"end":return t.stop()}}),t,null,[[2,10]])})));return function(e,c){return t.apply(this,arguments)}}()}(t))):o.isPaid||(window.paypal?i(!0):e())}),[f,o,t,a,v]);return b?Object(R.jsx)(D,{}):p?Object(R.jsx)(T,{variant:"danger",children:p}):Object(R.jsxs)("div",{children:[Object(R.jsxs)("h1",{children:["Order ",o._id]}),Object(R.jsxs)("div",{className:"row top",children:[Object(R.jsx)("div",{className:"col-2",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"card card-body",children:[Object(R.jsx)("h2",{children:"Shipping"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Name:"})," ",o.shippingAddress.fullName," ",Object(R.jsx)("br",{}),Object(R.jsx)("strong",{children:"Address: "})," ",o.shippingAddress.address,",",o.shippingAddress.city,","," ",o.shippingAddress.postalCode,",",o.shippingAddress.country]}),o.isDelivered?Object(R.jsxs)(T,{variant:"success",children:["Delivered at ",o.deliveredAt]}):Object(R.jsx)(T,{variant:"danger",children:"Not Delivered"})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"card card-body",children:[Object(R.jsx)("h2",{children:"Payment"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Method:"})," ",o.paymentMethod]}),o.isPaid?Object(R.jsxs)(T,{variant:"success",children:["Paid at ",o.paidAt]}):Object(R.jsx)(T,{variant:"danger",children:"Not Paid"})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"card card-body",children:[Object(R.jsx)("h2",{children:"Order Items"}),Object(R.jsx)("ul",{children:o.orderItems.map((function(e){return Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(R.jsx)("div",{className:"min-30",children:Object(R.jsx)(d.b,{to:"/product/".concat(e.product),children:e.name})}),Object(R.jsxs)("div",{children:[e.qty," x \u20ac",e.price," = \u20ac",e.qty*e.price]})]})},e.product)}))})]})})]})}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsx)("div",{className:"card card-body",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)("h2",{children:"Order Summary"})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Items"}),Object(R.jsxs)("div",{children:["\u20ac",o.itemsPrice.toFixed(2)]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Shipping"}),Object(R.jsxs)("div",{children:["\u20ac",o.shippingPrice.toFixed(2)]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Tax"}),Object(R.jsxs)("div",{children:["\u20ac",o.taxPrice.toFixed(2)]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:Object(R.jsx)("strong",{children:" Order Total"})}),Object(R.jsx)("div",{children:Object(R.jsxs)("strong",{children:["\u20ac",o.totalPrice.toFixed(2)]})})]})}),!o.isPaid&&Object(R.jsx)("li",{children:a?Object(R.jsxs)(R.Fragment,{children:[m&&Object(R.jsx)(T,{variant:"danger",children:m}),x&&Object(R.jsx)(D,{}),Object(R.jsx)(k.PayPalButton,{amount:o.totalPrice,onSuccess:function(e){f(function(e,t){return function(){var c=Object(u.a)(j.a.mark((function c(r,n){var s,a,i,d,l;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:r({type:G,payload:{order:e,paymentResult:t}}),s=n(),a=s.userSignin.userInfo;try{i=h.a.put("/api/orders/".concat(e._id,"/pay"),t,{headers:{Authorization:"Bearer ".concat(a.token)}}),d=i.data,r({type:B,payload:d})}catch(p){l=p.response&&p.response.data.message?p.response.data.message:p.message,r({type:Y,payload:l})}case 3:case"end":return c.stop()}}),c)})));return function(e,t){return c.apply(this,arguments)}}()}(o,e))}})]}):Object(R.jsx)(D,{})})]})})})]})]})}function W(e){return Object(R.jsxs)("div",{className:"row checkout-steps",children:[Object(R.jsx)("div",{className:e.step1?"active":"",children:"Sign-In"}),Object(R.jsx)("div",{className:e.step2?"active":"",children:"Shipping"}),Object(R.jsx)("div",{className:e.step3?"active":"",children:"Payment"}),Object(R.jsx)("div",{className:e.step4?"active":"",children:"Place Order"})]})}function Z(e){Object(s.c)((function(e){return e.cart})).shippingAddress.address||e.history.push("/shipping");var t=Object(r.useState)("PayPal"),c=Object(F.a)(t,2),n=c[0],a=c[1],i=Object(s.b)();return Object(R.jsxs)("div",{children:[Object(R.jsx)(W,{step1:!0,step2:!0,step3:!0}),Object(R.jsxs)("form",{className:"form",onSubmit:function(t){var c;t.preventDefault(),i((c=n,function(e){e({type:N,payload:c})})),e.history.push("/placeorder")},children:[Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Payment Method"})}),Object(R.jsx)("div",{children:Object(R.jsxs)("div",{children:[Object(R.jsx)("input",{type:"radio",id:"paypal",value:"PayPal",name:"paymentMethod",required:!0,checked:!0,onChange:function(e){return a(e.target.value)}}),Object(R.jsx)("label",{htmlFor:"paypal",children:"PayPal"})]})}),Object(R.jsx)("div",{children:Object(R.jsxs)("div",{children:[Object(R.jsx)("input",{type:"radio",id:"stripe",value:"Stripe",name:"paymentMethod",required:!0,onChange:function(e){return a(e.target.value)}}),Object(R.jsx)("label",{htmlFor:"stripe",children:"Stripe"})]})}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{}),Object(R.jsx)("button",{className:"primary",type:"submit",children:"Continue"})]})]})]})}var $=c(8);function ee(e){var t=Object(s.c)((function(e){return e.cart}));t.paymentMethod||e.history.push("/payment");var c=Object(s.c)((function(e){return e.orderCreate})),n=c.loading,a=c.success,i=c.error,l=c.order,o=function(e){return Number(e.toFixed(2))};t.itemsPrice=o(t.cartItems.reduce((function(e,t){return e+t.qty*t.price}),0)),t.shippingPrice=t.itemsPrice>100?o(0):o(10),t.taxPrice=o(.15*t.itemsPrice),t.totalPrice=t.itemsPrice+t.shippingPrice+t.taxPrice;var b=Object(s.b)();return Object(r.useEffect)((function(){a&&(e.history.push("/order/".concat(l._id)),b({type:J}))}),[b,l,e.history,a]),Object(R.jsxs)("div",{children:[Object(R.jsx)(W,{step1:!0,step2:!0,step3:!0,step4:!0}),Object(R.jsxs)("div",{className:"row top",children:[Object(R.jsx)("div",{className:"col-2",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"card card-body",children:[Object(R.jsx)("h2",{children:"Shipping"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Name:"})," ",t.shippingAddress.fullName," ",Object(R.jsx)("br",{}),Object(R.jsx)("strong",{children:"Address: "})," ",t.shippingAddress.address,",",t.shippingAddress.city,", ",t.shippingAddress.postalCode,",",t.shippingAddress.country]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"card card-body",children:[Object(R.jsx)("h2",{children:"Payment"}),Object(R.jsxs)("p",{children:[Object(R.jsx)("strong",{children:"Method:"})," ",t.paymentMethod]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"card card-body",children:[Object(R.jsx)("h2",{children:"Order Items"}),Object(R.jsx)("ul",{children:t.cartItems.map((function(e){return Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:Object(R.jsx)("img",{src:e.image,alt:e.name,className:"small"})}),Object(R.jsx)("div",{className:"min-30",children:Object(R.jsx)(d.b,{to:"/product/".concat(e.product),children:e.name})}),Object(R.jsxs)("div",{children:[e.qty," x \u20ac",e.price," = \u20ac",e.qty*e.price]})]})},e.product)}))})]})})]})}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsx)("div",{className:"card card-body",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)("h2",{children:"Order Summary"})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Items"}),Object(R.jsxs)("div",{children:["\u20ac",t.itemsPrice.toFixed(2)]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Shipping"}),Object(R.jsxs)("div",{children:["\u20ac",t.shippingPrice.toFixed(2)]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Tax"}),Object(R.jsxs)("div",{children:["\u20ac",t.taxPrice.toFixed(2)]})]})}),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:Object(R.jsx)("strong",{children:" Order Total"})}),Object(R.jsx)("div",{children:Object(R.jsxs)("strong",{children:["\u20ac",t.totalPrice.toFixed(2)]})})]})}),Object(R.jsx)("li",{children:Object(R.jsx)("button",{type:"button",onClick:function(){b(function(e){return function(){var t=Object(u.a)(j.a.mark((function t(c,r){var n,s,a,i;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:q,payload:e}),t.prev=1,n=r(),s=n.userSignin.userInfo,t.next=5,h.a.post("/api/orders",e,{headers:{Authorization:"Bearer ".concat(s.token)}});case 5:a=t.sent,i=a.data,c({type:M,payload:i.order}),c({type:_}),localStorage.removeItem("cartItems"),t.next=15;break;case 12:t.prev=12,t.t0=t.catch(1),c({type:Q,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 15:case"end":return t.stop()}}),t,null,[[1,12]])})));return function(e,c){return t.apply(this,arguments)}}()}(Object($.a)(Object($.a)({},t),{},{orderItems:t.cartItems})))},className:"primary block",disabled:0===t.cartItems.length,children:"Place Order"})}),n&&Object(R.jsx)(D,{}),i&&Object(R.jsx)(T,{variant:"danger",children:i})]})})})]})]})}function te(e){var t=Object(s.b)(),c=e.match.params.id,n=Object(r.useState)(1),a=Object(F.a)(n,2),i=a[0],l=a[1],o=Object(s.c)((function(e){return e.productDetails})),b=o.loading,p=o.error,O=o.product;Object(r.useEffect)((function(){t(function(e){return function(){var t=Object(u.a)(j.a.mark((function t(c){var r,n;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c({type:U.PRODUCT_DETAILS_REQUEST,payload:e}),t.prev=1,t.next=4,h.a.get("/api/products/".concat(e));case 4:r=t.sent,n=r.data,c({type:U.PRODUCT_DETAILS_SUCCESS,payload:n}),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),c({type:U.PRODUCT_DETAILS_FAIL,payload:t.t0.response&&t.t0.response.data.message?t.t0.response.data.message:t.t0.message});case 12:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(e){return t.apply(this,arguments)}}()}(c))}),[t,c]);return Object(R.jsx)("div",{children:b?Object(R.jsx)(D,{}):p?Object(R.jsx)(T,{variant:"danger",children:p}):Object(R.jsxs)("div",{children:[Object(R.jsx)(d.b,{to:"/",children:Object(R.jsx)("button",{className:"closeBtn",children:"X"})}),Object(R.jsxs)("div",{className:"row top",children:[Object(R.jsx)("div",{className:"col-2",children:Object(R.jsx)("img",{className:"large",src:O.image,alt:O.name,width:"300px"})}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsx)("h1",{children:O.name})},O.id),Object(R.jsx)("li",{children:Object(R.jsx)(P,{rating:O.rating,numReviews:O.numReviews})},O.id),Object(R.jsxs)("li",{children:["Price: \u20ac",O.price]},O.id),Object(R.jsxs)("li",{children:["Description:",Object(R.jsx)("p",{children:O.description})]},O.id),Object(R.jsx)("li",{children:Object(R.jsxs)("p",{children:["Available Size:",O.availableSize.map((function(e){return Object(R.jsxs)("span",{children:[" "," ",Object(R.jsx)("button",{className:"button",children:e})]})}))]})},O.id)]})}),Object(R.jsx)("div",{className:"col-1",children:Object(R.jsx)("div",{className:"card card-body",children:Object(R.jsxs)("ul",{children:[Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Price"}),Object(R.jsxs)("div",{className:"price",children:["\u20ac",O.price]})]})},O.id),Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Status"}),Object(R.jsx)("div",{children:O.countInStock>0?Object(R.jsx)("span",{className:"success",children:"In Stock"}):Object(R.jsx)("span",{className:"danger",children:"Unavailable"})})]})},O.id),O.countInStock>0&&Object(R.jsxs)(R.Fragment,{children:[Object(R.jsx)("li",{children:Object(R.jsxs)("div",{className:"row",children:[Object(R.jsx)("div",{children:"Qty"}),Object(R.jsx)("div",{children:Object(R.jsx)("select",{value:i,onChange:function(e){return l(e.target.value)},children:Object(y.a)(Array(O.countInStock).keys()).map((function(e){return Object(R.jsx)("option",{value:e+1,children:e+1},e+1)}))})})]})},O.id),Object(R.jsx)("li",{children:Object(R.jsx)("button",{className:"primary block",onClick:function(){e.history.push("/cart/".concat(c,"?qty=").concat(i))},children:"Add to Cart"})},O.id)]})]})})})]})]})})}function ce(e){var t=Object(r.useState)(""),c=Object(F.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(""),l=Object(F.a)(i,2),o=l[0],b=l[1],m=Object(r.useState)(""),f=Object(F.a)(m,2),g=f[0],y=f[1],S=Object(r.useState)(""),I=Object(F.a)(S,2),E=I[0],N=I[1],_=e.location.search?e.location.search.split("=")[1]:"/",C=Object(s.c)((function(e){return e.userRegister})),w=C.userInfo,P=C.loading,A=C.error,U=Object(s.b)();return Object(r.useEffect)((function(){w&&e.history.push(_)}),[e.history,_,w]),Object(R.jsx)("div",{children:Object(R.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),g!==E?alert("Password and confirm password are not match"):U(function(e,t,c){return function(){var r=Object(u.a)(j.a.mark((function r(n){var s,a;return j.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n({type:p,payload:{email:t,password:c}}),r.prev=1,r.next=4,h.a.post("/api/users/register",{name:e,email:t,password:c});case 4:s=r.sent,a=s.data,n({type:O,payload:a}),n({type:v,payload:a}),localStorage.setItem("userInfo",JSON.stringify(a)),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(1),n({type:x,payload:r.t0.response&&r.t0.response.data.message?r.t0.response.data.message:r.t0.message});case 14:case"end":return r.stop()}}),r,null,[[1,11]])})));return function(e){return r.apply(this,arguments)}}()}(n,o,g))},children:[Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Create Account"})}),P&&Object(R.jsx)(D,{}),A&&Object(R.jsx)(T,{variant:"danger",children:A}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"name",children:"Name"}),Object(R.jsx)("input",{type:"text",id:"name",placeholder:"Enter name",required:!0,onChange:function(e){return a(e.target.value)}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(R.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"password",children:"Password"}),Object(R.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return y(e.target.value)}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"confirmPassword",children:"Confirm Password"}),Object(R.jsx)("input",{type:"password",id:"confirmPassword",placeholder:"Enter confirm password",required:!0,onChange:function(e){return N(e.target.value)}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{}),Object(R.jsx)("button",{className:"primary",type:"submit",children:"Register"})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{}),Object(R.jsxs)("div",{children:["Already have an account?"," ",Object(R.jsx)(d.b,{to:"/signin?redirect=".concat(_),children:"Sign-In"})]})]})]})})}function re(e){var t=Object(s.c)((function(e){return e.userSignin})).userInfo,c=Object(s.c)((function(e){return e.cart})).shippingAddress;t||e.history.push("/signin");var n=Object(r.useState)(c.fullName),a=Object(F.a)(n,2),i=a[0],d=a[1],l=Object(r.useState)(c.address),o=Object(F.a)(l,2),j=o[0],u=o[1],b=Object(r.useState)(c.city),h=Object(F.a)(b,2),p=h[0],O=h[1],x=Object(r.useState)(c.postalCode),m=Object(F.a)(x,2),v=m[0],f=m[1],g=Object(r.useState)(c.country),y=Object(F.a)(g,2),S=y[0],I=y[1],N=Object(s.b)();return Object(R.jsxs)("div",{children:[Object(R.jsx)(W,{step1:!0,step2:!0}),Object(R.jsxs)("form",{className:"form",onSubmit:function(t){var c;t.preventDefault(),N((c={fullName:i,address:j,city:p,postalCode:v,country:S},function(e){e({type:E,payload:c}),localStorage.setItem("shippingAddress",JSON.stringify(c))})),e.history.push("/payment")},children:[Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Shipping Address"})}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"fullName",children:"Full Name"}),Object(R.jsx)("input",{type:"text",id:"fullName",placeholder:"Enter full name",value:i,onChange:function(e){return d(e.target.value)},required:!0})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"address",children:"Address"}),Object(R.jsx)("input",{type:"text",id:"address",placeholder:"Enter address",value:j,onChange:function(e){return u(e.target.value)},required:!0})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"city",children:"City"}),Object(R.jsx)("input",{type:"text",id:"city",placeholder:"Enter city",value:p,onChange:function(e){return O(e.target.value)},required:!0})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"postalCode",children:"Postal Code"}),Object(R.jsx)("input",{type:"text",id:"postalCode",placeholder:"Enter postal code",value:v,onChange:function(e){return f(e.target.value)},required:!0})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"country",children:"Country"}),Object(R.jsx)("input",{type:"text",id:"country",placeholder:"Enter country",value:S,onChange:function(e){return I(e.target.value)},required:!0})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{}),Object(R.jsx)("button",{className:"primary",type:"submit",children:"Continue"})]})]})]})}function ne(e){var t=Object(r.useState)(""),c=Object(F.a)(t,2),n=c[0],a=c[1],i=Object(r.useState)(""),l=Object(F.a)(i,2),o=l[0],b=l[1],p=e.location.search?e.location.search.split("=")[1]:"/",O=Object(s.c)((function(e){return e.userSignin})),x=O.userInfo,g=O.loading,y=O.error,S=Object(s.b)();return Object(r.useEffect)((function(){x&&e.history.push(p)}),[e.history,p,x]),Object(R.jsx)("div",{children:Object(R.jsxs)("form",{className:"form",onSubmit:function(e){e.preventDefault(),S(function(e,t){return function(){var c=Object(u.a)(j.a.mark((function c(r){var n,s;return j.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r({type:m,payload:{email:e,password:t}}),c.prev=1,c.next=4,h.a.post("/api/users/signin",{email:e,password:t});case 4:n=c.sent,s=n.data,r({type:v,payload:s}),localStorage.setItem("userInfo",JSON.stringify(s)),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),r({type:f,payload:c.t0.response&&c.t0.response.data.message?c.t0.response.data.message:c.t0.message});case 13:case"end":return c.stop()}}),c,null,[[1,10]])})));return function(e){return c.apply(this,arguments)}}()}(n,o))},children:[Object(R.jsx)("div",{children:Object(R.jsx)("h1",{children:"Sign In"})}),g&&Object(R.jsx)(D,{}),y&&Object(R.jsx)(T,{variant:"danger",children:y}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"email",children:"Email address"}),Object(R.jsx)("input",{type:"email",id:"email",placeholder:"Enter email",required:!0,onChange:function(e){return a(e.target.value)}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{htmlFor:"password",children:"Password"}),Object(R.jsx)("input",{type:"password",id:"password",placeholder:"Enter password",required:!0,onChange:function(e){return b(e.target.value)}})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{}),Object(R.jsx)("button",{className:"primary",type:"submit",children:"Sign In"})]}),Object(R.jsxs)("div",{children:[Object(R.jsx)("label",{}),Object(R.jsxs)("div",{children:["New customer?"," ",Object(R.jsx)(d.b,{to:"/register?redirect=".concat(p),children:"Create new account"})]})]})]})})}var se=function(){var e=Object(s.c)((function(e){return e.cart})).cartItems,t=Object(s.c)((function(e){return e.userSignin})).userInfo,c=Object(s.b)();return Object(R.jsx)(d.a,{children:Object(R.jsxs)("div",{className:"grid-container",children:[Object(R.jsxs)("header",{className:"row",children:[Object(R.jsx)("div",{children:Object(R.jsx)(d.b,{className:"brand",to:"/",children:"Iron Outlet"})}),Object(R.jsxs)("div",{children:[Object(R.jsxs)(d.b,{to:"/cart",children:["Cart",e.length>0&&Object(R.jsx)("span",{className:"badge",children:e.length})]}),t?Object(R.jsxs)("div",{className:"dropdown",children:[Object(R.jsxs)(d.b,{to:"#",children:[t.name," ",Object(R.jsx)("i",{className:"fa fa-caret-down"})," "]}),Object(R.jsx)("ul",{className:"dropdown-content",children:Object(R.jsx)("li",{children:Object(R.jsx)(d.b,{to:"#signout",onClick:function(){c((function(e){localStorage.removeItem("userInfo"),localStorage.removeItem("cartItems"),localStorage.removeItem("shippingAddress"),e({type:g})}))},children:"Sign Out"})})})]}):Object(R.jsx)(d.b,{to:"/signin",children:"Sign In"})]})]}),Object(R.jsxs)("main",{children:[Object(R.jsx)(l.a,{path:"/cart/:id?",component:w}),Object(R.jsx)(l.a,{path:"/product/:id",component:te}),Object(R.jsx)(l.a,{path:"/signin",component:ne}),Object(R.jsx)(l.a,{path:"/register",component:ce}),Object(R.jsx)(l.a,{path:"/shipping",component:re}),Object(R.jsx)(l.a,{path:"/payment",component:Z}),Object(R.jsx)(l.a,{path:"/placeorder",component:ee}),Object(R.jsx)(l.a,{path:"/order/:id",component:K}),Object(R.jsx)(l.a,{path:"/",component:L,exact:!0})]}),Object(R.jsx)("footer",{className:"row center",children:"Happy shopping!"})]})})},ae=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,77)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,s=t.getLCP,a=t.getTTFB;c(e),r(e),n(e),s(e),a(e)}))},ie=c(18),de=c(41),le=c(16),oe=le.PRODUCT_LIST_REQUEST,je=le.PRODUCT_LIST_SUCCESS,ue=le.PRODUCT_LIST_FAIL,be=le.PRODUCT_DETAILS_REQUEST,he=le.PRODUCT_DETAILS_SUCCESS,pe=le.PRODUCT_DETAILS_FAIL,Oe={userSignin:{userInfo:localStorage.getItem("userInfo")?JSON.parse(localStorage.getItem("userInfo")):null},cart:{cartItems:localStorage.getItem("cartItems")?JSON.parse(localStorage.getItem("cartItems")):[],shippingAddress:localStorage.getItem("shippingAddress")?JSON.parse(localStorage.getItem("shippingAddress")):{},paymentMethod:"PayPal"}},xe=Object(ie.c)({productList:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0,products:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case oe:return{loading:!0};case je:return{loading:!1,products:t.payload};case ue:return{loading:!1,error:t.payload};default:return e}},productDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{product:{},loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case be:return{loading:!0};case he:return{loading:!1,product:t.payload};case pe:return{loading:!1,error:t.payload};default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{cartItems:[]},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S:var c=t.payload,r=e.cartItems.find((function(e){return e.product===c.product}));return r?Object($.a)(Object($.a)({},e),{},{cartItems:e.cartItems.map((function(e){return e.product===r.product?c:e}))}):Object($.a)(Object($.a)({},e),{},{cartItems:[].concat(Object(y.a)(e.cartItems),[c])});case I:return Object($.a)(Object($.a)({},e),{},{cartItems:e.cartItems.filter((function(e){return e.product!==t.payload}))});case E:return Object($.a)(Object($.a)({},e),{},{shippingAddress:t.payload});case N:return Object($.a)(Object($.a)({},e),{},{paymentMethod:t.payload});case _:return Object($.a)(Object($.a)({},e),{},{cartItems:[]});default:return e}},userSignin:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return{loading:!0};case v:return{loading:!1,userInfo:t.payload};case f:return{loading:!1,error:t.payload};case g:return{};default:return e}},userRegister:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return{loading:!0};case O:return{loading:!1,userInfo:t.payload};case x:return{loading:!1,error:t.payload};default:return e}},orderCreate:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case q:return{loading:!0};case M:return{loading:!1,success:!0,order:t.payload};case Q:return{loading:!1,error:t.payload};case J:return{};default:return e}},orderDetails:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!0},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case V:return{loading:!0};case H:return{loading:!1,order:t.payload};case X:return{loading:!1,error:t.payload};default:return e}},orderPay:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case G:return{loading:!0};case B:return{loading:!1,success:!0};case Y:return{loading:!1,error:t.payload};case z:return{};default:return e}}}),me=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||ie.d,ve=Object(ie.e)(xe,Oe,me(Object(ie.a)(de.a)));i.a.render(Object(R.jsx)(s.a,{store:ve,children:Object(R.jsx)(n.a.StrictMode,{children:Object(R.jsx)(se,{})})}),document.getElementById("root")),ae()}},[[76,1,2]]]);
//# sourceMappingURL=main.09807802.chunk.js.map