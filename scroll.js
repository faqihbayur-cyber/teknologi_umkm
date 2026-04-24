document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("scrollTop");

  container.innerHTML = `
    <div class="scroll-progress" id="scrollBtn">
      
      <svg class="progress-ring" width="60" height="60">
        <defs>
          <linearGradient id="gradientStroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stop-color="#10b981"/>
            <stop offset="100%" stop-color="#059669"/>
          </linearGradient>
        </defs>

        <circle class="bg" cx="30" cy="30" r="26"></circle>
        <circle class="progress" cx="30" cy="30" r="26"></circle>
      </svg>

      <div class="arrow">
        <svg viewBox="0 0 24 24">
          <path d="M5 15l7-7 7 7" 
            stroke="white" 
            stroke-width="2" 
            fill="none" 
            stroke-linecap="round" 
            stroke-linejoin="round"/>
        </svg>
      </div>

    </div>
  `;

  const btn = document.getElementById("scrollBtn");
  const progressCircle = document.querySelector(".progress");

  const radius = 26;
  const circumference = 2 * Math.PI * radius;

  // setup awal
  progressCircle.style.strokeDasharray = circumference;
  progressCircle.style.strokeDashoffset = circumference;

  function updateScroll() {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;

    // hindari NaN kalau halaman pendek
    const progress = docHeight > 0 ? scrollTop / docHeight : 0;

    const offset = circumference - progress * circumference;
    progressCircle.style.strokeDashoffset = offset;

    // show / hide
    if (scrollTop > 200) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  }

  window.addEventListener("scroll", updateScroll);

  // klik scroll ke atas
  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });

  // trigger awal (biar langsung update kalau reload di tengah halaman)
  updateScroll();
});