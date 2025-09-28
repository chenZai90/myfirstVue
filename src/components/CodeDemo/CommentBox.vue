<template>
  <div class="comment-box" :class="{ 'is-expanded': isExpanded }">
    <!-- 注释头部 -->
    <div class="comment-header" @click="toggleExpanded">
      <div class="comment-title">
        <span class="comment-icon">💡</span>
        <span>{{ title || '详细说明' }}</span>
      </div>
      <button class="expand-btn" :class="{ 'is-expanded': isExpanded }">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <polyline points="6,9 12,15 18,9"/>
        </svg>
      </button>
    </div>
    
    <!-- 注释内容 -->
    <transition name="slide-down">
      <div v-show="isExpanded" class="comment-content">
        <!-- 主要说明 -->
        <div v-if="description" class="comment-description">
          <h4>📖 概述</h4>
          <p v-html="formatText(description)"></p>
        </div>
        
        <!-- 关键概念 -->
        <div v-if="concepts && concepts.length" class="comment-concepts">
          <h4>🔑 关键概念</h4>
          <ul>
            <li v-for="(concept, index) in concepts" :key="index">
              <strong>{{ concept.name }}:</strong>
              <span v-html="formatText(concept.description)"></span>
            </li>
          </ul>
        </div>
        
        <!-- 代码解释 -->
        <div v-if="codeExplanation && codeExplanation.length" class="comment-code-explanation">
          <h4>🔍 代码解释</h4>
          <div v-for="(explanation, index) in codeExplanation" :key="index" class="explanation-item">
            <div class="explanation-code">
              <code>{{ explanation.code }}</code>
            </div>
            <div class="explanation-text">
              {{ explanation.explanation }}
            </div>
          </div>
        </div>
        
        <!-- 注意事项 -->
        <div v-if="notes && notes.length" class="comment-notes">
          <h4>⚠️ 注意事项</h4>
          <ul>
            <li v-for="(note, index) in notes" :key="index" v-html="formatText(note)"></li>
          </ul>
        </div>
        
        <!-- 相关链接 -->
        <div v-if="links && links.length" class="comment-links">
          <h4>🔗 相关链接</h4>
          <ul>
            <li v-for="(link, index) in links" :key="index">
              <a :href="link.url" target="_blank" rel="noopener noreferrer">
                {{ link.title }}
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                  <polyline points="15,3 21,3 21,9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </li>
          </ul>
        </div>
        
        <!-- 自定义内容插槽 -->
        <div v-if="$slots.default" class="comment-custom">
          <slot></slot>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 组件属性
const props = defineProps({
  // 标题
  title: {
    type: String,
    default: ''
  },
  // 主要描述
  description: {
    type: String,
    default: ''
  },
  // 关键概念列表
  concepts: {
    type: Array,
    default: () => []
    // 格式: [{ name: '概念名', description: '概念描述' }]
  },
  // 代码解释列表
  codeExplanation: {
    type: Array,
    default: () => []
    // 格式: [{ code: '代码片段', explanation: '解释说明' }]
  },
  // 注意事项
  notes: {
    type: Array,
    default: () => []
  },
  // 相关链接
  links: {
    type: Array,
    default: () => []
    // 格式: [{ title: '链接标题', url: '链接地址' }]
  },
  // 默认是否展开
  defaultExpanded: {
    type: Boolean,
    default: true
  }
})

// 响应式数据
const isExpanded = ref(props.defaultExpanded)

// 切换展开状态
function toggleExpanded() {
  isExpanded.value = !isExpanded.value
}

// 格式化文本（支持简单的HTML标记）
function formatText(text) {
  if (!text) return ''
  
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') // **粗体**
    .replace(/\*(.*?)\*/g, '<em>$1</em>') // *斜体*
    .replace(/`(.*?)`/g, '<code>$1</code>') // `代码`
    .replace(/\n/g, '<br>') // 换行
}
</script>

<style scoped>
.comment-box {
  background: #f8f9fa;
  border: 1px solid #e9ecef;
  border-radius: 8px;
  margin: 1rem 0;
  overflow: hidden;
  transition: all 0.3s ease;
}

.comment-box.is-expanded {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.comment-header {
  padding: 1rem;
  background: #e9ecef;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: background-color 0.3s ease;
  user-select: none;
}

.comment-header:hover {
  background: #dee2e6;
}

.comment-title {
  display: flex;
  align-items: center;
  color: #2c3e50;
  font-weight: 600;
  font-size: 1rem;
}

.comment-icon {
  margin-right: 0.5rem;
  font-size: 1.1rem;
}

.expand-btn {
  background: transparent;
  border: none;
  color: #6c757d;
  cursor: pointer;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.expand-btn:hover {
  background: rgba(108, 117, 125, 0.1);
  color: #495057;
}

.expand-btn.is-expanded {
  transform: rotate(180deg);
}

.comment-content {
  padding: 1.5rem;
  background: white;
}

.comment-content h4 {
  color: #2c3e50;
  font-size: 1rem;
  font-weight: 600;
  margin: 0 0 0.75rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.comment-description {
  margin-bottom: 1.5rem;
}

.comment-description p {
  color: #495057;
  line-height: 1.6;
  margin: 0;
}

.comment-concepts,
.comment-notes,
.comment-links {
  margin-bottom: 1.5rem;
}

.comment-concepts ul,
.comment-notes ul,
.comment-links ul {
  margin: 0;
  padding-left: 1.5rem;
}

.comment-concepts li,
.comment-notes li {
  margin-bottom: 0.5rem;
  color: #495057;
  line-height: 1.5;
}

.comment-concepts strong {
  color: #2c3e50;
}

.comment-code-explanation {
  margin-bottom: 1.5rem;
}

.explanation-item {
  margin-bottom: 1rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 6px;
  border-left: 4px solid #4FC08D;
}

.explanation-code {
  margin-bottom: 0.5rem;
}

.explanation-code code {
  background: #e9ecef;
  color: #2c3e50;
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.9rem;
}

.explanation-text {
  color: #495057;
  line-height: 1.5;
}

.comment-links li {
  margin-bottom: 0.25rem;
}

.comment-links a {
  color: #4FC08D;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  transition: color 0.3s ease;
}

.comment-links a:hover {
  color: #42b883;
  text-decoration: underline;
}

.comment-links svg {
  opacity: 0.7;
}

.comment-custom {
  margin-top: 1rem;
}

/* 过渡动画 */
.slide-down-enter-active,
.slide-down-leave-active {
  transition: all 0.3s ease;
  overflow: hidden;
}

.slide-down-enter-from,
.slide-down-leave-to {
  max-height: 0;
  opacity: 0;
  padding-top: 0;
  padding-bottom: 0;
}

.slide-down-enter-to,
.slide-down-leave-from {
  max-height: 1000px;
  opacity: 1;
}

/* 内联代码样式 */
:deep(code) {
  background: #e9ecef;
  color: #2c3e50;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: 'Monaco', 'Consolas', monospace;
  font-size: 0.85em;
}

:deep(strong) {
  color: #2c3e50;
  font-weight: 600;
}

:deep(em) {
  color: #6c757d;
  font-style: italic;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .comment-header {
    padding: 0.75rem;
  }
  
  .comment-content {
    padding: 1rem;
  }
  
  .comment-title {
    font-size: 0.9rem;
  }
  
  .comment-content h4 {
    font-size: 0.9rem;
  }
}
</style>