<template>
  <div id="home">
    <header-component></header-component>
    <div class="banner-warp">
      <div class="button pre-view">
        <i class="pre"></i>
      </div>
      <div class="wrap">
        <div class="carousel">
          <div id="banner1"></div>
          <div id="banner2"></div>
          <div id="banner3"></div>
        </div>
      </div>
      <ul class="slider-number-view">
        <li class="slider-number-cell" v-for='(item, index) in sliderItem'>
          <i :class="item.active"></i>
        </li>
      </ul>
      <div class="button next-view">
        <i class="next"></i>
      </div>
    </div>
    <div class="home-main background-style-one">
      <div class="home-title" style="width: 377px;"><i></i>消防安全管理智能云平台<i></i></div>
      <div class="home-content">消防安全管理智能云平台：整合云计算、大数据、物联网、移动互联网等前沿科技精髓，创新消防业务流程，促进社会安全共同治理，提升公共安全管理水平。</div>
      <img class="home-content-image" src="/static/images/content.png" />
    </div>
    <div class="home-main">
      <div class="home-title" style="width: 227px;"><i></i>平台优势<i></i></div>
      <ul class="pingtaiyoushi-table-view">
        <li class="pingtaiyoushi-table-cell">
          <div><i class="pingtaiyoushi-icon pingtai1"></i></div>
          <span class="pingtai-title">大数据模型</span>
          <span class="pingtai-content">采用行业先进的聚类算法和决策树技术对多源异构数据进行分析评价</span>
        </li>
        <li class="pingtaiyoushi-table-cell">
          <div><i class="pingtaiyoushi-icon pingtai2"></i></div>
          <span class="pingtai-title">云工具集成</span>
          <span class="pingtai-content">集成大量分析挖掘工具，业务协同工具以及第三方工具，全面提升平台实用性</span>
        </li>
        <li class="pingtaiyoushi-table-cell">
          <div><i class="pingtaiyoushi-icon pingtai3"></i></div>
          <span class="pingtai-title">定制化开发</span>
          <span class="pingtai-content">针对用户具体需求，场景化定制开发，一体式服务运营</span>
        </li>
      </ul>
    </div>
    <div class="home-main background-style-one" id="product">
      <div class="home-title" style="width: 227px;"><i></i>主要功能<i></i></div>
      <div class="gongneng-main" style="margin-top: 213px;">
        <img class="gongneng-image-left" src="/static/images/content1.png" />
        <div class="gongnegn-title-right">智能的实时监控手段，物联网应用</div>
        <div class="gongneng-content-right">在城市远程联网监测平台基础上，构建物联网设备的在线监测，实现监控视频、电气、水压、燃气等设施设备的实时监测、联网报警和智能分析。</div>
      </div>
      <div class="gongneng-main" style="margin-top: 153px;">
        <img class="gongneng-image-right" src="/static/images/content2.png" style="margin-top: -74px;" />
        <div class="gongnegn-title-left">快速的工作协同方式，移动互联网应用</div>
        <div class="gongneng-content-left">以社会单位为管理单元，对消防设施设备完好情况和五类人员履职动态进行实时数据采集，结合消防及相关行业部门的业务数据，通过数据模型进行分析研判，并将结果通过移动终端统一反馈，实现多方互联互通，创建协同联动的全新消防工作机制。</div>
      </div>
      <div class="gongneng-main">
        <img class="gongneng-image-left" src="/static/images/content3.png" style="margin: -84px 0 0 -52px;" />
        <div class="gongnegn-title-right">科学的消防管理思维，大数据应用</div>
        <div class="gongneng-content-right">自主研发火灾风险评估模型，对火灾诱发因子进行全面分析，精准排查火灾隐患，协助消防工作的全面开展，实现消防责任的层层落实。</div>
      </div>
      <div class="gongneng-main">
        <img class="gongneng-image-right" src="/static/images/content4.png" style="margin: -76px -90px 0 0;" />
        <div class="gongnegn-title-left">高效的灭火救援通讯，现场指挥调度应用</div>
        <div class="gongneng-content-left">接入4G数字化单兵终端，以及车载、无人机等图传信号，融合全方位态势感知单元，汇聚和分析实时态势数据，为消防现场应急指挥提供科学的决策依据。</div>
      </div>
    </div>
    <div class="home-main">
      <div class="home-title" style="width: 227px;"><i></i>合作伙伴<i></i></div>
      <ul class="hezuo-table-view">
        <li class="hezuo-table-cell">
          <img src="/static/images/partner0.png" />
        </li>
        <li class="hezuo-table-cell">
          <img src="/static/images/partner1.png" />
        </li>
        <li class="hezuo-table-cell">
          <img src="/static/images/partner2.png" />
        </li>
        <li class="hezuo-table-cell">
          <img src="/static/images/partner3.png" />
        </li>
        <li class="hezuo-table-cell">
          <img src="/static/images/partner4.png" />
        </li>
        <li class="hezuo-table-cell">
          <img src="/static/images/partner5.png" />
        </li>
      </ul>
    </div>
    <div class="home-main background-style-one" style="padding-bottom: 83px;" id="about">
      <div class="home-title" style="width: 227px;"><i></i>关于大观<i></i></div>
      <i class="about-logo-icon"></i>
      <div class="daguan-item">聚远见，有大观</div>
      <div class="daguan-content">
        深圳前海大观信息技术有限公司成立于2014年，是一家专注于行业大数据解决方案规划及应用服务的高新技术企业。公司拥有成熟、专业的大数据技术研发团队，硕士以上学历人员超过80%。大数据思维和分析模型研发是公司的核心竞争力，公司会根据客户的定制化需求，提供专业、全面、透彻的大数据解决方案规划和应用服务。
      </div>
    </div>
    <div class="home-main background-style-two" id="us">
      <div class="footer-title">促进社会共同治理，携手共建城市安全</div>
      <div class="footer-main">
        <ul class="footer-table-view">
          <li class="footer-table-cell">深圳总部</li>
          <li class="footer-table-cell">深圳市南山区海岸城<br>西座1002</li>
          <li class="footer-table-cell">0755-86964372</li>
        </ul>
        <ul class="footer-table-view">
          <li class="footer-table-cell">无锡分部</li>
          <li class="footer-table-cell">无锡市滨湖区鸿桥路801号816室<br>现代国际工业设计大厦</li>
          <li class="footer-table-cell">0510-85899382</li>
        </ul>
        <ul class="footer-table-view qr-table">
          <li class="footer-table-cell qr-code"><img src="/static/images/qr_code.png"></li>
        </ul>
      </div>
    </div>
    <div class="home-main background-style-three">
        <i class="footer-dg-icon"></i>
        <div class="footer-dg-address">深圳市南山区海岸城C座1002<br>400-800-1234</div>
        <div class="Copyright">Copyright © 2016 深圳前海大观信息技术有限公司  粤ICP备11234560号-1</div>
    </div>
  </div>
</template>

<script type="text/javascript" src="../js/home.js"></script>

<style lang="less" src="../style/home.less" scoped></style>