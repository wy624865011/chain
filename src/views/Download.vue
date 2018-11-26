<template>
  <div class="download wrap-black">
    <i class="logo-icon"></i>
    <div class="chain">
      <img src="../image/download/chain.png" alt="">
    </div>
    <a href="" class="download-btn">立即下载</a>
    <div class="phone">
      <swiper :options="swiperOption" class="my-swiper">
        <swiper-slide class="slide1">
        </swiper-slide>
        <swiper-slide class="slide2">
        </swiper-slide>
        <swiper-slide class="slide3">
        </swiper-slide>
      </swiper>
    </div>
  </div>

</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'
  export default {
    data () {
      return {
        swiperOption: {
//          initialSlide: 6
          loop : true,
          autoplay: true
        }
      }
    },
    components: {
      swiper,
      swiperSlide
    },
    mounted() {

    },
    methods: {

    }
  }
</script>

<style type="text/scss" lang="scss" scoped>
  .download {
    text-align: center;
    overflow: hidden;
    .logo-icon{
      margin:0 auto;
      display: block;
      width: 72px;
      height: 80px;
      background: url("../image/home/logo-no-text.png");
      background-size: 100% 100%;
    }
    .chain{
      margin:50px auto 20px;
      width: 150px;
      img{
        width:100%;
      }
    }
    .txt{
      width: 400px;
      opacity: .7;
      line-height: 30px;
      margin: 30px auto;
    }
    .download-btn{
      display: block;
      margin: 0 auto;
      height: 80px;
      width: 264px;
      border-radius: 45px;
      border: 1Px solid #fff;
      text-align: center;
      line-height: 80px;
      font-size: 28px;
    }
    .phone{
      border-radius: 20px;
      overflow: hidden;
      position: absolute;
      bottom:-200px;
      width: 428px;
      height: 824px;
      left: 50%;
      transform: translateX(-50%);
      padding: 10px 10px 0;
      background-image: url(../image/bg-phone.png);
      background-size: cover;

      .my-swiper{
        height: 804px;
        width: 100%;
        .slide1{
          background-image: url(../image/download/slider-1.png);
          background-size: cover;
        }
        .slide2{
          background-image: url(../image/download/slider-2.png);
          background-size: cover;
        }
        .slide3{
          background-image: url(../image/download/slider-3.png);
          background-size: cover;
        }
      }
    }
  }




</style>
