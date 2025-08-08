<script setup>
import { reactive , ref , computed , watch } from 'vue'
const isActive = ref(true)
const hasError = ref(fase)
const error = ref(null)

const classObject = reactive({
    active: true,
    'text-danger': false
})

const classTestObject = computed(()=>({
    active: isActive.value && !error.value,
    'text-danger': error.value && error.value.type === 'fatal'
}))

const activeClass = ref('active')
const errorClass = ref('text-danger')


const name = ref('Vue 用户')

// 方法定义，event 是原生 DOM 事件
function greet(event) {
  alert(`你好，${name.value}！`)
  alert(`你点击了标签：${event.target.tagName}`)
}

</script>

<template>

  <template>
  <button @click="greet">问候</button>
</template>

</template>