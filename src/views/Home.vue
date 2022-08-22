<template>
  <main class="home" role="main">
    <h1>ThinkSmart One</h1>
    <h3>Welcome to the user guide page</h3>
    <div class="content">
      <div
        class="mtr"
        tabindex="0"
        role="mtr"
        @click="goMtr"
        :class="{ zindex: animate }"
      >
        <img src="@/assets/img/MTR.png" alt="MTR" title="MTR" />
        <span>MTR</span>
        <div class="animate" :class="{ scaleDrew: animate }" role="animate">
          <img src="@/assets/img/MTR.png" alt="MTR" title="MTR" />
          <span>MTR</span>
        </div>
      </div>
      <div class="zoom" tabindex="0" role="Zoom" @click="goZoom">
        <img src="@/assets/img/ZOOM.png" alt="ZOOM" title="ZOOM" />
        <span>ZOOM</span>
        <div
          class="animate"
          :class="{ scaleDrewToZoom: fadeMove }"
          role="animate"
        >
          <img src="@/assets/img/ZOOM.png" alt="ZOOM" title="ZOOM" />
          <span>ZOOM</span>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
// @ is an alias to /src

export default {
  data() {
    return {
      show: true,
      animate: false,
      backMate: false,
      fadeMove: false,
    };
  },
  name: 'Home',
  components: {},
  mounted() { },
  methods: {
    goMtr() {
      this.animate = true;
      this.$EventBus.$emit('change', 1);
      setTimeout(() => {
        this.$router.push('/mtr');
      }, 750);
      localStorage.setItem("isHome", 1);
    },
    goZoom() {
      this.fadeMove = true;
      this.$EventBus.$emit('change', 2);
      setTimeout(() => {
        this.$router.push('/zoom');
      }, 750);
      localStorage.setItem("isHome", 1);
    },
  },
}
</script>
<style lang="scss" scoped>
.home {
  background: url("~@/assets/img/Homebg.png") no-repeat center;
  background-size: cover;
  overflow: hidden;
  h1,
  h3 {
    color: #fff;
    text-align: center;
  }
  h1 {
    font-size: 0.36rem;
    margin: 0.8rem 0 0.08rem 0;
  }
  h3 {
    font-size: 0.26rem;
    font-weight: normal;
  }
  .content {
    display: flex;
    justify-content: center;
  }
  .mtr,
  .zoom {
    width: 2.4rem;
    height: 2.4rem;
    background-color: #2b4560;
    border-radius: 0.4rem;
    margin: 0 0.9rem;
    margin-top: 0.48rem;
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-size: 0.26rem;
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
    &:hover {
      background-color: #6388a5;
    }
    img {
      width: 1.06rem;
      height: 1.06rem;
      object-fit: cover;
      margin-bottom: 0.24rem;
    }
    .animate {
      color: #fff;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.26rem;
      position: absolute;
      width: 2.4rem;
      height: 2.4rem;
      background-color: #6388a5;
      border-radius: 0.4rem;
      z-index: -1;
      img {
        width: 1.06rem;
        height: 1.06rem;
        object-fit: cover;
        margin-bottom: 0.24rem;
      }
    }
    .scaleDrew {
      left: 0;
      animation: scaleDrew 0.75s ease-in-out;
      animation-fill-mode: forwards;
      border-radius: 0;
      z-index: 10;
    }
    .scaleDrewToZoom {
      right: 0;
      animation: scaleDrewToZoom 0.75s ease-in-out;
      animation-fill-mode: forwards;
      border-radius: 0;
      z-index: 10;
    }
  }
  .zoomAnimate {
    background-color: #6388a5;
    position: absolute;
    left: 0;
    color: #fff;
    font-size: 0.26rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
      width: 1.06rem;
      height: 1.06rem;
      object-fit: cover;
      margin-bottom: 0.24rem;
    }
  }
}

@keyframes scaleBack {
  0% {
    transform: scale(7);
  }
  100% {
    transform: scale(1);
  }
}

@media screen and (orientation: portrait) {
  .home,
  .zoomAnimate {
    width: 100vh;
    height: calc(100vw - 1rem);
  }
  .zoomAnimate {
    top: 100vw;
  }
  @keyframes scaleDrew {
    0% {
      width: 2.4rem;
      height: 2.4rem;
      left: 0;
    }
    100% {
      width: 100vh;
      height: calc(100vw - 1rem);
      left: calc(calc(6.6rem - 100vh) / 2);
    }
  }

  @keyframes scaleDrewToZoom {
    0% {
      width: 2.4rem;
      height: 2.4rem;
      right: 0;
    }
    100% {
      width: 100vh;
      height: calc(100vw - 1rem);
      right: calc(calc(6.6rem - 100vh) / 2);
    }
  }
  @keyframes fadeMove {
    0% {
      top: 100vw;
    }
    100% {
      top: 1rem;
    }
  }
}

@media screen and (orientation: landscape) {
  .home,
  .zoomAnimate {
    width: 100vw;
    height: calc(100vh - 1rem);
  }
  .zoomAnimate {
    top: 100vh;
  }
  @keyframes scaleDrew {
    0% {
      width: 2.4rem;
      height: 2.4rem;
    }
    100% {
      width: 100vw;
      height: calc(100vh - 1rem);
      left: calc(calc(6.6rem - 100vw) / 2);
    }
  }

  @keyframes scaleDrewToZoom {
    0% {
      width: 2.4rem;
      height: 2.4rem;
    }
    100% {
      width: 100vw;
      height: calc(100vh - 1rem);
      right: calc(calc(6.6rem - 100vw) / 2);
      //   left: 0;
    }
  }
}
</style>
