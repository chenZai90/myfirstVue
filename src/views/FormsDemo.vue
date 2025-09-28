<template>
  <div class="forms-demo">
    <h1>📝 表单控件演示</h1>
    <p class="intro">学习Vue中各种表单控件的使用方法，包括输入框、单选按钮、选择框和复选框。</p>

    <!-- 基础输入框 -->
    <section class="demo-section">
      <h2>📝 基础输入框</h2>
      
      <CommentBox
        title="输入框的基本用法"
        description="学习如何使用v-model实现双向数据绑定，这是Vue表单处理的核心概念。v-model提供了一种简洁的方式来处理表单输入和应用状态之间的同步。"
        :concepts="[
          { name: '双向数据绑定', description: 'v-model实现视图和数据模型的双向同步，当用户输入时数据自动更新，当数据变化时视图也会自动更新' },
          { name: '输入类型多样性', description: '支持text、password、email、number、tel、url等HTML5输入类型，每种类型都有特定的验证和显示行为' },
          { name: '实时响应性', description: '输入内容实时同步到数据模型，无需手动处理事件监听和数据更新' },
          { name: '修饰符增强', description: '支持.lazy、.number、.trim等修饰符来控制数据更新的时机和格式' },
          { name: '表单验证集成', description: '可以轻松集成HTML5原生验证和自定义验证逻辑' }
        ]"
        :code-explanation="basicInputExplanations"
        :notes="[
          'v-model是:value和@input事件的语法糖，简化了双向绑定的实现',
          '不同输入类型会触发不同的浏览器验证行为，如email类型会验证邮箱格式',
          '使用.lazy修饰符可以在change事件而非input事件时更新数据',
          '使用.number修饰符可以自动将输入转换为数字类型',
          '使用.trim修饰符可以自动去除输入内容的首尾空格'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="BasicInputDemo" title="基础输入框示例" />
      </div>

      <CodeBlock
        :code="basicInputCode"
        language="vue"
        title="基础输入框代码"
      />
    </section>

    <!-- 单选按钮 -->
    <section class="demo-section">
      <h2>🔘 单选按钮</h2>
      
      <CommentBox
        title="单选按钮的使用"
        description="学习如何使用单选按钮实现单选功能。单选按钮是表单中常用的控件，用于在多个互斥选项中选择一个，广泛应用于性别选择、支付方式、配送方式等场景。"
        :concepts="[
          { name: '单选按钮组', description: '具有相同name属性的单选按钮组成一个选择组，同一组内只能选择一个选项，这是HTML的原生行为' },
          { name: 'v-model绑定', description: '通过v-model绑定选中项的value值，当选择改变时，绑定的数据会自动更新为选中项的value' },
          { name: '动态选项生成', description: '通过v-for循环动态生成单选按钮选项，便于处理来自API或配置的选项数据' },
          { name: '默认选中状态', description: '可以通过设置v-model的初始值来指定默认选中的选项' },
          { name: '禁用状态控制', description: '可以通过disabled属性禁用特定选项或整个单选按钮组' }
        ]"
        :code-explanation="radioExplanations"
        :notes="[
          '相同name属性的单选按钮构成一个互斥选择组，这是HTML的标准行为',
          'v-model的值必须与某个选项的value值匹配才会显示为选中状态',
          '可以通过CSS自定义单选按钮的外观，创建更美观的界面',
          '在Vue中，推荐使用v-model而不是原生的name属性来管理单选状态',
          '单选按钮的value可以是字符串、数字或其他基本类型'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="RadioDemo" title="单选按钮示例" />
      </div>

      <CodeBlock
        :code="radioCode"
        language="vue"
        title="单选按钮代码"
      />
    </section>

    <!-- 选择框 -->
    <section class="demo-section">
      <h2>📋 选择框</h2>
      
      <CommentBox
        title="选择框的多种用法"
        description="学习单选、多选、分组等不同类型的选择框。选择框是表单中重要的控件，适用于选项较多或需要节省页面空间的场景，如城市选择、技能标签、产品分类等。"
        :concepts="[
          { name: '单选下拉框', description: '默认的select行为，从多个选项中选择一个，v-model绑定选中项的value值' },
          { name: '多选下拉框', description: '添加multiple属性启用多选模式，用户可以选择多个选项，v-model绑定包含所有选中值的数组' },
          { name: '选项分组', description: '使用optgroup元素对相关选项进行逻辑分组，提高用户体验和选项的可读性' },
          { name: '动态选项管理', description: '通过v-for动态生成选项，支持从API获取数据或根据条件过滤选项' },
          { name: '选项状态控制', description: '可以通过disabled属性禁用特定选项，通过selected属性设置默认选中项' }
        ]"
        :code-explanation="selectExplanations"
        :notes="[
          '多选模式下v-model必须绑定数组，单选模式下绑定单个值',
          '可以通过:disabled动态禁用选项，常用于条件限制场景',
          '支持级联选择，即根据上级选择动态更新下级选项',
          'optgroup的label属性用于显示分组标题，不能被选中',
          '在移动设备上，select会调用原生选择器，提供更好的用户体验'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="SelectDemo" title="选择框示例" />
      </div>

      <CodeBlock
        :code="selectCode"
        language="vue"
        title="选择框代码"
      />
    </section>

    <!-- 复选框 -->
    <section class="demo-section">
      <h2>☑️ 复选框</h2>
      
      <CommentBox
        title="复选框的使用方法"
        description="学习单个复选框和复选框组的使用。复选框是表单中灵活性最高的控件之一，适用于多选场景、开关控制、协议确认等多种用途。"
        :concepts="[
          { name: '单个复选框', description: '绑定布尔值表示选中状态，常用于协议确认、开关控制等二元选择场景' },
          { name: '复选框组', description: '多个复选框绑定同一个数组，数组包含所有选中项的value值，适用于多选场景如兴趣爱好、权限选择等' },
          { name: '全选功能', description: '通过计算属性和方法实现全选、反选功能，提升用户操作效率' },
          { name: '自定义值', description: '使用true-value和false-value属性自定义选中和未选中时的值，而不仅限于布尔值' },
          { name: '中间状态', description: '支持indeterminate状态，用于表示部分选中的情况，常见于树形结构的选择' }
        ]"
        :code-explanation="checkboxExplanations"
        :notes="[
          '单个复选框通常绑定布尔值，选中为true，未选中为false',
          '复选框组绑定数组，数组元素为选中项的value值',
          'true-value和false-value可以自定义选中和未选中的值，如yes/no',
          '全选功能通常通过计算属性判断是否全部选中，通过方法实现全选/取消全选',
          'indeterminate属性用于显示中间状态，但不影响实际的选中逻辑'
        ]"
      />

      <div class="demo-container">
        <DemoRunner :component="CheckboxDemo" title="复选框示例" />
      </div>

      <CodeBlock
        :code="checkboxCode"
        language="vue"
        title="复选框代码"
      />
    </section>
  </div>
