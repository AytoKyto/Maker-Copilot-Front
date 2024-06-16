<template>
    <button :class="buttonClass" @click="onClick">
        <slot></slot> <!-- Permet d'insérer du contenu personnalisé -->
    </button>
</template>

<script>
export default {
    name: 'DefaultButton',
    props: {
        color: {
            type: String,
            default: 'blue'
        }
    },
    computed: {
        buttonClass() {
            return `bg-${this.color}-500 hover:bg-${this.color}-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`;
        }
    },
    methods: {
        onClick(event) {
            this.$emit('click', event);
        }
    }
}
</script>