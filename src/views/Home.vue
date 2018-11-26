<template>
  <div class="wrap-black">
    <div class="word">
      <img class="animated fadeInUp" src="../image/home/word-c.png" alt="">
      <img class="animated fadeInLeftTop" src="../image/home/word-h.png" alt="">
      <img class="animated fadeInUp" src="../image/home/word-a.png" alt="">
      <img class="animated fadeInLeftTop" src="../image/home/word-i.png" alt="">
      <img class="animated fadeInRightBottom" src="../image/home/word-n.png" alt="">
    </div>
    <div class="txt-2018 animated fadeInRight">
      <p class="label">2018</p>
      <p class="txt">Application of blockchain industry 4.0.</p>
    </div>
    <div class="txt-365">
      <p class="title animated fadeInLeft">一种分布式产业自治生态 <sup>365</sup></p>
      <p class="brand">
        The world's first blockchain industry application platform; <br>
        Node DPoS mechanism autonomous ecology; <br>
        The cornerstone of trust in the digital economy era; <br>
        a link hub between the physical world and the blockchain world.
      </p>
    </div>
    <img src="../image/home/logo.png" class="logo"/>
  </div>
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    mounted () {
    },
    components: {}
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .wrap-black {
    height: 100%;
    /*background: url("../image/home/bg.png");*/
    background-size: cover;
    .word {
      img {
        position: absolute;
        &:nth-child(1) {
          left: 74px;
          top: 126px;
          width: 148px;
          height: 208px;
        }
        &:nth-child(2) {
          left: 373px;
          top: 269px;
          width: 74px;
          height: 102px;
        }
        &:nth-child(3) {
          left: 272px;
          top: 395px;
          width: 72px;
          height: 78px;
        }
        &:nth-child(4) {
          left: 163px;
          top: 592px;
          width: 56px;
          height: 155px;
        }
        &:nth-child(5) {
          left: 525px;
          top: 696px;
          width: 117px;
          height: 144px;
        }
      }
    }
    .txt-2018 {
      position: absolute;
      right: 0;
      top: 491px;
      width: 180px;
      .label {
        padding-bottom: 10px;
        margin-bottom: 10px;
        font-size: 25px;
        text-align: left;
        font-weight:700;
        border-bottom: 1px solid #fff;

      }
      .txt {
        text-align: left;
        -webkit-text-size-adjust: none;
        font-size: 16px;
        line-height: 1.2;
        opacity: .7;

      }

    }
    .txt-365 {
      position: absolute;
      left: 0;
      top: 850px;
      width: 550px;
      text-align: left;
      font-size: 33px;
      line-height: 40px;
      .title{
        padding-left: 40px;
      }
      .brand {
        margin-top: 30px;
        font-size: 16px;
        padding-left: 40px;
        text-align: left;
        opacity: .7;
        line-height: 24px;
        img {
          width: 56px;
          height: 56px;
          margin: 0 10px;
        }
      }
    }
    .logo {
      position: absolute;
      right: 50px;
      bottom: 100px;
      width: 86px;
      height: 99px;
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
