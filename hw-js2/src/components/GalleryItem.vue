<template>
  <div class="game">
    <a href="#"><img :src="item.img" content-type="" alt="prodImg" /></a>
    <router-link class="gallery_name" :to="productPath"
      ><p>{{ item.name }}</p></router-link
    >
    <div class="gallery_price">{{ item.price }}$</div>
    <button class="button" @click="appMethods.addProduct(item.id, item)">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      appMethods: this.$parent.$parent.$parent.$parent,
      productPath: "/product/" + this.item.id,
    };
  },
  props: ["item"],
};
</script>

<style>
</style>