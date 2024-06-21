<template>
    <div class="flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead>
                        <tr>
                            <th scope="col"
                                class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3">Nom</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Prix</th>
                            <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900">Bénéfice
                            </th>
                            <th scope="col" class="relative py-3.5 pl-3 pr-4 sm:pr-3">
                                <span class="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white">
                        <tr v-for="person in people" :key="person.name" class="even:bg-gray-50">
                            <td class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                                <input type="text" v-model="person.name"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-14 sm:leading-6"
                                    placeholder="Enter Name" />
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <input type="number" v-model="person.price"
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-14 sm:leading-6"
                                    placeholder="Enter Price" />
                            </td>
                            <td class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
                                <input type="number" v-model="person.bene" disabled
                                    class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 text-14 sm:leading-6"
                                    placeholder="Enter Benefit" />
                            </td>
                            <td
                                class="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3">
                                <a href="#" class="text-red-600 hover:text-red-900"
                                    @click="removePerson(person.name)">Supprimer</a>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div @click="addRowTable" class="relative cursor-pointer">
                    <div class="absolute inset-0 flex items-center" aria-hidden="true">
                        <div class="w-full border-t border-gray-300"></div>
                    </div>
                    <div class="relative flex justify-center">
                        <span class="bg-white px-2 text-gray-500">
                            <PlusIcon class="h-5 w-5 text-gray-500" aria-hidden="true" />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { PlusIcon } from '@heroicons/vue/20/solid'

const people = ref([
    { name: 'Lindsay Walton', price: 200, bene: 150 },
    // More people...
])

const addRowTable = () => {
    people.value.push({
        name: 'Nom ' + Math.round(Math.random() * 100),
        price: 0,
        bene: 0,
    })
}

const removePerson = (name) => {
    people.value = people.value.filter(person => person.name !== name)
}
</script>