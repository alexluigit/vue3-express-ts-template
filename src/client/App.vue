<template>
<div>
  <h1>hello test from vue {{ thing }}</h1>
</div>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
export default defineComponent({
  name: "Main",
  setup() {
    const thing = "something"
    return {
      thing
    }
  },
  mounted() {
    console.log("mounted!")
  }
})
</script>
