import { defineStore } from "pinia";

export const useProductStore = defineStore("product", {
  state: () => ({
    list: [
      {
        name: "Shoes",
        imageUrl:
          "",
        quantity: 10,
        about:
          "Red shoes",
        status: "open",
        price: 150,
      },
      {
        name: "Shirt",
        imageUrl:
          "",
        quantity: 10,
        about:
          "Lorem Ipsum is simply dummy",
        status: "open",
        price: 100,
      },
    ],
  }),
  actions: {
    filterProduct(serachText) {
      return this.list.filter((product) => product.name.includes(serachText));
    },
  },
});
