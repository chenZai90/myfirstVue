<template>
  <div class="watchers-demo">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>👁️ 侦听器</h1>
      <p class="page-description">
        学习Vue 3的侦听器（watch），了解如何响应数据变化，掌握watch、watchEffect的用法和区别
      </p>
    </div>

    <!-- 基础侦听器 -->
    <section class="demo-section">
      <h2>🎯 基础侦听器</h2>
      
      <CommentBox
        title="watch() 基础用法"
        description="侦听器用于在响应式数据发生变化时执行副作用操作，如API调用、DOM操作等。"
        :concepts="[
          { name: 'watch', description: '侦听一个或多个响应式数据源，在数据变化时执行回调' },
          { name: '数据源', description: 'ref、reactive对象、getter函数或数组' },
          { name: '回调函数', description: '数据变化时执行的函数，接收新值和旧值' },
          { name: '副作用', description: '数据变化时需要执行的操作，如网络请求、日志记录等' }
        ]"
        :code-explanation="basicWatchCodeExplanation"
        :notes="[
          '侦听器默认是懒执行的，只有数据变化时才执行',
          '可以侦听ref、reactive、getter函数等多种数据源',
          '回调函数接收新值、旧值和清理函数作为参数'
        ]"
        :links="[
          { title: 'Vue 3官方文档 - 侦听器', url: 'https://cn.vuejs.org/guide/essentials/watchers.html' }
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="BasicWatchDemo" title="基础侦听器示例" />
      </div>

      <CodeBlock
        :code="basicWatchCode"
        language="javascript"
        title="基础侦听器代码"
      />
    </section>

    <!-- 侦听数据源类型 -->
    <section class="demo-section">
      <h2>📊 侦听数据源类型</h2>
      
      <CommentBox
        title="不同数据源的侦听方式"
        description="watch可以侦听不同类型的数据源，包括ref、reactive对象、getter函数和数组。"
        :concepts="[
          { name: 'ref侦听', description: '直接侦听ref对象' },
          { name: 'reactive侦听', description: '侦听reactive对象的属性' },
          { name: 'getter侦听', description: '使用函数返回要侦听的值' },
          { name: '多源侦听', description: '同时侦听多个数据源' }
        ]"
        :code-explanation="watchSourcesCodeExplanation"
        :notes="[
          'reactive对象需要使用getter函数来侦听特定属性',
          '侦听整个reactive对象会深度侦听所有属性',
          '多源侦听的回调接收数组形式的新值和旧值'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="WatchSourcesDemo" title="侦听数据源类型示例" />
      </div>

      <CodeBlock
        :code="watchSourcesCode"
        language="javascript"
        title="侦听数据源类型代码"
      />
    </section>

    <!-- 深度侦听 -->
    <section class="demo-section">
      <h2>🔍 深度侦听</h2>
      
      <CommentBox
        title="深度侦听详解"
        description="深度侦听可以检测嵌套对象内部值的变化，适用于复杂数据结构的监控。"
        :concepts="[
          { name: 'deep选项', description: '启用深度侦听，检测嵌套属性变化' },
          { name: '性能考虑', description: '深度侦听会遍历所有嵌套属性，性能开销较大' },
          { name: '应用场景', description: '适用于复杂对象、数组等嵌套数据结构' }
        ]"
        :code-explanation="deepWatchCodeExplanation"
        :notes="[
          '深度侦听会检测对象内部所有嵌套属性的变化',
          '对于大型对象，深度侦听可能影响性能',
          '可以通过侦听特定属性来避免不必要的深度侦听'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="DeepWatchDemo" title="深度侦听示例" />
      </div>

      <CodeBlock
        :code="deepWatchCode"
        language="javascript"
        title="深度侦听代码"
      />
    </section>

    <!-- watchEffect -->
    <section class="demo-section">
      <h2>⚡ watchEffect</h2>
      
      <CommentBox
        title="watchEffect详解"
        description="watchEffect会立即执行函数，并自动追踪其依赖，当依赖变化时重新执行。"
        :concepts="[
          { name: 'watchEffect', description: '立即执行并自动追踪依赖的侦听器' },
          { name: '自动依赖追踪', description: '自动收集函数内使用的响应式数据作为依赖' },
          { name: '立即执行', description: '创建时立即执行一次，不像watch的懒执行' },
          { name: '清理函数', description: '可以返回清理函数，在重新执行前或组件卸载时调用' }
        ]"
        :code-explanation="watchEffectCodeExplanation"
        :notes="[
          'watchEffect会在创建时立即执行一次',
          '自动追踪函数内使用的所有响应式数据',
          '适合需要立即执行且依赖明确的场景'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="WatchEffectDemo" title="watchEffect示例" />
      </div>

      <CodeBlock
        :code="watchEffectCode"
        language="javascript"
        title="watchEffect代码"
      />
    </section>

    <!-- 侦听器选项 -->
    <section class="demo-section">
      <h2>⚙️ 侦听器选项</h2>
      
      <CommentBox
        title="侦听器配置选项"
        description="侦听器提供多种配置选项来控制其行为，如立即执行、深度侦听、刷新时机等。"
        :concepts="[
          { name: 'immediate', description: '立即执行侦听器回调' },
          { name: 'deep', description: '深度侦听对象内部变化' },
          { name: 'flush', description: '控制回调的刷新时机' },
          { name: 'onTrack/onTrigger', description: '调试选项，追踪依赖变化' }
        ]"
        :code-explanation="watchOptionsCodeExplanation"
        :notes="[
          'immediate: true 使侦听器在创建时立即执行',
          'flush控制回调执行时机：pre(默认)、post、sync',
          'onTrack和onTrigger用于调试依赖追踪'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="WatchOptionsDemo" title="侦听器选项示例" />
      </div>

      <CodeBlock
        :code="watchOptionsCode"
        language="javascript"
        title="侦听器选项代码"
      />
    </section>

    <!-- 停止侦听器 -->
    <section class="demo-section">
      <h2>🛑 停止侦听器</h2>
      
      <CommentBox
        title="侦听器的生命周期管理"
        description="了解如何正确停止侦听器，避免内存泄漏和不必要的计算。"
        :concepts="[
          { name: '自动停止', description: '组件卸载时自动停止侦听器' },
          { name: '手动停止', description: '调用返回的停止函数手动停止' },
          { name: '条件停止', description: '根据条件动态停止侦听器' }
        ]"
        :code-explanation="stopWatcherCodeExplanation"
        :notes="[
          '在setup()中创建的侦听器会在组件卸载时自动停止',
          '在异步回调中创建的侦听器需要手动停止',
          '及时停止不需要的侦听器可以避免内存泄漏'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="StopWatcherDemo" title="停止侦听器示例" />
      </div>

      <CodeBlock
        :code="stopWatcherCode"
        language="javascript"
        title="停止侦听器代码"
      />
    </section>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, watch, watchEffect, nextTick, computed } from 'vue'
