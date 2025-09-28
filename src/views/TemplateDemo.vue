<template>
  <div class="template-demo">
    <h1>Vue3 模板语法</h1>
    <p class="intro">Vue3 模板语法是 Vue.js 的核心特性，它允许你声明式地将数据渲染到 DOM 中。</p>

    <!-- 文本插值 -->
    <div class="demo-section">
      <CommentBox 
        title="文本插值"
        description="使用双大括号语法将数据绑定到模板中。文本插值是Vue模板语法的基础，它允许你将JavaScript表达式的结果直接渲染到HTML中，实现数据驱动的视图更新。"
        :concepts="[
          { name: 'Mustache语法', description: '使用双大括号{{}}语法将数据插值到模板中，这是Vue的标志性特性' },
          { name: 'JavaScript表达式', description: '插值内可以使用任何有效的JavaScript表达式，如计算、三元运算符、方法调用等' },
          { name: '响应式更新', description: '当绑定的数据发生变化时，插值内容会自动更新，无需手动操作DOM' },
          { name: '单次插值', description: '使用v-once指令可以实现一次性插值，数据变化后不再更新' },
          { name: 'HTML转义', description: '默认情况下插值会转义HTML，防止XSS攻击，保证应用安全' }
        ]"
        :notes="[
          '插值表达式只能包含单个表达式，不能是语句或流程控制',
          '插值内容会被自动转义，如需渲染HTML请使用v-html指令',
          '可以在插值中调用组件实例的方法和访问全局属性',
          '插值表达式在每次更新时都会重新求值，避免在其中执行复杂计算',
          '使用计算属性可以优化复杂表达式的性能'
        ]"
      />
      <DemoRunner>
        <div class="demo-container">
          <h3>基本插值</h3>
          <p>消息: {{ message }}</p>
          <p>计数: {{ count }}</p>
          <p>表达式: {{ count * 2 + 1 }}</p>
          <p>条件: {{ isActive ? '激活' : '未激活' }}</p>
        </div>
      </DemoRunner>
      <CodeBlock :code="interpolationCode" language="vue" />
    </div>

    <!-- 指令 -->
    <div class="demo-section">
      <CommentBox 
        title="指令"
        description="Vue指令是带有v-前缀的特殊属性，用于在模板中添加响应式行为。指令是Vue模板系统的核心，提供了声明式的方式来操作DOM，包括条件渲染、列表渲染、事件监听等功能。"
        :concepts="[
          { name: '条件渲染指令', description: 'v-if、v-else-if、v-else用于条件性地渲染元素，v-show用于控制元素的显示隐藏' },
          { name: '列表渲染指令', description: 'v-for用于基于数组、对象或数字渲染列表，支持item、index等参数' },
          { name: '双向绑定指令', description: 'v-model实现表单控件与数据的双向绑定，是表单处理的核心指令' },
          { name: '属性绑定指令', description: 'v-bind（简写为:）用于动态绑定HTML属性，支持class、style等特殊处理' },
          { name: '指令修饰符', description: '指令可以使用修饰符来改变行为，如.prevent、.stop、.once等' }
        ]"
        :notes="[
          'v-if会真正地添加或移除DOM元素，而v-show只是切换CSS的display属性',
          'v-for渲染列表时必须提供key属性，以便Vue跟踪每个节点的身份',
          '指令的值是JavaScript表达式，会在组件实例的作用域中求值',
          '自定义指令可以扩展Vue的功能，实现复用的DOM操作逻辑',
          '指令的执行顺序：v-for > v-if，建议不要在同一元素上同时使用'
        ]"
      />
      <DemoRunner>
        <div class="demo-container">
          <h3>条件渲染</h3>
          <button @click="toggleShow">切换显示</button>
          <p v-if="showElement">这个元素是显示的</p>
          <p v-else>这个元素是隐藏的</p>
          
          <h3>列表渲染</h3>
          <ul>
            <li v-for="(item, index) in items" :key="index">
              {{ index + 1 }}. {{ item }}
            </li>
          </ul>
          
          <h3>双向绑定</h3>
          <input v-model="inputValue" placeholder="输入内容">
          <p>输入的值: {{ inputValue }}</p>
        </div>
      </DemoRunner>
      <CodeBlock :code="directivesCode" language="vue" />
    </div>

    <!-- 事件处理 -->
    <div class="demo-section">
      <CommentBox 
        title="事件处理"
        description="使用v-on指令或@符号监听DOM事件。事件处理是用户交互的基础，Vue提供了强大而灵活的事件系统，支持原生DOM事件、自定义事件以及各种事件修饰符。"
        :concepts="[
          { name: '事件监听', description: '使用v-on或@语法糖监听DOM事件，如click、input、keyup等' },
          { name: '事件处理器', description: '可以是内联语句、方法名或方法调用，支持传递参数和访问原生事件对象' },
          { name: '事件修饰符', description: '.stop、.prevent、.capture、.self、.once等修饰符用于控制事件行为' },
          { name: '按键修饰符', description: '.enter、.tab、.delete、.esc等按键修饰符简化键盘事件处理' },
          { name: '系统修饰符', description: '.ctrl、.alt、.shift、.meta等系统修饰符用于组合键检测' }
        ]"
        :notes="[
          '事件处理器中可以使用$event访问原生DOM事件对象',
          '多个修饰符可以链式调用，如@click.stop.prevent',
          '.exact修饰符用于精确匹配系统修饰符的组合',
          '事件处理器会自动绑定到组件实例，无需手动绑定this',
          '在内联事件处理器中调用方法时，可以传递自定义参数'
        ]"
      />
      <DemoRunner>
        <div class="demo-container">
          <h3>基本事件</h3>
          <button @click="handleClick">点击我</button>
          <p>{{ clickMessage }}</p>
          
          <h3>事件修饰符</h3>
          <button @click.stop="handleStopClick">阻止冒泡</button>
          <button @click.prevent="handlePreventClick">阻止默认</button>
          
          <h3>按键修饰符</h3>
          <input @keyup.enter="handleEnter" placeholder="按回车">
        </div>
      </DemoRunner>
      <CodeBlock :code="eventsCode" language="vue" />
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import CommentBox from '../components/CodeDemo/CommentBox.vue'
import DemoRunner from '../components/CodeDemo/DemoRunner.vue'
import CodeBlock from '../components/CodeDemo/CodeBlock.vue'

