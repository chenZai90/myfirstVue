<template>
  <div class="basics-demo">
    <div class="page-header">
      <h1>Vue3 响应式基础</h1>
      <p class="page-description">
        Vue3 提供了强大的响应式系统，包括 ref、reactive 和 toRefs 等核心API。
        这些工具让我们能够轻松创建响应式数据，构建动态的用户界面。
      </p>
    </div>

    <!-- ref基础示例 -->
    <div class="demo-section">
      <CommentBox 
        title="ref() 基础" 
        description="ref是Vue 3响应式系统的核心API之一，用于创建响应式引用。它通过创建一个包装对象来实现响应式，特别适合处理基本数据类型和需要重新赋值的场景。ref的设计让我们能够在保持响应式特性的同时，灵活地处理各种数据类型。"
        :concepts="[
          { name: '响应式引用', description: 'ref创建一个包装对象，内部通过getter/setter实现响应式追踪' },
          { name: '基本类型支持', description: '专门为string、number、boolean等基本数据类型设计的响应式解决方案' },
          { name: '重新赋值能力', description: '可以完全替换ref的值，同时保持响应式连接不断' },
          { name: '模板自动解包', description: 'Vue在模板中自动解包ref，提供更简洁的使用体验' },
          { name: '类型安全', description: '配合TypeScript提供完整的类型推导和检查' },
          { name: '性能优化', description: '只有在值真正改变时才触发更新，避免不必要的重渲染' }
        ]"
        :code-explanation="refCodeExplanation"
        :notes="[
          '在setup()函数和其他JavaScript代码中，必须使用.value来访问ref的值',
          '在模板中Vue会自动解包ref，可以直接使用变量名而无需.value',
          'ref特别适合存储可能需要完全重新赋值的数据，如用户输入、API响应等',
          'ref的响应式是浅层的，如果存储对象，对象内部的变化需要通过.value访问',
          '可以通过unref()函数来安全地获取ref或普通值的实际内容'
        ]"
      />
      <DemoRunner>
        <RefBasicDemo />
      </DemoRunner>
      <CodeBlock :code="refBasicCode" language="javascript" />
    </div>

    <!-- reactive基础示例 -->
    <div class="demo-section">
      <CommentBox 
        title="reactive() 基础" 
        description="reactive是Vue 3中用于创建深度响应式对象的核心API。它基于ES6 Proxy实现，能够拦截对象的所有操作，包括属性访问、赋值、枚举、函数调用等。reactive特别适合处理复杂的状态对象，提供了比ref更自然的对象操作体验。"
        :concepts="[
          { name: '深度响应式', description: 'reactive会递归地将对象的所有嵌套属性转换为响应式，无论嵌套多深' },
          { name: '对象类型专用', description: '专门为对象、数组、Map、Set等引用类型设计，不支持基本数据类型' },
          { name: '直接访问', description: '无需.value语法，可以像操作普通对象一样直接访问和修改属性' },
          { name: 'Proxy实现', description: '基于ES6 Proxy实现，能够拦截所有属性操作，提供完整的响应式能力' },
          { name: '类型保持', description: '保持原对象的类型结构，提供良好的TypeScript支持' },
          { name: '性能优化', description: '只有被访问的属性才会被转换为响应式，实现按需响应式' }
        ]"
        :code-explanation="reactiveCodeExplanation"
        :notes="[
          'reactive只能用于对象类型（对象、数组、Map、Set），不能用于基本数据类型',
          '返回的是原对象的响应式代理，不是原对象本身，但可以像原对象一样使用',
          '解构reactive对象会失去响应式连接，需要使用toRefs()来保持响应式',
          '不能替换整个reactive对象，只能修改其属性',
          '在模板中使用时，Vue会自动追踪属性访问，实现精确的依赖收集'
        ]"
      />
      <DemoRunner>
        <ReactiveBasicDemo />
      </DemoRunner>
      <CodeBlock :code="reactiveBasicCode" language="javascript" />
    </div>

    <!-- ref vs reactive 对比 -->
    <div class="demo-section">
      <CommentBox 
        title="ref vs reactive" 
        description="ref和reactive是Vue 3响应式系统的两大核心API，各有其适用场景和特点。理解它们的区别和选择原则，对于构建高效、可维护的Vue应用至关重要。正确的选择不仅影响代码的可读性，还会影响应用的性能和开发体验。"
        :concepts="[
          { name: '使用场景差异', description: 'ref适合基本类型和需要重新赋值的对象，reactive适合复杂的状态对象' },
          { name: '访问方式', description: 'ref需要通过.value访问，reactive可以直接访问属性' },
          { name: '重新赋值能力', description: 'ref支持完整替换值，reactive只能修改属性，不能重新赋值' },
          { name: '性能特征', description: 'ref有轻微的.value访问开销，reactive对大对象的属性访问更高效' },
          { name: '解构行为', description: 'ref解构后失去响应式，reactive解构也失去响应式但可用toRefs解决' },
          { name: '类型推导', description: 'ref提供更好的TypeScript类型推导，reactive保持原对象类型' }
        ]"
        :code-explanation="comparisonCodeExplanation"
        :notes="[
          '选择ref的场景：基本数据类型、需要重新赋值的对象、组合式函数的返回值、表单输入绑定',
          '选择reactive的场景：复杂的状态对象、不需要重新赋值的数据结构、组件的本地状态',
          '在模板中两者使用方式基本相同，Vue会自动处理解包和响应式追踪',
          '可以混合使用ref和reactive，根据具体需求选择最合适的API',
          '对于组合式函数，通常返回ref以提供更好的使用体验'
        ]"
      />
      <DemoRunner>
        <ComparisonDemo />
      </DemoRunner>
      <CodeBlock :code="comparisonCode" language="javascript" />
    </div>

    <!-- toRefs示例 -->
    <div class="demo-section">
      <CommentBox 
        title="toRefs() 用法" 
        description="toRefs是Vue 3提供的重要工具函数，专门用于解决reactive对象解构时失去响应式的问题。它将reactive对象的每个属性转换为独立的ref，既保持了响应式连接，又支持ES6解构语法，是组合式函数设计中的关键工具。"
        :concepts="[
          { name: '解构支持', description: '将reactive对象的每个属性转换为独立的ref，支持ES6解构语法' },
          { name: '响应式保持', description: '解构后的ref与原reactive对象保持双向响应式连接' },
          { name: '双向同步', description: '修改解构后的ref会同步更新原对象，修改原对象也会更新ref' },
          { name: '组合式函数', description: '是组合式函数返回值的标准模式，提供最佳的使用体验' },
          { name: '浅层转换', description: '只转换对象的第一层属性，嵌套对象需要额外处理' },
          { name: '按需转换', description: '可以选择性地转换部分属性，而不是整个对象' }
        ]"
        :code-explanation="toRefsCodeExplanation"
        :notes="[
          'toRefs只转换对象的第一层属性，嵌套对象的属性不会被转换为ref',
          '如果原属性值不是响应式的，toRefs会创建一个普通的ref包装该值',
          '常与组合式函数配合使用，让函数返回值既支持解构又保持响应式',
          '对于不需要解构的场景，直接使用reactive对象可能更简单',
          '可以配合toRef()函数来转换单个属性，提供更精确的控制'
        ]"
        :links="[
          { text: 'Vue3官方文档 - toRefs', url: 'https://cn.vuejs.org/api/reactivity-utilities.html#torefs' }
        ]"
      />
      <DemoRunner>
        <ToRefsDemo />
      </DemoRunner>
      <CodeBlock :code="toRefsCode" language="javascript" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
