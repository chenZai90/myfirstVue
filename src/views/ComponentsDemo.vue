<template>
  <div class="components-demo">
    <div class="page-header">
      <h1>Vue3 组件基础</h1>
      <p class="page-description">
        学习Vue3组件的核心概念，包括组件注册、Props传递、事件发射、插槽使用等。
        掌握组件间通信的各种方式，构建可复用的组件系统。
      </p>
    </div>

    <!-- 基本组件示例 -->
    <div class="demo-section">
      <CommentBox 
        title="基本组件" 
        description="学习如何创建和使用Vue组件，理解组件的基本结构和注册方式。组件是Vue应用的基本构建块，通过组件化开发可以提高代码的可复用性、可维护性和可测试性。" 
        :concepts="[
          { name: '组件定义', description: '使用defineComponent函数定义组件，提供类型推断和更好的开发体验' },
          { name: '组件注册', description: '分为全局注册和局部注册，全局注册的组件可在任何地方使用，局部注册只能在当前组件中使用' },
          { name: '组件实例', description: '每个组件都有自己的实例，拥有独立的数据作用域和生命周期' },
          { name: '单文件组件', description: '使用.vue文件格式，将模板、脚本和样式封装在一个文件中' },
          { name: '组件命名', description: '推荐使用PascalCase命名组件，在模板中可以使用kebab-case或PascalCase' }
        ]"
        :notes="[
          '组件名应该始终是多个单词，避免与HTML元素冲突',
          '每个组件都应该有一个根元素（Vue 3中可以有多个根元素）',
          '组件的data必须是一个函数，确保每个实例都有独立的数据副本',
          '使用setup函数可以更好地组织组件逻辑和实现代码复用',
          '组件应该保持单一职责原则，一个组件只做一件事'
        ]"
      />
      <DemoRunner>
        <BasicComponentDemo />
      </DemoRunner>
      <CodeBlock :code="basicComponentCode" language="javascript" />
    </div>

    <!-- Props传递示例 -->
    <div class="demo-section">
      <CommentBox 
        title="Props传递" 
        description="学习如何通过Props向子组件传递数据，实现父到子的数据流。Props是组件间通信的主要方式之一，遵循单向数据流原则，确保数据流向的可预测性。" 
        :concepts="[
          { name: 'Props定义', description: '在子组件中定义props选项，声明接收的属性名称、类型、默认值和验证规则' },
          { name: '数据类型', description: '支持String、Number、Boolean、Array、Object、Function等JavaScript基本类型' },
          { name: '属性验证', description: '可以设置required、default、validator等选项来验证传入的props' },
          { name: '单向数据流', description: 'Props遵循单向数据流，子组件不应该直接修改props的值' },
          { name: '动态Props', description: '使用v-bind或:语法可以动态传递props，支持表达式和变量' }
        ]"
        :notes="[
          'Props的命名推荐使用camelCase，在模板中使用kebab-case',
          '对象和数组类型的props默认值必须通过工厂函数返回',
          '子组件不应该直接修改props，如需修改应该emit事件给父组件',
          '使用v-bind可以传递整个对象的所有属性作为props',
          'Props验证只在开发模式下生效，生产环境会被忽略以提高性能'
        ]"
      />
      <DemoRunner>
        <PropsDemo />
      </DemoRunner>
      <CodeBlock :code="propsCode" language="javascript" />
    </div>

    <!-- 事件发射示例 -->
    <div class="demo-section">
      <CommentBox 
        title="事件发射" 
        description="学习如何通过事件发射实现子到父的通信，处理用户交互。事件发射是Vue组件通信的重要机制，允许子组件向父组件传递信息和触发父组件的方法。" 
        :concepts="[
          { name: '事件发射', description: '使用$emit方法或setup中的emit函数向父组件发射自定义事件' },
          { name: '事件监听', description: '父组件使用v-on或@语法监听子组件发射的事件' },
          { name: '事件参数', description: '可以在发射事件时传递参数，父组件的事件处理器可以接收这些参数' },
          { name: '事件声明', description: '在组件中使用emits选项声明要发射的事件，提供更好的类型检查' },
          { name: '事件验证', description: '可以为发射的事件添加验证函数，确保事件参数的正确性' }
        ]"
        :notes="[
          '事件名推荐使用kebab-case命名，与HTML事件保持一致',
          '事件发射是异步的，不会阻塞组件的渲染过程',
          '可以发射多个参数，父组件的处理器会按顺序接收',
          '事件不会自动冒泡到祖先组件，只能被直接父组件监听',
          '使用emits选项声明事件可以获得更好的IDE支持和类型检查'
        ]"
      />
      <DemoRunner>
        <EmitDemo />
      </DemoRunner>
      <CodeBlock :code="emitCode" language="javascript" />
    </div>

    <!-- 插槽示例 -->
    <div class="demo-section">
      <CommentBox 
        title="插槽使用" 
        description="学习如何使用插槽实现内容分发，创建更灵活的组件。插槽是Vue的内容分发机制，允许父组件向子组件传递模板内容，实现组件的高度可定制化。" 
        :concepts="[
          { name: '默认插槽', description: '最基本的插槽形式，用于在组件中插入任意内容' },
          { name: '具名插槽', description: '使用name属性为插槽命名，允许在一个组件中使用多个插槽' },
          { name: '作用域插槽', description: '子组件可以向插槽传递数据，父组件可以访问这些数据来渲染内容' },
          { name: '插槽后备内容', description: '在插槽中定义默认内容，当父组件没有提供内容时显示' },
          { name: '动态插槽', description: '使用动态指令参数可以动态地确定插槽名称' }
        ]"
        :notes="[
          '插槽内容在父组件的作用域中编译，可以访问父组件的数据',
          '作用域插槽使用template标签和v-slot指令来接收子组件传递的数据',
          'v-slot可以简写为#，如#header等价于v-slot:header',
          '插槽可以传递任何类型的数据，包括函数和对象',
          '合理使用插槽可以创建高度可复用和可定制的组件'
        ]"
      />
      <DemoRunner>
        <SlotsDemo />
      </DemoRunner>
      <CodeBlock :code="slotsCode" language="javascript" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CommentBox from '../components/CodeDemo/CommentBox.vue'
