webpackJsonp([1],{c4mK:function(t,s,n){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=n("mvHQ"),a=n.n(e),i=n("Dd8w"),o=n.n(i),r=n("NYxO"),l=n("TIfe"),u={name:"Login",data:function(){return{auth:{id:"",pw:""},loginMsg:""}},created:function(){console.log("Login.vue")},methods:o()({},Object(r.c)({setAuthInfo:"setAuthInfo"}),{login:function(){var t=this;console.log("로그인"),console.log(a()(this.auth));var s={params:{id:this.auth.id,pw:this.auth.pw}};this.$http.post("/api/auth/login",s).then(function(s){if(s.data.success){console.log(s.data.user);var n=s.data.user;n.active=!0,t.setAuthInfo(n),Object(l.c)(n),t.$router.push({name:"Home"})}else t.loginMsg="id또는 pw가 일치하지 않습니다."})}})},c={render:function(){var t=this,s=t.$createElement,n=t._self._c||s;return n("div",{staticClass:"div_login"},[n("b-form",[n("label",{staticClass:"sr-only",attrs:{for:"id"}},[t._v("id")]),t._v(" "),n("b-input-group",{staticClass:"mb-2 mr-sm-2 id",attrs:{prepend:"ID"}},[n("b-input",{attrs:{id:"id",placeholder:"id"},model:{value:t.auth.id,callback:function(s){t.$set(t.auth,"id",s)},expression:"auth.id"}})],1),t._v(" "),n("label",{staticClass:"sr-only",attrs:{for:"password"}},[t._v("password")]),t._v(" "),n("b-input-group",{staticClass:"mb-2 mr-sm-2",attrs:{prepend:"PW"}},[n("b-input",{attrs:{id:"password",type:"password",placeholder:"password"},model:{value:t.auth.pw,callback:function(s){t.$set(t.auth,"pw",s)},expression:"auth.pw"}})],1),t._v(" "),n("div",{staticClass:"login_msg"},[t._v(t._s(t.loginMsg))]),t._v(" "),n("b-button",{staticClass:"btn_login",attrs:{variant:"primary"},on:{click:t.login,keyup:function(s){return!s.type.indexOf("key")&&t._k(s.keyCode,"enter",13,s.key,"Enter")?null:t.btn_login(s)}}},[t._v("Login")])],1)],1)},staticRenderFns:[]};var d=n("VU/8")(u,c,!1,function(t){n("vbn7")},null,null);s.default=d.exports},mvHQ:function(t,s,n){t.exports={default:n("qkKv"),__esModule:!0}},qkKv:function(t,s,n){var e=n("FeBl"),a=e.JSON||(e.JSON={stringify:JSON.stringify});t.exports=function(t){return a.stringify.apply(a,arguments)}},vbn7:function(t,s){}});
//# sourceMappingURL=1.957ee6aa75492cadd90a.js.map