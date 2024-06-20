<template>
    <ul role="list" class="divide-y divide-white/5">
        <li v-for="deployment in deployments" :key="deployment.id" class="relative flex items-center space-x-4 py-2">
            <div
                :class="[environments[deployment.environment], 'flex-none rounded-full h-7 w-7 flex justify-center items-center text-10 font-medium ring-1 ring-inset']">
                {{ deployment.environment }}</div>
            <div class="min-w-0 flex-auto">
                <div class="flex items-center gap-x-3">
                    <h2 class="min-w-0 text-13 font-semibold leading-6 text-slate-800">
                        <a :href="deployment.href" class="flex gap-x-2">
                            <span class="truncate">{{ deployment.teamName }}</span>
                        </a>
                    </h2>
                </div>
                <div class="flex items-center gap-x-2.5 text-10 leading-5 text-slate-600">
                    <p class="truncate">{{ deployment.description }}</p>
                    <svg viewBox="0 0 2 2" class="h-0.5 w-0.5 flex-none fill-gray-300">
                        <circle cx="1" cy="1" r="1" />
                    </svg>
                    <p class="whitespace-nowrap">{{ deployment.statusText }}</p>
                </div>
            </div>

            <ChevronRightIcon class="h-5 w-5 flex-none text-slate-600" aria-hidden="true" />
        </li>
    </ul>
</template>

<script setup>
import { ChevronRightIcon } from '@heroicons/vue/20/solid'

const environments = {
    1: 'text-yellow-600 bg-yellow-400/10 ring-yellow-400/20',
    2: 'text-slate-400 bg-slate-400/10 ring-slate-400/30',
    3: 'text-amber-400 bg-amber-400/10 ring-amber-400/30',
    4: 'text-orange-400 bg-orange-400/10 ring-orange-400/30',
    5: 'text-zinc-400 bg-zinc-400/10 ring-zinc-400/30',
}
const deployments = [
    {
        id: 1,
        href: '#',
        teamName: 'Slow Supermacher',
        statusText: '200 €',
        description: '13 articles vendue',
        environment: '1',
    },
    {
        id: 2,
        href: '#',
        teamName: 'La mouette',
        statusText: '100 €',
        description: '6 articles vendue',
        environment: '2',
    },
    {
        id: 3,
        href: '#',
        teamName: 'Site web',
        statusText: '95 €',
        description: '3 articles vendue',
        environment: '3',
    },
    {
        id: 4,
        href: '#',
        teamName: 'Boutique 2',
        statusText: '20 €',
        description: '1 articles vendue',
        environment: '4',
    },
    {
        id: 4,
        href: '#',
        teamName: 'Boutique 3',
        statusText: '10 €',
        description: '1 articles vendue',
        environment: '5',
    },
]
</script>