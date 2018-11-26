<template>
  <div class="assist-box wrap">
    <swiper :options="swiperOption" class="my-swiper">
      <swiper-slide class="assist-item white-bg slide1">
        <div class="">
          <div class="fb">
            " <br>
            Blockchain To Application（简称BTA） <br>
            是整个平台唯一的流通通证， <br>
            是由去中心化节点共建， <br>
            服务于区块链产业落地、 <br>
            项目孵化、 <br>
            技术研发过程中价值流通的公有链。 <br>
            "
          </div>
          <img class="icon-b" src="../image/assist/b.png" alt="">
        </div>
        <div class="line"></div>
        <div class="txt">
          总发行量：13亿枚 <br>

          技术研发：1.3亿（2019.01开始每个月释放5%） <br>

          节点投票：6亿 <br>

          节点私矿激励：1.2亿 <br>

          链改公矿：3亿 <br>

          用户激励：1.5亿 <br>

          初始交换价：1.3WIT（CNY） <br>

          上交易所价：1.6WIT（CNY）
        </div>
      </swiper-slide>
      <swiper-slide class="assist-item slide2">
        <div class="card">
          <img src="../image/assist/logo.png" alt="" class="logo">
          <p class="txt">
            CHAIN平台采用节点分布式 <br>
            全权自治的模式， <br>
            这与区块链去中心化思维高度贴合， <br>
            CHAIN核心节点 <br>
            （亦称见证者节点股权节点）主要工作是记录、计算、服务BTA在全网中的全部计算与落地应用产业服务， <br>
            同时也将拥有整个CHAIN网络的最高管理权， <br>
            核心节点需通过公平公正公开 <br>
            的投票方式产生。
          </p>
          <p class="tr">——节点概述</p>
          <div class="line"></div>
        </div>
      </swiper-slide>
      <swiper-slide class="assist-item white-bg slide3">
        <div class="heart tc">
          <p class="txt">
            BTA Token的初始交换权 <br>

            平台战略议案、立项、决策等投票权 <br>

            天使核心节点创投权 <br>

            传统行业链改孵化立项权、引荐行业立项权 <br>

            区块链项目创业孵化立项权 <br>
          </p>
          <div class="line"></div>
          <p class="fb">
            " <br>
            398个核心节点 <br>
            竞选排名前33名的节点 <br>
            晋升为超级节点 <br>
            "
          </p>
          <p class="color-999">—— 核心节点</p>
        </div>
      </swiper-slide>
      <swiper-slide class="assist-item white-bg slide4">
        <div class="">
          <div class="fb">
            " <br>
            398个核心节点 <br>
            竞选排名前33名的节点 <br>
            晋升为超级节点 <br>
            "
          </div>
          <p class="color-999">—— 超级节点</p>
        </div>
        <div class="line"></div>
        <div class="txt">
          <p>
            超级节点拥有核心节点的所有权限外， <br>
            额外享有以下权限： <br>
          </p>

          投票权重为2:1票 <br>

          平台知识产权优先开源共享权 <br>

          节点项目与平台优先合作权 <br>

          额外共享CHAIN平台总盈利的8%
        </div>
      </swiper-slide>
      <swiper-slide class="assist-item white-bg slide5">
        <ul class="txt">
          <li>天使辅助节点创投权</li>
          <li>平台专属辅助节点营销渠道</li>
          <li>推荐节点贡献奖励6万BTA</li>
          <li>平台专属特权（竞猜、话题、激励）</li>
        </ul>
        <div class="line"></div>
        <div class="">
          <div class="fb">
            " <br>
            核心节点自主设置 <br>
            10个辅助节点 <br><br>

            超级节点自主设置 <br>
            20个辅助节点 <br>
            "
          </div>
          <p class="color-999">—— 辅助节点</p>
        </div>
      </swiper-slide>
      <swiper-slide class="assist-item slide6">
        <div class="title">节点私矿</div>
        <p class="txt">CHAIN节点私矿并非矿机算力挖矿，而是CHAIN平台为了激励节点履行职责创建的合约激励层。节点投票成功即建矿成功，通过分布式任务触发节点合约挖矿</p>
        <div class="title">链改公矿</div>
        <p class="txt">为了使网络能够有效高速的推进发展，使社区共识更加稳固、弱化中心作恶风险。项目创世时即设定了3亿枚的BTA Token池用于未来的激励，设立链改公矿池。该矿池计划用于技术基金、社区基金、商务基金等链改用途。分别用于激励未来的优秀节点，如技术团队进行新产品研发、专利产品的贡献、专家学者学术论文发表、商务项目推荐、传统企业区块链应用改造、节点用户推荐注册等。链改公矿池由所有节点共同维护、矿池地址公开透明。节点投票结束第二个季度开始优先挖完节点私矿的节点即可参与挖链改公矿。（链改公矿挖取方式投票结束第二个季度公布）</p>
      </swiper-slide>
      <swiper-slide class="assist-item slide7">
        <div class="head">
          <div class="title">竞选条件</div>
          <p class="txt">节点主体需为区块链技术研发团队、社群、行业代表型企业或资本</p>
        </div>
        <div class="list">
          <div class="title">报名</div>
          <p class="txt"></p>
          <div class="title pl">节点竞选</div>
          <p class="txt pl"></p>
          <div class="title">节点入选</div>
          <p class="txt"></p>
          <div class="title pl">开始投票</div>
          <p class="txt pl"></p>
        </div>
        <!--<div class="foot">-->
          <!--<div class="title">补充说明</div>-->
          <!--<p class="txt">-->
            <!--① 如何获得BTA参与投票 <br>-->
            <!--只有节点才有交换权，报名节点预选成功获得交换权<br>-->
            <!--② 额度说明<br>-->
            <!--节点交换说明：节点预选报名成功获得BTA交换权，所得BTA部分必须用于节点投票<br>-->
            <!--个人交换说明：个人交换额度不得超过10ETH-->
          <!--</p>-->
        <!--</div>-->
        <img class="icon" src="../image/icon-jx.png" alt="">
      </swiper-slide>

      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>

  </div>
