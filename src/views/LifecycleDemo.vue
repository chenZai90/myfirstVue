<template>
  <div class="lifecycle-demo">
    <h1>Vue 3 生命周期</h1>
    <p class="intro">学习Vue 3组件的生命周期钩子函数，了解组件从创建到销毁的完整过程。</p>
    
    <!-- 生命周期概览 -->
    <div class="demo-section">
      <h2>🔄 生命周期概览</h2>
      
      <CommentBox 
        title="Vue 3 生命周期钩子"
        description="Vue 3的生命周期钩子函数是组件开发的核心概念，它们定义了组件从创建到销毁的完整生命周期。通过合理使用这些钩子，我们可以在正确的时机执行相应的逻辑，实现高效的组件管理。组合式API使用on前缀的函数来注册生命周期钩子，提供了更灵活和可组合的方式来处理组件的生命周期事件。"
        :concepts="[
          { name: 'onBeforeMount', description: '组件挂载前调用，此时模板已编译但尚未挂载到DOM' },
          { name: 'onMounted', description: '组件挂载后调用，可以安全访问DOM和进行初始化操作' },
          { name: 'onBeforeUpdate', description: '响应式数据变化导致组件重新渲染前调用' },
          { name: 'onUpdated', description: '组件重新渲染完成后调用，DOM已更新' },
          { name: 'onBeforeUnmount', description: '组件卸载前调用，适合进行清理准备工作' },
          { name: 'onUnmounted', description: '组件卸载后调用，用于清理副作用和释放资源' },
          { name: 'setup函数', description: '相当于Vue 2中的beforeCreate和created的组合' },
          { name: '钩子组合', description: '可以注册多个相同的生命周期钩子，按注册顺序执行' }
        ]"
        :code-explanation="basicLifecycleExplanations"
        :notes="[
          'setup()函数在组件实例创建时立即执行，相当于beforeCreate和created',
          '所有生命周期钩子必须在setup()函数中同步调用，不能在异步回调中注册',
          '合理使用生命周期钩子可以显著提升应用性能和用户体验',
          '务必在onUnmounted中清理所有副作用，防止内存泄漏',
          '服务端渲染(SSR)环境下，某些钩子(如onMounted)不会执行'
        ]"
      />
      
      <DemoRunner 
        title="生命周期日志示例"
        :component="LifecycleLogDemo"
      />
      
      <CodeBlock 
        title="生命周期钩子代码"
        :code="lifecycleCode"
        language="vue"
      />
    </div>
    
    <!-- onMounted 挂载后 -->
    <div class="demo-section">
      <h2>🚀 onMounted - 组件挂载后</h2>
      
      <CommentBox 
        title="onMounted 使用场景"
        description="onMounted是最常用的生命周期钩子之一，在组件成功挂载到DOM后调用。此时组件的模板已经渲染完成，所有的DOM元素都可以安全访问，是进行DOM操作、数据获取、第三方库初始化的最佳时机。这个钩子确保了我们可以在一个稳定的环境中执行需要DOM支持的操作。"
        :concepts="[
          { name: 'DOM操作', description: '安全访问和操作DOM元素，获取元素尺寸、位置等信息' },
          { name: 'API数据获取', description: '发起网络请求获取初始数据，填充组件内容' },
          { name: '第三方库初始化', description: '初始化图表库、地图组件、富文本编辑器等第三方组件' },
          { name: '事件监听器注册', description: '注册全局事件监听器，如窗口大小变化、滚动事件等' },
          { name: '定时器启动', description: '启动定时任务、轮询操作或动画效果' },
          { name: '焦点管理', description: '设置初始焦点、自动聚焦到特定输入框' },
          { name: '性能监控', description: '开始性能监控、用户行为追踪等分析工具' }
        ]"
        :code-explanation="mountedExplanations"
        :notes="[
          '在服务端渲染(SSR)环境中，onMounted不会被调用，因为服务端没有DOM',
          '当onMounted执行时，所有子组件也已经完成挂载，可以安全地与子组件交互',
          '这是访问$refs和DOM元素的最早安全时机',
          '适合进行需要DOM尺寸计算的初始化工作',
          '如果需要在数据变化后操作DOM，应该使用nextTick确保DOM更新完成'
        ]"
      />
      
      <DemoRunner 
        title="onMounted 实际应用"
        :component="MountedDemo"
      />
      
      <CodeBlock 
        title="onMounted 代码示例"
        :code="mountedCode"
        language="vue"
      />
    </div>
    
    <!-- onUpdated 更新后 -->
    <div class="demo-section">
      <h2>🔄 onUpdated - 组件更新后</h2>
      
      <CommentBox 
        title="onUpdated 使用场景"
        description="onUpdated在组件因响应式数据变化而重新渲染并更新DOM后调用。这个钩子让我们能够在DOM更新完成后执行相关操作，但需要谨慎使用以避免性能问题。它主要用于需要基于最新DOM状态进行的操作，如第三方库的状态同步、布局调整等。"
        :concepts="[
          { name: 'DOM更新后操作', description: '在DOM更新完成后进行元素尺寸测量、位置计算等操作' },
          { name: '第三方库状态同步', description: '将Vue组件的状态变化同步到第三方库，如图表、地图等' },
          { name: '滚动位置调整', description: '根据内容变化自动调整滚动位置，保持用户体验' },
          { name: '尺寸重新计算', description: '重新计算元素尺寸，调整布局或响应式设计' },
          { name: '动画触发', description: '基于DOM变化触发相应的动画效果' },
          { name: '性能监控', description: '监控组件更新频率和性能指标' },
          { name: '用户体验优化', description: '根据内容变化优化用户界面和交互体验' }
        ]"
        :code-explanation="updatedExplanations"
        :notes="[
          '严格避免在onUpdated中直接修改响应式数据，这会导致无限更新循环',
          '如果必须修改数据，应该添加条件判断或使用防抖/节流机制',
          '对于频繁更新的组件，onUpdated可能会被频繁调用，需要考虑性能影响',
          '使用nextTick可以确保在DOM完全更新后再执行操作',
          '可以通过比较前后状态来避免不必要的操作执行'
        ]"
      />
      
      <DemoRunner 
        title="onUpdated 实际应用"
        :component="UpdatedDemo"
      />
      
      <CodeBlock 
        title="onUpdated 代码示例"
        :code="updatedCode"
        language="vue"
      />
    </div>
    
    <!-- onUnmounted 卸载后 -->
    <div class="demo-section">
      <h2>🧹 onUnmounted - 组件卸载后</h2>
      
      <CommentBox 
        title="onUnmounted 清理工作"
        description="onUnmounted是组件生命周期中最重要的清理阶段，在组件从DOM中移除后调用。这个钩子是防止内存泄漏和确保应用性能的关键环节。所有在组件生命周期中创建的副作用、监听器、定时器等都应该在这里进行清理，确保组件销毁后不会留下任何痕迹。"
        :concepts="[
          { name: '清理定时器', description: '清除所有setInterval、setTimeout创建的定时器' },
          { name: '移除事件监听器', description: '移除手动添加的DOM事件监听器和全局事件监听器' },
          { name: '取消网络请求', description: '取消未完成的fetch请求、WebSocket连接等网络操作' },
          { name: '清理第三方库', description: '销毁第三方库实例，释放其占用的资源' },
          { name: '清理观察器', description: '断开IntersectionObserver、MutationObserver等观察器' },
          { name: '释放内存引用', description: '清除大对象引用，帮助垃圾回收器回收内存' },
          { name: '清理缓存', description: '清除组件相关的缓存数据和临时文件' },
          { name: '状态重置', description: '重置全局状态中与该组件相关的部分' }
        ]"
        :code-explanation="unmountedExplanations"
        :notes="[
          'onUnmounted是防止内存泄漏的最后一道防线，必须认真对待',
          '清理工作应该与创建工作一一对应，确保没有遗漏',
          '使用AbortController可以优雅地取消fetch请求和其他异步操作',
          '对于复杂的第三方库，查阅文档了解正确的销毁方法',
          '在开发环境中可以添加日志来确认清理工作是否正确执行'
        ]"
      />
      
      <div class="demo-container">
        <DemoRunner :component="UnmountedDemo" title="onUnmounted 清理示例" />
      </div>
      
      <CodeBlock 
        :code="unmountedCode"
        language="javascript"
        title="onUnmounted 代码示例"
      />
    </div>
    
    <!-- 生命周期实战 -->
    <section class="demo-section">
      <h2>⚡ 生命周期实战应用</h2>
      
      <CommentBox 
        title="实际项目中的应用"
        description="结合多个生命周期钩子，实现完整的组件生命周期管理，包括数据获取、性能监控、资源清理等。"
        :concepts="[
          { name: '数据获取和缓存', description: '在合适的时机获取和缓存数据' },
          { name: '性能监控', description: '监控组件的性能指标' },
          { name: '用户行为追踪', description: '追踪用户的交互行为' },
          { name: '资源管理', description: '合理管理组件的资源' }
        ]"
        :code-explanation="practicalExplanations"
        :notes="[
          '合理规划生命周期逻辑',
          '避免在错误的时机执行操作',
          '注意性能影响',
          '确保资源正确释放'
        ]"
      />
      
      <div class="demo-container">
        <DemoRunner :component="LifecyclePracticalDemo" title="生命周期综合应用" />
      </div>
      
      <CodeBlock 
        :code="practicalCode"
        language="javascript"
        title="生命周期实战代码"
      />
    </section>
  </div>
