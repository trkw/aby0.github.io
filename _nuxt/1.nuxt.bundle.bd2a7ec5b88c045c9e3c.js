webpackJsonp([1],{163:function(t,e,r){"use strict";function n(t){r(184)}Object.defineProperty(e,"__esModule",{value:!0});var a=r(186),s=r(188),i=r(18),o=n,c=i(a.a,s.a,o,null,null);e.default=c.exports},167:function(t,e,r){"use strict";r.d(e,"a",function(){return n});var n=function(t){var e=new Date(t);return["January","February","March","April","May","June","July","August","September","October","November","December"][e.getMonth()]+" "+e.getDate()+", "+e.getFullYear()}},168:function(t,e,r){"use strict";function n(t,e){return p()(e).forEach(function(r){["number","string"].includes(u()(e[r]))&&(t=t.replace(new RegExp(":"+r,"gi"),""+e[r]))}),t.replace(/\/?:[^\/]+/g,"").replace(/\/+/g,"/").replace(/\/$/,"")}r.d(e,"a",function(){return A});var a=r(43),s=r.n(a),i=r(44),o=r.n(i),c=r(42),u=r.n(c),l=r(45),p=r.n(l),g=this,f=function(){var t=o()(s.a.mark(function t(e,r){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r&&"$axios"in r){t.next=5;break}return console.log("Use @nuxtjs/axios or axios plugin.\nthis.$axios is requried to fetch from blog API.\nFalling back to fetch API. https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API"),t.next=4,fetch(e);case 4:return t.abrupt("return",t.sent.json());case 5:return t.next=7,r.$axios.get(e);case 7:return t.abrupt("return",t.sent.data);case 8:case"end":return t.stop()}},t,this)}));return function(e,r){return t.apply(this,arguments)}}(),d="http://aby.ninja".replace(/\/$/,""),A=function(){var t=o()(s.a.mark(function t(e,r,a){return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=3,f(""+d+n("/_nuxt/api/blog/"+e,r)+".json",a);case 3:return t.abrupt("return",t.sent);case 4:return t.next=6,f(""+d+n("/api/blog/"+e,r),a);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}},t,g)}));return function(e,r,n){return t.apply(this,arguments)}}()},169:function(t,e,r){"use strict";function n(t){this.$style=r(170)}var a=r(172),s=r(173),i=r(18),o=n,c=i(a.a,s.a,o,null,null);e.a=c.exports},170:function(t,e,r){var n=r(171);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(41)("5f84d929",n,!0)},171:function(t,e,r){e=t.exports=r(40)(!0),e.push([t.i,"._1hstLU2iZuXH9RQiDatU8D_0{margin-bottom:15px}.jdgVUXgJxRxyCO4JQ0cRJ_0{font-size:.75rem;opacity:.75}","",{version:3,sources:["/Users/somya/Workspace/aby0.github.io/node_modules/@nuxtjs/blog/src/app/components/Article.vue"],names:[],mappings:"AACA,2BACE,kBAAoB,CACrB,AACD,yBACE,iBAAkB,AAClB,WAAa,CACd",file:"Article.vue",sourcesContent:["\n.preview {\n  margin-bottom: 15px;\n}\n.meta {\n  font-size: .75rem;\n  opacity: .75;\n}\n"],sourceRoot:""}]),e.locals={preview:"_1hstLU2iZuXH9RQiDatU8D_0",meta:"jdgVUXgJxRxyCO4JQ0cRJ_0"}},172:function(t,e,r){"use strict";var n=r(167);e.a={name:"Article",props:{id:{required:!0,type:String},title:{required:!0,type:String},description:{required:!0,type:String},published_at:{required:!0,type:String}},filters:{formatDate:n.a}}},173:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("article",{class:t.$style.preview},[r("router-link",{attrs:{to:{name:"@nuxtjs/blog:article",params:Object.assign({id:t.id},t.$attrs)}}},[t._v(t._s(t.title))]),r("div",{class:t.$style.meta},[r("time",{attrs:{datatime:t.published_at}},[t._v(t._s(t._f("formatDate")(t.published_at)))])]),r("p",[t._v(t._s(t.description))])],1)},a=[],s={render:n,staticRenderFns:a};e.a=s},184:function(t,e,r){var n=r(185);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);r(41)("1b55d4a0",n,!0)},185:function(t,e,r){e=t.exports=r(40)(!0),e.push([t.i,'.tag-header{cursor:pointer}.tag-header:hover:before{content:"#";margin-left:-.6em}.tag-links{margin-bottom:-1rem;display:block;text-align:right}',"",{version:3,sources:["/Users/somya/Workspace/aby0.github.io/node_modules/@nuxtjs/blog/src/app/pages/Tag.vue"],names:[],mappings:"AACA,YAAY,cAAc,CACzB,AACD,yBAA0B,YAAY,iBAAiB,CACtD,AACD,WAAW,oBAAoB,cAAc,gBAAgB,CAC5D",file:"Tag.vue",sourcesContent:["\n.tag-header{cursor:pointer\n}\n.tag-header:hover::before{content:'#';margin-left:-.6em\n}\n.tag-links{margin-bottom:-1rem;display:block;text-align:right\n}\n"],sourceRoot:""}])},186:function(t,e,r){"use strict";var n=r(187),a=r(169);e.a={extends:n.a,components:{ArticlePreview:a.a}}},187:function(t,e,r){"use strict";var n=r(43),a=r.n(n),s=r(42),i=r.n(s),o=r(44),c=r.n(o),u=r(168);e.a={name:"TagPage",asyncData:function(){function t(t){return e.apply(this,arguments)}var e=c()(a.a.mark(function t(e){var r,n,s;return a.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(r=e.params,n=e.payload,s=e.app,"object"!==(void 0===n?"undefined":i()(n))||!n){t.next=3;break}return t.abrupt("return",{tag:n});case 3:return t.next=5,Object(u.a)("/tags/:id",r,s);case 5:return t.t0=t.sent,t.abrupt("return",{tag:t.t0});case 7:case"end":return t.stop()}},t,this)}));return t}(),computed:{articles:function(){return this.tag?this.tag.articles:[]}}}},188:function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"container mt-3"},[r("div",{staticClass:"row"},[r("div",{staticClass:"col-xs-12 col-lg-8 offset-lg-2"},[r("header",[r("small",{staticClass:"tag-links"},[r("small",{staticClass:"text-uppercase"},[r("nuxt-link",{attrs:{to:{name:"@nuxtjs/blog:index"}}},[t._v("Back to blog")])],1)]),r("h1",{staticClass:"tag-header"},[t._v(t._s(t.tag.name))])]),t._l(t.articles,function(e){return r("ArticlePreview",t._b({key:e.id,attrs:{id:e.id,title:e.title,description:e.description,published_at:e.published_at}},"ArticlePreview",e,!1))})],2)])])},a=[],s={render:n,staticRenderFns:a};e.a=s}});
//# sourceMappingURL=1.nuxt.bundle.bd2a7ec5b88c045c9e3c.js.map