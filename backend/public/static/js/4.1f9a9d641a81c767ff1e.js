webpackJsonp([4],{OCbl:function(e,t){},exCK:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=s("Dd8w"),a=s.n(n),i=s("NYxO"),o={name:"Mypage",created:function(){console.log("mypage.vue"),console.log(this.authInfo)},data:function(){return{fields:["id","name","email","active"],items:this.authInfo}},computed:a()({},Object(i.b)({authInfo:"authInfo"})),methods:{rowClass:function(e,t){if(e)return"awesome"===e.status?"table-success":void 0}}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",[t("b-table",{attrs:{items:this.items,fields:this.fields,"tbody-tr-class":this.rowClass}})],1)},staticRenderFns:[]};var u=s("VU/8")(o,l,!1,function(e){s("OCbl")},null,null);t.default=u.exports}});
//# sourceMappingURL=4.1f9a9d641a81c767ff1e.js.map