<template>
  <div class="about min-vh-100 d-flex flex-column">
    <!-- Hero Section -->
    <section class="hero position-relative text-white py-5">
      <div class="container text-center">
        <h1 class="fw-bold display-5 mb-3">About Us ✨</h1>
        <p class="lead mb-0">Kenali lebih jauh tentang aplikasi ini dan tujuan kami dalam memberikan informasi.</p>
      </div>

      <!-- Wave Shape -->
      <div class="hero-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 250" preserveAspectRatio="none">
          <path
            fill="#fff"
            d="M0,96L60,101.3C120,107,240,117,360,138.7C480,160,600,192,720,202.7C840,213,960,203,1080,176C1200,149,1320,107,1380,85.3L1440,64L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
          ></path>
        </svg>
      </div>
    </section>

    <!-- Content Section -->
    <section class="flex-grow-1 py-5">
      <div class="container">
        <div class="row g-4 justify-content-center">
          <!-- Card 1 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow border-0 rounded-4 overflow-hidden p-3 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="mission" class="about-icon mx-auto mb-3" />
              <h5 class="fw-bold">Our Mission</h5>
              <p class="mb-0">Menyediakan informasi negara di seluruh dunia dengan cepat, akurat, dan mudah diakses.</p>
            </div>
          </div>

          <!-- Card 2 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow border-0 rounded-4 overflow-hidden p-3 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/1828/1828884.png" alt="vision" class="about-icon mx-auto mb-3" />
              <h5 class="fw-bold">Our Vision</h5>
              <p class="mb-0">Menjadi sumber utama untuk belajar tentang negara, budaya, dan keberagaman di dunia.</p>
            </div>
          </div>

          <!-- Card 3 -->
          <div class="col-12 col-md-6 col-lg-4">
            <div class="card h-100 shadow border-0 rounded-4 overflow-hidden p-3 text-center">
              <img src="https://cdn-icons-png.flaticon.com/512/3233/3233478.png" alt="team" class="about-icon mx-auto mb-3" />
              <h5 class="fw-bold">Our Team</h5>
              <p class="mb-0">Kami adalah tim yang bersemangat dalam mengembangkan teknologi untuk pendidikan dan pengetahuan global.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "About",
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #7e22ce, #9333ea);
  color: #fff;
  position: relative;
  overflow: hidden;
}

.hero-wave {
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  line-height: 0;
}

.hero-wave svg {
  display: block;
  width: 100%;
  height: 100px;
}

.about-icon {
  width: 80px;
  height: 80px;
  object-fit: contain;
}

.card {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}
.card:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
</style>
