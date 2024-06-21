<template>
    <DefaultAppLayout>
        <div class="p-5">
            <div class="flex justify-between items-center mb-3">
                <h1 class="text-24 text-slate-800 font-semibold">Créer un produit</h1>
                <div class="flex space-x-3 items-center">
                    <DefaultLinkBtn title="Annuler" to="/products" />
                    <DefaultActionBtn title="Sauvgarder" :onClick="handleClick" />
                </div>
            </div>
            <div class="flex flex-col space-y-3">
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
                        <DefaultSelect />

                    </div>

                    <div class="w-1/3">
                        <label for="photo" class="block text-sm font-medium leading-6 text-gray-900">Image</label>
                        <div class="mt-2 flex items-center gap-x-3">
                            <button type="button"
                                class="rounded-md bg-white px-2.5 py-2 text-13 font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">Ajouter
                                une image</button>
                        </div>
                    </div>
                </DefaultBox>

                <DefaultBox customClass="w-full">
                    <h2 class="text-lg font-medium text-gray-900">Gestion de vos bénéfices</h2>
                    <ProductTable />
                </DefaultBox>
            </div>
        </div>
    </DefaultAppLayout>
</template>

<script setup>
import DefaultAppLayout from '../../../components/Layout/DefaultAppLayout.vue'
import DefaultLinkBtn from '../../../components/Button/DefaultLinkBtn.vue'
import DefaultActionBtn from '../../../components/Button/DefaultActionBtn.vue'
import DefaultBox from '../../../components/Layout/DefaultBox.vue'
import DefaultSelect from '../../../components/Select/DefaultSelect.vue'
import ProductTable from '../../../components/Table/Other/ProductTable.vue'
</script>