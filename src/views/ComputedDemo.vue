<template>
  <div class="computed-demo">
    <!-- 页面标题 -->
    <div class="page-header">
      <h1>⚡ 计算属性</h1>
      <p class="page-description">
        学习Vue 3的计算属性（computed），了解其缓存机制、与方法的区别，以及可写计算属性的用法
      </p>
    </div>

    <!-- 基础计算属性 -->
    <section class="demo-section">
      <h2>🎯 基础计算属性</h2>
      
      <CommentBox
        title="computed() 基础用法"
        description="计算属性是基于其响应式依赖进行缓存的。只有在相关响应式依赖发生改变时才会重新求值。"
        :concepts="[
          { name: 'computed', description: '创建一个计算属性，基于响应式依赖进行缓存' },
          { name: '响应式依赖', description: '计算属性会追踪其内部使用的响应式数据' },
          { name: '缓存机制', description: '只有依赖发生变化时才重新计算，否则返回缓存值' }
        ]"
        :code-explanation="basicComputedExplanations"
        :notes="[
          '计算属性具有缓存性，相同依赖下不会重复计算',
          '计算属性是只读的，不能直接赋值',
          '计算属性会自动追踪依赖，依赖变化时自动更新'
        ]"
        :links="[
          { title: 'Vue 3官方文档 - 计算属性', url: 'https://cn.vuejs.org/guide/essentials/computed.html' }
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="BasicComputedDemo" title="基础计算属性示例" />
      </div>

      <CodeBlock
        :code="basicComputedCode"
        language="javascript"
        title="基础计算属性代码"
      />
    </section>

    <!-- 计算属性 vs 方法 -->
    <section class="demo-section">
      <h2>⚖️ 计算属性 vs 方法</h2>
      
      <CommentBox
        title="计算属性与方法的区别"
        description="计算属性基于响应式依赖进行缓存，而方法每次调用都会重新执行。"
        :concepts="[
          { name: '缓存差异', description: '计算属性有缓存，方法没有缓存' },
          { name: '执行时机', description: '计算属性依赖变化时执行，方法每次调用都执行' },
          { name: '性能考虑', description: '计算属性性能更好，适合复杂计算' }
        ]"
        :notes="[
          '计算属性：适合基于现有数据计算新值，有缓存机制',
          '方法：适合执行操作或每次都需要重新计算的场景',
          '如果不希望有缓存，请使用方法'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="ComputedVsMethodDemo" title="计算属性 vs 方法对比" />
      </div>

      <CodeBlock
        :code="computedVsMethodCode"
        language="javascript"
        title="计算属性 vs 方法对比代码"
      />
    </section>

    <!-- 可写计算属性 -->
    <section class="demo-section">
      <h2>✏️ 可写计算属性</h2>
      
      <CommentBox
        title="可写计算属性详解"
        description="计算属性默认是只读的，但可以通过提供getter和setter来创建可写的计算属性。"
        :concepts="[
          { name: 'getter', description: '获取计算属性值的函数' },
          { name: 'setter', description: '设置计算属性值的函数' },
          { name: '双向绑定', description: '可写计算属性可以用于v-model等双向绑定场景' }
        ]"
        :code-explanation="writableComputedExplanations"
        :notes="[
          '可写计算属性需要同时提供get和set函数',
          'setter通常用于将新值分解并更新相关的响应式数据',
          '常用于表单双向绑定和数据格式转换'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="WritableComputedDemo" title="可写计算属性示例" />
      </div>

      <CodeBlock
        :code="writableComputedCode"
        language="javascript"
        title="可写计算属性代码"
      />
    </section>

    <!-- 复杂计算属性示例 -->
    <section class="demo-section">
      <h2>🧮 复杂计算属性示例</h2>
      
      <CommentBox
        title="实际应用场景"
        description="展示计算属性在实际开发中的常见应用场景，如数据过滤、排序、格式化等。"
        :concepts="[
          { name: '数据过滤', description: '基于条件过滤数组数据' },
          { name: '数据排序', description: '对数据进行排序处理' },
          { name: '数据格式化', description: '格式化显示数据' },
          { name: '复杂计算', description: '基于多个数据源进行复杂计算' }
        ]"
        :notes="[
          '计算属性非常适合数据转换和格式化',
          '可以组合多个计算属性来构建复杂逻辑',
          '避免在模板中写复杂的表达式'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="ComplexComputedDemo" title="复杂计算属性示例" />
      </div>

      <CodeBlock
        :code="complexComputedCode"
        language="javascript"
        title="复杂计算属性代码"
      />
    </section>
  </div>
</template>

<script setup>
import { defineComponent, ref, computed, reactive } from 'vue'
import CodeBlock from '@/components/CodeDemo/CodeBlock.vue'
import DemoRunner from '@/components/CodeDemo/DemoRunner.vue'
import CommentBox from '@/components/CodeDemo/CommentBox.vue'

// Code explanation arrays
const basicComputedExplanations = [
  'const fullName = computed(() => firstName.value + lastName.value) - 创建一个基于firstName和lastName的计算属性',
  'fullName.value - 访问计算属性的值（在JavaScript中需要.value）',
  '{{ fullName }} - 在模板中使用计算属性（自动解包）'
]

const writableComputedExplanations = [
  'get() { return firstName.value + lastName.value } - getter函数定义如何计算值',
  'set(value) { [firstName.value, lastName.value] = value.split(" ") } - setter函数定义如何处理赋值',
  'fullName.value = "张 三" - 给计算属性赋值会触发setter'
]

