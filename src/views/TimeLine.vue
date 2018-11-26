<template>
  <div class="wrap-black">
    <ul class="time-line">
      <li class="animated fadeInLeft ">
        <div>10.15</div>
        <div>CHAIN项目上线</div>
      </li>
      <li class="animated fadeInLeft delay-1">
        <div>10.20</div>
        <div>节点预选报名、BTA交换开始</div>
      </li>
      <li class="animated fadeInLeft delay-2">
        <div>11.15</div>
        <div>CHAIN DAPP上线</div>
      </li>
      <li class="animated fadeInLeft delay-3">
        <div>11.17</div>
        <div>节点投票开启</div>
      </li>
      <li class="animated fadeInLeft delay-4">
        <div>11.23</div>
        <div>节点投票结束、公示</div>
      </li>
      <li class="animated fadeInLeft delay-5">
        <div>11.25 - 11.27</div>
        <div>首轮节点议案投票</div>
      </li>
      <li class="animated fadeInLeft delay-6">
        <div>11.29</div>
        <div>BTA上线交易所</div>
      </li>
    </ul>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        bannerHeight: 0,

      }
    },
    mounted () {
      this.bannerHeight = document.documentElement.clientHeight || 800
    },
    components: {}
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .wrap-black{
    background-image: url(../image/bg_sjz.png);
    background-size: cover;
    overflow: hidden;
  }
  ul.time-line{
    position: absolute;
    right:20%;
    bottom: 0;
    padding:40px 0 0 0;
    border-right: 1px solid #eee;
    width:80%;
    li{
      margin-bottom:40px;
      position: relative;
      text-align: right;
      font-size: 30px;
      padding-right:50px;
      color: #B2B2B2;
      &:last-child{
        margin-bottom:10px;
      }
      &:after{
        position: absolute;
        right:-14px;
        top:50%;
        transform: translate(0, -50%);
        content:'';
        width: 28px;
        height: 28px;
        border-radius: 50%;
        background-color: #fff;
      }
    }
  }

</style>
