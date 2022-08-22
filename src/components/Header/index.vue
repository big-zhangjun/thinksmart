<template>
  <header class="header">
    <img
      class="logo"
      src="@/assets/img/thinksmart_logo.png"
      alt="logo"
      title="thinksmart"
    />
    <nav role="navigation">
      <ul>
        <li
          tabindex="0"
          v-for="(item, idx) in navList"
          :key="item.path"
          :data-index="idx"
          class="nav_item"
          @click="handleClick(item, idx)"
          :class="{ active: idx == acitveIndex }"
        >
          {{ item.title }}
        </li>
        <li class="active_bg"></li>
      </ul>
      <div role="langue" class="langue">
        <span>EN</span>
        <img src="@/assets/img/arrow_down.png" alt="" />
      </div>
    </nav>
  </header>
</template>

<script>
import { handleTabEnter } from "@/utils/handle";
export default {
  mounted() {
    this.$EventBus.$on("change", (v) => {
      this.animateFun(v);
    });
    if (this.isMobile()) {
      //   this.acitveIndex = localStorage.getItem("index") || 0;
    }
    this.acitveIndex = localStorage.getItem("index") || 0;
    this.init();
    handleTabEnter(".nav_item", (e) => {
      console.log(e);
      let idx = e.getAttribute("data-index");
      let item = this.navList[idx];
      this.handleClick(item, idx);
    });
  },
  data() {
    return {
      acitveIndex: 0,
      navList: [
        {
          title: "Home",
          path: "/home",
        },
        {
          title: "MTR",
          path: "/mtr",
        },
        {
          title: "ZOOM",
          path: "/zoom",
        },
        {
          title: "FAQs",
          path: "/faqs",
        },
      ],
      flag: false,
    };
  },
  watch: {
    $route: {
      handler: function () {
        let idx = this.navList.findIndex(
          (item) => item.path == this.$route.path
        );
        localStorage.setItem("index", idx);
        if (!this.flag) {
          this.init();
        }
        this.flag = false;
      },
      // 深度观察监听
      deep: true,
    },
  },
  methods: {
    //App.vue
    isMobile() {
      let flag = navigator.userAgent.match(
        /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
      );
      return flag;
    },
    init() {
      let pathList = ["/home", "/mtr", "/zoom", "/faqs"];
      let idx = pathList.findIndex((item) => item == this.$route.path);
      // this.acitveIndex = localStorage.getItem("index") || 0;
      this.animateFun(idx);
      this.acitveIndex = idx;
      this.flag = false;
    },
    handleClick(item, idx) {
      if (idx == this.acitveIndex) return;
      localStorage.setItem("path", this.$route.path);
      this.animateFun(idx);
      localStorage.setItem("index", idx);
      this.$emit("handleClick", item);
      this.$router.push(item.path);
    },
    animateFun(v) {
      this.flag = true;
      let flag = v > this.acitveIndex ? true : false;
      this.acitveIndex = v;
      let lastActive = document.querySelector(".active");

      this.$nextTick(() => {
        let active_bg = document.querySelector(".active_bg");
        let active = document.querySelector(".active");
        let ele = document.querySelectorAll(".nav_item")[v];
        let width = flag ? lastActive.clientWidth - ele.clientWidth : 0;
        let offsetX = active.offsetLeft - width;
        active_bg.style.transform = `translate(${offsetX}px, -50%)`;
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.header {
  height: 1rem;
  font-size: 0.26rem;
  background-color: #333f48;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 0.02rem 0.4rem 0 rgba(0, 0, 0, 0.05);
  padding: 0 1.97rem 0 1.92rem;
  box-sizing: border-box;
  position: relative;
  z-index: 1000;
  box-shadow: 0 0.02rem 0.04rem 0 rgba(0, 0, 0, 0.5);
  .logo {
    width: 1.44rem;
    height: 0.4rem;
  }
  nav {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      position: relative;
      li {
        line-height: 0.72rem;
        text-align: center;
        margin: 0.24rem;
        z-index: 2;
        transition: all 0.75s;
        position: relative;
        cursor: pointer;
        transition: all 0.75s;
        width: 0.65rem;
      }
      .active {
        width: 1.44rem;
      }
      .active_bg {
        background-color: #161c22;
        border-radius: 0.16rem;
        width: 1.44rem;
        height: 0.72rem;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate(0.24rem, -50%);
        z-index: 1;
        margin: 0;
      }
    }
  }
  .langue {
    line-height: 0.45rem;
    padding-left: 0.45rem;
    margin-left: 0.21rem;
    height: 0.45rem;
    border-left: 2px solid #fff;
    display: flex;
    align-items: center;
    img {
      width: 0.32rem;
      height: 0.32rem;
      object-fit: scale-down;
      margin-left: 0.16rem;
    }
  }
}
// 竖屏
@media screen and (orientation: portrait) {
  .header {
    width: 100vh;
  }
}
// 横屏
@media screen and (orientation: landscape) {
  .header {
    width: 100vw;
  }
}
</style>