</template>

<script setup>
import { defineComponent, ref, reactive, computed } from 'vue'
import CodeBlock from '@/components/CodeDemo/CodeBlock.vue'
import DemoRunner from '@/components/CodeDemo/DemoRunner.vue'
import CommentBox from '@/components/CodeDemo/CommentBox.vue'

// Code explanation variables
const basicInputExplanations = [
  { code: 'v-model="message"', explanation: '将输入框值绑定到message变量' },
  { code: 'type="email"', explanation: '设置输入框类型为邮箱格式' },
  { code: '@input="handleInput"', explanation: '监听输入事件' }
]

const radioExplanations = [
  { code: 'v-model="gender"', explanation: '绑定选中的性别值' },
  { code: 'value="male"', explanation: '设置选项的值' },
  { code: 'name="gender"', explanation: '设置单选组名称' }
]

const selectExplanations = [
  { code: 'v-model="selected"', explanation: '绑定选中的值' },
  { code: 'multiple', explanation: '启用多选模式' },
  { code: '<optgroup label="分组名">', explanation: '创建选项分组' }
]

const checkboxExplanations = [
  { code: 'v-model="agreed"', explanation: '绑定单个复选框的选中状态' },
  { code: 'v-model="hobbies"', explanation: '绑定复选框组的选中值数组' },
  { code: 'true-value="yes"', explanation: '自定义选中时的值' }
]

