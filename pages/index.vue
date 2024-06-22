<!DOCTYPE html>
<html lang="id">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Resep Makanan</title>
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Halaman Utama -->
    <header>
        <h1>Resep Makanan</h1>
        <nav>
            <a href="#home">Home</a>
            <a href="#search">Pencarian</a>
            <a href="#categories">Kategori</a>
            <a href="#profile">Profil</a>
            <a href="#upload">Unggah Resep</a>
        </nav>
    </header>
    
    <main id="home">
        <h2>Resep Terbaru</h2>
        <!-- Daftar resep terbaru -->
        
        <h2>Resep Populer</h2>
        <!-- Daftar resep populer -->
    </main>
    
    <!-- Halaman Pencarian -->
    <section id="search">
        <h2>Pencarian Resep</h2>
        <input type="text" placeholder="Cari resep...">
        <button>Cari</button>
        <!-- Hasil pencarian -->
    </section>
    
    <!-- Halaman Kategori -->
    <section id="categories">
        <h2>Kategori Resep</h2>
        <!-- Daftar kategori -->
    </section>
    
    <!-- Halaman Profil Pengguna -->
    <section id="profile">
        <h2>Profil Pengguna</h2>
        <!-- Informasi profil pengguna -->
    </section>
    
    <!-- Halaman Unggah Resep -->
    <section id="upload">
        <h2>Unggah Resep</h2>
        <form>
            <label for="title">Judul Resep</label>
            <input type="text" id="title" name="title">
            
            <label for="image">Gambar Resep</label>
            <input type="file" id="image" name="image">
            
            <label for="description">Deskripsi Resep</label>
            <textarea id="description" name="description"></textarea>
            
            <label for="ingredients">Bahan</label>
            <textarea id="ingredients" name="ingredients"></textarea>
            
            <label for="steps">Langkah-langkah</label>
            <textarea id="steps" name="steps"></textarea>
            
            <button type="submit">Unggah</button>
        </form>
    </section>
    
    <!-- Halaman Tentang Kami -->
    <section id="about">
        <h2>Tentang Kami</h2>
        <!-- Informasi tentang aplikasi -->
    </section>
    
    <!-- Halaman Bantuan dan Dukungan -->
    <section id="help">
        <h2>Bantuan dan Dukungan</h2>
        <!-- FAQ dan kontak dukungan -->
    </section>
    
    <!-- Halaman Pengaturan -->
    <section id="settings">
        <h2>Pengaturan</h2>
        <!-- Pengaturan akun dan aplikasi -->
    </section>
    
    <footer>
        <p>&copy; 2024 Resep Makanan. Semua hak cipta dilindungi.</p>
    </footer>
</body>
</html>