import CommentBox from '../components/CodeDemo/CommentBox.vue'
import DemoRunner from '../components/CodeDemo/DemoRunner.vue'
import CodeBlock from '../components/CodeDemo/CodeBlock.vue'

// ref基础示例组件
const RefBasicDemo = defineComponent({
  setup() {
    const count = ref(0)
    const message = ref('Hello Vue 3!')
    const isVisible = ref(true)

    function increment() {
      count.value++
    }

    function updateMessage() {
      message.value = '消息已更新！'
    }

    function toggleVisibility() {
      isVisible.value = !isVisible.value
    }

    return {
      count,
      message,
      isVisible,
      increment,
      updateMessage,
      toggleVisibility
    }
  },
  template: `
    <div class="demo-item">
      <h3>ref基础示例</h3>
      <p><strong>计数器:</strong> {{ count }}</p>
      <p><strong>消息:</strong> {{ message }}</p>
      <p v-if="isVisible"><strong>可见性:</strong> 这段文字是可见的</p>
      <div style="margin-top: 1rem;">
        <button @click="increment">增加计数</button>
        <button @click="updateMessage">更新消息</button>
        <button @click="toggleVisibility">切换可见性</button>
      </div>
    </div>
  `
})

// reactive基础示例组件
const ReactiveBasicDemo = defineComponent({
  setup() {
    const state = reactive({
      count: 0,
      user: {
        name: '张三',
        age: 25
      },
      todos: [
        { id: 1, text: '学习Vue 3', done: false },
        { id: 2, text: '掌握响应式', done: true }
      ]
    })

    function increment() {
      state.count++
    }

    function updateUser() {
      state.user.name = '李四'
      state.user.age++
    }

    function addTodo() {
      state.todos.push({
        id: Date.now(),
        text: `新任务 ${state.todos.length + 1}`,
        done: false
      })
    }

    function toggleTodo(todo) {
      todo.done = !todo.done
    }

    return {
      state,
      increment,
      updateUser,
      addTodo,
      toggleTodo
    }
  },
  template: `
    <div class="demo-item">
      <h3>reactive基础示例</h3>
      <p><strong>计数器:</strong> {{ state.count }}</p>
      <p><strong>用户:</strong> {{ state.user.name }} ({{ state.user.age }}岁)</p>
      <div>
        <strong>待办事项:</strong>
        <ul style="margin: 0.5rem 0; padding-left: 1.5rem;">
          <li v-for="todo in state.todos" :key="todo.id" 
              :style="{ textDecoration: todo.done ? 'line-through' : 'none', cursor: 'pointer' }"
              @click="toggleTodo(todo)">
            {{ todo.text }}
          </li>
        </ul>
      </div>
      <div style="margin-top: 1rem;">
        <button @click="increment">增加计数</button>
        <button @click="updateUser">更新用户</button>
        <button @click="addTodo">添加待办</button>
      </div>
    </div>
  `
})

