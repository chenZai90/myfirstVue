<template>
  <header class="app-header">
    <div class="header-content">
      <!-- Logo和标题 -->
      <div class="header-left">
        <router-link to="/" class="logo-link">
          <img src="../../assets/logo.svg" alt="Vue Logo" class="logo" />
          <span class="title">Vue3 学习项目</span>
        </router-link>
      </div>
      
      <!-- 导航菜单 -->
      <nav class="header-nav">
        <router-link to="/" class="nav-link">首页</router-link>
        <a href="https://cn.vuejs.org/" target="_blank" class="nav-link">官方文档</a>
        <a href="https://github.com/vuejs/vue" target="_blank" class="nav-link">GitHub</a>
      </nav>
      
      <!-- 移动端菜单按钮 -->
      <button class="mobile-menu-btn" @click="toggleMobileMenu">
        <span class="hamburger"></span>
        <span class="hamburger"></span>
        <span class="hamburger"></span>
      </button>
      
      <!-- 移动端侧边栏切换按钮 -->
      <button class="sidebar-toggle-btn" @click="$emit('toggle-sidebar')">
        <span class="sidebar-icon">☰</span>
      </button>
    </div>
    
    <!-- 移动端菜单 -->
    <nav class="mobile-menu" :class="{ 'mobile-menu-open': isMobileMenuOpen }">
      <div class="mobile-menu-overlay" @click="closeMobileMenu"></div>
      <div class="mobile-menu-content">
        <div class="mobile-menu-header">
          <h3>导航菜单</h3>
          <button @click="closeMobileMenu" class="close-btn" aria-label="关闭菜单">
            <span>&times;</span>
          </button>
        </div>
        <ul class="mobile-nav-list">
          <li><router-link to="/" @click="closeMobileMenu" class="mobile-nav-link">🏠 首页</router-link></li>
          <li><router-link to="/basics" @click="closeMobileMenu" class="mobile-nav-link">📚 Vue基础</router-link></li>
          <li><router-link to="/components" @click="closeMobileMenu" class="mobile-nav-link">🧩 组件系统</router-link></li>
          <li><router-link to="/advanced" @click="closeMobileMenu" class="mobile-nav-link">⚡ 高级特性</router-link></li>
          <li><router-link to="/ecosystem" @click="closeMobileMenu" class="mobile-nav-link">🌐 生态系统</router-link></li>
          <li><router-link to="/practice" @click="closeMobileMenu" class="mobile-nav-link">🚀 实战项目</router-link></li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'

// 移动端菜单状态
const isMobileMenuOpen = ref(false)

// 切换移动端菜单
function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

// 关闭移动端菜单
function closeMobileMenu() {
  isMobileMenuOpen.value = false
}
</script>

<style scoped>
.app-header {
  background: linear-gradient(135deg, #4FC08D 0%, #42b883 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
}

.header-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

/* Logo区域 */
.header-left {
  display: flex;
  align-items: center;
}

.logo-link {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: white;
  transition: opacity 0.3s ease;
}

.logo-link:hover {
  opacity: 0.8;
}

.logo {
  width: 32px;
  height: 32px;
  margin-right: 0.5rem;
}

.title {
  font-size: 1.25rem;
  font-weight: bold;
}

/* 导航菜单 */
.header-nav {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: all 0.3s ease;
  padding: 0.5rem 1rem;
  border-radius: 6px;
}

.nav-link:hover {
  background-color: rgba(255, 255, 255, 0.1);
  transform: translateY(-1px);
}

.nav-link.router-link-active {
  background-color: rgba(255, 255, 255, 0.2);
}

/* 移动端菜单按钮 */
.mobile-menu-btn {
  display: none;
  flex-direction: column;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  margin-right: 0.5rem;
}

.hamburger {
  width: 20px;
  height: 2px;
  background-color: white;
  margin: 2px 0;
  transition: 0.3s;
}

/* 移动端侧边栏切换按钮 */
.sidebar-toggle-btn {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5rem;
  color: white;
  font-size: 1.2rem;
  transition: all 0.3s ease;
}

.sidebar-toggle-btn:hover {
  background-color: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
}

.sidebar-icon {
  display: block;
  line-height: 1;
}

/* 移动端菜单 */
.mobile-menu {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 1000;
  visibility: hidden;
  opacity: 0;
  transition: all 0.3s ease;
}

.mobile-menu-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.mobile-menu-content {
  position: absolute;
  top: 0;
  right: 0;
  width: 280px;
  height: 100%;
  background: white;
  box-shadow: -2px 0 20px rgba(0, 0, 0, 0.15);
  padding: 1rem;
  overflow-y: auto;
  transform: translateX(100%);
  transition: transform 0.3s ease;
}

.mobile-menu-open {
  visibility: visible;
  opacity: 1;
}

.mobile-menu-open .mobile-menu-content {
  transform: translateX(0);
}

.mobile-menu-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 1rem;
  border-bottom: 1px solid #e5e7eb;
  margin-bottom: 1rem;
}