// 基础输入框演示
const BasicInputDemo = defineComponent({
  setup() {
    const form = reactive({
      name: '',
      email: '',
      password: '',
      phone: '',
      website: '',
      bio: ''
    })
    
    const characterCount = computed(() => form.bio.length)
    const maxLength = 200
    
    function clearForm() {
      Object.keys(form).forEach(key => {
        form[key] = ''
      })
    }
    
    return {
      form,
      characterCount,
      maxLength,
      clearForm
    }
  },
  template: `
    <div class="demo-item">
      <h3>基础输入框演示</h3>
      
      <form style="max-width: 500px; margin: 0 auto;">
        <!-- 文本输入 -->
        <div style="margin: 1rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">姓名:</label>
          <input 
            v-model="form.name" 
            type="text" 
            placeholder="请输入您的姓名"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">当前值: {{ form.name || '(空)' }}</p>
        </div>
        
        <!-- 邮箱输入 -->
        <div style="margin: 1rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">邮箱:</label>
          <input 
            v-model="form.email" 
            type="email" 
            placeholder="请输入邮箱地址"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">当前值: {{ form.email || '(空)' }}</p>
        </div>
        
        <!-- 密码输入 -->
        <div style="margin: 1rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">密码:</label>
          <input 
            v-model="form.password" 
            type="password" 
            placeholder="请输入密码"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">密码长度: {{ form.password.length }}</p>
        </div>
        
        <!-- 电话输入 -->
        <div style="margin: 1rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">电话:</label>
          <input 
            v-model="form.phone" 
            type="tel" 
            placeholder="请输入电话号码"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">当前值: {{ form.phone || '(空)' }}</p>
        </div>
        
        <!-- 网址输入 -->
        <div style="margin: 1rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">网站:</label>
          <input 
            v-model="form.website" 
            type="url" 
            placeholder="请输入网站地址"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">当前值: {{ form.website || '(空)' }}</p>
        </div>
        
        <!-- 多行文本 -->
        <div style="margin: 1rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">个人简介:</label>
          <textarea 
            v-model="form.bio" 
            placeholder="请输入个人简介"
            :maxlength="maxLength"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; min-height: 100px; resize: vertical;"
          ></textarea>
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">
            字符数: {{ characterCount }}/{{ maxLength }}
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 2rem;">
          <button 
            type="button" 
            @click="clearForm"
            style="padding: 0.75rem 2rem; background: #f44336; color: white; border: none; border-radius: 4px; cursor: pointer; font-size: 1rem;"
          >
            清空表单
          </button>
        </div>
      </form>
      
      <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
        <h4>表单数据:</h4>
        <pre style="background: white; padding: 1rem; border-radius: 4px; overflow-x: auto;">{{ JSON.stringify(form, null, 2) }}</pre>
      </div>
    </div>
  `
})

// 单选按钮演示
const RadioDemo = defineComponent({
  setup() {
    const gender = ref('')
    const size = ref('medium')
    const theme = ref('light')
    
    const genderOptions = [
      { value: 'male', label: '男' },
      { value: 'female', label: '女' },
      { value: 'other', label: '其他' }
    ]
    
    const sizeOptions = [
      { value: 'small', label: '小号' },
      { value: 'medium', label: '中号' },
      { value: 'large', label: '大号' }
    ]
    
    return {
      gender,
      size,
      theme,
      genderOptions,
      sizeOptions
    }
  },
  template: `
    <div class="demo-item">
      <h3>单选按钮演示</h3>
      
      <div style="max-width: 500px; margin: 0 auto;">
        <!-- 性别选择 -->
        <div style="margin: 2rem 0;">
          <h4>选择性别:</h4>
          <div style="display: flex; gap: 1rem; margin: 1rem 0;">
            <label v-for="option in genderOptions" :key="option.value" style="display: flex; align-items: center; cursor: pointer;">
              <input 
                v-model="gender" 
                type="radio" 
                :value="option.value"
                name="gender"
                style="margin-right: 0.5rem;"
              >
              {{ option.label }}
            </label>
          </div>
          <p style="color: #666; font-size: 0.9rem;">选中值: {{ gender || '(未选择)' }}</p>
        </div>
        
        <!-- 尺寸选择 -->
        <div style="margin: 2rem 0;">
          <h4>选择尺寸:</h4>
          <div style="display: flex; gap: 1rem; margin: 1rem 0;">
            <label v-for="option in sizeOptions" :key="option.value" style="display: flex; align-items: center; cursor: pointer;">
              <input 
                v-model="size" 
                type="radio" 
                :value="option.value"
                name="size"
                style="margin-right: 0.5rem;"
              >
              {{ option.label }}
            </label>
          </div>
          <p style="color: #666; font-size: 0.9rem;">选中值: {{ size }}</p>
        </div>
        
        <!-- 主题选择 -->
        <div style="margin: 2rem 0;">
          <h4>选择主题:</h4>
          <div style="display: flex; gap: 1rem; margin: 1rem 0;">
            <label style="display: flex; align-items: center; cursor: pointer;">
              <input 
                v-model="theme" 
                type="radio" 
                value="light"
                name="theme"
                style="margin-right: 0.5rem;"
              >
              浅色主题
            </label>
            <label style="display: flex; align-items: center; cursor: pointer;">
              <input 
                v-model="theme" 
                type="radio" 
                value="dark"
                name="theme"
                style="margin-right: 0.5rem;"
              >
              深色主题
            </label>
          </div>
          <p style="color: #666; font-size: 0.9rem;">选中值: {{ theme }}</p>
        </div>
      </div>
      
      <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
        <h4>选择结果:</h4>
        <pre style="background: white; padding: 1rem; border-radius: 4px;">{
  "gender": "{{ gender }}",
  "size": "{{ size }}",
  "theme": "{{ theme }}"
}</pre>
      </div>
    </div>
  `
})

