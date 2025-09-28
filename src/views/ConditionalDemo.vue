<template>
  <div class="conditional-demo">
    <div class="page-header">
      <h1>🔀 条件渲染</h1>
      <p class="page-description">Vue.js 提供了强大的条件渲染指令，让你可以根据数据状态动态显示或隐藏内容。</p>
    </div>

    <!-- 基础条件渲染 -->
    <section class="demo-section">
      <h2>🎯 基础条件渲染</h2>
      
      <div class="demo-container">
        <div class="demo-item">
          <h3>v-if / v-else-if / v-else</h3>
          <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">
            <div style="margin: 1rem 0;">
              <button @click="showUserSection = !showUserSection" style="padding: 0.5rem 1rem; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 1rem;">切换用户区域</button>
              <button @click="showProductSection = !showProductSection" style="padding: 0.5rem 1rem; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">切换产品区域</button>
            </div>
            
            <div v-if="showUserSection" style="padding: 1rem; background: #e3f2fd; border-radius: 4px; margin: 1rem 0;">
              <h4>👤 用户信息</h4>
              <p>用户名: {{ user.name }}</p>
              <p>邮箱: {{ user.email }}</p>
            </div>
            
            <div v-else-if="showProductSection" style="padding: 1rem; background: #e8f5e8; border-radius: 4px; margin: 1rem 0;">
              <h4>📦 产品信息</h4>
              <ul>
                <li v-for="product in products" :key="product.id">{{ product.name }}</li>
              </ul>
            </div>
            
            <div v-else style="padding: 1rem; background: #fff3e0; border-radius: 4px; margin: 1rem 0;">
              <h4>📋 默认内容</h4>
              <p>没有选择任何区域时显示的默认内容</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- v-show 对比 -->
    <section class="demo-section">
      <h2>👁️ v-show 对比</h2>
      
      <div class="demo-container">
        <div class="demo-item">
          <h3>v-if vs v-show</h3>
          <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">
            <div style="margin: 1rem 0;">
              <button @click="toggleVisibility" style="padding: 0.5rem 1rem; background: #9c27b0; color: white; border: none; border-radius: 4px; cursor: pointer;">切换显示状态</button>
              <span style="margin-left: 1rem; font-weight: bold;">当前状态: {{ isVisible ? '显示' : '隐藏' }}</span>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
              <div style="padding: 1rem; border: 1px solid #2196f3; border-radius: 4px;">
                <h4>使用 v-if</h4>
                <div v-if="isVisible" style="padding: 0.5rem; background: #e3f2fd; border-radius: 4px;">
                  这个元素使用 v-if，会被完全移除/添加到DOM
                </div>
                <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">v-if 会完全移除或添加DOM元素</p>
              </div>
              
              <div style="padding: 1rem; border: 1px solid #4caf50; border-radius: 4px;">
                <h4>使用 v-show</h4>
                <div v-show="isVisible" style="padding: 0.5rem; background: #e8f5e8; border-radius: 4px;">
                  这个元素使用 v-show，只是切换CSS display属性
                </div>
                <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">v-show 只是切换CSS的display属性</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 复杂条件 -->
    <section class="demo-section">
      <h2>🔧 复杂条件渲染</h2>
      
      <div class="demo-container">
        <div class="demo-item">
          <h3>基于用户角色的条件渲染</h3>
          <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">
            <div style="margin: 1rem 0;">
              <button @click="toggleUserRole" style="padding: 0.5rem 1rem; background: #ff9800; color: white; border: none; border-radius: 4px; cursor: pointer;">切换用户角色</button>
              <span style="margin-left: 1rem; font-weight: bold;">当前角色: {{ user.isAdmin ? '管理员' : '普通用户' }}</span>
            </div>
            
            <div v-if="user.isAdmin" style="padding: 1rem; background: #ffebee; border: 1px solid #f44336; border-radius: 4px; margin: 1rem 0;">
              <h4>🔑 管理员功能</h4>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin: 1rem 0;">
                <button style="padding: 0.5rem; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">用户管理</button>
                <button style="padding: 0.5rem; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">系统设置</button>
                <button style="padding: 0.5rem; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">数据分析</button>
                <button style="padding: 0.5rem; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer;">日志查看</button>
              </div>
            </div>
            
            <div v-else style="padding: 1rem; background: #e8f5e8; border: 1px solid #4caf50; border-radius: 4px; margin: 1rem 0;">
              <h4>👤 普通用户功能</h4>
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 0.5rem; margin: 1rem 0;">
                <button style="padding: 0.5rem; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">查看资料</button>
                <button style="padding: 0.5rem; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">修改密码</button>
                <button style="padding: 0.5rem; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">个人设置</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const showUserSection = ref(true)
const showProductSection = ref(false)
const isVisible = ref(true)

const user = reactive({
  name: '张三',
  email: 'zhangsan@example.com',
  isAdmin: true
})

const products = ref([
  { id: 1, name: '产品A' },
  { id: 2, name: '产品B' },
  { id: 3, name: '产品C' }
])

function toggleVisibility() {
  isVisible.value = !isVisible.value
}

function toggleUserRole() {
  user.isAdmin = !user.isAdmin
}
</script>

<style scoped>
.conditional-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
}

.page-header h1 {
  font-size: 2.5rem;
  color: #2c3e50;
  margin-bottom: 1rem;
}

.page-description {
  font-size: 1.1rem;
  color: #666;
  max-width: 600px;
  margin: 0 auto;
}

.demo-section {
  margin-bottom: 4rem;
}

.demo-section h2 {
  font-size: 1.8rem;
  color: #34495e;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 2px solid #3498db;
}

.demo-container {
  margin: 2rem 0;
}

.demo-item {
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.demo-item h3 {
  margin-top: 0;
  color: #2c3e50;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

@media (max-width: 768px) {
  .conditional-demo {
    padding: 1rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .demo-section h2 {
    font-size: 1.5rem;
  }
}
</style>