// 基础计算属性示例组件
const BasicComputedDemo = defineComponent({
  setup() {
    // 创建响应式数据 - 使用ref()为基本数据类型创建响应式引用
    const firstName = ref('张')    // 姓氏，初始值为'张'
    const lastName = ref('三')     // 名字，初始值为'三' 
    const age = ref(25)            // 年龄，初始值为25
    const salary = ref(8000)       // 薪资，初始值为8000

    // 基础计算属性 - 基于firstName和lastName计算全名
    const fullName = computed(() => {
      // 这个console.log用于演示缓存机制
      // 只有当firstName或lastName发生变化时，这行代码才会执行
      console.log('计算fullName') // 用于演示缓存
      
      // 计算属性会自动追踪其内部使用的响应式数据（firstName和lastName）
      // 当这些依赖发生变化时，计算属性会自动重新计算
      return `${firstName.value}${lastName.value}`
    })

    // 格式化计算属性 - 将数字格式化为货币显示
    const formattedSalary = computed(() => {
      // toLocaleString() 方法将数字格式化为本地化字符串
      // 例如：8000 -> "8,000"，便于阅读
      return `¥${salary.value.toLocaleString()}`
    })

    // 基于多个依赖的计算属性 - 组合多个计算属性和响应式数据
    const userInfo = computed(() => {
      // 这个计算属性依赖于：
      // 1. fullName（计算属性）
      // 2. age（响应式数据）
      // 3. formattedSalary（计算属性）
      // 当任何一个依赖发生变化时，userInfo都会重新计算
      return `${fullName.value}，${age.value}岁，月薪${formattedSalary.value}`
    })

    // 辅助方法 - 用于演示计算属性的响应式特性
    function updateFirstName() {
      // 切换姓氏，触发fullName和userInfo重新计算
      firstName.value = firstName.value === '张' ? '李' : '张'
    }

    function updateAge() {
      // 生成20-40之间的随机年龄，触发userInfo重新计算
      age.value = Math.floor(Math.random() * 21) + 20
    }

    function updateSalary() {
      // 生成5000-15000之间的随机薪资，触发formattedSalary和userInfo重新计算
      salary.value = Math.floor(Math.random() * 10000) + 5000
    }

    return {
      firstName,
      lastName,
      age,
      salary,
      fullName,
      formattedSalary,
      userInfo,
      updateFirstName,
      updateAge,
      updateSalary
    }
  },
  template: `
    <div class="demo-item">
      <h3>基础计算属性示例</h3>
      <div style="margin: 1rem 0;">
        <p><strong>姓:</strong> 
          <input v-model="firstName" style="width: 60px; margin-left: 0.5rem;">
        </p>
        <p><strong>名:</strong> 
          <input v-model="lastName" style="width: 60px; margin-left: 0.5rem;">
        </p>
        <p><strong>年龄:</strong> {{ age }}岁</p>
        <p><strong>薪资:</strong> {{ formattedSalary }}</p>
      </div>
      <div style="padding: 1rem; background: #f8f9fa; border-radius: 4px; margin: 1rem 0;">
        <p><strong>全名:</strong> {{ fullName }}</p>
        <p><strong>用户信息:</strong> {{ userInfo }}</p>
      </div>
      <div>
        <button @click="updateFirstName">切换姓氏</button>
        <button @click="updateAge">随机年龄</button>
        <button @click="updateSalary">随机薪资</button>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 打开控制台查看计算属性的缓存效果
      </p>
    </div>
  `
})

// 计算属性 vs 方法对比示例组件
const ComputedVsMethodDemo = defineComponent({
  setup() {
    // 响应式数据定义
    const numbers = ref([1, 2, 3, 4, 5])  // 数字数组，用于计算
    const multiplier = ref(2)              // 乘数，影响计算结果
    const callCount = ref({ computed: 0, method: 0 })

    // 计算属性版本 - 具有缓存机制
    const computedSum = computed(() => {
      // 这个console.log用于演示缓存机制
      // 只有当numbers或multiplier发生变化时才会执行
      callCount.value.computed++
      console.log('🔄 计算属性被调用:', callCount.value.computed)
      
      // 计算数组中每个数字乘以multiplier后的总和
      // Vue会自动追踪numbers和multiplier的变化
      // 当依赖不变时，多次访问会使用缓存结果
      return numbers.value.reduce((sum, num) => sum + num * multiplier.value, 0)
    })

    // 方法版本 - 每次调用都执行
    function methodSum() {
      // 这个console.log用于演示方法的执行特点
      // 每次调用方法都会执行这行代码
      callCount.value.method++
      console.log('⚡ 方法被调用:', callCount.value.method)
      
      // 执行相同的计算逻辑
      // 但是每次调用都会重新计算，没有缓存机制
      return numbers.value.reduce((sum, num) => sum + num * multiplier.value, 0)
    }

    function addNumber() {
      numbers.value.push(numbers.value.length + 1)
    }

    function updateMultiplier() {
      multiplier.value = multiplier.value === 2 ? 3 : 2
    }

    function resetCallCount() {
      callCount.value = { computed: 0, method: 0 }
    }

    return {
      numbers,
      multiplier,
      callCount,
      computedSum,
      methodSum,
      addNumber,
      updateMultiplier,
      resetCallCount
    }
  },
  template: `
    <div class="demo-item">
      <h3>计算属性 vs 方法对比</h3>
      <div style="margin: 1rem 0;">
        <p><strong>数组:</strong> [{{ numbers.join(', ') }}]</p>
        <p><strong>乘数:</strong> {{ multiplier }}</p>
      </div>
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; margin: 1rem 0;">
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h4>计算属性 (有缓存)</h4>
          <p>结果: {{ computedSum }}</p>
          <p>结果: {{ computedSum }}</p>
          <p>结果: {{ computedSum }}</p>
          <p style="color: #666;">调用次数: {{ callCount.computed }}</p>
        </div>
        <div style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px;">
          <h4>方法 (无缓存)</h4>
          <p>结果: {{ methodSum() }}</p>
          <p>结果: {{ methodSum() }}</p>
          <p>结果: {{ methodSum() }}</p>
          <p style="color: #666;">调用次数: {{ callCount.method }}</p>
        </div>
      </div>
      <div>
        <button @click="addNumber">添加数字</button>
        <button @click="updateMultiplier">改变乘数</button>
        <button @click="resetCallCount">重置计数</button>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 注意观察调用次数的差异，计算属性有缓存机制
      </p>
    </div>
  `
})