</template>

<script setup>
import { defineComponent, ref, reactive, onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted, nextTick } from 'vue'
import CommentBox from '@/components/CodeDemo/CommentBox.vue'
import DemoRunner from '@/components/CodeDemo/DemoRunner.vue'
import CodeBlock from '@/components/CodeDemo/CodeBlock.vue'

// 生命周期说明数据
const basicLifecycleExplanations = [
  'onMounted(() => { ... }) - 生命周期钩子在setup()中注册',
  'onMounted(() => { ... }); onMounted(() => { ... }) - 可以注册多个相同的钩子',
  'console.log(执行顺序) - 钩子函数按注册顺序执行',
  'onUnmounted(() => { cleanup() }) - 用于处理副作用和清理工作'
]

const mountedExplanations = [
  'onMounted(() => { ... }) - 组件已挂载到DOM',
  'const el = ref.value - 可以访问$refs和DOM元素',
  'fetchData() - 适合进行API调用',
  'initChart() - 初始化第三方库'
]

const updatedExplanations = [
  'count.value++ - 响应式数据变化触发',
  'nextTick(() => { ... }) - DOM已经更新完成',
  'el.scrollHeight - 可以访问新的DOM状态',
  '// 避免: data.value = newValue - 避免在此修改响应式数据'
]

const unmountedExplanations = [
  'onUnmounted(() => { ... }) - 组件即将被销毁',
  'clearInterval(timer) - 清理所有副作用',
  'removeEventListener(...) - 移除事件监听器',
  'controller.abort() - 取消异步操作'
]

const practicalExplanations = [
  'onMounted(() => { startMonitoring() }) - 开始性能监控',
  'onUpdated(() => { trackUpdate() }) - 追踪更新事件',
  'onUnmounted(() => { cleanup() }) - 清理所有资源'
]

