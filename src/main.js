import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import piniaPersist from "pinia-plugin-persist";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';

library.add(fas, faTwitter, faUserSecret);
const pinia = createPinia();
pinia.use(piniaPersist);

createApp(App)
  .component("fa", FontAwesomeIcon)
  .use(router)
  .use(pinia)
  .mount("#app");
