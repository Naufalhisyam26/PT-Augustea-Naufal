<template>
  <footer class="footer mt-auto">
    <!-- background ungu full width -->
    <div class="footer-bg py-5">
      <!-- konten tetap center -->
      <div class="container">
        <div class="row text-center text-md-start">
          <div class="col-md-4 mb-3">
            <h5 class="fw-bold">Atlas & Ink</h5>
            <p class="small text-light">Boulevard St, Los Angeles, 90001</p>
          </div>

          <div class="col-md-2 mb-3">
            <h6 class="fw-semibold">Pages</h6>
            <ul class="list-unstyled small">
              <li><router-link to="/">Home</router-link></li>
              <li><router-link to="/explore">Explore</router-link></li>
              <li><router-link to="/about">About Us</router-link></li>
            </ul>
          </div>

          <div class="col-md-3 mb-3">
            <h6 class="fw-semibold">Service & Support</h6>
            <ul class="list-unstyled small">
              <li><a href="#">Contact Us</a></li>
              <li><a href="#">Term Conditions</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          <div class="col-md-3 mb-3">
            <h6 class="fw-semibold">Our Social Media</h6>
            <div>
              <a href="#" class="me-2"><i class="bi bi-linkedin"></i></a>
              <a href="#" class="me-2"><i class="bi bi-instagram"></i></a>
              <a href="#" class="me-2"><i class="bi bi-youtube"></i></a>
              <a href="#"><i class="bi bi-envelope"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
/* wrapper khusus background */
.footer-bg {
  background: linear-gradient(135deg, #7e22ce 0%, #4c1d95 100%);
  border-top: 1px solid rgba(255, 255, 255, 0.2);
  width: 100%;
  color: #fff;
}

.footer {
  margin-top: auto;
  width: 100%;
  color: #fff;
}

/* style link & animasi tetap seperti sebelumnya */
.footer a {
  text-decoration: none;
  color: #e5e7eb;
  font-size: 1.4rem;
  transition: color 0.3s ease, transform 0.2s ease, text-shadow 0.3s ease;
}

.footer a:hover {
  transform: scale(1.2);
}

@keyframes pulse-glow {
  0% {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  }
  50% {
    text-shadow: 0 0 15px currentColor, 0 0 25px currentColor, 0 0 40px currentColor;
  }
  100% {
    text-shadow: 0 0 5px currentColor, 0 0 10px currentColor, 0 0 15px currentColor;
  }
}

.footer .bi-linkedin:hover {
  color: #0a66c2;
  animation: pulse-glow 1.5s infinite;
}
.footer .bi-instagram:hover {
  color: #e1306c;
  animation: pulse-glow 1.5s infinite;
}
.footer .bi-youtube:hover {
  color: #ff0000;
  animation: pulse-glow 1.5s infinite;
}
.footer .bi-envelope:hover {
  color: #facc15;
  animation: pulse-glow 1.5s infinite;
}
</style>
