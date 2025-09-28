<template>
  <div class="demo-runner">
    <!-- 演示区域头部 -->
    <div class="demo-header">
      <div class="demo-title">
        <span class="demo-icon">🎯</span>
        <span>{{ title || '运行效果' }}</span>
      </div>
      <div class="demo-controls">
        <button class="control-btn" @click="refreshDemo" title="刷新演示">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="23,4 23,10 17,10"/>
            <polyline points="1,20 1,14 7,14"/>
            <path d="M20.49,9A9,9,0,0,0,5.64,5.64L1,10m22,4L18.36,18.36A9,9,0,0,1,3.51,15"/>
          </svg>
        </button>
      </div>
    </div>
    
    <!-- 演示内容区域 -->
    <div class="demo-content" :key="demoKey">
      <div class="demo-container">
        <!-- 插槽内容渲染区域 -->
        <slot>
          <div class="demo-placeholder">
            <p>暂无演示内容</p>
          </div>
        </slot>
      </div>
    </div>
    
    <!-- 错误信息显示 -->
    <div v-if="error" class="demo-error">
      <div class="error-header">
        <span class="error-icon">⚠️</span>
        <span>运行错误</span>
      </div>
      <pre class="error-message">{{ error }}</pre>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 组件属性
const props = defineProps({
  // 演示标题
  title: {
    type: String,
    default: ''
  }
})

// 响应式数据
const demoKey = ref(0) // 用于强制刷新组件
const error = ref('') // 错误信息

// 刷新演示
function refreshDemo() {
  demoKey.value++
  error.value = ''
}
</script>

<style scoped>
.demo-runner {
  background: white;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  overflow: hidden;
  margin: 1rem 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.demo-header {
  background: #f8f9fa;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
}

.demo-title {
  display: flex;
  align-items: center;
  color: #2c3e50;
  font-size: 0.9rem;
  font-weight: 500;
}

.demo-icon {
  margin-right: 0.5rem;
}

.demo-controls {
  display: flex;
  gap: 0.5rem;
}

.control-btn {
  background: transparent;
  border: 1px solid #dee2e6;
  color: #6c757d;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.control-btn:hover {
  background: #e9ecef;
  color: #495057;
  border-color: #adb5bd;
}

.control-btn:active {
  transform: scale(0.95);
}

.demo-content {
  padding: 1.5rem;
  min-height: 100px;
  background: white;
}

.demo-container {
  position: relative;
}

.demo-placeholder {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  color: #6c757d;
  font-style: italic;
}

.demo-placeholder p {
  margin: 0;
}

.demo-error {
  background: #f8d7da;
  border-top: 1px solid #f5c6cb;
  padding: 1rem;
}

.error-header {
  display: flex;
  align-items: center;
  color: #721c24;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.error-icon {
  margin-right: 0.5rem;
}

.error-message {
  background: #f5c6cb;
  color: #721c24;
  padding: 0.75rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.8rem;
  margin: 0;
  white-space: pre-wrap;
  word-break: break-word;
}
</style>