import DemoRunner from '../components/CodeDemo/DemoRunner.vue'
import CodeBlock from '../components/CodeDemo/CodeBlock.vue'

// 基本组件示例 - 演示Vue3组件的基本结构和用法
const BasicComponentDemo = defineComponent({
  setup() {
    // 定义响应式数据 - 组件的消息文本
    const message = ref('Hello from Component!')
    // 定义响应式数据 - 计数器值
    const count = ref(0)

    // 定义组件方法 - 增加计数器的值
    function increment() {
      count.value++
    }

    // 返回模板中需要使用的数据和方法
    return {
      message,
      count,
      increment
    }
  },
  template: `
    <div class="demo-item">
      <h3>基本组件示例</h3>
      <p><strong>消息:</strong> {{ message }}</p>
      <p><strong>计数:</strong> {{ count }}</p>
      <button @click="increment">点击增加</button>
    </div>
  `
})

// Props传递示例 - 演示父组件向子组件传递数据的方式
const PropsDemo = defineComponent({
  setup() {
    // 定义用户信息对象 - 将作为props传递给UserCard组件
    const userInfo = ref({
      name: '张三',
      age: 25,
      email: 'zhangsan@example.com'
    })

    // 定义产品列表数组 - 将作为props传递给ProductList组件
    const products = ref([
      { id: 1, name: 'iPhone 15', price: 5999, category: '手机' },
      { id: 2, name: 'MacBook Pro', price: 12999, category: '电脑' },
      { id: 3, name: 'AirPods Pro', price: 1999, category: '耳机' }
    ])

    // 更新用户信息的方法 - 演示响应式数据变化如何影响子组件
    function updateUser() {
      userInfo.value.age++
    }

    return {
      userInfo,
      products,
      updateUser
    }
  },
  components: {
    // UserCard子组件 - 接收用户信息对象并显示
    UserCard: {
      props: {
        // 定义user属性，类型为Object，必传
        user: {
          type: Object,
          required: true
        }
      },
      template: `
        <div class="user-card">
          <h4>用户信息</h4>
          <p>姓名: {{ user.name }}</p>
          <p>年龄: {{ user.age }}</p>
          <p>邮箱: {{ user.email }}</p>
        </div>
      `
    },
    // ProductList子组件 - 接收产品列表数组并渲染
    ProductList: {
      props: {
        // 定义products属性，类型为Array，有默认值
        products: {
          type: Array,
          default: () => []
        }
      },
      template: `
        <div class="product-list">
          <h4>产品列表</h4>
          <div v-for="product in products" :key="product.id" class="product-item">
            <span class="name">{{ product.name }}</span>
            <span class="price">¥{{ product.price }}</span>
            <span class="category">{{ product.category }}</span>
          </div>
        </div>
      `
    }
  },
  template: `
    <div class="demo-item">
      <h3>Props传递示例</h3>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem;">
        <UserCard :user="userInfo" />
        <ProductList :products="products" />
      </div>
      <button @click="updateUser" style="margin-top: 1rem;">增加年龄</button>
    </div>
  `
})

