<template id="">
    <div>
        <header class="aui-bar aui-bar-nav" style="padding-top:25px;">
            <a class="aui-pull-left" @click="goBack()">
                <span class="aui-iconfont aui-icon-left"></span>
            </a>
            <div class="aui-title">{{$route.params.name}}</div>
        </header>
        <!-- 聊天框 -->
        <div class="chatForm clearfix" id="chatForm">
            <div class="aui-chat clearfix" id="aui-chat">
                <div  v-for="item in dialogue" class="clearfix">
                <!-- 左边的人  机器人-->
                <div v-if="item.type=='robot' " class="aui-chat-item aui-chat-left" >
                    <div class="aui-chat-media" style="width:3.5rem;">
                        <img :src="robot.icon" />
                    </div>
                    <div class="aui-chat-inner">
                        <div class="aui-chat-name">{{robotName}}</div>
                        <div class="aui-chat-content">
                            <div class="aui-chat-arrow"></div>
                            {{item.content}}
                        </div>

                    </div>
                </div>
                <!-- 右边的人  用户 -->
                <div v-if="item.type=='user' " class="aui-chat-item aui-chat-right">
                    <div class="aui-chat-media" style="width:3.5rem;">
                        <img src="/static/user.jpg"/>
                    </div>
                    <div class="aui-chat-inner">
                        <div class="aui-chat-name">头顶长草的灰太狼</div>
                        <div class="aui-chat-content">
                            <div class="aui-chat-arrow"></div>
                            {{item.content}}
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        <!-- 发送栏 -->
        <div class="textMessage">
            <footer class="aui-bar aui-bar-tab" id="footer">
                <input type="text" class="typingArea" v-model="newMes" v-on:keyup.13="sendMes()">
                <button class="aui-btn aui-btn-info typingBtn" @click="sendMes()">发送</button>
            </footer>
        </div>
    </div>

</template>
<script>
    export default{
        name:"chat",
        data:function(){
            return{
                robot: {},
                robotName:"",
                newMes:"",
                dialogue:[{
                    type:"robot",
                    content:"hello,陪我聊聊天吧"
                }]
            }
        },
        computed:{
            chatURL:function(){
                var key="";
                if(this.robotName=="SunshineBoy"){
                    key="99aecba1f1534f7d8d51cc7f75203576";
                }else if(this.robotName=="自拍狂魔"){
                    key="76c445730a164d82a06801fe99736fab";
                }else{
                    key="eb1d2f1d36d54361ba10b9a8cbf00a9e";
                }
                return "http://www.tuling123.com/openapi/api?key="+key;
            }
        },
        methods:{
            goBack:function(){
                 window.history.go(-1);
            },
            sendMes:function(){
                var chatForm=document.getElementById('chatForm');
                const chatURL=this.chatURL;
                var mes=this.newMes;
                var _this = this;

                _this.dialogue.push({"type":"user","content":mes});
                _this.moveToBot();
                this.$http.get(chatURL+"&info="+mes+"&userid=lqq")
                .then(function(res){
                    // success
                    chatForm.scrollTop=(chatForm.scrollHeight);
                    _this.newMes="";
                    var content=res.body.text;
                    if(typeof(res.body.url)!="undefined"){
                        content+=res.body.url;
                    }
                    _this.dialogue.push({"type":"robot","content":content});
                    _this.moveToBot();

                },function(res){
                    //failed
                })
            },
            moveToBot:function(){
                var timer = setInterval(function(){
                    //获取滚动条的滚动高度
                    var chatForm=document.getElementById('chatForm');
                    chatForm.scrollTop+=30;

                    var isBot =true;  //用于阻止滚动事件清除定时器
                    if(chatForm.scrollHeight-chatForm.clientHeight-chatForm.scrollTop <= 0){
                        clearInterval(timer);
                    }
                },30);
            },
            getMsg:function(){

            }
        },
        mounted:function(){
            const _this=this;
            this.$http.get('/static/robots.json')
            .then(function(res){
                // success
                for(var i=0;i<res.body.length;i++){
                    if(res.body[i].name==_this.$route.params.name){
                        _this.robotName=res.body[i].name;
                        _this.robot=res.body[i];
                        console.log(_this.robot);
                    }
                }
            },function(res){
                // fail

            })
        }
    }


</script>
<style scoped>
#footer{
    padding:1rem;

}
.chatForm {
    position:fixed;
    bottom:5rem;
    top:5rem;
    left:0;
    right: 0;
    overflow: auto;
}
.typingArea{
    margin-right:0.8rem;
    width:76%;
    text-indent: 20px;
    height: 2.5rem;
    display:block;
    float: left;
    font-size:1.2rem;
    border:1px solid #aaa;
}
.aui-chat-content{
    font-size:1.2rem;
    text-align: left;
}
.typingBtn{
    float: left;
    display:block;
    width: 4.5rem;
    font-size:1.2rem;
    line-height: 2rem;
    height: 2.5rem;
}
header{
    height: 5rem;
    line-height: 5rem;
    font-size: 1.4rem;
    position:fixed;
}
.aui-icon-left{
    top:1.1rem;
    font-size:1.4rem;
}
.aui-chat-media{
    max-width: 4rem;
}
.aui-chat-name{
    text-align: left;
    font-size:0.8rem;
}

</style>
