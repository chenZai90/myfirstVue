<script setup>
import { reactive , ref } from 'vue'

// 响应式对象（适合对象、数组等）
const counter = reactive({ count: 0 })

// 响应式基本类型（适合字符串、数字、布尔值）
const message = ref('Hello World!')

console.log(message.value)
message.value = '修改'

</script>


<template>
   <h1>{{ message }}</h1>
    <h1>{{ message.split('').reverse().join('') }}</h1>
</template>