// 生命周期日志示例组件
// 用于演示Vue 3生命周期钩子的执行顺序和触发时机
const LifecycleLogDemo = defineComponent({
  setup() {
    // 响应式数据：存储生命周期执行日志
    const logs = ref([])        // 日志列表，记录每个生命周期钩子的执行情况
    const count = ref(0)        // 计数器，用于触发组件更新以观察update相关钩子
    const isVisible = ref(true) // 控制组件显示/隐藏，用于观察mount/unmount钩子
    
    // 添加日志记录的辅助函数
    // 每当生命周期钩子执行时，记录执行时间和消息
    const addLog = (message) => {
      const timestamp = new Date().toLocaleTimeString() // 获取当前时间戳
      logs.value.push({ message, timestamp, id: Date.now() }) // 添加到日志列表
    }
    
    // 组件挂载前钩子
    // 在组件实例创建完成、模板编译后，但尚未挂载到DOM前调用
    onBeforeMount(() => {
      addLog('🔄 onBeforeMount: 组件即将挂载')
    })
    
    // 组件挂载后钩子
    // 在组件挂载到DOM后调用，此时可以访问DOM元素
    onMounted(() => {
      addLog('✅ onMounted: 组件已挂载到DOM')
    })
    
    // 组件更新前钩子
    // 在响应式数据变化导致组件重新渲染前调用
    onBeforeUpdate(() => {
      addLog('🔄 onBeforeUpdate: 组件即将更新')
    })
    
    // 组件更新后钩子
    // 在组件重新渲染完成、DOM更新后调用
    onUpdated(() => {
      addLog('✅ onUpdated: 组件已更新完成')
    })
    
    // 组件卸载前钩子
    // 在组件实例被销毁前调用，此时组件仍然完全可用
    onBeforeUnmount(() => {
      addLog('🔄 onBeforeUnmount: 组件即将卸载')
    })
    
    // 组件卸载后钩子
    // 在组件实例被销毁后调用，用于清理工作
    onUnmounted(() => {
      console.log('✅ onUnmounted: 组件已卸载')
    })
    
    // 增加计数器的方法
    // 用于触发组件更新，观察onBeforeUpdate和onUpdated钩子的执行
    const increment = () => {
      count.value++ // 修改响应式数据，触发组件重新渲染
    }
    
    // 清空日志的方法
    // 清除所有已记录的生命周期日志
    const clearLogs = () => {
      logs.value = [] // 清空日志数组
    }
    
    // 切换组件显示状态的方法
    // 用于观察组件的挂载和卸载过程
    const toggleComponent = () => {
      isVisible.value = !isVisible.value // 切换显示状态
    }
    
    return {
      logs,
      count,
      isVisible,
      increment,
      clearLogs,
      toggleComponent
    }
  }
})

// onMounted 钩子使用示例组件
// 演示在组件挂载后进行数据获取、DOM操作和事件监听的最佳实践
const MountedDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const userList = ref([])     // 用户列表数据，从API获取
    const loading = ref(false)   // 加载状态，控制加载指示器的显示
    const error = ref('')        // 错误信息，存储请求失败时的错误消息
    const windowSize = ref({ width: 0, height: 0 }) // 窗口尺寸，用于响应式布局
    
    // 异步获取用户数据的方法
    // 模拟从API获取用户列表，展示在onMounted中进行数据获取的典型用法
    const fetchUsers = async () => {
      loading.value = true  // 开始加载，显示加载指示器
      error.value = ''      // 清空之前的错误信息
      
      try {
        // 模拟网络请求延迟（实际项目中这里会是真实的API调用）
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 模拟从服务器获取的用户数据
        userList.value = [
          { id: 1, name: '张三', email: 'zhangsan@example.com', avatar: '👨‍💼' },
          { id: 2, name: '李四', email: 'lisi@example.com', avatar: '👩‍💻' },
          { id: 3, name: '王五', email: 'wangwu@example.com', avatar: '👨‍🎓' }
        ]
      } catch (err) {
        // 处理请求失败的情况
        error.value = '获取用户数据失败'
      } finally {
        // 无论成功还是失败，都要停止加载状态
        loading.value = false
      }
    }
    
    // 更新窗口尺寸的方法
    // 获取当前窗口的宽度和高度，用于响应式布局调整
    const updateWindowSize = () => {
      windowSize.value = {
        width: window.innerWidth,   // 获取窗口内部宽度
        height: window.innerHeight  // 获取窗口内部高度
      }
    }
    
    // onMounted钩子：组件挂载后执行的初始化工作
    // 这是进行数据获取、DOM操作、事件监听的最佳时机
    onMounted(() => {
      fetchUsers()  // 获取初始用户数据
      window.addEventListener('resize', updateWindowSize)  // 添加窗口大小变化监听器
      updateWindowSize()  // 获取初始窗口尺寸
    })
    
    // onUnmounted钩子：组件卸载时清理资源
    // 移除事件监听器，防止内存泄漏
    onUnmounted(() => {
      window.removeEventListener('resize', updateWindowSize)  // 清理事件监听器
    })
    
    return {
      userList,
      loading,
      error,
      windowSize,
      fetchUsers
    }
  }
})