// 选择框演示
const SelectDemo = defineComponent({
  setup() {
    const singleSelect = ref('')
    const multiSelect = ref([])
    const groupSelect = ref('')
    
    const fruits = [
      { value: 'apple', label: '苹果' },
      { value: 'banana', label: '香蕉' },
      { value: 'orange', label: '橙子' },
      { value: 'grape', label: '葡萄' }
    ]
    
    const colors = [
      { value: 'red', label: '红色' },
      { value: 'green', label: '绿色' },
      { value: 'blue', label: '蓝色' },
      { value: 'yellow', label: '黄色' }
    ]
    
    return {
      singleSelect,
      multiSelect,
      groupSelect,
      fruits,
      colors
    }
  },
  template: `
    <div class="demo-item">
      <h3>选择框演示</h3>
      
      <div style="max-width: 500px; margin: 0 auto;">
        <!-- 单选下拉框 -->
        <div style="margin: 2rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">选择水果:</label>
          <select 
            v-model="singleSelect"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
            <option value="">请选择...</option>
            <option v-for="fruit in fruits" :key="fruit.value" :value="fruit.value">
              {{ fruit.label }}
            </option>
          </select>
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">选中值: {{ singleSelect || '(未选择)' }}</p>
        </div>
        
        <!-- 多选下拉框 -->
        <div style="margin: 2rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">选择颜色 (多选):</label>
          <select 
            v-model="multiSelect"
            multiple
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem; min-height: 120px;"
          >
            <option v-for="color in colors" :key="color.value" :value="color.value">
              {{ color.label }}
            </option>
          </select>
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">选中值: {{ multiSelect.length ? multiSelect.join(', ') : '(未选择)' }}</p>
        </div>
        
        <!-- 分组选择框 -->
        <div style="margin: 2rem 0;">
          <label style="display: block; margin-bottom: 0.5rem; font-weight: bold;">选择食物:</label>
          <select 
            v-model="groupSelect"
            style="width: 100%; padding: 0.75rem; border: 1px solid #ddd; border-radius: 4px; font-size: 1rem;"
          >
            <option value="">请选择...</option>
            <optgroup label="水果">
              <option value="apple">苹果</option>
              <option value="banana">香蕉</option>
              <option value="orange">橙子</option>
            </optgroup>
            <optgroup label="蔬菜">
              <option value="carrot">胡萝卜</option>
              <option value="broccoli">西兰花</option>
              <option value="spinach">菠菜</option>
            </optgroup>
          </select>
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">选中值: {{ groupSelect || '(未选择)' }}</p>
        </div>
      </div>
      
      <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
        <h4>选择结果:</h4>
        <pre style="background: white; padding: 1rem; border-radius: 4px;">{
  "singleSelect": "{{ singleSelect }}",
  "multiSelect": {{ JSON.stringify(multiSelect) }},
  "groupSelect": "{{ groupSelect }}"
}</pre>
      </div>
    </div>
  `
})

