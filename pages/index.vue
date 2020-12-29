<template>
  <div :class="$style.container">
    <div :class="$style.number">{{ count }}</div>
    <counter-button kind="plus" color="blue" @click="plus" />
    <counter-button kind="minus" color="orange" @click="minus" />
    <counter-button
      kind="multiplication"
      color="green"
      @click="multiplication"
    />
    <counter-button kind="slash-forward" color="red" @click="division" />
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
    multiplication() {
      this.count *= 2
    },
    division() {
      this.count /= 2
    },
  },
}
</script>

<style lang="scss" module>
.container {
  .number {
    font-size: 32px;
  }
}
</style>