// 事件发射示例 - 演示子组件向父组件发射事件进行通信
const EmitDemo = defineComponent({
  setup() {
    // 存储事件消息的响应式数组
    const messages = ref([])
    // 记录总点击次数的响应式数据
    const totalClicks = ref(0)

    // 处理按钮点击事件的方法 - 接收子组件发射的事件
    function handleButtonClick(buttonName) {
      messages.value.push(`${buttonName} 被点击了！时间: ${new Date().toLocaleTimeString()}`)
      totalClicks.value++
    }

    // 处理自定义事件的方法 - 接收子组件发射的自定义数据
    function handleCustomEvent(data) {
      messages.value.push(`收到自定义事件: ${data}`)
    }

    // 清空消息和计数的方法
    function clearMessages() {
      messages.value = []
      totalClicks.value = 0
    }

    return {
      messages,
      totalClicks,
      handleButtonClick,
      handleCustomEvent,
      clearMessages
    }
  },
  components: {
    // ClickButton子组件 - 演示基本的事件发射
    ClickButton: {
      props: {
        // 按钮名称属性
        name: String,
        // 按钮颜色属性，有默认值
        color: {
          type: String,
          default: 'primary'
        }
      },
      // 声明要发射的事件
      emits: ['button-click'],
      template: `
        <button 
          @click="$emit('button-click', name)"
          :class="'btn-' + color"
          style="margin: 0.25rem; padding: 0.5rem 1rem; border: none; border-radius: 4px; cursor: pointer;"
        >
          {{ name }}
        </button>
      `
    },
    // CustomEmitter子组件 - 演示使用setup函数发射自定义事件
    CustomEmitter: {
      // 声明要发射的自定义事件
      emits: ['custom-event'],
      setup(props, { emit }) {
        // 发射次数计数器
        const count = ref(0)

        // 发射自定义事件的方法
        function sendCustomEvent() {
          count.value++
          emit('custom-event', `自定义数据 #${count.value}`)
        }

        return {
          count,
          sendCustomEvent
        }
      },
      template: `
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h5>自定义事件发射器</h5>
          <p>发射次数: {{ count }}</p>
          <button @click="sendCustomEvent">发射自定义事件</button>
        </div>
      `
    }
  },
  template: `
    <div class="demo-item">
      <h3>事件发射示例</h3>
      <div style="margin: 1rem 0;">
        <h4>按钮点击事件</h4>
        <ClickButton name="按钮1" color="primary" @button-click="handleButtonClick" />
        <ClickButton name="按钮2" color="success" @button-click="handleButtonClick" />
        <ClickButton name="按钮3" color="warning" @button-click="handleButtonClick" />
      </div>
      
      <div style="margin: 1rem 0;">
        <CustomEmitter @custom-event="handleCustomEvent" />
      </div>
      
      <div style="margin: 1rem 0;">
        <h4>事件日志 (总点击: {{ totalClicks }})</h4>
        <div style="max-height: 150px; overflow-y: auto; border: 1px solid #ddd; padding: 0.5rem;">
          <div v-for="(msg, index) in messages" :key="index" style="margin: 0.25rem 0; font-size: 0.9rem;">
            {{ msg }}
          </div>
          <div v-if="messages.length === 0" style="color: #999;">暂无事件...</div>
        </div>
        <button @click="clearMessages" style="margin-top: 0.5rem;">清空日志</button>
      </div>
    </div>
  `
})

