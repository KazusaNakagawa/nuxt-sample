<template>
  <div>
    <div><h1 class="title">記事詳細ページ</h1></div>
    <!-- <ul class="article-list">
      <li>記事１</li>
      <li>記事2</li>
    </ul> -->
    <div>
      <nuxt-link to="/articles/10/edit">Nuxt-link</nuxt-link>
    </div>
    <div>
      <a href="/articles/10/edit">a tag</a>
    </div>
  </div>
</template>

<script>
export default {
  mounted() {
    const foo = 'foo'
    console.log(foo)
  },
}
</script>

<style lang="scss">
.title {
  background: rgb(53, 51, 51);
}
.article-list {
  li {
    background: rgb(136, 143, 123);
  }
}
</style>