// 复选框演示
const CheckboxDemo = defineComponent({
  setup() {
    const agreed = ref(false)
    const hobbies = ref([])
    const customValue = ref('')
    const selectAll = ref(false)
    
    const hobbyOptions = [
      { value: 'reading', label: '阅读' },
      { value: 'music', label: '音乐' },
      { value: 'sports', label: '运动' },
      { value: 'travel', label: '旅行' },
      { value: 'cooking', label: '烹饪' }
    ]
    
    function toggleSelectAll() {
      if (selectAll.value) {
        hobbies.value = hobbyOptions.map(option => option.value)
      } else {
        hobbies.value = []
      }
    }
    
    return {
      agreed,
      hobbies,
      customValue,
      selectAll,
      hobbyOptions,
      toggleSelectAll
    }
  },
  template: `
    <div class="demo-item">
      <h3>复选框演示</h3>
      
      <div style="max-width: 500px; margin: 0 auto;">
        <!-- 单个复选框 -->
        <div style="margin: 2rem 0;">
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input 
              v-model="agreed" 
              type="checkbox"
              style="margin-right: 0.5rem;"
            >
            我同意用户协议和隐私政策
          </label>
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">同意状态: {{ agreed ? '已同意' : '未同意' }}</p>
        </div>
        
        <!-- 自定义值复选框 -->
        <div style="margin: 2rem 0;">
          <label style="display: flex; align-items: center; cursor: pointer;">
            <input 
              v-model="customValue" 
              type="checkbox"
              true-value="yes"
              false-value="no"
              style="margin-right: 0.5rem;"
            >
            接收邮件通知
          </label>
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">当前值: {{ customValue || '(未设置)' }}</p>
        </div>
        
        <!-- 复选框组 -->
        <div style="margin: 2rem 0;">
          <h4>选择兴趣爱好:</h4>
          
          <label style="display: flex; align-items: center; cursor: pointer; margin: 0.5rem 0;">
            <input 
              v-model="selectAll" 
              type="checkbox"
              @change="toggleSelectAll"
              style="margin-right: 0.5rem;"
            >
            全选
          </label>
          
          <div style="margin-left: 1rem; border-left: 2px solid #eee; padding-left: 1rem;">
            <label v-for="option in hobbyOptions" :key="option.value" style="display: flex; align-items: center; cursor: pointer; margin: 0.5rem 0;">
              <input 
                v-model="hobbies" 
                type="checkbox"
                :value="option.value"
                style="margin-right: 0.5rem;"
              >
              {{ option.label }}
            </label>
          </div>
          
          <p style="margin: 0.25rem 0; color: #666; font-size: 0.9rem;">
            已选择: {{ hobbies.length ? hobbies.join(', ') : '(未选择)' }}
          </p>
        </div>
      </div>
      
      <div style="margin-top: 2rem; padding: 1rem; background: #f5f5f5; border-radius: 4px;">
        <h4>选择结果:</h4>
        <pre style="background: white; padding: 1rem; border-radius: 4px;">{
  "agreed": {{ agreed }},
  "customValue": "{{ customValue }}",
  "hobbies": {{ JSON.stringify(hobbies) }},
  "selectAll": {{ selectAll }}
}</pre>
      </div>
    </div>
  `
})

// 代码字符串
const basicInputCode = `<!-- 基础输入框示例 -->
<template>
  <div>
    <!-- 文本输入框 -->
    <!-- v-model 实现双向数据绑定，输入内容会实时同步到 message 变量 -->
    <input 
      v-model="message" 
      type="text" 
      placeholder="请输入内容"
    >
    
    <!-- 邮箱输入框 -->
    <!-- type="email" 提供邮箱格式验证和移动端优化键盘 -->
    <input 
      v-model="email" 
      type="email" 
      placeholder="请输入邮箱"
    >
    
    <!-- 多行文本输入框 -->
    <!-- textarea 用于输入较长的文本内容 -->
    <textarea 
      v-model="bio" 
      placeholder="请输入简介"
      rows="4"
    ></textarea>
    
    <!-- 其他常用输入类型 -->
    <!-- 密码输入框 -->
    <input 
      v-model="password" 
      type="password" 
      placeholder="请输入密码"
    >
    
    <!-- 数字输入框 -->
    <input 
      v-model="age" 
      type="number" 
      placeholder="请输入年龄"
      min="0" 
      max="120"
    >
    
    <!-- 日期输入框 -->
    <input 
      v-model="birthday" 
      type="date"
    >
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 创建响应式数据
const message = ref('')   // 普通文本
const email = ref('')     // 邮箱地址
const bio = ref('')       // 个人简介
const password = ref('')  // 密码
const age = ref('')       // 年龄（数字）
const birthday = ref('')  // 生日（日期）

// v-model 的工作原理：
// v-model="message" 等价于：
// :value="message" @input="message = $event.target.value"
// 这就是双向数据绑定的实现机制
<\/script>`

