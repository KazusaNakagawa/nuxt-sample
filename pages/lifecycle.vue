<template>
  <div>
    <div>ライフサイクル</div>

    <v-text-field ref="number" v-model="number" />
    <div>数値: {{ number }}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
    }
  },
  created() {
    console.log('created')
  },

  mounted() {
    console.log('mounted')
    // "vue 入力ホーム focus" のように検索すれば書き方は出てくるはず
    this.$refs.number.focus()
  },

  updated() {
    console.log('updated')
    // 変更されていることを確認出来る
    console.log(this.number)
  },

  destroyed() {
    console.log('destroyed')
  },
}
</script>

<style lang="scss" module></style>
