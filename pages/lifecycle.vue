<template>
  <div>
    <div>ライフサイクル</div>

    <v-text-field ref="number" v-model="number" />
    <div>数値: {{ number }}</div>

    <div v-for="user in users" :key="user.id" :class="$style.container">
      <!-- ここは要素を<div>で指定している -->
      <div>name: {{ user.name }}</div>
      <div>email: {{ user.email }}</div>
      <div>phone: {{ user.phone }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      number: 0,
      users: [],
    }
  },
  created() {
    console.log('created')

    this.$axios
      .get('http://jsonplaceholder.typicode.com/users')
      .then((response) => {
        // ここで debug response の値を確認して必要な要素を temolate で表示させる
        this.users = response.data
      })
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

<style lang="scss" module>
.container {
  margin: 10px 0;
  padding: 8px;
  border: 2px solid #da8;
  border-radius: 4px;
}
</style>
