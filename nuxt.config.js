import colors from 'vuetify/es5/util/colors'

export default {
    mode: 'spa',
    /*
     ** Nuxt target
     ** See https://nuxtjs.org/api/configuration-target
     */
    target: 'server',
    // Global page headers: https://go.nuxtjs.dev/config-head
    head: {
        titleTemplate: '%s - child_app',
        title: 'child_app',
        meta: [
            { charset: 'utf-8' },
            {
                name: 'viewport',
                content: 'width=device-width, initial-scale=1',
            },
            { hid: 'description', name: 'description', content: '' },
            { name: 'format-detection', content: 'telephone=no' },
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                type: 'text/css',
                href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
            },
        ],
    },

    // Global CSS: https://go.nuxtjs.dev/config-css
    css: ['@/assets/index.scss'],

    // js: ['https://cdnjs.cloudflare.com/ajax/libs/wow/1.1.2/wow.min.js'],

    // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
    plugins: [
        { src: '@/plugins/vuetify.js', mode: 'server' },
        { src: '@/plugins/suneditor.js', mode: 'client' },
    ],

    // Auto import components: https://go.nuxtjs.dev/config-components
    components: true,

    // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
    buildModules: [
        // https://go.nuxtjs.dev/vuetify
        '@nuxtjs/vuetify',
    ],

    // Modules: https://go.nuxtjs.dev/config-modules
    modules: [
        'bootstrap-vue/nuxt',
        // https://go.nuxtjs.dev/axios
        '@nuxtjs/axios',
        // https://go.nuxtjs.dev/pwa
        '@nuxtjs/pwa',
        // https://go.nuxtjs.dev/content
        '@nuxt/content',

        'vue2-editor/nuxt',
    ],

    // Axios module configuration: https://go.nuxtjs.dev/config-axios
    axios: {
        // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
        baseURL: '/',
    },

    // PWA module configuration: https://go.nuxtjs.dev/pwa
    pwa: {
        manifest: {
            lang: 'en',
        },
    },

    // Content module configuration: https://go.nuxtjs.dev/config-content
    content: {},

    // Vuetify module configuration: https://go.nuxtjs.dev/config-vuetify
    vuetify: {
        customVariables: ['~/assets/variables.scss'],
        theme: {
            dark: false,
            light: false,
            themes: {
                dark: {
                    primary: colors.blue.darken2,
                    accent: colors.grey.darken3,
                    secondary: colors.amber.darken3,
                    info: colors.teal.lighten1,
                    warning: colors.amber.base,
                    error: colors.deepOrange.accent4,
                    success: colors.green.accent3,
                },
                light: {
                    background: '#ffffff',
                    // primary: colors.blue.darken2,
                    // accent: colors.grey.darken3,
                    // secondary: colors.amber.darken3,
                    // info: colors.teal.lighten1,
                    // warning: colors.amber.base,
                    // error: colors.deepOrange.accent4,
                    // success: colors.green.accent3,
                },
            },
        },
    },

    // Build Configuration: https://go.nuxtjs.dev/config-build
    build: {
        extend(config, { isClient, isServer }) {
            if (isServer) {
                config.performance = config.performance || {}
                config.performance.hints = false
            }
        },
    },
}
