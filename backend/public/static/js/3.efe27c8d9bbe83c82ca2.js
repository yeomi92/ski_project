webpackJsonp([3],{"67do":function(e,t){},IoD0:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=r("Dd8w"),i=r.n(o),a=r("NYxO"),n={name:"Login",data:function(){return{form:{id:"",pw:"",checkPw:"",email:"",name:"",gender:null,checkedAgree:""},id:null,pw:!1,genderList:[{text:"선택",value:null},"여자","남자"],show:!0}},computed:{idMsg:function(){console.log(this.form.id);var e="";return this.form.id&&null!=this.id?e=this.id?"사용가능한 아이디입니다.":"중복된 아이디입니다.":(e="",this.id=null),e},pwMsg:function(){console.log(this.form.pw),console.log(this.form.checkPw);var e="";return this.form.pw&&this.form.checkPw?this.form.pw===this.form.checkPw?(e="비밀번호가 일치합니다.",this.pw=!0):(e="비밀번호가 일치하지 않습니다.",this.pw=!1):(e="",this.pw=!1),e}},methods:i()({},Object(a.c)({popupShow:"popup/show"}),{onSubmit:function(e){e.preventDefault(),this.id?this.pw?this.id&&this.pw&&(alert("가입을 축하드립니다."),this.$router.push({name:"AuthLogin"})):alert("비밀번호를 하세요"):alert("아이디 중복확인을 하세요")},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.name="",this.form.food=null,this.form.checked=[],this.show=!1,this.$nextTick(function(){t.show=!0})},popup:function(){console.log("약관 클릭"),this.popupShow({title:"회원가입 약관",useComponent:"TermsOfSignup"})},checkId:function(){var e=this,t={params:{id:this.form.id}};this.$http.post("/api/auth/check/id",t).then(function(t){e.id=!t.data})}})},s={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"div_singup"},[e.show?r("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[r("b-form-group",{attrs:{id:"exampleInputGroup1",label:"아이디:","label-for":"exampleInput1"}},[r("b-form-input",{attrs:{id:"exampleInput1",type:"text",required:"",placeholder:"id"},model:{value:e.form.id,callback:function(t){e.$set(e.form,"id",t)},expression:"form.id"}}),e._v(" "),r("form",{staticClass:"form-inline my-2 my-lg-0 btn_check_id"},[r("button",{staticClass:"btn btn-outline-success my-2 my-sm-0",attrs:{type:"button"},on:{click:e.checkId}},[e._v("중복확인")])]),e._v(" "),r("span",{staticClass:"check_msg",class:e.id?"green":"red"},[e._v(e._s(e.idMsg))])],1),e._v(" "),r("b-form-group",{attrs:{id:"exampleInputGroup2",label:"비밀번호:","label-for":"exampleInput2"}},[r("b-form-input",{attrs:{id:"exampleInput2",type:"password",required:"",placeholder:"비밀번호"},model:{value:e.form.pw,callback:function(t){e.$set(e.form,"pw",t)},expression:"form.pw"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"exampleInputGroup3",label:"비밀번호 확인:","label-for":"exampleInput3"}},[r("b-form-input",{attrs:{id:"exampleInput3",type:"password",required:"",placeholder:"비밀번호"},model:{value:e.form.checkPw,callback:function(t){e.$set(e.form,"checkPw",t)},expression:"form.checkPw"}}),e._v(" "),r("span",{staticClass:"check_msg",class:e.pw?"green":"red"},[e._v(e._s(e.pwMsg))])],1),e._v(" "),r("b-form-group",{attrs:{id:"exampleInputGroup4",label:"이름:","label-for":"exampleInput4"}},[r("b-form-input",{attrs:{id:"exampleInput4",type:"text",required:"",placeholder:"이름"},model:{value:e.form.name,callback:function(t){e.$set(e.form,"name",t)},expression:"form.name"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"exampleInputGroup5",label:"Email 주소:","label-for":"exampleInput5"}},[r("b-form-input",{attrs:{id:"exampleInput5",type:"email",required:"",placeholder:"email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),e._v(" "),r("b-form-group",{attrs:{id:"exampleInputGroup6",label:"성별:","label-for":"exampleInput6"}},[r("b-form-select",{attrs:{id:"exampleInput6",options:e.genderList,required:""},model:{value:e.form.gender,callback:function(t){e.$set(e.form,"gender",t)},expression:"form.gender"}})],1),e._v(" "),r("input",{directives:[{name:"model",rawName:"v-model",value:e.form.checkedAgree,expression:"form.checkedAgree"}],attrs:{type:"checkbox",id:"agree",required:""},domProps:{checked:Array.isArray(e.form.checkedAgree)?e._i(e.form.checkedAgree,null)>-1:e.form.checkedAgree},on:{change:function(t){var r=e.form.checkedAgree,o=t.target,i=!!o.checked;if(Array.isArray(r)){var a=e._i(r,null);o.checked?a<0&&e.$set(e.form,"checkedAgree",r.concat([null])):a>-1&&e.$set(e.form,"checkedAgree",r.slice(0,a).concat(r.slice(a+1)))}else e.$set(e.form,"checkedAgree",i)}}}),e._v(" "),r("label",{attrs:{for:"agree"}},[e._v("약관 동의")]),e._v(" "),r("b-button",{attrs:{variant:"danger"},on:{click:e.popup}},[e._v("약관")]),e._v(" "),r("b-button",{staticClass:"btn_signup",attrs:{type:"submit",variant:"primary"}},[e._v("가입하기")])],1):e._e()],1)},staticRenderFns:[]};var l=r("VU/8")(n,s,!1,function(e){r("67do")},null,null);t.default=l.exports}});
//# sourceMappingURL=3.efe27c8d9bbe83c82ca2.js.map