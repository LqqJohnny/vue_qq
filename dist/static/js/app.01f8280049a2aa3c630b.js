webpackJsonp([0],[,,,function(t,a,e){e(16),e(15);var i=e(0)(e(23),e(9),null,null);t.exports=i.exports},function(t,a,e){"use strict";var i=e(1),n=e(21),s=e(5),o=e.n(s),c=e(6),r=e.n(c);i.a.use(n.a),a.a=new n.a({routes:[{path:"/",name:"Hello",component:o.a},{path:"/hello",name:"Hello",component:o.a},{path:"/chat/:name",name:"chat",component:r.a}]})},function(t,a,e){e(20);var i=e(0)(e(24),e(13),"data-v-a87bde08",null);t.exports=i.exports},function(t,a,e){e(17);var i=e(0)(e(25),e(10),"data-v-54ff5cfe",null);t.exports=i.exports},function(t,a,e){e(18);var i=e(0)(e(26),e(11),null,null);t.exports=i.exports},function(t,a,e){e(19);var i=e(0)(e(27),e(12),null,null);t.exports=i.exports},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"aui-bar aui-bar-nav",staticStyle:{"padding-top":"25px"}},[e("a",{staticClass:"aui-pull-left",on:{click:function(a){t.goBack()}}},[e("span",{staticClass:"aui-iconfont aui-icon-left"})]),t._v(" "),e("div",{staticClass:"aui-title"},[t._v(t._s(t.$route.params.name))])]),t._v(" "),e("div",{staticClass:"chatForm clearfix"},[e("div",{staticClass:"aui-chat"},t._l(t.dialogue,function(a){return e("div",["robot"==a.type?e("div",{staticClass:"aui-chat-item aui-chat-left"},[e("div",{staticClass:"aui-chat-media",staticStyle:{width:"3.5rem"}},[e("img",{attrs:{src:t.robot.icon}})]),t._v(" "),e("div",{staticClass:"aui-chat-inner"},[e("div",{staticClass:"aui-chat-name"},[t._v(t._s(t.robotName))]),t._v(" "),e("div",{staticClass:"aui-chat-content"},[e("div",{staticClass:"aui-chat-arrow"}),t._v("\n                        "+t._s(a.content)+"\n                    ")])])]):t._e(),t._v(" "),"user"==a.type?e("div",{staticClass:"aui-chat-item aui-chat-right"},[t._m(0,!0),t._v(" "),e("div",{staticClass:"aui-chat-inner"},[e("div",{staticClass:"aui-chat-name"},[t._v("头顶长草的灰太狼")]),t._v(" "),e("div",{staticClass:"aui-chat-content"},[e("div",{staticClass:"aui-chat-arrow"}),t._v("\n                        "+t._s(a.content)+"\n                    ")])])]):t._e()])}))]),t._v(" "),e("div",{staticClass:"textMessage"},[e("footer",{staticClass:"aui-bar aui-bar-tab",attrs:{id:"footer"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.newMes,expression:"newMes"}],staticClass:"typingArea",attrs:{type:"text"},domProps:{value:t.newMes},on:{keyup:function(a){if(!("button"in a)&&13!==a.keyCode)return null;t.sendMes()},input:function(a){a.target.composing||(t.newMes=a.target.value)}}}),t._v(" "),e("button",{staticClass:"aui-btn aui-btn-info typingBtn",on:{click:function(a){t.sendMes()}}},[t._v("发送")])])])])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"aui-chat-media",staticStyle:{width:"3.5rem"}},[e("img",{attrs:{src:"/static/user.jpg"}})])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("footer",{staticClass:"aui-bar aui-bar-tab",staticStyle:{"padding-bottom":"30px"},attrs:{id:"footer"}},[e("div",{staticClass:"aui-bar-tab-item aui-active",attrs:{tapmode:""}},[e("i",{staticClass:"aui-iconfont aui-icon-home "}),t._v(" "),e("div",{staticClass:"aui-bar-tab-label aui-font-size-20"},[t._v("聊天")])]),t._v(" "),e("div",{staticClass:"aui-bar-tab-item",attrs:{tapmode:""}},[e("i",{staticClass:"aui-iconfont aui-icon-star"}),t._v(" "),e("div",{staticClass:"aui-bar-tab-label aui-font-size-20"},[t._v("好友")])]),t._v(" "),e("div",{staticClass:"aui-bar-tab-item",attrs:{tapmode:""}},[e("i",{staticClass:"aui-iconfont aui-icon-my"},[e("div",{staticClass:"aui-dot",staticStyle:{left:"40px",top:"-10px"}})]),t._v(" "),e("div",{staticClass:"aui-bar-tab-label aui-font-size-20"},[t._v("动态")])])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("header",{staticClass:"aui-bar aui-bar-nav",attrs:{id:"header"}},[e("div",{staticClass:"aui-title"},[t._v("HiRobot")])])])}]}},function(t,a){t.exports={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"hello"},[e("div",{staticClass:"header"}),t._v(" "),e("AUIheader"),t._v(" "),e("div",{staticClass:"tips"},[t._v("choose a doggy to chat")]),t._v(" "),e("div",{staticClass:"chatList"},t._l(t.chattingRobot,function(a){return e("div",{staticClass:"chat clearfix",on:{click:function(e){t.startChat(a.name)}}},[e("div",{staticClass:"robotIcon float_l"},[e("img",{attrs:{src:a.icon}})]),t._v(" "),e("div",{staticClass:"desc float_l"},[t._v(t._s(a.desc))])])})),t._v(" "),e("AUIfooter")],1)},staticRenderFns:[]}},,function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},function(t,a){},,,function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"app"}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(8),n=e.n(i),s=e(7),o=e.n(s);a.default={name:"hello",data:function(){return{chattingRobot:[]}},components:{AUIheader:n.a,AUIfooter:o.a},mounted:function(){var t=this;this.$http.get("./static/robots.json").then(function(a){t.chattingRobot=a.body,console.log(a)},function(t){console.log(t)})},methods:{startChat:function(t){this.$router.push({path:"/chat/"+t})}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"chat",data:function(){return{robot:{},robotName:"",newMes:"",dialogue:[{type:"robot",content:"hello,陪我聊聊天吧"}]}},computed:{chatURL:function(){return"http://www.tuling123.com/openapi/api?key=e825286159f9f57db1b597995d72ae2b"}},methods:{goBack:function(){window.history.go(-1)},sendMes:function(){var t=this.chatURL,a=this.newMes,e=this;e.dialogue.push({type:"user",content:a}),this.$http.get(t+"&info="+a+"&userid=lqq").then(function(t){e.newMes="",console.log(t.body);var a=t.body.text;void 0!==t.body.url&&(a+=t.body.url),e.dialogue.push({type:"robot",content:a})},function(t){})}},mounted:function(){var t=this;this.$http.get("/static/robots.json").then(function(a){for(var e=0;e<a.body.length;e++)a.body[e].name==t.$route.params.name&&(t.robotName=a.body[e].name,t.robot=a.body[e],console.log(t.robot))},function(t){})}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"footer",data:function(){return{}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default={name:"hearder",data:function(){return{}}}},function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=e(1),n=e(3),s=e.n(n),o=e(4),c=e(2),r=e.n(c);i.a.config.productionTip=!1,i.a.use(r.a),new i.a({el:"#app",router:o.a,template:"<App/>",components:{App:s.a}})},function(t,a){}],[28]);
//# sourceMappingURL=app.01f8280049a2aa3c630b.js.map