// onUpdated 钩子使用示例组件
// 演示在组件更新后进行DOM操作和状态同步的最佳实践
const UpdatedDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const items = ref(['项目 1', '项目 2', '项目 3'])  // 列表数据，用于演示更新操作
    const updateCount = ref(0)                      // 更新次数计数器
    const scrollContainer = ref(null)               // 滚动容器的DOM引用
    
    // onUpdated钩子：组件更新后执行
    // 在DOM更新完成后进行必要的操作，如滚动位置调整
    onUpdated(() => {
      updateCount.value++  // 记录组件更新次数
      
      // 使用nextTick确保DOM完全更新后再执行操作
      nextTick(() => {
        if (scrollContainer.value) {
          // 自动滚动到容器底部，显示最新添加的内容
          scrollContainer.value.scrollTop = scrollContainer.value.scrollHeight
        }
      })
    })
    
    // 添加新项目的方法
    // 向列表末尾添加新的项目，触发组件更新
    const addItem = () => {
      const newItem = `项目 ${items.value.length + 1}`
      items.value.push(newItem)  // 添加新项目
    }
    
    // 移除指定索引项目的方法
    // 从列表中移除指定位置的项目，触发组件更新
    const removeItem = (index) => {
      items.value.splice(index, 1)  // 移除指定索引的项目
    }
    
    return {
      items,
      updateCount,
      scrollContainer,
      addItem,
      removeItem
    }
  }
})

// onUnmounted 钩子使用示例组件
// 演示在组件卸载时进行资源清理和内存泄漏防护的最佳实践
const UnmountedDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const timer = ref(null)      // 定时器引用，用于清理
    const count = ref(0)         // 计数器，展示定时器效果
    const isActive = ref(true)   // 组件活跃状态abortController = ref(null)
    
    // 启动定时器的方法
    // 创建一个每秒递增计数器的定时器
    const startTimer = () => {
      if (timer.value) clearInterval(timer.value)  // 清理已存在的定时器
      timer.value = setInterval(() => {
        count.value++  // 每秒递增计数器
      }, 1000)
    }
    
    const stopTimer = () => {
      if (timer.value) {
        clearInterval(timer.value)
        timer.value = null
      }
    }
    
    // onMounted钩子：组件挂载后启动定时器
    onMounted(() => {
      startTimer()  // 启动定时器
    })
    
    // onUnmounted钩子：组件卸载时清理资源
    // 这是防止内存泄漏的关键步骤
    onUnmounted(() => {
      stopTimer()
      if (abortController.value) {
        abortController.value.abort()
      }
      console.log('✅ 所有资源已清理')
    })
    
    return {
      count,
      startTimer,
      stopTimer
    }
  }
})

// 生命周期实战应用示例组件
// 综合演示所有生命周期钩子在真实项目中的应用场景
// 包括性能监控、数据管理、资源清理等最佳实践
const LifecyclePracticalDemo = defineComponent({
  setup() {
    // 业务数据相关的响应式状态
    const userData = ref(null)    // 用户数据，从API获取
    const loading = ref(false)    // 加载状态，控制UI显示
    const error = ref('')         // 错误信息，用于错误处理
    
    // 性能监控相关的响应式状态
    const mountTime = ref(0)      // 组件挂载开始时间
    const updateCount = ref(0)    // 组件更新次数统计
    const performanceData = ref({
      mountDuration: 0,    // 挂载耗时（毫秒）
      renderCount: 0,      // 渲染次数
      lastUpdateTime: 0    // 最后更新时间
    })
    // 资源管理相关的响应式引用
    const abortController = ref(null)  // 用于取消网络请求的控制器
    
    // 性能监控变量
    let mountStartTime = 0  // 组件挂载开始时间戳
    
    // 异步获取用户数据的方法
    // 展示如何在组件中进行可取消的网络请求
    const fetchUserData = async () => {
      loading.value = true  // 开始加载状态
      
      // 如果有正在进行的请求，先取消它
      if (abortController.value) {
        abortController.value.abort()
      }
      
      // 创建新的请求控制器
      abortController.value = new AbortController()
      
      try {
        // 模拟网络请求延迟
        await new Promise(resolve => setTimeout(resolve, 1000))
        
        // 模拟获取的用户数据
        userData.value = {
          name: '用户示例',
          email: 'user@example.com',
          avatar: '👤'
        }
      } catch (error) {
        // 只处理非取消错误
        if (error.name !== 'AbortError') {
          console.error('获取数据失败:', error)
        }
      } finally {
        // 无论成功失败都要停止加载状态
        loading.value = false
      }
    }
    
    // onBeforeMount钩子：组件挂载前的准备工作
    // 记录挂载开始时间，用于性能监控
    onBeforeMount(() => {
      mountStartTime = performance.now()  // 记录挂载开始时间
    })
    
    // onMounted钩子：组件挂载后的初始化工作
    // 这是进行数据获取、DOM操作、性能统计的最佳时机
    onMounted(() => {
      const mountTime = performance.now() - mountStartTime  // 计算挂载耗时
      performanceData.value.mountDuration = Math.round(mountTime)  // 保存挂载耗时
      fetchUserData()  // 获取初始数据
      console.log('组件挂载完成，耗时:', mountTime, 'ms')
    })
    
    // onUpdated钩子：组件更新后的处理
    // 统计更新次数，记录最后更新时间
    onUpdated(() => {
      performanceData.value.renderCount++  // 增加渲染次数
      performanceData.value.lastUpdateTime = Date.now()  // 记录最后更新时间
      console.log('组件更新次数:', performanceData.value.renderCount)
    })
    
    // onUnmounted钩子：组件卸载时的资源清理
    // 取消正在进行的请求，防止内存泄漏
    onUnmounted(() => {
      if (abortController.value) {
        abortController.value.abort()  // 取消网络请求
      }
      console.log('组件已卸载，资源已清理')
    })
    
    return {
      userData,
      loading,
      performanceData,
      fetchUserData
    }
  }
})

