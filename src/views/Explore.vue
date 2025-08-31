<template>
  <div class="explore min-vh-100 d-flex flex-column">
    <!-- Hero Section -->
    <section class="hero bg-warning py-5">
      <div class="container d-flex flex-column flex-lg-row align-items-center justify-content-between gap-4">
        <div class="text-center text-lg-start">
          <h1 class="fw-bold display-5 mb-3">Explore Countries 🌍</h1>
          <p class="lead mb-0">Cari informasi negara di seluruh dunia lengkap dengan bendera, populasi, bahasa, dan banyak lagi.</p>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/869/869869.png" alt="world" class="img-fluid" style="max-width: 200px" />
      </div>
    </section>

    <!-- Content Section -->
    <section class="flex-grow-1 py-5">
      <div class="container">
        <!-- Search -->
        <div class="row mb-4 justify-content-center">
          <div class="col-md-6">
            <div class="input-group shadow-sm rounded-pill overflow-hidden">
              <input v-model="searchQuery" @keyup.enter="fetchCountries" type="text" class="form-control border-0" placeholder="🔍 Search for a country..." />
              <button class="btn btn-purple px-4" @click="fetchCountries">Search</button>
            </div>
          </div>
        </div>

        <!-- Grid Countries -->
        <div class="row g-4">
          <div v-for="c in countries" :key="c.cca3" class="col-12 col-sm-6 col-md-4 col-lg-3">
            <div class="card h-100 shadow border-0 rounded-4 overflow-hidden country-card-inner">
              <img :src="c.flags?.png" class="card-img-top" alt="flag" />
              <div class="card-body">
                <h6 class="fw-bold">{{ c.name.common }}</h6>
                <p class="mb-1"><strong>Region:</strong> {{ c.region }}</p>
                <p class="mb-2">
                  <strong>Population:</strong>
                  {{ c.population.toLocaleString() }}
                </p>
                <button class="btn btn-outline-purple btn-sm mt-auto rounded-pill" @click="selectCountry(c)" data-bs-toggle="modal" data-bs-target="#countryModal">More Info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Modal -->
    <div class="modal fade" id="countryModal" tabindex="-1" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content shadow-lg rounded-4">
          <div class="modal-header border-0">
            <h5 class="modal-title fw-bold">
              {{ selectedCountry?.name.common }}
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body" v-if="selectedCountry">
            <img :src="selectedCountry.flags?.png" alt="flag" class="img-fluid rounded mb-3" />
            <p><strong>Capital:</strong> {{ selectedCountry.capital?.[0] }}</p>
            <p><strong>Region:</strong> {{ selectedCountry.region }}</p>
            <p>
              <strong>Population:</strong>
              {{ selectedCountry.population.toLocaleString() }}
            </p>
            <p>
              <strong>Languages:</strong>
              {{ Object.values(selectedCountry.languages || {}).join(", ") }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Explore",
  data() {
    return {
      countries: [],
      searchQuery: "",
      selectedCountry: null,
    };
  },
  methods: {
    async fetchCountries() {
      try {
        const query = this.searchQuery.trim() || "indonesia";
        const res = await fetch(`https://restcountries.com/v3.1/name/${query}`);
        if (!res.ok) throw new Error("Failed to fetch");
        this.countries = await res.json();
      } catch (e) {
        console.error(e);
        this.countries = [];
      }
    },
    selectCountry(c) {
      this.selectedCountry = c;
    },
  },
  mounted() {
    this.fetchCountries();
  },
};
</script>

<style scoped>
.hero {
  background: linear-gradient(135deg, #fbbf24, #f59e0b);
  color: #111827;
}

.btn-purple {
  background: #7e22ce;
  color: #fff;
  border: none;
}
.btn-purple:hover {
  background: #9333ea;
}

.btn-outline-purple {
  border: 1px solid #7e22ce;
  color: #7e22ce;
}
.btn-outline-purple:hover {
  background: #7e22ce;
  color: #fff;
}

/* Card Style */
.country-card-inner {
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  display: flex;
  flex-direction: column;
}
.country-card-inner:hover {
  transform: translateY(-6px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}
.country-card-inner img {
  height: 140px;
  object-fit: cover;
}
</style>
