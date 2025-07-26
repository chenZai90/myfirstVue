<script setup>
import { reactive , ref , computed } from 'vue'

// 响应式对象（适合对象、数组等）
const counter = reactive({ count: 0 })

// 响应式基本类型（适合字符串、数字、布尔值）
const message = ref('Hello World!')

console.log(message.value)
message.value = '修改'


// 定义 props
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})


// 定义两个响应式变量，分别代表姓和名
const firstName = ref('Tom')
const lastName = ref('Hanks')

// 创建一个计算属性 fullName，动态拼接姓和名
const fullName = computed(() => {
  return `${firstName.value} ${lastName.value}`
})



</script>

<template>
  <h1>{{ message }}</h1>
  <p>当前计数是：{{ counter.count }}</p>
  <br></br>
  <p>当前用户的全名是：{{ fullName }}</p>



  <!-- <h1>{{ message.split('').reverse().join('') }}</h1> -->



  <!-- <div class="greetings">
    <h1 class="green">{{ props.msg }}</h1>
    <h3>
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
    </h3>
  </div> -->
</template>

<style scoped>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  position: relative;
  top: -10px;
}

h3 {
  font-size: 1.2rem;
}

.greetings h1,
.greetings h3 {
  text-align: center;
}

@media (min-width: 1024px) {
  .greetings h1,
  .greetings h3 {
    text-align: left;
  }
}
</style>