// 代码示例
const lifecycleCode = `// Vue 3 生命周期钩子函数概览
// 生命周期钩子是 Vue 组件在不同阶段自动调用的函数
// 它们让我们能够在组件的特定时刻执行代码
import { onBeforeMount, onMounted, onBeforeUpdate, onUpdated, onBeforeUnmount, onUnmounted } from 'vue'

export default {
  setup() {
    // 1. onBeforeMount - 组件挂载前
    // 触发时机：组件实例已创建，但还未挂载到 DOM
    // 适用场景：数据初始化、状态设置
    onBeforeMount(() => {
      console.log('组件即将挂载')
      // 此时可以访问响应式数据，但无法访问 DOM 元素
      // 适合进行数据预处理、状态初始化等工作
    })
    
    // 2. onMounted - 组件挂载后
    // 触发时机：组件已挂载到 DOM，可以访问 DOM 元素
    // 适用场景：DOM 操作、数据获取、第三方库初始化
    onMounted(() => {
      console.log('组件已挂载')
      // 此时组件的 DOM 已经存在，可以：
      // - 获取 DOM 元素引用
      // - 发起网络请求
      // - 初始化第三方库（如图表、地图等）
      // - 添加事件监听器
    })
    
    // 3. onBeforeUpdate - 组件更新前
    // 触发时机：响应式数据变化，DOM 即将更新
    // 适用场景：获取更新前的 DOM 状态
    onBeforeUpdate(() => {
      console.log('组件即将更新')
      // 可以在这里获取更新前的 DOM 状态
      // 注意：不要在这里修改响应式数据，会导致无限循环
    })
    
    // 4. onUpdated - 组件更新后
    // 触发时机：DOM 已根据响应式数据的变化完成更新
    // 适用场景：DOM 更新后的操作、第三方库状态同步
    onUpdated(() => {
      console.log('组件已更新')
      // DOM 已更新完成，可以：
      // - 访问更新后的 DOM 元素
      // - 重新计算布局
      // - 更新第三方库状态
      // 注意：避免在这里修改响应式数据
    })
    
    // 5. onBeforeUnmount - 组件卸载前
    // 触发时机：组件即将被销毁，但仍然可以访问组件实例
    // 适用场景：清理工作的准备
    onBeforeUnmount(() => {
      console.log('组件即将卸载')
      // 组件仍然完全可用，可以进行清理前的准备工作
    })
    
    // 6. onUnmounted - 组件卸载后
    // 触发时机：组件已被销毁，从 DOM 中移除
    // 适用场景：资源清理、内存释放
    onUnmounted(() => {
      console.log('组件已卸载')
      // 组件已被销毁，必须进行清理工作：
      // - 清除定时器
      // - 取消网络请求
      // - 移除事件监听器
      // - 销毁第三方库实例
      // 这是防止内存泄漏的关键步骤
    })
    
    // 生命周期钩子的特点：
    // 1. 自动调用：无需手动触发，Vue 会在适当时机自动调用
    // 2. 执行顺序：按照组件的生命周期阶段依次执行
    // 3. 异步支持：钩子函数可以是异步的
    // 4. 多次注册：同一个钩子可以注册多次，会按注册顺序执行
  }
}`

const mountedCode = `// onMounted 使用示例 - 数据获取和DOM操作
// onMounted 是组件挂载后执行的生命周期钩子
// 这是进行 DOM 操作、数据获取、第三方库初始化的最佳时机
import { ref, onMounted } from 'vue'

export default {
  setup() {
    // 响应式数据定义
    const data = ref(null)        // 存储获取的数据
    const loading = ref(false)    // 加载状态
    const chartInstance = ref(null) // 图表实例引用
    
    // 异步获取数据的函数
    const fetchData = async () => {
      loading.value = true
      console.log('开始获取数据')
      
      try {
        // 模拟网络请求
        const response = await fetch('/api/data')
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`)
        }
        
        data.value = await response.json()
        console.log('数据获取成功:', data.value)
      } catch (error) {
        console.error('获取数据失败:', error)
        // 可以设置错误状态或显示错误消息
      } finally {
        loading.value = false
        console.log('数据获取完成')
      }
    }
    
    // 窗口大小改变的处理函数
    const handleResize = () => {
      console.log('窗口大小改变，当前尺寸:', window.innerWidth, 'x', window.innerHeight)
      
      // 如果有图表实例，重新调整大小
      if (chartInstance.value) {
        chartInstance.value.resize()
      }
    }
    
    // 初始化图表的函数
    const initChart = () => {
      // 模拟第三方图表库初始化
      console.log('初始化图表')
      
      // 假设这是一个图表库的初始化代码
      // chartInstance.value = new Chart({
      //   container: '#chart-container',
      //   data: data.value,
      //   type: 'line'
      // })
      
      console.log('图表初始化完成')
    }
    
    // 组件挂载后执行 - 这是最重要的生命周期钩子之一
    onMounted(() => {
      console.log('组件已挂载到 DOM，开始初始化工作')
      
      // 1. 获取初始数据
      // 这是获取数据的最佳时机，因为组件已经存在于 DOM 中
      fetchData()
      
      // 2. 添加全局事件监听器
      // 监听窗口大小变化，用于响应式布局调整
      window.addEventListener('resize', handleResize)
      console.log('已添加窗口大小监听器')
      
      // 3. 初始化第三方库
      // 许多第三方库需要在 DOM 元素存在后才能初始化
      initChart()  // 初始化图表
      
      // 其他可能的初始化工作：
      // - 初始化地图库：initMap()
      // - 初始化富文本编辑器：initEditor()
      // - 初始化拖拽功能：initDragDrop()
      // - 获取 DOM 元素引用并进行操作
      
      console.log('所有初始化工作完成')
    })
    
    // 返回模板需要的数据和方法
    return {
      data,           // 数据
      loading,        // 加载状态
      fetchData       // 手动刷新数据的方法
    }
    
    // onMounted 的最佳实践：
    // 1. 数据获取：发起 API 请求获取初始数据
    // 2. DOM 操作：获取 DOM 元素引用，设置焦点等
    // 3. 事件监听：添加全局事件监听器（记得在 onUnmounted 中清理）
    // 4. 第三方库：初始化需要 DOM 的第三方库
    // 5. 定时器：启动定时任务（记得在 onUnmounted 中清理）
  }
}`

const updatedCode = `// onUpdated 使用示例 - DOM更新后的操作
// onUpdated 在组件因响应式数据变化而重新渲染后调用
// 这是处理 DOM 更新后操作的最佳时机
import { ref, onUpdated, nextTick } from 'vue'

