<template>
  <main role="main" class="zoom">
   
  </main>
</template>

<script>
export default {
};
</script>

<style lang="scss" scoped>
@media screen and (orientation: portrait) {
  .zoom {
    width: 100vh;
    height: calc(100vw - 1rem);
    // li {
    // 	width: 35vh;
    // }
  }
}

@media screen and (orientation: landscape) {
  .zoom {
    width: 100vw;
    height: calc(100vh - 1rem);
    // li {
    // 	width: 35vw;
    // }
  }
}
</style>>