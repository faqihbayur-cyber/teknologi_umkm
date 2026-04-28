document.addEventListener("DOMContentLoaded", function(){

  const el = document.getElementById("logo");
  if(!el) return;

  el.innerHTML = `
    <div class="logo-umkm logo-new">
      <span class="text">Teknologi</span><span class="dot">.</span><span class="umkm">UMKM</span>
    </div>
  `;

});