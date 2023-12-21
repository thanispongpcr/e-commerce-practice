import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [],
  }),
  actions: {
    loadProducts() {
      const products = localStorage.getItem("admin-products");
      if (products) {
        this.list = JSON.parse(products);
        this.loaded = true;
      }
    },
    filterProduct(serachText) {
      return this.list.filter((product) => product.name.includes(serachText));
    },
  },
});