// 对比示例组件
const ComparisonDemo = defineComponent({
  setup() {
    const refCount = ref(0)
    const refUser = ref({ name: '张三', age: 25 })

    const reactiveState = reactive({
      count: 0,
      user: { name: '张三', age: 25 }
    })

    function incrementRef() {
      refCount.value++
      refUser.value.age++
    }

    function incrementReactive() {
      reactiveState.count++
      reactiveState.user.age++
    }

    function resetRef() {
      refUser.value = { name: '李四', age: 30 }
    }

    function resetReactive() {
      Object.assign(reactiveState.user, { name: '李四', age: 30 })
    }

    return {
      refCount,
      refUser,
      reactiveState,
      incrementRef,
      incrementReactive,
      resetRef,
      resetReactive
    }
  },
  template: `
    <div class="demo-item">
      <h3>ref vs reactive 对比</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h4>ref示例</h4>
          <p>计数: {{ refCount }}</p>
          <p>用户: {{ refUser.name }} ({{ refUser.age }}岁)</p>
          <button @click="incrementRef">增加</button>
          <button @click="resetRef">重置用户</button>
        </div>
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h4>reactive示例</h4>
          <p>计数: {{ reactiveState.count }}</p>
          <p>用户: {{ reactiveState.user.name }} ({{ reactiveState.user.age }}岁)</p>
          <button @click="incrementReactive">增加</button>
          <button @click="resetReactive">重置用户</button>
        </div>
      </div>
    </div>
  `
})