import CommentBox from '@/components/CodeDemo/CommentBox.vue'
import DemoRunner from '@/components/CodeDemo/DemoRunner.vue'
import CodeBlock from '@/components/CodeDemo/CodeBlock.vue'

// 基础侦听器示例组件
const BasicWatchDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const count = ref(0)           // 计数器，用于演示数字类型的侦听
    const message = ref('Hello')   // 消息文本，用于演示字符串类型的侦听
    const logs = ref([])          // 日志数组，记录侦听器触发的历史

    // 侦听单个ref - 基础用法
    // 当count值发生变化时，回调函数会被调用
    // 回调函数接收新值(newVal)和旧值(oldVal)作为参数
    watch(count, (newVal, oldVal) => {
      logs.value.push(`count变化: ${oldVal} -> ${newVal}`)
    })

    // 侦听多个数据源 - 高级用法
    // 可以同时侦听多个响应式数据，任一数据变化都会触发回调
    // 回调函数接收新值数组和旧值数组作为参数
    watch([count, message], ([newCount, newMessage], [oldCount, oldMessage]) => {
      logs.value.push(`多源侦听: count(${oldCount}->${newCount}), message(${oldMessage}->${newMessage})`)
    })

    // 操作方法定义
    function increment() {
      // 增加计数器的值，触发count的侦听器
      count.value++
    }

    function updateMessage() {
      // 循环更新消息内容，触发message的侦听器
      const messages = ['Hello', 'Hi', 'Hey', 'Greetings']
      const current = messages.indexOf(message.value)
      message.value = messages[(current + 1) % messages.length]
    }

    function clearLogs() {
      // 清空日志数组，重置演示状态
      logs.value = []
    }

    return {
      count,
      message,
      logs,
      increment,
      updateMessage,
      clearLogs
    }
  },
  template: `
    <div class="demo-item">
      <h3>基础侦听器示例</h3>
      <div style="margin: 1rem 0;">
        <p><strong>计数:</strong> {{ count }}</p>
        <p><strong>消息:</strong> {{ message }}</p>
      </div>
      <div style="margin: 1rem 0;">
        <button @click="increment">增加计数</button>
        <button @click="updateMessage">更改消息</button>
        <button @click="clearLogs">清空日志</button>
      </div>
      <div style="margin: 1rem 0;">
        <h4>侦听器日志:</h4>
        <div style="max-height: 200px; overflow-y: auto; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
          <div v-if="logs.length === 0" style="color: #666; font-style: italic;">暂无日志</div>
          <div v-for="(log, index) in logs" :key="index" style="margin: 0.25rem 0; font-family: monospace; font-size: 0.9rem;">
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  `
})

