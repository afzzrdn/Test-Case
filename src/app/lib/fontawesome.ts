// lib/fontawesome.js
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';

// Menonaktifkan auto-adding CSS oleh FontAwesome
config.autoAddCss = false;

library.add(fas);
