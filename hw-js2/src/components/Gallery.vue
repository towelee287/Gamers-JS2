<template>
  <div class="gallery_games">
    <GalleryItem v-for="item of GIVE_ITEMS" :key="item.id" :item="item" />
  </div>
</template>

<script>
import GalleryItem from "@/components/GalleryItem";
import { mapGetters } from "vuex";

export default {
  components: {
    GalleryItem,
  },
  computed: {
    ...mapGetters(["GIVE_ITEMS"]),
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>