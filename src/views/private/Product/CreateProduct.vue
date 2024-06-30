<template>
    <DefaultAppLayout>
        <div class="p-5">
            <div class="flex justify-between items-center mb-3">
                <h1 class="text-24 text-slate-800 font-semibold">Créer un produit</h1>
                <div class="flex space-x-3 items-center">
                    <DefaultLinkBtn title="Annuler" to="/products" />
                    <DefaultActionBtn title="Sauvgarder" :onClick="handlePost" />
                </div>
            </div>
            <div class="flex space-x-3">
                <div class="w-2/3 flex flex-col space-y-3">
                    <DefaultBox customClass="w-full flex space-x-3">
                        <div class="w-1/3">
                            <label for="username" class="block text-sm font-medium leading-6 text-gray-900">Nom du
                                produit</label>
                            <div class="mt-2">
                                <div
                                    class="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
                                    <input type="text" name="username" id="username" autocomplete="username"
                                        class="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                        placeholder="Lorem ipsum" />
                                </div>
                            </div>
                        </div>

                        <div class="w-1/3">
                            <DefaultSelect label="Catégories" :data="category" />

                        </div>

                        <div class="w-1/3">
                            <label for="photo" class="block text-sm font-medium leading-6 text-slate-900">Image</label>
                            <div class="font-[sans-serif] max-w-md mx-auto">
                                <input type="file"
                                    class="w-full text-slate-400 font-semibold text-sm bg-white border file:cursor-pointer cursor-pointer file:border-0 file:py-3 file:px-4 file:mr-4 file:bg-gray-100 file:hover:bg-gray-200 file:text-gray-500 rounded" />
                                <p class="text-10 text-slate-400 mt-2">PNG, JPG.</p>
                            </div>
                        </div>
                    </DefaultBox>

                    <DefaultBox customClass="w-full">
                        <h2 class="text-lg font-medium text-gray-900">Gestion de vos bénéfices</h2>
                        <ProductTable />
                    </DefaultBox>
                </div>
                <div class="w-1/3 flex flex-col space-y-3">
                    <NumberCard title="Votre bénéfice moyen" subtitle="depuis Janvier 2024" value=68.4 unity="%"
                        subvalue="650 €" subtitlevalue="en juin" changeType="increase" change="20" />
                    <DefaultBox>
                        <h2 class="text-24 font-bold tracking-tight text-gray-900">Support
                            center</h2>
                        <p class="mt-3 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non
                            deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                            veniam occaecat fugiat aliqua.</p>
                    </DefaultBox>
                    <DefaultBox>
                        <h2 class="text-24 font-bold tracking-tight text-gray-900">Support
                            center</h2>
                        <p class="mt-3 text-lg leading-8 text-gray-600">Anim aute id magna aliqua ad ad non
                            deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat
                            veniam occaecat fugiat aliqua. deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                            sunt amet fugiat
                            veniam occaecat fugiat aliqua. deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit
                            sunt amet fugiat
                            veniam occaecat fugiat aliqua.</p>
                    </DefaultBox>
                </div>
            </div>

        </div>
    </DefaultAppLayout>
</template>

<script setup>
// import { ref } from 'vue';

import DefaultAppLayout from '@/components/Layout/DefaultAppLayout.vue'
import DefaultLinkBtn from '@/components/Button/DefaultLinkBtn.vue'
import DefaultActionBtn from '@/components/Button/DefaultActionBtn.vue'
import DefaultBox from '@/components/Layout/DefaultBox.vue'
import DefaultSelect from '@/components/Select/DefaultSelect.vue'
import ProductTable from '@/components/Table/Other/ProductTable.vue'
import NumberCard from '@/components/Ui/NumberCard.vue'

// const data = ref({
//     name: null,
//     category_id: null,
// });


const category = [
    { id: 1, name: 'Tissus' },
    { id: 2, name: 'Autre' },
    // More users...
]

const handlePost = () => {
    alert('Hello')
}
</script>