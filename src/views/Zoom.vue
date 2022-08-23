<template>
  <main role="main" class="zoom">
    <Screen ref="screen">
      <!-- 第一页 -->
      <div slot="item">
        <div class="first">
          <div class="video"></div>
          <div class="user_guide">
            <div class="user_title">Zoom User Guide</div>
            <div class="user_desc">
              {{ desc ? "Sharing your Screen" : "with online attendees" }}
            </div>
            <div class="user_btn">
              <div
                class="c_button"
                v-for="(item, index) in btnList"
                :key="index"
                @click="connect(index)"
                :class="{ active: desc == index }"
              >
                <img :src="item.img" alt="" />
                {{ item.title }}
              </div>
            </div>
          </div>
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
      </div>
      <!-- 第二页 -->
      <div slot="item">
        <div class="second">
          <div class="center">
            <div class="center_left">ZOOM</div>
            <div class="center_right">Help Center</div>
          </div>
          <div class="describe">
            You can find the most updated information here.
          </div>
          <div class="guide">
            <div class="left">
              <div class="top">
                <div class="title">ZOOM Help Center</div>
                <div class="arrow">
                  <a href="" class="link">Go to Zoom Help Center</a>
                  <img src="@/assets/img/HelpLink_icon_Zoom@2x.png" alt="" />
                </div>
              </div>
              <div class="middle">
                <div class="title">ZOOM Rooms User Guide</div>
                <div class="arrow">
                  <a href="" class="link">Go to Rooms User Guide</a>
                  <img src="@/assets/img/HelpLink_icon_Zoom@2x.png" alt="" />
                </div>
              </div>
              <div class="down">
                <div class="title">Controls and Settings</div>
                <div class="arrow">
                  <a href="" class="link"
                    >Go to Meeting Controls and Settings</a
                  >
                  <img src="@/assets/img/HelpLink_icon_Zoom@2x.png" alt="" />
                </div>
              </div>
            </div>
            <div class="right">
              <div class="top">
                <div class="title">ZOOM Screen Sharing</div>
                <div class="arrow">
                  <a href="" class="link">Go to Screen Sharing</a>
                  <img src="@/assets/img/HelpLink_icon_Zoom@2x.png" alt="" />
                </div>
              </div>
              <div class="middle">
                <div class="title">ZOOM Direct Sharing</div>
                <div class="arrow">
                  <a href="" class="link">Go to Direct Sharing</a>
                  <img src="@/assets/img/HelpLink_icon_Zoom@2x.png" alt="" />
                </div>
              </div>
              <div class="down">
                <div class="title">Scheduling Meeting</div>
                <div class="arrow">
                  <a href="" class="link">Go to Scheduling Meeting</a>
                  <img src="@/assets/img/HelpLink_icon_Zoom@2x.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Screen>
  </main>
</template>

<script>
import Screen from "../components/Screen/index.vue";

export default {
  components: {
    Screen,
  },
  data() {
    return {
      active: 0,
      btnList: [
        {
          title: "Connecting",
          img: require("@/assets/img/Connecting_icon_MTRandZoom@2x.png"),
        },

        {
          title: "Sharing",
          img: require("@/assets/img/Sharing_icon_MTRandZoom@2x.png"),
        },
      ],
      desc: 0,
    };
  },

  methods: {
    connect(index) {
      this.desc = index;
    },
    nextPage() {
      this.$refs.screen.nextPage();
    },
  },
};
</script>

<style lang="scss" scoped>
.zoom {
  .first {
    background: url("~@/assets/img/MTR&Zoom.png") no-repeat center;
    background-size: cover;
    overflow: hidden;
    display: flex;
    position: relative;
    .video {
      width: 5rem;
      height: 3rem;
      margin-top: 0.72rem;
      margin-left: 1.97rem;
      background-color: pink;
    }
    .user_guide {
      margin-top: 1.8rem;
      margin-left: 0.5rem;
      text-align: right;
    }
    .user_title {
      color: #1c1c1e;
      font-size: 0.3rem;
      font-weight: bold;
    }
    .user_desc {
      color: #1c1c1e;
      font-size: 0.24rem;
      margin: 0.08rem 0 0.16rem;
    }
    .user_btn {
      display: flex;
      .c_button {
        margin-right: 0.16rem;
      }
      .c_button {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 1.6rem;
        height: 0.88rem;
        background: #263f52;
        border-radius: 0.2rem;
        box-shadow: 0.02rem 0.02rem 0.04rem rgba(9, 30, 53, 0.3);
        color: #fff;
        font-size: 0.18rem;
        text-align: center;
      }
      .active {
        background: #6388a5;
        box-shadow: 0.02rem 0.02rem 0.04rem rgba(24, 29, 45, 0.5) inset;
        animation: zoomIn 0.1s ease-in-out;
      }
      img {
        width: 0.35rem;
        height: 0.35rem;
      }
    }
  }
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
  .second {
    background: url("~@/assets/img/MTR_1.png") no-repeat center;
    background-size: cover;
    overflow: hidden;
    .center {
      width: 4rem;
      height: 1.47rem;
      background-color: #fff;
      border-radius: 0.2rem;
      margin: 0.4rem auto 0.16rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .center_left {
        font-size: 0.7rem;
      }
      .center_right {
        font-size: 0.4rem;
      }
    }
    .describe {
      color: #1c1c1e;
      font-size: 0.22rem;
      display: flex;
      justify-content: center;
    }
    .guide {
      display: flex;
      justify-content: space-between;
      margin-top: 0.3rem;
      padding: 0 2.31rem;
      .title {
        font-size: 0.3rem;
        color: #1c1c1e;
        font-weight: bold;
        margin-bottom: 0.08rem;
      }
      .link {
        font-size: 0.22rem;
        color: #228eff;
      }
      .top,
      .middle,
      .down {
        margin-bottom: 0.62rem;
      }
      .arrow {
        display: flex;
        img {
          width: 0.28rem;
          height: 0.28rem;
        }
      }
    }
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
  .zoom,
  .first,
  .second {
    width: 100vh;
    height: calc(100vw - 1rem);
  }
}

@media screen and (orientation: landscape) {
  .zoom,
  .first,
  .second {
    width: 100vw;
    height: calc(100vh - 1rem);
  }
}
</style>>