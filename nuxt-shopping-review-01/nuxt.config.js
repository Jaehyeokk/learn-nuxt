export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Nuxt-shopping',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'NuxtJS를 사용하여 만든 쇼핑 포트폴리오 웹 사이트 입니다.' },
      { name: 'format-detection', content: 'telephone=no' },
      {
        hid: "og:type",
        property: "og:type",
        content: "website",
      },
      {
        hid: "og:site_name",
        property: "og:site_name",
        content: "Nuxt-shopping",
      },
      {
        hid: "og:title",
        property: "og:title",
        content: "Nuxt-shopping",
      },
      {
        hid: "og:description",
        property: "og:description",
        content: "NuxtJS를 사용하여 만든 쇼핑 포트폴리오 웹 사이트 입니다.",
      },
      {
        hid: "og:image",
        property: "og:image",
        content: "/sample.jpeg",
      },
      {
        hid: "og:url",
        property: "og:url",
        content: "http://localhost:8000",
      },
      {
        hid: "twitter:card",
        name: "twitter:card",
        content: "summary",
      },
      {
        hid: "twitter:title",
        name: "twitter:title",
        content: "Nuxt-shopping",
      },
      {
        hid: "twitter:description",
        name: "twitter:description",
        content: "NuxtJS를 사용하여 만든 쇼핑 포트폴리오 웹 사이트 입니다.",
      },
      {
        hid: "twitter:image",
        name: "twitter:image",
        content: "/sample.jpeg",
      },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  // server
  server: {
    port: 8000
  },
}
