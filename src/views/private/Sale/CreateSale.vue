<template>
  <DefaultAppLayout>
    <main class="mr-3">
      <div class="mx-auto max-w-2xl lg:max-w-none">
        <form class="lg:grid lg:grid-cols-2 lg:gap-x-12 xl:gap-x-16">
          <div>
            <div>
              <h2 class="text-lg font-medium text-gray-900">Nom de la ventes</h2>

              <div class="mt-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Nom</label>
                <div class="mt-1">
                  <input type="text" name="nom" autocomplete="text"
                    class="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm" />
                </div>
              </div>
            </div>

            <div class="mt-10 border-t border-gray-200 pt-10">
              <h2 class="text-lg font-medium text-gray-900">Information de la ventes</h2>
              <div class="flex space-x-3">
                <DefaultSelect label="Catégorie" :data="category" />
                <DefaultSelect label="Canal de vente" :data="sources" />
                <DefaultSelect label="Clients" :data="clients" />
              </div>
            </div>
          </div>

          <div class="mt-10 lg:mt-0">
            <h2 class="text-lg font-medium text-gray-900">Votre vente</h2>

            <div class="mt-4 rounded-lg border border-gray-200 bg-white shadow-sm">
              <h3 class="sr-only">Items in your cart</h3>
              <ul role="list" class="divide-y divide-gray-200">
                <li v-for="product in products" :key="product.id" class="flex px-4 py-6 sm:px-6">
                  <div class="flex-shrink-0">
                    <img :src="product.imageSrc" :alt="product.imageAlt" class="w-20 rounded-md" />
                  </div>

                  <div class="ml-6 flex flex-1 flex-col">
                    <div class="flex">
                      <div class="min-w-0 flex-1">
                        <h4 class="text-sm">
                          <a :href="product.href" class="font-medium text-gray-700 hover:text-gray-800">{{ product.title
                            }}</a>
                        </h4>
                        <p class="mt-1 text-sm text-gray-500">{{ product.color }}</p>
                        <p class="mt-1 text-sm text-gray-500">{{ product.size }}</p>
                      </div>

                      <div class="ml-4 flow-root flex-shrink-0">
                        <button type="button"
                          class="-m-2.5 flex items-center justify-center bg-white p-2.5 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Remove</span>
                          <TrashIcon class="h-5 w-5" aria-hidden="true" />
                        </button>
                      </div>
                    </div>

                    <div class="flex flex-1 items-end justify-between pt-2">
                      <p class="mt-1 text-sm font-medium text-gray-900">{{ product.price }}</p>

                      <div class="ml-4">
                        <label for="quantity" class="sr-only">Quantity</label>
                        <select id="quantity" name="quantity"
                          class="rounded-md border border-gray-300 text-left text-base font-medium text-gray-700 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 sm:text-sm">
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="7">7</option>
                          <option value="8">8</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
              <dl class="space-y-6 border-t border-gray-200 px-4 py-6 sm:px-6">
                <div class="flex items-center justify-between">
                  <dt class="text-sm">Subtotal</dt>
                  <dd class="text-sm font-medium text-gray-900">$64.00</dd>
                </div>
                <div class="flex items-center justify-between">
                  <dt class="text-sm">Shipping</dt>
                  <dd class="text-sm font-medium text-gray-900">$5.00</dd>
                </div>
                <div class="flex items-center justify-between">
                  <dt class="text-sm">Taxes</dt>
                  <dd class="text-sm font-medium text-gray-900">$5.52</dd>
                </div>
                <div class="flex items-center justify-between border-t border-gray-200 pt-6">
                  <dt class="text-base font-medium">Total</dt>
                  <dd class="text-base font-medium text-gray-900">$75.52</dd>
                </div>
              </dl>

              <div class="border-t border-gray-200 px-4 py-6 sm:px-6">
                <button type="submit"
                  class="w-full rounded-md border border-transparent bg-indigo-600 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50">Confirm
                  order</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </main>
  </DefaultAppLayout>
</template>

<script setup>
import DefaultAppLayout from '@/components/Layout/DefaultAppLayout.vue'
import DefaultSelect from '@/components/Select/DefaultSelect.vue';

import { TrashIcon } from '@heroicons/vue/20/solid'

const category = [
    { id: 1, name: 'Tissus' },
    { id: 2, name: 'Autre' },
    // More users...
]

const sources = [
    { id: 1, name: 'Tissus' },
    { id: 2, name: 'Autre' },
    // More users...
]

const clients = [
    { id: 1, name: 'Tissus' },
    { id: 2, name: 'Autre' },
    // More users...
]

const products = [
  {
    id: 1,
    title: 'Basic Tee',
    href: '#',
    price: '$32.00',
    color: 'Black',
    size: 'Large',
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/checkout-page-02-product-01.jpg',
    imageAlt: "Front of men's Basic Tee in black.",
  },
  // More products...
]

</script>