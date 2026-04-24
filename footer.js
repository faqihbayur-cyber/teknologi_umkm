document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-container">

      <div class="footer-grid">

        <!-- BRAND -->
        <div class="footer-brand">
          <img src="logo.png" alt="logo">
          <p>Solusi digital untuk membantu UMKM berkembang lebih cepat dengan teknologi modern.</p>
        </div>

        <!-- KONTAK -->
        <div class="footer-section">
          <h3>Hubungi Kami</h3>
          <ul>
            <li>
              <a href="https://wa.me/62895604273200" target="_blank">
                <i class="fa-brands fa-whatsapp wa"></i> 0895604273200
              </a>
            </li>
            <li>
              <a href="tel:0895604273200">
                <i class="fa-solid fa-phone phone"></i> 0895604273200
              </a>
            </li>
            <li>
              <a href="mailto:faqihbayur@gmail.com">
                <i class="fa-solid fa-envelope email"></i> faqihbayur@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <!-- LAYANAN -->
        <div class="footer-section">
          <h3>Layanan Kami</h3>
          <ul>
            <li>Jasa pembuatan website</li>
            <li>Pembuatan aplikasi Android</li>
            <li>Konten sosial media marketing</li>
          </ul>
        </div>

        <!-- SOSMED -->
        <div class="footer-section">
          <h3>Social Media</h3>
          <div class="socials">

            <a href="https://instagram.com/" target="_blank" class="ig">
              <i class="fa-brands fa-instagram"></i>
            </a>

            <a href="https://facebook.com/" target="_blank" class="fb">
              <i class="fa-brands fa-facebook-f"></i>
            </a>

            <a href="https://tiktok.com/" target="_blank" class="tt">
              <i class="fa-brands fa-tiktok"></i>
            </a>

          </div>
        </div>

      </div>

      <div class="footer-bottom">
        ©2025 teknologi.umkm All rights reserved
      </div>

    </div>
  `;
});