// 可写计算属性示例组件
const WritableComputedDemo = defineComponent({
  setup() {
    // 基础响应式数据 - 用于构建可写计算属性
    const firstName = ref('张')                    // 姓氏
    const lastName = ref('三')                     // 名字
    const email = ref('zhangsan@example.com')      // 邮箱地址
    const phone = ref('138-0000-0000')             // 电话号码

    // 可写计算属性 - 支持getter和setter的计算属性
    const fullName = computed({
      // getter：当访问fullName时执行，返回组合后的全名
      get() {
        // 将姓和名组合成完整姓名
        return `${firstName.value} ${lastName.value}`
      },
      // setter：当给fullName赋值时执行，解析并更新底层数据
      set(value) {
        // 将输入的全名按空格分割为姓和名
        const names = value.split(' ')
        firstName.value = names[0] || ''  // 第一部分作为姓
        lastName.value = names[1] || ''   // 第二部分作为名
      }
    })

    // 复杂的可写计算属性 - 处理多个字段的组合
    const contact = computed({
      // getter：返回格式化的联系方式字符串
      get() {
        // 将邮箱和电话用" | "连接
        return `${email.value} | ${phone.value}`
      },
      // setter：解析联系方式字符串并更新对应字段
      set(value) {
        // 按" | "分割字符串
        const parts = value.split(' | ')
        email.value = parts[0] || ''  // 第一部分为邮箱
        phone.value = parts[1] || ''  // 第二部分为电话
      }
    })

    function randomName() {
      const names = ['张 三', '李 四', '王 五', '赵 六']
      fullName.value = names[Math.floor(Math.random() * names.length)]
    }

    function randomContact() {
      const contacts = [
        'john@example.com | 138-1111-1111',
        'jane@example.com | 139-2222-2222',
        'bob@example.com | 137-3333-3333'
      ]
      contact.value = contacts[Math.floor(Math.random() * contacts.length)]
    }

    return {
      firstName,
      lastName,
      email,
      phone,
      fullName,
      contact,
      randomName,
      randomContact
    }
  },
  template: `
    <div class="demo-item">
      <h3>可写计算属性示例</h3>
      <div style="margin: 1rem 0;">
        <div style="margin-bottom: 1rem;">
          <label><strong>全名 (可写计算属性):</strong></label>
          <input v-model="fullName" style="width: 200px; margin-left: 0.5rem;" placeholder="输入 '姓 名'">
        </div>
        <div style="margin-bottom: 1rem;">
          <label><strong>联系方式 (可写计算属性):</strong></label>
          <input v-model="contact" style="width: 300px; margin-left: 0.5rem;" placeholder="输入 '邮箱 | 电话'">
        </div>
      </div>
      <div style="padding: 1rem; background: #f8f9fa; border-radius: 4px; margin: 1rem 0;">
        <h4>底层数据:</h4>
        <p><strong>姓:</strong> {{ firstName }}</p>
        <p><strong>名:</strong> {{ lastName }}</p>
        <p><strong>邮箱:</strong> {{ email }}</p>
        <p><strong>电话:</strong> {{ phone }}</p>
      </div>
      <div>
        <button @click="randomName">随机姓名</button>
        <button @click="randomContact">随机联系方式</button>
      </div>
      <p style="margin-top: 1rem; color: #666; font-size: 0.9rem;">
        💡 修改计算属性会自动更新底层数据
      </p>
    </div>
  `
})

