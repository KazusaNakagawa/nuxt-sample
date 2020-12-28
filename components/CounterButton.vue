<template>
  <v-btn class="mx-1" fab dark color="blue" @click="plus">
    <v-icon dark> mdi-plus </v-icon>
  </v-btn>
</template>

<script>
export default {
  // data: function() の略
  methods: {
    plus() {
      this.count += 1
    },
  },
}
</script>
