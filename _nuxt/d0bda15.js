/*! For license information please see LICENSES */
(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{194:function(t,e,r){"use strict";var o=r(6),n=r(27),c=r(28),d=r(126),l=r(67),f=r(10),h=r(50).f,v=r(51).f,m=r(14).f,y=r(197).trim,x="Number",w=o.Number,A=w,_=w.prototype,C=c(r(89)(_))==x,k="trim"in String.prototype,I=function(t){var e=l(t,!1);if("string"==typeof e&&e.length>2){var r,o,n,c=(e=k?e.trim():y(e,3)).charCodeAt(0);if(43===c||45===c){if(88===(r=e.charCodeAt(2))||120===r)return NaN}else if(48===c){switch(e.charCodeAt(1)){case 66:case 98:o=2,n=49;break;case 79:case 111:o=8,n=55;break;default:return+e}for(var code,d=e.slice(2),i=0,f=d.length;i<f;i++)if((code=d.charCodeAt(i))<48||code>n)return NaN;return parseInt(d,o)}}return+e};if(!w(" 0o1")||!w("0b1")||w("+0x1")){w=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof w&&(C?f((function(){_.valueOf.call(r)})):c(r)!=x)?d(new A(I(e)),r,w):I(e)};for(var L,$=r(8)?h(A):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger".split(","),N=0;$.length>N;N++)n(A,L=$[N])&&!n(w,L)&&m(w,L,v(A,L));w.prototype=_,_.constructor=w,r(16)(o,x,w)}},195:function(t,e,r){var content=r(201);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("ffc3dc2c",content,!0,{sourceMap:!1})},196:function(t,e,r){var content=r(203);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("23ea74f4",content,!0,{sourceMap:!1})},197:function(t,e,r){var o=r(4),n=r(33),c=r(10),d=r(198),l="["+d+"]",f=RegExp("^"+l+l+"*"),h=RegExp(l+l+"*$"),v=function(t,e,r){var n={},l=c((function(){return!!d[t]()||"​"!="​"[t]()})),f=n[t]=l?e(m):d[t];r&&(n[r]=f),o(o.P+o.F*l,"String",n)},m=v.trim=function(t,e){return t=String(n(t)),1&e&&(t=t.replace(f,"")),2&e&&(t=t.replace(h,"")),t};t.exports=v},198:function(t,e){t.exports="\t\n\v\f\r   ᠎             　\u2028\u2029\ufeff"},199:function(t,e,r){t.exports=function(){"use strict";var g="undefined"!=typeof document&&document.documentMode,t={rootMargin:"0px",threshold:0,load:function(t){if("picture"===t.nodeName.toLowerCase()){var e=t.querySelector("img"),r=!1;null===e&&(e=document.createElement("img"),r=!0),g&&t.getAttribute("data-iesrc")&&(e.src=t.getAttribute("data-iesrc")),t.getAttribute("data-alt")&&(e.alt=t.getAttribute("data-alt")),r&&t.append(e)}if("video"===t.nodeName.toLowerCase()&&!t.getAttribute("data-src")&&t.children){for(var a=t.children,o=void 0,i=0;i<=a.length-1;i++)(o=a[i].getAttribute("data-src"))&&(a[i].src=o);t.load()}t.getAttribute("data-poster")&&(t.poster=t.getAttribute("data-poster")),t.getAttribute("data-src")&&(t.src=t.getAttribute("data-src")),t.getAttribute("data-srcset")&&t.setAttribute("srcset",t.getAttribute("data-srcset"));var n=",";if(t.getAttribute("data-background-delimiter")&&(n=t.getAttribute("data-background-delimiter")),t.getAttribute("data-background-image"))t.style.backgroundImage="url('"+t.getAttribute("data-background-image").split(n).join("'),url('")+"')";else if(t.getAttribute("data-background-image-set")){var c=t.getAttribute("data-background-image-set").split(n),u=c[0].substr(0,c[0].indexOf(" "))||c[0];u=-1===u.indexOf("url(")?"url("+u+")":u,1===c.length?t.style.backgroundImage=u:t.setAttribute("style",(t.getAttribute("style")||"")+"background-image: "+u+"; background-image: -webkit-image-set("+c+"); background-image: image-set("+c+")")}t.getAttribute("data-toggle-class")&&t.classList.toggle(t.getAttribute("data-toggle-class"))},loaded:function(){}};function e(t){t.setAttribute("data-loaded",!0)}var r=function(t){return"true"===t.getAttribute("data-loaded")},o=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:document;return t instanceof Element?[t]:t instanceof NodeList?t:e.querySelectorAll(t)};return function(){var n,a,c=0<arguments.length&&void 0!==arguments[0]?arguments[0]:".lozad",d=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},l=Object.assign({},t,d),i=l.root,f=l.rootMargin,h=l.threshold,u=l.load,g=l.loaded,s=void 0;"undefined"!=typeof window&&window.IntersectionObserver&&(s=new IntersectionObserver((n=u,a=g,function(t,o){t.forEach((function(t){(0<t.intersectionRatio||t.isIntersecting)&&(o.unobserve(t.target),r(t.target)||(n(t.target),e(t.target),a(t.target)))}))}),{root:i,rootMargin:f,threshold:h}));for(var v,m=o(c,i),b=0;b<m.length;b++)(v=m[b]).getAttribute("data-placeholder-background")&&(v.style.background=v.getAttribute("data-placeholder-background"));return{observe:function(){for(var t=o(c,i),n=0;n<t.length;n++)r(t[n])||(s?s.observe(t[n]):(u(t[n]),e(t[n]),g(t[n])))},triggerLoad:function(t){r(t)||(u(t),e(t),g(t))},observer:s}}}()},200:function(t,e,r){"use strict";r(195)},201:function(t,e,r){var o=r(12)(!1);o.push([t.i,".AppImage{max-width:100%;max-height:100%;width:auto;height:auto;vertical-align:middle}",""]),t.exports=o},202:function(t,e,r){"use strict";r(196)},203:function(t,e,r){var o=r(12)(!1);o.push([t.i,".details[data-v-177c00cd]{cursor:pointer;position:absolute;top:0;left:0;width:100%;height:100%;z-index:1}.details[data-v-177c00cd]:hover{border:1px solid #613916}.title[data-v-177c00cd]{margin-top:10px;color:#613916}.counter[data-v-177c00cd]{width:100%;display:inline-block;text-align:center;font-size:18px;font-weight:700;padding:3px;border:none;background:#fff;margin-top:5px;color:#613916}.button[data-v-177c00cd],.selector[data-v-177c00cd]{z-index:2}.selector[data-v-177c00cd]{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:end;-ms-flex-pack:end;justify-content:flex-end;width:100%}.selector button[data-v-177c00cd]{background-color:#613916;color:#fff;margin:0;font-weight:700;font-size:18px}.selector .counter-container[data-v-177c00cd],.selector button[data-v-177c00cd]{-webkit-box-flex:1;-ms-flex:1;flex:1}.price[data-v-177c00cd]{position:absolute;bottom:10px;right:0;padding:10px;background:#fc0;border-radius:5px 0 0 5px;opacity:.8}.card-content[data-v-177c00cd]{padding:.5rem 1rem}.card-content h2[data-v-177c00cd],.card-content p[data-v-177c00cd]{padding:0 15px}.buttons[data-v-177c00cd]{margin:0}.AppImage[data-v-177c00cd],.card-image[data-v-177c00cd]{min-height:250px;background-size:cover;background-position:50% 50%;background-repeat:no-repeat}.image img[data-v-177c00cd]{margin-bottom:20px}.card .media[data-v-177c00cd]{margin-bottom:.5rem}.add-to-order[data-v-177c00cd]{background-color:#613916}@media(min-width:768px){.card-content[data-v-177c00cd]{min-height:220px}.card-footer[data-v-177c00cd]{position:absolute;bottom:0;width:93%}.card .content p[data-v-177c00cd]{overflow:hidden;display:-webkit-box;-webkit-line-clamp:4;-webkit-box-orient:vertical}}",""]),t.exports=o},204:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(26);function o(t,e){var r=e.trim().toLowerCase();if(!r.length)return t;var o=t.filter((function(t){return t.title.toLowerCase().indexOf(r)>-1})),n=t.filter((function(t){return t.description.toLowerCase().indexOf(r)>-1}));return console.log([n,o]),function(t){for(var a=t.concat(),i=0;i<a.length;++i)for(var e=i+1;e<a.length;++e)a[i]===a[e]&&a.splice(e--,1);return a}(o.concat(n))}},205:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(26);function o(t,e){var r=e.trim().toLowerCase();return r.length?t.filter((function(t){return t.type.toLowerCase().indexOf(r)>-1})):t}},207:function(t,e,r){"use strict";r(194);var o=r(199),n=r.n(o),c={name:"AppImage",props:{backgroundColor:{type:String,default:"#efefef"},height:{type:Number,default:null},lazySrc:{type:String,default:null},lazySrcset:{type:String,default:null},width:{type:Number,default:null}},data:function(){return{loading:!0}},computed:{aspectRatio:function(){return this.width&&this.height?this.height/this.width*100:null},style:function(){var style={backgroundColor:this.backgroundColor};return this.width&&(style.width="".concat(this.width,"px")),this.loading&&this.aspectRatio&&(style.height=0,style.paddingTop="".concat(this.aspectRatio,"%")),style}},mounted:function(){var t=this,e=function(){t.loading=!1};this.$el.addEventListener("load",e),this.$once("hook:destroyed",(function(){t.$el.removeEventListener("load",e)})),n()(this.$el).observe()}},d=(r(200),r(2)),l=Object(d.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"AppImage",style:t.style,attrs:{"data-background-image":t.lazySrc,"data-srcset":t.lazySrcset}})}),[],!1,null,null,null).exports,f={name:"products",props:{product:Object,value:{default:0,type:Number},min:{default:0,type:Number},max:{default:void 0,type:Number}},data:function(){return{addToCartLabel:"Add",viewDetailsLabel:"Details",removeFromCartLabel:"Clear",addToFavouriteLabel:"Add to favourite",removeFromFavouriteLabel:"Remove from favourite",selected:1,quantityArray:[],newValue:0}},components:{appImage:l},mounted:function(){for(var i=1;i<=10;i++)this.quantityArray.push(i);this.$props.product.quantity>1&&(this.selected=this.$props.product.quantity)},computed:{isUserLogged:function(){return this.$store.getters.isUserLoggedIn}},methods:{addToCart:function(t){var data={id:t,status:!0,quantity:this.newValue+1};this.$store.commit("addToCart",t),this.$store.commit("setAddedBtn",data),(void 0===this.max||this.newValue<this.max)&&(this.newValue=this.newValue+1),this.$store.commit("quantity",data)},removeFromCart:function(t){var data={id:t,status:!1,quantity:this.newValue-1};this.$store.commit("setAddedBtn",data),this.newValue>this.min&&(this.newValue=this.newValue-1,this.$store.commit("quantity",data)),0==this.newValue&&this.$store.commit("removeFromCart",t)},saveToFavorite:function(t){this.$store.state.userInfo.isLoggedIn?this.$store.commit("addToFavourite",t):this.$store.commit("showLoginModal",!0)},removeFromFavourite:function(t){this.$store.commit("removeFromFavourite",t)},onSelectQuantity:function(t){var data={id:t,quantity:this.selected};this.$store.commit("quantity",data)}}},h=(r(202),Object(d.a)(f,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[""!=t.product.imgURL?r("div",{staticClass:"card-image"},[r("appImage",{attrs:{"lazy-src":t.product.imgURL}}),t._v(" "),""!=t.product.price?r("p",{staticClass:"is-pulled-right price"},[r("span",{staticClass:"title is-4"},[r("strong",[t._v("kr "+t._s(t.product.price.toLocaleString()))])])]):t._e()],1):r("div",{staticClass:"card-image"},[r("appImage",{attrs:{"lazy-src":"/images/default.jpg"}}),t._v(" "),""!=t.product.price?r("p",{staticClass:"is-pulled-right price"},[r("span",{staticClass:"title is-4"},[r("strong",[t._v("kr "+t._s(t.product.price.toLocaleString()))])])]):t._e()],1),t._v(" "),r("div",{staticClass:"card-content"},[r("div",{staticClass:"media"},[r("div",{},[r("h2",{staticClass:"title is-4"},[t._v(t._s(t.product.title))])])]),t._v(" "),r("div",{staticClass:"content is-clearfix"},[r("p",[t._v(t._s(t.product.description))])]),t._v(" "),r("div",{staticClass:"card-footer btn-actions"},[r("div",{staticClass:"card-footer-item field is-grouped"},[r("div",{staticClass:"buttons"}),t._v(" "),r("div",{staticClass:"selector is-rounded is-small"},[r("button",{staticClass:"button remove-from-cart",on:{click:function(e){return t.removeFromCart(t.product.id,!1)}}},[t._v("-")]),t._v(" "),r("span",{staticClass:"counter-container"},[r("span",{staticClass:"counter"},[t._v(t._s(t.newValue))])]),t._v(" "),r("button",{staticClass:"button add-to-cart",on:{click:function(e){return t.addToCart(t.product.id)}}},[t._v("+")])])])])])])}),[],!1,null,"177c00cd",null));e.a=h.exports},210:function(t,e,r){var content=r(214);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(13).default)("146f0670",content,!0,{sourceMap:!1})},213:function(t,e,r){"use strict";r(210)},214:function(t,e,r){var o=r(12)(!1);o.push([t.i,".card[data-v-14fd1e82]{margin:10px}",""]),t.exports=o},217:function(t,e,r){"use strict";r.r(e);var o=r(207),n=r(204),c=r(205),d={name:"user-wishlist",data:function(){return{pageTitle:"Your Wishlist",noProductLabel:"Your wishlist is empty"}},components:{VmProductsList:o.a},computed:{productsInWishlist:function(){return this.$store.state.userInfo.hasSearched?this.getProductByTitle():this.$store.state.userInfo.hasFiltered?(console.log("has filter"),this.getProductByTag()):this.$store.getters.productsAddedToFavourite}},methods:{getProductByTitle:function(){var t=this.$store.getters.productsAddedToFavourite,e=this.$store.state.userInfo.productTitleSearched;return this.productsFiltered=Object(n.a)(t,e)},getProductByTag:function(){var t=this.$store.getters.productsAddedToFavourite,e=this.$store.state.userInfo.productTagFiltered;return this.productsFiltered=Object(c.a)(t,e)}}},l=(r(213),r(2)),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"section"},[r("h3",{staticClass:"title"},[t._v(t._s(t.pageTitle))]),t._v(" "),r("div",{staticClass:"columns is-centered is-multiline"},[t._l(t.productsInWishlist,(function(t){return r("div",{key:t.id,staticClass:"card column is-one-quarter"},[r("VmProductsList",{attrs:{product:t}})],1)})),t._v(" "),0===t.productsInWishlist.length?r("div",{staticClass:"section"},[r("p",[t._v(t._s(t.noProductLabel))])]):t._e()],2)])}),[],!1,null,"14fd1e82",null);e.default=component.exports}}]);