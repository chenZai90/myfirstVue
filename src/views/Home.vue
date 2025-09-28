<template>
  <div class="home">
    <!-- 项目介绍区域 -->
    <div class="hero-section">
      <div class="hero-content">
        <img src="../assets/logo.svg" alt="Vue Logo" class="vue-logo" />
        <h1 class="project-title">Vue3 学习项目</h1>
        <p class="project-description">
          基于Vue3官方文档的系统性学习平台，通过实际代码示例掌握Vue3的核心概念和语法。
          每个示例都包含详细的中文注释和说明，帮助初学者快速上手Vue3开发。
        </p>
      </div>
    </div>

    <!-- 学习模块导航 -->
    <div class="modules-section">
      <h2 class="section-title">学习模块</h2>
      <div class="modules-grid">
        <router-link 
          v-for="module in learningModules" 
          :key="module.path"
          :to="module.path"
          class="module-card"
        >
          <div class="module-icon">{{ module.icon }}</div>
          <h3 class="module-title">{{ module.title }}</h3>
          <p class="module-description">{{ module.description }}</p>
          <div class="module-examples">{{ module.examples }}个示例</div>
        </router-link>
      </div>
    </div>

    <!-- 学习建议 -->
    <div class="tips-section">
      <h2 class="section-title">学习建议</h2>
      <div class="tips-grid">
        <div class="tip-card">
          <div class="tip-number">1</div>
          <h3>按顺序学习</h3>
          <p>建议按照模块顺序学习，每个概念都有前后依赖关系</p>
        </div>
        <div class="tip-card">
          <div class="tip-number">2</div>
          <h3>动手实践</h3>
          <p>每个示例都可以直接运行，建议修改代码观察效果变化</p>
        </div>
        <div class="tip-card">
          <div class="tip-number">3</div>
          <h3>理解注释</h3>
          <p>仔细阅读代码中的中文注释，理解每个概念的核心要点</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// 学习模块数据
const learningModules = [
  {
    path: '/basics',
    title: '响应式基础',
    description: 'Vue3的响应式系统，ref和reactive的使用',
    icon: '🔄',
    examples: 4
  },
  {
    path: '/computed',
    title: '计算属性',
    description: '计算属性的定义、缓存机制和可写计算属性',
    icon: '⚡',
    examples: 3
  },
  {
    path: '/watchers',
    title: '侦听器',
    description: 'watch和watchEffect的使用方法',
    icon: '👁️',
    examples: 4
  },
  {
    path: '/conditional',
    title: '条件渲染',
    description: 'v-if、v-else、v-show的使用和性能对比',
    icon: '🔀',
    examples: 3
  },
  {
    path: '/list',
    title: '列表渲染',
    description: 'v-for遍历数组、对象，key的重要性',
    icon: '📋',
    examples: 4
  },
  {
    path: '/events',
    title: '事件处理',
    description: 'v-on事件绑定和各种事件修饰符',
    icon: '🖱️',
    examples: 5
  },
  {
    path: '/forms',
    title: '表单绑定',
    description: 'v-model在各种表单元素上的使用',
    icon: '📝',
    examples: 4
  },
  {
    path: '/components',
    title: '组件基础',
    description: '组件定义、props、emit和插槽的使用',
    icon: '🧩',
    examples: 4
  },
  {
    path: '/lifecycle',
    title: '生命周期',
    description: 'Vue3组合式API的生命周期钩子',
    icon: '🔄',
    examples: 3
  },
  {
    path: '/template',
    title: '模板语法',
    description: '插值语法、指令系统的完整用法',
    icon: '📄',
    examples: 4
  }
]
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

/* 英雄区域样式 */
.hero-section {
  text-align: center;
  padding: 4rem 0;
  background: linear-gradient(135deg, #4FC08D 0%, #42b883 100%);
  border-radius: 16px;
  margin-bottom: 4rem;
  color: white;
}

.hero-content {
  max-width: 600px;
  margin: 0 auto;
}

.vue-logo {
  width: 80px;
  height: 80px;
  margin-bottom: 1rem;
}

.project-title {
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
}

.project-description {
  font-size: 1.2rem;
  line-height: 1.6;
  opacity: 0.9;
}

/* 模块网格样式 */
.section-title {
  font-size: 2rem;
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
}

.modules-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  margin-bottom: 4rem;
}

.module-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-decoration: none;
  color: inherit;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: 2px solid transparent;
}

.module-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
  border-color: #4FC08D;
}

.module-icon {
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.module-title {
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 0.5rem;
  color: #2c3e50;
}

.module-description {
  color: #666;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.module-examples {
  color: #4FC08D;
  font-weight: bold;
  font-size: 0.9rem;
}

/* 学习建议样式 */
.tips-section {
  background: #f8f9fa;
  border-radius: 16px;
  padding: 3rem;
}

.tips-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.tip-card {
  background: white;
  border-radius: 12px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.tip-number {
  width: 40px;
  height: 40px;
  background: #4FC08D;
  color: white;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.2rem;
  margin: 0 auto 1rem;
}

.tip-card h3 {
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.tip-card p {
  color: #666;
  line-height: 1.5;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .home {
    padding: 1rem;
  }
  
  .project-title {
    font-size: 2rem;
  }
  
  .modules-grid {
    grid-template-columns: 1fr;
  }
  
  .tips-grid {
    grid-template-columns: 1fr;
  }
}
</style>