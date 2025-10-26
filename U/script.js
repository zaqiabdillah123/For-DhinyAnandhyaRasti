window.addEventListener('DOMContentLoaded', () => {
  const musik = document.getElementById('musik');
  const btn = document.getElementById('mulaiBtn');
  const beranda = document.getElementById('beranda');
  const kejutan = document.getElementById('kejutan');
  const slides = document.querySelectorAll('.slide');

  // Musik otomatis mulai saat halaman beranda muncul
  musik.play().catch(() => {
    // Jika browser memblokir autoplay, mute dulu
    musik.muted = true;
    musik.play().then(() => {
      console.log("Musik autoplay dalam mode muted");
    });
  });

  // Tombol mulai hanya untuk menampilkan slides
  btn.addEventListener('click', () => {
    btn.disabled = true; // nonaktifkan tombol

    // Sembunyikan halaman beranda, tampilkan halaman kejutan
    beranda.classList.add('hidden');
    kejutan.classList.remove('hidden');

    // Tampilkan slides satu per satu
    slides.forEach((slide, i) => {
      setTimeout(() => {
        slide.style.opacity = '1';
        slide.style.transform = 'translateY(0)';
        const teks = slide.querySelector('.teks');
        teks.style.opacity = '1';
      }, i * 4000); // Delay 4 detik tiap slide
    });
  });
});