// toRefs示例组件
const ToRefsDemo = defineComponent({
  setup() {
    const state = reactive({
      count: 0,
      name: '张三',
      email: 'zhangsan@example.com'
    })

    const { count, name, email } = toRefs(state)

    function increment() {
      count.value++
    }

    function updateName() {
      name.value = '李四'
    }

    function updateEmail() {
      email.value = 'lisi@example.com'
    }

    return {
      state,
      count,
      name,
      email,
      increment,
      updateName,
      updateEmail
    }
  },
  template: `
    <div class="demo-item">
      <h3>toRefs示例</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h4>原始reactive对象</h4>
          <p>计数: {{ state.count }}</p>
          <p>姓名: {{ state.name }}</p>
          <p>邮箱: {{ state.email }}</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h4>toRefs解构后</h4>
          <p>计数: {{ count }}</p>
          <p>姓名: {{ name }}</p>
          <p>邮箱: {{ email }}</p>
        </div>
      </div>
      <div style="margin-top: 1rem;">
        <button @click="increment">增加计数</button>
        <button @click="updateName">更新姓名</button>
        <button @click="updateEmail">更新邮箱</button>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 提示：修改解构后的ref会同步更新原始对象
      </p>
    </div>
  `
})

export default defineComponent({
  name: 'BasicsDemo',
  components: {
    CommentBox,
    DemoRunner,
    CodeBlock,
    RefBasicDemo,
    ReactiveBasicDemo,
    ComparisonDemo,
    ToRefsDemo
  },
  setup() {
    // code-explanation 数据
    const refCodeExplanation = [
      { code: 'const count = ref(0)', explanation: '创建一个初始值为0的响应式引用，返回RefImpl对象' },
      { code: 'count.value++', explanation: '在JavaScript中通过.value属性访问和修改实际值' },
      { code: '{{ count }}', explanation: '在模板中Vue自动解包，直接显示值而无需.value' },
      { code: 'watch(count, (newVal) => { ... })', explanation: 'ref可以直接用于watch、computed等响应式API' }
    ]

    const reactiveCodeExplanation = [
      { code: 'const state = reactive({ count: 0 })', explanation: '创建一个响应式对象，所有属性都自动变为响应式' },
      { code: 'state.count++', explanation: '直接访问和修改属性，Vue会自动追踪变化' },
      { code: "state.user.name = '李四'", explanation: '嵌套对象的属性也是响应式的，支持任意深度' },
      { code: 'state.items.push(newItem)', explanation: '数组方法也会触发响应式更新' }
    ]

    const comparisonCodeExplanation = [
      { code: "const refUser = ref({ name: '张三' })", explanation: 'ref包装对象，整个对象可以被替换' },
      { code: "refUser.value = { name: '李四' }", explanation: 'ref支持重新赋值整个对象，保持响应式连接' },
      { code: "const reactiveUser = reactive({ name: '张三' })", explanation: 'reactive创建响应式代理，不支持重新赋值' },
      { code: "Object.assign(reactiveUser, { name: '李四' })", explanation: 'reactive需要使用Object.assign或逐个属性赋值来更新' }
    ]

    const toRefsCodeExplanation = [
      { code: 'const { count, name } = toRefs(state)', explanation: '将reactive对象的属性转换为独立的ref，支持解构' },
      { code: 'count.value++', explanation: '修改解构后的ref，原reactive对象也会同步更新' },
      { code: 'state.count', explanation: '原对象的值也会相应改变，保持双向同步' },
      { code: 'const { count } = toRefs(state)', explanation: '可以选择性地只转换需要的属性' }
    ]

    // 代码示例
    const refBasicCode = `// ref基础用法 - 创建响应式引用
import { ref } from 'vue'

// 创建响应式引用
// ref() 函数接收一个内部值，返回一个响应式的、可更改的 ref 对象
const count = ref(0)                    // 数字类型的响应式引用
const message = ref('Hello Vue 3!')     // 字符串类型的响应式引用
const isVisible = ref(true)             // 布尔类型的响应式引用

// 在JavaScript中访问和修改值需要使用.value属性
// 这是因为ref返回的是一个包装对象，真实值存储在.value中
console.log(count.value)    // 输出: 0 - 获取ref的当前值
count.value++               // 修改ref的值，会触发响应式更新
console.log(count.value)    // 输出: 1 - 值已经更新

// 在模板中使用时，Vue会自动解包ref，无需.value
// 例如: {{ count }} 而不是 {{ count.value }}`

    const reactiveBasicCode = `// reactive基础用法 - 创建深度响应式对象
import { reactive } from 'vue'

// 创建响应式对象
// reactive() 返回一个对象的响应式代理，深度转换所有嵌套属性
const state = reactive({
  count: 0,                                    // 基本属性
  user: {                                      // 嵌套对象
    name: '张三',
    age: 25
  },
  todos: [                                     // 数组也是响应式的
    { id: 1, text: '学习Vue 3', done: false }
  ]
})

// 直接访问和修改属性，无需.value
// reactive对象的所有属性都是响应式的，包括嵌套属性
state.count++                                  // 修改基本属性
state.user.name = '李四'                       // 修改嵌套对象属性
state.todos.push({                            // 修改数组，添加新元素
  id: 2, 
  text: '新任务', 
  done: false 
})

// 注意：reactive只能用于对象类型（对象、数组、Map、Set等）
// 不能用于基本类型（string、number、boolean等）`

    const comparisonCode = `// ref vs reactive 对比 - 选择合适的响应式API
import { ref, reactive } from 'vue'

// ===== ref的使用场景 =====
// ref - 适用于基本类型和需要重新赋值的情况
const refCount = ref(0)                        // 基本类型：数字
const refUser = ref({ name: '张三' })          // 对象类型：可以重新赋值

// 访问和修改ref需要使用.value
refCount.value++                               // 修改基本类型值
refUser.value.name = '李四'                    // 修改对象属性

// ref的优势：可以重新赋值整个对象
refUser.value = { name: '王五', age: 30 }      // 完全替换对象，保持响应式

// ===== reactive的使用场景 =====
// reactive - 适用于复杂对象，不需要重新赋值
const reactiveState = reactive({
  count: 0,
  user: { name: '张三' }
})

// 直接访问属性，无需.value
reactiveState.count++                          // 直接修改属性
reactiveState.user.name = '李四'               // 修改嵌套属性

// reactive的限制：不能重新赋值整个对象
// reactiveState = { count: 10 }               // ❌ 这样会失去响应式
// 正确做法：使用Object.assign
Object.assign(reactiveState, { count: 10, user: { name: '赵六' } })`

    const toRefsCode = `// toRefs用法 - 解构reactive对象并保持响应式
import { reactive, toRefs } from 'vue'

// 创建一个reactive对象
const state = reactive({
  count: 0,
  name: '张三',
  email: 'zhangsan@example.com'
})

// 问题：直接解构会失去响应式
// const { count, name } = state              // ❌ 失去响应式连接

// 解决方案：使用toRefs保持响应式
// toRefs将reactive对象的每个属性转换为独立的ref
const { count, name, email } = toRefs(state)  // ✅ 保持响应式

// 现在可以像ref一样使用，需要.value访问
count.value++                                 // 修改解构后的ref
name.value = '李四'                           // 修改姓名
email.value = 'lisi@example.com'             // 修改邮箱

// 修改会双向同步到原对象
console.log(state.count)    // 输出: 1 - 原对象也更新了
console.log(state.name)     // 输出: '李四' - 同步更新
console.log(state.email)    // 输出: 'lisi@example.com'

// 反之，修改原对象也会同步到解构的ref
state.count = 100
console.log(count.value)    // 输出: 100 - ref也更新了`

    return {
      refBasicCode,
      reactiveBasicCode,
      comparisonCode,
      toRefsCode,
      refCodeExplanation,
      reactiveCodeExplanation,
      comparisonCodeExplanation,
      toRefsCodeExplanation
    }
  }
})
</script>

<style scoped>
.basics-demo {
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

.demo-item {
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
  margin: 1rem 0;
}

.demo-item h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.demo-item p {
  margin: 0.5rem 0;
}

.demo-item button {
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 4px;
  background: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.demo-item button:hover {
  background: #2980b9;
}
</style>