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
  computed: {
    users() {
      return this.$store.state.user.users
    },
  },
  async created() {
    await this.$store.dispatch('user/fetchUsers')
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
