<script setup>
import { reactive , ref , computed , watch } from 'vue'
import refAndReactive from '@/vueDemo/refAndReactive.vue'


// 定义两个响应式变量，分别代表姓和名
const firstName = ref('Tom')
const lastName = ref('Hanks')

// 创建一个计算属性 fullName，动态拼接姓和名
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})



const state = new Proxy({ count: 0 }, {
  get(target, key) {
    console.log(`读取了属性：${key}`)
    return target[key]
  },
  set(target, key, value) {
    console.log(`设置了属性：${key} = ${value}`)
    target[key] = value
    // 通知依赖更新视图
    return true
  }
})


// 监听 count 的变化
const count = ref(0)
const tipMsg = ref('空')
watch(count, (newVal, oldVal) => {
  tipMsg = `count 从 ${oldVal} 变成了 ${newVal}`
})



</script>

<template>

  <br></br>
  <p>当前计数是：{{ counter.count }}</p>
  <br></br>
  <p>当前用户的全名是：{{ fullName }}</p>
  <br></br>
  <p>取了属性：{{ state.count }}</p>
  <br></br>
  <p>读取了属性：{{ state.count++ }}</p>
   <br></br> 
<button @click="count++">{{ '增加数字为：' + count }}</button>

</template>
