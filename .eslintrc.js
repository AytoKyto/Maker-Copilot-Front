module.exports = {
  env: {
    node: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-essential', // Pour les règles recommandées de Vue 3
  ],
  parserOptions: {
    ecmaVersion: 2020, // Permet l'analyse des fonctionnalités modernes de JavaScript
  },
  rules: {
    // Personnalise tes règles ESLint ici, par exemple :
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
  }
};
