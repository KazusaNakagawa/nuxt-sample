<template>
  <div class="container">
    <div class="number">{{ count }}</div>
    <v-btn class="mx-1" fab dark color="blue" @click="plus">
      <v-icon dark> mdi-plus </v-icon>
    </v-btn>
    <v-btn class="mx-1" fab dark color="orange" @click="minus">
      <v-icon dark> mdi-minus </v-icon>
    </v-btn>
    <counter-button />
  </div>
</template>

<script>
import CounterButton from '@/components/CounterButton'

export default {
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
  components: {
    CounterButton,
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
