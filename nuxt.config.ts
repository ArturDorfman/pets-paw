export default defineNuxtConfig({
  app: {
    head: {
      link: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Jost&display=swap'
        }
      ]
    }
  },

  css: [
    '@/assets/styles/main.scss'
  ],

  modules: [
    ['@nuxtjs/tailwindcss', { viewer: false }],
    '@vueuse/nuxt',
    './modules/router',
    './modules/imports',
    './modules/unplugin',
    './modules/portal'
  ]
})
