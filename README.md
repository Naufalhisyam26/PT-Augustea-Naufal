# Vue 3 + Vite 
# Pastikan sudah menginstall: 
- Node.js (versi 16 atau lebih baru)
- npm atau yarn (biasanya sudah termasuk dengan Node.js)

# Langkah-langkah selanjutnya, yaitu:
# 1. Install Dependencies
   bashnpm install

# 2. Buat File yang Diperlukan (jika belum ada)
package.json:
json{
  "name": "vue-vite-project",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "vue": "^3.3.0"
  },
  "devDependencies": {
    "@vitejs/plugin-vue": "^4.0.0",
    "vite": "^4.0.0"
  }
}

# src/main.js:
javascriptimport { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')

# src/App.vue:
vue<template>
  <h1>Hello Vue!</h1>
</template>


# 3. Jalankan Project
    bashnpm run dev
Buka browser di http://localhost:5173


# Perintah pentingnya, sebagai berikut:
- npm run dev : Jalankan development server
- npm run build : Build untuk production
- Ctrl + C : Stop server
