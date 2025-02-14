import { createApp } from 'vue'
import './style.css'  // Mantiene tus estilos
import App from './App.vue'

// Importa Font Awesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

// Importa los íconos que vas a usar
import { faClock, faMapMarkedAlt, faMobileAlt, faLocationDot, faPhone } from '@fortawesome/free-solid-svg-icons'

// Añade los íconos a la biblioteca
library.add(faClock, faMapMarkedAlt, faMobileAlt,faLocationDot, faPhone)

// Crea la app y usa el componente globalmente
createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .mount('#app')

