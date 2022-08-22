<template>
  <main class="Mtr">
    <Screen ref="screen">
      <div slot="item" class="item" :class="bgc">
        <h1 role="title">MTR User Guide</h1>
        <Tabs @handleTab="handleTab" :list="tabList" />
        <!-- 第一页 -->
        <section v-show="active == 0" class="page1">
          <ul class="left-atricle">
            <li
              v-for="item in leftAtricle"
              :key="item.title"
              :class="item.class"
            >
              <h3>{{ item.title }}</h3>
              <p v-html="item.content"></p>
            </li>
          </ul>
          <div class="content">
            <img
              class="mtr-home"
              src="@/assets/img/mtr_home.png"
              alt="mtr_home"
            />
            <ul>
              <li class="guide-line1 guide-line fadein1"></li>
              <li class="guide-line2 guide-line fadein2"></li>
              <li class="guide-line3 guide-line fadein3"></li>
              <li class="guide-line4 guide-line fadein1"></li>
              <li class="guide-line5 guide-line fadein2"></li>
              <li class="guide-line6 guide-line fadein3"></li>
            </ul>
          </div>
          <ul class="right-atricle">
            <li
              v-for="item in rightAtricle"
              :key="item.title"
              :class="item.class"
            >
              <h3>{{ item.title }}</h3>
              <p v-html="item.content"></p>
            </li>
          </ul>
        </section>
        <!-- 第二页 -->
        <Swiper v-show="active == 1" :max="2" :className="'page2'">
          <div slot="item" class="slide-item">
            <img src="@/assets/img/Pic 2_Send meeting invitation.png" alt />
            <article>
              <h2>Step 1</h2>
              <p>
                Send a meeting invitation<br />to attendees and the<br />conference
                room email<br />address (MTR account)
              </p>
              <p>
                Once the meeting is<br />accepted,it will appear on<br />the
                room calender shortly<br />
              </p>
            </article>
          </div>
          <div slot="item" class="slide-item">
            <img src="@/assets/img/Picjoin.png" alt />
            <article>
              <h2>Step 1</h2>
              <p>
                  Select <b>"Join"</b> to join<br />the meeting
              </p>
            </article>
          </div>
        </Swiper>
        <!-- 第三页 -->
        <Swiper v-show="active == 2" :max="3" :className="'page2'">
          <div slot="item" class="slide-item">
            <img src="@/assets/img/mtr_home.png" alt />
            <article>
              <h2>Step 1</h2>
              <p>
                Select <b>"Meet"</b> on ThinkSmart Controller home screen tocreate a new meeting
              </p>
            </article>
          </div>
          <div slot="item" class="slide-item">
            <img src="@/assets/img/Picname.png" alt />
            <article>
              <h2>Step 2</h2>
              <p>
                Type a name to<br />search and Select the people you want to invite
              </p>
            </article>
          </div>
          <div slot="item" class="slide-item">
            <img src="@/assets/img/Pictojoin.png" alt />
            <article>
              <h2>Step 3</h2>
              <p>
                Select <b>"Request to join"</b>to send the meeting invitation
              </p>
            </article>
          </div>
        </Swiper>
        <!-- 第四页 -->
        <section v-show="active == 3" class="page4">
          <img
            src="@/assets/img/Pic 2_Send meeting invitation.png"
            class="left_img"
            alt=""
          />
          <div>
            <h3 v-html="activeBtn ? 'xxxxx xxxxx <br />xxxxx xxxxxx':'Sharing your Screen<br />with online attendees'"></h3>
            <button class="btn1" :class="{activeBtn: activeBtn == 0, zoomIn: activeBtn == 0}" @click="activeBtn = 0">
              <img
                src="@/assets/img/Connecting_icon_MTRandZoom@2x.png"
                alt=""
              />
              <p>Connecting</p>
            </button>
            <button :class="{activeBtn: activeBtn == 1, zoomIn: activeBtn == 1}" @click="activeBtn = 1">
              <img src="@/assets/img/Sharing_icon_MTRandZoom@2x.png" alt="" />
              <p>Sharing</p>
            </button>
          </div>
        </section>
        <div class="container" @click="nextPage">
          <img
            class="down"
            src="@/assets/img/down1.png"
            alt="down"
            title="down"
          />
          <img
            class="down"
            src="@/assets/img/down2.png"
            alt="down"
            title="down"
          />
          <img
            class="down"
            src="@/assets/img/down3.png"
            alt="down"
            title="down"
          />
        </div>
      </div>
      <div slot="item" class="item">我是占位符</div>
    </Screen>
  </main>
