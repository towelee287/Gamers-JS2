<template>
  <div class="product">
    <a href="#"><img :src="item.img" content-type="" alt="prodImg" /></a>
    <p>{{ item.name }}</p>
    <div class="gallery_price">{{ item.price }} $</div>
    <button class="button" @click="appMethods.addProduct(item.id, item)">
      Add to cart
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      item: this.$parent.item,
      appMethods: this.$parent.$parent.$parent,
    };
  },
};
</script>

<style>
</style>