// 侦听数据源类型示例组件
const WatchSourcesDemo = defineComponent({
  setup() {
    // ref类型的响应式数据
    const refValue = ref(10)      // 简单的ref值，可以直接侦听
    
    // reactive类型的响应式数据
    const state = reactive({
      name: '张三',              // 基本属性
      age: 25,                  // 数字属性
      address: {                // 嵌套对象
        city: '北京',
        district: '朝阳区'
      }
    })
    
    const logs = ref([])         // 日志记录数组

    // 侦听ref类型数据 - 直接侦听
    // ref可以直接作为侦听源，无需使用getter函数
    watch(refValue, (newVal, oldVal) => {
      logs.value.push(`ref侦听: ${oldVal} -> ${newVal}`)
    })

    // 侦听reactive对象的属性 - 使用getter函数
    // reactive对象的属性需要通过getter函数来侦听
    watch(() => state.name, (newVal, oldVal) => {
      logs.value.push(`name侦听: ${oldVal} -> ${newVal}`)
    })

    // 侦听嵌套属性 - 深层属性访问
    // 可以侦听对象内部的嵌套属性
    watch(() => state.address.city, (newVal, oldVal) => {
      logs.value.push(`city侦听: ${oldVal} -> ${newVal}`)
    })

    // 侦听多个属性 - 数组形式的数据源
    // 可以同时侦听多个不同类型的数据源
    watch([() => state.name, () => state.age], ([newName, newAge], [oldName, oldAge]) => {
      logs.value.push(`多属性侦听: name(${oldName}->${newName}), age(${oldAge}->${newAge})`)
    })

    function updateRefValue() {
      refValue.value = Math.floor(Math.random() * 100)
    }

    function updateName() {
      const names = ['张三', '李四', '王五', '赵六']
      const current = names.indexOf(state.name)
      state.name = names[(current + 1) % names.length]
    }

    function updateAge() {
      state.age = Math.floor(Math.random() * 30) + 20
    }

    function updateCity() {
      const cities = ['北京', '上海', '广州', '深圳']
      const current = cities.indexOf(state.address.city)
      state.address.city = cities[(current + 1) % cities.length]
    }

    function clearLogs() {
      logs.value = []
    }

    return {
      refValue,
      state,
      logs,
      updateRefValue,
      updateName,
      updateAge,
      updateCity,
      clearLogs
    }
  },
  template: `
    <div class="demo-item">
      <h3>侦听数据源类型示例</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div>
          <h4>Ref数据:</h4>
          <p>值: {{ refValue }}</p>
          <button @click="updateRefValue">更新Ref值</button>
        </div>
        <div>
          <h4>Reactive数据:</h4>
          <p>姓名: {{ state.name }}</p>
          <p>年龄: {{ state.age }}</p>
          <p>城市: {{ state.address.city }}</p>
          <div>
            <button @click="updateName">更新姓名</button>
            <button @click="updateAge">更新年龄</button>
            <button @click="updateCity">更新城市</button>
          </div>
        </div>
      </div>
      <div style="margin: 1rem 0;">
        <button @click="clearLogs">清空日志</button>
      </div>
      <div style="margin: 1rem 0;">
        <h4>侦听器日志:</h4>
        <div style="max-height: 200px; overflow-y: auto; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
          <div v-if="logs.length === 0" style="color: #666; font-style: italic;">暂无日志</div>
          <div v-for="(log, index) in logs" :key="index" style="margin: 0.25rem 0; font-family: monospace; font-size: 0.9rem;">
            {{ log }}
          </div>
        </div>
      </div>
    </div>
  `
})

