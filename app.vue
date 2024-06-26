<template>
  <div>
    <h1>Resep Makanan</h1>
    <nav>
      <nuxt-link to="/">Home</nuxt-link>
      <nuxt-link to="/search">Pencarian</nuxt-link>
      <nuxt-link to="/categories">Kategori</nuxt-link>
      <nuxt-link to="/profile">Profil</nuxt-link>
      <nuxt-link to="/upload">Unggah Resep</nuxt-link>
    </nav>

    <section>
      <h2>Resep Terbaru</h2>
      <!-- Daftar resep terbaru -->

      <h2>Resep Populer</h2>
      <!-- Daftar resep populer -->
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomePage'
}
</script>

<style scoped>
div {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: #FFF3E0; /* Warna latar belakang yang lebih lembut */
}

h1 {
  color: #FF5733; /* Warna orange */
  text-align: center;
  margin-bottom: 20px;
}

nav {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  background-color: #FF5733; /* Warna orange untuk latar belakang navigasi */
  padding: 10px;
  border-radius: 5px;
}

nav nuxt-link {
  margin: 0 10px;
  color: white; /* Warna putih untuk teks link */
  text-decoration: none;
  font-weight: bold;
  letter-spacing: 1.5px; /* Jarak antar huruf */
}

nav nuxt-link:hover {
  text-decoration: underline;
}

section {
  margin-top: 20px;
}

h2 {
  color: #FF5733; /* Warna orange */
  margin-bottom: 10px;
}
</style>