export default {
  setup() {
    // 响应式数据定义
    const list = ref(['项目1', '项目2', '项目3'])  // 列表数据
    const scrollContainer = ref(null)              // 滚动容器的引用
    const updateCount = ref(0)                     // 更新次数统计
    
    // 组件更新后执行 - 重要的生命周期钩子
    onUpdated(() => {
      // 每次组件更新都会执行这里的代码
      updateCount.value++
      console.log('组件已更新，第', updateCount.value, '次更新')
      
      // 使用 nextTick 确保 DOM 完全更新完成
      // nextTick 会在下一个 DOM 更新周期后执行回调
      nextTick(() => {
        console.log('DOM 更新完成，开始后续操作')
        
        // 1. 自动滚动到底部
        // 当列表内容增加时，自动滚动到最新内容
        if (scrollContainer.value) {
          const container = scrollContainer.value
          const shouldScroll = container.scrollTop + container.clientHeight >= container.scrollHeight - 10
          
          if (shouldScroll) {
            container.scrollTop = container.scrollHeight
            console.log('已滚动到底部')
          }
        }
        
        // 2. 重新计算布局
        // 当内容变化时，可能需要重新计算元素尺寸
        // recalculateLayout()
        
        // 3. 更新第三方库状态
        // 同步第三方库的数据和状态
        // if (chartInstance.value) {
        //   chartInstance.value.updateData(list.value)
        //   console.log('图表数据已更新')
        // }
        
        // 4. 触发自定义事件
        // 通知父组件或其他组件数据已更新
        // emit('dataUpdated', list.value)
        
        // 5. 性能监控
        // 可以在这里记录更新性能数据
        console.log('当前列表长度:', list.value.length)
      })
    })
    
    // 添加新项目的方法
    const addItem = () => {
      const timestamp = Date.now()
      const newItem = \`新项目 \${timestamp}\`
      
      list.value.push(newItem)
      console.log('添加新项目:', newItem)
      
      // 这会触发响应式更新，进而触发 onUpdated 钩子
      // Vue 会自动检测到 list.value 的变化并重新渲染组件
    }
    
    // 删除项目的方法
    const removeItem = (index) => {
      if (index >= 0 && index < list.value.length) {
        const removedItem = list.value.splice(index, 1)[0]
        console.log('删除项目:', removedItem)
        // 这也会触发组件更新
      }
    }
    
    // 清空列表的方法
    const clearList = () => {
      list.value = []
      console.log('列表已清空')
      // 这会触发大幅度的 DOM 更新
    }
    
    return {
      list,              // 列表数据
      scrollContainer,   // 滚动容器引用
      updateCount,       // 更新次数
      addItem,           // 添加项目方法
      removeItem,        // 删除项目方法
      clearList          // 清空列表方法
    }
    
    // onUpdated 的注意事项：
    // 1. 避免在 onUpdated 中修改响应式数据，可能导致无限循环
    // 2. 使用 nextTick 确保 DOM 完全更新后再执行操作
    // 3. 考虑性能影响，避免在 onUpdated 中执行耗时操作
    // 4. 可以用于同步第三方库状态、调整布局、滚动位置等
  }
}`

const unmountedCode = `// onUnmounted 使用示例 - 资源清理
// onUnmounted 是组件卸载时执行的生命周期钩子
// 这是清理资源、防止内存泄漏的关键时机
import { ref, onMounted, onUnmounted } from 'vue'

export default {
  setup() {
    // 创建响应式引用来存储需要清理的资源
    const timer = ref(null)           // 定时器引用
    const abortController = ref(null) // 网络请求控制器
    const eventListeners = ref([])    // 事件监听器列表
    const thirdPartyInstances = ref({}) // 第三方库实例
    
    // 启动定时器的函数
    const startTimer = () => {
      // 创建定时器，每秒执行一次
      timer.value = setInterval(() => {
        console.log('定时任务执行:', new Date().toLocaleTimeString())
        // 模拟定时任务：数据轮询、状态更新、心跳检测等
      }, 1000)
      
      console.log('定时器已启动，ID:', timer.value)
    }
    
    // 可取消的网络请求函数
    const fetchData = async () => {
      // 取消之前的请求（如果存在）
      if (abortController.value) {
        abortController.value.abort()
        console.log('取消之前的请求')
      }
      
      // 创建新的 AbortController 来控制请求
      abortController.value = new AbortController()
      
      try {
        console.log('开始网络请求')
        const response = await fetch('/api/data', {
          signal: abortController.value.signal  // 传入信号以支持取消
        })
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`)
        }
        
        const data = await response.json()
        console.log('请求成功:', data)
        return data
      } catch (error) {
        // 区分正常错误和取消错误
        if (error.name !== 'AbortError') {
          console.error('请求失败:', error)
        } else {
          console.log('请求已取消')
        }
      }
    }
    
    // 添加事件监听器的函数
    const addEventListeners = () => {
      // 窗口大小改变监听器
      const handleResize = () => {
        console.log('窗口大小改变')
      }
      
      // 滚动监听器
      const handleScroll = () => {
        console.log('页面滚动')
      }
      
      // 添加事件监听器
      window.addEventListener('resize', handleResize)
      document.addEventListener('scroll', handleScroll)
      
      // 保存监听器引用，用于后续清理
      eventListeners.value = [
        { target: window, event: 'resize', handler: handleResize },
        { target: document, event: 'scroll', handler: handleScroll }
      ]
      
      console.log('事件监听器已添加')
    }
    
    // 初始化第三方库的函数
    const initThirdPartyLibs = () => {
      // 模拟初始化图表库
      // thirdPartyInstances.value.chart = new Chart({
      //   container: '#chart',
      //   data: []
      // })
      
      // 模拟初始化地图库
      // thirdPartyInstances.value.map = new Map({
      //   container: '#map',
      //   center: [0, 0]
      // })
      
      console.log('第三方库已初始化')
    }
    
    // 组件挂载时启动资源
    onMounted(() => {
      console.log('组件挂载，开始启动各种资源')
      
      startTimer()           // 启动定时器
      fetchData()            // 发起网络请求
      addEventListeners()    // 添加事件监听器
      initThirdPartyLibs()   // 初始化第三方库
      
      console.log('所有资源启动完成')
    })
    
    // 组件卸载时清理所有资源 - 这是防止内存泄漏的关键
    onUnmounted(() => {
      console.log('组件即将卸载，开始清理资源')
      
      // 1. 清理定时器
      // 防止内存泄漏和不必要的后台任务
      if (timer.value) {
        clearInterval(timer.value)
        timer.value = null
        console.log('✅ 定时器已清理')
      }
      
      // 2. 取消进行中的网络请求
      // 避免组件卸载后仍然处理响应，防止状态更新错误
      if (abortController.value) {
        abortController.value.abort()
        abortController.value = null
        console.log('✅ 网络请求已取消')
      }
      
      // 3. 移除所有事件监听器
      // 防止内存泄漏和意外的事件处理
      eventListeners.value.forEach(({ target, event, handler }) => {
        target.removeEventListener(event, handler)
      })
      eventListeners.value = []
      console.log('✅ 事件监听器已清理')
      
      // 4. 清理第三方库实例
      // 销毁第三方库实例，释放相关资源
      Object.values(thirdPartyInstances.value).forEach(instance => {
        if (instance && typeof instance.destroy === 'function') {
          instance.destroy()
        }
      })
      thirdPartyInstances.value = {}
      console.log('✅ 第三方库实例已清理')
      
      // 5. 清理其他可能的资源
      // - WebSocket 连接
      // - IndexedDB 连接
      // - Web Workers
      // - 文件读取器等
      
      console.log('✅ 所有资源已清理完成，组件可以安全卸载')
    })
    
    return {
      // 可以返回一些状态供模板使用
      fetchData,  // 手动触发数据获取
      startTimer  // 手动启动定时器
    }
    
    // onUnmounted 的重要性：
    // 1. 防止内存泄漏：清理定时器、事件监听器等
    // 2. 避免错误：取消网络请求、停止异步操作
    // 3. 资源释放：销毁第三方库实例、关闭连接
    // 4. 性能优化：停止不必要的后台任务
  }
}`

const practicalCode = `// 生命周期钩子实战应用示例
// 展示如何在真实项目中使用生命周期钩子进行数据获取、性能监控和资源管理
// 这是一个综合性的示例，涵盖了生命周期钩子的典型应用场景
import { ref, onBeforeMount, onMounted, onUpdated, onUnmounted } from 'vue'

