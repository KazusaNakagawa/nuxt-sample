<template>
  <div>
    <!-- v-if 関係-->
    <div v-if="score >= 80">よくできました！</div>
    <div v-else-if="score >= 30">もっといけるで！</div>
    <div v-else>がんばらんと！</div>
    <hr />

    <!-- <a :href="googleLink">Googleへのリンク</a> -->

    <!-- v-if で書くんじゃなくて, v-bind を積極的に使う事で template内がスッキリする -->
    <img :src="imageUrl()" width="100px" />
    <hr />

    <!-- @イベント名 -->
    <v-btn @click="showMessage('クリック')">クリック</v-btn>
    <v-btn @dblclick="showMessage('ダブルクリック')">ダブルクリック</v-btn>
    <v-btn @mouseenter="showMessage('マウスエンター')">マウスエンター</v-btn>
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
      score: 80,
      googleLink: 'https://google.com',
    }
  },
  methods: {
    // toggle: 訳/切り替える
    toggleShown() {
      this.isShown = !this.isShown
    },
    imageUrl() {
      if (this.score >= 80) {
        return 'https://2.bp.blogspot.com/-zDsrPiqkR_0/U0pTNj7lpoI/AAAAAAAAfGA/2Z1onz10tAw/s800/grade2_yokudekimashita.png'
      } else if (this.score >= 30) {
        return 'https://2.bp.blogspot.com/-wJDmO2MIKkg/U0pTOEZT-JI/AAAAAAAAfGc/p9uwt9Msq9A/s800/grade3_ganbarimashita.png'
      } else {
        return 'https://2.bp.blogspot.com/-Bc8NTQ2PqY8/U0pTOuIDWQI/AAAAAAAAfGY/1RU2LKdozKs/s800/grade5_ganbarimasyou.png'
      }
    },
    showMessage(message) {
      alert(`${message} !!!!!`)
    },
  },
}
</script>
