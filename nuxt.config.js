export default {
  serverMiddleware: [
    { path: "/api", handler: "~/server-middleware/outgoing-api.js" },
  ],

  router: {
    extendRoutes(routes, resolve) {
      routes.push({
        name: "join",
        path: "/join/:roomName",
        component: resolve(__dirname, "pages/join.vue"),
      });
      routes.push({
        name: "setup",
        path: "/setup/:roomName",
        component: resolve(__dirname, "pages/setup.vue"),
      });
      routes.push({
        name: "lobby",
        path: "/lobby/:roomName",
        component: resolve(__dirname, "pages/lobby.vue"),
      });
    },
  },
  server: {
    port: process.env.PORT || 3000,
    host: process.env.HOST || "0.0.0.0",
  },
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: "%s - Stat Tracker",
    title: "Stat Tracker | Big Leap LLC.",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~/assets/scss/style.scss"],

  // Customize the progress-bar color
  loading: {
    color: "DodgerBlue",
    height: "5px",
    continuous: true,
    duration: 3000,
  },
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/vuetify
    "@nuxtjs/vuetify",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ["nuxt-session"],

  // "nuxt-socket-io"
  // io: {
  //   // module options
  //   server: { ioSvc: "~/server-middleware/outgoing-api.js" },
  //   sockets: [
  //     {
  //       name: "main",
  //       url: "http://localhost:3000",
  //       default: true,
  //     },
  //   ],
  // },

  // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
  vuetify: {
    customVariables: ["~/assets/scss/variables.scss"],
    optionsPath: "./vuetify.options.js",
    treeShake: true,
    options: {
      customProperties: true,
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
};
