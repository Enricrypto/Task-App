import { createApp } from "vue";
import { createPinia } from "pinia";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import piniaPersist from "pinia-plugin-persist";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

library.add(fas, faFacebook, faInstagram, faTwitter);
const pinia = createPinia();
pinia.use(piniaPersist);

createApp(App)
  .component("fa", FontAwesomeIcon) 
  .use(router)
  .use(pinia)
  .mount("#app");
