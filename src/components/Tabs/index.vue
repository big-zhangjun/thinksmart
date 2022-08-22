<template>
  <div class="tablist" role="tablist">
    <div class="tabcontent" role="tabcontent">
      <div
        role="tab"
        tabindex="0"
        v-for="(item, idx) in list"
        :key="item"
        class="tabs"
        @click="handleClick(item, idx)"
        :class="{ tabactive: tabIndex == idx }"
      >
        {{ item }}
      </div>
      <div class="tabbsLine"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default: () => {
        return [
          "Oberview",
          "Join the metting",
          "Create new metting",
          "Sharing screen"
        ];
      }
    }
  },
  data() {
    return {
      tabIndex: 0
    };
  },
  mounted() {
    this.handleClick(null, 0)
  },
  methods: {
    handleClick(item, idx) {
      this.tabIndex = idx;
      this.$nextTick(() => {
        let tabLine = document.querySelector('.tabbsLine');
        let tabactive = document.querySelector('.tabactive');
        let offsetX = tabactive.offsetLeft + tabactive.clientWidth / 2 - tabLine.clientWidth / 2;
        tabLine.style.transform = `translate(${offsetX}px, 0)`;
      });
      this.$emit("handleTab", idx)
    }
  }
}
</script>

<style lang="scss" scoped>
.tablist {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.26rem;
  color: #999;
  .tabcontent {
    display: flex;
    align-items: center;
    padding-bottom: 0.14rem;
    border-bottom: 0.02rem solid #999;
    position: relative;
  }
  .tabs {
    margin: 0 0.3rem;
    cursor: pointer;
  }
  .tabactive {
    color: #6388a5;
  }
  .tabbsLine {
    width: 1rem;
    height: 0.14rem;
    background-color: #6388a5;
    position: absolute;
    bottom: -0.08rem;
    transition: all .5s;
  }
}
</style>