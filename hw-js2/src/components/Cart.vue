<template>
  <div id="cart">
    <div class="cart_icon" @click="showCart = !showCart">
      <img src="@/assets/header/cart.png" alt="cart_icon_img" />
      <div class="cart_count">3</div>
    </div>
    <div class="drop_cart" v-show="showCart">
      <div id="cartOld">
        <CartItem
          v-for="item of this.cartItemsHelp"
          :item="item"
          :key="item.productId"
        />
        <div class="drop_cart_total">
          <span>TOTAL</span>
          <span id="basket_total">{{ total() }}$</span>
        </div>
        <a id="checkout_button" href="#" class="drop_cart_button">Checkout</a>
        <a id="go_cart" href="#" class="drop_cart_button">Go to cart</a>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from "@/components/CartItem";
import { get } from "@/components/requests";

export default {
  components: {
    CartItem,
  },
  data() {
    return {
      showCart: false,
      cartItemsHelp: this.$parent.$parent.$parent.cartItemsMain,
      url: "api/cart",
    };
  },
  async mounted() {
    try {
      await get(this.url).then((data) => {
        for (let el of data) {
          this.cartItemsHelp.push(el);
        }
      });
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    total() {
      let sum = 0;
      for (let item of this.cartItemsHelp) {
        sum += item.price * item.quantity;
      }
      return sum;
    },
  },
};
</script>

<style>
</style>