.mobile-menu-header h3 {
  margin: 0;
  color: #333;
  font-size: 1.1rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  color: #666;
  padding: 0.25rem;
  border-radius: 4px;
  transition: background-color 0.2s;
}

.close-btn:hover {
  background-color: #f3f4f6;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 1rem 0;
}

.mobile-nav-list li {
  margin: 0.5rem 0;
}

.mobile-nav-link {
  display: flex;
  align-items: center;
  padding: 1rem;
  color: #333;
  text-decoration: none;
  border-radius: 12px;
  transition: all 0.2s ease;
  font-weight: 500;
  border: 1px solid transparent;
}

.mobile-nav-link:hover {
  background: linear-gradient(135deg, #f0f9ff 0%, #e0f2fe 100%);
  color: #0ea5e9;
  border-color: #0ea5e9;
  transform: translateX(4px);
}

.mobile-nav-link.router-link-active {
  background: linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%);
  color: white;
  box-shadow: 0 4px 12px rgba(14, 165, 233, 0.3);
}

/* 响应式设计 */
@media (max-width: 1024px) {
  .header-content {
    padding: 0 1.5rem;
  }
  
  .header-nav {
    gap: 1.5rem;
  }
  
  .nav-link {
    padding: 0.4rem 0.8rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 768px) {
  .header-content {
    padding: 0 1rem;
    height: 56px;
  }
  
  .header-nav {
    display: none;
  }
  
  .sidebar-toggle-btn {
    display: block;
    order: 1;
  }
  
  .mobile-menu-btn {
    display: flex;
    order: 2;
  }
  
  .mobile-menu {
    display: block;
  }
  
  .title {
    font-size: 1rem;
  }
  
  .logo {
    width: 30px;
    height: 30px;
  }
  
  .header-left {
    flex: 1;
  }
}

@media (max-width: 640px) {
  .header-content {
    padding: 0 0.75rem;
    height: 52px;
  }
  
  .title {
    font-size: 0.95rem;
  }
  
  .logo {
    width: 28px;
    height: 28px;
    margin-right: 0.4rem;
  }
  
  .mobile-menu-content {
    width: 85%;
    max-width: 320px;
  }
  
  .sidebar-toggle-btn,
  .mobile-menu-btn {
    padding: 0.4rem;
  }
}

@media (max-width: 480px) {
  .header-content {
    padding: 0 0.5rem;
    height: 48px;
  }
  
  .title {
    font-size: 0.9rem;
    display: none; /* 在极小屏幕上隐藏标题 */
  }
  
  .logo {
    width: 26px;
    height: 26px;
    margin-right: 0;
  }
  
  .mobile-menu-content {
    width: 100%;
    right: 0;
  }
  
  .mobile-nav-link {
    padding: 0.875rem;
    font-size: 0.9rem;
  }
  
  .sidebar-toggle-btn,
  .mobile-menu-btn {
    padding: 0.3rem;
    font-size: 1rem;
  }
  
  .hamburger {
    width: 18px;
    height: 1.5px;
  }
}

@media (max-width: 360px) {
  .header-content {
    padding: 0 0.25rem;
  }
  
  .mobile-menu-content {
    padding: 0.75rem;
  }
  
  .mobile-nav-link {
    padding: 0.75rem;
    font-size: 0.85rem;
  }
}
</style>