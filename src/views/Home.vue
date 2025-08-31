<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero d-flex align-items-center">
      <div class="container">
        <div class="row align-items-center">
          <!-- Left Content -->
          <div class="col-lg-6 text-center text-lg-start mb-4">
            <h1 class="fw-bold display-5 text-white">
              Documenting the <span class="highlight">world</span><br />
              one country at a time.
            </h1>
            <p class="lead mt-3 text-light opacity-75">Your first stop before the journey begins</p>
            <router-link to="/explore" class="btn btn-yellow fw-semibold mt-3 shadow-sm"> Explore Now </router-link>
          </div>

          <!-- Right Icon Suitcase -->
          <div class="col-lg-6 text-center">
            <i class="bi bi-suitcase2-fill suitcase-icon"></i>
          </div>
        </div>
      </div>
    </section>

    <!-- What We Offer -->
    <section class="py-5 bg-light">
      <div class="container text-center">
        <h2 class="fw-bold mb-5">What We Offer</h2>
        <div class="row g-4">
          <div class="col-md-4 col-12">
            <div class="card-offer h-100">
              <i class="bi bi-image fs-2 text-purple"></i>
              <h5 class="fw-semibold mt-3">Global Snapshots</h5>
              <p class="text-muted small">Key details about every recognized country, always updated</p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="card-offer h-100">
              <i class="bi bi-airplane fs-2 text-purple"></i>
              <h5 class="fw-semibold mt-3">Plan Your Adventure</h5>
              <p class="text-muted small">Insights that help you prepare or inspire your next trip.</p>
            </div>
          </div>
          <div class="col-md-4 col-12">
            <div class="card-offer h-100">
              <i class="bi bi-search fs-2 text-purple"></i>
              <h5 class="fw-semibold mt-3">Discover Cultures</h5>
              <p class="text-muted small">From languages to local currencies, learn what makes each place unique</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission py-5 text-center">
      <div class="container">
        <h3 class="fw-bold mb-3">Our Mission</h3>
        <p class="text-muted mx-auto" style="max-width: 700px">
          At <span class="text-purple fw-semibold">Atlas & Ink</span>, we believe the world is best understood one country at a time. Our mission is to bring you reliable information, stunning visuals, and fascinating cultural facts whether
          you’re a traveler, student, or just curious about the world.
        </p>
      </div>
    </section>

    <!-- Testimonials Section -->
    <section class="py-5 bg-light">
      <div class="container text-center">
        <h3 class="fw-bold mb-4">Our Testimonials</h3>
        <div class="testimonial-box mx-auto d-flex align-items-center justify-content-center">
          <p class="text-muted">Coming soon...</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>
/* Hero Section */
.hero {
  background: linear-gradient(135deg, #9333ea 0%, #6366f1 40%, #ec4899 100%);
  color: #fff;
  min-height: 90vh;
  border-bottom-left-radius: 80px;
  padding: 60px 0;
}
.hero h1 {
  color: #fff !important;
}
.hero .highlight {
  color: #facc15;
}

/* Suitcase Icon - diperbesar */
.suitcase-icon {
  font-size: 14rem; /* lebih besar */
  color: #facc15;
  filter: drop-shadow(0 0 20px rgba(250, 204, 21, 0.5));
  transition: transform 0.3s ease;
}
.suitcase-icon:hover {
  transform: scale(1.05) rotate(-2deg);
}

/* Responsive ukuran koper */
@media (max-width: 992px) {
  .suitcase-icon {
    font-size: 10rem;
  }
}
@media (max-width: 768px) {
  .suitcase-icon {
    font-size: 7rem;
    margin-top: 20px;
  }
}
@media (max-width: 576px) {
  .suitcase-icon {
    font-size: 5rem;
  }
}

.text-purple {
  color: #9333ea;
}
.btn-yellow {
  background: #facc15;
  border-radius: 8px;
  padding: 10px 24px;
  color: #000;
  transition: 0.3s;
}
.btn-yellow:hover {
  background: #eab308;
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.2);
}

/* What We Offer */
.card-offer {
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 24px;
  background: #fff;
  transition: 0.3s;
}
.card-offer:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12);
  transform: translateY(-4px);
}

/* Testimonials */
.testimonial-box {
  min-height: 180px;
  max-width: 800px;
  background: #f3f4f6;
  border-radius: 12px;
}
</style>
