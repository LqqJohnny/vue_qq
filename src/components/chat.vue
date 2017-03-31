<template id="">
    <div>
        <header class="aui-bar aui-bar-nav" style="padding-top:25px;">
            <a class="aui-pull-left" @click="goBack()">
                <span class="aui-iconfont aui-icon-left"></span>
            </a>
            <div class="aui-title">{{$route.params.name}}</div>
        </header>
        <!-- 聊天框 -->
        <div class="chatForm clearfix" >
            <div class="aui-chat">
                <div  v-for="item in dialogue">
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
                return "http://www.tuling123.com/openapi/api?key=e825286159f9f57db1b597995d72ae2b";
            }
        },
        methods:{
            goBack:function(){
                 window.history.go(-1);
            },
            sendMes:function(){
                const chatURL=this.chatURL;
                var mes=this.newMes;
                var _this = this;
                _this.dialogue.push({"type":"user","content":mes});
                this.$http.get(chatURL+"&info="+mes+"&userid=lqq")
                .then(function(res){
                    // success
                    _this.newMes="";
                    console.log(res.body);
                    var content=res.body.text;
                    if(typeof(res.body.url)!="undefined"){
                        content+=res.body.url;
                    }
                    _this.dialogue.push({"type":"robot","content":content});
                },function(res){
                    //failed
                })
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
.typingArea{
    margin-right:0.8rem;
    width:80%;
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
.chatForm{
    margin-top:2rem;
    padding-bottom:5rem;
    padding-top:5rem;
}

</style>
