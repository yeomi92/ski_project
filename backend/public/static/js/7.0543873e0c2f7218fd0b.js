webpackJsonp([7],{AjJr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("Dd8w"),s=i.n(a),n=i("NYxO"),d={name:"BoardDetail",data:function(){return{item:{},isAuthor:!1}},computed:s()({},Object(n.b)({authInfo:"authInfo"})),mounted:function(){this.getItem()},watch:{$route:function(t,e){this.$router.push({params:{id:t.params.id}}),this.getItem()}},created:function(){console.log("BoardDetail.vue")},methods:{getItem:function(){var t=this;this.$http.get("/api/board/detail/"+this.$route.params.id).then(function(e){t.item=e.data.item[0],t.isAuthor=t.authInfo.id===t.item.author.id})},update:function(){var t=this,e={title:this.item.title,content:this.item.content};this.$http.put("/api/board/update/"+this.$route.params.id,e).then(function(e){t.content=e.data})}}},o={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"board_detail"},[i("div",[i("div",{staticClass:"title"},[t._v("\n            상세보기\n        ")]),t._v(" "),i("div",{staticClass:"body"},[i("div",[i("div",{staticClass:"th"},[t._v("title")]),t._v(" "),i("div",{staticClass:"td"},[i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.title,expression:"item.title"}],attrs:{type:"text",disabled:!t.isAuthor},domProps:{value:t.item.title},on:{input:function(e){e.target.composing||t.$set(t.item,"title",e.target.value)}}})])]),t._v(" "),i("div",[i("div",{staticClass:"th"},[t._v("author")]),t._v(" "),i("div",{staticClass:"td"},[t._v(t._s(t.item.author.id))])]),t._v(" "),i("div",[i("div",{staticClass:"th"},[t._v("views")]),t._v(" "),i("div",{staticClass:"td"},[t._v(t._s(t.item.views))])]),t._v(" "),i("div",[i("div",{staticClass:"th"},[t._v("content")]),t._v(" "),i("div",{staticClass:"td"},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.item.content,expression:"item.content"}],attrs:{disabled:!t.isAuthor},domProps:{value:t.item.content},on:{input:function(e){e.target.composing||t.$set(t.item,"content",e.target.value)}}})])]),t._v(" "),i("div",[i("div",{staticClass:"th"},[t._v("create date")]),t._v(" "),i("div",{staticClass:"td"},[t._v(t._s(t.item.create_date.split("T")[0]))])]),t._v(" "),i("div",[i("div",{staticClass:"th"},[t._v("modify date")]),t._v(" "),i("div",{staticClass:"td"},[t._v(t._s(t.item.mod_date.split("T")[0]))])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.isAuthor,expression:"isAuthor"}],staticClass:"btn"},[i("input",{attrs:{type:"button",value:"저장"},on:{click:t.update}})])])])},staticRenderFns:[]};var v=i("VU/8")(d,o,!1,function(t){i("cqBP")},null,null);e.default=v.exports},cqBP:function(t,e){}});
//# sourceMappingURL=7.0543873e0c2f7218fd0b.js.map