// 深度侦听示例组件
const DeepWatchDemo = defineComponent({
  setup() {
    // 创建复杂的嵌套对象用于演示深度侦听
    const user = reactive({
      profile: {
        name: '张三',              // 用户姓名
        contact: {
          email: 'zhangsan@example.com',  // 邮箱地址
          phone: '138-0000-0000'          // 电话号码
        }
      },
      preferences: {
        theme: 'light',            // 主题设置
        language: 'zh-CN'          // 语言设置
      }
    })
    
    const logs = ref([])          // 日志记录数组

    // 浅层侦听 - 只侦听对象引用变化
    // 只有当user.profile被重新赋值时才会触发
    watch(() => user.profile, (newVal, oldVal) => {
      logs.value.push('profile对象引用变化（浅层侦听）')
    })

    // 深度侦听 - 侦听对象内部所有属性变化
    // 开启deep选项后，对象内部任何属性变化都会触发
    watch(() => user.profile, (newVal, oldVal) => {
      logs.value.push('profile内部属性变化（深度侦听）')
    }, { deep: true })

    // 侦听特定嵌套属性（推荐方式）
    // 直接侦听具体的属性，性能更好，更精确
    watch(() => user.profile.contact.email, (newVal, oldVal) => {
      logs.value.push(`email变化: ${oldVal} -> ${newVal}`)
    })

    // 侦听整个对象的深度变化
    // 侦听user对象的任何深层属性变化
    watch(user, (newVal, oldVal) => {
      logs.value.push('user对象深度变化')
    }, { deep: true })

    function updateName() {
      const names = ['张三', '李四', '王五', '赵六']
      const current = names.indexOf(user.profile.name)
      user.profile.name = names[(current + 1) % names.length]
    }

    function updateEmail() {
      const emails = ['zhangsan@example.com', 'lisi@example.com', 'wangwu@example.com']
      const current = emails.indexOf(user.profile.contact.email)
      user.profile.contact.email = emails[(current + 1) % emails.length]
    }

    function updateTheme() {
      user.preferences.theme = user.preferences.theme === 'light' ? 'dark' : 'light'
    }

    function clearLogs() {
      logs.value = []
    }

    return {
      user,
      logs,
      updateName,
      updateEmail,
      updateTheme,
      clearLogs
    }
  },
  template: `
    <div class="demo-item">
      <h3>深度侦听示例</h3>
      <div style="margin: 1rem 0;">
        <h4>用户信息:</h4>
        <p><strong>姓名:</strong> {{ user.profile.name }}</p>
        <p><strong>邮箱:</strong> {{ user.profile.contact.email }}</p>
        <p><strong>主题:</strong> {{ user.preferences.theme }}</p>
      </div>
      <div style="margin: 1rem 0;">
        <button @click="updateName">更新姓名</button>
        <button @click="updateEmail">更新邮箱</button>
        <button @click="updateTheme">切换主题</button>
        <button @click="clearLogs">清空日志</button>
      </div>
      <div style="margin: 1rem 0;">
        <h4>侦听器日志:</h4>
        <div style="max-height: 200px; overflow-y: auto; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
          <div v-if="logs.length === 0" style="color: #666; font-style: italic;">暂无日志</div>
          <div v-for="(log, index) in logs" :key="index" style="margin: 0.25rem 0; font-family: monospace; font-size: 0.9rem;">
            {{ log }}
          </div>
        </div>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 观察不同侦听方式的触发情况
      </p>
    </div>
  `
})

// watchEffect示例组件
const WatchEffectDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const count = ref(0)          // 计数器
    const name = ref('张三')       // 姓名
    const enabled = ref(true)     // 启用状态
    const logs = ref([])         // 日志记录

    // 基础watchEffect - 自动追踪依赖
    // watchEffect会自动追踪函数内使用的所有响应式数据
    // 无需手动指定依赖，任何依赖变化都会重新执行
    watchEffect(() => {
      logs.value.push(`watchEffect执行: count=${count.value}, name=${name.value}`)
    })

    // 条件性watchEffect
    // 可以在watchEffect内部使用条件逻辑
    watchEffect(() => {
      if (enabled.value) {
        logs.value.push(`条件watchEffect: 当前计数=${count.value}`)
      }
      // 追踪enabled和count两个依赖
      // enabled为false时不会输出，但仍会追踪count的变化
    })

    // 带清理函数的watchEffect
    // 用于清理副作用，如定时器、事件监听器等
    let timerId = 0
    watchEffect((onCleanup) => {
      const timer = setTimeout(() => {
        logs.value.push(`定时器${++timerId}执行`)
      }, 1000)
      
      // 清理函数：在重新执行前或组件卸载时调用
      onCleanup(() => {
        clearTimeout(timer)
        logs.value.push(`清理定时器${timerId}`)
      })
    })

    // 可停止的watchEffect
    // watchEffect返回一个停止函数，可以手动停止侦听
    const stopEffect = watchEffect(() => {
      if (count.value > 5) {
        logs.value.push('计数超过5，准备停止watchEffect')
        // 可以在这里调用stopEffect()来停止自己
      }
    })

    function increment() {
      count.value++
    }

    function updateName() {
      const names = ['张三', '李四', '王五', '赵六']
      const current = names.indexOf(name.value)
      name.value = names[(current + 1) % names.length]
    }

    function toggleEnabled() {
      enabled.value = !enabled.value
    }

    function stopWatchEffect() {
      stopEffect()
      logs.value.push('手动停止watchEffect')
    }

    function clearLogs() {
      logs.value = []
    }

    return {
      count,
      name,
      enabled,
      logs,
      increment,
      updateName,
      toggleEnabled,
      stopWatchEffect,
      clearLogs
    }
  },
  template: `
    <div class="demo-item">
      <h3>watchEffect示例</h3>
      <div style="margin: 1rem 0;">
        <p><strong>计数:</strong> {{ count }}</p>
        <p><strong>姓名:</strong> {{ name }}</p>
        <p><strong>启用状态:</strong> {{ enabled ? '启用' : '禁用' }}</p>
      </div>
      <div style="margin: 1rem 0;">
        <button @click="increment">增加计数</button>
        <button @click="updateName">更改姓名</button>
        <button @click="toggleEnabled">切换启用状态</button>
        <button @click="stopWatchEffect">停止watchEffect</button>
        <button @click="clearLogs">清空日志</button>
      </div>
      <div style="margin: 1rem 0;">
        <h4>watchEffect日志:</h4>
        <div style="max-height: 200px; overflow-y: auto; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
          <div v-if="logs.length === 0" style="color: #666; font-style: italic;">暂无日志</div>
          <div v-for="(log, index) in logs" :key="index" style="margin: 0.25rem 0; font-family: monospace; font-size: 0.9rem;">
            {{ log }}
          </div>
        </div>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 watchEffect会立即执行并自动追踪依赖
      </p>
    </div>
  `
})

