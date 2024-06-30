<template>
    <nav class="flex flex-1 flex-col space-y-3 fixed left-5 top-[32%] bg-c_gray rounded-full z-50 p-2">
        <div v-for="(item, index) in navigation" :key="item.name" @mouseover="upHere[index] = true"
            @mouseleave="upHere[index] = false">
            <RouterLink :to="item.href"
                :class="[item.current ? 'bg-c_smoke_white' : 'hover:bg-c_smoke_white', 'group flex items-center gap-x-3 rounded-full p-3 text-12 font-semibold leading-6 text-gray-700']">
                <component :is="item.icon" class="h-5 w-5 shrink-0 text-slate-800" aria-hidden="true" />
            </RouterLink>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

import {
    ChartPieIcon,
    FolderIcon,
    HomeIcon,
    UsersIcon,
    CurrencyEuroIcon,
    MinusCircleIcon,
    Cog8ToothIcon
} from '@heroicons/vue/24/outline';

const navigation = [
    { name: 'Accueil', href: '/dashboard', icon: HomeIcon, current: window.location.pathname === '/dashboard' ? true : false },
    { name: 'Produits', href: '/products', icon: FolderIcon, current: window.location.pathname === '/products' ? true : false },
    { name: 'Ventes', href: '/sales', icon: CurrencyEuroIcon, current: window.location.pathname === '/sales' ? true : false },
    { name: 'Dépenses', href: '/depense', icon: MinusCircleIcon, current: window.location.pathname === '/depense' ? true : false },
    { name: 'Clients', href: '/clients', icon: UsersIcon, current: window.location.pathname === '/clients' ? true : false },
    { name: 'Rapports', href: '/#', icon: ChartPieIcon, current: window.location.pathname === '/#' ? true : false },
    { name: 'Paramètre', href: '/#', icon: Cog8ToothIcon, current: window.location.pathname === '/#' ? true : false },
];

const upHere = ref(navigation.map(() => false));
</script>