// 复杂计算属性示例组件 - 展示多层计算属性的组合使用
const ComplexComputedDemo = defineComponent({
  setup() {
    // 产品数据 - 模拟商品管理系统的数据结构
    const products = ref([
      { id: 1, name: 'iPhone 14', price: 5999, category: '手机', inStock: true },
      { id: 2, name: 'MacBook Pro', price: 12999, category: '电脑', inStock: true },
      { id: 3, name: 'iPad Air', price: 4399, category: '平板', inStock: false },
      { id: 4, name: 'Apple Watch', price: 2999, category: '手表', inStock: true },
      { id: 5, name: 'AirPods Pro', price: 1999, category: '耳机', inStock: true }
    ])

    // 过滤和排序的控制状态
    const searchText = ref('')           // 搜索关键词
    const selectedCategory = ref('全部')  // 选中的分类
    const sortBy = ref('name')           // 排序方式
    const showInStockOnly = ref(false)   // 是否只显示有库存的商品

    // 第一层计算属性：过滤后的产品列表
    // 根据多个条件过滤产品，展示计算属性的多重依赖
    const filteredProducts = computed(() => {
      let result = products.value

      // 按库存状态过滤 - 如果勾选"仅显示有库存"，则过滤掉缺货商品
      if (showInStockOnly.value) {
        result = result.filter(p => p.inStock)
      }

      // 按商品分类过滤 - 如果选择了具体分类，则只显示该分类的商品
      if (selectedCategory.value !== '全部') {
        result = result.filter(p => p.category === selectedCategory.value)
      }

      // 按搜索关键词过滤 - 在商品名称中搜索（不区分大小写）
      if (searchText.value) {
        result = result.filter(p => 
          p.name.toLowerCase().includes(searchText.value.toLowerCase())
        )
      }

      return result
    })

    // 第二层计算属性：排序后的产品列表
    // 基于filteredProducts计算属性进行排序，展示计算属性的链式依赖
    const sortedProducts = computed(() => {
      // 创建副本避免修改原数组（Vue的最佳实践）
      const result = [...filteredProducts.value]
      
      // 根据选择的排序方式进行排序
      switch (sortBy.value) {
        case 'name':
          // 按商品名称字母顺序排序（支持中文排序）
          return result.sort((a, b) => a.name.localeCompare(b.name))
        case 'price':
          // 按价格从低到高排序
          return result.sort((a, b) => a.price - b.price)
        case 'priceDesc':
          // 按价格从高到低排序
          return result.sort((a, b) => b.price - a.price)
        default:
          return result
      }
    })

    // 第三层计算属性：统计信息
    // 基于filteredProducts计算各种统计数据，展示计算属性的数据聚合能力
    const statistics = computed(() => {
      const total = filteredProducts.value.length  // 过滤后的商品总数
      const inStock = filteredProducts.value.filter(p => p.inStock).length  // 有库存的商品数量
      const totalValue = filteredProducts.value.reduce((sum, p) => sum + p.price, 0)  // 商品总价值
      const avgPrice = total > 0 ? Math.round(totalValue / total) : 0  // 平均价格（四舍五入）

      return {
        total,           // 总商品数
        inStock,         // 有库存数量
        outOfStock: total - inStock,  // 缺货数量
        totalValue,      // 总价值
        avgPrice         // 平均价格
      }
    })

    // 第四层计算属性：动态分类列表
    // 从商品数据中提取所有分类，用于生成分类选择器
    const categories = computed(() => {
      // 使用Set去重，获取所有不重复的分类
      const cats = [...new Set(products.value.map(p => p.category))]
      // 在分类列表前添加"全部"选项
      return ['全部', ...cats]
    })

    return {
      products,
      searchText,
      selectedCategory,
      sortBy,
      showInStockOnly,
      sortedProducts,
      statistics,
      categories
    }
  },
  template: `
    <div class="demo-item">
      <h3>复杂计算属性示例 - 产品管理</h3>
      
      <!-- 过滤控件 -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1rem; margin: 1rem 0; padding: 1rem; background: #f8f9fa; border-radius: 4px;">
        <div>
          <label>搜索:</label>
          <input v-model="searchText" placeholder="搜索产品..." style="width: 100%; margin-top: 0.25rem;">
        </div>
        <div>
          <label>分类:</label>
          <select v-model="selectedCategory" style="width: 100%; margin-top: 0.25rem;">
            <option v-for="cat in categories" :key="cat" :value="cat">{{ cat }}</option>
          </select>
        </div>
        <div>
          <label>排序:</label>
          <select v-model="sortBy" style="width: 100%; margin-top: 0.25rem;">
            <option value="name">按名称</option>
            <option value="price">价格升序</option>
            <option value="priceDesc">价格降序</option>
          </select>
        </div>
        <div>
          <label>
            <input type="checkbox" v-model="showInStockOnly" style="margin-right: 0.5rem;">
            仅显示有库存
          </label>
        </div>
      </div>

      <!-- 统计信息 -->
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); gap: 1rem; margin: 1rem 0;">
        <div style="text-align: center; padding: 0.5rem; background: #e3f2fd; border-radius: 4px;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #1976d2;">{{ statistics.total }}</div>
          <div style="font-size: 0.9rem; color: #666;">总数</div>
        </div>
        <div style="text-align: center; padding: 0.5rem; background: #e8f5e8; border-radius: 4px;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #388e3c;">{{ statistics.inStock }}</div>
          <div style="font-size: 0.9rem; color: #666;">有库存</div>
        </div>
        <div style="text-align: center; padding: 0.5rem; background: #ffebee; border-radius: 4px;">
          <div style="font-size: 1.5rem; font-weight: bold; color: #d32f2f;">{{ statistics.outOfStock }}</div>
          <div style="font-size: 0.9rem; color: #666;">缺货</div>
        </div>
        <div style="text-align: center; padding: 0.5rem; background: #fff3e0; border-radius: 4px;">
          <div style="font-size: 1.2rem; font-weight: bold; color: #f57c00;">¥{{ statistics.avgPrice }}</div>
          <div style="font-size: 0.9rem; color: #666;">平均价格</div>
        </div>
      </div>

      <!-- 产品列表 -->
      <div style="margin: 1rem 0;">
        <div v-if="sortedProducts.length === 0" style="text-align: center; padding: 2rem; color: #666;">
          没有找到匹配的产品
        </div>
        <div v-else style="display: grid; grid-template-columns: repeat(auto-fill, minmax(250px, 1fr)); gap: 1rem;">
          <div v-for="product in sortedProducts" :key="product.id" 
               style="padding: 1rem; border: 1px solid #ddd; border-radius: 4px; background: white;">
            <h4 style="margin: 0 0 0.5rem 0; color: #2c3e50;">{{ product.name }}</h4>
            <p style="margin: 0.25rem 0; color: #666;">分类: {{ product.category }}</p>
            <p style="margin: 0.25rem 0; font-size: 1.1rem; font-weight: bold; color: #e91e63;">¥{{ product.price.toLocaleString() }}</p>
            <p style="margin: 0.25rem 0;" :style="{ color: product.inStock ? '#4caf50' : '#f44336' }">
              {{ product.inStock ? '✅ 有库存' : '❌ 缺货' }}
            </p>
          </div>
        </div>
      </div>
    </div>
  `
})

