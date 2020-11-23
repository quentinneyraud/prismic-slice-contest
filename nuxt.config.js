import smConfig from './sm.json'

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',
  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    title: 'Prismic Tour Agency',
    meta: [{
      charset: 'utf-8'
    }, {
      name: 'viewport',
      content: 'width=device-width, initial-scale=1'
    }, {
      hid: 'description',
      name: 'description',
      content: ''
    }],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }],
    script: []
  },
  /*
  ** Global CSS
  */
  css: [
    '~assets/styles/global/index.styl'
  ],
  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [],
  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,
  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [// https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module'
  ],
  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    '@nuxtjs/style-resources',
    '@nuxtjs/prismic',
    'nuxt-sm',
    'nuxt-webfontloader'
  ],
  // Build Configuration (https://go.nuxtjs.dev/config-build)
  build: {
    transpile: ['vue-slicezone', 'nuxt-sm']
  },
  storybook: {
    stories: ['~/slices/**/*.stories.js']
  },
  ignore: ['**/*.stories.js'],
  /*
  ** Styles resources module
  */
  styleResources: {
    stylus: [
      '~assets/styles/shared/index.styl'
    ]
  },
  /*
  ** Prismic module
  */
  prismic: {
    endpoint: smConfig.apiEndpoint || '',
    apiOptions: {
      routes: [{
        type: 'page',
        path: '/:uid'
      }, {
        type: 'product_page',
        path: '/villes/:uid'
      }]
    }
  },
  /*
  ** Google fonts module
  */
  webfontloader: {
    google: {
      families: ['Roboto:100,200,300,400,500,600,700,800,900', 'Castoro']
    }
  }
}
