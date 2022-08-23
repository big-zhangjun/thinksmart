<template>
  <div class="screen_body">
    <div
      class="screen"
      ref="screen"
      @touchstart="touchstart"
      @touchmove="touchmove"
      @touchend="touchend"
    >
      <slot name="item"></slot>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //   分界线,
      startX: 0,
      moveX: 0,
      index: 0,
      flag: true,
    };
  },
  props: {
    max: {
      type: Number,
      default: 1,
    },
  },
  computed: {
    translateX() {
      // 计算图片ul当前距离
      let header = document.querySelector("header");
      let W = document.documentElement.clientWidth || document.body.clientWidth;
      let H =
        document.documentElement.clientHeight || document.body.clientHeight;
      let offsetWidth =
        W > H ? H - header.clientHeight : W - header.clientHeight;
      return offsetWidth * this.index;
    },
    translate() {
      return this.flag ? "translateY" : "translateY";
    },
    client() {
      return this.flag ? "clientX" : "clientY";
    },
  },
  mounted() {
    //判断手机横竖屏状态：
    this.orientationchange();
    window.addEventListener(
      "onorientationchange" in window ? "orientationchange" : "resize",
      this.orientationchange,
      false
    );
  },
  methods: {
    orientationchange() {
      if (window.orientation === 180 || window.orientation === 0) {
        this.flag = true;
      }

      if (window.orientation === 90 || window.orientation === -90) {
        this.flag = false;
      }
    },
    touchstart(event) {
      this.startX = Math.floor(event.targetTouches[0][this.client]); // 获取开始触摸位置
    },
    touchmove(event) {
      event.preventDefault();
      this.moveX = Math.floor(
        event.targetTouches[0][this.client] - this.startX
      );
      // 手指移动位置
      if (this.flag) {
        if (this.moveX < 0 && this.index == 0) return;
        if (this.moveX > 0 && this.index == -this.max) return;
      } else {
        if (this.moveX > 0 && this.index == 0) return;
        if (this.moveX < 0 && this.index == this.max) return;
      }
      let flag = this.flag ? "-" : "";
      this.$refs.screen.style.transition = "none"; // 图片ul跟随手指移动
      this.$refs.screen.style.transform = `translateY(${flag}${
        -this.translateX + this.moveX
      }px)`;
    },
    touchend() {
      let path = this.$route.path;
      console.log(this.index);
      if (this.flag) {
        if (this.moveX < -80 && this.index == 0) return;
        if (this.moveX > 80 && this.index == -this.max) {
          path == "/zoom" && this.$router.push("/faqs");
          return;
        }
      } else {
        if (this.moveX < -80 && this.index == this.max) {
          path == "/zoom" && this.$router.push("/faqs");
          return;
        }
        if (this.moveX > 80 && this.index == 0) return;
      }
      if (this.moveX > 80) {
        console.log("上");
        this.index--;
      } else if (this.moveX < -80) {
        console.log("下");
        this.index++;
      }
      let flag = this.flag ? "" : "-";
      this.$refs.screen.style.transition = "all .5s"; // 展示当前索引图片
      this.$refs.screen.style.transform = `translateY(${flag}${this.translateX}px)`;
      this.moveX = 0;
    },
    nextPage() {
      this.moveX = 85;
      this.flag ? (this.moveX = 85) : (this.moveX = -85);
      this.touchend();
      // this.index++;
      // let flag = this.flag ? '-' : '-'
      // this.$refs.screen.style.transition = 'all .5s' // 展示当前索引图片
      // this.$refs.screen.style.transform = `translateY(${flag}${this.translateX}px)`
      // this.moveX = 0
    },
  },
};
</script>

<style lang="scss">
.screen_body {
  overflow: hidden;
  .screen {
    position: relative;
  }
}
@media screen and (orientation: portrait) {
  .screen_body {
    .item {
      width: 100vh;
      height: calc(100vw - 1rem);
      border: solid rgb(226, 226, 226) 1px;
      position: relative;
    }
  }
}

@media screen and (orientation: landscape) {
  .screen_body {
    width: 100vw;
    height: calc(100vh - 1rem);
    .item {
      width: 100vw;
      height: calc(100vh - 1rem);
      border: solid rgb(226, 226, 226) 1px;
      position: relative;
    }
  }
}
</style>