</template>

<script>
  import 'swiper/dist/css/swiper.css'
  import {swiper, swiperSlide} from 'vue-awesome-swiper'

  export default {
    data () {
      return {
        swiperOption: {
          direction: 'vertical',
          height : window.innerHeight,
//          initialSlide: 6
          // 所有的参数同 swiper 官方 api 参数一样
        }
      }
    },
    mounted () {
    },
    components: {
      swiper,
      swiperSlide
    }
  }
</script>
<style lang="scss" type="text/scss" scoped>
  .line {
    height: 2px;
    width: 90%;
    background-color: #e7e7e7;
    margin: 20px auto;
  }

  .mt20 {
    margin-top: 40px;
  }

  .assist-box {
    overflow: hidden;
    .my-swiper {
      height: 100%;
      .assist-item {
        height: 100%;
        padding: 100px 50px 0;
      }
      .white-bg {
        background-color: #fff;
        color: #333;
      }
    }
    .slide1 {
      .txt {
        line-height: 40px;
      }
      .icon-b{
        display: inline-block;
        width: 124px;
        height: 183px;
      }
    }
    .slide2 {
      .card {
        width: 644px;
        height: 828px;
        margin: 0 auto;
        padding: 50px 20px;
        background: url(../image/assist/card.png);
        background-size: cover;
        background-position: center center;
        font-size: 24px;
        font-weight: 700;
        .logo{
          display: block;
          width: 34px;
          height: 40px;
          margin: 50px auto;
        }
        .tr{
          margin: 50px;
        }
        .line{
          width: 80%;
          opacity: .7;
        }
      }
    }
    .slide3 {
      .txt {
        line-height: 80px;
        font-weight: 700;
      }
      .fb{
        font-size: 32px;
      }
      .line {
        margin: 70px auto;
      }
    }
    .slide4 {
      .txt {
        font-weight: 700;
        line-height: 80px;
        p{
          line-height: 1.2;
          margin-bottom: 20px;
        }
      }
      .fb{
        font-size: 32px;
      }
      .line {
        margin: 80px auto;
      }
    }
    .slide5 {
      .txt {
        font-size: 30px;
        line-height: 80px;
        li{
          position: relative;
          &:before{
            content: '';
            position: absolute;
            left: 20px;
            top: 20px;
            display: inline-block;
            width: 33px;
            height: 35px;
            background: url(../image/assist/right.png);
            background-size: cover;
          }
        }
      }
      .fb{
        font-size: 32px;
      }
      .line {
        margin: 60px auto;
      }
    }
    .slide6 {
      text-align: left;
      background-image: url(../image/bg_kc.png);
      background-size: contain;
      .title{
        padding-left: 200px;
        font-size: 50px;
        font-weight: 700;
      }
      .txt {
        margin-bottom: 100px;
        -webkit-text-size-adjust: none;
        margin-top: 30px;
        padding-left: 200px;
        font-size: 20px;
        text-align: justify;
        line-height: 30px;
      }
    }
    .slide7 {
      text-align: left;
      position: relative;
      .icon{
        position: absolute;
        width: 592px;
        height: 1008px;
        left: 0;
        top:140px;
      }
      .head{
        margin-top: -100px;
        .title{
          text-align: right;
          padding-left: 200px;
          font-size: 42px;
          font-weight: 700;
        }
        .txt {
          -webkit-text-size-adjust: none;
          margin-top: 20px;
          padding-left: 200px;
          font-size: 26px;
          text-align: justify;
          line-height: 30px;
          height: 60px;
          overflow: hidden;
          color: #ccc;
        }
      }
      .list {
        margin-top: -20px;
        .pl {
          padding-left: 250px !important;
          width: 620px !important;
        }
        .title {
          margin-top: 60px;
          padding-left: 150px;
          font-size: 36px;
          font-weight: 700;
        }
        .txt {
          width: 500px;
          -webkit-text-size-adjust: none;
          margin-top: 20px;
          padding-left: 150px;
          font-size: 20px;
          text-align: justify;
          line-height: 30px;
          height: 60px;
          color: #ccc;
        }
      }
      .foot{

        .title{
          color: #999;
          font-size: 36px;
          font-weight: 700;
        }
        .txt {
          width: 620px;
          -webkit-text-size-adjust: none;
          margin-top: 20px;
          font-size: 20px;
          text-align: justify;
          line-height: 30px;
          height: 60px;
          color: #ccc;
        }
      }


    }
    /*ul{
      padding-bottom: 50px;
      margin:100px auto 60px auto;
      border-bottom:1px solid #E7E7E7;
      width:90%;
      li{
        margin-top: 60px;
        color: #999999;
        text-align: center;
        background: url("../image/chain/hook-icon.png") left center no-repeat;
        -webkit-background-size: 32px 32px;
        background-size: 32px 32px;
        font-size:30px;
      }
    }
    p{
      font-size:32px;
      color: #000;
      line-height: 40px;
      font-weight: bold;
    }
    div{
      position: relative;
      margin-top:50px;
      color: #999;
      font-size: 26px;
      span{
        position: relative;
        padding-left:70px;
        &:after{
          position: absolute;
          top:50%;
          left: 0;
          transform: translate(0, -50%);
          width: 60px;
          height: 2px;
          background: #999;
          content: '';
        }
      }
    }*/
  }
</style>
