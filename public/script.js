document.addEventListener('DOMContentLoaded', () => {
  emailjs.init("-Nw1j0pJU4DnYanCi");

  const grid = document.getElementById('apps-grid');

  const apps = [
    { name: "X", url: "https://x.com/TormenteraXpres", icon: "𝕏" },
    { name: "Facebook", url: "https://facebook.com/TormenterasExpress", icon: "f" },
    { name: "Instagram", url: "https://instagram.com/tormenteras_express", icon: "📷" },
    { name: "TikTok", url: "https://tiktok.com/@Tormenteras.expre", icon: "♪" },
    { name: "YouTube", url: "https://youtube.com/@tormenterasexpress", icon: "▶" },
    { name: "Truth Social", url: "https://truthsocial.com/@TormenterasExpress", icon: "T" }
  ];

  grid.innerHTML = '';

  apps.forEach(app => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <span class="icon">${app.icon}</span>
      <h3>${app.name}</h3>
      <a href="${app.url}" target="_blank" class="btn">Ir ahora →</a>
    `;
    grid.appendChild(card);
  });

  // Botón grande "Contáctanos"
  const headerBtn = document.getElementById('contact-btn-header');
  if (headerBtn) {
    headerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showContactModal();
    });
  }
});

function showContactModal() {
  const modalHTML = `
    <div id="contact-modal" style="position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.95);display:flex;align-items:center;justify-content:center;z-index:10000;">
      <div style="background:rgba(255,255,255,0.12);backdrop-filter:blur(20px);padding:2.5rem;border-radius:24px;width:90%;max-width:520px;border:2px solid rgba(255,255,255,0.3);">
        <h2 style="color:white;margin-bottom:2rem;text-align:center;">Contáctanos</h2>
        
        <button onclick="showEmailForm()" style="width:100%;padding:1.2rem;background:#00ffaa;color:black;border:none;border-radius:50px;font-weight:bold;font-size:1.1rem;margin-bottom:1rem;">
          ✉️ Enviar mensaje por Email
        </button>
        
        <a href="tel:7876386000" style="display:block;width:100%;padding:1.2rem;background:transparent;color:white;border:2px solid #00ffaa;border-radius:50px;text-align:center;text-decoration:none;font-weight:bold;font-size:1.1rem;">
          📞 Llamar al 787-638-6000
        </a>
        
        <button onclick="closeModal()" style="width:100%;padding:1rem;background:transparent;color:white;border:2px solid white;border-radius:50px;margin-top:1.5rem;">Cancelar</button>
      </div>
    </div>
  `;
  document.body.insertAdjacentHTML('beforeend', modalHTML);
}

function showEmailForm() {
  closeModal();
  alert("Formulario de EmailJS se abrirá aquí.\n\nPodemos mejorarlo más adelante.");
}

function closeModal() {
  const modal = document.getElementById('contact-modal');
  if (modal) modal.remove();
}