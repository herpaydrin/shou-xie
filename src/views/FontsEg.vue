<template>
  <div class="font-list-main-container">
    <div
      v-for="item in FontList"
      :key="item.value"
      :style="{ fontFamily: item.value }"
      @click="emits('select', item.value)"
    >
      {{ item.name }}
    </div>
  </div>
</template>

<script setup>
import FontList from "../fontFamily";

const emits = defineEmits("select");
// const onclickFontFamily = ()=>{
//   emits()
// }
</script>

<style lang="scss" scoped>
.font-list-main-container {
  height: 65px;
  overflow-x: auto;
  display: flex;
  justify-content: flex-start;
  border: 1px #ebebeb solid;
  padding: 2px;
  > div {
    white-space: nowrap;
    padding: 8px 15px;
    border: 1px #ebebeb solid;
    border-radius: 6px;
    font-size: 20px;
  }
}
</style>
