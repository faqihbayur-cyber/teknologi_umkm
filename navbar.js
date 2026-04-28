document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");

  nav.innerHTML = `
    <!-- BUTTON FLOAT -->
<div class="nav-fab" id="navToggle">
  <div class="hamburger">
    <span></span>
    <span></span>
    <span></span>
  </div>
</div>

    <!-- OVERLAY -->
    <div class="nav-overlay" id="navOverlay"></div>

    <!-- DRAWER -->
    <div class="nav-drawer" id="navDrawer">
      <h2>Menu</h2>

      <a href="home.html" class="nav-link">HOME</a>
      <a href="about.html" class="nav-link">TENTANG KAMI</a>

      <!-- DROPDOWN -->
      <div class="nav-dropdown">
        <div class="nav-link nav-toggle" id="layananToggle">
          LAYANAN
        </div>

        <div class="nav-submenu" id="layananMenu">
          <a href="website.html">Pembuatan Website</a>
          <a href="aplikasi.html">Pembuatan Aplikasi</a>
          <a href="marketing.html">Sosial Media Marketing</a>
          <a href="maintenance.html">Perbaikan (Web & App)</a>
        </div>
      </div>

      <a href="kontak.html" class="nav-link">KONTAK</a>
      <a href="testing.html" class="nav-link">TESTING WEB / APP</a>

      <!-- 🔥 WHATSAPP -->
       <a id="waLink" target="_blank" class="nav-link wa-link">
        <span class="wa-icon">
          <svg viewBox="0 0 24 24">
            <path d="M20 3.5A11.8 11.8 0 0 0 12 1 11 11 0 0 0 1 12c0 2 .5 3.9 1.4 5.6L1 23l5.5-1.4A11 11 0 0 0 12 23c6 0 11-5 11-11 0-2.9-1.1-5.5-3-7.5zM12 21c-1.7 0-3.3-.5-4.7-1.3l-.3-.2-3.3.8.9-3.2-.2-.3A9 9 0 1 1 12 21zm5-6.7c-.3-.2-1.7-.8-2-.9-.3-.1-.5-.2-.7.2s-.8.9-1 .9-.4 0-.7-.2a7.5 7.5 0 0 1-2.2-2c-.3-.5 0-.7.2-.9.2-.2.3-.4.5-.6.2-.2.2-.3.3-.5.1-.2 0-.4 0-.6s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.6.1-.9.4s-1.2 1.2-1.2 2.9 1.2 3.3 1.4 3.5c.2.2 2.4 3.7 5.8 5 .8.3 1.4.5 1.9.6.8.1 1.5.1 2-.1.6-.2 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4z"/>
          </svg>
        </span>
        NGOBROL SANTAI
      </a>

    </div>
  `;

  const toggleBtn = document.getElementById("navToggle");
  const overlay = document.getElementById("navOverlay");
  const drawer = document.getElementById("navDrawer");
  
  function openNav(){
    drawer.classList.add("open");
    overlay.classList.add("show");
    document.body.classList.add("nav-open");
  
    toggleBtn.classList.add("active"); // 🔥 tombol miring
  }
  
  function closeNav(){
    drawer.classList.remove("open");
    overlay.classList.remove("show");
    document.body.classList.remove("nav-open");
  
    toggleBtn.classList.remove("active"); // 🔥 reset tombol
  }
  
  // klik tombol = toggle
  toggleBtn.addEventListener("click", () => {
    if(drawer.classList.contains("open")){
      closeNav();
    }else{
      openNav();
    }
  });
  
  // klik overlay = selalu close
  overlay.addEventListener("click", closeNav);

  // DROPDOWN
  const layananToggle = document.getElementById("layananToggle");
  const layananMenu = document.getElementById("layananMenu");

  layananToggle.addEventListener("click", () => {
    layananMenu.classList.toggle("open");
  });

  // ACTIVE LINK
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});
document.addEventListener("DOMContentLoaded", function () {

  const wa = document.getElementById("waLink");

  const nomor = "6281223836601";
  const pesan = "Mau tanya tentang Website/Aplikasi";

  const url = `https://wa.me/${nomor}?text=${encodeURIComponent(pesan)}`;

  wa.href = url;

});