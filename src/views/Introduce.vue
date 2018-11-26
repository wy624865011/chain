<template>
  <div class="wrap-black">
    <div class="download animated fadeInRight">白皮书 <a href="javascript:;"></a></div>
    <div class="download animated fadeInRight delay-1">CHAIN完整介绍文档 <a href="javascript:;"></a></div>
    <div class="info">
      <img src="../image/home/logo.png" class="logo animated fadeInLeft"/>
      <img src="../image/intro/welcome.png" class="welcome animated fadeInLeft"/>
      <div class="animated fadeInLeft">
        <p>全球首个区块链产业应用平台；</p>
        <p>节点DPoS机制自治生态；</p>
        <p>数字经济时代的信任基石；</p>
        <p>实体世界与区块链世界的链接枢纽；</p>
        <p>开创区块链工业4.0落地应用时代。</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {}
    },
    mounted () {
    },
    components: {}
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .wrap-black {
    height: 100%;
    background-image: url(../image/intro/bg.png);
    background-size: cover;
    /*background-position: center center;*/
    .download {
      padding-right: 50px;
      text-align: right;
      margin-top: 80px;
      a{
        display: inline-block;
        width: 61px;
        height: 30px;
        vertical-align: middle;
        background-image: url(../image/intro/download-btn.png);
        background-size: cover;
      }
    }
    .info {
      position: absolute;
      padding: 50px;
      left: 0;
      bottom: 00px;
      width: 500px;
      .logo {
        display: block;
        width: 86px;
        height: 99px;
      }
      .welcome {
        display: block;
        margin-top: 30px;
        margin-bottom: 30px;
        width: 337px;
        height: 115px;
      }
      p {
        text-align: left;
        font-size: 24px;
        line-height: 30px;
        opacity: .7;
      }
    }
  }

  @-webkit-keyframes fadeInLeftTop {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, -100%, 0);
      transform: translate3d(-100%, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInLeftTop {
    from {
      opacity: 0;
      -webkit-transform: translate3d(-100%, -100%, 0);
      transform: translate3d(-100%, -100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInLeftTop {
    -webkit-animation-name: fadeInLeftTop;
    animation-name: fadeInLeftTop;
  }

  @-webkit-keyframes fadeInRightBottom {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 100%, 0);
      transform: translate3d(100%, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  @keyframes fadeInRightBottom {
    from {
      opacity: 0;
      -webkit-transform: translate3d(100%, 100%, 0);
      transform: translate3d(100%, 100%, 0);
    }

    to {
      opacity: 1;
      -webkit-transform: translate3d(0, 0, 0);
      transform: translate3d(0, 0, 0);
    }
  }

  .fadeInRightBottom {
    -webkit-animation-name: fadeInRightBottom;
    animation-name: fadeInRightBottom;
  }


</style>
