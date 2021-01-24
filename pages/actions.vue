<template>
  <div>
    <div>Actions Backend API連携</div>

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
      users: [],
    }
  },
  async created() {
    try {
      const response = await this.$axios.get(
        'http://jsonplaceholder.typicode.com/users'
      )
      this.users = response.data
    } catch (err) {
      const res = err.response
      alert(`${res.statusText} ${res.status}`)
    }
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
