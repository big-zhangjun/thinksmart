<template>
  <main class="faqs" role="main">
    <div class="title">ThinkSmart ONE FAQs</div>
    <div class="about">
      <div
        class="btn1"
        :class="{ active: active === index }"
        v-for="(item, index) in btn"
        :key="index"
        @click="active = index"
      >
        {{ item }}
      </div>
    </div>
    <div class="collapse">
      <van-collapse v-model="activeNames" @change="change">
        <van-collapse-item
          :name="item.content"
          v-for="(item, index) in list[active]"
          :key="index"
        >
          <template #title>
            <div>
              <span class="dot" />
              {{ item.title }}
            </div>
          </template>
          <template #right-icon>
            <img
              src="@/assets/img/add.png"
              alt=""
              v-if="!activeNames.includes(item.content)"
            />
            <img src="@/assets/img/jian.png" alt="" v-else />
          </template>
          {{ item.content }}
        </van-collapse-item>
      </van-collapse>
    </div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      activeNames: ["1234"],
      list: [
        [
          {
            title: "Put the question here",
            content: "1234",
          },
          {
            title: "Put question here",
            content: "1234567",
          },
          {
            title: "Put the question ",
            content: "1234907",
          },
        ],
        [
          {
            title: "Put the question here",
            content: "1234",
          },
          {
            title: "Put the question ",
            content: "1234907",
          },
        ],
        [
          {
            title: "Put the question here",
            content: "1234",
          },
        ],
      ],
      btn: ["About MTR", "About Zoom", "About System"],
      active: 0,
    };
  },
  methods: {
    change() {
      console.log(this.activeNames);
    },
  },
};
</script>

<style lang="scss">
.faqs {
  background: url("~@/assets/img/MTR_1.png") no-repeat center;
  background-size: cover;
  overflow: auto;
  .title {
    color: #1c1c1e;
    font-size: 0.3rem;
    font-weight: bold;
    margin: 0.48rem 0 0.24rem;
    text-align: center;
  }
  .about {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.32rem;
    .btn1 {
      width: 2.8rem;
      height: 0.74rem;
      border: 0.03rem solid #6388a5;
      border-radius: 0.1rem;
      text-align: center;
      line-height: 0.74rem;
      color: #6388a5;
      font-size: 0.22rem;
      margin: 0 0.24rem;
      box-sizing: border-box;
    }
    .btn3 {
      margin-right: 0;
    }
    .active {
      background-color: #6388a5;
      color: #ffffff;
    }
  }
  .collapse {
    width: 9.36rem;
    margin: 0 auto;
    .van-collapse-item {
      margin-bottom: 0.16rem;
      border-radius: 0.1rem;
      overflow: hidden;
      box-shadow: 0.02rem 0.04rem 0.06rem 0.01rem rgba(112, 126, 154, 0.5);
      .van-cell__title {
        font-size: 0.22rem;
        color: #1c1c1e;
        font-weight: bold;
        line-height: 1rem;
      }
      img {
        width: 0.32rem;
        height: 0.32rem;
        margin-top: 0.34rem;
      }
      .van-cell {
        padding: 0 0.34rem;
      }
      .dot {
        display: inline-block;
        width: 0.18rem;
        height: 0.18rem;
        background-color: #333f48;
        border-radius: 50%;
        margin-right: 0.16rem;
      }
      .van-collapse-item__content {
        font-size: 0.2rem;
        color: #1c1c1e;
        padding: 0.2rem 0.48rem;
      }
      .van-collapse-item__title--expanded::after {
        display: none;
      }
    }
  }
}
//
@media screen and (orientation: portrait) {
  .faqs {
    width: 100vh;
    height: calc(100vw - 1rem);
  }
}

@media screen and (orientation: landscape) {
  .faqs {
    width: 100vw;
    height: calc(100vh - 1rem);
  }
}
</style>