// 侦听器选项示例组件
const WatchOptionsDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const count = ref(0)         // 计数器
    const user = reactive({      // 用户对象
      name: '张三',
      profile: {
        age: 25,
        city: '北京'
      }
    })
    const logs = ref([])        // 日志记录

    // 1. immediate选项 - 立即执行
    // 设置immediate: true使侦听器在创建时立即执行一次
    watch(count, (newVal, oldVal) => {
      logs.value.push(`immediate侦听: ${oldVal} -> ${newVal}`)
    }, { immediate: true })  // 创建时立即执行

    // 2. deep选项 - 深度侦听
    // 开启deep选项来侦听对象内部属性的变化
    watch(() => user, (newVal, oldVal) => {
      logs.value.push('deep侦听: user对象内部变化')
    }, { deep: true })  // 深度侦听对象内部变化

    // 3. flush选项 - 控制回调执行时机
    // flush: 'post' 表示在DOM更新后执行回调
    watch(count, (newVal, oldVal) => {
      logs.value.push(`post flush: ${oldVal} -> ${newVal} (DOM更新后)`)
    }, { flush: 'post' })  // DOM更新后执行

    // 4. 调试选项（开发环境）
    // onTrack和onTrigger用于调试侦听器的依赖追踪过程
    watch(count, (newVal, oldVal) => {
      logs.value.push(`调试侦听: ${oldVal} -> ${newVal}`)
    }, {
      onTrack(e) {
        console.log('追踪到依赖:', e)
        logs.value.push('追踪到依赖变化')
      },
      onTrigger(e) {
        console.log('依赖触发:', e)
        logs.value.push('依赖触发侦听器')
      }
    })

    function increment() {
      count.value++
    }

    function updateUser() {
      user.name = user.name === '张三' ? '李四' : '张三'
      user.profile.age = Math.floor(Math.random() * 30) + 20
    }

    function clearLogs() {
      logs.value = []
    }

    return {
      count,
      user,
      logs,
      increment,
      updateUser,
      clearLogs
    }
  },
  template: `
    <div class="demo-item">
      <h3>侦听器选项示例</h3>
      <div style="margin: 1rem 0;">
        <p><strong>计数:</strong> {{ count }}</p>
        <p><strong>用户:</strong> {{ user.name }}, {{ user.profile.age }}岁</p>
      </div>
      <div style="margin: 1rem 0;">
        <button @click="increment">增加计数</button>
        <button @click="updateUser">更新用户</button>
        <button @click="clearLogs">清空日志</button>
      </div>
      <div style="margin: 1rem 0;">
        <h4>侦听器日志:</h4>
        <div style="max-height: 200px; overflow-y: auto; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
          <div v-if="logs.length === 0" style="color: #666; font-style: italic;">暂无日志</div>
          <div v-for="(log, index) in logs" :key="index" style="margin: 0.25rem 0; font-family: monospace; font-size: 0.9rem;">
            {{ log }}
          </div>
        </div>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 观察不同选项对侦听器行为的影响
      </p>
    </div>
  `
})

