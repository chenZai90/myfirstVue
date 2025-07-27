<script setup> import { ref, watch } from 'vue' // 响应式数据 

const count = ref(0) // 用于显示日志信息的 ref
const log = ref('初始值：0') // 监听 count 的变化 
watch(count, (newVal, oldVal) => { log.value = `count 从 ${oldVal} 变成了 ${newVal}` }) 


const user = ref({ name: '90后晨仔' })
watch(
  () => user.value.name,  // 使用 getter 精确侦听某个属性
  (newName, oldName) => {
    console.log(`用户名从 ${oldName} 改成了 ${newName}`)
  }
)


</script>

<template>
<div>
<p>当前 count 值：{{ count }}</p>
<button @click="count++">点击增加 count</button> 
</div> 

<div> 
<p>监听日志：</p> 
<p style="color: green;">{{ log }}</p>
</div>
</template>

