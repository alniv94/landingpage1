import {createVuetify} from 'vuetify';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'
import { aliases, mdi } from 'vuetify/iconsets/mdi'

export default defineNuxtPlugin((nuxt) =>{
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
        icons: {
            defaultSet: 'mdi',
            aliases,
            sets: {
              mdi,
            }
          },
          theme: {
            themes: {
              light: {
                colors: {
                  primary: '#025777',
                  secondary: '#8ED1FC',
                  accent: '#F2C60F',
                  error: '#FF5252',
                  warning: '#FFC107',
                  info: '#2196F3',
                  success: '#4CAF50'
                  
                }
              },
            },
          },
    });
    nuxt.vueApp.use(vuetify);
})