// 代码示例
const basicComputedCode = `<!-- 基础计算属性示例 -->
<template>
  <div>
    <!-- 输入控件 -->
    <div class="input-group">
      <label>姓氏：</label>
      <input v-model="firstName" placeholder="请输入姓氏">
    </div>
    <div class="input-group">
      <label>名字：</label>
      <input v-model="lastName" placeholder="请输入名字">
    </div>
    <div class="input-group">
      <label>年龄：</label>
      <input v-model.number="age" type="number" placeholder="请输入年龄">
    </div>
    <div class="input-group">
      <label>薪资：</label>
      <input v-model.number="salary" type="number" placeholder="请输入薪资">
    </div>
    
    <!-- 计算属性结果展示 -->
    <div class="result-display">
      <h3>计算属性结果：</h3>
      <!-- 计算属性在模板中自动解包，无需.value -->
      <p><strong>全名：</strong>{{ fullName }}</p>
      <p><strong>格式化薪资：</strong>{{ formattedSalary }}</p>
      <p><strong>用户信息：</strong>{{ userInfo }}</p>
    </div>
    
    <!-- 操作按钮 -->
    <div class="button-group">
      <button @click="updateFirstName">切换姓氏</button>
      <button @click="updateAge">随机年龄</button>
      <button @click="updateSalary">随机薪资</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 创建响应式数据
// ref() 创建基本类型的响应式引用
const firstName = ref('张')    // 姓氏，初始值为'张'
const lastName = ref('三')     // 名字，初始值为'三'
const age = ref(25)            // 年龄，初始值为25
const salary = ref(8000)       // 薪资，初始值为8000

// 基础计算属性 - 基于firstName和lastName计算全名
const fullName = computed(() => {
  // 这个console.log用于演示缓存机制
  // 只有当firstName或lastName发生变化时，这行代码才会执行
  console.log('正在计算fullName...')
  
  // 计算属性会自动追踪其内部使用的响应式数据（firstName和lastName）
  // 当这些依赖发生变化时，计算属性会自动重新计算
  return \`\${firstName.value}\${lastName.value}\`
})

// 格式化计算属性 - 将数字格式化为货币显示
const formattedSalary = computed(() => {
  // toLocaleString() 方法将数字格式化为本地化字符串
  // 例如：8000 -> "8,000"，便于阅读
  return \`¥\${salary.value.toLocaleString()}\`
})

// 基于多个依赖的计算属性 - 组合多个计算属性和响应式数据
const userInfo = computed(() => {
  // 这个计算属性依赖于：
  // 1. fullName（计算属性）
  // 2. age（响应式数据）
  // 3. formattedSalary（计算属性）
  // 当任何一个依赖发生变化时，userInfo都会重新计算
  return \`\${fullName.value}，\${age.value}岁，月薪\${formattedSalary.value}\`
})

// 辅助方法
function updateFirstName() {
  // 切换姓氏，触发fullName和userInfo重新计算
  firstName.value = firstName.value === '张' ? '李' : '张'
}

function updateAge() {
  // 生成20-40之间的随机年龄，触发userInfo重新计算
  age.value = Math.floor(Math.random() * 21) + 20
}

function updateSalary() {
  // 生成5000-15000之间的随机薪资，触发formattedSalary和userInfo重新计算
  salary.value = Math.floor(Math.random() * 10000) + 5000
}

// 计算属性的特点：
// 1. 缓存性：基于响应式依赖进行缓存，只有依赖变化时才重新计算
// 2. 响应式：依赖的数据变化时，计算属性会自动更新
// 3. 只读性：默认情况下计算属性是只读的，不能直接赋值
// 4. 自动追踪：Vue会自动追踪计算属性内部使用的响应式数据
// 5. 模板友好：在模板中使用时自动解包，无需.value
<\/script>`

