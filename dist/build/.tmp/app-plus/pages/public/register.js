(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/public/register"],{1863:function(e,t,n){"use strict";(function(e){n("6cdc"),n("921b");r(n("66fd"));var t=r(n("31ae"));function r(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("6e42")["createPage"])},"31ae":function(e,t,n){"use strict";n.r(t);var r=n("f46a"),o=n("9fba");for(var a in o)"default"!==a&&function(e){n.d(t,e,(function(){return o[e]}))}(a);n("c4c8c");var i=n("2877"),c=Object(i["a"])(o["default"],r["a"],r["b"],!1,null,"58c7bb42",null);t["default"]=c.exports},"9fba":function(e,t,n){"use strict";n.r(t);var r=n("bb46"),o=n.n(r);for(var a in r)"default"!==a&&function(e){n.d(t,e,(function(){return r[e]}))}(a);t["default"]=o.a},b779:function(e,t,n){},bb46:function(e,t,n){"use strict";(function(e,r){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=c(n("a34a")),a=n("2f62"),i=n("7ded");function c(e){return e&&e.__esModule?e:{default:e}}function s(e,t,n,r,o,a,i){try{var c=e[a](i),s=c.value}catch(u){return void n(u)}c.done?t(s):Promise.resolve(s).then(r,o)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var a=e.apply(t,n);function i(e){s(a,r,o,i,c,"next",e)}function c(e){s(a,r,o,i,c,"throw",e)}i(void 0)}))}}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function f(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){d(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var p=n("9564"),b={data:function(){return{mobile:"",password:"",logining:!1,smsCodeBtnDisabled:!1,codeSeconds:60}},onLoad:function(){},methods:f({},(0,a.mapMutations)(["login"]),{blurMobileChange:function(e){this.mobile=e.detail.value},blurPasswordChange:function(e){this.password=e.detail.value},blurRePasswordChange:function(e){this.password!==e.detail.value&&this.$api.msg("两次输入的密码不一致")},navBack:function(){e.navigateBack()},navTo:function(t){e.navigateTo({url:t})},getSmsCode:function(){var e=this;this.checkPhoneIsValid(this.mobile)&&this.$post(i.smsCode,{mobile:this.mobile,usage:"register"}).then((function(t){e.$api.msg("验证码发送成功, 验证码是".concat(t.data)),e.smsCodeBtnDisabled=!0;var n=59,r=setInterval((function(){0===n?(clearInterval(r),e.smsCodeBtnDisabled=!1):(e.codeSeconds=n,e.smsCodeBtnDisabled=!0,n--)}),1e3)})).catch((function(e){console.log(r(e," at pages/public/register.vue:152"))}))},checkPhoneIsValid:function(e){if(!e.length<0)return this.$api.msg("请输入11位的手机号"),!1;var t=/^1[0-9]{10,10}$/;return!!t.test(e)||(this.$api.msg("请输入正确的手机号"),!1)},toRegister:function(){var t=u(o.default.mark((function t(n){var a,c,s,u,l=this;return o.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=n.detail.value,a.password===a.password_repetition){t.next=4;break}return this.$api.msg("两次输入的密码不一致"),t.abrupt("return");case 4:if(c=[{name:"mobile",checkType:"phoneno",checkRule:"11,11",errorMsg:"请输入正确的手机号"},{name:"code",checkType:"notnull",checkRule:"",errorMsg:"请输入验证码"},{name:"password",checkType:"string",checkRule:"6,20",errorMsg:"密码长度为6-20位"},{name:"password_repetition",checkType:"notnull",checkRule:"",errorMsg:"请输入确认密码"},{name:"realname",checkType:"string",checkRule:"2,6",errorMsg:"姓名应为2-6个字符"}],s=p.check(a,c),s){t.next=9;break}return this.$api.msg(p.error),t.abrupt("return");case 9:u={},u.group="tinyShopApp",this.$post(i.registerByPass,f({},u,{},a)).then((function(t){l.$api.msg("恭喜您注册成功"),e.navigateTo({url:"/pages/public/login"})})).catch((function(e){console.log(r(e," at pages/public/register.vue:215"))}));case 12:case"end":return t.stop()}}),t,this)})));function n(e){return t.apply(this,arguments)}return n}()})};t.default=b}).call(this,n("6e42")["default"],n("0de9")["default"])},c4c8c:function(e,t,n){"use strict";var r=n("b779"),o=n.n(r);o.a},f46a:function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement;e._self._c},o=[];n.d(t,"a",(function(){return r})),n.d(t,"b",(function(){return o}))}},[["1863","common/runtime","common/vendor"]]]);