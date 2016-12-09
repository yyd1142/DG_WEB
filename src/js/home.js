import headerComponent from '../components/header.vue'
var i = 0;
export default {
  data() {
    return {
      sliderItem: [{ active: 'slider-active' }, { active: '' }, { active: '' }]
    }
  },
  mounted() {
    this.initBannerSlider();
  },
  methods: {
    initBannerSlider() {
      var self = this;
      var carousel = document.querySelector(".carousel");
      var img = carousel.querySelectorAll("div");
      var len = img.length;
      [].forEach.call(img, function (item) {
        item.style.width = (100 / len) + "%";
      });
      carousel.style.left = "0%";
      carousel.style.width = (100 * len) + "%";
      var pre = document.querySelector(".pre");
      var next = document.querySelector(".next");
      next.onclick = function () {
        self.next(carousel, len)
      };
      pre.onclick = function () {
        self.pre(carousel, len);
      };
      // setInterval(function(){
      //   self.next(carousel, len);
      // }, 4000);
    },
    next(carousel, len) {
      var self = this;
      var left = carousel.style.left;
      if (i < len - 1) {
        carousel.style.left = (parseInt(left) - 100) + "%";
        i++;
      }
      else if (i == len - 1) {
        carousel.style.left = "0%";
        i = 0;
      }
      this.sliderItem.forEach(function(item){
        if(self.sliderItem.indexOf(item) == i){
          item.active = 'slider-active';
        }else{
          item.active = '';
        }
      });
    },
    pre(carousel, len) {
      var self = this;
      var left = carousel.style.left;
      if (i > 0) {
        carousel.style.left = (parseInt(left) + 100) + "%";
        i--;
      } else if (i == 0) {
        carousel.style.left = -parseInt(carousel.style.width) + 100 + "%";
        i = len - 1;
      }
      this.sliderItem.forEach(function(item){
        if(self.sliderItem.indexOf(item) == i){
          item.active = 'slider-active';
        }else{
          item.active = '';
        }
      });
    },
    banner() {
      console.log(true);
    }
  },
  components: {
    headerComponent
  }
}