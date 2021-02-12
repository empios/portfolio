import Vue from 'vue'
import App from './App.vue'
import Buefy from 'buefy'
import 'buefy/dist/buefy.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faCode,
    faCircle,
    faCodeBranch,
    faArrowUp,
    faDownload

} from "@fortawesome/free-solid-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import VueTyperPlugin from 'vue-typer'
import vuetimeline from "@growthbunker/vuetimeline"

library.add(
    faCode,
    faCircle,
    faCodeBranch,
    faArrowUp,
    faInstagram,
    faDownload
);
Vue.component("vue-fontawesome", FontAwesomeIcon);

Vue.use(Buefy, {
      defaultIconComponent: "vue-fontawesome",
      defaultIconPack: "fas"
})
Vue.use(VueTyperPlugin)
Vue.use(vuetimeline)
Vue.config.productionTip = false


new Vue({
  render: h => h(App),
}).$mount('#app')