</template>

<script>
import Screen from "../components/Screen.vue";
import Tabs from "../components/Tabs";
import Swiper from "../components/Swiper/index.vue";
export default {
  name: "swiper-example-pagination-fraction",
  title: "Fraction pagination",
  components: {
    Screen,
    Tabs,
    // SwiperSlide
    Swiper,
  },
  data() {
    return {
      active: 0,
      activeBtn: 0,
      tabList: [
        "Overview ",
        "Join the metting",
        "Create new metting",
        "Sharing screen",
      ],
      animate: false,
      bg: [
        require("@/assets/img/MTR_1.png"),
        require("@/assets/img/MTRbg.png"),
        require("@/assets/img/MTR_1.png"),
        require("@/assets/img/MTR&Zoom.png"),
      ],
      leftAtricle: [
        {
          title: "Meet",
          content: "Select to start a<br /> new meeting",
          class: "fadein1",
        },
        {
          title: "Call",
          content: "Select to make<br /> a phone call",
          class: "fadein2",
        },
        {
          title: "Share",
          content: "Select to sart or stop<br /> content sharing",
          class: "fadein3",
        },
      ],
      rightAtricle: [
        {
          title: "Conference room name",
          content:
            "Used to search for the<br /> conference room email<br /> address (MTR account).",
          class: "fadein1",
        },
        {
          title: "More",
          content: "Select for more<br /> information and settings.",
          class: "fadein2",
        },
        {
          title: "Voice recognition",
          content: "Select to enable voice recognition",
          class: "fadein3",
        },
      ],
    };
  },
  computed: {
    bgc() {
      return "bg" + this.active;
    },
  },
  mounted() {
    if (localStorage.getItem("path") != "/home") {
      this.animate = true;
    }
  },
  methods: {
    handleTab(v) {
      this.active = v;
    },
    nextPage() {
      this.$refs.screen.nextPage();
    },
  },
};
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  bottom: 0.3rem;
  transform: translateX(-50%);
  .down {
    width: 0.21rem;
    height: 0.15rem;
    display: block;
  }
}
.Mtr {
  background: url("~@/assets/img/MTR_1.png") no-repeat center;
  background-size: cover;
  h1 {
    font-size: 0.3rem;
    color: #1c1c1e;
    text-align: center;
    margin: 0.4rem 0 0.16rem 0;
  }
  .page1 {
    display: flex;
    justify-content: center;
    .left-atricle,
    .right-atricle {
      margin-top: 0.8rem;
      margin-right: 0.1rem;
      h3 {
        font-size: 0.22rem;
        color: #1c1c1e;
        margin: 0.02rem;
      }
      p {
        font-size: 0.2rem;
        color: #1c1c1e;
        line-height: 1;
        margin-bottom: 0.16rem;
      }
      li {
        opacity: 0;
      }
    }
    .right-atricle {
      margin-top: 0.77rem;
      margin-left: 0.32rem;
      p {
        margin-bottom: 0.24rem;
      }
    }
    .content {
      width: 4.8rem;
      height: 3rem;
      position: relative;
      margin-top: 0.6rem;
      .mtr-home {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .guide-line {
        position: absolute;
        opacity: 0;
        border-right: 0.02rem solid rgb(158, 158, 158);
      }
      .guide-line1 {
        width: 1.5rem;
        height: 0.58rem;
        top: 0.64rem;
        left: -0.36rem;
        border-top: 0.02rem solid rgb(158, 158, 158);
      }
      .guide-line2 {
        width: 2.13rem;
        top: 1.55rem;
        left: -0.36rem;
        border-top: 0.02rem solid rgb(158, 158, 158);
      }
      .guide-line3 {
        width: 3.17rem;
        height: 0.46rem;
        bottom: 0.87rem;
        left: -0.36rem;
        border-bottom: 0.02rem solid rgb(158, 158, 158);
      }
      .guide-line4 {
        width: 0.76rem;
        top: 0.81rem;
        right: -0.2rem;
        border-bottom: 0.02rem solid rgb(158, 158, 158);
      }
      .guide-line5 {
        width: 1.13rem;
        top: 1.6rem;
        right: -0.2rem;
        border-bottom: 0.02rem solid rgb(158, 158, 158);
      }
      .guide-line6 {
        width: 3.28rem;
        bottom: 0.38rem;
        right: -0.2rem;
        border-bottom: 0.02rem solid rgb(158, 158, 158);
      }
    }
  }
  .page2 {
    width: 11rem;
    .slide-item {
      width: 8.8rem;
      display: flex;
      margin-top: 0.48rem;
      article {
        margin-left: 0.26rem;
        margin-top: 0.65rem;
        font-size: .22rem;
        h2 {
          margin-bottom: 0.16rem;
          font-size: .24rem;
        }
        p {
          margin-bottom: .2rem;
        }
      }
      img {
        width: 5.85rem;
        height: 3.63rem;
        object-fit: contain;
      }
    }
  }
  .page4 {
    text-align: right;
    position: relative;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    .left_img {
      width: 5.85rem;
      height: 3.63rem;
      margin-right: 0.4rem;
      margin-top: 0.48rem;
      object-fit: contain;
    }
    h3 {
      margin-top: 1.4rem;
      font-size: 0.3rem;
      color: #1c1c1e;
      margin-bottom: 0.1rem;
    }
    button {
      width: 1.6rem;
      height: 0.88rem;
      border-radius: 0.2rem;
      background-color: #263f52;
      box-shadow: 0.02rem 0.02rem 0.04rem 0.01rem rgba(9, 30, 53, 0.3);
      border-color: transparent;

      border: 0;
      outline: none;
      img {
        width: 0.35rem;
        height: 0.35rem;
        object-fit: scale-down;
      }
      p {
        margin: 0;
        color: #fff;
        text-align: center;
        font-size: 0.14rem;
      }
    }
    .btn1 {
      margin-right: 0.16rem;
    }
    .activeBtn {
      background-color: #6388a5;
      box-shadow: 0.02rem 0.02rem 0.04rem 0.01rem rgba(22, 49, 45, 0.5) inset;
    }
  }
}

.bg0 {
  background: url("~@/assets/img/MTR_1.png") no-repeat center bottom;
  background-size: cover;
}
.bg1 {
  background: url("~@/assets/img/MTRbg.png") no-repeat center bottom;
  background-size: cover;
}
.bg2 {
  background: url("~@/assets/img/MTR_1.png") no-repeat center bottom;
  background-size: cover;
}
.bg3 {
  background: url("~@/assets/img/MTR&Zoom.png") no-repeat center bottom;
}

.fadein1 {
  animation: fadeIn 0.75s ease-in-out;
  animation-delay: 0;
  animation-fill-mode: forwards;
}
.fadein2 {
  animation: fadeIn 0.75s ease-in-out;
  animation-delay: 0.75s;
  animation-fill-mode: forwards;
}

.fadein3 {
  animation: fadeIn 0.75s ease-in-out;
  animation-delay: 1.5s;
  animation-fill-mode: forwards;
}
.zoomIn {
  animation: zoomIn 0.1s ease-in-out;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
@keyframes zoomIn {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(1.05);
  }
}
@media screen and (orientation: portrait) {
  .Mtr {
    width: 100vh;
    height: calc(100vw - 1rem);
  }
}

@media screen and (orientation: landscape) {
  .Mtr {
    width: 100vw;
    height: calc(100vh - 1rem);
  }
}
</style>
