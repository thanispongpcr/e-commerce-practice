<script setup>
import {RouterLink} from 'vue-router'

import UserLayout from "@/layouts/UserLayout.vue";
import Close from "@/components/icons/Close.vue";

import { useCartStore } from "@/stores/user/cart";

const cartStore = useCartStore();

const changQuantity = (event, index) => {
  const newQuantity = parseInt(event.target.value)
  cartStore.UpdateQuantity(index, newQuantity)
}
</script>
<template>
  <UserLayout>
    <h1 class="text-2xl font-bold m-4">Shopping Cart</h1>

    <div class="flex my-4">

      <div iv class="flex-auto w-64 bg-base-200 p-4">

        <div v-if="cartStore.items.length === 0">
          Cart is empty
        </div>

        <div v-else v-for="(item, index) in cartStore.items" class="flex">
          <div class="flex-1">
            <img class="w-full p-4" :src="item.imageUrl" />
          </div>
          <div class="flex-1">
            <div class="flex flex-col justify-between h-full">
              <div>
                <div class="relative grid grid-cols-2">
                  <div>
                    <div>
                      <b>{{ item.name }}</b>
                    </div>
                    <div>{{ item.about }}</div>
                    <div>{{ item.price }} ฿</div>
                  </div>
                  <div>
                    <select v-model="item.quantity" @change="changQuantity($event, index)" class="select w-1/2">
                      <option v-for="quantity in [1, 2, 3, 4, 5]">
                        {{ quantity }}
                      </option>
                    </select>
                  </div>
                  <div @click="cartStore.removeItemInCart(index)" class="absolute top-0 right-0">
                    <Close />
                  </div>
                </div>
              </div>
              <div><b>In Stock</b></div>
            </div>
          </div>
        </div>

      </div>

      <div class="flex-auto w-32 bg-slate-200 p-4">
        <div class="text-xl font-bold">Summary</div>
        <div class="my-4 divide-y divide-black">
          <div class="flex justify-between py-2">
            <div>ราคาสินค้าทั้งหมด</div>
            <div>{{ cartStore.summaryPrice }} ฿</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ค่าส่ง</div>
            <div>0</div>
          </div>
          <div class="flex justify-between py-2">
            <div>ราคารวม</div>
            <div>{{ cartStore.summaryPrice }} ฿</div>
          </div>
          <RouterLink :to="{name: 'checkout'}" class="btn btn-neutral w-full my-4">ชำระเงิน</RouterLink>
        </div>
      </div>

    </div>
  </UserLayout>
</template>