export default {
  setup() {
    // 响应式数据定义
    const userData = ref(null)        // 用户数据
    const loading = ref(false)        // 加载状态
    const error = ref(null)           // 错误信息
    const performanceData = ref({     // 性能监控数据
      mountTime: 0,                   // 组件挂载耗时
      updateCount: 0,                 // 组件更新次数
      lastUpdateTime: 0               // 最后更新时间
    })
    
    // 性能监控和资源管理变量
    let mountStartTime = 0            // 挂载开始时间
    let updateStartTime = 0           // 更新开始时间
    const abortController = ref(null) // 请求控制器
    const timers = ref([])            // 定时器列表
    const eventListeners = ref([])    // 事件监听器列表
    
    // 获取用户数据的异步函数
    const fetchUserData = async () => {
      loading.value = true
      error.value = null
      console.log('开始获取用户数据')
      
      // 取消之前的请求，避免竞态条件
      // 这是处理并发请求的重要技巧
      if (abortController.value) {
        abortController.value.abort()
        console.log('取消之前的请求，避免竞态条件')
      }
      
      // 创建新的请求控制器
      abortController.value = new AbortController()
      
      try {
        const response = await fetch('/api/user', {
          signal: abortController.value.signal,  // 支持请求取消
          headers: {
            'Content-Type': 'application/json',
            // 可以添加认证头等
          }
        })
        
        if (!response.ok) {
          throw new Error(\`HTTP error! status: \${response.status}\`)
        }
        
        userData.value = await response.json()
        console.log('用户数据获取成功:', userData.value)
        
        // 数据获取成功后的处理
        // 可以触发其他相关操作
        
      } catch (error) {
        // 区分取消错误和其他错误
        if (error.name !== 'AbortError') {
          console.error('获取数据失败:', error)
          error.value = error.message
          // 可以在这里设置错误状态或显示错误消息
          // 也可以尝试重试机制
        } else {
          console.log('请求被取消')
        }
      } finally {
        loading.value = false
      }
    }
    
    // 启动心跳检测的函数
    const startHeartbeat = () => {
      const heartbeatTimer = setInterval(() => {
        console.log('心跳检测:', new Date().toLocaleTimeString())
        // 可以发送心跳请求到服务器
      }, 30000) // 每30秒一次
      
      timers.value.push(heartbeatTimer)
      console.log('心跳检测已启动')
    }
    
    // 添加事件监听器的函数
    const setupEventListeners = () => {
      // 网络状态监听
      const handleOnline = () => {
        console.log('网络已连接，重新获取数据')
        fetchUserData()
      }
      
      const handleOffline = () => {
        console.log('网络已断开')
        error.value = '网络连接已断开'
      }
      
      // 页面可见性监听
      const handleVisibilityChange = () => {
        if (document.visibilityState === 'visible') {
          console.log('页面变为可见，刷新数据')
          fetchUserData()
        }
      }
      
      // 添加事件监听器
      window.addEventListener('online', handleOnline)
      window.addEventListener('offline', handleOffline)
      document.addEventListener('visibilitychange', handleVisibilityChange)
      
      // 保存监听器引用用于清理
      eventListeners.value = [
        { target: window, event: 'online', handler: handleOnline },
        { target: window, event: 'offline', handler: handleOffline },
        { target: document, event: 'visibilitychange', handler: handleVisibilityChange }
      ]
      
      console.log('事件监听器已设置')
    }
    
    // 1. onBeforeMount - 组件挂载前的性能监控和预处理
    onBeforeMount(() => {
      mountStartTime = performance.now()
      console.log('组件即将挂载，开始性能监控')
      
      // 可以在这里进行一些预处理工作：
      // - 初始化配置
      // - 设置默认状态
      // - 预加载必要资源
      
      console.log('预处理工作完成')
    })
    
    // 2. onMounted - 组件挂载后的初始化工作
    onMounted(() => {
      // 计算组件挂载耗时
      const mountTime = performance.now() - mountStartTime
      performanceData.value.mountTime = Math.round(mountTime)
      
      console.log('组件挂载完成，耗时:', mountTime, 'ms')
      
      // 获取初始数据
      // 这是获取数据的最佳时机，因为组件已经挂载到DOM
      fetchUserData()
      
      // 启动各种服务和监听器
      startHeartbeat()        // 启动心跳检测
      setupEventListeners()   // 设置事件监听器
      
      // 其他可能的初始化工作：
      // - 初始化第三方库（图表、地图、编辑器等）
      // - 设置焦点到特定元素
      // - 启动数据轮询
      // - 初始化 WebSocket 连接
      
      console.log('所有初始化工作完成')
    })
    
    // 3. onUpdated - 组件更新后的处理和性能监控
    onUpdated(() => {
      // 统计组件更新次数和耗时
      const updateTime = performance.now() - updateStartTime
      performanceData.value.updateCount++
      performanceData.value.lastUpdateTime = Math.round(updateTime)
      
      console.log('组件更新完成，第', performanceData.value.updateCount, '次更新，耗时:', updateTime, 'ms')
      
      // 可以在这里进行更新后的处理：
      // - 重新计算布局
      // - 更新第三方库状态
      // - 滚动到特定位置
      // - 同步数据到本地存储
      
      // 性能监控：如果更新过于频繁，可以发出警告
      if (performanceData.value.updateCount > 100) {
        console.warn('组件更新次数过多，可能存在性能问题')
      }
    })
    
    // 4. onUnmounted - 组件卸载时的资源清理
    onUnmounted(() => {
      console.log('组件即将卸载，开始清理所有资源')
      
      // 取消进行中的网络请求
      if (abortController.value) {
        abortController.value.abort()
        console.log('✅ 网络请求已取消')
      }
      
      // 清理所有定时器
      timers.value.forEach(timer => {
        clearInterval(timer)
      })
      timers.value = []
      console.log('✅ 定时器已清理')
      
      // 移除所有事件监听器
      eventListeners.value.forEach(({ target, event, handler }) => {
        target.removeEventListener(event, handler)
      })
      eventListeners.value = []
      console.log('✅ 事件监听器已清理')
      
      // 其他清理工作：
      // - 清除本地存储的临时数据
      // - 关闭 WebSocket 连接
      // - 销毁第三方库实例
      // - 取消动画帧请求
      
      console.log('✅ 组件已卸载，所有资源已清理完成')
    })
    
    // 手动刷新数据的方法
    const refreshData = () => {
      console.log('手动刷新数据')
      fetchUserData()
    }
    
    // 重置性能数据的方法
    const resetPerformanceData = () => {
      performanceData.value = {
        mountTime: 0,
        updateCount: 0,
        lastUpdateTime: 0
      }
      console.log('性能数据已重置')
    }
    
    // 返回模板需要的数据和方法
    return {
      userData,              // 用户数据
      loading,               // 加载状态
      error,                 // 错误信息
      performanceData,       // 性能数据
      fetchUserData,         // 获取数据方法
      refreshData,           // 刷新数据方法
      resetPerformanceData   // 重置性能数据方法
    }
    
    // 生命周期钩子实战总结：
    // 1. onBeforeMount：性能监控开始、预处理工作
    // 2. onMounted：数据获取、资源初始化、事件监听
    // 3. onUpdated：性能监控、状态同步、布局调整
    // 4. onUnmounted：资源清理、内存释放、连接关闭
    // 
    // 最佳实践：
    // - 合理使用 AbortController 避免竞态条件
    // - 及时清理资源防止内存泄漏
    // - 进行性能监控和优化
    // - 处理网络状态和页面可见性变化
  }
}`
</script>

<style scoped>
.lifecycle-demo {
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
  margin-bottom: 3rem;
}

.demo-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  border: 1px solid #e9ecef;
}

/* 响应式设计 */
@media (max-width: 768px) {
  .lifecycle-demo {
    padding: 1rem;
  }
  
  .demo-section {
    padding: 1rem;
  }
}
</style>