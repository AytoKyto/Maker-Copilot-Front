<template>
    <div :class="['p-3', 'rounded-2xl', 'bg-c_smoke_white', customClass]">
        <slot></slot>
    </div>
</template>

<script>
export default {
    props: {
        customClass: {
            type: String,
            default: ''
        }
    }
}
</script>
