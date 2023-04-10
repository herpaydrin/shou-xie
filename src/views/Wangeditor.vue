<template>
  <div class="wangeditor-container">
    <Toolbar style="border-bottom: 1px solid #ccc" :editor="editorRef" :defaultConfig="toolbarConfig" :mode="mode" />
    <Editor
      class="editor-style"
      v-model="valueHtml"
      :defaultConfig="editorConfig"
      :mode="mode"
      @onCreated="handleCreated"
    />
  </div>
  <div class="pre-view-container" v-if="printHtml" @click="printHtml = null">
    <div v-html="printHtml" ref="printDomRef" class="print-html"></div>
  </div>
</template>

<script setup>
import "@wangeditor/editor/dist/css/style.css"; // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from "vue";
import { Editor, Toolbar } from "@wangeditor/editor-for-vue";
import fontList from "../fontFamily";
import "./EditorMenus";
import Print from "./print";

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef();

// 内容 HTML
const valueHtml = ref("");

const mode = ref("default");

// 模拟 ajax 异步获取内容
onMounted(() => {
  setTimeout(() => {
    valueHtml.value = "<p>我是一只小小小小鸟</p>";
  }, 1500);
});

const toolbarConfig = {
  excludeKeys: [
    "blockquote",
    "emotion",
    "insertLink",
    "group-more-style",
    "bgColor",
    "group-image",
    "group-video",
    "insertTable",
    "codeBlock",
    "divider",
  ],
};
toolbarConfig.insertKeys = {
  index: 0,
  keys: ["preViewMenu"],
};

const editorConfig = { placeholder: "请输入内容...", MENU_CONF: {} };
editorConfig.MENU_CONF["fontFamily"] = {
  fontFamilyList: ["黑体", "楷体", "仿宋", ...fontList],
};

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value;
  if (editor == null) return;
  editor.destroy();
});

const handleCreated = (editor) => {
  editor.preView = preViewProps;
  editorRef.value = editor; // 记录 editor 实例，重要！
};

const printHtml = ref(null);
const printDomRef = ref(null);
const preViewProps = () => {
  printHtml.value = editorRef.value.getHtml();
  setTimeout(() => {
    Print(printDomRef.value);
  }, 100);
};
</script>

<style lang="scss" scoped>
.wangeditor-container {
  height: calc(100vh - 100px);
  border: 1px solid #ccc;
  .editor-style {
    height: calc(100% - 45px) !important;
    overflow-y: hidden;
  }
}
.pre-view-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(61, 61, 61, 0.5);
  text-align: center;
  .print-html {
    // width: 800px;
    // height: 1800px;
    background-color: white;
    // padding: 0;
    // margin: 0 auto;
  }
}
</style>
