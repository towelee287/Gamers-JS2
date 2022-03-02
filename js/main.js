'use strict';

const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

const app = new Vue({
  el: '#app',
  data: {
    catalogUrl: '/catalogData.json',
    products: [],
    imgCatalog: 'https://via.placeholder.com/200x150',
    searchLine: '',
    show: true,
    showBasket: false,
    basket: []
  },
  methods: {
    getJson(url) {
      return fetch(url)
        .then(result => result.json())
        .catch(error => {
          console.log(error);
        })
    },
    addProduct(product) {
      console.log(product.id_product);
    },
    filterGoods() {
      // for (this.product of this.products) {
      //   if (this.product.product_name !== this.searchLine) {
      //     console.log(this.product);
      //   }
      // }
    }
  },
  beforeCreated() {},
  created() {
    this.getJson(`${API + this.catalogUrl}`)
      .then(data => {
        for (let el of data) {
          this.products.push(el);
        }
      });
  }
});