<template>
  <div class="hello">
    <div class="header"></div>
        <AUIheader></AUIheader>
            <div class="tips">choose a doggy to chat</div>
            <div class="chatList">
                <div class="chat clearfix" v-for="(item,index) in chattingRobot" v-on:click="startChat(item.name)">
                    <div class="robotIcon float_l"><img :src="item.icon"></div>
                    <div class="desc float_l">{{item.desc}}</div>
                </div>
            </div>
        <AUIfooter></AUIfooter>
    </div>
</template>

<script>
import header from './commom/header.vue'
import footer from './commom/footer.vue'
export default {
  name: 'hello',
  data () {
    return {
        chattingRobot:[]
    }
  },
  computed:{

    },
    components:{
        "AUIheader":header,
        "AUIfooter":footer
    },
    mounted:function(){
        const _this= this;
        this.$http.get("/static/robots.json")
        .then(function(response){
            _this.chattingRobot=response.body;
            console.log(response);
        },function(response){
            console.log(response);
        })

    },
    methods:{
        startChat:function(name){
            this.$router.push({path :'/chat/'+name});

        }
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.chatList .chat{
    padding: 1rem 2rem;
    border-bottom: 1px solid #ccc;
}
.tips{
    color:rgb(159, 159, 159);
    font-size: 1rem;
}
.robotIcon img{
    width: 4rem;
    height: 4rem;
    border-radius:50% ;
}
.desc{
    line-height: 4rem;
    margin-left:30px;
    font-size: 1.2rem;
}

</style>