const radioCode = `<!-- 单选按钮示例 -->
<template>
  <div>
    <!-- 基础单选按钮组 -->
    <div class="radio-group">
      <h4>性别选择：</h4>
      <!-- 相同 name 属性的单选按钮组成一组，只能选择其中一个 -->
      <!-- v-model 绑定的值会是选中项的 value 值 -->
      <label>
        <input 
          v-model="gender" 
          type="radio" 
          value="male" 
          name="gender"
        > 
        男性
      </label>
      
      <label>
        <input 
          v-model="gender" 
          type="radio" 
          value="female" 
          name="gender"
        > 
        女性
      </label>
      
      <label>
        <input 
          v-model="gender" 
          type="radio" 
          value="other" 
          name="gender"
        > 
        其他
      </label>
    </div>
    
    <!-- 动态单选按钮组 -->
    <div class="radio-group">
      <h4>选择你的偏好：</h4>
      <!-- 使用 v-for 循环生成动态选项 -->
      <div v-for="option in options" :key="option.value">
        <label>
          <input 
            v-model="selected" 
            type="radio" 
            :value="option.value" 
            name="preference"
          >
          {{ option.label }}
        </label>
      </div>
    </div>
    
    <!-- 显示选中的值 -->
    <div class="result">
      <p>选中的性别：{{ gender || '未选择' }}</p>
      <p>选中的偏好：{{ selected || '未选择' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 创建响应式数据
const gender = ref('')     // 性别选择，存储选中的 value 值
const selected = ref('')   // 偏好选择，存储选中的 value 值

// 动态选项数据
const options = [
  { value: 'frontend', label: '前端开发' },
  { value: 'backend', label: '后端开发' },
  { value: 'fullstack', label: '全栈开发' },
  { value: 'mobile', label: '移动开发' },
  { value: 'ai', label: '人工智能' }
]

// 单选按钮的特点：
// 1. 相同 name 属性的单选按钮组成一组
// 2. 一组中只能选择一个选项
// 3. v-model 的值对应选中项的 value 属性
// 4. 如果没有选中任何项，v-model 的值为空字符串
<\/script>`

const selectCode = `<!-- 选择框示例 -->
<template>
  <div>
    <!-- 单选下拉框 -->
    <div class="select-group">
      <h4>选择你的城市：</h4>
      <!-- 单选模式下，v-model 绑定选中的单个值 -->
      <select v-model="selected">
        <!-- 默认选项，value 为空字符串 -->
        <option value="">请选择城市</option>
        <option value="beijing">北京</option>
        <option value="shanghai">上海</option>
        <option value="guangzhou">广州</option>
        <option value="shenzhen">深圳</option>
      </select>
      <p>选中的城市：{{ selected || '未选择' }}</p>
    </div>
    
    <!-- 多选下拉框 -->
    <div class="select-group">
      <h4>选择你喜欢的颜色（可多选）：</h4>
      <!-- 多选模式下，v-model 绑定一个数组 -->
      <!-- 按住 Ctrl/Cmd 键可以选择多个选项 -->
      <select v-model="multiSelected" multiple size="4">
        <option value="red">红色</option>
        <option value="green">绿色</option>
        <option value="blue">蓝色</option>
        <option value="yellow">黄色</option>
        <option value="purple">紫色</option>
        <option value="orange">橙色</option>
      </select>
      <p>选中的颜色：{{ multiSelected.join(', ') || '未选择' }}</p>
    </div>
    
    <!-- 分组选择框 -->
    <div class="select-group">
      <h4>选择你喜欢的食物：</h4>
      <!-- 使用 optgroup 对选项进行分组 -->
      <select v-model="groupSelected">
        <option value="">请选择食物</option>
        
        <!-- 水果分组 -->
        <optgroup label="🍎 水果">
          <option value="apple">苹果</option>
          <option value="banana">香蕉</option>
          <option value="orange">橙子</option>
          <option value="grape">葡萄</option>
        </optgroup>
        
        <!-- 蔬菜分组 -->
        <optgroup label="🥬 蔬菜">
          <option value="carrot">胡萝卜</option>
          <option value="broccoli">西兰花</option>
          <option value="spinach">菠菜</option>
        </optgroup>
        
        <!-- 肉类分组 -->
        <optgroup label="🥩 肉类">
          <option value="beef">牛肉</option>
          <option value="pork">猪肉</option>
          <option value="chicken">鸡肉</option>
        </optgroup>
      </select>
      <p>选中的食物：{{ groupSelected || '未选择' }}</p>
    </div>
    
    <!-- 动态选项 -->
    <div class="select-group">
      <h4>选择编程语言：</h4>
      <select v-model="languageSelected">
        <option value="">请选择语言</option>
        <!-- 使用 v-for 生成动态选项 -->
        <option 
          v-for="lang in languages" 
          :key="lang.value" 
          :value="lang.value"
          :disabled="lang.disabled"
        >
          {{ lang.label }}
        </option>
      </select>
      <p>选中的语言：{{ languageSelected || '未选择' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

// 创建响应式数据
const selected = ref('')          // 单选值
const multiSelected = ref([])     // 多选值（数组）
const groupSelected = ref('')     // 分组选择值
const languageSelected = ref('')  // 动态选项选择值

// 动态选项数据
const languages = [
  { value: 'javascript', label: 'JavaScript', disabled: false },
  { value: 'python', label: 'Python', disabled: false },
  { value: 'java', label: 'Java', disabled: false },
  { value: 'csharp', label: 'C#', disabled: false },
  { value: 'php', label: 'PHP', disabled: true },  // 禁用选项
  { value: 'go', label: 'Go', disabled: false },
  { value: 'rust', label: 'Rust', disabled: false }
]

// 选择框的特点：
// 1. 单选模式：v-model 绑定单个值
// 2. 多选模式：v-model 绑定数组，需要添加 multiple 属性
// 3. 分组：使用 optgroup 标签对选项进行分组
// 4. 禁用：使用 disabled 属性禁用特定选项
// 5. 动态选项：结合 v-for 生成动态选项列表
<\/script>`

