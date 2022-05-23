<template>
  <div>
    <ProductComp v-if="showProductComp" />
  </div>
</template>

<script>
import ProductComp from "@/components/ProductComp";

export default {
  name: "HomeView",
  components: {
    ProductComp,
  },
  data() {
    return {
      item: null,
      q: [],
      showProductComp: false,
    };
  },
  async mounted() {
    try {
      setTimeout(() => {
        this.item = this.$store.state.items.find(
          (el) => el.id === +this.$route.params.id
        );
        this.showProductComp = true;
      }, 100);
    } catch (err) {
      console.log(err);
    }
  },
};
</script>

<style>
</style>