<template>
<div>
      <footer class="aui-bar aui-bar-tab" id="footer" style="padding-bottom:30px;">
        <div class="aui-bar-tab-item aui-active" tapmode>
            <i class="aui-iconfont aui-icon-home "></i>
            <div class="aui-bar-tab-label aui-font-size-20">聊天</div>
        </div>
        <div class="aui-bar-tab-item" tapmode>
            <i class="aui-iconfont aui-icon-star"></i>
            <div class="aui-bar-tab-label aui-font-size-20">好友</div>
        </div>
        <div class="aui-bar-tab-item" tapmode>

            <i class="aui-iconfont aui-icon-my">
              <div class="aui-dot" style="left:40px;top:-10px;"></div>
            </i>
            <div class="aui-bar-tab-label aui-font-size-20">动态</div>
        </div>
      </footer>
</div>
</template>
<script>
export default {
  name:"footer",
  data:function(){
      return{

      }
  }
}


</script>
<style>
  #footer{
    height: 3rem;
    font-size: 2rem;
  }
#footer .aui-iconfont{
  font-weight: bold;
  font-size: 2rem;
}


</style>