const computedVsMethodCode = `<!-- 计算属性 vs 方法对比示例 -->
<template>
  <div>
    <!-- 输入控件 -->
    <div class="input-section">
      <h3>修改数据：</h3>
      <div class="input-group">
        <label>数组：</label>
        <input v-model="numbersInput" placeholder="输入数字，用逗号分隔" @blur="updateNumbers">
      </div>
      <div class="input-group">
        <label>乘数：</label>
        <input v-model.number="multiplier" type="number" placeholder="输入乘数">
      </div>
    </div>
    
    <!-- 结果对比展示 -->
    <div class="comparison-section">
      <h3>性能对比（打开控制台查看执行次数）：</h3>
      
      <!-- 计算属性 - 具有缓存机制 -->
      <div class="computed-section">
        <h4>计算属性（有缓存）：</h4>
        <p>第1次访问：{{ computedSum }}</p>
        <p>第2次访问：{{ computedSum }}</p>
        <p>第3次访问：{{ computedSum }}</p>
        <small>注意：多次访问只计算一次，后续使用缓存</small>
      </div>
      
      <!-- 方法 - 每次调用都执行 -->
      <div class="method-section">
        <h4>方法（无缓存）：</h4>
        <p>第1次调用：{{ methodSum() }}</p>
        <p>第2次调用：{{ methodSum() }}</p>
        <p>第3次调用：{{ methodSum() }}</p>
        <small>注意：每次调用都重新计算</small>
      </div>
    </div>
    
    <!-- 操作按钮 -->
    <div class="button-group">
      <button @click="addNumber">添加随机数</button>
      <button @click="changeMultiplier">改变乘数</button>
      <button @click="resetData">重置数据</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 响应式数据
const numbers = ref([1, 2, 3, 4, 5])  // 数字数组
const multiplier = ref(2)              // 乘数
const numbersInput = ref('1,2,3,4,5')  // 输入框绑定的字符串

// 计算属性版本 - 具有缓存机制
const computedSum = computed(() => {
  // 这个console.log用于演示缓存机制
  // 只有当numbers或multiplier发生变化时才会执行
  console.log('🔄 计算属性执行了 - computedSum')
  
  // 计算数组中每个数字乘以multiplier后的总和
  // Vue会自动追踪numbers和multiplier的变化
  // 当依赖不变时，多次访问会使用缓存结果
  return numbers.value.reduce((sum, num) => sum + num * multiplier.value, 0)
})

// 方法版本 - 每次调用都执行
function methodSum() {
  // 这个console.log用于演示方法的执行特点
  // 每次调用方法都会执行这行代码
  console.log('⚡ 方法执行了 - methodSum')
  
  // 执行相同的计算逻辑
  // 但是每次调用都会重新计算，没有缓存机制
  return numbers.value.reduce((sum, num) => sum + num * multiplier.value, 0)
}

// 辅助方法
function updateNumbers() {
  // 将输入的字符串转换为数字数组
  try {
    const newNumbers = numbersInput.value
      .split(',')
      .map(str => parseFloat(str.trim()))
      .filter(num => !isNaN(num))
    
    if (newNumbers.length > 0) {
      numbers.value = newNumbers
    }
  } catch (error) {
    console.error('输入格式错误')
  }
}

function addNumber() {
  // 添加一个1-10之间的随机数
  const randomNum = Math.floor(Math.random() * 10) + 1
  numbers.value.push(randomNum)
  numbersInput.value = numbers.value.join(',')
}

function changeMultiplier() {
  // 随机改变乘数（1-5之间）
  multiplier.value = Math.floor(Math.random() * 5) + 1
}

function resetData() {
  // 重置为初始数据
  numbers.value = [1, 2, 3, 4, 5]
  multiplier.value = 2
  numbersInput.value = '1,2,3,4,5'
}

// 计算属性 vs 方法的区别：
// 
// 计算属性（computed）：
// 1. 缓存机制：基于响应式依赖进行缓存，依赖不变时使用缓存
// 2. 响应式：依赖变化时自动重新计算
// 3. 声明式：像数据属性一样使用，不需要调用
// 4. 性能优化：避免不必要的重复计算
// 5. 适用场景：复杂计算、格式化数据、基于其他数据的派生数据
// 
// 方法（methods）：
// 1. 无缓存：每次调用都重新执行
// 2. 命令式：需要主动调用
// 3. 灵活性：可以接收参数，执行副作用操作
// 4. 适用场景：事件处理、用户交互、需要参数的计算
<\/script>`