// 停止侦听器示例组件
const StopWatcherDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const count = ref(0)         // 计数器
    const logs = ref([])        // 日志记录
    let watchStopped = false    // 标记侦听器是否已停止
    let effectStopped = false   // 标记watchEffect是否已停止

    // watch返回停止函数
    // 可以调用这个函数来手动停止侦听器
    const stopWatch = watch(count, (newVal, oldVal) => {
      if (!watchStopped) {
        logs.value.push(`watch侦听: ${oldVal} -> ${newVal}`)
        // 当计数达到10时自动停止
        if (newVal >= 10) {
          logs.value.push('计数达到10，自动停止watch')
          stopWatch()
          watchStopped = true
        }
      }
    })

    // watchEffect也返回停止函数
    // 同样可以手动停止watchEffect
    const stopEffect = watchEffect(() => {
      if (!effectStopped) {
        logs.value.push(`watchEffect执行: 当前计数=${count.value}`)
      }
    })

    function increment() {
      count.value++
    }

    function stopWatchManually() {
      if (!watchStopped) {
        stopWatch()
        watchStopped = true
        logs.value.push('手动停止watch侦听器')
      }
    }

    function stopEffectManually() {
      if (!effectStopped) {
        stopEffect()
        effectStopped = true
        logs.value.push('手动停止watchEffect')
      }
    }

    function clearLogs() {
      logs.value = []
    }

    return {
      count,
      logs,
      increment,
      stopWatchManually,
      stopEffectManually,
      clearLogs
    }
  },
  template: `
    <div class="demo-item">
      <h3>停止侦听器示例</h3>
      <div style="margin: 1rem 0;">
        <p><strong>计数:</strong> {{ count }}</p>
      </div>
      <div style="margin: 1rem 0;">
        <button @click="increment">增加计数</button>
        <button @click="stopWatchManually">停止Watch</button>
        <button @click="stopEffectManually">停止WatchEffect</button>
        <button @click="clearLogs">清空日志</button>
      </div>
      <div style="margin: 1rem 0;">
        <h4>日志:</h4>
        <div style="max-height: 200px; overflow-y: auto; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
          <div v-if="logs.length === 0" style="color: #666; font-style: italic;">暂无日志</div>
          <div v-for="(log, index) in logs" :key="index" style="margin: 0.25rem 0; font-family: monospace; font-size: 0.9rem;">
            {{ log }}
          </div>
        </div>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 计数达到10时会自动停止一个侦听器
      </p>
    </div>
  `
})

// 代码示例字符串
const basicWatchCode = `// 基础侦听器用法
import { ref, watch } from 'vue'

// 创建响应式数据
const count = ref(0)      // 数字类型的ref
const message = ref('Hello')  // 字符串类型的ref

// 1. 侦听单个ref
// watch(数据源, 回调函数)
// 回调函数接收两个参数：新值和旧值
watch(count, (newVal, oldVal) => {
  console.log(\`count变化: \${oldVal} -> \${newVal}\`)
  // 当count.value发生变化时，这个回调函数会被调用
})

// 2. 侦听多个数据源
// 使用数组形式同时侦听多个响应式数据
// 回调函数的参数也是数组形式，对应各个数据源的新值和旧值
watch([count, message], ([newCount, newMessage], [oldCount, oldMessage]) => {
  console.log('多个数据源变化')
  console.log(\`count: \${oldCount} -> \${newCount}\`)
  console.log(\`message: \${oldMessage} -> \${newMessage}\`)
  // 任何一个数据源变化都会触发这个回调
})

// 3. 侦听getter函数
// 可以侦听一个计算表达式的结果
// 当表达式依赖的响应式数据变化时，会重新计算并触发回调
watch(
  () => count.value * 2,  // getter函数，返回count的两倍
  (newVal, oldVal) => {
    console.log(\`计算值变化: \${oldVal} -> \${newVal}\`)
    // 当count变化导致计算结果变化时触发
  }
)`

const watchSourcesCode = `// 侦听不同类型的数据源
import { ref, reactive, watch } from 'vue'

// 创建不同类型的响应式数据
const refValue = ref(10)  // ref类型的响应式数据
const state = reactive({  // reactive类型的响应式对象
  name: '张三',
  age: 25,
  address: {
    city: '北京',
    district: '朝阳区'
  }
})

// 1. 侦听ref
// 直接侦听ref类型的数据，Vue会自动解包.value
watch(refValue, (newVal, oldVal) => {
  console.log(\`ref值变化: \${oldVal} -> \${newVal}\`)
  // refValue.value变化时触发
})

// 2. 侦听reactive对象的属性（使用getter）
// 对于reactive对象的属性，需要使用getter函数
watch(() => state.name, (newVal, oldVal) => {
  console.log(\`name变化: \${oldVal} -> \${newVal}\`)
  // state.name变化时触发
})

// 3. 侦听嵌套属性
// 可以侦听对象深层嵌套的属性
watch(() => state.address.city, (newVal, oldVal) => {
  console.log(\`city变化: \${oldVal} -> \${newVal}\`)
  // state.address.city变化时触发
})

// 4. 侦听多个属性
// 使用数组同时侦听多个reactive对象的属性
watch(
  [() => state.name, () => state.age],  // 多个getter函数
  ([newName, newAge], [oldName, oldAge]) => {
    console.log(\`name: \${oldName} -> \${newName}\`)
    console.log(\`age: \${oldAge} -> \${newAge}\`)
    // 任何一个属性变化都会触发
  }
)

// 5. 侦听整个reactive对象（深度侦听）
// 侦听整个对象的任何属性变化，需要开启deep选项
watch(state, (newVal, oldVal) => {
  console.log('state对象发生变化')
  // 对象内任何属性变化都会触发（包括嵌套属性）
}, { deep: true })  // 开启深度侦听`

