<template>
  <aside class="app-sidebar">
    <div class="sidebar-content">
      <!-- 移动端关闭按钮 -->
      <div class="sidebar-header">
        <h2 class="sidebar-title">学习导航</h2>
        <button 
          class="close-sidebar-btn"
          @click="$emit('close-sidebar')"
          aria-label="关闭侧边栏"
        >
          <span>&times;</span>
        </button>
      </div>
      
      <!-- 学习进度 -->
      <div class="progress-section">
        <h3 class="section-title">学习进度</h3>
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progressPercentage + '%' }"></div>
        </div>
        <p class="progress-text">{{ completedModules }}/{{ totalModules }} 个模块</p>
      </div>
      
      <!-- 导航菜单 -->
      <nav class="sidebar-nav">
        <h3 class="section-title">学习模块</h3>
        <ul class="nav-list">
          <li v-for="item in navigationItems" :key="item.path" class="nav-item">
            <router-link 
              :to="item.path" 
              class="nav-link"
              :class="{ 'nav-link-active': $route.path === item.path }"
            >
              <span class="nav-icon">{{ item.icon }}</span>
              <span class="nav-text">{{ item.name }}</span>
              <span class="nav-badge" v-if="item.examples">{{ item.examples }}</span>
            </router-link>
          </li>
        </ul>
      </nav>
      
      <!-- 快速链接 -->
      <div class="quick-links">
        <h3 class="section-title">快速链接</h3>
        <div class="link-group">
          <a href="https://cn.vuejs.org/" target="_blank" class="quick-link">
            <span class="link-icon">📖</span>
            <span>官方文档</span>
          </a>
          <a href="https://cn.vuejs.org/tutorial/" target="_blank" class="quick-link">
            <span class="link-icon">🎯</span>
            <span>互动教程</span>
          </a>
          <a href="https://cn.vuejs.org/examples/" target="_blank" class="quick-link">
            <span class="link-icon">💡</span>
            <span>官方示例</span>
          </a>
        </div>
      </div>
    </div>
  </aside>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 定义事件发射
defineEmits(['close-sidebar'])

const route = useRoute()

// 导航菜单数据
const navigationItems = [
  { path: '/', name: '首页', icon: '🏠' },
  { path: '/basics', name: '响应式基础', icon: '🔄', examples: 4 },
  { path: '/computed', name: '计算属性', icon: '⚡', examples: 3 },
  { path: '/watchers', name: '侦听器', icon: '👁️', examples: 4 },
  { path: '/conditional', name: '条件渲染', icon: '🔀', examples: 3 },
  { path: '/list', name: '列表渲染', icon: '📋', examples: 4 },
  { path: '/events', name: '事件处理', icon: '🖱️', examples: 5 },
  { path: '/forms', name: '表单绑定', icon: '📝', examples: 4 },
  { path: '/components', name: '组件基础', icon: '🧩', examples: 4 },
  { path: '/lifecycle', name: '生命周期', icon: '🔄', examples: 3 },
  { path: '/template', name: '模板语法', icon: '📄', examples: 4 }
]

// 计算学习进度
const totalModules = computed(() => navigationItems.length - 1) // 减去首页
const completedModules = computed(() => {
  // 这里可以根据实际访问情况来计算，暂时返回固定值
  return 0
})
const progressPercentage = computed(() => {
  return totalModules.value > 0 ? (completedModules.value / totalModules.value) * 100 : 0
})
</script>