const writableComputedCode = `<!-- 可写计算属性示例 -->
<template>
  <div>
    <!-- 可写计算属性输入 -->
    <div class="writable-inputs">
      <h3>可写计算属性：</h3>
      <div class="input-group">
        <label>全名（可写计算属性）：</label>
        <!-- 直接绑定到可写计算属性，输入时会自动拆分 -->
        <input v-model="fullName" placeholder="输入全名，如：张 三">
      </div>
      <div class="input-group">
        <label>联系方式（可写计算属性）：</label>
        <!-- 输入格式：邮箱 | 电话 -->
        <input v-model="contact" placeholder="输入联系方式，如：email@example.com | 13800138000">
      </div>
    </div>
    
    <!-- 基础数据输入 -->
    <div class="basic-inputs">
      <h3>基础数据：</h3>
      <div class="input-group">
        <label>姓氏：</label>
        <input v-model="firstName" placeholder="输入姓氏">
      </div>
      <div class="input-group">
        <label>名字：</label>
        <input v-model="lastName" placeholder="输入名字">
      </div>
      <div class="input-group">
        <label>邮箱：</label>
        <input v-model="email" type="email" placeholder="输入邮箱">
      </div>
      <div class="input-group">
        <label>电话：</label>
        <input v-model="phone" placeholder="输入电话">
      </div>
    </div>
    
    <!-- 结果展示 -->
    <div class="result-display">
      <h3>实时结果：</h3>
      <p><strong>计算属性全名：</strong>{{ fullName }}</p>
      <p><strong>计算属性联系方式：</strong>{{ contact }}</p>
      <p><strong>基础数据 - 姓氏：</strong>{{ firstName }}</p>
      <p><strong>基础数据 - 名字：</strong>{{ lastName }}</p>
      <p><strong>基础数据 - 邮箱：</strong>{{ email }}</p>
      <p><strong>基础数据 - 电话：</strong>{{ phone }}</p>
    </div>
    
    <!-- 操作按钮 -->
    <div class="button-group">
      <button @click="setRandomName">设置随机姓名</button>
      <button @click="setRandomContact">设置随机联系方式</button>
      <button @click="resetData">重置数据</button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 基础响应式数据
const firstName = ref('张')                    // 姓氏
const lastName = ref('三')                     // 名字
const email = ref('zhangsan@example.com')      // 邮箱
const phone = ref('13800138000')               // 电话

// 可写计算属性 - 全名
// 可写计算属性需要同时提供 get 和 set 方法
const fullName = computed({
  // getter：当访问 fullName.value 时执行
  // 用于从基础数据计算出派生值
  get() {
    console.log('📖 读取 fullName')
    return \`\${firstName.value} \${lastName.value}\`
  },
  
  // setter：当给 fullName.value 赋值时执行
  // 用于将新值拆分并更新基础数据
  set(newValue) {
    console.log('✏️ 设置 fullName:', newValue)
    
    // 将输入的全名按空格拆分
    const names = newValue.split(' ')
    
    // 更新基础数据
    // 第一部分作为姓氏，第二部分作为名字
    firstName.value = names[0] || ''
    lastName.value = names[1] || ''
  }
})

// 可写计算属性 - 联系方式
const contact = computed({
  // getter：组合邮箱和电话
  get() {
    console.log('📖 读取 contact')
    return \`\${email.value} | \${phone.value}\`
  },
  
  // setter：拆分联系方式字符串
  set(newValue) {
    console.log('✏️ 设置 contact:', newValue)
    
    // 按 " | " 分隔符拆分
    const parts = newValue.split(' | ')
    
    // 更新基础数据
    email.value = parts[0] || ''
    phone.value = parts[1] || ''
  }
})

// 辅助方法
function setRandomName() {
  // 通过可写计算属性设置随机姓名
  const names = ['李 四', '王 五', '赵 六', '钱 七', '孙 八']
  const randomName = names[Math.floor(Math.random() * names.length)]
  
  // 直接给可写计算属性赋值，会触发 setter
  fullName.value = randomName
}

function setRandomContact() {
  // 通过可写计算属性设置随机联系方式
  const emails = ['user1@example.com', 'user2@test.com', 'user3@demo.org']
  const phones = ['13800138001', '13900139002', '15000150003']
  
  const randomEmail = emails[Math.floor(Math.random() * emails.length)]
  const randomPhone = phones[Math.floor(Math.random() * phones.length)]
  
  // 直接给可写计算属性赋值
  contact.value = \`\${randomEmail} | \${randomPhone}\`
}

function resetData() {
  // 重置为初始数据
  firstName.value = '张'
  lastName.value = '三'
  email.value = 'zhangsan@example.com'
  phone.value = '13800138000'
}

// 可写计算属性的特点：
// 
// 1. 双向绑定：既可以读取值，也可以设置值
// 2. 自动拆分：setter 可以将复合值拆分为多个基础数据
// 3. 数据同步：修改计算属性会自动更新相关的基础数据
// 4. 表单友好：可以直接用于 v-model 绑定
// 5. 逻辑封装：将复杂的数据转换逻辑封装在计算属性中
// 
// 使用场景：
// - 表单数据的格式化和解析
// - 复合字段的编辑（如全名、地址等）
// - 数据的双向转换（如单位换算）
// - 与第三方组件的数据适配
<\/script>`

