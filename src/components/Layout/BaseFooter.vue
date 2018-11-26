<template>
  <div class="footer">
    <div class="content clearfix">
      <div class="left-part">
        <img src="../../image/logo2.png" alt="" class="logo">
        <div class="company">上海雷塔智能科技有限公司</div>
        <div class="address">地址：上海市闵行区集心路168号1号楼301室</div>
        <div class="email">服务：service@supernote.com</div>
        <div class="email">市场：market@supernote.com</div>
      </div>
      <div class="right-part">
        <img src="../../image/qrcode.jpeg" alt="" class="logo">
        <div class="tel">客服热线：400-921-7470</div>
      </div>
      <div class="bottom-part clearfix clear">
        <div class="copyright">&copy;Copyright &copy; 2018 Supernote Inc. 保留所有权利。</div>
        <!--<div class="links">-->
          <!--<a href="">隐私政策</a>|-->
          <!--<a href="">隐私政策</a>|-->
          <!--<a href="">隐私政策</a>|-->
          <!--<a href="">隐私政策</a>|-->
          <!--<a href="">隐私政策</a>-->
        <!--</div>-->
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style lang="scss" type="text/scss" scoped>
  .footer {
    border-top: 1px solid #343538;
  }

  @media screen and (min-width: 768px) {
    .footer {
      .content{
        position: relative;
        padding-top: 40px;
        margin: 0 auto;
        height: 350px;
        width: 80%;
        .left-part{
          float: left;
          .logo{
            width: 245px;
            height: 24px;
          }
          .company{
            margin-top: 80px;
          }
          .address{
            margin-top: 20px;
          }
        }
        .right-part{
          float: right;
          text-align: right;
          .logo{
            margin-top: 10px;
            width: 120px;
            height: 120px;
          }
          .tel{
            margin-top: 35px;
          }
        }
        .bottom-part{
          position: absolute;
          bottom:0;
          left: 0;
          width:100%;
          line-height: 80px;
          border-top: 1px solid #dbdbdb;
          .copyright{
            text-align: center;
            /*float: left;*/
          }
          /*.links{*/
            /*float: right;*/
          /*}*/
        }

      }
    }
  }

  @media screen and (max-width: 767px) {
    .footer {
      .content{
        padding: 40px 20px 0 20px;
        text-align: center;
        .left-part{
          .logo{
            width: 245px;
            height: 24px;
          }
          .company{
            margin-top: 40px;
          }
          .address{
            margin-top: 20px;
          }
        }
        .right-part{
          .logo{
            margin-top: 10px;
            width: 120px;
            height: 120px;
          }
          .tel{
            margin-top: 20px;
          }
        }
        .bottom-part{
          margin-top: 20px;
          border-top: 1px solid #dbdbdb;
          line-height: 80px;
          .copyright{
          }
          .links{
            display: none;
          }
        }

      }
    }
  }
</style>