const checkboxCode = `<!-- 复选框示例 -->
<template>
  <div>
    <!-- 单个复选框 -->
    <div class="checkbox-group">
      <h4>用户协议：</h4>
      <!-- 单个复选框，v-model 绑定布尔值 -->
      <div class="checkbox-item">
        <input type="checkbox" v-model="checked" id="agree">
        <label for="agree">我已阅读并同意《用户协议》和《隐私政策》</label>
      </div>
      <p>是否同意：{{ checked ? '已同意' : '未同意' }}</p>
    </div>
    
    <!-- 自定义值的复选框 -->
    <div class="checkbox-group">
      <h4>接收通知：</h4>
      <!-- 使用 true-value 和 false-value 自定义选中和未选中的值 -->
      <div class="checkbox-item">
        <input 
          type="checkbox" 
          v-model="toggle" 
          true-value="yes" 
          false-value="no"
          id="notification"
        >
        <label for="notification">接收邮件通知</label>
      </div>
      <p>通知设置：{{ toggle === 'yes' ? '开启' : '关闭' }}</p>
    </div>
    
    <!-- 复选框组 -->
    <div class="checkbox-group">
      <h4>选择你喜欢的编程语言（可多选）：</h4>
      <!-- 多个复选框绑定到同一个数组 -->
      <div class="checkbox-list">
        <div class="checkbox-item">
          <input type="checkbox" v-model="checkedLanguages" value="JavaScript" id="js">
          <label for="js">JavaScript</label>
        </div>
        <div class="checkbox-item">
          <input type="checkbox" v-model="checkedLanguages" value="Python" id="python">
          <label for="python">Python</label>
        </div>
        <div class="checkbox-item">
          <input type="checkbox" v-model="checkedLanguages" value="Java" id="java">
          <label for="java">Java</label>
        </div>
        <div class="checkbox-item">
          <input type="checkbox" v-model="checkedLanguages" value="Vue.js" id="vue">
          <label for="vue">Vue.js</label>
        </div>
        <div class="checkbox-item">
          <input type="checkbox" v-model="checkedLanguages" value="React" id="react">
          <label for="react">React</label>
        </div>
      </div>
      <p>已选择：{{ checkedLanguages.length > 0 ? checkedLanguages.join(', ') : '未选择' }}</p>
    </div>
    
    <!-- 动态复选框组 -->
    <div class="checkbox-group">
      <h4>选择你的兴趣爱好：</h4>
      <div class="checkbox-list">
        <!-- 使用 v-for 生成动态复选框 -->
        <div 
          v-for="hobby in hobbies" 
          :key="hobby.id" 
          class="checkbox-item"
        >
          <input 
            type="checkbox" 
            v-model="selectedHobbies" 
            :value="hobby.value"
            :id="hobby.id"
            :disabled="hobby.disabled"
          >
          <label :for="hobby.id">{{ hobby.label }}</label>
        </div>
      </div>
      <p>选中的爱好：{{ selectedHobbies.join(', ') || '未选择' }}</p>
    </div>
    
    <!-- 全选/反选功能 -->
    <div class="checkbox-group">
      <h4>技能选择：</h4>
      <div class="checkbox-item">
        <input 
          type="checkbox" 
          v-model="selectAll" 
          @change="toggleAll"
          id="selectAll"
        >
        <label for="selectAll">全选/反选</label>
      </div>
      <div class="checkbox-list">
        <div 
          v-for="skill in skills" 
          :key="skill" 
          class="checkbox-item"
        >
          <input 
            type="checkbox" 
            v-model="selectedSkills" 
            :value="skill"
            :id="skill"
          >
          <label :for="skill">{{ skill }}</label>
        </div>
      </div>
      <p>已选技能：{{ selectedSkills.join(', ') || '未选择' }}</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'

// 创建响应式数据
const checked = ref(false)              // 单个复选框的值
const toggle = ref('no')                // 自定义值的复选框
const checkedLanguages = ref([])        // 编程语言复选框组
const selectedHobbies = ref([])         // 动态爱好复选框组
const selectedSkills = ref([])          // 技能复选框组

// 动态爱好数据
const hobbies = [
  { id: 'reading', value: '阅读', label: '阅读', disabled: false },
  { id: 'music', value: '音乐', label: '音乐', disabled: false },
  { id: 'sports', value: '运动', label: '运动', disabled: false },
  { id: 'travel', value: '旅行', label: '旅行', disabled: true },  // 禁用选项
  { id: 'cooking', value: '烹饪', label: '烹饪', disabled: false },
  { id: 'photography', value: '摄影', label: '摄影', disabled: false }
]

// 技能列表
const skills = ['HTML', 'CSS', 'JavaScript', 'Vue.js', 'Node.js', 'TypeScript']

// 全选状态计算属性
const selectAll = computed({
  get() {
    return selectedSkills.value.length === skills.length
  },
  set(value) {
    // 这里的逻辑在 toggleAll 方法中处理
  }
})

// 全选/反选方法
const toggleAll = () => {
  if (selectedSkills.value.length === skills.length) {
    // 如果全部选中，则清空
    selectedSkills.value = []
  } else {
    // 否则选中全部
    selectedSkills.value = [...skills]
  }
}

// 复选框的特点：
// 1. 单个复选框：v-model 绑定布尔值
// 2. 自定义值：使用 true-value 和 false-value 属性
// 3. 复选框组：多个复选框绑定到同一个数组
// 4. 动态生成：结合 v-for 生成动态复选框
// 5. 全选功能：使用计算属性和方法实现全选/反选
<\/script>`
</script>

