<template>
  <div>
    <!-- v-if 関係-->
    <div v-if="score >= 80">よくできました！</div>
    <div v-else-if="score >= 30">もっといけるで！</div>
    <div v-else>がんばらんと！</div>
    <hr />
    <!-- v-show で表示/非表示-->
    <div v-show="isShown">みえる??</div>
    <!-- v-btn vueで用意されているボタンなんかいい感じ -->
    <v-btn @click="toggleShown">表示/非表示の切り替え</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isShown: true,
      score: 40,
    }
  },
  methods: {
    // toggle: 訳/切り替える
    toggleShown() {
      this.isShown = !this.isShown
    },
  },
}
</script>
