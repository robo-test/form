// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    devtools: {enabled: true},
    css: ['~/assets/css/main.css'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: ['@vee-validate/nuxt',
        ['@nuxtjs/google-fonts', {
            families: {
                'DM Sans': [400, 700]
            }
        }]],
    app: {
        pageTransition: {
            name: 'page',
            mode: 'out-in',
        }
    }
})