<style scoped>
.forms-demo {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.intro {
  font-size: 1.1rem;
  color: #666;
  margin-bottom: 3rem;
  text-align: center;
}

.demo-section {
  margin-bottom: 4rem;
}

.demo-section h2 {
  color: #2c3e50;
  border-bottom: 2px solid #3498db;
  padding-bottom: 0.5rem;
  margin-bottom: 2rem;
}

.demo-container {
  margin: 2rem 0;
  padding: 2rem;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background: #fafafa;
}

.demo-item {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.demo-item h3 {
  color: #2c3e50;
  margin-bottom: 1.5rem;
  text-align: center;
}

/* 表单样式优化 */
input[type="text"],
input[type="email"],
input[type="password"],
input[type="tel"],
input[type="url"],
select,
textarea {
  transition: border-color 0.3s ease;
}

input[type="text"]:focus,
input[type="email"]:focus,
input[type="password"]:focus,
input[type="tel"]:focus,
input[type="url"]:focus,
select:focus,
textarea:focus {
  outline: none;
  border-color: #3498db;
  box-shadow: 0 0 0 2px rgba(52, 152, 219, 0.2);
}

/* 单选按钮和复选框样式 */
input[type="radio"],
input[type="checkbox"] {
  transform: scale(1.2);
}

label {
  transition: color 0.3s ease;
}

label:hover {
  color: #3498db;
}

/* 按钮样式 */
button {
  transition: all 0.3s ease;
}

button:hover {
  transform: translateY(-1px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.2);
}

/* 代码块样式 */
pre {
  font-family: 'Monaco', 'Menlo', 'Ubuntu Mono', monospace;
  font-size: 0.9rem;
  line-height: 1.5;
}
</style>