export default defineComponent({
  name: 'TemplateDemo',
  components: {
    CommentBox,
    DemoRunner,
    CodeBlock
  },
  setup() {
    // 响应式数据定义 - 使用ref()创建响应式引用
    const message = ref('Hello Vue3!')        // 基本文本消息，用于演示文本插值
    const count = ref(42)                     // 数字类型，用于演示表达式计算
    const isActive = ref(true)                // 布尔类型，用于演示条件表达式
    const showElement = ref(true)             // 控制元素显示隐藏的状态
    const items = ref(['苹果', '香蕉', '橙子']) // 数组数据，用于演示列表渲染
    const inputValue = ref('')               // 输入框绑定的值，用于演示双向绑定
    const clickMessage = ref('还没有点击')     // 点击事件的反馈消息

    // 事件处理方法定义
    const toggleShow = () => {
      // 切换元素显示状态，演示v-if指令的响应式特性
      showElement.value = !showElement.value
    }

    const handleClick = () => {
      // 处理按钮点击事件，更新点击消息并显示当前时间
      clickMessage.value = `点击时间: ${new Date().toLocaleTimeString()}`
    }

    const handleStopClick = () => {
      // 演示.stop修饰符的效果，阻止事件冒泡
      console.log('阻止冒泡点击')
    }

    const handlePreventClick = () => {
      // 演示.prevent修饰符的效果，阻止默认行为
      console.log('阻止默认行为')
    }

    const handleEnter = () => {
      // 演示按键修饰符，响应回车键按下事件
      console.log('按下了回车键')
    }

    // 代码示例字符串 - 用于在CodeBlock组件中展示源码
    const interpolationCode = `<!-- 文本插值示例 -->
<!-- 基本插值：将数据直接渲染到模板中 -->
<p>{{ message }}</p>

<!-- 表达式插值：在插值中使用JavaScript表达式 -->
<p>{{ count * 2 + 1 }}</p>  <!-- 数学运算 -->
<p>{{ isActive ? '激活' : '未激活' }}</p>  <!-- 三元运算符 -->`

    const directivesCode = `<!-- Vue指令示例 -->
<!-- 条件渲染：根据数据动态显示或隐藏元素 -->
<p v-if="showElement">显示的元素</p>
<p v-else>隐藏的元素</p>

<!-- 列表渲染：基于数组数据渲染列表 -->
<ul>
  <li v-for="(item, index) in items" :key="index">
    {{ index + 1 }}. {{ item }}  <!-- 显示索引和内容 -->
  </li>
</ul>

<!-- 双向数据绑定：表单控件与数据同步 -->
<input v-model="inputValue" placeholder="输入内容">
<p>输入的值: {{ inputValue }}</p>  <!-- 实时显示输入内容 -->`

    const eventsCode = `<!-- 事件处理示例 -->
<!-- 基本事件监听：使用@语法糖监听点击事件 -->
<button @click="handleClick">点击我</button>

<!-- 事件修饰符：控制事件行为 -->
<button @click.stop="handleStopClick">阻止冒泡</button>    <!-- .stop阻止事件冒泡 -->
<button @click.prevent="handlePreventClick">阻止默认</button>  <!-- .prevent阻止默认行为 -->

<!-- 按键修饰符：监听特定按键 -->
<input @keyup.enter="handleEnter" placeholder="按回车">  <!-- .enter监听回车键 -->`

    return {
      message,
      count,
      isActive,
      showElement,
      items,
      inputValue,
      clickMessage,
      toggleShow,
      handleClick,
      handleStopClick,
      handlePreventClick,
      handleEnter,
      interpolationCode,
      directivesCode,
      eventsCode
    }
  }
})
</script>

<style scoped>
.template-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.intro {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 2rem;
}

.demo-section {
  margin-bottom: 3rem;
}

.demo-container {
  margin: 2rem 0;
  padding: 1.5rem;
  background: #f8f9fa;
  border-radius: 8px;
}

.demo-container h3 {
  color: #2c3e50;
  margin-bottom: 1rem;
}

.demo-container p {
  margin: 0.5rem 0;
}

.demo-container button {
  padding: 0.5rem 1rem;
  margin: 0.25rem;
  border: none;
  border-radius: 4px;
  background: #3498db;
  color: white;
  cursor: pointer;
  transition: background-color 0.2s;
}

.demo-container button:hover {
  background: #2980b9;
}

.demo-container input {
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin: 0.5rem 0;
  width: 200px;
}

.demo-container ul {
  list-style: none;
  padding: 0;
}

.demo-container li {
  padding: 0.5rem;
  background: white;
  margin: 0.25rem 0;
  border-radius: 4px;
  border-left: 3px solid #3498db;
}
</style>