const deepWatchCode = `// 深度侦听示例
import { reactive, watch } from 'vue'

// 创建一个复杂的嵌套对象
const user = reactive({
  profile: {
    name: '张三',
    contact: {
      email: 'zhangsan@example.com',
      phone: '138-0000-0000'
    }
  },
  preferences: {
    theme: 'light',
    language: 'zh-CN'
  }
})

// 1. 浅层侦听 - 只侦听对象引用变化
// 只有当user.profile被重新赋值时才会触发
watch(() => user.profile, (newVal, oldVal) => {
  console.log('profile对象引用变化')
  // 修改user.profile.name不会触发这个侦听器
})

// 2. 深度侦听 - 侦听对象内部所有属性变化
// 开启deep选项后，对象内部任何属性变化都会触发
watch(() => user.profile, (newVal, oldVal) => {
  console.log('profile内部属性变化')
  // 修改user.profile.name或user.profile.contact.email都会触发
}, { deep: true })

// 3. 侦听特定嵌套属性（推荐方式）
// 直接侦听具体的属性，性能更好，更精确
watch(() => user.profile.contact.email, (newVal, oldVal) => {
  console.log(\`email变化: \${oldVal} -> \${newVal}\`)
  // 只有email变化时才触发，性能最优
})

// 4. 侦听整个对象的深度变化
// 侦听user对象的任何深层属性变化
watch(user, (newVal, oldVal) => {
  console.log('user对象深度变化')
  // user对象内任何属性变化都会触发（包括所有嵌套属性）
}, { deep: true })  // 必须开启deep选项`

const watchEffectCode = `// watchEffect用法
import { ref, watchEffect } from 'vue'

// 创建响应式数据
const count = ref(0)
const name = ref('张三')
const enabled = ref(true)

// 1. 基础watchEffect - 自动追踪依赖
// watchEffect会自动追踪函数内使用的所有响应式数据
// 无需手动指定依赖，任何依赖变化都会重新执行
watchEffect(() => {
  console.log(\`count: \${count.value}, name: \${name.value}\`)
  // 自动追踪count和name的变化
  // 当count或name任一变化时，这个函数都会重新执行
})

// 2. 条件性watchEffect
// 可以在watchEffect内部使用条件逻辑
watchEffect(() => {
  if (enabled.value) {
    console.log(\`当前计数: \${count.value}\`)
  }
  // 追踪enabled和count两个依赖
  // enabled为false时不会输出，但仍会追踪count的变化
})

// 3. 带清理函数的watchEffect
// 用于清理副作用，如定时器、事件监听器等
watchEffect((onCleanup) => {
  const timer = setTimeout(() => {
    console.log('定时器执行')
  }, 1000)
  
  // 清理函数：在重新执行前或组件卸载时调用
  onCleanup(() => {
    clearTimeout(timer)
    console.log('清理定时器')
    // 确保不会有内存泄漏
  })
})

// 4. 可停止的watchEffect
// watchEffect返回一个停止函数，可以手动停止侦听
const stop = watchEffect(() => {
  console.log(\`计数: \${count.value}\`)
})

// 手动停止
stop()`

const watchOptionsCode = `// 侦听器选项
import { ref, reactive, watch } from 'vue'

const count = ref(0)
const user = reactive({ name: '张三', age: 25 })

// 1. immediate选项 - 立即执行
// 创建侦听器时立即执行一次回调
watch(count, (newVal, oldVal) => {
  console.log(\`count: \${oldVal} -> \${newVal}\`)
}, { immediate: true })  // 立即执行

// 2. deep选项 - 深度侦听
// 侦听对象内部属性的变化
watch(user, (newVal, oldVal) => {
  console.log('user对象变化')
}, { deep: true })  // 深度侦听

// 3. flush选项 - 控制执行时机
// 'pre': 组件更新前执行（默认）
// 'post': 组件更新后执行
// 'sync': 同步执行
watch(count, (newVal, oldVal) => {
  console.log('DOM更新后执行')
}, {
  flush: 'post'     // DOM更新后执行
})

// 4. 调试选项（开发环境）
// 用于调试侦听器的依赖追踪和触发过程
watch(count, (newVal, oldVal) => {
  console.log('count变化')
}, {
  onTrack(e) {
    console.log('追踪到依赖:', e)
    // 当侦听器追踪到响应式依赖时调用
  },
  onTrigger(e) {
    console.log('依赖触发:', e)
    // 当依赖变化触发侦听器时调用
  }
})`

