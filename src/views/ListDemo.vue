<template>
  <div class="list-demo">
    <h1>📋 列表渲染 (v-for)</h1>
    <p class="intro">学习Vue.js中的列表渲染指令v-for，掌握数组和对象的遍历技巧。</p>

    <!-- 基础列表渲染 -->
    <section class="demo-section">
      <h2>🔢 基础列表渲染</h2>
      
      <div class="demo-container">
        <h3>简单数组遍历</h3>
        <ul>
          <li v-for="(item, index) in fruits" :key="index">
            {{ index + 1 }}. {{ item }}
          </li>
        </ul>
      </div>

      <div class="demo-container">
        <h3>对象数组遍历</h3>
        <div class="user-list">
          <div v-for="user in users" :key="user.id" class="user-card">
            <h4>{{ user.name }}</h4>
            <p>年龄: {{ user.age }}</p>
            <p>职业: {{ user.job }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- 对象遍历 -->
    <section class="demo-section">
      <h2>🗂️ 对象遍历</h2>
      
      <div class="demo-container">
        <h3>遍历对象属性</h3>
        <ul>
          <li v-for="(value, key) in userInfo" :key="key">
            {{ key }}: {{ value }}
          </li>
        </ul>
      </div>

      <div class="demo-container">
        <h3>获取索引的对象遍历</h3>
        <ul>
          <li v-for="(value, key, index) in userInfo" :key="key">
            {{ index + 1 }}. {{ key }}: {{ value }}
          </li>
        </ul>
      </div>
    </section>

    <!-- key的重要性 -->
    <section class="demo-section">
      <h2>🔐 key的重要性</h2>
      
      <div class="demo-container">
        <h3>动态列表操作</h3>
        <div class="controls">
          <button @click="addItem" class="btn btn-primary">添加项目</button>
          <button @click="removeItem" class="btn btn-secondary">删除第一项</button>
          <button @click="shuffleItems" class="btn btn-accent">随机排序</button>
        </div>
        
        <div class="item-list">
          <div v-for="item in dynamicItems" :key="item.id" class="item">
            <span>{{ item.name }}</span>
            <input v-model="item.value" placeholder="输入值" />
          </div>
        </div>
      </div>
    </section>

    <!-- 条件渲染结合 -->
    <section class="demo-section">
      <h2>⚖️ v-for与v-if结合</h2>
      
      <div class="demo-container">
        <h3>过滤显示</h3>
        <div class="controls">
          <label>
            <input type="checkbox" v-model="showOnlyActive" />
            只显示活跃用户
          </label>
        </div>
        
        <div class="user-list">
          <template v-for="user in users" :key="user.id">
            <div v-if="!showOnlyActive || user.active" class="user-card">
              <h4>{{ user.name }}</h4>
              <p>状态: {{ user.active ? '活跃' : '非活跃' }}</p>
            </div>
          </template>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

// 基础数据
const fruits = ref(['苹果', '香蕉', '橙子', '葡萄', '草莓'])

const users = ref([
  { id: 1, name: '张三', age: 25, job: '前端开发', active: true },
  { id: 2, name: '李四', age: 30, job: '后端开发', active: false },
  { id: 3, name: '王五', age: 28, job: '设计师', active: true },
  { id: 4, name: '赵六', age: 32, job: '产品经理', active: true }
])

const userInfo = reactive({
  name: '张三',
  age: 25,
  email: 'zhangsan@example.com',
  city: '北京',
  job: '前端开发'
})

// 动态列表数据
const dynamicItems = ref([
  { id: 1, name: '项目A', value: '' },
  { id: 2, name: '项目B', value: '' },
  { id: 3, name: '项目C', value: '' }
])

let nextId = 4

// 控制变量
const showOnlyActive = ref(false)

// 方法
const addItem = () => {
  dynamicItems.value.push({
    id: nextId++,
    name: `项目${String.fromCharCode(64 + nextId)}`,
    value: ''
  })
}

const removeItem = () => {
  if (dynamicItems.value.length > 0) {
    dynamicItems.value.shift()
  }
}

const shuffleItems = () => {
  for (let i = dynamicItems.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[dynamicItems.value[i], dynamicItems.value[j]] = [dynamicItems.value[j], dynamicItems.value[i]]
  }
}
</script>

<style scoped>
.list-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

.intro {
  font-size: 1.1em;
  color: #666;
  margin-bottom: 30px;
}

.demo-section {
  margin-bottom: 40px;
  padding: 20px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
}

.demo-section h2 {
  color: #333;
  margin-bottom: 20px;
  padding-bottom: 10px;
  border-bottom: 2px solid #007acc;
}

.demo-container {
  margin-bottom: 20px;
  padding: 15px;
  background: white;
  border-radius: 6px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.demo-container h3 {
  color: #555;
  margin-bottom: 15px;
}

.user-list {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 15px;
}

.user-card {
  padding: 15px;
  border: 1px solid #ddd;
  border-radius: 6px;
  background: #f9f9f9;
}

.user-card h4 {
  margin: 0 0 10px 0;
  color: #333;
}

.user-card p {
  margin: 5px 0;
  color: #666;
}

.controls {
  margin-bottom: 20px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background-color 0.3s;
}

.btn-primary {
  background: #007acc;
  color: white;
}

.btn-primary:hover {
  background: #005a9e;
}

.btn-secondary {
  background: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background: #545b62;
}

.btn-accent {
  background: #28a745;
  color: white;
}

.btn-accent:hover {
  background: #1e7e34;
}

.item-list {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.item {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
}

.item span {
  min-width: 80px;
  font-weight: 500;
}

.item input {
  flex: 1;
  padding: 6px 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.item input:focus {
  outline: none;
  border-color: #007acc;
}

label {
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  padding: 8px 0;
  border-bottom: 1px solid #eee;
}

li:last-child {
  border-bottom: none;
}
</style>