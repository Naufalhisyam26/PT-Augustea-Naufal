<template>
  <div>
    <Navbar />
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

export default {
  components: { Navbar, Footer },
};
</script>

<style>
/* Tidak perlu lagi @import di sini */
/* Hanya aturan global App kalau ada */

body {
  margin: 0;
  padding: 0;
  background-color: #f9fafb;
}
</style>
