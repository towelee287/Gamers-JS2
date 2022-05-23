<template>
  <div class="drop_cart_product">
    <a href="#" class="drop_cart_product_link">
      <img :src="item.img" alt="product" class="drop_cart_product_img" />
    </a>
    <div class="drop_cart_product_info">
      <a href="#" class="drop_cart_product_name">{{ item.name }}</a>
      <div class="drop_cart_product_price">
        <span class="drop_cart_product_count">{{ item.quantity }}</span> x
        {{ item.price }}$
        <span class="drop_cart_product_sum">
          = {{ item.price * item.quantity }}$</span
        >
      </div>
    </div>
    <a
      href="#"
      name="remove"
      class="drop_cart_product_close fas fa-times-circle"
      @click="parentMethods.remove(item)"
    ></a>
  </div>
</template>

<script>
export default {
  props: ["item"],
  data() {
    return {
      parentMethods: this.$parent.$parent.$parent.$parent,
    };
  },
};
</script>

<style>
</style>