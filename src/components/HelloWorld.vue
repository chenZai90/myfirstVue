<script setup>
import { reactive , ref , computed , watch } from 'vue'
import refAndReactive from '@/vueDemo/refAndReactive.vue'
import getAndSetProperty from '@/vueDemo/getAndSetProperty.vue'

// 定义 props
const props = defineProps({
  msg: {
    type: String,
    required: true
  }
})


</script>

<template>
  <!-- <h1>{{ message }}</h1>
  <br></br>
  <p>当前计数是：{{ counter.count }}</p>
  <br></br>
  <p>当前用户的全名是：{{ fullName }}</p>
  <br></br>
  <p>取了属性：{{ state.count }}</p>
  <br></br>
  <p>读取了属性：{{ state.count++ }}</p>
   <br></br> -->
 

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