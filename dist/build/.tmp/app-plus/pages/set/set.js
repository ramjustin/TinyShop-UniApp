(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/set/set"],{"1b7a":function(t,e,n){"use strict";var r=function(){var t=this,e=t.$createElement;t._self._c},o=[];n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}))},"48cf":function(t,e,n){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=n("2f62"),o=n("7ded");function u(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function c(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?u(Object(n),!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function s(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var a={data:function(){return{loadProgress:0,CustomBar:this.CustomBar,currentStorageSize:0,user:{}}},onLoad:function(){this.initData()},computed:c({},(0,r.mapState)(["userInfo"])),methods:c({},(0,r.mapMutations)(["login","logout"]),{initData:function(){this.user=t.getStorageSync("user");var e=this;t.getStorageInfo({success:function(t){e.currentStorageSize=t.currentSize}})},navTo:function(e){var n=this;"清除缓存"===e?t.showModal({content:"确定要清除缓存吗",success:function(e){e.confirm&&(n.currentStorageSize=0,t.clearStorageSync(),n.$api.msg("清除缓存成功"),setTimeout((function(){n.login(n.user),t.reLaunch({url:"/pages/user/user"})}),1500),n.LoadProgress())}}):e?t.navigateTo({url:e}):this.$api.msg("我还没写")},LoadProgress:function(){var t=this;this.loadProgress=this.loadProgress+6,this.loadProgress<100?setTimeout((function(){t.LoadProgress()}),100):(this.loadProgress=0,this.login(this.user),this.$api.msg("清除缓存成功"))},toLogout:function(){var e=this;t.showModal({content:"确定要退出登录么",success:function(n){n.confirm&&e.$post("".concat(o.logout)).then((function(n){e.logout(),t.reLaunch({url:"/pages/user/user"})}))}})},switchChange:function(t){var e=t.detail.value?"打开":"关闭";this.$api.msg("".concat(e,"消息推送"))}})};e.default=a}).call(this,n("6e42")["default"])},"80e9":function(t,e,n){"use strict";(function(t){n("6cdc"),n("921b");r(n("66fd"));var e=r(n("bc09"));function r(t){return t&&t.__esModule?t:{default:t}}t(e.default)}).call(this,n("6e42")["createPage"])},bc09:function(t,e,n){"use strict";n.r(e);var r=n("1b7a"),o=n("eb44");for(var u in o)"default"!==u&&function(t){n.d(e,t,(function(){return o[t]}))}(u);n("f5d0");var c=n("2877"),s=Object(c["a"])(o["default"],r["a"],r["b"],!1,null,null,null);e["default"]=s.exports},d99f:function(t,e,n){},eb44:function(t,e,n){"use strict";n.r(e);var r=n("48cf"),o=n.n(r);for(var u in r)"default"!==u&&function(t){n.d(e,t,(function(){return r[t]}))}(u);e["default"]=o.a},f5d0:function(t,e,n){"use strict";var r=n("d99f"),o=n.n(r);o.a}},[["80e9","common/runtime","common/vendor"]]]);