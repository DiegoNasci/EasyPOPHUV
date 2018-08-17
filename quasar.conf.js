// Configuration for your app

module.exports = function (ctx) {
  return {
    // app plugins (/src/plugins)
    plugins: [
      'i18n',
      'axios',
<<<<<<< HEAD
      'vuelidate',
      'firebase'
=======
      'parse',
      'vuelidate'
>>>>>>> deploy/master
    ],
    css: [
      'app.styl'
    ],
    extras: [
      ctx.theme.mat ? 'roboto-font' : null,
      'material-icons', // optional, you are not bound to it
      'ionicons',
      'mdi',
      'fontawesome'
    ],
    supportIE: true,
    build: {
      scopeHoisting: true,
      vueRouterMode: 'history',
      // vueCompiler: true,
      // gzip: true,
      // analyze: true,
      // extractCSS: false,
      extendWebpack (cfg) {
        cfg.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules|quasar)/
        })

        cfg.module.rules.push({
          test: /\.pug$/,
          loader: 'pug-plain-loader'
        })        
      }
    },
    devServer: {
      // https: true,
      // port: 8080,
      open: true // opens browser window automatically
    },
    // framework: 'all' --- includes everything; for dev only!
    framework: {
      config:{
        brand:{
          primary: '#0DBB56'
        }
      },
      components: [
        'QLayout',
        'QLayoutHeader',
        'QLayoutDrawer',
        'QPageContainer',
        'QPage',
        'QToolbar',
        'QToolbarTitle',
        'QBtn',
        'QIcon',
        'QList',
        'QListHeader',
        'QItem',
        'QItemMain',
        'QItemSide',
        'QInput',
        'QChipsInput',
        'QField',
        'QItemSeparator',
        'QItemTile',
        'QInfiniteScroll',
        'QCollapsible',
        'QSelect',
        'QTable',
        'QTh',
        'QTr',
        'QTd',
<<<<<<< HEAD
        'QTableColumns'
=======
        'QTableColumns',
        'QCard'
>>>>>>> deploy/master
      ],
      directives: [
        'Ripple'
      ],
      // Quasar plugins
      plugins: [
        'Notify',
        'LocalStorage',
        'SessionStorage',
        'Dialog',
        'Loading'
      ]
      // iconSet: ctx.theme.mat ? 'material-icons' : 'ionicons'
      // i18n: 'de' // Quasar language
    },
    // animations: 'all' --- includes all animations
    animations: [
    ],
    pwa: {
      // workboxPluginMode: 'InjectManifest',
      // workboxOptions: {},
      manifest: {
        name: 'EASY POP HUV',
<<<<<<< HEAD
        short_name: 'Sistema de Procedimentos Operacionais Padrão (EASY POP HUV)',
=======
        short_name: 'EASY POP HUV',
>>>>>>> deploy/master
        description: 'Sistema de Procedimentos Operacionais Padrão (EASY POP HUV)',
        display: 'standalone',
        orientation: 'portrait',
        background_color: '#ffffff',
<<<<<<< HEAD
        theme_color: '#0DBB56',
=======
        theme_color: '#37cc75',
>>>>>>> deploy/master
        icons: [
          {
            'src': 'statics/icons/icon-128x128.png',
            'sizes': '128x128',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-192x192.png',
            'sizes': '192x192',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-256x256.png',
            'sizes': '256x256',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-384x384.png',
            'sizes': '384x384',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/icon-512x512.png',
            'sizes': '512x512',
            'type': 'image/png'
<<<<<<< HEAD
=======
          },
          {
            'src': 'statics/icons/apple-icon-152x152.png',
            'sizes': '152x152',
            'type': 'image/png'
          },
          {
            'src': 'statics/icons/ms-icon-144x144.png',
            'sizes': '144x144',
            'type': 'image/png'
>>>>>>> deploy/master
          }
        ]
      }
    },
    cordova: {
      // id: 'org.cordova.quasar.app'
    },
    electron: {
      // bundler: 'builder', // or 'packager'
      extendWebpack (cfg) {
        // do something with Electron process Webpack cfg
      },
      packager: {
        // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

        // OS X / Mac App Store
        // appBundleId: '',
        // appCategoryType: '',
        // osxSign: '',
        // protocol: 'myapp://path',

        // Window only
        // win32metadata: { ... }
      },
      builder: {
        // https://www.electron.build/configuration/configuration

        // appId: 'quasar-app'
      }
    }
  }
}