const complexComputedCode = `<!-- 复杂计算属性示例 - 商品管理系统 -->
<template>
  <div class="product-management">
    <!-- 筛选控件 -->
    <div class="filters">
      <h3>商品筛选：</h3>
      <div class="filter-row">
        <div class="input-group">
          <label>搜索：</label>
          <input v-model="searchText" placeholder="搜索商品名称">
        </div>
        <div class="input-group">
          <label>分类：</label>
          <select v-model="selectedCategory">
            <option value="">全部分类</option>
            <option v-for="category in categories" :key="category" :value="category">
              {{ category }}
            </option>
          </select>
        </div>
        <div class="input-group">
          <label>排序：</label>
          <select v-model="sortBy">
            <option value="name">按名称</option>
            <option value="price-low">价格从低到高</option>
            <option value="price-high">价格从高到低</option>
          </select>
        </div>
        <div class="checkbox-group">
          <label>
            <input type="checkbox" v-model="showInStockOnly">
            仅显示有库存
          </label>
        </div>
      </div>
    </div>
    
    <!-- 统计信息 -->
    <div class="statistics">
      <h3>统计信息：</h3>
      <div class="stats-grid">
        <div class="stat-item">
          <span class="label">总数：</span>
          <span class="value">{{ statistics.total }}</span>
        </div>
        <div class="stat-item">
          <span class="label">有库存：</span>
          <span class="value">{{ statistics.inStock }}</span>
        </div>
        <div class="stat-item">
          <span class="label">缺货：</span>
          <span class="value">{{ statistics.outOfStock }}</span>
        </div>
        <div class="stat-item">
          <span class="label">平均价格：</span>
          <span class="value">¥{{ statistics.averagePrice.toLocaleString() }}</span>
        </div>
      </div>
    </div>
    
    <!-- 商品列表 -->
    <div class="product-list">
      <h3>商品列表：</h3>
      <div class="products-grid">
        <div 
          v-for="product in sortedProducts" 
          :key="product.id" 
          class="product-card"
          :class="{ 'out-of-stock': !product.inStock }"
        >
          <h4>{{ product.name }}</h4>
          <p class="price">¥{{ product.price.toLocaleString() }}</p>
          <p class="category">{{ product.category }}</p>
          <p class="stock" :class="product.inStock ? 'in-stock' : 'out-of-stock'">
            {{ product.inStock ? '有库存' : '缺货' }}
          </p>
        </div>
      </div>
      <p v-if="sortedProducts.length === 0" class="no-results">
        没有找到符合条件的商品
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

// 商品数据 - 模拟商品库存数据
const products = ref([
  { id: 1, name: 'iPhone 15', price: 5999, category: '手机', inStock: true },
  { id: 2, name: 'MacBook Pro', price: 12999, category: '电脑', inStock: false },
  { id: 3, name: 'iPad Air', price: 4599, category: '平板', inStock: true },
  { id: 4, name: 'Apple Watch', price: 2999, category: '手表', inStock: true },
  { id: 5, name: 'AirPods Pro', price: 1999, category: '耳机', inStock: false },
  { id: 6, name: 'Samsung Galaxy', price: 4999, category: '手机', inStock: true },
  { id: 7, name: 'Dell XPS', price: 8999, category: '电脑', inStock: true },
  { id: 8, name: 'Sony WH-1000XM4', price: 2299, category: '耳机', inStock: false }
])

// 筛选条件 - 用户输入的筛选参数
const searchText = ref('')           // 搜索关键词
const selectedCategory = ref('')     // 选择的分类
const sortBy = ref('name')           // 排序方式
const showInStockOnly = ref(false)   // 是否只显示有库存的商品

// 计算属性1：过滤商品 - 根据搜索文本、分类、库存状态筛选
const filteredProducts = computed(() => {
  console.log('🔍 执行商品过滤...')
  
  return products.value.filter(product => {
    // 搜索文本匹配 - 不区分大小写的模糊搜索
    const matchesSearch = product.name.toLowerCase().includes(searchText.value.toLowerCase())
    
    // 分类匹配 - 如果没有选择分类则显示所有分类
    const matchesCategory = !selectedCategory.value || product.category === selectedCategory.value
    
    // 库存状态匹配 - 如果勾选"仅显示有库存"则只显示有库存的商品
    const matchesStock = !showInStockOnly.value || product.inStock
    
    // 所有条件都满足才显示该商品
    return matchesSearch && matchesCategory && matchesStock
  })
})

// 计算属性2：排序商品 - 根据选择的排序方式对过滤后的商品排序
const sortedProducts = computed(() => {
  console.log('📊 执行商品排序...')
  
  // 创建过滤后商品的副本，避免直接修改原数组
  const sorted = [...filteredProducts.value]
  
  // 根据排序方式进行排序
  switch (sortBy.value) {
    case 'name':
      // 按名称字母顺序排序
      return sorted.sort((a, b) => a.name.localeCompare(b.name))
    case 'price-low':
      // 按价格从低到高排序
      return sorted.sort((a, b) => a.price - b.price)
    case 'price-high':
      // 按价格从高到低排序
      return sorted.sort((a, b) => b.price - a.price)
    default:
      return sorted
  }
})

// 计算属性3：统计信息 - 基于过滤后的商品计算统计数据
const statistics = computed(() => {
  console.log('📈 计算统计信息...')
  
  const filtered = filteredProducts.value
  
  // 分别统计有库存和缺货的商品
  const inStock = filtered.filter(p => p.inStock)
  const outOfStock = filtered.filter(p => !p.inStock)
  
  // 计算总价值
  const totalValue = filtered.reduce((sum, p) => sum + p.price, 0)
  
  return {
    total: filtered.length,                    // 总商品数
    inStock: inStock.length,                   // 有库存商品数
    outOfStock: outOfStock.length,             // 缺货商品数
    averagePrice: filtered.length > 0          // 平均价格
      ? Math.round(totalValue / filtered.length) 
      : 0
  }
})

// 计算属性4：分类列表 - 从商品数据中提取所有唯一分类
const categories = computed(() => {
  console.log('🏷️ 提取商品分类...')
  
  // 使用 Set 去重，然后转换为数组
  const categorySet = new Set(products.value.map(p => p.category))
  return Array.from(categorySet).sort() // 按字母顺序排序
})

// 复杂计算属性的特点：
// 
// 1. 链式依赖：sortedProducts 依赖 filteredProducts，形成计算链
// 2. 自动优化：Vue 会智能地只重新计算发生变化的部分
// 3. 缓存机制：相同的筛选条件下，计算结果会被缓存
// 4. 响应式更新：任何依赖数据变化都会触发相关计算属性更新
// 5. 性能优化：避免在模板中进行复杂计算，提高渲染性能
// 
// 实际应用场景：
// - 电商网站的商品筛选和排序
// - 数据表格的过滤和统计
// - 搜索结果的实时计算
// - 复杂表单的数据验证和格式化
<\/script>`
</script>

<style scoped>
.computed-demo {
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
  .computed-demo {
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