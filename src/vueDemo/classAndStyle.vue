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




</script>

<template >
<div class="static" :class="{ active: isActive, 'text-danger': hasError}"></div>

<div :class="classTestObject"></div>

<div :class="[activeClass,errorClass]"></div>

<div :class="[isActive ? activeClass : '',errorClass]"></div>

<div :class="[{[activeClass]: isActive}, errorClass]"></div>

<!-- <p class="foo bar">Hi nihao </p>
<myCompent class="baz boo"> -->

    <p :class="$attrs.class">Hi!你好</p>
    <span>This is a child componet</span>

<div v-if="type === 'A'">
  A
</div>
<div v-else-if="type === 'B'">
  B
</div>
<div v-else-if="type === 'C'">
  C
</div>
<div v-else>
  Not A/B/C
</div>



</template>
