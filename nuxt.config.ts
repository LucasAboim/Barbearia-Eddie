import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
    compatibilityDate: '2024-11-01',
    devtools: { enabled: true },

    app: {
        head: {
            link: [
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Thicccboi:wght@400;500;600&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://fonts.googleapis.com/css2?family=Urbanist:wght@400;500;600&display=swap'
                },
                {
                    rel: 'stylesheet',
                    href: 'https://unicons.iconscout.com/release/v4.0.8/css/line.css'
                }
            ],
            script: [
                {
                    src: 'https://static.elfsight.com/platform/platform.js',
                    async: true,
                    defer: true,
                },
                {
                    src: '/assets/js/plugins.js',
                    defer: true
                },
                {
                    src: '/assets/js/theme.js',
                    defer: true
                }
            ]
        }
    },

    vite: {
        plugins: [tailwindcss()],
    },

    css: [
        '@/public/assets/css/main.css',
        '@/public/assets/css/plugins.css',
        '@/public/assets/css/fonts/dm.css',
        '@/public/assets/css/fonts/space.css',
        '@/public/assets/css/fonts/thicccboi.css',
        '@/public/assets/css/fonts/urbanist.css'
    ]
})
