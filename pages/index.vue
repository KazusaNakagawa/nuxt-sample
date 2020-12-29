<template>
  <div class="container">
    <div class="number">{{ count }}</div>
    <counter-button kind="plus" color="blue" @click="plus" />
    <counter-button kind="minus" color="orange" @click="minus" />
  </div>
</template>

<script>
import CounterButton from '@/components/CounterButton'

export default {
  components: {
    CounterButton,
  },
  // data: function() の略
  data() {
    return {
      count: 100,
    }
  },
  methods: {
    plus() {
      this.count += 1
    },
    minus() {
      this.count -= 1
    },
  },
}
</script>

<style lang="scss">
.container {
  .number {
    font-size: 32px;
  }
}
</style>