<style scoped>
.app-sidebar {
  width: 250px;
  background: white;
  border-right: 1px solid #e9ecef;
  position: fixed;
  left: 0;
  top: 60px; /* header高度 */
  height: calc(100vh - 60px);
  overflow-y: auto;
  z-index: 100;
  box-shadow: 2px 0 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.sidebar-header {
  display: none;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #e2e8f0;
  background: white;
}

.sidebar-title {
  margin: 0;
  font-size: 1.1rem;
  color: #1e293b;
  font-weight: 600;
}

.close-sidebar-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #64748b;
  padding: 0.25rem;
  border-radius: 4px;
  transition: all 0.2s ease;
  width: 32px;
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.close-sidebar-btn:hover {
  background-color: #f1f5f9;
  color: #334155;
}

.sidebar-content {
  padding: 1.5rem;
}

/* 学习进度 */
.progress-section {
  margin-bottom: 2rem;
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.section-title {
  font-size: 0.9rem;
  font-weight: bold;
  color: #2c3e50;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
}

.progress-bar {
  width: 100%;
  height: 6px;
  background: #e9ecef;
  border-radius: 3px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, #4FC08D, #42b883);
  transition: width 0.3s ease;
}

.progress-text {
  font-size: 0.8rem;
  color: #666;
  text-align: center;
  margin: 0;
}

/* 导航菜单 */
.sidebar-nav {
  margin-bottom: 2rem;
}

.nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.nav-item {
  margin-bottom: 0.25rem;
}

.nav-link {
  display: flex;
  align-items: center;
  padding: 0.75rem 1rem;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 0.9rem;
}

.nav-link:hover {
  background-color: #f8f9fa;
  color: #4FC08D;
  transform: translateX(4px);
}

.nav-link-active {
  background: linear-gradient(135deg, #4FC08D, #42b883);
  color: white;
  box-shadow: 0 2px 4px rgba(79, 192, 141, 0.3);
}

.nav-link-active:hover {
  transform: translateX(0);
  background: linear-gradient(135deg, #42b883, #369870);
}

.nav-icon {
  margin-right: 0.75rem;
  font-size: 1rem;
}

.nav-text {
  flex: 1;
}

.nav-badge {
  background: rgba(79, 192, 141, 0.1);
  color: #4FC08D;
  font-size: 0.7rem;
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  font-weight: bold;
}

.nav-link-active .nav-badge {
  background: rgba(255, 255, 255, 0.2);
  color: white;
}

/* 快速链接 */
.quick-links {
  padding: 1rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.link-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.quick-link {
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  text-decoration: none;
  color: #2c3e50;
  border-radius: 6px;
  transition: all 0.3s ease;
  font-size: 0.85rem;
}

.quick-link:hover {
  background-color: white;
  color: #4FC08D;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.link-icon {
  margin-right: 0.5rem;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .sidebar-content {
    padding: 1.25rem;
  }
  
  .nav-link {
    padding: 0.7rem 0.9rem;
    font-size: 0.88rem;
  }
}

@media (max-width: 768px) {
  .app-sidebar {
    transform: translateX(-100%);
    transition: transform 0.3s ease;
    z-index: 200;
    box-shadow: none;
    width: 280px;
    max-width: 85vw;
  }
  
  .app-sidebar.sidebar-open {
    transform: translateX(0);
    box-shadow: 2px 0 20px rgba(0, 0, 0, 0.15);
  }
  
  .sidebar-header {
    display: flex;
    padding: 1rem 1.25rem;
    border-bottom: 1px solid #e5e7eb;
  }
  
  .sidebar-content {
    padding: 1rem;
  }
  
  .section-title {
    font-size: 0.85rem;
    margin-bottom: 0.75rem;
  }
  
  .nav-link {
    padding: 0.65rem 0.85rem;
    font-size: 0.85rem;
  }
  
  .quick-link {
    padding: 0.45rem 0.65rem;
    font-size: 0.8rem;
  }
  
  .progress-section,
  .sidebar-nav,
  .quick-links {
    margin-bottom: 1.5rem;
  }
}

@media (max-width: 640px) {
  .app-sidebar {
    width: 300px;
    max-width: 90vw;
  }
  
  .sidebar-header {
    padding: 0.875rem 1rem;
  }
  
  .sidebar-title {
    font-size: 1.05rem;
  }
  
  .sidebar-content {
    padding: 0.875rem;
  }
  
  .nav-link {
    padding: 0.6rem 0.8rem;
    font-size: 0.84rem;
  }
  
  .quick-link {
    padding: 0.4rem 0.6rem;
    font-size: 0.78rem;
  }
}

@media (max-width: 480px) {
  .app-sidebar {
    width: 100%;
    max-width: 100vw;
  }
  
  .sidebar-header {
    padding: 0.75rem 0.875rem;
  }
  
  .sidebar-title {
    font-size: 1rem;
  }
  
  .sidebar-content {
    padding: 0.75rem;
  }
  
  .section-title {
    font-size: 0.8rem;
    margin-bottom: 0.5rem;
  }
  
  .progress-section,
  .quick-links {
    padding: 0.75rem;
    margin-bottom: 1.25rem;
  }
  
  .nav-link {
    padding: 0.75rem 0.875rem;
    font-size: 0.9rem;
  }
  
  .quick-link {
    padding: 0.6rem 0.75rem;
    font-size: 0.85rem;
  }
  
  .nav-icon {
    margin-right: 0.6rem;
    font-size: 0.95rem;
  }
  
  .link-icon {
    margin-right: 0.4rem;
  }
}

@media (max-width: 360px) {
  .sidebar-header {
    padding: 0.625rem 0.75rem;
  }
  
  .sidebar-content {
    padding: 0.625rem;
  }
  
  .nav-link {
    padding: 0.65rem 0.75rem;
    font-size: 0.85rem;
  }
  
  .quick-link {
    padding: 0.5rem 0.625rem;
    font-size: 0.8rem;
  }
}

/* 滚动条样式 */
.app-sidebar::-webkit-scrollbar {
  width: 4px;
}

.app-sidebar::-webkit-scrollbar-track {
  background: #f1f1f1;
}

.app-sidebar::-webkit-scrollbar-thumb {
  background: #c1c1c1;
  border-radius: 2px;
}

.app-sidebar::-webkit-scrollbar-thumb:hover {
  background: #a8a8a8;
}
</style>