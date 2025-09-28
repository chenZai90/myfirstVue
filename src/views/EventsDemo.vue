<template>
  <div class="container">
    <h1>🎯 事件处理</h1>
    <p class="description">Vue.js 提供了强大的事件处理系统，支持各种事件修饰符和按键修饰符。</p>

    <!-- 基础事件处理 -->
    <section class="demo-section">
      <h2>🖱️ 基础事件处理</h2>
      
      <div class="demo-container">
        <div class="demo-item">
          <h3>基础事件处理示例</h3>
          <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">
            <!-- 点击事件 -->
            <div style="margin: 1rem 0;">
              <button @click="increment" style="padding: 0.5rem 1rem; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 1rem;">点击增加</button>
              <span style="font-size: 1.2rem; font-weight: bold;">计数: {{ count }}</span>
            </div>
            
            <!-- 输入事件 -->
            <div style="margin: 1rem 0;">
              <input @input="handleInput" :value="message" placeholder="输入文本" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; margin-right: 1rem;">
              <span>输入内容: {{ message }}</span>
            </div>
            
            <!-- 表单事件 -->
            <div style="margin: 1rem 0;">
              <form @submit.prevent="handleSubmit" style="display: flex; gap: 0.5rem; align-items: center;">
                <input v-model="formMessage" placeholder="表单输入" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <button type="submit" style="padding: 0.5rem 1rem; background: #4caf50; color: white; border: none; border-radius: 4px; cursor: pointer;">提交</button>
              </form>
              <div v-if="submitResult" style="margin-top: 0.5rem; color: #4caf50;">{{ submitResult }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 事件修饰符 -->
    <section class="demo-section">
      <h2>🔧 事件修饰符</h2>
      
      <div class="demo-container">
        <div class="demo-item">
          <h3>事件修饰符示例</h3>
          <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">
            <!-- .stop 修饰符 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🛑 .stop修饰符</h4>
              <div @click="handleParentClick" style="padding: 1rem; background: #ffebee; border: 1px solid #f44336; border-radius: 4px; cursor: pointer;">
                父元素 (点击我会触发父元素事件)
                <button @click.stop="handleChildClick" style="padding: 0.5rem 1rem; background: #2196f3; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 0.5rem;">子元素 (阻止冒泡)</button>
              </div>
            </div>
            
            <!-- .prevent 修饰符 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🚫 .prevent修饰符</h4>
              <a href="https://vuejs.org" @click.prevent="handleLinkClick" style="color: #2196f3; text-decoration: underline;">点击链接 (阻止默认跳转)</a>
            </div>
            
            <!-- .capture 修饰符 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>📥 .capture修饰符</h4>
              <div @click.capture="handleCaptureParent" style="padding: 1rem; background: #e8f5e8; border: 1px solid #4caf50; border-radius: 4px; cursor: pointer;">
                父元素 (捕获阶段)
                <button @click="handleCaptureChild" style="padding: 0.5rem 1rem; background: #ff9800; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 0.5rem;">子元素</button>
              </div>
            </div>
            
            <!-- .self 修饰符 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🎯 .self修饰符</h4>
              <div @click.self="handleSelfClick" style="padding: 1rem; background: #fff3e0; border: 1px solid #ff9800; border-radius: 4px; cursor: pointer;">
                只有点击我自己才会触发 (不包括子元素)
                <button style="padding: 0.5rem 1rem; background: #9c27b0; color: white; border: none; border-radius: 4px; cursor: pointer; margin: 0.5rem;">子元素 (点击我不会触发父元素)</button>
              </div>
            </div>
            
            <!-- .once 修饰符 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>1️⃣ .once修饰符</h4>
              <button @click.once="handleOnceClick" style="padding: 0.5rem 1rem; background: #e91e63; color: white; border: none; border-radius: 4px; cursor: pointer;">只能点击一次</button>
            </div>
            
            <!-- 事件日志 -->
            <div style="margin: 1rem 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h4 style="margin: 0;">📋 事件日志</h4>
                <button @click="clearEventLogs" style="padding: 0.25rem 0.5rem; background: #f44336; color: white; border: none; border-radius: 2px; cursor: pointer; font-size: 0.8rem;">清空日志</button>
              </div>
              <div style="max-height: 200px; overflow-y: auto; background: #f5f5f5; border-radius: 4px; padding: 0.5rem;">
                <div v-if="eventLogs.length === 0" style="color: #666; font-style: italic;">暂无事件日志</div>
                <div v-for="log in eventLogs" :key="log" style="font-family: monospace; font-size: 0.9rem; margin: 0.2rem 0; color: #333;">{{ log }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- 按键修饰符 -->
    <section class="demo-section">
      <h2>⌨️ 按键修饰符</h2>
      
      <div class="demo-container">
        <div class="demo-item">
          <h3>按键修饰符示例</h3>
          <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: #f9f9f9;">
            <!-- 基础按键 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🔤 基础按键修饰符</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 0.5rem;">
                <input @keyup.enter="handleEnter" placeholder="按回车键" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <input @keyup.esc="handleEscape" placeholder="按ESC键" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <input @keyup.tab="handleTab" placeholder="按Tab键" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
                <input @keyup.space="handleSpace" placeholder="按空格键" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px;">
              </div>
            </div>
            
            <!-- 组合键 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🔗 组合键修饰符</h4>
              <input @keyup.ctrl.enter="handleCtrlEnter" placeholder="按Ctrl+Enter" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; max-width: 300px; margin: 0.5rem 0;">
              <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">在输入框中按住Ctrl键然后按回车</p>
            </div>
            
            <!-- 方向键 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🔄 方向键修饰符</h4>
              <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.5rem; max-width: 200px; margin: 0.5rem 0;">
                <div></div>
                <button @keyup.up="handleArrowKey('上')" tabindex="0" style="padding: 0.5rem; background: #e3f2fd; border: 1px solid #2196f3; border-radius: 4px; cursor: pointer;">↑</button>
                <div></div>
                <button @keyup.left="handleArrowKey('左')" tabindex="0" style="padding: 0.5rem; background: #e3f2fd; border: 1px solid #2196f3; border-radius: 4px; cursor: pointer;">←</button>
                <button @keyup.down="handleArrowKey('下')" tabindex="0" style="padding: 0.5rem; background: #e3f2fd; border: 1px solid #2196f3; border-radius: 4px; cursor: pointer;">↓</button>
                <button @keyup.right="handleArrowKey('右')" tabindex="0" style="padding: 0.5rem; background: #e3f2fd; border: 1px solid #2196f3; border-radius: 4px; cursor: pointer;">→</button>
              </div>
              <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">点击按钮获得焦点，然后按对应的方向键</p>
            </div>
            
            <!-- 精确修饰符 -->
            <div style="margin: 1rem 0; padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
              <h4>🎯 .exact修饰符</h4>
              <button @keyup.ctrl.exact="handleCtrlOnly" tabindex="0" style="padding: 0.5rem 1rem; background: #fff3e0; border: 1px solid #ff9800; border-radius: 4px; cursor: pointer; margin: 0.5rem 0;">只有按Ctrl键时触发（不能有其他修饰符）</button>
              <p style="font-size: 0.9rem; color: #666; margin: 0.5rem 0;">点击按钮获得焦点，然后只按Ctrl键（不要按其他键）</p>
            </div>
            
            <!-- 当前按下的键 -->
            <div style="margin: 1rem 0; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
              <h4>🔍 当前按下的键</h4>
              <input @keydown="handleKeyDown" @keyup="handleKeyUp" placeholder="在这里按键查看实时状态" style="padding: 0.5rem; border: 1px solid #ddd; border-radius: 4px; width: 100%; max-width: 300px; margin: 0.5rem 0;">
              <div style="margin: 0.5rem 0;">
                <strong>当前按下:</strong> 
                <span v-if="pressedKeys.size === 0" style="color: #666; font-style: italic;">无</span>
                <span v-else style="font-family: monospace; background: #e8f5e8; padding: 0.2rem 0.4rem; border-radius: 2px; margin: 0 0.2rem;" v-for="key in Array.from(pressedKeys)" :key="key">{{ key }}</span>
              </div>
            </div>
            
            <!-- 按键事件日志 -->
            <div style="margin: 1rem 0;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 0.5rem;">
                <h4 style="margin: 0;">📋 按键事件日志</h4>
                <button @click="clearKeyLogs" style="padding: 0.25rem 0.5rem; background: #f44336; color: white; border: none; border-radius: 2px; cursor: pointer; font-size: 0.8rem;">清空日志</button>
              </div>
              <div style="max-height: 200px; overflow-y: auto; background: #f5f5f5; border-radius: 4px; padding: 0.5rem;">
                <div v-if="keyLogs.length === 0" style="color: #666; font-style: italic;">暂无按键日志</div>
                <div v-for="log in keyLogs" :key="log" style="font-family: monospace; font-size: 0.9rem; margin: 0.2rem 0; color: #333;">{{ log }}</div>
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

// 基础事件处理
const count = ref(0)
const message = ref('')
const formMessage = ref('')
const submitResult = ref('')

// 事件修饰符
const eventLogs = ref([])

// 按键修饰符
const keyLogs = ref([])
const pressedKeys = ref(new Set())

// 基础事件处理函数
function increment() {
  count.value++
}

function handleInput(event) {
  message.value = event.target.value
}

function handleSubmit() {
  submitResult.value = `提交成功: ${formMessage.value}`
  setTimeout(() => {
    submitResult.value = ''
  }, 3000)
}

// 事件修饰符处理函数
function handleParentClick() {
  addEventLog('父元素被点击')
}

function handleChildClick() {
  addEventLog('子元素被点击 (阻止冒泡)')
}

function handleLinkClick() {
  addEventLog('链接被点击 (阻止默认行为)')
}

function handleCaptureParent() {
  addEventLog('父元素 - 捕获阶段')
}

function handleCaptureChild() {
  addEventLog('子元素被点击')
}

function handleSelfClick() {
  addEventLog('只有点击自己才触发')
}

function handleOnceClick() {
  addEventLog('只能点击一次的按钮被点击')
}

function addEventLog(message) {
  const timestamp = new Date().toLocaleTimeString()
  eventLogs.value.unshift(`[${timestamp}] ${message}`)
  if (eventLogs.value.length > 10) {
    eventLogs.value.pop()
  }
}

function clearEventLogs() {
  eventLogs.value = []
}

// 按键修饰符处理函数
function handleEnter() {
  addKeyLog('按下了回车键')
}

function handleEscape() {
  addKeyLog('按下了ESC键')
}

function handleTab() {
  addKeyLog('按下了Tab键')
}

function handleSpace() {
  addKeyLog('按下了空格键')
}

function handleCtrlEnter() {
  addKeyLog('按下了Ctrl+Enter组合键')
}

function handleArrowKey(direction) {
  addKeyLog(`按下了${direction}方向键`)
}

function handleCtrlOnly() {
  addKeyLog('只按下了Ctrl键')
}

function handleKeyDown(event) {
  pressedKeys.value.add(event.key)
}

function handleKeyUp(event) {
  pressedKeys.value.delete(event.key)
}

function addKeyLog(message) {
  const timestamp = new Date().toLocaleTimeString()
  keyLogs.value.unshift(`[${timestamp}] ${message}`)
  if (keyLogs.value.length > 10) {
    keyLogs.value.pop()
  }
}

function clearKeyLogs() {
  keyLogs.value = []
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.description {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.demo-section {
  margin: 3rem 0;
}

.demo-section h2 {
  color: #333;
  border-bottom: 2px solid #2196f3;
  padding-bottom: 0.5rem;
  margin-bottom: 1.5rem;
}

.demo-container {
  margin: 1.5rem 0;
}

.demo-item {
  margin: 2rem 0;
  padding: 1.5rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: white;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.demo-item h3 {
  margin-top: 0;
  color: #333;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}
</style>