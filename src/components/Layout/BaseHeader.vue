<template>
  <div class="header">
    <!--<router-link class="link-item" to="/home">-->
      <!--<img src="../../image/logo.png" alt="" class="logo">-->
    <!--</router-link>-->
    <div class="icon-menu" :class="{close: open}" @click="open = !open">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <transition name="slide-fade" mode="out-in" appear>
      <div class="nav tc mobile" v-show="open">
        <div class="apply-wrap">
          <a class="apply" href="JavaScript:;"></a>
        </div>
        <div class="links clearfix">
          <router-link class="link-item" to="/home">
            <div class="title">CHAIN</div>
            <div class="sub-title">全球首个区块链产业应用平台</div>
          </router-link>
          <router-link class="link-item" to="/intro">平台简介</router-link>
          <router-link class="link-item" to="/assist">CHAIN节点</router-link>
          <router-link class="link-item" to="/timeLine">CHAIN DAPP</router-link>
          <router-link class="link-item" to="/production">上链项目</router-link>
          <router-link class="link-item" to="/source">合作资源</router-link>
          <router-link class="link-item" to="/connect">联系我们</router-link>
          <router-link class="link-item" to="/download">立即下载</router-link>
        </div>
      </div>
    </transition>
  </div>

</template>

<script>
  export default {
    data () {
      return {
        open: false,
        sub: false,
        curRouter: '',
        left: 10
      }
    },
    computed: {
    },
    created () {

    },
    watch: {
    '$route' (to, from) {
      this.open = false
    },

  },
    methods: {}
  }
</script>

<style lang="scss" type="text/scss" scoped>
  .header {
    position: fixed;
    width: 100%;
    z-index: 999;
    background-color: #000;
    height: 100px;
    /*border-bottom: 1px solid #343538;*/
    font-size: 14px;
  }

  .header {
    .icon-menu {
      position: absolute;
      z-index: 1;
      right: 30px;
      top: 30px;
      width: 40px;
      height: 32px;
      cursor: pointer;
      span {
        position: absolute;
        height: 4px;
        width: 100%;
        background-color: #fff;
        transition: .3s;
        &:nth-child(1) {
          top: 0;
        }
        &:nth-child(2) {
          top: 50%;
          margin-top: -1px;
        }
        &:nth-child(3) {
          bottom: 0;
        }
      }
      &.close {
        span {
          &:nth-child(1) {
            top: 50%;
            margin-top: -1px;
            transform: rotate(45deg);
          }
          &:nth-child(2) {
            opacity: 0;
          }
          &:nth-child(3) {
            top: 50%;
            margin-top: -1px;
            transform: rotate(-45deg);
          }
        }
      }
    }

    .nav {
      position: fixed;
      width: 70%;
      right: 0;
      top: 0;
      bottom: 0;
      padding-top: 100px;
      padding-left: 40px;
      background-color: #000;
      color: #fff;
      text-align: left;
      .apply-wrap{
        padding: 20px 0;
        text-align: right;
        .apply{
          display: inline-block;
          margin-right: 50px;
          margin-bottom: 20px;
          width: 165px;
          height: 37px;
          background-image: url(../../image/icon/apply.png);
          background-size: cover;
        }
      }
      .links {
        .link-item {
          transition: .3s;
          display: block;
          padding: 30px 0;
          border-bottom: 1px solid #2b2b2b;
          font-size: 32px;
          line-height: 40px;
          .sub-title{
            line-height: 28px;
            font-size: 24px;
            color: #999;
          }
        }
      }
    }
  }


  .slide-fade-enter-active {
    transition: all .3s ease;
  }

  .slide-fade-leave-active {
    transition: all .3s ease;
  }

  .slide-fade-enter, .slide-fade-leave-to
    /* .slide-fade-leave-active for below version 2.1.8 */
  {
    transform: translateX(30%);
    opacity: 0;
  }

  .router-link-exact-active,.router-link-active{
    background: -webkit-linear-gradient(left,rgba(0,0,0,1), rgba(255,255,255,.2)) !important;
    background: linear-gradient(left,rgba(0,0,0,1),rgba(255,255,255,.2)) !important;
  }
</style>
