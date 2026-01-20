function toggleMenu() {
    const navbar = document.querySelector('#navbar');
    // Cek apakah menu sedang terbuka atau tertutup
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
    } else {
        navbar.classList.add('active');
    }
}

// Fungsi untuk menutup menu otomatis saat link diklik (Mobile)
function closeMenu() {
    const navbar = document.querySelector('#navbar');
    navbar.classList.remove('active');
}

// Mengganti warna navbar saat scroll
function scrolll() {
    const opener = document.getElementById('opener');
    if (window.scrollY > 50) {
        opener.style.backgroundColor = "rgba(48, 124, 98, 0.95)"; // Sedikit transparan
        opener.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        opener.style.backgroundColor = "#7fffd4";
        opener.style.boxShadow = "none";
    }
}