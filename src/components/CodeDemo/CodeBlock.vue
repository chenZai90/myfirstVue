<template>
  <div class="code-block">
    <!-- 代码块头部 -->
    <div class="code-header">
      <div class="code-title">
        <span class="file-icon">📄</span>
        <span>{{ title || 'Vue 示例代码' }}</span>
      </div>
      <button class="copy-btn" @click="copyCode" :title="copyButtonText">
        <svg v-if="!copied" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2"/>
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>
        </svg>
        <svg v-else width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="20,6 9,17 4,12"/>
        </svg>
      </button>
    </div>
    
    <!-- 代码内容 -->
    <div class="code-content">
      <pre><code ref="codeElement" :class="`language-${language}`" v-html="highlightedCode"></code></pre>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, nextTick } from 'vue'
import Prism from 'prismjs'
import 'prismjs/themes/prism-tomorrow.css'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-css'

// 组件属性
const props = defineProps({
  code: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: 'javascript'
  },
  title: {
    type: String,
    default: ''
  }
})

// 响应式数据
const copied = ref(false)
const codeElement = ref(null)

// 计算属性
const highlightedCode = computed(() => {
  try {
    // 使用Prism.js进行语法高亮
    return Prism.highlight(props.code, Prism.languages[props.language] || Prism.languages.javascript, props.language)
  } catch (error) {
    console.warn('代码高亮失败:', error)
    return props.code
  }
})

const copyButtonText = computed(() => {
  return copied.value ? '已复制!' : '复制代码'
})

// 复制代码功能
async function copyCode() {
  try {
    await navigator.clipboard.writeText(props.code)
    copied.value = true
    
    // 2秒后重置复制状态
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (error) {
    console.error('复制失败:', error)
    // 降级方案：使用传统的复制方法
    fallbackCopyTextToClipboard(props.code)
  }
}

// 降级复制方案
function fallbackCopyTextToClipboard(text) {
  const textArea = document.createElement('textarea')
  textArea.value = text
  textArea.style.position = 'fixed'
  textArea.style.left = '-999999px'
  textArea.style.top = '-999999px'
  document.body.appendChild(textArea)
  textArea.focus()
  textArea.select()
  
  try {
    document.execCommand('copy')
    copied.value = true
    setTimeout(() => {
      copied.value = false
    }, 2000)
  } catch (err) {
    console.error('降级复制也失败了:', err)
  }
  
  document.body.removeChild(textArea)
}

// 组件挂载后重新高亮代码
onMounted(() => {
  nextTick(() => {
    if (codeElement.value) {
      Prism.highlightElement(codeElement.value)
    }
  })
})
</script>

<style scoped>
.code-block {
  background: #2d3748;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
}

.code-header {
  background: #1a202c;
  padding: 0.75rem 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #4a5568;
}

.code-title {
  display: flex;
  align-items: center;
  color: #e2e8f0;
  font-size: 0.9rem;
  font-weight: 500;
}

.file-icon {
  margin-right: 0.5rem;
}

.copy-btn {
  background: transparent;
  border: 1px solid #4a5568;
  color: #a0aec0;
  padding: 0.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.copy-btn:hover {
  background: #4a5568;
  color: #e2e8f0;
  border-color: #718096;
}

.copy-btn:active {
  transform: scale(0.95);
}

.code-content {
  overflow-x: auto;
}

.code-content pre {
  margin: 0;
  padding: 1.5rem;
  background: transparent;
  font-family: 'Fira Code', 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}

.code-content code {
  background: transparent;
  color: #e2e8f0;
  font-family: inherit;
}

/* 滚动条样式 */
.code-content::-webkit-scrollbar {
  height: 8px;
}

.code-content::-webkit-scrollbar-track {
  background: #1a202c;
}

.code-content::-webkit-scrollbar-thumb {
  background: #4a5568;
  border-radius: 4px;
}

.code-content::-webkit-scrollbar-thumb:hover {
  background: #718096;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .code-content pre {
    padding: 1rem;
    font-size: 0.8rem;
  }
  
  .code-header {
    padding: 0.5rem 1rem;
  }
  
  .code-title {
    font-size: 0.8rem;
  }
}
</style>