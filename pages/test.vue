<template>
  <div>
    <div v-show="isShown">みえる??</div>
    <button @click="isView">見えるボタン</button>
    <button @click="isNotView">見えないボタン</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: true,
    }
  },
  methods: {
    isView() {
      this.isShown = true
    },
    isNotView() {
      this.isShown = false
    },
  },
}
</script>
