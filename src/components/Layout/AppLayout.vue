<template>
  <div class="app-layout">
    <!-- 顶部导航栏 -->
    <AppHeader @toggle-sidebar="toggleSidebar" />
    
    <!-- 移动端遮罩层 -->
    <div 
      class="sidebar-overlay" 
      :class="{ 'overlay-active': isSidebarOpen }"
      @click="closeSidebar"
    ></div>
    
    <!-- 主要内容区域 -->
    <div class="main-container">
      <!-- 侧边栏导航 -->
      <AppSidebar 
        :class="{ 'sidebar-open': isSidebarOpen }"
        @close-sidebar="closeSidebar"
      />
      
      <!-- 内容区域 -->
      <main class="content-area" :class="{ 'content-shifted': isSidebarOpen }">
        <router-view />
      </main>
    </div>
    
    <!-- 返回顶部按钮 -->
    <BackToTop />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import AppHeader from './AppHeader.vue'
import AppSidebar from './AppSidebar.vue'
import BackToTop from '../Common/BackToTop.vue'

// 侧边栏状态管理
const isSidebarOpen = ref(false)

// 切换侧边栏
function toggleSidebar() {
  isSidebarOpen.value = !isSidebarOpen.value
}

// 关闭侧边栏
function closeSidebar() {
  isSidebarOpen.value = false
}

// 监听窗口大小变化，大屏幕时自动关闭移动端侧边栏
function handleResize() {
  if (window.innerWidth > 768) {
    isSidebarOpen.value = false
  }
}

// 监听键盘事件，ESC键关闭侧边栏
function handleKeydown(event) {
  if (event.key === 'Escape' && isSidebarOpen.value) {
    closeSidebar()
  }
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('resize', handleResize)
  window.removeEventListener('keydown', handleKeydown)
})
</script>

<style scoped>
.app-layout {
  min-height: 100vh;
  background-color: #f8f9fa;
}

.main-container {
  display: flex;
  min-height: calc(100vh - 60px); /* 减去header高度 */
  position: relative;
}

.content-area {
  flex: 1;
  padding: 2rem;
  margin-left: 250px; /* 侧边栏宽度 */
  transition: all 0.3s ease;
  min-height: calc(100vh - 60px);
  overflow-x: auto;
  width: calc(100% - 250px);
  max-width: 100%;
}

/* 移动端遮罩层 */
.sidebar-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 150;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.overlay-active {
  opacity: 1;
  visibility: visible;
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .content-area {
    padding: 1.5rem;
  }
}

@media (max-width: 768px) {
  .main-container {
    min-height: calc(100vh - 56px); /* 调整header高度 */
  }
  
  .content-area {
    margin-left: 0;
    padding: 1rem;
    width: 100%;
    min-height: calc(100vh - 56px);
  }
  
  .content-shifted {
    transform: translateX(0);
  }
}

@media (max-width: 640px) {
  .main-container {
    min-height: calc(100vh - 52px);
  }
  
  .content-area {
    padding: 0.75rem;
    min-height: calc(100vh - 52px);
  }
}

@media (max-width: 480px) {
  .main-container {
    min-height: calc(100vh - 48px);
  }
  
  .content-area {
    padding: 0.5rem;
    min-height: calc(100vh - 48px);
  }
}

@media (max-width: 360px) {
  .content-area {
    padding: 0.25rem;
  }
}

@media (min-width: 769px) {
  .sidebar-overlay {
    display: none;
  }
  
  .content-area {
    margin-left: 250px;
    width: calc(100% - 250px);
  }
}
</style>