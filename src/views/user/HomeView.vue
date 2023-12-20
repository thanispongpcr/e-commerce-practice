<script setup>
import { useRouter } from "vue-router";

import UserLayout from "@/layouts/UserLayout.vue";
import Product from '@/components/Product.vue';

import { useProductStore } from "@/stores/user/product";
import { useCartStore } from "@/stores/user/cart";

const router = useRouter()
const productStore = useProductStore()
const cartStore = useCartStore()

const addToCart = (product) => {
  cartStore.addToCart(product);
  router.push({name:'cart'})
}
</script>
<template>
  <UserLayout>
    <!-- Hero -->
    <section class="hero h-96 bg-base-200">
      <div class="hero-content text-center">
        <div class="max-w-md">
          <h1 class="text-5xl font-bold">Hello to Thanis shop</h1>
          <p class="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
          </p>
        </div>
      </div>
    </section>
    <!-- product -->
    <Product :products="productStore.list" :addToCart="addToCart" />
  </UserLayout>
</template>
