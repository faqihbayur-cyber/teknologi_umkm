document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");

  nav.innerHTML = `
    <!-- BUTTON FLOAT -->
    <div class="nav-fab" id="navToggle">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9.195 18.44c1.25.714 2.805-.189 2.805-1.629v-2.34l6.945 3.968c1.25.715 2.805-.188 2.805-1.628V8.69c0-1.44-1.555-2.343-2.805-1.628L12 11.029v-2.34c0-1.44-1.555-2.343-2.805-1.628l-7.108 4.061c-1.26.72-1.26 2.536 0 3.256l7.108 4.061Z"/>
      </svg>
    </div>

    <!-- OVERLAY -->
    <div class="nav-overlay" id="navOverlay"></div>

    <!-- DRAWER -->
    <div class="nav-drawer" id="navDrawer">
      <h2>Menu</h2>

      <a href="home.html" class="nav-link">HOME</a>
      <a href="about.html" class="nav-link">TENTANG KAMI</a>

      <!-- 🔥 DROPDOWN -->
      <div class="nav-dropdown">
        <div class="nav-link nav-toggle" id="layananToggle">
          LAYANAN
        </div>

        <div class="nav-submenu" id="layananMenu">
          <a href="website.html">Pembuatan Website</a>
          <a href="aplikasi.html">Pembuatan Aplikasi</a>
          <a href="maintenance.html">Maintenance</a>
          <a href="marketing.html">Digital Marketing</a>
        </div>
      </div>

      <a href="kontak.html" class="nav-link">KONTAK</a>
      <a href="testing.html" class="nav-link">TESTING WEB / APP</a>
    </div>
  `;

  const toggleBtn = document.getElementById("navToggle");
  const overlay = document.getElementById("navOverlay");
  const drawer = document.getElementById("navDrawer");

  function toggleNav() {
    drawer.classList.toggle("open");
    overlay.classList.toggle("show");
    document.body.classList.toggle("nav-open");
  }

  toggleBtn.addEventListener("click", toggleNav);
  overlay.addEventListener("click", toggleNav);

  /* 🔥 DROPDOWN LOGIC */
  const layananToggle = document.getElementById("layananToggle");
  const layananMenu = document.getElementById("layananMenu");

  layananToggle.addEventListener("click", () => {
    layananMenu.classList.toggle("open");
  });

  /* ACTIVE LINK */
  const links = document.querySelectorAll(".nav-link");
  const current = window.location.pathname.split("/").pop();

  links.forEach(link => {
    if (link.getAttribute("href") === current) {
      link.classList.add("active");
    }
  });
});