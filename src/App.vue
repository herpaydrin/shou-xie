<template>
  <FontsEg @select="onSelect" />
  <Wangeditor />
</template>

<script setup>
import FontsEg from "./views/FontsEg.vue";
import Wangeditor from "./views/Wangeditor.vue";

const onSelect = (v) => {
  console.log(v);
};
</script>

<style scoped>
.main-class {
  font-family: "dongridechuwu";
}
</style>
