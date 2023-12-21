import { defineStore } from "pinia";
export const useAdminOrderStore = defineStore("admin-order", {
  state: () => ({
    list: [
      {
        no: "OR12345",
        customerName: "TEST",
        totalPrice: "5000",
        status: "Payment Completed",
        address: "2000/11 Ayutthaya Thailand 13111",
        paymentMethod: "Credit card",
        updatedAt: "12/21/2023, 11:28:35 PM",
        products: [
          {
            name: "test 1",
            description: "รายละเอียด 1",
            imageUrl:
              "https://fastly.picsum.photos/id/928/200/200.jpg?hmac=5MQxbf-ANcu87ZaOn5sOEObpZ9PpJfrOImdC7yOkBlg",
            quantity: 1,
            price: "25,000",
          },
          {
            name: "test 2",
            description: "รายละเอียด 2",
            imageUrl:
              "https://fastly.picsum.photos/id/59/200/200.jpg?hmac=q9DbuoFh1L_NWnGk3AGdzuEOlg5bBW4JmBSgWmQdT74",
            quantity: 1,
            price: "11,000",
          },
        ],
      },
    ],
  }),
  actions: {
    getOrder(index) {
      return this.list[index];
    },
  },
});
