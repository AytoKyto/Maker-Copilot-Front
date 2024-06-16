<template>
    <div
        class="flex min-w-52 min-h-screen grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6">
        <div class="flex h-16 shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                alt="Your Company" />
        </div>
        <nav class="flex flex-1 flex-col">
            <ul role="list" class="flex flex-1 flex-col gap-y-7">
                <li>
                    <ul role="list" class="-mx-2 space-y-1">
                        <li v-for="item in navigation" :key="item.name">
                            <a v-if="!item.children" :href="item.href"
                                :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'group flex items-center gap-x-3 rounded-md p-2 text-12 font-semibold leading-6 text-gray-700']">
                                <component :is="item.icon" class="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
                                {{ item.name }}
                            </a>
                            <Disclosure as="div" v-else v-slot="{ open }">
                                <DisclosureButton
                                    :class="[item.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'flex w-full items-center gap-x-3 rounded-md p-2 text-left text-12 font-semibold leading-6 text-gray-700']">
                                    <component :is="item.icon" class="h-4 w-4 shrink-0 text-gray-400"
                                        aria-hidden="true" />
                                    {{ item.name }}
                                    <ChevronRightIcon
                                        :class="[open ? 'rotate-90 text-gray-500' : 'text-gray-400', 'ml-auto h-5 w-5 shrink-0']"
                                        aria-hidden="true" />
                                </DisclosureButton>
                                <DisclosurePanel as="ul" class="mt-1 px-2">
                        <li v-for="subItem in item.children" :key="subItem.name">
                            <!-- 44px -->
                            <DisclosureButton as="a" :href="subItem.href"
                                :class="[subItem.current ? 'bg-gray-50' : 'hover:bg-gray-50', 'block rounded-md py-2 pl-2 pr-2 text-12 leading-6 text-gray-700']">
                                {{ subItem.name }}</DisclosureButton>
                        </li>
                        </DisclosurePanel>
                        </Disclosure>
                </li>
            </ul>
            </li>
            <li class="-mx-6 mt-auto">
                <a href="#"
                    class="flex items-center gap-x-4 px-6 py-3 text-12 font-semibold leading-6 text-gray-900 hover:bg-gray-50">
                    <span class="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-500">
                        <span class="text-12 font-medium leading-none text-white">TW</span>
                    </span> <span class="sr-only">Your profile</span>
                    <span aria-hidden="true">Tom Cook</span>
                </a>
            </li>
            </ul>
        </nav>
    </div>
</template>

<script setup>
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { ChevronRightIcon } from '@heroicons/vue/20/solid'
import {
    ChartPieIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
} from '@heroicons/vue/24/outline'

const navigation = [
    { name: 'Acceuil', href: '#', icon: HomeIcon, current: true },

    {
        name: 'Produits',
        icon: FolderIcon,
        current: false,
        children: [
            { name: 'Tous les produits', href: '#' },
            { name: 'Créer un produits', href: '#' },
        ],
    },
    {
        name: 'Ventes',
        icon: UsersIcon,
        current: false,
        children: [
            { name: 'Tous les ventes', href: '#' },
            { name: 'Ajouter une vente', href: '#' },
        ],
    },
    { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
    { name: 'Exporter', href: '#', icon: DocumentDuplicateIcon, current: false },
]
</script>