<template>
  <div>
    <router-view />
  </div>
</template>

<script>
import { putJson } from "./components/requests";
import { postJson } from "./components/requests";
import { deleteJson } from "./components/requests";

export default {
  data() {
    return {
      cartItemsMain: [],
      galleryUrl: "/api/products",
      filtered: [],
    };
  },
  async mounted() {
    try {
      this.$store.dispatch("GET_ITEMS", this.galleryUrl);
    } catch (err) {
      console.log(err);
    }
  },
  methods: {
    addProduct(id, item) {
      let find = this.cartItemsMain.find((el) => el.id === id);
      if (find) {
        putJson(`/api/cart/${find.id}`, { quantity: 1 });
        find.quantity++;
      } else {
        let prod = Object.assign({ quantity: 1 }, item);
        console.log(prod);
        postJson("/api/cart", prod).then((data) => {
          if (data.result === 1) {
            this.cartItemsMain.push(prod);
          }
        });
      }
    },
    remove(item) {
      if (item.quantity > 1) {
        putJson(`/api/cart/${item.id}`, { quantity: -1 }).then((data) => {
          if (data.result === 1) {
            item.quantity--;
          }
        });
      } else {
        deleteJson(`/api/cart/${item.id}`).then((data) => {
          if (data.result === 1) {
            this.cartItemsMain.splice(this.cartItemsMain.indexOf(item), 1);
          }
        });
      }
    },
    filter(userSearch) {
      console.log(userSearch);
      let regexp = new RegExp(userSearch, "i");
      this.filtered = this.cartItemsMain.filter((el) => regexp.test(el.name));
      this.$store.dispatch("CHANGE_ITEMS", this.filtered);
    },
  },
};
</script>

<style>
</style>