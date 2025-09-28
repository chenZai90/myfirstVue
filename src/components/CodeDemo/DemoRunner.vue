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
        <!-- 动态组件渲染区域 -->
        <component :is="demoComponent" v-if="demoComponent" />
        <!-- 插槽内容渲染区域 -->
        <slot v-else-if="$slots.default" />
        <!-- 无内容时的占位符 -->
        <div v-else class="demo-placeholder">
          <p>暂无演示内容</p>
        </div>
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
import { ref, computed, watch, nextTick } from 'vue'

// 组件属性
const props = defineProps({
  // 演示组件
  component: {
    type: Object,
    default: null
  },
  // 演示标题
  title: {
    type: String,
    default: ''
  },
  // 是否自动刷新
  autoRefresh: {
    type: Boolean,
    default: false
  }
})

// 响应式数据
const demoKey = ref(0) // 用于强制刷新组件
const error = ref('') // 错误信息

// 计算属性
const demoComponent = computed(() => {
  try {
    error.value = ''
    return props.component
  } catch (err) {
    error.value = err.message || '组件加载失败'
    return null
  }
})

// 刷新演示
function refreshDemo() {
  demoKey.value++
  error.value = ''
}

// 监听组件变化
watch(
  () => props.component,
  () => {
    if (props.autoRefresh) {
      refreshDemo()
    }
  },
  { deep: true }
)

// 错误处理
function handleError(err) {
  console.error('Demo运行错误:', err)
  error.value = err.message || '未知错误'
}

// 全局错误捕获
if (typeof window !== 'undefined') {
  window.addEventListener('error', (event) => {
    if (event.filename && event.filename.includes('demo')) {
      handleError(event.error)
    }
  })
  
  window.addEventListener('unhandledrejection', (event) => {
    handleError(event.reason)
  })
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
  /* 为演示内容提供隔离的样式环境 */
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

/* 错误信息样式 */
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

/* 演示内容的通用样式 */
.demo-container :deep(.demo-item) {
  margin-bottom: 1rem;
  padding: 1rem;
  border: 1px solid #e9ecef;
  border-radius: 6px;
  background: #f8f9fa;
}

.demo-container :deep(.demo-item:last-child) {
  margin-bottom: 0;
}

.demo-container :deep(.demo-title) {
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.demo-container :deep(.demo-description) {
  color: #6c757d;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.demo-container :deep(button) {
  background: #4FC08D;
  color: white;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
}

.demo-container :deep(button:hover) {
  background: #42b883;
}

.demo-container :deep(input),
.demo-container :deep(textarea),
.demo-container :deep(select) {
  border: 1px solid #ced4da;
  border-radius: 4px;
  padding: 0.5rem;
  margin: 0.25rem;
  font-size: 0.9rem;
}

.demo-container :deep(input:focus),
.demo-container :deep(textarea:focus),
.demo-container :deep(select:focus) {
  outline: none;
  border-color: #4FC08D;
  box-shadow: 0 0 0 2px rgba(79, 192, 141, 0.2);
}

/* 响应式设计 */
@media (max-width: 768px) {
  .demo-content {
    padding: 1rem;
  }
  
  .demo-header {
    padding: 0.5rem 1rem;
  }
  
  .demo-title {
    font-size: 0.8rem;
  }
}
</style>