<template>
  <div class="example-page-container">
    <div>{{ title }}</div>
    <img
      alt="Vue logo"
      src="@/assets/vue.png"
    >
    <div>
      <HelloWorld />
    </div>
  </div>
</template>

<script>
import HelloWorld from '@/components/HelloWorld.vue'
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'ExamplePage',
  components: {
    HelloWorld
  },
  setup () {
    const title = ref('Vue 3 + Webpack 5')
    return {
      title
    }
  }
})
</script>
<style lang="scss" scoped>
.example-page-container {
  --color: 15, 140, 121;
  // padding: 20px;
  text-align: center;
  color: rgb(var(--color), 0.8);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
