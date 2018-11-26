<template>
  <div class="app-wrapper" :style="{height: warpHeight + 'px'}">
    <base-header></base-header>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <!--<base-footer></base-footer>-->
  </div>
</template>


<script>
  import BaseHeader from '@/components/Layout/BaseHeader'
  import BaseFooter from '@/components/Layout/BaseFooter'

  export default {
    name: 'layout',
    data() {
      return {
        warpHeight: 0
      }
    },
    components: {
      BaseHeader,
      BaseFooter,
//      AppMain,
//      AppTop
    },
    computed: {
      sidebar () {
        console.log(this.$router)
        return this.$store.state.app.sidebar
      }
    },
    mounted () {
      console.log(document.documentElement.clientHeight)
      this.warpHeight = document.documentElement.clientHeight || 800
    },
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "src/styles/mixin.scss";

  .app-wrapper {
    @include clearfix;
    position: relative;
    height: 100%;
    width: 100%;
    &.hideSidebar {
      .sidebar-wrapper {
        transform: translate(-140px, 0);
        .sidebar-container {
          transform: translate(132px, 0);
        }
        &:hover {
          transform: translate(0, 0);
          .sidebar-container {
            transform: translate(0, 0);
          }
        }
      }
      .main-container {
        margin-left: 40px;
      }
    }
    .sidebar-wrapper {
      width: 180px;
      position: fixed;
      top: 60px;
      bottom: 0;
      left: 0;
      z-index: 1001;
      overflow: hidden;
      transition: all .28s ease-out;
    }
    .sidebar-container {
      transition: all .28s ease-out;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: -17px;
      overflow-y: scroll;
      overflow-x: hidden;
    }
    .main-container {
      min-height: 100%;
      transition: all .28s ease-out;
      margin-left: 180px;
      position: relative;
      padding-top: 60px;
    }
  }
</style>
