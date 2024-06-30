<template>
    <DefaultAppLayout>
        <div class="p-5">
            <div class="flex justify-between items-center">
                <h2 class="text-22 font-bold tracking-tight text-gray-900">Toutes vos ventes</h2>
                <DefaultLinkBtn to="/create-sale" title="Créer une ventes" />
            </div>
            <DefaultBox customClass="mt-6 overflow-hidden border-t border-gray-100">
                <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                        <table class="min-w-full divide-y divide-gray-300">
                            <thead>
                                <tr>
                                    <th scope="col"
                                        class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-12 font-semibold text-gray-900 sm:pl-0">
                                        ID Ventes</th>
                                    <th scope="col"
                                        class="whitespace-nowrap py-3.5 pl-4 pr-3 text-left text-12 font-semibold text-gray-900 sm:pl-0">
                                        Date</th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-12 font-semibold text-gray-900">
                                        Canal de vente</th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-12 font-semibold text-gray-900">
                                        Clients</th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-12 font-semibold text-gray-900">
                                        Prix</th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-12 font-semibold text-gray-900">
                                        Bénéfice</th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-12 font-semibold text-gray-900">
                                        Pourcentage bénéfice</th>
                                    <th scope="col"
                                        class="whitespace-nowrap px-2 py-3.5 text-left text-12 font-semibold text-gray-900">
                                        Quantité</th>
                                    <th scope="col" class="relative whitespace-nowrap py-3.5 pl-3 pr-4 sm:pr-0">
                                        <span class="sr-only">Edit</span>
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="divide-y divide-gray-200 bg-white">
                                <tr v-for="transaction in transactions" :key="transaction.id">
                                    <td class="whitespace-nowrap py-2 pl-4 pr-3 text-12 text-gray-500 sm:pl-0">
                                        {{ transaction.id }}</td>
                                    <td class="whitespace-nowrap py-2 pl-4 pr-3 text-12 text-gray-500 sm:pl-0">
                                        {{ transaction.date }}</td>
                                    <td class="whitespace-nowrap px-2 py-2 text-12 font-medium text-gray-900">{{
                                        transaction.company }}</td>
                                    <td class="whitespace-nowrap px-2 py-2 text-12 text-gray-900">{{
                                        transaction.share }}</td>
                                    <td class="whitespace-nowrap px-2 py-2 text-12 text-gray-500">{{
                                        transaction.commission }}</td>
                                    <td class="whitespace-nowrap px-2 py-2 text-12 text-gray-500">{{
                                        transaction.price }}</td>
                                    <td class="whitespace-nowrap px-2 py-2 text-12 text-gray-500">{{
                                        transaction.netAmount }}</td>
                                    <td class="whitespace-nowrap px-2 py-2 text-12 text-gray-500">{{
                                        transaction.quantity }}</td>
                                    <td
                                        class="relative whitespace-nowrap py-2 pl-3 pr-4 text-right text-12 font-medium sm:pr-0">
                                        <a href="#" class="text-indigo-600 hover:text-indigo-900">Edit<span
                                                class="sr-only">, {{ transaction.id }}</span></a>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </DefaultBox>
        </div>
    </DefaultAppLayout>
</template>

<script setup>
import DefaultAppLayout from '../../../components/Layout/DefaultAppLayout.vue'
import DefaultBox from '../../../components/Layout/DefaultBox.vue'
import DefaultLinkBtn from '../../../components/Button/DefaultLinkBtn.vue'

const transactions = [
    {
        id: 'AAPS0L',
        date: '00/00/0000',
        company: 'Slow Super Marcher',
        share: '10 Clients',
        commission: '453.45 €',
        price: '233.45 €',
        quantity: '7',
        netAmount: '58%',
    },
    {
        id: 'AAPS0L',
        date: '00/00/0000',
        company: 'Slow Super Marcher',
        share: '10 Clients',
        commission: '453.45 €',
        price: '233.45 €',
        quantity: '7',
        netAmount: '58%',
    },
    {
        id: 'AAPS0L',
        date: '00/00/0000',
        company: 'Slow Super Marcher',
        share: '10 Clients',
        commission: '453.45 €',
        price: '233.45 €',
        quantity: '7',
        netAmount: '58%',
    },
    {
        id: 'AAPS0L',
        date: '00/00/0000',
        company: 'Slow Super Marcher',
        share: '10 Clients',
        commission: '453.45 €',
        price: '233.45 €',
        quantity: '7',
        netAmount: '58%',
    },]
</script>