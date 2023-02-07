<template>
  <form
    class="search"
    method="get"
    @submit.prevent="this.$parent.$parent.$parent.filter(userSearch)"
  >
    <input name="s" type="text" placeholder="Search" v-model="userSearch" />
    <button><i class="bi bi-search"></i></button>
  </form>
</template>

<script>
export default {
  data() {
    return {
      userSearch: "",
    };
  },
};
</script>

<style>
</style>