// 插槽示例 - 演示Vue插槽的各种用法，包括默认插槽、具名插槽和作用域插槽
const SlotsDemo = defineComponent({
  setup() {
    // 文章数据数组 - 用于演示作用域插槽传递数据
    const articles = ref([
      {
        id: 1,
        title: 'Vue 3 新特性',
        content: 'Vue 3 带来了许多激动人心的新特性...',
        author: '张三',
        date: '2024-01-15'
      },
      {
        id: 2,
        title: '组合式 API 指南',
        content: '组合式 API 是 Vue 3 的核心特性之一...',
        author: '李四',
        date: '2024-01-20'
      }
    ])

    return {
      articles
    }
  },
  components: {
    // Card子组件 - 演示具名插槽的使用
    Card: {
      template: `
        <div class="card" style="border: 1px solid #ddd; border-radius: 8px; padding: 1rem; margin: 1rem 0;">
          <div class="card-header" style="border-bottom: 1px solid #eee; padding-bottom: 0.5rem; margin-bottom: 1rem;">
            <!-- 具名插槽：header，有默认内容 -->
            <slot name="header">默认标题</slot>
          </div>
          <div class="card-body">
            <!-- 默认插槽，有默认内容 -->
            <slot>默认内容</slot>
          </div>
          <div class="card-footer" style="border-top: 1px solid #eee; padding-top: 0.5rem; margin-top: 1rem;">
            <!-- 具名插槽：footer，有默认内容 -->
            <slot name="footer">默认页脚</slot>
          </div>
        </div>
      `
    },
    // ArticleList子组件 - 演示作用域插槽的使用
    ArticleList: {
      props: {
        // 文章列表属性
        articles: {
          type: Array,
          default: () => []
        }
      },
      template: `
        <div class="article-list">
          <!-- 具名插槽：title，用于自定义标题 -->
          <slot name="title"><h4>文章列表</h4></slot>
          <div v-for="article in articles" :key="article.id">
            <!-- 作用域插槽：article，向父组件传递文章数据和格式化函数 -->
            <slot name="article" :article="article" :formatDate="formatDate">
              <!-- 默认的文章显示模板 -->
              <div style="padding: 1rem; border: 1px solid #eee; margin: 0.5rem 0;">
                <h5>{{ article.title }}</h5>
                <p>{{ article.content }}</p>
              </div>
            </slot>
          </div>
        </div>
      `,
      setup() {
        // 日期格式化函数 - 通过作用域插槽传递给父组件
        function formatDate(date) {
          return new Date(date).toLocaleDateString('zh-CN')
        }
        return {
          formatDate
        }
      }
    }
  },
  template: `
    <div class="demo-item">
      <h3>插槽使用示例</h3>
      
      <div style="margin: 1rem 0;">
        <h4>基本插槽</h4>
        <Card>
          <template #header>
            <h4 style="margin: 0; color: #2196f3;">自定义标题</h4>
          </template>
          
          <p>这是卡片的主要内容区域。</p>
          <p>可以放置任何内容。</p>
          
          <template #footer>
            <small style="color: #666;">自定义页脚信息</small>
          </template>
        </Card>
      </div>
      
      <div style="margin: 1rem 0;">
        <h4>作用域插槽</h4>
        <ArticleList :articles="articles">
          <template #title>
            <h4 style="color: #4caf50;">📚 技术文章</h4>
          </template>
          
          <template #article="{ article, formatDate }">
            <div style="padding: 1rem; border-left: 4px solid #4caf50; background: #f8f9fa; margin: 0.5rem 0;">
              <h5 style="margin: 0 0 0.5rem 0; color: #2c3e50;">{{ article.title }}</h5>
              <p style="margin: 0.5rem 0; color: #666;">{{ article.content }}</p>
              <div style="font-size: 0.9rem; color: #999;">
                作者: {{ article.author }} | 日期: {{ formatDate(article.date) }}
              </div>
            </div>
          </template>
        </ArticleList>
      </div>
    </div>
  `
})

