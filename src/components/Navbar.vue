<template>
  <nav class="navbar navbar-expand-lg bg-white shadow-sm px-4 py-3">
    <router-link class="navbar-brand fw-bold text-dark" to="/">Atlas & Ink</router-link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item"><router-link class="nav-link fw-semibold" to="/">Home</router-link></li>
        <li class="nav-item"><router-link class="nav-link fw-semibold" to="/explore">Explore</router-link></li>
        <li class="nav-item"><router-link class="nav-link fw-semibold" to="/about">About Us</router-link></li>
      </ul>
    </div>
  </nav>
</template>

<style scoped>
.nav-link {
  color: #6b7280;
  margin-left: 20px;
  transition: 0.3s;
}
.nav-link:hover {
  color: #7e22ce;
}
</style>