const stopWatcherCode = `// 停止侦听器
import { ref, watch, watchEffect } from 'vue'

const count = ref(0)

// watch返回停止函数
const stopWatch = watch(count, (newVal, oldVal) => {
  console.log(\`count: \${oldVal} -> \${newVal}\`)
})

// watchEffect也返回停止函数
const stopEffect = watchEffect(() => {
  console.log(\`当前计数: \${count.value}\`)
})

// 手动停止侦听器
function stopWatchers() {
  stopWatch()   // 停止watch
  stopEffect()  // 停止watchEffect
}

// 条件性停止
watch(count, (newVal) => {
  if (newVal >= 10) {
    console.log('达到上限，停止侦听')
    stopWatch() // 在回调中停止自己
  }
})

// 自动停止的watchEffect
const autoStop = watchEffect(() => {
  if (count.value > 5) {
    console.log('自动停止')
    autoStop()
  }
})

// 在组件中，setup()内创建的侦听器会自动停止
// 在异步回调中创建的侦听器需要手动管理
setTimeout(() => {
  const asyncWatch = watch(count, callback)
  // 需要手动停止asyncWatch
}, 1000)`

// 主组件定义
export default defineComponent({
  name: 'WatchersDemo',
  components: {
    CommentBox,
    DemoRunner,
    CodeBlock,
    BasicWatchDemo,
    WatchSourcesDemo,
    DeepWatchDemo,
    WatchEffectDemo,
    WatchOptionsDemo,
    StopWatcherDemo
  },
  setup() {
    // 为内联code-explanation数组创建计算属性
    const basicWatchCodeExplanation = computed(() => [
      { code: 'watch(source, callback)', explanation: '基础侦听器语法，侦听数据源变化' },
      { code: 'watch(count, (newVal, oldVal) => {})', explanation: '侦听ref，回调接收新值和旧值' },
      { code: 'watch(() => obj.prop, callback)', explanation: '侦听对象属性，使用getter函数' }
    ])

    const watchSourcesCodeExplanation = computed(() => [
      { code: 'watch(refValue, callback)', explanation: '侦听ref值的变化' },
      { code: 'watch(() => state.prop, callback)', explanation: '侦听reactive对象的属性' },
      { code: 'watch([source1, source2], callback)', explanation: '侦听多个数据源' }
    ])

    const deepWatchCodeExplanation = computed(() => [
      { code: 'watch(obj, callback, { deep: true })', explanation: '启用深度侦听' },
      { code: 'watch(() => obj.nested.prop, callback)', explanation: '侦听特定嵌套属性' },
      { code: 'watchEffect(() => { console.log(obj.nested.prop) })', explanation: 'watchEffect自动追踪依赖' }
    ])

    const watchEffectCodeExplanation = computed(() => [
      { code: 'watchEffect(() => { console.log(count.value) })', explanation: 'watchEffect自动追踪count依赖' },
      { code: 'const stop = watchEffect(callback)', explanation: '返回停止函数，可手动停止侦听' },
      { code: 'watchEffect((onCleanup) => { onCleanup(() => {}) })', explanation: '使用清理函数' }
    ])

    const watchOptionsCodeExplanation = computed(() => [
      { code: 'watch(source, callback, { immediate: true })', explanation: '创建时立即执行回调' },
      { code: 'watch(source, callback, { deep: true })', explanation: '启用深度侦听' },
      { code: 'watch(source, callback, { flush: \'post\' })', explanation: '在DOM更新后执行回调' }
    ])

    const stopWatcherCodeExplanation = computed(() => [
      { code: 'const stop = watch(source, callback)', explanation: 'watch返回停止函数' },
      { code: 'stop()', explanation: '调用停止函数停止侦听' },
      { code: 'if (condition) stop()', explanation: '条件性停止侦听器' }
    ])

    return {
      // 代码示例
      basicWatchCode,
      watchSourcesCode,
      deepWatchCode,
      watchEffectCode,
      watchOptionsCode,
      stopWatcherCode,
      // 计算属性
      basicWatchCodeExplanation,
      watchSourcesCodeExplanation,
      deepWatchCodeExplanation,
      watchEffectCodeExplanation,
      watchOptionsCodeExplanation,
      stopWatcherCodeExplanation
    }
  }
})
</script>

<style scoped>
.watchers-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.page-header {
  text-align: center;
  margin-bottom: 3rem;
  padding: 2rem;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  border-radius: 12px;
}

.page-header h1 {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.page-description {
  font-size: 1.1rem;
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

.demo-section {
  margin-bottom: 4rem;
}

.demo-section h2 {
  color: #2c3e50;
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #4FC08D;
  display: inline-block;
}

.demo-container {
  margin: 2rem 0;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .watchers-demo {
    padding: 1rem;
  }
  
  .page-header {
    padding: 1.5rem;
  }
  
  .page-header h1 {
    font-size: 2rem;
  }
  
  .demo-section h2 {
    font-size: 1.5rem;
  }
}
</style>