export default defineComponent({
  name: 'ComponentsDemo',
  components: {
    CommentBox,
    DemoRunner,
    CodeBlock,
    BasicComponentDemo,
    PropsDemo,
    EmitDemo,
    SlotsDemo
  },
  setup() {
    // 代码示例 - 详细的组件开发指南
    const basicComponentCode = `// 基本组件定义 - Vue 3组件的标准创建方式
import { defineComponent, ref } from 'vue'

// 使用defineComponent定义组件 - 提供更好的TypeScript支持和开发体验
const MyComponent = defineComponent({
  name: 'MyComponent',                    // 组件名称，用于调试和Vue DevTools显示
  setup() {                              // Composition API的入口函数
    // 创建响应式数据 - 使用ref创建可变的响应式引用
    const message = ref('Hello Vue 3!')  // 字符串类型的响应式数据
    const count = ref(0)                 // 数字类型的响应式数据
    
    // 定义方法 - 组件的业务逻辑函数
    function increment() {
      count.value++                      // 修改ref的值，触发视图更新
    }
    
    // 返回模板需要使用的数据和方法
    // setup函数的返回值会暴露给模板使用
    return {
      message,                           // 暴露响应式数据
      count,                             // 暴露计数器
      increment                          // 暴露方法供模板调用
    }
  },
  // 模板定义 - 组件的HTML结构和数据绑定
  template: \`
    <div>
      <h3>{{ message }}</h3>             <!-- 文本插值显示消息 -->
      <p>计数: {{ count }}</p>           <!-- 显示当前计数值 -->
      <button @click="increment">增加</button>  <!-- 绑定点击事件 -->
    </div>
  \`
})

// 在父组件中使用 - 组件的注册和使用
export default defineComponent({
  components: {
    MyComponent                          // 注册子组件，使其在模板中可用
  },
  template: \`
    <div>
      <MyComponent />                    <!-- 使用自定义组件 -->
    </div>
  \`
})`

    const propsCode = `// Props传递示例 - 父子组件数据传递的标准方式
import { defineComponent, ref } from 'vue'

// 子组件定义Props - 接收父组件传递的数据
const UserCard = defineComponent({
  // Props定义 - 声明组件接收的外部数据
  props: {
    // 用户信息对象 - 复杂数据类型的Props定义
    user: {
      type: Object,                      // 指定数据类型为对象
      required: true                     // 标记为必传属性，父组件必须提供
    },
    // 是否显示邮箱 - 布尔类型的可选Props
    showEmail: {
      type: Boolean,                     // 指定数据类型为布尔值
      default: true                      // 设置默认值，父组件不传时使用
    }
  },
  // 模板中直接使用props，无需在setup中声明
  template: \`
    <div class="user-card">
      <h4>{{ user.name }}</h4>           <!-- 显示用户姓名 -->
      <p>年龄: {{ user.age }}</p>        <!-- 显示用户年龄 -->
      <!-- 条件渲染：根据showEmail属性决定是否显示邮箱 -->
      <p v-if="showEmail">邮箱: {{ user.email }}</p>
    </div>
  \`
})

// 父组件传递Props - 向子组件传递数据
export default defineComponent({
  components: { UserCard },              // 注册子组件
  setup() {
    // 创建用户数据 - 准备传递给子组件的数据
    const userInfo = ref({
      name: '张三',                      // 用户姓名
      age: 25,                          // 用户年龄
      email: 'zhangsan@example.com'     // 用户邮箱
    })
    
    return { userInfo }                 // 暴露数据供模板使用
  },
  template: \`
    <div>
      <!-- 使用v-bind(:)语法传递Props -->
      <!-- :user绑定响应式数据，:show-email传递布尔值 -->
      <UserCard :user="userInfo" :show-email="true" />
    </div>
  \`
})`

    const emitCode = `// 事件发射示例 - 子组件向父组件通信的标准方式
import { defineComponent, ref } from 'vue'

// 子组件发射事件 - 通过事件向父组件传递数据
const ClickButton = defineComponent({
  // 接收父组件传递的按钮名称
  props: {
    name: String                         // 按钮显示的名称
  },
  // 声明组件会发射的事件 - 提供更好的类型检查和文档
  emits: ['button-click'],               // 声明button-click事件
  template: \`
    <!-- 点击时发射事件，并传递按钮名称作为参数 -->
    <button @click="$emit('button-click', name)">
      {{ name }}                         <!-- 显示按钮名称 -->
    </button>
  \`
})

// 父组件监听事件 - 接收子组件发射的事件
export default defineComponent({
  components: { ClickButton },           // 注册子组件
  setup() {
    // 创建消息列表 - 存储点击记录
    const messages = ref([])             // 响应式数组，存储所有点击消息
    
    // 事件处理函数 - 响应子组件的事件
    function handleClick(buttonName) {
      // 接收子组件传递的参数，添加到消息列表
      messages.value.push(\`\${buttonName} 被点击了！\`)
    }
    
    return {
      messages,                          // 暴露消息列表
      handleClick                        // 暴露事件处理函数
    }
  },
  template: \`
    <div>
      <!-- 使用@语法监听子组件事件，绑定处理函数 -->
      <ClickButton name="按钮1" @button-click="handleClick" />
      <ClickButton name="按钮2" @button-click="handleClick" />
      
      <!-- 显示点击记录列表 -->
      <ul>
        <li v-for="msg in messages" :key="msg">{{ msg }}</li>
      </ul>
    </div>
  \`
})`

    const slotsCode = `// 插槽使用示例 - 组件内容分发和定制化的强大机制
import { defineComponent } from 'vue'

// 定义带插槽的组件 - 提供内容分发的容器组件
const Card = defineComponent({
  template: \`
    <div class="card">
      <!-- 具名插槽：header - 卡片头部内容区域 -->
      <div class="card-header">
        <slot name="header">默认标题</slot>  <!-- 具名插槽，有默认内容 -->
      </div>
      
      <!-- 默认插槽 - 卡片主体内容区域 -->
      <div class="card-body">
        <slot>默认内容</slot>              <!-- 默认插槽，父组件可插入任意内容 -->
      </div>
      
      <!-- 具名插槽：footer - 卡片底部内容区域 -->
      <div class="card-footer">
        <slot name="footer">默认页脚</slot>  <!-- 具名插槽，有默认内容 -->
      </div>
    </div>
  \`
})

// 作用域插槽组件 - 向插槽传递数据的高级用法
const DataList = defineComponent({
  props: {
    items: Array                         // 接收数据列表
  },
  template: \`
    <div>
      <!-- 遍历数据，为每个项目提供作用域插槽 -->
      <div v-for="(item, index) in items" :key="item.id">
        <!-- 作用域插槽：向父组件传递item和index数据 -->
        <slot name="item" :item="item" :index="index">
          <!-- 默认渲染方式，当父组件不提供插槽内容时使用 -->
          <div>{{ item.name }}</div>
        </slot>
      </div>
    </div>
  \`
})

// 使用插槽 - 在父组件中定制子组件的内容
export default defineComponent({
  components: { Card, DataList },        // 注册插槽组件
  setup() {
    // 准备数据列表用于作用域插槽演示
    const dataList = ref([
      { id: 1, name: '项目一' },
      { id: 2, name: '项目二' }
    ])
    
    return { dataList }
  },
  template: \`
    <div>
      <!-- 具名插槽使用 - 为不同插槽提供自定义内容 -->
      <Card>
        <!-- 使用#语法定义header插槽内容 -->
        <template #header>
          <h3>自定义标题</h3>             <!-- 替换默认的header内容 -->
        </template>
        
        <!-- 默认插槽内容，无需template标签 -->
        <p>自定义内容</p>                <!-- 替换默认的body内容 -->
        
        <!-- 使用#语法定义footer插槽内容 -->
        <template #footer>
          <small>自定义页脚</small>        <!-- 替换默认的footer内容 -->
        </template>
      </Card>
      
      <!-- 作用域插槽使用 - 接收子组件传递的数据 -->
      <DataList :items="dataList">
        <!-- 使用解构语法接收子组件传递的数据 -->
        <template #item="{ item, index }">
          <!-- 自定义每个列表项的渲染方式 -->
          <div>{{ index + 1 }}. {{ item.name }}</div>
        </template>
      </DataList>
    </div>
  \`
})`

    return {
      basicComponentCode,
      propsCode,
      emitCode,
      slotsCode
    }
  }
})
</script>

<style scoped>
.components-demo {
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

.demo-item h4 {
  color: #34495e;
  margin: 1rem 0 0.5rem 0;
}

.demo-item h5 {
  color: #34495e;
  margin: 0.5rem 0;
}

.user-card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
}

.product-list {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
}

.product-item {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  border-bottom: 1px solid #eee;
}

.product-item:last-child {
  border-bottom: none;
}

.btn-primary {
  background: #007bff;
  color: white;
}

.btn-success {
  background: #28a745;
  color: white;
}

.btn-warning {
  background: #ffc107;
  color: #212529;
}

.card {
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>