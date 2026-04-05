document.addEventListener('DOMContentLoaded', () => {
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

  // Botón Contáctanos
  const headerBtn = document.getElementById('contact-btn-header');
  if (headerBtn) {
    headerBtn.addEventListener('click', function(e) {
      e.preventDefault();
      showContactModal();
    });
  }
});

function showContactModal() {
  alert("Contáctanos\n\n• Enviar Email → Próximamente\n• Llamar → 787-638-6000");
}