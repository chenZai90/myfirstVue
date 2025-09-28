<template>
  <div class="test-demo">
    <h1>Demo Title 测试页面</h1>
    
    <section class="demo-section">
      <h2>使用SimpleDemoRunner测试</h2>
      <SimpleDemoRunner title="测试标题 - 这应该显示在demo-title中">
        <div style="padding: 1rem; background: #f0f8ff; border-radius: 4px;">
          <h3>测试内容</h3>
          <p>这是一个简单的测试内容，用于验证demo-title是否正常显示。</p>
          <button @click="count++" style="padding: 0.5rem 1rem; background: #4FC08D; color: white; border: none; border-radius: 4px; cursor: pointer;">
            点击次数: {{ count }}
          </button>
        </div>
      </SimpleDemoRunner>
    </section>
    
    <section class="demo-section">
      <h2>使用原始DemoRunner测试</h2>
      <DemoRunner title="原始DemoRunner测试">
        <div style="padding: 1rem; background: #fff8f0; border-radius: 4px;">
          <h3>原始DemoRunner内容</h3>
          <p>这是使用原始DemoRunner组件的测试内容。</p>
          <button @click="count2++" style="padding: 0.5rem 1rem; background: #ff6b6b; color: white; border: none; border-radius: 4px; cursor: pointer;">
            点击次数: {{ count2 }}
          </button>
        </div>
      </DemoRunner>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import SimpleDemoRunner from '@/components/CodeDemo/SimpleDemoRunner.vue'
import DemoRunner from '@/components/CodeDemo/DemoRunner.vue'

const count = ref(0)
const count2 = ref(0)
</script>

<style scoped>
.test-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
}

h1 {
  color: #2c3e50;
  text-align: center;
  margin-bottom: 2rem;
}

h2 {
  color: #34495e;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}
</style>