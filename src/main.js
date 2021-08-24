import { createApp } from 'vue'
import App from './App.vue'
import '@/assets/css/tailwind.css'
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from '@fortawesome/free-solid-svg-icons'
library.add(fas);
import { fab } from '@fortawesome/free-brands-svg-icons';
library.add(fab);
import { far } from '@fortawesome/free-regular-svg-icons';
library.add(far);
import { dom } from "@fortawesome/fontawesome-svg-core";
import router from './router'
dom.watch();
import store from './store/index'

const app = createApp(App).use(router).use(store);

app.component("font-awesome-icon", FontAwesomeIcon);

app.mount("#app");