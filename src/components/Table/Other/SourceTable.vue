<template>
    <ul role="list" class="divide-y divide-white/5">
        <li v-for="deployment in deployments" :key="deployment.id" class="relative flex items-center space-x-4 py-4">
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
            <div
                :class="[environments[deployment.environment], 'flex-none rounded-full px-4 py-2 text-10 font-medium ring-1 ring-inset']">
                {{ deployment.environment }}</div>
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
        projectName: 'ios-app',
        teamName: 'Planetaria',
        status: 'offline',
        statusText: '200 €',
        description: 'Deploys from GitHub',
        environment: '1',
    },
    {
        id: 2,
        href: '#',
        projectName: 'mobile-api',
        teamName: 'Planetaria',
        status: 'online',
        statusText: 'Deployed 3m ago',
        description: 'Deploys from GitHub',
        environment: '2',
    },
    {
        id: 3,
        href: '#',
        projectName: 'tailwindcss.com',
        teamName: 'Tailwind Labs',
        status: 'offline',
        statusText: 'Deployed 3h ago',
        description: 'Deploys from GitHub',
        environment: '3',
    },
    {
        id: 4,
        href: '#',
        projectName: 'api.protocol.chat',
        teamName: 'Protocol',
        status: 'error',
        statusText: 'Failed to deploy 6d ago',
        description: 'Deploys from GitHub',
        environment: '4',
    },
    {
        id: 4,
        href: '#',
        projectName: 'api.protocol.chat',
        teamName: 'Protocol',
        status: 'error',
        statusText: 'Failed to deploy 6d ago',
        description: 'Deploys from GitHub',
        environment: '5',
    },
]
</script>