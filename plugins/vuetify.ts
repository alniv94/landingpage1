import {createVuetify} from 'vuetify';
import 'vuetify/styles'
import * as components from 'vuetify/components'
import * as directives from 'vuetify/directives'

export default defineNuxtPlugin((nuxt) =>{
    const vuetify = createVuetify({
        ssr: true,
        components,
        directives,
    });
    nuxt.vueApp.use(vuetify);
})