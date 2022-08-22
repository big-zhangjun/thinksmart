<template>
  <div id="app">
    <headers @handleClick="handleClick"></headers>
    <div
      class="aniMtr"
      :class="{ fadeMove: animate, fadeOut: animateEnd }"
      role="animate"
    >
      <img :src="ani.src" :alt="ani.title" title="ani.title" />
      <span>{{ ani.title }}</span>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
import headers from "./components/Header";
export default {
  name: 'App',
  data() {
    return {
      transitionName: '',
      animate: false,
      list: [
        {
          title: "MTR",
          path: "/mtr",
          src: require("./assets/img/MTR.png")
        },
        {
          title: "ZOOM",
          path: "/zoom",
          src: require("./assets/img/ZOOM.png")
        }
      ],
      ani: {
        src: "",
        title: ""
      },
      animateEnd: false,
      orientation: false
    };
  },
  watch: {
    $route: {
      handler: function () {
        // let idx = this.list.findIndex(item => item.path == from.path);
        // if (idx == -1) return;
        // this.ani = this.list[idx];
        // this.animate = true;
        // setTimeout(() => {
        //   this.animate = false;
        // }, 750);

      },
      // 深度观察监听
      deep: true
    }
  },
  components: {
    headers
  },
  created() {
    window.onorientationchange = () => {
      if (window.orientation == 90 || window.orientation == -90) {
        // document.body.style.transformOrigin = "50% 50%";
        // document.body.style.transform = "rotateZ(540deg) translateY(0)";
      }
    };

    this.$EventBus.$on("handleRouteChange", v => {
      let idx = this.list.findIndex(ele => ele.path == v);
      this.ani = this.list[idx];
      this.animate = true;
      setTimeout(() => {
        this.animateEnd = true;
      }, 750);
      setTimeout(() => {
        this.animateEnd = false;
        this.animate = false;
      }, 1000);
    });
    this.init();
  },
  methods: {
    handleClick() {

    },
    init() {
      this.forceLandscapeScreenHandle();
      // 这里监控
      this.onWindowSizeChanged();
    },
    forceLandscapeScreenHandle() {
      const body = document.getElementsByTagName('body')[0];
      const html = document.getElementsByTagName('html')[0];
      const width = html.clientWidth;
      const height = html.clientHeight;
      const max = width > height ? width : height;
      const min = width > height ? height : width;
      body.style.width = max + 'px';
      body.style.height = min + 'px';
    },

    onWindowSizeChanged() {
      window.addEventListener('resize', this.forceLandscapeScreen);
    },
  },

  // beforeDestroy 废弃，使用 beforeUnmount
  beforeUnmount() { },
}
</script>
<style lang="scss">
#app {
}
* {
  margin: 0;
  padding: 0;
}
html {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
body {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
}

@media screen and (orientation: portrait) {
  body {
    transform-origin: 0 0;
    transform: rotateZ(90deg) translateY(-100%);
  }
}

@media screen and (orientation: portrait) {
  .aniMtr {
    width: 100vh;
    height: calc(100vw - 1rem);
  }
}

@media screen and (orientation: landscape) {
  .aniMtr {
    width: 100vw;
    height: calc(100vh - 1rem);
  }
}
.aniMtr {
  background-color: #6388a5;
  position: absolute;
  left: 0;
  color: #fff;
  font-size: 0.26rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 10;
  top: 100vh;
  img {
    width: 1.06rem;
    height: 1.06rem;
    object-fit: cover;
    margin-bottom: 0.24rem;
  }
}
.fadeMove {
  animation: fadeMove 0.75s ease-in-out;
  animation-fill-mode: forwards;
  z-index: 10 !important;
}
.fadeOut {
  animation: fadeOut 0.25s ease-in-out;
  z-index: 10 !important;
}
@keyframes fadeMove {
  0% {
    top: 100vh;
  }
  100% {
    top: 1rem;
  }
}
@keyframes fadeOut {
  0% {
    top: 1rem;
    opacity: 1;
  }
  100% {
    opacity: 0;
    top: 1rem;
  }
}
</style>
