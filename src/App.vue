<script setup>
// 导入布局组件
import AppLayout from './components/Layout/AppLayout.vue'
</script>

<template>
  <!-- 使用统一的布局组件 -->
  <AppLayout />
</template>

<style>
/* 全局样式重置 */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  color: #2c3e50;
  background-color: #f8f9fa;
}

#app {
  min-height: 100vh;
}

/* 滚动条样式 */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: #f1f1f1;
}

::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}

/* 链接样式 */
a {
  color: #4FC08D;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #42b883;
}

/* 按钮基础样式 */
button {
  font-family: inherit;
}

/* 代码字体 */
code, pre {
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
}

/* 响应式图片 */
img {
  max-width: 100%;
  height: auto;
}

/* 表单元素样式 */
input, textarea, select {
  font-family: inherit;
}

/* 过渡动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active,
.slide-leave-active {
  transition: transform 0.3s ease;
}

.slide-enter-from {
  transform: translateX(-100%);
}

.slide-leave-to {
  transform: translateX(100%);
}
</style>
