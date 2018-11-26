<template>
  <div class="wrap-black connect-us-box">
    <div class="content">
      <h3 class="animated fadeInUp">联系我们</h3>
      <p class="info animated fadeInUp delay-2">Thousands Now</p>
      <p class="info animated fadeInUp delay-2">Adware Removal</p>
      <p class="info animated fadeInUp delay-2">Who Never Thought</p>
      <p class="info animated fadeInUp delay-2">They Could</p>
      <p class="time animated fadeInUp delay-4">October , 2018</p>
      <div class="link-box animated fadeInUp delay-8">
        <a></a>
        <a></a>
        <a></a>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    components: {}
  }
</script>
<style type="text/scss" lang="scss" scoped>
  .connect-us-box{
    .content{
      width:100%;
      position: absolute;
      top:18%;
      left:50%;
      transform: translate(-50%, 0);
    }
    h3{
      margin-top:0px;
      margin-bottom:60px;
      font-size: 36px;
      color: #fff;
      font-weight: normal;
    }
    p.info{
      margin:0 auto;
      font-size: 48px;
      width: 80%;
      line-height: 60px;
    }
    p.time{
      margin-top:20%;
      font-size: 30px;
      color: #B2B2B2 !important;
    }
    .link-box{
      margin-top: 20px;
      a{
        margin:0 10px;
        display: inline-block;
        border-radius: 50%;
        width:60px;
        height: 60px;
        background: #fff;
      }
    }
  }
</style>
