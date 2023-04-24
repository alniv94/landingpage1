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
                  secondary: '#2C7DA0',
                  accent: '#012A4A',
                  info: '#61A5C2',
                  success: '#4CAF50'
                  
                }
              },
            },
          },
    });
    nuxt.vueApp.use(vuetify);
})